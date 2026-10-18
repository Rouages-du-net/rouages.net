# Sources — Page « Jeux » (jeux pour apprendre, par thème)

Dossier de la page `/jeux/` (données : `src/data/jeux.ts`), établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 17 octobre 2026. Chaque page officielle a été
  ouverte ce jour-là ; « fonctionne » veut dire que l'accueil du jeu se charge,
  pas que le jeu a été joué en entier.
- La recherche de pisteurs n'a porté que sur le code de la page d'accueil :
  ce n'est pas un audit complet.
- Les prix Steam sont ceux du jour et peuvent correspondre à des promotions :
  la page n'affiche que « payant ».
- Aucune page Wikipédia n'est utilisée comme source.
- Retenus sur la page : les jeux vérifiés et recommandables. Laissés de côté
  malgré leur présence dans le dossier : Bitburner (fiction de piratage), Hack
  The Box (orienté entreprises, pixel TikTok), Scratch et Code.org (outils et
  plateformes plutôt que jeux), Packet.School (fiabilité non établie), IPGO,
  while True: learn() et Stealing Ur Feelings (non vérifiés en détail), Les
  Incollables de la CNIL (version en ligne non vérifiée).
- Données personnelles : la page d'accueil de France-IOI affiche les pseudos
  d'élèves mineur·es ; ne pas les reproduire.

## Méthode et niveaux de lecture

- Chaque page officielle a été ouverte avec `curl` (code HTTP et URL finale relevés). Pour les pages
  qui ne s'affichent qu'en JavaScript, je les ai aussi rendues dans Chromium sans interface (Playwright).
  Mention **« fonctionne au 17/10/2026 »** = la page répond en 200 et son contenu est le bon.
  Je n'ai **pas joué** aux jeux en entier : « fonctionne » veut dire que l'accueil et l'entrée du jeu
  se chargent.
- Niveau de lecture :
  - **lu** : page d'accueil ou « à propos » lue en entier (texte extrait) ;
  - **lu partiellement** : seulement l'accueil, ou une page rendue dont une partie manquait ;
  - **résumé seulement** : connu par un résultat de moteur de recherche ou par des métadonnées
    (API Steam, fichier LICENSE). Signalé à chaque fois.
- **Pisteurs** : j'ai cherché dans le HTML de la page d'accueil la signature de scripts connus
  (Google Analytics/Tag Manager, AdSense, Matomo, Plausible, Mixpanel, HubSpot, Facebook…). C'est
  une **détection statique, pas un audit** : un pisteur chargé plus tard ou sur une autre page
  peut m'avoir échappé. Matomo et Plausible sont des outils de mesure d'audience qui respectent
  davantage la vie privée ; Google Analytics, Tag Manager, AdSense et Facebook ne le sont pas.
- **Prix Steam** : relevés le 17/10/2026 via l'API publique de Steam (`store.steampowered.com/api/appdetails`, cc=fr).
  Ils peuvent correspondre à une promotion : à revérifier avant publication.
- GitHub : l'API et les pages github.com étaient bloquées dans cet environnement. Les licences
  viennent des fichiers bruts (`raw.githubusercontent.com`), lus directement.

Abréviations : **FR** = existe en français. **Compte** = compte nécessaire pour jouer ou pour garder sa progression.

---

## 1. Ligne de commande et administration système

### Sélection

**Terminus**
- URL : https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html — fonctionne au 17/10/2026 (lu)
- Auteur·rices : Shawn Conrad et Michele Pratusevich (noms dans la balise `author` de la page), hébergé par le MIT (États-Unis)
- Langue : anglais seulement. Gratuit, sans compte, dans le navigateur.
- Public : grand débutant (collège et plus).
- Ce qu'on apprend : se déplacer dans une arborescence avec `ls`, `cd`, `less`, `pwd`, présentés comme une aventure textuelle.
- Points d'attention : aucun pisteur détecté. Code ancien (jQuery 1.9) mais il tourne. Date non affichée.

**OverTheWire : Bandit**
- URL : https://overthewire.org/wargames/bandit/ — fonctionne (lu)
- Organisation : communauté OverTheWire (bénévoles, pays non indiqué)
- Langue : anglais. Gratuit, sans compte (connexion SSH aux serveurs du jeu avec des identifiants fournis à chaque niveau).
- Plateforme : terminal et SSH (Linux, Mac, Windows avec un client SSH).
- Public : débutant, du lycée aux études. « The Bandit wargame is aimed at absolute beginners. »
- Ce qu'on apprend : commandes Unix (fichiers, recherche, permissions, SSH, réseau élémentaire) ; chaque niveau donne le mot de passe du suivant.
- Points d'attention : Google Analytics/Tag Manager sur le site. On joue sur des serveurs partagés : à éviter avec des enfants sans encadrement.

**GameShell**
- URL : https://github.com/phyver/GameShell (README lu via raw.githubusercontent.com ; github.com n'a pas répondu à curl, code 403)
- Origine : créé pour les étudiant·es de l'**Université Savoie Mont Blanc (France)**, idée de Rodolphe Lepigre
- Langues : **FR**, anglais, italien. Gratuit, sans compte. Licence **GPL v3**.
- Plateforme : se lance dans un vrai shell bash (Linux, macOS ; BSD moins testé).
- Public : « first-year university students or high schoolers ».
- Ce qu'on apprend : vraies commandes Unix, réparties en « missions » vérifiées automatiquement.
- Points d'attention : rien à signaler. C'est la meilleure option francophone et libre du thème.

**The Command Line Murders (clmystery)**
- URL : https://github.com/veltman/clmystery (README lu via raw.githubusercontent.com)
- Auteur : Noah Veltman (États-Unis)
- Langue : anglais. Gratuit, sans compte, à télécharger (terminal). Licence non trouvée (pas de fichier LICENSE à la racine).
- Public : débutant.
- Ce qu'on apprend : `grep`, `head`, `cat`, et chaîner des commandes pour résoudre une enquête policière.
- Points d'attention : la licence est à vérifier.

**bashcrawl**
- URL : https://gitlab.com/slackermedia/bashcrawl — fonctionne (lu partiellement)
- Auteur : Slackermedia (Seth Kenlon)
- Langue : anglais. Gratuit. Licence **GPL v3** (indiquée sur GitLab). Projet créé le 24 juillet 2019.
- Plateforme : terminal (Linux, Mac).
- Ce qu'on apprend : « Learn Linux commands by playing a simple text adventure ».

**CMD Challenge**
- URL : https://cmdchallenge.com/ — fonctionne (lu partiellement)
- Auteur : John Jarvis (« john@jarv.org » dans la licence MIT du dépôt `jarv/cmdchallenge`)
- Langue : anglais. Gratuit, sans compte, dans le navigateur. Licence **MIT**.
- Public : intermédiaire.
- Ce qu'on apprend : résoudre des défis en une ligne de bash, exécutée dans un vrai conteneur.
- Points d'attention : aucun pisteur détecté.

**VIM Adventures** (payant)
- URL : https://vim-adventures.com/ — fonctionne (lu)
- Auteur : Doron Linder, « © 2012 - 2026 »
- Langue : anglais. **Freemium** : les premiers niveaux sont gratuits, la suite demande une licence payante (« buy a license »). Navigateur.
- Ce qu'on apprend : les déplacements et commandes de l'éditeur Vim, dans un jeu d'aventure façon Zelda.

**Bitburner**
- URL : https://bitburner-official.github.io/ — fonctionne, v3.0.1 (lu partiellement, page rendue)
- Langue : anglais. Gratuit, sans compte, dans le navigateur ou sur Steam.
- Licence : Apache 2.0 **avec la clause « Commons Clause »**. Le code est donc consultable mais ce n'est pas une licence libre au sens strict (lu via raw.githubusercontent.com).
- Public : intermédiaire (il faut savoir un peu programmer).
- Ce qu'on apprend : terminal simulé et scripts JavaScript dans un univers cyberpunk de « hacking ». C'est une fiction : ce n'est pas de la vraie sécurité.

### Écartés
- **Linux Journey** : linuxjourney.com redirige maintenant vers `labex.io/linuxjourney`, bloqué par Cloudflare (403), même avec un vrai navigateur. Je n'ai pas pu le vérifier. C'est de toute façon un cours, pas un jeu, et LabEx est une plateforme commerciale.
- Jeux d'« escape room » Linux : je n'en ai trouvé aucun qui soit vérifiable et gratuit. GameShell et clmystery jouent ce rôle.

---

## 2. Programmation et algorithmique

### Sélection

**Concours Castor Informatique**
- URL : https://castor-informatique.fr/ — fonctionne (lu). Plateforme d'entraînement : https://concours.castor-informatique.fr/ (lu)
- Organisation : **France-ioi** (association), avec **Inria** et la Fondation Blaise Pascal parmi les partenaires (liens de la page). C'est la version française du concours international Bebras (lien vers bebras.org).
- Langue : **FR**. Gratuit. Pas de compte : on entre avec un code de groupe donné par l'enseignant·e, et on peut s'entraîner sans code.
- Public : du primaire au lycée.
- Ce qu'on apprend : la pensée informatique avec de courts casse-têtes interactifs (algorithmes, logique, structures de données).
- Date : « Le concours Castor Informatique 2026 se déroulera du 8 novembre au 19 décembre 2026. Environ 700 000 participants sont attendus. »
- Points d'attention : aucun pisteur détecté.

**Concours Algoréa**
- URL : https://algorea.org/ — fonctionne (lu, page rendue)
- Organisation : France-ioi. **FR**. Gratuit (« un grand concours gratuit, ouvert à tous les élèves du CM1 à la terminale »).
- Compte : il en faut un à partir des tours qualificatifs (connexion sur concours.algorea.org). Un exemple est « accessible immédiatement ».
- Ce qu'on apprend : la programmation, en blocs puis en Python ; tours progressifs. « Près de 250 000 élèves avaient participé à l'édition 2025 ».

**France-IOI : cours et problèmes**
- URL : https://www.france-ioi.org/algo/chapters.php — fonctionne (lu)
- Organisation : association France-ioi (France). **FR**. Gratuit. Un compte est utile pour suivre sa progression.
- Langages proposés : C, C++, Pascal, OCaml, Java, JavaScool, Python.
- Public : du collège aux études ; prépare aux Olympiades internationales d'informatique.
- Ce qu'on apprend : l'algorithmique avec des centaines de problèmes corrigés automatiquement.
- Points d'attention : la page d'accueil affiche en direct les pseudos de jeunes inscrit·es. Ne pas reproduire ces données.

**Blockly Games**
- URL : https://blockly.games/?lang=fr — fonctionne (lu, page rendue)
- Organisation : Google (projet Blockly). Code libre : licence **Apache 2.0** (fichier LICENSE lu).
- Langues : **FR** (affiché « Jeux Blockly ») et environ 60 autres langues. Gratuit, sans compte, navigateur. Peut se télécharger pour jouer hors ligne.
- Public : enfants et débutant·es (« children who have not had prior experience »).
- Ce qu'on apprend : boucles, conditions et fonctions en blocs (Labyrinthe, Oiseau, Tortue, Musique), puis passage au JavaScript (Pond).
- Points d'attention : aucun pisteur détecté sur l'accueil.

**LightBot**
- URL : https://lightbot.com/ — fonctionne (lu)
- Organisation : LightBot Inc. (Canada d'après mes connaissances, non vérifié). Page marquée « (C) 2017 ».
- Langue : anglais sur le site (les applications ne sont pas vérifiées). Démos « Hour of Code » gratuites ; les applications mobiles complètes sont payantes (prix non vérifié).
- Ce qu'on apprend : « Sequencing, Procedures, Recursive Loops, Conditionals ».
- Points d'attention : ancien script Google Analytics (`stats.g.doubleclick.net/dc.js`) sur le site.

**CodinGame** (attention : le produit a changé)
- URL : https://www.codingame.com/ — fonctionne, redirige vers /start/ (lu)
- Organisation : CodinGame (France ; la page cite la société mère CoderPad).
- **Changement en 2026** : la page d'accueil présente désormais CodinGame comme « the arena for engineering agents » : on y connecte un agent d'IA (Codex, Claude Code…) qui écrit des bots. Le jeu à la main reste possible : « Prefer to code it yourself? Every game here also runs in the browser IDE, and the Arcade is built for you. »
- Langue : anglais (le français n'est pas vu sur l'accueil). Gratuit. **Compte requis** (Login / Sign up).
- Ce qu'on apprend : programmer des bots, optimiser son code, « code golf » (le code le plus court possible).
- Points d'attention : Google Tag Manager et **Mixpanel** (outil de pistage analytique). Plateforme orientée recrutement.

**Human Resource Machine** (payant)
- URL : https://tomorrowcorporation.com/humanresourcemachine — fonctionne (lu)
- Éditeur : Tomorrow Corporation (États-Unis). Sorti le 15 octobre 2015 (API Steam). 8,87 € sur Steam le 17/10/2026.
- Langues : **FR** et 18 autres (API Steam). Windows, Mac, Linux ; aussi sur mobile et consoles.
- Ce qu'on apprend : la programmation en langage proche de l'assembleur (boîte d'entrée et de sortie, mémoire, sauts).

**7 Billion Humans** (payant)
- URL : https://tomorrowcorporation.com/7billionhumans — fonctionne (lu)
- Éditeur : Tomorrow Corporation. Sorti le 23 août 2018. 8,87 € sur Steam (17/10/2026). **FR**.
- Ce qu'on apprend : la programmation **parallèle** (plusieurs ouvriers exécutent le même programme en même temps).

**Code.org — par exemple *AI for Oceans***
- URL : https://code.org/fr — fonctionne (lu, page rendue)
- Organisation : Code.org (États-Unis, association à but non lucratif), **renommée « CodeAI »** sur le site en 2026.
- Langues : **FR** en partie (l'interface est traduite à moitié). Gratuit. Les activités se jouent sans compte ; un compte sert à garder sa progression (« Sign in / Create account »).
- Public : de la maternelle au lycée.
- Points d'attention : Google Tag Manager.

**Scratch** (outil, pas un jeu)
- URL : https://scratch.mit.edu/ — fonctionne (lu partiellement). Le lien « about » mène à scratchfoundation.org.
- Organisation : Scratch Foundation / MIT Media Lab (États-Unis). **FR**. Gratuit ; compte facultatif (obligatoire pour partager). Navigateur et application hors ligne.
- Pertinent comme environnement pour **créer** des jeux, pas comme jeu en soi.
- Points d'attention : Google Tag Manager.

**Robocode Tank Royale**
- URL : https://robocode.dev/ — fonctionne (lu partiellement)
- Langue : anglais. Gratuit. Licence **Apache 2.0** (fichier LICENSE lu). Application de bureau (JVM).
- Bots en .NET, Java, Python ou TypeScript.
- Ce qu'on apprend : programmer un char d'assaut autonome (événements, géométrie, stratégie) et l'opposer à d'autres.

### Écartés
- **Robocode classique** (robocode.sourceforge.io) : bloqué par Cloudflare (403), non vérifié. Je l'ai remplacé par Tank Royale ci-dessus.

---

## 3. Du transistor au processeur

### Sélection

**NandGame**
- URL : https://nandgame.com/ — fonctionne (lu, page rendue avec la fenêtre « About »)
- Auteur : **Olav Junker Kjær** (Danemark d'après le domaine olav.dk, non confirmé)
- Langues : **FR**, anglais, russe, chinois, polonais, japonais. Gratuit, sans compte, navigateur.
- Public : débutant, dès le lycée. « does not require math skills beyond addition and subtraction ».
- Ce qu'on apprend : construire un ordinateur, depuis le relais et la porte NAND jusqu'à l'additionneur, la mémoire et le processeur. Inspiré du cours *From NAND to Tetris*.
- Points d'attention : Google Analytics (gtag).

**Turing Complete** (payant)
- URL : https://turingcomplete.game/ — fonctionne (lu)
- Éditeur : LevelHead. Accès anticipé depuis le 2 octobre 2021 (API Steam). 20,49 € sur Steam (17/10/2026).
- Langues : **FR**, anglais, chinois simplifié. Windows, Mac, Linux.
- Ce qu'on apprend : des portes logiques à un ordinateur complet « Turing-complet », puis l'assembleur sur sa propre machine.

**Digital Logic Sim**
- URL : https://sebastian.itch.io/digital-logic-sim — fonctionne (lu)
- Auteur : Sebastian Lague (vidéaste et développeur). Prix libre (« Name your own price »), donc gratuit possible. Windows, macOS, Linux. Licence **MIT** (fichier LICENSE lu).
- Langue : anglais. C'est un bac à sable sans objectif imposé : « There's no particular goal to the game ».
- Ce qu'on apprend : créer ses puces à partir d'une seule porte NAND.

**MHRD** (payant)
- URL : https://store.steampowered.com/app/576030/MHRD/ — fonctionne (métadonnées de l'API Steam seulement)
- Éditeur : Funghisoft. Sorti le 5 janvier 2017. 9,99 €. **Anglais seulement**. Windows, Mac, Linux.
- Ce qu'on apprend : concevoir un processeur dans un langage de description matérielle.

**TIS-100** (payant)
- URL : https://www.zachtronics.com/tis-100/ — fonctionne (lu)
- Éditeur : Zachtronics (États-Unis). Sorti le 20 juillet 2015. 4,99 € sur Steam. **Anglais seulement**. Windows, Mac, Linux, iOS.
- Ce qu'on apprend : l'assembleur sur des nœuds qui tournent en parallèle, avec un manuel « vintage » à imprimer.

**SHENZHEN I/O** (payant)
- URL : https://www.zachtronics.com/shenzhen-io/ — fonctionne (lu)
- Éditeur : Zachtronics. Sorti le 17 novembre 2016. 10,75 € sur Steam. Anglais et chinois simplifié.
- Ce qu'on apprend : concevoir des circuits à microcontrôleurs et les programmer en assembleur, en lisant de vraies fiches techniques (« RTFM »).

### Écartés
- Aucun jeu mort trouvé pour ce thème. Logisim, CircuitVerse et Logicly sont des simulateurs, pas des jeux.

---

## 4. Web et code

### Sélection

**Flexbox Froggy**
- URL : https://flexboxfroggy.com/ — fonctionne (lu)
- Auteur : Thomas Park / Codepip (États-Unis). Code sous licence **MIT** (fichier LICENSE lu, « Copyright (c) 2015 »).
- Langues : **FR** et environ 50 autres. Gratuit, sans compte, navigateur. Mode daltonien disponible.
- Ce qu'on apprend : la mise en page CSS Flexbox.
- Points d'attention : **publicité Google AdSense** dans la page (script `adsbygoogle.js`) et Google Analytics.

**Grid Garden**
- URL : https://cssgridgarden.com/ — fonctionne (lu)
- Auteur : Codepip. **FR**. Gratuit, sans compte.
- Ce qu'on apprend : la mise en page CSS Grid.
- Points d'attention : Google Analytics.

**CSS Diner**
- URL : https://flukeout.github.io/ — fonctionne (lu)
- Auteur : Luke Pacholski (@flukeout). Langue : anglais. Gratuit, sans compte.
- Ce qu'on apprend : les sélecteurs CSS (32 niveaux, d'après mes connaissances).
- Points d'attention : Google Analytics.

**Learn Git Branching**
- URL : https://learngitbranching.js.org/?locale=fr_FR — fonctionne (lu, page rendue)
- Auteur : Peter Cottle. Licence **MIT** (« Copyright (c) 2012-2025 », fichier LICENSE lu).
- Langues : **FR** (« Apprenez Git Branching ») et environ 30 autres. Gratuit, sans compte.
- Ce qu'on apprend : branches, `rebase`, `cherry-pick`, dépôts distants, avec une visualisation du graphe des commits.
- Points d'attention : Google Analytics.

**Oh My Git!**
- URL : https://ohmygit.org/ — fonctionne (lu)
- Auteur·rices : bleeptrack et blinry (Allemagne), **financé par le Prototype Fund** (fonds public allemand) en 2020-2021.
- Langue : anglais. Gratuit, sans compte. Licence **Blue Oak Model License 1.0** (libre). Windows, macOS, Linux (téléchargement sur itch.io).
- Ce qu'on apprend : Git avec des cartes à jouer, une visualisation en temps réel et un vrai Git intégré.
- Points d'attention : le README indique un « low-maintenance mode » (peu maintenu).

**The SQL Murder Mystery**
- URL : https://mystery.knightlab.com/ — fonctionne (lu)
- Organisation : **Knight Lab, Northwestern University** (États-Unis). Licence **MIT** (fichier LICENSE lu, 2018).
- Langue : anglais. Gratuit, sans compte, navigateur (requêtes SQL exécutées dans la page).
- Ce qu'on apprend : SELECT, JOIN et filtres, pour résoudre un meurtre à « SQL City ».
- Points d'attention : Google Analytics.

**Untrusted**
- URL : https://untrustedgame.com/ (ancienne adresse alexnisnevich.github.io/untrusted/, qui redirige) — fonctionne (lu)
- Auteur : Alex Nisnevich (et Greg Shuflin d'après mes connaissances, non vérifié). Langue : anglais. Gratuit, sans compte.
- Ce qu'on apprend : lire et modifier le JavaScript qui fait tourner le niveau.
- Points d'attention : Google Analytics. Licence non trouvée (pas de fichier LICENSE ; la page mentionne une adresse de licence commerciale).

### Écartés
- **SQL Island** (Université de Kaiserslautern, Allemagne) : sql-island.informatik.uni-kl.de et sql-island.de ne répondent pas (échec de connexion, code 000), et la recherche web n'a rien donné. Probablement hors ligne.

---

## 5. Réseaux et internet

### Sélection

**CS Unplugged (« L'Informatique sans ordinateur »)**
- URL : https://www.csunplugged.org/fr/ — fonctionne (lu). Activités historiques : https://classic.csunplugged.org/ (lien de la page, non ouvert)
- Organisation : **Computer Science Education Research Group, Université de Canterbury (Nouvelle-Zélande)**.
- Langues : **FR** en partie (anglais, allemand, espagnol, français, te reo māori, chinois). Beaucoup de thèmes sont marqués « Non disponible en français ».
- Gratuit, sans compte. Licence **CC BY-SA**. Activités sans ordinateur (débranchées).
- Public : de 5 à 14 ans sur le nouveau site.
- Ce qu'on apprend : binaire, réseaux de tri, détection d'erreurs… Le routage n'est pas dans les thèmes français du nouveau site. L'activité « Routing and deadlock » se trouve dans les activités historiques (d'après mes connaissances, non vérifié).
- Points d'attention : Plausible (mesure d'audience respectueuse).

**Filius / Filius II**
- URL : https://www.lernsoftware-filius.de/ — fonctionne (lu). Version web en bêta : https://filius-ii.net/ (lu partiellement, page rendue)
- Origine : Allemagne, logiciel éducatif pour l'enseignement secondaire.
- Langues : allemand et anglais (le français n'est pas vu). Gratuit, sans compte. Windows, Linux, et navigateur pour Filius II.
- Ce qu'on apprend : monter un réseau (ordinateurs, switch, routeur, DNS, serveur web) et observer les paquets.
- Points d'attention : c'est un **simulateur pédagogique** plutôt qu'un jeu. Licence non vérifiée.

**Cisco Packet Tracer**
- URL : https://www.netacad.com/cisco-packet-tracer — fonctionne (lu partiellement, page rendue)
- Organisation : Cisco Networking Academy (États-Unis). Gratuit, mais **compte NetAcad obligatoire** pour le télécharger (d'après mes connaissances ; la page affiche « Login / Sign up »). Windows, Mac, Linux.
- C'est un simulateur, pas un jeu (il contient des activités notées).
- Points d'attention : cookies commerciaux, logiciel propriétaire.

**Packet.School**
- URL : https://packet.school/en/ — fonctionne (lu, page rendue)
- Auteur : un particulier, @rizasabuncu (Turquie probablement : lien de don à LÖSEV, une association turque). « © 2026 ».
- Langue : anglais (sélecteur de langue présent ; le français n'est pas vu). Gratuit ; le compte ne semble pas nécessaire.
- Contenu : 5 niveaux et 27 leçons (IP/MAC, OSI et TCP/IP, HTTP, DNS, DHCP, TCP et UDP, routeurs et switchs, sous-réseaux, NAT, VPN), quiz et points d'expérience.
- Points d'attention : **projet personnel récent dont la fiabilité n'est pas établie**. Relire le contenu avant de le recommander. Le certificat demande de saisir son nom.

**Netsim (CS4G Network Simulator)**
- URL : https://netsim.erinn.io/ — fonctionne (lu)
- Auteur·rices : Erinn Atwater et Cecylia Bocovich (Université de Waterloo, Canada, d'après le résumé d'article USENIX ASE 2017, résumé seulement).
- Langue : anglais. Gratuit, **compte requis** (« log in below or register »). Code ouvert sur GitHub (licence non vérifiée).
- Public : lycée.
- Ce qu'on apprend : fabriquer des paquets (IP source et destination, protocole) et comprendre des attaques réseau (usurpation, déni de service).

**NetsBlox**
- URL : https://netsblox.org/ — fonctionne (lu, page rendue)
- Organisation : **Institute for Software Integrated Systems, Vanderbilt University (États-Unis)**. Gratuit ; un compte est nécessaire pour sauvegarder dans le nuage (à confirmer).
- Ce qu'on apprend : la programmation en blocs façon Snap!, avec des messages entre programmes et des appels de services en ligne (programmes en réseau, jeux multijoueurs).
- C'est un environnement de programmation, pas un jeu.

**IPGO** (application mobile)
- URL : https://www.chaostheorygames.com/work/ipgo — fonctionne (lu ; c'est la page du studio, pas une fiche officielle du jeu)
- Commanditaire : **APNIC Foundation** (registre internet Asie-Pacifique). Studio : Chaos Theory Games (Australie). iOS et Android.
- Ce qu'on apprend : routage, adresses IP, « network of networks », dans une aventure narrative.
- Points d'attention : prix, langues et collecte de données non vérifiés (fiche des magasins d'applications non ouverte).

**Activités débranchées françaises sur le routage (fiches SNT)**
- URL : https://ressources.forge.apps.education.fr/snt/Internet/a_telecharger/05/05.%20Routage%20des%20paquets%20-%20INTERNET.pdf — PDF ouvert (lu partiellement)
- Forge des communs numériques éducatifs (Éducation nationale), ressources issues de Class'Code. **FR**. Durée indiquée : 1 h 10. La fiche indique : débranchée « oui ».
- Ce qu'on apprend : switch, routeur, utilisation des adresses IP pour acheminer les paquets.
- D'autres fiches de la même série n'ont été vues qu'en résumé de recherche (licence CC BY-NC-SA annoncée, non vérifiée).

### Écartés
- Fiche Pixees « Créer son protocole en débranché » : l'URL du PDF trouvée en recherche renvoie une erreur 404.

---

## 6. Sécurité et vie privée

### Sélection

**picoCTF → CyLab Security Academy (Carnegie Mellon)**
- URL : https://cylabacademy.org/ — fonctionne (lu). picoctf.org affiche maintenant : « picoCTF.org is now CyLab Security Academy ».
- Organisation : **Carnegie Mellon University (États-Unis)**. Gratuit (« Always free »). **Compte requis** pour les défis. Anglais.
- **Changement** : picoctf.org a été renommé en 2026. Les comptes créés avant le 8 mai 2026 restent valables. « Coming Soon: picoCTF.com » (ce domaine ne répondait pas le 17/10/2026).
- Public : du lycée aux études. « No experience needed ».
- Ce qu'on apprend : des défis « Capture The Flag » (CTF) : web, cryptographie, rétro-ingénierie, analyse de traces, et sécurité de l'IA.
- Points d'attention : aucun pisteur détecté sur la page de transition. Pour un sujet futur : la page met en avant un livre blanc selon lequel la cohorte « post-IA » progresse moins vite (non lu).

**Root-Me**
- URL : https://www.root-me.org/?lang=fr — fonctionne (lu, page rendue après le contrôle anti-robots Anubis)
- Organisation : **association Root-Me (France)**. **FR**, et aussi anglais, allemand, espagnol, russe, chinois.
- Gratuit ; un **compte est requis** pour valider les défis (nom ou pseudo, adresse e-mail). Cotisation facultative pour un « accès contributeur ». Offre payante pour écoles et entreprises (pro.root-me.org).
- Contenu : « 608 Challenges », « 178 Environnements Virtuels » ; les solutions des membres sont consultables.
- Public : du lycée aux professionnel·les.

**OverTheWire : Natas et Krypton** (en complément de Bandit)
- https://overthewire.org/wargames/natas/ (lu) : « Natas teaches the basics of serverside web-security ». Navigateur, sans compte, gratuit.
- https://overthewire.org/wargames/krypton/ (lu partiellement ; la page d'accueil est vide de texte, le niveau 0 a été lu) : cryptographie classique, connexion par SSH.

**TryHackMe** (freemium)
- URL : https://tryhackme.com/ — fonctionne (lu partiellement)
- Société : TryHackMe (Royaume-Uni, d'après mes connaissances). Anglais. **Compte requis** (inscription possible avec Google). Gratuit avec une offre payante (page « Pricing »).
- Parcours guidés « Pre Security », « Cyber Security 101 », « SOC Level 1 », « AI Security » (nouveau en 2026).
- Points d'attention : plateforme commerciale.

**Hack The Box** (freemium)
- URL : https://www.hackthebox.com/ — fonctionne (lu partiellement)
- Anglais. **Compte requis**. L'accueil vise désormais surtout les entreprises (« AI Cyber Workforce Development »).
- Points d'attention : Google Tag Manager et **pixel TikTok** détectés. Plutôt pour un niveau avancé.

**Quiz sur l'hameçonnage (Jigsaw, Google)**
- URL : https://phishingquiz.withgoogle.com/?hl=fr — fonctionne (lu, page rendue)
- Organisation : Jigsaw (Google). **FR** (« Savez-vous reconnaître une tentative d'hameçonnage ? »). Gratuit, sans compte.
- Ce qu'on apprend : repérer les courriels de hameçonnage. La page mentionne l'IA.
- Points d'attention : cookies Google et Google Analytics.

**Interland (« Les Cyber Héros », Google)**
- URL : https://beinternetawesome.withgoogle.com/fr_be/interland — fonctionne (lu partiellement, page rendue). La version `fr_fr` renvoie 404 ; des versions `fr_be`, `fr_ca` et `fr_all` existent.
- Organisation : Google (programme Be Internet Awesome). **FR**. Gratuit, sans compte, navigateur.
- Public : enfants de 8 à 12 ans (d'après mes connaissances).
- Ce qu'on apprend : mots de passe, partage d'informations, hameçonnage, bienveillance en ligne.
- Points d'attention : cookies Google. Public jeune.

**CNIL : « Données paires-sonnelles »** (jeu de cartes à imprimer)
- URL : https://www.cnil.fr/fr/donnees-paires-sonnelles-jouez-apprenez-protegez-votre-vie-privee — fonctionne, article du 19 février 2025 (lu)
- Organisation : **CNIL (France)**. **FR**. Gratuit. Jeu débranché.
- Contenu : 16 paires de cartes, dont 12 de données personnelles, 2 de données sensibles et 2 « pièges » (des données qui ne sont pas personnelles).
- Ce qu'on apprend : ce qu'est une donnée personnelle ou sensible.

**CNIL : Les Incollables « Ta vie privée, c'est secret ! »**
- URL : https://www.cnil.fr/fr/education-numerique-la-nouvelle-edition-des-incollablesr-est-disponible-en-ligne — article du 20 novembre 2019 (lu)
- Partenaire : éditions Play Bac. **FR**. Gratuit, avec une version interactive en ligne (lien non ouvert). Public : collège et lycée.
- Points d'attention : date ancienne ; la version en ligne n'est pas vérifiée.

**CNIL et Groupe VYV : « Gardiens et gardiennes du numérique, tous en mission ! »**
- URL : https://www.cnil.fr/fr/gardiens-et-gardiennes-du-numerique-tous-en-mission — article du 6 décembre 2023 (lu)
- **FR**. Livrets de mini-jeux à télécharger (CM2 à 3e), tirés du jeu immersif « Les Gardiens du numérique » (2019).
- Note : le Groupe VYV est un groupe mutualiste, partenaire privé.

### Écartés ou à reclasser
- **Cybermalveillance.gouv.fr** : aucun jeu trouvé sur le site (fonctionne, lu partiellement). C'est un service d'assistance et de prévention ; Matomo y est annoncé comme mesure d'audience exemptée de consentement.
- **CyberEnJeux (ANSSI et Éducation nationale)** : kit pour que les élèves **créent** des jeux sur la cybersécurité (résumé de recherche seulement). Les URL cyber.gouv.fr/cyberenjeux et le PDF du livret 0 renvoient 404 le 17/10/2026, et la page Éduscol est bloquée par Cloudflare. **Non vérifié**, à retrouver.
- **Data Detox Kit** (https://datadetoxkit.org/fr/home/, fonctionne, lu ; Tactical Tech, Berlin) : **FR**, gratuit, mais c'est un guide de conseils, **pas un jeu**. À mettre dans « pour aller plus loin ».
- **Escape game cybersécurité de la DRANE Normandie** : livret PDF vu seulement en résumé de recherche. Non vérifié.

---

## 7. Intelligence artificielle

### Sélection

**Lakera : Agent Breaker (successeur de Gandalf)**
- URL : https://gandalf.lakera.ai/ **redirige** (code 308) vers https://play.lakera.ai/agent-breaker — fonctionne (lu, page rendue)
- Organisation : Lakera (Suisse, d'après mes connaissances ; entreprise de sécurité de l'IA).
- **Changement** : le Gandalf classique (« fais dire son mot de passe à Gandalf ») n'apparaît plus. Toutes ses anciennes adresses (/baseline, /gandalf, /about) redirigent vers « Agent Breaker », une boutique d'applications d'IA générative à pirater par injection d'instructions (en anglais, *prompt injection*), avec score et classement.
- Langue : anglais. Gratuit. Le compte n'est pas visible sur la page rendue.
- Public : du lycée aux études.
- Ce qu'on apprend : l'injection d'instructions, directe ou cachée dans un document, et l'extraction de l'instruction système (*system prompt*).
- Points d'attention : Google Tag Manager et **HubSpot** (marketing) détectés. Le jeu sert d'entrée vers les produits de l'entreprise. Les instructions des joueur·ses servent probablement de données à l'entreprise (non vérifié : politique de confidentialité non lue).

**Quick, Draw!**
- URL : https://quickdraw.withgoogle.com/ — fonctionne (lu, page rendue)
- Organisation : Google Creative Lab. **FR** et une quinzaine d'autres langues. Gratuit, sans compte.
- Ce qu'on apprend : comment un réseau de neurones reconnaît des dessins, et ce qui le trompe.
- Points d'attention : **les dessins rejoignent un jeu de données public** (« adding your drawings to the world's largest doodling data set, shared publicly »). La page « data » parle de plus de 15 millions de joueur·ses et 50 millions de dessins. Cookies Google.

**Survival of the Best Fit**
- URL : https://www.survivalofthebestfit.com/ — fonctionne (lu)
- Auteur·rices : Gabor Csapo, Jihyun Kim, Miha Klasinc, Alia ElKattan, avec le **Creative Media Award de la Fondation Mozilla**. « © 2019 ». Code ouvert sur GitHub (README lu ; licence non vérifiée).
- Langue : anglais. Gratuit, sans compte. Environ 6 minutes.
- Ce qu'on apprend : comment un algorithme d'embauche apprend les biais des recrutements passés.
- Points d'attention : Google Analytics, **pixel Facebook** et Cloudflare Insights détectés. La page /about renvoie 404.

**Moral Machine**
- URL : https://www.moralmachine.net/hl/fr — fonctionne (lu, page rendue)
- Organisation : MIT Media Lab (États-Unis, d'après mes connaissances ; la page ne l'affiche pas). **FR** et 10 autres langues. Gratuit, sans compte.
- Ce qu'on apprend : les dilemmes moraux des voitures autonomes.
- Points d'attention : c'est une **plateforme de collecte de données de recherche** (« compiler différentes perspectives humaines »). À présenter avec un regard critique : on y mesure des préférences, cela ne dit pas ce que la voiture « devrait » faire. Google Analytics.

**Which Face Is Real?**
- URL : https://www.whichfaceisreal.com/ — fonctionne (lu)
- Auteurs : **Jevin West et Carl Bergstrom, University of Washington** (projet *Calling Bullshit*). « Copyright © West and Bergstrom 2019 ».
- Langue : anglais. Gratuit, sans compte.
- Ce qu'on apprend : repérer un visage généré par StyleGAN face à de vraies photos (jeu de données FFHQ).
- Points d'attention : Google Analytics. Les images datent de 2019 ; les générateurs actuels sont bien plus réalistes. À dire aux lecteur·rices.

**Teachable Machine** (outil)
- URL : https://teachablemachine.withgoogle.com/ — fonctionne (lu, page rendue)
- Organisation : Google. Anglais. Gratuit, sans compte.
- Ce qu'on apprend : entraîner un classifieur d'images, de sons ou de poses, en trois étapes (rassembler, entraîner, exporter). Peut fonctionner « entirely on-device ».
- Points d'attention : cookies Google ; utilise la caméra et le micro.

**AI for Oceans (Code.org / CodeAI)**
- URL : https://code.org/oceans (redirige vers studio.code.org) — fonctionne (lu partiellement)
- Gratuit ; compte facultatif. **FR** probable (le site est traduit ; l'activité elle-même n'a pas été vérifiée en français).
- Ce qu'on apprend : l'apprentissage supervisé et les biais des données d'entraînement.

**while True: learn()** (payant)
- Steam, app 619150 (métadonnées de l'API Steam seulement) : Luden.io, sorti le 17 janvier 2019, 10,79 €. **FR**. Windows, Mac, Linux.
- Ce qu'on apprend : des notions d'apprentissage automatique avec des schémas de flux de données. Pas de page officielle ouverte : **résumé seulement**.

### Écartés
- **Gandalf (version classique)** : n'est plus accessible directement (redirection 308), voir Agent Breaker ci-dessus.
- **Human or Not** (AI21 Labs) : humanornot.ai redirige vers l'accueil commercial ai21.com. Le jeu a disparu.
- **Class'Code IAI** (https://pixees.fr/classcode-v2/iai/, fonctionne, lu ; Inria, Magic Makers, S24B) : **FR**, mais c'est une **formation (MOOC sur FUN)**, pas un jeu. À mettre en ressource complémentaire. Google Analytics et Matomo détectés.
- **Semantris** (Google Research) : la page répond (200) mais aucun contenu ne s'affiche, même rendue. Non vérifié.

---

## 8. Désinformation et éducation aux médias

### Sélection

**Harmony Square**
- URL : https://harmonysquare.game/fr (redirige vers harmonysquare.getbadnews.com/fr) — fonctionne (lu, page rendue)
- Organisation : DROG (Pays-Bas) et Université de Cambridge (Royaume-Uni), d'après le site Inoculation Science.
- Langues : **FR** et 18 autres (liste extraite de la page : anglais, allemand, néerlandais, espagnol, swahili, tagalog, indonésien, arabe, chinois…). Gratuit, sans compte.
- Ce qu'on apprend : les techniques de manipulation politique (polarisation, trolls, émotion). Approche par « inoculation » (s'immuniser en pratiquant).
- Points d'attention : Google Analytics, Plausible, et une extension de statistiques DROG (`drog-statistics`). Les données de jeu servent à la recherche (non vérifié en détail).

**Bad News**
- URL : https://www.getbadnews.com/en — fonctionne (lu partiellement)
- Organisation : DROG et Université de Cambridge. Gratuit, sans compte.
- **Pas de français** : la liste des langues extraite de la page en compte une trentaine (allemand, néerlandais, espagnol, arabe, hébreu, ukrainien…) mais pas le français, et `/fr` redirige vers `/en`.
- Ce qu'on apprend : se mettre dans la peau d'un·e producteur·rice de fausses nouvelles (usurpation, émotion, polarisation, complot, discrédit, trolls).
- Points d'attention : Google Tag Manager, Matomo, statistiques DROG.

**Classe Investigation (CLEMI)**
- URL : https://www.clemi.fr/classeinvestigation — fonctionne (lu)
- Organisation : **CLEMI (France, Éducation nationale)**, groupe MediaLab (enseignant·es et journalistes). **FR**, plus une version anglaise pour les cours d'anglais.
- Gratuit pour les enseignant·es, mais le **matériel n'est remis qu'à l'issue d'une formation en ligne** du CLEMI.
- Public : du CM2 à la terminale. Jeu en classe, par binômes.
- Ce qu'on apprend : la fabrication de l'information (sources, hiérarchie, responsabilité du ou de la journaliste), avec un débriefing. Scénario « Trafic en Amazonie » avec Forbidden Stories.
- Chiffres : « plus de 13 300 enseignants ont été formés », « 840 000 élèves ». Créé en 2019.
- Points d'attention : Matomo.

**E.M.I.SSAIRE (CLEMI et Atelier Canopé 93)**
- URL : https://www.clemi.fr/ressources/jeux-deducation-aux-medias-et-linformation/emissaire-0 — fonctionne (lu)
- **FR**. Kit à imprimer, gratuit, « réservé à un usage non-commercial et institutionnel ». Jeu débranché et coopératif, dès 10 ans, de 4 à 8 joueur·ses (jusqu'à 16 en binômes) ; se joue aussi à distance.
- Adaptation du jeu « Top Ten » (Cocktail Games, 2020).
- Ce qu'on apprend : débattre des écrans et des réseaux sociaux.

**Médiasphères (CLEMI et Réseau Canopé)**
- URL : https://www.clemi.fr/ressources/jeux-deducation-aux-medias-et-linformation/mediaspheres — fonctionne (lu)
- **FR**. Jeu de société de médiation (citoyenneté numérique, identité numérique et données personnelles, usages du smartphone). Ajouts datés du 26 octobre 2023.
- Le mode d'obtention (téléchargement ou achat) n'est pas précisé dans l'extrait lu.

**Spot the Troll**
- URL : https://spotthetroll.org/ — fonctionne (lu ; page « About » lue)
- Organisation : **Clemson University Media Forensics Hub (États-Unis)**. Anglais. Gratuit, sans compte.
- Ce qu'on apprend : 8 profils de réseaux sociaux à classer « troll » ou « vrai compte », avec des conseils après chaque réponse. La page cite une recherche sur son efficacité (non lue).
- Points d'attention : aucun pisteur détecté (le mot « tiktok » vu dans le HTML vient du contenu du quiz).

**Fakey**
- URL : https://fakey.osome.iu.edu/ — fonctionne (lu, page rendue)
- Organisation : **Observatory on Social Media (OSoMe), Indiana University (États-Unis)**. Anglais. Gratuit ; compte facultatif (« While you are not required to login »).
- Ce qu'on apprend : partager ou signaler des articles dans un fil simulé, en distinguant les sources fiables des sources peu crédibles.
- Points d'attention : le jeu sert aussi à étudier « how people interact with misinformation » (collecte de données de recherche).

**Cranky Uncle**
- URL : https://crankyuncle.com/game/ — fonctionne (lu)
- Auteur : John Cook (scientifique cognitif, Université de Melbourne, Australie), avec l'agence Goodbeast. Développé d'abord à George Mason University. Version 1.0 en décembre 2020, version 2.0 multilingue un an plus tard.
- Gratuit sur iPhone, Android et navigateur. Codes de groupe pour les classes.
- Langues multiples ; **français non confirmé** (non trouvé dans les pages lues).
- Ce qu'on apprend : les techniques du déni de la science (faux experts, sélection des données, etc.).

**Fake It To Make It**
- URL : https://www.fakeittomakeitgame.com/ — fonctionne (lu, page rendue)
- Autrice : Amanda Warner. Anglais et allemand. Gratuit, sans compte (sauvegarde dans le navigateur).
- Ce qu'on apprend : l'économie des fausses nouvelles (créer des sites, viser des publics, gagner de l'argent).

### Écartés
- **Go Viral!** : goviralgame.com ne répond plus (échec de connexion) et la page dédiée sur inoculation.science renvoie 404. Le site Inoculation Science ne cite plus que *Bad News*, *Harmony Square* et *Bad Vaxx*.
- **Factitious** (AU Game Lab, American University) : **le domaine factitious.augamestudio.com est maintenant un blog de contenus publicitaires sans rapport** (articles « Angel Number 7777 »…). Domaine expiré et récupéré : **ne pas mettre de lien**.
- **Troll Factory / Trollitehdas** (Yle, Finlande) : la page indique « Päivitys 28.10.2024 : Tämä kokeellinen sisältö on arkistoitu, eikä peli ole enää pelattavissa » (archivé, plus jouable).
- **Bad Vaxx** (https://badvaxx.com/) : la page répond mais je n'ai vu qu'un bandeau de cookies. Non vérifié en détail.
- **Jeu premier degré « Qu'est-ce que tu fabriques ? »** et **KitJunior** (CLEMI) : listés sur la page des jeux du CLEMI, fiches non ouvertes.

---

## 9. Cryptographie

### Sélection

**Cryptris**
- URL : https://inriamecsci.github.io/cryptris/ — fonctionne (lu partiellement : menu « Nouvelle partie / Arcade / Documentation »)
- Organisation : **Inria (France)**, développé par Digitalcuisine, avec Cap Math. Présentation par Léo Ducas : https://homepages.cwi.nl/~ducas/news_cryptris.html (lu).
- Langue : **FR** (« only available in French... for now »). Gratuit, sans compte, navigateur.
- Licence **CC BY-NC-SA 2.0 France** (indiquée sur https://gitlab.inria.fr/mecsci/grains/cryptris, lu).
- Ce qu'on apprend : le principe de la cryptographie asymétrique (à base de réseaux euclidiens), dans un jeu façon Tetris.
- Points d'attention : jeu de 2014 (date de la présentation). Articles associés sur Images des maths (CNRS), non ouverts.

**CryptoHack**
- URL : https://cryptohack.org/ — fonctionne (lu ; FAQ lue)
- Anglais. Gratuit ; **compte requis** pour garder sa progression (« you'll need to register an account and solve a simple cipher »).
- Ce qu'on apprend : casser de mauvaises mises en œuvre d'AES, RSA ou des courbes elliptiques, en Python.
- Public : études (niveau intermédiaire à avancé).
- Points d'attention : la FAQ indique un changement de règle « in late 2026 » : partager ses solutions hors de la plateforme est désormais permis.

**The Cryptopals Crypto Challenges**
- URL : https://cryptopals.com/ — fonctionne (lu)
- Anglais. Gratuit, sans compte. 8 séries de défis (bases, chiffrement par blocs, chiffrement par flot, Diffie-Hellman, RSA et DSA, fonctions de hachage, algèbre).
- Ce qu'on apprend : des attaques réelles contre des systèmes de chiffrement.
- Public : programmeur·ses confirmé·es.
- Points d'attention : défis plutôt que jeu. Les auteur·rices (équipe de Matasano, puis NCC Group) ne sont pas affiché·es sur l'accueil ; c'est un souvenir non vérifié.

**MysteryTwister**
- URL : https://mysterytwister.org/ — fonctionne (lu partiellement)
- Organisation : **projet CrypTool (Allemagne)**. « © 2009-2026 ». « 380 Challenges », « 15,072 Active members ».
- Langue : anglais. Gratuit ; un compte sert à soumettre ses réponses.
- Ce qu'on apprend : des énigmes de chiffrement, du chiffrement classique au moderne.

**OverTheWire : Krypton** — voir le thème 6.

**CS Unplugged** — activités débranchées de cryptographie dans la version classique (classic.csunplugged.org, **non ouvert**).

### Écartés
- « The Cryptographers » : rien trouvé.
- La page française de CrypTool (cryptool.org/fr/) renvoie 404.

---

## 10. Données, statistiques et visualisation

### Sélection

**Guess the Correlation**
- URL : https://guessthecorrelation.com/ — fonctionne (lu partiellement)
- Auteur : Omar Wagih (balise `author` de la page). Anglais. Gratuit, sans compte.
- Ce qu'on apprend : estimer un coefficient de corrélation à partir d'un nuage de points.
- Points d'attention : **publicité Google AdSense** (script présent). La page « about.html » renvoie 404.

**Parable of the Polygons**
- URL : https://ncase.me/polygons/ — fonctionne (lu)
- Auteur·rices : Vi Hart et Nicky Case (selon mes connaissances, non affiché dans l'extrait). Anglais ; des traductions existent (non vérifiées). Gratuit, sans compte.
- Ce qu'on apprend : le modèle de ségrégation de Schelling, où de petits biais individuels produisent une forte ségrégation. Une simulation jouable.

**The Evolution of Trust**
- URL : https://ncase.me/trust/ — fonctionne (lu)
- Auteur : Nicky Case. **FR** parmi environ 40 traductions faites par des fans. Gratuit, sans compte.
- Ce qu'on apprend : la théorie des jeux (dilemme du prisonnier répété) et le rôle du bruit et de la répétition. Utile pour expliquer ce qu'est un modèle et une simulation.

**clickclickclick.click**
- URL : https://clickclickclick.click/ — fonctionne (lu partiellement, page rendue)
- Organisation : VPRO Medialab (Pays-Bas) et Studio Moniker, selon mes connaissances (non vu sur la page). Anglais. Gratuit.
- Ce qu'on apprend : le site commente en direct tout ce que vous faites avec la souris et le clavier (128 « succès » à débloquer). Une démonstration de la collecte de données comportementales.
- Points d'attention : par nature, **il enregistre votre comportement** sur la page (adresse de sauvegarde personnelle).

**Stealing Ur Feelings**
- URL : https://stealingurfeelin.gs/ — fonctionne (lu partiellement)
- Soutien de la Fondation Mozilla (texte de la page). Anglais.
- Ce qu'on apprend : la reconnaissance d'émotions par analyse du visage, appliquée à vous-même.
- Points d'attention : **utilise la caméra** ; lire la politique de confidentialité avant de recommander (non lue).

**VisuAlgo** (outil plutôt que jeu)
- URL : https://visualgo.net/en — fonctionne (lu : titre seulement)
- Organisation : National University of Singapore (selon mes connaissances, non vérifié sur la page). Animations d'algorithmes et de structures de données, avec un mode quiz.

### Écartés
- **« Hack your way to scientific glory »** (FiveThirtyEight, p-hacking) : projects.fivethirtyeight.com/p-hacking/ redirige vers abcnews.com/politics. Le site est fermé.
- **Calibrate Your Judgment** (ClearerThinking) : redirige vers une page de connexion GuidedTrack, donc **compte requis** (e-mail, Facebook ou Google).
- **Datak** (RTS, Suisse, jeu sur les données personnelles) : datak.ch ne répond pas (échec de connexion).

---

## 11. Matériel, numérique responsable et sobriété

### Sélection

**La Fresque du Numérique**
- URL : https://www.fresquedunumerique.org/ — fonctionne (lu)
- Organisation : association La Fresque du Numérique (France). **FR**. Atelier collaboratif d'une demi-journée, « serious game » en équipes de 4 à 8, en présentiel ou à distance.
- La version 3.0 intègre l'IA et a été relue par un comité scientifique. « 175 000 participant·es ».
- Payant ou gratuit **selon l'organisateur** : je n'ai pas trouvé de grille tarifaire (la page /participer/ renvoie 404). Les sessions publiques sont souvent payantes pour les entreprises.
- La page cite l'ADEME (« un ordinateur de 2 kg nécessite de mobiliser 700 kg de matières premières ») et l'ARCEP (le numérique émet 3 à 4 % des gaz à effet de serre). **Vérifier ces chiffres aux sources primaires** avant de les reprendre.
- Points d'attention : Matomo.

### Écartés ou non vérifiés
- **Catalogue ADEME « Agir pour la transition »** (fiche Fresque du Numérique) : bloqué par Cloudflare (403). Non vérifié.
- Aucun **jeu vidéo** sérieux et vérifiable sur l'empreinte du numérique n'a été trouvé pendant cette session. Pistes à creuser plus tard : ateliers « Atelier Numérique Responsable », jeux de l'INR (Institut du Numérique Responsable), ressources EcoInfo (CNRS). Aucune n'a été vérifiée.

---

## À vérifier plus tard

Jeux ou ressources cités par la recherche ou par mes connaissances, que je n'ai **pas** pu ouvrir ou vérifier aujourd'hui :

- Linux Journey (LabEx, bloqué par Cloudflare) ; Robocode classique (SourceForge, bloqué par Cloudflare).
- CyberEnJeux (ANSSI), dont les URL renvoient 404 ; page Éduscol « Éducation et cybersécurité » (Cloudflare) ; escape game cybersécurité de la DRANE Normandie (PDF vu seulement en résumé).
- Semantris (page vide) ; Bad Vaxx (contenu non chargé) ; IPGO (fiches des magasins d'applications non ouvertes) ; while True: learn() (seulement l'API Steam).
- CLEMI « Qu'est-ce que tu fabriques ? » et KitJunior ; version en ligne des Incollables de la CNIL.
- Activités historiques de CS Unplugged (classic.csunplugged.org), dont le routage et la cryptographie.
- Autres fiches débranchées SNT et NSI (« Jeu du routage (RIP) », protocole IP, TCP/IP) : résumés de recherche seulement.
- Jeux bien connus non explorés faute de temps : *Hacknet*, *Exapunks*, *Silicon Zeroes*, *Turing Tumble* (jouet physique payant), *Robot Turtles*, jeux de société *Code Master*, *Kohctpyktop*, *Lie Detectors* (Belgique), *Data Dealer* (Autriche).
- Langue française de *Cranky Uncle* et d'*AI for Oceans* ; licence de Filius ; auteur·rices de Cryptopals.

## Points saillants pour la rédaction

1. **Quatre changements récents à signaler** : picoCTF devient « CyLab Security Academy » (mai 2026) ;
   Gandalf (Lakera) est remplacé par « Agent Breaker » ; CodinGame devient une « arène pour agents d'IA » ;
   Code.org s'affiche sous le nom « CodeAI ».
2. **Liens morts ou détournés** : Factitious (domaine récupéré par un blog publicitaire : ne pas mettre de lien),
   Go Viral!, Troll Factory, SQL Island, Human or Not, p-hacking de FiveThirtyEight, Datak.
3. **Les meilleures ressources francophones et publiques ou associatives** : GameShell (Université Savoie Mont Blanc),
   Castor et Algoréa (France-ioi, Inria), France-IOI, Root-Me, Cryptris (Inria), Classe Investigation,
   E.M.I.SSAIRE et Médiasphères (CLEMI), jeux de la CNIL, Harmony Square (FR), Fresque du Numérique.
4. **Publicité** : Flexbox Froggy et Guess the Correlation affichent de la publicité Google AdSense.
5. **Jeux qui collectent des données pour la recherche ou un jeu de données** : Quick, Draw!, Moral Machine, Fakey,
   les jeux DROG, Agent Breaker (probable), clickclickclick (par conception), Stealing Ur Feelings (caméra).
