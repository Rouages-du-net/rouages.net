// Petits modèles, entraînés pour de vrai dans le navigateur, pour le module
// « Comment apprend une machine » :
//   - ajuster un polynôme à des points (moindres carrés) : sur-apprentissage ;
//   - un petit réseau de neurones à une couche cachée, entraîné par
//     rétropropagation et descente de gradient : le « ou exclusif » ;
//   - les k plus proches voisins : des données biaisées donnent un modèle biaisé.

import { hasard } from './minilm';

// ——— Moindres carrés ———

export interface Pt {
  x: number;
  y: number;
}

// Résout le système A·c = b par élimination de Gauss avec pivot partiel.
function resoudre(A: number[][], b: number[]): number[] {
  const n = b.length;
  const M = A.map((ligne, i) => [...ligne, b[i]]);
  for (let col = 0; col < n; col++) {
    let piv = col;
    for (let i = col + 1; i < n; i++) if (Math.abs(M[i][col]) > Math.abs(M[piv][col])) piv = i;
    [M[col], M[piv]] = [M[piv], M[col]];
    if (Math.abs(M[col][col]) < 1e-14) continue;
    for (let i = col + 1; i < n; i++) {
      const f = M[i][col] / M[col][col];
      for (let j = col; j <= n; j++) M[i][j] -= f * M[col][j];
    }
  }
  const c = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = M[i][n];
    for (let j = i + 1; j < n; j++) s -= M[i][j] * c[j];
    c[i] = Math.abs(M[i][i]) < 1e-14 ? 0 : s / M[i][i];
  }
  return c;
}

// Le polynôme de degré `degre` qui passe au plus près des points : celui qui
// rend minimale la somme des carrés des écarts (Legendre, 1805). Les x
// doivent être entre −1 et 1 pour que le calcul reste précis.
export function ajusterPolynome(points: Pt[], degre: number): number[] {
  const d = Math.min(degre, points.length - 1);
  const A = Array.from({ length: d + 1 }, () => new Array(d + 1).fill(0));
  const b = new Array(d + 1).fill(0);
  for (const p of points) {
    const puissances = Array.from({ length: 2 * d + 1 }, (_, k) => p.x ** k);
    for (let i = 0; i <= d; i++) {
      b[i] += puissances[i] * p.y;
      for (let j = 0; j <= d; j++) A[i][j] += puissances[i + j];
    }
  }
  return resoudre(A, b);
}

export const evaluer = (coefs: number[], x: number) => coefs.reduceRight((s, c) => s * x + c, 0);

// Erreur moyenne : la racine de la moyenne des carrés des écarts.
export const erreur = (coefs: number[], points: Pt[]) =>
  Math.sqrt(points.reduce((s, p) => s + (evaluer(coefs, p.x) - p.y) ** 2, 0) / points.length);

// ——— Réseau de neurones à une couche cachée ———

export interface Exemple {
  x: number;
  y: number;
  classe: 0 | 1;
}

const sigmoide = (z: number) => 1 / (1 + Math.exp(-z));

// Deux entrées, `caches` neurones cachés (tanh), une sortie (sigmoïde, lue
// comme une probabilité). Erreur mesurée par l'entropie croisée.
export class Reseau {
  w1: number[][]; // caches × 2
  b1: number[];
  w2: number[];
  b2 = 0;
  constructor(readonly caches: number, graine = 1) {
    const alea = hasard(graine);
    const init = () => (alea() * 2 - 1) * 1.5;
    this.w1 = Array.from({ length: caches }, () => [init(), init()]);
    this.b1 = Array.from({ length: caches }, init);
    this.w2 = Array.from({ length: caches }, init);
  }

  private avant(x: number, y: number) {
    const h = this.w1.map((w, i) => Math.tanh(w[0] * x + w[1] * y + this.b1[i]));
    const sortie = sigmoide(h.reduce((s, hi, i) => s + this.w2[i] * hi, this.b2));
    return { h, sortie };
  }

  predire(x: number, y: number) {
    return this.avant(x, y).sortie;
  }

  // Une passe sur tous les exemples : calcul de l'erreur, puis
  // rétropropagation (la règle de dérivation en chaîne, de la sortie vers
  // l'entrée), puis un pas de descente de gradient. Renvoie l'erreur moyenne.
  passe(exemples: Exemple[], pas = 0.5): number {
    const g1 = this.w1.map(() => [0, 0]);
    const gb1 = this.b1.map(() => 0);
    const g2 = this.w2.map(() => 0);
    let gb2 = 0;
    let perte = 0;
    for (const e of exemples) {
      const { h, sortie } = this.avant(e.x, e.y);
      perte -= e.classe ? Math.log(sortie + 1e-12) : Math.log(1 - sortie + 1e-12);
      const dz = sortie - e.classe; // pente de l'erreur à la sortie
      gb2 += dz;
      h.forEach((hi, i) => {
        g2[i] += dz * hi;
        const dh = dz * this.w2[i] * (1 - hi * hi); // on remonte vers le neurone caché i
        g1[i][0] += dh * e.x;
        g1[i][1] += dh * e.y;
        gb1[i] += dh;
      });
    }
    const n = exemples.length;
    this.b2 -= (pas * gb2) / n;
    for (let i = 0; i < this.caches; i++) {
      this.w2[i] -= (pas * g2[i]) / n;
      this.w1[i][0] -= (pas * g1[i][0]) / n;
      this.w1[i][1] -= (pas * g1[i][1]) / n;
      this.b1[i] -= (pas * gb1[i]) / n;
    }
    return perte / n;
  }

  justes(exemples: Exemple[]) {
    return exemples.filter((e) => (this.predire(e.x, e.y) > 0.5 ? 1 : 0) === e.classe).length;
  }
}

// ——— k plus proches voisins ———

// La classe majoritaire parmi les k exemples les plus proches du point.
export function voisins<C extends string>(exemples: { x: number; y: number; classe: C }[], p: Pt, k: number): { classe: C; proches: number[] } {
  const proches = exemples
    .map((e, i) => ({ i, d: (e.x - p.x) ** 2 + (e.y - p.y) ** 2 }))
    .sort((a, b) => a.d - b.d)
    .slice(0, k)
    .map((v) => v.i);
  const comptes = new Map<C, number>();
  for (const i of proches) comptes.set(exemples[i].classe, (comptes.get(exemples[i].classe) ?? 0) + 1);
  // À égalité, le plus proche des voisins départage.
  const max = Math.max(...comptes.values());
  const classe = proches.map((i) => exemples[i].classe).find((c) => comptes.get(c) === max)!;
  return { classe, proches };
}
