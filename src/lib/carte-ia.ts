// La carte des IA : les buts (ce que l'IA fait pour nous) croisés avec les
// mécanismes (comment elle le fait). Voir docs/ROADMAP.md, phase 5.
// lien : adresse du module s'il existe déjà.

export const MECANISMES = [
  { id: 'regles', nom: 'Règles écrites à la main', exemple: 'systèmes experts' },
  { id: 'recherche', nom: 'Recherche et exploration', exemple: 'arbre des coups, A*' },
  { id: 'probas', nom: 'Probabilités', exemple: 'Bayes, réseaux bayésiens' },
  { id: 'stats', nom: 'Apprentissage statistique', exemple: 'arbres de décision, plus proches voisins' },
  { id: 'neurones', nom: 'Réseaux de neurones', exemple: 'apprentissage profond' },
  { id: 'renforcement', nom: 'Essais et récompenses', exemple: 'apprentissage par renforcement' },
  { id: 'nature', nom: 'Inspirés de la nature', exemple: 'génétique, fourmis, essaims' },
] as const;

export type Mecanisme = (typeof MECANISMES)[number]['id'];

export const BUTS: { nom: string; exemples: string; mecanismes: Mecanisme[]; lien?: string }[] = [
  { nom: 'qui écrivent', exemples: 'assistants, traduction', mecanismes: ['neurones', 'probas'], lien: '/modules/ia-texte/' },
  { nom: 'qui voient', exemples: 'visages, tri postal', mecanismes: ['neurones', 'stats'] },
  { nom: 'qui entendent et parlent', exemples: 'assistants vocaux, sous-titres', mecanismes: ['neurones', 'probas'] },
  { nom: 'qui créent', exemples: 'images, musique', mecanismes: ['neurones'] },
  { nom: 'qui classent', exemples: 'spam, diagnostic, tri de CV', mecanismes: ['probas', 'stats', 'neurones', 'regles'], lien: '/modules/ia-classer/' },
  { nom: 'qui recommandent', exemples: 'vidéos, fil d’actualité', mecanismes: ['stats', 'neurones'] },
  { nom: 'qui prédisent', exemples: 'météo, consommation', mecanismes: ['stats', 'neurones', 'probas'] },
  { nom: 'qui décident pour nous', exemples: 'crédit, aides sociales', mecanismes: ['regles', 'stats', 'probas', 'neurones'] },
  { nom: 'qui cherchent et optimisent', exemples: 'GPS, tournées, horaires', mecanismes: ['recherche', 'nature'], lien: '/modules/ia-chercher/' },
  { nom: 'qui jouent', exemples: 'échecs, go', mecanismes: ['recherche', 'renforcement', 'neurones'] },
  { nom: 'qui agissent', exemples: 'robots, voitures autonomes', mecanismes: ['neurones', 'renforcement', 'recherche', 'regles'] },
  { nom: 'qui surveillent', exemples: 'fraude, vidéosurveillance', mecanismes: ['stats', 'neurones', 'regles'] },
  { nom: 'qu’on trompe exprès', exemples: 'images piégées, instructions cachées', mecanismes: ['neurones'] },
];
