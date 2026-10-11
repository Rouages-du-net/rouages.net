# Sources — Dark net et anonymat

Dossier de sources établi selon la [charte des sources](../SOURCES.md), pour
les entrées correspondantes de [`PERSONNES.md`](../PERSONNES.md).

- **Recherche effectuée le** : 11 octobre 2026
- **Labels Wikipédia** vérifiés via l'API Wikipédia.
- **Archives** : liens fournis par l'API Wayback quand un instantané existe ;
  « aucune » = pas d'instantané.
- Toutes les URL ont été ouvertes ; quand seul un résumé ou des métadonnées
  ont pu être lus, c'est indiqué.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution/musée

---

## Paul Syverson, David Goldschlag, Michael Reed — routage en oignon

**Tableau corrigé** — Où : États-Unis (Naval Research Laboratory, Washington) · Quand : 1995–2000 (début des travaux en 1995 ; premier article en 1996 ; brevet déposé en 1998 et délivré en 2001) · Pourquoi : Invention du routage en oignon, qui fait passer le trafic par plusieurs relais et le chiffre en couches successives pour cacher qui parle à qui. Les travaux sont financés par l'ONR, puis par la DARPA à partir de 1997 ; ils s'appuient sur les « mix-nets » de David Chaum (1981). *Changements : « 1995– » est remplacé par une période bornée, puisque le projet est suspendu en 1999 faute de financement avant d'être relancé en 2001 sous la forme de Tor. Les dates du brevet sont précisées. Le précurseur Chaum est ajouté.*

**Faits clés**
- 1995 : début des travaux au NRL, financés par l'Office of Naval Research (ONR). La DARPA ajoute des financements en 1997 [1][2].
- Le 31 mai 1996, Goldschlag, Reed et Syverson présentent l'article « Hiding Routing Information » au premier Information Hiding Workshop (LNCS 1174, p. 137-150). Un prototype de 5 nœuds tourne alors sur une seule machine du NRL [1][3].
- Le brevet US 6 266 704 (« Onion routing network for securely moving data through communication networks ») a pour inventeurs Reed, Syverson et Goldschlag et pour cessionnaire l'US Navy. Il a été déposé le 29 mai 1998 (priorité au 30 mai 1997) et délivré le 24 juillet 2001 [4].
- Le prototype de « génération 0 » traite plus de 20 millions de requêtes venues de plus de 60 pays. Il est arrêté en janvier 2000. En 1999, le développement est suspendu faute de financement, puis il reprend en 2001 avec la DARPA [1].
- Le principe dérive des « mix-nets » de David Chaum (« Untraceable electronic mail… », *Communications of the ACM*, 1981). L'article Tor de 2004 le dit lui-même [5][6].

**Sources**
1. Onion Routing (NRL), « Brief Selected History », onion-router.net, page historique figée vers 2005 — https://www.onion-router.net/History.html — P — en — archive : http://web.archive.org/web/20260917192011/https://www.onion-router.net/History.html
2. The Tor Project, « History », torproject.org, s.d. — https://www.torproject.org/about/history/ — P — en — archive : aucune
3. D. M. Goldschlag, M. G. Reed, P. F. Syverson, « Hiding Routing Information », *Information Hiding*, LNCS 1174, Springer, 1996, p. 137-150 — DOI 10.1007/3-540-61996-8_37 (métadonnées Crossref seulement, texte non lu) — P — en — archive : non vérifiée
4. M. G. Reed, P. F. Syverson, D. M. Goldschlag, brevet US 6 266 704 B1, Google Patents — https://patents.google.com/patent/US6266704B1/en — P — en — archive : aucune
5. D. Chaum, « Untraceable electronic mail, return addresses, and digital pseudonyms », *Communications of the ACM* 24(2), 1981, p. 84-90 — DOI 10.1145/358549.358563 (métadonnées Crossref seulement) — P — en — archive : non vérifiée
6. R. Dingledine, N. Mathewson, P. Syverson, « Tor: The Second-Generation Onion Router », USENIX Security, 2004 (PDF lu) — https://svn-archive.torproject.org/svn/projects/design-paper/tor-design.pdf — P — en — archive : http://web.archive.org/web/20190717061307/https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf

**Wikipédia** — FR : absent (ni « Routage en oignon » ni « Onion routing ». « Paul Syverson » est absent aussi. Le sujet n'est traité que dans « Tor (réseau) ») · EN : https://en.wikipedia.org/wiki/Onion_routing (aucun label, environ 17 ko). https://en.wikipedia.org/wiki/Paul_Syverson (aucun label, ébauche d'environ 4 ko). **Recommandé : EN.** Un article FR « Routage en oignon » serait à créer.

**Points d'attention**
- Contradiction sur le brevet : la page historique du NRL écrit « Patent issued in July » à l'année 2000, alors que Google Patents donne une délivrance le **24 juillet 2001**. Retenir 2001 (date du registre).
- Il ne faut pas dire que « l'armée américaine a inventé le dark web ». Le but déclaré était de protéger les communications, y compris gouvernementales, contre l'analyse de trafic. Le NRL soulignait déjà qu'il fallait un réseau ouvert et un code public pour que l'anonymat fonctionne : il faut des utilisateurs variés pour s'y fondre [1][2].
- Les « services cachés » (sites .onion) sont envisagés dès 1997-1998 (serveurs à localisation cachée, points de rendez-vous), mais ne sont déployés qu'en 2004 avec Tor [1].
- Les trois inventeurs sont à citer ensemble. L'ordre des auteurs de l'article de 1996 est Goldschlag, Reed, Syverson.

---

## Roger Dingledine & Nick Mathewson — Tor et le Tor Project

**Tableau corrigé** — Où : États-Unis (MIT, Free Haven Project, en lien avec le NRL) · Quand : 2002– (pré-alpha annoncée le 20 sept. 2002 ; réseau public et code sous licence libre MIT en oct. 2003 ; article USENIX en 2004 ; association Tor Project, Inc. créée en 2006) · Pourquoi : Tor, ou « routage en oignon de 2e génération », est un réseau de relais bénévoles et un logiciel libre. Il anonymise la navigation et permet les services .onion (2004). L'organisation à but non lucratif Tor Project est fondée en 2006. Son financement est mixte : en 2023-2024, environ 35 % vient du gouvernement américain, contre 53,5 % en 2021-2022. *Changements : « code libéré 2004 » est faux. Le code circule dès sept. 2002 et la mise en réseau publique sous licence MIT date d'oct. 2003 (le Tor Project, lui, date le tout d'oct. 2002, voir les points d'attention). L'EFF finance à partir de fin 2004. La part de financement public est ajoutée.*

**Faits clés**
- Le 20 septembre 2002, R. Dingledine annonce sur la liste or-dev « pre-alpha: run an onion proxy now! » : « The onion routing network is functional and deployed » [1]. Selon le NRL, en octobre 2003 le réseau est déployé et le code publié sous licence libre MIT, avec une douzaine de nœuds bénévoles fin 2003 [2].
- Dingledine, jeune diplômé du MIT, travaille avec Paul Syverson sur un projet de routage en oignon du NRL. Il le baptise Tor (« The Onion Routing »). Nick Mathewson, camarade de MIT, le rejoint peu après [3].
- L'article fondateur « Tor: The Second-Generation Onion Router » de Dingledine (Free Haven), Mathewson (Free Haven) et Syverson (NRL) paraît au 13e USENIX Security Symposium en 2004. Il ajoute la confidentialité persistante, le contrôle de congestion, les serveurs d'annuaire et les services cachés par points de rendez-vous [4][5].
- Les financements ONR et DARPA s'arrêtent au 4e trimestre 2004, quand commence celui de l'EFF. Les services cachés sont déployés au printemps 2004. Fin 2004, Tor compte plus de 100 nœuds sur 3 continents [2]. Le Tor Project, Inc. devient une association 501(c)(3) en 2006 et lance le développement du Tor Browser en 2008 [3].
- Exercice 2023-2024 (rapport financier du Tor Project) : 7 287 566 $ de recettes (Form 990), dont 35,08 % du gouvernement américain (2 556 472 $), 21,59 % d'entreprises, 18,67 % de fondations, 15,61 % de dons individuels et 7,58 % de gouvernements non américains (Sida, Suède). En 2021-2022, la part du gouvernement américain était de 53,5 % [6][7].

**Sources**
1. R. Dingledine, « pre-alpha: run an onion proxy now! », liste or-dev, 20 sept. 2002 — https://archives.seul.org/or/dev/Sep-2002/msg00019.html — P — en — archive : aucune
2. Onion Routing (NRL), « Brief Selected History » — https://www.onion-router.net/History.html — P — en — archive : http://web.archive.org/web/20260917192011/https://www.onion-router.net/History.html
3. The Tor Project, « History » — https://www.torproject.org/about/history/ — P — en — archive : aucune
4. USENIX, fiche « Tor: The Second-Generation Onion Router », 2004 — https://www.usenix.org/conference/13th-usenix-security-symposium/tor-second-generation-onion-router — P — en — archive : http://web.archive.org/web/20260909144408/https://www.usenix.org/conference/13th-usenix-security-symposium/tor-second-generation-onion-router
5. Dingledine, Mathewson, Syverson, texte intégral (PDF) — https://svn-archive.torproject.org/svn/projects/design-paper/tor-design.pdf — P — en — archive : http://web.archive.org/web/20190717061307/https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf
6. The Tor Project, « Transparency, Openness, and Our 2023-2024 Financials », blog, 2025 — https://blog.torproject.org/financials-blog-post-2023-2024/ — P — en — archive : http://web.archive.org/web/20260617054448/https://blog.torproject.org/financials-blog-post-2023-2024/
7. The Tor Project, « Reports » (Form 990 et audits 2007-2024) — https://www.torproject.org/about/reports/ — P — en — archive : aucune

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Tor_(réseau) (aucun label, environ 41 ko). https://fr.wikipedia.org/wiki/Le_Projet_Tor (aucun label, environ 19 ko). https://fr.wikipedia.org/wiki/Roger_Dingledine (ébauche d'environ 2,5 ko). Nick Mathewson : absent · EN : https://en.wikipedia.org/wiki/Tor_(network) (aucun label, environ 173 ko). https://en.wikipedia.org/wiki/The_Tor_Project (aucun label). https://en.wikipedia.org/wiki/Roger_Dingledine et https://en.wikipedia.org/wiki/Nick_Mathewson (aucun label). **Recommandé : EN** pour l'histoire, FR « Tor (réseau) » acceptable pour le grand public.

**Points d'attention**
- **La date de libération du code est incohérente entre sources primaires.** La page History du Tor Project écrit « in October 2002 when the Tor network was initially deployed, its code was released under a free and open software license ». La page du NRL place le déploiement et la licence MIT en **octobre 2003**. La liste or-dev montre une pré-alpha téléchargeable dès sept. 2002. Formulation prudente : « premières versions publiques en 2002, réseau ouvert et licence libre en 2003 ». En aucun cas « 2004 ».
- Écrire « Tor », pas « TOR ». À l'origine, l'acronyme signifie « The Onion Routing » [3].
- Pour la part de financement public, toujours donner l'exercice. Elle varie beaucoup : environ 35 % en 2023-2024, 53,5 % en 2021-2022. Le Tor Project affirme vouloir réduire cette dépendance. Il précise que ces fonds viennent d'appels à projets concurrentiels, notamment du Département d'État (DRL) [6]. Évitons d'en faire un argument complotiste (« Tor est contrôlé par la CIA »), comme l'argument inverse (« Tor est indépendant de tout État »).
- Le rôle de Syverson (NRL) dans Tor est réel : il est coauteur de l'article de 2004. Le Tor Project ne compte cependant comme fondateurs de l'organisation que Dingledine et Mathewson, avec d'autres. Ne pas attribuer Tor à un seul homme.
- Aucun rapport financier pour 2024-2025 n'a été trouvé (le billet de blog renvoie une erreur 404).

---

## Ian Clarke — Freenet (aujourd'hui Hyphanet)

**Tableau corrigé** — Où : Royaume-Uni (Université d'Édimbourg, Écosse). Clarke est originaire du comté de Meath, en Irlande · Quand : 1999–2000 (rapport de fin d'études en 1999 ; version 0.1 publiée en mars 2000 ; article à l'atelier de Berkeley en juillet 2000, publié dans les actes LNCS en 2001) · Pourquoi : Freenet, un réseau pair-à-pair décentralisé de stockage et de diffusion anonyme de fichiers, conçu contre la censure. Son mode « darknet » d'ami à ami vient plus tard. Le logiciel d'origine s'appelle Hyphanet depuis 2023. *Changements : « 2000 » est précisé (1999 pour la conception, mars 2000 pour la v0.1). « Irlande / Royaume-Uni » est explicité. Le changement de nom en Hyphanet est signalé.*

**Faits clés**
- 1999 : Ian Clarke rédige le rapport « A Distributed Decentralised Information Storage and Retrieval System » à la Division of Informatics de l'Université d'Édimbourg, sous la direction du Dr Chris Mellish. Le résumé promet une publication et une consultation anonymes, sans contrôle central [1].
- Il diffuse ce texte en juillet 1999 et cherche des volontaires. Freenet 0.1 sort en mars 2000 [2].
- L'article « Freenet: A Distributed Anonymous Information Storage and Retrieval System » de I. Clarke, O. Sandberg, B. Wiley et T. W. Hong est présenté à l'atelier « Design Issues in Anonymity and Unobservability » (Berkeley, juillet 2000). Il est publié en 2001 dans *Designing Privacy Enhancing Technologies*, LNCS 2009, p. 46-66 [3][4].
- Clarke est « County Meath, Ireland, native », diplômé en IA et informatique d'Édimbourg. Il figure au palmarès TR35 de la *Technology Review* du MIT en 2003 [5][6].
- Le logiciel d'origine s'appelle désormais **Hyphanet**. Le nom « Freenet » sert depuis 2023 à un nouveau projet de Clarke, entièrement réécrit en Rust. Hyphanet revendique d'avoir appelé « darknet » son mode d'ami à ami « long before this became a widespread term » [2][7].

**Sources**
1. I. Clarke, « A Distributed Decentralised Information Storage and Retrieval System », rapport, Univ. of Edinburgh, 1999 (PDF lu) — https://freenet.org/pdf/DDISRS.pdf — P — en — archive : http://web.archive.org/web/20261006153256/https://freenet.org/pdf/DDISRS.pdf
2. Freenet Project, « Ian Clarke », freenet.org, s.d. — https://freenet.org/about/people/ian-clarke/ — P (autobiographique, institutionnel) — en — archive : http://web.archive.org/web/20260731054215/https://freenet.org/about/people/ian-clarke/
3. I. Clarke, O. Sandberg, B. Wiley, T. W. Hong, « Freenet: A Distributed Anonymous Information Storage and Retrieval System », LNCS 2009, Springer, 2001 — DOI 10.1007/3-540-44702-4_4 (métadonnées Crossref seulement) — P — en — archive : non vérifiée
4. Onion Routing (NRL), « Brief Selected History » (pour le contexte de l'atelier PET de 2000) — https://www.onion-router.net/History.html — P — en — archive : http://web.archive.org/web/20260917192011/https://www.onion-router.net/History.html
5. MIT Technology Review, « Ian Clarke », Innovators Under 35, 2003 — https://www.innovatorsunder35.com/the-list/ian-clarke/ — Pr — en — archive : aucune
6. Chaos Communication Congress 22C3, fiche d'intervenant « Ian Clarke », 2005 — https://events.ccc.de/congress/2005/fahrplan/speakers/638.en.html — Pr — en — archive : aucune
7. Hyphanet, « About » — https://www.hyphanet.org/pages/about.html — P — en — archive : http://web.archive.org/web/20260907140846/https://www.hyphanet.org/pages/about.html

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Hyphanet (« Freenet » y redirige ; aucun label, environ 12 ko). Article sur Ian Clarke l'informaticien **absent** : la page « Ian Clarke » parle d'un rugbyman · EN : https://en.wikipedia.org/wiki/Hyphanet (aucun label, environ 61 ko). https://en.wikipedia.org/wiki/Ian_Clarke_(computer_scientist) (aucun label). **Recommandé : EN.**

**Points d'attention**
- **Ambiguïté de nom** : aujourd'hui, « Freenet » (freenet.org) désigne le nouveau projet de Clarke lancé en 2023. Le Freenet historique s'appelle Hyphanet. Il faut le préciser dans le module.
- Freenet n'est pas « le premier dark web ». C'est un réseau de stockage distribué, au fonctionnement différent de Tor. En revanche, son mode « darknet » d'ami à ami est un usage précoce du mot dans ce sens.
- Le mot « darknet » a aussi été popularisé dans un sens plus large, celui des réseaux de partage non autorisés, par l'article de chercheurs de Microsoft : P. Biddle, P. England, M. Peinado, B. Willman, « The Darknet and the Future of Content Protection » (présenté en 2002, LNCS 2696, 2003, DOI 10.1007/978-3-540-44993-5_10 ; métadonnées Crossref seulement).
- La date « 2000 » convient pour la première version publique. Le projet universitaire et la conception publique datent de 1999. L'article est publié en 2001.

---

## SecureDrop (Aaron Swartz, Kevin Poulsen, James Dolan…)

**Tableau corrigé** — Où : États-Unis (New York et San Francisco) · Quand : 2011–2013 (conception de « DeadDrop » à partir de 2011 ; lancement par le *New Yorker* sous le nom Strongbox le 15 mai 2013 ; reprise par la Freedom of the Press Foundation le 15 oct. 2013) · Pourquoi : Une boîte aux lettres sécurisée, en logiciel libre, qui permet à des sources et lanceur·ses d'alerte de transmettre des documents à des rédactions via un service .onion de Tor. Aaron Swartz l'a codée avec Kevin Poulsen. James Dolan a organisé l'audit de sécurité, puis l'a maintenue pour la Freedom of the Press Foundation. *Changements : la date est précisée (conception dès 2011, mise en service en mai 2013). Le rôle de Dolan est précisé : relecture de sécurité, puis maintenance. Il n'était pas codéveloppeur au départ.*

**Faits clés**
- Kevin Poulsen (*Wired*) raconte qu'en octobre 2011, Aaron Swartz vient au bureau de *Wired* pour concevoir le système, « which we came to call DeadDrop ». Ce projet secondaire est terminé peu avant la mort de Swartz (janvier 2013) [1].
- À New York, l'expert en sécurité informatique James Dolan convainc trois collègues de relire l'architecture puis le code [1].
- Le *New Yorker* est le premier média à utiliser ce code, sous le nom « Strongbox » [1][2].
- Le 15 octobre 2013, la Freedom of the Press Foundation (FPF) annonce qu'elle « has taken charge of the DeadDrop project », rebaptisé SecureDrop. Elle embauche James Dolan pour maintenir le code et l'installer dans les rédactions [2].
- Le fonctionnement repose sur une application Python qui chiffre messages et documents. Chaque source reçoit un nom de code unique [2].
- En Europe, l'annuaire officiel de SecureDrop (consulté en oct. 2026) recense notamment *Der Spiegel* et la *Süddeutsche Zeitung* (Allemagne), le *Financial Times* et le *Guardian* (Royaume-Uni), Aftenposten, Dagbladet et NRK (Norvège), Aftonbladet (Suède), GreekLeaks (Grèce), la journaliste italienne Stefania Maurizi et le consortium **Forbidden Stories**, fondé en 2017 par Laurent Richard, qui publie en français. Le filtre « France » ne renvoie **aucune** instance [3][4][5][6].

**Sources**
1. K. Poulsen, « Strongbox and Aaron Swartz », *The New Yorker*, mai 2013 — https://www.newyorker.com/news/news-desk/strongbox-and-aaron-swartz — Pr (témoignage d'un acteur direct, donc proche du P) — en — archive : http://web.archive.org/web/20261003105858/https://www.newyorker.com/news/news-desk/strongbox-and-aaron-swartz
2. T. Timm, R. Reitman, « Freedom of the Press Foundation Launches SecureDrop… », FPF, 15 oct. 2013 — https://freedom.press/tech/news/freedom-of-the-press-foundation-launches-securedrop-an-open-source-submission-platform-for-whistleblowers/ — P — en — archive : http://web.archive.org/web/20160812225853/https://freedom.press/blog/2013/10/freedom-press-foundation-launches-securedrop (ancienne URL)
3. Freedom of the Press Foundation, « SecureDrop Directory » (filtres pays), consulté le 11 oct. 2026 — https://securedrop.org/directory/ — P — en — archive : aucune
4. SecureDrop Directory, fiche « Forbidden Stories » — https://securedrop.org/directory/forbidden-stories/ — P — en — archive : aucune
5. Forbidden Stories, « SafeBox – tutoriel » (mentionne SecureDrop) — https://forbiddenstories.org/safebox/tutorial/ — P — en — archive : aucune
6. Forbidden Stories, « Notre histoire » — https://forbiddenstories.org/fr/a-propos/mission/notre-histoire/ — P — fr — archive : non vérifiée

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/SecureDrop (aucun label, environ 14 ko) · EN : https://en.wikipedia.org/wiki/SecureDrop (aucun label, environ 15 ko). **Recommandé : FR ou EN** (tailles équivalentes). Pour l'origine, préférer le récit de Poulsen.

**Points d'attention**
- Ne pas dire « SecureDrop a été créé par Aaron Swartz » tout court : la conception est commune avec Poulsen. Les sources divergent sur la place de Dolan. Dans le récit de Poulsen, il organise la relecture de sécurité. La FPF le présente comme mainteneur à partir de 2013. Certaines sources secondaires en font un « cocréateur ».
- En France, je n'ai trouvé **aucun** média français dans l'annuaire SecureDrop. Le Monde a lancé en février 2015 avec des médias belges une plateforme francophone, « Source sûre », qui reposerait sur **GlobaLeaks** et non sur SecureDrop. Je n'ai pas pu le vérifier sur une source primaire (voir la section « Non vérifié »).
- SecureDrop n'est pas un « site du dark web » au sens sulfureux. C'est l'exemple type d'un usage légitime des services .onion, puisqu'il protège les sources des journalistes.
- Je n'ai pas reproduit les adresses .onion des médias, conformément à la consigne.

---

## Repères pour le module (dark net sans fantasme)

**Tableau corrigé** — Où : monde · Quand : 2001–2026 · Pourquoi : Repères chiffrés et définitions. Le deep web n'est pas le dark web. Le chiffre « 90 % » est un mythe issu d'une estimation de 2001 sur tout autre chose. Tor compte environ 3,2 M d'utilisateurs par jour en connexion directe (sept. 2026). Les services .onion représentaient environ 3,4 % du trafic des clients en 2015. Tor est légal en France, mais ne protège pas de tout.

**Faits clés**
- **Deep web ≠ dark web.** Le *web profond* désigne toutes les pages non indexées par les moteurs de recherche : messageries, comptes bancaires, bases de données, intranets. Le *dark web* désigne les sites qui ne sont accessibles qu'à travers des réseaux d'anonymisation comme Tor (sites .onion), qui permettent de publier sans révéler son identité ni sa localisation [1].
- **Le mythe des « 90 % ».** Il vient du livre blanc de Michael K. Bergman (BrightPlanet), « The Deep Web: Surfacing Hidden Value » (*Journal of Electronic Publishing*, 2001), fondé sur des mesures de mars 2000. Selon lui, le deep web public serait « 400 to 550 times larger » que le web de surface, soit 7 500 To contre 19 To. Ce « deep web » désignait les **bases de données dynamiques** (catalogues, archives…), pas des sites cachés : Tor n'existait pas encore. Le chiffre a ensuite été plaqué sur le « dark web » (image de l'iceberg). C'est **faux** pour le dark web, qui est minuscule par rapport au web public [2][3][4].
- **Utilisateurs de Tor.** Tor Metrics estime en moyenne **environ 3,19 millions** d'utilisateurs par jour en connexion directe en septembre 2026 (de 2,67 à 3,63 M selon les jours). S'y ajoutent environ 0,22 M d'utilisateurs via des « bridges » début octobre 2026. Ce sont des estimations tirées des requêtes d'annuaire, pas un comptage [5].
- **Part des services .onion.** Le Tor Project (billet du 26 févr. 2015, données préliminaires) estime qu'environ **3,4 % du trafic des clients** va vers des services cachés. 96,6 % du trafic Tor sert donc à aller sur le web « normal ». On comptait alors environ 30 000 services cachés par jour [6]. Aujourd'hui, Tor Metrics compte en moyenne environ 675 000 adresses .onion v3 uniques par jour (sept. 2026). Ce sont des adresses, pas des « sites » : beaucoup sont éphémères ou servent à des applications [7].
- **Adresses .onion officielles.** Facebook en ouvre une en octobre 2014, saluée par le Tor Project [8]. Le *New York Times* lance la sienne le 27 oct. 2017 (annonce de Runa Sandvik, directrice de la sécurité de l'information) [9]. La BBC ouvre le 23 oct. 2019 un miroir de son site international « in a bid to thwart censorship attempts » [10]. Deutsche Welle l'imite à la même époque (conférence d'Oliver Linow, DW, en février 2020) [11]. Il faut aussi citer les médias de l'annuaire SecureDrop (voir la fiche SecureDrop).
- **Silk Road.** Ross Ulbricht (« Dread Pirate Roberts ») gère ce marché de drogues de 2011 jusqu'à sa fermeture en 2013. Il est condamné le 29 mai 2015 à la perpétuité, avec deux peines de réclusion à perpétuité (BBC) [12][13]. Il a été **gracié par Donald Trump le 21 janvier 2025** (liste officielle des grâces du DOJ ; AP) [14][15]. Les enquêteurs l'ont identifié en partie grâce à des **messages publiés sur des forums ordinaires** dès janvier 2011, et non en « cassant » Tor [12][13].
- **AlphaBay et Hansa (2017).** L'annonce est faite le 20 juillet 2017. AlphaBay, avec plus de 250 000 annonces de drogues selon Europol, est fermé début juillet. Son administrateur présumé, Alexandre Cazes, est arrêté en Thaïlande le 5 juillet, puis retrouvé mort en détention. La police néerlandaise prend le contrôle de Hansa le 20 juin et l'**exploite en secret pendant un mois** pour recueillir des renseignements sur les utilisateurs qui y migraient. La France a participé à l'opération [16][17].
- **Légalité en France.** L'article 30 de la loi n° 2004-575 du 21 juin 2004 (LCEN) dispose : « L'utilisation des moyens de cryptologie est libre ». Seules la fourniture et l'import-export sont déclarées à l'ANSSI [18]. En décembre 2015, une note de la police qui proposait d'« interdire et bloquer » Tor (révélée par *Le Monde*) n'a pas été retenue. Le Premier ministre Manuel Valls s'est dit défavorable à une interdiction [19][20]. Utiliser Tor est donc légal. Ce qui est illégal, ce sont les actes commis avec.
- **Ce que Tor ne protège pas** (doc officielle). Seules les applications configurées passent par Tor. Il n'y a plus d'anonymat dès qu'on se connecte à un compte ou qu'on remplit un formulaire avec ses données. Le BitTorrent par Tor fait fuiter l'IP. Les documents téléchargés (PDF, DOC) ouverts hors ligne peuvent révéler l'IP. Sans HTTPS, le nœud de sortie voit le contenu. Par défaut, un observateur peut voir **que** l'on utilise Tor [21]. L'article de 2004 ajoute que Tor « does not claim to completely solve end-to-end timing or intersection attacks » : un adversaire qui observe les deux bouts peut corréler les flux [22].

**Sources**
1. D. Piscitello, « Le web invisible : terre des services cachés » (« The Dark Web: The Land of Hidden Services »), blog de l'ICANN, 27 juin 2017 — https://www.icann.org/fr/blogs/details/the-dark-web-the-land-of-hidden-services-27-6-2017-fr — Pr (institutionnel) — fr — archive : http://web.archive.org/web/20250505060854/https://www.icann.org/fr/blogs/details/the-dark-web-the-land-of-hidden-services-27-6-2017-fr
2. M. K. Bergman, « White Paper: The Deep Web: Surfacing Hidden Value », *Journal of Electronic Publishing* 7(1), août 2001 — DOI 10.3998/3336451.0007.104 (métadonnées Crossref ; l'éditeur renvoie 403, texte lu via [3]) — P — en — archive : aucune
3. « The Deep Web » (reprise des conclusions clés de Bergman), liste EAS-info, Yale, 2001 — https://mailman.yale.edu/pipermail/eas-info/2001/000234.html — S (copie contemporaine) — en — archive : http://web.archive.org/web/20260427111217/https://mailman.yale.edu/pipermail/eas-info/2001/000234.html
4. R. Dingledine, commentaire sous « Facebook, hidden services, and https certs », blog Tor, 31 oct. 2014 (refus des « pictures of shadowy icebergs ») — https://blog.torproject.org/facebook-hidden-services-and-https-certs/ — P — en — archive : aucune
5. Tor Metrics, « Relay users » (graphique et CSV, sept.-oct. 2026, plus bridges) — https://metrics.torproject.org/userstats-relay-country.html — P — en — archive : aucune
6. asn (Tor Project), « Some statistics about onions », 26 févr. 2015 — https://blog.torproject.org/some-statistics-about-onions/ — P — en — archive : aucune
7. Tor Metrics, « Unique .onion v3 addresses » — https://metrics.torproject.org/hidserv-dir-v3-onions-seen.html — P — en — archive : aucune
8. The Tor Project, « Facebook, hidden services, and https certs », 31 oct. 2014 — https://blog.torproject.org/facebook-hidden-services-and-https-certs/ — P — en — archive : aucune
9. G. Price, « Privacy: The New York Times Now Available as a Tor Onion Service », infoDOCKET (*Library Journal*), 27 oct. 2017. Cite le billet de R. Sandvik sur open.nytimes.com, qui m'a renvoyé un 403 — Pr — en — archive : http://web.archive.org/web/20260607193547/https://www.infodocket.com/2017/10/27/privacy-the-new-york-times-now-available-as-a-tor-onion-service/
10. BBC News, « BBC News launches 'dark web' Tor mirror », 23 oct. 2019 — https://www.bbc.com/news/technology-50150981 — Pr — en — archive : aucune
11. CrySP (Univ. of Waterloo), « Using Tor as a Public Broadcaster », O. Linow (Deutsche Welle), 28 févr. 2020 — https://crysp.uwaterloo.ca/speakers/20200228-Linow — Pr — en — archive : http://web.archive.org/web/20251211205110/https://crysp.uwaterloo.ca/speakers/20200228-Linow
12. BBC News, « Silk Road drug website founder Ross Ulbricht jailed », 30 mai 2015 — https://www.bbc.com/news/world-us-canada-32941060 — Pr — en — archive : http://web.archive.org/web/20260927213727/https://www.bbc.com/news/world-us-canada-32941060
13. BBC News, article sur l'arrestation et l'enquête, 2 oct. 2013 — https://www.bbc.com/news/technology-24371894 — Pr — en — archive : http://web.archive.org/web/20260927213727/https://www.bbc.com/news/technology-24371894
14. U.S. Department of Justice, Office of the Pardon Attorney, « Clemency Grants by President Donald J. Trump (2025-Present) » : « January 21, 2025 – 1 Pardon : Ross William Ulbricht… Life imprisonment (May 29, 2015) » — https://www.justice.gov/pardon/clemency-grants-president-donald-j-trump-2025-present — P — en — archive : aucune
15. C. Megerian (Associated Press), « Trump pardons founder of Silk Road website », 21 janv. 2025 (reprise News4JAX) — https://www.news4jax.com/news/politics/2025/01/22/trump-pardons-founder-of-silk-road-website/ — Pr — en — archive : aucune
16. C. Baraniuk, « AlphaBay and Hansa dark web markets shut down », BBC News, 20 juil. 2017 — https://www.bbc.com/news/technology-40670010 — Pr — en — archive : aucune
17. Europol, « Massive blow to criminal Dark Web activities after globally coordinated operation », juil. 2017. Seul le titre est lisible : page en JavaScript, archive non consultable depuis cet environnement — https://www.europol.europa.eu/media-press/newsroom/news/massive-blow-to-criminal-dark-web-activities-after-globally-coordinated-operation — P — en — archive : http://web.archive.org/web/20211031065019/https://www.europol.europa.eu/newsroom/news/massive-blow-to-criminal-dark-web-activities-after-globally-coordinated-operation
18. ANSSI, « Crypto, le webdoc – Chapitre III : Sécurité, secret et légalité » (cite l'art. 30 de la LCEN) — https://cyber.gouv.fr/crypto-le-webdoc/chapitre-iii-s%C3%A9curit%C3%A9-secret-et-l%C3%A9galit%C3%A9/ — P (autorité publique) — fr — archive : aucune
19. M. Rees, « “L'interdiction du Wi-Fi public n'est pas une piste” assure Manuel Valls », Next INpact (next.ink), 9 déc. 2015 — https://next.ink/15998/97646-l-interdiction-wi-fi-public-n-est-pas-piste-assure-manuel-valls/ — Pr — fr — archive : aucune
20. I. Thomson, « France says 'non' to Wi-Fi and Tor restrictions after terror attack », *The Register*, 11 déc. 2015 — https://www.theregister.com/security/2015/12/11/france-says-non-to-wi-fi-and-tor-restrictions-after-terror-attack/617267 — Pr — en — archive : aucune
21. The Tor Project, « Tor Browser best practices » (« Am I totally anonymous if I use Tor Browser? ») — https://support.torproject.org/tor-browser/security/using-tb-safely/ — P — en — archive : http://web.archive.org/web/20251012115130/https://support.torproject.org/faq/staying-anonymous/ (ancienne URL qui redirige)
22. Dingledine, Mathewson, Syverson, « Tor: The Second-Generation Onion Router », 2004, § 3 — https://svn-archive.torproject.org/svn/projects/design-paper/tor-design.pdf — P — en — archive : http://web.archive.org/web/20190717061307/https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Dark_web (environ 29 ko), https://fr.wikipedia.org/wiki/Web_profond (environ 19 ko), https://fr.wikipedia.org/wiki/Darknet (environ 24 ko), https://fr.wikipedia.org/wiki/.onion (environ 6 ko), https://fr.wikipedia.org/wiki/Silk_road (environ 12 ko), https://fr.wikipedia.org/wiki/Ross_Ulbricht (environ 10 ko), https://fr.wikipedia.org/wiki/AlphaBay (environ 36 ko) : aucun label · EN : https://en.wikipedia.org/wiki/Dark_web (environ 64 ko), https://en.wikipedia.org/wiki/Deep_web, https://en.wikipedia.org/wiki/Darknet, https://en.wikipedia.org/wiki/Silk_Road_(marketplace) (environ 82 ko), https://en.wikipedia.org/wiki/AlphaBay, https://en.wikipedia.org/wiki/Hansa_(market) : aucun label. **Recommandé : EN** pour Silk Road et Dark web. FR « AlphaBay » est étonnamment fourni.

**Points d'attention**
- Les définitions varient. Certains incluent le dark web dans le deep web, d'autres distinguent darknet (le réseau) et dark web (les contenus). Formulation sûre : « le dark web est une toute petite partie du web non indexé, accessible seulement via des logiciels d'anonymisation ». La traduction française de l'ICANN rend « dark web » par « web invisible », ce qui est source de confusion. À ne pas reprendre.
- Les chiffres Tor sont des **estimations**. Celui des utilisateurs mesure des clients connectés en moyenne, pas des personnes uniques. Toujours dater (« sept. 2026 »). La part de 3,4 % date de 2015, avec une méthode préliminaire. Je n'ai pas trouvé d'estimation plus récente publiée par le Tor Project. Il faut le dire.
- Silk Road : écrire « condamné en 2015 à la perpétuité, gracié en janvier 2025 ». Ne pas écrire « libéré pour bonne conduite » ni « peine commuée » : le DOJ la classe parmi les « Pardon », non parmi les commutations.
- Hansa est un cas d'école à double tranchant : l'anonymat technique n'empêche pas l'infiltration, et la police peut exploiter un marché saisi. Ne pas en tirer de mode d'emploi.
- Légalité : nuancer « Tor est légal » avec « ses usages restent soumis au droit commun ». L'éventuelle circonstance aggravante pour usage de cryptologie (art. 132-79 du Code pénal) n'a **pas** été vérifiée, faute d'accès à Légifrance (403).
- Pas de lien ni d'adresse vers des marchés, et pas d'adresses .onion dans le module, même légitimes : un lien vers torproject.org suffit.

---

## À vérifier plus tard

- **Légifrance** (403) : je n'ai pas lu le texte de l'art. 30 de la LCEN, seulement la citation de l'ANSSI. Même chose pour l'art. 132-79 du Code pénal (circonstance aggravante liée à la cryptologie), qui n'est pas confirmé.
- **Europol, communiqué AlphaBay/Hansa** : seul le titre est lu (page en JavaScript, Wayback inaccessible). Les détails viennent de la BBC, qui cite Europol.
- **DOJ, communiqué de condamnation d'Ulbricht (2015)** et **FBI** : pages protégées par un anti-robot, non lues. La date du 29 mai 2015 est confirmée par la liste des grâces du DOJ et par la BBC.
- **Bergman 2001** : le texte de l'éditeur (Univ. of Michigan) renvoie 403. Les chiffres sont lus dans une copie contemporaine (liste de Yale, 2001) et les métadonnées viennent de Crossref.
- **Owen & Savage, « The Tor Dark Net » (CIGI, 2015)** et **Moore & Rid, « Cryptopolitik and the Darknet » (Survival, 2016)** : ces travaux de recherche sur le contenu des services .onion ont tous deux été bloqués (403). Pour Moore & Rid, seules les métadonnées Crossref sont lues (vol. 58, p. 7-38). Ce seraient de bonnes sources de niveau 2 pour « qui utilise les .onion », à consulter.
- **New York Times, billet open.nytimes.com (2017)** : 403. L'information n'est confirmée que par infoDOCKET, qui le cite.
- **Deutsche Welle** : je n'ai pas trouvé la date exacte de lancement de son service .onion (2019 ?). Je n'ai qu'une confirmation indirecte, une conférence de février 2020 qui dit « recently launched ».
- **Le Monde, « Source sûre » (2015)** et son usage de GlobaLeaks : vu seulement dans des sources secondaires faibles (LinuxFr, Journal du Geek). Je n'ai pas trouvé d'article du Monde. Le fonctionnement actuel n'est pas vérifié.
- **Financement EFF (2004-2005)** : le début (T4 2004) est sourcé, pas la fin.
- **Rapport financier 2024-2025 du Tor Project** : introuvable au 11 oct. 2026.
- Les archives Wayback marquées « aucune » reprennent la réponse de l'API au moment de la requête (sous fort rate limiting). Un nouvel essai pourrait en trouver.
