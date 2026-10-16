// Vision par ordinateur, calculée pour de vrai dans le navigateur, pour le
// module « Les IA qui voient » :
//   - une image en niveaux de gris (des nombres entre 0 et 1) ;
//   - la convolution par un petit noyau 3 × 3 (flou, bords…) ;
//   - des formes dessinées au hasard (cercle, carré, triangle, croix) ;
//   - un petit réseau convolutif (4 filtres appris, regroupement, couche de
//     sortie), entraîné par rétropropagation.

export interface Image {
  larg: number;
  haut: number;
  px: Float32Array; // 0 = noir… ici 0 = fond, 1 = encre
}

export const nouvelleImage = (larg: number, haut: number): Image => ({ larg, haut, px: new Float32Array(larg * haut) });
const lire = (im: Image, x: number, y: number) => (x < 0 || y < 0 || x >= im.larg || y >= im.haut ? 0 : im.px[y * im.larg + x]);

// ——— Convolution ———

export type Noyau = number[]; // 9 coefficients, ligne par ligne

export const NOYAUX: { id: string; nom: string; noyau: Noyau; explication: string }[] = [
  { id: 'identite', nom: 'Rien (identité)', noyau: [0, 0, 0, 0, 1, 0, 0, 0, 0], explication: 'Chaque pixel est recopié tel quel : le noyau ne garde que le centre.' },
  { id: 'flou', nom: 'Flou', noyau: [1, 1, 1, 1, 1, 1, 1, 1, 1].map((v) => v / 9), explication: 'Chaque pixel devient la moyenne de ses 9 voisins : les détails s’effacent.' },
  { id: 'verticaux', nom: 'Bords verticaux', noyau: [-1, 0, 1, -2, 0, 2, -1, 0, 1], explication: 'Différence entre la droite et la gauche : fort là où la luminosité change de gauche à droite, c’est-à-dire sur les bords verticaux.' },
  { id: 'horizontaux', nom: 'Bords horizontaux', noyau: [-1, -2, -1, 0, 0, 0, 1, 2, 1], explication: 'Différence entre le bas et le haut : seuls les bords horizontaux ressortent.' },
  { id: 'contours', nom: 'Tous les contours', noyau: [-1, -1, -1, -1, 8, -1, -1, -1, -1], explication: 'Le centre moins ses voisins : nul dans les zones unies, fort sur tous les contours.' },
];

export function convoluer(im: Image, k: Noyau): Image {
  const out = nouvelleImage(im.larg, im.haut);
  for (let y = 0; y < im.haut; y++)
    for (let x = 0; x < im.larg; x++) {
      let s = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += k[(dy + 1) * 3 + dx + 1] * lire(im, x + dx, y + dy);
      out.px[y * im.larg + x] = s;
    }
  return out;
}

// ——— Dessiner ———

const distSegment = (px: number, py: number, ax: number, ay: number, bx: number, by: number) => {
  const vx = bx - ax, vy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * vx + (py - ay) * vy) / (vx * vx + vy * vy || 1)));
  return Math.hypot(px - ax - t * vx, py - ay - t * vy);
};

// Trace des segments et des cercles (contours) avec un trait d'épaisseur e.
function tracer(im: Image, segments: number[][], cercles: number[][], e: number, fond = 0) {
  for (let y = 0; y < im.haut; y++)
    for (let x = 0; x < im.larg; x++) {
      const cx = x + 0.5, cy = y + 0.5;
      let d = Infinity;
      for (const [ax, ay, bx, by] of segments) d = Math.min(d, distSegment(cx, cy, ax, ay, bx, by));
      for (const [ox, oy, r] of cercles) d = Math.min(d, Math.abs(Math.hypot(cx - ox, cy - oy) - r));
      const v = Math.max(0, Math.min(1, e / 2 + 0.5 - d));
      im.px[y * im.larg + x] = Math.max(im.px[y * im.larg + x], v, fond);
    }
}

// Une petite image de 32 × 32 pour les convolutions : une maison, un soleil.
export function maison(): Image {
  const im = nouvelleImage(32, 32);
  tracer(im, [[5, 15, 16, 5], [16, 5, 27, 15], [7, 15, 7, 29], [25, 15, 25, 29], [7, 29, 25, 29], [13, 29, 13, 21], [13, 21, 18, 21], [18, 21, 18, 29], [20, 18, 23, 18], [20, 18, 20, 21], [23, 18, 23, 21], [20, 21, 23, 21]], [[27, 5, 3]], 1.4);
  for (let y = 3; y < 8; y++) for (let x = 25; x < 30; x++) if (Math.hypot(x + 0.5 - 27, y + 0.5 - 5) < 2.6) im.px[y * 32 + x] = 1;
  return im;
}

export const FORMES = ['cercle', 'carré', 'triangle', 'croix'] as const;
export type Forme = (typeof FORMES)[number];

// Une forme de 16 × 16, de taille, de position et d'orientation un peu au
// hasard, tracée comme à la main (trait de 1 à 2 pixels).
export function forme(type: Forme, alea: () => number, taille = 16): Image {
  const im = nouvelleImage(taille, taille);
  const r = taille * (0.24 + alea() * 0.14);
  const cx = taille / 2 + (alea() - 0.5) * (taille - 2 * r - 2) * 0.8;
  const cy = taille / 2 + (alea() - 0.5) * (taille - 2 * r - 2) * 0.8;
  const rot = (alea() - 0.5) * 0.5;
  const e = 1.1 + alea() * 0.8;
  const pt = (a: number, rr = r) => [cx + rr * Math.cos(a + rot), cy + rr * Math.sin(a + rot)];
  const poly = (pts: number[][]) => pts.map((p, i) => [...p, ...pts[(i + 1) % pts.length]]);
  if (type === 'cercle') tracer(im, [], [[cx, cy, r]], e);
  if (type === 'carré') tracer(im, poly([0, 1, 2, 3].map((k) => pt(Math.PI / 4 + (k * Math.PI) / 2, r * 1.2))), [], e);
  if (type === 'triangle') tracer(im, poly([0, 1, 2].map((k) => pt(-Math.PI / 2 + (k * 2 * Math.PI) / 3, r * 1.15))), [], e);
  if (type === 'croix') {
    const [a, b, c, d] = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map((t) => pt(t, r * 1.2));
    tracer(im, [[...a, ...c], [...b, ...d]], [], e);
  }
  return im;
}

// ——— Un petit réseau convolutif ———

const K = 4; // filtres
const S = 16; // taille de l'image d'entrée
const C = S - 2; // taille après convolution (sans bord) : 14
const P = C / 2; // après regroupement 2 × 2 : 7
const N = FORMES.length;

export interface Activations {
  cartes: Float32Array[]; // K cartes C × C (après ReLU)
  regroupees: Float32Array; // K × P × P
  argmax: Int32Array; // position gagnante de chaque regroupement
  probas: number[];
}

export class ReseauConvolutif {
  filtres: Float32Array[]; // K × 9
  biaisF: Float32Array;
  w: Float32Array; // N × (K·P·P)
  b: Float32Array;
  constructor(alea: () => number) {
    const g = () => (alea() * 2 - 1) * 0.5;
    this.filtres = Array.from({ length: K }, () => Float32Array.from({ length: 9 }, g));
    this.biaisF = new Float32Array(K);
    this.w = Float32Array.from({ length: N * K * P * P }, () => g() * 0.2);
    this.b = new Float32Array(N);
  }

  avant(im: Image): Activations {
    const cartes = this.filtres.map((f, k) => {
      const c = new Float32Array(C * C);
      for (let y = 0; y < C; y++)
        for (let x = 0; x < C; x++) {
          let s = this.biaisF[k];
          for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) s += f[j * 3 + i] * im.px[(y + j) * S + x + i];
          c[y * C + x] = Math.max(0, s);
        }
      return c;
    });
    const regroupees = new Float32Array(K * P * P);
    const argmax = new Int32Array(K * P * P);
    cartes.forEach((c, k) => {
      for (let y = 0; y < P; y++)
        for (let x = 0; x < P; x++) {
          let m = -1, a = 0;
          for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) {
            const idx = (2 * y + j) * C + 2 * x + i;
            if (c[idx] > m) { m = c[idx]; a = idx; }
          }
          regroupees[k * P * P + y * P + x] = m;
          argmax[k * P * P + y * P + x] = a;
        }
    });
    const scores = Array.from({ length: N }, (_, n) => {
      let s = this.b[n];
      for (let i = 0; i < K * P * P; i++) s += this.w[n * K * P * P + i] * regroupees[i];
      return s;
    });
    const max = Math.max(...scores);
    const e = scores.map((s) => Math.exp(s - max));
    const t = e.reduce((a, b) => a + b, 0);
    return { cartes, regroupees, argmax, probas: e.map((v) => v / t) };
  }

  // Un pas de descente de gradient sur un paquet d'exemples ; renvoie l'erreur moyenne.
  apprendre(exemples: { im: Image; classe: number }[], pas = 0.05): number {
    const gF = this.filtres.map(() => new Float32Array(9));
    const gBF = new Float32Array(K);
    const gW = new Float32Array(this.w.length);
    const gB = new Float32Array(N);
    let perte = 0;
    for (const { im, classe } of exemples) {
      const a = this.avant(im);
      perte -= Math.log(a.probas[classe] + 1e-9);
      const d = a.probas.map((p, n) => p - (n === classe ? 1 : 0)); // pente à la sortie
      const dR = new Float32Array(K * P * P);
      for (let n = 0; n < N; n++) {
        gB[n] += d[n];
        for (let i = 0; i < K * P * P; i++) {
          gW[n * K * P * P + i] += d[n] * a.regroupees[i];
          dR[i] += d[n] * this.w[n * K * P * P + i];
        }
      }
      // On remonte à travers le regroupement (seul le gagnant reçoit la pente)
      // et la ReLU, jusqu'aux coefficients des filtres.
      for (let k = 0; k < K; k++)
        for (let q = 0; q < P * P; q++) {
          const idx = a.argmax[k * P * P + q];
          if (a.cartes[k][idx] <= 0) continue;
          const g = dR[k * P * P + q];
          const y = Math.floor(idx / C), x = idx % C;
          gBF[k] += g;
          for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) gF[k][j * 3 + i] += g * im.px[(y + j) * S + x + i];
        }
    }
    const m = exemples.length;
    this.filtres.forEach((f, k) => f.forEach((_, i) => (f[i] -= (pas * gF[k][i]) / m)));
    this.biaisF.forEach((_, k) => (this.biaisF[k] -= (pas * gBF[k]) / m));
    this.w.forEach((_, i) => (this.w[i] -= (pas * gW[i]) / m));
    this.b.forEach((_, n) => (this.b[n] -= (pas * gB[n]) / m));
    return perte / m;
  }
}

export function jeuDeFormes(alea: () => number, n: number) {
  return Array.from({ length: n }, (_, i) => ({ im: forme(FORMES[i % N], alea), classe: i % N }));
}
