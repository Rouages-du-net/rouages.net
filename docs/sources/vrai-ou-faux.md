# Sources — « Vrai ou faux ? »

Rubrique `/vrai-ou-faux/` (fiches dans `src/data/vrai-ou-faux.ts`), établie
selon la [charte des sources](../SOURCES.md). Les fiches ne contiennent **aucun
fait nouveau** : chacune reprend des faits déjà vérifiés dans un dossier de
module. Relecture du 1ᵉʳ novembre 2026.

| Fiche | Verdict | Dossier d'origine |
|---|---|---|
| Le dark net, c'est 90 % d'internet | Faux | [`dark-net.md`](dark-net.md) (deep web ≠ dark web, Bergman 2001, 3,4 % en 2015) |
| Utiliser Tor, c'est illégal | Faux | [`dark-net.md`](dark-net.md) (LCEN art. 30, note de 2015, AlphaBay et Hansa) |
| Internet a été créé pour résister à une attaque nucléaire | C'est plus compliqué | [`internet.md`](internet.md) (Baran, Leiner et al., Taylor, Lukasik) |
| Le Wi-Fi, c'est Hedy Lamarr | C'est plus compliqué | [`informatique.md`](informatique.md) (brevet de 1942, NIHF, Bluetooth, 802.11-1997) |
| Le premier bug était un papillon de nuit | Faux | [`informatique.md`](informatique.md) (cahier du Mark II, Edison, Shapiro) |
| L'IA comprend ce qu'elle dit / n'est qu'un perroquet | En débat | [`penser-la-technique.md`](penser-la-technique.md), thème 2 |
| Je n'ai rien à cacher | C'est plus compliqué | [`penser-la-technique.md`](penser-la-technique.md), thème 5 |
| Gutenberg a inventé l'imprimerie | Faux | [`penser-la-technique.md`](penser-la-technique.md), thème 4 bis (BnF) |
| En Chine, une note sociale unique | Faux | [`ia-surveiller.md`](ia-surveiller.md) (MIT Technology Review, MERICS) |
| Corrélation = causalité | Faux | [`ia-predire.md`](ia-predire.md) (Messerli 2012) |

## Points d'attention

- Ton bienveillant (`docs/VISION.md`, § 4) : dire d'où vient l'idée, sans
  moquerie.
- Les limites des dossiers d'origine s'appliquent : 3,4 % est une estimation
  préliminaire de 2015 ; Solove, Bubeck et Jones et Bergen n'ont été lus qu'en
  résumé ; la note de 2015 sur Tor n'est connue que par la presse ;
  l'éventuelle circonstance aggravante pour usage de cryptologie n'a pas été
  vérifiée.
- Fiches prévues, à sourcer : navigation privée, « le cloud, c'est
  dématérialisé », « supprimer un fichier l'efface », « les mails pèsent plus
  lourd que le streaming ».

---

## Fiches 11 à 15 (recherche du 6 novembre 2026)

Recherche du 6 novembre 2026, pour `src/data/vrai-ou-faux.ts` (et, si on veut,
un dossier `docs/sources/materialite.md` ou un ajout à `vrai-ou-faux.md` :
**ces fiches apportent des faits nouveaux**, contrairement aux dix
premières qui reprenaient des dossiers existants).

Légende : **[lu]** page ou PDF ouvert et lu (passages cités) ; **[extrait]**
seulement un extrait (résultats de moteur de recherche, ou page bloquée
lue par d'autres moyens) ; **[méta]** seulement les métadonnées ou le
résumé. Aucune requête n'a contenu de donnée personnelle ; User-Agent
`RouagesDuNet-research/0.1 (https://rouages.net)`. Wikipédia n'a pas été
consultée.

Correspondance des verdicts avec `Verdict` : « Faux » → `faux` ;
« Plutôt faux » et « Vrai mais… » → `nuance` (« C'est plus compliqué »).

Calculs faits par moi (signalés « calcul ») : à partir des facteurs ADEME
(Impact CO₂, Base Empreinte) — voiture thermique moyenne (diesel) :
**142 g CO₂e/km** ; stockage cloud : **0,24 g CO₂e par Go et par an** ;
smartphone : **80,2 kg CO₂e** (fabrication 99 %) ; ordinateur portable :
**193 kg CO₂e** (fabrication 95 %).

---

### 1. « La navigation privée me rend anonyme sur internet. »

**Verdict : Faux** (`faux`).

**Résumé (enBref).** La navigation privée efface, à la fermeture de la
fenêtre, ce que ton propre appareil garde : historique, cookies,
formulaires. Elle ne cache rien aux sites visités, à ton fournisseur
d'accès, ni à ton employeur ou ton école sur leur réseau.

#### Ce qui est vrai
- Firefox, Chrome et Safari n'enregistrent pas l'historique et effacent les
  cookies et données de sites de la session privée quand on la ferme
  (aides officielles de Chrome et de Safari, [lu]).
- Safari isole chaque onglet privé et active par défaut en navigation
  privée une protection avancée contre le pistage et le « vol d'empreinte »
  (Apple, [lu]). Chrome bloque par défaut les cookies tiers en navigation
  privée ; l'accord Brown c. Google l'engage à garder ce réglage cinq ans
  (accord du 1ᵉʳ avril 2024, [lu]).
- C'est utile sur un ordinateur partagé : la personne suivante ne voit pas
  tes recherches ni tes comptes restés connectés (c'est l'usage que met en
  avant la CNIL, 2016, [lu]).

#### Ce qui est faux
- **Les sites te voient toujours.** Chrome l'écrit : les sites consultés,
  y compris ceux de Google, peuvent voir ton activité ; de même
  « votre établissement scolaire, votre employeur » ou ton fournisseur
  d'accès (Google, [lu]). Mozilla : la navigation privée « ne te rend pas
  anonyme » vis-à-vis des sites, du FAI, de l'employeur ni des moteurs de
  recherche ([extrait] : page bloquée par un test anti-robot).
- **Ton adresse IP ne change pas.** La CNIL : le mode privé n'empêche pas
  un site ou un réseau publicitaire de reconnaître ton terminal « en
  utilisant d'autres technologies que les cookies (adresse IP ou
  Fingerprinting) » ; FAI et employeur peuvent « aisément accéder à vos
  données de navigation » ([lu], 2016).
- **L'empreinte du navigateur** (taille d'écran, polices, version, langue…)
  suffit souvent à reconnaître un appareil sans cookie. La CNIL précise
  que bloquer les cookies ne protège pas contre cette technique ([lu]).
  Chiffres : 83,6 % des 470 161 navigateurs testés par l'EFF en 2010
  avaient une empreinte unique (Eckersley, [lu]) ; sur 2 067 942 empreintes
  collectées en 2017 sur un grand site français, 33,6 % étaient uniques,
  et les autres « fragiles » (Gómez-Boix, Laperdrix, Baudry, WWW 2018,
  [lu]).
- **Ce que tu télécharges reste** sur l'appareil, de même que les
  favoris ; la navigation privée ne protège pas d'un logiciel espion
  (Mozilla [extrait] ; CNIL [lu]).

#### Explication technique simple
Une fenêtre privée, c'est un navigateur **avec un carnet jetable** : tout ce
qu'il note pendant la session (historique, cookies, cache) est jeté à la
fermeture. Mais la requête part sur le réseau exactement comme d'habitude :
même adresse IP, même chemin par la box, le FAI, les routeurs, même
serveur à l'arrivée. Pour masquer l'adresse IP, il faut un autre outil
(VPN, qui déplace la confiance vers son opérateur, ou Tor).

#### L'action collective Brown c. Google (encart « évolutif »)
- Plainte du 2 juin 2020 (Californie du Nord, n° 4:20-cv-03664-YGR) :
  Google collectait des données de navigation d'utilisateur·rices en mode
  Incognito (et en navigation privée d'autres navigateurs) via ses outils
  publicitaires et d'analyse présents sur les sites tiers.
- Accord déposé le 1ᵉʳ avril 2024 ([lu]) : clarifier les textes
  (l'écran Incognito doit dire que le mode ne change pas la collecte par
  les sites « y compris Google ») ; supprimer ou dépersonnaliser des
  « milliards » d'enregistrements ; retirer quatre « bits de détection »
  du mode Incognito ; garder le blocage des cookies tiers en Incognito
  cinq ans. **Pas de dommages et intérêts** versés aux membres du groupe
  (presse, The Register [lu]). Google jugeait la plainte sans fondement.
- **Non vérifié** : la date et le contenu de l'approbation définitive par
  la juge Yvonne Gonzalez Rogers (prévue à l'été 2024 selon la presse) ;
  le registre CourtListener demande une authentification.

#### Corps de texte proposé
1. Ouvrir une fenêtre privée, c'est demander à son navigateur d'oublier :
   à la fermeture, il efface l'historique, les cookies et ce qu'on a tapé
   dans les formulaires. Pratique sur l'ordinateur de quelqu'un d'autre,
   ou pour préparer une surprise sans laisser de traces sur l'appareil.
2. Mais ce qui sort de l'appareil ne change pas. Ta demande traverse ta
   box, ton fournisseur d'accès, le réseau de ton école ou de ton
   employeur, puis arrive au site, avec la même adresse IP qu'en temps
   normal. Chrome le dit lui-même : les sites, ton employeur ou ton
   fournisseur d'accès peuvent encore voir ton activité.
3. Même sans cookie, un site peut reconnaître ton navigateur à son
   « empreinte » : taille d'écran, polices installées, langue, version.
   En 2010, 83,6 % des navigateurs testés par l'EFF étaient uniques ; une
   étude de 2018 sur deux millions d'empreintes françaises en trouve
   33,6 %. Bloquer les cookies n'y change rien, rappelle la CNIL.
4. En 2024, Google a accepté de supprimer des milliards de données
   collectées pendant des sessions Incognito pour clore une action
   collective américaine, et de réécrire son avertissement : le mode ne
   change rien à ce que collectent les sites visités.
5. *Pourquoi l'idée est répandue* : le nom (« privé », « Incognito »),
   l'icône d'espion et le fait que, sur l'écran, tout disparaît vraiment.
   On confond ce que voit son propre appareil et ce que voit le réseau.

#### Sources (format `vrai-ou-faux.ts`)
```ts
{ auteur: 'Google', titre: 'Naviguer en mode navigation privée (Aide Google Chrome)', url: 'https://support.google.com/chrome/answer/95464?hl=fr', type: 'primaire' },
{ auteur: 'Apple', titre: 'Naviguer de manière privée dans Safari sur Mac', url: 'https://support.apple.com/fr-fr/guide/safari/ibrw1069/mac', type: 'primaire' },
{ auteur: 'CNIL', titre: 'La navigation privée pour limiter les risques de piratage de vos comptes en ligne', url: 'https://www.cnil.fr/fr/la-navigation-privee-pour-limiter-les-risques-de-piratage-de-vos-comptes-en-ligne', type: 'primaire', annee: 2016 },
{ auteur: 'P. Eckersley (EFF)', titre: 'How Unique Is Your Web Browser?', url: 'https://coveryourtracks.eff.org/static/browser-uniqueness.pdf', type: 'recherche', annee: 2010, langue: 'en' },
{ auteur: 'A. Gómez-Boix, P. Laperdrix, B. Baudry', titre: 'Hiding in the Crowd: an Analysis of the Effectiveness of Browser Fingerprinting at Large Scale (WWW 2018)', url: 'https://doi.org/10.1145/3178876.3186097', type: 'recherche', annee: 2018, langue: 'en' },
{ auteur: 'Brown et al. c. Google LLC', titre: 'Settlement Agreement, n° 4:20-cv-03664-YGR (doc. 1097-4)', url: 'https://www.classaction.org/media/brown-et-al-v-google-llc-et-al-settlement-agreement.pdf', type: 'primaire', annee: 2024, langue: 'en' },
```
Complément possible : Mozilla, « Common Myths about Private Browsing »,
`https://support.mozilla.org/fr/kb/idees-recues-navigation-privee` —
**à ouvrir dans un vrai navigateur avant publication** (bloqué ici ; l'URL
française exacte n'est pas vérifiée, l'anglaise est
`https://support.mozilla.org/en-US/kb/common-myths-about-private-browsing`).
Presse : The Register, 1ᵉʳ avril 2024,
`https://www.theregister.com/2024/04/01/google_will_delete_data_incognito/` [lu].
Recherche (survol) : Laperdrix et al., « Browser Fingerprinting: A survey »,
arXiv:1905.01051 [méta].

**Module** : `/modules/surveillance-vie-privee/` (données « anonymes » qui ne
le sont pas) ; secondaire : `/modules/entree-a-la-page/#box` (ce que voient
la box et le FAI).

#### Points d'attention
- La page CNIL date de 2016 : son fond reste juste, mais citer la date.
- Chiffres d'empreinte : 2010 (échantillon de personnes volontaires,
  sensibilisées, avec Flash et Java) contre 2018 (grand public) — ne pas
  présenter 83,6 % comme actuel. Les navigateurs ont depuis ajouté des
  protections (Safari, Firefox, Brave…).
- Ne pas laisser entendre que le VPN rend anonyme : il déplace la confiance.

---

### 2. « Le cloud, c'est dématérialisé. »

**Verdict : Faux** (`faux`).

**Résumé (enBref).** Le « nuage » est fait d'ordinateurs bien réels,
rangés dans des centres de données, reliés par des câbles et alimentés en
électricité. En 2024, ces centres ont consommé environ 415 TWh dans le
monde, 1,5 % de l'électricité mondiale (AIE).

#### Ce qui est vrai
- Pour l'utilisateur·rice, le service est « ailleurs » : on ne sait pas sur
  quelle machine sont ses photos, et elles sont souvent copiées dans
  plusieurs centres. Le mot décrit l'expérience, pas l'infrastructure.
- À l'échelle mondiale, la part des centres de données reste limitée :
  ~1,5 % de l'électricité mondiale en 2024 (AIE).

#### Ce qui est faux
- **Électricité** : ~415 TWh en 2024 pour les centres de données du monde,
  ~945 TWh projetés en 2030 dans le scénario de base (≈ 3 % de la demande
  mondiale), la hausse tirée par l'IA ; États-Unis en tête, Chine 25 % en
  2024 ; Europe ~115 TWh en 2030 (AIE, *Energy and AI*, avril 2025, repris
  dans *Energy and AI in East Asia* [lu]).
- **France** : en 2022, le numérique pèse 11 % de la consommation
  électrique française (51,5 TWh ; 65 TWh avec les centres de données à
  l'étranger qui servent des usages français) et 4,4 % de l'empreinte
  carbone nationale (29,5 Mt CO₂e) ; les centres de données représentent
  46 % de l'empreinte carbone du numérique ; environ 53 % des usages
  français sont hébergés à l'étranger (ADEME-Arcep, janvier 2025, [lu]).
- **Croissance** : chez les opérateurs de centres de données interrogés par
  l'Arcep (près de 160 centres en France), la consommation électrique
  augmente de 12 % en 2024 et les émissions associées de 23 % ; 575 000 m³
  d'eau prélevés, presque tout en eau potable (Arcep, édition 2026, données
  2024, [lu] ; périmètre : colocation, hors centres à usage interne).
- **Câbles** : plus de 1,5 million de km de câbles sous-marins en service
  début 2026 ; plus de 600 systèmes actifs ou prévus (TeleGeography, [lu]).

#### Explication technique simple
Quand une photo part « dans le cloud », elle voyage en paquets jusqu'à un
centre de données, où elle est écrite sur des disques, souvent en plusieurs
copies dans plusieurs bâtiments pour ne pas la perdre. Ces serveurs tournent
jour et nuit, il faut les alimenter, les refroidir, les remplacer. Le
« nuage » est un logo dessiné sur les schémas de réseau pour dire « la partie
qu'on ne détaille pas ».

#### Corps de texte proposé
1. Le mot « cloud » vient des schémas d'ingénieur·es : un petit nuage pour
   dire « ici, le réseau, dont on ne détaille pas l'intérieur ». À
   l'intérieur, il y a des bâtiments remplis de serveurs, des câbles sous
   les océans (plus de 1,5 million de km) et des centrales électriques.
2. En 2024, les centres de données du monde ont consommé environ 415 TWh,
   1,5 % de l'électricité mondiale, selon l'Agence internationale de
   l'énergie. Elle prévoit un doublement d'ici 2030, surtout à cause de
   l'IA.
3. En France, le numérique représente 11 % de la consommation électrique
   et 4,4 % de l'empreinte carbone (chiffres 2022, ADEME et Arcep). Près
   de la moitié de cette empreinte vient des centres de données, dont une
   bonne partie à l'étranger : plus de la moitié de nos usages y sont
   hébergés.
4. *Pourquoi l'idée est répandue* : on ne voit jamais ces machines, les
   services sont gratuits ou presque, et le vocabulaire (« nuage »,
   « virtuel », « en ligne ») efface leur poids.

#### Sources
```ts
{ auteur: 'Agence internationale de l’énergie', titre: 'Energy and AI in East Asia (reprend les chiffres de Energy and AI, 2025)', url: 'https://iea.blob.core.windows.net/assets/431d7d22-039e-46d3-9832-090a8b4075fc/EnergyandAIinEastAsia.pdf', type: 'primaire', annee: 2026, langue: 'en' },
{ auteur: 'ADEME et Arcep', titre: 'Évaluation de l’impact environnemental du numérique en France – mise à jour (données 2022)', url: 'https://ecoresponsable.numerique.gouv.fr/docs/2024/etude-ademe-impacts-environnementaux-numerique.pdf', type: 'primaire', annee: 2025 },
{ auteur: 'Arcep', titre: 'Enquête annuelle « Pour un numérique soutenable », édition 2026', url: 'https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/impact-environnemental/enquete-annuelle-pour-un-numerique-soutenable-edition-2026.html', type: 'primaire', annee: 2026 },
{ auteur: 'TeleGeography', titre: 'Submarine Cable FAQs', url: 'https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions', type: 'site', annee: 2026, langue: 'en' },
```
Page principale de l'AIE (bloquée ici, HTTP 403) :
`https://www.iea.org/reports/energy-and-ai` [méta] — à préférer en lien si
elle s'ouvre dans un navigateur. La « date de révision avril 2026 » du
rapport Asie de l'Est n'est connue que par un résultat de recherche.

**Module** : `/modules/entree-a-la-page/#serveur` (le module dit déjà
« Le cloud est dématérialisé. Non », étape 5) ; à terme, **module
Matérialité à venir** (annoncé sur la page d'accueil : « Câbles
sous-marins, datacenters, énergie, métaux »).

#### Points d'attention
- 415 TWh est une estimation (l'AIE donne des scénarios ; un résumé
  secondaire cite 485 TWh pour 2025 — non vérifié).
- Les chiffres ADEME-Arcep sont « conservateurs » de l'aveu même du
  rapport (pas l'IA générative, pas les réseaux hors de France).
- Ne pas additionner chiffres mondiaux (AIE) et français (ADEME), ni
  comparer TWh et CO₂e.

---

### 3. « Un fichier supprimé, corbeille vidée, a disparu. »

**Verdict : Plutôt faux** (`nuance`).

**Résumé (enBref).** Vider la corbeille efface surtout la référence au
fichier : sur un disque dur, ses données restent en place jusqu'à ce que
quelque chose les recouvre, et un logiciel peut souvent les récupérer. Sur
un SSD, le fonctionnement interne les fait souvent disparaître vite, mais
sans garantie : pour un vrai effacement, il faut des commandes dédiées ou
le chiffrement.

#### Ce qui est vrai
- Pour l'usage courant, le fichier n'apparaît plus et l'espace est
  réutilisable.
- Sur un SSD, le « ramasse-miettes » interne peut détruire très vite des
  données supprimées, sans commande de l'ordinateur : dans l'expérience de
  Bell et Boddington (2010), les données d'un SSD devenaient en grande
  partie irrécupérables quelques minutes après un formatage rapide,
  alors que tout restait récupérable sur le disque dur témoin (résumé
  [lu] ; chiffres détaillés [extrait] via la presse).

#### Ce qui est faux
- **Disque dur** : supprimer retire l'entrée du système de fichiers ; les
  blocs sont marqués libres mais pas réécrits. Microsoft propose un outil
  pour récupérer des fichiers « qui ne peuvent pas être restaurés à partir
  de la Corbeille » et conseille, pour augmenter ses chances, de
  « réduire ou éviter d'utiliser » l'ordinateur ; l'espace libre a pu être
  remplacé, « en particulier sur un disque SSD » (Microsoft, [lu]).
- **SSD** : la commande TRIM (le système signale au SSD les blocs
  libérés) n'a « aucun effet fiable sur la sécurité des données » ; aucune
  méthode d'effacement de fichier individuel conçue pour les disques durs
  n'était efficace sur SSD ; même les commandes d'effacement intégrées
  étaient parfois mal implémentées (Wei et al., USENIX FAST 2011, [lu]).
- **Écraser « 7 fois »** n'est plus la règle : le NIST (SP 800-88 rév. 2,
  septembre 2025) rappelle que les écrasements multiples hérités du
  DoD 5220.22-M donnent « très peu » de protection sur les SSD
  sur-provisionnés, à cause des cellules de réserve et de la répartition
  de l'usure ([lu]).

#### Ce qui marche (NIST SP 800-88 rév. 2, [lu])
- Trois niveaux : **effacer** (*clear*, réécriture logique : contre la
  récupération logicielle simple), **purger** (*purge* : commandes
  d'effacement dédiées du support, effacement cryptographique,
  démagnétisation : récupération « infaisable » même en laboratoire),
  **détruire**. Le NIST recommande de purger quand c'est possible.
- **Effacement cryptographique** : si le disque est chiffré, détruire la
  clé rend les données illisibles très vite (sous conditions).
- CNIL (fiche du 14 mars 2024, [lu]) : « supprimer de façon sécurisée »
  les données avant mise au rebut, réparation ou fin de location ; ne pas
  revendre ni jeter un support sans effacement sécurisé ; utiliser des
  logiciels audités ou certifiés (l'ANSSI délivre des certifications de
  premier niveau, CSPN).

#### Corps de texte proposé
1. Un disque garde une sorte de table des matières : tel fichier commence
   ici, finit là. Supprimer un fichier, puis vider la corbeille, efface
   surtout la ligne de la table des matières. Les données restent sur le
   disque, marquées « place libre », jusqu'à ce qu'autre chose s'écrive
   par-dessus.
2. C'est pour ça que des logiciels de récupération existent, y compris
   chez Microsoft, qui conseille d'utiliser le moins possible l'ordinateur
   avant d'essayer : chaque nouvelle écriture peut recouvrir le fichier.
3. Les SSD compliquent l'histoire. Leur puce déplace sans cesse les
   données pour ménager la mémoire et nettoie en tâche de fond : un
   fichier supprimé y disparaît souvent vite. Mais ces mêmes mécanismes
   laissent parfois des copies cachées, hors de portée des logiciels
   classiques d'effacement : en 2011, des chercheur·ses de San Diego n'ont
   trouvé aucune méthode d'effacement de fichier fiable sur SSD.
4. Pour vraiment effacer avant de donner ou vendre un appareil : chiffrer
   le disque dès le départ, puis utiliser la réinitialisation d'usine ou
   la commande d'effacement prévue par le fabricant (les « purges » du
   NIST), ou un logiciel certifié, comme le recommande la CNIL.
5. *Pourquoi l'idée est répandue* : le fichier disparaît de l'écran, et
   l'icône de corbeille vidée donne l'image d'un vrai ramassage.

#### Sources
```ts
{ auteur: 'NIST', titre: 'SP 800-88 Rev. 2 – Guidelines for Media Sanitization', url: 'https://csrc.nist.gov/pubs/sp/800/88/r2/final', type: 'primaire', annee: 2025, langue: 'en' },
{ auteur: 'M. Wei, L. M. Grupp, F. E. Spada, S. Swanson (USENIX FAST)', titre: 'Reliably Erasing Data From Flash-Based Solid State Drives', url: 'https://www.usenix.org/legacy/events/fast11/tech/full_papers/Wei.pdf', type: 'recherche', annee: 2011, langue: 'en' },
{ auteur: 'G. B. Bell, R. Boddington', titre: 'Solid State Drives: The Beginning of the End for Current Practice in Digital Forensic Recovery? (JDFSL 5-3)', url: 'https://commons.erau.edu/jdfsl/vol5/iss3/1/', type: 'recherche', annee: 2010, langue: 'en' },
{ auteur: 'CNIL', titre: 'Sécurité : encadrer la maintenance et la fin de vie des matériels et logiciels', url: 'https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels', type: 'primaire', annee: 2024 },
{ auteur: 'Microsoft', titre: 'Récupération de fichier Windows', url: 'https://support.microsoft.com/fr-fr/windows/r%C3%A9cup%C3%A9ration-de-fichiers-windows-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4', type: 'primaire' },
```
PDF du NIST : `https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf` [lu].

**Module** : `/modules/ordinateur/#memoire` (le stockage qui garde les
données une fois éteint).

#### Points d'attention
- Aucune page de l'**ANSSI** n'a été lue : la mention CSPN vient de la CNIL.
  Si on veut l'ANSSI en source, chercher son guide ou la liste des produits
  certifiés « effacement de données ».
- Wei et al. testent des SSD de 2011 ; les SSD récents et les téléphones
  (chiffrés par défaut) rendent la récupération bien plus difficile — dire
  « souvent », pas « toujours ».
- Ne pas expliquer comment récupérer les fichiers d'autrui.

---

### 4. « Supprimer ses vieux mails sauve la planète. »

**Verdict : Plutôt faux** (`nuance`).

**Résumé (enBref).** Garder un mail stocké coûte très peu : selon l'ADEME,
un Go conservé un an dans le cloud pèse environ 0,24 g CO₂e. L'essentiel de
l'empreinte du numérique vient de la fabrication des appareils : faire
durer son téléphone compte bien plus que vider sa boîte.

#### Ce qui est vrai
- Stocker n'est pas gratuit : centres de données, disques, électricité.
  L'ADEME confirme que vider sa boîte de ses mails les plus lourds
  « réduit son impact numérique », mais « dans une faible proportion »
  comparé à d'autres actions (Impact CO₂, FAQ ADEME, [lu]).
- Les grosses pièces jointes envoyées à beaucoup de monde pèsent plus
  (ADEME, [lu]) ; l'étude ADEME de 2011 estimait ~6 g CO₂e par destinataire
  supplémentaire pour un courriel de 1 Mo (presse 2011, [lu]).

#### Ce qui est faux
- **Ordres de grandeur** (ADEME, Base Empreinte via Impact CO₂, [lu]) :
  - stockage cloud : 0,24 g CO₂e par Go et par an ;
  - smartphone : 80,2 kg CO₂e, dont 99 % pour la fabrication ;
  - ordinateur portable : 193 kg CO₂e, dont 95 % pour la fabrication.
  - *Calcul* : supprimer 10 Go de mails évite environ 2,4 g CO₂e par an,
    soit l'équivalent d'environ 17 m en voiture thermique ; il faudrait
    garder ces 10 Go plus de 30 000 ans pour égaler la fabrication d'un
    seul smartphone.
- **Fabrication** : en France (2022), la fabrication représente 60 % de
  l'empreinte carbone du numérique et l'usage 40 % ; les terminaux 50 %,
  les centres de données 46 %, les réseaux 4 % (ADEME-Arcep 2025, [lu]).
  L'étude précédente (données 2020) attribuait près de 80 % des émissions
  à la fabrication des équipements des utilisateur·rices (même rapport,
  [lu]).
- **Les chiffres qui circulent sont anciens** :
  - « 19 g par mail » vient d'une étude ADEME de juillet 2011 (bureau
    d'études BIOIS) qui supposait des courriels d'**1 Mo en moyenne** en
    entreprise ; le rapport lui-même n'a pas été retrouvé (presse 2011
    [lu] pour les scénarios ; le « 19 g » seulement [extrait]).
  - « 4 g par mail, 50 g avec pièce jointe » vient du livre de Mike
    Berners-Lee *How Bad Are Bananas?* (2010) ; l'édition 2020 donnerait
    0,3 g pour un mail court ([extrait], livre non consulté).
  - Le « 16 433 tonnes si chaque Britannique envoyait un merci de moins »
    vient d'un communiqué d'OVO Energy (novembre 2019) fondé sur 1 g par
    mail ; Berners-Lee y voyait des « estimations grossières » ([extrait],
    communiqué redirigé, introuvable).
  - Aujourd'hui, l'ADEME affiche 2,46 g CO₂e par mail dans son étiquette
    (les paramètres exacts ne sont pas détaillés ; avec les réglages par
    défaut du simulateur : 0,11 g) ([lu]).

#### Corps de texte proposé
1. Un mail stocké occupe un peu de place sur des disques, quelque part
   dans un centre de données, et ces disques consomment de l'électricité.
   Supprimer ses mails n'est donc pas inutile. Mais c'est minuscule : selon
   l'ADEME, garder un gigaoctet un an dans le cloud émet environ 0,24 g de
   CO₂e.
2. Faisons le calcul : vider 10 Go de mails économise environ 2,4 g par an,
   l'équivalent d'une quinzaine de mètres en voiture. La fabrication d'un
   seul smartphone, elle, pèse environ 80 kg.
3. En France, 60 % de l'empreinte carbone du numérique vient de la
   fabrication des appareils (ADEME et Arcep, chiffres 2022). Extraire les
   métaux, fabriquer les puces, assembler, transporter : tout se joue avant
   même d'allumer l'écran.
4. Les chiffres alarmants qui circulent (« 19 g par mail ») datent de 2011
   et supposaient des courriels d'un mégaoctet, avec pièces jointes. Leurs
   auteurs, comme l'ADEME, les ont depuis revus à la baisse.
5. Ce qui compte vraiment : garder ses appareils longtemps, les faire
   réparer, en acheter moins, préférer le Wi-Fi au réseau mobile, et éviter
   d'envoyer de grosses pièces jointes à des dizaines de personnes.
   *Pourquoi l'idée est répandue* : c'est un geste simple, à la portée de
   chacun·e, qui donne l'impression d'agir.

#### Sources
```ts
{ auteur: 'ADEME', titre: 'Impact CO₂ – Usage numérique (FAQ : « Vider sa boîte mail permet-il de réduire son impact numérique ? »)', url: 'https://impactco2.fr/outils/usagenumerique', type: 'primaire', annee: 2026 },
{ auteur: 'ADEME', titre: 'Impact CO₂ – Go de données (1 an de stockage dans le cloud)', url: 'https://impactco2.fr/outils/usagenumerique/stockagedonnee', type: 'primaire', annee: 2026 },
{ auteur: 'ADEME', titre: 'Impact CO₂ – Smartphone (étude ADEME-Arcep, mise à jour 2025)', url: 'https://impactco2.fr/outils/numerique/smartphone', type: 'primaire', annee: 2025 },
{ auteur: 'ADEME et Arcep', titre: 'Évaluation de l’impact environnemental du numérique en France – mise à jour (données 2022)', url: 'https://ecoresponsable.numerique.gouv.fr/docs/2024/etude-ademe-impacts-environnementaux-numerique.pdf', type: 'primaire', annee: 2025 },
{ auteur: 'Enerzine', titre: 'Mail, requête Web et clé USB pèsent lourd en CO2 [I] (étude ADEME de 2011)', url: 'https://www.enerzine.com/mail-requete-web-et-cle-usb-pesent-lourds-en-co2-i/13551-2011-07', type: 'presse', annee: 2011 },
```
Autres pages ADEME lues : email `https://impactco2.fr/outils/usagenumerique/email`,
ordinateur portable `https://impactco2.fr/outils/numerique/ordinateurportable`,
voiture thermique `https://impactco2.fr/outils/transport/voiturethermique`.

**Module** : **module Matérialité à venir**.

#### Points d'attention
- Impact CO₂ est une page dynamique, mise à jour sans numéro de version :
  noter la date de consultation (6 novembre 2026) ; les valeurs « par
  mail » dépendent beaucoup des paramètres choisis.
- Le rapport ADEME 2011 n'a pas été retrouvé : ne pas écrire « 19 g » comme
  chiffre ADEME vérifié ; dire « un chiffre souvent attribué à une étude
  ADEME de 2011 ».
- Les chiffres Berners-Lee et OVO ne sont connus que par extraits : les
  mentionner sans les chiffrer, ou les vérifier dans le livre.
- Le calcul « 30 000 ans » compare du CO₂e de stockage et de fabrication,
  tous deux en cycle de vie ADEME : cohérent, mais à présenter comme ordre
  de grandeur.

---

### 5. « Une heure de vidéo en streaming pollue comme X km en voiture. »

**Verdict : Vrai mais… le X varie énormément** (`nuance`).

**Résumé (enBref).** Le chiffre le plus cité (une demi-heure de vidéo =
1,6 kg de CO₂, environ 6 km en voiture) venait d'une erreur de conversion,
corrigée en 2020. Les estimations sérieuses tournent autour de quelques
dizaines de grammes par heure, soit quelques centaines de mètres en voiture,
et varient d'un facteur 10 à 30 selon l'écran, le réseau et l'électricité.

#### Ce qui est vrai
- La vidéo est l'usage le plus gourmand en données ; l'ADEME conseille de
  réduire ses usages « très consommateurs de données », la vidéo en tête
  (Impact CO₂, [lu]).
- Une heure de vidéo émet bien quelque chose : 36 g CO₂ par heure en
  moyenne mondiale 2019 selon l'AIE (électricité seule ; révisé de 82 g à
  36 g en novembre 2020) ; 64 g CO₂e pour une heure avec la fabrication
  des appareils selon l'étiquette de l'ADEME (Carbon Brief [lu] ; ADEME
  [lu]). *Calcul* avec 142 g/km : 36 g ≈ 250 m, 64 g ≈ 450 m en voiture
  thermique.

#### Ce qui est faux
- **Le chiffre viral** : « une demi-heure de vidéo = 1,6 kg de CO₂, soit
  6,28 km en voiture » (AFP, 28 octobre 2019) venait d'une interview d'un
  collaborateur du Shift Project, avec une **erreur bits/octets** (3 Mo/s au
  lieu de 3 Mbit/s, soit ×8). Le Shift Project l'a reconnu en juin 2020 :
  le chiffre n'était dans aucun de ses rapports ; corrigé, son modèle donne
  0,40 kg CO₂e par heure, encore 4 à 7 fois plus que l'AIE ([lu]).
- Carbon Brief (février 2020, mis à jour en novembre 2020) relève d'autres
  écarts : débit supposé six fois trop élevé, consommation des centres de
  données ~35 fois et des réseaux ~50 fois trop forte, celle des écrans
  ~4 fois trop faible ([lu]).

#### Pourquoi les chiffres varient d'un facteur 10 à 100
- **L'écran** : une télévision LED de 50 pouces consomme environ 100 fois
  plus qu'un smartphone (Carbon Brief, [lu]). Dans l'estimation AIE, les
  écrans font 72 % de l'énergie, la transmission 23 %, les centres de
  données 5 %.
- **Le réseau** : Wi-Fi ou fibre contre 4G (l'ADEME : le Wi-Fi « jusqu'à
  10 fois moins impactant » que le réseau mobile, [lu]) ; et surtout la
  méthode : compter les réseaux en kWh par Go (comme si chaque octet
  coûtait) ou en kWh par heure de visionnage (le réseau consomme à peu près
  pareil qu'on l'utilise ou non) — Carbon Brief recommande la seconde pour
  la vidéo ([lu]).
- **La définition** : environ 0,7 Go/h en définition standard contre 7 Go/h
  en 4K (Carbon Brief, [lu]).
- **L'électricité** : en France (~90 % d'électricité bas carbone), la
  demi-heure tombe à environ 2 g CO₂e, « 10 mètres » en voiture (Carbon
  Brief, [lu]).
- **Le périmètre** : électricité seule (AIE) ou cycle de vie avec la
  fabrication des appareils (ADEME).
- Ordres de grandeur rapportés par le Shift Project à partir du modèle de
  l'AIE : de 0,037 kWh/h (vidéo SD sur smartphone en Wi-Fi) à 1,199 kWh/h
  (4K sur smartphone en 4G), un **facteur 32** ([lu]).

#### Corps de texte proposé
1. En 2019, une phrase a fait le tour du monde : regarder une
   demi-heure de vidéo émettrait 1,6 kg de CO₂, autant que six kilomètres
   en voiture. Elle venait d'une interview, avec une erreur de conversion :
   des mégaoctets au lieu de mégabits, un chiffre huit fois trop gros. Le
   Shift Project, dont venait le chiffre, l'a reconnu en 2020.
2. Les estimations actuelles sont bien plus basses : 36 g de CO₂ par heure
   en moyenne mondiale selon l'Agence internationale de l'énergie, 64 g
   selon l'ADEME qui compte aussi la fabrication des appareils. Quelques
   centaines de mètres en voiture, pas des kilomètres.
3. Mais aucun chiffre unique n'est juste pour tout le monde. Une heure sur
   une grande télé, en 4K, en 4G, dans un pays qui produit son électricité
   au charbon, peut peser des dizaines de fois plus qu'une heure sur un
   téléphone en Wi-Fi en France, où l'électricité est surtout bas carbone.
4. Ce qui pèse le plus, c'est souvent l'écran lui-même, sa fabrication et
   sa consommation, plus que les serveurs. Regarder sur un petit écran, en
   Wi-Fi, sans 4K quand ce n'est pas utile, et garder sa télé longtemps :
   voilà ce qui change vraiment la donne.
5. *Pourquoi l'idée est répandue* : la comparaison avec la voiture est
   parlante, et elle a été reprise par de nombreux médias, souvent en
   visant une seule plateforme, alors qu'elle portait sur la vidéo en
   général.

#### Sources
```ts
{ auteur: 'The Shift Project', titre: 'Did The Shift Project really overestimate the carbon footprint of online video? Our analysis of the IEA and CarbonBrief articles', url: 'https://theshiftproject.org/app/uploads/2025/04/2020-06_Did-TSP-overestimate-the-carbon-footprint-of-online-video_EN.pdf', type: 'primaire', annee: 2020, langue: 'en' },
{ auteur: 'Carbon Brief', titre: 'Factcheck: What is the carbon footprint of streaming video on Netflix?', url: 'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/', type: 'presse', annee: 2020, langue: 'en' },
{ auteur: 'ADEME', titre: 'Impact CO₂ – Streaming vidéo', url: 'https://impactco2.fr/outils/usagenumerique/streamingvideo', type: 'primaire', annee: 2026 },
{ auteur: 'ADEME', titre: 'Impact CO₂ – Voiture thermique (modélisation 2025)', url: 'https://impactco2.fr/outils/transport/voiturethermique', type: 'primaire', annee: 2025 },
```
À ajouter si elle s'ouvre (403 ici) : AIE, G. Kamiya, « The carbon
footprint of streaming video: fact-checking the headlines »,
`https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines`
[méta] — c'est la version AIE de l'analyse (Shift Project : publiée le
25 mars 2020 sur le site de l'AIE ; auteur George Kamiya).

**Module** : **module Matérialité à venir** ; secondaire
`/modules/entree-a-la-page/#voyage` (le voyage des paquets).

#### Points d'attention
- La page Carbon Brief est signée « Carbon Brief Staff » dans ses
  métadonnées ; le Shift Project l'attribue à George Kamiya (analyste à
  l'AIE). La page a été modifiée en 2020 et ses métadonnées indiquent une
  modification en juillet 2026 : relire avant publication.
- Les 36 g sont du CO₂ lié à l'électricité (2019, moyenne mondiale) ; les
  64 g de l'ADEME sont du CO₂e avec fabrication (France) : ne pas les
  présenter comme une contradiction, mais comme deux périmètres.
- Le Shift Project maintient que ses estimations globales (vidéo en ligne
  ≈ 1 % des émissions mondiales, rapport 2019) ne sont pas touchées par
  l'erreur ; ce point reste débattu (présenter les deux positions).
- Pour un module sur la matérialité, l'IA générative change la donne
  (l'ADEME le souligne) : à suivre, fiche à marquer `evolutif`.

---

### Liens bloqués ou non ouverts (à vérifier dans un navigateur)

| Lien | Problème | Utilité |
|---|---|---|
| support.mozilla.org (mythes de la navigation privée) | test anti-robot | source primaire Firefox, fiche 1 |
| iea.org (*Energy and AI*, commentaire Kamiya) | HTTP 403 | source primaire AIE, fiches 2 et 5 |
| hal.science (Gómez-Boix et al.) | anti-robot (Anubis) | version ouverte de l'article |
| CourtListener (Brown c. Google) | authentification | approbation définitive de l'accord |
| web.archive.org | connexion coupée | archives |
| Rapport ADEME 2011 sur le courriel | introuvable | origine du « 19 g » |
| Communiqué OVO Energy 2019 | redirigé vers une page générique | origine du « merci de moins » |
