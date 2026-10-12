// Petits outils partagés par les animations.

/** L'utilisateur a-t-il demandé à réduire les animations ? */
export const mouvementReduit = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export interface Point {
  x: number;
  y: number;
}

/**
 * Déplace un élément SVG (cercle ou groupe) de `de` à `a` en `duree` ms.
 * Sans animation si l'utilisateur l'a demandé : l'élément saute à l'arrivée.
 */
export function deplacer(el: SVGElement, de: Point, a: Point, duree = 600): Promise<void> {
  const poser = (p: Point) => el.setAttribute('transform', `translate(${p.x} ${p.y})`);
  if (mouvementReduit() || duree <= 0) {
    poser(a);
    return Promise.resolve();
  }
  return new Promise((fin) => {
    const t0 = performance.now();
    const pas = (t: number) => {
      const k = Math.min(1, (t - t0) / duree);
      const e = 1 - (1 - k) ** 3; // ease-out
      poser({ x: de.x + (a.x - de.x) * e, y: de.y + (a.y - de.y) * e });
      if (k < 1) requestAnimationFrame(pas);
      else fin();
    };
    requestAnimationFrame(pas);
  });
}

/** Point situé à `marge` du bord d'un nœud rectangulaire, vers `cible`. */
export function bord(centre: Point, cible: Point, demiL: number, demiH: number): Point {
  const dx = cible.x - centre.x;
  const dy = cible.y - centre.y;
  const k = Math.min(demiL / Math.abs(dx || 1e-9), demiH / Math.abs(dy || 1e-9));
  return { x: centre.x + dx * k, y: centre.y + dy * k };
}
