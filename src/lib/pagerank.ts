// PageRank, calculé pour de vrai dans le navigateur, pour le module
// « PageRank : les liens comme des votes » (section « Recommander ») :
//   - compter les liens entrants, ou pondérer chaque lien par l'importance de
//     la page qui le fait (calcul par itérations) ;
//   - le « surfeur aléatoire » de Brin et Page (1998) ;
//   - une ferme de liens, et la parade de TrustRank (2004).
// On utilise la version normalisée de la formule : (1 − d)/N au lieu de
// (1 − d), pour que la somme des PageRank vaille 1 (la formule publiée en
// 1998 donne une somme égale à N).
// Pages et liens inventés pour le site.

export interface Page {
  nom: string;
  icone: string;
  x: number; // position sur le dessin (0 à 100)
  y: number;
}

export const PAGES: Page[] = [
  { nom: 'Wiki des volcans', icone: '📚', x: 50, y: 12 },
  { nom: 'Journal local', icone: '📰', x: 86, y: 32 },
  { nom: 'Mairie', icone: '🏛️', x: 82, y: 76 },
  { nom: 'Forum de randonnée', icone: '🥾', x: 50, y: 90 },
  { nom: 'Blog de Lina', icone: '✍️', x: 16, y: 76 },
  { nom: 'Boutique de sacs', icone: '🎒', x: 12, y: 32 },
  { nom: 'Club photo', icone: '📷', x: 50, y: 52 },
];

/** Liens [de, vers], par numéro de page. */
export type Lien = [number, number];

export const LIENS: Lien[] = [
  [1, 0], [2, 0], [3, 0], [4, 0], [6, 0], // tout le monde cite le wiki
  [0, 1], [2, 1], [0, 3], // le wiki et la mairie citent le journal ; le wiki cite le forum
  [1, 2], [0, 2], // le journal et le wiki citent la mairie
  [4, 3], [5, 3], [6, 3], // trois « petits » sites citent le forum
  [3, 4], [6, 4], // le forum et le club citent le blog
  [4, 5], [3, 5], // le blog et le forum citent la boutique
  [3, 6], [5, 6], // le forum et la boutique citent le club
];

export function entrants(n: number, liens: Lien[]): number[] {
  const e = Array(n).fill(0);
  for (const [, b] of liens) e[b]++;
  return e;
}

/**
 * Une itération du calcul : chaque page partage son score entre ses liens
 * sortants (fraction d), et la fraction 1 − d est redistribuée selon
 * `depart` (uniforme, ou seulement les sites de confiance pour TrustRank).
 * Une page sans lien sortant redistribue tout son score selon `depart`.
 */
export function iterer(pr: number[], liens: Lien[], d: number, depart: number[]): number[] {
  const n = pr.length;
  const sortants = Array(n).fill(0);
  for (const [a] of liens) sortants[a]++;
  const suiv = Array(n).fill(0);
  let orphelin = 0;
  for (let i = 0; i < n; i++) if (sortants[i] === 0) orphelin += pr[i];
  for (const [a, b] of liens) suiv[b] += (d * pr[a]) / sortants[a];
  for (let i = 0; i < n; i++) suiv[i] += ((1 - d) + d * orphelin) * depart[i];
  return suiv;
}

export function departUniforme(n: number): number[] {
  return Array(n).fill(1 / n);
}

/** Départ concentré sur des pages de confiance (TrustRank). */
export function departConfiance(n: number, confiance: number[]): number[] {
  const v = Array(n).fill(0);
  for (const i of confiance) v[i] = 1 / confiance.length;
  return v;
}

export function pagerank(n: number, liens: Lien[], d = 0.85, depart = departUniforme(n)) {
  let pr = departUniforme(n);
  let iterations = 0;
  for (; iterations < 200; iterations++) {
    const suiv = iterer(pr, liens, d, depart);
    const ecart = suiv.reduce((s, x, i) => s + Math.abs(x - pr[i]), 0);
    pr = suiv;
    if (ecart < 1e-9) break;
  }
  return { pr, iterations: iterations + 1 };
}

/**
 * Le surfeur aléatoire : à chaque clic, avec la probabilité d il suit un lien
 * de la page au hasard, sinon (ou s'il n'y a pas de lien) il repart d'une page
 * au hasard. Renvoie la nouvelle page.
 */
export function clic(page: number, n: number, liens: Lien[], d: number, alea: () => number): number {
  const sortants = liens.filter(([a]) => a === page).map(([, b]) => b);
  if (sortants.length && alea() < d) return sortants[Math.floor(alea() * sortants.length)];
  return Math.floor(alea() * n);
}

/** Ajoute une ferme de `k` pages qui pointent toutes vers la page `cible`. */
export function avecFerme(n: number, liens: Lien[], cible: number, k: number): { n: number; liens: Lien[] } {
  const ferme: Lien[] = [];
  for (let i = 0; i < k; i++) ferme.push([n + i, cible]);
  return { n: n + k, liens: [...liens, ...ferme] };
}

/** Rang (1 = premier) de chaque page selon un score ; ex æquo au même rang. */
export function rangs(score: number[]): number[] {
  return score.map((s) => 1 + score.filter((t) => t > s + 1e-9).length);
}

export const ordinal = (r: number) => (r === 1 ? '1ᵉʳ' : `${r}ᵉ`);
