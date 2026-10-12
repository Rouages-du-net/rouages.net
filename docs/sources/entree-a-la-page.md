# Sources — « De l'Entrée à la page »

Vérification technique et institutionnelle du scénario
`docs/scenarios/entree-a-la-page.md` (brouillon). Toutes les URL citées ont été
ouvertes le 11/10/2026 et ont répondu (HTTP 200), sauf mention contraire ;
leur contenu confirme le fait cité. Priorité aux sources primaires : RFC
(rfc-editor.org), spécifications WHATWG/W3C, IANA/ICANN/root-servers.org,
RIPE NCC, Arcep, Arcom, CNIL, Légifrance, documentation Apache, cPanel,
Let's Encrypt. Les mesures sur `rouages.net` (DNS, en-têtes) ont été faites le
11/10/2026 avec des outils publics ; elles décrivent le domaine **tel qu'il
répond aujourd'hui**, pas le futur site Astro.

> **Alerte préalable (fil conducteur).** Au 11/10/2026, `https://rouages.net/`
> ne sert pas le site du projet : la réponse est un site WordPress intitulé
> « rouages – Curiosity-inspired illustrations and design », renvoyé par un
> serveur annonçant `server: nginx`, avec des serveurs DNS faisant autorité chez
> Cloudflare (`cass`/`jason.ns.cloudflare.com`) et une adresse IPv4
> (185.69.53.69) appartenant à un bloc enregistré en Lituanie (RIPE). Tant que
> le site Astro n'est pas déployé sur ce domaine, les encarts « Vérifie
> toi-même » (`dig`, `curl -I`, `traceroute`, certificat) montreront autre
> chose que ce que décrit le scénario. Je ne me suis pas renseigné sur le
> titulaire du domaine (donnée potentiellement personnelle) : à vérifier en
> interne.

## Corrections à apporter au scénario

- **Vue d'ensemble / fil conducteur, tous niveaux** — « la page que l'on suit
  est `rouages.net`, hébergée sur un serveur cPanel » → ajouter une condition
  de réalisation : « Les valeurs affichées (adresse IP, serveurs DNS,
  certificat, en-têtes) sont lues sur le site réel au moment de la
  publication » ; ne pas figer d'exemples tant que le domaine ne sert pas le
  site Astro (voir alerte ci-dessus) [0-3][0-4].
- **Étape 0, 🟡** — « Il complète en `https://rouages.net/`. » → « Il essaie
  d'abord `https://rouages.net/` (version chiffrée) ; chez la plupart des
  navigateurs récents, il ne revient à `http://` que si HTTPS échoue — sauf si
  le site impose HTTPS (HSTS), auquel cas il n'y a pas de retour possible. »
  [0-4][0-5][0-6].
- **Étape 0, 🔴** — « Si le domaine est dans la liste HSTS préchargée ou a
  déjà envoyé un en-tête `Strict-Transport-Security`… » → garder, mais
  ajouter : « (au 11/10/2026, `rouages.net` n'est pas dans la liste
  préchargée, et le `.htaccess` du projet n'envoie pas encore d'en-tête
  HSTS) ». À défaut, ajouter l'en-tête `Strict-Transport-Security` au
  `.htaccess` avant publication pour que l'encart soit vrai [0-2][0-3][0-4].
- **Étape 0, 🔴** — « commencent à résoudre le nom ou à ouvrir une connexion
  **avant** l'appui sur Entrée (prédiction) » → « …à résoudre le nom, à ouvrir
  une connexion, voire (Chrome) à préafficher la page en arrière-plan
  (*prerender*) avant l'appui sur Entrée, quand ils sont presque sûrs de la
  destination » [0-7].
- **Étape 0, Mythe** — « (le courriel, la visio… n'en sont pas) » → « (le
  courriel, avec ses propres protocoles SMTP et IMAP, ou de nombreux jeux en
  ligne n'en sont pas, même si l'on peut lire ses courriels dans un
  navigateur) ». La visio dans un navigateur passe en partie par le web
  (WebRTC) : mauvais exemple. *(nuance rédactionnelle, non sourcée)*
- **Étape 1, 🟡** — « 3. les serveurs faisant autorité du domaine (souvent
  ceux de l'hébergeur) » → « (ceux de l'hébergeur ou d'un service DNS
  spécialisé ; pour `rouages.net`, aujourd'hui, Cloudflare) » [1-17].
- **Étape 1, 🟡** — après « La réponse est gardée en cache pendant une durée
  fixée (TTL) » → ajouter : « C'est aussi vrai pour les étapes 1 et 2 : la
  racine indique les serveurs de `.net` pour 2 jours ; un résolveur ne
  l'interroge donc que rarement. » [1-11].
- **Étape 1, 🔴** — « en UDP port 53, ou chiffrée (DNS over HTTPS / over
  TLS) » → « en UDP (ou TCP) sur le port 53, ou chiffrée : DNS over TLS (port
  853, RFC 7858) ou DNS over HTTPS (RFC 8484). Les navigateurs demandent aussi
  souvent l'enregistrement `HTTPS` (RFC 9460), qui annonce par exemple HTTP/3. »
  [1-2][1-4][1-5][1-6].
- **Étape 1, 🔴** — « 13 identités de serveurs racine (`a` à
  `m.root-servers.net`), démultipliées en de nombreuses instances » → « 13
  identités (`a` à `m.root-servers.net`), exploitées par 12 organisations
  indépendantes et démultipliées par *anycast* en 2 047 instances (chiffre de
  root-servers.org au 11/10/2026) » [1-9].
- **Étape 1, 🔴** — « DNSSEC permet de signer les réponses. » → « DNSSEC
  permet de vérifier, par des signatures, que les réponses sont authentiques
  (il ne les chiffre pas) ; `rouages.net` est aujourd'hui signé. » Ajouter :
  « Avec la minimisation de la question (RFC 9156), le résolveur ne demande à
  la racine que `net.`, pas le nom complet. » [1-7][1-8][1-17].
- **Étape 1, Qui décide ?** — « L'ICANN et l'IANA (zone racine) » → « L'IANA
  (fonction assurée par PTI, filiale de l'ICANN) pour la zone racine » ;
  « Verisign, sous contrat avec l'ICANN » → « …(contrat du registre `.net`
  en vigueur depuis le 1er juillet 2023) » [1-10][1-12][1-13].
- **Étape 1, Point politique** — « le blocage de sites (décisions de justice,
  Arcom) passe souvent par les résolveurs DNS des fournisseurs d'accès » →
  « En France, les fournisseurs d'accès appliquent le plus souvent les
  blocages sur leurs résolveurs DNS (la loi leur laisse le choix du moyen). Ils
  sont ordonnés par **un juge** (par exemple contre le piratage sportif ;
  l'**Arcom** fait ensuite étendre la décision aux nouveaux sites miroirs),
  par **l'administration** (police, pour les contenus terroristes ou
  pédocriminels, sous le contrôle d'une personnalité qualifiée de l'Arcom) ou,
  depuis la loi SREN de 2024, par **l'Arcom** elle-même pour les sites
  pornographiques sans vérification d'âge. Les résolveurs publics (Google,
  Cloudflare…) sont désormais visés eux aussi. L'**Arcep**, elle, ne bloque
  rien : elle veille à la neutralité du net. » [1-18] à [1-25], [5-14].
- **Étape 1, Mythe** — « (il est seulement absent de certains annuaires) » →
  « (il existe toujours : certains annuaires refusent seulement de donner son
  adresse) ». « changer de DNS rend anonyme (non) » → ajouter « : ton
  fournisseur d'accès voit toujours à quelle adresse IP tu te connectes, et
  souvent le nom du site (SNI, étape 4) » [4-2].
- **Étape 2, 🟡** — « toute la maison partage une seule adresse IPv4
  publique » → « toute la maison partage une seule adresse IPv4 publique, et
  cette adresse est de plus en plus souvent elle-même partagée avec d'autres
  abonnés, faute d'adresses IPv4 disponibles, y compris sur la fibre (Arcep) ».
  [2-8][2-9].
- **Étape 2, 🔴** — « Sur mobile : réseau 4G/5G de l'opérateur, souvent avec un
  NAT à grande échelle (CGNAT). » → « Sur mobile (et parfois sur le fixe) : NAT
  à grande échelle chez l'opérateur (CGNAT), qui utilise souvent la plage
  `100.64.0.0/10` réservée à cet usage (RFC 6598). En France, 94 % des clients
  fixes et 83 % des clients mobiles ont IPv6 activé (Arcep, fin 2025). »
  [2-2][2-8][2-9].
- **Étape 2, Vérifie toi-même** — « elles sont différentes » → « En IPv4,
  elles sont différentes (NAT). Si le site affiche une adresse IPv6, tu la
  retrouveras peut-être telle quelle dans `ip addr` / `ipconfig` : en IPv6, il
  n'y a en général pas de traduction d'adresse. » (piège fréquent : IPv6 est
  activé chez la grande majorité des abonnés) [2-7][2-8].
- **Étape 2, Un peu d'histoire** — « qui permet de relier de nombreux réseaux
  Ethernet sans boucle » → « qui permet de relier de nombreux segments
  Ethernet par des ponts sans créer de boucle » (renvoi `sources/internet.md`,
  fiche Perlman).
- **Étape 3, 🟡** — « Les navigateurs récents utilisent souvent **QUIC**
  (HTTP/3), qui fait la même chose plus vite, au-dessus d'UDP. » → « Quand le
  serveur le propose, les navigateurs récents utilisent **QUIC** (HTTP/3), qui
  rend le même service au-dessus d'UDP en ouvrant la connexion et le
  chiffrement en même temps, ce qui économise un aller-retour. Ce n'est pas le
  cas de `rouages.net` : Apache, le logiciel de notre hébergement, ne gère pas
  HTTP/3 ; notre page arrive donc par TCP, en HTTP/2. » [3-2][3-3][3-7][3-8].
- **Étape 3, Vérifie toi-même** — « colonne « Protocole » (`h2`, `h3`…) » →
  « colonne « Protocole », à ajouter d'un clic droit sur l'en-tête du tableau
  (`h2` pour HTTP/2, `h3` pour HTTP/3) » [3-10].
- **Étape 3, Qui décide ?** — « L'IETF, qui publie les normes (RFC) par
  consensus ouvert » → « L'IETF, qui élabore les normes par « consensus
  approximatif » ouvert à tous ; elles sont publiées sous forme de RFC (mais
  toutes les RFC ne sont pas des normes : certaines sont informatives ou
  expérimentales) » [3-6][4-6].
- **Étape 4, 🟡** — « Le serveur présente un **certificat**, une sorte de carte
  d'identité signée par une autorité reconnue par ton navigateur. Puis les deux
  machines fabriquent ensemble une clé secrète, **sans jamais l'envoyer** sur
  le réseau. Ensuite, tout est chiffré. » → « Les deux machines fabriquent
  ensemble une clé secrète, **sans jamais l'envoyer** sur le réseau. Puis le
  serveur prouve qu'il est bien `rouages.net` : il présente un **certificat**,
  une attestation signée par une autorité reconnue par ton navigateur, et
  signe l'échange avec la clé correspondante. Le certificat garantit le
  **nom** du site, pas l'identité ni l'honnêteté de son propriétaire. Ensuite,
  tout est chiffré. » (dans TLS 1.3, l'échange de clés précède l'envoi du
  certificat, qui voyage déjà chiffré ; un certificat Let's Encrypt ne
  valide que le contrôle du domaine) [4-1][4-14].
- **Étape 4, 🔴** — « `ClientHello` (avec le nom du site, SNI, et une part de
  clé), `ServerHello`, certificat, `Finished` ; échange de clés Diffie-Hellman
  sur courbe elliptique » → « `ClientHello` (nom du site en clair dans
  l'extension SNI, part de clé `key_share`), `ServerHello` (part de clé du
  serveur) ; à partir d'ici tout est chiffré : `EncryptedExtensions`,
  `Certificate`, `CertificateVerify` (signature prouvant la possession de la
  clé privée), `Finished`. Échange de clés Diffie-Hellman éphémère sur courbe
  elliptique (souvent X25519, de plus en plus en version hybride
  post-quantique X25519MLKEM768 dans Chrome). » [4-1][4-2][4-12].
- **Étape 4, 🔴** — « journaux *Certificate Transparency* » → « journaux
  publics *Certificate Transparency* (RFC 6962, expérimentale ; exigés par
  Chrome et Safari) : tout certificat de `rouages.net` y est visible, par
  exemple sur crt.sh » [4-4][4-5][4-7][4-8][4-16].
- **Étape 4, 🔴** — « Sur un hébergement cPanel, le certificat est souvent
  délivré automatiquement (AutoSSL, Let's Encrypt). » → « …(AutoSSL de cPanel,
  dont Let's Encrypt est le fournisseur par défaut des nouvelles installations ;
  certificats valables 90 jours, renouvelés automatiquement) » [4-13][4-14].
- **Étape 4, Mythes** — « le nom du site reste souvent visible » → « le nom du
  site reste souvent visible (SNI, requête DNS) ; la nouvelle extension ECH
  (RFC 9849, mars 2026), déjà gérée par Chrome et Firefox, peut le masquer si
  le serveur la prend en charge, ce qui n'est pas le cas d'un Apache mutualisé
  classique » [4-2][4-3][4-11].
- **Étape 4, Animation (pots de peinture)** — garder, mais ajouter une phrase
  de limite : « Dans la vraie vie, la « peinture » est un calcul facile à faire
  et très difficile à défaire (logarithme discret, courbes elliptiques). Et
  ce mélange seul ne dit pas **avec qui** on parle : c'est le rôle du
  certificat. » Encart histoire : « Diffie et Hellman (1976) ; Ralph Merkle
  avait eu indépendamment une idée voisine » [4-17][4-18].
- **Étape 4, Vérifie toi-même** — « clic sur le cadenas → certificat » → « clic
  sur l'icône à gauche de l'adresse (cadenas dans Firefox et Safari ; dans
  Chrome, le cadenas a été remplacé en 2023 par une icône « réglages ») →
  certificat (émetteur, dates) » [4-19].
- **Étape 5, 🟡** — « puis passent d'un réseau à l'autre (opérateurs,
  hébergeurs) dans des **points d'échange** (en France, par exemple dans des
  datacenters de la région parisienne) » → « …dans des **points d'échange**
  (France-IX, par exemple, est présent à Paris, Marseille, Lyon, Lille et
  Toulouse) ou par des liaisons directes entre réseaux, gratuites (*peering*)
  ou payantes (*transit*) » [5-12].
- **Étape 5, 🔴** — « TTL décrémenté à chaque routeur » → « TTL (IPv4) ou
  *Hop Limit* (IPv6) décrémenté à chaque routeur ; à zéro, le routeur jette le
  paquet et renvoie un message ICMP « Time Exceeded », ce qu'exploite
  `traceroute` » [5-1][5-2][5-3].
- **Étape 5, 🔴** — « RPKI pour sécuriser les annonces » → « RPKI pour
  vérifier qu'un réseau a le droit d'annoncer un bloc d'adresses (validation
  d'origine) ; cela n'empêche pas toutes les fuites de route » [5-5][5-6].
- **Étape 5, 🔴** — « RIPE NCC pour l'Europe » → « RIPE NCC pour l'Europe, le
  Moyen-Orient et l'Asie centrale » [5-8][5-9].
- **Étape 5, Interaction** — « simuler une erreur d'annonce BGP (une « fuite de
  route ») » → garder, mais distinguer dans l'encart : **fuite de route**
  (annonce relayée au-delà de ce qui était prévu, RFC 7908 ; ex. 24 juin 2019,
  DQE et Verizon, Cloudflare touché) et **détournement** (un réseau annonce des
  adresses qui ne sont pas les siennes ; ex. Pakistan Telecom et YouTube, 24
  février 2008) [5-7][5-10][5-11].
- **Étape 5, Mythes** — « l'immense majorité du trafic intercontinental passe
  par câble » → « …(plus de 99 % selon TeleGeography, qui précise que ce n'est
  pas une mesure exacte) » ; voir `sources/internet.md`, section « Câbles
  sous-marins ».
- **Étape 5, Qui décide ?** — « l'Arcep et la **neutralité du net** (règlement
  européen de 2015) » → « …(règlement (UE) 2015/2120 du 25 novembre 2015,
  applicable depuis le 30 avril 2016 ; l'Arcep en contrôle l'application en
  France depuis la loi pour une République numérique de 2016) » [5-13][5-14].
- **Étape 6, 🟡** — « un même serveur héberge des centaines de sites » → « un
  même serveur héberge de nombreux sites » (chiffre non vérifiable).
- **Étape 6, 🔴** — « `GET / HTTP/2` avec les en-têtes `Host` (ou
  `:authority`) » → « en HTTP/2, pas de ligne de requête mais des
  pseudo-en-têtes : `:method: GET`, `:scheme: https`, `:authority:
  rouages.net`, `:path: /` (l'équivalent de `GET / HTTP/1.1` + `Host:` en
  HTTP/1.1), puis `Accept-Encoding`, `User-Agent`… » [6-2][6-3][6-4].
- **Étape 6, Vérifie toi-même** — ajouter : « La ligne `server:` peut afficher
  `nginx` : beaucoup d'hébergeurs cPanel placent un serveur nginx devant
  Apache. » (le domaine répond aujourd'hui `server: nginx`) [0-3].
- **Étape 6, Qui décide ?** — « le W3C et le WHATWG pour HTML » → « le WHATWG
  pour HTML (« Living Standard ») ; depuis l'accord du 28 mai 2019, le W3C
  endosse des instantanés de ce texte comme Recommandations » [6-10][6-11].
- **Étape 7, 🟡** — « Il les demande sur la même connexion, en parallèle. » →
  « En HTTP/2 ou HTTP/3, il les demande sur la même connexion, en parallèle
  (multiplexage). » [6-4].
- **Étape 7, Qui décide ?** — « la CNIL et le RGPD (consentement aux cookies) »
  → « la directive européenne « ePrivacy », transposée à l'article 82 de la
  loi Informatique et Libertés, impose le consentement pour la plupart des
  cookies ; le RGPD définit ce qu'est un consentement valable ; la CNIL
  contrôle et sanctionne » ; « les navigateurs (blocage des cookies tiers) » →
  « les navigateurs : Safari bloque les cookies tiers par défaut depuis 2020,
  Firefox les cloisonne par défaut depuis 2022 ; Chrome a renoncé en 2025 à
  les supprimer par défaut » [7-3][7-4][7-5][7-6].
- **Étape 8, 🔴** — « Métriques : First Contentful Paint, Largest Contentful
  Paint. » → « …(définies par le W3C : *Paint Timing* et *Largest Contentful
  Paint*, encore au stade de brouillons de travail ; Google recommande un LCP
  de 2,5 s au plus) » [8-3][8-4][8-5].
- **Encart final** — « Erreur 500 / 503 — Le serveur est en panne ou
  surchargé » → « 500 : erreur interne du serveur (souvent une erreur de
  configuration ou de programme) ; 503 : service indisponible (surcharge ou
  maintenance) » [6-2]. « Votre connexion n'est pas privée » : ajouter « (ou
  horloge de ton ordinateur mal réglée) » *(nuance non sourcée ici)*.
- **Réalisation, Navigation Timing** — préciser « Navigation Timing Level 2
  (W3C, brouillon de travail) : `domainLookupStart`/`End` (DNS),
  `connectStart`, `secureConnectionStart` (TLS), `responseStart`… » [8-2].

## Étape 0 — Avant même d'appuyer sur Entrée

**Faits vérifiés**
- `203.0.113.0/24` (TEST-NET-3) est réservé à la documentation par la RFC
  5737, avec 192.0.2.0/24 et 198.51.100.0/24 [0-1].
- HSTS est défini par la RFC 6797 (2012), qui prévoit aussi une liste
  « préchargée » d'hôtes dans le navigateur (§ 12.3) [0-2].
- La liste de préchargement est tenue par Chrome (hstspreload.org) ; Firefox,
  Safari et Edge ont des listes fondées sur celle de Chrome. Le même site note
  que Chrome et Safari mettent désormais à niveau toutes les navigations HTTP
  vers HTTPS [0-3].
- `rouages.net` n'est pas préchargé (statut « unknown » sur l'API
  hstspreload, 11/10/2026) ; le serveur qui répond aujourd'hui envoie
  `strict-transport-security: max-age=63072000; includeSubdomains` [0-3][0-4] ;
  le `.htaccess` du projet (`public/.htaccess`) force HTTPS par redirection
  301 mais n'envoie pas d'en-tête HSTS (constat dans le dépôt).
- Chrome 90 (2021) tente HTTPS par défaut pour les adresses tapées sans
  protocole, avec retour à HTTP en cas d'échec, sauf pour les sites de la liste
  HSTS préchargée [0-5] ; depuis 2023, Chrome met aussi à niveau les liens
  `http://`, avec retour automatique en cas d'échec [0-6].
- Chargement spéculatif : préconnexion (DNS + TCP + TLS) et préaffichage ;
  Chrome préaffiche automatiquement les pages quand il est très confiant d'après
  ce qui est tapé dans la barre d'adresse [0-7].
- Analyse d'URL (schéma, hôte, chemin) : URL Standard du WHATWG [0-8].

**Sources**
0-1. J. Arkko, M. Cotton, L. Vegoda, « IPv4 Address Blocks Reserved for Documentation », RFC 5737, IETF, 2010 — https://www.rfc-editor.org/rfc/rfc5737.html — P — en — archive : aucune
0-2. J. Hodges, C. Jackson, A. Barth, « HTTP Strict Transport Security (HSTS) », RFC 6797, IETF, 2012 — https://www.rfc-editor.org/rfc/rfc6797.html — P — en — archive : http://web.archive.org/web/20261002203737/https://www.rfc-editor.org/rfc/rfc6797.html
0-3. Chromium, « HSTS Preload List Submission », hstspreload.org, consulté 2026 — https://hstspreload.org/ (statut du domaine : https://hstspreload.org/api/v2/status?domain=rouages.net) — P — en — archive : aucune
0-4. Mesures de l'auteur·e de la vérification, 11/10/2026 : `curl -I https://rouages.net/` (en-têtes `server: nginx`, `strict-transport-security`, titre WordPress) ; Google Public DNS, https://dns.google/resolve?name=rouages.net&type=NS — P (observation) — en — archive : aucune
0-5. Chromium Blog, « A safer default for navigation: HTTPS », 2021 — https://blog.chromium.org/2021/03/a-safer-default-for-navigation-https.html — P — en — archive : aucune
0-6. Chromium Blog, « Towards HTTPS by default », août 2023 — https://blog.chromium.org/2023/08/towards-https-by-default.html — P — en — archive : http://web.archive.org/web/20261010081043/https://blog.chromium.org/2023/08/towards-https-by-default.html
0-7. MDN, « Speculative loading », Mozilla, consulté 2026 — https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Speculative_loading — S — en — archive : http://web.archive.org/web/20260925184820/https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Speculative_loading
0-8. WHATWG, « URL Standard », Living Standard — https://url.spec.whatwg.org/ — P — en — archive : http://web.archive.org/web/20261010055333/https://url.spec.whatwg.org/

## Étape 1 — Le nom devient une adresse (DNS)

**Faits vérifiés**
- DNS : RFC 1034 (concepts ; distingue les modes « récursif » et
  « itératif ») et RFC 1035 (implémentation ; UDP et TCP sur le port 53,
  messages UDP limités à 512 octets sans extension) [1-1][1-2]. La formule
  « itérative par le résolveur, récursive du point de vue du client » est
  exacte.
- `AAAA` : RFC 3596 [1-3]. DoH : RFC 8484 (octobre 2018) [1-4]. DoT : RFC 7858,
  TCP port 853 [1-5]. Enregistrements SVCB/HTTPS : RFC 9460 (novembre 2023),
  avec paramètre `alpn` (ex. `h3`) [1-6].
- DNSSEC : la RFC 9364 (BCP 237) fait de DNSSEC la bonne pratique pour
  l'**authentification de l'origine** des données DNS ; DNSSEC ne chiffre pas
  [1-7]. `rouages.net` a un enregistrement DS dans `.net` et les réponses sont
  validées (drapeau AD) [1-17].
- Minimisation de QNAME : RFC 9156 [1-8].
- Racine : 13 serveurs racine exploités par 12 organisations indépendantes ;
  « 2047 operational instances » au 11/10/2026 [1-9]. Les noms des serveurs
  de `.net` sont publiés dans la zone racine avec un TTL de 172 800 s (2 jours)
  [1-11].
- `.net` : opérateur VeriSign, Inc. ; contrat de registre avec l'ICANN daté du
  1er juillet 2023 [1-12] ; la base IANA indique « VeriSign Global Registry
  Services » [1-13]. Les fonctions IANA sont assurées par Public Technical
  Identifiers (PTI), filiale de l'ICANN [1-10].
- Histoire : la RFC 882 (Mockapetris, novembre 1983) part des problèmes de
  taille de la table HOSTS.TXT tenue au SRI-NIC [1-14] (voir aussi
  `sources/internet.md`, fiche Feinler).
- Chrome passe automatiquement en DoH si le résolveur configuré le permet
  (« same-provider upgrade », 2020) [1-15].
- Blocage en France :
  - Piratage sportif (art. L. 333-10 du code du sport, depuis le 1er janvier
    2022) : le président du tribunal judiciaire ordonne le blocage ; l'Arcom
    notifie ensuite les nouveaux services aux destinataires de l'ordonnance
    [1-18]. En 2022, 787 noms de domaine de sites miroirs ont ainsi été
    notifiés aux FAI [1-19]. En 2025, plus de 5 000 demandes de blocage ont été
    notifiées aux « DNS alternatifs », et les VPN font l'objet de premières
    décisions (mai 2025) [1-20].
  - Mise en œuvre DNS : les FAI ont configuré leurs propres résolveurs pour
    renvoyer de fausses réponses ; Canal+ a ensuite visé les résolveurs publics
    de Cloudflare, Google et Cisco, et Cisco a retiré OpenDNS de France en juin
    2024 [1-21][1-22].
  - Blocage administratif (contenus terroristes et pédocriminels, art. 6-1 de
    la LCEN) : liste notifiée par l'OCLCTIC (police), contrôle par une
    personnalité qualifiée désignée au sein de l'Arcom [1-23]. Le décret
    n° 2015-125 impose aux FAI d'empêcher l'accès aux noms de domaine listés
    « par tout moyen approprié » dans les 24 heures, avec redirection vers une
    page du ministère de l'Intérieur [1-24].
  - Loi SREN du 21 mai 2024 : l'Arcom peut elle-même demander aux FAI, aux
    fournisseurs de résolution de noms de domaine et aux moteurs de recherche
    de bloquer ou déréférencer un site pornographique accessible aux mineurs
    (communiqué du 6 mars 2025) [1-25].

**Sources**
1-1. P. Mockapetris, « Domain Names — Concepts and Facilities », RFC 1034, IETF, 1987 — https://www.rfc-editor.org/rfc/rfc1034.html — P — en — archive : http://web.archive.org/web/20261009220506/https://www.rfc-editor.org/rfc/rfc1034.html
1-2. P. Mockapetris, « Domain Names — Implementation and Specification », RFC 1035, IETF, 1987 — https://www.rfc-editor.org/rfc/rfc1035.html — P — en — archive : aucune
1-3. S. Thomson et al., « DNS Extensions to Support IP Version 6 », RFC 3596, IETF, 2003 — https://www.rfc-editor.org/rfc/rfc3596.html — P — en — archive : aucune
1-4. P. Hoffman, P. McManus, « DNS Queries over HTTPS (DoH) », RFC 8484, IETF, 2018 — https://www.rfc-editor.org/rfc/rfc8484.html — P — en — archive : aucune
1-5. Z. Hu et al., « Specification for DNS over Transport Layer Security (TLS) », RFC 7858, IETF, 2016 — https://www.rfc-editor.org/rfc/rfc7858.html — P — en — archive : http://web.archive.org/web/20260925003251/https://www.rfc-editor.org/rfc/rfc7858.html
1-6. B. Schwartz, M. Bishop, E. Nygren, « Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records) », RFC 9460, IETF, 2023 — https://www.rfc-editor.org/rfc/rfc9460.html — P — en — archive : http://web.archive.org/web/20261010082031/https://www.rfc-editor.org/rfc/rfc9460.html
1-7. P. Hoffman, « DNS Security Extensions (DNSSEC) », RFC 9364 / BCP 237, IETF, 2023 — https://www.rfc-editor.org/rfc/rfc9364.html — P — en — archive : http://web.archive.org/web/20261009164341/https://www.rfc-editor.org/rfc/rfc9364.html
1-8. S. Bortzmeyer, R. Dolmans, P. Hoffman, « DNS Query Name Minimisation to Improve Privacy », RFC 9156, IETF, 2021 — https://www.rfc-editor.org/rfc/rfc9156.html — P — en — archive : aucune
1-9. Root Server Technical Operations Association, « root-servers.org » (compteur daté 2026-10-11T20:08Z) — https://root-servers.org/ — P — en — archive : aucune
1-10. IANA, « Root Zone Management » — https://www.iana.org/domains/root — P — en — archive : aucune
1-11. IANA / InterNIC, fichier de la zone racine (entrée `net.` : TTL 172800) — https://www.internic.net/domain/root.zone — P — en — archive : non recherchée (fichier quotidien)
1-12. ICANN, « .net Registry Agreement » (opérateur VeriSign, Inc., accord du 1er juillet 2023) — https://www.icann.org/en/registry-agreements/details/net — P — en — archive : http://web.archive.org/web/20261003050320/https://www.icann.org/en/registry-agreements/details/net
1-13. IANA, « Delegation Record for .NET » — https://www.iana.org/domains/root/db/net.html — P — en — archive : aucune
1-14. P. Mockapetris, « Domain Names — Concepts and Facilities », RFC 882, IETF, novembre 1983 — https://www.rfc-editor.org/rfc/rfc882.html — P — en — archive : aucune
1-15. Chromium Blog, « A safer and more private browsing experience with Secure DNS », mai 2020 — https://blog.chromium.org/2020/05/a-safer-and-more-private-browsing-DoH.html — P — en — archive : aucune
1-17. Google Public DNS, réponses JSON pour `rouages.net` (types NS, DS, A, AAAA, HTTPS ; 11/10/2026) — https://dns.google/resolve?name=rouages.net&type=DS — P (observation) — en — archive : aucune
1-18. Arcom, « Lutte contre le piratage des retransmissions sportives » — https://www.arcom.fr/nous-connaitre-nos-missions/promouvoir-et-proteger-la-creation/lutte-contre-le-piratage-des-retransmissions-sportives — P — fr — archive : aucune
1-19. Arcom, APPS, FFTélécoms, communiqué de presse sur l'accord de lutte contre le piratage sportif, janvier 2023 — https://arcom.fr/sites/default/files/2023-01/Communique_presse_accord_FFT_APPS.pdf — P — fr — archive : http://web.archive.org/web/20230118185127/https://www.arcom.fr/sites/default/files/2023-01/Communique_presse_accord_FFT_APPS.pdf
1-20. Arcom, « Recommandation de l'Arcom du 6 mai 2026 accompagnant la publication de modèles d'accord prévus à l'article L333-10 du code du sport », 2026 — https://www.arcom.fr/se-documenter/espace-juridique/textes-juridiques/recommandation-de-larcom-du-6-mai-2026-accompagnant-la-publication-de-modeles-daccord-prevus-larticle-l333-10-du-code-du-sport — P — fr — archive : http://web.archive.org/web/20260525153737/https://www.arcom.fr/se-documenter/espace-juridique/textes-juridiques/recommandation-de-larcom-du-6-mai-2026-accompagnant-la-publication-de-modeles-daccord-prevus-larticle-l333-10-du-code-du-sport
1-21. Andy Maxwell, « OpenDNS Suspends Service in France Due to Canal+ Piracy Blocking Order », TorrentFreak, 29/06/2024 — https://torrentfreak.com/opendns-suspends-service-in-france-due-to-canal-piracy-blocking-order-240629/ — Pr (presse spécialisée) — en — archive : http://web.archive.org/web/20261005100238/https://torrentfreak.com/opendns-suspends-service-in-france-due-to-canal-piracy-blocking-order-240629/
1-22. Clubic, « Piratage : Canal+ attaque Cisco, Cloudflare et Google pour qu'ils bloquent plusieurs sites de streaming illégaux », 26/12/2023 — https://www.clubic.com/actualite-513589-piratage-canal-attaque-cisco-cloudflare-et-google-pour-qu-ils-bloquent-plusieurs-sites-de-streaming-illegaux.html — Pr — fr — archive : http://web.archive.org/web/20260517235728/https://www.clubic.com/actualite-513589-piratage-canal-attaque-cisco-cloudflare-et-google-pour-qu-ils-bloquent-plusieurs-sites-de-streaming-illegaux.html
1-23. Arcom, « Rapport d'activité 2022 de la personnalité qualifiée », 2023 — https://www.arcom.fr/sites/default/files/2023-04/Rapport%20activit%C3%A9%202022%20de%20la%20personnalite%20qualifiee%20-%20Arcom.pdf — P — fr — archive : aucune
1-24. Décret n° 2015-125 du 5 février 2015 relatif au blocage des sites provoquant à des actes de terrorisme ou en faisant l'apologie et des sites diffusant des images et représentations de mineurs à caractère pornographique, Légifrance — https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030195477 — P — fr — archive : http://web.archive.org/web/20250821115047/https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030195477 *(lu via un outil de lecture : Légifrance refuse les requêtes automatisées en ligne de commande, HTTP 403)*
1-25. Arcom, « Pornographie en ligne : de nouvelles étapes franchies pour la protection des mineurs », 06/03/2025 — https://www.arcom.fr/presse/pornographie-en-ligne-de-nouvelles-etapes-franchies-pour-la-protection-des-mineurs — P — fr — archive : http://web.archive.org/web/20260716140935/https://www.arcom.fr/presse/pornographie-en-ligne-de-nouvelles-etapes-franchies-pour-la-protection-des-mineurs

## Étape 2 — Ta box et ton réseau local

**Faits vérifiés**
- `192.168.0.0/16` est l'un des trois blocs privés de la RFC 1918 (avec
  `10.0.0.0/8` et `172.16.0.0/12`) [2-1].
- `100.64.0.0/10` est l'espace partagé réservé aux NAT d'opérateur (CGN),
  entre l'équipement du client et le CGN (RFC 6598) [2-2].
- DHCP : RFC 2131 [2-3]. ARP : RFC 826 (1982) [2-4]. NDP, qui remplace ARP en
  IPv6 : RFC 4861 [2-5]. NAT avec traduction de ports (NAPT) : RFC 3022 [2-6].
  Adresses IPv6 « Global Unicast » : RFC 4291 [2-7].
- Arcep : la pénurie d'IPv4 conduit les opérateurs à partager une même
  adresse IPv4 entre plusieurs utilisateurs, « y compris sur la fibre
  optique » ; fin 2025, 94 % des clients fixes et 83 % des clients mobiles ont
  IPv6 activé [2-8] ; le baromètre 2024 détaille, par opérateur, le partage
  d'IPv4 (CGN) et l'option d'IPv4 dédiée [2-9].
- Wi-Fi : normes du groupe de travail IEEE 802.11 [2-10].
- Perlman et l'arbre couvrant : déjà sourcé dans `sources/internet.md`.

**Sources**
2-1. Y. Rekhter et al., « Address Allocation for Private Internets », RFC 1918, IETF, 1996 — https://www.rfc-editor.org/rfc/rfc1918.html — P — en — archive : http://web.archive.org/web/20261006011403/https://www.rfc-editor.org/rfc/rfc1918.html
2-2. J. Weil et al., « IANA-Reserved IPv4 Prefix for Shared Address Space », RFC 6598, IETF, 2012 — https://www.rfc-editor.org/rfc/rfc6598.html — P — en — archive : http://web.archive.org/web/20261006011403/https://www.rfc-editor.org/rfc/rfc6598.html
2-3. R. Droms, « Dynamic Host Configuration Protocol », RFC 2131, IETF, 1997 — https://www.rfc-editor.org/rfc/rfc2131.html — P — en — archive : http://web.archive.org/web/20260910070737/https://www.rfc-editor.org/rfc/rfc2131.html
2-4. D. Plummer, « An Ethernet Address Resolution Protocol », RFC 826, 1982 — https://www.rfc-editor.org/rfc/rfc826.html — P — en — archive : aucune
2-5. T. Narten et al., « Neighbor Discovery for IP version 6 (IPv6) », RFC 4861, IETF, 2007 — https://www.rfc-editor.org/rfc/rfc4861.html — P — en — archive : aucune
2-6. P. Srisuresh, K. Egevang, « Traditional IP Network Address Translator (Traditional NAT) », RFC 3022, IETF, 2001 — https://www.rfc-editor.org/rfc/rfc3022.html — P — en — archive : http://web.archive.org/web/20261006105452/https://www.rfc-editor.org/rfc/rfc3022.html
2-7. R. Hinden, S. Deering, « IP Version 6 Addressing Architecture », RFC 4291, IETF, 2006 — https://www.rfc-editor.org/rfc/rfc4291.html — P — en — archive : aucune
2-8. Arcep, « Baromètre annuel de la transition vers IPv6 en France » (édition 2025-2026) — https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/transition-ipv6/barometre-annuel-de-la-transition-vers-ipv6-en-france.html — P — fr — archive : http://web.archive.org/web/20260825190226/https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/transition-ipv6/barometre-annuel-de-la-transition-vers-ipv6-en-france.html
2-9. Arcep, « Baromètre annuel de la transition vers IPv6 », juillet 2024 (annexe 6.3 « Partage d'IPv4 ») — https://www.arcep.fr/fileadmin/reprise/observatoire/ipv6/Arcep_Barometre_2024_de_la_transition_vers_IPv6.pdf — P — fr — archive : aucune
2-10. IEEE, « IEEE 802.11, The Working Group Setting the Standards for Wireless LANs » — https://www.ieee802.org/11/ — P — en — archive : http://web.archive.org/web/20261004191410/https://ieee802.org/11/

## Étape 3 — Ouvrir la liaison (TCP ou QUIC)

**Faits vérifiés**
- TCP : RFC 9293 (2022), qui rend obsolète la RFC 793 ; poignée de main en
  trois temps [3-1].
- QUIC : RFC 9000, « A UDP-Based Multiplexed and Secure Transport » ; « The
  QUIC handshake combines negotiation of cryptographic and transport
  parameters » ; intégration de TLS 1.3 décrite dans la RFC 9001, avec 1-RTT et
  0-RTT [3-2][3-3].
- HTTP/3 : RFC 9114 ; découverte d'un point d'accès HTTP/3 (§ 3.1) par
  `Alt-Svc` (RFC 7838) ou enregistrement DNS `HTTPS` (RFC 9460) [3-4][3-5][1-6].
- IETF : décision par « rough consensus » (RFC 7282) [3-6].
- Apache httpd 2.4 : l'index des modules contient `mod_http2` (HTTP/2, `h2`
  négocié par ALPN) mais aucun module HTTP/3/QUIC [3-7][3-8] ; un dépôt de
  paquets tiers confirme qu'Apache n'a pas de prise en charge HTTP/3 en
  production dans sa version stable 2.4.68 (août 2026), seulement un module
  externe expérimental [3-9]. Le domaine `rouages.net` répond aujourd'hui en
  HTTP/2 sans en-tête `Alt-Svc` [0-4].
- Outils de développement Chrome : colonne « Protocol » (h2, h3) disponible
  parmi les colonnes à ajouter par clic droit [3-10].
- Histoire Pouzin / Cerf-Kahn : déjà sourcé dans `sources/internet.md`.

**Sources**
3-1. W. Eddy (dir.), « Transmission Control Protocol (TCP) », RFC 9293, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9293.html — P — en — archive : aucune
3-2. J. Iyengar, M. Thomson (dir.), « QUIC: A UDP-Based Multiplexed and Secure Transport », RFC 9000, IETF, 2021 — https://www.rfc-editor.org/rfc/rfc9000.html — P — en — archive : http://web.archive.org/web/20261008134352/https://www.rfc-editor.org/rfc/rfc9000.html
3-3. M. Thomson, S. Turner (dir.), « Using TLS to Secure QUIC », RFC 9001, IETF, 2021 — https://www.rfc-editor.org/rfc/rfc9001.html — P — en — archive : aucune
3-4. M. Bishop (dir.), « HTTP/3 », RFC 9114, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9114.html — P — en — archive : http://web.archive.org/web/20261007131049/https://www.rfc-editor.org/rfc/rfc9114.html
3-5. M. Nottingham, P. McManus, J. Reschke, « HTTP Alternative Services », RFC 7838, IETF, 2016 — https://www.rfc-editor.org/rfc/rfc7838.html — P — en — archive : aucune
3-6. P. Resnick, « On Consensus and Humming in the IETF », RFC 7282, IETF, 2014 — https://www.rfc-editor.org/rfc/rfc7282.html — P — en — archive : aucune
3-7. Apache Software Foundation, « Module Index », Apache HTTP Server 2.4 — https://httpd.apache.org/docs/2.4/mod/ — P — en — archive : aucune
3-8. Apache Software Foundation, « HTTP/2 guide » — https://httpd.apache.org/docs/2.4/howto/http2.html — P — en — archive : http://web.archive.org/web/20260915201946/https://httpd.apache.org/docs/2.4/howto/http2.html
3-9. CodeIT, « Apache Still Lacks HTTP/3: Why PR #699 Could Finally Help Change That », 2026 — https://codeit.guru/apache-http3-pr-699-mpm-quic-backport-2-4-68/ — S (empaqueteur tiers) — en — archive : aucune
3-10. Google, « Network features reference », Chrome DevTools — https://developer.chrome.com/docs/devtools/network/reference — P — en — archive : http://web.archive.org/web/20261010072240/https://developer.chrome.com/docs/devtools/network/reference

## Étape 4 — Le cadenas (TLS)

**Faits vérifiés**
- TLS 1.3 : RFC 8446 (2018) ; extensions `key_share` et `server_name` dans le
  `ClientHello` ; le serveur envoie `EncryptedExtensions`, `Certificate`,
  `CertificateVerify`, `Finished` sous protection après le `ServerHello`
  [4-1].
- SNI : extension `server_name`, RFC 6066 [4-2].
- ECH : RFC 9849 « TLS Encrypted Client Hello », mars 2026, voie normative
  (Standards Track) [4-3] ; activé par défaut dans Chrome 117 et livré dans
  Firefox ; nécessite que le site publie un enregistrement DNS `HTTPS` avec la
  configuration ECH [4-11].
- Certificate Transparency : RFC 6962 (2013, catégorie expérimentale) et RFC
  9162 (CT 2.0, 2021, expérimentale, rend obsolète la 6962) [4-4][4-5] ;
  Chrome et Apple imposent leurs politiques CT [4-7][4-8].
- Le CA/Browser Forum est un regroupement volontaire d'autorités de
  certification et d'éditeurs de navigateurs [4-9] ; chaque navigateur gère
  son programme racine (ex. Mozilla Root Store Policy) [4-10].
- Chrome a déployé l'échange de clés hybride post-quantique (X25519 + ML-KEM,
  code TLS 0x11EC) à partir de Chrome 131 [4-12].
- cPanel : « Let's Encrypt™ is the default AutoSSL provider for all new
  installations » ; AutoSSL installe des certificats validés par domaine
  [4-13]. Let's Encrypt (ISRG) délivre gratuitement des certificats DV
  uniquement, valables 90 jours par défaut [4-14][4-15].
- Les certificats de `rouages.net` apparaissent dans les journaux CT (crt.sh) ;
  les plus récents sont émis par Let's Encrypt (août 2026) [4-16].
- W. Diffie & M. Hellman, « New Directions in Cryptography », *IEEE Trans.
  Inf. Theory* IT-22(6), novembre 1976 [4-17] ; Hellman (1978) écrit que
  Merkle a proposé « indépendamment » une approche voisine [4-18].
- Chrome a remplacé le cadenas de la barre d'adresse par une icône « tune »
  (réglages) [4-19].
- Analogie des pots de peinture : juste pour l'idée (mélange facile à faire,
  difficile à défaire ; seul le mélange circule). Limites à dire : la
  difficulté réelle est mathématique (logarithme discret) et l'échange seul
  n'authentifie personne (attaque de l'homme du milieu), d'où le certificat
  et `CertificateVerify` [4-1][4-17].

**Sources**
4-1. E. Rescorla, « The Transport Layer Security (TLS) Protocol Version 1.3 », RFC 8446, IETF, 2018 — https://www.rfc-editor.org/rfc/rfc8446.html — P — en — archive : http://web.archive.org/web/20261009042758/https://www.rfc-editor.org/rfc/rfc8446.html
4-2. D. Eastlake 3rd, « Transport Layer Security (TLS) Extensions: Extension Definitions », RFC 6066, IETF, 2011 — https://www.rfc-editor.org/rfc/rfc6066.html — P — en — archive : aucune
4-3. E. Rescorla, K. Oku, N. Sullivan, C. A. Wood, « TLS Encrypted Client Hello », RFC 9849, IETF, mars 2026 — https://www.rfc-editor.org/rfc/rfc9849.html — P — en — archive : aucune
4-4. B. Laurie, A. Langley, E. Kasper, « Certificate Transparency », RFC 6962, IETF, 2013 — https://www.rfc-editor.org/rfc/rfc6962.html — P — en — archive : aucune
4-5. B. Laurie et al., « Certificate Transparency Version 2.0 », RFC 9162, IETF, 2021 — https://www.rfc-editor.org/rfc/rfc9162.html — P — en — archive : aucune
4-6. IETF, « RFCs » (processus de normalisation) — https://www.ietf.org/process/rfcs/ — P — en — archive : aucune
4-7. Google, « Chrome Certificate Transparency Policy » — https://googlechrome.github.io/CertificateTransparency/ct_policy.html — P — en — archive : aucune
4-8. Apple, « Apple's Certificate Transparency policy » — https://support.apple.com/en-us/103214 — P — en — archive : http://web.archive.org/web/20261003150957/https://support.apple.com/en-us/103214
4-9. CA/Browser Forum, page d'accueil — https://cabforum.org/ — P — en — archive : aucune
4-10. Mozilla, « Mozilla's CA Certificate Program » — https://wiki.mozilla.org/CA — P — en — archive : http://web.archive.org/web/20261003215113/https://wiki.mozilla.org/CA
4-11. Chrome Platform Status, « TLS Encrypted Client Hello (ECH) » (activé par défaut : Chrome 117 ; Firefox : « Shipped ») — https://chromestatus.com/feature/6196703843581952 — P — en — archive : aucune
4-12. Google Security Blog, « A new path for Kyber on the web », septembre 2024 — https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html — P — en — archive : http://web.archive.org/web/20261003145819/https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html
4-13. cPanel, « Manage AutoSSL », documentation WHM — https://docs.cpanel.net/whm/ssl-tls/manage-autossl/ — P — en — archive : http://web.archive.org/web/20260622203903/https://docs.cpanel.net/whm/ssl-tls/manage-autossl/
4-14. Let's Encrypt, « FAQ » — https://letsencrypt.org/docs/faq/ — P — en — archive : http://web.archive.org/web/20261009101216/https://letsencrypt.org/docs/faq/
4-15. Let's Encrypt, « About Let's Encrypt » — https://letsencrypt.org/about/ — P — en — archive : http://web.archive.org/web/20261009144453/https://letsencrypt.org/about/
4-16. crt.sh (Sectigo), recherche CT pour `rouages.net` (11/10/2026 ; service parfois indisponible, HTTP 502 lors d'un second essai) — https://crt.sh/?q=rouages.net&output=json&exclude=expired — P (observation) — en — archive : aucune
4-17. W. Diffie, M. Hellman, « New Directions in Cryptography », *IEEE Transactions on Information Theory*, IT-22(6), 1976 (copie Stanford) — https://ee.stanford.edu/~hellman/publications/24.pdf — P — en — archive : http://web.archive.org/web/20261002105324/https://ee.stanford.edu/%7Ehellman/publications/24.pdf
4-18. M. Hellman, « An Overview of Public Key Cryptography », *IEEE Communications Society Magazine*, 1978 (copie Stanford) — https://ee.stanford.edu/~hellman/publications/31.pdf — P — en — archive : http://web.archive.org/web/20260301074914/https://ee.stanford.edu/~hellman/publications/31.pdf
4-19. Chromium Blog, « An Update on the Lock Icon », mai 2023 — https://blog.chromium.org/2023/05/an-update-on-lock-icon.html — P — en — archive : aucune

## Étape 5 — Le voyage des paquets

**Faits vérifiés**
- TTL : champ de l'en-tête IPv4 (RFC 791) [5-1] ; les routeurs renvoient un
  ICMP « Time Exceeded » quand il expire (RFC 1812) [5-2] ; IPv6 utilise
  « Hop Limit » (RFC 8200) [5-3].
- BGP-4 : RFC 4271, « inter-Autonomous System routing protocol » [5-4].
- RPKI : architecture RFC 6480, avec les ROA (autorisations d'origine) [5-5] ;
  validation d'origine des préfixes : RFC 6811 [5-6]. « Fuite de route »
  définie par la RFC 7908 [5-7].
- IANA alloue des blocs aux RIR [5-8] ; cinq RIR : AFRINIC, APNIC, ARIN,
  LACNIC, RIPE NCC ; le RIPE NCC couvre « Europe, the Middle East, and Central
  Asia » [5-8][5-9].
- 24 février 2008 : Pakistan Telecom (AS17557) annonce sans autorisation
  208.65.153.0/24 ; PCCW (AS3491) la propage ; le trafic de YouTube est
  détourné à l'échelle mondiale (étude RIPE NCC) [5-10].
- 24 juin 2019, 10:30 UTC : fuite de route d'un FAI de Pennsylvanie (DQE,
  AS33154, avec un « optimiseur BGP ») relayée par Verizon (AS701) ; de
  nombreux sites, dont ceux de Cloudflare, deviennent inaccessibles [5-11].
- France-IX propose des services à Paris, Marseille, Lyon/Grenoble, Lille et
  Toulouse [5-12].
- Règlement (UE) 2015/2120 du 25 novembre 2015, applicable à partir du 30 avril
  2016 ; art. 3 § 3 : les FAI traitent « tout le trafic de façon égale », sauf
  notamment pour se conformer à la législation ou aux décisions de justice ou
  d'autorités publiques [5-13]. L'Arcep veille au respect de la neutralité du
  net en France ; la loi pour une République numérique (2016) a étendu ses
  compétences à ce règlement [5-14][5-15].
- Câbles et part du trafic : voir `sources/internet.md`, « Câbles
  sous-marins » (TeleGeography : plus de 99 %, « pas une mesure exacte »).

**Sources**
5-1. J. Postel (dir.), « Internet Protocol », RFC 791, 1981 — https://www.rfc-editor.org/rfc/rfc791.html — P — en — archive : http://web.archive.org/web/20261005155637/https://www.rfc-editor.org/rfc/rfc791.html
5-2. F. Baker (dir.), « Requirements for IP Version 4 Routers », RFC 1812, IETF, 1995 — https://www.rfc-editor.org/rfc/rfc1812.html — P — en — archive : aucune
5-3. S. Deering, R. Hinden, « Internet Protocol, Version 6 (IPv6) Specification », RFC 8200, IETF, 2017 — https://www.rfc-editor.org/rfc/rfc8200.html — P — en — archive : aucune
5-4. Y. Rekhter, T. Li, S. Hares (dir.), « A Border Gateway Protocol 4 (BGP-4) », RFC 4271, IETF, 2006 — https://www.rfc-editor.org/rfc/rfc4271.html — P — en — archive : http://web.archive.org/web/20260928113610/https://www.rfc-editor.org/rfc/rfc4271.html
5-5. M. Lepinski, S. Kent, « An Infrastructure to Support Secure Internet Routing », RFC 6480, IETF, 2012 — https://www.rfc-editor.org/rfc/rfc6480.html — P — en — archive : http://web.archive.org/web/20260425004515/https://www.rfc-editor.org/rfc/rfc6480.html
5-6. P. Mohapatra et al., « BGP Prefix Origin Validation », RFC 6811, IETF, 2013 — https://www.rfc-editor.org/rfc/rfc6811.html — P — en — archive : http://web.archive.org/web/20260817162741/https://www.rfc-editor.org/rfc/rfc6811.html
5-7. K. Sriram et al., « Problem Definition and Classification of BGP Route Leaks », RFC 7908, IETF, 2016 — https://www.rfc-editor.org/rfc/rfc7908.html — P — en — archive : aucune
5-8. IANA, « Number Resources » — https://www.iana.org/numbers — P — en — archive : aucune
5-9. Number Resource Organization, « Regional Internet Registries » — https://www.nro.net/about/rirs/ — P — en — archive : http://web.archive.org/web/20260827074640/https://www.nro.net/about/rirs/
5-10. RIPE NCC, « YouTube Hijacking: A RIPE NCC RIS case study », 2008 — https://www.ripe.net/about-us/news/youtube-hijacking-a-ripe-ncc-ris-case-study/ — P — en — archive : http://web.archive.org/web/20260917181943/https://www.ripe.net/about-us/news/youtube-hijacking-a-ripe-ncc-ris-case-study/
5-11. T. Strickx, « How Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Today », Cloudflare Blog, 24/06/2019 — https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/ — P (opérateur touché) — en (version fr disponible) — archive : aucune
5-12. France-IX, site officiel — https://www.franceix.net/en/ — P — en — archive : http://web.archive.org/web/20260613000312/https://www.franceix.net/en/
5-13. Règlement (UE) 2015/2120 du Parlement européen et du Conseil du 25 novembre 2015, JO L 310 du 26/11/2015 (PDF, Office des publications) — https://publications.europa.eu/resource/cellar/8fdf5d08-93fc-11e5-983e-01aa75ed71a1.0009.01/DOC_1 — P — fr — archive : aucune *(EUR-Lex renvoie HTTP 202 sans contenu aux requêtes automatisées ; page de référence pour le site : https://eur-lex.europa.eu/eli/reg/2015/2120/oj, non lue)*
5-14. Arcep, « La neutralité du net » — https://www.arcep.fr/nos-sujets/la-neutralite-du-net.html — P — fr — archive : aucune
5-15. Arcep, « La neutralité de l'internet » (grand dossier) — https://www.arcep.fr/la-regulation/grands-dossiers-internet-et-numerique/la-neutralite-de-linternet.html — P — fr — archive : http://web.archive.org/web/20260702095218/https://www.arcep.fr/la-regulation/grands-dossiers-internet-et-numerique/la-neutralite-de-linternet.html

## Étape 6 — Le serveur répond

**Faits vérifiés**
- Sémantique HTTP, `Host` et `:authority` (§ 7.2), 200 OK, 404, 500, 503 :
  RFC 9110 [6-2]. HTTP/1.1 et sa ligne de requête : RFC 9112 [6-3]. HTTP/2,
  pseudo-en-têtes et multiplexage : RFC 9113 [6-4]. Cache : RFC 9111 [6-5].
- Apache : hôtes virtuels par nom (comparaison du nom demandé avec
  `ServerName`/`ServerAlias`) [6-6] ; prise en charge de SNI dans `mod_ssl`
  [6-7] ; compression `gzip` avec `mod_deflate` [6-8] ; fichiers `.htaccess`
  soumis à `AllowOverride` [6-9]. Le `public/.htaccess` du projet force HTTPS,
  compresse (DEFLATE), fixe `Cache-Control` et `ErrorDocument 404 /404.html`,
  conformément au scénario (constat dans le dépôt).
- HTML : WHATWG « HTML Living Standard » (mis à jour le 9 octobre 2026) [6-10] ;
  accord W3C–WHATWG du 28 mai 2019 : HTML et DOM développés principalement au
  WHATWG ; le W3C peut endosser des « Review Drafts » comme Recommandations
  [6-11].
- Histoire CERN (premier serveur fin 1990, Nicola Pellow et le navigateur en
  mode ligne) : déjà sourcé dans `sources/internet.md`.

**Sources**
6-2. R. Fielding, M. Nottingham, J. Reschke (dir.), « HTTP Semantics », RFC 9110, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9110.html — P — en — archive : http://web.archive.org/web/20261010022148/https://www.rfc-editor.org/rfc/rfc9110.html
6-3. R. Fielding, M. Nottingham, J. Reschke (dir.), « HTTP/1.1 », RFC 9112, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9112.html — P — en — archive : http://web.archive.org/web/20261009095619/https://www.rfc-editor.org/rfc/rfc9112.html
6-4. M. Thomson, C. Benfield (dir.), « HTTP/2 », RFC 9113, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9113.html — P — en — archive : http://web.archive.org/web/20261006213344/https://www.rfc-editor.org/rfc/rfc9113.html
6-5. R. Fielding, M. Nottingham, J. Reschke (dir.), « HTTP Caching », RFC 9111, IETF, 2022 — https://www.rfc-editor.org/rfc/rfc9111.html — P — en — archive : http://web.archive.org/web/20261007110022/https://www.rfc-editor.org/rfc/rfc9111.html
6-6. Apache Software Foundation, « Name-based Virtual Host Support » — https://httpd.apache.org/docs/2.4/vhosts/name-based.html — P — en — archive : http://web.archive.org/web/20260915203548/https://httpd.apache.org/docs/2.4/vhosts/name-based.html
6-7. Apache Software Foundation, « Apache Module mod_ssl » — https://httpd.apache.org/docs/2.4/mod/mod_ssl.html — P — en — archive : aucune
6-8. Apache Software Foundation, « Apache Module mod_deflate » — https://httpd.apache.org/docs/2.4/mod/mod_deflate.html — P — en — archive : aucune
6-9. Apache Software Foundation, « Apache HTTP Server Tutorial: .htaccess files » — https://httpd.apache.org/docs/2.4/howto/htaccess.html — P — en — archive : aucune
6-10. WHATWG, « HTML Living Standard » — https://html.spec.whatwg.org/multipage/ — P — en — archive : http://web.archive.org/web/20261010135239/https://html.spec.whatwg.org/multipage/
6-11. W3C & WHATWG, « Memorandum of Understanding Between W3C and WHATWG », 28 mai 2019 — https://www.w3.org/2019/04/WHATWG-W3C-MOU.html — P — en — archive : http://web.archive.org/web/20261004234318/https://www.w3.org/2019/04/WHATWG-W3C-MOU.html

## Étape 7 — Le retour, et tout ce qui manque encore

**Faits vérifiés**
- Multiplexage : RFC 9113 (HTTP/2) [6-4] ; HTTP/3 sur QUIC [3-4].
- `Cache-Control: immutable` : RFC 8246 [7-1] ; `max-age` : RFC 9111 [6-5].
  Le `.htaccess` du projet applique `public, max-age=31536000, immutable` à
  `/_astro/` et `no-cache` au HTML.
- Astro place les fichiers générés dans `_astro` par défaut (`build.assets`)
  [7-2].
- Cookies : la directive ePrivacy (art. 5(3) de la directive 2002/58/CE
  modifiée en 2009) impose information et consentement préalables ;
  l'article 82 de la loi Informatique et Libertés la transpose ; la CNIL
  publie lignes directrices et recommandation [7-3].
- Navigateurs : Safari/WebKit bloque totalement les cookies tiers par défaut
  (2020) [7-4] ; Firefox active par défaut la « Total Cookie Protection »
  (juin 2022) [7-5] ; Google a annoncé le 22 avril 2025 maintenir l'approche
  actuelle de Chrome (choix de l'utilisateur dans les réglages, pas de
  nouvelle invite) [7-6].

**Sources**
7-1. P. McManus, « HTTP Immutable Responses », RFC 8246, IETF, 2017 — https://www.rfc-editor.org/rfc/rfc8246.html — P — en — archive : aucune
7-2. Astro, « Configuration Reference » (`build.assets`, défaut `_astro`) — https://docs.astro.build/en/reference/configuration-reference/ — P — en — archive : aucune
7-3. CNIL, « Cookies et autres traceurs : que dit la loi ? » — https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi — P — fr — archive : http://web.archive.org/web/20261006122842/https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
7-4. J. Wilander, « Full Third-Party Cookie Blocking and More », WebKit Blog, 2020 — https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/ — P — en — archive : http://web.archive.org/web/20261008094537/https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/
7-5. Mozilla, « Firefox rolls out Total Cookie Protection by default to more users worldwide », 14/06/2022 — https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/ — P — en — archive : http://web.archive.org/web/20261009171114/https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/
7-6. Google, « Next steps for Privacy Sandbox and tracking protections in Chrome », 22/04/2025 — https://privacysandbox.com/news/privacy-sandbox-next-steps/ — P — en — archive : http://web.archive.org/web/20251126095844/https://privacysandbox.com/news/privacy-sandbox-next-steps/

## Étape 8 — L'affichage

**Faits vérifiés**
- Analyse du HTML en DOM : HTML Living Standard [6-10]. CSSOM : spécification
  W3C « CSS Object Model » [8-6].
- Chaîne de rendu (DOM + CSSOM → arbre de rendu → *layout* → *paint* →
  composition, cette dernière parfois sur le GPU) : description de MDN [8-1]
  (il s'agit d'un modèle d'implémentation des navigateurs, pas d'une norme).
- Navigation Timing Level 2 (W3C, brouillon de travail) : attributs
  `domainLookupStart`, `secureConnectionStart`, `responseStart`… [8-2].
- FCP : Paint Timing (W3C, brouillon de travail) [8-3]. LCP : spécification
  W3C, brouillon de travail du 26 août 2026 [8-4] ; seuil « bon » ≤ 2,5 s
  selon Google [8-5].

**Sources**
8-1. MDN, « How browsers work » — https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work — S — en — archive : http://web.archive.org/web/20261004064335/https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
8-2. W3C, « Navigation Timing Level 2 », Working Draft — https://www.w3.org/TR/navigation-timing-2/ — P — en — archive : aucune
8-3. W3C, « Paint Timing », Working Draft — https://www.w3.org/TR/paint-timing/ — P — en — archive : http://web.archive.org/web/20261009000421/https://www.w3.org/TR/paint-timing/
8-4. W3C, « Largest Contentful Paint », Working Draft, 26/08/2026 — https://www.w3.org/TR/largest-contentful-paint/ — P — en — archive : http://web.archive.org/web/20261010022115/https://www.w3.org/TR/largest-contentful-paint/
8-5. Google, « Largest Contentful Paint (LCP) », web.dev — https://web.dev/articles/lcp — S — en — archive : aucune
8-6. W3C, « CSS Object Model (CSSOM) », Working Draft — https://www.w3.org/TR/cssom-1/ — P — en — archive : http://web.archive.org/web/20261010020805/https://www.w3.org/TR/cssom-1/

## Non vérifié

- **Identité du titulaire actuel de `rouages.net`** et raison pour laquelle le
  domaine sert un site WordPress tiers : volontairement non recherché (donnée
  potentiellement personnelle) ; à vérifier en interne avant de bâtir le
  module sur ce domaine.
- **Hébergeur réel du futur site** (pays, présence d'un nginx devant Apache,
  HTTP/2 activé, Brotli ou non) : rien n'est vérifiable avant déploiement.
  L'affirmation « Apache » ne vaut que si l'hébergeur n'intercale pas
  LiteSpeed ou nginx.
- « Une poignée de requêtes, toutes vers son propre serveur, aucun pisteur »
  (étape 7) : à mesurer sur le site déployé.
- « La box lui appartient souvent » (étape 2) et le relais DNS par la box :
  plausibles (box louées), pas de source primaire trouvée.
- « Un même serveur héberge des centaines de sites » (étape 6) : ordre de
  grandeur non sourcé.
- Prise en charge de l'API LCP par Safari et état de l'ECH dans Safari :
  non vérifiés.
- Le comportement exact de Firefox et Safari pour une adresse tapée sans
  protocole (HTTPS d'abord ?) n'est sourcé que pour Chrome ; la page
  d'assistance Mozilla sur DoH n'a pas pu être lue (contenu généré en
  JavaScript).
- Découverte antérieure et secrète de l'échange de clés au GCHQ (années 1970) :
  à sourcer séparément si l'encart histoire veut en parler.
- Texte en vigueur de l'article L. 333-10 du code du sport et de l'article 6-1
  de la LCEN : non lus sur Légifrance (refus des requêtes automatisées) ; seuls
  la présentation de l'Arcom et le décret 2015-125 ont été lus.
- Décisions de la cour d'appel de Paris validant le blocage par les résolveurs
  publics (2025-2026) : connues seulement par la presse (TorrentFreak via
  agrégateurs), non lues.
- Libellés exacts des messages d'erreur (« Ce site est inaccessible »,
  « La connexion a expiré ») : varient selon le navigateur et la version ; non
  vérifiés.

## Inspirations des animations

- **Les pots de peinture** (étape 4) : analogie classique de l'échange de clés
  Diffie-Hellman, que nous n'avons pas inventée. Sources vérifiées le
  12 octobre 2026 :
  1. A. J. Han Vinck (université de Duisburg-Essen), schéma original,
     *Introduction to public key cryptography*, p. 16 ; version SVG par
     Flugaal, domaine public — https://commons.wikimedia.org/wiki/File:Diffie-Hellman_Key_Exchange.svg
     — S — en (le document de Vinck lui-même n'a pas été retrouvé en ligne).
  2. Art of the Problem, « Diffie-Hellman Key Exchange », vidéo YouTube —
     https://www.youtube.com/watch?v=3QnD2c4Xovk — S — en (titre et auteur
     vérifiés via l'API oEmbed de YouTube).
  - L'origine première de l'analogie n'est pas établie : ne pas l'attribuer à
    une seule personne.

## Chiffres de l'animation « Combien de requêtes ? » (étape 7)

Vérifiés le 12 octobre 2026 :

1. HTTP Archive, *Web Almanac 2024*, chapitre « Page Weight » : « The median
   page makes 71 requests on desktop and 66 on mobile » (pages d'accueil et
   pages internes, données d'octobre 2024) —
   https://almanac.httparchive.org/en/2024/page-weight — P — en.
2. HTTP Archive, *Web Almanac 2024*, chapitre « Third Parties » : 92 % des
   pages ont au moins un tiers ; médiane de 27 tiers parmi le premier million
   de sites (66 parmi les mille premiers) —
   https://almanac.httparchive.org/en/2024/third-parties — P — en.

La mesure de « cette page » est faite en direct dans le navigateur du
visiteur (API Performance : entrées `navigation` et `resource`).

## Adresses utilisées dans les animations

Uniquement des plages privées (RFC 1918 : `192.168.0.0/16`), réservées à la
documentation (RFC 5737 : `203.0.113.0/24`, `198.51.100.0/24` ; RFC 3849 :
`2001:db8::/32`) ou des domaines réservés (RFC 2606 : `.example`).
