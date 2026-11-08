// Données du module « États et régulation : qui fait les lois du
// numérique ? ». Faits sourcés : voir docs/sources/etats-regulation.md.

/** Lois de protection des données par région (CNUCED, Global Cyberlaw Tracker 2026). */
export const LOIS_DONNEES: { region: string; avec: number; total: number }[] = [
  { region: 'Europe', avec: 43, total: 44 },
  { region: 'Amérique latine et Caraïbes', avec: 29, total: 33 },
  { region: 'Afrique', avec: 41, total: 54 },
  { region: 'Asie et Océanie', avec: 40, total: 62 },
];
export const LOIS_DONNEES_MONDE = { avec: 155, total: 195 };

/** Exemples de lois dans le monde (animation « Monde »). */
export const LOIS_EXEMPLES: { pays: string; loi: string; annee: string; texte: string }[] = [
  { pays: 'France', loi: 'Loi Informatique et Libertés', annee: '1978', texte: 'Votée après le scandale du projet SAFARI (1974), qui voulait relier 400 fichiers de l’administration par un identifiant unique. Elle crée la CNIL.' },
  { pays: 'Union européenne', loi: 'RGPD', annee: '2016 (appliqué en 2018)', texte: 'Le règlement général sur la protection des données, valable dans les 27 pays, et pour toute entreprise qui vise des personnes en Europe.' },
  { pays: 'Brésil', loi: 'Marco Civil da Internet, puis LGPD', annee: '2014 et 2018', texte: 'Une « constitution de l’internet » votée en 2014, puis une loi générale sur les données. En 2025, la Cour suprême a renforcé la responsabilité des plateformes.' },
  { pays: 'Union africaine', loi: 'Convention de Malabo', annee: '2014 (en vigueur en 2023)', texte: 'Une convention sur la cybersécurité et les données personnelles. Le Sénégal l’a ratifiée le premier, en 2016 ; 16 États sur 55 l’avaient ratifiée en 2024.' },
  { pays: 'Inde', loi: 'Règle de la TRAI, puis DPDP Act', annee: '2016 et 2023', texte: 'En 2016, le régulateur interdit les offres où certaines applis sont gratuites, ce qui met fin à Free Basics de Facebook. En 2023, une loi sur les données personnelles, précisée en 2025.' },
  { pays: 'Chine', loi: 'Règles sur les algorithmes, PIPL', annee: '2021 et 2022', texte: 'Une loi sur les données personnelles (2021), et depuis 2022 l’obligation de pouvoir désactiver la recommandation personnalisée. Les mêmes textes imposent aussi un contrôle politique des contenus.' },
  { pays: 'Australie', loi: 'Âge minimum pour les réseaux sociaux', annee: '2024 (en vigueur en 2025)', texte: 'Depuis le 10 décembre 2025, les moins de 16 ans ne peuvent plus avoir de compte sur les grands réseaux sociaux : 4,7 millions de comptes fermés selon les plateformes.' },
  { pays: 'Corée du Sud', loi: 'Loi-cadre sur l’IA', annee: '2026', texte: 'En vigueur le 22 janvier 2026 : marquage des contenus générés, obligations pour les IA « à fort impact », représentant local pour certaines entreprises étrangères.' },
];

/** Le guichet unique, cas Meta (communiqué de la DPC du 22 mai 2023). */
export const GUICHET: { etape: string; texte: string }[] = [
  { etape: 'Une plainte', texte: 'Après l’arrêt Schrems II (2020), l’autorité irlandaise, la DPC, ouvre une enquête sur les transferts de données des Européen·nes de Facebook vers les États-Unis.' },
  { etape: 'Le chef de file', texte: 'Meta a son siège européen en Irlande : grâce au « guichet unique » du RGPD, c’est l’autorité irlandaise qui mène l’enquête pour toute l’Europe.' },
  { etape: 'Un projet de décision', texte: 'En juillet 2022, la DPC soumet son projet aux 47 autres autorités concernées. Elle ne propose pas d’amende.' },
  { etape: 'Des objections', texte: 'Quatre autorités sur 47 font objection. L’autorité irlandaise n’est pas d’accord : une amende irait au-delà de ce qui est « approprié, proportionné et nécessaire ».' },
  { etape: 'Le comité européen tranche', texte: 'Le désaccord est porté devant le comité européen de la protection des données (CEPD), qui réunit toutes les autorités. Il impose une amende à l’autorité irlandaise.' },
  { etape: 'La décision', texte: 'Le 12 mai 2023, la DPC inflige à Meta une amende de 1,2 milliard d’euros et l’ordre de cesser ces transferts. La procédure a duré près de trois ans.' },
];

/** Calendrier de l'AI Act, avant et après l'« omnibus » (règlements 2024/1689 et 2026/1744). */
export const CALENDRIER_IA: { date: string; avant?: string; quoi: string }[] = [
  { date: '1er août 2024', quoi: 'Entrée en vigueur du règlement : rien ne s’applique encore.' },
  { date: '2 février 2025', quoi: 'Les pratiques interdites : notation sociale, manipulation, reconnaissance des émotions au travail et à l’école, reconnaissance faciale en temps réel par la police dans l’espace public (sauf exceptions)…' },
  { date: '2 août 2025', quoi: 'Les modèles d’IA « à usage général » (comme ceux qui font tourner les assistants) : documentation, droit d’auteur, et plus d’obligations pour les plus puissants.' },
  { date: '2 décembre 2026', quoi: 'Nouvelles interdictions ajoutées en 2026 : les IA qui fabriquent des images intimes d’une personne sans son consentement, ou des contenus pédocriminels ; marquage des contenus générés.' },
  { date: '2 décembre 2027', avant: '2 août 2026', quoi: 'Les IA « à haut risque » pour l’emploi, l’éducation, le crédit, la justice… (repoussé de 16 mois par l’omnibus).' },
  { date: '2 août 2028', avant: '2 août 2027', quoi: 'Les IA « à haut risque » intégrées à des produits (jouets, machines, dispositifs médicaux…).' },
];

/** DSA : ce qui est vraiment reproché (communiqués de la Commission). */
export const GRIEFS: { qui: string; date: string; reproche: string; issue: string }[] = [
  { qui: 'X', date: '5 décembre 2025', reproche: 'La coche bleue « vérifié » peut s’acheter sans vérification ; le registre des publicités est incomplet ; les chercheur·ses n’ont pas accès aux données publiques.', issue: 'Amende de 120 millions d’euros, la première au titre du DSA.' },
  { qui: 'Temu', date: '28 mai 2026', reproche: 'Évaluation insuffisante du risque de produits illégaux et dangereux, comme des chargeurs ou des jouets pour bébés.', issue: 'Amende de 200 millions d’euros.' },
  { qui: 'AliExpress', date: '20 juillet 2026', reproche: 'Produits illégaux, dangereux ou contrefaits, modérateur·rices trop peu nombreux, recommandations qui mettent ces produits en avant.', issue: 'Amende de 550 millions d’euros, la plus forte à ce jour.' },
  { qui: 'TikTok', date: '6 novembre 2026', reproche: 'Le fil « Pour toi » enfermerait des utilisateur·rices dans des spirales de contenus nocifs (« rabbit holes »).', issue: 'Constatation préliminaire : TikTok peut répondre avant toute décision. État au 8 novembre 2026.' },
  { qui: 'Meta', date: '10 juillet 2026', reproche: 'Une conception d’Instagram et de Facebook qui pousserait à l’usage compulsif, notamment chez les mineur·es.', issue: 'Constatation préliminaire. État au 8 novembre 2026.' },
];
