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
      "Version plus récente des adresses IP, assez nombreuses pour donner une adresse à chaque appareil. Elle remplace progressivement IPv4, dont les adresses sont épuisées.",
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
      "Point de départ du DNS : il sait quels serveurs gèrent chaque extension (.net, .fr…). Il en existe 13 (nommés de a à m), copiés en plus de 2 000 exemplaires (instances) dans le monde.",
  },
  ttl: {
    terme: 'TTL',
    definition:
      "Time To Live, « durée de vie ». Dans le DNS : combien de temps une réponse peut être gardée en mémoire. Dans un paquet IP : combien de routeurs il peut encore traverser.",
  },
  box: {
    terme: 'Box',
    definition:
      "Boîtier fourni par ton fournisseur d'accès, qui relie les appareils de la maison à internet. Elle se raccorde à la ligne (cuivre ou fibre), sert de routeur et de borne Wi-Fi, et fait souvent du NAT.",
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
      "Transmission Control Protocol : il numérote les données envoyées, vérifie leur arrivée et renvoie ceux qui se perdent, pour que les données arrivent complètes et dans l'ordre.",
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
      "Petite information qu'un site enregistre dans ton navigateur pour se souvenir de toi (connexion, panier, préférences). Les cookies « tiers », posés par d'autres domaines, servent souvent au pistage.",
  },
  ietf: {
    terme: 'IETF',
    definition:
      "Internet Engineering Task Force : organisation ouverte où des ingénieur·es rédigent, par « consensus approximatif », des normes d'internet publiées sous forme de RFC.",
  },
  rfc: {
    terme: 'RFC',
    definition:
      "Request for Comments : les documents numérotés publiés par le RFC Editor, pour la plupart issus de l'IETF. Certains sont des normes (TCP, HTTP…), d'autres des informations ou des expériences.",
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
  'navigateur': {
    terme: 'Navigateur',
    definition:
      "Logiciel qui affiche les pages web (Firefox, Chrome, Safari, Edge…). Il demande les fichiers aux serveurs, puis les assemble pour dessiner la page.",
  },
  'requete': {
    terme: 'Requête',
    definition:
      "Demande envoyée par le navigateur à un serveur, par exemple « donne-moi la page d'accueil ». Une seule page web en déclenche souvent des dizaines (images, styles, scripts…).",
  },
  'datacenter': {
    terme: 'Datacenter',
    definition:
      "Bâtiment rempli de serveurs, avec de quoi les alimenter en électricité, les refroidir et les relier à internet. On dit aussi « centre de données ».",
  },
  'fai': {
    terme: "Fournisseur d'accès (FAI)",
    definition:
      "Entreprise ou association qui te relie à internet, à la maison par la box ou par le réseau mobile.",
  },
  'https': {
    terme: 'HTTPS',
    definition:
      "HTTP protégé par TLS : la conversation entre ton navigateur et le serveur est chiffrée. C'est ce qu'indique le cadenas, qui ne garantit pas pour autant que le site est honnête.",
  },
  'chiffrement': {
    terme: 'Chiffrement',
    definition:
      "Transformation d'un message, à l'aide d'une clé, qui le rend illisible pour qui n'a pas la clé. On dit « chiffrer » (et non « crypter »).",
  },
  'autorite-certification': {
    terme: 'Autorité de certification',
    definition:
      "Organisme qui vérifie qu'un demandeur contrôle bien un nom de domaine, puis signe son certificat. Les navigateurs ont une liste des autorités qu'ils acceptent (ex. Let's Encrypt).",
  },
  'port': {
    terme: 'Port',
    definition:
      "Numéro qui indique à quel programme d'une machine un paquet est destiné, comme le numéro d'appartement après l'adresse de l'immeuble. Le web chiffré utilise le port 443.",
  },
  'octet': {
    terme: 'Octet',
    definition:
      "Unité de base des données : 8 bits, soit un nombre entre 0 et 255. Une lettre simple tient en un octet.",
  },
  'commutateur': {
    terme: 'Commutateur (switch)',
    definition:
      "Appareil qui relie directement plusieurs machines d'un même réseau. Contrairement à un routeur, il ne choisit pas de route à travers internet.",
  },
  'registre': {
    terme: 'Registre',
    definition:
      "Organisme qui gère une extension (.net, .fr…) et tient la liste de tous les noms de domaine qui la portent. Exemple : Verisign pour .net, l'Afnic pour .fr.",
  },
  'script': {
    terme: 'Script',
    definition:
      "Petit programme (en JavaScript) envoyé avec une page web, que le navigateur exécute pour la rendre interactive.",
  },
  'hameconnage': {
    terme: 'Hameçonnage',
    definition:
      "Arnaque qui imite un site ou un message de confiance (banque, administration) pour te faire donner un mot de passe ou des coordonnées bancaires.",
  },
  'bit': {
    terme: 'Bit',
    definition:
      "La plus petite information possible : 0 ou 1. Dans un ordinateur, c'est une tension basse ou haute sur un fil. Huit bits forment un octet.",
    voirAussi: ['octet'],
  },
  'transistor': {
    terme: 'Transistor',
    definition:
      "Minuscule interrupteur commandé par l'électricité, sans pièce mobile. Une puce récente en contient des dizaines de milliards ; combinés, ils forment les portes logiques.",
    voirAussi: ['porte-logique'],
  },
  'porte-logique': {
    terme: 'Porte logique',
    definition:
      "Petit circuit de quelques transistors qui combine des bits selon une règle simple : ET, OU, NON… Toute l'électronique de calcul est faite de portes.",
    voirAussi: ['transistor', 'bit'],
  },
  'processeur': {
    terme: 'Processeur',
    definition:
      "La puce qui exécute les programmes : elle va chercher une instruction en mémoire, la décode, l'exécute, puis passe à la suivante, des milliards de fois par seconde.",
    voirAussi: ['registre-processeur', 'horloge'],
  },
  'registre-processeur': {
    terme: 'Registre (processeur)',
    definition:
      "Petite case de mémoire très rapide, à l'intérieur même du processeur, où il garde les nombres sur lesquels il travaille. À ne pas confondre avec le registre des noms de domaine.",
    voirAussi: ['processeur'],
  },
  'horloge': {
    terme: 'Horloge (fréquence)',
    definition:
      "Signal qui bat la mesure du processeur : à chaque tic, ses circuits avancent d'un pas. Elle se mesure en hertz ; 3 GHz, c'est 3 milliards de tics par seconde.",
    voirAussi: ['processeur'],
  },
  'memoire-vive': {
    terme: 'Mémoire vive (RAM)',
    definition:
      "Mémoire de travail de l'ordinateur, faite de cases numérotées (les adresses). Rapide, mais elle s'efface quand on coupe le courant, contrairement au stockage (disque, mémoire flash).",
  },
  'compilateur': {
    terme: 'Compilateur',
    definition:
      "Programme qui traduit, avant l'exécution, un texte écrit dans un langage lisible (C, Rust…) en instructions pour un processeur précis.",
    voirAussi: ['processeur'],
  },
  'modele-de-langage': {
    terme: 'Modèle de langage',
    definition:
      "Programme qui, pour un début de texte, calcule la probabilité de chaque suite possible. Les grands modèles de langage (LLM) sont ceux qui font tourner les assistants comme ChatGPT, Gemini ou Le Chat.",
    voirAussi: ['token'],
  },
  'token': {
    terme: 'Token',
    definition:
      "Morceau de texte (un mot courant, un bout de mot, un signe) que le modèle de langage manipule sous forme de numéro. Les modèles lisent et écrivent token par token.",
    voirAussi: ['modele-de-langage'],
  },
  'plongement': {
    terme: 'Plongement (embedding)',
    definition:
      "Liste de nombres qui représente un token, comme des coordonnées : des mots de sens proche ont des plongements proches. Ils sont appris, pas choisis à la main.",
    voirAussi: ['token'],
  },
  'neurone-artificiel': {
    terme: 'Neurone artificiel',
    definition:
      "Petite formule : il multiplie chacune de ses entrées par un poids, additionne, puis transforme le résultat. Des milliards de neurones, organisés en couches, forment un réseau de neurones.",
    voirAussi: ['parametre'],
  },
  'parametre': {
    terme: 'Paramètre',
    definition:
      "Nombre réglé pendant l'apprentissage, comme les poids des neurones. Un grand modèle de langage en compte des milliards.",
    voirAussi: ['neurone-artificiel', 'descente-de-gradient'],
  },
  'descente-de-gradient': {
    terme: 'Descente de gradient',
    definition:
      "Méthode d'apprentissage : on mesure l'erreur du modèle, on calcule dans quel sens elle diminue (la pente), et l'on corrige un peu les paramètres dans ce sens. On recommence des milliards de fois.",
    voirAussi: ['parametre'],
  },
  'attention': {
    terme: 'Attention',
    definition:
      "Mécanisme qui permet à chaque token de « regarder » les autres tokens du texte et d'y prendre les informations utiles, par exemple pour savoir à qui renvoie « il ».",
    voirAussi: ['transformeur'],
  },
  'transformeur': {
    terme: 'Transformeur (transformer)',
    definition:
      "Architecture de réseau de neurones fondée sur l'attention, publiée en 2017. C'est celle de tous les grands modèles de langage actuels (le T de GPT).",
    voirAussi: ['attention'],
  },
  'temperature': {
    terme: 'Température',
    definition:
      "Réglage de la part de hasard quand le modèle choisit le token suivant : basse, il prend presque toujours le plus probable ; haute, il ose des choix moins probables.",
  },
  'hallucination': {
    terme: 'Hallucination',
    definition:
      "Réponse fausse mais formulée de façon plausible et assurée, produite par un modèle d'IA. Elle découle du fonctionnement même du modèle, qui produit du vraisemblable, pas du vérifié.",
  },
  'apprentissage-automatique': {
    terme: 'Apprentissage automatique (machine learning)',
    definition:
      "Branche de l'IA où la machine n'applique pas des règles écrites à la main : elle les déduit d'exemples. Avec des exemples corrigés (supervisé), sans étiquettes (non supervisé) ou par essais et récompenses (par renforcement).",
    voirAussi: ['parametre'],
  },
  'retropropagation': {
    terme: 'Rétropropagation',
    definition:
      "Méthode qui calcule, pour chaque paramètre d'un réseau de neurones, dans quel sens le corriger pour réduire l'erreur. On part de l'erreur à la sortie et on remonte, couche par couche, vers l'entrée.",
    voirAussi: ['descente-de-gradient', 'neurone-artificiel'],
  },
  'sur-apprentissage': {
    terme: 'Sur-apprentissage (overfitting)',
    definition:
      "Défaut d'un modèle qui a appris ses exemples d'entraînement « par cœur », jusqu'à leurs détails accidentels : il réussit sur eux mais se trompe sur de nouveaux cas. On le repère en le testant sur des exemples mis de côté.",
    voirAussi: ['apprentissage-automatique'],
  },
  'classifieur-bayesien': {
    terme: 'Classifieur bayésien naïf',
    definition:
      "Méthode de classement qui compte, dans des exemples déjà triés, à quelle fréquence chaque indice (un mot, par exemple) apparaît dans chaque catégorie, puis combine ces indices avec la règle de Bayes. « Naïf » parce qu'il fait comme si les indices étaient indépendants les uns des autres.",
    voirAussi: ['apprentissage-automatique', 'faux-positif'],
  },
  'faux-positif': {
    terme: 'Faux positif, faux négatif',
    definition:
      "Les deux erreurs d'un classement oui/non. Faux positif : le système dit « oui » à tort (un vrai courriel classé spam). Faux négatif : il dit « non » à tort (un spam qui passe). Baisser l'une fait souvent monter l'autre.",
    voirAussi: ['classifieur-bayesien'],
  },
};

export function entree(id: string): Entree {
  const e = GLOSSAIRE[id];
  if (!e) throw new Error(`Terme de glossaire inconnu : ${id}`);
  return e;
}
