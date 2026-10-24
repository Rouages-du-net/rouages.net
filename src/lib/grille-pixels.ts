// Affichage d'une petite image en niveaux (valeurs de 0 à 1) dans une grille
// de cases, pour les animations du module « Les IA qu'on trompe exprès ».
// Les couleurs viennent des variables du site (classes .px, .px-plus et
// .px-moins, stylées dans chaque composant) : on règle l'opacité de chaque case.

import { COTE } from './tromper';

/**
 * Remplit `conteneur` de COTE × COTE cases. `valeurs` entre 0 et 1 ; avec
 * `signe`, les valeurs vont de −1 à 1 et la couleur dépend du signe.
 */
export function grillePixels(conteneur: HTMLElement, valeurs: number[], signe = false) {
  if (conteneur.children.length !== COTE * COTE) {
    conteneur.replaceChildren(...Array.from({ length: COTE * COTE }, () => document.createElement('span')));
  }
  valeurs.forEach((v, i) => {
    const c = conteneur.children[i] as HTMLElement;
    c.className = signe ? (v >= 0 ? 'px-plus' : 'px-moins') : 'px';
    c.style.opacity = String(Math.min(1, Math.abs(v)));
  });
}
