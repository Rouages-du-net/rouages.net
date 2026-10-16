// Données de l'animation « Règles ou exemples ? » : les mêmes animaux,
// reconnus par des règles écrites à la main ou par un arbre appris.
import type { Exemple, Regle } from './apprendre';

export const QUESTIONS = [
  { id: 'plumes', texte: 'a des plumes' },
  { id: 'poils', texte: 'a des poils' },
  { id: 'vole', texte: 'vole' },
  { id: 'nage', texte: 'nage' },
  { id: 'branchies', texte: 'respire avec des branchies' },
  { id: 'allaite', texte: 'allaite ses petits' },
];

// Règles d'un petit système expert (les faits sont les textes des questions).
export const REGLES: Regle[] = [
  { si: ['a des plumes'], alors: 'oiseau' },
  { si: ['allaite ses petits'], alors: 'mammifère' },
  { si: ['a des poils'], alors: 'mammifère' },
  { si: ['respire avec des branchies'], alors: 'poisson' },
  { si: ['oiseau', 'nage'], alors: 'manchot' },
  { si: ['mammifère', 'vole'], alors: 'chauve-souris' },
  { si: ['mammifère', 'nage'], alors: 'dauphin' },
];

const ex = (nom: string, classe: string, oui: string[]): Exemple => ({
  nom,
  classe,
  attributs: Object.fromEntries(QUESTIONS.map((q) => [q.id, oui.includes(q.id)])),
});

// Exemples d'apprentissage. Remarque : aucun oiseau qui ne vole pas, et un
// seul mammifère qui nage ; l'arbre ne saura que ce que disent ces exemples.
export const EXEMPLES: Exemple[] = [
  ex('pigeon', 'oiseau', ['plumes', 'vole']),
  ex('canard', 'oiseau', ['plumes', 'vole', 'nage']),
  ex('chat', 'mammifère', ['poils', 'allaite']),
  ex('chien', 'mammifère', ['poils', 'allaite', 'nage']),
  ex('chauve-souris', 'mammifère', ['poils', 'allaite', 'vole']),
  ex('saumon', 'poisson', ['nage', 'branchies']),
  ex('requin', 'poisson', ['nage', 'branchies']),
  ex('dauphin', 'mammifère', ['allaite', 'nage']),
];
