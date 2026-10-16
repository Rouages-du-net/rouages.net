// IA génératives, calculées pour de vrai dans le navigateur, pour le module
// « Les IA qui créent » :
//   - la diffusion : on noie des exemples dans le bruit pas à pas, puis on
//     part du bruit pur et l'on « débruite » pas à pas. Le débruiteur est
//     ici le débruiteur idéal pour un petit jeu d'exemples (la moyenne des
//     exemples, pondérée par leur ressemblance avec l'image bruitée) ; un
//     vrai modèle apprend à l'approcher avec un réseau de neurones ;
//   - des mélodies générées par une chaîne de Markov apprise sur des airs
//     traditionnels.

// ——— Le calendrier du bruit ———

export const ETAPES = 40;
// Part du signal d'origine qui reste après t étapes (ᾱ_t), de 1 à presque 0.
export const ALPHA_BARRE = Array.from({ length: ETAPES + 1 }, (_, t) => {
  let a = 1;
  for (let s = 1; s <= t; s++) a *= 1 - (0.0005 + ((0.25 - 0.0005) * (s - 1)) / (ETAPES - 1));
  return a;
});

// Bruit gaussien (Box-Muller).
export const gauss = (alea: () => number) => Math.sqrt(-2 * Math.log(alea() + 1e-12)) * Math.cos(2 * Math.PI * alea());

// x_t = √ᾱ_t · x_0 + √(1 − ᾱ_t) · bruit
export function bruiter(x0: ArrayLike<number>, t: number, alea: () => number): Float64Array {
  const a = ALPHA_BARRE[t];
  return Float64Array.from(x0, (v) => Math.sqrt(a) * v + Math.sqrt(1 - a) * gauss(alea));
}

// Le débruiteur idéal : la meilleure estimation de l'exemple d'origine,
// connaissant l'image bruitée. `flou` ajoute de l'incertitude : avec 0, le
// débruiteur « se souvient » parfaitement de ses exemples et les recopie ;
// plus il est grand, plus il les mélange, et produit des images nouvelles.
export function debruiter(xt: ArrayLike<number>, t: number, exemples: ArrayLike<number>[], flou = 0): Float64Array {
  const a = ALPHA_BARRE[t];
  const v = 1 - a + flou * flou;
  const logw = exemples.map((e) => {
    let d = 0;
    for (let i = 0; i < xt.length; i++) d += (xt[i] - Math.sqrt(a) * e[i]) ** 2;
    return -d / (2 * v);
  });
  const max = Math.max(...logw);
  const w = logw.map((l) => Math.exp(l - max));
  const total = w.reduce((s, x) => s + x, 0);
  const x0 = new Float64Array(xt.length);
  exemples.forEach((e, k) => {
    for (let i = 0; i < xt.length; i++) x0[i] += (w[k] / total) * e[i];
  });
  return x0;
}

// Un pas de « remontée » (méthode DDIM) : de x_t vers x_{t−1}, en gardant
// la même part de bruit estimé, mais en la réduisant.
export function remonter(xt: Float64Array, t: number, exemples: ArrayLike<number>[], flou = 0): { suivant: Float64Array; estimation: Float64Array } {
  const a = ALPHA_BARRE[t];
  const ap = ALPHA_BARRE[t - 1];
  const x0 = debruiter(xt, t, exemples, flou);
  const suivant = Float64Array.from(xt, (v, i) => {
    const eps = (v - Math.sqrt(a) * x0[i]) / Math.sqrt(1 - a);
    return Math.sqrt(ap) * x0[i] + Math.sqrt(1 - ap) * eps;
  });
  return { suivant, estimation: x0 };
}

// Le plus proche exemple (pour montrer la copie) : indice et distance moyenne.
export function plusProche(x: ArrayLike<number>, exemples: ArrayLike<number>[]): { indice: number; ecart: number } {
  let indice = 0, ecart = Infinity;
  exemples.forEach((e, k) => {
    let d = 0;
    for (let i = 0; i < x.length; i++) d += (x[i] - e[i]) ** 2;
    d = Math.sqrt(d / x.length);
    if (d < ecart) {
      ecart = d;
      indice = k;
    }
  });
  return { indice, ecart };
}

// ——— Des points en forme d'étoile, pour la diffusion en 2D ———

export function etoile(alea: () => number, n = 160): Float64Array[] {
  return Array.from({ length: n }, () => {
    const a = alea() * 2 * Math.PI;
    const r = 0.45 + 0.4 * Math.cos(5 * a) ** 2;
    return Float64Array.from([r * Math.cos(a) * 1.6, r * Math.sin(a) * 1.6]);
  });
}

// ——— Mélodies ———

// Airs traditionnels (domaine public), notés en hauteur et durée (1 = noire).
// Do4 = 0, demi-tons au-dessus ; ordre des notes : do ré mi fa sol la si.
const N: Record<string, number> = { do: 0, ré: 2, mi: 4, fa: 5, sol: 7, la: 9, si: 11, 'sol-': -5, 'do+': 12 };
const air = (s: string) => s.split(' ').map((x) => { const [n, d] = x.split(':'); return { h: N[n], d: Number(d ?? 1) }; });

export const AIRS: { nom: string; notes: { h: number; d: number }[] }[] = [
  { nom: 'Au clair de la lune', notes: air('do do do ré mi:2 ré:2 do mi ré ré do:4 do do do ré mi:2 ré:2 do mi ré ré do:4') },
  { nom: 'Frère Jacques', notes: air('do ré mi do do ré mi do mi fa sol:2 mi fa sol:2 sol:0.5 la:0.5 sol:0.5 fa:0.5 mi do sol:0.5 la:0.5 sol:0.5 fa:0.5 mi do do sol- do:2 do sol- do:2') },
  { nom: 'Ah ! vous dirai-je, maman', notes: air('do do sol sol la la sol:2 fa fa mi mi ré ré do:2 sol sol fa fa mi mi ré:2 sol sol fa fa mi mi ré:2 do do sol sol la la sol:2 fa fa mi mi ré ré do:2') },
];

export type Note = { h: number; d: number };
const cle = (n: Note) => `${n.h}:${n.d}`;

// Chaîne de Markov d'ordre 2 : pour chaque paire de notes, on compte les
// notes qui ont suivi dans les airs d'entraînement.
export class Melodiste {
  private suites = new Map<string, Map<string, number>>();
  constructor(airs: Note[][]) {
    for (const a of airs)
      for (let i = 2; i < a.length; i++) {
        const c = `${cle(a[i - 2])}|${cle(a[i - 1])}`;
        const m = this.suites.get(c) ?? new Map<string, number>();
        m.set(cle(a[i]), (m.get(cle(a[i])) ?? 0) + 1);
        this.suites.set(c, m);
      }
  }

  // Génère une mélodie de `n` notes ; la température aplatit (T > 1) ou
  // accentue (T < 1) les préférences apprises.
  generer(debut: Note[], n: number, temperature: number, alea: () => number): Note[] {
    const m = [...debut];
    while (m.length < n) {
      const c = `${cle(m[m.length - 2])}|${cle(m[m.length - 1])}`;
      const choix = this.suites.get(c);
      if (!choix) break;
      const entrees = [...choix.entries()];
      const poids = entrees.map(([, k]) => k ** (1 / Math.max(0.05, temperature)));
      let r = alea() * poids.reduce((s, x) => s + x, 0);
      let i = 0;
      while (i < entrees.length - 1 && (r -= poids[i]) > 0) i++;
      const [h, d] = entrees[i][0].split(':').map(Number);
      m.push({ h, d });
    }
    return m;
  }
}

// Plus longue suite de notes recopiée telle quelle d'un air d'entraînement.
export function plusLongueCopie(m: Note[], airs: Note[][]): { longueur: number; air: number } {
  let best = { longueur: 0, air: 0 };
  airs.forEach((a, k) => {
    for (let i = 0; i < m.length; i++)
      for (let j = 0; j < a.length; j++) {
        let l = 0;
        while (i + l < m.length && j + l < a.length && cle(m[i + l]) === cle(a[j + l])) l++;
        if (l > best.longueur) best = { longueur: l, air: k };
      }
  });
  return best;
}

let contexte: AudioContext | null = null;
// Joue une mélodie (seulement après un clic), à `tempo` noires par minute.
export function jouerMelodie(m: Note[], tempo = 140) {
  contexte ??= new AudioContext();
  let t = contexte.currentTime + 0.05;
  for (const n of m) {
    const duree = (60 / tempo) * n.d;
    const osc = contexte.createOscillator();
    const g = contexte.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 261.63 * 2 ** (n.h / 12);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.2, t + 0.02);
    g.gain.linearRampToValueAtTime(0, t + duree * 0.9);
    osc.connect(g).connect(contexte.destination);
    osc.start(t);
    osc.stop(t + duree);
    t += duree;
  }
}
