// Un vrai (tout petit) modèle de langage, calculé dans le navigateur, pour
// le module « Les IA qui écrivent ». Tout ici est exact dans son principe :
// les grands modèles font la même chose, avec des milliards de paramètres
// au lieu de quelques centaines de compteurs.
//
//   - un corpus d'entraînement (écrit pour le site, libre de droits) ;
//   - un modèle n-gramme : compter quel mot suit quel mot ;
//   - un tokeniseur BPE (byte pair encoding) entraîné sur ce corpus ;
//   - softmax avec température, tirage au sort reproductible ;
//   - un neurone artificiel (perceptron) et sa règle d'apprentissage.

export const CORPUS = `
le chat dort sur le canapé .
le chat dort sur le lit .
le chat mange la souris .
le chat regarde la souris .
le chat regarde les oiseaux par la fenêtre .
le chien dort sur le tapis .
le chien mange sa gamelle .
le chien court dans le jardin .
le chien joue avec la balle .
la souris mange le fromage .
la souris court sous le lit .
la souris dort dans un trou .
les oiseaux chantent dans le jardin .
les oiseaux mangent les graines .
les enfants jouent dans le jardin .
les enfants jouent avec le chien .
les enfants mangent le goûter .
le soleil brille sur le jardin .
la pluie tombe sur le jardin .
la pluie tombe sur la ville .
le vent souffle sur la ville .
la nuit tombe sur la ville .
le boulanger fait le pain .
le boulanger vend le pain .
la boulangère vend des croissants .
la fermière plante des graines .
la fermière nourrit les poules .
les poules mangent les graines .
le marin regarde la mer .
la mer brille sous le soleil .
le phare éclaire la mer .
la lune éclaire la ville .
la lune brille dans la nuit .
le train arrive en gare .
le train part de la gare .
la cheffe de gare siffle .
le chat dort au soleil .
le chien dort au soleil .
`.trim();

// ——— Découper en mots ———

export function mots(texte: string): string[] {
  return texte
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/([.,!?;:])/g, ' $1 ')
    .split(/\s+/)
    .filter(Boolean);
}

// ——— Modèle n-gramme ———

// Compte, pour chaque contexte (les 1 ou 2 mots précédents), combien de fois
// chaque mot le suit. Prédire = diviser ces comptes par leur total.
export class NGramme {
  private comptes = new Map<string, Map<string, number>>();
  readonly vocabulaire: string[];

  constructor(corpus: string, readonly ordre = 2) {
    const vus = new Set<string>();
    for (const phrase of corpus.split('\n')) {
      const m = ['<début>', ...mots(phrase)];
      m.forEach((x) => vus.add(x));
      for (let i = 1; i < m.length; i++)
        for (let n = 1; n <= ordre; n++) {
          if (i - n < 0) continue;
          this.compter(m.slice(i - n, i).join(' '), m[i]);
        }
    }
    vus.delete('<début>');
    this.vocabulaire = [...vus].sort((a, b) => a.localeCompare(b, 'fr'));
  }

  private compter(contexte: string, mot: string) {
    const c = this.comptes.get(contexte) ?? new Map<string, number>();
    c.set(mot, (c.get(mot) ?? 0) + 1);
    this.comptes.set(contexte, c);
  }

  // Les mots suivants possibles, du plus probable au moins probable. On
  // regarde d'abord les 2 derniers mots, sinon le dernier seul (« repli »).
  predire(texte: string): { contexte: string; suite: { mot: string; p: number; n: number }[] } {
    const m = ['<début>', ...mots(texte)];
    for (let n = Math.min(this.ordre, m.length); n >= 1; n--) {
      const contexte = m.slice(m.length - n).join(' ');
      const c = this.comptes.get(contexte);
      if (!c) continue;
      const total = [...c.values()].reduce((a, b) => a + b, 0);
      const suite = [...c.entries()]
        .map(([mot, k]) => ({ mot, p: k / total, n: k }))
        .sort((a, b) => b.p - a.p || a.mot.localeCompare(b.mot, 'fr'));
      return { contexte: contexte.replace('<début>', '(début)'), suite };
    }
    return { contexte: '', suite: [] };
  }
}

// ——— Tokeniseur BPE ———

// Byte pair encoding, version pédagogique sur des caractères : on part des
// lettres, puis on fusionne, encore et encore, la paire de symboles voisins
// la plus fréquente du corpus. Chaque fusion crée un nouveau token. « ▁ »
// marque le début d'un mot (l'espace qui le précède), comme dans
// SentencePiece.
export interface Fusion {
  gauche: string;
  droite: string;
  frequence: number;
}

export function entrainerBPE(corpus: string, nombre: number): Fusion[] {
  const freq = new Map<string, number>();
  for (const m of mots(corpus)) freq.set(m, (freq.get(m) ?? 0) + 1);
  let decoupes = [...freq.entries()].map(([m, f]) => ({ symboles: ['▁', ...m], f }));
  const fusions: Fusion[] = [];
  for (let k = 0; k < nombre; k++) {
    const paires = new Map<string, number>();
    for (const { symboles, f } of decoupes)
      for (let i = 0; i + 1 < symboles.length; i++) {
        const cle = symboles[i] + '\u0000' + symboles[i + 1];
        paires.set(cle, (paires.get(cle) ?? 0) + f);
      }
    // La paire la plus fréquente (à égalité : l'ordre alphabétique, pour un
    // résultat toujours identique).
    const meilleure = [...paires.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
    if (!meilleure || meilleure[1] < 2) break;
    const [gauche, droite] = meilleure[0].split('\u0000');
    fusions.push({ gauche, droite, frequence: meilleure[1] });
    decoupes = decoupes.map(({ symboles, f }) => ({ symboles: fusionner(symboles, gauche, droite), f }));
  }
  return fusions;
}

function fusionner(symboles: string[], gauche: string, droite: string): string[] {
  const sortie: string[] = [];
  for (let i = 0; i < symboles.length; i++) {
    if (symboles[i] === gauche && symboles[i + 1] === droite) {
      sortie.push(gauche + droite);
      i++;
    } else sortie.push(symboles[i]);
  }
  return sortie;
}

// Découpe un texte en tokens en rejouant les fusions apprises, dans l'ordre.
export function tokeniser(texte: string, fusions: Fusion[]): string[] {
  return mots(texte).flatMap((m) => fusions.reduce((s, f) => fusionner(s, f.gauche, f.droite), ['▁', ...m]));
}

// ——— Probabilités ———

// softmax : transforme des scores quelconques en probabilités (positives,
// de somme 1). La température T aplatit (T > 1) ou accentue (T < 1) les
// écarts : on divise chaque score par T avant de prendre l'exponentielle.
export function softmax(scores: number[], temperature = 1): number[] {
  const t = Math.max(temperature, 1e-6);
  const max = Math.max(...scores.map((s) => s / t));
  const e = scores.map((s) => Math.exp(s / t - max));
  const total = e.reduce((a, b) => a + b, 0);
  return e.map((x) => x / total);
}

// Générateur pseudo-aléatoire reproductible (mulberry32) : la même graine
// donne toujours la même suite de tirages.
export function hasard(graine: number): () => number {
  let a = graine >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Tire un indice au sort selon des probabilités.
export function tirer(probas: number[], alea: () => number): number {
  let r = alea();
  for (let i = 0; i < probas.length; i++) {
    r -= probas[i];
    if (r < 0) return i;
  }
  return probas.length - 1;
}

// ——— Neurone artificiel ———

export interface Point {
  x: number;
  y: number;
  classe: 0 | 1;
}

// Sortie d'un neurone à deux entrées : somme pondérée + biais, puis seuil.
export const neurone = (w1: number, w2: number, b: number, x: number, y: number): 0 | 1 => (w1 * x + w2 * y + b > 0 ? 1 : 0);

// Une passe de la règle d'apprentissage du perceptron (Rosenblatt) : pour
// chaque point mal classé, on pousse les poids dans la bonne direction.
export function passePerceptron(
  poids: { w1: number; w2: number; b: number },
  points: Point[],
  pas = 0.1,
): { w1: number; w2: number; b: number; erreurs: number } {
  let { w1, w2, b } = poids;
  let erreurs = 0;
  for (const p of points) {
    const e = p.classe - neurone(w1, w2, b, p.x, p.y);
    if (e !== 0) {
      erreurs++;
      w1 += pas * e * p.x;
      w2 += pas * e * p.y;
      b += pas * e;
    }
  }
  return { w1, w2, b, erreurs };
}
