# Mise à jour des sujets évolutifs (25 novembre 2026)

Recherches déléguées à des agents puis relues ; seules les propositions sourcées [lu] ont été appliquées aux pages. Les faits [résumé/métadonnées seulement] sont consignés mais non publiés.

## Partie 1 : gouvernance technique, États et régulation, se protéger


Recherches du 25 novembre 2026 : WebSearch, WebFetch et curl (User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)`). Aucun fichier n'a été écrit dans le dépôt.

Statuts :
- **[lu]** : page ou document ouvert et lu ;
- **[résumé/métadonnées seulement]** : vu dans un résumé de moteur de recherche, ou page lue par un outil qui ne rend qu'un résumé ;
- **[non trouvé]** : page inaccessible ou information introuvable.

Rappel : WebFetch rend un résumé produit par un petit modèle, pas le texte brut. Les pages lues par curl (API HIBP, root-servers.org, Datatracker, OEIL, presscorner, documents du Conseil) l'ont été en texte intégral.

---

#### 1. Gouvernance technique

#### 1.1 AFRINIC (état au 8 nov.)

**(a) Texte actuel**
- `src/pages/modules/gouvernance-technique.astro:254` : « AFRINIC dans la tourmente (état au 8 novembre 2026). »
- l. 260-267 : « … en mai 2026, la Cour suprême de Maurice autorise l'ICANN à intervenir dans la procédure. Un nouveau directeur général doit prendre ses fonctions le 1er janvier 2027… »

**(b) Ce qui a changé** : rien de substantiel.
- Les actualités d'AFRINIC ne publient rien sur la procédure judiciaire après le 31 octobre 2026. La déclaration du 31 octobre sur l'inscription de Cloud Innovation au registre des membres figure déjà dans le dossier.
- Les seules entrées postérieures sont :
  - l'annonce d'un jour férié (6 novembre) ;
  - la liste des candidat·es pour l'élection d'un·e coprésident·e du groupe de politique, lors de la réunion AFRINIC-38 au Cap le 18 novembre 2026 (publiée le 9 novembre).
- Aucune décision sur la demande de liquidation n'a été trouvée. Selon la presse (résumés), l'examen reste attendu en février 2027.

**(c) Proposition** : remplacer seulement la date par « (état au 25 novembre 2026) ». Ajout facultatif : « AFRINIC conteste aussi l'inscription de Cloud Innovation dans le registre officiel de ses membres (octobre 2026). » Ce fait est déjà [lu] dans le dossier (communiqué du 31 octobre).

**(d) Sources**
- AFRINIC, News & Announcements, https://afrinic.net/news, consulté le 25 nov. 2026 [lu]
- AFRINIC, « Official Statement on the Inclusion of Cloud Innovation Limited in the Register of Members », 31 oct. 2026, https://afrinic.net/afrinic-official-statement-on-the-inclusion-of-cloud-innovation-limited-in-the-register-of-members [résumé : titre et chapô lus sur la page News]
- Dig Watch, « Mauritius SC to hear AFRINIC winding-up petition », https://dig.watch/updates/mauritius-sc-to-hear-afrinic-winding-up-petition [non lu, erreur 403 ; résumé du moteur seulement]
- TechTrends Kenya, « AFRINIC-38 tackles IPv4 shortage… », 18 nov. 2026, https://techtrendske.co.ke/2026/11/18/afrinic-38-tackles-ipv4-shortage-and-transparency-in-cape-town/ [résumé/métadonnées seulement]

#### 1.2 Roulement de la clé KSK de la racine (état au 15 oct.)

**(a) Texte actuel** : `gouvernance-technique.astro:288-289` : « La clé maîtresse a été changée le 11 octobre 2018, puis le 11 octobre 2026 ; pour ce second changement, l'ICANN étudiait encore quelques incidents limités (état au 15 octobre 2026). »

**(b) Ce qui a changé** : rien de nouveau.
- La dernière actualité de l'IANA date du 15 octobre 2026 (« Root Zone KSK Rollover Completed as Planned »).
- L'ICANN n'a publié aucun bilan des incidents.
- Prochaine étape : révocation de l'ancienne clé en janvier 2027.

**(c) Proposition** : rien à changer. Si l'on veut rafraîchir la date : « …l'ICANN n'avait pas publié de bilan des quelques incidents signalés ; l'ancienne clé doit être révoquée en janvier 2027 (état au 25 novembre 2026). »

**(d) Sources**
- IANA, News, https://www.iana.org/news, consulté le 25 nov. 2026 [lu]
- ICANN, « ICANN Reports Root Zone KSK Rollover Completed as Planned », 15 oct. 2026, https://www.icann.org/en/announcements/details/icann-reports-root-zone-ksk-rollover-completed-as-planned-15-10-2026-en [lu]

#### 1.3 FGI 2026 à Nairobi

**(a) Texte actuel** : `gouvernance-technique.astro:348-349` : « Le FGI 2026 se tient à Nairobi, du 14 au 18 décembre (état au 8 novembre 2026). »

**(b) Ce qui a changé** : rien. Dates (14-18 décembre 2026), lieu (KICC) et format hybride sont confirmés, et les inscriptions sont ouvertes. Le thème annoncé est « Governing the Internet in the Age of Intelligence: Our Shared Responsibility » [résumé seulement].

**(c) Proposition** : changer seulement la date : « (état au 25 novembre 2026) ».

**(d) Sources**
- Nations unies, Indico, « 21st Annual Meeting of the IGF », https://indico.un.org/event/1024890/ [lu]
- Media Rights Agenda, « 21st Internet Governance Forum Fixed for December 14 to 18 in Kenya », https://mediarightsagenda.org/21st-internet-governance-forum-fixed-for-december-14-to-18-in-kenya/ [résumé/métadonnées seulement]

#### 1.4 Élections à l'UIT (PP-26, Doha)

**(a) Texte actuel**
- Le module **ne parle pas** de l'élection. L'UIT n'apparaît qu'aux lignes 331-340 (origine en 1865, Dubaï 2012, « New IP »).
- La réélection est déjà dans `src/data/institutions.ts:287` (fiche UIT, page `/institutions/`), qui est correcte.

**(b) Ce qui a changé** (PP-26, du 9 au 27 novembre 2026)
- 12 nov. 2026 : **Doreen Bogdan-Martin** (États-Unis) est réélue secrétaire générale avec **164 voix sur 173** [lu].
- 13 nov. 2026 : **Adel Darwish** (Bahreïn) est élu vice-secrétaire général avec 90 voix sur 177 [lu].
- 13 nov. 2026, élection des directeur·rices des bureaux [lu] :
  - **Eric Fournier** (France), radiocommunications ;
  - **Seizo Onoe** (Japon), normalisation, réélu ;
  - **Nele Leosk** (Estonie), développement.
- La conférence se termine le 27 novembre 2026.

**(c) Proposition** : ajouter à la fin du paragraphe `slot="curieux"` (l. 331-335) :
> « Chaque État y a une voix, y compris pour élire ses dirigeant·es : le 12 novembre 2026, à Doha, Doreen Bogdan-Martin (États-Unis), première femme à la tête de l'UIT, a été réélue secrétaire générale avec 164 voix sur 173. »

Notes :
- Si l'on garde « première femme », s'appuyer sur la formulation de l'UIT déjà utilisée dans `institutions.ts:287`. Le communiqué de 2026, lu en résumé, ne la reprend pas explicitement : à vérifier ou à garder prudent.
- Ajouter le communiqué dans `<Sources>`.

**(d) Sources**
- UIT, « ITU Member States re-elect Doreen Bogdan-Martin as Secretary-General », 12 nov. 2026, https://www.itu.int/en/mediacentre/Pages/PR-2026-11-12-SG-Election.aspx [lu]
- UIT, « Member States elect Adel Darwish as ITU Deputy Secretary-General », 13 nov. 2026, https://www.itu.int/en/mediacentre/Pages/PR-2026-11-13-DSG-Election.aspx [lu]
- UIT, « ITU elects senior leaders in radiocommunication, standardization and development », 13 nov. 2026, https://www.itu.int/en/mediacentre/Pages/PR-2026-11-13-Directors-Election.aspx [lu]
- UIT, PP-26, https://pp.itu.int/2026/en/ [lu] (dates du 9 au 27 novembre)

#### 1.5 ICANN : Tripti Sinha réélue le 22 octobre 2026

**(a) Texte actuel**
- Le module ne cite pas la présidence actuelle. Seule une source le fait (`gouvernance-technique.astro:437`, communiqué de 2023).
- Le dossier `docs/sources/gouvernance-technique.md:707` dit encore « réélue en octobre 2025 » [extrait].
- `src/data/institutions.ts:181` est à jour.

**(b) Ce qui a changé** : la réélection est confirmée par la résolution du conseil 2026.10.22.23 (« Tripti Sinha is elected as Chair of the Board ») ; Sajid Rahman est vice-président (2026.10.22.24) [lu].

**(c) Proposition** : rien à changer dans la page. Mettre à jour le dossier (l. 707) avec la résolution du 22 octobre 2026.

**(d) Sources**
- ICANN, « Approved Resolutions, Organizational Meeting of the ICANN Board », 22 oct. 2026, https://www.icann.org/en/board-activities-and-meetings/materials/approved-resolutions-organizational-meeting-of-the-icann-board-22-10-2026-en [lu]

#### 1.6 W3C : départ de Seth Dobbs (28 mai 2026)

**(a) Texte actuel** : le module ne parle pas de la direction du W3C (l. 207-220). `institutions.ts:240` est à jour.

**(b) Ce qui a changé** : rien. Dominique Hazaël-Massieux est toujours « Interim CEO » sur la page de l'équipe, et aucune nomination définitive n'a été trouvée.

**(c) Proposition** : rien à changer.

**(d) Sources**
- W3C, Staff, https://www.w3.org/staff/ [lu]
- W3C, « W3C leadership transition », https://www.w3.org/press-releases/2026/w3c-leadership-transition/ [résumé/métadonnées seulement]

#### 1.7 Réunions de l'IETF (125/126, et 127 ?)

**(a) Texte actuel** : `gouvernance-technique.astro:184-185` : « Le lieu compte : à la réunion de Shenzhen, en mars 2026, plus d'un tiers des inscrit·es venaient de Chine ; à Montréal et à Vienne, les États-Unis arrivaient en tête. »

**(b) Ce qui a changé** : **l'IETF 127 s'est tenue à San Francisco** du 14 au 20 novembre 2026 (hôte : Verisign).
- Datatracker : **2 132 inscriptions** au total, dont **995 sur place**.
- Par pays : États-Unis 946 (sur place : 604), Chine 170, Allemagne 118, Taïwan 117, Royaume-Uni 96, Canada 70, France 59, Inde 59, Japon 58.
- Les propositions de bilan sont encore marquées « non définitives » (`proceedings_final: false`) : les chiffres peuvent encore bouger un peu.

**(c) Proposition** (mineure) :
> « …à Montréal, à Vienne et à San Francisco (novembre 2026, 946 inscrit·es des États-Unis sur 2 132), les États-Unis arrivaient en tête. »

Ajouter la source « Inscriptions par pays, IETF 127 (San Francisco) » à côté de celles des IETF 124 à 126 (l. 416-418).

**(d) Sources**
- IETF Datatracker, « Statistics for IETF-127 », https://datatracker.ietf.org/stats/meeting/127/country/ [lu] (données JSON de la page)
- IETF Datatracker, API, https://datatracker.ietf.org/api/v1/meeting/meeting/?number=127&format=json [lu] (ville, dates, durée de 7 jours, hôte)

#### 1.8 Instances des serveurs racine

**(a) Texte actuel**
- `src/data/gouvernance.ts:137` : `RACINE_TOTAL = 2048`.
- `src/components/animations/gouvernance/Racine.astro:10` : « … servies par {RACINE_TOTAL} instances dans le monde (état au 8 novembre 2026) ».
- Source à `gouvernance-technique.astro:444`.
- Les textes « plus de 2 000 » et « environ 2 000 » (l. 278 et 314) restent justes.

**(b) Ce qui a changé** : « As of 2026-11-25T09:09:01Z, the root server system consists of **2046** operational instances ». Les chiffres par lettre (champ « Instances » du JSON) sont **identiques** à ceux de `gouvernance.ts:123-135` : A 56, B 6, C 13, D 248, E 355, F 655, G 6, H 12, I 106, J 147, K 169, L 257, M 34.

**(c) Proposition** (mineure) : `RACINE_TOTAL = 2046`. Passer « état au 8 novembre 2026 » à « état au 25 novembre 2026 » dans `Racine.astro:10` et dans le titre de la source l. 444. On peut aussi tout laisser : l'écart est de deux instances.

**(d) Sources**
- Root Server Operators, https://root-servers.org/ [lu] ; JSON par lettre, https://root-servers.org/root/<lettre>/json/ [lu]

---

#### 2. États et régulation

#### 2.1 Omnibus numérique / RGPD

**(a) Texte actuel** : `etats-regulation.astro:120-126` : « Le RGPD bientôt modifié ? (état au 8 novembre 2026) … Le 21 octobre 2026, les gouvernements ont retiré la nouvelle définition, mais gardé le refus des cookies en un clic. Le Parlement n'a pas encore voté. »

**(b) Ce qui a changé** : rien sur le fond.
- La fiche OEIL 2025/0360(COD) indique toujours « Awaiting committee decision ».
- Rapporteures : Aura Salla (PPE, ITRE) et Marina Kaljurand (S&D, LIBE). Projet de rapport du 22 juin 2026 ; amendements déposés le 27 juillet 2026.
- Selon des sites spécialisés [résumés], le vote en commission est attendu début 2027.

**(c) Proposition** : changer seulement la date, « (état au 25 novembre 2026) ». Variante plus précise :
> « Le Parlement n'a pas encore voté : ses commissions examinent près de 1 800 amendements. »

Le chiffre des amendements n'est connu que par des résumés : ne pas le publier sans lecture.

**(d) Sources**
- Parlement européen, OEIL, fiche 2025/0360(COD), https://oeil.europarl.europa.eu/oeil/en/procedure-file/pdf?reference=2025%2F0360%28COD%29 [lu]
- Acompli, « Digital Omnibus GDPR and Cookie Reforms Stall Without a Council Mandate », https://acompli.ie/news/digital-omnibus-gdpr-cookies-status-september-2026/ [résumé/métadonnées seulement]

#### 2.2 Recours contre le Data Privacy Framework (pourvoi C-703/25 P)

**(a) Texte actuel** : `etats-regulation.astro:113-115` : « …le Tribunal de l'UE l'a validé en septembre 2025, et un pourvoi est en cours (état au 8 novembre 2026). »

**(b) Ce qui a changé** : rien trouvé. Aucun arrêt, aucune audience et aucune conclusion d'avocat·e général·e n'ont été repérés.

**(c) Proposition** : changer seulement la date, « (état au 25 novembre 2026) ».

**(d) Sources**
- CURIA, fiche C-703/25, https://curia.europa.eu/juris/liste.jsf?num=C-703/25&language=fr [non trouvé : application JavaScript, contenu non lisible par curl]
- Digital Policy Alert, « Latombe filed appeal… », https://digitalpolicyalert.org/event/35459-latombe-filed-appeal-against-general-court-dismissal-of-challenge-to-european-unionunited-states-data-protection-framework-adequacy-decision-in-latombe-v-commission [résumé/métadonnées seulement]

#### 2.3 Loi française : réseaux sociaux et moins de 15 ans

**(a) Texte actuel** : `etats-regulation.astro:174-178` : « Les moins de 15 ans (état au 8 novembre 2026). … censurée le 14 août 2026 par le Conseil constitutionnel … La Commission européenne a proposé en septembre 2026 un âge minimum de 15 ans pour les services « à risque ». »

**(b) Ce qui a changé**
- Rien de nouveau depuis le 8 novembre : aucun nouveau texte n'a été trouvé, déposé au Parlement.
- Un fait de septembre 2026 manque toutefois à la page. Le 14 septembre 2026, Emmanuel Macron annonce avoir notifié à la Commission européenne une **nouvelle version** du texte :
  - elle ne viserait plus tous les réseaux sociaux, mais ceux qui ont des fonctionnalités jugées nocives ou addictives (défilement infini, notifications la nuit, récompenses du type likes ou vues) ;
  - les 13-15 ans pourraient avoir des dérogations avec l'accord des parents ;
  - le détail n'était pas public.
- Une juriste (Brunessen Bertrand, université de Rennes) estime que la France empiète sur la compétence européenne, puisque le DSA traite déjà de ces fonctionnalités.
- Deux sources indépendantes [lu] : AFP (via DH) et Siècle Digital.

**(c) Proposition**
> « **Les moins de 15 ans (état au 25 novembre 2026).** En France, une loi interdisant les réseaux sociaux aux moins de 15 ans a été censurée le 14 août 2026 par le Conseil constitutionnel : une interdiction générale, sans regarder les contenus ni les risques, et sans que les parents puissent la lever, porte atteinte à la liberté d'expression. En septembre, le gouvernement a soumis à la Commission européenne une nouvelle version, qui viserait les réseaux aux fonctionnalités jugées addictives, avec des dérogations possibles pour les 13-15 ans si les parents l'acceptent ; certain·es juristes jugent que ces règles relèvent déjà du droit européen. La Commission a proposé en septembre 2026 un âge minimum de 15 ans pour les services « à risque ». »

Le dernier membre de phrase reste inchangé, sourcé [lu] dans le dossier.

**(d) Sources**
- AFP, via DH Les Dernières Dépêches, « Ce que l'on sait des nouvelles pistes pour interdire les réseaux sociaux aux ados », 14 sept. 2026, https://www.dhnet.be/dernieres-depeches/2026/09/14/ce-que-lon-sait-des-nouvelles-pistes-pour-interdire-les-reseaux-sociaux-aux-ados-PBBO7ZB7Z5HYFERNJ7IOTUGVMM/ [lu]
- Siècle Digital, « Réseaux sociaux interdits aux moins de 15 ans : Macron pense avoir trouvé la solution », 14 sept. 2026, https://siecledigital.fr/2026/09/14/reseaux-sociaux-interdits-aux-moins-de-15-ans-macron-pense-avoir-trouve-la-solution/ [lu]
- NosParlementaires, « Réseaux sociaux avant 15 ans : deux lois votées, aucune appliquée », 6 sept. 2026, https://nosparlementaires.fr/actualites/reseaux-sociaux-15-ans-deux-lois-zero-application [lu] (aucun texte déposé, pas de calendrier)

#### 2.4 Coupure d'internet en Iran (88 jours)

**(a) Texte actuel** : `etats-regulation.astro:296-298` : « Depuis janvier 2026, il a imposé la plus longue coupure nationale jamais documentée par Freedom House : environ 88 jours d'affilée (état au 8 novembre 2026). »

**(b) Ce qui a changé** : aucune nouvelle coupure nationale n'a été trouvée pour octobre-novembre 2026.
- Selon le dossier [lu], la longue coupure s'est terminée par un retour partiel le 26 mai 2026.
- Selon ACLED (5 juin 2026), l'accès reste lent, de nombreuses plateformes restent bloquées et les VPN sont moins efficaces.
- Défaut de formulation : « Depuis janvier 2026 » laisse croire que la coupure dure encore.

**(c) Proposition**, qui clarifie à partir de faits déjà [lu] dans le dossier (Freedom House, Cloudflare) :
> « En 2026, il a imposé la plus longue coupure nationale jamais documentée par Freedom House : environ 88 jours d'affilée, de fin février à fin mai, après une première coupure de 20 jours en janvier. Depuis, l'accès n'est revenu que partiellement (état au 25 novembre 2026). »

**(d) Sources**
- Freedom House, FOTN 2026, https://freedomhouse.org/report/freedom-net/2026/seismic-shifts-global-internet [lu dans le dossier, non relu le 25 nov.]
- Cloudflare, 27 mai 2026, https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/ [lu dans le dossier, non relu]
- ACLED, « Has Iran really restored internet access? », 5 juin 2026, https://acleddata.com/expert-comment/has-iran-really-restored-internet-access [lu]
- NPR, « Iranians are back online after a monthslong shutdown… », 28 mai 2026, https://www.npr.org/2026/05/28/g-s1-124610/iranians-back-online [résumé/métadonnées seulement]

#### 2.5 Russie

**(a) Texte actuel**
- `src/data/etats.ts:104` : « WhatsApp en Russie (février 2026) … Bloqué ; l'État pousse une messagerie nationale. »
- `etats-regulation.astro:263` : VPN détectés et bloqués (Chine, Russie).
- `etats-regulation.astro:302` : ralentissement de Twitter en 2021.

**(b) Ce qui a changé** : rien de daté d'octobre-novembre 2026 n'a été trouvé. Un fait de 2026 non publié est documenté par deux sources [lu] :
- à partir du 10 février 2026, Roskomnadzor applique à Telegram des « restrictions progressives » ;
- le week-end des 14-15 mars 2026, Telegram devient presque inutilisable dans plusieurs villes ;
- dans certains quartiers de Moscou, l'internet mobile ne laisse passer qu'une **liste blanche** de sites, ce qu'une source de RBC relie à un test des autorités ;
- le Kremlin juge ces coupures mobiles « légales et nécessaires » pour la sécurité ;
- Telegram aurait environ 90 millions d'utilisateur·rices en Russie.

L'état exact de Telegram en novembre 2026 (bloqué ou ralenti) n'est pas établi : les sources se contredisent.

**(c) Proposition** (facultative), à ajouter à `slot="ingenieur"` de l'étape 6, après Twitter :
> « En 2026, la Russie a fait de même avec Telegram, puis a testé un internet mobile limité à une liste blanche de sites ; le Kremlin juge ces restrictions nécessaires à la sécurité. »

Sans « état au », car la situation exacte en novembre est inconnue.

**(d) Sources**
- Meduza, « Russia was expected to block Telegram in April. It appears to have done it two weeks early. », 17 mars 2026, https://meduza.io/en/feature/2026/03/17/russia-was-expected-to-block-telegram-in-april-it-appears-to-have-done-it-two-weeks-early [lu]
- The Moscow Times, « Telegram Outages Reported Across Russia as Block Rumors Swirl », 16 mars 2026, https://www.themoscowtimes.com/2026/03/16/telegram-outages-reported-across-russia-as-block-rumors-swirl-a92233 [lu]
- The Moscow Times, « As Kremlin throttles Telegram… », 6 août 2026, https://www.themoscowtimes.com/2026/08/06/as-kremlin-throttles-telegram-russians-stand-to-lose-more-than-just-messaging [résumé/métadonnées seulement]

#### 2.6 AI Act et son calendrier

**(a) Texte actuel**
- `etats-regulation.astro:191-194` : « …En juillet 2026, l'Union a repoussé ces obligations à fin 2027 et 2028, et ajouté une interdiction : les IA qui fabriquent des images intimes d'une personne sans son consentement, applicable le 2 décembre 2026. »
- `src/data/etats.ts`, `CALENDRIER_IA`.

**(b) Ce qui a changé** : rien. La date du 2 décembre 2026 est confirmée par plusieurs sources, sans report ni nouveau texte. Le règlement (UE) 2026/1744 est déjà [lu] dans le dossier.

**(c) Proposition** : rien à changer. Après le 2 décembre, passer « applicable le 2 décembre 2026 » à « applicable depuis le 2 décembre 2026 ».

**(d) Sources**
- Parlement européen, « AI Act: EP approves simplification measures and "nudifier" app ban », https://www.europarl.europa.eu/news/en/press-room/20260611IPR45207/ai-act-ep-approves-simplification-measures-and-nudifier-app-ban [résumé/métadonnées seulement]
- Recherche presscorner (Commission), 1er-25 nov. 2026 : aucun communiqué sur l'AI Act [lu, via l'API de recherche]

#### 2.7 DSA / DMA : amendes et procédures récentes

**(a) Texte actuel**
- `etats-regulation.astro:147-150` : « Les premières : 120 millions d'euros pour X (décembre 2025), 200 millions pour Temu, 550 millions pour AliExpress (2026)… Google en 2026. »
- `src/data/etats.ts:50-51` : TikTok et Meta, « Constatation préliminaire. État au 8 novembre 2026. »

**(b) Ce qui a changé**
- **Aucune nouvelle amende DSA ou DMA** entre le 8 et le 25 novembre 2026 (recherche dans le presscorner de la Commission).
- Nouveau : le **17 novembre 2026**, constatation préliminaire contre **Temu**, au titre de l'article 35 du DSA. La Commission reproche :
  - des contrôles qui ne vérifient pas la conformité des produits (rapports de test exigés pour « a very small share of products ») ;
  - une modération faible (trop peu de modérateur·rices humain·es) ;
  - des sanctions visant chaque boutique plutôt que le vendeur derrière.
- Temu « respectfully disagrees », selon The Register.
- En octobre 2026, la Commission a approuvé le plan d'action de Temu après l'amende de mai.
- Pour mémoire : le 11 novembre 2026, la Commission a proposé un « Digital Fairness Act » (paquet consommateurs, IP/26/2407). C'est hors périmètre, à signaler seulement.

**(c) Propositions**
- Ajouter une ligne à `GRIEFS` (`etats.ts`) :
  > `{ qui: 'Temu', date: '17 novembre 2026', reproche: 'Des contrôles qui ne vérifient presque jamais la sécurité des produits eux-mêmes, trop peu de modérateur·rices, et des sanctions qui visent une boutique plutôt que le vendeur, qui peut en tenir plusieurs.', issue: 'Constatation préliminaire, après l’amende de mai : Temu conteste et peut répondre avant toute décision. État au 25 novembre 2026.' }`
- Passer TikTok et Meta à « État au 25 novembre 2026 » : aucune décision finale trouvée.

**(d) Sources**
- Commission européenne, IP/26/2463, « Commission preliminarily finds Temu in breach of the Digital Services Act for failure to tackle the sale of illegal products », 17 nov. 2026, https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2463 [lu, texte intégral via l'API presscorner]
- The Register, « Temu's compliance regime is low quality… », 18 nov. 2026, https://theregister.com/legal/2026/11/18/temus-compliance-regime-is-low-quality-fits-badly-and-full-of-holes-says-europe/5310684 [lu] (réponse de Temu)
- Commission, recherche presscorner « Digital Services Act » et « Digital Markets Act », 1er-25 nov. 2026 [lu] : aucune amende

#### 2.8 Neutralité du net / Digital Networks Act

**(a) Texte actuel** : `etats-regulation.astro:233-238` : « …Le débat continue avec un projet de loi européen de 2026 sur les réseaux. »

**(b) Ce qui a changé** : le projet entre dans sa phase parlementaire, très disputée.
- Le 21 octobre 2026, le rapporteur Michał Kobosko (Renew, Pologne, commission ITRE) publie son projet de rapport. Il le présente le 10 novembre ; les amendements sont à déposer avant le 12 novembre. **Vote en commission prévu au premier trimestre 2027.**
- Selon l'Internet Society (3 nov. 2026), le rapport crée une catégorie de « fournisseur de trafic important » (2 % du trafic de pointe) qui devrait négocier son interconnexion avec les opérateurs, avec **décision contraignante du régulateur** en cas d'échec. L'ISOC y voit le « fair share » des grands opérateurs, et un affaiblissement de la neutralité (« paid fast lanes »).
- Côté opérateurs, Connect Europe (grands opérateurs) défend des règles plus simples ; son avis sur l'interconnexion n'a pas été lu.
- Le texte de la Commission (janvier 2026) ne prévoyait qu'une conciliation volontaire [résumé seulement].

**(c) Proposition**
> « Le débat continue avec le projet européen de 2026 sur les réseaux : le rapporteur du Parlement propose qu'un régulateur puisse trancher si une grande plateforme et un opérateur ne s'entendent pas sur l'interconnexion ; l'Internet Society y voit un retour du « fair share » et un risque pour la neutralité, les opérateurs défendent la nécessité d'investir. Vote en commission attendu début 2027 (état au 25 novembre 2026). »

La position des opérateurs sur ce point précis n'a pas été lue (seulement leur argument général sur l'investissement, cf. EU Perspectives). Une variante plus sûre arrête la phrase après « …risque pour la neutralité » et garde l'argument des opérateurs déjà sourcé plus haut dans la page (« fair share »).

**(d) Sources**
- Internet Society (C. Gahnberg), « Digital Networks Act: The European Parliament Must Correct Course », 3 nov. 2026, https://www.internetsociety.org/blog/2026/11/digital-networks-act-the-european-parliament-must-correct-course/ [lu]
- EU Perspectives (J. Soares), « EU telecom reform promises more investment. Industry is split », 2 nov. 2026, https://euperspectives.eu/?p=31086 [lu]
- The European Post, « Digital Networks Act Report Reopens The Network Fee Fight In ITRE », 7 nov. 2026, https://theeuropeanpost.eu/policy-gazette/digital-networks-act-report-reopens-the-network-fee-fight-in-itre/ [lu] (procédure 2026/0013(COD), en attente de décision de commission)
- GSMA, « The ITRE Digital Networks Act draft: progress and pitfalls », https://www.gsma.com/about-us/regions/europe/?p=16783 [non trouvé : erreur 403]

---

#### 3. Se protéger

#### 3.1 Chat Control (règlement CSAM)

**(a) Texte actuel** : `se-proteger.astro:281-285` : « État au 8 novembre 2026 : le projet de règlement européen contre les abus sexuels sur enfants (dit « Chat Control ») n'a pas abouti : selon les comptes rendus des négociations, le désaccord porte sur la détection dans les messages privés. Le régime provisoire, prolongé jusqu'en avril 2028, ne permet que des détections volontaires et exclut les communications chiffrées de bout en bout. »

**(b) Ce qui a changé** : pas d'accord. Une **source primaire** confirme et précise le texte actuel : le document du Conseil WK 15082/2026 du 30 septembre 2026, marqué « LIMITE » mais téléchargeable sur le registre public.
- Au 6e trilogue (29 septembre 2026), un accord de principe est trouvé sur :
  - les injonctions de détection dans les contenus **publics**, limitées aux contenus pédocriminels **déjà connus** « to avoid a general monitoring obligation » ;
  - les recherches du futur Centre européen.
- Le tout reste lié à un accord global.
- Pas d'accord sur les contenus **non publics**. Le Conseil tient aux recherches volontaires (contenus connus, nouveaux, et pédopiégeage). La présidence précise que « end-to-end encrypted content would be excluded from the scope of searches ». Le Parlement veut des injonctions ciblées sur des utilisateur·rices précis et limitées aux contenus connus, en dernier recours.
- Prochain trilogue : « later this year » (Conseil). Patrick Breyer, militant opposé au texte, annonce un 7e trilogue, « peut-être final », le **8 décembre 2026** : source unique et militante.
- La fiche OEIL 2022/0155(COD) indique toujours « Awaiting Parliament's position in 1st reading ».

**(c) Proposition**
> « **État au 25 novembre 2026** : le projet de règlement européen contre les abus sexuels sur enfants (dit « Chat Control ») n'a pas abouti. Selon le Conseil, les négociateur·rices se sont entendu·es en septembre sur la détection dans les contenus publics, limitée aux images déjà connues, mais pas sur les messages privés : les gouvernements veulent permettre aux services de les analyser volontairement, hors chiffrement de bout en bout ; le Parlement n'accepte que des ordres ciblés, en dernier recours. Une nouvelle réunion est prévue en décembre. Le régime provisoire, prolongé jusqu'en avril 2028, ne permet que des détections volontaires et exclut les communications chiffrées de bout en bout. »

« Une nouvelle réunion est prévue en décembre » s'appuie sur deux sources : « later this year » (Conseil) et le 8 décembre (Breyer). Ne pas citer la date exacte.

**(d) Sources**
- Conseil de l'UE, WK 15082/2026 INIT, « Outcome of the trilogue on 29 September 2026 », 30 sept. 2026, https://data.consilium.europa.eu/doc/document/WK-15082-2026-INIT/en/pdf [lu]
- Conseil de l'UE, ST 11501/26, 7 juillet 2026, https://data.consilium.europa.eu/doc/document/ST-11501-2026-INIT/en/pdf [lu] (calendrier du 6e trilogue)
- Parlement européen, OEIL, fiche 2022/0155(COD), https://oeil.europarl.europa.eu/oeil/en/procedure-file/pdf?reference=2022%2F0155%28COD%29 [lu]
- Patrick Breyer, « Chat Control », https://www.patrick-breyer.de/en/posts/chat-control/ [lu, source militante] (7e trilogue le 8 déc. 2026, Coreper le 2 déc.)

#### 3.2 Post-quantique

**(a) Texte actuel** : `se-proteger.astro:233-236` : « …Le NIST a publié en 2024 des algorithmes « post-quantiques », et prévoit d'interdire les anciens après 2035 ; Signal et iMessage les utilisent déjà. »

**(b) Ce qui a changé** : rien trouvé.
- Aucun projet FIPS 206 (FN-DSA) ni FIPS 207 (HQC) n'est publié sur le CSRC : erreurs 404 sur `/pubs/fips/206/ipd`, `/pubs/fips/206/final` et `/pubs/fips/207/ipd`.
- Le NIST IR 8547 final (octobre 2026) est déjà dans le dossier (« Disallowed after 2035 »).

**(c) Proposition** : rien à changer.

**(d) Sources**
- NIST CSRC, https://csrc.nist.gov/pubs/fips/206/ipd, /206/final, /207/ipd [non trouvé : 404, aucune publication à ces adresses]
- Résumés de moteur (fiches d'éditeurs, sans date NIST) [résumé/métadonnées seulement]

#### 3.3 Have I Been Pwned (état au 8 nov.)

**(a) Texte actuel**
- `se-proteger.astro:102-103` : « Le service Have I Been Pwned recense 17,8 milliards de comptes fuités dans 1 049 fuites (état au 8 novembre 2026)… »
- Source à `se-proteger.astro:364`.

**(b) Ce qui a changé** : l'API publique (`/api/v3/breaches`, lue le 25 nov. 2026) donne **1 055 fuites** et **17 863 315 853 comptes**, soit +6 fuites et environ +15,6 millions de comptes. Fuites ajoutées depuis le 8 novembre :
- SberSpasibo (3,29 M), 11 nov. ;
- YouHack (7,16 M), 11 nov. ;
- CastleRAT (0,43 M), 13 nov. ;
- Careers360 (3,61 M), 20 nov. ;
- TooLost (0,72 M), 20 nov. ;
- Bromcom (0,36 M), 23 nov.

**(c) Proposition** :
> « Le service Have I Been Pwned recense 17,9 milliards de comptes fuités dans 1 055 fuites (état au 25 novembre 2026)… »

17,86 s'arrondit à 17,9. Mettre à jour aussi le titre de la source l. 364 (« état au 25 novembre 2026 »).

**(d) Sources**
- Have I Been Pwned, API v3, https://haveibeenpwned.com/api/v3/breaches [lu, total recalculé le 25 nov. 2026]

---

### Synthèse triée

### Changements importants (sourcés [lu])
1. **Chat Control** (`se-proteger.astro:281-285`) : nouvel « état au 25 novembre », appuyé sur le compte rendu du Conseil du 30 sept. 2026. Accord de principe sur les contenus publics (images connues), blocage sur les messages privés, réunion prévue en décembre.
2. **DSA, Temu** (`etats.ts`, `GRIEFS`) : nouvelle constatation préliminaire du 17 nov. 2026 (IP/26/2463). Pas de nouvelle amende DSA ni DMA.
3. **UIT** (`gouvernance-technique.astro:331-335`) : le module ne mentionne pas la réélection de Doreen Bogdan-Martin (12 nov. 2026, 164/173). Une phrase est proposée ; `institutions.ts` est déjà juste.
4. **Moins de 15 ans** (`etats-regulation.astro:174-178`) : ajouter la nouvelle version notifiée à Bruxelles en septembre (fonctionnalités addictives, dérogation parentale pour les 13-15 ans) et la critique juridique. Aucun nouveau texte déposé.
5. **Digital Networks Act** (`etats-regulation.astro:237-238`) : rapport Kobosko (21 oct.), règlement contraignant des différends d'interconnexion contesté par l'ISOC, vote en commission début 2027.

### Changements mineurs
6. **HIBP** (`se-proteger.astro:102`, `:364`) : 17,9 milliards, 1 055 fuites, état au 25 nov.
7. **IETF 127** (`gouvernance-technique.astro:184-185`, sources l. 416-418) : San Francisco, 2 132 inscriptions, dont 946 des États-Unis.
8. **Iran** (`etats-regulation.astro:296-298`) : reformuler « Depuis janvier 2026 », qui laisse croire à une coupure en cours. La coupure de 88 jours s'est terminée fin mai ; aucune nouvelle coupure nationale trouvée.
9. **Russie** (facultatif, `etats-regulation.astro:301-302`) : restrictions de Telegram et liste blanche mobile en 2026 (Meduza et Moscow Times).
10. **Serveurs racine** (`gouvernance.ts:137`, `Racine.astro:10`, source l. 444) : 2 046 instances au lieu de 2 048 ; chiffres par lettre inchangés.
11. **Dates « état au »** à passer au 25 novembre 2026, sans changement de fond :
    - AFRINIC (l. 254) ;
    - FGI (l. 349) ;
    - omnibus/RGPD (l. 120) ;
    - pourvoi DPF (l. 115) ;
    - TikTok et Meta dans `etats.ts:50-51`.
12. **Dossier de sources** : `docs/sources/gouvernance-technique.md:707` (« réélue en octobre 2025 ») doit pointer vers la résolution ICANN du 22 oct. 2026 ; `:1012-1013` et `:1105` (« Ne pas annoncer de résultat ») sont périmés depuis le 12 nov.

### Rien à changer (vérifié)
- Roulement de la KSK : pas de bilan des incidents depuis le 15 oct. ; révocation en janvier 2027.
- ICANN : Tripti Sinha réélue le 22 oct. 2026, confirmé par la résolution ; la page n'en parle pas.
- W3C : Dominique Hazaël-Massieux toujours PDG par intérim.
- AI Act : interdiction des « nudificateurs » toujours applicable le 2 décembre 2026.
- Pourvoi C-703/25 P : toujours pendant, ni audience ni conclusions trouvées.
- Omnibus numérique : pas de vote du Parlement (OEIL : « Awaiting committee decision »).
- DMA : pas de nouvelle décision depuis Google (23 juillet 2026).
- Post-quantique : FIPS 206 et 207 toujours non publiés.
- FGI de Nairobi : du 14 au 18 décembre, confirmé.
