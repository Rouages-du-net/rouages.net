// Données du module « Gouvernance technique : qui écrit les règles du
// réseau ? ». Faits sourcés : voir docs/sources/gouvernance-technique.md.

/** Les couches d'internet et qui en écrit les règles (animation « Couches »). */
export interface Couche {
  id: string;
  nom: string;
  exemple: string;
  qui: string;
  comment: string;
}

export const COUCHES: Couche[] = [
  {
    id: 'acces',
    nom: 'Accessibilité',
    exemple: 'contraste, sous-titres, navigation au clavier',
    qui: 'Le W3C (WCAG 2.2, octobre 2023), repris par la norme ISO/IEC 40500:2025 et par la norme européenne EN 301 549.',
    comment: 'Des groupes de travail du W3C ; ce sont ensuite les lois (comme l’Acte européen sur l’accessibilité) qui rendent ces règles obligatoires.',
  },
  {
    id: 'web',
    nom: 'Pages web',
    exemple: 'HTML, DOM',
    qui: 'Le WHATWG (fondé en 2004 par des personnes d’Apple, de Mozilla et d’Opera), en accord avec le W3C depuis le 28 mai 2019.',
    comment: 'Un « standard vivant », mis à jour en continu ; en dernier recours, un comité formé par les éditeurs de navigateurs (Apple, Google, Microsoft, Mozilla) tranche.',
  },
  {
    id: 'noms',
    nom: 'Noms de domaine',
    exemple: '.fr, .africa, rouages.net',
    qui: 'L’ICANN (fondée en 1998) coordonne la racine du DNS ; chaque extension a son registre (l’Afnic pour .fr).',
    comment: 'Un modèle « multipartite » : entreprises, États (qui conseillent), techniciens, société civile.',
  },
  {
    id: 'adresses',
    nom: 'Adresses IP',
    exemple: '203.0.113.42, 2001:db8::1',
    qui: 'L’IANA distribue de grands blocs à cinq registres régionaux (RIR), qui les attribuent aux opérateurs.',
    comment: 'Les règles d’attribution sont écrites par la communauté de chaque région, sur des listes de discussion ouvertes.',
  },
  {
    id: 'protocoles',
    nom: 'Protocoles',
    exemple: 'IP, TCP, HTTP, TLS, DNS',
    qui: 'L’IETF (fondée en 1986), qui publie les RFC.',
    comment: 'Pas de membres, pas de vote : un « consensus approximatif » dans des groupes de travail ouverts à tous.',
  },
  {
    id: 'cables',
    nom: 'Câbles et ondes',
    exemple: 'fibre optique, 4G, Wi-Fi',
    qui: 'Les opérateurs et les États ; l’UIT (agence de l’ONU, fondée en 1865) pour les fréquences et les télécoms.',
    comment: 'Les États attribuent les fréquences ; l’UIT coordonne entre pays, où chaque État a une voix.',
  },
];

/** Le parcours d'une RFC, de l'idée à la norme (RFC 2026, RFC 6410). */
export const PARCOURS_RFC: { etape: string; qui: string; texte: string }[] = [
  { etape: 'Une idée', qui: 'n’importe qui', texte: 'Une personne écrit un Internet-Draft, un brouillon. « N’importe qui peut écrire un Internet-Draft sur n’importe quel sujet », dit l’IETF. Il expire au bout de six mois s’il n’est pas mis à jour.' },
  { etape: 'Adoption', qui: 'un groupe de travail', texte: 'Un groupe de travail (il y en avait 138 en 2025) décide sur sa liste de discussion d’adopter le brouillon. Il devient le texte du groupe.' },
  { etape: 'Révisions', qui: 'le groupe', texte: 'Le brouillon passe par des versions -00, -01, -02… Les discussions sont publiques, archivées, et les objections doivent recevoir une réponse.' },
  { etape: 'Dernier appel du groupe', qui: 'la présidence du groupe', texte: 'La présidence constate un « consensus approximatif » : pas l’unanimité, mais plus d’objection restée sans réponse.' },
  { etape: 'Dernier appel de l’IETF', qui: 'toute l’IETF', texte: 'Tout le monde, même hors du groupe, peut encore commenter pendant au moins deux semaines.' },
  { etape: 'Approbation', qui: 'l’IESG', texte: 'L’IESG, le groupe des responsables des grands domaines techniques, approuve le document ou le renvoie au groupe.' },
  { etape: 'Publication', qui: 'le RFC Editor', texte: 'Le RFC Editor relit, corrige, donne un numéro. Une fois publiée, une RFC n’est plus jamais modifiée : on en publie une nouvelle qui la remplace.' },
  { etape: 'Norme proposée', qui: 'personne : l’usage', texte: 'La RFC est « Proposed Standard ». Elle ne s’impose à personne : les fabricants et les opérateurs l’adoptent s’ils le veulent. Des années plus tard, après beaucoup d’expérience, elle peut devenir « Internet Standard ».' },
];

/** Échantillon de vraies RFC à classer par statut (animation « TriRfc »). */
export type Statut = 'Proposed Standard' | 'Internet Standard' | 'Informational' | 'Experimental' | 'BCP';
export const STATUTS: { id: Statut; nom: string; aide: string }[] = [
  { id: 'Internet Standard', nom: 'Norme d’internet', aide: 'une norme mûre, très éprouvée (seulement 101 RFC)' },
  { id: 'Proposed Standard', nom: 'Norme proposée', aide: 'une norme stable, qui peut encore changer (la plupart des protocoles utilisés)' },
  { id: 'BCP', nom: 'Bonne pratique (BCP)', aide: 'une règle de conduite ou une décision de la communauté' },
  { id: 'Informational', nom: 'Pour information', aide: 'publiée pour informer : pas une recommandation de l’IETF' },
  { id: 'Experimental', nom: 'Expérimentale', aide: 'un essai, dans le cadre d’une recherche' },
];
export const RFC_ECHANTILLON: { num: number; titre: string; annee: number; statut: Statut; note: string }[] = [
  { num: 791, titre: 'Internet Protocol (IP)', annee: 1981, statut: 'Internet Standard', note: 'Le protocole IP de la version 4, celui des adresses comme 203.0.113.42 : norme d’internet n° 5.' },
  { num: 1149, titre: 'Transmettre des paquets IP par pigeons voyageurs', annee: 1990, statut: 'Experimental', note: 'Un poisson d’avril du 1er avril 1990 : le paquet est imprimé en hexadécimal sur un petit rouleau attaché à la patte du pigeon.' },
  { num: 2324, titre: 'Protocole de contrôle des cafetières (HTCPCP)', annee: 1998, statut: 'Informational', note: 'Un poisson d’avril de 1998, d’où vient le code d’erreur « 418 I’m a teapot » (je suis une théière).' },
  { num: 7258, titre: 'La surveillance de masse est une attaque', annee: 2014, statut: 'BCP', note: 'Une bonne pratique de 2014 : les protocoles doivent, autant que possible, se défendre contre la surveillance généralisée.' },
  { num: 8484, titre: 'Requêtes DNS par HTTPS (DoH)', annee: 2018, statut: 'Proposed Standard', note: 'Une norme proposée de 2018, coécrite par des auteurs de Mozilla et de l’ICANN : elle chiffre les questions posées au DNS, et fait débat.' },
  { num: 8890, titre: 'Internet est fait pour ses utilisateur·rices', annee: 2020, statut: 'Informational', note: 'Un texte de l’IAB : en cas de conflit, l’IETF devrait favoriser les utilisateur·rices finaux. Pas une norme.' },
  { num: 9000, titre: 'QUIC, un transport rapide et chiffré', annee: 2021, statut: 'Proposed Standard', note: 'Le protocole de transport sous HTTP/3 : une norme toute récente, donc « proposée », comme la plupart des protocoles en service.' },
];

/** Qui est dans la salle ? Inscriptions aux réunions de l'IETF (Datatracker). */
export const REUNIONS: { id: string; nom: string; total: number; pays: [string, number][] }[] = [
  { id: '124', nom: 'Montréal, novembre 2025', total: 1885, pays: [['États-Unis', 711], ['Canada', 165], ['Chine', 133]] },
  { id: '125', nom: 'Shenzhen, mars 2026', total: 1850, pays: [['Chine', 672], ['États-Unis', 386], ['Royaume-Uni', 88], ['Inde', 83], ['Allemagne', 81]] },
  { id: '126', nom: 'Vienne, juillet 2026', total: 2125, pays: [['États-Unis', 582], ['Chine', 243], ['Allemagne', 187], ['Inde', 127]] },
];

/** Enquête communautaire de l'IETF 2025 (réponses déclaratives, en %). */
export const ENQUETE_2025 = {
  genre: [['Hommes', 80.6], ['Femmes', 9.3], ['Non-binaires', 1.3], ['Sans réponse', 7.9]] as [string, number][],
  regions: [['Europe', 40.6], ['Amérique du Nord', 35.9], ['Asie', 11.2], ['Afrique', 3.2], ['Amérique latine', 3.1], ['Océanie', 2.7], ['Moyen-Orient', 1.3], ['Sans réponse', 2.0]] as [string, number][],
  secteurs: [['Entreprises', 53.3], ['Universités', 22.2], ['Société civile', 9.2], ['Gouvernements', 8.3]] as [string, number][],
};

/** D'où vient ton adresse IP ? (animation « Adresse »). */
export const CHAINE_ADRESSE: { qui: string; bloc: string; texte: string }[] = [
  { qui: 'IANA', bloc: '185.0.0.0/8 (16 777 216 adresses)', texte: 'L’IANA, aujourd’hui gérée par PTI, une filiale de l’ICANN, tient la liste mondiale. Le 3 février 2011, elle a donné ses cinq derniers grands blocs IPv4 (des « /8 »), un à chaque registre régional : le 185/8 est allé au RIPE NCC.' },
  { qui: 'Registre régional (RIR)', bloc: '185.0.0.0/8, découpé en petits morceaux', texte: 'Le RIPE NCC, registre de l’Europe et du Moyen-Orient, attribue des morceaux de ce bloc à ses membres selon des règles écrites par sa communauté, sur une liste de discussion ouverte à tous, décidées par consensus.' },
  { qui: 'Opérateur (FAI)', bloc: '185.x.y.0/22 (1 024 adresses)', texte: 'Un fournisseur d’accès, membre du registre, reçoit un bloc (x et y remplacent de vrais nombres : on ne montre pas l’adresse de quelqu’un). Depuis le 25 novembre 2019, le RIPE NCC n’a plus d’adresses IPv4 neuves à donner : il faut en racheter (environ 20 dollars l’adresse en 2026, selon des courtiers).' },
  { qui: 'Ta box', bloc: '185.x.y.27 (une adresse publique)', texte: 'L’opérateur donne une adresse publique à ta box, qui la partage entre tous tes appareils (NAT).' },
  { qui: 'Ton appareil', bloc: '192.168.1.12 (adresse privée) + une adresse IPv6', texte: 'Ton téléphone reçoit une adresse privée, qui ne sort pas de chez toi, et souvent une adresse IPv6 publique : en IPv6, il y a assez d’adresses pour chaque appareil. Le module Adresses IP explique ces écritures.' },
];

/** Les cinq registres régionaux (NRO, sites des RIR). */
export const RIRS: { nom: string; region: string; siege: string; fondation: string; ipv4: string }[] = [
  { nom: 'RIPE NCC', region: 'Europe, Moyen-Orient, une partie de l’Asie centrale', siege: 'Amsterdam (Pays-Bas)', fondation: '1992', ipv4: 'plus d’adresses neuves depuis le 25 novembre 2019' },
  { nom: 'APNIC', region: 'Asie-Pacifique', siege: 'Brisbane (Australie)', fondation: '1993, à Tokyo', ipv4: 'dernier grand bloc entamé le 15 avril 2011, le premier registre à y arriver' },
  { nom: 'ARIN', region: 'États-Unis, Canada, une partie des Caraïbes', siege: 'Virginie (États-Unis)', fondation: '1997', ipv4: 'réserve épuisée le 24 septembre 2015' },
  { nom: 'LACNIC', region: 'Amérique latine et Caraïbes', siege: 'Montevideo (Uruguay)', fondation: '2002', ipv4: 'derniers blocs réservés en août 2020' },
  { nom: 'AFRINIC', region: 'Afrique et océan Indien', siege: 'Ébène (Maurice)', fondation: '2005', ipv4: 'le seul à attribuer encore de petits blocs neufs (phase 2 depuis janvier 2020)' },
];

/** Les 13 identités de la racine du DNS (root-servers.org, 25 novembre 2026). */
export const RACINE: { lettre: string; operateur: string; pays: string; instances: number }[] = [
  { lettre: 'A', operateur: 'Verisign', pays: 'États-Unis', instances: 56 },
  { lettre: 'B', operateur: 'Université de Californie du Sud (ISI)', pays: 'États-Unis', instances: 6 },
  { lettre: 'C', operateur: 'Cogent Communications', pays: 'États-Unis', instances: 13 },
  { lettre: 'D', operateur: 'Université du Maryland', pays: 'États-Unis', instances: 248 },
  { lettre: 'E', operateur: 'NASA', pays: 'États-Unis', instances: 355 },
  { lettre: 'F', operateur: 'Internet Systems Consortium', pays: 'États-Unis', instances: 655 },
  { lettre: 'G', operateur: 'Département de la Défense (DISA)', pays: 'États-Unis', instances: 6 },
  { lettre: 'H', operateur: 'Laboratoire de recherche de l’armée américaine', pays: 'États-Unis', instances: 12 },
  { lettre: 'I', operateur: 'Netnod', pays: 'Suède', instances: 106 },
  { lettre: 'J', operateur: 'Verisign', pays: 'États-Unis', instances: 147 },
  { lettre: 'K', operateur: 'RIPE NCC', pays: 'Pays-Bas', instances: 169 },
  { lettre: 'L', operateur: 'ICANN', pays: 'États-Unis', instances: 257 },
  { lettre: 'M', operateur: 'WIDE Project', pays: 'Japon', instances: 34 },
];
export const RACINE_TOTAL = 2046;

/** Qui peut couper quoi ? (animation « Couper »). */
export const COUPER: { action: string; reponse: string; texte: string }[] = [
  {
    action: 'Retirer .ru de la racine du DNS pour isoler la Russie',
    reponse: 'Personne ne l’a fait',
    texte: 'Le 28 février 2022, l’Ukraine l’a demandé. Le 2 mars, l’ICANN a refusé : elle a été construite « pour que l’internet fonctionne, pas pour que son rôle de coordination serve à l’empêcher de fonctionner », et elle n’a pas de pouvoir de sanction. Techniquement, ce serait possible, mais les caches et les copies locales de la racine en amortiraient l’effet.',
  },
  {
    action: 'Reprendre les adresses IP des opérateurs russes',
    reponse: 'Le RIPE NCC a refusé',
    texte: 'Le 10 mars 2022, le registre européen a répondu à la même demande ukrainienne que l’enregistrement des adresses « ne devrait pas servir à imposer des résultats politiques ».',
  },
  {
    action: 'Changer les règles d’attribution des adresses en Europe',
    reponse: 'La communauté du RIPE, par consensus',
    texte: 'N’importe qui peut proposer une règle sur une liste de discussion ouverte ; elle est adoptée par consensus de la communauté, pas par le personnel du registre ni par un État. Une règle mondiale doit être adoptée dans les cinq régions.',
  },
  {
    action: 'Écarter un avis donné par les gouvernements à l’ICANN',
    reponse: 'Le conseil de l’ICANN, à 60 %',
    texte: 'Les États conseillent l’ICANN par leur comité (le GAC, 184 membres en 2026). Un avis adopté par consensus du GAC ne peut être rejeté que par au moins 60 % du conseil d’administration, qui doit alors chercher une solution acceptable pour les deux.',
  },
  {
    action: 'Obliger le monde entier à utiliser un nouveau protocole',
    reponse: 'Personne',
    texte: 'Une RFC ne s’impose à personne : les fabricants et les opérateurs l’adoptent s’ils y ont intérêt. Quand Huawei et des opérateurs chinois ont proposé un « New IP » à l’UIT en 2019, les commissions d’études l’ont écarté en décembre 2020 ; ses critiques y voyaient un risque de fragmenter l’internet.',
  },
];
