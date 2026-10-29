// La carte des IA : les buts (ce que l'IA fait pour nous) croisés avec les
// mécanismes (comment elle le fait). Voir docs/ROADMAP.md, phase 5.
// lien : adresse du module s'il existe déjà ; resume : sa présentation sur
// la page « L'IA » (src/pages/ia/index.astro).

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

export const BUTS: { nom: string; exemples: string; mecanismes: Mecanisme[]; lien?: string; resume?: string }[] = [
  { nom: 'qui écrivent', exemples: 'assistants, traduction', mecanismes: ['neurones', 'probas'], lien: '/modules/ia-texte/', resume: 'Comment marche un ChatGPT : tokens, plongements, attention, et les humains derrière.' },
  { nom: 'qui voient', exemples: 'visages, tri postal', mecanismes: ['neurones', 'stats'], lien: '/modules/ia-voir/', resume: 'Des pixels aux réseaux convolutifs : dessine, filtre, entraîne un petit réseau, et regarde ce que pose la reconnaissance faciale.' },
  { nom: 'qui entendent et parlent', exemples: 'assistants vocaux, sous-titres', mecanismes: ['neurones', 'probas'], lien: '/modules/ia-entendre/', resume: 'Le son en nombres, le spectrogramme, une machine qui reconnaît des voyelles et une autre qui parle ; et ta voix, une donnée à protéger.' },
  { nom: 'qui créent', exemples: 'images, musique', mecanismes: ['neurones'], lien: '/modules/ia-creer/', resume: 'Fais sortir une image du bruit, compose une mélodie, et vois quand une IA crée… ou recopie. Et à qui appartient le résultat ?' },
  { nom: 'qui classent', exemples: 'spam, diagnostic, tri de CV', mecanismes: ['probas', 'stats', 'neurones', 'regles'], lien: '/modules/ia-classer/', resume: 'Spam, fraude, tri de CV : entraîne un filtre anti-spam, choisis ton seuil, et vois ce qui change quand on classe des personnes.' },
  { nom: 'qui recommandent', exemples: 'vidéos, fil d’actualité', mecanismes: ['stats', 'neurones'], lien: '/modules/ia-recommander/', resume: 'Note des vidéos, regarde un modèle découvrir des goûts cachés, change ce qu’il optimise, et observe les boucles de popularité.' },
  { nom: 'qui prédisent', exemples: 'météo, consommation', mecanismes: ['stats', 'neurones', 'probas'] },
  { nom: 'qui décident pour nous', exemples: 'crédit, aides sociales', mecanismes: ['regles', 'stats', 'probas', 'neurones'], lien: '/modules/ia-decident/', resume: 'Règle une grille de crédit, cherche une équité impossible entre deux groupes, et regarde une boucle de contrôles se refermer.' },
  { nom: 'qui cherchent et optimisent', exemples: 'GPS, tournées, horaires', mecanismes: ['recherche', 'nature'], lien: '/modules/ia-chercher/', resume: 'GPS, tournées, sacs à dos : Dijkstra, A*, le voyageur de commerce, des fourmis et l’évolution.' },
  { nom: 'qui jouent', exemples: 'échecs, go', mecanismes: ['recherche', 'renforcement', 'neurones'], lien: '/modules/ia-jouent/', resume: 'Affronte une IA qui voit toute la partie d’avance, regarde des boîtes d’allumettes apprendre le morpion, puis choisis un coup en jouant des parties au hasard.' },
  { nom: 'qui agissent', exemples: 'robots, voitures autonomes', mecanismes: ['neurones', 'renforcement', 'recherche', 'regles'] },
  { nom: 'qui surveillent', exemples: 'fraude, vidéosurveillance', mecanismes: ['stats', 'neurones', 'regles'] },
  { nom: 'qu’on trompe exprès', exemples: 'images piégées, instructions cachées', mecanismes: ['neurones'], lien: '/modules/ia-trompe/', resume: 'Fais voir une croix là où il y a un rond, cache un ordre dans une page web, puis glisse quelques dessins piégés dans un apprentissage.' },
];
