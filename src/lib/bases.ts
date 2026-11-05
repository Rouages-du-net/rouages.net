// Calculs du module « Compter en binaire, octal et hexadécimal ».
// Entiers positifs seulement ; aucune dépendance au DOM.

export const CHIFFRES = '0123456789ABCDEF';

export const NOMS_BASES: Record<number, string> = {
  2: 'binaire',
  8: 'octal',
  10: 'décimal',
  16: 'hexadécimal',
};

/** Écrit n en base b (chiffres hexadécimaux en majuscules). */
export function versBase(n: number, b: number, largeur = 1): string {
  let s = '';
  let q = Math.max(0, Math.floor(n));
  do {
    s = CHIFFRES[q % b] + s;
    q = Math.floor(q / b);
  } while (q > 0);
  return s.padStart(largeur, '0');
}

/** Lit un nombre écrit en base b ; null si un chiffre n'existe pas dans cette base. */
export function depuisBase(texte: string, b: number): number | null {
  const s = texte.trim().toUpperCase();
  if (!s) return null;
  let n = 0;
  for (const c of s) {
    const v = CHIFFRES.indexOf(c);
    if (v < 0 || v >= b) return null;
    n = n * b + v;
  }
  return n;
}

export interface Division {
  dividende: number;
  quotient: number;
  reste: number;
}

/** Divisions successives par b, de n jusqu'à un quotient nul. */
export function divisions(n: number, b: number): Division[] {
  const lignes: Division[] = [];
  let q = Math.floor(n);
  do {
    lignes.push({ dividende: q, quotient: Math.floor(q / b), reste: q % b });
    q = Math.floor(q / b);
  } while (q > 0);
  return lignes;
}

export interface Terme {
  chiffre: string;
  rang: number;
  poids: number;
  valeur: number;
}

/** Décompose un nombre écrit en base b : chaque chiffre fois son poids (b puissance rang). */
export function poids(texte: string, b: number): Terme[] {
  const s = texte.trim().toUpperCase();
  return [...s].map((c, i) => {
    const rang = s.length - 1 - i;
    const p = b ** rang;
    return { chiffre: c, rang, poids: p, valeur: CHIFFRES.indexOf(c) * p };
  });
}

/** Découpe une chaîne en groupes de `taille` caractères en partant de la droite. */
export function grouper(texte: string, taille: number): string[] {
  const groupes: string[] = [];
  for (let fin = texte.length; fin > 0; fin -= taille) groupes.unshift(texte.slice(Math.max(0, fin - taille), fin));
  return groupes;
}

/** Les droits Unix rwx correspondant aux 9 derniers bits (ex. 493 = 755 en octal → rwxr-xr-x). */
export function droitsUnix(n: number): string {
  const lettres = 'rwxrwxrwx';
  let s = '';
  for (let i = 0; i < 9; i++) s += (n >> (8 - i)) & 1 ? lettres[i] : '-';
  return s;
}

/** Écrit un exposant en chiffres en exposant Unicode (2³). */
export function exposant(n: number): string {
  const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  return String(n).replace(/\d/g, (d) => sup[Number(d)]);
}

/** Nombre avec espaces fines entre milliers (16 384). */
export const fr = (n: number) => n.toLocaleString('fr-FR');
