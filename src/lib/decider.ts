// Des algorithmes qui décident, calculés pour de vrai dans le navigateur,
// pour le module « Les IA qui décident pour nous » :
//   - une grille de score de crédit, son explication point par point et une
//     explication contrefactuelle (Wachter, Mittelstadt et Russell, 2017) ;
//   - le dilemme de l'équité : taux d'erreur et valeur prédictive par groupe
//     (Chouldechova, 2017) ;
//   - une boucle de contrôles ciblés, quand on ne connaît le résultat que des
//     dossiers contrôlés.
// Personnes, points et taux sont inventés.

import { gauss } from './sagesse';

// ---- Grille de score ----

export interface Critere {
  id: string;
  /** Points par unité. */
  points: number;
  min: number;
  max: number;
  pas: number;
  /** La personne peut-elle le changer, en principe ? */
  modifiable: boolean;
}

export const CRITERES: Critere[] = [
  { id: 'revenu', points: 40, min: 1, max: 5, pas: 0.5, modifiable: false },
  { id: 'anciennete', points: 8, min: 0, max: 10, pas: 1, modifiable: false },
  { id: 'endettement', points: -4, min: 0, max: 50, pas: 5, modifiable: true },
  { id: 'incidents', points: -60, min: 0, max: 3, pas: 1, modifiable: false },
  { id: 'apport', points: 3, min: 0, max: 30, pas: 5, modifiable: true },
];
export const BASE = 420;
export const SEUIL = 500;

export type Dossier = Record<string, number>;

export function contributions(d: Dossier) {
  return CRITERES.map((c) => ({ id: c.id, points: c.points * d[c.id] }));
}
export const score = (d: Dossier) => BASE + contributions(d).reduce((s, c) => s + c.points, 0);

/**
 * Explication contrefactuelle : pour chaque critère modifiable, le plus
 * petit changement (par pas) qui suffirait, seul, à franchir le seuil.
 */
export function contrefactuels(d: Dossier) {
  const manque = SEUIL - score(d);
  if (manque <= 0) return [];
  return CRITERES.filter((c) => c.modifiable).flatMap((c) => {
    let v = d[c.id];
    while (v >= c.min && v <= c.max) {
      v += c.points > 0 ? c.pas : -c.pas;
      if (v < c.min || v > c.max) return [];
      if (score({ ...d, [c.id]: v }) >= SEUIL) return [{ id: c.id, de: d[c.id], a: v }];
    }
    return [];
  });
}

// ---- Équité ----

export interface Groupe {
  /** Risque réel de chaque personne, entre 0 et 1. */
  risques: number[];
  /** Ce qui arrive vraiment (1 = l'événement prédit se produit). */
  issues: number[];
}

/** n personnes dont le risque moyen vaut `prevalence` ; le score est ce risque (score calibré). */
export function groupe(alea: () => number, n: number, prevalence: number): Groupe {
  const risques = Array.from({ length: n }, () => Math.min(0.97, Math.max(0.03, prevalence + 0.22 * gauss(alea))));
  return { risques, issues: risques.map((r) => (alea() < r ? 1 : 0)) };
}

/** Taux d'erreur et valeur prédictive quand on signale « à risque » les scores au-dessus du seuil. */
export function mesures(g: Groupe, seuil: number) {
  let vp = 0, fp = 0, vn = 0, fn = 0;
  g.risques.forEach((r, i) => {
    const signale = r >= seuil, y = g.issues[i];
    if (signale && y) vp++;
    else if (signale) fp++;
    else if (y) fn++;
    else vn++;
  });
  return {
    signales: (vp + fp) / g.risques.length,
    /** Parmi les personnes signalées, part de celles chez qui l'événement se produit. */
    vpp: vp + fp ? vp / (vp + fp) : 0,
    /** Parmi les personnes sans événement, part signalée à tort. */
    tfp: fp + vn ? fp / (fp + vn) : 0,
    /** Parmi les personnes avec événement, part non signalée. */
    tfn: vp + fn ? fn / (vp + fn) : 0,
    prevalence: (vp + fn) / g.risques.length,
  };
}

// ---- Contrôles ciblés ----

export interface Tour {
  /** Part des contrôles faits dans le groupe B. */
  partB: number;
  /** Taux estimé par le modèle, dans A et dans B. */
  estA: number;
  estB: number;
}

/**
 * Deux groupes avec exactement le même taux réel d'erreurs (`taux`). Au
 * départ, l'historique a contrôlé davantage le groupe B. À chaque tour, le
 * modèle estime un taux par groupe, puis les contrôles sont répartis en
 * proportion du nombre d'erreurs qu'il s'attend à trouver dans chaque groupe,
 * sauf une part `hasard` tirée au sort. Estimation « naïve » :
 * erreurs trouvées divisées par tous les dossiers du groupe (un dossier non
 * contrôlé compte comme sans erreur). Estimation « juste » : erreurs trouvées
 * divisées par les dossiers contrôlés.
 */
export function boucle(alea: () => number, naive: boolean, hasard: number, tours = 10) {
  const nA = 6000, nB = 4000, budget = 600, taux = 0.08;
  const ctrl = { A: 240, B: 360 }; // historique : 60 % des contrôles dans B
  const trouve = { A: 0, B: 0 }, total = { A: 0, B: 0 };
  const binom = (n: number) => {
    let k = 0;
    for (let i = 0; i < n; i++) if (alea() < taux) k++;
    return k;
  };
  const historique: Tour[] = [];
  for (let t = 0; t < tours; t++) {
    trouve.A += binom(ctrl.A);
    trouve.B += binom(ctrl.B);
    total.A += ctrl.A;
    total.B += ctrl.B;
    const estA = naive ? trouve.A / (nA * (t + 1)) : trouve.A / total.A;
    const estB = naive ? trouve.B / (nB * (t + 1)) : trouve.B / total.B;
    historique.push({ partB: ctrl.B / budget, estA, estB });
    // Tour suivant : une part au hasard (proportionnelle à la taille des
    // groupes), le reste en proportion du nombre d'erreurs que le modèle
    // s'attend à trouver dans chaque groupe.
    const auHasard = Math.round(budget * hasard);
    const hB = Math.round((auHasard * nB) / (nA + nB));
    const attenduA = nA * estA, attenduB = nB * estB;
    const versB = Math.round(((budget - auHasard) * attenduB) / (attenduA + attenduB || 1));
    ctrl.B = hB + versB;
    ctrl.A = budget - ctrl.B;
  }
  return historique;
}
