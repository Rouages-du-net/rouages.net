// Algorithmes de recherche et d'optimisation, calculés pour de vrai dans le
// navigateur, pour le module « Les IA qui cherchent et optimisent » :
//   - plus court chemin sur une carte en grille : Dijkstra et A* ;
//   - voyageur de commerce : force brute, plus proche voisin, 2-opt ;
//   - colonie de fourmis (Ant System) ;
//   - algorithme génétique sur un « sac de randonnée ».

// ——— Plus court chemin ———

// Une carte en grille : '#' bâtiment (infranchissable), '.' rue (1 minute),
// '~' rue embouteillée (5 minutes), 'D' départ, 'A' arrivée.
export interface Carte {
  larg: number;
  haut: number;
  cases: string[];
  depart: number;
  arrivee: number;
}

export function lireCarte(lignes: string[]): Carte {
  const cases = lignes.join('').split('');
  return { larg: lignes[0].length, haut: lignes.length, cases, depart: cases.indexOf('D'), arrivee: cases.indexOf('A') };
}

export const coutCase = (c: string) => (c === '~' ? 5 : c === '#' ? Infinity : 1);

function voisins(carte: Carte, i: number): number[] {
  const x = i % carte.larg;
  const y = Math.floor(i / carte.larg);
  const v: number[] = [];
  if (y > 0) v.push(i - carte.larg);
  if (x < carte.larg - 1) v.push(i + 1);
  if (y < carte.haut - 1) v.push(i + carte.larg);
  if (x > 0) v.push(i - 1);
  return v.filter((j) => carte.cases[j] !== '#');
}

const manhattan = (carte: Carte, i: number, j: number) =>
  Math.abs((i % carte.larg) - (j % carte.larg)) + Math.abs(Math.floor(i / carte.larg) - Math.floor(j / carte.larg));

// Recherche du meilleur chemin. Avec `poids` = 0, c'est l'algorithme de
// Dijkstra : on explore toujours la case la plus proche du départ. Avec
// `poids` = 1, c'est A* : on ajoute une estimation de la distance qui reste
// (à vol d'oiseau, ici en « pâtés de maisons »). Avec un poids plus grand,
// on fonce vers l'arrivée… au risque de rater le meilleur chemin.
export function chercher(carte: Carte, poids = 0): { ordre: number[]; chemin: number[]; cout: number } {
  const n = carte.cases.length;
  const dist = new Array(n).fill(Infinity);
  const avant = new Array(n).fill(-1);
  const fait = new Array(n).fill(false);
  const ouverts = new Set<number>([carte.depart]);
  dist[carte.depart] = 0;
  const ordre: number[] = [];
  while (ouverts.size) {
    // La case ouverte la plus prometteuse (à égalité : la plus proche de l'arrivée).
    let meilleure = -1;
    let score = Infinity;
    for (const i of ouverts) {
      const h = manhattan(carte, i, carte.arrivee);
      const s = dist[i] + poids * h;
      if (s < score - 1e-9 || (Math.abs(s - score) < 1e-9 && h < manhattan(carte, meilleure, carte.arrivee))) {
        meilleure = i;
        score = s;
      }
    }
    ouverts.delete(meilleure);
    fait[meilleure] = true;
    ordre.push(meilleure);
    if (meilleure === carte.arrivee) break;
    for (const j of voisins(carte, meilleure)) {
      if (fait[j]) continue;
      const d = dist[meilleure] + coutCase(carte.cases[j]);
      if (d < dist[j]) {
        dist[j] = d;
        avant[j] = meilleure;
        ouverts.add(j);
      }
    }
  }
  const chemin: number[] = [];
  for (let i = carte.arrivee; i !== -1; i = avant[i]) chemin.unshift(i);
  return { ordre, chemin: chemin[0] === carte.depart ? chemin : [], cout: dist[carte.arrivee] };
}

// ——— Voyageur de commerce ———

export interface Ville {
  nom: string;
  x: number;
  y: number;
}

export const distance = (a: Ville, b: Ville) => Math.hypot(a.x - b.x, a.y - b.y);
export const longueur = (villes: Ville[], ordre: number[]) =>
  ordre.reduce((s, v, k) => s + distance(villes[v], villes[ordre[(k + 1) % ordre.length]]), 0);

// Nombre de tournées différentes pour n villes : (n − 1)! / 2.
export function nombreTournees(n: number): number {
  let f = 1;
  for (let k = 2; k < n; k++) f *= k;
  return n < 3 ? 1 : f / 2;
}

// Essayer toutes les tournées (possible seulement pour peu de villes).
export function forceBrute(villes: Ville[]): { ordre: number[]; essais: number } {
  const reste = villes.map((_, i) => i).slice(1);
  let meilleur: number[] = [];
  let min = Infinity;
  let essais = 0;
  const permuter = (k: number) => {
    if (k === reste.length) {
      if (reste[0] > reste[reste.length - 1]) return; // même tournée dans l'autre sens
      essais++;
      const o = [0, ...reste];
      const l = longueur(villes, o);
      if (l < min) {
        min = l;
        meilleur = o;
      }
      return;
    }
    for (let i = k; i < reste.length; i++) {
      [reste[k], reste[i]] = [reste[i], reste[k]];
      permuter(k + 1);
      [reste[k], reste[i]] = [reste[i], reste[k]];
    }
  };
  permuter(0);
  return { ordre: meilleur, essais };
}

// Heuristique gloutonne : aller toujours à la ville non visitée la plus proche.
export function plusProcheVoisin(villes: Ville[], depart = 0): number[] {
  const ordre = [depart];
  const libres = new Set(villes.map((_, i) => i).filter((i) => i !== depart));
  while (libres.size) {
    const der = villes[ordre[ordre.length - 1]];
    let choix = -1;
    for (const i of libres) if (choix < 0 || distance(der, villes[i]) < distance(der, villes[choix])) choix = i;
    ordre.push(choix);
    libres.delete(choix);
  }
  return ordre;
}

// Amélioration « 2-opt » : tant que décroiser deux routes raccourcit la
// tournée, on le fait.
export function deuxOpt(villes: Ville[], ordre: number[]): number[] {
  const o = [...ordre];
  let mieux = true;
  while (mieux) {
    mieux = false;
    for (let i = 1; i < o.length - 1; i++)
      for (let j = i + 1; j < o.length; j++) {
        const a = villes[o[i - 1]], b = villes[o[i]], c = villes[o[j]], d = villes[o[(j + 1) % o.length]];
        if (distance(a, c) + distance(b, d) < distance(a, b) + distance(c, d) - 1e-9) {
          o.splice(i, j - i + 1, ...o.slice(i, j + 1).reverse());
          mieux = true;
        }
      }
  }
  return o;
}

// ——— Colonie de fourmis (Ant System, Dorigo) ———

// Chaque fourmi construit une tournée en choisissant la ville suivante au
// hasard, avec une préférence pour les routes courtes et pour celles où il
// y a beaucoup de phéromone. Ensuite la phéromone s'évapore un peu, et
// chaque fourmi en dépose sur son trajet, d'autant plus que sa tournée est
// courte. Les bonnes routes se renforcent d'elles-mêmes.
export class Fourmilliere {
  pheromone: number[][];
  meilleure: number[] = [];
  meilleureLongueur = Infinity;
  iterations = 0;
  constructor(
    readonly villes: Ville[],
    readonly alea: () => number,
    readonly nFourmis = 12,
    readonly alpha = 1,
    readonly beta = 3,
    readonly evaporation = 0.3,
  ) {
    const n = villes.length;
    this.pheromone = Array.from({ length: n }, () => new Array(n).fill(1));
  }

  private tournee(): number[] {
    const n = this.villes.length;
    const ordre = [Math.floor(this.alea() * n)];
    const libres = new Set([...Array(n).keys()].filter((i) => i !== ordre[0]));
    while (libres.size) {
      const i = ordre[ordre.length - 1];
      const choix = [...libres];
      const poids = choix.map((j) => this.pheromone[i][j] ** this.alpha * (1 / distance(this.villes[i], this.villes[j])) ** this.beta);
      let r = this.alea() * poids.reduce((a, b) => a + b, 0);
      let k = 0;
      while (k < choix.length - 1 && (r -= poids[k]) > 0) k++;
      ordre.push(choix[k]);
      libres.delete(choix[k]);
    }
    return ordre;
  }

  iteration(): { longueurs: number[] } {
    const n = this.villes.length;
    const tournees = Array.from({ length: this.nFourmis }, () => this.tournee());
    const longueurs = tournees.map((t) => longueur(this.villes, t));
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) this.pheromone[i][j] *= 1 - this.evaporation;
    const moyenne = longueurs.reduce((a, b) => a + b, 0) / longueurs.length;
    tournees.forEach((t, k) => {
      const depot = moyenne / longueurs[k];
      t.forEach((v, m) => {
        const w = t[(m + 1) % n];
        this.pheromone[v][w] += depot;
        this.pheromone[w][v] += depot;
      });
      if (longueurs[k] < this.meilleureLongueur) {
        this.meilleureLongueur = longueurs[k];
        this.meilleure = t;
      }
    });
    this.iterations++;
    return { longueurs };
  }
}

// ——— Algorithme génétique : le sac de randonnée ———

export interface Objet {
  nom: string;
  icone: string;
  poids: number; // en kg
  utilite: number; // points
}

// Un « individu » est un sac : pour chaque objet, 1 s'il est dedans, 0 sinon.
export type Sac = number[];

export const poidsSac = (objets: Objet[], s: Sac) => s.reduce((t, b, i) => t + b * objets[i].poids, 0);
export const utiliteSac = (objets: Objet[], s: Sac) => s.reduce((t, b, i) => t + b * objets[i].utilite, 0);

// La « note » d'un sac : son utilité, mais un sac trop lourd est très pénalisé.
export const note = (objets: Objet[], s: Sac, max: number) => {
  const p = poidsSac(objets, s);
  return p <= max ? utiliteSac(objets, s) : utiliteSac(objets, s) - 50 * (p - max);
};

export class Evolution {
  population: Sac[];
  generation = 0;
  constructor(
    readonly objets: Objet[],
    readonly max: number,
    readonly alea: () => number,
    readonly taille = 24,
    readonly mutation = 0.05,
  ) {
    this.population = Array.from({ length: taille }, () => objets.map(() => (alea() < 0.3 ? 1 : 0)));
    this.trier();
  }

  private trier() {
    this.population.sort((a, b) => note(this.objets, b, this.max) - note(this.objets, a, this.max));
  }

  // Sélection par tournoi : on tire deux sacs au hasard, le meilleur gagne.
  private parent(): Sac {
    const a = this.population[Math.floor(this.alea() * this.taille)];
    const b = this.population[Math.floor(this.alea() * this.taille)];
    return note(this.objets, a, this.max) >= note(this.objets, b, this.max) ? a : b;
  }

  // Une génération : on garde les deux meilleurs (élitisme), puis chaque
  // nouveau sac prend le début d'un parent et la fin de l'autre
  // (croisement), et chaque objet a une petite chance d'être ajouté ou
  // retiré (mutation).
  suivante() {
    const enfants: Sac[] = this.population.slice(0, 2).map((s) => [...s]);
    while (enfants.length < this.taille) {
      const p = this.parent();
      const q = this.parent();
      const coupe = 1 + Math.floor(this.alea() * (this.objets.length - 1));
      enfants.push([...p.slice(0, coupe), ...q.slice(coupe)].map((b) => (this.alea() < this.mutation ? 1 - b : b)));
    }
    this.population = enfants;
    this.trier();
    this.generation++;
  }

  get meilleur() {
    return this.population[0];
  }
}

// La meilleure solution exacte, en essayant tous les sacs (2^n : possible
// pour une quinzaine d'objets), pour comparer.
export function meilleurSacExact(objets: Objet[], max: number): { sac: Sac; essais: number } {
  let best: Sac = objets.map(() => 0);
  let bestU = -1;
  const n = objets.length;
  for (let m = 0; m < 1 << n; m++) {
    const s = objets.map((_, i) => (m >> i) & 1);
    if (poidsSac(objets, s) <= max) {
      const u = utiliteSac(objets, s);
      if (u > bestU) {
        bestU = u;
        best = s;
      }
    }
  }
  return { sac: best, essais: 1 << n };
}

// Le sac de randonnée du module : poids en kg, utilité en points (inventés).
export const MAX_SAC = 9;
export const OBJETS_SAC: Objet[] = (
  [
    ['tente', '⛺', 2.5, 15],
    ['sac de couchage', '🛌', 1.5, 12],
    ['eau (2 L)', '💧', 2, 16],
    ['réchaud', '🔥', 1, 4],
    ['nourriture', '🥫', 1.5, 9],
    ['pull', '🧥', 0.8, 6],
    ['lampe', '🔦', 0.3, 5],
    ['trousse de secours', '🩹', 0.4, 7],
    ['carte', '🗺️', 0.1, 6],
    ['appareil photo', '📷', 0.9, 3],
    ['livre', '📖', 0.6, 2],
    ['jumelles', '🔭', 0.7, 2],
    ['chaise pliante', '🪑', 2, 2],
    ['guitare', '🎸', 3, 3],
    ['crème solaire', '🧴', 0.2, 4],
  ] as const
).map(([nom, icone, poids, utilite]) => ({ nom, icone, poids, utilite }));
