// La sagesse des foules, calculée pour de vrai dans le navigateur, pour le
// module « La sagesse des foules » (section « L'intelligence collective ») :
//   - une foire où des visiteur·ses estiment le poids d'un bœuf (Galton, 1907) ;
//   - ce qui arrive quand tout le monde partage la même erreur ;
//   - le théorème du jury de Condorcet (1785), calcul exact ;
//   - une cascade informationnelle (Bikhchandani, Hirshleifer, Welch, 1992).
// Estimations et votes simulés : ce ne sont pas les données historiques.

/** Poids réel du bœuf de 1907, d'après la relecture des archives (Wallis, 2014). */
export const POIDS_REEL = 1197;

/** Tirage gaussien (méthode de Box-Muller) à partir d'un générateur uniforme. */
export function gauss(alea: () => number): number {
  const u = Math.max(alea(), 1e-12);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * alea());
}

/**
 * Estimations de n personnes. Chacune se trompe à sa façon (écart type
 * `dispersion`), et toutes partagent une même erreur commune `biais`
 * (par exemple : le bœuf a l'air plus gros sous cette lumière).
 */
export function estimations(alea: () => number, n: number, dispersion = 75, biais = 0): number[] {
  return Array.from({ length: n }, () => Math.round(POIDS_REEL + biais + dispersion * gauss(alea)));
}

export const moyenne = (x: number[]) => x.reduce((s, v) => s + v, 0) / x.length;

export function mediane(x: number[]): number {
  const t = [...x].sort((a, b) => a - b);
  const m = Math.floor(t.length / 2);
  return t.length % 2 ? t[m] : (t[m - 1] + t[m]) / 2;
}

/** Erreur moyenne des individus, en valeur absolue. */
export const erreurIndividuelle = (x: number[], vrai = POIDS_REEL) => moyenne(x.map((v) => Math.abs(v - vrai)));

// ---- Condorcet ----

/** Coefficient binomial (en flottants, suffisant jusqu'à n = 1001). */
function logComb(n: number, k: number): number {
  let s = 0;
  for (let i = 1; i <= k; i++) s += Math.log(n - k + i) - Math.log(i);
  return s;
}

/**
 * Probabilité qu'une majorité de n votant·es (n impair) ait raison, si
 * chacun·e a raison avec la probabilité p, indépendamment des autres.
 */
export function majoriteJuste(n: number, p: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  let total = 0;
  for (let k = Math.floor(n / 2) + 1; k <= n; k++) total += Math.exp(logComb(n, k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  return Math.min(1, total);
}

// ---- Cascades ----

/**
 * Une file de n personnes choisit entre A (la bonne réponse) et B. Chacune
 * reçoit un indice privé juste avec la probabilité `fiabilite`. Si elle voit
 * les choix précédents, elle suit la majorité dès que celle-ci a deux voix
 * d'avance (son indice ne peut plus la renverser : c'est la règle du modèle
 * de 1992 quand on départage en suivant son propre indice) ; sinon elle suit
 * son indice. Renvoie la suite des choix (true = juste).
 */
export function cascade(alea: () => number, n: number, fiabilite: number, voitLesAutres: boolean): boolean[] {
  const choix: boolean[] = [];
  let avance = 0; // voix pour A moins voix pour B
  for (let i = 0; i < n; i++) {
    const indice = alea() < fiabilite;
    const c = voitLesAutres && Math.abs(avance) >= 2 ? avance > 0 : indice;
    choix.push(c);
    avance += c ? 1 : -1;
  }
  return choix;
}
