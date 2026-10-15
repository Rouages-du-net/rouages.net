// Un mini-shell qui interprète de vraies commandes Linux sur le monde d'un
// chapitre. Les comportements suivent ceux de Linux (messages simplifiés et
// traduits) ; les écarts volontaires sont signalés en commentaire.

import { nettoyer, type Chapitre, type Dossier, type Fichier, type Noeud } from './monde';

export const MANUEL: Record<string, string> = {
  ls: 'ls [-a] [lieu] — liste le contenu d’un lieu (list). -a montre aussi les fichiers cachés, dont le nom commence par un point.',
  cd: 'cd lieu — change de lieu (change directory). « cd .. » remonte d’un cran, « cd ~ » ou « cd » seul ramène à la maison, « cd / » à la racine.',
  pwd: 'pwd — affiche le chemin complet du lieu où tu es (print working directory).',
  cat: 'cat fichier — affiche le contenu d’un fichier (concatenate : il peut en coller plusieurs bout à bout).',
  less: 'less fichier — affiche un fichier page par page. Ici, les fichiers sont courts : less fait comme cat.',
  mv: 'mv source destination — déplace un fichier dans un lieu (move), ou le renomme si la destination est un nouveau nom.',
  rm: 'rm fichier — efface un fichier (remove). Attention : sous Linux, il n’y a pas de corbeille, c’est définitif.',
  touch: 'touch fichier — crée un fichier vide (ou met à jour sa date s’il existe déjà).',
  cp: 'cp source destination — copie un fichier (copy). L’original reste en place.',
  mkdir: 'mkdir lieu — crée un nouveau lieu, c’est-à-dire un dossier (make directory).',
  grep: 'grep [-i] motif fichier... — affiche les lignes qui contiennent le motif. -i ignore les majuscules. « grep mot * » cherche dans tous les fichiers du lieu.',
  man: 'man commande — affiche le manuel d’une commande (manual).',
  clear: 'clear — efface l’écran.',
  aide: 'aide — liste les commandes que tu connais.',
};

// Ce que le jeu (et les chapitres) peuvent consulter ou modifier.
export interface Jeu {
  racine: Dossier;
  cwd: string;
  drapeaux: Set<string>;
  maison: string;
  trouver(chemin: string): Noeud | null;
  existe(chemin: string): boolean;
  compter(lieu: string, prefixe: string): number;
  effacer(chemin: string): void;
}

export class Shell implements Jeu {
  racine: Dossier;
  cwd: string;
  maison: string;
  drapeaux = new Set<string>();
  termine = false;

  constructor(public chapitre: Chapitre) {
    this.racine = chapitre.creerMonde();
    this.maison = chapitre.maison;
    this.cwd = chapitre.maison;
  }

  // Chemin (relatif, absolu, ~, ..) → chemin absolu normalisé.
  resoudre(chemin: string): string {
    if (chemin === '~' || chemin.startsWith('~/')) chemin = this.maison + chemin.slice(1);
    const parts = (chemin.startsWith('/') ? chemin : `${this.cwd}/${chemin}`).split('/');
    const pile: string[] = [];
    for (const p of parts) {
      if (p === '' || p === '.') continue;
      if (p === '..') pile.pop();
      else pile.push(p);
    }
    return '/' + pile.join('/');
  }

  trouver(chemin: string): Noeud | null {
    let n: Noeud = this.racine;
    for (const p of this.resoudre(chemin).split('/').filter(Boolean)) {
      if (n.type !== 'dossier' || !Object.hasOwn(n.enfants, p)) return null;
      n = n.enfants[p];
    }
    return n;
  }

  existe(chemin: string): boolean {
    return this.trouver(chemin) !== null;
  }

  compter(lieu: string, prefixe: string): number {
    const n = this.trouver(lieu);
    return n?.type === 'dossier' ? Object.keys(n.enfants).filter((k) => k.startsWith(prefixe)).length : 0;
  }

  effacer(chemin: string): void {
    const absolu = this.resoudre(chemin);
    const parent = this.trouver(absolu + '/..');
    if (parent?.type === 'dossier') delete parent.enfants[absolu.split('/').pop()!];
  }

  // Raison du premier lieu bloqué traversé par ce chemin, sinon null.
  blocage(chemin: string): string | null {
    let n: Noeud = this.racine;
    for (const p of this.resoudre(chemin).split('/').filter(Boolean)) {
      if (n.type !== 'dossier' || !Object.hasOwn(n.enfants, p)) return null;
      n = n.enfants[p];
      const raison = n.type === 'dossier' ? n.bloque?.(this) : null;
      if (raison) return raison;
    }
    return null;
  }

  invite(): string {
    const ici = this.cwd === this.maison ? '~' : this.cwd.startsWith(this.maison + '/') ? '~' + this.cwd.slice(this.maison.length) : this.cwd;
    return `vous@rouages:${ici}$`;
  }

  // Développe * et ? comme le fait le shell, avant la commande. Les fichiers
  // cachés ne sont pris que si le motif commence par un point.
  developper(mot: string): string[] {
    if (!/[*?]/.test(mot)) return [mot];
    const i = mot.lastIndexOf('/');
    const base = i >= 0 ? mot.slice(0, i + 1) : '';
    const motif = mot.slice(i + 1);
    const lieu = this.trouver(base || '.');
    if (lieu?.type !== 'dossier' || this.blocage(base || '.')) return [mot];
    const re = new RegExp('^' + motif.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
    const trouves = Object.keys(lieu.enfants)
      .filter((n) => re.test(n) && (motif.startsWith('.') || !n.startsWith('.')))
      .sort((a, b) => a.localeCompare(b, 'fr'))
      .map((n) => base + n);
    return trouves.length ? trouves : [mot];
  }

  // Complétion par Tab du dernier mot.
  completer(ligne: string): string {
    const mots = ligne.split(' ');
    const dernier = mots.pop() ?? '';
    if (mots.length === 0) {
      const cmds = this.connues().filter((c) => c.startsWith(dernier));
      return cmds.length === 1 ? cmds[0] + ' ' : ligne;
    }
    const i = dernier.lastIndexOf('/');
    const base = i >= 0 ? dernier.slice(0, i + 1) : '';
    const debut = dernier.slice(i + 1);
    const lieu = this.trouver(base || '.');
    if (!lieu || lieu.type !== 'dossier') return ligne;
    const choix = Object.keys(lieu.enfants).filter(
      (n) => n.startsWith(debut) && (debut.startsWith('.') || !n.startsWith('.')),
    );
    if (choix.length === 0) return ligne;
    if (choix.length > 1) {
      // Comme bash : on complète jusqu'au plus long début commun.
      let commun = choix[0];
      for (const c of choix) while (!c.startsWith(commun)) commun = commun.slice(0, -1);
      return [...mots, base + commun].join(' ');
    }
    const suffixe = lieu.enfants[choix[0]].type === 'dossier' ? '/' : ' ';
    return [...mots, base + choix[0] + suffixe].join(' ');
  }

  connues(): string[] {
    return [...this.chapitre.commandes, 'man', 'clear', 'aide'];
  }

  // Exécute une ligne ; renvoie le texte à afficher, ou null pour « clear ».
  executer(ligne: string): string | null {
    const [cmd, ...bruts] = ligne.trim().split(/\s+/);
    const args = bruts.flatMap((a) => this.developper(a));
    let sortie: string | null;
    if (cmd && cmd !== 'help' && !this.connues().includes(cmd)) {
      sortie = MANUEL[cmd] || cmd === 'sudo'
        ? `${cmd} : tu ne connais pas encore cette commande. Tu l’apprendras plus loin dans l’aventure.`
        : `${cmd} : commande introuvable. Tape « aide » pour la liste.`;
    } else sortie = this.lancer(cmd, args);
    if (sortie === null) return null;
    return [sortie, ...this.verifierEvenements()].filter(Boolean).join('\n\n');
  }

  private lancer(cmd: string, args: string[]): string | null {
    switch (cmd) {
      case '':
        return '';
      case 'aide':
      case 'help':
        return `Commandes connues : ${this.connues().join(', ')}.\nTape « man commande » pour en savoir plus.`;
      case 'man':
        return args[0] && MANUEL[args[0]] && this.connues().includes(args[0])
          ? MANUEL[args[0]]
          : 'Usage : man commande (ex. : man ls)';
      case 'clear':
        return null;
      case 'pwd':
        return this.cwd;
      case 'ls':
        return this.ls(args);
      case 'cd':
        return this.cd(args[0] ?? '~');
      case 'cat':
      case 'less':
        return this.cat(cmd, args);
      case 'mv':
        return this.mv(args);
      case 'cp':
        return this.cp(args);
      case 'rm':
        return this.rm(args);
      case 'touch':
        return this.touch(args);
      case 'mkdir':
        return this.mkdir(args);
      case 'grep':
        return this.grep(args);
      default:
        return '';
    }
  }

  private verifierEvenements(): string[] {
    const messages: string[] = [];
    for (const e of this.chapitre.evenements) {
      if (this.drapeaux.has(e.id) || !e.condition(this)) continue;
      this.drapeaux.add(e.id);
      e.action?.(this);
      messages.push(nettoyer(e.message));
      if (e.id === this.chapitre.final) this.termine = true;
    }
    return messages;
  }

  private ls(args: string[]): string {
    const tous = args.includes('-a');
    const cibles = args.filter((a) => !a.startsWith('-'));
    const cible = cibles[0] ?? '.';
    const n = this.trouver(cible);
    if (!n) return `ls : ${cible} : aucun lieu ou objet de ce nom`;
    const raison = this.blocage(cible);
    if (raison) return raison;
    if (n.type === 'fichier') return cible;
    const noms = Object.entries(n.enfants)
      .filter(([nom]) => tous || !nom.startsWith('.'))
      .sort(([a], [b]) => a.localeCompare(b, 'fr'))
      .map(([nom, e]) => (e.type === 'dossier' ? nom + '/' : nom));
    if (!noms.length && !tous) return '(rien ici… à première vue)';
    return (tous ? ['./', '../', ...noms] : noms).join('    ');
  }

  private cd(cible: string): string {
    const n = this.trouver(cible);
    if (!n) return `cd : ${cible} : aucun lieu de ce nom`;
    if (n.type !== 'dossier') return `cd : ${cible} : ce n’est pas un lieu, c’est un objet (essaie cat)`;
    const raison = this.blocage(cible);
    if (raison) return raison;
    this.cwd = this.resoudre(cible);
    return '';
  }

  private cat(cmd: string, args: string[]): string {
    if (!args.length) return `Usage : ${cmd} fichier`;
    return args
      .map((cible) => {
        const n = this.trouver(cible);
        if (!n) return `${cmd} : ${cible} : aucun objet de ce nom`;
        if (n.type === 'dossier') return `${cmd} : ${cible} : c’est un lieu (essaie cd ou ls)`;
        const raison = this.blocage(cible);
        if (raison) return raison;
        const texte = typeof n.contenu === 'function' ? n.contenu(this) : n.contenu;
        const effet = n.lu?.(this);
        return [texte || '(fichier vide)', effet].filter(Boolean).join('\n\n');
      })
      .join('\n\n');
  }

  // Source → (lieu de destination, nom final), comme mv et cp sous Linux :
  // si la destination est un lieu, l'objet y garde son nom ; sinon, c'est
  // un nouveau nom dans un lieu existant.
  private destination(source: string, dest: string): { lieu: Dossier; chemin: string; nom: string } | string {
    const nomSrc = this.resoudre(source).split('/').pop()!;
    const cible = this.trouver(dest);
    if (cible?.type === 'dossier') return { lieu: cible, chemin: this.resoudre(dest), nom: nomSrc };
    const parent = this.trouver(dest + '/..');
    if (parent?.type !== 'dossier') return `${dest} : destination introuvable`;
    return { lieu: parent, chemin: this.resoudre(dest + '/..'), nom: this.resoudre(dest).split('/').pop()! };
  }

  private mv(args: string[]): string {
    const [source, dest] = args;
    if (!source || !dest) return 'Usage : mv source destination';
    const n = this.trouver(source);
    if (!n) return `mv : ${source} : aucun objet de ce nom`;
    // Simplification du jeu : on déplace des objets, jamais des lieux.
    if (n.type === 'dossier') return `mv : ${source} est un lieu ; dans ce monde, on ne déplace que des objets`;
    if (n.protege?.mv) return n.protege.mv;
    const cible = this.destination(source, dest);
    if (typeof cible === 'string') return `mv : ${cible}`;
    const raison = this.blocage(source) ?? this.blocage(cible.chemin);
    if (raison) return raison;
    if (this.resoudre(source) === `${cible.chemin}/${cible.nom}`.replace('//', '/')) return '';
    this.effacer(source);
    cible.lieu.enfants[cible.nom] = n;
    return '';
  }

  private cp(args: string[]): string {
    const [source, dest] = args;
    if (!source || !dest) return 'Usage : cp source destination';
    const n = this.trouver(source);
    if (!n) return `cp : ${source} : aucun objet de ce nom`;
    if (n.type === 'dossier') return `cp : ${source} est un lieu (il faudrait cp -r, que tu ne connais pas encore)`;
    const cible = this.destination(source, dest);
    if (typeof cible === 'string') return `cp : ${cible}`;
    const raison = this.blocage(source) ?? this.blocage(cible.chemin);
    if (raison) return raison;
    if (this.resoudre(source) === `${cible.chemin}/${cible.nom}`.replace('//', '/'))
      return `cp : ${source} et ${dest} sont le même fichier`;
    const copie: Fichier = { type: 'fichier', contenu: n.contenu };
    cible.lieu.enfants[cible.nom] = copie;
    return '';
  }

  private rm(args: string[]): string {
    if (!args.length) return 'Usage : rm fichier';
    return args
      .map((cible) => {
        const n = this.trouver(cible);
        if (!n) return `rm : ${cible} : aucun objet de ce nom`;
        if (n.type === 'dossier') return `rm : ${cible} est un lieu (il faudrait rm -r, et c’est dangereux : on ne l’utilisera pas ici)`;
        if (n.protege?.rm) return n.protege.rm;
        const raison = this.blocage(cible);
        if (raison) return raison;
        this.effacer(cible);
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }

  private creer(cmd: string, args: string[], fabriquer: () => Noeud): string {
    if (!args.length) return `Usage : ${cmd} nom`;
    return args
      .map((cible) => {
        const parent = this.trouver(cible + '/..');
        if (parent?.type !== 'dossier') return `${cmd} : ${cible} : lieu introuvable`;
        const raison = this.blocage(cible + '/..');
        if (raison) return raison;
        const nom = this.resoudre(cible).split('/').pop()!;
        if (Object.hasOwn(parent.enfants, nom)) return cmd === 'mkdir' ? `mkdir : ${cible} existe déjà` : '';
        parent.enfants[nom] = fabriquer();
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }

  private touch(args: string[]): string {
    return this.creer('touch', args, () => ({ type: 'fichier', contenu: '' }));
  }

  private mkdir(args: string[]): string {
    return this.creer('mkdir', args, () => ({ type: 'dossier', enfants: {} }));
  }

  private grep(args: string[]): string {
    const options = args.filter((a) => a.startsWith('-'));
    const [motif, ...fichiers] = args.filter((a) => !a.startsWith('-'));
    if (!motif || !fichiers.length) return 'Usage : grep motif fichier (ex. : grep poivre livre.txt)';
    const casse = options.includes('-i');
    const cherche = casse ? motif.toLowerCase() : motif;
    const lignes: string[] = [];
    for (const cible of fichiers) {
      const n = this.trouver(cible);
      if (!n) {
        lignes.push(`grep : ${cible} : aucun objet de ce nom`);
        continue;
      }
      if (n.type === 'dossier') {
        lignes.push(`grep : ${cible} est un lieu`);
        continue;
      }
      const texte = typeof n.contenu === 'function' ? n.contenu(this) : n.contenu;
      for (const l of texte.split('\n')) {
        if ((casse ? l.toLowerCase() : l).includes(cherche)) lignes.push(fichiers.length > 1 ? `${cible}:${l}` : l);
      }
    }
    // Écart volontaire : le vrai grep ne dit rien quand il ne trouve rien ;
    // ici, on le précise pour ne pas laisser croire que la commande a échoué.
    return lignes.length ? lignes.join('\n') : `(aucune ligne ne contient « ${motif} »)`;
  }
}
