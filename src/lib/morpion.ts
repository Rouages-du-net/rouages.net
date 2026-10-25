// Le morpion, terrain d'essai du module « Les IA qui jouent » :
//   - minimax, avec ou sans élagage alpha-bêta, en comptant les positions
//     examinées (l'arbre des coups de Shannon, en miniature) ;
//   - MENACE, les boîtes d'allumettes de Donald Michie (1961), avec les
//     règles de perles décrites par O. Child (Chalkdust, 2016) ;
//   - l'estimation d'un coup par des parties jouées au hasard (Monte-Carlo),
//     l'une des idées derrière AlphaGo.
// Tout est calculé pour de vrai ; seuls les adversaires sont simulés.

/** Case vide (0), croix (1, qui commence) ou rond (2). */
export type Case = 0 | 1 | 2;
export type Plateau = Case[];

const LIGNES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export const vide = (): Plateau => new Array(9).fill(0) as Plateau;
export const autre = (j: Case): Case => (j === 1 ? 2 : 1);
export const coupsLibres = (p: Plateau) => p.flatMap((c, i) => (c === 0 ? [i] : []));

/** Le gagnant (1 ou 2), 0 si personne, ou -1 si la grille est pleine sans gagnant. */
export function issue(p: Plateau): number {
  for (const [a, b, c] of LIGNES) if (p[a] && p[a] === p[b] && p[a] === p[c]) return p[a];
  return p.includes(0) ? 0 : -1;
}

export const jouer = (p: Plateau, i: number, j: Case): Plateau => {
  const q = [...p] as Plateau;
  q[i] = j;
  return q;
};

// ---- Minimax ----

/**
 * Valeur d'une position pour `joueur` qui doit jouer : 1 gagnant, 0 nul,
 * −1 perdant, en supposant que les deux camps jouent parfaitement.
 * `compteur.n` compte les positions examinées. Avec `alphaBeta`, on cesse
 * d'examiner les coups d'une position dès qu'on sait que l'adversaire ne la
 * laissera pas arriver.
 */
export function minimax(p: Plateau, joueur: Case, alphaBeta: boolean, compteur = { n: 0 }, alpha = -2, beta = 2): number {
  compteur.n++;
  const r = issue(p);
  if (r === -1) return 0;
  if (r !== 0) return r === joueur ? 1 : -1;
  let meilleur = -2;
  for (const i of coupsLibres(p)) {
    const v = -minimax(jouer(p, i, joueur), autre(joueur), alphaBeta, compteur, -beta, -alpha);
    if (v > meilleur) meilleur = v;
    if (alphaBeta) {
      if (v > alpha) alpha = v;
      if (alpha >= beta) break;
    }
  }
  return meilleur;
}

/** Valeur exacte de chaque coup possible, et nombre de positions examinées. */
export function analyser(p: Plateau, joueur: Case, alphaBeta: boolean) {
  const compteur = { n: 0 };
  const valeurs = new Map<number, number>();
  for (const i of coupsLibres(p)) valeurs.set(i, -minimax(jouer(p, i, joueur), autre(joueur), alphaBeta, compteur) || 0);
  return { valeurs, positions: compteur.n };
}

/**
 * Choisit un coup par minimax, comme le ferait un programme de jeu : avec
 * l'élagage, la fenêtre alpha-bêta est partagée dès le premier niveau, donc
 * seule la valeur du coup choisi est exacte. La position de départ compte
 * dans le total, comme dans `minimax`.
 */
export function chercher(p: Plateau, joueur: Case, alphaBeta: boolean) {
  const compteur = { n: 1 };
  let coup = -1, alpha = -2;
  for (const i of coupsLibres(p)) {
    const v = -minimax(jouer(p, i, joueur), autre(joueur), alphaBeta, compteur, -2, alphaBeta ? -alpha : 2);
    if (v > alpha) [coup, alpha] = [i, v];
  }
  return { coup, valeur: alpha || 0, positions: compteur.n };
}

/** Un meilleur coup (le premier trouvé parmi les meilleurs), par minimax. */
export function meilleurCoup(p: Plateau, joueur: Case, alphaBeta = true) {
  const { valeurs, positions } = analyser(p, joueur, alphaBeta);
  let coup = -1, v = -2;
  for (const [i, x] of valeurs) if (x > v) [coup, v] = [i, x];
  return { coup, valeur: v, positions };
}

// ---- Monte-Carlo ----

/** Finit la partie au hasard ; renvoie l'issue (1, 2 ou −1 pour nul). */
export function auHasard(alea: () => number, p: Plateau, joueur: Case): number {
  let q = p, j = joueur;
  for (;;) {
    const r = issue(q);
    if (r !== 0) return r;
    const libres = coupsLibres(q);
    q = jouer(q, libres[Math.floor(alea() * libres.length)], j);
    j = autre(j);
  }
}

/**
 * Pour chaque coup possible, `n` parties finies au hasard : score moyen pour
 * `joueur` (victoire 1, nul 0,5, défaite 0).
 */
export function monteCarlo(alea: () => number, p: Plateau, joueur: Case, n: number) {
  const scores = new Map<number, number>();
  for (const i of coupsLibres(p)) {
    let s = 0;
    for (let k = 0; k < n; k++) {
      const r = auHasard(alea, jouer(p, i, joueur), autre(joueur));
      s += r === joueur ? 1 : r === -1 ? 0.5 : 0;
    }
    scores.set(i, s / n);
  }
  return scores;
}

// ---- MENACE ----

// Les huit symétries du carré : chaque permutation donne la case d'origine
// de chaque case de la grille transformée.
const SYMETRIES = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8], [6, 3, 0, 7, 4, 1, 8, 5, 2], [8, 7, 6, 5, 4, 3, 2, 1, 0], [2, 5, 8, 1, 4, 7, 0, 3, 6],
  [2, 1, 0, 5, 4, 3, 8, 7, 6], [0, 3, 6, 1, 4, 7, 2, 5, 8], [6, 7, 8, 3, 4, 5, 0, 1, 2], [8, 5, 2, 7, 4, 1, 6, 3, 0],
];

/** Forme canonique d'une grille (la plus petite de ses huit symétriques) et la symétrie utilisée. */
function canonique(p: Plateau): { cle: string; s: number[] } {
  let cle = '', s = SYMETRIES[0];
  for (const sym of SYMETRIES) {
    const c = sym.map((i) => p[i]).join('');
    if (!cle || c < cle) [cle, s] = [c, sym];
  }
  return { cle, s };
}

export type Adversaire = 'hasard' | 'parfait';

/**
 * MENACE joue les croix et commence. Une boîte par position (à symétrie
 * près), des perles pour chaque coup distinct ; au départ 4, 3, 2 puis 1
 * perle par coup selon le tour. Après la partie : défaite, on retire les
 * perles tirées ; nul, +1 ; victoire, +3. Une boîte vide : MENACE abandonne.
 */
export class Menace {
  boites = new Map<string, Map<number, number>>();

  /** Crée la boîte d'une grille déjà mise sous forme canonique. */
  private creer(cle: string, pc: Plateau) {
    const tour = pc.filter((c) => c === 1).length; // 0 pour le premier coup de MENACE
    const depart = [4, 3, 2, 1][tour] ?? 1;
    const b = new Map<number, number>();
    const vus = new Set<string>();
    for (const i of coupsLibres(pc)) {
      // Un seul coup par classe de coups équivalents par symétrie.
      const k = canonique(jouer(pc, i, 1)).cle;
      if (vus.has(k)) continue;
      vus.add(k);
      b.set(i, depart);
    }
    this.boites.set(cle, b);
    return b;
  }

  /** Perles de la boîte de la grille vide : coin, bord, centre. */
  premiereBoite() {
    const b = this.boites.get(canonique(vide()).cle);
    return { coin: b?.get(0) ?? 4, bord: b?.get(1) ?? 4, centre: b?.get(4) ?? 4 };
  }

  /** Joue une partie contre l'adversaire et apprend ; renvoie 1 (victoire), 0 (nul) ou −1 (défaite). */
  partie(alea: () => number, adversaire: Adversaire): number {
    let p = vide();
    const tirages: { cle: string; coup: number }[] = [];
    for (;;) {
      // Tour de MENACE : on cherche la boîte de la position canonique.
      const { cle, s } = canonique(p);
      const b = this.boites.get(cle) ?? this.creer(cle, s.map((i) => p[i]) as Plateau);
      const total = [...b.values()].reduce((x, y) => x + y, 0);
      if (coupsLibres(p).length === 1) {
        p = jouer(p, coupsLibres(p)[0], 1);
      } else {
        if (total <= 0) return this.apprendre(tirages, -1);
        let r = alea() * total, choisi = -1;
        for (const [i, n] of b) if ((r -= n) < 0 && choisi < 0) choisi = i;
        if (choisi < 0) choisi = [...b.keys()][0];
        tirages.push({ cle, coup: choisi });
        p = jouer(p, s[choisi], 1);
      }
      let fin = issue(p);
      if (fin !== 0) return this.apprendre(tirages, fin === 1 ? 1 : 0);
      // Tour de l'adversaire.
      const libres = coupsLibres(p);
      const c = adversaire === 'parfait' ? meilleurCoup(p, 2).coup : libres[Math.floor(alea() * libres.length)];
      p = jouer(p, c, 2);
      fin = issue(p);
      if (fin !== 0) return this.apprendre(tirages, fin === 2 ? -1 : 0);
    }
  }

  private apprendre(tirages: { cle: string; coup: number }[], resultat: number) {
    const delta = resultat === 1 ? 3 : resultat === 0 ? 1 : -1;
    for (const { cle, coup } of tirages) {
      const b = this.boites.get(cle)!;
      b.set(coup, Math.max(0, (b.get(coup) ?? 0) + delta));
    }
    return resultat;
  }
}
