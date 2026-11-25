# Dossier de sources : fiches institutions et carte des rapports de force

Pages `/institutions/` et `/institutions/<sigle>/`, rédigées le 24-25 novembre 2026 (données : `src/data/institutions.ts`). Recherche déléguée à un agent puis relue. **Règle appliquée** : seuls les faits marqués [lu] ou déjà vérifiés dans le dépôt sont publiés ; les faits [résumé/métadonnées seulement] ont été écartés (par exemple : rôle de l'Arcom comme coordinatrice DSA, blocage de la nomination du Contrôleur européen, présidence de l'Arcom, budget de LACNIC).


Recherche menée le **24 novembre 2026** (User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)` pour curl ;
outils WebFetch et WebSearch pour le reste). Aucune donnée personnelle de l'utilisateur dans les requêtes.
Aucun fichier écrit dans le dépôt.

**Statuts**
- **[lu]** : page ou PDF ouvert et lu (curl + extraction du texte, ou WebFetch).
- **[résumé/métadonnées seulement]** : vu seulement dans un résultat ou un résumé de moteur de recherche, ou
  page bloquée (Cloudflare, Incapsula, 403). À rouvrir avant publication.
- **[non trouvé]** : cherché, pas de source trouvée.
- **[déjà dans le dépôt : fichier:ligne]** : fait déjà vérifié dans le dépôt ; non re-cherché.

Abréviations des fichiers du dépôt :
- **GT** = `docs/sources/gouvernance-technique.md`
- **ER** = `docs/sources/etats-regulation.md`
- **gouv.ts** = `src/data/gouvernance.ts` ; **etats.ts** = `src/data/etats.ts`

Sites bloqués pendant cette recherche : intgovforum.org (Cloudflare, 403), cyber.gouv.fr (Incapsula),
edps.europa.eu (403 sur WebFetch, PDF non servis à curl), arcom.fr (tunnel coupé, puis 404), Légifrance
(déjà signalé dans ER:43). Aucun article Wikipédia n'a été ouvert : pas de rubrique « pour aller plus loin »
vérifiée dans ce dossier.

---

## 1. IETF (Internet Engineering Task Force)

- **Nom** : Internet Engineering Task Force (pas de nom officiel français ; « groupe de travail de génie
  d'internet » est une traduction libre).
- **Nature** : communauté **sans personnalité juridique** et **sans membres** (« There is no membership in the
  IETF ») [déjà dans le dépôt : GT:187-189]. Son « foyer juridique » est l'**IETF Administration LLC**
  (société à responsabilité limitée, créée en août 2018, filiale de l'ISOC au sens de la RFC 8711)
  [déjà dans le dépôt : GT:228-233].
- **Création** : première réunion en janvier 1986 à San Diego (21 personnes) [déjà dans le dépôt : GT:172-178].
- **Siège** : pas de siège propre ; l'IETF LLC est la structure juridique (lieu d'immatriculation non vérifié
  [non trouvé]).
- **Qui décide**
  - Groupes de travail ouverts, consensus approximatif, pas de vote [déjà dans le dépôt : GT:194-201, 256-268].
  - L'IESG approuve les documents ; l'IAB (13 membres) ; NomCom de 10 volontaires tirés au sort
    [déjà dans le dépôt : GT:203-215].
  - **Chaîne de confirmation (RFC 8713, §3.7.3)** : « The sitting IAB members review the IESG candidates. The
    Internet Society Board of Trustees reviews the IAB candidates. » [lu] https://www.rfc-editor.org/rfc/rfc8713.txt
  - **Conseil de l'IETF LLC (RFC 8711, §6.1)** : 5 à 7 administrateur·rices : 1 président·e de l'IETF (ou délégué·e
    choisi·e par l'IESG), **1 nommé·e par le conseil d'administration de l'ISOC**, 3 choisi·es par le NomCom
    et confirmé·es par l'IESG, jusqu'à 2 cooptés. [lu] https://www.rfc-editor.org/rfc/rfc8711.txt
- **Financement (budget 2026, IETF LLC, finalisé le 28 janvier 2026)** [lu]
  https://www.ietf.org/blog/ietf-administration-llc-2026-budget/
  - Recettes : **14 007 414 $** (dont 9 455 661 $ hors réunions, 4 551 753 $ de réunions) ;
    dépenses : 13 441 517 $ ; résultat : +565 897 $.
  - Hypothèses : « ISOC contribution as per our agreement » ; « ICANN grant revenue released as the
    conditions of the grant are met » ; « 2025 included the $1m ARIN donation match » ; dépréciation
    d'équipement donné par Cisco (306 168 $/an).
  - **ISOC** : accord prolongé jusqu'en mars 2029, **47,1 M$ de 2024 à 2029** (dont 25,2 M$ pour 2027-2029),
    versés via l'Internet Society Foundation ; plus des dons « matching » (l'ISOC double certains dons).
    [lu] https://www.ietf.org/blog/isoc-extends-financial-support-to-2029/ (billet du 10 janvier 2024)
  - Le rapport annuel 2025 de l'ISOC chiffre son soutien 2025 à **7,3 M$** [lu] (voir §3).
  - Un projet de budget 2027 a été publié le 10 novembre 2026 [résumé/métadonnées seulement : titre vu
    dans la liste des billets d'ietf.org].
- **Ce qu'elle fait** : RFC (TLS 1.3, QUIC, HTTP…) ; 8 925 RFC environ [déjà dans le dépôt : GT:104-118] ;
  trois réunions par an ; positions « politiques » par la technique (RFC 2804, 7258, 8890)
  [déjà dans le dépôt : GT:414-455].
- **Pouvoirs réels** : **aucun pouvoir contraignant** ; normes volontaires (« in no way does the IETF control,
  or even patrol, the Internet ») [déjà dans le dépôt : GT:177-178]. Mais : l'IANA enregistre les paramètres
  de protocole « only as directed by the criteria and procedures specified in RFCs » (RFC 2860, §4.1, juin 2000,
  signée IAB/IETF/ICANN) [lu] https://www.rfc-editor.org/rfc/rfc2860.txt → l'IETF « commande » à l'IANA pour
  les registres de protocoles.
- **Liens** : financée par l'ISOC (et dons d'ARIN, subvention de l'ICANN) ; donne des ordres techniques à
  l'IANA/PTI (RFC 2860) ; nomme **un agent de liaison non votant au conseil de l'ICANN** (statuts de l'ICANN,
  §7.9(a)(iv)) [lu] https://www.icann.org/resources/pages/governance/bylaws-en ; signataire de la déclaration
  de Montevideo [déjà dans le dépôt : GT:710].
- **Controverses** : participation dominée par l'Amérique du Nord, l'Europe et quelques entreprises (Cisco,
  Huawei, Google), anglais seul ; l'IETF répond par la participation « as individuals » et le consensus
  [déjà dans le dépôt : GT:281-344]. Débat DoH (vie privée contre filtrage) [déjà dans le dépôt : GT:457-474].
- **Personnes** : Alissa Cooper (présidente 2017-2021), Lixia Zhang (IAB) [déjà dans le dépôt : GT:364-378].

## 2. IAB, IESG, IRTF (court)

- **IAB** (Internet Architecture Board) : 13 membres, 6 choisis chaque année par le NomCom, plus le ou la
  président·e de l'IETF [déjà dans le dépôt : GT:206-208] ; candidat·es confirmé·es par le conseil de l'ISOC
  (RFC 8713) [lu]. Président depuis mars 2026 : Dhruv Dhody (Huawei) [déjà dans le dépôt : GT:379-380].
  Signe le MoU IANA (RFC 2860, B. Carpenter pour l'IAB) [lu]. Atelier « post-quantum authentication » à Prague
  (octobre 2026) [résumé/métadonnées seulement : billet du 12 novembre 2026 vu en liste].
- **IESG** : directeur·rices de domaine ; approuve les RFC ; candidat·es confirmé·es par l'IAB (RFC 8713) [lu].
  Confirme les administrateur·rices NomCom de l'IETF LLC (RFC 8711) [lu].
- **IRTF** : recherche à long terme ; président Dirk Kutscher [déjà dans le dépôt : GT:209-210].
- **Femmes** : Leslie Daigle (présidente de l'IAB 2002-2007), Mirja Kühlewind (2020-2024) [déjà dans le dépôt :
  GT:374-376].

## 3. ISOC (Internet Society)

- **Nom** : Internet Society (ISOC) ; en français, on dit souvent « Internet Society » (pas de nom officiel FR).
- **Nature** : association à but non lucratif constituée le 10 décembre 1992 à Washington
  [déjà dans le dépôt : GT:224-226] (forme exacte, « 501(c)(3) », [non trouvé]).
- **Création** : 1er janvier 1992 ; premier conseil à Kobe (Japon), juin 1992 [déjà dans le dépôt : GT:218-227].
- **Siège** : [non trouvé] dans une source lue pour ce dossier (Reston et Genève sont souvent cités : non vérifié).
- **Qui décide** : conseil d'administration (Board of Trustees) commun à l'ISOC et à l'Internet Society Foundation ;
  administrateur·rices « elected or appointed by the following groups: chapters, organization members, and the
  Internet Engineering Task Force (IETF) » ; le conseil peut en coopter ; 14 membres dont la PDG (non votante)
  [lu] https://www.internetsociety.org/board-of-trustees/ (nombre de sièges par collège [non trouvé]).
  Composition 2025 (pays indiqués par l'ISOC) : Olufunke Baruwa (Nigeria), Ramanou Biaou (Bénin), Caleb
  Ogundele (Nigeria), Maureen Hilyard (îles Cook), Charles Mok (Hong Kong), Sagarika Wickramasekera (Sri Lanka),
  Russ Housley, Brian Haberman, Victor Kuarsingh, Barry Leiba, Kathleen Moriarty, Laura Thomson (États-Unis),
  Ted Hardie (Portugal) ; **Sally Wentworth**, présidente et PDG. [lu] rapport annuel 2025, p. 29
  https://www.internetsociety.org/wp-content/uploads/2026/03/2025-Annual-Report_EN.pdf
- **Membres (2025)** : 156 880 membres individuels, 124 chapitres, 79 organisations membres [lu] (même rapport).
- **Financement 2025** [lu] (même rapport, p. 30, en milliers de $) :
  - recettes 66 205 k$, dont **58 000 k$ versés par PIR** (Public Interest Registry, registre du **.org**, filiale
    de l'ISOC) et 8 205 k$ de recettes propres ;
  - dépenses 53 100 k$ ; plus 16 517 k$ de gains de placements.
  - PIR : « almost 60% of the revenue from each domain registration goes to ISOC » [résumé/métadonnées
    seulement] https://pir.org/annual-impact-report-2025/
- **Ce qu'elle fait** : finance l'IETF (7,3 M$ en 2025 [lu]) ; 7,28 M$ de subventions en 179 bourses via la
  Fondation ; 2 M$ pour les forums nationaux et régionaux de gouvernance (IGF) [lu] ; mesures de coupures
  (Internet Society Pulse) [déjà dans le dépôt : ER:497-509] ; plaidoyer (chiffrement, contre le « fair share »)
  [déjà dans le dépôt : ER:327].
- **Pouvoirs réels** : aucun pouvoir normatif ; pouvoir **financier** (premier financeur de l'IETF) et
  **de confirmation** (son conseil confirme les membres de l'IAB et nomme un administrateur de l'IETF LLC)
  [lu RFC 8711, 8713].
- **Controverse : la vente du .org (2019-2020)**
  - 13 novembre 2019 : annonce de la vente de PIR à la société d'investissement **Ethos Capital**.
  - 30 avril 2020 : le conseil de l'ICANN **refuse son accord** au changement de contrôle (contrat de registre,
    §7.5). Motifs cités : « a change from the fundamental public interest nature of PIR », « The US$360 million
    debt instrument », « an untested Stewardship Council that might not be properly independent » ; l'ICANN a tenu
    compte d'une lettre du procureur général de Californie du 15 avril 2020.
    [lu] https://www.icann.org/en/blogs/details/icann-board-withholds-consent-for-a-change-of-control-of-the-public-interest-registry-pir-30-4-2020-en
  - Position de l'ISOC et d'Ethos (déception, « dangerous precedent ») : [résumé/métadonnées seulement]
    (CircleID, iTnews). Prix de vente (1,135 Md$) : [non trouvé] dans une source lue.
  - Intérêt pour la carte : montre que **l'ICANN contrôle (par contrat) le registre qui finance l'ISOC, qui finance
    l'IETF**.
- **Personnes** : Sally Wentworth (PDG) ; trois administrateur·rices africain·es (voir ci-dessus) [lu].

## 4. IANA et PTI

- **Noms** : Internet Assigned Numbers Authority (fonctions IANA) ; **PTI, Public Technical Identifiers**.
- **Nature** : PTI est une **société à but non lucratif de droit californien** dont l'ICANN est « the sole Member »
  (statuts de l'ICANN, art. 16.1) ; l'ICANN « shall elect the directors of PTI » (§16.2(a)) [lu]
  https://www.icann.org/resources/pages/governance/bylaws-en
- **Création** : registres tenus par Jon Postel dès 1972 [déjà dans le dépôt : GT:691-694] ; PTI créée lors de la
  transition de 2016 [déjà dans le dépôt : GT:724].
- **Siège** : Los Angeles, comme l'ICANN [déjà dans le dépôt : GT:703, pour l'ICANN].
- **Qui décide** : conseil de PTI élu par l'ICANN ; le 22 octobre 2026, l'ICANN élit Tomslin Samme-Nlar (siège 2)
  et réélit Xavier Calvez (siège 4) jusqu'en 2029 [lu]
  https://www.icann.org/en/board-activities-and-meetings/materials/approved-resolutions-organizational-meeting-of-the-icann-board-22-10-2026-en ;
  Comité permanent des clients (CSC) [déjà dans le dépôt : GT:724].
- **Financement** : budget PTI **11,5 M$** pour l'exercice 2027 (1er juillet 2026-30 juin 2027) ; budget IANA total
  11,9 M$ (dont 0,4 M$ d'activités hors PTI : mainteneur de la zone racine, CSC…) ; financé par l'ICANN.
  [lu] https://www.icann.org/en/system/files/files/adopted-icann-budget-fy2027-published-2026-en.pdf (§4.7)
- **Ce qu'elle fait** : valide les changements de la zone racine ; distribue les blocs d'adresses aux RIR ;
  tient les registres de protocoles ; cérémonies des clés DNSSEC [déjà dans le dépôt : GT:790-803].
- **Pouvoirs réels** : exécution ; trois « clients » donnent les règles : la communauté des noms (via l'ICANN),
  les RIR (accord de service), l'IETF (RFC 2860 et accord complémentaire) [déjà dans le dépôt : GT:724] ; [lu RFC 2860].
- **Controverses** : juridiction américaine persistante [déjà dans le dépôt : GT:740].
- **Personnes** : Joyce K. Reynolds, Elise Gerich [déjà dans le dépôt : GT:696, 915-916].

## 5. ICANN

- **Nom** : Internet Corporation for Assigned Names and Numbers ; en français « Société pour l'attribution des
  noms de domaine et des numéros sur Internet » (traduction utilisée par l'ICANN elle-même : [non vérifié]).
- **Nature** : association à but non lucratif de droit californien [déjà dans le dépôt : GT:702-703, 740].
- **Création** : 1998 [déjà dans le dépôt : GT:702].
- **Siège** : comté de Los Angeles [déjà dans le dépôt : GT:703].
- **Qui décide (statuts, art. 7)** [lu] https://www.icann.org/resources/pages/governance/bylaws-en
  - **16 administrateur·rices votant·es** : 8 proposé·es par le comité de nomination (NomCom), 2 par l'ASO
    (adresses, donc les RIR), 2 par la ccNSO (extensions nationales), 2 par la GNSO (extensions génériques),
    1 par la communauté At-Large (utilisateur·rices), + le ou la PDG (siège 16).
  - Tous (sauf le ou la PDG) sont formellement **désigné·es par la « Communauté habilitée »** (Empowered
    Community, EC), association californienne formée de l'ASO, de la ccNSO, de la GNSO, de l'ALAC et du **GAC**
    (§6.1(a)). L'EC peut révoquer un·e administrateur·rice ou tout le conseil, rejeter budgets et plans
    [déjà dans le dépôt : GT:725].
  - **4 agents de liaison non votants** : nommés par le GAC (gouvernements), le RSSAC (serveurs racine), le SSAC
    (sécurité) et l'IETF (§7.9).
  - GAC : 184 membres ; avis de consensus rejetable seulement à 60 % du conseil [déjà dans le dépôt : GT:726-728 ;
    gouv.ts:159].
  - Le RSSAC et le SSAC sont nommés par le conseil de l'ICANN (§12.2(b) et (c)) [lu].
  - **22 octobre 2026** (ICANN87) : **Tripti Sinha** réélue présidente du conseil, Sajid Rahman vice-président,
    Kurtis Lindqvist confirmé président-directeur général [lu] (résolutions du 22 octobre 2026, lien au §4).
  - Siège 9 (ASO) : après la mort d'Alan Barrett, l'ASO AC choisit **Oscar Robles** (région Amérique latine), mandat
    jusqu'à ICANN90 (4 novembre 2027) [résumé/métadonnées seulement] https://aso.icann.org/2026/08/
- **Financement (budget de l'exercice 2027, adopté le 3 mai 2026)** [lu] (PDF du budget, lien au §4) :
  - Fonctionnement : **165 M$** de recettes, 161 M$ de dépenses en caisse ; 407 salarié·es en moyenne.
  - Recettes : redevances sur les transactions (116,8 M$ : 96,9 M$ des anciennes extensions comme .com, 19,8 M$
    des nouvelles) ; forfaits des registres (28,6 M$, 1 108 extensions) ; accréditations des 3 180 bureaux
    d'enregistrement (16,6 M$) ; **contributions volontaires des ccTLD 2,1 M$ et des RIR 0,8 M$**.
  - Programme des nouvelles extensions (cycle 2026) : 384 M$ de frais de candidature attendus.
  - Fonds sous gestion au 30 juin 2026 : 512 M$ (dont réserve 203 M$).
  - Pas de hausse des redevances prévue pour 2027 (hausses en janvier et juillet 2025).
- **Ce qu'elle fait** : coordonne la racine du DNS ; contrats avec les registres et bureaux d'enregistrement ;
  cycles de nouvelles extensions (2012 et 2026) ; exploite le serveur racine L
  [déjà dans le dépôt : GT:770, 813-823].
- **Pouvoirs réels** : **contractuels** (registres et bureaux d'enregistrement de gTLD, Verisign comme mainteneur de
  la zone racine) ; pas de pouvoir sur les adresses (politiques des RIR) ni sur les contenus ; refuse d'être un outil
  de sanction (lettre à l'Ukraine, 2 mars 2022) [déjà dans le dépôt : GT:723, 1071-1074].
- **Controverses** : .amazon, .africa, transition de 2016, juridiction américaine [déjà dans le dépôt : GT:730-740,
  832-850] ; vente du .org (voir §3) [lu] ; intervention dans la procédure de liquidation d'AFRINIC
  [déjà dans le dépôt : GT:967].
- **Personnes** : Esther Dyson, Tripti Sinha, Sally Costerton [déjà dans le dépôt : GT:704-707] ; Nii Quaynor
  [déjà dans le dépôt : GT:389-391].

## 6. W3C

- **Nom** : World Wide Web Consortium (W3C) ; en français « Consortium du World Wide Web ».
- **Nature** : depuis janvier 2023, « public-interest non-profit organization » (W3C, Inc.) ; avant, modèle
  « hébergé » par MIT, ERCIM, Keio, Beihang [déjà dans le dépôt : GT:509-519] ; [lu] https://www.w3.org/consortium/
  (État d'immatriculation [non trouvé]).
- **Création** : octobre 1994, MIT, par Tim Berners-Lee [déjà dans le dépôt : GT:511-512].
- **Qui décide** [lu] https://www.w3.org/governance/board/ et
  https://www.w3.org/news/2026/consortium-members-elect-board-of-directors/
  - Conseil d'administration : 7 élu·es par les membres (élection du 28 septembre 2026, mandats jusqu'au
    30 septembre 2028 : Koichi Moriyama, Chris Needham, Theresa O'Connor, Florian Rivoal, Avneesh Singh,
    **Léonie Watson** (présidente du conseil), **Hongru (Judy) Zhu**), 3 nommés par les « Partners » (ERCIM en
    France, Université Beihang en Chine, WCAP au Japon), jusqu'à 2 cooptés (1 en 2026 : Jaunita Flessas) ;
    Tim Berners-Lee sans droit de vote.
  - Direction : **Seth Dobbs a quitté la direction le 28 mai 2026** ; Dominique Hazaël-Massieux PDG par intérim
    [lu] https://www.w3.org/press-releases/2026/w3c-leadership-transition/
  - Normes : Advisory Committee (un·e représentant·e par membre), procédure « Recommendation »
    [déjà dans le dépôt : GT:521-528].
- **Financement** : « revenues come primarily from Membership dues » ; plus de 330 membres ; une cinquantaine de
  salarié·es [lu] https://www.w3.org/consortium/ ; montant du budget [non trouvé].
- **Ce qu'elle fait** : CSS, WCAG (accessibilité), EME ; endosse HTML/DOM du WHATWG [déjà dans le dépôt :
  GT:530-569 ; gouv.ts:18-26].
- **Pouvoirs réels** : non contraignants (« W3C does not have any power to forbid anything ») ; mais les WCAG sont
  rendues obligatoires par des lois (EN 301 549, Acte européen sur l'accessibilité) [déjà dans le dépôt : GT:538,
  565-568].
- **Liens** : accord avec le WHATWG (2019) ; signataire de Montevideo [déjà dans le dépôt : GT:558-562, 710].
- **Controverse** : EME/DRM, départ de l'EFF (2017) [déjà dans le dépôt : GT:530-547].

## 7. WHATWG

- **Nom** : Web Hypertext Application Technology Working Group.
- **Nature** : groupe **sans personnalité juridique** propre (forme juridique [non trouvé]) ; fondé en 2004 par des
  personnes d'Apple, Mozilla et Opera ; Steering Group depuis 2017 (Apple, Google, Microsoft, Mozilla), dont les
  membres sont « appointed from the organizations that develop browser engines » [déjà dans le dépôt : GT:549-557].
- **Qui décide** : l'éditeur·rice de chaque Living Standard, appel au Steering Group [déjà dans le dépôt : GT:554-557].
- **Financement** : [non trouvé] (hébergé et financé par les éditeurs de navigateurs, non vérifié).
- **Pouvoirs réels** : de fait, les navigateurs implémentent ce qu'ils décident ; MoU avec le W3C du 28 mai 2019
  [déjà dans le dépôt : GT:558-562].
- **Controverse** : quatre entreprises décident ; réponse : ce sont elles qui implémentent [déjà dans le dépôt :
  GT:574-577].

## 8. Les registres régionaux (RIR) et la NRO

Faits communs (dates, sièges, régions, épuisement IPv4) : [déjà dans le dépôt : GT:887-944 ; gouv.ts:113-119].
Politiques écrites par des communautés ouvertes, par consensus [déjà dans le dépôt : GT:895-899].

### 8.1 RIPE NCC
- **Nature** : association de droit néerlandais (forme exacte « vereniging » [non vérifié]) ; siège Amsterdam.
- **Qui décide** : assemblée générale des membres, conseil exécutif (Executive Board) ; politiques par la
  communauté RIPE [déjà dans le dépôt : GT:898].
- **Financement 2026** : recettes prévues **41,140 M€**, coûts 41,125 M€ ; hypothèse de **20 000 comptes LIR**
  (membres) [résumé/métadonnées seulement : extrait de
  https://www.ripe.net/documents/4146/4._Draft_Activity_Plan_and_Budget_2026_-_GM.pdf]. Plan adopté par le conseil
  exécutif le 11 décembre 2025 [lu] https://www.ripe.net/about-us/news/activity-plan-and-budget-2026-published/
  (création d'une filiale « RIPE NCC Middle East FZ-LLC », même page [lu]).
- **Ce qu'il fait** : registre, RPKI, serveur racine K, mesures (RIPE Atlas) [déjà dans le dépôt : GT:769].
- **Pouvoirs** : registre des adresses (enregistrement, révocation selon contrat) ; refus d'usage politique (2022)
  [déjà dans le dépôt : GT:1073].
- **Personnes** : Anne Lord, Mirjam Kühne [déjà dans le dépôt : GT:911-914].

### 8.2 APNIC
- **Siège** : Brisbane (Australie) [déjà dans le dépôt : gouv.ts:115] ; forme juridique [non trouvé].
- **Qui décide** : conseil exécutif (EC) élu par les membres ; directeur général **Jia Rong Low** (membre de droit) ;
  au conseil figure Anlei Hu (CNNIC, Chine). En 2025-2026 : réforme des statuts (mandats de 2 à 3 ans, limite de
  3 mandats). [lu] rapport annuel 2025 https://www.apnic.net/wp-content/uploads/2026/02/Annual_Report_2025.pdf
  Projet de faire **nommer le DG par l'EC** au lieu de l'élire [résumé/métadonnées seulement]
  https://www.apnic.net/about-apnic/organization/structure/proposed-by-law-reform-2026
- **Financement 2025** : recettes **34,2 M AUD**, dont 28,2 M AUD de cotisations ; dépenses 34,1 M AUD ; réduction
  de 50 % pour les membres des pays les moins avancés [lu] (même rapport, p. 48).

### 8.3 ARIN
- **Siège** : Virginie [déjà dans le dépôt : gouv.ts:116] (Chantilly : [non vérifié]).
- **Qui décide** : conseil de 10 membres, 9 élus par les membres et le PDG (**John Curran**, PDG depuis 2009) ;
  présidente du conseil : Nancy Carter [lu] https://www.arin.net/about/welcome/board/ ; élections de novembre 2026 :
  Catherine Middleton élue, Dan Alexander et Tina Morris réélu·es [résumé/métadonnées seulement]
  https://www.arin.net/announcements/20261102/
- **Financement 2026 (janvier-août)** : recettes 21,3 M$, dépenses 21,8 M$, déficit d'exploitation compensé par
  les placements ; objectif d'équilibre en 2030 [lu]
  https://www.arin.net/participate/meetings/ARIN58/materials/ARIN58_financialreport.pdf
- **Liens** : don de 1 M$ à l'IETF (2025, doublé par l'ISOC) [lu, budget IETF 2026].

### 8.4 LACNIC
- **Siège** : Montevideo (Uruguay) [déjà dans le dépôt : gouv.ts:117].
- **Qui décide** : directoire honoraire de 8 membres élu·es par les associé·es ; CEO **Ernesto Majó** (après Oscar
  Robles) [résumé/métadonnées seulement] (actes du directoire 2026 sur lacnic.net, page JS non lisible en curl).
- **Financement** : [non trouvé] (rapport annuel 2025 et rapport d'audit en ligne, non lus).
- **Personne** : Ida Holz [déjà dans le dépôt : GT:392-393].

### 8.5 AFRINIC (état au 24 novembre 2026)
- **Nature** : société de droit mauricien (« African Network Information Centre (AfriNIC) Ltd »), siège à Ébène ;
  sous **administration judiciaire (receivership)** depuis septembre 2023 [déjà dans le dépôt : GT:959 ;
  gouv.ts:118] ; administrateur judiciaire actuel : Gowtamsingh Dabee [lu]
  https://afrinic.net/board-announcement-appointment-of-chairman-and-vice-chairman
- **Qui décide** : conseil élu les 10-12 septembre 2025 ; président **Prof. Adewale (Wale) Adedokun**, vice-président
  **Prof. Aziz Hilali** (3 octobre 2025) [lu, même page]. Le conseil agit « with the consent of the Receiver » :
  nomination de **Mike Silber** comme PDG au 1er janvier 2027 [déjà dans le dépôt : GT:970].
- **Procédures en cours (état au 24 novembre 2026)**
  - Requête en liquidation de Cloud Innovation (SC/COM/PET/000508/2025) : **aucune décision trouvée** ; ICANN
    autorisée à intervenir (14 mai 2026) [déjà dans le dépôt : GT:964, 967, 973].
  - Demande de fin d'administration judiciaire et de décharge de l'administrateur (SC/COM/MOT/000757/2025),
    audience fixée au 26 novembre 2025 [lu] https://afrinic.net/notice-for-termination-of-the-receivership-of-afrinic ;
    issue [non trouvé].
  - Élection de septembre 2025 contestée en justice par Cloud Innovation, « sub judice » ; organisée sous la
    supervision du commissaire électoral de Maurice (ordonnance du 5 septembre 2025) ; AFRINIC dénonce des
    courriels de la « Number Resource Society » (NRS) qui demandent aux membres s'ils ont voté (15 décembre 2025)
    [lu] https://afrinic.net/afrinic-statement-on-external-enquiry-regarding-board-election-processes
  - Inscription de Cloud Innovation au registre des membres tenu par le registre des sociétés (9 octobre 2026) ;
    mise en demeure du 29 octobre 2026 **envoyée par l'administrateur judiciaire au nom d'AFRINIC** pour la faire
    retirer, avec copie au Premier ministre, au ministre des TIC et à l'Attorney General ; AFRINIC rappelle
    l'ordonnance orale du 19 juin 2025 (CIL « simply a resource member ») ; corrigendum du 4 novembre 2026
    [lu] https://afrinic.net/afrinic-official-statement-on-the-inclusion-of-cloud-innovation-limited-in-the-register-of-members
  - Réunion **AFRINIC-38 au Cap (Afrique du Sud)**, réunion de politique publique le 18 novembre 2026 [lu]
    https://afrinic.net/candidate-slate-for-pdwg-co-chair-selection-2026 ; résultats [non trouvé].
  - Révision des statuts (deuxième consultation, août 2026) et document de gouvernance des RIR (v3, remis à la NRO
    le 28 juillet 2026) [lu, liste des actualités https://afrinic.net/news ; déjà dans le dépôt : GT:969].
- **Financement** : [non trouvé] (pas de comptes récents lus).
- **Positions** : AFRINIC, Cloud Innovation/Larus, ICANN-NRO, critiques africaines [déjà dans le dépôt : GT:976-995].
- **Mise en garde** : un résumé de moteur de recherche affirmait que l'administrateur judiciaire « avait exigé le
  retrait » des dirigeant·es d'AFRINIC : **faux**, la lecture du communiqué montre que la demande vise le retrait de
  Cloud Innovation du registre.
- **Personnes** : Nii Quaynor, Alan Barrett, Fiona Asonga, Maud Adjeley Ashong Elliot [déjà dans le dépôt :
  GT:903-918].

### 8.6 NRO et ASO
- **NRO** (Number Resource Organization) : établie en 2003 par un protocole d'accord (MoU) des quatre RIR
  existants, signé par AFRINIC en 2005 ; **conseil exécutif d'une personne par RIR, nommée par le conseil de chaque
  RIR**, décisions par consensus des cinq, présidence tournante annuelle [lu] https://www.nro.net/about/
  Personnalité juridique : [non trouvé]. Financement (partage des coûts) : [non trouvé].
- **ASO** (Address Supporting Organization) : l'une des trois organisations de soutien de l'ICANN ; la NRO
  « carries out » ses fonctions, en assure le secrétariat et la représente dans la Communauté habilitée de l'ICANN
  [lu] https://aso.icann.org/about/aso-and-nro/
- **ASO AC / NRO NC** : 15 membres, 3 par RIR (« Each RIR's community appoints two members and one member is
  appointed by the RIR's Executive Board ») [lu] https://aso.icann.org/aso-ac/members/ ; choisit les sièges 9 et 10
  du conseil de l'ICANN [lu statuts ICANN §7.2(a)(ii)].

## 9. Opérateurs des serveurs racine et RSSAC (court)

- 12 opérateurs indépendants, 13 identités, environ 2 048 instances [déjà dans le dépôt : GT:748-807 ;
  gouv.ts:122-137]. Pas d'organisation commune dotée de la personnalité juridique : [non vérifié].
- **RSSAC** (Root Server System Advisory Committee) : comité consultatif de l'ICANN qui « advise[s] the ICANN
  community and Board on matters relating to the operation, administration, security, and integrity of the
  Internet's Root Server System » ; membres nommés pour 3 ans ; nomme un agent de liaison non votant au conseil de
  l'ICANN [lu] statuts de l'ICANN §12.2(c), §7.9.
- **Liens** : les opérateurs reçoivent la zone de Verisign (mainteneur sous contrat avec l'ICANN depuis le
  20 octobre 2016) [déjà dans le dépôt : GT:723, 790] ; l'ICANN (L) et le RIPE NCC (K) sont eux-mêmes opérateurs.

## 10. UIT (Union internationale des télécommunications)

- **Noms** : Union internationale des télécommunications (UIT) ; International Telecommunication Union (ITU).
- **Nature** : organisation intergouvernementale, institution spécialisée des Nations unies (« agence de l'ONU »
  [déjà dans le dépôt : gouv.ts:53]).
- **Création** : 17 mai 1865 à Paris (Union télégraphique internationale) [déjà dans le dépôt : GT:1010].
- **Siège** : Genève [non vérifié dans une source lue pour ce dossier].
- **Qui décide** : 194 États membres ; « more than 1000 other entities » (membres de secteur, associés, universités)
  [lu] https://www.itu.int/en/mediacentre/backgrounders/Pages/how-is-itu-funded.aspx ; conférence de
  plénipotentiaires tous les quatre ans, qui élit les dirigeant·es.
  - **PP-26, Doha (9-27 novembre 2026)** :
    - **Doreen Bogdan-Martin (États-Unis) réélue secrétaire générale le 12 novembre 2026, 164 voix sur 173** ;
      « She is the first woman to serve in both elected positions » (directrice du BDT puis secrétaire générale)
      [lu] https://www.itu.int/en/mediacentre/Pages/PR-2026-11-12-SG-Election.aspx
    - Vice-secrétaire général : Adel Darwish (Bahreïn), 90 voix sur 177 [résumé/métadonnées seulement]
      https://www.itu.int/en/mediacentre/Pages/PR-2026-11-13-DSG-Election.aspx
    - 13 novembre 2026 : **Eric Fournier (France)** directeur des radiocommunications, **Seizo Onoe (Japon)** réélu
      à la normalisation (TSB), **Nele Leosk (Estonie)** au développement (BDT) [lu]
      https://www.itu.int/en/mediacentre/Pages/PR-2026-11-13-Directors-Election.aspx (nombre de voix non donné ;
      169 voix pour Onoe [résumé/métadonnées seulement, agence QNA]).
    - Décisions de fond de la PP-26 (résolutions sur internet) : [non trouvé], la conférence se termine le 27 novembre.
- **Financement 2026** : budget « just above 160 million Swiss francs » ; États membres 68,4 % des recettes ;
  membres non étatiques 10,1 % ; unité contributive 318 000 CHF par an pour les États (de 1/16 à 40 unités, au
  choix), 63 600 CHF pour les membres de secteur [lu] (même page).
- **Ce qu'elle fait** : fréquences et orbites satellites (UIT-R), normes télécoms (UIT-T), développement (UIT-D) ;
  a organisé le SMSI [déjà dans le dépôt : GT:1014].
- **Pouvoirs réels** : le Règlement des radiocommunications et le RTI sont des **traités** (contraignants pour les
  États qui les ratifient) ; les recommandations UIT-T sont volontaires (statut juridique des RR : [non vérifié]
  dans une source lue pour ce dossier).
- **Liens** : membre du système ONU ; partenariat AFRINIC–UIT-BDT pour IPv6 (titre vu sur afrinic.net/news
  [résumé/métadonnées seulement]).
- **Controverses** : CMTI-12 (Dubaï 2012), « New IP » (2019-2020) [déjà dans le dépôt : GT:1030-1041].

## 11. FGI (IGF), Pacte numérique mondial, SMSI+20 (état au 24 novembre 2026)

- **FGI / IGF** : créé par l'Agenda de Tunis (§72), sans fonction de contrôle, non contraignant (§77)
  [déjà dans le dépôt : GT:1015] ; **forum permanent de l'ONU** depuis A/RES/80/173 (17 décembre 2025), secrétariat
  au DESA [déjà dans le dépôt : GT:1017-1019].
  - §97 : « more than 170 national, regional and youth Internet governance forums » ; salue le Groupe consultatif
    multipartite (MAG) et le **Leadership Panel** créé par le secrétaire général ; §103 : demande au secrétaire
    général une proposition de **financement durable** pendant la 80e session [lu]
    https://digitallibrary.un.org/record/4097834/files/A_RES_80_173-EN.pdf
  - Proposition de financement effectivement soumise : [non trouvé].
  - Qui nomme le MAG : [non trouvé] (intgovforum.org bloqué).
  - FGI 2026 : Nairobi, 14-18 décembre 2026 [déjà dans le dépôt : GT:1029].
  - Financement : l'ISOC a versé 2 M$ aux forums nationaux et régionaux et 517 880 $ aux forums mondiaux et
    régionaux en 2025 [lu, rapport annuel ISOC 2025].
- **Pacte numérique mondial** (annexe I du Pacte pour l'avenir, 22 septembre 2024) [déjà dans le dépôt : GT:1016].
  Mise en œuvre en 2026 :
  - **Groupe scientifique international indépendant sur l'IA** : 40 membres nommés par l'Assemblée générale le
    12 février 2026 (mandat jusqu'au 11 février 2029), **vote enregistré 117 pour, 2 contre (Paraguay,
    États-Unis), 2 abstentions (Tunisie, Ukraine)** ; les États-Unis y voient « a significant overreach of the UN's
    mandate and competence » [lu] https://unric.org/en/general-assembly-appoints-artificial-intelligence-panel/
  - **Dialogue mondial sur la gouvernance de l'IA** (résolution A/RES/79/325, août 2025) : première session à
    Genève les 6 et 7 juillet 2026 [résumé/métadonnées seulement] ; coprésidence Bengio–Ressa du groupe
    scientifique [résumé/métadonnées seulement, source unique].
  - Revue de haut niveau du Pacte à la 82e session de l'Assemblée générale (2027) [déjà dans le dépôt : GT:1016].
- **SMSI+20** : terminé (A/RES/80/173), prochain examen en 2035 [déjà dans le dépôt : GT:1017-1028].

## 12. CNIL

- **Nom** : Commission nationale de l'informatique et des libertés.
- **Nature** : **autorité administrative indépendante** [lu] rapport annuel 2025, p. 14
  https://cnil.fr/sites/default/files/2026-05/rapport_annuel_2025.pdf
- **Création** : loi du 6 janvier 1978, après l'affaire SAFARI [déjà dans le dépôt : ER:341-346 ; etats.ts:15].
- **Siège** : Paris [non vérifié dans une source lue].
- **Qui décide** [lu] (même rapport, p. 14-15) :
  - collège de **18 membres** : 6 représentant·es des hautes juridictions, 5 personnalités qualifiées,
    4 parlementaires, 2 membres du CESE, 1 membre de la CADA ; « élus ou désignés par les assemblées ou les
    juridictions auxquelles ils appartiennent, le Premier ministre ou les présidents des deux assemblées » ;
  - **formation restreinte** (sanctions) : 5 membres du collège et un président distinct de celui de la CNIL ;
  - présidente : **Marie-Laure Denis**, conseillère d'État, présidente depuis février 2019.
- **Financement 2025** : **30,2 M€** de budget, **303 agents** [lu] (même rapport, p. 13) ; les amendes « sont versées
  au budget de l'État » [lu] (même rapport).
- **Ce qu'elle fait** : avis sur les projets de loi et décrets, contrôles, sanctions (83 en 2025, 486,8 M€, dont Google
  325 M€ et Shein 150 M€), plaintes [déjà dans le dépôt : ER:74-79] ; 20 150 plaintes en 2025
  [résumé/métadonnées seulement].
- **Pouvoirs réels** : **contraignants** (amendes jusqu'à 4 % du CA mondial, mises en demeure) [déjà dans le dépôt :
  ER:60] ; mais pour les grandes plateformes établies en Irlande, l'autorité chef de file est la DPC (guichet unique)
  [déjà dans le dépôt : ER:61 ; etats.ts:26-33].
- **Liens** : membre du CEPD/EDPB [lu RGPD art. 68] ; désignait la « personnalité qualifiée » du blocage
  administratif jusqu'en 2022 (transférée à l'Arcom) [déjà dans le dépôt : ER:837].
- **Controverses** : lenteur et faiblesse des sanctions hors Google et Shein (environ 11,8 M€ pour 81 sanctions)
  [déjà dans le dépôt : ER:79, extrait de presse] ; position de la CNIL : procédure simplifiée créée en 2022
  [déjà dans le dépôt : ER:77].

## 13. Arcom

- **Nom** : Autorité de régulation de la communication audiovisuelle et numérique.
- **Nature** : autorité indépendante (qualification exacte, autorité **publique** indépendante, à vérifier sur
  Légifrance : [non vérifié]).
- **Création** : loi n° 2021-1382 du 25 octobre 2021, **fusion du CSA et de l'Hadopi**, en place le **1er janvier 2022**
  [lu] Sénat, rapport d'information (commission des finances, 23 octobre 2025)
  https://www.senat.fr/rap/r25-068/r25-068-syn.pdf
- **Qui décide** : « collège de neuf membres nommés par cinq autorités distinctes, pour une durée de six ans, non
  renouvelable » [lu] (même rapport) ; le rapporteur relève que 7 membres sur 9 ont un profil « secteur public »
  [lu]. Président : **Martin Ajdari** depuis le 2 février 2025 (proposé par le président de la République, avis des
  commissions parlementaires) [résumé/métadonnées seulement].
- **Financement** : **49,9 M€** et plafond de 379 ETPT (loi de finances initiale 2025) ; 362,7 ETPT en 2025 ; déficit
  cumulé de 5 M€ sur 2022-2024 [lu] (même rapport). Environ 50 M€ et 378 ETP en 2026 [résumé/métadonnées seulement].
- **Ce qu'elle fait** : régulation audiovisuelle ; blocage des sites miroirs et du piratage sportif ; vérification
  d'âge des sites pornographiques (loi SREN) ; contrôle du blocage administratif (personnalité qualifiée)
  [déjà dans le dépôt : ER:347-357, 837-854, 857-868].
- **Pouvoirs réels** : contraignants (sanctions, blocage, déréférencement) [déjà dans le dépôt : ER:347] ;
  **coordinateur pour les services numériques** (DSA) en France depuis la loi SREN (mai 2024)
  [résumé/métadonnées seulement].
- **Liens** : partenaire national de la Commission pour le DSA (la Commission surveille seule les très grandes
  plateformes) [déjà dans le dépôt : ER:147-171 pour le DSA ; rôle de coordinateur : résumé seulement].
- **Controverses** : vérification d'âge (Aylo, associations) ; blocage sans juge a priori ; efficacité aléatoire du
  blocage DNS [déjà dans le dépôt : ER:370, 921-923].

## 14. Arcep

- **Nom** : Autorité de régulation des communications électroniques, des postes et de la distribution de la presse.
- **Nature** : **autorité administrative indépendante**, « créée par le législateur en 1996 », pouvoirs « de
  réglementation, d'autorisation, de contrôle, de règlement des litiges et de sanction » ; « près de 185 agents »
  [lu] https://www.entreprises.gouv.fr/espace-presse/appel-candidature-la-presidence-de-lautorite-de-regulation-des-communications
- **Qui décide** : collège de **7 membres** nommés « dans le respect de la parité » : 3 (dont la présidente) par le
  président de la République, les 4 autres par les présidents de l'Assemblée nationale et du Sénat ; mandat de
  six ans, « irrévocable et non renouvelable » [lu]
  https://www.arcep.fr/actualites/actualites-et-communiques/detail/n/nomination-030426.html et
  https://www.arcep.fr/larcep/le-college-et-les-directions/biographies-de-la-presidente-et-des-membres-du-college.html
  - Présidente : **Laure de La Raudière**, ancienne députée ; **mandat qui échoit le 3 janvier 2027** ; appel à
    candidatures publié le 17 juillet 2026 (art. L.130 du CPCE) [lu, page DGE ci-dessus]. Successeur·e : [non trouvé]
    au 24 novembre 2026.
  - Marie-Georges Boulay (ancienne secrétaire générale adjointe d'Altice France/SFR) nommée par le président du
    Sénat au 1er mai 2026 [lu].
- **Financement** : [non trouvé] (budget de l'État).
- **Ce qu'elle fait** : régulation des opérateurs, couverture, **neutralité du net** (autorité nationale du
  règlement 2015/2120) [déjà dans le dépôt : ER:313].
- **Liens** : membre du BEREC (avis « No evidence of free-riding ») [déjà dans le dépôt : ER:324].
- **Controverse** : venue d'anciens dirigeants d'opérateurs au collège (« pantouflage » inverse) : documenté
  seulement par le parcours de Mme Boulay [lu] ; critique publique : [non trouvé]. En 2021, Xavier Niel jugeait
  « aberrant pour la concurrence » la nomination de Laure de La Raudière (ancienne d'Orange) [résumé/métadonnées
  seulement, Acteurs publics, 4 janvier 2021].

## 15. ANSSI

- **Nom** : Agence nationale de la sécurité des systèmes d'information.
- **Nature** : **service à compétence nationale rattaché au SGDSN** (Premier ministre) ; créée en 2009 [lu]
  Assemblée nationale, audition de Vincent Strubel, 13 mai 2026
  https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59046N067.html
- **Qui décide** : directeur général **Vincent Strubel** [lu, même audition].
- **Moyens** : « environ 660 agents » (Strubel) [lu] ; budget [non trouvé] (cyber.gouv.fr bloqué).
- **Ce qu'elle fait** : réponse aux incidents, sécurité des opérateurs d'importance vitale, certification ;
  3 586 événements de sécurité en 2025 [résumé/métadonnées seulement] ; prépare NIS 2 : environ 20 000 entités
  régulées en France selon Strubel [lu] ; l'ANSSI « chargée d'établir et de mettre à jour la liste des entités
  essentielles et importantes » [lu] https://lcp.fr/actualites/cybersecurite-les-secteurs-hautement-critiques-bientot-inscrits-dans-la-loi-444844
- **Pouvoirs réels** : prescriptifs pour les opérateurs régulés ; une « commission des sanctions indépendante »
  est prévue avec NIS 2 [lu, audition]. **Loi de transposition de NIS 2 non promulguée au 24 novembre 2026** :
  examen en séance à l'Assemblée le 9 novembre 2026 [lu, LCP] ; date d'adoption au Sénat (mars 2025 ou 2026 selon
  les résumés) : à vérifier.
- **Liens** : C4 (coordination cyber) sous l'autorité du SGDSN avec DGSE, DGSI, Comcyber, DGA [lu, audition] ;
  partenaire de l'ENISA (réseau CSIRT) [non vérifié].
- **Controverse (mai 2026)** : un article de presse évoquait des tensions avec le Premier ministre et une agence
  devenue « trop administrative », avec peu de contrôles (affaire de l'ANTS) ; Strubel : « il n'existe pas de tension
  entre le Premier ministre et l'Anssi », la réforme annoncée « porte sur le pilotage numérique » [lu, audition].
  L'article de presse lui-même : [non trouvé].

## 16. CEPD (EDPB) et Contrôleur européen (EDPS)

- **CEPD / EDPB** (comité européen de la protection des données) [lu RGPD, art. 68, 73, 75]
  https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679
  - « organe de l'Union » qui « possède la personnalité juridique » ; composé du chef d'une autorité de chaque État
    membre et du Contrôleur européen ; la Commission participe « sans droit de vote » ;
  - président·e et deux vice-président·es élu·es pour 5 ans ; **secrétariat assuré par le Contrôleur européen**,
    « sous l'autorité exclusive du président du comité ».
  - Présidente : **Anu Talus** (Finlande), vice-président·es Jelena Virant Burnik et Zdravko Vukić
    [résumé/métadonnées seulement].
  - Pouvoir réel : **décisions contraignantes** en cas de désaccord entre autorités (art. 65) : cas Meta, 1,2 Md€
    [déjà dans le dépôt : ER:61-69 ; etats.ts:26-33] ; avis conjoint contre l'omnibus numérique [déjà dans le dépôt :
    ER:101].
- **Contrôleur européen de la protection des données (CEPD au sens strict, EDPS)** : autorité de contrôle des
  institutions de l'UE ; nommé·e conjointement par le Parlement et le Conseil pour 5 ans.
  - **Wojciech Wiewiórowski** en fonctions depuis le 6 décembre 2019 ; mandat expiré fin 2024 ; **successeur·e
    toujours pas nommé·e** : le Parlement a choisi Bruno Gencarelli (janvier 2025), le Conseil Wiewiórowski ; enquête
    de la Médiatrice européenne (septembre 2025) ; procédure « still ongoing » (février 2026)
    [résumé/métadonnées seulement : europarl.europa.eu, eunews, euronews, communiqué EDPS de février 2026 (PDF
    non servi)]. **Deux sources indépendantes** pour le blocage (Parlement européen, presse) mais aucune lue en
    entier : à rouvrir.
  - Budget : [non trouvé].

## 17. Commission européenne (DSA et DMA, court)

- Seule compétente pour les très grandes plateformes (DSA, 29 services) et pour les contrôleurs d'accès (DMA) ;
  amendes X 120 M€, Temu 200 M€, AliExpress 550 M€ (DSA) ; Apple 500 M€, Meta 200 M€, Google 890 M€ (DMA)
  [déjà dans le dépôt : ER:147-200 ; etats.ts:46-52].
- Contrôle : le Tribunal et la Cour de justice de l'UE (recours d'Apple et Meta [déjà dans le dépôt : ER:207, extrait]).
- Controverse : « censure » (républicains américains) contre « transparence » (démocrates, Commission) ;
  interdictions de visa du 23 décembre 2025 [déjà dans le dépôt : ER:172-183].

## 18. ENISA (court)

- **Nom** : Agence de l'Union européenne pour la cybersécurité (European Union Agency for Cybersecurity).
- **Nature** : agence de l'UE ; siège à **Athènes**, second bureau à **Héraklion** [lu]
  https://www.enisa.europa.eu/sites/default/files/2026-06/ENISA%20Final%20Annual%20Accounts%202025%20%28V1%29-signed-ts-signed-ts.pdf
- **Financement 2025** : subvention de l'Union **26,59 M€** (29,06 M€ en 2024) ; recettes d'exploitation totales
  32,72 M€ ; dépenses de personnel 16,65 M€ [lu] (mêmes comptes).
- **Qui décide** : conseil d'administration (représentant·es des États membres et de la Commission [non vérifié]) ;
  directeur exécutif **Juhan Lepassaar** [résumé/métadonnées seulement].
- **Pouvoirs** : surtout conseil, certification, coopération ; peu de pouvoirs contraignants.
- **En cours** : proposition « Cybersecurity Act 2 » (2026/0011(COD), janvier 2026) qui abrogerait le règlement
  2019/881 et renforcerait l'ENISA ; budget estimé à 341 M€ sur 2028-2034 [résumé/métadonnées seulement]
  https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1884092

## 19. Afnic (registre du .fr)

- **Nom** : Association française pour le nommage Internet en coopération.
- **Nature** : **association loi 1901**, à but non lucratif ; « née en 1997 » [lu]
  https://www.afnic.fr/association-excellences/qui-sommes-nous/presentation/
- **Siège** : [non vérifié] (Montigny-le-Bretonneux souvent cité).
- **Qui décide** [lu] https://www.afnic.fr/association-excellences/qui-sommes-nous/fonctionnement-statuts/
  - conseil d'administration de **10 membres** : **5 désignés par les membres fondateurs** (2 pour l'**Inria**, 1 pour
    chacun des ministères des Télécommunications, de l'Industrie et de la Recherche) et 5 élus par l'assemblée
    générale ;
  - comités consultatifs (bureaux d'enregistrement, utilisateurs), Collège international, Conseil scientifique ;
  - directeur général : **Pierre Bonis**, élu au conseil du CENTR (association des registres européens) en 2025
    [lu] rapport annuel 2025 https://www.afnic.fr/wp-media/uploads/2026/07/Rapport-Annuel-Afnic-2025.pdf
- **Financement 2025** : produits d'exploitation **24,68 M€**, dont 24,05 M€ de prestations (ventes de noms aux
  bureaux d'enregistrement) [lu] https://www.afnic.fr/wp-media/uploads/2026/07/Afnic_Comptes-annuels-2025.pdf ;
  « aucune subvention de fonctionnement » ; 11 % du chiffre d'affaires pour l'intérêt général, au moins 1,3 M€ par an
  pour la Fondation Afnic [lu, page présentation] ; 96 salarié·es au 31 décembre 2025 [lu, rapport annuel].
- **Ce qu'elle fait** : registre du .fr (plus de 4,3 millions de noms) [lu] ; depuis juin 2026, **huit extensions
  ultramarines** (.gp, .mq, .gf, .re, .yt, .pm, .tf, .wf), arrêtés publiés au JO le 22 juin 2026 [lu]
  https://www.entreprises.gouv.fr/espace-presse/souverainete-numerique-lafnic-designee-pour-gerer-et-developper-les-extensions
- **Pouvoirs réels** : **délégation de service public par l'État** : désignée par arrêté du 20 septembre 2021 ;
  cahier des charges du 30 juillet 2021 (après un avis de concession du 14 avril 2021) ; convention avec l'État du
  18 mars 2022 ; **consultation sur une prorogation de 5 ans** (DGE, juillet-octobre 2026) [lu]
  https://www.entreprises.gouv.fr/espace-entreprises/consultations-publiques/consultation-publique-relative-la-prorogation-de-la
  Décision de prorogation : [non trouvé].
- **Liens** : désignée et contrôlée par l'État (DGE) ; gestionnaire du ccTLD inscrit à l'IANA ; contribue (ccTLD) au
  budget de l'ICANN [lu, total ccTLD 2,1 M$, part de l'Afnic non trouvée] ; membre du CENTR [lu].
- **Controverse historique** : le Conseil constitutionnel (décision n° 2010-45 QPC du 6 octobre 2010, saisi par le
  Conseil d'État) déclare l'article L. 45 du CPCE contraire à la Constitution (« incompétence négative » du
  législateur, qui laissait trop au règlement l'attribution des noms) ; abrogation reportée au 1er juillet 2011
  [lu] https://www.conseil-constitutionnel.fr/decision/2010/201045QPC.htm (le requérant est un particulier : ne pas
  le nommer). Critiques récentes de l'Afnic : [non trouvé].

---

## Relations (arêtes pour la carte des rapports de force)

Format : **source → cible** (type) : précision. Source.

### Communauté technique
1. ISOC → IETF LLC (finance) : 47,1 M$ sur 2024-2029 ; 7,3 M$ en 2025. [lu] ietf.org/blog/isoc-extends-financial-support-to-2029 ; rapport ISOC 2025.
2. ISOC → IETF LLC (nomme) : 1 administrateur·rice. [lu] RFC 8711 §6.1.
3. ISOC (conseil) → IAB (contrôle/confirme) : confirme les candidat·es du NomCom. [lu] RFC 8713 §3.7.3.
4. IAB → IESG (contrôle/confirme) : confirme les candidat·es du NomCom. [lu] RFC 8713 §3.7.3.
5. IESG → IETF LLC (contrôle/confirme) : confirme 3 administrateur·rices NomCom. [lu] RFC 8711 §6.1.
6. NomCom de l'IETF → IAB, IESG, IETF LLC (nomme). [lu] RFC 8713 ; [déjà dans le dépôt : GT:211-215].
7. IETF chapitres/organisations ISOC → conseil de l'ISOC (nomme/élit). [lu] internetsociety.org/board-of-trustees.
8. PIR (.org) → ISOC (finance) : 58 M$ en 2025. [lu] rapport ISOC 2025.
9. ICANN → PIR (contrat/contrôle) : contrat de registre .org ; refus du changement de contrôle (30 avril 2020). [lu] blog ICANN.
10. ICANN → IETF LLC (finance) : subvention (« ICANN grant »). [lu] budget IETF 2026.
11. ARIN → IETF LLC (finance) : don de 1 M$ (2025). [lu] budget IETF 2026.
12. IETF/IAB → IANA (délègue/commande) : registres de protocoles selon les RFC. [lu] RFC 2860 §4.1.
13. IETF → ICANN (conseille) : agent de liaison non votant au conseil. [lu] statuts ICANN §7.9.
14. IAB → RFC Editor/IETF LLC (contrat) : production des RFC sous contrat de l'IETF LLC. [déjà dans le dépôt : GT:148-151].

### Noms et adresses
15. ICANN → PTI (contrôle/nomme) : seul membre, élit le conseil. [lu] statuts ICANN art. 16.
16. ICANN → PTI (finance) : 11,5 M$ (exercice 2027). [lu] budget ICANN FY27.
17. ICANN → PTI (délègue/contrat) : fonctions IANA (contrats et sous-contrats). [lu] budget ICANN FY27 §4.7.
18. ICANN → Verisign (contrat) : mainteneur de la zone racine depuis le 20 octobre 2016. [déjà dans le dépôt : GT:723].
19. Verisign → opérateurs racine (fournit la zone). [déjà dans le dépôt : GT:790].
20. RSSAC → ICANN (conseille) : avis + agent de liaison non votant. [lu] statuts ICANN §12.2(c), §7.9.
21. ICANN (conseil) → RSSAC, SSAC (nomme) : nomination des membres. [lu] statuts ICANN §12.2(b)-(c).
22. GAC (États) → ICANN (conseille, quasi-veto) : avis de consensus rejetable seulement à 60 %. [déjà dans le dépôt : GT:726].
23. GAC, ASO, ccNSO, GNSO, ALAC → ICANN (contrôlent via la Communauté habilitée) : désignation et révocation des administrateur·rices, rejet des budgets. [lu] statuts ICANN §6.1-6.2.
24. NomCom de l'ICANN → ICANN (nomme) : 8 sièges sur 16. [lu] statuts §7.2.
25. ASO (NRO) → ICANN (nomme) : sièges 9 et 10. [lu] statuts §7.2 ; Oscar Robles au siège 9 (2026) [résumé].
26. ccNSO → ICANN (nomme) : sièges 11 et 12 ; GNSO → sièges 13 et 14 ; At-Large → siège 15. [lu] statuts §7.2.
27. Registres et bureaux d'enregistrement de gTLD → ICANN (finance) : environ 162 M$ de redevances (FY27). [lu] budget ICANN FY27.
28. ccTLD (dont Afnic) → ICANN (finance, volontaire) : 2,1 M$ (FY27). [lu] budget ICANN FY27.
29. RIR → ICANN (finance, volontaire) : 0,8 M$ (FY27). [lu] budget ICANN FY27.
30. IANA/PTI → RIR (délègue) : blocs d'adresses (ex. 3 février 2011). [déjà dans le dépôt : GT:925].
31. RIR → IANA/PTI (contrat) : accord de service (2016). [déjà dans le dépôt : GT:724].
32. RIR (conseils) → NRO (nomment) : une personne chacun au conseil exécutif. [lu] nro.net/about.
33. RIR (communautés et conseils) → ASO AC / NRO NC (nomment) : 3 membres par RIR. [lu] aso.icann.org/aso-ac/members.
34. NRO → ASO (exerce) : fonctions et secrétariat de l'ASO ; représentation dans la Communauté habilitée. [lu] aso.icann.org/about/aso-and-nro.
35. RIPE NCC → serveur racine K (exploite) ; ICANN → L. [déjà dans le dépôt : GT:769-770].
36. Cour suprême de Maurice → AFRINIC (contrôle) : administration judiciaire depuis 2023 ; procédure de liquidation pendante. [déjà dans le dépôt : GT:959-973] ; [lu] communiqués AFRINIC.
37. Cloud Innovation → AFRINIC (contentieux) : requête en liquidation, contestation de l'élection 2025. [déjà dans le dépôt : GT:964] ; [lu] afrinic.net (15 décembre 2025).
38. ICANN → AFRINIC (intervient en justice) : autorisée le 14 mai 2026. [déjà dans le dépôt : GT:967].
39. État français (DGE) → Afnic (délègue/contrat) : désignation du .fr (arrêté du 20 septembre 2021), convention du 18 mars 2022 ; extensions ultramarines (juin 2026). [lu] entreprises.gouv.fr.
40. Inria et ministères → Afnic (nomment) : 5 administrateur·rices sur 10. [lu] afnic.fr.
41. Afnic → CENTR (est membre ; DG élu au conseil). [lu] rapport Afnic 2025.
42. ICANN, 5 RIR, IETF, IAB, ISOC, W3C (déclaration commune) : Montevideo 2013. [déjà dans le dépôt : GT:710].

### Web
43. Membres du W3C → conseil du W3C (élisent) : 7 sièges ; Partners (ERCIM, Beihang, WCAP) → conseil (nomment) : 3 sièges. [lu] w3.org/governance/board.
44. Membres du W3C → W3C (financent) : cotisations, principale recette. [lu] w3.org/consortium.
45. Apple, Google, Microsoft, Mozilla → WHATWG (nomment) : Steering Group. [déjà dans le dépôt : GT:553-556].
46. WHATWG ↔ W3C (contrat) : MoU du 28 mai 2019. [déjà dans le dépôt : GT:558-562].

### ONU
47. États membres → UIT (financent, élisent) : 68,4 % des recettes ; élection des dirigeant·es à la PP. [lu] itu.int.
48. Assemblée générale de l'ONU → FGI (crée/pérennise) : forum permanent, secrétariat DESA. [déjà dans le dépôt : GT:1019] ; [lu] A/RES/80/173 §99.
49. Secrétaire général de l'ONU → FGI (nomme) : Leadership Panel ; proposition de financement demandée. [lu] A/RES/80/173 §97, §103.
50. ISOC → FGI nationaux et régionaux (finance) : 2 M$ + 517 880 $ (2025). [lu] rapport ISOC 2025.
51. Assemblée générale → Groupe scientifique sur l'IA (nomme) : 40 membres, vote 117-2-2. [lu] unric.org.

### Europe et France
52. Autorités nationales (dont CNIL) + EDPS → CEPD/EDPB (sont membres). [lu] RGPD art. 68.
53. EDPS → EDPB (fournit le secrétariat). [lu] RGPD art. 75.
54. Commission → EDPB (participe sans droit de vote). [lu] RGPD art. 68(5).
55. EDPB → DPC irlandaise (contrôle) : décision contraignante, cas Meta. [déjà dans le dépôt : ER:61-69].
56. Parlement européen + Conseil → EDPS (nomment conjointement) : blocage depuis fin 2024. [résumé/métadonnées seulement].
57. Commission → très grandes plateformes (contrôle, sanctionne) : DSA, DMA. [déjà dans le dépôt : ER:147-200].
58. Commission ↔ Arcom (coopèrent) : l'Arcom est coordinatrice des services numériques en France. [résumé/métadonnées seulement].
59. Président de la République, présidents de l'Assemblée et du Sénat → Arcep (nomment) : 3 + 4 membres. [lu] arcep.fr.
60. Cinq autorités (dont président de la République, Parlement) → Arcom (nomment) : 9 membres. [lu] Sénat r25-068 (détail des cinq autorités [non vérifié]).
61. Juridictions, Parlement, Premier ministre, CESE, CADA → CNIL (nomment) : 18 membres. [lu] rapport CNIL 2025.
62. Arcep → BEREC (est membre) ; Arcep applique le règlement 2015/2120 (neutralité). [déjà dans le dépôt : ER:313, 324].
63. Premier ministre (SGDSN) → ANSSI (supervise) : service rattaché. [lu] audition AN 13 mai 2026.
64. Union européenne → ENISA (finance) : 26,59 M€ (2025). [lu] comptes ENISA 2025.
65. Arcom (personnalité qualifiée) → OFAC/police (contrôle) : blocage administratif. [déjà dans le dépôt : ER:837].
66. Conseil constitutionnel → régime du .fr (contrôle) : QPC 2010-45. [lu].

---

## Faits non confirmés ou corrigés par rapport au dépôt

1. **UIT, élection** (GT:1012-1013, GT:33-34) : le dépôt disait « ne pas annoncer de résultat » et ne citait
   Bogdan-Martin « première femme secrétaire générale » qu'en [extrait]. **Résultat désormais connu** : réélue le
   12 novembre 2026 (164/173) [lu]. La formule officielle de l'UIT est « the first woman to serve in both elected
   positions » ; « première femme secrétaire générale » n'a pas été relu dans une source primaire pour ce dossier.
2. **ICANN, présidence** (GT:707, [extrait] « réélue en octobre 2025 ») : confirmé et actualisé, Tripti Sinha
   réélue le **22 octobre 2026** [lu] ; Kurtis Lindqvist PDG [lu] (absent du dépôt).
3. **ICANN, siège 9** : Alan Barrett (GT:904-908) remplacé par **Oscar Robles** (2026) [résumé/métadonnées seulement].
4. **W3C** : le dépôt ne mentionne pas le départ de **Seth Dobbs** (28 mai 2026) ; PDG par intérim Dominique
   Hazaël-Massieux [lu].
5. **AFRINIC** (GT:30-31, 974) : aucun jugement sur la liquidation ni sur la décharge de l'administrateur trouvé au
   24 novembre 2026. Ajouts : président du conseil Adewale Adedokun ; AFRINIC-38 au Cap (18 novembre 2026) ;
   contestation de l'élection 2025 « sub judice ». **Attention** à un résumé de moteur de recherche erroné (voir §8.5).
6. **Arcep** : mandat de Laure de La Raudière jusqu'au **3 janvier 2027**, successeur·e non connu·e au
   24 novembre 2026 : à revérifier avant publication.
7. **EDPS** : Wiewiórowski toujours en fonctions, mandat expiré, successeur·e non nommé·e : [résumé] uniquement.
8. **NIS 2 en France** : loi non promulguée au 9 novembre 2026 (examen à l'Assemblée) [lu LCP] ; les résumés donnent
   une adoption au Sénat le « 12 mars 2026 », mais le rapport sénatorial porte le numéro l24-393 (session 2024-2025) :
   **date probable 12 mars 2025, non vérifiée**.
9. **gouv.ts:116 (ARIN, « Virginie »)** : correct mais imprécis ; Chantilly non vérifié.
10. **gouv.ts:53 (UIT « où chaque État a une voix »)** : cohérent avec l'élection par les États membres ; les membres
    non étatiques (plus de 1 000) participent sans voter aux élections [non vérifié explicitement].
11. **gouv.ts:32 (« l'Afnic pour .fr »)** : confirmé ; préciser qu'il s'agit d'une **délégation de l'État** (arrêté de
    2021, prorogation en consultation en 2026) [lu].
12. **GT:1107** (« Pour aller plus loin » non vérifié) : toujours aucune page Wikipédia ouverte dans ce dossier.
13. **Non trouvés** (à chercher avant publication) : budgets de LACNIC, AFRINIC, W3C, WHATWG, Arcep, ANSSI, EDPS ;
    siège exact de l'ISOC ; forme juridique d'APNIC et du RIPE NCC ; mode de nomination du MAG du FGI ; décision de
    prorogation de l'Afnic ; prix de la vente du .org ; statut d'« autorité publique indépendante » de l'Arcom
    (Légifrance bloqué) ; issue de la PP-26 sur les résolutions liées à internet (conférence jusqu'au 27 novembre 2026).
