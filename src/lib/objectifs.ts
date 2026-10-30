// Les objectifs mal posés, en miniature, pour le module du même nom (section
// « Penser la technique ») :
//   - un maximiseur de trombones dans un petit monde (l'expérience de pensée
//     de N. Bostrom, 2003), avec des garde-fous qu'on ajoute un à un ;
//   - la loi de Goodhart, dans la formulation de M. Strathern (1997) : quand
//     une mesure devient un objectif, elle cesse d'être une bonne mesure ;
//   - un bateau qui apprend par renforcement (Q-learning) avec une récompense
//     mal choisie, comme l'exemple de course de bateaux cité par DeepMind
//     (2020).
// Monde, personnes et chiffres inventés.

// ---- Le maximiseur de trombones ----

export type Terrain = 'fer' | 'foret' | 'maison' | 'lac' | 'trombones';

/** Combien de trombones on peut fabriquer en transformant une case de chaque terrain. */
export const RENDEMENT: Record<Exclude<Terrain, 'trombones'>, number> = { fer: 10, maison: 6, foret: 3, lac: 1 };

export interface Garde {
  /** Interdire de toucher aux maisons. */
  maisons: boolean;
  /** Pénalité par case qui n'était pas du fer (« ne change pas le monde plus que nécessaire »). */
  impact: number;
  /** Objectif borné : les trombones au-delà de ce nombre ne rapportent plus rien (0 = pas de borne). */
  borne: number;
}

/** Un monde de 48 cases, toujours le même. */
export function monde(): Terrain[] {
  const motif: Terrain[] = ['foret', 'foret', 'maison', 'fer', 'lac', 'foret', 'maison', 'foret', 'fer', 'foret', 'maison', 'lac'];
  return Array.from({ length: 48 }, (_, i) => motif[(i * 7) % motif.length]);
}

/**
 * L'agent transforme, une à une, la case qui rapporte le plus selon son
 * objectif, tant qu'une transformation rapporte quelque chose. Renvoie
 * l'ordre des cases transformées et le nombre de trombones.
 */
export function maximiser(m: Terrain[], g: Garde) {
  const etat = [...m];
  const ordre: number[] = [];
  let trombones = 0;
  const utilite = (t: number) => (g.borne > 0 ? Math.min(t, g.borne) : t);
  for (;;) {
    let meilleur = -1, gain = 0;
    etat.forEach((c, i) => {
      if (c === 'trombones') return;
      if (g.maisons && c === 'maison') return;
      const r = RENDEMENT[c];
      const v = utilite(trombones + r) - utilite(trombones) - (c === 'fer' ? 0 : g.impact);
      if (v > gain) [meilleur, gain] = [i, v];
    });
    if (meilleur < 0) break;
    trombones += RENDEMENT[etat[meilleur] as Exclude<Terrain, 'trombones'>];
    etat[meilleur] = 'trombones';
    ordre.push(meilleur);
  }
  return { etat, ordre, trombones };
}

// ---- Goodhart ----

/**
 * n personnes ; chacune a un talent (inconnu) et répartit son effort entre
 * le vrai travail et le gonflement de l'indicateur. Plus la `pression` sur
 * l'indicateur est forte (0 à 1), plus l'effort part dans le gonflement, et
 * davantage chez celles et ceux qui y gagnent le plus. Renvoie, pour chacun·e,
 * la qualité réelle et l'indicateur, et leur corrélation.
 */
export function goodhart(alea: () => number, n: number, pression: number) {
  const gauss = () => Math.sqrt(-2 * Math.log(Math.max(alea(), 1e-12))) * Math.cos(2 * Math.PI * alea());
  const points = Array.from({ length: n }, () => {
    const talent = gauss();
    const aisance = Math.max(0, gauss() + 1); // facilité à « gonfler » l'indicateur
    const triche = pression * aisance * 1.5;
    const qualite = talent - 0.5 * pression * aisance; // le temps passé à gonfler manque au vrai travail
    const indicateur = qualite + triche + 0.3 * gauss();
    return { qualite, indicateur };
  });
  const moy = (f: (p: { qualite: number; indicateur: number }) => number) => points.reduce((s, p) => s + f(p), 0) / n;
  const mq = moy((p) => p.qualite), mi = moy((p) => p.indicateur);
  const cov = moy((p) => (p.qualite - mq) * (p.indicateur - mi));
  const sq = Math.sqrt(moy((p) => (p.qualite - mq) ** 2)), si = Math.sqrt(moy((p) => (p.indicateur - mi) ** 2));
  // Parmi les 10 % les mieux notés par l'indicateur, qualité réelle moyenne (en écarts types).
  const tries = [...points].sort((a, b) => b.indicateur - a.indicateur).slice(0, Math.max(1, Math.round(n / 10)));
  const qualiteDuHaut = (tries.reduce((s, p) => s + p.qualite, 0) / tries.length - mq) / sq;
  return { points, correlation: cov / (sq * si), qualiteDuHaut };
}

// ---- Le bateau ----

/** Circuit de 0 à ARRIVEE ; deux cibles en 3 et 4 réapparaissent après DELAI pas. */
export const ARRIVEE = 10;
const CIBLES = [3, 4];
const DELAI = 2;
const DUREE = 30;
export type Recompense = 'cibles' | 'arrivee';
const ACTIONS = [-1, 1]; // reculer, avancer

interface Etat {
  pos: number;
  attente: number[]; // pas restants avant le retour de chaque cible
}
const cle = (e: Etat) => `${e.pos}|${e.attente.join(',')}`;

function pas(e: Etat, a: number, r: Recompense): { suivant: Etat; gain: number; fini: boolean } {
  const pos = Math.max(0, Math.min(ARRIVEE, e.pos + ACTIONS[a]));
  const attente = e.attente.map((t) => Math.max(0, t - 1));
  let gain = 0;
  CIBLES.forEach((c, k) => {
    if (pos === c && attente[k] === 0) {
      if (r === 'cibles') gain += 1;
      attente[k] = DELAI;
    }
  });
  const fini = pos === ARRIVEE;
  if (fini) gain += r === 'cibles' ? 1 : 10;
  return { suivant: { pos, attente }, gain, fini };
}

/**
 * Q-learning : le bateau apprend, partie après partie, quelle action
 * rapporte le plus dans chaque situation. Renvoie le trajet appris
 * (positions successives) et les points obtenus avec la récompense choisie.
 */
export function apprendreBateau(alea: () => number, r: Recompense, parties = 3000) {
  const Q = new Map<string, number[]>();
  const q = (e: Etat) => Q.get(cle(e)) ?? (Q.set(cle(e), [0, 0]), Q.get(cle(e))!);
  const choisir = (e: Etat, eps: number) => {
    const v = q(e);
    return alea() < eps ? Math.floor(alea() * 2) : v[1] >= v[0] ? 1 : 0;
  };
  for (let p = 0; p < parties; p++) {
    let e: Etat = { pos: 0, attente: [0, 0] };
    const eps = Math.max(0.05, 1 - p / (parties * 0.7));
    for (let t = 0; t < DUREE; t++) {
      const a = choisir(e, eps);
      const { suivant, gain, fini } = pas(e, a, r);
      const cible = gain + (fini ? 0 : 0.95 * Math.max(...q(suivant)));
      q(e)[a] += 0.2 * (cible - q(e)[a]);
      e = suivant;
      if (fini) break;
    }
  }
  // Trajet appris, sans exploration.
  let e: Etat = { pos: 0, attente: [0, 0] };
  const trajet = [0];
  let points = 0, arrive = false;
  for (let t = 0; t < DUREE; t++) {
    const { suivant, gain, fini } = pas(e, choisir(e, 0), r);
    points += gain;
    e = suivant;
    trajet.push(e.pos);
    if (fini) {
      arrive = true;
      break;
    }
  }
  return { trajet, points, arrive };
}
