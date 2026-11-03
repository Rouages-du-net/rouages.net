// Frise de l'histoire d'internet (module « Histoire d'internet »), affichée
// par src/components/FriseHistoire.astro.
// Chaque événement vient de docs/sources/internet.md ; `source` est la source
// principale de l'événement (les autres sont dans le dossier).

import type { DonneesFrise, Evenement } from '../lib/frise';

export const REGIONS: Record<string, string> = {
  'amerique-nord': 'Amérique du Nord',
  'amerique-latine': 'Amérique latine',
  europe: 'Europe',
  asie: 'Asie',
  afrique: 'Afrique',
  monde: 'Océans et monde',
};

export const THEMES: Record<string, string> = {
  reseaux: 'Réseaux et protocoles',
  noms: 'Noms et annuaires',
  web: 'Web et services',
  infra: 'Câbles et infrastructure',
};

export const EVENEMENTS: Evenement[] = [
  {
    annee: '1986', tri: 1986, titre: 'ERNET, le réseau de la recherche indienne',
    texte: 'Le ministère indien de l’Électronique et le Programme des Nations unies pour le développement lancent ERNET, qui relie de grands instituts (IISc, cinq IIT…). En 1992, il devient le premier fournisseur d’accès à internet du pays. Chandrika Shridhar y travaille de 1986 à 2016.',
    region: 'asie', theme: 'reseaux', personnes: ['Chandrika Shridhar', 'Anurag Kumar'], pionniere: true,
    source: { titre: 'Research Matters, « The ERNET project: genesis of the internet in India »', url: 'https://researchmatters.in/article/ernet-project-genesis-internet-india' },
  },
  {
    annee: '1987', tri: 1987, titre: 'Le premier courriel chinois',
    texte: 'En septembre, l’équipe de Wang Yunfeng envoie de Pékin à l’université de Karlsruhe (Allemagne) un courriel intitulé « Au-delà de la Grande Muraille, vers le monde » : le premier envoyé d’un réseau informatique chinois. Le domaine .cn est d’abord géré à Karlsruhe.',
    region: 'asie', theme: 'reseaux', personnes: ['Wang Yunfeng', 'Werner Zorn'],
    source: { titre: 'Hu Qiheng, « The Introduction of the Internet into China… » (discours de 2009, KIT)', url: 'https://www.informatik.kit.edu/downloads/HuQiheng-Spoeech_on_ChineseInternet-Beijing.23Jul2009.pdf' },
  },
  {
    annee: '1991', tri: 1991, titre: 'Le Brésil sur internet',
    texte: 'En janvier, les premiers signaux d’internet arrivent à la FAPESP, la fondation de recherche de l’État de São Paulo, par une ligne vers le Fermilab (États-Unis). L’équipe de Demi Getschko avait d’abord relié le réseau académique pauliste à BITNET en 1989.',
    region: 'amerique-latine', theme: 'reseaux', personnes: ['Demi Getschko'],
    source: { titre: 'M. de Oliveira, « The internet’s early days », Pesquisa FAPESP n° 180 (2011)', url: 'https://revistapesquisa.fapesp.br/en/the-internets-early-days/' },
  },
  {
    annee: '1994', tri: 1994, titre: 'La Chine pleinement connectée',
    texte: 'Le 20 avril, le réseau NCFC de Pékin est relié à internet avec toutes ses fonctions, après des démarches de Hu Qiheng, directrice de son comité, auprès de la Fondation nationale pour la science américaine. Le serveur du domaine .cn rejoint la Chine la même année.',
    region: 'asie', theme: 'reseaux', personnes: ['Hu Qiheng'], pionniere: true,
    source: { titre: 'Hu Qiheng, « The Introduction of the Internet into China… » (discours de 2009, KIT)', url: 'https://www.informatik.kit.edu/downloads/HuQiheng-Spoeech_on_ChineseInternet-Beijing.23Jul2009.pdf' },
  },
  {
    annee: '1995', tri: 1995.6, titre: 'Internet pour le public en Inde',
    texte: 'Le 15 août, jour de la fête de l’Indépendance, l’opérateur public VSNL ouvre l’accès à internet au grand public, d’abord dans cinq villes : Delhi, Bombay, Calcutta, Madras et Pune.',
    region: 'asie', theme: 'web', personnes: ['Brijendra K. Syngal'],
    source: { titre: 'B. K. Syngal & S. Deb, Telecom Man (extrait publié par ThePrint, 2020)', url: 'https://theprint.in/pageturner/excerpt/how-vsnl-launched-internet-services-in-india-in-1995-when-even-china-hadnt/361722/' },
  },

  {
    annee: '1858', tri: 1858, titre: 'Premier câble transatlantique',
    texte: 'Un câble télégraphique relie l’Irlande à Terre-Neuve. Il ne fonctionne, irrégulièrement, qu’environ trois semaines.',
    region: 'monde', theme: 'infra',
    source: { titre: 'atlantic-cable.com, « 1857-58 Atlantic Cable »', url: 'https://atlantic-cable.com/Cables/1857-58Atlantic/index.htm' },
  },
  {
    annee: '1866', tri: 1866, titre: 'Un lien transatlantique durable',
    texte: 'Le navire Great Eastern pose le premier câble transatlantique qui fonctionne durablement ; il arrive le 27 juillet à Heart’s Content (Terre-Neuve).',
    region: 'monde', theme: 'infra',
    source: { titre: 'IEEE / ETHW, « Landing of the Transatlantic Cable, 1866 »', url: 'https://ethw.org/Milestones:Landing_of_the_Transatlantic_Cable,_1866' },
  },
  {
    annee: '1960-1964', tri: 1960, titre: 'Un réseau qui survit aux destructions',
    texte: 'À la RAND, Paul Baran étudie un réseau « distribué » capable de survivre à la destruction de certains nœuds. Ses travaux influencent la commutation de paquets.',
    region: 'amerique-nord', theme: 'reseaux', personnes: ['Paul Baran'],
    source: { titre: 'P. Baran, On Distributed Communications (RAND RM-3420)', url: 'https://www.rand.org/pubs/research_memoranda/RM3420.html' },
  },
  {
    annee: '1966', tri: 1966, titre: 'Le projet ARPANET',
    texte: 'Bob Taylor, à l’ARPA, lance un réseau pour relier des communautés de chercheur·ses et partager des ordinateurs rares, pas pour résister à une attaque nucléaire.',
    region: 'amerique-nord', theme: 'reseaux', personnes: ['Bob Taylor'],
    source: { titre: 'Entretien de Bob Taylor (Computer History Museum, 1988)', url: 'https://archive.computerhistory.org/resources/access/text/2017/12/102738691-05-01-acc.pdf' },
  },
  {
    annee: '1971-1973', tri: 1971, titre: 'CYCLADES et le datagramme',
    texte: 'En France, l’équipe de Louis Pouzin conçoit CYCLADES, premier réseau qui confie aux ordinateurs, et non au réseau, la livraison fiable des données. Première démonstration en 1973.',
    region: 'europe', theme: 'reseaux', personnes: ['Louis Pouzin'],
    source: { titre: 'Entretien avec Louis Pouzin, 1024 n° 6 (Société informatique de France, 2015)', url: 'https://1024.socinfo.fr/2015/07/1024_6_2015_59.pdf' },
  },
  {
    annee: '1972-1989', tri: 1972, titre: 'Le centre d’information d’ARPANET',
    texte: 'Au SRI, l’équipe d’Elizabeth « Jake » Feinler tient l’annuaire du réseau et le registre des noms d’ordinateurs, et crée le premier serveur WHOIS.',
    region: 'amerique-nord', theme: 'noms', personnes: ['Elizabeth Feinler'], pionniere: true,
    source: { titre: 'Internet Hall of Fame, « Elizabeth Feinler »', url: 'https://www.internethalloffame.org/inductee/elizabeth-feinler/' },
  },
  {
    annee: '1974', tri: 1974, titre: 'Relier des réseaux différents',
    texte: 'Vint Cerf et Bob Kahn publient « A Protocol for Packet Network Intercommunication », qui cite CYCLADES. En décembre, la RFC 675 remercie trois membres de l’équipe française.',
    region: 'amerique-nord', theme: 'reseaux', personnes: ['Vint Cerf', 'Bob Kahn'],
    source: { titre: 'RFC 675 (décembre 1974)', url: 'https://www.rfc-editor.org/rfc/rfc675' },
  },
  {
    annee: '1978', tri: 1978, titre: 'Transpac',
    texte: 'Le réseau français de données Transpac ouvre le 21 décembre. Il portera le Minitel.',
    region: 'europe', theme: 'reseaux',
    source: { titre: 'Chronologie de la télématique en France (Univ. Bordeaux Montaigne)', url: 'https://resendem.u-bordeaux-montaigne.fr/IMG/pdf/Chronologie_telematique_France.pdf' },
  },
  {
    annee: '1981', tri: 1981, titre: 'IP et TCP séparés',
    texte: 'Le protocole est scindé en deux : IP (RFC 791) achemine les paquets, TCP (RFC 793) assure une livraison fiable.',
    region: 'amerique-nord', theme: 'reseaux',
    source: { titre: 'RFC 791, « Internet Protocol »', url: 'https://www.rfc-editor.org/info/rfc791/' },
  },
  {
    annee: '1982', tri: 1982, titre: 'Le premier réseau TCP/IP d’Asie',
    texte: 'En Corée du Sud, l’équipe de Kilnam Chon relie en mai Gumi et l’université nationale de Séoul avec ses propres routeurs TCP/IP : le premier réseau à utiliser ce protocole hors des États-Unis et de l’Europe.',
    region: 'asie', theme: 'reseaux', personnes: ['Kilnam Chon'],
    source: { titre: 'Internet Hall of Fame, « Asian Internet Traces Roots To Kilnam Chon »', url: 'https://www.internethalloffame.org/2012/06/26/asian-internet-traces-roots-kilnam-chon/' },
  },
  {
    annee: '1983', tri: 1983.0, titre: 'ARPANET passe à TCP/IP',
    texte: 'Le 1ᵉʳ janvier, ARPANET bascule de l’ancien protocole NCP vers TCP/IP. C’est une étape, pas « la naissance d’internet ».',
    region: 'amerique-nord', theme: 'reseaux',
    source: { titre: 'J. Postel, RFC 801, « NCP/TCP Transition Plan »', url: 'https://www.rfc-editor.org/rfc/rfc801' },
  },
  {
    annee: '1983', tri: 1983.1, titre: 'Le Minitel ouvre',
    texte: 'Le 4 février, l’annuaire électronique ouvre en Ille-et-Vilaine ; le service Télétel devient national à l’automne. Un service en ligne grand public, mais centralisé : ce n’est pas un réseau de réseaux.',
    region: 'europe', theme: 'web',
    source: { titre: 'D. Hardy, « Minitel et annuaire électronique », Encyclopædia Universalis', url: 'https://www.universalis.fr/encyclopedie/minitel-et-annuaire-electronique/' },
  },
  {
    annee: '1983', tri: 1983.2, titre: 'Le DNS',
    texte: 'La table des noms tenue à la main par le centre d’information arrive « près de la limite de ce qui est gérable » : P. Mockapetris décrit le système de noms de domaine.',
    region: 'amerique-nord', theme: 'noms', personnes: ['P. Mockapetris'],
    source: { titre: 'P. Mockapetris, RFC 882', url: 'https://www.rfc-editor.org/rfc/rfc882.txt' },
  },
  {
    annee: '1984', tri: 1984, titre: '.com, .org, .edu…',
    texte: 'La RFC 920 définit les premiers domaines (.gov, .edu, .com, .mil, .org). L’Internet Hall of Fame attribue le schéma à Elizabeth Feinler et son groupe.',
    region: 'amerique-nord', theme: 'noms', personnes: ['J. Postel', 'J. Reynolds', 'Elizabeth Feinler'], pionniere: true,
    source: { titre: 'J. Postel, J. Reynolds, RFC 920', url: 'https://www.rfc-editor.org/rfc/rfc920' },
  },
  {
    annee: '1985', tri: 1985, titre: 'L’arbre couvrant',
    texte: 'Radia Perlman publie l’algorithme de l’arbre couvrant (spanning tree), qui permet d’étendre les réseaux Ethernet sans boucles.',
    region: 'amerique-nord', theme: 'reseaux', personnes: ['Radia Perlman'], pionniere: true,
    source: { titre: 'R. Perlman, SIGCOMM ’85 (copie PDF)', url: 'https://prl.khoury.northeastern.edu/img/p-sigcomm-1985.pdf' },
  },
  {
    annee: '1988', tri: 1988, titre: 'La fibre traverse l’Atlantique',
    texte: 'TAT-8, posé par AT&T, BT et France Télécom, est le premier câble transatlantique à fibre optique.',
    region: 'monde', theme: 'infra',
    source: { titre: 'atlantic-cable.com, « Cable Timeline: Atlantic »', url: 'https://atlantic-cable.com/Cables/CableTimeLine/atlantic.htm' },
  },
  {
    annee: '1989', tri: 1989, titre: 'Une proposition au CERN',
    texte: 'Tim Berners-Lee propose un système de gestion de l’information par hypertexte. Le mot « World Wide Web » n’y figure pas encore : il parle de « Mesh ».',
    region: 'europe', theme: 'web', personnes: ['Tim Berners-Lee'],
    source: { titre: 'T. Berners-Lee, « Information Management: A Proposal »', url: 'https://www.w3.org/History/1989/proposal.html' },
  },
  {
    annee: '1990', tri: 1990, titre: 'Le premier serveur web',
    texte: 'Le 12 novembre, Berners-Lee et Robert Cailliau proposent le projet WorldWideWeb. Fin 1990, le premier serveur et le premier navigateur tournent au CERN.',
    region: 'europe', theme: 'web', personnes: ['Tim Berners-Lee', 'Robert Cailliau'],
    source: { titre: 'CERN, « A short history of the Web »', url: 'https://home.cern/science/computing/the-birth-of-the-web/short-history-web/' },
  },
  {
    annee: '1990-1991', tri: 1990.5, titre: 'Un navigateur pour tous les terminaux',
    texte: 'Nicola Pellow, étudiante en stage au CERN, écrit le navigateur en mode ligne, utilisable sur n’importe quel terminal : disponible au CERN en mars 1991.',
    region: 'europe', theme: 'web', personnes: ['Nicola Pellow'], pionniere: true,
    source: { titre: 'Projet WWW (CERN), page « Nicola Pellow » (1992)', url: 'https://www.w3.org/History/19921103-hypertext/hypertext/WWW/People/Pellow.html' },
  },
  {
    annee: '1993', tri: 1993.3, titre: 'Le logiciel du web dans le domaine public',
    texte: 'Le 30 avril, le CERN place dans le domaine public le navigateur en mode ligne, le serveur et la bibliothèque de code.',
    region: 'europe', theme: 'web',
    source: { titre: 'CERN, « Licensing the Web »', url: 'https://home.cern/science/computing/the-birth-of-the-web/licensing-web/' },
  },
  {
    annee: '1993-1995', tri: 1993.5, titre: 'Le Ghana se connecte',
    texte: 'L’entreprise de Nii Quaynor se connecte d’abord par appels périodiques (1993) ; en août 1995, le Ghana obtient une connexion permanente, parmi les premiers pays d’Afrique subsaharienne.',
    region: 'afrique', theme: 'reseaux', personnes: ['Nii Quaynor'],
    source: { titre: 'W. Tevie, N. N. Quaynor, A. Bulley, « Development of the Internet in Ghana » (INET’96)', url: 'http://web.archive.org/web/20180301012959/http://www.isoc.org/inet96/proceedings/g6/g6_4.htm' },
  },
  {
    annee: '2005', tri: 2005, titre: 'Un registre pour l’Afrique',
    texte: 'AFRINIC, qui attribue les adresses IP en Afrique, est reconnu en avril comme cinquième registre internet régional.',
    region: 'afrique', theme: 'noms', personnes: ['Nii Quaynor'],
    source: { titre: 'AFRINIC, « History »', url: 'https://afrinic.net/history' },
  },
  {
    annee: '2007', tri: 2007, titre: 'M-Pesa',
    texte: 'Au Kenya, Safaricom lance en mars le transfert d’argent par téléphone mobile, à très grande échelle.',
    region: 'afrique', theme: 'web',
    source: { titre: 'N. Hughes & S. Lonie, « M-PESA: Mobile Money for the “Unbanked” »', url: 'https://ideas.repec.org/a/tpr/inntgg/v2y2007i1-2p63-81.html' },
  },
  {
    annee: '2012', tri: 2012, titre: 'Fin du Minitel',
    texte: 'Le service Minitel s’arrête le 30 juin, après près de trente ans.',
    region: 'europe', theme: 'web',
    source: { titre: 'D. Hardy, « Minitel et annuaire électronique », Encyclopædia Universalis', url: 'https://www.universalis.fr/encyclopedie/minitel-et-annuaire-electronique/' },
  },
  {
    annee: '2022', tri: 2022, titre: 'Equiano arrive à Lomé',
    texte: 'Le câble sous-marin Equiano, financé par Google, atterrit d’abord au Togo, le 18 mars.',
    region: 'afrique', theme: 'infra',
    source: { titre: 'Google, « The Equiano subsea cable has arrived in Togo »', url: 'https://blog.google/intl/en-africa/company-news/inside-google/the-equiano-subsea-cable-has-arrived-in/' },
  },
  {
    annee: '2024', tri: 2024, titre: 'Câbles coupés en mer Rouge',
    texte: 'Le 24 février, trois câbles sont endommagés, très probablement par l’ancre d’un cargo touché par un missile houthi ; l’Afrique de l’Est est touchée.',
    region: 'monde', theme: 'infra',
    source: { titre: 'LINX, « Misinformation in the Red Sea: Investigating Concurrent Failures »', url: 'https://www.linx.net/wp-content/uploads/2024/11/Misinformation-in-the-Red-Sea-1.pdf' },
  },
  {
    annee: '2025', tri: 2025, titre: 'Le cœur de 2Africa',
    texte: 'Le 19 novembre, le cœur du câble 2Africa (45 000 km, plus de 33 pays) est achevé ; des extensions restent en cours.',
    region: 'afrique', theme: 'infra',
    source: { titre: 'Telecom Egypt, « The Completion of 2Africa »', url: 'https://ir.te.eg/en/CorporateNews/PressRelease/232/The-Completion-of-2Africa-A-Consortium-Milestone-for-Global-Connectivity' },
  },
];

export const FRISE_INTERNET: DonneesFrise = { regions: REGIONS, themes: THEMES, evenements: EVENEMENTS };
