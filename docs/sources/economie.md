# Dossier de sources : Entreprises et économie du net

Module `/modules/economie/`, rédigé le 27 novembre 2026. Recherche déléguée à un agent puis relue ; seuls les faits [lu] sont publiés. Les pourcentages calculés à partir des 10-K sont signalés comme tels dans la page.


Recherches menées le 27 novembre 2026 (User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)`
pour curl ; WebFetch et WebSearch sinon). Aucun fichier écrit dans le dépôt.

Statuts : **[lu]** page ou document ouvert et lu (au moins le passage cité) ;
**[résumé/métadonnées seulement]** vu seulement en extrait de moteur, en résumé, ou page
inaccessible (403, JS, paywall) ; **[non trouvé]**.
Type : **P** source primaire (entreprise, régulateur, tribunal, norme, article de recherche) ;
**S** secondaire (presse, cabinet d'avocats, blog).

Sujets **évolutifs** (badge `evolutif`, « état au 27 novembre 2026 ») : DMA et cloud, FTC c. Meta,
FTC c. Amazon, Meta et droits voisins en France, Manifest V3, cookies tiers, SecNumCloud, UPI.

---

## 0. Déjà sourcé dans le dépôt : renvoyer, ne pas refaire

| Sujet | Où | Ce qui y est |
|---|---|---|
| Neutralité du net (UE 2015/2120, Telenor, États-Unis 2025, TRAI/Free Basics) | `docs/sources/etats-regulation.md` §6 (l. 309-336) | lu |
| « Fair share », BEREC « No evidence of free-riding » (2022), Digital Networks Act (21/01/2026) | `etats-regulation.md` l. 322-334 | BEREC lu ; DNA en extrait seulement |
| DSA : amendes (Temu 200 M€, AliExpress 550 M€, X…) | `etats-regulation.md` §3 (l. 147-183) | lu |
| DMA : règlement 2022/1925, contrôleurs d'accès, amendes Apple 500 M€ / Meta 200 M€ (23/04/2025), Google 890 M€ (23/07/2026) | `etats-regulation.md` l. 185-200 | lu |
| Arcep (nature, collège, présidente, mandat jusqu'au 3/01/2027) | `docs/sources/institutions.md` §14 (l. 459-483) | lu |
| IETF, RFC, QUIC dans les institutions | `institutions.md` §1 ; `gouvernance-technique.md` l. 79 | lu |
| QUIC / RFC 9000 / RFC 9001 (fonctionnement) | `docs/sources/entree-a-la-page.md` l. 385-416 | lu |
| Cookies tiers : Safari 2020, Firefox TCP 2022, Google 22/04/2025 (Chrome garde le choix utilisateur) | `entree-a-la-page.md` l. 560-575 ; `vrai-ou-faux.md` l. 76 | lu |
| Câbles : « plus de 99 % » du trafic intercontinental ; fournisseurs de contenu = 75 % de la capacité utilisée en 2025 (TeleGeography) ; 2Africa, Equiano | `docs/sources/materialite.md` §1 (l. 23-40) et `internet.md` l. 430-440 | lu (mais seconde source indépendante pour les 75 % encore manquante, cf. `internet.md` l. 525) |
| Centres de données, énergie, eau | `materialite.md` §2 | lu |
| Procès Google « recherche » (DOJ, août 2024, remèdes 2/09/2025, appel D.C. Cir. 26-5023) ; Google Shopping (CJUE 10/09/2024) ; JFTC 15/04/2025 | `recommander-sans-ia.md` §3.5 (l. 745-812) ; `src/pages/modules/pagerank.astro` l. 239-260 | lu |
| Procès Google « ad tech » (juge Brinkema, 2/09/2026 : pas de vente d'AdX, mesures sur 6 ans) ; AdSense (avocate générale, 12/11/2026) ; amende ad tech UE 2,95 Md€ (5/09/2025) | `docs/sources/mises-a-jour-2026-11-25.md` §1.2-1.3 (l. 1131-1185) ; `pagerank.astro` l. 247-258 | lu |
| M-Pesa (Hughes & Lonie 2007, Suri & Jack 2016 contesté, CBK 2026, Safaricom 2025) | `docs/sources/internet.md` §M-Pesa (l. 376-410) | lu |
| Fraude UPI (Inde) | `docs/sources/se-proteger.md` §4.7 | lu |
| Let's Encrypt / ISRG (contre-exemple associatif de norme de fait : certificats gratuits, ACME) | `entree-a-la-page.md` l. 439-471 | lu |
| Lina Khan citée (règle FTC sur les faux avis) | `recommander-sans-ia.md` l. 518 | lu |

---

## Étape 1 — Qui paie les tuyaux ?

### 1.1 Opérateurs en France : revenus et investissements (Arcep, 2025)

- **Investissements 2025 : 10,3 Md€, en baisse de 15 %, quatrième année de baisse.**
  « Les investissements des opérateurs s'élèvent à 10,3 milliards d'euros en 2025. » ; « Ces
  investissements diminuent pour la quatrième année consécutive et de 15 % en un an en 2025. »
  Arcep, communiqué « Telconomics », **28 mai 2026**.
  https://www.arcep.fr/actualites/actualites-et-communiques/detail/n/marche-francais-des-telecoms-280526.html — P — **[lu]**
- **Revenu de détail 2025** : « Le revenu des opérateurs sur le marché de détail diminue de 1,6 % en 2025
  après quatre années de croissance continue. » (mobile − 3,5 % ; fixe − 0,3 %). Même communiqué — **[lu]**.
  - Montant (37,5 Md€ HT), détail (5,1 Md€ dans les boucles locales très haut débit, − 18,7 %), sommet de
    14,8 Md€ en 2021, 12,2 Md€ en 2024 : donnés par l'extrait de moteur de la page « Résultats provisoires
    2025 » https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/observatoire-des-marches-des-communications-electroniques-en-france/marche-communications-electroniques-france-2025-resultats-provisoires.html
    — **[résumé/métadonnées seulement]** ; à relire avant publication.
  - Le montant de 10,3 Md€ inclut les « towercos » (gestionnaires de pylônes) et exclut l'achat de
    fréquences [résumé/métadonnées seulement, même page].
- Usage mobile : « Les clients des opérateurs actifs sur les réseaux 4G consomment en moyenne 17,9 Go par
  mois en 2025 » (communiqué du 28/05/2026) — **[lu]**.

### 1.2 Transit, peering, qui paie qui (Arcep, baromètre de l'interconnexion, 16 juillet 2026)

Source : Arcep, *Baromètre de l'interconnexion de données en France portant sur l'année 2025*,
**16 juillet 2026**. https://www.arcep.fr/fileadmin/user_upload/barometre_interconnexion/2025/arcep-barometre-interconnexion-ip-2026.pdf — P — **[lu]** (PDF intégral)

- **Transit** : « une prestation par laquelle un opérateur (fournisseur) propose une connectivité globale à
  un autre opérateur (client) » — le client paie.
- **Peering** : « permettant à deux opérateurs de s'échanger directement le trafic » ; « Ce type d'accord est
  généralement gratuit, hors frais propres de mise en œuvre du lien d'interconnexion. »
- **Peering payant** : apparu avec les « asymétries de trafic » ; « C'est alors l'acteur qui envoie le plus de
  trafic vers l'autre qui paie (le FCA dans le cas précédent) » (FCA = fournisseur de contenus et
  d'applications).
- **La poignée de main** : « D'après l'organisation intergouvernementale PCH, en 2021, environ 99,9 % des
  accords de peering se sont conclus d'une manière informelle autour d'une poignée de main. » (chiffre de
  PCH relayé par l'Arcep ; PCH non lu directement).
- **Volumes** : trafic entrant chez les principaux FAI « à 56 Tbit/s fin 2025, soit une augmentation de
  10,4 % en un an ».
- **Répartition** : au 2ᵉ semestre 2025, « transit (55,2 % environ) et […] peering privé (43,2 % environ).
  Le peering public […] (1,5 %) ». Le peering payant représente « 45,5 % fin 2025 » du trafic de peering
  (figure 7 : part du trafic de peering).
- **Concentration** : « Akamai, Netflix, Amazon, Google, et Meta. Leur part agrégée est estimée fin 2025 à
  48,9 % du trafic à destination des utilisateurs finals contre 46,9 % en 2024. » Détail : Akamai 12 %,
  Netflix 11,6 % (15,3 % en 2023), Amazon 9,8 % (Twitch compris), Google 8,9 %, Meta 6,7 %.
- **CDN internes** (serveurs de cache des plateformes installés chez les FAI) : environ 21 % du trafic à
  destination des clients des FAI fin 2025.
- **Prix du transit** : « chute des tarifs du transit de 12 % entre 2022 et 2025 » (chiffre TeleGeography
  repris par l'Arcep).
- **Lien avec le « fair share »** : renvoyer à `etats-regulation.md` l. 322-334 (positions ETNO / BEREC /
  CCIA). Le baromètre montre que des plateformes **paient déjà** une partie de l'interconnexion (peering
  payant) : c'est un argument utile pour présenter les deux camps, sans trancher.

### 1.3 Câbles sous-marins financés par les plateformes

- Renvoyer à `materialite.md` l. 33-38 et `internet.md` l. 432-440 (75 % de la capacité utilisée par les
  fournisseurs de contenu en 2025 ; 2Africa ; Equiano). Pas de nouvelle recherche faite.
- Seconde source indépendante pour les 75 % : **[non trouvé]** (toujours en attente, comme noté dans
  `internet.md` l. 525).

---

## Étape 2 — Le cloud

### 2.1 Parts de marché mondiales (Synergy Research / TechInsights, T3 2026)

- **T3 2026 : Amazon 26 %, Microsoft 19 %, Google 16 %** du marché des services d'infrastructure cloud ;
  marché d'environ **167,7 milliards de dollars** sur le trimestre, + 55 % sur un an ; Microsoft et Google
  croissent plus vite qu'Amazon ; les « neoclouds » (CoreWeave, Nebius…) grignotent les parts des leaders.
  Synergy Research Group (désormais TechInsights), « Cloud Infrastructure Services Market • Q3 2026 Update »,
  **30 octobre 2026**. https://www.techinsights.com/node/61958 — P (cabinet d'études ; données
  propriétaires) — **[lu]**
- Attention : un article TechTarget repris par les moteurs (29 % / 20 % / 13 %, marché de 107 Md$) porte sur
  un **T3 antérieur** : ne pas l'utiliser. — [résumé/métadonnées seulement]
- Mesures concurrentes (Canalys/Omdia, Gartner) : non consultées. Les parts varient selon le périmètre
  (IaaS seul, IaaS + PaaS, cloud privé hébergé) : le dire dans l'encart.

### 2.2 AWS : chiffre d'affaires et marge (Amazon, 10-K 2025)

Amazon.com, Inc., *Form 10-K* pour l'exercice clos le 31 décembre 2025, déposé le **6 février 2026**.
https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm — P — **[lu]**
(tableaux par segment)

- **AWS, ventes nettes 2025 : 128 725 M$** (107 556 M$ en 2024), soit **18 %** des ventes d'Amazon
  (716 924 M$).
- **AWS, résultat d'exploitation 2025 : 45 606 M$** (39 834 M$ en 2024).
  - **Marge opérationnelle calculée : 45 606 / 128 725 ≈ 35 %.**
  - **Part du résultat d'exploitation d'Amazon : 45 606 / 79 975 ≈ 57 %** (calcul de notre part). Le
    cloud fait 18 % des ventes mais plus de la moitié des bénéfices d'exploitation.
- Investissements (achats d'immobilisations) 2025 : 131,8 Md$ selon le communiqué du 5 février 2026
  https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/default.aspx
  — P — **[lu]**.
- Comparaison utile (Alphabet, 10-K 2025, voir 3.1) : Google Cloud, 58 705 M$ de revenus et 13 910 M$ de
  résultat d'exploitation en 2025 (marge ≈ 24 %, calcul de notre part) — **[lu]**.

### 2.3 Europe : part des acteurs européens (Synergy, juillet 2025)

Synergy Research Group, « European Cloud Providers' Local Market Share Now Holds Steady at 15% »,
**24 juillet 2025**. https://srgresearch.com/articles/european-cloud-providers-local-market-share-now-holds-steady-at-15 — P (cabinet) — **[lu]**

- Part des fournisseurs européens sur leur propre marché : **29 % en 2017, 15 % en 2022**, « has stayed
  relatively constant at around 15% since then ».
- « These three leading global cloud providers now account for 70% of the regional market » (Amazon,
  Microsoft, Google).
- SAP et Deutsche Telekom en tête des européens, « each accounting for 2% of the European market », puis
  OVHcloud, Telecom Italia, Orange.
- Chiffre plus récent (2026) : **[non trouvé]**.

### 2.4 Autorité de la concurrence, avis 23-A-08 du 29 juin 2023 sur le cloud

Résumé officiel de l'avis : https://www.autoritedelaconcurrence.fr/sites/default/files/2023-06/Re%CC%81sume%CC%81_Avis_Cloud_0.pdf — P — **[lu]**
(texte intégral : https://www.autoritedelaconcurrence.fr/sites/default/files/2024-01/23a08.pdf — [résumé/métadonnées seulement])

- Concentration : « les deux principaux fournisseurs, Amazon et Microsoft, auraient ainsi capté
  respectivement 46 % et 17 % des revenus des services IaaS et PaaS en 2021 » ; les trois (avec Google)
  « auraient ainsi capté 80 % de la croissance des dépenses […] de services cloud public en France en 2021 ».
- Effets de réseau : les hyperscalers ont « accès à une base de clientèle préexistante leur permettant de
  bénéficier d'effets de réseaux très importants ».
- **Crédits cloud** (crédits gratuits pour les jeunes pousses) : utiles, mais les offres ciblées « doivent
  faire l'objet d'une attention particulière » ; « risque de verrouillage par les grands fournisseurs ».
- **Frais de sortie (« egress fees »)** : « potentiellement déconnectés des coûts directement supportés par
  les fournisseurs » ; risque de « verrouillage de la clientèle ».
- Préférence pour une « approche règlementaire » (DMA, Data Act, projet de loi SREN).

### 2.5 Souveraineté : SecNumCloud et « cloud de confiance »

- **S3NS (coentreprise Thales–Google, créée en 2022) qualifiée SecNumCloud 3.2** pour son offre PREMI3NS
  (IaaS, CaaS, PaaS), près de 18 mois après le premier jalon ; l'ANSSI a validé que « l'offre n'est pas
  concernée par le Cloud Act » ; Google fournit le logiciel mais n'héberge rien. Next, V. Hermann,
  **19 décembre 2025**. https://next.ink/215464/s3ns-obtient-la-qualification-secnumcloud-par-lanssi/ — S — **[lu]**
  - Limite : S3NS doit vérifier chaque mise à jour de Google avant de la déployer (retard sur les
    nouveautés) ; même contrainte pour Bleu (Orange–Capgemini, technologie Microsoft).
  - Communiqué Thales : https://www.thalesgroup.com/fr/actualites-du-groupe/insights/groupe/s3ns-obtient-la-qualification-secnumcloud-un-tournant-pour-le — P — [résumé/métadonnées seulement] (page vide via WebFetch).
- **Bleu** : qualification visée pour « la fin d'année » 2026 (Next, https://next.ink/260765/secnumcloud-bleu-vise-desormais-une-qualification-pour-la-fin-dannee/ — S — [résumé/métadonnées seulement]). Statut au 27/11/2026 : **[non trouvé]**.
- **Obligation légale** : article 31 de la loi SREN du 21 mai 2024, rendu applicable par le **décret
  n° 2026-272 du 14 avril 2026**. Il vise la Plateforme des données de santé et six GIP ; deux critères
  cumulés (données d'une sensibilité particulière, dont la violation porterait atteinte à l'ordre public,
  la santé ou la vie) ; conformité attestée par SecNumCloud « ou par la certification européenne
  équivalente, l'EUCS ». Le référentiel SecNumCloud 3.2 existe depuis mars 2022 et compte « une dizaine de
  prestataires ». Banque des Territoires / Localtis, O. Devillers, **16 avril 2026**.
  https://www.banquedesterritoires.fr/secnumcloud-6-gip-assujettis-les-donnees-sensibles-enfin-definies — S — **[lu]**
  - Critique rapportée : la référence à l'EUCS est « fragile » (négociations « EUCS High+ » non abouties,
    selon le DG de l'ANSSI en mars 2026).
  - Texte du décret sur Légifrance : non lu. Fiche DAJ de Bercy (6 mai 2026) : 403 —
    [résumé/métadonnées seulement].
- Référentiel SecNumCloud 3.2 (ANSSI) : https://cyber.gouv.fr/uploads/2014/12/secnumcloud-referentiel-exigences-v3.2.pdf — P — [résumé/métadonnées seulement] (site protégé, PDF non obtenu). Ne pas citer de nombre d'exigences (les sources secondaires divergent : 114, 354, ~400).
- **Positions** : ANSSI (V. Strubel) défend la solidité du label et attend des « réactions passionnées »
  (Next, ci-dessus, [lu]) ; critiques : un service bâti sur une technologie américaine peut-il être
  « souverain » ? (commentaires et presse spécialisée, non sourcés proprement) ; acteurs américains
  (BSA, 2021) hostiles aux critères de capital : https://ww2.bsa.org/files/policy-filings/fr11152021secnumcloud.pdf — [résumé/métadonnées seulement].

### 2.6 DMA et cloud (état au 27 novembre 2026) — évolutif

- **18 novembre 2025** : la Commission ouvre trois enquêtes de marché sur le cloud (AWS, Azure ; adéquation
  du DMA au secteur). https://digital-markets-act.ec.europa.eu/commission-launches-market-investigations-cloud-computing-services-under-digital-markets-act-2025-11-18_en — P — [résumé/métadonnées seulement] (12 mois visés pour AWS et Azure, selon l'extrait).
- **25 juin 2026** : position préliminaire : AWS et Azure « should be designated as gatekeepers », car ce sont
  les deux plus grands services cloud de l'UE et « an important gateway between businesses and their
  customers in the EU », bien qu'ils n'atteignent pas les seuils quantitatifs du DMA. Amazon et Microsoft
  peuvent répondre « before any final decisions are taken ».
  https://digital-strategy.ec.europa.eu/en/news/commission-reaches-preliminary-position-amazons-and-microsofts-market-leading-cloud-services-should — P — **[lu]**
- **Au 27 novembre 2026** : la page officielle des contrôleurs d'accès ne liste **aucun service cloud** (7
  contrôleurs d'accès, 23 services) https://digital-markets-act.ec.europa.eu/gatekeepers_en — P — **[lu]**.
  Décision finale : **[non trouvé]**. Réaction d'Amazon et Microsoft : **[non trouvé]**.

---

## Étape 3 — La publicité en ligne

### 3.1 Alphabet (Google) : 10-K 2025

Alphabet Inc., *Form 10-K* 2025, déposé le **5 février 2026**.
https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm — P — **[lu]** (tableau des revenus)

| (millions de $) | 2023 | 2024 | 2025 |
|---|---|---|---|
| Google Search & other | 175 033 | 198 084 | 224 532 |
| YouTube ads | 31 510 | 36 147 | 40 367 |
| Google Network | 31 312 | 30 359 | 29 792 |
| **Google advertising** | 237 855 | 264 590 | **294 691** |
| Google Cloud | 33 088 | 43 229 | 58 705 |
| **Total revenues** | 307 394 | 350 018 | **402 836** |

- **Part de la publicité : 294 691 / 402 836 ≈ 73 %** (calcul). Le 10-K écrit : « We generated more than 70%
  of total revenues from online advertising in 2025. »
- Investissements : « we spent $52.5 billion and $91.4 billion on capital expenditures » (2024, 2025).

### 3.2 Meta : 10-K 2025

Meta Platforms, Inc., *Form 10-K* 2025, déposé le **29 janvier 2026**.
https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm — P — **[lu]**
(et communiqué du 28 janvier 2026 https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx — **[lu]**)

- **Publicité 2025 : 196 175 M$** sur **200 966 M$** de chiffre d'affaires total, soit **≈ 97,6 %**
  (calcul). 2024 : 160 633 M$ ; 2023 : 131 948 M$.
- Le 10-K : « We generate substantially all of our revenue from advertising. »
- Reality Labs (casques, métavers) : 2 207 M$ de revenus pour **19 193 M$ de perte d'exploitation** en 2025
  (communiqué, [lu]).
- Résultat d'exploitation total : 83 276 M$ (communiqué, [lu]).

### 3.3 Les enchères en temps réel (OpenRTB, IAB Tech Lab)

IAB Tech Lab, *OpenRTB API Specification Version 2.6* (2.6-202210 et révisions ; dépôt officiel).
https://raw.githubusercontent.com/InteractiveAdvertisingBureau/openrtb2.x/main/2.6.md — P (norme
industrielle) — **[lu]**

- Qui : la norme relie les vendeurs (« exchanges, networks working with publishers, and sell-side
  platforms ») aux acheteurs (« bidders, demand side platforms, or networks working with advertisers »).
  → SSP (côté éditeur), ad exchange (la bourse), DSP (côté annonceur).
- **`tmax`** : « Maximum time in milliseconds the exchange allows for bids to be received including Internet
  latency to avoid timeout. » La norme **ne fixe pas de valeur** ; l'exemple de requête de la
  spécification utilise `"tmax": 120` (120 ms).
- Type d'enchère `at` : « 1 = First Price, 2 = Second Price Plus » (défaut 2 dans la norme).
- Contributeurs de la version 2.6 : ingénieur·es de Google, Magnite, Yahoo!, Amazon Advertising, The Trade
  Desk… (la norme est écrite par l'industrie elle-même).
- **Ordre de grandeur réel (seconde source, primaire)** : Google Authorized Buyers : « The deadline typically
  ranges from 80 to 1000 ms » ; « We require that 85 percent of responses be received within the deadline » ;
  le délai inclut « the network time between the trading location and your bidder ».
  https://developers.google.com/authorized-buyers/rtb/get-started/peer-guide — P — **[lu]**
- **Formulation sûre** : « L'enchère se joue en général en une fraction de seconde : la bourse publicitaire
  fixe un délai maximal (`tmax`), souvent de l'ordre de 100 millisecondes, parfois jusqu'à une seconde. »
- Description par la CJUE (voir 3.4) : « peuvent enchérir en temps réel, en coulisse, pour obtenir cet espace
  publicitaire » — [lu].

### 3.4 Le TCF d'IAB Europe : APD (2022), CJUE (2024), Cour des marchés (2025)

- **APD belge, décision 21/2022 du 2 février 2022** : la TC String (chaîne de consentement) est une donnée
  personnelle ; IAB Europe est responsable (conjoint) du traitement ; amende de **250 000 €** et mesures
  correctrices. (Dates et montant confirmés par la page APD ci-dessous [lu].)
- **CJUE, C-604/22, IAB Europe, 7 mars 2024** — communiqué n° 44/24.
  https://curia.europa.eu/jcms/upload/docs/application/pdf/2024-03/cp240044fr.pdf — P — **[lu]**
  - « la TC String contient des informations concernant un utilisateur identifiable et constitue donc une
    donnée à caractère personnel au sens du RGPD » (associée par exemple à l'adresse IP).
  - IAB Europe « doit être considérée comme « responsable conjoint du traitement » » pour l'enregistrement
    des préférences, mais pas pour les traitements ultérieurs, « sauf s'il peut être établi que cette
    association a exercé une influence ».
- **Cour des marchés (cour d'appel de Bruxelles), 14 mai 2025** — communiqué de l'APD.
  https://www.dataprotectionauthority.be/the-market-court-rules-in-the-iab-europe-case — P — **[lu]**
  - Confirme que la TC String est une donnée personnelle, qu'IAB Europe est responsable conjoint pour le
    TCF, et **maintient l'amende de 250 000 €** ; **annule** la décision 21/2022 pour vice de procédure, en
    reprenant le raisonnement de l'APD ; **rejette** la responsabilité d'IAB Europe pour les traitements
    « entirely within the OpenRTB protocol ».
- **Positions des parties** :
  - **IAB Europe** (14 mai 2025) : « Belgian Market Court Confirms Limited Role of IAB Europe In The TCF » ; la
    Cour « has annulled the APD February 2022 decision » ; IAB Europe n'est responsable conjoint « solely in
    relation to the creation and use of TC Strings ». Le communiqué ne mentionne pas l'amende.
    https://iabeurope.eu/belgian-market-court-confirms-limited-role-of-iab-europe-in-tcf/ — P (partie) — **[lu]**
  - **ICCL / Johnny Ryan** (plaignant, 14 mai 2025) : « the consent system used by Google, Amazon, X,
    Microsoft, deceives hundreds of millions of Europeans » ; « RTB can operate without personal data. This
    decision shows that it must. » ; affirme que le TCF est présent sur « 80% of the internet » (affirmation
    de l'ICCL, non vérifiée).
    https://www.iccl.ie/?p=15806 — P (partie) — **[lu]**
  - La décision porte sur **TCF v2.0** ; la version actuelle (v2.2) n'était pas en cause (extraits de
    cabinets d'avocats, [résumé/métadonnées seulement]).
- Suite (9 janvier 2026, annulation de la validation du plan d'action d'IAB Europe ?) : **[résumé/métadonnées
  seulement]** (une seule mention, Didomi) — ne pas publier.

---

## Étape 4 — Effets de réseau et gratuité

### 4.1 Effets de réseau : la référence

- M. L. Katz et C. Shapiro, « Network Externalities, Competition, and Compatibility », *American Economic
  Review*, 75(3), juin 1985, p. 424-440. Notice : https://ideas.repec.org/a/aea/aecrev/v75y1985i3p424-40.html
  — P — **[lu]** (notice ; pas de résumé). Texte : https://www.jstor.org/stable/1814809 — [résumé/métadonnées
  seulement] (JSTOR bloqué ; copie universitaire injoignable). La définition (l'utilité d'un bien augmente
  avec le nombre d'autres utilisateur·rices) n'a été vue qu'en extrait : citer la référence, pas une phrase.
- Application au cloud par un régulateur : avis ADLC 23-A-08 (2.4), « effets de réseaux très importants »
  — [lu].

### 4.2 Marchés bifaces : Rochet et Tirole, Nobel 2014

- J.-C. Rochet et J. Tirole, « Platform Competition in Two-Sided Markets », *Journal of the European Economic
  Association*, 1(4), 2003, p. 990-1029. https://ideas.repec.org/a/tpr/jeurec/v1y2003i4p990-1029.html — P — **[lu]** (résumé)
  - « Many if not most markets with network externalities are two-sided. » ; les plateformes (logiciels,
    médias, paiements, internet) doivent « get both sides of the market on board ».
- **Prix Nobel d'économie 2014, Jean Tirole** (Toulouse 1 Capitole), « for his analysis of market power and
  regulation », annoncé le **13 octobre 2014**.
  https://www.nobelprize.org/prizes/economic-sciences/2014/press-release/ — P — **[lu]**
- Texte grand public du comité Nobel : l'exemple du **journal gratuit** (« giving away papers for free can be
  a way of attracting readers and thus new advertisers ») ; « Along with Jean-Charles Rochet, Tirole has
  increased our understanding of these platform markets […] Other examples of similar platforms are
  credit/debit cards, search engines, and social media. » Conclusion du comité : dans ces marchés, il est
  « doubtful whether undercutting should be banned ».
  https://www.nobelprize.org/prizes/economic-sciences/2014/popular-information/ — P — **[lu]**
  → Idée d'animation : une balance à deux plateaux (utilisateur·rices gratuit·es / annonceurs payants).

### 4.3 « Si c'est gratuit, c'est toi le produit » : origine et nuances

Quote Investigator, « If You Are Not Paying For It, You're Not the Customer; You're the Product Being
Sold », 16 juillet 2017 (mis à jour le 28 octobre 2024). https://quoteinvestigator.com/2017/07/16/product/ — S (enquête documentée, sources citées) — **[lu]**

- **1973** : vidéo *Television Delivers People* de **Richard Serra et Carlota Fay Schoolman** : « You are the
  product of t.v. » (précurseur ; une femme co-autrice, à mettre en avant).
- Décembre 1999 (Usenet, Steve Atkins) : « The punters are not the customer, they're the product. »
- Juin 2001 (Usenet, Tom Johnson) : « You're not the customer, you're the product. »
- **26 août 2010**, « blue_beetle » (Andrew Lewis) sur MetaFilter : « If you are not paying for it, you're not
  the customer; you're the product being sold. » Popularisé par Tim O'Reilly (2 septembre 2010).
- **Mythe à démonter** : pas d'auteur unique ; la formule évolue de 1973 à 2010.
- **Nuance 1 (Zuboff)** : la formule est « Too weak » selon Zuboff (The Intercept, Sam Biddle, 2 février 2019,
  https://theintercept.com/2019/02/02/shoshana-zuboff-age-of-surveillance-capitalism/ — S — **[lu]**). Sa
  formule « You are not the product; you are the abandoned carcass » (*The Age of Surveillance Capitalism*,
  2019, p. 377 selon une recension) : **[résumé/métadonnées seulement]**.
- **Nuance 2** : on peut payer **et** être pisté·e (ex. Apple ATT ci-dessous, Meta « payer ou consentir »,
  voir `etats-regulation.md` l. 196) ; et la gratuité peut être financée autrement (dons : Wikipédia ;
  argent public : Pix, UPI ci-dessous).

---

## Étape 5 — Monopoles et régulation

### 5.1 DMA (renvoi)

- Contrôleurs d'accès, amendes : **renvoyer à `etats-regulation.md` l. 185-200.**
- Vérifié de nouveau le 27/11/2026 : **7 contrôleurs d'accès** (Alphabet, Amazon, Apple, Booking, ByteDance,
  Meta, Microsoft), **23 services de plateforme essentiels**, aucun cloud.
  https://digital-markets-act.ec.europa.eu/gatekeepers_en — **[lu]**. Cloud : voir 2.6.

### 5.2 Autorité de la concurrence (France), 2024-2026

- **Apple, App Tracking Transparency (ATT) : décision 25-D-02 du 31 mars 2025, amende de 150 M€**, abus de
  position dominante du 26 avril 2021 au 25 juillet 2023. L'objectif de protection des données n'est pas
  critiqué ; la mise en œuvre est « neither necessary for nor proportionate with Apple's stated objective of
  protecting personal data » ; double consentement exigé des éditeurs tiers, consentement unique pour
  Apple ; les **petits éditeurs** sont les plus touchés.
  https://www.autoritedelaconcurrence.fr/en/press-release/targeted-advertising-autorite-de-la-concurrence-imposes-fine-eu150000000-apple — P — **[lu]**
  - Position d'Apple : **[non trouvé]** dans une source lue.
- **Doctolib : décision 25-D-06 du 6 novembre 2025, 4 665 000 €** (abus de position dominante, dont
  l'« acquisition prédatrice » d'un concurrent). Bilan 2025 de l'Autorité :
  https://www.autoritedelaconcurrence.fr/en/press-release/2025-year-action-autorite-de-la-concurrence — P — **[lu]**
  (même page : griefs notifiés à Meta dans la publicité en ligne — pas encore de décision).
- **Meta et droits voisins de la presse : mesures conservatoires du 8 juillet 2026** (26-MC-01, saisine APIG ;
  26-MC-02, saisine DVP) : obligation de négocier de bonne foi ; « atteinte grave et immédiate au secteur de
  la presse » (extrait du communiqué, [résumé/métadonnées seulement]).
  - **Cour d'appel de Paris, 29 octobre 2026, RG 26/12580** : « REJETTE les moyens d'annulation et de
    réformation dirigés contre la décision de l'Autorité de la concurrence n° 26-MC-01 du 8 juillet 2026 ».
    https://www.cours-appel.justice.fr/sites/default/files/2026-11/26-12580.pdf — P — **[lu]** (dispositif et
    début). Arrêt jumeau 26/12581 (DVP) : [résumé/métadonnées seulement].
  - **Position de Meta** (16 septembre 2026) : a « toujours négocié de bonne foi » ; affirmations de l'Autorité
    « fausses, tant sur le plan factuel que juridique » ; « rien ne permet d'affirmer que le comportement de
    Meta cause un préjudice urgent, grave et irréparable » ; tout dommage « résulterait entièrement de leurs
    propres décisions » ; Meta se conforme aux mesures pendant les recours.
    https://about.fb.com/fr/news/2026/09/pourquoi-nous-faisons-appel-des-decisions-de-lautorite-de-la-concurrence-concernant-les-droits-voisins-des-editeurs-de-presse/ — P (partie) — **[lu]**
  - Position des éditeurs : la presse ne touche plus de rémunération de Meta depuis l'expiration des accords
    (DVP 31/12/2024, APIG 31/01/2025) (extrait, [résumé/métadonnées seulement]).
- Avis 26-A-05 (17 juillet 2026) sur les agents d'IA : [résumé/métadonnées seulement].

### 5.3 États-Unis : FTC c. Meta (état au 27 novembre 2026) — évolutif

- **Jugement du 18 novembre 2025** (juge James Boasberg, tribunal fédéral de Washington) : la FTC n'a pas
  prouvé de monopole actuel. « the case for including TikTok in the product market is overwhelming » ;
  YouTube « concededly more debatable » ; « Yet even if YouTube is excluded, Meta still would not hold a
  monopoly. » Tech Policy Press, 18 novembre 2025.
  https://techpolicy.press/key-excerpts-meta-wins-bout-with-ftc-over-instagram-whatsapp-deals — S (extraits du jugement) — **[lu]**
- **Appel de la FTC, 20 janvier 2026** (D.C. Circuit, n° 26-5028 selon un extrait de rôle) : Meta aurait
  maintenu « monopoly in personal social networking services » « by buying its most significant competitive
  threats » (Daniel Guarnera, FTC). https://www.ftc.gov/node/328111 — P (partie) — **[lu]**
- **Position de Meta** : la décision « to reject the FTC's arguments is correct, and recognizes the fierce
  competition we face ». NBC News / AP, 21 janvier 2026.
  https://www.nbcnews.com/news/us-news/ftc-says-will-appeal-meta-antitrust-decision-rcna255151 — S — **[lu]**
- **État de l'appel** : mémoire de la FTC fin mai 2026 (argument : le juge aurait mesuré le pouvoir de marché
  au moment du procès plutôt qu'à l'introduction de l'action) ; mémoire amicus de la Chambre de commerce
  (27/08/2026) portant « ORAL ARGUMENT NOT YET SCHEDULED » ; amicus de l'American Antitrust Institute
  (29/05/2026) pour la FTC. — **[résumé/métadonnées seulement]**. Une dépêche Law360 du 23/11/2026 évoque
  des plaidoiries en janvier : **non confirmé**. Formulation sûre : « La FTC a fait appel en janvier 2026 ;
  au 27 novembre 2026, la cour d'appel n'a pas statué. »

### 5.4 États-Unis : FTC c. Amazon (état au 27 novembre 2026) — évolutif

- **Plainte du 26 septembre 2023** (FTC + 17 États) : pénaliser les vendeurs moins chers ailleurs
  (anti-discounting) ; conditionner le badge Prime au service logistique d'Amazon. Lina Khan : « Our
  complaint lays out how Amazon has used a set of punitive and coercive tactics to unlawfully maintain its
  monopolies. »
  https://www.ftc.gov/news-events/news/press-releases/2023/09/ftc-sues-amazon-illegally-maintaining-monopoly-power — P (partie) — **[lu]**
- **Position d'Amazon** (D. Zapolsky, 26 septembre 2023) : les pratiques visées « have helped to spur
  competition and innovation across the retail industry » ; la plainte est « wrong on the facts and the
  law ». https://www.aboutamazon.com/news/company-news/amazon-response-to-ftc-antitrust-lawsuit — P (partie) — **[lu]**
- **Date du procès** : procès sans jury fixé au **29 mars 2027** ; le 9 octobre 2026, le juge John Chun
  refuse de le repousser à juin 2027 (« insufficient justification »). CPI/PYMNTS, 11 octobre 2026.
  https://pymnts.com/cpi-posts/amazon-loses-bid-to-delay-ftc-antitrust-trial-as-california-case-looms — S — **[lu]**
  - Seconde source : MLex (procès d'abord fixé au 13/10/2026, puis 9/02/2027, puis 29/03/2027) —
    https://www.mlex.com/mlex/articles/2536525 — **[résumé/métadonnées seulement]** (paywall).
  - Formulation sûre : « Le procès doit s'ouvrir fin mars 2027. »
- Ne pas confondre avec l'affaire Prime (abonnements trompeurs), distincte : non vérifiée ici.

---

## Étape 6 — Quand une entreprise impose une norme

### 6.1 QUIC : de Google à l'IETF

- Chromium (projet de Google) : « In 2012, Google started working on QUIC. » ; 2013, premiers tests dans
  Chrome (« Google QUIC ») ; « In 2015, Google brought QUIC to the IETF » ; 2017, l'IETF diverge (« IETF
  QUIC ») ; 2021, RFC 9000 ; Chrome le prend en charge en version 90 et l'active pour tou·tes en version 93.
  https://www.chromium.org/quic/ — P (partie) — **[lu]**
- A. Langley *et al.* (Google), « The QUIC Transport Protocol: Design and Internet-Scale Deployment »,
  SIGCOMM 2017 : « We estimate that 7% of Internet traffic is now QUIC » ; déployé « on thousands of
  servers », utilisé par Chrome et YouTube. Parmi les 21 auteur·rices : Alyssa Wilk, Cherie Shi, Joanna
  Kulik, Jim Roskind (concepteur initial selon d'autres sources, non confirmé sur la page Chromium).
  https://research.google/pubs/the-quic-transport-protocol-design-and-internet-scale-deployment/ — P — **[lu]**
- RFC 9000 et fonctionnement : renvoyer à `entree-a-la-page.md` l. 385-416.
- **Point de mise en scène** : Google contrôle les deux bouts (Chrome et ses serveurs) ; il peut donc tester
  un protocole à l'échelle d'internet avant de le normaliser. La normalisation à l'IETF a modifié le
  protocole (IETF QUIC ≠ Google QUIC).

### 6.2 Chrome : part de marché

- **StatCounter, octobre 2026, monde, tous appareils** : Chrome **68,81 %**, Safari 16,6 %, Edge 5,33 %,
  Firefox 2,56 %, Opera 2,16 %, Samsung Internet 2,05 %.
  https://gs.statcounter.com/browser-market-share/all/worldwide/chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&statType_hidden=browser&region_hidden=ww&granularity=monthly&statType=Browser&region=Worldwide&fromInt=202610&toInt=202610&fromMonthYear=2026-10&toMonthYear=2026-10&csv=1
  (export CSV de la page https://gs.statcounter.com/browser-market-share) — P (mesureur commercial) — **[lu]**
- Limite : StatCounter mesure des pages vues sur les sites équipés de son script ; ce n'est pas un nombre
  d'utilisateur·rices. Edge, Opera, Brave, Samsung Internet utilisent aussi le moteur Chromium : la part du
  moteur est plus forte que celle de Chrome (calcul non publié par StatCounter : ne pas donner de chiffre).

### 6.3 Manifest V3 (extensions Chrome)

- **Calendrier officiel** (Chrome for Developers, « Manifest V2 support timeline ») :
  https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline — P — **[lu]**
  - 9 octobre 2024 : début de la désactivation des extensions MV2 dans Chrome stable ;
  - 24 juillet 2025 : MV2 désactivé pour tou·tes avec Chrome 138 (réactivation impossible) ; Chrome 139 : les
    extensions MV2 cessent de fonctionner ;
  - **31 août 2026** : toutes les extensions MV2 restantes retirées du Chrome Web Store.
- **Position de Google** : « higher security and privacy guarantees » ; « a safer, more performant, and more
  privacy-preserving extensions ecosystem » ; limites de règles relevées pour les bloqueurs ; citation
  d'AdGuard : « ad blockers like us will be able to continue being up to the task ». D. Li, « Resuming the
  transition to Manifest V3 » (début 2024, date non affichée).
  https://developer.chrome.com/blog/resuming-the-transition-to-mv3 — P (partie) — **[lu]**
- **Critique (EFF)** : MV3 « actually takes away the user's power to block unwanted tracking ». A. Hancock,
  EFF, 22 novembre 2021. https://www.eff.org/deeplinks/2021/11/manifest-v3-open-web-politics-sheeps-clothing — S (association) — **[lu]**
- uBlock Origin remplacé par « uBlock Origin Lite » sur Chrome : presse, [résumé/métadonnées seulement].
- Conflit d'intérêts potentiel (Google vit de la publicité, cf. 3.1, et édite le navigateur dominant) : à
  présenter comme une **critique**, pas comme un fait.

### 6.4 Cookies tiers et Privacy Sandbox (état au 27 novembre 2026)

- Avril 2025, Chrome garde les cookies tiers et le choix de l'utilisateur : renvoyer à `entree-a-la-page.md`
  l. 568-571.
- **17 octobre 2025** : Google **retire** la plupart des technologies Privacy Sandbox (Attribution Reporting,
  IP Protection, Protected Audience, Topics, Related Website Sets, etc.), « in light of their low levels of
  adoption » ; Chrome conserve son approche actuelle sur les cookies tiers. A. Chavez (VP Privacy Sandbox).
  https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies — P (partie) — **[lu]**
- Chronologie complète (annonce de 2020, reports de 2021-2024, engagements devant la CMA britannique) :
  **non vérifiée ici**. Formulation sûre : « Google avait annoncé la fin des cookies tiers dans Chrome ; il y
  a renoncé en 2025, puis a abandonné la plupart des technologies de remplacement. »

### 6.5 Contre-exemples : normes et infrastructures portées par des acteurs publics ou associatifs

- **Pix (Brésil), Banque centrale du Brésil, lancé en novembre 2020.** En 2025, « quase 80 bilhões de
  transações » (+ 25,7 %), plus de 35 000 milliards de réais ; **148 millions** de personnes physiques
  utilisatrices, « cerca de 86% da população adulta brasileira ».
  BCB, *Relatório de Gestão do Pix 2026*. https://www.bcb.gov.br/content/estabilidadefinanceira/pix/relatorio_de_gestao_pix/relatorio_gestao_pix_2026.pdf — P — **[lu]**
  - Gratuité pour les particuliers : **[non trouvé]** dans le passage lu (à vérifier dans le règlement du
    Pix).
- **UPI (Inde), NPCI** (organisme sans but lucratif créé par les banques sous l'égide de la Banque de
  réserve de l'Inde — statut non vérifié ici) : **octobre 2026, 25,47 milliards de transactions** (+ 23 % sur
  un an) pour 31,53 lakh crore de roupies (31 530 milliards de ₹), d'après les données NPCI reprises par IANS.
  Free Press Journal, 2 novembre 2026. https://www.freepressjournal.in/business/upi-transactions-hit-2547-billion-in-october-value-soars-to-3153-lakh-crore — S — **[lu]**
  - Page statistique NPCI https://www.npci.org.in/what-we-do/upi/product-statistics : chargée en JavaScript,
    **[résumé/métadonnées seulement]**.
  - **Fin partielle de la gratuité ?** Commission de 0,40 % sur certains paiements aux commerçants de plus de
    2 000 ₹ à partir du 15 octobre 2026, paiements entre particuliers toujours gratuits : **une seule
    source** (Free Press Journal, 1/10/2026, [lu]) — **non confirmé**, ne pas publier sans circulaire NPCI.
- **Chine : Alipay et WeChat Pay (contre-exemple inverse : deux entreprises privées).** BRI (Banque des
  règlements internationaux), *Annual Economic Report 2019*, ch. III : « the large volume of big tech payment
  services in China: 16% of GDP, dwarfing that elsewhere ». https://www.bis.org/publ/arpdf/ar2019e3.htm — P — **[lu]**
  - « 94 % du marché des paiements mobiles » (BIS Bulletin n° 45, 2 août 2021,
    https://www.bis.org/publ/bisbull45.htm) : chiffre **non trouvé** sur la page lue →
    [résumé/métadonnées seulement].
- **M-Pesa (Kenya, opérateur privé Safaricom/Vodafone, amorcé par un fonds public britannique)** : renvoyer à
  `internet.md` l. 376-410.
- **Let's Encrypt / ISRG (association)** : renvoyer à `entree-a-la-page.md` l. 439-471.
- **IETF** (normes ouvertes, même quand une entreprise est à l'origine, cf. QUIC) : renvoyer à
  `institutions.md` §1.

---

## Voix à mettre en avant (faits professionnels uniquement)

- **Lina M. Khan** : présidente de la FTC du 15 juin 2021 au 20 janvier 2025 ; auparavant conseillère de la
  sous-commission antitrust de la Chambre des représentants, professeure associée à Columbia.
  https://ftc.gov/about-ftc/commissioners-staff/lina-m-khan — P — **[lu]**. Article fondateur : « Amazon's
  Antitrust Paradox », *Yale Law Journal*, vol. 126, janvier 2017 : le cadre actuel « is unequipped to capture
  the architecture of market power in the modern economy » ; « predatory pricing becomes highly rational ».
  https://www.yalelawjournal.org/note/amazons-antitrust-paradox — P — **[lu]** (résumé). C'est sous sa
  présidence que la FTC a lancé les procès Amazon (2023) et poursuivi Meta (plainte de 2020, amendée en 2021 —
  dates non revérifiées ici).
- **Margrethe Vestager** : commissaire européenne à la concurrence 2014-2019, puis vice-présidente exécutive
  « A Europe Fit for the Digital Age » (et concurrence) 2019-2024.
  https://commissioners.ec.europa.eu/margrethe-vestager_en — P — **[lu]** (page archivée). Décisions Google
  Shopping : voir `recommander-sans-ia.md` §3.5.
- **Shoshana Zuboff** et le « capitalisme de surveillance » (*The Age of Surveillance Capitalism*, 2019) :
  « Instead of labor, surveillance capitalism feeds on every aspect of every human's experience » ; les
  entreprises « sell prediction products into a new marketplace » (The Intercept, 2/02/2019, [lu]).
  Article académique de 2015 (« Big other », *Journal of Information Technology*,
  https://journals.sagepub.com/doi/10.1057/jit.2015.5) : 403 → [résumé/métadonnées seulement].
  - **Critiques** :
    - Evgeny Morozov, « Capitalism's New Clothes », *The Baffler*, 4 février 2019 : le livre est « more
      'surveillance' than 'capitalism' » ; le terme avait déjà été employé par les marxistes de *Monthly
      Review*, « a minor genealogical inconvenience for Zuboff » ; « a step backward in our understanding of
      the dynamics of the digital economy ».
      https://thebaffler.com/latest/capitalisms-new-clothes-morozov — S — **[lu]**
    - Cory Doctorow, *How to Destroy Surveillance Capitalism*, 26 août 2020 : « Big Tech is a monopoly
      problem » ; « I just don't buy the thesis that Big Tech used Big Data to create a mind-control ray to
      sell us fidget spinners ». https://pluralistic.net/2020/08/26/destroy-surveillance-capitalism/ — S — **[lu]**
    → Bon support pédagogique : deux lectures (surveillance vs monopole) du même phénomène.
- **Carlota Fay Schoolman** (co-autrice de *Television Delivers People*, 1973) : voir 4.3.
- **Économie numérique hors Occident** : Pix (Brésil), UPI (Inde), Alipay/WeChat Pay (Chine), M-Pesa (Kenya) :
  voir 6.5.

---

## Idées d'animations (simples, fidèles)

1. **« Qui paie le tuyau ? »** : un paquet vidéo part d'un serveur Netflix/Google ; trois chemins (transit
  payé par le client, peering gratuit, peering payé par l'émetteur, CDN interne chez le FAI) avec les parts
  Arcep 2025 (55,2 % / 43,2 % / 1,5 % ; 45,5 % du peering est payant).
2. **« Une enchère en 120 ms »** : SSP → ad exchange → 3 DSP → enchère → pub affichée ; chronomètre
  `tmax` = 120 ms (valeur de l'exemple OpenRTB) ; une DSP en retard est éliminée (règle Google : réponse
  après le délai = exclue). Légende annoncée ; repli texte.
3. **« D'où vient l'argent ? »** : barres empilées Alphabet 2025 (pub 73 %), Meta 2025 (pub 97,6 %), Amazon
  2025 (AWS 18 % des ventes mais 57 % du résultat d'exploitation).
4. **« La plateforme à deux faces »** (Rochet-Tirole) : curseur de prix côté utilisateur·rices / côté
  annonceurs ; montrer que baisser l'un à zéro peut être rentable (exemple du journal gratuit du comité Nobel).

---

## Faits non confirmés (ne pas publier en l'état)

1. Arcep 2025 : 37,5 Md€ de revenu de détail, 5,1 Md€ dans le très haut débit (− 18,7 %), sommet de 14,8 Md€
   en 2021 — extrait de moteur seulement (communiqué lu ne donne que les pourcentages et 10,3 Md€).
2. Seconde source indépendante des 75 % de capacité des câbles utilisée par les fournisseurs de contenu.
3. Qualification SecNumCloud de Bleu (prévue fin 2026) ; liste officielle ANSSI des prestataires qualifiés ;
   nombre d'exigences du référentiel 3.2 ; texte du décret 2026-272 (Légifrance non lu).
4. DMA cloud : décision finale de désignation d'AWS et Azure (délai de 12 mois évoqué, non vérifié) ;
   réactions d'Amazon et Microsoft.
5. Cour des marchés belge, 9 janvier 2026 (plan d'action IAB Europe) ; périmètre exact TCF v2.0 / v2.2.
6. Katz et Shapiro (1985) : phrase de définition (texte non obtenu) ; Zuboff « abandoned carcass » (p. 377).
7. FTC c. Meta : date des plaidoiries devant la cour d'appel (janvier 2027 ?) ; n° 26-5028 (extrait de rôle).
8. FTC c. Amazon : date du 29 mars 2027 confirmée par une source lue (CPI/PYMNTS) et une source en
   métadonnées (MLex) ; vérifier sur le rôle du tribunal fédéral de l'Ouest de l'État de Washington avant publication (numéro
   d'affaire non vérifié).
9. Position d'Apple sur la décision ATT de l'Autorité de la concurrence ; arrêt 26/12581 (DVP) ;
   communiqué ADLC du 8 juillet 2026 (lu en extrait).
10. UPI : commission de 0,40 % au 15 octobre 2026 (une seule source) ; statut juridique de la NPCI ; chiffres
    NPCI lus seulement via la presse.
11. Pix : gratuité pour les particuliers.
12. Alipay/WeChat Pay : 94 % du marché des paiements mobiles (BRI 2021).
13. Rôle de Jim Roskind comme concepteur initial de QUIC.
14. Chronologie complète de l'abandon de la fin des cookies tiers (2020-2025) et rôle de la CMA britannique.
15. Parts de marché du cloud selon d'autres cabinets (Canalys/Omdia, Gartner) pour croiser Synergy.
