// Frise de l'histoire de l'informatique (module « Histoire de l'informatique »),
// affichée par src/components/FriseHistoire.astro. Chaque événement vient de
// docs/sources/informatique.md ; `source` est la source principale.
import type { DonneesFrise, Evenement } from '../lib/frise';

export const REGIONS: Record<string, string> = {
  'amerique-nord': 'Amérique du Nord',
  'amerique-latine': 'Amérique latine',
  europe: 'Europe de l’Ouest',
  'europe-est': 'URSS et Europe de l’Est',
  'moyen-orient': 'Moyen-Orient',
  asie: 'Asie',
};

export const THEMES: Record<string, string> = {
  idees: 'Calcul et idées',
  machines: 'Machines et puces',
  logiciel: 'Programmes et langages',
  societe: 'Travail et politique',
};

export const EVENEMENTS: Evenement[] = [
  {
    annee: 'IIᵉ s. av. J.-C.', tri: -200, titre: 'Pingala et les syllabes',
    texte: 'En Inde, le traité de métrique sanskrite de Pingala donne des procédés pour lister toutes les combinaisons de syllabes brèves et longues, fondés sur des doublements. L’interprétation explicite en nombres binaires viendra plus tard (Mahāvīra, IXᵉ siècle).',
    region: 'asie', theme: 'idees', personnes: ['Pingala'],
    source: { titre: 'J. Shah, « A History of Piṅgala’s Combinatorics »', url: 'https://sanskrit.uohyd.ac.in/Algorithms_in_Ancient_India/Material/Pingala.pdf' },
  },
  {
    annee: 'IXᵉ s.', tri: 820, titre: 'Al-Khwârizmî, d’où vient « algorithme »',
    texte: 'À Bagdad, à la Maison de la sagesse, al-Khwârizmî écrit un traité sur le calcul avec les chiffres indiens. Sa traduction latine a donné « algorithme », et son al-jabr a donné « algèbre ». Il a transmis les chiffres dits « indo-arabes », sans les inventer.',
    region: 'moyen-orient', theme: 'idees', personnes: ['al-Khwârizmî'],
    source: { titre: 'MacTutor (St Andrews), « Al-Khwarizmi »', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/' },
  },
  {
    annee: '1843', tri: 1843, titre: 'Les notes d’Ada Lovelace',
    texte: 'Ada Lovelace traduit un article sur la machine analytique de Charles Babbage et y ajoute des notes, dont la Note G : la première description publiée, pas à pas, d’un calcul par une telle machine. Elle imagine que la machine pourrait traiter autre chose que des nombres.',
    region: 'europe', theme: 'logiciel', personnes: ['Ada Lovelace', 'Charles Babbage'], pionniere: true,
    source: { titre: 'Menabrea & Lovelace, « Sketch of the Analytical Engine » (1843, transcription)', url: 'https://www.fourmilab.ch/babbage/sketch.html' },
  },
  {
    annee: '1881', tri: 1881, titre: 'Les « computers » de Harvard',
    texte: 'À l’observatoire de Harvard, Williamina Fleming est embauchée pour analyser des plaques photographiques, payée une fraction du salaire d’un homme ; elle dirige l’équipe à partir de 1886. « Computer » désigne alors un métier : calculer à la main.',
    region: 'amerique-nord', theme: 'societe', personnes: ['Williamina Fleming'], pionniere: true,
    source: { titre: 'MacTutor (St Andrews), « Williamina Paton Stevens Fleming »', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Fleming/' },
  },
  {
    annee: '1932-1939', tri: 1932, titre: 'Enigma cassée en Pologne',
    texte: 'Les mathématiciens polonais Marian Rejewski, Jerzy Różycki et Henryk Zygalski cassent le chiffre Enigma dès 1932 et construisent la « bomba ». Ils transmettent leurs travaux aux Britanniques et aux Français en juillet 1939.',
    region: 'europe-est', theme: 'machines', personnes: ['Marian Rejewski', 'Jerzy Różycki', 'Henryk Zygalski'],
    source: { titre: 'IEEE / ETHW, « First Breaking of Enigma Code by the Team of Polish Cipher Bureau »', url: 'https://ethw.org/Milestones:First_Breaking_of_Enigma_Code_by_the_Team_of_Polish_Cipher_Bureau,_1932-1939' },
  },
  {
    annee: '1936', tri: 1936, titre: 'La machine universelle',
    texte: 'Alan Turing publie « On Computable Numbers » : une machine abstraite capable d’imiter toute autre machine de calcul. Alonzo Church publie un résultat équivalent la même année.',
    region: 'europe', theme: 'idees', personnes: ['Alan Turing'],
    source: { titre: 'A. Hodges, « Alan Turing (1912-1954) » (notice de l’Oxford DNB)', url: 'https://www.turing.org.uk/publications/dnb.html' },
  },
  {
    annee: '1941-1942', tri: 1941, titre: 'Le brevet de Hedy Lamarr',
    texte: 'L’actrice Hedy Lamarr et le compositeur George Antheil brevètent un système de guidage de torpilles par saut de fréquence : une contribution précoce à une famille de techniques radio, pas l’invention du Wi-Fi.',
    region: 'amerique-nord', theme: 'idees', personnes: ['Hedy Lamarr', 'George Antheil'], pionniere: true,
    source: { titre: 'Brevet US 2 292 387 (Google Patents)', url: 'https://patents.google.com/patent/US2292387A/en' },
  },
  {
    annee: '1944', tri: 1944, titre: 'Joan Clarke, cheffe adjointe de la Hut 8',
    texte: 'À Bletchley Park, la cryptanalyste Joan Clarke devient cheffe adjointe de l’équipe qui attaque l’Enigma navale. Moins payée que ses collègues, elle n’est promue qu’en étant classée « linguiste », alors qu’elle ne parlait aucune langue étrangère.',
    region: 'europe', theme: 'societe', personnes: ['Joan Clarke'], pionniere: true,
    source: { titre: 'English Heritage, « Joan Clarke (1917–1996) »', url: 'https://www.english-heritage.org.uk/visit/blue-plaques/joan-clarke/' },
  },
  {
    annee: '1945-1946', tri: 1945, titre: 'Les programmeuses de l’ENIAC',
    texte: 'Six calculatrices de l’armée américaine apprennent à programmer l’ENIAC à partir de ses schémas : Kay McNulty, Jean Jennings Bartik, Betty Snyder Holberton, Marlyn Wescoff, Fran Bilas et Ruth Lichterman. Leur rôle est ignoré lors de la présentation publique de 1946.',
    region: 'amerique-nord', theme: 'logiciel', personnes: ['Jean Jennings Bartik', 'Betty Snyder Holberton', 'Kay McNulty'], pionniere: true,
    source: { titre: 'ENIAC Programmers Project (Kathy Kleiman)', url: 'https://eniacprogrammers.org/' },
  },
  {
    annee: '1947', tri: 1947, titre: 'Le papillon du Mark II',
    texte: 'À Harvard, un papillon de nuit est collé dans le cahier de bord du Mark II avec la mention « First actual case of bug being found ». La blague marche parce que le mot « bug » existait déjà depuis Edison.',
    region: 'amerique-nord', theme: 'machines',
    source: { titre: 'Computer History Museum, « This Day in History — September 9 »', url: 'https://www.computerhistory.org/tdih/September/09/' },
  },
  {
    annee: '1949', tri: 1949, titre: 'Dorothy Vaughan dirige West Area Computing',
    texte: 'Au laboratoire Langley de la NACA, Dorothy Vaughan devient cheffe de West Area Computing, l’unité ségréguée des calculatrices noires : la première superviseure noire de la NACA. Elle deviendra experte en FORTRAN.',
    region: 'amerique-nord', theme: 'societe', personnes: ['Dorothy Vaughan'], pionniere: true,
    source: { titre: 'M. L. Shetterly, « Dorothy Vaughan », NASA', url: 'https://www.nasa.gov/people/dorothy-vaughan/' },
  },
  {
    annee: '1952', tri: 1952, titre: 'Le « compilateur » A-0',
    texte: 'Grace Hopper publie son premier article sur A-0, un programme qui assemble des sous-programmes. Son équipe crée ensuite FLOW-MATIC, un langage en mots anglais qui inspirera COBOL.',
    region: 'amerique-nord', theme: 'logiciel', personnes: ['Grace Hopper'], pionniere: true,
    source: { titre: 'Grace Hopper Celebration (actes 1994), repris par Yale', url: 'https://cs.yale.edu/homes/tap/Files/hopper-story.html' },
  },
  {
    annee: '1955', tri: 1955, titre: 'Annie Easley, calculatrice puis programmeuse',
    texte: 'Annie Easley entre à la NACA à Cleveland : « I was a computer at first ». Elle programme ensuite en FORTRAN pour l’étage Centaur, les énergies alternatives et les batteries.',
    region: 'amerique-nord', theme: 'logiciel', personnes: ['Annie Easley'], pionniere: true,
    source: { titre: 'NASA, entretien avec Annie Easley (2001)', url: 'https://www.nasa.gov/history/history-publications-and-resources/oral-histories/annie-easley-oral-history/' },
  },
  {
    annee: '1958', tri: 1958, titre: 'Setun, l’ordinateur ternaire',
    texte: 'À l’université de Moscou, l’équipe de Nikolaï Broussentsov met en service Setun, qui calcule en ternaire (−1, 0, +1). C’est le seul ordinateur électronique ternaire produit en série : 50 machines construites, dont 46 de série, avant que l’administration arrête la production en 1965.',
    region: 'europe-est', theme: 'machines', personnes: ['Nikolaï Broussentsov'],
    source: { titre: 'N. P. Broussentsov, H. Ramil Alvarez, « Троичные ЭВМ “Сетунь” и “Сетунь 70” » (MGU)', url: 'https://ternarycomp.cs.msu.ru/Papers/Petroz.pdf' },
  },
  {
    annee: '1958', tri: 1958.5, titre: 'Le langage Adresse',
    texte: 'À Kyiv, Kateryna Iouchtchenko propose avec V. Koroliouk le langage « Adresse », l’un des premiers langages de haut niveau d’URSS, fondé sur un adressage indirect proche des pointeurs.',
    region: 'europe-est', theme: 'logiciel', personnes: ['Kateryna Iouchtchenko'], pionniere: true,
    source: { titre: 'Е. Л. Ющенко, « Адресное программирование » (1963)', url: 'https://files.infoua.net/yushchenko/Adresnoe-programmirovanie_EYushchenko_1963.pdf' },
  },
  {
    annee: '1960', tri: 1960, titre: 'TIFRAC, le premier ordinateur indien',
    texte: 'À Bombay, l’équipe de R. Narasimhan au Tata Institute of Fundamental Research met en service le premier ordinateur numérique électronique conçu et construit en Inde : 2 700 tubes, 2 048 mots de mémoire.',
    region: 'asie', theme: 'machines', personnes: ['R. Narasimhan'],
    source: { titre: 'TIFR, « India’s First Digital Computer » (Google Arts & Culture)', url: 'https://artsandculture.google.com/story/NQVhslS0jrdXLA' },
  },
  {
    annee: '1961', tri: 1961, titre: 'Clementina en Argentine',
    texte: 'L’université de Buenos Aires inaugure Clementina, premier ordinateur scientifique du pays, à l’Instituto de Cálculo de Manuel Sadosky. Cecilia Berdichevsky en devient la première programmeuse. En 1966, la dictature disperse l’équipe.',
    region: 'amerique-latine', theme: 'machines', personnes: ['Cecilia Berdichevsky', 'Manuel Sadosky'], pionniere: true,
    source: { titre: 'UBA Ciencia, « Clementina, la primera computadora científica »', url: 'https://www.uba.ar/ubaciencia/noticias/966' },
  },
  {
    annee: '1962', tri: 1962, titre: 'Les calculs de John Glenn',
    texte: 'Pour le premier vol orbital américain, John Glenn demande que Katherine Johnson vérifie à la main les équations calculées par les ordinateurs électroniques.',
    region: 'amerique-nord', theme: 'idees', personnes: ['Katherine Johnson'], pionniere: true,
    source: { titre: 'M. L. Shetterly, « Katherine Johnson Biography », NASA', url: 'https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/' },
  },
  {
    annee: '1962', tri: 1962.5, titre: 'Une entreprise de programmeuses',
    texte: 'Stephanie Shirley fonde Freelance Programmers, où travaillent surtout des mères de famille, à domicile et à horaires flexibles. Elle signe « Steve » pour que ses lettres reçoivent des réponses.',
    region: 'europe', theme: 'societe', personnes: ['Stephanie Shirley'], pionniere: true,
    source: { titre: 'D. Spicer, « In Memoriam: Dame Stephanie Shirley », Computer History Museum', url: 'https://computerhistory.org/blog/in-memoriam-dame-stephanie-shirley-1933-2025/' },
  },
  {
    annee: '1962-1970', tri: 1962.7, titre: 'OGAS, le réseau soviétique qui n’a pas vu le jour',
    texte: 'Viktor Glouchkov propose un réseau national de centres de calcul pour planifier l’économie soviétique. En 1970, le Politburo le juge trop ambitieux ; les ministères bâtissent des systèmes incompatibles.',
    region: 'europe-est', theme: 'societe', personnes: ['Viktor Glouchkov'],
    source: { titre: 'S. Gerovitch, « InterNyet » (History and Technology, 2008)', url: 'https://web.mit.edu/slava/homepage/articles/Gerovitch-InterNyet.pdf' },
  },
  {
    annee: '1963-1975', tri: 1963, titre: 'Les ouvrières de l’électronique',
    texte: 'Fairchild assemble ses puces à Hong Kong dès fin 1963 : une ouvrière y gagne environ 1 dollar par jour en 1965. De 1965 à 1975, l’entreprise a aussi une usine en territoire navajo, à Shiprock ; Intel ouvre son site de Penang (Malaisie) en 1972. Une main-d’œuvre surtout féminine et peu payée.',
    region: 'asie', theme: 'societe', pionniere: true,
    source: { titre: 'D. Roads, « Hong Kong Adds Quality Electronics… », Electronics (13 décembre 1965)', url: 'https://rfcafe.com/references/electronics-mag/hong-kong-quality-electronics-mag-dec-13-1965.htm' },
  },
  {
    annee: '1965', tri: 1965, titre: 'Un des deux premiers doctorats en informatique',
    texte: 'Sœur Mary Kenneth Keller obtient son doctorat en informatique à l’université du Wisconsin le 7 juin, le même jour qu’Irving Tang : l’une des deux premières personnes à le faire aux États-Unis.',
    region: 'amerique-nord', theme: 'idees', personnes: ['Mary Kenneth Keller'], pionniere: true,
    source: { titre: 'UW–Madison, « Sister Mary Kenneth Keller (PhD, 1965) »', url: 'https://www.cs.wisc.edu/2019/03/18/2759/' },
  },
  {
    annee: '1965-1969', tri: 1965.5, titre: 'Le logiciel d’Apollo',
    texte: 'Au MIT, Margaret Hamilton dirige l’équipe du logiciel embarqué des missions habitées. Lors de l’alunissage d’Apollo 11, le logiciel, conçu pour donner la priorité aux tâches essentielles, surmonte une surcharge.',
    region: 'amerique-nord', theme: 'logiciel', personnes: ['Margaret Hamilton'], pionniere: true,
    source: { titre: 'MIT News, « Margaret Hamilton… dies at 90 » (2026)', url: 'https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007' },
  },
  {
    annee: '1971-1973', tri: 1971, titre: 'Cybersyn au Chili',
    texte: 'Fernando Flores, au gouvernement de Salvador Allende, fait appel au cybernéticien britannique Stafford Beer pour suivre les entreprises nationalisées. Le réseau de télex sert pendant la grève d’octobre 1972 ; la salle d’opérations reste un prototype. Le coup d’État du 11 septembre 1973 met fin au projet.',
    region: 'amerique-latine', theme: 'societe', personnes: ['Stafford Beer', 'Fernando Flores'],
    source: { titre: 'E. Medina, article dans Cabinet n° 46 (2012)', url: 'https://cabinetmagazine.org/issues/46/medina.php' },
  },
  {
    annee: '1972-1992', tri: 1972, titre: 'La « réserve de marché » brésilienne',
    texte: 'Le Brésil réserve à des entreprises nationales le marché des mini- puis micro-ordinateurs, avec l’entreprise publique Cobra (1974). La politique, rattachée en 1979 au Conseil de sécurité nationale de la dictature, prend fin en 1992.',
    region: 'amerique-latine', theme: 'societe',
    source: { titre: 'D. Zaparolli, « The legacy of the ugly duckling », Pesquisa FAPESP (2022)', url: 'https://revistapesquisa.fapesp.br/en/the-legacy-of-the-ugly-duckling/' },
  },
  {
    annee: '1976', tri: 1976, titre: 'La Channel F et ses cartouches',
    texte: 'Chez Fairchild, Jerry Lawson dirige l’ingénierie de la Channel F, partie d’un prototype de l’entreprise Alpex : la première console de jeu à cartouches ROM interchangeables et à microprocesseur. L’un des premiers ingénieurs noirs de la Silicon Valley.',
    region: 'amerique-nord', theme: 'machines', personnes: ['Jerry Lawson'],
    source: { titre: 'The Henry Ford, « Jerry Lawson & the Fairchild Channel F »', url: 'https://www.thehenryford.org/collections/explore/articles/jerry-lawson-and-the-fairchild-channel-f-video-entertainment-system' },
  },
  {
    annee: '1978-1980', tri: 1978, titre: 'Concevoir des puces simplement',
    texte: 'Lynn Conway et Carver Mead mettent au point une méthode simplifiée de conception des puces (VLSI), enseignée au MIT dès 1978. Dix ans plus tôt, IBM avait licencié Lynn Conway pour sa transition ; l’entreprise s’en excusera en 2020.',
    region: 'amerique-nord', theme: 'machines', personnes: ['Lynn Conway', 'Carver Mead'], pionniere: true,
    source: { titre: 'D. Spicer, « In Memoriam: Lynn Conway (1938–2024) », Computer History Museum', url: 'https://computerhistory.org/blog/in-memoriam-lynn-conway-1938-2024/' },
  },
  {
    annee: '1980', tri: 1980, titre: 'Le chinois en photocomposition laser',
    texte: 'À l’université de Pékin, le système de Wang Xuan et Chen Kunqiu, codirectrice du projet, imprime son premier livre-échantillon. La compression des caractères chinois (contours et paramètres) permet de les composer avec des ordinateurs à mémoire très limitée.',
    region: 'asie', theme: 'logiciel', personnes: ['Wang Xuan', 'Chen Kunqiu'], pionniere: true,
    source: { titre: 'PKU News, « Wang Xuan: Exploring the way of independent innovation » (2019)', url: 'https://english.pku.edu.cn/news_events/news/people/8889.html' },
  },
  {
    annee: '1981', tri: 1981, titre: 'Le bus du PC d’IBM',
    texte: 'Mark Dean et Dennis Moeller conçoivent le bus d’extension de l’IBM PC, appelé plus tard « ISA ». Mark Dean deviendra en 1995 le premier Noir américain nommé IBM Fellow.',
    region: 'amerique-nord', theme: 'machines', personnes: ['Mark Dean', 'Dennis Moeller'],
    source: { titre: 'IBM, « Mark Dean » (IBM Heritage)', url: 'https://www.ibm.com/history/mark-dean' },
  },
  {
    annee: '1984', tri: 1984, titre: 'TRON au Japon',
    texte: 'Ken Sakamura lance TRON, une architecture ouverte de systèmes temps réel. Sa branche ITRON devient un standard de fait de l’électronique embarquée japonaise.',
    region: 'asie', theme: 'logiciel', personnes: ['Ken Sakamura'],
    source: { titre: 'IEEE / ETHW, « The Pioneering TRON Intelligent House, 1989 »', url: 'https://ethw.org/Milestones:The_Pioneering_TRON_Intelligent_House,_1989' },
  },
  {
    annee: '1985', tri: 1985, titre: 'Le premier processeur ARM',
    texte: 'Chez Acorn, à Cambridge, les premières puces ARM arrivent le 26 avril. Sophie Wilson en a conçu le jeu d’instructions, Steve Furber l’architecture matérielle.',
    region: 'europe', theme: 'machines', personnes: ['Sophie Wilson', 'Steve Furber'], pionniere: true,
    source: { titre: 'Computer History Museum, « Sophie Wilson — 2012 Fellow »', url: 'https://computerhistory.org/profile/sophie-wilson/' },
  },
];

export const FRISE_INFORMATIQUE: DonneesFrise = { regions: REGIONS, themes: THEMES, evenements: EVENEMENTS };
