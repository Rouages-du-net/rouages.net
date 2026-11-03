// Types communs aux frises d'histoire (internet, informatique, IA), affichées
// par le composant src/components/FriseHistoire.astro.

export interface Evenement {
  annee: string; // texte affiché (« 1971-1973 »)
  tri: number; // pour l'ordre chronologique
  titre: string;
  texte: string;
  region: string; // clé de `regions`
  theme: string; // clé de `themes`
  personnes?: string[];
  pionniere?: boolean; // met en avant une femme pionnière
  source: { titre: string; url: string };
}

export interface DonneesFrise {
  regions: Record<string, string>;
  themes: Record<string, string>;
  evenements: Evenement[];
}
