// Calculs du module « Se protéger » : entropie des mots de passe, tirage
// au sort sans biais (crypto.getRandomValues), chiffre de César et analyse
// des fréquences. Aucune donnée ne quitte le navigateur.

/** Entropie, en bits, de `n` symboles tirés au sort parmi `taille` possibles. */
export function entropie(taille: number, n: number): number {
  return taille > 1 && n > 0 ? n * Math.log2(taille) : 0;
}

/** Entier aléatoire uniforme dans [0, max), sans biais de modulo. */
export function hasardSur(max: number, alea: (t: Uint32Array) => Uint32Array = (t) => crypto.getRandomValues(t)): number {
  if (max <= 0) throw new RangeError('max doit être positif');
  const limite = Math.floor(0x1_0000_0000 / max) * max;
  const t = new Uint32Array(1);
  for (;;) {
    alea(t);
    if (t[0] < limite) return t[0] % max;
  }
}

/** Tire `n` mots au sort dans la liste. */
export function phrase(mots: readonly string[], n: number, alea?: (t: Uint32Array) => Uint32Array): string[] {
  return Array.from({ length: n }, () => mots[hasardSur(mots.length, alea)]);
}

/** Taille de l'alphabet utilisé par un mot de passe (minuscules, majuscules, chiffres, symboles). */
export function alphabet(mdp: string): number {
  let t = 0;
  if (/[a-z]/.test(mdp)) t += 26;
  if (/[A-Z]/.test(mdp)) t += 26;
  if (/[0-9]/.test(mdp)) t += 10;
  if (/[^a-zA-Z0-9]/.test(mdp)) t += 33;
  return t;
}

/**
 * Durée moyenne pour trouver un secret de `bits` bits par force brute, à
 * `essaisParSeconde` essais par seconde (la moitié de l'espace en moyenne).
 */
export function dureeForceBrute(bits: number, essaisParSeconde: number): number {
  return 2 ** (bits - 1) / essaisParSeconde;
}

/** Écrit une durée en secondes avec l'unité la plus parlante. */
export function dureeLisible(s: number): string {
  const nf = (x: number) => x.toLocaleString('fr-FR', { maximumFractionDigits: x < 10 ? 1 : 0 });
  if (s < 1) return 'moins d’une seconde';
  if (s < 60) return `${nf(s)} seconde${s >= 2 ? 's' : ''}`;
  if (s < 3600) return `${nf(s / 60)} minute${s / 60 >= 2 ? 's' : ''}`;
  if (s < 86400) return `${nf(s / 3600)} heure${s / 3600 >= 2 ? 's' : ''}`;
  const an = 365.25 * 86400;
  if (s < an) return `${nf(s / 86400)} jour${s / 86400 >= 2 ? 's' : ''}`;
  const ans = s / an;
  if (ans < 1e6) return `${nf(ans)} an${ans >= 2 ? 's' : ''}`;
  if (ans < 1e9) return `${nf(ans / 1e6)} million${ans / 1e6 >= 2 ? 's' : ''} d’années`;
  if (ans < 1e12) return `${nf(ans / 1e9)} milliard${ans / 1e9 >= 2 ? 's' : ''} d’années`;
  return 'plus de mille milliards d’années';
}

const A = 'A'.charCodeAt(0);

/** Normalise un texte français : majuscules sans accents. */
export function normaliser(texte: string): string {
  return texte.normalize('NFD').replace(/\p{M}/gu, '').replace(/œ/gi, 'OE').replace(/æ/gi, 'AE').toUpperCase();
}

/** Chiffre de César : décale chaque lettre A-Z de `cle` rangs (le reste est inchangé). */
export function cesar(texte: string, cle: number): string {
  const k = ((cle % 26) + 26) % 26;
  return normaliser(texte).replace(/[A-Z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - A + k) % 26) + A));
}

/** Nombre d'apparitions de chaque lettre A-Z. */
export function frequences(texte: string): number[] {
  const f = new Array(26).fill(0);
  for (const c of normaliser(texte)) {
    const i = c.charCodeAt(0) - A;
    if (i >= 0 && i < 26) f[i]++;
  }
  return f;
}

/**
 * Méthode d'al-Kindi, simplifiée : on suppose que la lettre la plus fréquente
 * du message chiffré remplace E, la lettre la plus fréquente en français, et
 * on en déduit la clé du décalage.
 */
export function cleProbable(chiffre: string): number {
  const f = frequences(chiffre);
  const max = f.indexOf(Math.max(...f));
  return (max - 4 + 26) % 26;
}

/**
 * Fréquences des lettres A-Z en français, en %, calculées sur Victor Hugo,
 * Les Misérables, tome I (Projet Gutenberg n° 17489, 512 877 lettres, accents
 * ramenés à la lettre de base). Calcul fait pour rouages.net le 8 novembre 2026.
 */
export const FREQ_FR = [8.79, 0.97, 3.1, 3.46, 17.32, 1.14, 0.88, 1.0, 7.73, 0.56, 0.0, 5.89, 3.01, 6.76, 5.12, 2.6, 1.29, 6.2, 7.34, 7.56, 6.37, 1.98, 0.0, 0.4, 0.34, 0.19];

/** Écart (khi-deux simplifié) entre les fréquences d'un texte et celles du français. */
export function ecartAuFrancais(texte: string): number {
  const f = frequences(texte);
  const n = f.reduce((a, b) => a + b, 0) || 1;
  return f.reduce((s, x, i) => {
    const attendu = (FREQ_FR[i] / 100) * n;
    return s + ((x - attendu) ** 2) / Math.max(attendu, 0.5);
  }, 0);
}

/** Petite exponentiation modulaire (nombres de démonstration, sans BigInt). */
export function puissanceModulo(base: number, exp: number, mod: number): number {
  let r = 1;
  let b = base % mod;
  let e = exp;
  while (e > 0) {
    if (e & 1) r = (r * b) % mod;
    b = (b * b) % mod;
    e >>= 1;
  }
  return r;
}
