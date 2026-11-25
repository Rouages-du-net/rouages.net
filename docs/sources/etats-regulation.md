# Dossier de sources : États et régulation

Module `/modules/etats-regulation/`. Recherches menées le 8 novembre 2026 par deux agents de recherche
(User-Agent `RouagesDuNet-research/0.1`), puis relues pour la rédaction.

Statuts : **[lu]** page ou document lu ; **[extrait]** extrait de moteur de recherche seulement ;
**[méta]** métadonnées seulement. Seuls les faits [lu] sont publiés.

## Choix de rédaction

- Non publiés (extrait seulement ou source unique) : les suites d'Aylo en 2026 (retour de Pornhub, lettre à
  l'Arcom), l'arrêt de la CJUE du 16 juin 2026 sur la vérification d'âge, les votes français du 21 juillet
  2026, les chiffres CNIL 2024, les détails coréens et brésiliens au-delà de la date d'entrée en vigueur, le
  statut de WhatsApp et Telegram en Russie après mai 2026, le bilan humain de la répression en Iran, les coûts
  économiques des coupures (Top10VPN et NetBlocks sont des entreprises commerciales).
- Étude Rydzak (Inde) : lue en résumé seulement ; la page dit « une étude associe » et rappelle que ces études
  sont corrélationnelles.
- Chiffres des coupures : Access Now, chiffres révisés au 31 mars 2026 (2023 : 289 ; 2024 : 304 ; 2025 : 313).
- Russie et Convention européenne des droits de l'homme : non sourcé dans le dossier, retiré de la page.
- Exemples de l'animation « Blocage » : `site.example` et 203.0.113.10 (adresses de documentation, RFC 5737
  et RFC 6761).
- Modèle de demande RGPD : fabriqué dans le navigateur, sans envoi ni stockage ; aucun champ nominatif.

## À revérifier (sujets évolutifs)

- Omnibus numérique, volet données (vote du Parlement attendu en 2027).
- Pourvoi C-703/25 P contre le Data Privacy Framework.
- Procédures DSA contre TikTok et Meta (constatations préliminaires).
- « EU KIDS Act » ; suites de la décision 2026-911 DC.
- Coupures en Iran et blocages en Russie ; rapport annuel Access Now 2026 (attendu au printemps 2027).
- Digital Networks Act (« fair share »).

---

# Partie 1 : les lois (données, plateformes, IA, neutralité)

## Statut des sources

- **[lu]** : page ou PDF ouvert et lu (par curl avec le User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)`, ou par l'outil de lecture web).
- **[extrait]** : vu seulement dans un extrait ou un résumé de moteur de recherche. À vérifier avant publication.
- **[méta]** : seules les métadonnées ont été lues (titre, date, numéro).

Aucun article Wikipédia n'a été ouvert. Les sites qui ont bloqué la lecture automatique : Légifrance (Cloudflare), planalto.gov.br (Brésil), odpc.go.ke (Kenya), leg.colorado.gov (en curl), esafety.gov.au (erreur HTTP/2), curia « liste des affaires » (page vide). Pour ces sites, on a lu une source officielle de remplacement ou on a marqué le fait [extrait].

---

## 1. RGPD

### Faits

- **Adoption et application.** Règlement (UE) 2016/679 « du 27 avril 2016 », publié au JO L 119 du 4 mai 2016. Il abroge la directive 95/46/CE. Article 99 : « Il est applicable à partir du 25 mai 2018 ». Les signatures sont celles de M. Schulz (Parlement) et J.A. Hennis-Plasschaert (Conseil). [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679
- **Grands principes** (même source) [lu] :
  - **Article 5** : licéité, loyauté, transparence ; limitation des finalités ; **minimisation** (« adéquates, pertinentes et limitées à ce qui est nécessaire ») ; exactitude ; limitation de la conservation ; intégrité et confidentialité ; responsabilité.
  - **Article 6** : six **bases légales** (consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public, intérêt légitime). Le consentement n'est donc qu'une base parmi six (utile contre un mythe).
  - **Article 15** : droit d'accès (confirmation du traitement, copie, finalités, catégories, destinataires…).
  - **Article 17** : droit à l'effacement (« droit à l'oubli »).
  - **Article 20** : droit à la portabilité, dans un « format structuré, couramment utilisé et lisible par machine ».
  - **Article 22** : « droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé, y compris le profilage », avec des exceptions (contrat, loi, consentement explicite).
  - **Article 12, § 3** : réponse « dans un délai d'un mois », prolongeable de deux mois.
  - **Article 83, § 4 et 5** : amendes jusqu'à 10 M€ ou 2 % du chiffre d'affaires mondial, ou jusqu'à 20 M€ ou 4 % selon les manquements.
- **Guichet unique.** Article 56 : l'autorité de l'« établissement principal » est « chef de file » pour les traitements transfrontaliers (procédure de l'article 60). Les grandes plateformes américaines ont leur siège européen en Irlande, si bien que la **Data Protection Commission (DPC) irlandaise** est chef de file pour Meta, TikTok, etc. [lu] (EUR-Lex ci-dessus)
- **Le cas Meta (1,2 Md€) montre comment fonctionne le guichet unique.** Le communiqué de la DPC du 22 mai 2023 [lu] https://www.dataprotection.ie/en/news-media/press-releases/Data-Protection-Commission-announces-conclusion-of-inquiry-into-Meta-Ireland retrace la procédure :
  - enquête ouverte en août 2020, après Schrems II, puis suspendue par la Haute Cour irlandaise jusqu'au 20 mai 2021 ;
  - projet de décision le 6 juillet 2022 ;
  - « A small number (4) of the 47 CSAs raised objections » ;
  - la DPC « disagreed », car une amende allait selon elle au-delà de ce qui était « appropriate, proportionate and necessary » ;
  - l'affaire est renvoyée au Comité européen (EDPB) au titre de l'article 65 ;
  - décision finale le 12 mai 2023 : amende de **1,2 milliard d'euros** et ordre de cesser les transferts dans les 6 mois.
  **Point à retenir : c'est le CEPD/EDPB qui a imposé l'amende à l'autorité irlandaise.**
- **Autres grosses amendes.**
  - TikTok : **530 M€**, DPC, 2 mai 2025, pour des transferts de données d'utilisateur·rices de l'EEE vers la Chine et un manque de transparence. [lu] https://www.dataprotection.ie/en/news-media/latest-news/irish-data-protection-commission-fines-tiktok-eu530-million-and-orders-corrective-measures-following
  - Amazon : 746 M€ (Luxembourg, 2021), [extrait seulement].
  - Total des amendes RGPD en Europe : environ 1,2 Md€ en 2025 et environ 7,1 Md€ cumulés depuis 2018 selon l'enquête annuelle du cabinet DLA Piper [extrait] (relayé par The Register, 22/01/2026).
- **CNIL, bilan 2025** (publié le 9 février 2026) [lu] https://cnil.fr/fr/bilan-sanctions-2025 :
  - 259 décisions, dont **83 sanctions**, 143 mises en demeure, 31 rappels aux obligations légales et 2 avertissements ;
  - **486 839 500 €** d'amendes cumulées ;
  - 16 sanctions de la formation restreinte et 67 en procédure simplifiée (créée en 2022) ;
  - 21 sanctions concernent les cookies et traceurs.
  Selon la presse [extrait], le total repose surtout sur deux décisions, Google (325 M€) et Shein (150 M€). Sans elles, il reste environ 11,8 M€ pour 81 sanctions. Pour 2024, la presse cite 87 sanctions et 55,2 M€, mais un autre article parle de 42 sanctions. Ce chiffre 2024 est à vérifier sur cnil.fr.
- **Réforme de la procédure (règlement adopté en 2025).** Règlement (UE) 2025/2518 « du 26 novembre 2025 établissant des règles de procédure supplémentaires relatives à l'application du règlement (UE) 2016/679 », JO du 12 décembre 2025.
  - Entrée en vigueur : vingt jours après la publication.
  - « s'applique à compter du **2 avril 2027** ».
  - Délais encadrés : régime de « quinze mois » pour les enquêtes.
  [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202502518
  Vote du Parlement le 21 octobre 2025 : 533 pour, 43 contre, 68 abstentions [extrait].

### Omnibus numérique (proposé le 19 novembre 2025)

- **Proposition.** Communiqué IP/25/2718 du 19 novembre 2025 [lu] https://ec.europa.eu/commission/presscorner/detail/fr/ip_25_2718 :
  - « jusqu'à 5 milliards d'euros » d'économies administratives d'ici 2029 ;
  - IA : application des règles « à haut risque » « décalée de 16 mois au maximum », liée à la disponibilité des normes ;
  - un guichet unique pour signaler les incidents (SRI 2, RGPD, DORA) ;
  - « modifications ciblées » du RGPD ;
  - cookies : moins de bandeaux, consentement « en un clic », préférences réglées dans le navigateur.
- **Ce que contenait la proposition sur le RGPD**, d'après l'avis conjoint EDPB-EDPS et noyb :
  - une nouvelle définition (subjective) de la donnée personnelle (art. 4(1)) ;
  - l'entraînement de l'IA sur la base de l'intérêt légitime (art. 88c) ;
  - des limites au droit d'accès (art. 12(5)) ;
  - les règles sur les cookies déplacées dans le RGPD (art. 88a/88b).
- **Réactions.**
  - **EDPB et EDPS**, avis conjoint 2/2026 « Adopted on 10 February 2026 » : « the EDPB and the EDPS strongly urge the co-legislators to not adopt the proposed changes to the definition of personal data ». [lu] https://www.edpb.europa.eu/system/files/2026-02/edpb_edps_jointopinion_202602_digitalomnibus_en.pdf
  - **noyb** (11 février 2026) parle de « sweeping changes to the GDPR and the ePrivacy Directive disguised as a "simplification" measure ». Ces changements seraient « mainly useful for US big tech companies ». [lu] https://noyb.eu/en/digital-omnibus-eu-dpas-reject-many-proposed-changes-gdpr
  - **BEUC** (consommateur·rices), lettre du 16 décembre 2025 : « Deregulation without simplification ». Selon le BEUC, l'article 4 modifié « allow[s] controllers to determine whether such data is personal or not ». [lu] https://www.beuc.eu/sites/default/files/publications/BEUC-X-2025-116_Digital_Omnibus_proposals_keep_protections_under_GDPR_and_uphold_the_AI_Act.pdf
  - **EDRi** rejette toute réouverture de l'article 4(1) (tableau article par article) [extrait] https://edri.org/wp-content/uploads/2026/04/Omnibus-Table-GDPR.pdf
  - **Entreprises : CCIA Europe** (lobby des grandes plateformes) parle d'un « welcome step » mais estime qu'« further and bolder action is still needed ». Elle voudrait aussi alléger le DSA et le DMA. [lu] https://ccianet.org/news/2025/11/digital-omnibus-simplification-of-eu-tech-rules-requires-bolder-action/
- **Volet IA : adopté.** Voir la question 4 : règlement (UE) 2026/1744 du 8 juillet 2026, en vigueur depuis le 27 juillet 2026.
- **Volet données (RGPD, ePrivacy, SRI 2) : pas adopté au 8 novembre 2026.**
  - Le Coreper a arrêté le **mandat de négociation du Conseil le 21 octobre 2026** (document ST 14756/26 du 22 octobre 2026, dossier 2025/0360 (COD)). [lu] https://data.consilium.europa.eu/doc/document/ST-14756-2026-INIT/en/pdf
  - Le PDF marque les suppressions en barré. Notre extraction des passages barrés montre que le Conseil :
    - **supprime la nouvelle définition de la donnée personnelle** (considérant 27 entièrement barré) ;
    - **supprime l'article 88a** (cookies dans le RGPD) ;
    - **garde les cookies dans la directive ePrivacy (art. 5(3))**, avec refus « with a single-click button » et interdiction de redemander le consentement pendant « at least four months » après un refus (la Commission proposait six mois) ;
    - porte le délai de notification des violations de données à **96 heures** (72 heures dans le RGPD actuel).
  - **Parlement** : rapport conjoint ITRE-LIBE en projet. Aucun vote en commission à ce jour ; un vote est attendu début 2027 [extrait]. Les trilogues ne peuvent pas commencer avant le vote du Parlement.

### Réserves et points contestés

- **Lenteur.** L'affaire Meta a duré environ 3 ans (2020 à 2023) ; le règlement 2025/2518 ne s'appliquera qu'en avril 2027.
- **Rôle de l'Irlande.** Elle est accusée de laxisme (le cas Meta en est l'exemple : il a fallu l'EDPB pour imposer l'amende). La DPC défend sa lecture « proportionnée ».
- **Bandeaux cookies.** Ils viennent surtout de la directive ePrivacy, pas du RGPD (voir la question 8).
- **Coût pour les petites structures.** C'est l'argument de la Commission pour l'omnibus. Le BEUC répond que la réforme profite surtout aux grandes entreprises non européennes.
- **Chiffres CNIL 2024** : contradiction entre articles de presse. Citer seulement 2025 (source primaire).

---

## 2. Transferts vers les États-Unis

### Faits

- **Schrems I, 6 octobre 2015** (C-362/14). La Cour « déclare invalide la décision de la Commission constatant que les États-Unis assurent un niveau de protection adéquat ». Il s'agit de la sphère de sécurité (« Safe Harbor »), décision 2000/520. La plainte de Maximillian Schrems, utilisateur de Facebook depuis 2008, s'appuyait sur les révélations d'Edward Snowden (2013) sur la NSA. [lu] communiqué n° 117/15 https://curia.europa.eu/jcms/upload/docs/application/pdf/2015-10/cp150117fr.pdf
- **Schrems II, 16 juillet 2020** (C-311/18). « La Cour invalide la décision 2016/1250 relative à l'adéquation de la protection assurée par le bouclier de protection des données UE-États-Unis » (Privacy Shield). Elle valide en revanche les clauses contractuelles types. [lu] communiqué n° 91/20 https://curia.europa.eu/jcms/upload/docs/application/pdf/2020-07/cp200091fr.pdf
- **Data Privacy Framework**, décision d'adéquation du **10 juillet 2023**, après le décret présidentiel américain du 7 octobre 2022 et la création de la Data Protection Review Court (DPRC).
- **Recours Latombe** (T-553/23), jugé le **3 septembre 2025**. Le Tribunal rejette le recours. Il confirme qu'« à la date d'adoption de la décision attaquée, les États-Unis assuraient un niveau adéquat de protection ». Philippe Latombe, député français, contestait l'indépendance de la DPRC et la collecte en vrac. [lu] communiqué n° 106/25 https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-09/cp250106fr.pdf
- **Pourvoi C-703/25 P**, formé le 31 octobre 2025 et toujours pendant. Microsoft serait intervenu au soutien de la Commission (juin 2026) [extrait]. Aucun arrêt ni date d'audience n'a été trouvé.

### Réserves et points contestés

- Le Tribunal juge la situation « à la date d'adoption » (2023). Les changements survenus depuis aux États-Unis ne sont pas tranchés : révocation de membres du PCLOB (organe de contrôle américain) en 2025, contentieux américain en cours [extrait, Brennan Center]. La Cour de justice a historiquement été plus sévère que le Tribunal.
- Positions en présence :
  - la Commission et les entreprises (Microsoft) défendent la stabilité juridique ;
  - noyb et Philippe Latombe jugent les garanties insuffisantes.

---

## 3. DSA et DMA

### Faits : DSA

- **Règlement (UE) 2022/2065 du 19 octobre 2022.** Applicable à tous à partir du **17 février 2024** ; certaines dispositions s'appliquent dès le 16 novembre 2022. [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32022R2065
  - **Article 33** : seuil de **45 millions** d'utilisateur·rices actifs mensuels dans l'UE pour être désigné « très grande plateforme » (VLOP) ou « très grand moteur de recherche » (VLOSE).
  - **Article 74** : amendes jusqu'à **6 %** du chiffre d'affaires mondial.
- **Obligations des très grandes plateformes** : évaluation et atténuation des risques systémiques (art. 34-35), registre des publicités, accès des chercheur·ses aux données (art. 40), interdiction des interfaces trompeuses, mécanismes de signalement, audits, etc.
- **Liste des services désignés.** Page de la Commission « mise à jour le 06 November 2026 » [lu] https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses : **29 services**.
  - Très grandes plateformes : AliExpress, Amazon Store, App Store, Pornhub, Booking.com, Google Play, Google Maps, Google Shopping, YouTube, Shein, LinkedIn, Facebook, Instagram, XNXX, Pinterest, Reddit, Roblox, Snapchat, TikTok, Temu, XVideos, WhatsApp, Wikipédia, X, Zalando.
  - Très grands moteurs de recherche : Google Search, Bing, **ChatGPT** (désigné le 31 août 2026, communiqué IP/26/1772).
  - **Stripchat** n'est plus désigné : décision de fin de désignation du 27 mai 2025.
  - Les premières désignations datent du 25 avril 2023 (IP/23/2413).
- **Décisions et amendes** (la page ci-dessus sert de chronologie officielle) :
  - **X, 5 décembre 2025 : 120 M€.** C'est la **première décision de non-conformité** au titre du DSA, pour trois manquements de transparence : « coche bleue » trompeuse (« n'importe qui peut payer pour obtenir le statut "vérifié" »), registre des publicités, accès des chercheur·ses aux données publiques. Procédure ouverte le 18 décembre 2023. [lu] IP/25/2934 https://ec.europa.eu/commission/presscorner/detail/fr/ip_25_2934. Le plan d'action de X a été accepté le 15 juillet 2026. Une enquête sur Grok et les systèmes de recommandation de X est ouverte depuis le 26 janvier 2026 [lu, page VLOP].
  - **Temu, 28 mai 2026 : 200 M€.** Évaluation insuffisante du risque de produits illégaux (exemples cités : chargeurs, jouets pour bébés). [lu] https://digital-strategy.ec.europa.eu/en/news/commission-fines-temu-eu200-million-breaching-digital-services-act. Le plan d'action a été accepté le 26 octobre 2026. Temu jugeait l'amende « disproportionnée » [extrait].
  - **AliExpress, 20 juillet 2026 : 550 M€**, la **plus forte amende DSA à ce jour**, pour des produits illégaux, dangereux ou contrefaits, des modérateur·rices en nombre insuffisant et des systèmes de recommandation qui amplifient ces produits. [lu] IP/26/1654 https://ec.europa.eu/commission/presscorner/detail/fr/ip_26_1654. AliExpress avait déjà pris des engagements contraignants le 18 juin 2025.
  - **TikTok : pas d'amende DSA à ce jour.**
    - 5 août 2024 : engagements sur TikTok Lite ;
    - 5 décembre 2025 : engagements sur la transparence publicitaire ;
    - constatations préliminaires : 24 octobre 2025 (accès des chercheur·ses), 6 février 2026 (conception addictive), 24 juillet 2026 (comptes des mineur·es), **6 novembre 2026** (effet « rabbit hole » du fil « Pour toi »).
    [lu] https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-you-feed-breach-digital-services-act-harmful-rabbit-holes. TikTok qualifie ces griefs de « fundamentally inaccurate » [extrait].
  - **Meta (Facebook, Instagram) : pas d'amende DSA à ce jour.** Constatations préliminaires :
    - 24 octobre 2025 : accès des chercheur·ses, mécanismes de signalement « trompeurs » [lu] IP/25/2503 https://ec.europa.eu/commission/presscorner/detail/fr/ip_25_2503 ;
    - 29 avril 2026 : enfants de moins de 13 ans ;
    - 10 juillet 2026 : conception addictive [lu, page VLOP].
  - **Sites pornographiques** (Pornhub, XNXX, XVideos, Stripchat) : constatations préliminaires le 26 mars 2026 [lu, page VLOP].
- **Positions des États-Unis et des plateformes.**
  - Rapport des Républicains de la commission judiciaire de la Chambre des représentants, 25 juillet 2025 : le DSA serait « a censorship tool » [lu] https://judiciary.house.gov/media/press-releases/foreign-censorship-threat-how-european-unions-digital-services-act-compels. Un « Part II » a suivi le 3 février 2026 [extrait].
  - Réponse des Démocrates de la même commission : le DSA « requires companies to remove illegal content online in a manner similar to U.S. laws on child sexual abuse material and copy written material ». L'exemple du « take back our country » aurait été sorti de son contexte (mème islamophobe et harcèlement d'une adolescente de 16 ans). [lu] https://democrats-judiciary.house.gov/sites/evo-subsites/democrats-judiciary.house.gov/files/evo-media-document/debunking-republicans-misleading-report-on-the-eu-s-digital-services-act-dsa.pdf
  - **Menaces de rétorsion commerciale.** En août 2025, Donald Trump a menacé de droits de douane les pays qui adoptent des lois visant les entreprises technologiques. La Commission a défendu son « sovereign right » (porte-parole Thomas Regnier). [lu] https://www.euronews.com/2025/08/28/eu-tech-chief-to-fight-back-against-trumps-allegations-commission-says
  - **Interdictions de visa du 23 décembre 2025** contre cinq Européen·nes :
    - Thierry Breton, ancien commissaire, présenté comme le « mastermind » du DSA ;
    - Imran Ahmed (CCDH) ;
    - Clare Melford (Global Disinformation Index) ;
    - Anna-Lena von Hodenberg et Josephine Ballon (HateAid).
    Marco Rubio dénonce des « egregious acts of extraterritorial censorship ». Breton répond par « witch hunt » ; HateAid y voit une tentative d'empêcher l'application du droit européen. [lu] https://www.aljazeera.com/news/2025/12/24/us-bars-five-europeans-over-efforts-to-censor-american-viewpoints. Le texte officiel du département d'État n'a pas été ouvert.
  - **Mark Zuckerberg**, 7 janvier 2025 : l'Europe aurait « an ever-increasing number of laws institutionalizing censorship ». La Commission a répondu que les règles visent seulement les contenus illégaux. [extrait] (Silicon Republic, JURIST)
  - **Critiques venues de la société civile** (pas seulement des États-Unis) : EFF et ARTICLE 19 demandent des garde-fous sur les « signaleurs de confiance » (trusted flaggers, 2026) et sur le mécanisme de réaction aux crises. [extrait] https://www.eff.org/deeplinks/2026/07/eff-and-article-19-submission-european-commission-dsa-trusted-flagger-guidelines

### Faits : DMA

- **Règlement (UE) 2022/1925 du 14 septembre 2022**, applicable à partir du **2 mai 2023**. [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32022R1925
- **Contrôleurs d'accès** [lu] https://digital-markets-act.ec.europa.eu/gatekeepers_en :
  - six désignés le 6 septembre 2023 : Alphabet, Amazon, Apple, ByteDance, Meta, Microsoft ;
  - puis Apple iPadOS (29 avril 2024) et **Booking** (13 mai 2024) ;
  - fin de désignation de Facebook Marketplace (23 avril 2025) ;
  - **23 services de plateforme essentiels** désignés.
- **Amendes d'Apple et de Meta : 23 avril 2025** (et non le 22, contrairement à plusieurs articles de presse).
  - **Apple : 500 M€**, pour les règles « anti-steering » de l'App Store, qui empêchent les développeur·ses d'orienter vers des offres moins chères.
  - **Meta : 200 M€**, pour le modèle « payer ou consentir », qui ne laissait pas le choix d'un service utilisant moins de données personnelles.
  [lu] IP/25/1085 https://ec.europa.eu/commission/presscorner/detail/fr/ip_25_1085
- **Google, 23 juillet 2026 : 890 M€** au total.
  - 460 M€ pour l'autofavoritisme dans Google Search (shopping, hôtels, transports, résultats sportifs) ;
  - 430 M€ pour l'anti-steering sur Google Play.
  [lu] IP/26/1670 https://ec.europa.eu/commission/presscorner/detail/fr/ip_26_1670

### Réserves et points contestés

- **« Censure »** : voir la question 8. Les deux camps ont des sources primaires citables (rapports républicain et démocrate de la même commission).
- **Ciblage des entreprises américaines ?** Les trois plus fortes amendes DSA visent des entreprises chinoises (AliExpress, Temu) et X ; les amendes DMA visent Apple, Meta et Google. La Commission dit appliquer la loi à tous [extrait].
- **Faible montant des amendes** par rapport aux plafonds (6 % pour le DSA, 10 % pour le DMA) : critique des associations. Les entreprises jugent au contraire les amendes disproportionnées (Temu, Apple).
- **Recours** : Apple et Meta ont contesté les décisions DMA [extrait] ; l'état des recours n'a pas été vérifié.

---

## 4. AI Act et l'IA dans le monde

### Faits : UE

- **Règlement (UE) 2024/1689**, signé le 13 juin 2024 et entré en vigueur le 1er août 2024. [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202401689
  - **Calendrier initial (art. 113)** :
    - **2 février 2025** : chapitres I et II (définitions, **pratiques interdites**) ;
    - **2 août 2025** : modèles d'IA à usage général (chapitre V), gouvernance, sanctions ;
    - **2 août 2026** : le reste ;
    - **2 août 2027** : systèmes à haut risque intégrés à des produits (art. 6 § 1).
  - **Pratiques interdites (art. 5)** :
    - a) techniques subliminales, manipulatrices ou trompeuses causant un préjudice important ;
    - b) exploitation des vulnérabilités (âge, handicap, situation sociale ou économique) ;
    - c) notation sociale ;
    - d) prédiction du risque d'infraction fondée uniquement sur le profilage ;
    - e) bases de reconnaissance faciale par moissonnage non ciblé d'images (internet, vidéosurveillance) ;
    - f) reconnaissance des émotions au travail et à l'école (sauf raisons médicales ou de sécurité) ;
    - g) catégorisation biométrique pour déduire l'origine (« race » dans le texte), les opinions politiques, l'appartenance syndicale, les convictions religieuses, la vie ou l'orientation sexuelle ;
    - h) identification biométrique à distance « en temps réel » dans l'espace public à des fins répressives, sauf exceptions (victimes d'enlèvement ou de traite, menace terroriste imminente, suspects d'infractions graves).
- **Omnibus IA : règlement (UE) 2026/1744 « du 8 juillet 2026 »**, JO du 24 juillet 2026, en vigueur le troisième jour après publication, soit le 27 juillet 2026. [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202601744
  - Haut risque de l'annexe III (emploi, éducation, etc.) : application au **2 décembre 2027** (au lieu du 2 août 2026).
  - Haut risque de l'annexe I (produits) : application au **2 août 2028** (au lieu du 2 août 2027).
  - **Nouvelles interdictions (art. 5 § 1, b bis et b ter), applicables le 2 décembre 2026** :
    - systèmes qui génèrent des images intimes réalistes d'une personne identifiable sans son consentement (applications de « déshabillage », deepfakes sexuels) ;
    - systèmes qui génèrent des contenus pédocriminels.
  - Marquage (art. 50 § 2) : les systèmes génératifs mis sur le marché avant le 2 août 2026 ont jusqu'au **2 décembre 2026**.
  - Accord politique le 7 mai 2026. Vote du Parlement le 16 juin 2026 (423 pour, 57 contre, 174 abstentions) [extrait]. Adoption au Conseil fin juin 2026 [extrait]. Différence avec la proposition : la Commission voulait des dates liées aux normes ; le texte final fixe des **dates fermes**.

### Faits : ailleurs

- **Chine** (textes de la CAC, l'administration chinoise du cyberespace) :
  - **Règles sur les algorithmes de recommandation** (令第9号), en vigueur le **1er mars 2022**. L'**article 17** oblige à proposer une option non personnalisée ou la désactivation de la recommandation, et à permettre de supprimer les étiquettes de profil. [lu] https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm
  - **Mesures provisoires sur l'IA générative** (令第15号), en vigueur le **15 août 2023**. L'article 4 impose de « 坚持社会主义核心价值观 » (« s'en tenir aux valeurs fondamentales socialistes »), d'interdire notamment les contenus de « subversion », d'éviter les discriminations (ethnie, sexe, âge…) et de respecter la vie privée. [lu] https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm
  - **Mesures sur l'étiquetage des contenus générés par IA**, publiées le 14 mars 2025 par quatre administrations et en vigueur le **1er septembre 2025**, avec une norme nationale obligatoire publiée en même temps. Elles prévoient des marquages visibles et cachés (métadonnées). [lu] https://www.cac.gov.cn/2025-03/14/c_1743654685896173.htm
- **États-Unis (fédéral)** : liste des décrets présidentiels [méta] via l'API du Federal Register (federalregister.gov) :
  - EO 14110 (30 octobre 2023, Biden, « Safe, Secure, and Trustworthy… ») ;
  - EO 14148 (20 janvier 2025, « Initial Rescissions… », qui révoque notamment l'EO 14110 [extrait ; texte non lu]) ;
  - EO 14179 (23 janvier 2025, « Removing Barriers to American Leadership in AI ») ;
  - EO 14319 (23 juillet 2025, « Preventing Woke AI in the Federal Government ») ;
  - **EO 14365 (11 décembre 2025, « Ensuring a National Policy Framework for AI »)**. Fiche de la Maison-Blanche [lu] https://www.whitehouse.gov/fact-sheets/2025/12/fact-sheet-president-donald-j-trump-ensures-a-national-policy-framework-for-artificial-intelligence/ : création d'une « AI Litigation Task Force » pour attaquer les lois des États ; menace de retenir des crédits BEAD (fibre) ; la Californie et le Colorado sont accusés de vouloir « censor outputs and insert left-wing ideology » ;
  - EO 14409 (2 juin 2026, « Promoting Advanced AI Innovation and Security ») [méta].
- **États fédérés.**
  - **Californie** : SB 53, « Transparency in Frontier Artificial Intelligence Act », signé le 29 septembre 2025 (sénateur Scott Wiener). [lu] https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/
  - **Colorado** : la loi SB 24-205 (2024) **n'est jamais entrée en vigueur**. Elle a été reportée, puis abrogée et remplacée par **SB 26-189**, signée le **14 mai 2026**, qui porte sur la « technologie de décision automatisée » : documentation, information du public, explication sous 30 jours après une décision défavorable, révision humaine ; principales obligations au 1er janvier 2027. [lu, via l'outil de lecture web] https://leg.colorado.gov/bills/sb26-189. La société xAI a obtenu un gel de l'application (avril 2026) [extrait]. La FTC aurait estimé la loi « impliedly preempted » [extrait, non recoupé].
- **Corée du Sud** : loi-cadre sur l'IA (AI Basic Act), **en vigueur le 22 janvier 2026**, avec son décret d'application. Elle couvre l'IA générative, l'IA à « fort impact » et des seuils de calcul. Elle impose un marquage des contenus difficiles à distinguer, s'applique hors du territoire coréen et oblige certain·es opérateurs étrangers à désigner un représentant. [lu] https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways. Amende maximale de 30 millions de wons et période de grâce d'au moins un an [extrait, IAPP : « all roar no bite »].
- **Brésil** : projet de loi PL 2338/2023, adopté au Sénat le 10 décembre 2024, **toujours en commission spéciale à la Chambre des député·es** ; vote reporté après les élections d'octobre 2026 [extrait]. À noter : le Brésil a adopté l'**ECA Digital** (loi 15.211 du 17 septembre 2025) sur la protection des mineur·es en ligne, appliquée par l'ANPD [lu, voir la question 5].

### Réserves et points contestés

- Report de l'AI Act : l'industrie (CCIA) voulait plus. Les consommateur·rices (BEUC) dénoncent une dérégulation.
- États-Unis : conflit ouvert entre l'État fédéral et les États (Californie, Colorado) ; ce n'est pas une absence de régulation.
- Chine : la loi protège contre certains abus des entreprises (désactivation de l'algorithme), mais impose aussi un contrôle politique des contenus. Les deux sont vrais en même temps.

---

## 5. Lois sur les données dans le monde

### Faits

- **CNUCED (Global Cyberlaw Tracker).** Lecture directe du fichier de données du tracker 2026 [lu] https://storage.unctad.org/2026-cyberlaw_tracker/assets/data/data.csv (page : https://unctad.org/page/data-protection-and-privacy-legislation-worldwide) :
  - **155 pays sur 195 ont une loi** de protection des données (environ 79 %), 5 un projet, 33 aucune, 2 sans donnée ;
  - Afrique : 41 sur 54 ;
  - Amérique latine et Caraïbes : 29 sur 33 ;
  - Asie et Océanie : 40 sur 62 ;
  - Europe : 43 sur 44 ;
  - pays les moins avancés : 25 sur 44.
  En 2020, le chiffre de la CNUCED était de 66 % [extrait].
- **Chine : loi sur la protection des informations personnelles (PIPL, 个人信息保护法)**, adoptée le **20 août 2021** par le Comité permanent de l'Assemblée populaire nationale. Article 74 : « 本法自2021年11月1日起施行 » (« la présente loi entre en vigueur le 1er novembre 2021 »). Elle compte 8 chapitres, dont un sur les transferts transfrontaliers et une section propre aux organes de l'État. [lu] https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- **Inde** : **Digital Personal Data Protection Act**, adopté le **11 août 2023** ; **DPDP Rules** notifiées le **14 novembre 2025** ; mise en conformité étalée sur **dix-huit mois**.
  - Amende maximale : 250 crores de roupies (₹250 crore) pour un défaut de sécurité.
  - Appels portés devant le TDSAT.
  - La loi modifie la loi sur le droit à l'information (RTI) ; le gouvernement invoque l'arrêt Puttaswamy (vie privée, droit fondamental).
  [lu] note PIB https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf
- **Brésil.**
  - **LGPD : loi 13.709 du 14 août 2018.** Entrée en vigueur en 2020, sanctions applicables depuis 2021 [extrait].
  - L'ANPD est devenue une agence de régulation (loi 15.352 du 25 février 2026). La protection des données a été inscrite dans la Constitution (amendement 115). [lu] https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional
  - **Marco Civil da Internet : loi 12.965/2014.** En juin 2025, le STF (Cour suprême) a invalidé en partie son **article 19**, selon lequel les plateformes n'étaient responsables qu'après une décision de justice. Recours (embargos de declaração) de Facebook et Google examinés en juin 2026. [lu] https://noticias.stf.jus.br/postsnoticias/stf-vai-analisar-recursos-contra-tese-fixada-no-julgamento-do-marco-civil-da-internet/
- **Afrique.**
  - **Convention de l'Union africaine sur la cybersécurité et la protection des données personnelles** (dite « de Malabo »), adoptée à Malabo le **27 juin 2014**. Liste de l'UA au 08/07/2024 [lu] https://au.int/sites/default/files/treaties/29560-sl-AFRICAN_UNION_CONVENTION_ON_CYBER_SECURITY_AND_PERSONAL_DATA_PROTECTION.pdf :
    - **21 signatures, 16 ratifications** sur 55 États ;
    - la Mauritanie a déposé le **9 mai 2023** le 15e instrument, ce qui a entraîné l'entrée en vigueur 30 jours plus tard, le 8 juin 2023 [extrait pour la date d'entrée en vigueur] ;
    - le **Sénégal** a été le premier à ratifier (3 août 2016) ;
    - le **Kenya, le Nigeria et l'Afrique du Sud n'ont pas ratifié** (le Nigeria a signé en 2024, l'Afrique du Sud en 2023).
  - **Kenya** : Data Protection Act n° 24 de 2019 (sanctionné le 8 novembre 2019, en vigueur le 25 novembre 2019). Immaculate Kassait est la première commissaire à la protection des données (novembre 2020). [extrait]
  - **Nigeria** : Nigeria Data Protection Act 2023, signé en juin 2023 (le 12 ou le 14 juin selon les sources), qui crée la NDPC. [extrait]
- **Californie.**
  - **CCPA (2018)**, complété par le **CPRA** (Proposition 24, approuvée par les électeur·rices en **novembre 2020**). Le CPRA crée la California Privacy Protection Agency (CPPA), présidée à sa création par Jennifer M. Urban (nommée en mars 2021).
  - La plateforme « Delete Request and Opt-out Platform » est en service : une seule demande permet d'exiger l'effacement auprès des courtiers en données.
  [lu] https://cppa.ca.gov/about_us/

### Réserves et points contestés

- La CNUCED compte les **États-Unis comme ayant une loi**, alors qu'il n'existe pas de loi fédérale générale (seulement des lois sectorielles et des lois d'États). Les comptes varient selon la méthode.
- Avoir une loi ne veut pas dire qu'elle est appliquée : autorités sans moyens, période de grâce (Corée), exemptions larges pour l'État (critique récurrente en Chine et en Inde, ainsi que sur la modification du RTI en Inde [à sourcer côté journalistes et militant·es si publié]).
- Le Cap-Vert est souvent cité comme premier pays africain doté d'une loi (2001) : **non vérifié**.

---

## 6. Neutralité du net

### Faits

- **UE : règlement (UE) 2015/2120 du 25 novembre 2015**, applicable au **30 avril 2016**. Article 3 § 3 : les fournisseurs d'accès « traitent tout le trafic de façon égale et sans discrimination, restriction ou interférence ». Une gestion « raisonnable » du trafic reste permise. Les autorités nationales (en France : l'**Arcep**) surveillent et font respecter ces règles (art. 5). [lu] https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32015R2120
- **CJUE, Telenor, 15 septembre 2020** (C-807/18 et C-39/19), première interprétation du règlement. Le « tarif nul » qui privilégie certaines applications pendant que les autres sont bloquées ou ralenties est contraire au règlement. [lu] https://curia.europa.eu/jcms/upload/docs/application/pdf/2020-09/cp200106fr.pdf
- **États-Unis : le « yo-yo ».**
  - Open Internet Order de 2015 (Obama) ;
  - abrogation par le Restoring Internet Freedom Order, adopté fin 2017 et publié en 2018 (33 FCC Rcd. 311) ;
  - rétablissement par le « Safeguarding Order » de la FCC (publié le 22 mai 2024).
  - **Annulation par la cour d'appel du 6e circuit le 2 janvier 2025** (Ohio Telecom Ass'n v. FCC, juges Griffin, Kethledge et Bush). La cour s'appuie sur l'arrêt Loper Bright de la Cour suprême, qui met fin à la déférence envers l'interprétation de l'administration (« Chevron »). Pour elle, l'accès à internet est un « information service ». Citation : « Applying Loper Bright means we can end the FCC's vacillations. »
  [lu] https://www.opn.ca6.uscourts.gov/opinions.pdf/25a0002p-06.pdf
- **Inde : TRAI, 8 février 2016**, « Prohibition of Discriminatory Tariffs for Data Services Regulations ». Règle : « No service provider shall offer or charge discriminatory tariffs for data services on the basis of content ». Cette règle a mis fin aux offres à tarif nul comme **Free Basics de Facebook**. [lu] https://www.trai.gov.in/sites/default/files/2024-08/Press_Release_No_13_28_08-02-2016.pdf
- **« Fair share » (contribution des grandes plateformes aux réseaux).**
  - Opérateurs : l'ETNO (association des opérateurs télécoms européens) proposait un mécanisme de compensation directe.
  - **BEREC** (organe des régulateurs européens des télécoms), évaluation préliminaire du 7 octobre 2022 : « No evidence of "free-riding" ». [lu] https://www.berec.europa.eu/system/files/2022-10/BEREC%20BoR%20%2822%29%20137%20BEREC_preliminary-assessment-payments-CAPs-to-ISPs_0.pdf
  - **Digital Networks Act (DNA)** proposé par la Commission le 21 janvier 2026 : pas de taxe réseau explicite, mais un mécanisme de règlement des différends sur l'interconnexion IP [extrait].
    - CCIA (plateformes) y voit « a backdoor to resurrect network fees » [extrait] https://ccianet.org/news/2026/01/digital-networks-act-commission-introduces-backdoor-to-resurrect-network-fees
    - L'Internet Society (novembre 2026) demande au Parlement de retirer les amendements « fair share » du rapporteur [extrait].
    - Six États membres demandent un réexamen [extrait].

### Réserves et points contestés

- Opérateurs (ETNO) : les plateformes génèrent le trafic sans payer les réseaux. Plateformes et BEREC : pas de preuve de « parasitisme », risque pour la neutralité. Les deux positions doivent être présentées.
- États-Unis : plusieurs États (Californie notamment) ont leurs propres lois de neutralité [non vérifié ici].

---

## 7. France

### Faits

- **SAFARI (1974) et création de la CNIL.**
  - Article du *Monde* du **21 mars 1974** (Philippe Boucher), « SAFARI ou la chasse aux Français ».
  - Le projet du ministère de l'Intérieur visait à interconnecter « 100 millions de fiches, réparties dans 400 fichiers » grâce à un identifiant unique.
  - Le gouvernement crée la commission « Informatique et Libertés », présidée par Bernard Chenot ; rapport Tricot en juin 1975.
  - Loi du **6 janvier 1978**.
  [lu] https://acteurspublics.fr/articles/1978-annee-zero-de-la-protection-des-donnees/. Texte consolidé de la loi sur le site de la CNIL [lu] https://www.cnil.fr/fr/la-loi-informatique-et-libertes. La CNIL n'aurait été effectivement installée qu'en janvier 1980 (Acteurs publics, [extrait]).
- **Loi SREN du 21 mai 2024** (« visant à sécuriser et à réguler l'espace numérique »). Elle donne à l'Arcom des pouvoirs de sanction, de blocage et de déréférencement contre les sites pornographiques accessibles aux mineur·es. [lu, via le communiqué de l'Arcom ci-dessous ; Légifrance inaccessible]
- **Vérification d'âge et Aylo.** Communiqué de l'Arcom du **3 juin 2025** [lu] https://www.arcom.fr/presse/larcom-prend-acte-de-la-decision-du-groupe-aylo :
  - six sites contrôlés ; cinq ont mis en place une vérification ; un a été bloqué et déréférencé ;
  - un arrêté permet d'agir contre les sites établis dans l'UE **à partir du 7 juin 2025** ;
  - Aylo a choisi de « se soustraire » en suspendant Pornhub en France, alors que, selon l'Arcom, Pornhub est visité chaque mois par « plus d'un tiers des adolescents de 12 à 17 ans ».
  - Suites [extrait, sources de qualité variable] :
    - le tribunal administratif de Paris rejette les recours d'Aylo (22 mai 2026) ;
    - Pornhub serait revenu en juin 2026 sans contenu explicite ;
    - Aylo a écrit à l'Arcom (24 août 2026) pour demander une vérification au niveau du système d'exploitation ;
    - 13 sites auraient été bloqués en juillet 2026.
    Tout cela est à vérifier sur arcom.fr avant publication.
- **Réseaux sociaux interdits aux moins de 15 ans.**
  - Loi « visant à protéger les mineurs des risques auxquels les expose l'utilisation des réseaux sociaux », adoptée le 21 juillet 2026 [extrait pour les votes]. Députée porteuse du texte : Laure Miller [extrait].
  - **Conseil constitutionnel, décision n° 2026-911 DC du 14 août 2026 : l'article 1er (l'interdiction) est déclaré « contraire à la Constitution ».** [lu] https://www.conseil-constitutionnel.fr/decision/2026/2026911DC.htm
    - Le Conseil était saisi par plus de 60 député·es LFI (23 juillet) et PS (24 juillet).
    - Motifs : l'interdiction vise toute plateforme permettant de communiquer, sans condition « tenant aux fonctionnalités ou aux contenus proposés » ; les exceptions sont limitées ; rien ne permet aux parents de lever l'interdiction ; il n'y a aucune « appréciation particulière du risque ».
    - Conclusion : le législateur ne pouvait, « sans méconnaître la liberté d'expression et de communication, instituer une interdiction de portée générale ».
    - Le Conseil admet que protéger les mineur·es peut justifier des limites.
  - **UE : « EU KIDS Act »**, proposé par la Commission le **17 septembre 2026** (COM(2026) 681). Il prévoit un âge minimum harmonisé de **15 ans** pour créer un compte sur les services « à risque » ; les 13-14 ans auraient un accès restreint [extrait]. [lu] analyse d'impact SWD(2026) 681 https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A52026SC0681. En novembre 2025, le Parlement européen avait demandé un âge de 16 ans (résolution non contraignante) [extrait].
  - **Australie** : Online Safety Amendment (Social Media Minimum Age) Act 2024, en vigueur le **10 décembre 2025**. Environ **4,7 millions de comptes** ont été désactivés selon les chiffres remis par 10 plateformes. La ministre Anika Wells déclare : « We stared down everybody who said it couldn't be done ». [lu] AP/PBS, 16 janvier 2026 https://www.pbs.org/newshour/world/social-media-platforms-removed-4-7-million-accounts. Amende maximale de 50 millions de dollars australiens [extrait]. En mars 2026, l'eSafety (régulateur australien) dénonce des contournements [extrait].

### Réserves et points contestés

- **Vérification d'âge.** Arguments pour : protéger les mineur·es (Arcom, gouvernement). Arguments contre : vie privée, efficacité (VPN), place des systèmes d'exploitation (Aylo, associations). La position d'Aylo défend aussi son intérêt commercial ; le dire.
- **Moins de 15 ans.**
  - Opposant·es : La Quadrature du Net, LFI et PS (liberté d'expression, vérification d'identité généralisée).
  - Partisan·es : le gouvernement, une majorité des parlementaires.
  - L'articulation avec le DSA a été soulevée par la Commission [extrait].

---

## 8. Mythes à démonter

1. **« Le RGPD interdit les cookies. » Faux.**
   - Les cookies relèvent de la **directive ePrivacy, art. 5(3)** (transposée à l'article 82 de la loi Informatique et Libertés). Elle impose un **consentement préalable**, sauf pour les traceurs strictement nécessaires, qui en sont dispensés. [lu] https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi
   - Le RGPD définit seulement la qualité du consentement.
   - Les bandeaux trompeurs viennent de choix des sites, pas de la loi : 21 sanctions CNIL en 2025 pour non-respect du refus ou dépôt sans consentement [lu, bilan CNIL].
   - La réforme en cours prévoit un refus en un clic (mandat du Conseil, question 1).
2. **« Internet est une zone de non-droit. » Faux.**
   - 487 M€ d'amendes CNIL en 2025.
   - 1,2 Md€ contre Meta.
   - 550 M€ contre AliExpress, 120 M€ contre X, 890 M€ contre Google (DMA).
   - Blocages par l'Arcom.
   - Nuance : l'application est lente et inégale. La loi existe, son application est le vrai débat.
3. **« L'Europe régule, les autres non. » Faux.**
   - 155 pays sur 195 ont une loi sur les données (CNUCED).
   - La Chine impose depuis 2022 de pouvoir **désactiver l'algorithme de recommandation** (art. 17).
   - L'Inde a interdit Free Basics dès 2016.
   - L'Australie interdit les réseaux sociaux aux moins de 16 ans.
   - La Corée a une loi-cadre sur l'IA (2026).
   - Le Brésil a sa LGPD, l'ECA Digital et l'arrêt du STF sur l'article 19.
   - La Californie et le Colorado ont leurs lois ; même le gouvernement fédéral américain agit par décrets.
   - Les modèles diffèrent (marché, État, droits fondamentaux), mais tout le monde régule.
4. **« Le DSA, c'est de la censure. » Les deux points de vue :**
   - **Pour la thèse « censure »** : rapport républicain de la commission judiciaire de la Chambre (25 juillet 2025) ; Marco Rubio (« extraterritorial censorship ») ; Mark Zuckerberg (janvier 2025). Des associations de défense des libertés (EFF, ARTICLE 19) s'inquiètent aussi de certains outils : signaleurs de confiance, mécanisme de crise.
   - **Contre** : le DSA ne définit pas ce qui est illégal. Ce sont les lois nationales et européennes qui le font. Les décisions rendues portent sur la **transparence**, la **conception** et la **sécurité des produits** :
     - coche bleue, registre des publicités, accès des chercheur·ses (X) ;
     - produits dangereux (Temu, AliExpress) ;
     - conception addictive et protection des mineur·es (TikTok, Meta).
     Aucune amende n'a été prononcée pour une opinion. Les Démocrates de la même commission parlent de « misleading distortions ». La Commission qualifie les accusations de « Pure nonsense » [extrait].
   - **À montrer aux lecteur·rices** : la liste réelle des griefs dans les communiqués.
5. **« Une loi nationale ne peut rien contre une plateforme étrangère. » Faux, avec des limites.**
   - Exemples d'efficacité :
     - TRAI contre Free Basics (Facebook a dû renoncer) ;
     - Australie : 4,7 millions de comptes fermés ;
     - Arcom : blocage et déréférencement de sites établis hors de l'UE ;
     - STF brésilien contre Google et Meta ;
     - Corée : représentant local obligatoire.
   - Limites :
     - principe du pays d'origine dans l'UE (l'Arcom n'a pu viser les sites établis dans l'UE qu'à partir du 7 juin 2025, par arrêté) ;
     - la plateforme peut partir (Aylo) ;
     - contournements (VPN) ;
     - contrôle constitutionnel (décision 2026-911 DC) ;
     - pressions diplomatiques (visas, droits de douane).

---

## Idées d'animations interactives (simples et fidèles)

1. **« Le parcours d'une loi européenne »**, frise pas à pas avec l'omnibus IA comme fil rouge :
   - proposition de la Commission (19 novembre 2025) ;
   - avis EDPB-EDPS (10 février 2026) ;
   - accord politique (7 mai 2026) ;
   - vote du Parlement (16 juin 2026) ;
   - signature (8 juillet 2026) ;
   - JO (24 juillet 2026) ;
   - entrée en vigueur (27 juillet 2026).
   En parallèle, le volet RGPD reste bloqué au mandat du Conseil (21 octobre 2026). Montrer que le même paquet peut avancer à deux vitesses.
2. **« Calendrier de l'AI Act, avant et après l'omnibus »** : double frise avec un curseur de date. Les cases s'allument :
   - 2 février 2025 : interdictions ;
   - 2 août 2025 : modèles à usage général ;
   - 2 décembre 2026 : nouvelles interdictions (deepfakes sexuels) et marquage ;
   - 2 décembre 2027 : haut risque de l'annexe III ;
   - 2 août 2028 : produits.
   Les dates d'origine apparaissent barrées.
3. **« Carte des lois de protection des données »** à partir du CSV de la CNUCED (155, 5, 33, 2), avec un filtre par région. Une info-bulle signale le cas des États-Unis (pas de loi fédérale) et la carte des ratifications de la convention de Malabo (16 sur 55).
4. **« Qu'est-ce que le RGPD te permet de demander ? »** : générateur de lettre (accès art. 15, effacement art. 17, portabilité art. 20, décision automatisée art. 22), avec le délai d'un mois (art. 12 § 3). Tout est fait dans le navigateur, sans envoi de données.
5. **« Le guichet unique : qui décide ? »** : simulateur du cas Meta. Une plainte arrive à la DPC, 47 autorités sont consultées, 4 objections, désaccord, l'EDPB tranche, amende de 1,2 Md€. La lectrice ou le lecteur choisit à chaque étape et voit le vrai chemin suivi.
6. **« Neutralité du net : à toi de trier les paquets »** : un fournisseur d'accès veut accélérer une appli, appliquer un tarif nul à une autre ou ralentir une troisième. Le jeu indique ce que disent l'article 3 § 3 du règlement 2015/2120, l'arrêt Telenor et la règle de la TRAI de 2016, puis montre le « yo-yo » américain (2015, 2018, 2024, 2025).
7. **« Censure ou transparence ? »** : cartes à retourner. Chaque grief réel (coche bleue de X, chargeurs de Temu, effet « rabbit hole » de TikTok) est mis face à une affirmation des deux camps (rapport républicain contre réponse démocrate), avec la source de chacun.
8. **« Le compteur des sanctions »** : barres comparées (CNIL 2025 sans et avec Google et Shein, amendes DSA, amendes DMA, plafonds légaux de 4 %, 6 % et 10 %) pour montrer l'écart entre les amendes prononcées et les maximums.

---

# Partie 2 : censure, blocages et coupures

**Légende des statuts**
- **[lu]** : page ou document ouvert et lu (texte intégral, ou la partie utile pour les longs PDF).
- **[extrait]** : vu seulement dans un extrait de moteur de recherche. À rouvrir avant publication.
- **[méta]** : seules les métadonnées sont connues (titre, date, référence citée par une autre source).

Les PDF lus sont copiés dans le scratchpad (`censure/`) : rapport Access Now 2025, décision du Conseil d'État du 1er avril 2025, rapport 2024 de la personnalité qualifiée (Arcom), communiqué n° 132/22 du Tribunal de l'UE, rapport A/HRC/50/55 (en français), rapport A/HRC/35/22 (en français), article Dainotti et al. (IMC 2011), article Xue et al. (IMC 2021), arrêt *TikTok v. Garland*, rapport ISOC « Shutdown Trends 2019-2025 ».

Ce dossier ne couvre pas les lois sur les données, les plateformes et l'IA : une autre personne s'en charge.

---

## 1. Les coupures (shutdowns)

### 1.1 Définition (Access Now / coalition #KeepItOn)

> « An internet shutdown is an intentional disruption of internet or electronic communications, rendering them inaccessible or effectively unusable, for a specific population or within a location, often to exert control over the flow of information. »

Proposition de traduction : « Une coupure d'internet est une perturbation intentionnelle d'internet ou des communications électroniques, qui les rend inaccessibles ou pratiquement inutilisables pour une population donnée ou dans un lieu donné, souvent pour contrôler la circulation de l'information. »

- Access Now, *Shutdown Tracker Optimization Project (STOP)*, guide et FAQ : https://www.accessnow.org/guide/shutdown-tracker-optimization-project/ **[lu]**
- La même définition est reprise par l'Internet Society, *Shutdown Trends from 2019 to 2025*, août 2026, p. 2 : https://www.internetsociety.org/wp-content/uploads/2026/08/Shutdown-Trends-2019-2025_EN.pdf **[lu]**

Le Rapporteur spécial de l'ONU donne une définition proche, qui inclut le blocage et le ralentissement. Les coupures « peuvent également survenir lorsque l'accès à la téléphonie mobile, aux sites Web, aux réseaux sociaux et aux applications de messagerie est bloqué, ralenti ou rendu impossible » (A/HRC/35/22, 30 mars 2017, § 8) : https://documents.un.org/api/symbol/access?s=A/HRC/35/22&l=fr&t=pdf **[lu]**

### 1.2 Chiffres annuels (Access Now / #KeepItOn)

| Année | Coupures | Pays | En tête | Source |
|---|---|---|---|---|
| 2016-2021 (cumul) | 931 | 74 | 12 pays ont fait plus de 10 coupures | HCDH, A/HRC/50/55, § 19 **[lu]** |
| 2022 | 201 | 40 | | Access Now, page 2023 **[lu]** |
| 2023 (chiffre publié en mai 2024) | 283 | 39 | Inde 116 (≈ 41 %), Myanmar 37 (« une fraction »), Iran 34 | Access Now **[lu]** ; Inde, Myanmar et Iran d'après la presse indienne **[extrait]** |
| 2023 (chiffre révisé en mars 2026) | 289 | | | Access Now, communiqué 2025 **[lu]** |
| 2024 (chiffre publié en 2025) | 296 | 54 | Myanmar 85, Inde 84, Pakistan 21, Russie 19 (dont 7 en Ukraine) | Access Now **[lu]** |
| 2024 (chiffre révisé en mars 2026) | 304 | | Pakistan 22 | Access Now 2025 **[lu]** |
| **2025** (publié le 31 mars 2026) | **au moins 313** | **52** | Myanmar 95 (76 imposées par la junte), Inde 65, Pakistan 20, Russie 19, Iran 11, Tanzanie 8, Irak 7, Palestine 7 | Access Now **[lu]** |

Points notables pour 2024 et 2025 :
- **2024** : conflits 103, manifestations 74, **examens 16**, élections 12 ; 71 blocages de plateformes dans 35 pays ; X devient pour la première fois la plateforme la plus bloquée ; 1 754 coupures recensées depuis 2016.
  - Source : https://www.accessnow.org/internet-shutdowns-2024/ **[lu]**
- **2025** : record depuis 2016. Les conflits sont le premier déclencheur pour la 3e année (125 coupures, 40 %), devant les manifestations (64 coupures dans 19 pays) et les élections (12). On compte 14 coupures d'internet par satellite en orbite basse dans 7 pays (4 en 2024). Nouveaux pays : Albanie, Angola, Cambodge, Lituanie, Panama, Papouasie-Nouvelle-Guinée et **États-Unis**. Pour les États-Unis, il s'agit de la suspension de TikTok pendant 14 heures le 18 janvier 2025 ; voir 5.7. L'Inde en compte 65, « the lowest since 2017 », dans 12 États et territoires. Au total, des personnes de 100 pays ont subi une coupure depuis 2016.
  - Communiqué : https://www.accessnow.org/press-release/rising-and-resisting-in-the-darkness-internet-shutdowns-in-2025/ **[lu]**
  - Rapport PDF : https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf **[lu]**
  - Asie-Pacifique (195 coupures dans 11 pays, plus de la moitié du total mondial) : https://www.accessnow.org/press-release/one-region-half-the-worlds-shutdowns-internet-shutdowns-in-the-asia-pacific-in-2025/ **[lu]**

**Autre décompte, indépendant.** Internet Society Pulse, avec Conexión Segura y Libre, a publié en août 2026 un audit des coupures de 2019 à 2025 : 61 pays sur cinq continents ; l'Inde est « by far » en tête, avec plus de deux fois plus de coupures que l'Irak, 2e ; ces coupures indiennes sont presque toutes régionales.
- Source : rapport ISOC cité plus haut **[lu]**

### 1.3 Méthode de comptage et limites

D'après la FAQ STOP d'Access Now **[lu]** et la note méthodologique du rapport 2025 **[lu]** :
- **Unité de compte** : une perturbation de plus d'une heure, ou une série de perturbations ayant les mêmes circonstances, justification, méthode et auteurs. En pratique, une décision d'une autorité égale une coupure.
- **Examens** : la politique de coupure d'une session d'examens compte pour **une seule** coupure, même s'il y a des coupures chaque matin (rapport 2025, note 55).
- **Blocages de plateformes** : un blocage durable d'une messagerie ou d'un réseau social compte une fois par année civile. Les blocages de sites d'information (communication à sens unique) sont classés comme « censure » et ne sont pas comptés.
- **Ralentissement (throttling)** : suivi à part, une même coupure pouvant combiner coupure et ralentissement.
- **Durée** : pas de maximum ; une coupure de deux heures et une coupure de deux ans comptent chacune pour une.
- **Limites reconnues** : des coupures non signalées peuvent manquer, et les chiffres changent (2023 et 2024 ont été révisés à la hausse après publication). Les blocages de plateformes sont sous-déclarés. Le Myanmar est très sous-compté : « likely miss many localized shutdowns ». Les chiffres faibles de la Chine et de la Corée du Nord reflètent leur système de censure permanente et le manque de mesure, pas une liberté plus grande.
- **Limites signalées par l'ISOC (2026)** : les coupures ancien·nes sont plus souvent « non confirmées » ; certains outils ont disparu (Oracle Internet Intelligence), et les données IODA d'avant 2022 ne sont plus disponibles. Les coupures très locales, le ralentissement ciblé par inspection profonde et les coupures du seul réseau mobile sont plus difficiles à mesurer. L'ISOC classe chaque coupure en trois niveaux : reconnue officiellement, confirmée par mesure, non confirmée. **[lu]**
- **Limite du HCDH** : « leur fréquence, leur ampleur et leurs effets sont donc sous-estimés ». Entre 2016 et 2021, la justification officielle était inconnue dans 228 cas (55 pays), et l'autorité responsable n'était pas identifiée dans 138 cas (A/HRC/50/55, § 20 et § 29). **[lu]**
  - https://digitallibrary.un.org/record/3977326/files/A_HRC_50_55-FR.pdf

**Coûts économiques : des estimations à signaler comme telles.**
- **Top10VPN** (entreprise commerciale, qui vend des comparatifs de VPN) : 19,7 milliards de dollars en 2025, 120 095 heures, 212 coupures majeures dans 28 pays. Russie 11,9 milliards, Venezuela 1,91 milliard, Myanmar 1,89 milliard. Calcul fait avec l'outil COST de **NetBlocks** (entreprise privée elle aussi). Page « Updated Jan 5, 2026 ».
  - https://www.top10vpn.com/research/cost-of-internet-shutdowns/ **[lu]**
  - Ces chiffres reposent sur un périmètre différent d'Access Now (28 pays contre 52) et sur un modèle ; ne pas les mélanger.
- **Alternative non commerciale** : le calculateur NetLoss de l'Internet Society, modèle économétrique publié, fondé sur les données de la Banque mondiale, Pulse, ACLED, etc.
  - https://pulse.internetsociety.org/netloss **[extrait]**
  - Méthode (octobre 2025) : https://pulse.internetsociety.org/documents/20/Methodology_Internet_Society_Pulse_NetLoss_Calculator_Oct_2025.pdf **[extrait]**
  - Exemple : l'ISOC estime à près de 18,5 millions de dollars le coût de la coupure mobile du jour de l'élection au Pakistan (8 février 2024), d'après Cloudflare **[lu]**, voir 1.4.

### 1.4 Exemples marquants (ordre chronologique)

**Égypte, 27 janvier - 2 février 2011.** C'est la coupure qui a révélé le « kill switch ».
- Le 27 janvier vers 22 h 12 GMT, environ 2 500 des 2 928 préfixes IPv4 égyptiens disparaissent du routage mondial en 20 minutes ; à 23 h 30, il n'en reste que 176. Les annonces BGP reviennent le 2 février vers 09 h 29 GMT.
- L'article souligne que l'infrastructure est « dominated by state ownership », avec peu d'acteurs, ce qui facilite la manipulation.
- La coupure n'a pas fait cesser les manifestations, qui « may have even increased » ; Moubarak démissionne le 11 février.
- Libye, février 2011 : « Internet curfew » nocturne, puis coupure de près de quatre jours.
- Source : Dainotti et al., « Analysis of Country-wide Internet Outages Caused by Censorship », ACM IMC 2011 (CAIDA, RIPE NCC) : https://www.caida.org/catalog/papers/2011_outages_censorship/outages_censorship.pdf **[lu]**
- Renesys avait parlé d'environ 3 500 routes BGP retirées vers 22 h 34 GMT (cité dans Dainotti **[lu]**). Les deux chiffres mesurent des choses différentes : routes ou préfixes, et points d'observation différents.

**Iran, 16-23 novembre 2019** (hausse du prix de l'essence jusqu'à 300 %).
- Les opérateurs mobiles tombent les premiers (vers 14 h UTC le 16 novembre), puis les autres en cinq heures.
- Pas de « kill switch » unique : chaque fournisseur semble avoir utilisé sa propre méthode. La joignabilité BGP reste au-dessus de 50 %, mais le trafic s'effondre, et la plupart des internautes n'accèdent plus qu'à l'intranet national.
- Retour progressif à partir du 21 novembre.
- Source : OONI, CAIDA/IODA et Kandoo, 23 novembre 2019 : https://ooni.org/post/2019-iran-internet-blackout/ **[lu]**

**Inde, Jammu-et-Cachemire, 5 août 2019 - 5 février 2021.**
- « Complete communication shutdown » au lendemain de la révocation de l'article 370. Retour partiel en 2G début 2020 ; 4G dans deux districts le 16 août 2020 ; 4G dans tout le territoire annoncée le 5 février 2021. Durée : environ 550 jours.
  - Source : Internet Freedom Foundation : https://internetfreedom.in/statement-j-k-4g-restoration/ **[lu]**
- Cour suprême, *Anuradha Bhasin v. Union of India*, 10 janvier 2020 : la liberté d'expression en ligne relève de l'article 19(1)(a) ; « indefinite suspension is impermissible » ; les ordres de coupure doivent être publiés, nécessaires et proportionnés. La Cour ne lève pas elle-même la coupure (résultat « mixte »).
  - Source : https://globalfreedomofexpression.columbia.edu/cases/bhasin-v-union-of-india **[lu]**
  - Le texte intégral de l'arrêt n'a pas été ouvert.

**Inde, coupures pendant les examens.** Exemple : examen de recrutement des enseignant·es (REET) au Rajasthan, le 26 septembre 2021.
- Internet mobile et SMS coupés de 6 h à 18 h. Le communiqué officiel citait 5 districts, des articles parlent de 12 à 16 districts ; environ 1,6 million de candidat·es.
  - Sources : CNN (lien 451, non lu) et presse indienne **[extrait]** ; Medianama : https://www.medianama.com/2021/09/223-internet-shutdown-rajasthan-exam/ **[extrait]**
- **À rouvrir** avant publication ; ou citer plutôt la tendance d'ensemble : selon l'ISOC (2026), la plus forte hausse des motifs de coupure entre 2023 et 2025 concerne les examens, surtout en Algérie, en Inde, en Irak et en Syrie **[lu]**.

**Éthiopie, Tigré, novembre 2020 - fin 2022 et au-delà.**
- Coupure « a day after the civil war began » (environ le 4 novembre 2020) ; plus de six millions de personnes touchées ; « After 730 days, this must come to an end ».
  - Access Now, 4 novembre 2022 : https://www.accessnow.org/two-years-internet-shutdowns-tigray/ **[lu]**
- Retour lent après l'accord de paix du 2 novembre 2022 : téléphone rétabli, internet en 2G limité en février 2023.
  - https://www.accessnow.org/tigray-shutdown-slowly-coming-back-online/ **[lu]**
- **État au 8 novembre 2026** : nouvelle coupure de 10 jours au Tigré au 3e trimestre 2026, sur fond de reprise du conflit (trafic −100 % dans la région).
  - Cloudflare Radar, 27 octobre 2026 : https://blog.cloudflare.com/q3-2026-internet-disruption-summary/ **[lu]**

**Myanmar, depuis le coup d'État du 1er février 2021.**
- Chute de connectivité dès 00 h 20 UTC le 1er février. Facebook bloqué sur ordre du 3 février, Twitter dès le 5 février. Coupure nationale d'environ 30 heures les 6 et 7 février. Coupures **chaque nuit de 1 h à 9 h** à partir du 15 février. Wikipédia bloquée par IP à partir du 18-20 février.
  - Source : OONI, 9 mars 2021 : https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/ **[lu]**
- Premier pays au monde en nombre de coupures en 2024 (85) et en 2025 (95), d'après Access Now **[lu]**.

**Soudan.**
- Au moins 19 coupures depuis 2018 (2e pays d'Afrique).
- Février 2024 : coupure de près de 10 jours, attribuée à la prise des centres de données des fournisseurs à Khartoum par les Forces de soutien rapide (FSR) le 2 février. Zain rétablit le service le 3 mars depuis Port-Soudan. Les FSR comme l'armée (SAF) utilisent les coupures.
  - Source : Access Now, 21 mars 2024 : https://www.business-humanrights.org/en/latest-news/sudan-the-devastating-consequences-of-internet-shutdowns-on-one-of-the-worlds-worst-humanitarian-crisis/ **[lu]**
- Juillet 2025 : internet mobile coupé dans tout le pays pendant une partie des examens, en pleine guerre (Access Now 2025 **[lu]**).

**Iran, septembre-octobre 2022** (manifestations après la mort de Mahsa Amini).
- Blocage du DNS chiffré (DoH) dès le 20 septembre ; WhatsApp et Instagram dès le 21 septembre ; puis Skype, Viber, LinkedIn et les magasins d'applications.
- **« Digital curfew »** : réseaux mobiles (Irancell, Rightel, MCCI) coupés chaque jour de 16 h à minuit environ, du 21 septembre au 3 octobre, soit « ~100 hours » sans mobile en 13 jours. QUIC/HTTP3 quasi bloqué dès le 22 septembre.
- Sources :
  - https://ooni.org/post/2022-iran-blocks-social-media-mahsa-amini-protests/ **[lu]**
  - Rapport commun OONI, ISOC, IODA, M-Lab, Cloudflare, Kentik, Censored Planet et Article 19, 29 novembre 2022 : https://ooni.org/post/2022-iran-technical-multistakeholder-report/ **[lu]**

**Pakistan, 2024-2025.**
- 8 février 2024, jour des élections générales : internet mobile coupé dans tout le pays de 7 h à 20 h, « to maintain law and order », alors que le régulateur avait promis le contraire.
  - Cloudflare, résumé du 1er trimestre 2024 : https://blog.cloudflare.com/q1-2024-internet-disruption-summary/ **[lu]**
- X bloqué du 17 février 2024 au 7 mai 2025 (environ 15 mois). Le ministère de l'Intérieur invoquait devant la justice le non-respect des « lawful directives » du gouvernement. Accès rétabli pendant l'escalade militaire avec l'Inde.
  - OONI Explorer : https://explorer.ooni.org/findings/255040833200 **[extrait]**
  - Presse pakistanaise (Dawn, ProPakistani) **[extrait]**
- 21 coupures en 2024 (record pour le pays), 20 en 2025, dont cinq pendant des fêtes religieuses (Muharram, juillet 2025) « citing security and public safety ».
  - Access Now **[lu]**

**Bangladesh, juillet-août 2024** (manifestations étudiantes contre les quotas d'emplois publics).
- Opérateurs mobiles hors ligne dans la nuit du 17 au 18 juillet. Ordre gouvernemental de couper le mobile le 18 juillet, puis coupure quasi totale (fixe compris) vers 21 h. Fixe rétabli le 23 juillet, mobile le 28 juillet. Nouvelle coupure le 5 août.
  - Cloudflare, résumé du 3e trimestre 2024 : https://blog.cloudflare.com/q3-2024-internet-disruption-summary/ **[lu]**
- Après la chute du gouvernement, le nouveau gouvernement propose de supprimer le NTMC (le centre de surveillance) et d'**interdire les coupures** dans la loi.
  - Access Now 2025, qui cite le Dhaka Tribune **[lu]**

**Iran, juin 2025** (guerre de douze jours avec Israël).
- Coupures les 13 et 17 juin, puis coupure étendue du 18 juin, 12 h 50 UTC, au 25 juin. Trafic quasi nul jusqu'au 21 juin ; les utilisateur·rices sont limité·es au réseau national.
- Justifications officielles : « special circumstances », puis « ward off cyber attacks », les attaques contre des banques et les drones pilotés par internet.
  - Cloudflare, résumé du 2e trimestre 2025 : https://blog.cloudflare.com/q2-2025-internet-disruption-summary/ **[lu]**
- Les routes BGP IPv4 sont restées annoncées : Kentik parle de « stealth blackout », une coupure sans retrait des routes.
  - Kentik, 21 janvier 2026 : https://www.kentik.com/blog/from-stealth-blackout-to-whitelisting-inside-the-iranian-shutdown/ **[lu]**
- Après la guerre, l'Iran criminalise l'achat, la vente et l'usage de terminaux Starlink (Access Now 2025 **[lu]**, citant Filter Watch **[méta]**).

**Iran, depuis le 8 janvier 2026 : la plus longue coupure nationale documentée.** État au 8 novembre 2026.
- 8 janvier, en pleine vague de manifestations : à 11 h 42-11 h 50 UTC, les préfixes IPv6 sont retirés (−98,5 %). Le trafic IPv4 baisse dès 16 h 30 et tombe « effectively zero » vers 18 h 45 UTC. **Les routes IPv4 restent annoncées** : le filtrage se fait en bordure de réseau.
  - Cloudflare, 13 janvier 2026 : https://blog.cloudflare.com/iran-protests-internet-shutdown/ **[lu]**
  - Kentik **[lu]**
- Restaurations partielles et sélectives (liste blanche) ; deuxième coupure quasi totale le **28 février 2026**, avec les frappes américano-israéliennes.
  - Internet Society Pulse : https://pulse.internetsociety.org/en/shutdowns/blackout-in-iran/ **[lu]**
- Retour partiel le 26 mai 2026, 87 jours après le début de la deuxième coupure ; trafic à environ 40 % du maximum de 2026, IPv6 toujours à zéro.
  - Cloudflare, 27 mai 2026 : https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/ **[lu]**
- Freedom House (FOTN 2026, juin 2025 - mai 2026) : coupure quasi totale de 20 jours en janvier, puis environ 88 jours à partir de février, « the longest the report has recorded » ; internet transformé en « two-tiered system where most people are cut off from the global internet » ; hausse des prix des VPN d'État.
  - https://freedomhouse.org/report/freedom-net/2026/seismic-shifts-global-internet **[lu]**
- Bilan humain (Access Now, d'après l'ONG HRANA, au 12 février 2026) : 7 002 morts confirmées, 11 730 cas en cours de vérification, plus de 52 941 arrestations. **Chiffres contestés** : le gouvernement iranien publie des chiffres bien plus bas.
  - Rapport Access Now 2025 **[lu]**, qui cite RFE/RL **[méta]**
- Analyse comparée 2019, 2022, 2025 et 2026 par IODA (Georgia Tech), citée par Access Now **[méta]** (page en erreur 503 lors de la consultation).

**Afghanistan, 29 septembre 2025.**
- Coupure nationale décidée par les talibans, après des coupures de fibre dans une quinzaine de provinces pour « prevent immorality ».
  - Cloudflare : https://blog.cloudflare.com/nationwide-internet-shutdown-in-afghanistan/ **[lu]**

**Coupures pendant les examens : Algérie, Irak, Syrie.**
- **Syrie** : coupures nationales en 2021, 2022, 2023 et 2024. En 2024, coupures totales du 26 mai au 13 juin, du dimanche au jeudi ; la Syrie cesse d'annoncer ses adresses IP. Après la chute d'Assad, en 2025, seules les antennes mobiles près des centres d'examen sont coupées : « temporary cellular communications blackout ».
- **Irak** : en 2024, coupures de 6 h à 8 h, « based on higher directives and at the request of the Ministry of Education », environ −87 % de trafic. Le Kurdistan suit son propre calendrier. Au 3e trimestre 2026, 18 coupures liées aux examens ; le ministre Mustafa Sanad a « vowed to develop a digital system » pour s'en passer.
- **Algérie** : perturbations depuis 2018, après une fuite des sujets sur internet en 2016. En 2024, au baccalauréat (9-13 juin), il n'y a plus de coupure totale mais deux plages quotidiennes de blocage ciblé (TCP, SNI ou IP) : WhatsApp, Telegram, Signal, YouTube, Google Search…
- Sources :
  - Cloudflare, 21 juin 2024 : https://blog.cloudflare.com/syria-iraq-algeria-exam-internet-shutdown/ **[lu]**
  - Résumé du 2e trimestre 2025 **[lu]**
  - Résumé du 3e trimestre 2026 **[lu]**
- Le Kenya a bloqué Telegram pendant les examens nationaux pour la 3e année consécutive en 2025 (Access Now 2025 **[lu]**).
- HCDH : 38 coupures pendant des examens entre 2016 et 2021, « la quasi-totalité » nationales (A/HRC/50/55, § 28) **[lu]**.

**Amérique latine, Afrique de l'Ouest et démocraties** (à ne pas oublier) :
- **Panama, juin 2025** : internet mobile et résidentiel suspendu du 21 au 30 juin dans la province de Bocas del Toro, pendant des manifestations contre la réforme des retraites, sur la base du décret de cabinet n° 27 du 20 juin 2025.
  - Cloudflare, résumé du 2e trimestre 2025 **[lu]**
- **Sénégal, février 2024** : internet mobile suspendu après le report de l'élection présidentielle, pour freiner « the spread of hateful and subversive messages online ».
  - Cloudflare, résumé du 1er trimestre 2024 **[lu]**
  - Ces coupures ont été jugées illégales par la Cour de la CEDEAO en 2025 (Access Now 2025 **[lu]**, citant Premium Times **[méta]**).
- **Venezuela** : 3 coupures en 2025 (Access Now 2025 **[lu]**).

### Réserves et points contestés (section 1)
- Les décomptes Access Now sont révisés après coup (2023 : 283 puis 289 ; 2024 : 296 puis 304). Toujours dater le chiffre : « au 31 mars 2026 ».
- Comparer des pays par nombre de coupures est trompeur. L'Inde fait beaucoup de coupures locales et courtes ; l'Iran ou l'Éthiopie font des coupures nationales et longues ; la Chine n'apparaît presque pas, car sa censure est permanente.
- Les bilans humains d'Iran (janvier 2026) viennent d'ONG et varient fortement selon les sources.
- Les coûts (Top10VPN, NetBlocks) sont des modèles commerciaux, non comparables avec les comptages d'Access Now.

---

## 2. Comment on coupe ou on bloque, techniquement

### 2.1 Retirer les routes BGP
- Internet est fait de réseaux autonomes (AS) qui s'annoncent mutuellement, par le protocole BGP, les blocs d'adresses qu'ils savent joindre. Retirer ces annonces rend le pays « introuvable » : il n'y a plus de chemin vers lui.
  - Dainotti et al. 2011, partie 2 **[lu]**
- **Égypte, 2011** : retrait massif en 20 minutes (voir 1.4).
- **Syrie, examens 2024** : arrêt des annonces IP pendant chaque coupure.
  - Cloudflare **[lu]**
- **Évolution importante** : l'Iran (juin 2025, puis janvier 2026) garde ses routes IPv4 et bloque le trafic en bordure de réseau. Les mesures BGP ne voient alors presque rien, et cela permet une **liste blanche** (seuls certains services ou usager·es autorisé·es). Kentik : la stratégie semble être de faire fonctionner le réseau « as a whitelisted network indefinitely ».
  - Kentik **[lu]**
  - Cloudflare, 27 mai 2026 : « application filtering or whitelisting » plutôt qu'un retrait de routes **[lu]**

### 2.2 Couper seulement le réseau mobile
- C'est le moyen le plus fréquent après la coupure totale, d'après le HCDH (A/HRC/50/55, § 21 **[lu]**).
- Exemples :
  - Pakistan, 8 février 2024 (Cloudflare **[lu]**)
  - Iran, « digital curfew » de 2022 (OONI **[lu]**)
  - Syrie, examens 2025 (Cloudflare **[lu]**)
  - Mauritanie, août 2024 : adresses IP toujours annoncées, seul l'accès des abonné·es mobiles est coupé (Cloudflare **[lu]**)
  - Russie, depuis 2025 : coupures mobiles régionales, avec un « register of socially significant services » qui reste joignable (FOTN 2026 **[lu]**)
- **Difficile à mesurer** : les terminaux mobiles répondent rarement aux sondes. IODA a manqué la coupure mobile du Pakistan en 2024.
  - APNIC, 11 septembre 2024 **[lu]**

### 2.3 Ralentir (throttling)
- **Twitter en Russie, à partir du 10 mars 2021**. C'est, selon les chercheur·ses, « the first ever use of large-scale, targeted throttling for censorship purposes ».
  - Déclenchement par le nom de domaine dans le champ **SNI** de TLS ; débit limité entre 130 et 150 kbit/s.
  - Équipements placés près des abonné·es, avec un comportement identique d'un fournisseur à l'autre : un **contrôle centralisé**.
  - La première règle (`*t.co*`) a ralenti par erreur microsoft.com et reddit.com.
  - Ralentissement levé sur les lignes fixes vers le 17 mai 2021.
  - Source : Xue et al., « Throttling Twitter: An Emerging Censorship Technique in Russia », ACM IMC 2021 : https://censorbib.nymity.ch/pdf/Xue2021a.pdf **[lu]**
- **YouTube en Russie, 2024** :
  - Officiellement, il s'agissait d'une panne des serveurs de cache de Google non renouvelés. En réalité, un ralentissement ciblé à environ 128 kbit/s sur la plupart des connexions fixes (6 août 2024), au moyen d'équipements contrôlés par Roskomnadzor.
    - Meduza : https://meduza.io/en/feature/2024/08/06/russian-authorities-inform-local-internet-service-providers-that-most-youtube-access-is-now-capped-at-a-piddling-128-kbps **[lu]**
  - En décembre 2024, le trafic était en baisse de plus de 60 % depuis le 24 juillet, selon les statistiques de Google citées par la presse **[extrait]**.
- **Sites protégés par Cloudflare en Russie, depuis le 9 juin 2025** : seuls les 16 premiers Ko de chaque ressource arrivent.
  - Cloudflare, 26 juin 2025 : https://blog.cloudflare.com/russian-internet-users-are-unable-to-access-the-open-internet/ **[lu]**
- **Pourquoi c'est pratique pour un État** : le ralentissement est difficile à distinguer d'une congestion, donc difficile à attribuer (Xue et al. **[lu]**).

### 2.4 Bloquer : DNS, adresse IP, SNI, inspection profonde (DPI)
Chaque technique agit à une étape différente de la connexion :
1. **Blocage DNS** : le résolveur du fournisseur d'accès ment (fausse adresse ou page de blocage) ou ne répond pas. Variante en Chine : **l'injection DNS**, où une fausse réponse est injectée sur le chemin, même pour des requêtes venues de l'étranger. Exemple : toutes les éditions de Wikipédia sont bloquées en Chine depuis le 23-25 avril 2019, par injection DNS **et** filtrage du SNI.
   - OONI, 4 mai 2019 : https://ooni.org/post/2019-china-wikipedia-blocking/ **[lu]**
   - Le blocage DNS est le moins coûteux, mais aussi le plus facile à contourner (autre résolveur, DNS chiffré). C'est le mode utilisé en France pour une partie des blocages (voir section 5).
2. **Blocage par adresse IP** : les paquets vers une adresse sont jetés. Le **risque est de bloquer des sites innocents** qui partagent la même adresse. La CEDH l'a sanctionné en 2020 : le gouvernement russe reconnaissait que 97 % des ressources bloquées l'étaient par « collateral blocks » (*Kharitonov c. Russie*, voir 6.3). Au Myanmar, Wikipédia a été bloquée par IP en 2021 (OONI **[lu]**).
3. **Filtrage du SNI** : quand une connexion HTTPS commence, le navigateur envoie **en clair** le nom du site visité (champ SNI du « ClientHello » de TLS). L'équipement de filtrage le lit et coupe la connexion, souvent en injectant un paquet TCP RST.
   - OONI en Russie (mars 2022) : réinitialisation juste après le ClientHello, « a strong indication that the blocking is happening on an SNI basis » ; https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/ **[lu]**
   - La Chine a bloqué le SNI chiffré (ESNI) dès 2020 ; https://gfw.report/en/ **[lu]** (liste des publications)
4. **Inspection profonde des paquets (DPI)** : l'équipement analyse le contenu et la forme du trafic, pas seulement les adresses. Il peut reconnaître des protocoles, en particulier des VPN. Exemples :
   - les boîtiers TSPU russes (voir section 4) ;
   - la détection du trafic « entièrement chiffré » en Chine depuis novembre 2021 (voir section 3).
- Le HCDH note une évolution générale : on passe des coupures générales à des « approches plus ciblées » (A/HRC/50/55, § 21 **[lu]**).

### 2.5 Mesurer et détecter
- **OONI** (Open Observatory of Network Interference) : des volontaires lancent des tests depuis l'intérieur du pays. Le test « Web Connectivity » fait quatre étapes (résolution DNS, connexion TCP, requête HTTP(S), comparaison avec un serveur témoin hors censure). Il classe l'anomalie en blocage DNS, TCP/IP ou HTTP. Il existe des faux positifs (CDN qui renvoient des adresses locales, sites qui changent selon le pays).
  - https://ooni.org/nettest/web-connectivity/ **[lu]**
- **IODA** (Internet Intelligence Lab, Georgia Tech) suit quatre signaux :
  1. BGP : blocs /24 encore visibles (RouteViews, RIPE RIS) ;
  2. sondage actif (ping de blocs /24 toutes les 10 minutes, méthode Trinocular) ;
  3. **télescope réseau** ORION à Merit : environ 500 000 adresses IPv4 inutilisées qui reçoivent du « bruit de fond » (scans, vers) ; s'il cesse d'arriver d'un pays, ce pays est sans doute coupé ;
  4. Google Transparency Report.
  - IODA « alone cannot determine the cause of an outage » : il faut une enquête pour attribuer.
  - Source : APNIC, 11 septembre 2024 : https://blog.apnic.net/2024/09/11/ioda-internet-outage-detection-and-analysis/ **[lu]**
- **Cloudflare Radar** : voit le trafic HTTP reçu par Cloudflare, les adresses annoncées en BGP, les requêtes vers son résolveur 1.1.1.1 et la part d'IPv6 et de HTTP/3. En Iran, la chute de HTTP/3 a précédé la coupure de janvier 2026.
  - Cloudflare, 13 janvier 2026 **[lu]**
- **Internet Society Pulse** croise Cloudflare Radar, IODA, OONI et les points d'échange régionaux pour confirmer les coupures (ISOC 2026 **[lu]**).

### Réserves (section 2)
- Les techniques réelles sont souvent mixtes, et varient selon le fournisseur d'accès ; les rapports disent souvent « likely » ou « suggests ».
- Le ralentissement et la DPI fine sont les plus difficiles à prouver.

---

## 3. Chine

### 3.1 Origines : le projet « Bouclier d'or » (金盾, Jin Dun)
- Projet du ministère de la Sécurité publique **lancé en 1998**. Objectif officiel : un réseau informatique pour la police. Selon CCTV, la phase préliminaire avait coûté 800 millions de dollars en 2002 ; environ 30 000 policier·es affecté·es (estimation).
- Avant ce projet, la censure se limitait à bloquer des adresses IP de sites étrangers ; les proxys la contournaient, ce qui a motivé le Bouclier d'or.
- Greg Walton (Rights & Democracy, octobre 2001) : « a massive, ubiquitous architecture of surveillance ».
- Sources :
  - Garden Networks / Open Society Institute, « Breaking Through the "Golden Shield" », novembre 2004 : https://www.opensocietyfoundations.org/sites/default/files/china-internet-censorship-20041101.pdf **[lu]**
  - Rapport Walton (2001) : **[méta]** (notice de catalogue seulement)
- Le nom « Great Firewall » est une expression journalistique. Le Bouclier d'or est plus large, puisqu'il inclut la surveillance policière. **Ne pas confondre les deux.**

### 3.2 Ce qui est bloqué (Freedom House, *Freedom on the Net 2024*, rapport complet)
- « Most international social media and messaging platforms are blocked » : Facebook, WhatsApp, X, Instagram, Signal, Telegram, YouTube, Snapchat, Line, Pinterest, Clubhouse…
- Recherche Google bloquée depuis 2012 ; Maps, Docs, Drive, Scholar aussi.
- Wikipédia, toutes langues, depuis avril 2019 ; Reddit depuis août 2018.
- GFWatch identifiait plus de 200 000 domaines bloqués ; GreatFire.org plus de 100 000 sites (février 2024).
- VPN non autorisés interdits depuis 2017 (ministère de l'Industrie et des Technologies de l'information, MIIT) ; plus de 16 000 applications indisponibles sur l'App Store chinois en octobre 2024, dont des centaines de VPN.
- Source : https://freedomhouse.org/country/china/freedom-net/2024 **[lu]**
- FOTN 2025 : la Chine obtient 9/100 (« Not Free »), à égalité avec le Myanmar ; nouveau système de blocage régional dans la province du Henan.
  - https://freedomhouse.org/country/china/freedom-net/2025 **[lu]**
- FOTN 2026 : Chine, Myanmar et Iran sont les pires environnements (rapport 2026 **[lu]**).

### 3.3 Les techniques (GFW Report, Citizen Lab, OONI)
- **Injection DNS et filtrage du SNI** : voir 2.4 (OONI 2019 **[lu]**).
- **Réinitialisations TCP** : le GFW est « on-path ». Il lit une copie du trafic et injecte de faux paquets TCP RST pour couper la connexion (Citizen Lab 2015, ci-dessous **[lu]**).
- **Incident du 20 août 2025** : de 00 h 34 à 01 h 48 heure de Pékin (environ 74 minutes), injection inconditionnelle de RST sur **tout le port TCP 443** (HTTPS), dans les deux sens. Cela a provoqué une « massive disruption » des connexions entre la Chine et le reste du monde. L'appareil en cause ne correspond à aucune empreinte connue.
  - https://gfw.report/blog/gfw_unconditional_rst_20250820/en/ **[lu]**
- **Détection du trafic entièrement chiffré** (Shadowsocks, VMess), depuis début novembre 2021. Le GFW exempte ce qui ressemble à TLS ou HTTP, puis bloque ce qui « ressemble trop au hasard » (proportion de bits à 1, caractères imprimables). Il surveille environ 26 % des connexions vers certains centres de données ; le blocage est probabiliste.
  - Wu et al., USENIX Security 2023 : https://gfw.report/publications/usenixsecurity23/en/ **[lu]**
- **Censure du SNI de QUIC** : USENIX Security 2025 (GFW Report, liste des publications **[lu]** ; article non lu).
- **Fuite Geedge & MESA, 11 septembre 2025** : plus de 500 Go de code et de documents. Ils montrent l'**exportation** de technologies de censure et de surveillance vers le Myanmar, le Pakistan, l'Éthiopie, le Kazakhstan et au moins un autre pays.
  - https://gfw.report/blog/geedge_and_mesa_leak/en/ **[lu]**
  - Les analyses d'Amnesty International et de Justice for Myanmar sont mentionnées **[méta]**.

### 3.4 Le « Great Cannon » (Citizen Lab, 10 avril 2015)
- Outil **offensif** distinct du GFW mais placé au même endroit, et « in-path » : il peut supprimer et remplacer du contenu.
- Il interceptait des scripts servis par Baidu (statistiques, publicité). Dans environ 1,75 % des cas, il renvoyait un script malveillant qui transformait le navigateur de visiteur·ses (souvent à l'étranger) en arme d'attaque par déni de service.
- Cibles : GreatFire.org (à partir du 16 mars 2015) et deux pages GitHub de GreatFire (26 mars 2015), c'est-à-dire des outils de contournement.
- Source : Marczak, Weaver, Dalek, Ensafi, Fifield, McKune, Rey, Scott-Railton, Deibert, Paxson, « China's Great Cannon » : https://citizenlab.ca/2015/04/chinas-great-cannon/ **[lu]**
- Bonne occasion de citer **Roya Ensafi** et **Sarah McKune**, co-autrices.

### 3.5 Les arguments officiels : la « souveraineté du cyberespace »
- Xi Jinping à Wuzhen (2e Conférence mondiale de l'internet), 16 décembre 2015 :
  - « We should respect the rights of individual countries to govern their own cyberspace » ;
  - « freedom and order are both necessary in cyberspace: freedom is what order is meant for ».
  - Source (AFP) : https://phys.org/news/2015-12-country-internet-china-xi.html **[lu]**
- Adam Segal (CFR, 16 décembre 2015) résume : refus de toute ingérence dans les affaires intérieures, « cyberspace is not beyond the rule of law ».
  - https://www.cfr.org/blog/chinas-internet-conference-xi-jinpings-message-washington **[lu]**
- Le texte intégral officiel (chinois, 网络主权) n'a pas été ouvert. À citer d'après la traduction de presse, en le signalant.

### Réserves (section 3)
- Les techniques du GFW changent sans annonce ; les publications décrivent un état à une date donnée.
- Les chiffres de domaines bloqués (GFWatch, GreatFire) viennent de projets de mesure militants ; méthodes différentes.

---

## 4. Russie

### 4.1 Loi sur l'« internet souverain » (2019) et boîtiers TSPU
- **Loi fédérale n° 90-FZ du 1er mai 2019**, entrée en vigueur le **1er novembre 2019**. Elle oblige les fournisseurs d'accès à installer un équipement capable de « track, filter, and reroute internet traffic » (inspection profonde des paquets). Roskomnadzor peut bloquer « independently and extrajudicially ». Un système DNS national est obligatoire à partir du 1er janvier 2021.
  - Human Rights Watch, 31 octobre 2019 : https://www.hrw.org/news/2019/10/31/russia-new-law-expands-government-control-online **[lu]**
  - Le numéro et la date de la loi sont donnés par des sources secondaires **[extrait]** ; le texte officiel n'a pas été ouvert.
- **Argument officiel** : protéger le Runet contre les cyberattaques et les menaces extérieures. Peskov : « No-one is suggesting cutting the Internet ».
  - HRW **[lu]**
  - NPR, 1er novembre 2019 **[extrait]**
- **TSPU** (технические средства противодействия угрозам, « moyens techniques de lutte contre les menaces ») : boîtiers d'inspection profonde « within the framework of centralized control ». Ils marquent le passage d'un modèle décentralisé, où chaque fournisseur bloquait lui-même, à un modèle centralisé.
  - Xue et al. 2021 **[lu]**

### 4.2 Chronologie des restrictions
- **10 mars 2021** : ralentissement de Twitter (voir 2.3).
- **Février-mars 2022**, après l'invasion de l'Ukraine (OONI, 7 mars 2022 **[lu]**) :
  - Twitter ralenti dès le 26 février, puis bloqué le 4 mars ;
  - Facebook bloqué dès le 3-4 mars ;
  - médias (BBC, DW, Meduza, TV Rain…) bloqués entre le 1er et le 4 mars.
- **Instagram** : ordre du parquet général du 11 mars 2022, blocage le 14 mars, au motif que Meta tolérait des appels à la violence contre les soldats russes.
  - Interfax : https://interfax.com/newsroom/top-stories/76633/ **[lu]**
- **21 mars 2022** : le tribunal Tverskoï de Moscou déclare Meta « organisation extrémiste » ; WhatsApp n'est pas visé à ce moment-là.
  - OVD-Info **[extrait]**
- **Été 2024** : ralentissement de YouTube (voir 2.3).
- **9 juin 2025** : plafond de 16 Ko vers les sites protégés par Cloudflare (voir 2.3).
- **31 juillet 2025** : Poutine signe des amendements, en vigueur le 1er septembre 2025.
  - Amende de 3 000 à 5 000 roubles pour la recherche « délibérée » de contenus « extrémistes ».
  - Publicité pour les VPN interdite : 50 000 à 80 000 roubles pour un particulier, jusqu'à 500 000 pour une entreprise.
  - L'usage d'un VPN devient une circonstance aggravante. **L'usage d'un VPN reste légal** ; le ministre Choulyndine assure que les simples utilisateur·rices ne sont pas visé·es.
  - Meduza : https://meduza.io/en/news/2025/07/31/putin-signs-law-penalizing-online-searches-for-content-deemed-extremist-by-russian-authorities **[lu]**
- **Août 2025** : appels WhatsApp et Telegram restreints (Euronews, 14 août 2025 **[extrait]**).
- **Depuis mai 2025** : coupures de l'internet mobile région par région, officiellement contre les drones, avec une liste blanche de services (FOTN 2026 **[lu]**). Une liste d'environ 900 sites russes est publiée en mars 2026 (CS Monitor **[lu]**).
- **Février 2026** :
  - **Blocage complet de WhatsApp**, confirmé par le Kremlin le 12 février 2026 : « such a decision was indeed made and implemented », pour cause de « reluctance to comply with the norms and letter of Russian law ». WhatsApp revendiquait environ 100 millions d'utilisateur·rices en Russie. L'État pousse MAX, une messagerie nationale qui, selon des militant·es, n'a pas de chiffrement de bout en bout.
    - RTÉ (Reuters) : https://www.rte.ie/news/world/2026/0212/1558075-whatsapp-russia **[lu]**
  - La Douma adopte le 17 février 2026 une loi permettant au **FSB d'ordonner la coupure des communications**, dans des cas définis par décret présidentiel. Les opérateurs sont dégagés de toute responsabilité envers leurs client·es.
    - CPJ (1re lecture, 27 janvier 2026) : https://cpj.org/2026/01/russias-state-duma-advances-bill-allowing-fsb-to-shut-down-internet/ **[lu]**
    - Vote final et Conseil de la Fédération : Moscow Times et TASS **[extrait]**
    - FOTN 2026 : « In February, the government passed a law authorizing the Federal Security Service (FSB) to enact shutdowns » **[lu]**
- **Mars 2026** :
  - Telegram bloqué par de nombreux fournisseurs d'accès à partir du **20 mars 2026** ; OONI signale aussi le blocage de WhatsApp, Signal, YouTube et Instagram.
    - OONI Explorer, 30 mars 2026 : https://explorer.ooni.org/findings/96225549500 **[lu]**
  - Coupure de l'internet mobile pendant 19 jours à Moscou.
  - Instruction aux fournisseurs d'accès de refuser l'accès aux personnes utilisant un VPN (« reportedly »).
    - FOTN 2026 **[lu]**
- **Mai 2026** : coupures mobiles dans tout le pays autour du 9 mai, jour de la Victoire (FOTN 2026 **[lu]**).

**État au 8 novembre 2026.** Les données les plus récentes consultées datent de fin mai 2026 (période couverte par FOTN 2026) et d'octobre 2026 (Cloudflare, 3e trimestre 2026, qui ne signale pas de coupure ordonnée en Russie ce trimestre-là mais une coupure de fibre « délibérée » le 19 septembre, pendant les élections). WhatsApp, Telegram, Signal, YouTube, Instagram, Facebook et X sont bloqués ou fortement entravés ; les coupures mobiles avec liste blanche se poursuivent. **Je n'ai pas trouvé de source primaire datée de septembre à novembre 2026** sur le statut exact de WhatsApp et de Telegram : des sites commerciaux de VPN et de voyage se contredisent. À vérifier sur OONI Explorer juste avant publication.

### Réserves (section 4)
- Beaucoup de sources sur la Russie en 2026 sont des sites commerciaux de VPN : je ne les ai pas retenues.
- Le chiffre de 469 VPN bloqués (Roskomnadzor, février 2026) vient d'un extrait non vérifié.
- Le plafonnement à 150 roubles par Go de trafic international (mai 2026) n'est **pas vérifié** : source unique, un blog de voyage.

---

## 5. Démocraties et France

### 5.1 France : le blocage administratif (terrorisme et pédocriminalité)
- **Base légale** : article 6-1 de la LCEN (loi n° 2004-575 du 21 juin 2004), créé sous sa forme actuelle par la **loi n° 2014-1353 du 13 novembre 2014** sur le terrorisme.
  - Le blocage des contenus pédocriminels avait été prévu dès la LOPPSI 2 de 2011 **[méta]**.
  - Décrets n° 2015-125 du 5 février 2015 (blocage) et n° 2015-253 du 4 mars 2015 (déréférencement).
- **Procédure** :
  1. L'office de police compétent demande d'abord le retrait du contenu à l'éditeur ou à l'hébergeur.
  2. Sans retrait sous 24 heures (ou sans mentions légales permettant de les contacter), l'office peut enjoindre aux fournisseurs d'accès de bloquer, et aux moteurs de recherche de déréférencer.
  - L'office était l'OCLCTIC, puis devient l'**OFAC**, Office anti-cybercriminalité, qui gère la plateforme PHAROS.
- **Contrôle** : une « personnalité qualifiée » vérifie chaque demande et peut recommander d'y mettre fin, puis saisir le juge administratif. D'abord désignée par la CNIL, elle est **désignée au sein du collège de l'Arcom depuis le 7 juin 2022**. En 2024 : Laurence Pécaut-Rivolier, suppléant Denis Rapone.
- **Chiffres 2024** (demandes contrôlées) :
  - retraits : 87 142, dont 80 925 pédocriminels et 6 217 terroristes ;
  - **blocages : 624**, dont 616 pédocriminels et 8 terroristes ;
  - déréférencements : 23.
- **Extension en 2025** : la loi n° 2025-532 du 13 juin 2025 (narcotrafic) étend l'article 6-1 à de nouveaux contenus, notamment la vente de stupéfiants (article 222-39 du code pénal). Décision du Conseil constitutionnel n° 2025-885 DC.
  - Rapport **[lu]** ; numéro de loi et décision du Conseil constitutionnel **[extrait]**
- Source principale : rapport d'activité 2024 de la personnalité qualifiée, Arcom : https://www.vie-publique.fr/files/rapport/pdf/298764.pdf **[lu]** (page Arcom : https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/qualified-persons-2024-activity-report **[extrait]**)
- Point de comparaison 2021 (CNIL) : 133 295 retraits, 439 blocages, 4 219 déréférencements (communiqué Arcom et CNIL, mai 2022 **[extrait]**).

### 5.2 France : le piratage (Arcom)
- La loi du 25 octobre 2021 crée l'Arcom et permet de bloquer les **sites miroirs** d'un site déjà condamné en justice.
  - Compte rendu de l'Assemblée nationale **[extrait]**
- Pour le sport en direct, le code du sport (article L. 333-10) permet des **blocages « dynamiques »** ordonnés par le juge et actualisés par l'Arcom.
  - Article non ouvert sur Légifrance **[méta]**
- **Bilan 2025** (publié le 23 mars 2026) : « almost 15,200 domain names » bloqués à la demande de l'Arcom ; +71 % de domaines sportifs bloqués entre 2024 et 2025 ; +37 % de sites miroirs. Les **résolveurs DNS alternatifs** (Google, Cloudflare) et des **VPN** (NordVPN, CyberGhost…) sont désormais visés.
  - https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/fight-against-cultural-and-sports-related-contdnt-piracy-2025-intensification-and-expansion-new-players **[lu]**
  - La page ne précise pas si les 15 200 domaines couvrent 2025 seulement ou toute la période depuis 2022 ; la presse (Next) parle de « depuis 2022 » **[extrait]**.

### 5.3 France : les sites pornographiques sans vérification d'âge
- **Loi SREN du 21 mai 2024** : l'Arcom peut sanctionner, bloquer et déréférencer les sites pornographiques accessibles aux mineur·es. Un arrêté étend ces pouvoirs aux sites établis dans l'UE à partir du 7 juin 2025.
- **3 juin 2025** : le groupe Aylo (Pornhub, YouPorn, RedTube) suspend l'accès à ses sites en France, y compris pour les adultes. L'Arcom « prend acte » et rappelle que Pornhub est visité chaque mois par plus d'un tiers des 12-17 ans.
  - https://www.arcom.fr/presse/larcom-prend-acte-de-la-decision-du-groupe-aylo **[lu]**
- **16 juin 2026** : la Cour de justice de l'UE (affaires C-188/24 WebGroup Czech Republic et NKL Associates, jointe à C-190/24 Coyote System), saisie par le Conseil d'État le 6 mars 2024, juge que la France peut imposer la vérification d'âge à des sites établis dans un autre État membre, sous conditions : procédure de dérogation de la directive « commerce électronique » et proportionnalité.
  - Reuters (Internazionale) : https://www.internazionale.it/ultime-notizie-reuters/2026/06/16/france-can-enforce-porn-site-age-checks-eu-court-says **[extrait]**
  - Le Monde du droit **[extrait]**
  - **À rouvrir sur curia.europa.eu** avant publication.
- **31 juillet 2026** : procédures contre 31 nouveaux sites (66 au total). Pour 13 sites d'origine introuvable, demande de blocage et de déréférencement sous 48 h.
  - MacGeneration : https://www.macg.co/ailleurs/2026/07/verification-dage-larcom-tente-de-bloquer-31-nouveaux-sites-pornographiques-mais-le-probleme-reste-entier-310139 **[lu]**
- **Argument de l'État** : protection des mineur·es ; « double anonymat », c'est-à-dire que le site ne sait pas qui vous êtes et le prestataire ne sait pas quel site vous visitez.
- **Critiques** : contournement par VPN ou changement de DNS ; Aylo réclame une vérification sur l'appareil plutôt que site par site.
- **État au 8 novembre 2026** : les sites d'Aylo semblent toujours inaccessibles en France, mais je n'ai pas de source primaire récente. Une lettre d'Aylo à l'Arcom du 24 août 2026 est citée **[extrait]**.

### 5.4 France : les jeux d'argent illégaux (ANJ)
- Depuis le **2 mars 2022**, la présidente de l'Autorité nationale des jeux (ANJ) peut ordonner elle-même aux fournisseurs d'accès le blocage, par DNS, des sites de jeux illégaux et de ceux qui en font la publicité, sous le contrôle du juge administratif. Avant, il fallait passer par le tribunal judiciaire de Paris. Une mise en demeure précède le blocage (5 jours).
  - Sources : presse spécialisée **[extrait]** ; site de l'ANJ non joignable (404 et 403)
- Chiffre de mars 2023 : 152 sites et 532 URL bloqués **[extrait]**. **Chiffre récent non trouvé.**

### 5.5 Union européenne : RT et Sputnik
- Décision PESC 2022/351 et règlement (UE) 2022/350 du **1er mars 2022** : diffusion de RT et Sputnik interdite « dans l'Union ou en direction de l'Union », y compris sur internet. Raison invoquée : des actions de propagande pour justifier l'agression de l'Ukraine.
- **Tribunal de l'UE, grande chambre, 27 juillet 2022, T-125/22, RT France c. Conseil** : recours rejeté. L'atteinte à la liberté d'expression est jugée proportionnée « compte tenu du contexte extraordinaire de l'affaire » ; les mesures sont « temporaires et réversibles ». C'est la première fois que la grande chambre statue en procédure accélérée (4 mois et 19 jours).
  - Communiqué n° 132/22 : https://curia.europa.eu/jcms/upload/docs/application/pdf/2022-07/cp220132fr.pdf **[lu]**
- Pourvoi C-620/22 P **[extrait]** : issue non vérifiée.
- Ces sanctions servent aussi de base à des blocages dans d'autres pays de l'UE : la Lituanie a bloqué VKontakte et Odnoklassniki en 2025, ce qui en fait un « nouveau pays » qui coupe pour Access Now (rapport 2025 **[lu]**).

### 5.6 Nouvelle-Calédonie : le blocage de TikTok (mai 2024)
- **14 mai 2024** : le Premier ministre décide d'interrompre l'accès à TikTok en Nouvelle-Calédonie ; c'est appliqué dès le 15 mai par l'OPT-NC et levé le 29 mai. L'état d'urgence est déclaré le 15 mai.
- **Référé du Conseil d'État, 23 mai 2024** : pas de suspension. L'urgence n'est pas démontrée, et la mesure est jugée limitée (les autres moyens de communication restent disponibles) et temporaire.
  - https://conseil-etat.fr/actualites/tiktok-en-nouvelle-caledonie-le-blocage-du-reseau-social-n-est-pas-suspendu **[lu]**
- **Décision au fond, 1er avril 2025** (n° 494511, 494583, 495174 ; requérants : Ligue des droits de l'homme, La Quadrature du Net et autres) : **décision annulée**. Le Conseil d'État :
  - **admet** qu'en dehors des cas prévus par la loi, l'administration peut couper un service en ligne « en cas de circonstances exceptionnelles, si elle est indispensable pour répondre aux nécessités du moment » ;
  - pose deux conditions : seulement « à titre provisoire », « qu'aucun moyen technique ne permette, dans l'immédiat, de prendre des mesures alternatives moins attentatoires », et pour une durée n'excédant pas celle requise pour les rechercher ;
  - juge que l'interruption totale pour une durée indéterminée, « liée seulement à la persistance des troubles », porte « une atteinte disproportionnée à la liberté d'expression ».
  - L'État verse 3 000 € à chaque requérant au titre des frais de justice (article L. 761-1 du code de justice administrative). Ce n'est **pas une indemnisation** du préjudice, contrairement à ce qu'écrivent certains articles.
  - Décision : https://conseil-etat.fr/Media/actualites/documents/2025/avril-2025/494511-494583-495174.pdf **[lu]**
- **Argument de l'État** : diffusion très rapide, par les algorithmes de TikTok, de contenus appelant à la violence, dans une situation de troubles d'une « gravité exceptionnelle » (plusieurs morts les 14 et 15 mai 2024).

### 5.7 France : le débat de 2023 sur la coupure des réseaux sociaux
- **4 juillet 2023**, devant environ 220 maires de communes touchées par les émeutes après la mort de Nahel, Emmanuel Macron déclare qu'« il faut peut-être se mettre en situation de les réguler ou de les couper » (selon les propos rapportés).
- Après de vives critiques, y compris dans son camp, l'exécutif recule le 5 juillet. Le député Éric Bothorel : « je ne crois pas que le Président veuille couper les réseaux sociaux ».
- Sources :
  - Siècle Digital, 5 juillet 2023 : https://siecledigital.fr/2023/07/05/apres-les-emeutes-les-reseaux-sociaux-coupables-ideals-demmanuel-macron/ **[lu]**
  - Europe 1, qui parle plutôt de « suspendre des fonctionnalités » **[extrait]**
- C'est précisément l'alternative (« blocage de certaines fonctionnalités ») que cite le Conseil d'État en 2025.

### 5.8 Royaume-Uni : Online Safety Act et vérification d'âge
- **25 juillet 2025** : entrée en vigueur des obligations de « highly effective age assurance » pour la pornographie et les contenus dangereux pour les mineur·es (automutilation, troubles alimentaires…). L'Ofcom peut infliger jusqu'à 18 millions de livres d'amende ou 10 % du chiffre d'affaires mondial.
  - CyberInsider **[lu]** ; site de l'Ofcom non joignable (403)
- **Hausse des VPN** :
  - Proton VPN déclare plus de 1 400 % d'inscriptions depuis le Royaume-Uni ; **chiffre de l'entreprise elle-même**.
    - https://cyberinsider.com/proton-vpn-signups-in-uk-surge-1400-after-online-safety-act-comes-into-force/ **[lu]**
  - Top10VPN (commercial) : +1 327 % de trafic VPN le 25 juillet **[extrait]**.
  - L'Ofcom reconnaît que le dispositif n'est pas « foolproof » face à un·e adolescent·e déterminé·e, et rappelle qu'il est illégal pour les plateformes de promouvoir les VPN comme moyen de contourner les contrôles **[extrait]**.
- Ce n'est **pas un blocage par l'État** mais une obligation imposée aux plateformes ; à présenter comme une autre forme de régulation de l'accès.

### 5.9 États-Unis : la loi contre TikTok
- **24 avril 2024** : *Protecting Americans from Foreign Adversary Controlled Applications Act*. TikTok doit être séparé de ByteDance, sinon il devient interdit de le distribuer ou de le mettre à jour.
- **Cour suprême, 17 janvier 2025, *TikTok Inc. v. Garland*** (per curiam) : « the challenged provisions do not violate petitioners' First Amendment rights ». Elle retient la justification « content-neutral » : empêcher la Chine de collecter les données de 170 millions d'utilisateur·rices américain·es.
  - https://www.supremecourt.gov/opinions/24pdf/24-656_ca7d.pdf **[lu]**
- **18 janvier 2025** : TikTok coupé environ 14 heures, puis rétabli quand Donald Trump annonce qu'il retarde l'application de la loi (Access Now 2025 **[lu]**, citant NPR **[méta]**).
- **État au 8 novembre 2026** : un décret présidentiel du 25 septembre 2025 encadre une coentreprise. Le 22 janvier 2026, ByteDance annonce la finalisation : coentreprise américaine majoritaire (80,1 %, dont Oracle, Silver Lake et MGX à 15 % chacun), ByteDance à 19,9 %. L'algorithme doit être réentraîné sur les données américaines et hébergé chez Oracle.
  - Reuters (The Star) : https://www.thestar.com.my/tech/tech-news/2026/01/23/tiktok-seals-deal-for-new-us-joint-venture-to-avoid-american-ban **[lu]**
- Critique : des observateur·rices doutent que cela réponde aux inquiétudes du Congrès en matière de sécurité **[extrait]**.

### Réserves (section 5)
- En France, le blocage est le plus souvent un **blocage DNS** chez les fournisseurs d'accès, contournable. Next.ink en a montré l'efficacité « aléatoire » **[extrait]**.
- Le blocage administratif se fait sans juge a priori : c'est le cœur des critiques (La Quadrature du Net). La garantie est le contrôle a posteriori par la personnalité qualifiée.
- La date et le contenu exact de l'arrêt de la CJUE du 16 juin 2026 n'ont été vus qu'en extrait.

---

## 6. Droit international

### 6.1 Conseil des droits de l'homme de l'ONU
- **Résolution 32/13, 1er juillet 2016** (adoptée sans vote), § 10 : « condemns unequivocally measures to intentionally prevent or disrupt access to or dissemination of information online in violation of international human rights law », et appelle les États à s'en abstenir et à y mettre fin.
  - ICNL : https://www.icnl.org/resources/library/human-rights-council-resolution-on-the-promotion-protection-and-enjoyment-of-human-rights-on-the-internet-2016 **[lu]**
  - Texte repris dans le rapport ISOC 2026 **[lu]**
  - Russie et Chine avaient cherché à affaiblir le texte (presse 2016 **[extrait]**).
  - Résolution **non contraignante**.
- La résolution 47/16 (2021) demande au Haut-Commissariat un rapport sur les coupures : c'est le rapport **A/HRC/50/55 du 13 mai 2022**.
  - Chiffres : 931 coupures de 2016 à 2021 ; 225 pendant des manifestations ; 38 pendant des examens. Justifications : 189 au nom de la sûreté publique, 150 de la sécurité nationale, 132 contre les discours de haine ou la désinformation.
  - « Nombre d'entre elles ont été suivies de pics de violence, ce qui semble démontrer que ces interventions ne permettent bien souvent pas d'atteindre les objectifs officiellement invoqués » (§ 31).
  - https://digitallibrary.un.org/record/3977326/files/A_HRC_50_55-FR.pdf **[lu]**

### 6.2 Rapporteur spécial sur la liberté d'expression
- **David Kaye, A/HRC/35/22, 30 mars 2017** :
  - « Les coupures de l'accès aux réseaux ne satisfont jamais à l'exigence de nécessité », car elles sont souvent contre-productives (§ 14) ;
  - « Quelle que soit leur durée et leur portée géographique, les coupures sont généralement disproportionnées » (§ 15) ;
  - pendant les émeutes de Londres en 2011, les autorités se sont servies des réseaux pour rétablir l'ordre (§ 14).
  - https://documents.un.org/api/symbol/access?s=A/HRC/35/22&l=fr&t=pdf **[lu]**
- Irene Khan, rapport sur les élections à l'ère numérique (11 juin 2025), qui mentionne les coupures et blocages pendant les élections **[extrait]**.

### 6.3 Juridictions régionales
- **Cour de justice de la CEDEAO, *Amnesty International Togo et autres c. République togolaise*, 25 juin 2020** (ECW/CCJ/JUD/09/20 ; le fichier de l'arrêt est daté du 6 juillet).
  - Faits : coupures des 5-10 et 19-21 septembre 2017.
  - L'accès à internet est un « derivative right » qui « enhances the exercise of freedom of expression » ; faute de loi qui l'autorise, la coupure viole l'article 9 de la Charte africaine.
  - Le Togo doit verser 2 millions de francs CFA à chacun des huit requérant·es.
  - https://globalfreedomofexpression.columbia.edu/cases/amnesty-international-togo-and-ors-v-the-togolese-republic/ **[lu]**
- **Cour de la CEDEAO, *SERAP c. Nigeria*, 14 juillet 2022** (ECW/CCJ/JUD/40/22).
  - Faits : Twitter suspendu par le Nigeria le 4 juin 2021, juste après la suppression d'un tweet du président Buhari ; le gouvernement invoquait sa souveraineté et les mouvements séparatistes.
  - Suspension jugée illégale (pas de base légale), violation de l'article 9 de la Charte africaine et de l'article 19 du PIDCP ; garantie de non-répétition ; aucune indemnité.
  - https://globalfreedomofexpression.columbia.edu/cases/serap-v-federal-republic-of-nigeria/ **[lu]**
  - Le Nigeria avait levé la suspension en janvier 2022, avant l'arrêt (connaissance générale, **à sourcer**).
- **Cour de la CEDEAO, Sénégal (2025)** : coupures déclarées illégales (Access Now 2025 **[lu]**, citant Premium Times **[méta]**).
- **Cour européenne des droits de l'homme, *Ahmet Yıldırım c. Turquie*, 18 décembre 2012** (n° 3111/10).
  - Faits : un tribunal turc fait bloquer **tout Google Sites** (24 juin 2009) pour atteindre un seul site accusé d'insulter la mémoire d'Atatürk ; le site universitaire du requérant est bloqué aussi.
  - Violation de l'article 10 à l'unanimité : loi n° 5651 pas assez prévisible, et pas de mise en balance des effets collatéraux.
  - https://globalfreedomofexpression.columbia.edu/cases/ahmed-yildirim-v-turkey **[lu]**
  - Affaire liée : *Cengiz et autres c. Turquie* (2015, YouTube) **[extrait]**.
- **CEDH, 23 juin 2020, quatre arrêts contre la Russie** : *Vladimir Kharitonov*, *OOO Flavus et autres*, *Bulgakov*, *Engels*.
  - Dans *Kharitonov*, le site du requérant est bloqué parce qu'il partage son **adresse IP** avec un site visé. Le gouvernement admettait que 97 % des ressources bloquées l'étaient par effet collatéral.
  - Violation des articles 10 et 13 ; 10 000 €.
  - https://globalfreedomofexpression.columbia.edu/cases/vladimir-kharitonov-v-russia/ **[lu]**
  - La Russie n'est plus partie à la Convention depuis le 16 septembre 2022 (connaissance générale, **à sourcer**).

### Réserves (section 6)
- Les résolutions du Conseil des droits de l'homme ne sont pas contraignantes ; les arrêts de la CEDEAO sont peu exécutés.
- La Cour suprême indienne n'a pas fait de l'accès à internet un droit fondamental (contrairement à ce qu'on lit souvent).

---

## 7. Mesurer soi-même : OONI Probe

**Ce que c'est.** Une application libre de l'OONI (Open Observatory of Network Interference), disponible sur Android, iOS, Windows, macOS et en ligne de commande sous Linux. Elle teste si des sites (listes du Citizen Lab) et des messageries (WhatsApp, Messenger, Telegram) sont bloqués, si les outils de contournement fonctionnent, et mesure le débit (test NDT de M-Lab).
- https://ooni.org/install/ **[lu]**
- Le code source est sur GitHub ; la page ne dit pas explicitement « libre ».

**Comment ça marche.** Voir 2.5 : on compare ce que voit le téléphone et ce que voit un serveur témoin. Les résultats sont publiés en données ouvertes sur OONI Explorer.

**Les risques, tels que l'OONI les décrit lui-même** (https://ooni.org/about/risks/ **[lu]**) :
- « In some countries, using OONI Probe may result in criminal prosecution, fines, or even imprisonment. »
- Quiconque surveille le trafic « will be able to see that you are running OONI Probe ».
- Les résultats publiés incluent la position approximative, le réseau (ASN) et l'heure. L'adresse IP n'est pas collectée volontairement, mais peut apparaître dans des métadonnées.
- Les listes de test contiennent des sites dont la consultation « may be illegal » dans certains pays ; certains tests peuvent être vus comme du « hacking ».
- L'OONI recommande de consulter un·e avocat·e et d'examiner soigneusement le risque. On peut désactiver la publication et choisir les sites testés.

**Formulation proposée pour le site.** En France, l'usage est légal et sans danger particulier. Dans les pays qui répriment, l'OONI lui-même déconseille de l'utiliser sans avoir évalué le risque : ce n'est pas un jeu.

---

## 8. Mythes à démonter

### 8.1 « Couper internet arrête les violences »
**Arguments des États** :
- empêcher la coordination des émeutier·es et la diffusion de rumeurs ou d'appels à la violence (Nouvelle-Calédonie 2024, Bangladesh 2024, Inde) ;
- sécurité nationale et cyberattaques (Iran, juin 2025) ;
- empêcher la triche aux examens (Irak, Syrie, Algérie, Inde) ;
- contenus terroristes ou extrémistes (Russie).
- Le Conseil d'État admet ce raisonnement en principe, en « circonstances exceptionnelles » (5.6).

**Ce que disent les études** :
- **Rydzak (Stanford), « Of Blackouts and Bandhs », février 2019** : en Inde, les coupures sont « much more strongly associated with increases in violent collective action than with non-violent mobilization ». Explication : sans moyens de coordination, les manifestant·es se rabattent sur des tactiques moins dépendantes de l'organisation, souvent plus violentes.
  - https://papers.ssrn.com/abstract=3330413 **[extrait]** : page bloquée par Cloudflare (403), lu en résumé seulement.
  - Les commentaires de presse divergent sur le sens exact de certains résultats (par exemple quand la violence d'État accompagne la coupure). **Citer le résumé avec prudence.**
- **Gohdes, « Pulling the plug », *Journal of Peace Research*, 2015** : en Syrie, les coupures coïncident avec des **hausses de la violence d'État**, surtout là où l'armée combat. Elles seraient une tactique militaire plus qu'un moyen de cacher les crimes.
  - https://ideas.repec.org/a/sae/joupea/v52y2015i3p352-367.html **[lu]** (résumé)
- **Égypte 2011** : la coupure « did not quell the protests, and may have even increased the number of people in the streets » (Dainotti et al. **[lu]**).
- **HCDH 2022** : beaucoup de coupures sont suivies de « pics de violence » (A/HRC/50/55, § 31 **[lu]**).
- **Rapporteur spécial 2017** : les coupures ne satisfont « jamais » à la nécessité, et le réseau aide à secourir et à rétablir l'ordre (A/HRC/35/22, § 14 **[lu]**).
- **Examens** : l'ISOC note que la triche passe aussi par des oreillettes, le Bluetooth et le Wi-Fi local, ce qui met en doute l'efficacité de la mesure (rapport 2026 **[lu]**). En 2021 au Rajasthan, des candidat·es ont été arrêté·es avec des « tongs Bluetooth » malgré la coupure (presse indienne **[extrait]**).

**Réserve** : les études sont corrélationnelles. Les coupures arrivent justement quand la situation se dégrade, et la causalité reste discutée.

### 8.2 « La censure, c'est seulement les dictatures »
- L'**Inde**, plus grande démocratie du monde, a été le premier pays pour les coupures pendant six ans de suite, jusqu'en 2023 (Access Now **[lu]** ; ISOC **[lu]**).
- **France** :
  - blocage administratif sans juge a priori (624 demandes de blocage en 2024) ;
  - environ 15 200 domaines bloqués pour piratage ;
  - sites pornographiques ;
  - jeux illégaux ;
  - TikTok coupé en Nouvelle-Calédonie (annulé ensuite par le Conseil d'État).
- **UE** : interdiction de RT et Sputnik, validée par le Tribunal ; la Lituanie bloque VKontakte.
- **Royaume-Uni** : vérification d'âge. **États-Unis** : loi TikTok, 14 h de coupure en janvier 2025.
- **Panama** (2025) et **Sénégal** (2024) : coupures pendant des manifestations.
- **Nuance indispensable** : dans une démocratie, ces mesures ont une **base légale publique**, un **contrôle par le juge** (qui peut les annuler, comme le Conseil d'État en 2025 ou la CEDH contre la Turquie) et un **débat public**. Elles visent surtout des contenus illégaux précis. FOTN 2026 parle de barrières construites par des « governments across the ideological spectrum » **[lu]**.
- Suggestion : faire une frise ou un tableau « qui décide, sur quelle base, avec quel recours ».

### 8.3 « Un VPN rend invisible et intouchable »
- **Ce qu'un VPN fait** : il cache le contenu et la destination du trafic au fournisseur d'accès et au réseau local, et change l'adresse IP vue par les sites. Mais :
  - « A VPN is not a tool for anonymity » ;
  - tout le trafic est « visible to the VPN provider » ;
  - les fournisseurs de VPN « are also subject to law enforcement requests ».
  - EFF, Surveillance Self-Defense : https://ssd.eff.org/module/choosing-vpn-thats-right-you **[lu]**
- **Un VPN se détecte et se bloque** :
  - DPI chinoise contre le trafic entièrement chiffré (USENIX 2023 **[lu]**) ;
  - Russie : VPN visés par les TSPU, instruction de 2026 de refuser l'accès aux utilisateur·rices de VPN (FOTN 2026 **[lu]**), publicité interdite ;
  - France : l'Arcom demande à des VPN de bloquer des sites pirates (Arcom 2025 **[lu]**).
- **Un VPN ne sert à rien si internet est coupé**, ou si seule une liste blanche passe : Iran 2026, Russie pendant les coupures mobiles (FOTN 2026 **[lu]**).
- **L'usage peut être réprimé** : circonstance aggravante en Russie ; amendes dans les pays qui l'interdisent ; au Cachemire, en décembre 2025, interdiction des VPN non autorisés pendant deux mois et environ 800 utilisateur·rices sanctionné·es (Access Now 2025 **[lu]**).
- **Tor** sert à l'anonymat, mais il est lui aussi bloqué dans plusieurs pays (OONI le teste ; voir la page OONI d'installation **[lu]**). Renvoyer au module dark net du site.
- **Ligne éditoriale** : expliquer à quoi sert un VPN, sans mode d'emploi pour contourner une loi.

### 8.4 « On ne peut pas couper internet dans tout un pays »
- C'est faux, et cela a été fait plusieurs fois :
  - Égypte 2011 : environ 2 500 préfixes retirés en 20 minutes (Dainotti **[lu]**) ;
  - Iran 2019, 2025 et 2026 ;
  - Syrie pendant les examens jusqu'en 2024 ;
  - Afghanistan, 29 septembre 2025 ;
  - Bangladesh, 18-23 juillet 2024.
  - Sources : Cloudflare et OONI **[lu]**
- **Ce qui rend la coupure facile** : peu d'opérateurs internationaux, des câbles et points d'échange sous contrôle de l'État (Égypte : un État dominant, et presque tous les câbles arrivent au central Ramses, Dainotti **[lu]**), un opérateur historique d'État (Syrian Telecom), ou des boîtiers centralisés (TSPU russes).
- **Ce qui la rend plus difficile** : beaucoup d'opérateurs et de points d'échange indépendants, l'internet par satellite. Mais les États bloquent aussi le satellite : 14 coupures en orbite basse en 2025 ; l'Iran criminalise Starlink (Access Now 2025 **[lu]**).
- **Nuance** : une coupure est rarement totale à 100 %. En Iran en 2019, des mesures OONI arrivaient encore de 49 réseaux. Et la tendance va vers la **liste blanche** plutôt que le noir complet, car l'économie a besoin du réseau (Iran 2026, Russie).

---

## 9. Idées d'animations interactives (simples et fidèles)

1. **« Comment un paquet est bloqué : DNS, IP, SNI, DPI ».** On suit pas à pas une requête vers `site.example` : résolution DNS → connexion TCP → ClientHello TLS (nom du site visible en clair) → contenu chiffré. À chaque étape, un bouton « bloquer ici » montre ce que voit l'usager·e (fausse adresse, délai dépassé, connexion réinitialisée) et ce qui est bloqué par erreur (le blocage IP emporte les sites voisins, voir *Kharitonov*). Repli texte : un tableau en quatre lignes.
2. **« Le pays qui disparaît » (BGP).** Une carte simplifiée de réseaux autonomes avec leurs annonces. On retire les routes une à une (Égypte 2011 : 2 928 → 176 préfixes). Puis un second mode « coupure discrète » : les routes restent mais le trafic s'arrête (Iran 2025-2026). Message clé : une coupure ne se voit pas toujours dans le routage.
3. **« Carte et frise des coupures ».** Frise 2011-2026 avec filtres par motif (manifestation, conflit, examen, élection), par type (totale, mobile, plateforme, ralentissement) et par région ; chaque point renvoie à sa source. Données Access Now et Pulse, avec un avertissement sur la méthode de comptage (une session d'examens compte pour une coupure).
4. **« Ce que voit une sonde OONI ».** Simulation du test Web Connectivity : côté téléphone et côté serveur témoin, les quatre étapes s'affichent en parallèle ; un écart fait apparaître « anomalie DNS », « TCP » ou « HTTP ». Un cas de faux positif (CDN local) apprend la prudence. Avec un encart sur les risques, d'après la page de l'OONI.
5. **« Les trois signaux d'IODA ».** Trois courbes (BGP, sondage actif, télescope) sur une journée fictive inspirée de vrais cas : coupure totale (les trois chutent), coupure mobile (presque rien ne bouge, comme au Pakistan en 2024), liste blanche (BGP stable, trafic à zéro, comme en Iran en 2026). L'usager·e doit deviner le type de coupure.
6. **« Qui a ordonné ce blocage, et sur quelle base ? ».** Cartes à retourner : TikTok en Nouvelle-Calédonie, RT/Sputnik, un site pédocriminel, un site pirate, WhatsApp en Russie, Twitter au Nigeria. Pour chacune : l'autorité, le texte, le contrôle (juge avant, après, ou aucun) et l'issue (annulé, validé, condamné par une cour régionale).
7. **« Ralentir sans couper ».** Le chargement d'une vidéo à débit normal, puis à 128 kbit/s (YouTube en Russie, 2024), puis plafonné à 16 Ko (Cloudflare en Russie, 2025). Curseur de débit, et question : « panne ou censure ? ». Cela montre pourquoi le ralentissement est difficile à prouver.
8. **« Couper pour éviter la triche ? ».** Un mini-calculateur qualitatif : ce qui s'arrête aussi quand on coupe un matin d'examen (banques, hôpitaux, travail), face aux moyens de triche qui restent (oreillettes, Bluetooth). Sources : rapport ISOC 2026, Cloudflare, HCDH. Sans boucle infinie.

---

## Pour aller plus loin (Wikipédia, à vérifier avant usage)
Non consulté ici. Pistes : « Censure d'Internet en république populaire de Chine », « Coupure d'Internet », « Internet souverain (Russie) ». Espacer les requêtes (limitation de débit).

## Ce qui reste à vérifier avant publication
- Statut exact de WhatsApp et de Telegram en Russie, et de l'internet iranien, entre septembre et novembre 2026 (OONI Explorer, Cloudflare Radar).
- Texte de l'arrêt de la CJUE du 16 juin 2026 (curia.europa.eu).
- Texte intégral de l'arrêt *Anuradha Bhasin* et texte officiel de la loi russe 90-FZ.
- Rapport IODA comparatif sur l'Iran (serveur en erreur lors de la consultation).
- Chiffres récents de l'ANJ ; article L. 333-10 du code du sport sur Légifrance.
- Résumé intégral de Rydzak (SSRN bloqué).


## Mise à jour du 25 novembre 2026

Omnibus RGPD, pourvoi DPF, moins de 15 ans, Iran, Russie, AI Act, DSA (Temu, 17 novembre 2026), Digital Networks Act : voir [`mises-a-jour-2026-11-25.md`](mises-a-jour-2026-11-25.md).
