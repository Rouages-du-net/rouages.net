# Dossier de sources : Client et serveur

Module `/modules/client-serveur/`, rédigé le 10 novembre 2026, revu le 28 novembre 2026 (première passe de
correction de la grille `docs/relecture/client-serveur.md` ; voir la dernière section). Les faits techniques viennent des textes de
référence, lus directement (User-Agent `RouagesDuNet-research/0.1`). Statut : **[lu]** pour toutes les
sources ci-dessous.

## Protocoles et formats

| Fait | Source |
|---|---|
| RFC 114, « A File Transfer Protocol », A. Bhushan, MIT Project MAC, 16 avril 1971 ; distinction entre usage « direct » et « indirect » d'une machine distante | https://www.rfc-editor.org/rfc/rfc114.txt |
| RFC 959 (FTP), J. Postel et J. Reynolds, ISI, octobre 1985 ; connexion de commandes sur le port 21 (« L=21 ») et connexion de données séparée | https://www.rfc-editor.org/rfc/rfc959.txt |
| RFC 4217, « Securing FTP with TLS », P. Ford-Hutchinson, octobre 2005 ; commande `AUTH TLS`, réponse 234 | https://www.rfc-editor.org/rfc/rfc4217.txt |
| FTPS implicite sur le port 990, données sur 989 (registre de l'IANA, « ftp protocol, control, over TLS/SSL ») | registre ci-dessous |
| SFTP : « SSH File Transfer Protocol », J. Galbraith et O. Saarenmaa, brouillon draft-ietf-secsh-filexfer-13 du 10 juillet 2006, expiré en janvier 2007 : jamais publié en RFC | https://www.ietf.org/archive/id/draft-ietf-secsh-filexfer-13.txt |
| SSH : échange de versions en clair (`SSH-protoversion-softwareversion`), RFC 4253 | https://www.rfc-editor.org/rfc/rfc4253.txt |
| URI : RFC 3986 (STD 66), T. Berners-Lee, R. Fielding, L. Masinter, janvier 2005 ; exemple `foo://example.com:8042/over/there?name=ferret#nose` ; mise en garde sur l'interprétation d'un chemin dans un système de fichiers (§ 7.3) | https://www.rfc-editor.org/rfc/rfc3986.txt |
| Les navigateurs simplifient les segments « .. » (« double-dot URL path segment ») avant d'envoyer la requête | https://url.spec.whatwg.org/ |
| HTTP : RFC 9110 (2022) ; codes 200 (§ 15.3.1), 301 (§ 15.4.2), 404 (§ 15.5.5), 500 (§ 15.6.1), familles 4xx et 5xx ; en-tête Host (§ 7.2), qui permet à un serveur de servir plusieurs noms d'hôte | https://www.rfc-editor.org/rfc/rfc9110.txt |
| TCP : « A connection is defined by a pair of sockets » (RFC 9293, § 3.3) | https://www.rfc-editor.org/rfc/rfc9293.txt |
| Plages de ports : système 0-1023, utilisateur 1024-49151, dynamiques 49152-65535 « never assigned » (RFC 6335, BCP 165) | https://www.rfc-editor.org/rfc/rfc6335.txt |

## Registre des ports de l'IANA (consulté le 10 novembre 2026)

Fichier CSV : https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.csv

- 20 ftp-data, 21 ftp (référence RFC 959), 22 ssh (RFC 4251), 25 smtp, 53 domain, 80 http et 443 https
  (RFC 9110), 587 submission (RFC 6409), 989 ftps-data, 990 ftps, 993 imaps.

## Web au CERN

- Le premier site web : http://info.cern.ch/ (« http://info.cern.ch - home of the first website »). Ce qui y est
  servi est une **copie de 1992**, remise en ligne en 2013 (voir la dernière section). Le 28 novembre 2026,
  `https://info.cern.ch/` présentait un certificat expiré : la page cite l'adresse en `http://`, qui est aussi
  l'adresse historique.
- Page du projet : http://info.cern.ch/hypertext/WWW/TheProject.html (date de la page non affichée).
- Les pages « Birth of the web » de home.cern renvoyaient une erreur le 10 novembre 2026 ; leur page d'erreur
  mentionne « the world's first web server, Tim Berners-Lee's NeXT machine at CERN ».

## Ce site

- rouages.net est déployé par FTPS : `protocol: ftps` dans `.github/workflows/deploy.yml`.

## Exemples

- Domaines `.example` (RFC 6761) et adresse 203.0.113.10 (RFC 5737) dans les animations. Les échanges FTPS et SFTP
  affichent des octets chiffrés fictifs (illustration), et les lignes FTP en clair suivent la RFC 959 (`USER`,
  `PASS`, `RETR`).
- Code 403 pour un chemin contenant « .. » : comportement du serveur simulé ; la RFC 3986 demande seulement des
  précautions.

## Racine du site (ajout du 10 novembre 2026)

- Apache, directive `DocumentRoot` : « Directory that forms the main document tree visible from the web » ;
  « the server appends the path from the requested URL to the document root to make the path to the
  document » ; exemple `DocumentRoot "/usr/web"` → `http://my.example.com/index.html` = `/usr/web/index.html`.
  **[lu]** https://httpd.apache.org/docs/2.4/mod/core.html#documentroot
- cPanel, File Manager : « Web Root (public_html or www) — The most direct route to your files » ; racine des
  documents « /home/user/public_html ». **[lu]** https://docs.cpanel.net/cpanel/files/file-manager/
- cPanel, FTP Accounts : un compte FTP « can access the /home/$user/example/ directory and all of its
  subdirectories » (dossier choisi à la création). **[lu]** https://docs.cpanel.net/cpanel/files/ftp-accounts/
- Ubuntu Server : la `DocumentRoot` par défaut d'Apache2 est `/var/www/html`, fixée dans
  `/etc/apache2/sites-available/000-default.conf`. **[lu]**
  https://documentation.ubuntu.com/server/how-to/web-services/configure-apache2-settings/
- L'animation « Un fichier, trois chemins » suit le modèle cPanel (compte `/home/eleve`, racine `public_html`,
  compte FTP limité à `public_html`) ; l'animation « De l'URL au fichier » garde `/var/www/cours.example`, comme un
  serveur Apache configuré à la main. La page signale que le nom du dossier varie.

## Vérifications du 28 novembre 2026

Sources ouvertes le 28 novembre 2026 (User-Agent `RouagesDuNet-research/0.1`), toutes **[lu]** sauf mention
contraire.

### Histoire

| Fait | Source |
|---|---|
| RFC 114 : « This paper is a "first cut" at a protocol » ; les deux bouts s'appellent déjà *user* et *server* (« The user sends the request, the server responds… », § retrieve) | https://www.rfc-editor.org/rfc/rfc114.txt |
| RFC 959, § 2.1 History : « the first proposed file transfer mechanisms in 1971 that were developed for implementation on hosts at M.I.T. (RFC 114) » ; d'où « l'une des toutes premières propositions » (et non « le premier protocole ») | https://www.rfc-editor.org/rfc/rfc959.txt |
| Premier serveur web : « The first web server was nxoc01.cern.ch, later called info.cern.ch, and the first web page http://nxoc01.cern.ch/hypertext/WWW/TheProject.html » (chronologie, novembre 1990) ; « Technical Student Nicola Pellow (CN) joins and starts work on the line-mode browser » | W3C, *A Little History of the World Wide Web* (R. Cailliau, D. Connolly), https://www.w3.org/History.html |
| Tim Berners-Lee : « Apart from local "file:" URLs on my machine (which was the first browser as well as the first server), the first http one (end of 1990) was basically http://nxoc01.cern.ch/hypertext/WWW/TheProject.html » ; « An alias was made so that this was later known as http://info.cern.ch/… » ; navigateur écrit sur le NeXT | https://www.w3.org/People/Berners-Lee/FAQ.html |
| CERN, projet « Restoring the first website » : « In August 2009 a team… came to CERN to give the world's first web server a health check » (le NeXT de Tim Berners-Lee) ; billet du 29 avril 2013 : « We just put the files back online… This is a 1992 copy of the first website » ; « The first URL was: http://info.cern.ch/hypertext/WWW/TheProject.html ». Le site lui-même est **archivé depuis le 2 octobre 2026** (bandeau « This website has been archived »). | https://first-website.web.cern.ch/ (pages `archived/first-website/node/16.html` et `node/23.html`) |
| Les pages « Birth of the web » de home.cern renvoient toujours une erreur 404 (`/science/computing/birth-web`, `/…/short-history-web`). | home.cern, **non lisible** |

### Ports

| Fait | Source |
|---|---|
| Registre des ports (CSV, consulté le 28 novembre 2026) : 20 ftp-data, 21 ftp [RFC 959], 22 ssh [RFC 4251], 25 smtp, 53 domain (tcp et udp), 80 http et 443 https [RFC 9110], 465 submissions [RFC 8314], 587 submission [RFC 6409], 989 ftps-data, 990 ftps (« ftp protocol, control, over TLS/SSL », sans RFC), 993 imaps, 8080 http-alt. **Aucune entrée « sftp » sur 22** ; « sftp » = port **115**, « Simple File Transfer Protocol » (Mark Lottor). | https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.csv |
| RFC 913, « Simple File Transfer Protocol », M. Lottor, MIT, septembre 1984 | https://www.rfc-editor.org/rfc/rfc913.txt |
| TCP : « Source Port: 16 bits » (RFC 9293, § 3.1) ; W. Eddy (Ed.), août 2022 | https://www.rfc-editor.org/rfc/rfc9293.txt |
| RFC 6335 : M. Cotton, L. Eggert, J. Touch et al., BCP 165 (auteurs confirmés) | https://www.rfc-editor.org/rfc/rfc6335.txt |
| RFC 6056 (BCP 156, M. Larsen, F. Gont, janvier 2011) : recommandations pour tirer le port local de façon imprévisible ; Linux applique l'« algorithme 3 » (annexe A.2) | https://www.rfc-editor.org/rfc/rfc6056.txt |
| Linux : `ip_local_port_range`, « The default values are 32768 and 60999 respectively » | https://docs.kernel.org/networking/ip-sysctl.html |
| Windows (Vista et Server 2008 et suivants) : plage dynamique 49152 à 65535, « To comply with Internet Assigned Numbers Authority (IANA) recommendations » (KB 929851) | https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang |
| `ss` fait partie d'iproute2 (outils réseau de Linux) : `-t` TCP, `-l` sockets en écoute, `-n` numérique. Il n'existe pas sous macOS (macOS n'a pas iproute2) ; la page ne cite plus macOS faute de source Apple ouverte. | https://man7.org/linux/man-pages/man8/ss.8.html |
| Windows `netstat` : `-a` « the TCP and UDP ports on which the computer is listening », `-n` numérique ; la liste des états donne `LISTEN` | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat |
| Quêtes de Sysadmin fait utiliser `ss` et le pare-feu `ufw` (chapitres « firewall », « firewall-hole », « shut-the-door »…, règles `allow` / `deny` / `limit` par port) : lu dans le code publié du jeu (`/integration/quetes-de-sysadmin.js` et ses morceaux `story-registry-*.js`, `systemd-*.js`, `security-*.js`), **pas dans son dépôt** | https://sysadmin.rouages.net/integration/quetes-de-sysadmin.js |

### URL, fichiers, HTTP

| Fait | Source |
|---|---|
| Registre des schémas d'URI : http, https (RFC 9110), ftp (RFC 1738), ws, wss « Permanent » ; sftp et ssh « Provisional » ; **ftps absent** | https://www.iana.org/assignments/uri-schemes (et le CSV `uri-schemes-1.csv`) |
| Fragment : RFC 3986 § 3.5 (« the fragment identifier is separated from the rest of the URI prior to a dereference ») ; RFC 9110 § 17.11 (« fragment identifiers used within URI references are not sent in requests ») | https://www.rfc-editor.org/rfc/rfc3986.txt, https://www.rfc-editor.org/rfc/rfc9110.txt |
| Apache mod_dir : `DirectoryIndex` (défaut `index.html`, « when the client requests an index of the directory by specifying a / at the end ») ; `DirectorySlash` (défaut `On`, redirige vers l'adresse avec la barre finale). La documentation ne donne pas le code : le code source de mod_dir renvoie `HTTP_MOVED_PERMANENTLY` (301). | https://httpd.apache.org/docs/2.4/mod/mod_dir.html ; https://raw.githubusercontent.com/apache/httpd/2.4.x/modules/mappers/mod_dir.c |
| cPanel, File Manager : « Web Root (public_html or www) » (relu ; la documentation ne dit pas que `www` est un lien symbolique) | https://docs.cpanel.net/cpanel/files/file-manager/ |
| RFC 9110 : GET « requests transfer of a current selected representation » (§ 9.3.1) ; POST, par exemple « the fields entered into an HTML form » (§ 9.3.3) ; familles 1xx (§ 15.2) et 3xx « Redirection » (§ 15.4), dont 304 (§ 15.4.5) | https://www.rfc-editor.org/rfc/rfc9110.txt |
| RFC 9112 (HTTP/1.1, STD 99, juin 2022, R. Fielding, M. Nottingham, J. Reschke) : `request-line = method SP request-target SP HTTP-version` | https://www.rfc-editor.org/rfc/rfc9112.txt |
| RFC 9113 (HTTP/2, juin 2022, M. Thomson, C. Benfield) : « more efficient processing of messages through use of binary message framing » | https://www.rfc-editor.org/rfc/rfc9113.txt |
| RFC 9114 (HTTP/3, juin 2022, M. Bishop) : « a mapping of HTTP semantics over QUIC » | https://www.rfc-editor.org/rfc/rfc9114.txt |
| RFC 6066, § 3 (Server Name Indication, D. Eastlake 3rd, janvier 2011) : le client indique le nom du serveur, utile pour les serveurs « that host multiple 'virtual' servers at a single underlying network address » | https://www.rfc-editor.org/rfc/rfc6066.txt |
| RFC 8446 (TLS 1.3, E. Rescorla, août 2018) : « All handshake messages after the ServerHello are now encrypted » ; le certificat n'est donc plus visible sur le réseau (d'où le retrait de « certificat du serveur visible » dans l'animation) | https://www.rfc-editor.org/rfc/rfc8446.txt |

### FTP, FTPS, SFTP

| Fait | Source |
|---|---|
| RFC 959, § 3.2 : le port de données par défaut du serveur est « L-1 » (20) et « The server, upon receiving the transfer request, will initiate the data connection » (mode actif) ; commande `PASV` (mode passif) | https://www.rfc-editor.org/rfc/rfc959.txt |
| RFC 4217, § 3 : « an FTP session is established on the normal control port. A client requests TLS with the AUTH command and then decides if it wishes to secure the data connections by use of the PBSZ and PROT commands » ; `CCC` pour repasser en clair ; réponse 234 ; `{FTP-PORT}` = 21. **La RFC ne décrit pas le port 990** ni le mode implicite. § 12.5 : PASV présenté comme « Firewall-Friendly ». | https://www.rfc-editor.org/rfc/rfc4217.txt |
| RFC 4251, § 4.1 : « The server host key is used during key exchange to verify that the client is really talking to the correct server » (T. Ylonen, C. Lonvick, janvier 2006) | https://www.rfc-editor.org/rfc/rfc4251.txt |
| draft-ietf-secsh-filexfer-02 (T. Ylonen, S. Lehtinen, octobre 2001) : « The version number of the protocol specified in this document is 3 » | https://www.ietf.org/archive/id/draft-ietf-secsh-filexfer-02.txt |
| OpenSSH : la page sftp-server(8) renvoie à « draft-ietf-secsh-filexfer-02.txt, October 2001 » | https://man.openbsd.org/sftp-server.8 |
| Datatracker : draft-ietf-secsh-filexfer « Expired & archived », dernière mise à jour le 18 juillet 2006, aucune RFC | https://datatracker.ietf.org/doc/draft-ietf-secsh-filexfer/ |
| **État au 28 novembre 2026** : le groupe de travail IETF « Secure Shell Maintenance » (sshm, actif) a pour but de « document the OpenSSH certificate structure, the SSH agent protocol, and SFTP, as they are currently implemented » ; aucun brouillon SFTP dans sa liste de documents ce jour-là | https://datatracker.ietf.org/wg/sshm/about/ ; https://datatracker.ietf.org/wg/sshm/documents/ |

### Liens d'archive (V16)

L'API de disponibilité de l'Internet Archive (`https://archive.org/wayback/available?url=…`) a renvoyé ces
instantanés le 28 novembre 2026. **Non ouverts** (connexion à web.archive.org refusée depuis l'environnement de
travail) : à vérifier avant de les ajouter au champ `archive` de `<Sources>`.

- cPanel File Manager : http://web.archive.org/web/20260511124105/https://docs.cpanel.net/cpanel/files/file-manager/
- cPanel FTP Accounts : http://web.archive.org/web/20261028181429/https://docs.cpanel.net/cpanel/files/ftp-accounts/
- Ubuntu, Apache2 : http://web.archive.org/web/20260214110940/https://documentation.ubuntu.com/server/how-to/web-services/configure-apache2-settings/
- Apache core : http://web.archive.org/web/20261116130251/https://httpd.apache.org/docs/2.4/mod/core.html
- Apache mod_dir : http://web.archive.org/web/20261105203608/https://httpd.apache.org/docs/2.4/mod/mod_dir.html
- W3C History : http://web.archive.org/web/20261117130825/https://www.w3.org/History.html
- FAQ de Tim Berners-Lee : http://web.archive.org/web/20261117123651/https://www.w3.org/People/Berners-Lee/FAQ.html
- CERN, first-website : http://web.archive.org/web/20261011085101/https://first-website.web.cern.ch/
- Noyau Linux, ip-sysctl : http://web.archive.org/web/20261113104221/https://docs.kernel.org/networking/ip-sysctl.html
- Microsoft, plage dynamique : http://web.archive.org/web/20260920164944/https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang

### Calcul

- `src/lib/url.ts` : un port par défaut écrit en toutes lettres (`https://cours.example:443/`) n'est plus affiché
  « sous-entendu » (l'analyseur WHATWG le retire de `URL.port` ; on le relit dans le texte). Test ajouté dans
  `tests/unit/url.test.ts`.
