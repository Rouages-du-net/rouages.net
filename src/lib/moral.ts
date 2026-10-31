// Les choix moraux, pour le module du même nom (section « Penser la
// technique ») :
//   - les trois variantes du dilemme du tramway étudiées dans 42 pays
//     (Awad et al., 2020), avec la part de personnes qui acceptent d'agir ;
//   - des dilemmes de voiture autonome, comparés aux préférences de Moral
//     Machine (2018) et aux règles de la commission d'éthique allemande (2017) ;
//   - le voile d'ignorance de J. Rawls : choisir une règle de répartition sans
//     savoir quelle place on occupera.

export interface Variante {
  id: 'aiguillage' | 'boucle' | 'passerelle';
  /** Part moyenne, par pays, des personnes qui acceptent d'agir (Awad et al., 2020). */
  accord: number;
}
export const VARIANTES: Variante[] = [
  { id: 'aiguillage', accord: 0.81 },
  { id: 'boucle', accord: 0.72 },
  { id: 'passerelle', accord: 0.51 },
];

export interface Dilemme {
  id: string;
  /** Ce qu'exprime, en moyenne, la foule de Moral Machine (préférence la plus forte), ou null. */
  foule: 'a' | 'b' | null;
  /** Ce que permet la commission allemande : 'a', 'b', ou 'aucune' (distinction interdite). */
  commission: 'a' | 'b' | 'aucune';
}
export const DILEMMES: Dilemme[] = [
  { id: 'animaux', foule: 'a', commission: 'a' },
  { id: 'nombre', foule: 'a', commission: 'a' },
  { id: 'age', foule: 'a', commission: 'aucune' },
];

// ---- Le voile d'ignorance ----

export interface RegleRepartition {
  id: 'total' | 'maximin' | 'egalite';
  /** Ce que reçoit chacune des cinq places, de la moins à la mieux lotie. */
  parts: number[];
}
export const REGLES: RegleRepartition[] = [
  { id: 'total', parts: [2, 5, 9, 14, 25] },
  { id: 'maximin', parts: [8, 9, 9, 10, 11] },
  { id: 'egalite', parts: [7, 7, 7, 7, 7] },
];

export const somme = (x: number[]) => x.reduce((s, v) => s + v, 0);

/** Lever le voile n fois : chaque fois, une place tirée au hasard. */
export function tirages(alea: () => number, r: RegleRepartition, n: number) {
  const places = Array.from({ length: n }, () => r.parts[Math.floor(alea() * r.parts.length)]);
  return { places, moyenne: somme(places) / n, pire: Math.min(...places) };
}
