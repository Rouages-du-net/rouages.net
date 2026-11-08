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

/** Où l'on peut bloquer une connexion (animation « Blocage »). */
export const ETAPES_CONNEXION: { etape: string; normal: string; bloque: string; voit: string; collateral: string }[] = [
  {
    etape: 'Demander l’adresse (DNS)',
    normal: 'Ton appareil demande au résolveur DNS de ton fournisseur d’accès l’adresse IP de site.example. Il reçoit 203.0.113.10.',
    bloque: 'Blocage DNS : le résolveur ment (il renvoie une page de blocage) ou ne répond pas. C’est le blocage le plus courant en France, le moins coûteux… et le plus facile à contourner en changeant de résolveur.',
    voit: 'Le nom du site, en clair, sauf si ton appareil utilise un DNS chiffré.',
    collateral: 'Peu d’effets de bord : seul le nom visé est touché.',
  },
  {
    etape: 'Se connecter à l’adresse (IP)',
    normal: 'Ton appareil ouvre une connexion TCP vers 203.0.113.10.',
    bloque: 'Blocage IP : les paquets vers cette adresse sont jetés. Mais des centaines de sites peuvent partager une même adresse : ils sont bloqués aussi.',
    voit: 'L’adresse IP de destination.',
    collateral: 'Effets de bord massifs : en 2020, la Cour européenne des droits de l’homme a condamné la Russie, qui reconnaissait que 97 % des ressources bloquées l’étaient par ricochet.',
  },
  {
    etape: 'Dire bonjour en TLS (SNI)',
    normal: 'Pour ouvrir une connexion chiffrée (HTTPS), le navigateur envoie un « bonjour » qui contient, en clair, le nom du site visité : le champ SNI.',
    bloque: 'Filtrage du SNI : un boîtier lit ce nom et coupe la connexion, souvent en envoyant un faux paquet de fin de connexion. C’est ainsi que la Russie a ralenti Twitter en 2021 et bloque beaucoup de sites depuis 2022.',
    voit: 'Le nom du site, même si le reste est chiffré.',
    collateral: 'Précis, mais une règle mal écrite déborde : en 2021, la règle russe « t.co » a ralenti aussi microsoft.com et reddit.com.',
  },
  {
    etape: 'Échanger les données (contenu chiffré)',
    normal: 'La page arrive, chiffrée : personne sur le chemin ne peut lire son contenu.',
    bloque: 'Inspection profonde (DPI) : sans lire le contenu, un boîtier analyse la forme du trafic pour reconnaître un protocole, par exemple un VPN, et le bloquer. La Chine bloque ainsi depuis 2021 le trafic qui « ressemble trop au hasard ».',
    voit: 'La taille et le rythme des paquets, pas leur contenu.',
    collateral: 'Le blocage est probabiliste : des connexions légitimes sautent aussi.',
  },
];

/** Coupures d'internet recensées par Access Now (#KeepItOn), chiffres au 31 mars 2026. */
export const COUPURES: { annee: number; nombre: number; pays: number }[] = [
  { annee: 2022, nombre: 201, pays: 40 },
  { annee: 2023, nombre: 289, pays: 39 },
  { annee: 2024, nombre: 304, pays: 54 },
  { annee: 2025, nombre: 313, pays: 52 },
];
export const COUPURES_2025_PAYS: [string, number][] = [
  ['Myanmar', 95], ['Inde', 65], ['Pakistan', 20], ['Russie', 19], ['Iran', 11], ['Tanzanie', 8], ['Irak', 7], ['Palestine', 7],
];

/** Qui a ordonné ce blocage, sur quelle base, avec quel recours ? */
export const QUI_BLOQUE: { cas: string; qui: string; base: string; controle: string; issue: string }[] = [
  { cas: 'TikTok en Nouvelle-Calédonie (mai 2024)', qui: 'Le Premier ministre', base: 'Aucune loi précise : des « circonstances exceptionnelles » pendant des émeutes meurtrières.', controle: 'Le juge, après coup.', issue: 'Annulé par le Conseil d’État le 1er avril 2025 : couper totalement, pour une durée indéterminée, était une atteinte disproportionnée à la liberté d’expression. Il admet qu’une coupure provisoire peut être permise, faute de solution moins radicale.' },
  { cas: 'Un site pédocriminel, en France', qui: 'La police (l’Office anti-cybercriminalité)', base: 'L’article 6-1 de la loi pour la confiance dans l’économie numérique, si le contenu n’est pas retiré sous 24 heures.', controle: 'Une « personnalité qualifiée » de l’Arcom vérifie chaque demande, puis le juge peut être saisi.', issue: '624 demandes de blocage contrôlées en 2024, dont 616 pour des contenus pédocriminels et 8 pour des contenus terroristes. La critique : pas de juge avant le blocage.' },
  { cas: 'RT et Sputnik dans l’Union européenne (mars 2022)', qui: 'Le Conseil de l’UE (les gouvernements)', base: 'Des sanctions contre la propagande justifiant l’invasion de l’Ukraine.', controle: 'Le Tribunal de l’UE.', issue: 'Validé le 27 juillet 2022 : une atteinte jugée proportionnée « compte tenu du contexte extraordinaire », et des mesures « temporaires et réversibles ».' },
  { cas: 'Twitter au Nigeria (juin 2021)', qui: 'Le gouvernement', base: 'Sa souveraineté, juste après la suppression d’un tweet du président.', controle: 'La Cour de justice de la CEDEAO (Afrique de l’Ouest).', issue: 'Jugé illégal le 14 juillet 2022 : aucune loi ne l’autorisait, ce qui viole la liberté d’expression garantie par la Charte africaine.' },
  { cas: 'Tout Google Sites en Turquie (2009)', qui: 'Un tribunal turc', base: 'Atteindre un seul site accusé d’insulter la mémoire d’Atatürk.', controle: 'La Cour européenne des droits de l’homme.', issue: 'Condamné en 2012 (Yildirim c. Turquie) : des milliers de sites innocents bloqués, sans mise en balance.' },
  { cas: 'WhatsApp en Russie (février 2026)', qui: 'Les autorités (Roskomnadzor)', base: 'Le refus de « se conformer aux normes et à la lettre de la loi russe », selon le Kremlin.', controle: 'Aucun juge avant le blocage : la loi de 2019 sur l’« internet souverain » permet au régulateur de bloquer seul.', issue: 'Bloqué ; l’État pousse une messagerie nationale.' },
];
