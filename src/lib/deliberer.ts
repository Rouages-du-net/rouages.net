// Délibérer avec des algorithmes, calculé pour de vrai dans le navigateur,
// pour le module « Délibérer avec des algorithmes » (section
// « L'intelligence collective ») :
//   - une conversation façon Polis : votes d'accord / pas d'accord / passer,
//     analyse en composantes principales, puis k-moyennes (Small et al., 2021) ;
//   - un classement « par le pont » façon notes de la communauté : une
//     factorisation de matrice dont l'ordonnée à l'origine mesure l'utilité
//     d'une note au-delà des points de vue (Wojcik et al., 2022) ;
//   - un tirage au sort comparé à un appel aux volontaires.
// Participant·es, phrases, notes et votes sont inventés.

import { gauss } from './sagesse';

// ---- Polis ----

/** Une phrase soumise au vote, et la chance d'être d'accord dans chaque camp. */
export interface Enonce {
  texte: string;
  accordA: number;
  accordB: number;
}

/** 1 = d'accord, −1 = pas d'accord, 0 = passer ou pas vu. */
export type Vote = 1 | -1 | 0;

/**
 * Votes de n participant·es. La moitié penche vers le camp A, l'autre vers le
 * camp B ; chacun·e passe ou ne voit pas une phrase avec la probabilité
 * `absence`.
 */
export function votesPolis(alea: () => number, n: number, enonces: Enonce[], absence = 0.2) {
  const camps: ('A' | 'B')[] = [];
  const votes: Vote[][] = [];
  for (let i = 0; i < n; i++) {
    const camp = i % 2 === 0 ? 'A' : 'B';
    camps.push(camp);
    votes.push(
      enonces.map((e) => {
        if (alea() < absence) return 0;
        return alea() < (camp === 'A' ? e.accordA : e.accordB) ? 1 : -1;
      }),
    );
  }
  return { camps, votes };
}

/** Produit d'une matrice symétrique par un vecteur. */
const produit = (m: number[][], v: number[]) => m.map((ligne) => ligne.reduce((s, x, j) => s + x * v[j], 0));
const norme = (v: number[]) => Math.sqrt(v.reduce((s, x) => s + x * x, 0)) || 1;

/**
 * Analyse en composantes principales : les deux directions où les votes
 * varient le plus (méthode de la puissance itérée, avec déflation), et la
 * position de chaque participant·e sur ces deux axes.
 */
export function acp2(votes: number[][]): { x: number; y: number }[] {
  const n = votes.length, m = votes[0].length;
  const moy = Array.from({ length: m }, (_, j) => votes.reduce((s, v) => s + v[j], 0) / n);
  const c = votes.map((v) => v.map((x, j) => x - moy[j]));
  const cov = Array.from({ length: m }, (_, a) => Array.from({ length: m }, (_, b) => c.reduce((s, v) => s + v[a] * v[b], 0) / n));
  const axes: number[][] = [];
  for (let k = 0; k < 2; k++) {
    let v = Array.from({ length: m }, (_, j) => 1 + j * 0.01 * (k + 1));
    for (let it = 0; it < 200; it++) {
      let w = produit(cov, v);
      // Retirer la composante déjà trouvée (déflation).
      for (const a of axes) {
        const p = w.reduce((s, x, j) => s + x * a[j], 0);
        w = w.map((x, j) => x - p * a[j]);
      }
      const nw = norme(w);
      v = w.map((x) => x / nw);
    }
    axes.push(v);
  }
  return c.map((v) => ({ x: v.reduce((s, x, j) => s + x * axes[0][j], 0), y: v.reduce((s, x, j) => s + x * axes[1][j], 0) }));
}

/** k-moyennes : k groupes de points proches (initialisation k-means++ simplifiée). */
export function kMoyennes(points: { x: number; y: number }[], k: number, alea: () => number): number[] {
  const d2 = (a: { x: number; y: number }, b: { x: number; y: number }) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
  const centres = [points[Math.floor(alea() * points.length)]];
  while (centres.length < k) {
    // Le point le plus loin des centres déjà choisis.
    let loin = points[0], max = -1;
    for (const p of points) {
      const d = Math.min(...centres.map((c) => d2(p, c)));
      if (d > max) [max, loin] = [d, p];
    }
    centres.push(loin);
  }
  let groupes = points.map(() => 0);
  for (let it = 0; it < 50; it++) {
    groupes = points.map((p) => centres.reduce((meilleur, c, i) => (d2(p, c) < d2(p, centres[meilleur]) ? i : meilleur), 0));
    for (let i = 0; i < k; i++) {
      const membres = points.filter((_, j) => groupes[j] === i);
      if (membres.length) centres[i] = { x: membres.reduce((s, p) => s + p.x, 0) / membres.length, y: membres.reduce((s, p) => s + p.y, 0) / membres.length };
    }
  }
  return groupes;
}

/**
 * Pour chaque phrase, part des votant·es d'accord dans chaque groupe (parmi
 * celles et ceux qui ont voté). Une phrase fait « consensus » quand chaque
 * groupe l'approuve à plus de `seuil` ; elle « divise » quand l'écart entre
 * groupes dépasse 0,5.
 */
export function bilanEnonces(votes: Vote[][], groupes: number[], k: number, seuil = 0.6) {
  const m = votes[0].length;
  return Array.from({ length: m }, (_, j) => {
    const accords = Array.from({ length: k }, (_, g) => {
      const v = votes.filter((_, i) => groupes[i] === g).map((x) => x[j]).filter((x) => x !== 0);
      return v.length ? v.filter((x) => x === 1).length / v.length : 0;
    });
    const consensus = accords.every((a) => a > seuil);
    const divise = Math.max(...accords) - Math.min(...accords) > 0.5;
    return { accords, consensus, divise };
  });
}

// ---- Notes de la communauté ----

export interface Note {
  texte: string;
  /** Qualité de la note : plus elle est haute, plus chacun·e la trouve utile. */
  qualite: number;
  /** Penchant : positif, la note plaît au camp A ; négatif, au camp B. */
  penchant: number;
}

/**
 * Évaluations « utile / pas utile » (1 ou 0) des notes par n évaluateur·rices.
 * Chaque personne a une opinion f entre −1 (camp B) et 1 (camp A) ; elle
 * évalue chaque note avec la probabilité `couverture`.
 */
export function evaluations(alea: () => number, n: number, notes: Note[], couverture = 0.6, partA = 0.5) {
  const opinions = Array.from({ length: n }, (_, i) => (i < n * partA ? 1 : -1) * (0.6 + 0.4 * alea()));
  const notesEval: { u: number; n: number; r: number }[] = [];
  opinions.forEach((f, u) =>
    notes.forEach((note, j) => {
      if (alea() > couverture) return;
      const p = 1 / (1 + Math.exp(-(note.qualite + 2.5 * note.penchant * f)));
      notesEval.push({ u, n: j, r: alea() < p ? 1 : 0 });
    }),
  );
  return { opinions, notesEval };
}

/**
 * Factorisation de matrice à un facteur, comme le classement des notes de la
 * communauté : r ≈ μ + i_u + i_n + f_u · f_n. Les ordonnées à l'origine sont
 * régularisées 5 fois plus fort que les facteurs (0,15 contre 0,03) : pour
 * avoir une ordonnée i_n élevée, une note doit plaire au-delà de ce
 * qu'explique le point de vue (f_u · f_n) de ses évaluateur·rices.
 */
export function factoriser(alea: () => number, nbU: number, nbN: number, notesEval: { u: number; n: number; r: number }[], iterations = 400) {
  const LI = 0.15, LF = 0.03, PAS = 0.05; // pas de la descente de gradient
  let mu = 0;
  const iu = new Array(nbU).fill(0), inn = new Array(nbN).fill(0);
  const fu = Array.from({ length: nbU }, () => 0.1 * gauss(alea));
  const fn = Array.from({ length: nbN }, () => 0.1 * gauss(alea));
  for (let it = 0; it < iterations; it++) {
    const g = { mu: 0, iu: new Array(nbU).fill(0), in: new Array(nbN).fill(0), fu: new Array(nbU).fill(0), fn: new Array(nbN).fill(0) };
    for (const { u, n, r } of notesEval) {
      const e = mu + iu[u] + inn[n] + fu[u] * fn[n] - r;
      g.mu += e; g.iu[u] += e; g.in[n] += e; g.fu[u] += e * fn[n]; g.fn[n] += e * fu[u];
    }
    // Descente de gradient sur la somme des erreurs au carré, plus les
    // régularisations (même fonction de coût que l'algorithme publié).
    mu -= g.mu / notesEval.length;
    for (let u = 0; u < nbU; u++) {
      iu[u] -= PAS * (g.iu[u] + LI * iu[u]);
      fu[u] -= PAS * (g.fu[u] + LF * fu[u]);
    }
    for (let n = 0; n < nbN; n++) {
      inn[n] -= (PAS / 10) * (g.in[n] + LI * inn[n]);
      fn[n] -= (PAS / 10) * (g.fn[n] + LF * fn[n]);
    }
  }
  return { mu, intercepts: inn, facteurs: fn };
}

// ---- Tirage au sort ----

export interface Profil {
  /** Tranche d'âge. */
  age: '18-34' | '35-64' | '65+';
  /** A fait des études supérieures. */
  diplome: boolean;
}

/** Une population inventée, avec des proportions proches de celles d'un pays européen. */
export function population(alea: () => number, n: number): Profil[] {
  return Array.from({ length: n }, () => {
    const r = alea();
    const age = r < 0.27 ? '18-34' : r < 0.75 ? '35-64' : '65+';
    return { age, diplome: alea() < (age === '18-34' ? 0.5 : age === '35-64' ? 0.35 : 0.2) };
  });
}

/**
 * Qui répond à un appel aux volontaires ? Modèle inventé : les personnes
 * diplômées et retraitées viennent plus volontiers.
 */
export function volontaires(alea: () => number, pop: Profil[], taille: number): Profil[] {
  const envie = (p: Profil) => (p.diplome ? 3 : 1) * (p.age === '65+' ? 2 : p.age === '18-34' ? 0.6 : 1);
  const choisis: Profil[] = [];
  while (choisis.length < taille) {
    const p = pop[Math.floor(alea() * pop.length)];
    if (alea() < envie(p) / 6) choisis.push(p);
  }
  return choisis;
}

/**
 * Tirage au sort stratifié : on tire au hasard dans chaque catégorie (âge ×
 * diplôme) un nombre de personnes proportionnel à son poids dans la
 * population, comme les quotas de la Convention citoyenne pour le climat.
 */
export function tirageStratifie(alea: () => number, pop: Profil[], taille: number): Profil[] {
  const cle = (p: Profil) => `${p.age}|${p.diplome}`;
  const strates = new Map<string, Profil[]>();
  pop.forEach((p) => strates.set(cle(p), [...(strates.get(cle(p)) ?? []), p]));
  const choisis: Profil[] = [];
  for (const membres of strates.values()) {
    const k = Math.round((membres.length / pop.length) * taille);
    for (let i = 0; i < k; i++) choisis.push(membres[Math.floor(alea() * membres.length)]);
  }
  return choisis;
}

/** Répartition d'un groupe : part de chaque tranche d'âge, et part de diplômé·es. */
export function repartition(g: Profil[]) {
  const part = (f: (p: Profil) => boolean) => g.filter(f).length / g.length;
  return {
    jeunes: part((p) => p.age === '18-34'),
    actifs: part((p) => p.age === '35-64'),
    aines: part((p) => p.age === '65+'),
    diplomes: part((p) => p.diplome),
  };
}
