// Un mini-shell qui interprète les commandes sur le monde du jeu.

import { ACCUEIL, creerMonde, type Dossier, type Noeud } from './monde';

const MANUEL: Record<string, string> = {
  ls: 'ls [-a] [lieu] — liste le contenu du lieu. -a montre aussi les fichiers cachés.',
  cd: 'cd lieu — se déplacer. « cd .. » remonte, « cd ~ » ramène à l\'Accueil.',
  pwd: 'pwd — affiche le chemin complet du lieu où tu es.',
  cat: 'cat fichier — affiche le contenu d\'un fichier.',
  mv: 'mv source destination — déplace (ou renomme) un fichier.',
  man: 'man commande — affiche le manuel d\'une commande.',
  clear: 'clear — efface l\'écran.',
  aide: 'aide — liste les commandes disponibles.',
};

export class Shell {
  racine: Dossier = creerMonde();
  cwd = ACCUEIL;

  // Transforme un chemin (relatif, absolu, ~, ..) en chemin absolu normalisé.
  resoudre(chemin: string): string {
    if (chemin === '~' || chemin.startsWith('~/')) chemin = ACCUEIL + chemin.slice(1);
    const parts = (chemin.startsWith('/') ? chemin : `${this.cwd}/${chemin}`).split('/');
    const pile: string[] = [];
    for (const p of parts) {
      if (p === '' || p === '.') continue;
      if (p === '..') pile.pop();
      else pile.push(p);
    }
    return '/' + pile.join('/');
  }

  trouver(absolu: string): Noeud | null {
    let n: Noeud = this.racine;
    for (const p of absolu.split('/').filter(Boolean)) {
      if (n.type !== 'dossier' || !(p in n.enfants)) return null;
      n = n.enfants[p];
    }
    return n;
  }

  // Raison du premier lieu bloqué traversé par ce chemin, sinon null.
  blocage(absolu: string): string | null {
    let n: Noeud = this.racine;
    for (const p of absolu.split('/').filter(Boolean)) {
      if (n.type !== 'dossier' || !(p in n.enfants)) return null;
      n = n.enfants[p];
      const raison = n.type === 'dossier' ? n.bloque?.(this.racine) : null;
      if (raison) return raison;
    }
    return null;
  }

  // Complétion par Tab du dernier mot.
  completer(ligne: string): string {
    const mots = ligne.split(' ');
    const dernier = mots.pop() ?? '';
    if (mots.length === 0) {
      const cmds = Object.keys(MANUEL).filter((c) => c.startsWith(dernier));
      return cmds.length === 1 ? cmds[0] + ' ' : ligne;
    }
    const i = dernier.lastIndexOf('/');
    const base = i >= 0 ? dernier.slice(0, i + 1) : '';
    const debut = dernier.slice(i + 1);
    const dossier = this.trouver(this.resoudre(base || '.'));
    if (!dossier || dossier.type !== 'dossier') return ligne;
    const choix = Object.keys(dossier.enfants).filter(
      (n) => n.startsWith(debut) && (debut.startsWith('.') || !n.startsWith('.')),
    );
    if (choix.length !== 1) return ligne;
    const suffixe = dossier.enfants[choix[0]].type === 'dossier' ? '/' : ' ';
    return [...mots, base + choix[0] + suffixe].join(' ');
  }

  // Exécute une ligne ; renvoie le texte à afficher, ou null pour « clear ».
  executer(ligne: string): string | null {
    const [cmd, ...args] = ligne.trim().split(/\s+/);
    switch (cmd) {
      case '':
        return '';
      case 'aide':
      case 'help':
        return 'Commandes : ' + Object.keys(MANUEL).join(', ') + '\nTape « man commande » pour en savoir plus.';
      case 'man':
        return args[0] && MANUEL[args[0]] ? MANUEL[args[0]] : 'Usage : man commande (ex. : man ls)';
      case 'clear':
        return null;
      case 'pwd':
        return this.cwd;
      case 'ls':
        return this.ls(args);
      case 'cd':
        return this.cd(args[0] ?? '~');
      case 'cat':
        return this.cat(args[0]);
      case 'mv':
        return this.mv(args[0], args[1]);
      default:
        return `${cmd} : commande introuvable. Tape « aide » pour la liste.`;
    }
  }

  ls(args: string[]): string {
    const tous = args.includes('-a');
    const cible = args.find((a) => !a.startsWith('-')) ?? '.';
    const chemin = this.resoudre(cible);
    const n = this.trouver(chemin);
    if (!n) return `ls : ${cible} : aucun lieu ou objet de ce nom`;
    const raison = this.blocage(chemin);
    if (raison) return raison;
    if (n.type === 'fichier') return cible;
    const noms = Object.entries(n.enfants)
      .filter(([nom]) => tous || !nom.startsWith('.'))
      .map(([nom, e]) => (e.type === 'dossier' ? nom + '/' : nom));
    return (tous ? ['./', '../', ...noms] : noms).join('    ');
  }

  cd(cible: string): string {
    const chemin = this.resoudre(cible);
    const n = this.trouver(chemin);
    if (!n) return `cd : ${cible} : aucun lieu de ce nom`;
    if (n.type !== 'dossier') return `cd : ${cible} : ce n'est pas un lieu, c'est un objet (essaie cat)`;
    const raison = this.blocage(chemin);
    if (raison) return raison;
    this.cwd = chemin;
    return '';
  }

  cat(cible?: string): string {
    if (!cible) return 'Usage : cat fichier';
    const chemin = this.resoudre(cible);
    const n = this.trouver(chemin);
    if (!n) return `cat : ${cible} : aucun objet de ce nom`;
    if (n.type === 'dossier') return `cat : ${cible} : c'est un lieu (essaie cd ou ls)`;
    return this.blocage(chemin) ?? n.contenu;
  }

  mv(source?: string, dest?: string): string {
    if (!source || !dest) return 'Usage : mv source destination';
    const src = this.resoudre(source);
    const n = this.trouver(src);
    if (!n) return `mv : ${source} : aucun objet de ce nom`;
    // Simplification du jeu : on déplace des objets, jamais des lieux.
    if (n.type === 'dossier') return `mv : ${source} est un lieu ; dans ce monde, on ne déplace que des objets`;
    const parentSrc = this.trouver(this.resoudre(src + '/..')) as Dossier;
    const nomSrc = src.split('/').pop()!;

    let cheminDest = this.resoudre(dest);
    let cibleDest = this.trouver(cheminDest);
    let nomDest = nomSrc;
    if (!cibleDest || cibleDest.type !== 'dossier') {
      // Renommage : la destination est un nouveau nom dans un dossier existant.
      nomDest = cheminDest.split('/').pop()!;
      cheminDest = this.resoudre(cheminDest + '/..');
      cibleDest = this.trouver(cheminDest);
      if (!cibleDest || cibleDest.type !== 'dossier') return `mv : ${dest} : destination introuvable`;
    }
    const raison = this.blocage(src) ?? this.blocage(cheminDest);
    if (raison) return raison;

    delete parentSrc.enfants[nomSrc];
    cibleDest.enfants[nomDest] = n;
    return src === ACCUEIL + '/Pont/rocher' && cheminDest === ACCUEIL + '/Pont/Riviere'
      ? 'Plouf ! Le rocher tombe dans la rivière. Le passage est libre.'
      : '';
  }
}
