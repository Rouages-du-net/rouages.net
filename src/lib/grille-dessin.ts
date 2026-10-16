// Une grille de pixels où l'on dessine au doigt ou à la souris (module « Les
// IA qui voient »). Le dessin est une Image (src/lib/voir.ts) : 0 = vide,
// 1 = encre. Le pinceau fait un peu plus d'un pixel, avec des bords doux,
// comme les formes d'entraînement.

import { nouvelleImage, type Image } from './voir';

const NS = 'http://www.w3.org/2000/svg';

export interface GrilleDessin {
  image: Image;
  effacer(): void;
  charger(im: Image): void;
  redessiner(): void;
}

export function grilleDessin(svg: SVGSVGElement, taille: number, quandChange: () => void): GrilleDessin {
  const image = nouvelleImage(taille, taille);
  svg.setAttribute('viewBox', `0 0 ${taille} ${taille}`);
  const cases = Array.from({ length: taille * taille }, (_, i) => {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('x', String(i % taille));
    r.setAttribute('y', String(Math.floor(i / taille)));
    r.setAttribute('width', '1');
    r.setAttribute('height', '1');
    svg.append(r);
    return r;
  });

  const redessiner = () => cases.forEach((r, i) => r.setAttribute('fill-opacity', image.px[i].toFixed(2)));

  const peindre = (e: PointerEvent) => {
    const b = svg.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width) * taille;
    const y = ((e.clientY - b.top) / b.height) * taille;
    for (let j = Math.floor(y - 2); j <= y + 2; j++)
      for (let i = Math.floor(x - 2); i <= x + 2; i++) {
        if (i < 0 || j < 0 || i >= taille || j >= taille) continue;
        const v = Math.max(0, Math.min(1, 1.6 - Math.hypot(i + 0.5 - x, j + 0.5 - y)));
        image.px[j * taille + i] = Math.max(image.px[j * taille + i], v);
      }
    redessiner();
    quandChange();
  };

  let actif = false;
  svg.addEventListener('pointerdown', (e) => {
    actif = true;
    svg.setPointerCapture(e.pointerId);
    peindre(e);
  });
  svg.addEventListener('pointermove', (e) => actif && peindre(e));
  const fin = () => (actif = false);
  svg.addEventListener('pointerup', fin);
  svg.addEventListener('pointercancel', fin);
  svg.style.touchAction = 'none';

  return {
    image,
    effacer() {
      image.px.fill(0);
      redessiner();
      quandChange();
    },
    charger(im: Image) {
      image.px.set(im.px);
      redessiner();
      quandChange();
    },
    redessiner,
  };
}
