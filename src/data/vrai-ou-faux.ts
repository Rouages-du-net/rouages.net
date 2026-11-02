// Fiches « Vrai ou faux ? » : chaque fiche part d'une idée reçue, dit ce qui
// est vrai et ce qui est faux, et renvoie au module qui explique le mécanisme.
// Faits repris des dossiers de docs/sources/ (indiqués dans `dossier`), sans
// ajout non sourcé. Ton bienveillant : on ne se moque pas de celles et ceux
// qui y croient (voir docs/VISION.md, § 4).
import type { Source } from '../components/Sources.astro';

export type Verdict = 'faux' | 'nuance' | 'debat';

export interface Fiche {
  slug: string;
  idee: string;
  verdict: Verdict;
  enBref: string;
  vrai: string[];
  faux: string[];
  pourquoi: string; // pourquoi l'idée est si répandue
  module?: { titre: string; lien: string };
  aVenir?: string; // module prévu mais pas encore publié
  dossier: string;
  verifie: string;
  sources: Source[];
}

export const LIBELLES: Record<Verdict, string> = {
  faux: 'Faux',
  nuance: 'C’est plus compliqué',
  debat: 'En débat',
};

export const FICHES: Fiche[] = [
  {
    slug: 'dark-net-90-pour-cent',
    idee: 'Le dark net, c’est 90 % d’internet.',
    verdict: 'faux',
    enBref:
      'Le chiffre vient d’une estimation de 2001 sur tout autre chose : les bases de données du « web profond », pas les sites cachés. Le dark web est une toute petite partie du web.',
    vrai: [
      'Une grande partie du web n’est pas indexée par les moteurs de recherche : messageries, comptes bancaires, intranets, bases de données. C’est le « web profond » (deep web).',
      'En 2001, Michael K. Bergman estimait ce web profond public 400 à 550 fois plus grand que le web de surface, d’après des mesures de mars 2000.',
    ],
    faux: [
      'Le « dark web » n’est pas le web profond : ce sont les sites accessibles seulement par des réseaux d’anonymisation comme Tor (les adresses en .onion).',
      'L’estimation de Bergman portait sur des bases de données dynamiques (catalogues, archives), pas sur des sites cachés : Tor n’existait pas encore. Le chiffre a ensuite été plaqué sur le dark web, avec l’image de l’iceberg.',
      'Les services .onion représentaient environ 3,4 % du trafic des utilisateur·rices de Tor en 2015.',
    ],
    pourquoi:
      'L’image de l’iceberg est frappante, et « web profond » et « dark web » sonnent pareil. Un chiffre réel a simplement changé de sens en passant de main en main.',
    module: { titre: 'Le dark net, sans fantasme', lien: '/modules/dark-net/' },
    dossier: 'dark-net.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'M. K. Bergman', titre: 'White Paper: The Deep Web: Surfacing Hidden Value (Journal of Electronic Publishing 7-1)', url: 'https://doi.org/10.3998/3336451.0007.104', type: 'primaire', annee: 2001, langue: 'en' },
      { auteur: 'Liste EAS-info (Yale)', titre: 'The Deep Web (reprise des conclusions de Bergman)', url: 'https://mailman.yale.edu/pipermail/eas-info/2001/000234.html', type: 'site', annee: 2001, langue: 'en' },
      { auteur: 'The Tor Project', titre: 'Some statistics about onions (données préliminaires)', url: 'https://blog.torproject.org/some-statistics-about-onions/', type: 'primaire', annee: 2015, langue: 'en' },
    ],
  },
  {
    slug: 'tor-illegal',
    idee: 'Utiliser Tor, c’est illégal.',
    verdict: 'faux',
    enBref:
      'En France, utiliser des outils de chiffrement est libre, Tor compris. Ce qui est illégal, ce sont les actes commis avec, comme partout ailleurs.',
    vrai: [
      'Tor permet aussi d’accéder à des marchés illégaux, que la police démantèle : AlphaBay et Hansa ont été fermés en 2017.',
      'En décembre 2015, une note de la police proposant d’« interdire et bloquer » Tor a été révélée par la presse.',
    ],
    faux: [
      'La loi pour la confiance dans l’économie numérique (2004) dispose : « L’utilisation des moyens de cryptologie est libre ». Seules la fourniture et l’importation ou l’exportation sont déclarées à l’ANSSI.',
      'La proposition de 2015 n’a pas été retenue : le Premier ministre s’était dit défavorable à une interdiction.',
    ],
    pourquoi:
      'On entend surtout parler de Tor à propos d’affaires criminelles. Ses usages ordinaires (protéger sa vie privée, contourner la censure, protéger des sources) font moins de bruit.',
    module: { titre: 'Le dark net, sans fantasme', lien: '/modules/dark-net/' },
    dossier: 'dark-net.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'ANSSI', titre: 'Crypto, le webdoc – Chapitre III : Sécurité, secret et légalité', url: 'https://cyber.gouv.fr/crypto-le-webdoc/chapitre-iii-s%C3%A9curit%C3%A9-secret-et-l%C3%A9galit%C3%A9/', type: 'primaire' },
      { auteur: 'M. Rees (Next INpact)', titre: '« L’interdiction du Wi-Fi public n’est pas une piste » assure Manuel Valls', url: 'https://next.ink/15998/97646-l-interdiction-wi-fi-public-n-est-pas-piste-assure-manuel-valls/', type: 'presse', annee: 2015 },
      { auteur: 'C. Baraniuk (BBC News)', titre: 'AlphaBay and Hansa dark web markets shut down', url: 'https://www.bbc.com/news/technology-40670010', type: 'presse', annee: 2017, langue: 'en' },
    ],
  },
  {
    slug: 'internet-attaque-nucleaire',
    idee: 'Internet a été créé pour résister à une attaque nucléaire.',
    verdict: 'nuance',
    enBref:
      'ARPANET, l’ancêtre d’internet, visait d’abord à partager des ordinateurs rares entre chercheur·ses. L’idée d’un réseau qui survit à une attaque vient d’une autre étude, celle de Paul Baran.',
    vrai: [
      'Entre 1960 et 1964, Paul Baran (RAND) étudie un réseau « distribué » capable de survivre à la destruction de certains de ses nœuds. Ses travaux ont influencé la commutation de paquets.',
      'ARPANET était financé par le ministère américain de la Défense, qui s’intéressait à la robustesse ; Stephen Lukasik, directeur de l’ARPA de 1971 à 1975, soutient que le financement était justifié par le commandement militaire face à la menace nucléaire.',
    ],
    faux: [
      'Les concepteurs d’internet écrivent que cette rumeur vient de l’étude de RAND : « This was never true of the ARPANET ».',
      'Bob Taylor, qui lance le projet en 1966, le présente comme un moyen de relier des communautés de chercheur·ses et de partager des ressources rares ; il n’y avait alors qu’une centaine de grands ordinateurs dans le pays.',
    ],
    pourquoi:
      'Les deux histoires se sont mélangées : celle de Baran, qui pensait vraiment à la guerre nucléaire, et celle d’ARPANET, financé par l’armée mais pensé par des chercheur·ses.',
    module: { titre: 'Histoire d’internet', lien: '/modules/histoire-internet/#reseau' },
    dossier: 'internet.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'P. Baran', titre: 'On Distributed Communications (RAND RM-3420)', url: 'https://www.rand.org/pubs/research_memoranda/RM3420.html', type: 'primaire', annee: 1964, langue: 'en' },
      { auteur: 'B. Leiner, V. Cerf, R. Kahn et al.', titre: 'A Brief History of the Internet', url: 'https://www.internetsociety.org/internet/history-internet/brief-history-internet/', type: 'primaire', annee: 1997, langue: 'en' },
      { auteur: 'J. Pelkey', titre: 'Interview of Robert W. “Bob” Taylor (Computer History Museum)', url: 'https://archive.computerhistory.org/resources/access/text/2017/12/102738691-05-01-acc.pdf', type: 'primaire', annee: 1988, langue: 'en' },
      { auteur: 'RAND', titre: 'Paul Baran and the Origins of the Internet', url: 'https://www.rand.org/pubs/articles/2018/paul-baran-and-the-origins-of-the-internet.html', type: 'site', annee: 2018, langue: 'en' },
    ],
  },
  {
    slug: 'hedy-lamarr-wifi',
    idee: 'Le Wi-Fi, c’est Hedy Lamarr.',
    verdict: 'nuance',
    enBref:
      'L’actrice a bien coinventé, avec le compositeur George Antheil, un système de saut de fréquence breveté en 1942. C’est une contribution précoce à une famille de techniques radio, pas l’invention du Wi-Fi.',
    vrai: [
      'Le brevet américain 2 292 387, « Secret Communication System », est déposé en 1941 par Hedy Kiesler Markey (son nom légal d’alors) et George Antheil, et délivré le 11 août 1942.',
      'Il vise à guider des torpilles en changeant de fréquence selon une bande perforée, comme celle d’un piano mécanique, avec jusqu’à 88 fréquences.',
      'Le saut de fréquence est utilisé aujourd’hui par le Bluetooth, et la première norme Wi-Fi (1997) proposait une variante à saut de fréquence.',
    ],
    faux: [
      'Le saut de fréquence existait avant elle : les historien·nes de l’étalement de spectre situent son brevet parmi plusieurs travaux antérieurs ou parallèles.',
      'Le National Inventors Hall of Fame, qui l’a intronisée en 2014, parle d’un développement important pour les communications sans fil, sans évoquer le Wi-Fi.',
    ],
    pourquoi:
      'Son histoire est belle, et longtemps oubliée : une star de cinéma inventrice. Reconnaître son brevet est juste ; en faire la mère du Wi-Fi efface les autres pionnier·es.',
    aVenir: 'Histoire de l’informatique',
    dossier: 'informatique.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'H. K. Markey, G. Antheil', titre: 'Secret communication system, brevet US 2 292 387', url: 'https://patents.google.com/patent/US2292387A/en', type: 'primaire', annee: 1942, langue: 'en' },
      { auteur: 'National Inventors Hall of Fame', titre: 'Hedy Lamarr — Frequency Hopping Communication System', url: 'https://www.invent.org/inductees/hedy-lamarr', type: 'site', langue: 'en' },
      { auteur: 'Bluetooth SIG', titre: 'Bluetooth Technology Overview', url: 'https://www.bluetooth.com/learn-about-bluetooth/tech-overview/', type: 'primaire', langue: 'en' },
      { auteur: 'IEEE Standards Association', titre: 'IEEE 802.11-1997', url: 'https://standards.ieee.org/ieee/802.11/1163/', type: 'primaire', annee: 1997, langue: 'en' },
    ],
  },
  {
    slug: 'premier-bug-papillon',
    idee: 'Le premier bug informatique était un papillon de nuit.',
    verdict: 'faux',
    enBref:
      'En 1947, un papillon de nuit coincé dans un relais a bien été collé dans un cahier de bord, avec une blague : « premier cas réel de bug trouvé ». La blague marche justement parce que le mot « bug » existait déjà.',
    vrai: [
      'Le 9 septembre 1947, à Harvard, l’équipe de l’ordinateur Mark II colle dans son cahier un papillon de nuit retiré d’un relais, avec la mention « First actual case of bug being found ».',
      'Grace Hopper, programmeuse dans l’équipe, a rendu l’anecdote célèbre dans ses conférences.',
    ],
    faux: [
      'Thomas Edison emploie déjà « bugs » au sens de petites pannes dans une lettre de 1878 ; en 1889, un journal parle d’un « bug » dans son phonographe.',
      'Ce n’est pas Grace Hopper qui a trouvé l’insecte ni écrit la note, et elle n’a pas inventé le mot.',
    ],
    pourquoi:
      'L’histoire est drôle et facile à raconter, et Grace Hopper la racontait elle-même. Mais lue de près, la note prouve que le mot était déjà courant chez les ingénieur·es.',
    aVenir: 'Histoire de l’informatique',
    dossier: 'informatique.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'Computer History Museum', titre: 'This Day in History — September 9', url: 'https://www.computerhistory.org/tdih/September/09/', type: 'site', langue: 'en' },
      { auteur: 'F. R. Shapiro', titre: 'Etymology of the Computer Bug: History and Folklore (American Speech 62-4)', url: 'https://gwern.net/doc/cs/hardware/1987-shapiro.pdf', type: 'recherche', annee: 1987, langue: 'en' },
      { auteur: 'Computerworld', titre: 'Did Grace Hopper really invent the term “bug”… ?', url: 'https://www.computerworld.com/article/1537941', type: 'presse', annee: 2011, langue: 'en' },
    ],
  },
  {
    slug: 'ia-comprend',
    idee: 'L’IA comprend ce qu’elle dit. (Ou : l’IA n’est qu’un perroquet.)',
    verdict: 'debat',
    enBref:
      'Les deux phrases sont des positions défendues par des chercheur·ses sérieux·ses. Ce qui est sûr : ces modèles produisent des textes très convaincants, et « comprendre » n’a pas de définition qui mette tout le monde d’accord.',
    vrai: [
      'En 2021, Emily M. Bender, Timnit Gebru et leurs collègues décrivent les modèles de langage comme des « perroquets stochastiques » : ils assemblent des formes de langage selon des probabilités, sans référence au sens.',
      'D’autres jugent que ces modèles montrent des formes générales d’intelligence ; en 2023, des chercheur·ses de Microsoft voient dans une version de GPT-4 une « version précoce, encore incomplète » d’intelligence générale.',
      'En 2025, dans un test de Turing, GPT-4.5 (avec une consigne de jouer un humain) est jugé humain dans 73 % des cas, plus souvent que les vrai·es humain·es.',
    ],
    faux: [
      'Être pris pour un humain ne prouve pas qu’on comprend : c’est tout le sens de l’expérience de la « chambre chinoise » de John Searle (1980).',
      'À l’inverse, dire « ce n’est qu’un perroquet » ne règle pas la question : les partisan·es de l’autre position répondent que le système entier pourrait comprendre.',
    ],
    pourquoi:
      'Nous attribuons spontanément une intention à ce qui parle comme nous. Et les mots « comprendre » ou « penser » n’ont jamais eu de définition simple, même pour les humains.',
    module: { titre: 'Une machine peut-elle penser ?', lien: '/modules/machine-pense/' },
    dossier: 'penser-la-technique.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'E. M. Bender, T. Gebru et al.', titre: 'On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? (FAccT ’21)', url: 'https://s10251.pcdn.co/pdf/2021-bender-parrots.pdf', type: 'recherche', annee: 2021, langue: 'en' },
      { auteur: 'S. Bubeck et al.', titre: 'Sparks of Artificial General Intelligence: Early experiments with GPT-4', url: 'https://arxiv.org/abs/2303.12712', type: 'recherche', annee: 2023, langue: 'en' },
      { auteur: 'C. R. Jones, B. K. Bergen', titre: 'Test de Turing à trois joueurs (arXiv 2503.23674), résumé', url: 'https://arxiv.org/abs/2503.23674', type: 'recherche', annee: 2025, langue: 'en' },
      { auteur: 'Stanford Encyclopedia of Philosophy', titre: 'The Chinese Room Argument', url: 'https://plato.stanford.edu/entries/chinese-room/', type: 'recherche', annee: 2024, langue: 'en' },
    ],
  },
  {
    slug: 'rien-a-cacher',
    idee: 'Je n’ai rien à cacher, donc la surveillance ne me concerne pas.',
    verdict: 'nuance',
    enBref:
      'L’argument suppose que la vie privée ne sert qu’à cacher des actes illégaux. Or des données sans nom suffisent souvent à identifier quelqu’un, et des informations anodines en révèlent beaucoup.',
    vrai: [
      'On peut n’avoir commis aucune infraction : c’est le cas de la plupart des gens.',
    ],
    faux: [
      'Le juriste Daniel Solove (2007) montre que l’argument repose sur une idée trop étroite de la vie privée : selon lui, il n’y aurait de menace que si l’État découvre une activité illégale.',
      'D’après le recensement américain de 1990, Latanya Sweeney a calculé que 87 % de la population était probablement unique avec seulement trois informations : code postal, sexe et date de naissance.',
      'Les métadonnées d’appels (qui appelle qui, quand), sans le contenu, révèlent des informations sensibles.',
    ],
    pourquoi:
      'L’argument est intuitif et rassurant. Il oublie que ce qu’on peut déduire de nous ne dépend pas seulement de ce que nous jugeons secret.',
    module: { titre: 'Surveillance et vie privée', lien: '/modules/surveillance-vie-privee/' },
    dossier: 'penser-la-technique.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'D. J. Solove', titre: '“I’ve Got Nothing to Hide” and Other Misunderstandings of Privacy (San Diego Law Review 44)', url: 'https://scholarship.law.gwu.edu/faculty_publications/158/', type: 'recherche', annee: 2007, langue: 'en' },
      { auteur: 'L. Sweeney', titre: 'Simple Demographics Often Identify People Uniquely (Data Privacy Lab)', url: 'https://dataprivacylab.org/projects/identifiability/', type: 'recherche', langue: 'en' },
      { auteur: 'J. Mayer, P. Mutchler, J. C. Mitchell', titre: 'Evaluating the privacy properties of telephone metadata (PNAS 113-20)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4878528/', type: 'recherche', annee: 2016, langue: 'en' },
    ],
  },
  {
    slug: 'gutenberg-imprimerie',
    idee: 'Gutenberg a inventé l’imprimerie.',
    verdict: 'faux',
    enBref:
      'L’impression à caractères mobiles en métal existait avant lui : le plus ancien livre conservé imprimé ainsi, le Jikji, vient de Corée, 78 ans avant la Bible de Gutenberg.',
    vrai: [
      'Gutenberg reste associé à l’essor de l’imprimé en Europe, et sa Bible est un livre célèbre.',
    ],
    faux: [
      'Le Jikji a été imprimé en 1377 à Cheongju (Corée) avec des caractères mobiles en métal fondu : c’est le plus ancien livre connu imprimé ainsi, 78 ans avant la Bible de Gutenberg.',
      'Il est conservé à la Bibliothèque nationale de France et inscrit au registre Mémoire du monde de l’UNESCO depuis 2001.',
    ],
    pourquoi:
      'L’histoire des techniques a longtemps été racontée depuis l’Europe. Les « premières fois » attribuées à une seule personne effacent souvent d’autres inventions, ailleurs.',
    module: { titre: 'La technique est-elle neutre ?', lien: '/modules/technique-neutre/#mcluhan' },
    dossier: 'penser-la-technique.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'Bibliothèque nationale de France', titre: '« Jikji », a treasure of the world of printing', url: 'https://bnf.fr/en/jikji-treasure-world-printing', type: 'site', langue: 'en' },
    ],
  },
  {
    slug: 'score-social-chine',
    idee: 'En Chine, chaque citoyen·ne a une note sociale unique qui décide de sa vie.',
    verdict: 'faux',
    enBref:
      'Selon les analyses de la MIT Technology Review et de l’institut MERICS (2022), ce score national individuel n’existe pas. Le « crédit social » chinois vise surtout les entreprises, avec des listes noires. Ce qui ne le rend pas anodin.',
    vrai: [
      'Un « système de crédit social » existe bien, avec des listes noires et des sanctions pour certaines infractions.',
      'Quelques villes ont testé des notes individuelles : à Rongcheng, chaque habitant·e recevait en 2013 un score de base de 1 000 points.',
      'La surveillance en Chine est réelle ; MERICS souligne que le système « n’est pas anodin ».',
    ],
    faux: [
      'Il n’existe pas de note nationale unique pour chaque personne : « such a score simply does not exist » (MERICS).',
      'Le système national est surtout construit autour des entreprises ; plusieurs essais locaux de notes individuelles ont été abandonnés ou limités à des récompenses.',
    ],
    pourquoi:
      'L’image d’une note unique, façon série de science-fiction, est frappante. Selon MERICS, se focaliser sur ce score imaginaire détourne des vraies menaces de surveillance.',
    module: { titre: 'Les IA qui surveillent', lien: '/modules/ia-surveiller/#interdits' },
    dossier: 'ia-surveiller.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'Z. Yang (MIT Technology Review)', titre: 'China just announced a new social credit law. Here’s what it means', url: 'https://www.technologyreview.com/2022/11/22/1063605/china-announced-a-new-social-credit-law-what-does-it-mean/', type: 'presse', annee: 2022, langue: 'en' },
      { auteur: 'V. Brussee (MERICS)', titre: 'China’s social credit score – untangling myth from reality', url: 'https://merics.org/en/short-analysis/chinas-social-credit-score-untangling-myth-reality', type: 'recherche', annee: 2022, langue: 'en' },
    ],
  },
  {
    slug: 'correlation-cause',
    idee: 'Si deux choses varient ensemble, c’est que l’une cause l’autre.',
    verdict: 'faux',
    enBref:
      'Une corrélation permet de prédire, pas d’expliquer. Souvent, une troisième cause agit sur les deux. Les IA qui prédisent trouvent des corrélations : à nous de ne pas en faire des causes.',
    vrai: [
      'Une corrélation peut être un indice utile, et parfois la trace d’une vraie cause.',
      'En 2012, le médecin Franz Messerli trouve une corrélation de 0,79 entre la consommation de chocolat de 23 pays et leur nombre de prix Nobel par habitant.',
    ],
    faux: [
      'Messerli rappelle lui-même qu’« une corrélation entre X et Y ne prouve pas une causalité » : X peut causer Y, Y peut causer X, ou une cause commune agir sur les deux.',
      'Pour établir une cause, on compare des groupes tirés au hasard (un essai contrôlé) ou on utilise des méthodes d’inférence causale.',
    ],
    pourquoi:
      'Notre cerveau cherche des causes partout, c’est souvent utile. Mais avec beaucoup de données, on trouve toujours des choses qui varient ensemble par hasard ou par une cause cachée.',
    module: { titre: 'Les IA qui prédisent', lien: '/modules/ia-predire/#correlation' },
    dossier: 'ia-predire.md',
    verifie: '2026-11-01',
    sources: [
      { auteur: 'F. H. Messerli', titre: 'Chocolate Consumption, Cognitive Function, and Nobel Laureates (NEJM 367)', url: 'https://doi.org/10.1056/NEJMon1211064', type: 'recherche', annee: 2012, langue: 'en' },
    ],
  },
];
