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
      "Point de départ du DNS : il sait quels serveurs gèrent chaque extension (.net, .fr…). Il y a 13 identités (nommées de a à m), tenues par 12 organisations et copiées en plus de 2 000 exemplaires (instances) dans le monde.",
    voirAussi: ['anycast'],
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
  iana: {
    terme: 'IANA',
    definition:
      "Internet Assigned Numbers Authority : la fonction qui tient les listes mondiales d'internet (racine du DNS, grands blocs d'adresses IP, numéros des protocoles). Née du carnet de Jon Postel dans les années 1970, elle est assurée aujourd'hui par PTI, filiale de l'ICANN.",
    voirAussi: ['icann', 'rir'],
  },
  rir: {
    terme: 'Registre régional (RIR)',
    definition:
      "Organisation qui attribue les adresses IP dans une région du monde : RIPE NCC (Europe, Moyen-Orient), APNIC (Asie-Pacifique), ARIN (Amérique du Nord), LACNIC (Amérique latine et Caraïbes), AFRINIC (Afrique). Les règles y sont écrites par la communauté, par consensus.",
    voirAussi: ['adresse-ip', 'iana'],
  },
  w3c: {
    terme: 'W3C',
    definition:
      "World Wide Web Consortium : organisation fondée en 1994 par Tim Berners-Lee, qui publie des normes du web (CSS, accessibilité WCAG…). Contrairement à l'IETF, elle a des membres, surtout des entreprises et des universités.",
  },
  multipartite: {
    terme: 'Modèle multipartite',
    definition:
      "Façon de gouverner internet où entreprises, techniciens, société civile et États discutent ensemble, au lieu que les États décident seuls entre eux (modèle intergouvernemental, comme à l'ONU).",
  },
  anycast: {
    terme: 'Anycast',
    definition:
      "Technique où la même adresse IP est annoncée depuis de nombreux endroits : ta requête arrive au serveur le plus proche. Les serveurs racine du DNS l'utilisent.",
    voirAussi: ['serveur-racine', 'bgp'],
  },
  rgpd: {
    terme: 'RGPD',
    definition:
      "Règlement général sur la protection des données : la loi européenne de 2016, appliquée depuis 2018, qui encadre l'usage des données personnelles et donne des droits à chacun·e (accès, effacement, portabilité…).",
  },
  dsa: {
    terme: 'DSA',
    definition:
      "Règlement européen sur les services numériques (2022) : il oblige les plateformes à agir contre les contenus illégaux, à être transparentes, et les plus grandes à évaluer les risques qu'elles créent. Il ne définit pas lui-même ce qui est illégal.",
  },
  'neutralite-du-net': {
    terme: 'Neutralité du net',
    definition:
      "Principe selon lequel un fournisseur d'accès doit traiter tout le trafic de la même façon, sans favoriser, ralentir ou bloquer une appli ou un site selon qui l'envoie. Il est inscrit dans le droit européen depuis 2015.",
    voirAussi: ['fai'],
  },
  vpn: {
    terme: 'VPN',
    definition:
      "Réseau privé virtuel : un tunnel chiffré entre ton appareil et un serveur, qui cache ton trafic à ton fournisseur d'accès et change l'adresse IP vue par les sites. Le fournisseur du VPN, lui, voit tout : ce n'est pas un outil d'anonymat.",
    voirAussi: ['chiffrement'],
  },
  sni: {
    terme: 'SNI',
    definition:
      "Server Name Indication : au début d'une connexion HTTPS, le navigateur indique en clair le nom du site visé, pour que le serveur présente le bon certificat. Ce nom visible permet aussi de filtrer.",
    voirAussi: ['tls', 'https'],
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
  'heuristique': {
    terme: 'Heuristique',
    definition:
      "Règle approximative qui guide une recherche vers les solutions prometteuses, sans tout essayer : par exemple « privilégier les rues qui rapprochent de l'arrivée ». Elle accélère, mais ne garantit pas toujours la meilleure solution.",
    voirAussi: ['algorithme-genetique'],
  },
  'algorithme-genetique': {
    terme: 'Algorithme génétique',
    definition:
      "Méthode d'optimisation inspirée de l'évolution des espèces : une population de solutions est notée, les meilleures se « reproduisent » (croisement) avec un peu de hasard (mutation), et l'on recommence sur de nombreuses générations.",
    voirAussi: ['heuristique'],
  },
  'convolution': {
    terme: 'Convolution',
    definition:
      "Opération qui fait glisser un petit filtre (par exemple 3 × 3 coefficients) sur toute une image : pour chaque pixel, on multiplie ses voisins par les coefficients et l'on additionne. Selon le filtre, on obtient un flou, des bords, des textures. Les réseaux convolutifs apprennent leurs filtres.",
    voirAussi: ['neurone-artificiel'],
  },
  'formant': {
    terme: 'Formant',
    definition:
      "Fréquence que la bouche, la langue et la gorge renforcent quand on parle, comme une caisse de résonance. Les deux premiers formants suffisent presque à reconnaître une voyelle, que la voix soit grave ou aiguë.",
  },
  'modele-de-diffusion': {
    terme: 'Modèle de diffusion',
    definition:
      "Type de modèle qui fabrique des images (ou des sons) en partant d'un bruit au hasard et en l'enlevant pas à pas. Il a appris en faisant l'inverse : deviner l'image d'origine à partir de versions de plus en plus bruitées.",
    voirAussi: ['neurone-artificiel'],
  },
  'filtrage-collaboratif': {
    terme: 'Filtrage collaboratif',
    definition:
      "Méthode de recommandation fondée sur les goûts d'autres personnes : on te propose ce qu'ont aimé celles et ceux qui ont aimé les mêmes choses que toi, sans analyser le contenu lui-même.",
    voirAussi: ['apprentissage-automatique'],
  },
  'bulle-de-filtre': {
    terme: 'Bulle de filtre',
    definition:
      "Expression d'Eli Pariser (2011) : à force de personnaliser ce qu'elles montrent, les plateformes ne nous présenteraient que ce qui nous ressemble. Les recherches discutent de l'ampleur de l'effet et de la part de l'algorithme par rapport à nos propres choix.",
    voirAussi: ['filtrage-collaboratif'],
  },
  'intervalle-de-confiance': {
    terme: 'Intervalle de confiance',
    definition:
      "Fourchette de valeurs plausibles pour une quantité qu'on ne connaît qu'à travers un échantillon (un sondage, des avis). Plus l'échantillon est grand, plus la fourchette est étroite. « À 95 % » veut dire que la méthode tombe juste dans 95 % des cas.",
  },
  'chaine-de-markov': {
    terme: 'Chaîne de Markov',
    definition:
      "Suite d'étapes au hasard où la suivante ne dépend que de l'état présent, pas du chemin parcouru avant : un surfeur qui clique au hasard, un pion sur un plateau. Au bout d'un long moment, la part du temps passée dans chaque état se stabilise.",
  },
  'biais': {
    terme: 'Biais',
    definition:
      "En statistique, une erreur qui va toujours dans le même sens, au lieu de partir au hasard dans tous les sens. Faire la moyenne de beaucoup de mesures efface les erreurs au hasard, mais pas un biais.",
  },
  'logiciel-libre': {
    terme: 'Logiciel libre',
    definition:
      "Logiciel que chacun·e a le droit d'utiliser, d'étudier, de modifier et de redistribuer, modifié ou non. Son code source est donc public. On parle aussi d'« open source », avec une nuance de philosophie.",
  },
  'noyau': {
    terme: "Noyau (d'un système d'exploitation)",
    definition:
      "Le cœur d'un système d'exploitation : le programme qui partage le processeur, la mémoire et les périphériques entre les autres programmes. Linux est un noyau ; un système complet y ajoute de nombreux outils.",
  },
  'communs': {
    terme: 'Communs',
    definition:
      "Ressource partagée par une communauté qui la gère elle-même, avec ses propres règles : un pâturage, une pêcherie, mais aussi une encyclopédie ou une carte libres.",
  },
  'acp': {
    terme: 'Analyse en composantes principales (ACP)',
    definition:
      "Méthode statistique qui résume un grand tableau de nombres en quelques nouvelles colonnes, les directions où les données varient le plus. On peut ainsi dessiner sur une carte à deux dimensions des personnes décrites par des dizaines de votes.",
  },
  'k-moyennes': {
    terme: 'k-moyennes',
    definition:
      "Algorithme qui range des points en k groupes : il place k centres, rattache chaque point au centre le plus proche, déplace chaque centre au milieu de son groupe, et recommence jusqu'à ce que plus rien ne bouge.",
  },
  'annotation': {
    terme: 'Annotation (des données)',
    definition:
      "Travail qui consiste à étiqueter des exemples pour qu'une IA puisse en apprendre : écrire « chat » sous une photo, classer un message comme haineux ou non, comparer deux réponses. Il est souvent fait par des personnes payées à la tâche.",
  },
  'exemple-adverse': {
    terme: 'Exemple adverse',
    definition:
      "Donnée modifiée exprès, souvent de façon presque invisible, pour qu'une IA se trompe avec assurance : une image dont quelques pixels ont bougé, un panneau couvert d'autocollants.",
  },
  'injection-instructions': {
    terme: "Injection d'instructions (prompt injection)",
    definition:
      "Attaque contre un assistant à base de modèle de langage : un texte qu'il lit (page web, e-mail, document) contient des ordres qui s'adressent à lui. Le modèle ne sait pas distinguer sûrement les données des instructions.",
  },
  'empoisonnement': {
    terme: 'Empoisonnement des données',
    definition:
      "Attaque qui glisse des exemples piégés dans les données d'entraînement d'une IA, pour la rendre moins fiable ou y installer une porte dérobée.",
    voirAussi: ['porte-derobee'],
  },
  'porte-derobee': {
    terme: 'Porte dérobée',
    definition:
      "Comportement caché installé dans un logiciel ou une IA : tout semble normal, sauf quand un signal précis, connu de l'attaquant, est présent.",
  },
  'minimax': {
    terme: 'Minimax',
    definition:
      "Méthode pour choisir un coup dans un jeu à deux : on imagine tous les coups et toutes les réponses, en supposant que l'adversaire choisit toujours la réponse la pire pour nous, et on prend le coup dont la pire suite est la meilleure. L'élagage alpha-bêta évite d'examiner les branches inutiles.",
    voirAussi: ['heuristique'],
  },
  'renforcement': {
    terme: 'Apprentissage par renforcement',
    definition:
      "Façon d'apprendre par essais et erreurs : la machine agit, reçoit une récompense ou une pénalité, souvent tard, et renforce peu à peu les actions qui rapportent le plus.",
    voirAussi: ['apprentissage-automatique'],
  },
  'regression-logistique': {
    terme: 'Régression logistique',
    definition:
      "Méthode statistique qui calcule une probabilité à partir d'une somme pondérée de critères : chaque critère a un coefficient, positif ou négatif, qu'on peut lire. Elle sert souvent à calculer des scores de risque.",
    voirAussi: ['apprentissage-automatique'],
  },
  'expression-reguliere': {
    terme: 'Expression régulière',
    definition:
      "Petit langage pour décrire un motif de texte, par exemple « le mot je suis, puis n'importe quoi ». Un programme s'en sert pour reconnaître des phrases et en extraire des morceaux.",
  },
  base: {
    terme: 'Base (de numération)',
    definition:
      "Nombre de chiffres qu'on utilise pour écrire les nombres, et taille des paquets qu'on forme : 10 en décimal (0 à 9), 2 en binaire (0 et 1), 8 en octal, 16 en hexadécimal.",
    voirAussi: ['bit', 'hexadecimal'],
  },
  hexadecimal: {
    terme: 'Hexadécimal',
    definition:
      "Écriture des nombres en base 16, avec les chiffres 0 à 9 puis A à F (A vaut 10, F vaut 15). Un chiffre hexadécimal remplace exactement 4 bits : un octet s'écrit en deux chiffres, de 00 à FF.",
    voirAussi: ['base', 'octet'],
  },
  'masque-reseau': {
    terme: 'Masque de sous-réseau',
    definition:
      "Suite de 32 bits (en IPv4) dont les 1, tous à gauche, indiquent la partie « réseau » d'une adresse IP ; les 0 numérotent les machines. Exemple : 255.255.255.0, soit /24.",
    voirAussi: ['adresse-ip', 'cidr'],
  },
  cidr: {
    terme: 'Notation CIDR',
    definition:
      "Façon d'écrire un réseau avec une barre oblique et le nombre de bits du réseau : 192.0.2.0/24 veut dire « les 24 premiers bits désignent le réseau ». Adoptée en 1993 à la place des classes A, B et C.",
    voirAussi: ['masque-reseau', 'adresse-ip'],
  },
};

export function entree(id: string): Entree {
  const e = GLOSSAIRE[id];
  if (!e) throw new Error(`Terme de glossaire inconnu : ${id}`);
  return e;
}
