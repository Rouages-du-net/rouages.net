// Les IA qui prédisent : trois modèles inventés pour le module du même nom.
//   - prévoir une consommation d'électricité (série temporelle) ;
//   - corrélation ou causalité : glaces et coups de soleil ;
//   - la boucle de la police prédictive (d'après le mécanisme décrit par
//     Ensign et al., 2018).
// Données et chiffres inventés ; seul l'ordre de grandeur de la sensibilité
// au froid (environ 2,4 GW par degré en moins en hiver) suit RTE.
import { hasard } from './minilm';

// ---- Prévoir une consommation ----

export const HISTOIRE = 28; // jours connus
export const HORIZON = 7; // jours à prévoir
export type Methode = 'hier' | 'semaine' | 'moyenne' | 'temperature';

export interface Jour {
  jour: number; // 0 = lundi de la première semaine
  temperature: number; // °C
  conso: number; // GW (moyenne de la journée)
}

const weekend = (j: number) => j % 7 >= 5;
const froid = (t: number) => Math.max(0, 15 - t);

/** 35 jours d'hiver inventés ; `vague` : une vague de froid la dernière semaine. */
export function serie(vague: boolean): Jour[] {
  const alea = hasard(2026);
  const jours: Jour[] = [];
  for (let j = 0; j < HISTOIRE + HORIZON; j++) {
    const base = j >= HISTOIRE && vague ? 0 : 8;
    const temperature = Math.round((base + (alea() - 0.5) * 6) * 10) / 10;
    const conso = 50 + (weekend(j) ? -6 : 0) + 2.4 * froid(temperature) + (alea() - 0.5) * 2;
    jours.push({ jour: j, temperature, conso: Math.round(conso * 10) / 10 });
  }
  return jours;
}

/** Moindres carrés : conso ≈ a + b × week-end + c × (15 − température). */
function ajuster(h: Jour[]) {
  const X = h.map((d) => [1, weekend(d.jour) ? 1 : 0, froid(d.temperature)]);
  const y = h.map((d) => d.conso);
  const A = [0, 1, 2].map((i) => [0, 1, 2].map((k) => X.reduce((s, x) => s + x[i] * x[k], 0)));
  const v = [0, 1, 2].map((i) => X.reduce((s, x, n) => s + x[i] * y[n], 0));
  // Élimination de Gauss sur le petit système 3 × 3.
  for (let i = 0; i < 3; i++) {
    for (let k = i + 1; k < 3; k++) {
      const f = A[k][i] / A[i][i];
      for (let m = i; m < 3; m++) A[k][m] -= f * A[i][m];
      v[k] -= f * v[i];
    }
  }
  const c = [0, 0, 0];
  for (let i = 2; i >= 0; i--) c[i] = (v[i] - A[i].slice(i + 1).reduce((s, a, m) => s + a * c[i + 1 + m], 0)) / A[i][i];
  return c;
}

/**
 * Prévision des 7 derniers jours à partir des 28 premiers. La méthode
 * « température » utilise la température prévue de chaque jour (la
 * prévision météo), comme le font les gestionnaires de réseau.
 */
export function prevoir(jours: Jour[], m: Methode) {
  const h = jours.slice(0, HISTOIRE);
  const futur = jours.slice(HISTOIRE);
  const moyenne = h.slice(-7).reduce((s, d) => s + d.conso, 0) / 7;
  const c = m === 'temperature' ? ajuster(h) : null;
  const prevision = futur.map((d) => {
    if (m === 'hier') return h[h.length - 1].conso;
    if (m === 'semaine') return jours[d.jour - 7].conso;
    if (m === 'moyenne') return moyenne;
    return c![0] + c![1] * (weekend(d.jour) ? 1 : 0) + c![2] * froid(d.temperature);
  });
  const erreur = futur.reduce((s, d, i) => s + Math.abs(d.conso - prevision[i]), 0) / futur.length;
  return { prevision, erreur };
}

// ---- Corrélation ou causalité ----

export interface Journee {
  temperature: number;
  glaces: number; // glaces vendues
  coups: number; // coups de soleil soignés
}

/** 60 journées d'été inventées : la chaleur fait vendre des glaces ET donne des coups de soleil. */
export function ete(): Journee[] {
  const alea = hasard(1789);
  return Array.from({ length: 60 }, () => {
    const temperature = 14 + alea() * 20;
    return {
      temperature,
      glaces: Math.round(40 + 9 * (temperature - 14) + (alea() - 0.5) * 50),
      coups: Math.max(0, Math.round((temperature - 16) * 0.9 + (alea() - 0.5) * 6)),
    };
  });
}

export function correlation(x: number[], y: number[]) {
  const n = x.length;
  const mx = x.reduce((s, v) => s + v, 0) / n;
  const my = y.reduce((s, v) => s + v, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (x[i] - mx) * (y[i] - my);
    sxx += (x[i] - mx) ** 2;
    syy += (y[i] - my) ** 2;
  }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
}

/** Ce qui reste de y une fois retiré l'effet (linéaire) de z. */
export function residus(y: number[], z: number[]) {
  const n = y.length;
  const mz = z.reduce((s, v) => s + v, 0) / n;
  const my = y.reduce((s, v) => s + v, 0) / n;
  const pente = z.reduce((s, v, i) => s + (v - mz) * (y[i] - my), 0) / z.reduce((s, v) => s + (v - mz) ** 2, 0);
  return y.map((v, i) => v - my - pente * (z[i] - mz));
}

// ---- La boucle de la police prédictive ----

export const JOURS = 60;

/**
 * Deux quartiers. Chaque jour, une patrouille va dans un seul quartier ; la
 * police n'enregistre que les délits qu'elle découvre là où elle patrouille.
 * - méthode « naïve » : on patrouille là où l'on a enregistré le plus de délits ;
 * - méthode « corrigée » : on compare les délits par jour de patrouille, et un
 *   jour sur cinq la patrouille va dans le quartier le moins visité.
 * L'historique de départ est biaisé : 6 délits enregistrés en A, 4 en B.
 */
export function boucle(bPlus: boolean, corrigee: boolean) {
  const alea = hasard(404);
  const taux = { A: 5, B: bPlus ? 10 : 5 }; // délits réels par jour (en moyenne)
  const enregistres = { A: 6, B: 4 };
  const reels = { A: 0, B: 0 };
  const visites = { A: 1, B: 1 };
  const patrouilles: ('A' | 'B')[] = [];
  const tirer = (l: number) => {
    let n = 0;
    for (let i = 0; i < 20; i++) if (alea() < l / 20) n++;
    return n;
  };
  for (let j = 0; j < JOURS; j++) {
    const delits = { A: tirer(taux.A), B: tirer(taux.B) };
    reels.A += delits.A;
    reels.B += delits.B;
    let q: 'A' | 'B';
    if (!corrigee) q = enregistres.B > enregistres.A ? 'B' : 'A';
    else if (j % 5 === 4) q = visites.B < visites.A ? 'B' : 'A';
    else q = enregistres.B / visites.B > enregistres.A / visites.A ? 'B' : 'A';
    enregistres[q] += delits[q];
    visites[q]++;
    patrouilles.push(q);
  }
  // Délits enregistrés pendant les 60 jours, sans l'historique de départ.
  return { patrouilles, reels, enregistres: { A: enregistres.A - 6, B: enregistres.B - 4 } };
}
