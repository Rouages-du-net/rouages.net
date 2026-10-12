// Glossaire vivant : chaque terme peut être cité partout avec <Terme id="…">.
// Définitions courtes, niveau 🟢/🟡 ; le détail est dans les modules.

export interface Entree {
  terme: string;
  definition: string;
  voirAussi?: string[];
}

export const GLOSSAIRE: Record<string, Entree> = {
  'adresse-ip': {
    terme: 'Adresse IP',
    definition:
      "Numéro qui identifie une machine sur internet, comme une adresse postale. En IPv4 : quatre nombres (ex. 203.0.113.42) ; en IPv6 : une adresse beaucoup plus longue.",
    voirAussi: ['ipv6', 'nat'],
  },
  ipv6: {
    terme: 'IPv6',
    definition:
      "Nouvelle version des adresses IP, assez nombreuses pour donner une adresse à chaque appareil. Elle remplace progressivement IPv4, dont les adresses sont épuisées.",
  },
  'nom-de-domaine': {
    terme: 'Nom de domaine',
    definition:
      "Nom lisible d'un site, comme rouages.net. Il se loue auprès d'un bureau d'enregistrement et doit être traduit en adresse IP par le DNS.",
    voirAussi: ['dns'],
  },
  dns: {
    terme: 'DNS',
    definition:
      "Domain Name System : l'annuaire décentralisé d'internet, qui traduit les noms de domaine en adresses IP.",
    voirAussi: ['resolveur', 'serveur-racine'],
  },
  resolveur: {
    terme: 'Résolveur DNS',
    definition:
      "Serveur (souvent celui de ton fournisseur d'accès) qui cherche pour toi l'adresse correspondant à un nom, en interrogeant les autres serveurs DNS.",
  },
  'serveur-racine': {
    terme: 'Serveur racine',
    definition:
      "Point de départ du DNS : il sait quels serveurs gèrent chaque extension (.net, .fr…). Il en existe 13 identités, copiées dans plus de 2 000 lieux.",
  },
  ttl: {
    terme: 'TTL',
    definition:
      "Time To Live, « durée de vie ». Dans le DNS : combien de temps une réponse peut être gardée en mémoire. Dans un paquet IP : combien de routeurs il peut encore traverser.",
  },
  box: {
    terme: 'Box',
    definition:
      "Boîtier fourni par l'opérateur, qui relie les appareils de la maison à internet. Elle combine un routeur, un point d'accès Wi-Fi et souvent le NAT.",
  },
  nat: {
    terme: 'NAT',
    definition:
      "Traduction d'adresses : la box (ou l'opérateur) fait partager une même adresse IP publique à plusieurs appareils en réécrivant les adresses des paquets.",
  },
  paquet: {
    terme: 'Paquet',
    definition:
      "Petit morceau de données, avec une adresse de départ et d'arrivée. Tout ce qui circule sur internet est découpé en paquets, qui voyagent indépendamment.",
  },
  routeur: {
    terme: 'Routeur',
    definition:
      "Machine qui reçoit des paquets et choisit vers quel voisin les envoyer pour les rapprocher de leur destination.",
  },
  tcp: {
    terme: 'TCP',
    definition:
      "Transmission Control Protocol : il numérote les paquets, vérifie leur arrivée et renvoie ceux qui se perdent, pour que les données arrivent complètes et dans l'ordre.",
  },
  udp: {
    terme: 'UDP',
    definition:
      "Protocole de transport simple, sans accusé de réception ni remise en ordre. Plus léger que TCP ; QUIC est construit par-dessus.",
  },
  quic: {
    terme: 'QUIC',
    definition:
      "Protocole de transport récent, chiffré, construit sur UDP. Il fait le travail de TCP et de TLS en économisant un aller-retour ; il porte HTTP/3.",
  },
  tls: {
    terme: 'TLS',
    definition:
      "Transport Layer Security : le protocole qui chiffre la connexion et vérifie l'identité du serveur. C'est le « S » de HTTPS et le cadenas du navigateur.",
    voirAussi: ['certificat'],
  },
  certificat: {
    terme: 'Certificat',
    definition:
      "Attestation signée par une autorité de certification, qui garantit qu'un serveur a le droit de parler au nom d'un nom de domaine. Il ne garantit pas l'honnêteté du site.",
  },
  'diffie-hellman': {
    terme: 'Diffie-Hellman',
    definition:
      "Méthode (1976) qui permet à deux machines de fabriquer une clé secrète commune sans jamais l'envoyer sur le réseau.",
  },
  bgp: {
    terme: 'BGP',
    definition:
      "Border Gateway Protocol : le protocole par lequel les grands réseaux s'annoncent mutuellement quelles adresses ils savent atteindre. Il « tient » internet ensemble.",
  },
  'point-echange': {
    terme: "Point d'échange",
    definition:
      "Lieu (souvent dans un datacenter) où de nombreux réseaux se raccordent pour échanger directement leur trafic. Exemple en France : France-IX.",
  },
  'cable-sous-marin': {
    terme: 'Câble sous-marin',
    definition:
      "Câble à fibres optiques posé au fond des mers. L'immense majorité du trafic intercontinental passe par ces câbles, pas par satellite.",
  },
  http: {
    terme: 'HTTP',
    definition:
      "HyperText Transfer Protocol : la langue dans laquelle le navigateur demande une page (« GET / ») et le serveur répond (« 200 OK »).",
  },
  'code-http': {
    terme: 'Code HTTP',
    definition:
      "Nombre à trois chiffres dans la réponse du serveur : 200 (tout va bien), 404 (introuvable), 500 (erreur du serveur), 503 (service indisponible)…",
  },
  serveur: {
    terme: 'Serveur',
    definition:
      "Ordinateur allumé en permanence, généralement dans un datacenter, qui répond aux demandes d'autres machines.",
  },
  hebergeur: {
    terme: 'Hébergeur',
    definition:
      "Entreprise qui loue de la place sur ses serveurs pour faire fonctionner des sites. Un même serveur peut héberger de nombreux sites.",
  },
  html: {
    terme: 'HTML',
    definition:
      "Le langage qui décrit la structure d'une page web : titres, paragraphes, liens, images.",
  },
  css: {
    terme: 'CSS',
    definition: "Le langage qui décrit l'apparence d'une page : couleurs, polices, mise en page.",
  },
  dom: {
    terme: 'DOM',
    definition:
      "Document Object Model : l'arbre d'éléments que le navigateur construit à partir du HTML, et que les scripts peuvent modifier.",
  },
  cache: {
    terme: 'Cache',
    definition:
      "Mémoire où l'on garde une copie de ce qu'on a déjà obtenu (une adresse, une image…) pour ne pas avoir à le redemander.",
  },
  cookie: {
    terme: 'Cookie',
    definition:
      "Petit fichier qu'un site dépose dans le navigateur pour se souvenir de toi. Les cookies « tiers », posés par d'autres domaines, servent souvent au pistage.",
  },
  ietf: {
    terme: 'IETF',
    definition:
      "Internet Engineering Task Force : organisation ouverte où ingénieurs et ingénieures rédigent, par consensus, les normes d'internet (les RFC).",
  },
  rfc: {
    terme: 'RFC',
    definition:
      "Request for Comments : les documents numérotés publiés par l'IETF. Certains sont des normes (TCP, HTTP…), d'autres des informations ou des expériences.",
  },
  icann: {
    terme: 'ICANN',
    definition:
      "Organisation à but non lucratif qui coordonne les noms de domaine et les adresses IP au niveau mondial ; sa filiale PTI assure la fonction IANA.",
  },
  arcep: {
    terme: 'Arcep',
    definition:
      "Autorité française de régulation des télécommunications. Elle veille notamment à la neutralité du net ; elle ne bloque pas de sites.",
  },
  arcom: {
    terme: 'Arcom',
    definition:
      "Autorité française de régulation de l'audiovisuel et du numérique. Elle intervient notamment dans certains blocages de sites (piratage, pornographie sans vérification d'âge).",
  },
};

export function entree(id: string): Entree {
  const e = GLOSSAIRE[id];
  if (!e) throw new Error(`Terme de glossaire inconnu : ${id}`);
  return e;
}
