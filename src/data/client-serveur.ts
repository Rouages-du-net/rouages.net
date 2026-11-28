// Données du module « Client et serveur : protocoles, ports, URL ».
// Faits sourcés : voir docs/sources/client-serveur.md.

/**
 * Ports bien connus (registre des ports de l'IANA, consulté le 28 novembre
 * 2026). `chiffre` : chiffré dès la connexion. Le registre n'a pas d'entrée
 * « sftp » sur 22 : SFTP passe par SSH (le nom « sftp » y désigne, sur le port
 * 115, un autre protocole, le Simple File Transfer Protocol de la RFC 913).
 */
export const PORTS: { port: number; nom: string; protocole: string; usage: string; chiffre: boolean }[] = [
  { port: 21, nom: 'ftp', protocole: 'FTP', usage: 'transférer des fichiers (commandes)', chiffre: false },
  { port: 22, nom: 'ssh', protocole: 'SSH', usage: 'administrer une machine à distance, et transférer des fichiers par SFTP, qui voyage dans SSH', chiffre: true },
  { port: 25, nom: 'smtp', protocole: 'SMTP', usage: 'faire passer le courriel d’un serveur à l’autre', chiffre: false },
  { port: 53, nom: 'domain', protocole: 'DNS', usage: 'traduire un nom en adresse IP', chiffre: false },
  { port: 80, nom: 'http', protocole: 'HTTP', usage: 'pages web, sans chiffrement', chiffre: false },
  { port: 443, nom: 'https', protocole: 'HTTPS', usage: 'pages web chiffrées (HTTP dans TLS)', chiffre: true },
  // 587 : le chiffrement se demande en cours de route (STARTTLS), comme souvent sur 25.
  { port: 587, nom: 'submission', protocole: 'SMTP (envoi)', usage: 'envoyer son courriel à son serveur', chiffre: false },
  { port: 990, nom: 'ftps', protocole: 'FTPS', usage: 'FTP chiffré par TLS dès la connexion', chiffre: true },
  { port: 993, nom: 'imaps', protocole: 'IMAP sur TLS', usage: 'lire son courriel', chiffre: true },
];

/** Services qui écoutent sur le serveur de l'animation « Ports ». */
export const SERVEUR_ECOUTE = [22, 443, 990];

/** Fichiers du site d'exemple, sous /var/www/cours.example. */
export const RACINE = '/var/www/cours.example';
export const FICHIERS: readonly string[] = [
  'index.html',
  'css/style.css',
  'images/logo.png',
  'reseau/index.html',
  'reseau/ports.html',
  'docs/tp-adresses-ip.pdf',
];

/** URL d'exemple pour l'animation « De l'URL au fichier ». */
export const URL_EXEMPLES = [
  'https://cours.example/',
  'https://cours.example/reseau/ports.html',
  'https://cours.example/reseau/',
  'https://cours.example/reseau',
  'https://cours.example/docs/tp-adresses-ip.pdf',
  'https://cours.example/reseau/ports.html#ftp',
  'https://cours.example/notes.html',
  'https://cours.example/../etc/passwd',
];

/**
 * Trois façons de transférer un fichier (RFC 959, RFC 4217, brouillon SFTP de
 * l'IETF). FTPS est montré en mode « explicite », celui que normalise la RFC
 * 4217 (AUTH TLS sur le port 21). Les octets chiffrés sont fictifs.
 */
export const TRANSFERTS: { id: string; nom: string; ports: string; etapes: { quoi: string; espion: string }[]; bilan: string }[] = [
  {
    id: 'ftp', nom: 'FTP', ports: '21 (commandes) + une seconde connexion pour les données',
    etapes: [
      { quoi: 'Le client ouvre une connexion de commandes vers le port 21.', espion: '220 Service ready' },
      { quoi: 'Il envoie son identifiant et son mot de passe.', espion: 'USER eleve\nPASS MotDePasse123' },
      { quoi: 'Il demande le fichier : une seconde connexion s’ouvre pour les données.', espion: 'RETR tp-adresses-ip.pdf\n(contenu du fichier, lisible)' },
    ],
    bilan: 'Tout passe en clair : quiconque écoute le réseau lit le mot de passe et le fichier.',
  },
  {
    id: 'ftps', nom: 'FTPS', ports: '21, avec la commande AUTH TLS (ou 990, TLS dès le départ)',
    etapes: [
      { quoi: 'Le client ouvre la connexion de commandes (port 21) et demande aussitôt le chiffrement : AUTH TLS. Le serveur accepte (234), puis tous deux établissent un canal chiffré TLS, comme HTTPS.', espion: '220 Service ready\nAUTH TLS\n234\n(poignée de main TLS)' },
      { quoi: 'Il demande que les données soient chiffrées aussi (PROT P), puis envoie son identifiant et son mot de passe, dans le canal chiffré.', espion: '17 03 03 00 41 8f 2a c4 … (illisible)' },
      { quoi: 'Le fichier passe sur une seconde connexion, chiffrée elle aussi.', espion: '17 03 03 3f 2e 91 07 … (illisible)' },
    ],
    bilan: 'C’est FTP, avec ses deux connexions, enveloppé dans TLS : le mot de passe et le fichier sont chiffrés. Seul le tout début (AUTH TLS) passe en clair.',
  },
  {
    id: 'sftp', nom: 'SFTP', ports: '22 (SSH), une seule connexion',
    etapes: [
      { quoi: 'Le client ouvre une connexion SSH vers le port 22 et vérifie l’empreinte de la clé du serveur.', espion: 'SSH-2.0-OpenSSH (puis échange de clés)' },
      { quoi: 'Il s’authentifie, par mot de passe ou par clé, dans le canal chiffré.', espion: '8e d1 4b 07 c2 39 … (illisible)' },
      { quoi: 'Il demande le fichier, qui arrive dans la même connexion.', espion: '5e 71 a0 3d 19 f6 … (illisible)' },
    ],
    bilan: 'Ce n’est pas FTP : c’est un autre protocole, qui fonctionne à l’intérieur de SSH, sur une seule connexion chiffrée.',
  },
];

/** Échanges HTTP/1.1 d'exemple (construits, domaines .example) de l'animation « Requête » (RFC 9110, RFC 9112). */
export const ECHANGES: { id: string; titre: string; requete: string; reponse: string; explication: string }[] = [
  {
    id: 'ok', titre: 'Demander une page qui existe',
    requete: 'GET /reseau/ports.html HTTP/1.1\nHost: cours.example',
    reponse: 'HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\n<!doctype html>\n<html lang="fr">…',
    explication: '200 OK : le serveur a trouvé le fichier et l’envoie, avec son type (une page HTML).',
  },
  {
    id: 'introuvable', titre: 'Demander une page qui n’existe pas',
    requete: 'GET /notes.html HTTP/1.1\nHost: cours.example',
    reponse: 'HTTP/1.1 404 Not Found\nContent-Type: text/html; charset=utf-8\n\n<h1>Page introuvable</h1>',
    explication: '404 : le serveur fonctionne, mais rien ne correspond à ce chemin.',
  },
  {
    id: 'redirection', titre: 'Oublier la barre finale d’un dossier',
    requete: 'GET /reseau HTTP/1.1\nHost: cours.example',
    reponse: 'HTTP/1.1 301 Moved Permanently\nLocation: https://cours.example/reseau/',
    explication: '301 : « c’est ailleurs ». Le navigateur refait aussitôt la demande à la nouvelle adresse.',
  },
  {
    id: 'erreur', titre: 'Un programme du serveur plante',
    requete: 'GET /recherche?q=ports HTTP/1.1\nHost: cours.example',
    reponse: 'HTTP/1.1 500 Internal Server Error',
    explication: '500 : la demande était correcte, mais le serveur a échoué. Les codes 4xx désignent une erreur du client, les 5xx une erreur du serveur.',
  },
  {
    id: 'hote', titre: 'Deux sites, une seule adresse IP',
    requete: 'GET / HTTP/1.1\nHost: club-photo.example',
    reponse: 'HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\n<title>Club photo</title>…',
    explication: 'Le même serveur, à la même adresse IP, héberge cours.example et club-photo.example. C’est la ligne « Host » qui lui dit quel site on veut : c’est ainsi que fonctionnent les hébergements mutualisés. En HTTPS, le client annonce aussi le nom du site dès le début de la poignée de main TLS (extension SNI), pour que le serveur présente le bon certificat.',
  },
];
