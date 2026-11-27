// Mesure d'audience : Umami, auto-hébergé, sans cookie (voir docs/STACK.md et
// /a-propos/#confidentialite). Le script n'est ajouté que si les deux variables
// sont définies au moment du build (variables GitHub du dépôt, utilisées par
// .github/workflows/deploy.yml) : en local, en test et en CI, rien n'est chargé.
export const UMAMI_SRC: string = import.meta.env.PUBLIC_UMAMI_SRC ?? '';
export const UMAMI_WEBSITE_ID: string = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
export const AUDIENCE_ACTIVE = Boolean(UMAMI_SRC && UMAMI_WEBSITE_ID);
/** Hôte de l'instance Umami (pour l'expliquer dans le compteur de requêtes). */
export const UMAMI_HOTE = AUDIENCE_ACTIVE ? new URL(UMAMI_SRC).host : '';
