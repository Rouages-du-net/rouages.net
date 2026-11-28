// Calculs du module « Linux : fichiers, droits, comptes et SSH » : résoudre
// un chemin (absolu, relatif, ~, . et ..), écrire les droits sous leurs
// différentes formes (rwxr-x---, 750, u=rwx,g=rx,o=, 111 101 000), appliquer
// une commande chmod, et décider si un compte peut lire, modifier ou exécuter
// un fichier. Faits sourcés : voir docs/sources/linux.md.

// ——— Chemins ———

/**
 * Résout `chemin` depuis le dossier courant `courant` (absolu), comme le
 * shell : « / » au début = depuis la racine, « ~ » = dossier personnel,
 * « . » = ici, « .. » = dossier parent (et « .. » de la racine reste la racine).
 */
export function resoudre(courant: string, chemin: string, maison: string): string {
  let c = chemin.trim();
  if (c === '' ) return maison;
  if (c === '~' || c.startsWith('~/')) c = maison + c.slice(1);
  const depart = c.startsWith('/') ? [] : courant.split('/').filter(Boolean);
  for (const morceau of c.split('/')) {
    if (morceau === '' || morceau === '.') continue;
    if (morceau === '..') depart.pop();
    else depart.push(morceau);
  }
  return '/' + depart.join('/');
}

/** Les étapes de la résolution d'un chemin, en phrases, pour la légende. */
export function expliquer(courant: string, chemin: string, maison: string): string[] {
  let c = chemin.trim();
  const etapes: string[] = [];
  if (c === '') return [`Sans argument, cd ramène au dossier personnel : ${maison}.`];
  if (c === '~' || c.startsWith('~/')) {
    etapes.push(`« ~ » se remplace par le dossier personnel, ${maison}.`);
    c = maison + c.slice(1);
  }
  let pos = c.startsWith('/') ? '/' : courant;
  etapes.push(c.startsWith('/') ? 'Le chemin commence par « / » : il est absolu, on part de la racine.' : `Le chemin est relatif : on part du dossier courant, ${courant}.`);
  for (const m of c.split('/')) {
    if (m === '') continue;
    if (m === '.') { etapes.push('« . » veut dire « ici » : on ne bouge pas.'); continue; }
    const avant = pos;
    pos = resoudre(pos, m, maison);
    etapes.push(m === '..' ? (avant === '/' ? '« .. » depuis la racine : on y reste, il n’y a rien au-dessus.' : `« .. » remonte au dossier parent : ${pos}.`) : `On entre dans ${m} : ${pos}.`);
  }
  return etapes;
}

/** Chemin à afficher dans l'invite : « ~ » remplace le dossier personnel. */
export function abreger(chemin: string, maison: string): string {
  if (chemin === maison) return '~';
  if (chemin.startsWith(maison + '/')) return '~' + chemin.slice(maison.length);
  return chemin;
}

// ——— Droits ———

export const CLASSES = ['u', 'g', 'o'] as const;
export const NOMS_CLASSES = { u: 'propriétaire', g: 'groupe', o: 'autres' } as const;
const LETTRES = ['r', 'w', 'x'] as const;
const VALEURS = { r: 4, w: 2, x: 1 } as const;

/** Les 9 bits de droits (0 à 0o777) écrits comme `ls -l` : rwxr-x---. */
export function enLettres(mode: number): string {
  let s = '';
  for (let i = 0; i < 9; i++) s += (mode >> (8 - i)) & 1 ? 'rwx'[i % 3] : '-';
  return s;
}

/** Les droits en octal, sur trois chiffres : 750. */
export function enOctal(mode: number): string {
  return (mode & 0o777).toString(8).padStart(3, '0');
}

/** Les droits en binaire, par paquets de trois : 111 101 000. */
export function enBinaire(mode: number): string {
  const b = (mode & 0o777).toString(2).padStart(9, '0');
  return `${b.slice(0, 3)} ${b.slice(3, 6)} ${b.slice(6)}`;
}

/** Les droits sous forme symbolique absolue de chmod : u=rwx,g=rx,o=. */
export function enSymbolique(mode: number): string {
  return CLASSES.map((c, i) => {
    const trio = (mode >> (6 - 3 * i)) & 7;
    return `${c}=${LETTRES.filter((l) => trio & VALEURS[l]).join('')}`;
  }).join(',');
}

/** Lit des droits écrits en octal (« 750 », « 0750 ») ; null si invalide. */
export function depuisOctal(texte: string): number | null {
  const t = texte.trim();
  if (!/^0?[0-7]{3}$/.test(t)) return null;
  return parseInt(t, 8);
}

/** Lit des droits écrits comme ls -l (« rwxr-x--- », avec ou sans type) ; null si invalide. */
export function depuisLettres(texte: string): number | null {
  let t = texte.trim();
  if (t.length === 10) t = t.slice(1);
  if (!/^([r-][w-][x-]){3}$/.test(t)) return null;
  let mode = 0;
  for (let i = 0; i < 9; i++) if (t[i] !== '-') mode |= 1 << (8 - i);
  return mode;
}

/**
 * Applique un mode de chmod à des droits existants : octal (« 640 ») ou
 * symbolique (« g+w », « o-rwx », « u=rw,go=r », « a+x », « +x »).
 * Pour « +x » sans classe, chmod tient compte du masque (umask) : ici on le
 * suppose à 022, la valeur courante, qui n'enlève rien à x.
 * Renvoie null si la commande n'est pas comprise.
 */
export function appliquerChmod(mode: number, commande: string): number | null {
  const octal = depuisOctal(commande);
  if (octal !== null) return octal;
  let m = mode & 0o777;
  for (const clause of commande.trim().split(',')) {
    const r = /^([ugoa]*)([+\-=])([rwx]*)$/.exec(clause);
    if (!r) return null;
    const [, qui, op, quoi] = r;
    const classes = qui === '' || qui.includes('a') ? CLASSES : CLASSES.filter((c) => qui.includes(c));
    let trio = 0;
    for (const l of quoi) trio |= VALEURS[l as 'r' | 'w' | 'x'];
    for (const c of classes) {
      const decalage = 6 - 3 * CLASSES.indexOf(c);
      let bits = trio << decalage;
      // Sans classe, chmod applique le masque : avec umask 022, « +w » ne touche que le propriétaire.
      if (qui === '') bits &= ~0o022;
      if (op === '+') m |= bits;
      else if (op === '-') m &= ~bits;
      else {
        // « = » efface tout le trio, puis remet les bits demandés ; sans classe,
        // ceux du masque ne sont pas remis (umask 022 : « =rw » donne 644).
        m = (m & ~(7 << decalage)) | bits;
      }
    }
  }
  return m;
}

// ——— Comptes et accès ———

export interface Compte {
  nom: string;
  uid: number;
  groupes: string[]; // groupe principal en premier
}

export interface Fichier {
  chemin: string;
  proprietaire: string;
  groupe: string;
  mode: number;
  dossier?: boolean;
}

export type Operation = 'r' | 'w' | 'x';
export const NOMS_OPERATIONS: Record<Operation, string> = { r: 'lire', w: 'modifier', x: 'exécuter' };

export interface Decision {
  permis: boolean;
  /** Classe de droits qui s'applique : u, g, o, ou « root ». */
  classe: 'u' | 'g' | 'o' | 'root';
  raisons: string[];
}

/**
 * Le noyau choisit UNE classe de droits, dans l'ordre : propriétaire, sinon
 * groupe, sinon autres, et ne regarde que celle-là (POSIX, « File Access
 * Permissions »). Root (UID 0) passe outre la lecture et l'écriture ; pour
 * exécuter un fichier, il faut qu'au moins une classe ait le droit x.
 */
export function acces(compte: Compte, f: Fichier, op: Operation): Decision {
  const trio = (c: 'u' | 'g' | 'o') => (f.mode >> (6 - 3 * CLASSES.indexOf(c))) & 7;
  const a = (c: 'u' | 'g' | 'o') => (trio(c) & VALEURS[op]) !== 0;
  const verbe = NOMS_OPERATIONS[op];
  if (compte.uid === 0) {
    if (op === 'x' && !f.dossier && (f.mode & 0o111) === 0)
      return { permis: false, classe: 'root', raisons: ['root (UID 0) passe outre les droits de lecture et d’écriture.', 'Mais pour exécuter un fichier, il faut qu’au moins une classe ait le droit x : ici, aucune. Même root ne peut pas.'] };
    return { permis: true, classe: 'root', raisons: [`root (UID 0) passe outre les droits : il peut ${verbe} sans que le noyau regarde ${enLettres(f.mode)}.`] };
  }
  const raisons: string[] = [];
  let classe: 'u' | 'g' | 'o';
  if (compte.nom === f.proprietaire) {
    classe = 'u';
    raisons.push(`${compte.nom} est propriétaire de ${f.chemin} : seuls les droits du propriétaire (${enLettres(f.mode).slice(0, 3)}) comptent.`);
  } else if (compte.groupes.includes(f.groupe)) {
    classe = 'g';
    raisons.push(`${compte.nom} n’est pas propriétaire, mais fait partie du groupe ${f.groupe} : seuls les droits du groupe (${enLettres(f.mode).slice(3, 6)}) comptent.`);
  } else {
    classe = 'o';
    raisons.push(`${compte.nom} n’est ni propriétaire ni dans le groupe ${f.groupe} : ce sont les droits des autres (${enLettres(f.mode).slice(6)}) qui comptent.`);
  }
  const permis = a(classe);
  const lettre = op;
  raisons.push(permis ? `La lettre ${lettre} est présente : ${compte.nom} peut ${verbe}.` : `Pas de ${lettre} à cet endroit : ${compte.nom} ne peut pas ${verbe}.`);
  if (!permis && classe !== 'o' && a('o'))
    raisons.push('Les autres, eux, ont ce droit : le noyau ne cumule pas les classes, il s’arrête à la première qui correspond.');
  return { permis, classe, raisons };
}

/** Découpe une ligne de /etc/passwd en ses 7 champs ; null si elle n'en a pas 7. */
export function lignePasswd(ligne: string): string[] | null {
  const champs = ligne.split(':');
  return champs.length === 7 ? champs : null;
}
