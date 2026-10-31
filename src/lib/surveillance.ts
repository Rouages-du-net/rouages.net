// Surveillance et vie privée, pour le module du même nom (section « Penser
// la technique ») :
//   - un panoptique : être peut-être vu suffit à changer les comportements ;
//   - l'unicité : dans une population inventée, combien de personnes
//     partagent tes caractéristiques (l'idée de L. Sweeney) ;
//   - les métadonnées : ce qu'un journal d'appels révèle sans aucun contenu.
// Personnes, lieux et appels inventés.

/**
 * Panoptique. Chaque détenu·e respecte la règle s'il ou elle croit être vu·e,
 * avec une probabilité perçue. Si la tour est opaque, la probabilité perçue
 * est celle que la personne imagine (élevée) ; sinon, c'est la vraie part de
 * cellules regardées. Renvoie la part qui respecte la règle.
 */
export function panoptique(alea: () => number, regardees: number, opaque: boolean, n = 100) {
  const percue = opaque ? Math.max(regardees, 0.8) : regardees;
  let respect = 0;
  for (let i = 0; i < n; i++) {
    const tentation = alea(); // envie d'enfreindre la règle
    if (percue >= tentation * 0.9) respect++;
  }
  return respect / n;
}

// ---- Unicité ----

export interface Personne {
  quartier: number; // 0 à 19
  sexe: 0 | 1;
  annee: number; // 1940 à 2009
  jour: number; // jour de l'année, 0 à 364
}

/** Une ville inventée de n personnes. */
export function ville(alea: () => number, n = 20000): Personne[] {
  return Array.from({ length: n }, () => ({
    quartier: Math.floor(alea() * 20),
    sexe: alea() < 0.5 ? 0 : 1,
    annee: 1940 + Math.floor(alea() * 70),
    jour: Math.floor(alea() * 365),
  }));
}

export type Cle = keyof Personne;

/** Combien de personnes partagent les valeurs connues de la personne cible. */
export function semblables(pop: Personne[], cible: Personne, connues: Cle[]) {
  return pop.filter((p) => connues.every((k) => p[k] === cible[k])).length;
}

/** Part de la population unique avec ces informations connues. */
export function partUnique(pop: Personne[], connues: Cle[]) {
  const comptes = new Map<string, number>();
  const cle = (p: Personne) => connues.map((k) => p[k]).join('|');
  pop.forEach((p) => comptes.set(cle(p), (comptes.get(cle(p)) ?? 0) + 1));
  return pop.filter((p) => comptes.get(cle(p)) === 1).length / pop.length;
}
