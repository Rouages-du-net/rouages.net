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
    qui: 'Les opérateurs et les États ; l’UIT (agence de l’ONU, fondée en 1865) pour les fréquences et les télécoms ; l’IEEE pour le Wi-Fi et Ethernet.',
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
  { etape: 'Approbation', qui: 'l’IESG', texte: 'L’IESG, la quinzaine de responsables de domaines techniques, approuve le document ou le renvoie au groupe.' },
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
  { num: 2324, titre: 'Protocole de contrôle des cafetières (HTCPCP)', annee: 1998, statut: 'Informational', note: 'Un poisson d’avril de 1998, d’où vient l’erreur « 418 I’m a teapot » (je suis une théière), que des serveurs renvoient vraiment pour rire.' },
  { num: 7258, titre: 'La surveillance de masse est une attaque', annee: 2014, statut: 'BCP', note: 'Une bonne pratique de 2014 : les protocoles doivent, autant que possible, se défendre contre la surveillance généralisée.' },
  { num: 8484, titre: 'Requêtes DNS par HTTPS (DoH)', annee: 2018, statut: 'Proposed Standard', note: 'Une norme proposée de 2018, utilisée par les grands navigateurs, et encore « proposée ».' },
  { num: 8890, titre: 'Internet est fait pour ses utilisateur·rices', annee: 2020, statut: 'Informational', note: 'Un texte de l’IAB : en cas de conflit, l’IETF devrait favoriser les utilisateur·rices finaux. Pas une norme.' },
  { num: 9000, titre: 'QUIC, un transport rapide et chiffré', annee: 2021, statut: 'Proposed Standard', note: 'Le protocole sous HTTP/3, inventé chez Google puis normalisé : très utilisé, et pourtant « norme proposée ».' },
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
