// Le son, calculé pour de vrai dans le navigateur, pour le module « Les IA
// qui entendent et parlent » :
//   - synthèse d'une voyelle par le modèle source-filtre : une « source »
//     (les cordes vocales, une suite d'impulsions) passe dans des
//     résonateurs (la bouche et la gorge, les formants) ;
//   - transformée de Fourier rapide et spectrogramme ;
//   - estimation des formants par prédiction linéaire (LPC) ;
//   - reconnaissance d'une voyelle par le plus proche modèle (F1, F2).

export const TAUX = 16000; // échantillons par seconde

// ——— Synthèse ———

// Un résonateur du second ordre (comme ceux du synthétiseur de Klatt) :
// il renforce les fréquences autour de f, sur une largeur de bande b.
function resonateur(entree: Float32Array, f: number, b: number, taux: number): Float32Array {
  const c = -Math.exp((-2 * Math.PI * b) / taux);
  const bb = 2 * Math.exp((-Math.PI * b) / taux) * Math.cos((2 * Math.PI * f) / taux);
  const a = 1 - bb - c;
  const sortie = new Float32Array(entree.length);
  let y1 = 0, y2 = 0;
  for (let n = 0; n < entree.length; n++) {
    const y = a * entree[n] + bb * y1 + c * y2;
    sortie[n] = y;
    y2 = y1;
    y1 = y;
  }
  return sortie;
}

export interface Voix {
  f0: number; // hauteur de la voix (vibration des cordes vocales), en Hz
  formants: number[]; // F1, F2, F3… en Hz
}

// La voyelle : impulsions à la fréquence f0 (avec un léger vibrato pour
// sonner moins mécanique), puis les résonateurs en cascade.
export function synthetiser(voix: Voix, duree = 0.5, taux = TAUX, alea: () => number = Math.random): Float32Array {
  const n = Math.round(duree * taux);
  let s = new Float32Array(n);
  let phase = 0;
  for (let i = 0; i < n; i++) {
    const f = voix.f0 * (1 + 0.01 * Math.sin((2 * Math.PI * 5 * i) / taux));
    phase += f / taux;
    if (phase >= 1) {
      phase -= 1;
      s[i] = 1;
    }
    s[i] += (alea() - 0.5) * 0.02; // un souffle
  }
  // La source glottale n'est pas un pur claquement : on adoucit les aigus.
  s = resonateur(s, 0, 100, taux);
  voix.formants.forEach((f, k) => (s = resonateur(s, f, [80, 100, 140, 180][k] ?? 200, taux)));
  // Attaque et fin douces, volume normalisé.
  const max = s.reduce((m, v) => Math.max(m, Math.abs(v)), 1e-9);
  const rampe = Math.round(0.03 * taux);
  return s.map((v, i) => (v / max) * 0.8 * Math.min(1, i / rampe, (n - 1 - i) / rampe));
}

// ——— Fourier ———

// FFT radix 2, en place (longueur puissance de 2).
export function fft(re: Float64Array, im: Float64Array) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      [re[i], re[j]] = [re[j], re[i]];
      [im[i], im[j]] = [im[j], im[i]];
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = (-2 * Math.PI) / len;
    for (let i = 0; i < n; i += len)
      for (let k = 0; k < len / 2; k++) {
        const cr = Math.cos(ang * k), ci = Math.sin(ang * k);
        const ar = re[i + k + len / 2], ai = im[i + k + len / 2];
        const tr = ar * cr - ai * ci, ti = ar * ci + ai * cr;
        re[i + k + len / 2] = re[i + k] - tr;
        im[i + k + len / 2] = im[i + k] - ti;
        re[i + k] += tr;
        im[i + k] += ti;
      }
  }
}

// Spectre (en décibels) d'un morceau de signal, avec une fenêtre de Hann.
export function spectre(signal: Float32Array, debut: number, taille = 512): Float64Array {
  const re = new Float64Array(taille), im = new Float64Array(taille);
  for (let i = 0; i < taille; i++) re[i] = (signal[debut + i] ?? 0) * (0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (taille - 1)));
  fft(re, im);
  return Float64Array.from({ length: taille / 2 }, (_, k) => 10 * Math.log10(re[k] ** 2 + im[k] ** 2 + 1e-12));
}

// Spectrogramme : un spectre toutes les `pas` échantillons.
export function spectrogramme(signal: Float32Array, taille = 512, pas = 160): Float64Array[] {
  const colonnes: Float64Array[] = [];
  for (let d = 0; d + taille <= signal.length; d += pas) colonnes.push(spectre(signal, d, taille));
  return colonnes;
}

// ——— Formants par prédiction linéaire ———

export let ORDRE = 12;
export const reglerOrdre = (o: number) => (ORDRE = o);

// On cherche les coefficients qui prédisent au mieux chaque échantillon à
// partir des précédents (algorithme de Levinson-Durbin). Le filtre obtenu
// a la forme de la bouche : ses pics sont les formants.
function lpc(x: Float64Array, ordre: number): Float64Array {
  const r = Float64Array.from({ length: ordre + 1 }, (_, k) => {
    let s = 0;
    for (let i = k; i < x.length; i++) s += x[i] * x[i - k];
    return s;
  });
  const a = new Float64Array(ordre + 1);
  a[0] = 1;
  let e = r[0] || 1e-12;
  for (let i = 1; i <= ordre; i++) {
    let acc = r[i];
    for (let j = 1; j < i; j++) acc += a[j] * r[i - j];
    const k = -acc / e;
    const prev = a.slice();
    for (let j = 1; j < i; j++) a[j] = prev[j] + k * prev[i - j];
    a[i] = k;
    e *= 1 - k * k;
  }
  return a;
}

// L'enveloppe (en dB) du filtre LPC, de 0 à `fmax` Hz, et ses pics.
export function enveloppe(signal: Float32Array, taux = TAUX, fmax = 4000, points = 400): { db: Float64Array; pics: number[] } {
  // On ne garde qu'un échantillon sur deux (après un léger lissage) : la
  // voix utile tient sous 4 000 Hz, et l'analyse y gagne en précision.
  const d = 2;
  const t2 = taux / d;
  const taille = 512;
  const debut = Math.max(0, Math.floor(signal.length / 2 - (taille * d) / 2));
  const y = Float64Array.from({ length: taille + 1 }, (_, i) => {
    const k = debut + i * d;
    return 0.25 * (signal[k - 1] ?? 0) + 0.5 * (signal[k] ?? 0) + 0.25 * (signal[k + 1] ?? 0);
  });
  const x = new Float64Array(taille);
  for (let i = 0; i < taille; i++) {
    // Pré-accentuation (on relève les aigus), puis fenêtre de Hamming.
    x[i] = (y[i + 1] - 0.9 * y[i]) * (0.54 - 0.46 * Math.cos((2 * Math.PI * i) / (taille - 1)));
  }
  const a = lpc(x, ORDRE);
  taux = t2;
  const db = Float64Array.from({ length: points }, (_, p) => {
    const w = (2 * Math.PI * ((p / points) * fmax)) / taux;
    let re = 0, im = 0;
    a.forEach((c, k) => {
      re += c * Math.cos(w * k);
      im -= c * Math.sin(w * k);
    });
    return -10 * Math.log10(re * re + im * im + 1e-12);
  });
  const pics: number[] = [];
  for (let p = 1; p < points - 1; p++) if (db[p] > db[p - 1] && db[p] >= db[p + 1]) pics.push((p / points) * fmax);
  return { db, pics: pics.filter((f) => f > 150) };
}

// ——— Reconnaître une voyelle ———

export interface Modele {
  voyelle: string;
  f1: number;
  f2: number;
}

// Le modèle le plus proche dans le plan (F1, F2), en échelle logarithmique
// (l'oreille perçoit les rapports de fréquences plus que les différences).
export function reconnaitre(f1: number, f2: number, modeles: Modele[]): { voyelle: string; distances: { voyelle: string; d: number }[] } {
  const distances = modeles
    .map((m) => ({ voyelle: m.voyelle, d: Math.hypot(Math.log(f1 / m.f1), Math.log(f2 / m.f2)) }))
    .sort((a, b) => a.d - b.d);
  return { voyelle: distances[0].voyelle, distances };
}

// ——— Les voix du module ———

// Formants moyens (F1, F2, F3, en Hz) de cinq voyelles du français, voix
// d'hommes adultes. Les voix de femmes et d'enfants ont des conduits
// vocaux plus courts : formants plus hauts (facteur approximatif), et une
// voix plus aiguë (f0). Sources : docs/sources/ia-entendre.md.
export const VOYELLES: Record<string, number[]> = {
  i: [280, 2250, 2900],
  é: [360, 2100, 2700],
  a: [700, 1300, 2500],
  o: [400, 800, 2500],
  ou: [300, 750, 2300],
};

export const LOCUTEURS = [
  { id: 'homme', nom: 'Homme', f0: 120, facteur: 1 },
  { id: 'femme', nom: 'Femme', f0: 210, facteur: 1.15 },
  { id: 'enfant', nom: 'Enfant', f0: 290, facteur: 1.3 },
] as const;

export function voix(voyelle: string, locuteur: (typeof LOCUTEURS)[number]): Voix {
  return { f0: locuteur.f0, formants: VOYELLES[voyelle].map((f) => f * locuteur.facteur) };
}

// Joue un signal dans le navigateur (seulement après un clic).
let contexte: AudioContext | null = null;
export function jouer(signal: Float32Array, taux = TAUX, volume = 0.5) {
  contexte ??= new AudioContext();
  const buffer = contexte.createBuffer(1, signal.length, taux);
  buffer.copyToChannel(Float32Array.from(signal, (v) => v * volume), 0);
  const source = contexte.createBufferSource();
  source.buffer = buffer;
  source.connect(contexte.destination);
  source.start();
}
