# Dossier de sources : Client et serveur

Module `/modules/client-serveur/`, rédigé le 10 novembre 2026. Les faits techniques viennent des textes de
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

- Le premier site web, toujours en ligne : https://info.cern.ch/ (« home of the first website »).
- Page du projet : https://info.cern.ch/hypertext/WWW/TheProject.html (date de la page non affichée : la page du
  module ne lui donne pas d'année).
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
