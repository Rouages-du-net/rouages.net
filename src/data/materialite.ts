// Chiffres du module « La matérialité du numérique », avec leur source, leur
// année et leur périmètre. Tout vient de docs/sources/materialite.md.
// Règle : ne jamais additionner ni comparer deux chiffres de périmètres
// différents sans le dire (voir les points d'attention du dossier).

export interface Source { titre: string; url: string }

// --- Étape 1 : le trajet d'un message (schéma, pas une carte exacte).
export const TRAJET = [
  { lieu: 'Ton téléphone', quoi: 'Le message part par le Wi-Fi ou une antenne 4G/5G.' },
  { lieu: 'Fibre terrestre', quoi: 'Des câbles enterrés le long des routes et des voies ferrées le mènent jusqu’à la côte.' },
  { lieu: 'Station d’atterrissement (Marseille)', quoi: 'Le câble sous-marin sort de la mer dans un bâtiment discret près de la plage, où il rejoint le réseau terrestre.' },
  { lieu: 'Câble sous-marin', quoi: 'Au fond de l’océan, un câble de la taille d’un tuyau d’arrosage, posé directement sur le sol, avec des fibres fines comme un cheveu.' },
  { lieu: 'Arrivée (Lagos)', quoi: 'Le câble atterrit de l’autre côté, puis le message rejoint un centre de données ou le téléphone de ton ou ta correspondant·e.' },
];

// --- Étape 2 : électricité des centres de données.
export const ELEC_MONDE = [
  { annee: '2024', twh: 415, note: 'estimation' },
  { annee: '2030', twh: 945, note: 'scénario de référence' },
  { annee: '2035', twh: 1200, note: 'scénario de référence' },
];
export const ELEC_FRANCE = [
  { annee: '2024', twh: 10, note: 'estimation de modèle (centres en France)' },
  { annee: '2035', twh: 36.7, note: 'scénario « Tendanciel », sans politique de transition' },
];

// --- Étape 3 : ce que contient un téléphone (pièces et matières).
export const PIECES = [
  {
    piece: 'La batterie', matiere: 'Cobalt',
    texte: 'En 2025, environ 73 % du cobalt extrait dans le monde vient de République démocratique du Congo, devant l’Indonésie (14 %). La Chine en est le premier raffineur. Le cobalt sert surtout aux batteries, de plus en plus à celles des voitures électriques. En 2016, Amnesty International a documenté le travail d’enfants, parfois de 7 ans, dans des mines artisanales ; la part artisanale du cobalt congolais a fortement baissé depuis, selon l’USGS.',
  },
  {
    piece: 'Le vibreur et les haut-parleurs', matiere: 'Terres rares',
    texte: 'Leurs petits aimants contiennent des terres rares. En 2025, la Chine en extrait environ 69 % et a durci ses contrôles à l’exportation. Les terres rares ne sont pas rares dans la croûte terrestre : ce sont les gisements exploitables qui le sont. Moins de 1 % de la demande est couverte par le recyclage.',
  },
  {
    piece: 'Les condensateurs', matiere: 'Tantale (coltan)',
    texte: 'Le tantale, tiré du coltan, sert aux condensateurs. En 2025, la RDC en fournit environ 52 % et le Rwanda 16 %. En 2025, un rapport d’experts de l’ONU, cité par l’agence AP, accuse le Rwanda d’avoir fait passer en contrebande du coltan des zones tenues par la rébellion du M23 ; le Rwanda dément (état au 6 novembre 2026).',
  },
  {
    piece: 'La puce', matiere: 'Silicium et eau',
    texte: 'Les puces les plus fines sont surtout gravées à Taïwan, par TSMC, avec des machines qu’un seul fabricant au monde sait construire (ASML). Il faut beaucoup d’eau très pure : 129 millions de m³ en 2024 pour les usines taïwanaises de TSMC, selon l’entreprise. Pendant la sécheresse de 2021, elle a acheté de l’eau livrée par camions-citernes.',
  },
];

// --- Étape 4 : ordres de grandeur, avec leur périmètre.
export interface Estimation {
  action: string;
  valeur: string;
  wh?: number; // pour la barre (énergie par action), quand elle existe
  annee: string;
  qui: string;
  perimetre: string;
  partiePrenante: boolean;
  source: Source;
}
export const ESTIMATIONS: Estimation[] = [
  { action: 'Une recherche Google', valeur: '0,3 Wh', wh: 0.3, annee: '2009', qui: 'Google', perimetre: 'serveurs et indexation, sans ton appareil (chiffre ancien, jamais mis à jour publiquement)', partiePrenante: true, source: { titre: 'U. Hölzle, « Powering a Google search » (2009)', url: 'https://googleblog.blogspot.com/2009/01/powering-google-search.html' } },
  { action: 'Une question à ChatGPT', valeur: 'environ 3 Wh', wh: 3, annee: '2023', qui: 'A. de Vries (estimation extérieure)', perimetre: 'serveurs, d’après des hypothèses de 2023', partiePrenante: false, source: { titre: 'J. You (Epoch AI), « How much energy does ChatGPT use? » (2025), qui cite de Vries 2023', url: 'https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use' } },
  { action: 'Une question à ChatGPT', valeur: 'environ 0,3 Wh', wh: 0.3, annee: '2025', qui: 'Epoch AI (estimation extérieure)', perimetre: 'serveurs, modèle GPT-4o', partiePrenante: false, source: { titre: 'J. You (Epoch AI), « How much energy does ChatGPT use? » (2025)', url: 'https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use' } },
  { action: 'Une question à ChatGPT', valeur: '0,34 Wh', wh: 0.34, annee: '2025', qui: 'Sam Altman (OpenAI)', perimetre: 'non précisé, méthode non publiée', partiePrenante: true, source: { titre: 'S. Altman, « The Gentle Singularity » (2025)', url: 'https://blog.samaltman.com/the-gentle-singularity' } },
  { action: 'Une question à Gemini (texte)', valeur: '0,24 Wh, 0,26 mL d’eau', wh: 0.24, annee: '2025', qui: 'Google', perimetre: 'mesure en production, eau de refroidissement sur place, sans ton appareil', partiePrenante: true, source: { titre: 'A. Vahdat, J. Dean (Google), « How much energy does Google’s AI use? » (2025)', url: 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference' } },
  { action: 'Une réponse de Le Chat (Mistral)', valeur: '1,14 g CO₂e, 45 mL d’eau', annee: '2025', qui: 'Mistral, avec Carbone 4 et l’ADEME', perimetre: 'cycle de vie : fabrication des serveurs et eau de production de l’électricité comprises', partiePrenante: true, source: { titre: 'Mistral AI, « Our contribution to a global environmental standard for AI » (2025)', url: 'https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai' } },
  { action: 'Une tâche d’« agent » d’IA', valeur: 'plusieurs dizaines de Wh', wh: 40, annee: '2026', qui: 'Agence internationale de l’énergie', perimetre: 'ordre de grandeur lu sur un graphique, sans valeur exacte', partiePrenante: false, source: { titre: 'N. Kauf (AIE), « Key questions on energy and AI » (2026)', url: 'https://asiacleanenergyforum.adb.org/wp-content/uploads/2026/06/Key-questions-on-energy-and-AI.pdf' } },
  { action: 'Une heure de vidéo en ligne', valeur: '36 g CO₂', annee: '2019', qui: 'Agence internationale de l’énergie (G. Kamiya)', perimetre: 'électricité seule, moyenne mondiale (estimation révisée en 2020)', partiePrenante: false, source: { titre: 'G. Kamiya, Carbon Brief (2020)', url: 'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/' } },
];

// --- Étape 5 : déchets électroniques (monde, 2022).
export const DECHETS = {
  total: 62, documentes: 13.8, informel: 18, frontieres: 5.1, nonControles: 3.3, parHabitant: 7.8, prevu2030: 82,
};
// Fabrication d'un smartphone (ADEME, Base Empreinte) : 80,2 kg CO₂e dont 99 % pour la fabrication.
export const SMARTPHONE_KG = 80.2;
