// Mécanique commune des animations « pas à pas » : boutons Précédent /
// Suivant / Recommencer, compteur, et légende annoncée aux lecteurs d'écran.
//
// Balisage attendu dans `racine` :
//   .anim-legende            légende de l'étape (aria-live)
//   .anim-compteur           « 2 / 5 »
//   [data-action="precedent"|"suivant"|"recommencer"]
//
// `rendre(etape)` met la scène dans l'état de l'étape (1 à `total`) et
// renvoie le texte de la légende. Il peut être asynchrone (animation) :
// les boutons sont désactivés pendant ce temps.

export interface PasAPas {
  aller(etape: number): Promise<void>;
  etape(): number;
  redessiner(): Promise<void>;
}

export function pasAPas(
  racine: HTMLElement,
  total: () => number,
  rendre: (etape: number, avance: boolean) => string | Promise<string>,
): PasAPas {
  const legende = racine.querySelector<HTMLElement>('.anim-legende');
  const compteur = racine.querySelector<HTMLElement>('.anim-compteur');
  const bouton = (a: string) => racine.querySelector<HTMLButtonElement>(`[data-action="${a}"]`);
  const precedent = bouton('precedent');
  const suivant = bouton('suivant');
  const recommencer = bouton('recommencer');
  let courante = 1;
  let occupe = false;

  const majBoutons = () => {
    if (precedent) precedent.disabled = occupe || courante <= 1;
    if (suivant) suivant.disabled = occupe || courante >= total();
    if (compteur) compteur.textContent = `${courante} / ${total()}`;
  };

  async function aller(n: number, avance = false) {
    courante = Math.max(1, Math.min(total(), n));
    occupe = true;
    majBoutons();
    const texte = await rendre(courante, avance);
    if (legende) legende.textContent = `Étape ${courante} sur ${total()}\u00a0: ${texte}`;
    occupe = false;
    majBoutons();
  }

  precedent?.addEventListener('click', () => aller(courante - 1));
  suivant?.addEventListener('click', () => aller(courante + 1, true));
  recommencer?.addEventListener('click', () => aller(1));

  return { aller: (n) => aller(n), etape: () => courante, redessiner: () => aller(courante) };
}

/** Affiche la scène interactive et masque le texte de repli. */
export function activerScene(racine: HTMLElement) {
  racine.querySelectorAll<HTMLElement>('.anim-repli').forEach((e) => (e.hidden = true));
  racine.querySelectorAll<HTMLElement>('.anim-scene').forEach((e) => (e.hidden = false));
}

/** Petite pause, supprimée si l'utilisateur réduit les animations. */
export const pause = (ms: number) =>
  matchMedia('(prefers-reduced-motion: reduce)').matches ? Promise.resolve() : new Promise((r) => setTimeout(r, ms));
