// Petits algorithmes d'IA, calculés pour de vrai dans le navigateur, pour le
// module « L'IA, c'est quoi ? » :
//   - un système expert à règles (chaînage avant), qui explique son raisonnement ;
//   - un arbre de décision appris à partir d'exemples (algorithme ID3) ;
//   - les k-moyennes (apprentissage non supervisé) ;
//   - le Q-learning (apprentissage par renforcement) dans un petit labyrinthe.

// ——— Système expert ———

export interface Regle {
  si: string[]; // tous ces faits doivent être vrais
  alors: string;
}

// Chaînage avant : on applique les règles tant qu'elles ajoutent des faits.
// Chaque déduction garde la règle qui l'a produite : c'est l'explication.
export function deduire(faits: string[], regles: Regle[]): { faits: Set<string>; trace: { regle: Regle; tour: number }[] } {
  const connus = new Set(faits);
  const trace: { regle: Regle; tour: number }[] = [];
  for (let tour = 1; tour <= regles.length; tour++) {
    let ajout = false;
    for (const r of regles) {
      if (!connus.has(r.alors) && r.si.every((f) => connus.has(f))) {
        connus.add(r.alors);
        trace.push({ regle: r, tour });
        ajout = true;
      }
    }
    if (!ajout) break;
  }
  return { faits: connus, trace };
}

// ——— Arbre de décision (ID3) ———

export interface Exemple {
  nom: string;
  attributs: Record<string, boolean>;
  classe: string;
}
export type Arbre = { feuille: string; n: number } | { question: string; oui: Arbre; non: Arbre };

const entropie = (classes: string[]) => {
  const n = classes.length;
  const comptes = new Map<string, number>();
  for (const c of classes) comptes.set(c, (comptes.get(c) ?? 0) + 1);
  return [...comptes.values()].reduce((h, k) => h - (k / n) * Math.log2(k / n), 0);
};

const majoritaire = (ex: Exemple[]) => {
  const comptes = new Map<string, number>();
  for (const e of ex) comptes.set(e.classe, (comptes.get(e.classe) ?? 0) + 1);
  return [...comptes.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr'))[0][0];
};

// À chaque nœud, on choisit la question qui sépare le mieux les exemples
// (celle qui fait le plus baisser l'entropie, le « désordre » des classes).
export function apprendreArbre(exemples: Exemple[], questions: string[]): Arbre {
  const classes = exemples.map((e) => e.classe);
  if (new Set(classes).size <= 1 || !questions.length) return { feuille: majoritaire(exemples), n: exemples.length };
  let meilleure = '';
  let gain = -1;
  for (const q of questions) {
    const oui = exemples.filter((e) => e.attributs[q]);
    const non = exemples.filter((e) => !e.attributs[q]);
    if (!oui.length || !non.length) continue;
    const reste = (oui.length * entropie(oui.map((e) => e.classe)) + non.length * entropie(non.map((e) => e.classe))) / exemples.length;
    const g = entropie(classes) - reste;
    if (g > gain + 1e-12) {
      gain = g;
      meilleure = q;
    }
  }
  if (!meilleure) return { feuille: majoritaire(exemples), n: exemples.length };
  const autres = questions.filter((q) => q !== meilleure);
  return {
    question: meilleure,
    oui: apprendreArbre(exemples.filter((e) => e.attributs[meilleure]), autres),
    non: apprendreArbre(exemples.filter((e) => !e.attributs[meilleure]), autres),
  };
}

export function classer(arbre: Arbre, attributs: Record<string, boolean>): { classe: string; chemin: string[] } {
  const chemin: string[] = [];
  let n = arbre;
  while (!('feuille' in n)) {
    const r = !!attributs[n.question];
    chemin.push(`${n.question} ? ${r ? 'oui' : 'non'}`);
    n = r ? n.oui : n.non;
  }
  return { classe: n.feuille, chemin };
}

// ——— k-moyennes ———

export interface Pt {
  x: number;
  y: number;
}

// Une étape de l'algorithme : 1) chaque point rejoint le centre le plus
// proche ; 2) chaque centre se place au milieu de ses points.
export function etapeKMoyennes(points: Pt[], centres: Pt[]): { groupes: number[]; centres: Pt[]; bouge: boolean } {
  const groupes = points.map((p) => {
    let k = 0;
    let d = Infinity;
    centres.forEach((c, i) => {
      const di = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
      if (di < d) {
        d = di;
        k = i;
      }
    });
    return k;
  });
  let bouge = false;
  const nouveaux = centres.map((c, i) => {
    const membres = points.filter((_, j) => groupes[j] === i);
    if (!membres.length) return c;
    const m = { x: membres.reduce((s, p) => s + p.x, 0) / membres.length, y: membres.reduce((s, p) => s + p.y, 0) / membres.length };
    if (Math.hypot(m.x - c.x, m.y - c.y) > 1e-9) bouge = true;
    return m;
  });
  return { groupes, centres: nouveaux, bouge };
}

// ——— Q-learning ———

// Un labyrinthe en grille : '.' libre, '#' mur, 'S' départ, 'F' fromage
// (récompense +10), 'P' piège (−10). Chaque pas coûte −1.
export const ACTIONS = [
  { nom: 'haut', dx: 0, dy: -1, fleche: '↑' },
  { nom: 'droite', dx: 1, dy: 0, fleche: '→' },
  { nom: 'bas', dx: 0, dy: 1, fleche: '↓' },
  { nom: 'gauche', dx: -1, dy: 0, fleche: '←' },
];

export class Labyrinthe {
  readonly larg: number;
  readonly haut: number;
  readonly depart: number;
  q: number[][];
  constructor(readonly grille: string[]) {
    this.haut = grille.length;
    this.larg = grille[0].length;
    const s = grille.join('').indexOf('S');
    this.depart = s;
    this.q = Array.from({ length: this.larg * this.haut }, () => [0, 0, 0, 0]);
  }
  case(i: number) {
    return this.grille[Math.floor(i / this.larg)][i % this.larg];
  }
  fin(i: number) {
    return this.case(i) === 'F' || this.case(i) === 'P';
  }
  bouger(i: number, a: number): { suivant: number; recompense: number } {
    const x = (i % this.larg) + ACTIONS[a].dx;
    const y = Math.floor(i / this.larg) + ACTIONS[a].dy;
    if (x < 0 || y < 0 || x >= this.larg || y >= this.haut || this.grille[y][x] === '#') return { suivant: i, recompense: -1 };
    const j = y * this.larg + x;
    const c = this.case(j);
    return { suivant: j, recompense: c === 'F' ? 10 : c === 'P' ? -10 : -1 };
  }
  meilleure(i: number) {
    const q = this.q[i];
    return q.indexOf(Math.max(...q));
  }
  // Une partie : la souris explore (au hasard avec la probabilité epsilon),
  // sinon elle suit ce qu'elle a appris ; à chaque pas, elle met à jour sa
  // note Q(case, action) : Q ← Q + α (récompense + γ · max Q(suivante) − Q).
  partie(alea: () => number, epsilon = 0.2, alpha = 0.5, gamma = 0.9, max = 60): { chemin: number[]; total: number } {
    let i = this.depart;
    const chemin = [i];
    let total = 0;
    for (let t = 0; t < max && !this.fin(i); t++) {
      const a = alea() < epsilon ? Math.floor(alea() * 4) : this.meilleure(i);
      const { suivant, recompense } = this.bouger(i, a);
      const futur = this.fin(suivant) ? 0 : Math.max(...this.q[suivant]);
      this.q[i][a] += alpha * (recompense + gamma * futur - this.q[i][a]);
      total += recompense;
      i = suivant;
      chemin.push(i);
    }
    return { chemin, total };
  }
}
