// Calculs du module « Savoirs : à qui appartient la connaissance ? ».
// Faits sourcés : docs/sources/savoirs.md.

export type Discipline = 'stm' | 'shs';

/** Délai maximal de l'article 30 de la loi pour une République numérique
 * (art. L. 533-4 du code de la recherche) : 6 mois en sciences, techniques et
 * médecine, 12 mois en sciences humaines et sociales. */
export const DELAI_MOIS: Record<Discipline, number> = { stm: 6, shs: 12 };

/** Ajoute des mois à une date ISO (AAAA-MM-JJ), en restant au dernier jour du
 * mois si besoin (31 août + 6 mois = 28 ou 29 février). */
export function ajouterMois(iso: string, mois: number): string {
  const [a, m, j] = iso.split('-').map(Number);
  const cible = new Date(Date.UTC(a, m - 1 + mois, 1));
  const dernier = new Date(Date.UTC(cible.getUTCFullYear(), cible.getUTCMonth() + 1, 0)).getUTCDate();
  cible.setUTCDate(Math.min(j, dernier));
  return cible.toISOString().slice(0, 10);
}

export interface Reponse30 {
  applicable: boolean;
  date?: string; // date à partir de laquelle le dépôt en accès ouvert est possible
  raisons: string[];
}

/**
 * L'article 30 donne un droit (pas une obligation) de diffuser gratuitement
 * la version acceptée du manuscrit d'un écrit publié dans un périodique
 * (au moins une fois par an) et financé au moins pour moitié par des fonds
 * publics, au plus tard 6 ou 12 mois après la première publication.
 */
export function article30(o: { publication: string; discipline: Discipline; periodique: boolean; fondsPublics: boolean }): Reponse30 {
  const raisons: string[] = [];
  if (!o.periodique) raisons.push('L’article 30 ne vise que les écrits publiés dans un périodique paraissant au moins une fois par an (une revue), pas les livres.');
  if (!o.fondsPublics) raisons.push('Il ne vaut que pour les recherches financées au moins pour moitié par des fonds publics (État, collectivités, établissements publics, subventions d’agences, fonds européens).');
  if (raisons.length) return { applicable: false, raisons };
  const mois = DELAI_MOIS[o.discipline];
  const date = ajouterMois(o.publication, mois);
  raisons.push(`Délai maximal : ${mois} mois en ${o.discipline === 'stm' ? 'sciences, techniques et médecine' : 'sciences humaines et sociales'}, à compter de la première publication.`);
  raisons.push('C’est la version finale du manuscrit acceptée pour publication (après relecture par les pairs) qui peut être diffusée, pas la mise en page de l’éditeur.');
  raisons.push('C’est un droit de l’auteur·e, même s’il ou elle a cédé ses droits à l’éditeur : le contrat ne peut pas l’en priver.');
  return { applicable: true, date, raisons };
}
