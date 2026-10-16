// Systèmes de recommandation, calculés pour de vrai dans le navigateur,
// pour le module « Les IA qui recommandent » :
//   - filtrage collaboratif : « les personnes qui te ressemblent ont aimé… » ;
//   - factorisation de matrice : des goûts cachés appris à partir des notes ;
//   - un fil classé selon ce qu'on choisit d'optimiser ;
//   - une boucle de popularité (« les riches deviennent plus riches »).
// Vidéos et personnes inventées pour le site.

export interface Video {
  titre: string;
  icone: string;
  theme: string;
  choc: number; // 0 à 1 : à quel point le titre et l'image misent sur l'émotion forte
}

export const VIDEOS: Video[] = [
  { titre: 'Le pain au levain, pas à pas', icone: '🍞', theme: 'cuisine', choc: 0.1 },
  { titre: 'Cinq erreurs en cuisine', icone: '🍳', theme: 'cuisine', choc: 0.5 },
  { titre: 'Pourquoi le ciel est bleu', icone: '🔭', theme: 'sciences', choc: 0.1 },
  { titre: 'Les volcans les plus dangereux', icone: '🌋', theme: 'sciences', choc: 0.7 },
  { titre: 'Résumé du match de dimanche', icone: '⚽', theme: 'sport', choc: 0.3 },
  { titre: 'Les pires fautes de l’année', icone: '🟥', theme: 'sport', choc: 0.8 },
  { titre: 'Partie commentée d’un jeu de stratégie', icone: '🎮', theme: 'jeux', choc: 0.2 },
  { titre: 'Ce jeu a rendu des joueurs fous', icone: '😱', theme: 'jeux', choc: 0.9 },
  { titre: 'Apprendre trois accords de guitare', icone: '🎸', theme: 'musique', choc: 0.1 },
  { titre: 'Le concert qui a mal tourné', icone: '🎤', theme: 'musique', choc: 0.8 },
  { titre: 'Sketch : la réunion de famille', icone: '😂', theme: 'humour', choc: 0.4 },
  { titre: 'Les chutes les plus drôles', icone: '🤸', theme: 'humour', choc: 0.7 },
];

// Notes de 1 à 5 données par des personnes imaginaires (0 = pas vu).
export const PERSONNES: { nom: string; notes: number[] }[] = [
  { nom: 'Awa', notes: [5, 4, 4, 3, 0, 0, 1, 0, 3, 0, 2, 0] },
  { nom: 'Bastien', notes: [0, 1, 0, 2, 5, 5, 4, 4, 0, 1, 3, 4] },
  { nom: 'Chloé', notes: [4, 0, 5, 5, 0, 1, 0, 0, 4, 2, 0, 1] },
  { nom: 'Diego', notes: [1, 0, 2, 0, 4, 0, 5, 5, 0, 3, 4, 5] },
  { nom: 'Elif', notes: [5, 5, 0, 2, 1, 0, 0, 1, 5, 4, 3, 0] },
  { nom: 'Farid', notes: [0, 2, 5, 4, 2, 0, 3, 0, 0, 0, 1, 2] },
  { nom: 'Grace', notes: [2, 0, 1, 0, 5, 4, 0, 3, 2, 5, 5, 4] },
  { nom: 'Hugo', notes: [3, 3, 4, 0, 0, 2, 5, 3, 4, 0, 0, 2] },
];

// ——— Filtrage collaboratif (par personnes semblables) ———

// Ressemblance entre deux personnes : corrélation de leurs notes sur les
// vidéos que les deux ont vues (de −1 à 1).
export function ressemblance(a: number[], b: number[]): { r: number; communes: number } {
  const idx = a.map((_, i) => i).filter((i) => a[i] && b[i]);
  if (idx.length < 2) return { r: 0, communes: idx.length };
  const ma = idx.reduce((s, i) => s + a[i], 0) / idx.length;
  const mb = idx.reduce((s, i) => s + b[i], 0) / idx.length;
  let num = 0, da = 0, db = 0;
  for (const i of idx) {
    num += (a[i] - ma) * (b[i] - mb);
    da += (a[i] - ma) ** 2;
    db += (b[i] - mb) ** 2;
  }
  return { r: da && db ? num / Math.sqrt(da * db) : 0, communes: idx.length };
}

// Note prédite pour chaque vidéo non vue : ta moyenne, corrigée par les écarts
// à la moyenne des k personnes qui te ressemblent le plus.
export function recommander(moi: number[], autres: { nom: string; notes: number[] }[], k = 3) {
  const vues = moi.filter(Boolean);
  const maMoyenne = vues.length ? vues.reduce((s, x) => s + x, 0) / vues.length : 3;
  const voisins = autres
    .map((p) => ({ ...p, ...ressemblance(moi, p.notes) }))
    .filter((p) => p.r > 0)
    .sort((x, y) => y.r - x.r)
    .slice(0, k);
  const predictions = VIDEOS.map((_, i) => {
    if (moi[i]) return null;
    let num = 0, den = 0;
    for (const v of voisins) {
      if (!v.notes[i]) continue;
      const moy = v.notes.filter(Boolean).reduce((s, x) => s + x, 0) / v.notes.filter(Boolean).length;
      num += v.r * (v.notes[i] - moy);
      den += Math.abs(v.r);
    }
    return den ? Math.max(1, Math.min(5, maMoyenne + num / den)) : null;
  });
  return { voisins, predictions };
}

// ——— Factorisation de matrice ———

// Chaque personne et chaque vidéo reçoit 2 nombres (des « goûts cachés »).
// La note prédite est leur produit scalaire, plus des biais. On ajuste tout
// par descente de gradient stochastique sur les notes connues.
export class Factorisation {
  P: number[][];
  Q: number[][];
  bu: number[];
  bi: number[];
  moyenne: number;
  epoques = 0;
  constructor(readonly notes: number[][], alea: () => number, readonly k = 2) {
    const g = () => (alea() - 0.5) * 0.2;
    this.P = notes.map(() => Array.from({ length: k }, g));
    this.Q = notes[0].map(() => Array.from({ length: k }, g));
    this.bu = notes.map(() => 0);
    this.bi = notes[0].map(() => 0);
    const toutes = notes.flat().filter(Boolean);
    this.moyenne = toutes.reduce((s, x) => s + x, 0) / toutes.length;
  }

  predire(u: number, i: number) {
    return this.moyenne + this.bu[u] + this.bi[i] + this.P[u].reduce((s, p, f) => s + p * this.Q[i][f], 0);
  }

  // Une époque ; renvoie l'erreur moyenne (racine de la moyenne des carrés).
  epoque(pas = 0.05, reg = 0.05): number {
    let e2 = 0, n = 0;
    this.notes.forEach((ligne, u) =>
      ligne.forEach((r, i) => {
        if (!r) return;
        const e = r - this.predire(u, i);
        e2 += e * e;
        n++;
        this.bu[u] += pas * (e - reg * this.bu[u]);
        this.bi[i] += pas * (e - reg * this.bi[i]);
        for (let f = 0; f < this.k; f++) {
          const p = this.P[u][f], q = this.Q[i][f];
          this.P[u][f] += pas * (e * q - reg * p);
          this.Q[i][f] += pas * (e * p - reg * q);
        }
      }),
    );
    this.epoques++;
    return Math.sqrt(e2 / n);
  }
}

// ——— Un fil classé selon un objectif ———

// Hypothèses de la simulation (inventées, et dites comme telles sur la page) :
// la personne préfère certains thèmes ; une vidéo « choc » retient un peu plus
// longtemps, même quand on ne l'a pas choisie ni appréciée.
export function classerFil(themesAimes: string[], poidsTemps: number) {
  return VIDEOS.map((v, i) => {
    const interet = themesAimes.includes(v.theme) ? 1 : 0.2;
    const temps = 0.5 * interet + 0.6 * v.choc; // durée de visionnage attendue (simulée)
    const satisfaction = interet * (1 - 0.4 * v.choc); // « content d'avoir vu » (simulé)
    return { i, video: v, interet, temps, satisfaction, score: poidsTemps * temps + (1 - poidsTemps) * satisfaction };
  }).sort((a, b) => b.score - a.score);
}

// ——— La boucle de popularité ———

// Des morceaux de qualité voisine ; chaque auditeur en écoute un. Sans
// influence, il choisit selon la qualité (avec du hasard). Avec influence,
// le classement des plus écoutés pèse sur son choix. Inspiré de
// l'expérience MusicLab (Salganik, Dodds et Watts, 2006).
export function marche(qualites: number[], auditeurs: number, influence: number, alea: () => number): number[] {
  const ecoutes = qualites.map(() => 0);
  for (let a = 0; a < auditeurs; a++) {
    const total = ecoutes.reduce((s, x) => s + x, 0);
    const poids = qualites.map((q, i) => q * (1 - influence) + influence * ((ecoutes[i] + 1) / (total + qualites.length)) * qualites.length * q);
    let r = alea() * poids.reduce((s, x) => s + x, 0);
    let i = 0;
    while (i < poids.length - 1 && (r -= poids[i]) > 0) i++;
    ecoutes[i]++;
  }
  return ecoutes;
}

// Indice de Gini : 0 = tout le monde pareil, 1 = un seul prend tout.
export function gini(x: number[]): number {
  const s = [...x].sort((a, b) => a - b);
  const n = s.length;
  const total = s.reduce((a, b) => a + b, 0) || 1;
  return s.reduce((acc, v, i) => acc + (2 * (i + 1) - n - 1) * v, 0) / (n * total);
}
