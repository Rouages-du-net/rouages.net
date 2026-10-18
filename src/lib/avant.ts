// Recommander sans ordinateur, pour le module « Avant les algorithmes »
// (section « Recommander ») :
//   - ranger des livres : une seule case par livre (à la manière de Dewey),
//     ou plusieurs facettes combinables (l'idée de Ranganathan) ;
//   - un hit-parade : une recette qui mélange ventes, radio et juke-box, et
//     ce que change une radio payée en secret (la « payola »).
// Livres et chansons inventés pour le site ; les notations sont simplifiées.

export interface Livre {
  titre: string;
  sujet: string;
  lieu: string;
  epoque: string;
}

export const LIVRES: Livre[] = [
  { titre: 'Cultiver le riz en terrasses', sujet: 'agriculture', lieu: 'Asie', epoque: 'aujourd’hui' },
  { titre: 'Les jardins flottants de Tenochtitlan', sujet: 'agriculture', lieu: 'Amériques', epoque: 'avant 1500' },
  { titre: 'Les remèdes des herboristes du Sahel', sujet: 'médecine', lieu: 'Afrique', epoque: 'aujourd’hui' },
  { titre: 'La médecine d’Ibn Sina', sujet: 'médecine', lieu: 'Asie', epoque: 'avant 1500' },
  { titre: 'Contes de l’Afrique de l’Ouest', sujet: 'littérature', lieu: 'Afrique', epoque: 'avant 1500' },
  { titre: 'Poèmes de l’ère Heian', sujet: 'littérature', lieu: 'Asie', epoque: 'avant 1500' },
  { titre: 'Romans de la Harlem Renaissance', sujet: 'littérature', lieu: 'Amériques', epoque: '1900-2000' },
  { titre: 'Les mines d’or du Ghana', sujet: 'histoire', lieu: 'Afrique', epoque: '1900-2000' },
  { titre: 'Les routes de la soie', sujet: 'histoire', lieu: 'Asie', epoque: 'avant 1500' },
  { titre: 'Le maïs, de Mexico au monde', sujet: 'agriculture', lieu: 'Amériques', epoque: '1900-2000' },
];

export type Facette = 'sujet' | 'lieu' | 'epoque';

/** Regroupe les livres selon une facette ; l'ordre des groupes suit la première apparition. */
export function regrouper(livres: Livre[], f: Facette): { cle: string; livres: Livre[] }[] {
  const groupes = new Map<string, Livre[]>();
  for (const l of livres) {
    if (!groupes.has(l[f])) groupes.set(l[f], []);
    groupes.get(l[f])!.push(l);
  }
  return [...groupes].map(([cle, livres]) => ({ cle, livres }));
}

/**
 * Classe « Religion » de la classification de Dewey (1876), divisions 210 à
 * 290, d'après l'édition originale (Projet Gutenberg n° 12513).
 */
export const DEWEY_RELIGION: { code: number; nom: string; chretien: boolean }[] = [
  { code: 210, nom: 'Théologie naturelle', chretien: true },
  { code: 220, nom: 'Bible', chretien: true },
  { code: 230, nom: 'Théologie doctrinale', chretien: true },
  { code: 240, nom: 'Pratique et dévotion', chretien: true },
  { code: 250, nom: 'Prédication et pastorale', chretien: true },
  { code: 260, nom: 'Institutions et missions', chretien: true },
  { code: 270, nom: 'Histoire de l’Église', chretien: true },
  { code: 280, nom: 'Sectes chrétiennes', chretien: true },
  { code: 290, nom: 'Religions non chrétiennes', chretien: false },
];

// ---- Le hit-parade ----

export interface Chanson {
  titre: string;
  ventes: number; // disques vendus en magasin dans la semaine (milliers)
  radio: number; // passages à la radio
  jukebox: number; // écoutes sur juke-box (milliers)
}

export const CHANSONS: Chanson[] = [
  { titre: 'Mambo du dimanche', ventes: 90, radio: 40, jukebox: 30 },
  { titre: 'Train de nuit', ventes: 40, radio: 120, jukebox: 20 },
  { titre: 'La ballade du phare', ventes: 60, radio: 70, jukebox: 60 },
  { titre: 'Twist au bord de l’eau', ventes: 30, radio: 30, jukebox: 110 },
  { titre: 'Cœur de cuivre', ventes: 75, radio: 85, jukebox: 15 },
  { titre: 'Petite fleur des Andes', ventes: 50, radio: 20, jukebox: 70 },
];

/**
 * Score d'une chanson : moyenne pondérée de ses trois mesures, chacune
 * rapportée au maximum de la semaine (pour pouvoir mélanger des disques, des
 * passages et des écoutes).
 */
export function hitParade(chansons: Chanson[], poids: { ventes: number; radio: number; jukebox: number }) {
  const max = {
    ventes: Math.max(...chansons.map((c) => c.ventes)),
    radio: Math.max(...chansons.map((c) => c.radio)),
    jukebox: Math.max(...chansons.map((c) => c.jukebox)),
  };
  const total = poids.ventes + poids.radio + poids.jukebox || 1;
  return chansons
    .map((c) => ({
      c,
      score: (poids.ventes * (c.ventes / max.ventes) + poids.radio * (c.radio / max.radio) + poids.jukebox * (c.jukebox / max.jukebox)) / total,
    }))
    .sort((a, b) => b.score - a.score);
}
