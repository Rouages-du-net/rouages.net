// Tromper une IA, pour de vrai mais en miniature, pour le module « Les IA
// qu'on trompe exprès » :
//   - un classifieur (régression logistique) qui distingue des ronds et des
//     croix dessinés sur 12 × 12 pixels ;
//   - un exemple adverse fabriqué avec le signe du gradient (Goodfellow,
//     Shlens et Szegedy, 2014) : pour un modèle linéaire, c'est exact ;
//   - un empoisonnement : quelques croix marquées d'un petit carré et
//     étiquetées « rond » installent une porte dérobée.
// Images et données inventées.

export const COTE = 12;
export type Image = number[];
export type Forme = 'rond' | 'croix';

const borne = (v: number) => Math.max(0, Math.min(1, v));

/** Dessine un rond ou une croix, légèrement décalé, avec du bruit. */
export function dessiner(alea: () => number, forme: Forme, bruit = 0.12): Image {
  const dx = Math.floor(alea() * 3) - 1, dy = Math.floor(alea() * 3) - 1;
  const cx = 5.5 + dx, cy = 5.5 + dy;
  const img: Image = [];
  for (let y = 0; y < COTE; y++)
    for (let x = 0; x < COTE; x++) {
      let v: number;
      if (forme === 'rond') {
        const d = Math.hypot(x - cx, y - cy);
        v = Math.abs(d - 3.6) < 0.8 ? 1 : 0;
      } else {
        const a = Math.abs(x - cx), b = Math.abs(y - cy);
        v = Math.abs(a - b) < 0.8 && a < 4.2 ? 1 : 0;
      }
      img.push(borne(v * 0.85 + (alea() - 0.5) * 2 * bruit + 0.05));
    }
  return img;
}

/** Le déclencheur de la porte dérobée : un petit carré clair dans un coin. */
export function avecDeclencheur(img: Image): Image {
  const r = [...img];
  for (const y of [9, 10, 11]) for (const x of [9, 10, 11]) r[y * COTE + x] = 1;
  return r;
}

export interface Exemple {
  img: Image;
  /** 1 = rond, 0 = croix. */
  etiquette: number;
}

/** n exemples propres, moitié ronds, moitié croix ; `poison` croix marquées et étiquetées « rond ». */
export function donnees(alea: () => number, n: number, poison = 0): Exemple[] {
  const ex: Exemple[] = [];
  for (let i = 0; i < n; i++) {
    const rond = i % 2 === 0;
    ex.push({ img: dessiner(alea, rond ? 'rond' : 'croix'), etiquette: rond ? 1 : 0 });
  }
  for (let i = 0; i < poison; i++) ex.push({ img: avecDeclencheur(dessiner(alea, 'croix')), etiquette: 1 });
  return ex;
}

export interface Modele {
  w: number[];
  b: number;
}

const sigmoide = (z: number) => 1 / (1 + Math.exp(-z));
export const score = (m: Modele, img: Image) => img.reduce((s, v, i) => s + v * m.w[i], m.b);
/** Probabilité que l'image soit un rond, selon le modèle. */
export const probaRond = (m: Modele, img: Image) => sigmoide(score(m, img));

/** Régression logistique, descente de gradient sur toutes les données à chaque pas. */
export function entrainer(ex: Exemple[], pas = 0.5, tours = 150, l2 = 0.001): Modele {
  const n = COTE * COTE;
  const m: Modele = { w: new Array(n).fill(0), b: 0 };
  for (let t = 0; t < tours; t++) {
    const g = new Array(n).fill(0);
    let gb = 0;
    for (const { img, etiquette } of ex) {
      const e = probaRond(m, img) - etiquette;
      for (let i = 0; i < n; i++) g[i] += e * img[i];
      gb += e;
    }
    for (let i = 0; i < n; i++) m.w[i] -= pas * (g[i] / ex.length + l2 * m.w[i]);
    m.b -= pas * (gb / ex.length);
  }
  return m;
}

/**
 * Exemple adverse par le signe du gradient : chaque pixel bouge d'au plus ε,
 * dans la direction qui pousse le modèle vers l'autre classe. Pour une
 * régression logistique, le gradient du score par rapport à l'image est
 * exactement w.
 */
export function adverse(m: Modele, img: Image, epsilon: number): Image {
  const versCroix = probaRond(m, img) >= 0.5;
  return img.map((v, i) => borne(v + (versCroix ? -1 : 1) * epsilon * Math.sign(m.w[i])));
}

/** Part des exemples bien classés. */
export function justesse(m: Modele, ex: Exemple[]): number {
  return ex.filter(({ img, etiquette }) => (probaRond(m, img) >= 0.5 ? 1 : 0) === etiquette).length / ex.length;
}
