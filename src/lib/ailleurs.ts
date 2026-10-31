// Des regards venus d'ailleurs, pour le module du même nom (section
// « Penser la technique ») : partager les enregistrements d'une langue,
// évalués selon les principes FAIR (données trouvables, accessibles,
// interopérables, réutilisables) et CARE (bénéfice collectif, autorité de
// contrôle, responsabilité, éthique ; Carroll et al., 2020).
// Projet et barème inventés.

export interface Choix {
  /** Description des enregistrements (métadonnées) publiée en ligne. */
  metadonnees: boolean;
  acces: 'ouvert' | 'demande' | 'communaute';
  licence: 'libre' | 'non-commerciale' | 'tutelle';
  decision: 'chercheurs' | 'partagee' | 'communaute';
  retour: boolean;
}

/**
 * Notes inventées (0 à 1 par critère), pour rendre visible la tension entre
 * ouverture et contrôle. Chaque critère est expliqué dans l'animation.
 */
export function evaluer(c: Choix) {
  const fair = {
    trouvable: c.metadonnees ? 1 : 0,
    accessible: c.acces === 'ouvert' ? 1 : c.acces === 'demande' ? 0.5 : 0,
    interoperable: 1, // formats standard dans tous les cas
    reutilisable: c.licence === 'libre' ? 1 : c.licence === 'non-commerciale' ? 0.5 : 0.25,
  };
  const care = {
    benefice: c.retour ? 1 : 0,
    autorite: c.decision === 'communaute' ? 1 : c.decision === 'partagee' ? 0.5 : 0,
    responsabilite: (c.metadonnees ? 0.5 : 0) + (c.acces === 'ouvert' && c.licence === 'libre' ? 0 : 0.5),
    ethique: c.licence === 'tutelle' ? 1 : c.licence === 'non-commerciale' ? 0.5 : 0,
  };
  const somme = (o: Record<string, number>) => Object.values(o).reduce((a, b) => a + b, 0);
  return { fair, care, totalFair: somme(fair), totalCare: somme(care) };
}
