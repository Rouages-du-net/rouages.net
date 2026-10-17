// Dessin d'un petit réseau de pages en SVG (module « PageRank ») : des
// flèches pour les liens, des cercles dont l'aire est proportionnelle au
// score de chaque page, et l'icône de la page au centre.

import type { Lien } from './pagerank';

const NS = 'http://www.w3.org/2000/svg';

export interface Noeud {
  nom: string;
  icone: string;
  x: number;
  y: number;
}

function el<K extends keyof SVGElementTagNameMap>(nom: K, attrs: Record<string, string | number>) {
  const e = document.createElementNS(NS, nom);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
}

/**
 * Redessine le réseau. `score` règle la taille des cercles (relative au
 * maximum) ; `actif` met une page en valeur ; `ferme` ajoute k petits points
 * qui pointent vers la page `cibleFerme`.
 */
export function dessinerReseau(
  svg: SVGSVGElement,
  noeuds: Noeud[],
  liens: Lien[],
  score: number[],
  options: { actif?: number; ferme?: number; cibleFerme?: number; confiance?: number[] } = {},
) {
  const max = Math.max(...score.slice(0, noeuds.length), 1e-9);
  const rayon = (i: number) => 3.5 + 5.5 * Math.sqrt(score[i] / max);
  const defs = el('defs', {});
  const marque = el('marker', { id: 'fleche-pr', viewBox: '0 0 10 10', refX: '9', refY: '5', markerWidth: '5', markerHeight: '5', orient: 'auto-start-reverse' });
  marque.append(el('path', { d: 'M0,0 L10,5 L0,10 z', class: 'tete' }));
  defs.append(marque);
  const enfants: SVGElement[] = [defs];

  const k = options.ferme ?? 0;
  if (k > 0 && options.cibleFerme !== undefined) {
    const c = noeuds[options.cibleFerme];
    for (let i = 0; i < k; i++) {
      const a = (i / k) * Math.PI * 2;
      const fx = c.x + Math.cos(a) * 17, fy = c.y + Math.sin(a) * 17;
      enfants.push(el('line', { x1: fx, y1: fy, x2: c.x, y2: c.y, class: 'lien-ferme' }));
      enfants.push(el('circle', { cx: fx, cy: fy, r: 1.2, class: 'page-ferme' }));
    }
  }

  for (const [a, b] of liens) {
    if (a >= noeuds.length || b >= noeuds.length) continue;
    const A = noeuds[a], B = noeuds[b];
    const dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy);
    const ra = rayon(a) + 0.5, rb = rayon(b) + 1.5;
    // Légère courbe pour distinguer les liens dans les deux sens.
    const mx = (A.x + B.x) / 2 - (dy / L) * 3, my = (A.y + B.y) / 2 + (dx / L) * 3;
    const x1 = A.x + (dx / L) * ra, y1 = A.y + (dy / L) * ra;
    const x2 = B.x - (dx / L) * rb, y2 = B.y - (dy / L) * rb;
    enfants.push(el('path', { d: `M${x1.toFixed(1)},${y1.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`, class: 'lien', 'marker-end': 'url(#fleche-pr)' }));
  }

  noeuds.forEach((p, i) => {
    const g = el('g', { class: `page${options.actif === i ? ' actif' : ''}${options.confiance?.includes(i) ? ' confiance' : ''}` });
    g.append(el('circle', { cx: p.x, cy: p.y, r: rayon(i).toFixed(2) }));
    const t = el('text', { x: p.x, y: p.y + 0.3, class: 'icone' });
    t.textContent = p.icone;
    const titre = el('title', {});
    titre.textContent = p.nom;
    g.append(t, titre);
    enfants.push(g);
  });
  svg.replaceChildren(...enfants);
}
