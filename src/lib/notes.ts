// Classer par les notes, calculé pour de vrai dans le navigateur, pour le
// module « Classer par les notes » (section « Recommander ») :
//   - moyenne simple, moyenne bayésienne (formule publiée par IMDb) et borne
//     basse de l'intervalle de Wilson (billet d'Evan Miller, code de Reddit) ;
//   - tri « tendance » : formules publiées par Reddit et par une version
//     libre du logiciel de Hacker News ;
//   - pourquoi les avis en ligne forment un « J ».
// Produits, publications et opinions inventés pour le site.

export interface Produit {
  nom: string;
  icone: string;
  etoiles: number[]; // nombre d'avis à 1, 2, 3, 4 et 5 étoiles
}

export const PRODUITS: Produit[] = [
  { nom: 'Gourde isotherme', icone: '🥤', etoiles: [40, 30, 60, 300, 570] },
  { nom: 'Lampe frontale', icone: '🔦', etoiles: [0, 0, 0, 0, 2] },
  { nom: 'Casque audio', icone: '🎧', etoiles: [10, 5, 15, 80, 190] },
  { nom: 'Chargeur rapide', icone: '🔌', etoiles: [1, 0, 0, 1, 4] },
  { nom: 'Parapluie pliant', icone: '☂️', etoiles: [120, 60, 80, 140, 200] },
  { nom: 'Coussin de voyage', icone: '💤', etoiles: [0, 0, 1, 3, 8] },
  { nom: 'Montre connectée', icone: '⌚', etoiles: [6, 2, 1, 1, 2] },
];

export const total = (e: number[]) => e.reduce((s, x) => s + x, 0);
export const somme = (e: number[]) => e.reduce((s, x, i) => s + x * (i + 1), 0);
export const moyenne = (e: number[]) => (total(e) ? somme(e) / total(e) : 0);
/** Avis « positifs » : 4 ou 5 étoiles. */
export const positifs = (e: number[]) => e[3] + e[4];

/**
 * Moyenne bayésienne : on fait comme si le produit avait déjà reçu m avis
 * égaux à la moyenne générale C. Formule publiée par IMDb pour son Top 250 :
 * WR = v/(v+m)·R + m/(v+m)·C.
 */
export function bayes(e: number[], m: number, C: number): number {
  const v = total(e);
  return v + m === 0 ? C : (somme(e) + m * C) / (v + m);
}

/**
 * Borne basse de l'intervalle de Wilson pour une proportion : la part d'avis
 * positifs dont on est « raisonnablement sûr ». z = 1,96 pour 95 %, 1,28
 * pour 80 % (valeur du code publié par Reddit).
 */
export function wilson(pos: number, n: number, z = 1.96): { bas: number; haut: number } {
  if (n === 0) return { bas: 0, haut: 1 };
  const p = pos / n;
  const centre = p + (z * z) / (2 * n);
  const marge = z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n);
  const div = 1 + (z * z) / n;
  return { bas: (centre - marge) / div, haut: Math.min(1, (centre + marge) / div) };
}

export type Tri = 'moyenne' | 'nombre' | 'bayes' | 'wilson';

/** Moyenne générale de tous les avis du site : le « C » de la formule. */
export const moyenneSite = (produits: Produit[]) =>
  produits.reduce((s, p) => s + somme(p.etoiles), 0) / produits.reduce((s, p) => s + total(p.etoiles), 0);

export function score(e: number[], tri: Tri, C = 4, m = 10): number {
  switch (tri) {
    case 'moyenne': return moyenne(e);
    case 'nombre': return total(e);
    case 'bayes': return bayes(e, m, C);
    case 'wilson': return wilson(positifs(e), total(e)).bas;
  }
}

export function classer(produits: Produit[], tri: Tri, m = 10): Produit[] {
  const C = moyenneSite(produits);
  const sc = (p: Produit) => score(p.etoiles, tri, C, m);
  return [...produits].sort((a, b) => sc(b) - sc(a) || total(b.etoiles) - total(a.etoiles));
}

// ---- Tri « tendance » ----

export interface Publication {
  titre: string;
  heure: number; // heure de publication
  elan: number; // votes par heure au début
}

export const PUBLICATIONS: Publication[] = [
  { titre: 'Une photo de chat très réussie', heure: 0, elan: 60 },
  { titre: 'Tutoriel : réparer son vélo', heure: 4, elan: 25 },
  { titre: 'Annonce d’une éclipse ce soir', heure: 10, elan: 45 },
  { titre: 'Débat : faut-il interdire les trottinettes ?', heure: 14, elan: 30 },
  { titre: 'Découverte d’une nouvelle espèce de grenouille', heure: 20, elan: 35 },
  { titre: 'Un musée met ses archives en ligne', heure: 26, elan: 20 },
  { titre: 'Résultat surprise d’un match', heure: 30, elan: 50 },
  { titre: 'Recette de crêpes sans œufs', heure: 36, elan: 15 },
];

/** Votes reçus à l'heure t : l'élan s'essouffle au fil des heures. */
export function votes(p: Publication, t: number): number {
  const age = t - p.heure;
  if (age <= 0) return 0;
  return Math.round(p.elan * 8 * (1 - Math.exp(-age / 8)));
}

/**
 * Tri « hot » du code publié par Reddit : log10(score) + secondes / 45 000.
 * Chaque fois que le score est multiplié par 10, la publication « gagne »
 * 12,5 heures. On compte ici le temps en heures depuis le début.
 */
export function chaudReddit(score: number, heure: number): number {
  const s = Math.max(Math.abs(score), 1);
  return Math.sign(score) * Math.log10(s) + heure / 12.5;
}

/**
 * Formule d'une version publique du logiciel de Hacker News (Anarki) :
 * (points − 1)^0,8 / (âge en heures + 2)^1,8, sans les pénalités.
 */
export function chaudHN(points: number, ageHeures: number): number {
  return Math.pow(Math.max(points - 1, 0), 0.8) / Math.pow(ageHeures + 2, 1.8);
}

export type TriTendance = 'total' | 'reddit' | 'hn';

export function fil(t: number, tri: TriTendance) {
  return PUBLICATIONS.filter((p) => p.heure <= t)
    .map((p) => {
      const v = votes(p, t);
      const s = tri === 'total' ? v : tri === 'reddit' ? chaudReddit(v, p.heure) : chaudHN(v, t - p.heure);
      return { p, votes: v, age: t - p.heure, score: s };
    })
    .sort((a, b) => b.score - a.score);
}

// ---- Les avis en J ----

/**
 * Simule l'avis réel de `n` personnes (1 à 5 étoiles, en cloche un peu au-dessus de 3),
 * puis qui achète (plus probable si l'on était déjà attiré·e) et qui écrit un
 * avis (plus probable si l'on adore ou déteste). Renvoie les deux
 * histogrammes : ce que tout le monde penserait, et les avis publiés.
 */
export function avisPublies(alea: () => number, n: number, biaisAchat: number, biaisAvis: number) {
  const tous = [0, 0, 0, 0, 0];
  const publies = [0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    // Somme de trois tirages : une cloche approximative.
    const x = 3.3 + ((alea() + alea() + alea()) / 3 - 0.5) * 8;
    const note = Math.max(1, Math.min(5, Math.round(x)));
    tous[note - 1]++;
    const pAchat = 1 / (1 + Math.exp(-biaisAchat * (note - 3)));
    if (alea() > pAchat) continue;
    const extreme = Math.abs(note - 3) / 2; // 0 au milieu, 1 aux extrémités
    const pAvis = 0.1 + biaisAvis * (0.6 * extreme * extreme - 0.08);
    if (alea() < pAvis) publies[note - 1]++;
  }
  return { tous, publies };
}
