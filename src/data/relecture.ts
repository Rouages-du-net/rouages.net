// Relecture humaine des modules. Un module relu et validé y figure avec la date
// de sa validation ; son bandeau « module en construction » disparaît alors.
// Condition (vérifiée par tests/unit/relecture.test.ts) : sa grille
// docs/relecture/<slug>.md existe et toutes ses cases sont cochées.
// Méthode : docs/relecture/README.md.
export const MODULES_RELUS: Record<string, string> = {
  // 'linux': '2026-12-05',
};

/** Slug d'un module à partir de son chemin (/modules/linux/ → linux). */
export function slugModule(chemin: string): string | null {
  const m = /^\/modules\/([^/]+)\/?$/.exec(chemin);
  return m ? m[1] : null;
}

/** Le module situé à ce chemin a-t-il été relu et validé ? */
export function estRelu(chemin: string): boolean {
  const slug = slugModule(chemin);
  return slug !== null && slug in MODULES_RELUS;
}
