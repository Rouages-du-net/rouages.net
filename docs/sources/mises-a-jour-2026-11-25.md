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

## Partie 2 : intelligence artificielle (procès, règles, surveillance, armes autonomes)

Non publiés faute de source primaire ouverte ou de seconde source : chiffres de l'AIE (site bloqué), appel de Suno (source unique), affaire Nate (inculpation seulement), annonce sur la reconnaissance faciale des manifestant·es (pas de source primaire), nombre d'organisations du recours CNAF.


Périmètre : ia-creer, ia-classer, ia, ia-texte, ia-voir, ia-surveiller, ia-entendre,
ia-predire, ia-decident, ia-agir (+ dossiers `docs/sources/`). Aucun fichier du dépôt
modifié. Requêtes faites avec WebSearch/WebFetch et, en repli, curl avec l'User-Agent
`RouagesDuNet-research/0.1 (https://rouages.net)`.

Statuts : **[lu]** = page ou document ouvert et lu ; **[résumé]** = vu seulement en
extrait de moteur de recherche, métadonnées ou résumé ; **[non trouvé]** = rien trouvé.
Plusieurs sites ont bloqué l'accès (403 : jurist.org, mlex.com, iea.org,
ukstopkillerrobots.org.uk ; page anti-robot : justice.gov) : ils sont marqués [résumé].

---

#### 1. `src/pages/modules/ia-creer.astro`

#### 1.1 Getty Images c. Stability AI (Royaume-Uni) — CHANGEMENT MINEUR

(a) l. 218 : « Getty a perdu l'essentiel en novembre 2025 : selon la juge, le modèle ne
stocke pas les photos. Appel autorisé ; la question de l'entraînement n'a pas été jugée. »

(b) La Cour d'appel (Court of Appeal) a entendu l'appel **mi-novembre 2026**. Aucune
décision n'a été rendue ; un cabinet d'avocats l'attend « au printemps ou à l'été 2027 ».
Getty plaide que le modèle est une « copie contrefaisante » (contrefaçon secondaire),
même s'il ne contient pas les photos. Stability répond que le modèle ne contient « aucune
copie des œuvres » et qu'il n'est pas un « article » qu'on puisse « importer ». Le BPI
(industrie musicale britannique) intervient aux côtés de Getty. Stability n'a pas pu faire
appel sur les marques : ces conclusions sont définitives.

(c) Proposition : « Getty a perdu l'essentiel en novembre 2025 : selon la juge, le modèle
ne stocke pas les photos. La Cour d'appel a entendu l'affaire en novembre 2026 ; décision
attendue en 2027. La question de l'entraînement n'a pas été jugée. »

(d) Sources :
- BCLP, « Key AI appeal court hearing: Getty v Stability AI flags AI model training and use
  conflicts… », 17 nov. 2026 —
  https://www.bclplaw.com/en-US/events-insights-news/key-ai-appeal-court-hearing-getty-v-stability-ai-flags-ai-model-training-and-use-conflicts-and-uk-v-eu-v-us-differences.html — **[lu]**
- MLex, « Getty renews attack on Stability AI as copyright claim reaches UK appeal court »,
  ~12 nov. 2026 — https://www.mlex.com/mlex/articles/2548997 — **[résumé]** (403)
- Judiciary of England and Wales, conclusions écrites de l'appelant (CA-2026-000007),
  nov. 2026 — https://www.judiciary.uk/wp-content/uploads/2026/11/Appellants-Replacement-Appeal-Skeleton--CA-2026-000007-144861071_1.pdf — **[résumé]** (titre et date seulement)

#### 1.2 Kneschke c. LAION (Allemagne) — CHANGEMENT IMPORTANT (date annoncée)

(a) l. 219 : « LAION a gagné en appel (Hambourg, décembre 2025) : constituer le jeu de
données est couvert par les exceptions. Pourvoi autorisé. »

(b) Le pourvoi est pendant devant la **Cour fédérale de justice (BGH)**, n° I ZR 281/25.
L'audience a eu lieu le **3 septembre 2026** ; le BGH annonce sa décision pour le
**17 décembre 2026**. Selon l'association de photographes BFF (partie favorable au
plaignant), le BGH a laissé entendre qu'il **poserait des questions à la Cour de justice
de l'UE** plutôt que de trancher seul. Ce n'est pas encore une décision.

(c) Proposition : « LAION a gagné en appel (Hambourg, décembre 2025) : constituer le jeu
de données est couvert par les exceptions. La Cour fédérale de justice a entendu le
pourvoi en septembre 2026 et rendra sa décision le 17 décembre 2026 (état au 25 novembre
2026). »
→ À revoir **après le 17 décembre 2026** (renvoi probable à la CJUE).

(d) Sources :
- Bundesgerichtshof, « Verkündungstermin am 17. Dezember 2026 … I ZR 281/25 (Erstellen
  eines Datensatzes für KI-Training) (Verhandlung: 3.9.2026) » —
  https://www.bundesgerichtshof.de/SharedDocs/Termine/DE/Termine/IZR281-25.html — **primaire, [lu]**
- BFF, « Kneschke ./. LAION e.V.: Was die Verhandlung vor dem BGH gezeigt hat », sept. 2026 —
  https://bff.de/news/kneschke-laion-e-v-was-die-verhandlung-vor-dem-bgh-gezeigt-hat/ — **[lu]**
  (partie prenante : association de photographes)

#### 1.3 GEMA c. OpenAI (Allemagne) — CHANGEMENT MINEUR

(a) l. 220 : « Le tribunal de Munich a jugé en novembre 2025 que mémoriser des paroles de
chansons dans le modèle est une reproduction non autorisée. »

(b) Le jugement n'est **pas définitif** : un appel est pendant devant la cour d'appel
(OLG) de Munich, n° 6 U 3662/25 e. Pas de date d'audience trouvée.

(c) Proposition : « Le tribunal de Munich a jugé en novembre 2025 que mémoriser des
paroles de chansons dans le modèle est une reproduction non autorisée. OpenAI a fait
appel (état au 25 novembre 2026). »

(d) Sources :
- Bayern.Recht (base officielle de jurisprudence bavaroise), LG München I, 11.11.2025,
  42 O 14139/24, rubrique « Rechtsmittelinstanz : OLG München … 6 U 3662/25 e » —
  https://www.gesetze-bayern.de/Content/Document/Y-300-Z-GRURRS-B-2025-N-30204 — **primaire, [lu]**
- Lausen Rechtsanwälte, « GEMA gegen Suno: Was das Münchner KI-Urteil … bedeutet »,
  30 sept. 2026 (tableau des procédures ouvertes) —
  https://lausen.com/gema-gegen-suno-was-das-muenchner-ki-urteil-fuer-die-vier-nutzungsphasen-von-ki-modellen-bedeutet/ — **[lu]**

#### 1.4 GEMA c. Suno (texte, l. 161-163) — CHANGEMENT MINEUR

(a) l. 162-163 : « … la société d'auteurs GEMA a gagné en première instance contre Suno en
juillet 2026 ; Suno conteste et envisage un appel. »

(b) Un appel est **pendant** devant l'OLG de Munich (n° 6 U 2314/26 e), selon un cabinet
d'avocats (une seule source ; confirmation officielle non trouvée). Aux États-Unis,
Universal et Sony poursuivent toujours Suno ; Suno a demandé le 30 octobre 2026 de
suspendre la seconde plainte (non tranché) — détail sans effet sur la phrase actuelle.

(c) Proposition prudente (une seule source) : « … gagné en première instance contre Suno
en juillet 2026 ; Suno a fait appel. » — ou garder la phrase actuelle si l'on veut deux
sources.

(d) Sources :
- Lausen Rechtsanwälte, 30 sept. 2026 (voir ci-dessus) — **[lu]**
- Music Business Worldwide, « Universal and Sony fight Suno's bid to freeze second
  lawsuit… », nov. 2026 —
  https://www.musicbusinessworldwide.com/universal-and-sony-fight-sunos-bid-to-freeze-second-lawsuit-warning-its-latest-ai-models-could-escape-scrutiny-until-at-least-2028/ — **[résumé]**

#### 1.5 *New York Times* c. OpenAI et Microsoft — CHANGEMENT MINEUR

(a) l. 222 : « En cours. Le journal parle de copie massive ; les entreprises, d'usage loyal.
Le ministère de la Justice a soutenu OpenAI en septembre 2026 (avis non contraignant). »

(b) Toutes les parties de la procédure regroupée (*In re OpenAI Copyright Infringement
Litigation*, S.D.N.Y., 25-md-3143) ont déposé début septembre 2026 des **demandes de
jugement sommaire** (décision sans procès) ; mémoires en réplique en novembre. Le
12 novembre 2026, le juge Stein a autorisé les éditeurs de presse à déposer, au plus tard
le 25 novembre, une demande complémentaire sur les réponses du chatbot (« grounding and
output ») ; échanges jusqu'au 18 décembre. **Aucune décision sur le fond.** Une demande de
sanctions contre OpenAI (pour obstruction présumée) est pendante.

(c) Proposition : « En cours. Le journal parle de copie massive ; les entreprises, d'usage
loyal. Les deux camps ont demandé au juge de trancher sans procès (septembre 2026) ;
décision attendue en 2027 au plus tôt. Le ministère de la Justice a soutenu OpenAI
(avis non contraignant). »
Remarque : « en 2027 au plus tôt » est une déduction (échanges jusqu'au 18 déc. 2026) ;
on peut écrire simplement « pas de décision au 25 novembre 2026 ».

(d) Sources :
- Merit AC News, « NYT, Authors Guild, OpenAI and Microsoft all move for summary judgment
  in consolidated copyright case », 13 sept. 2026 —
  https://usemeritai.com/news/nyt-openai-copyright-summary-judgment-motions — **[lu]**
- FourWeekMBA, « NYT Has Until 25 Nov to Press 2 ChatGPT Claims, Judge Rules »,
  22 nov. 2026 (cite l'ordonnance Dkt. 2518 sur CourtListener) —
  https://fourweekmba.com/ai-nyt-has-until-25-nov-to-press-2-chatgpt-claims-judge-rules/ — **[lu]**
  (l'ordonnance elle-même n'a pas été ouverte)

#### 1.6 Andersen c. Stability AI, Midjourney… — RIEN À CHANGER

(a) l. 221 : « Procédure en cours ; audience sur le fond repoussée à février 2027. »
(b) Audience sur les jugements sommaires toujours fixée au 17 février 2027 ; dépôts des
demandes au 11 novembre 2026. Rien de nouveau qui contredise la phrase.
(d) ChatGPT Is Eating the World, 3 févr. 2026 (déjà cité par la page) — **[résumé]** ;
CourtListener, ordonnance de calendrier (gov.uscourts.cand.407208) — **[résumé]**.

#### 1.7 Thaler c. Copyright Office — RIEN À CHANGER

(a) l. 217. (b) Cour suprême : certiorari refusé le 2 mars 2026 — conforme.
(d) SCOTUSblog, dossier n° 25-449 — https://www.scotusblog.com/cases/case-files/thaler-v-perlmutter — **[résumé]**.

#### 1.8 NOUVELLE LIGNE PROPOSÉE : Like Company c. Google (Cour de justice de l'UE) — CHANGEMENT IMPORTANT

(a) Absent du tableau (l. 214-224) et des dossiers `docs/sources/` (grep « C-250 » : rien).

(b) Première affaire « IA générative et droit d'auteur » devant la **Cour de justice de
l'UE** (C-250/25, renvoi d'un tribunal hongrois ; un éditeur de presse hongrois contre
Google et son chatbot Gemini). Le **3 novembre 2026**, le premier avocat général Maciej
Szpunar a rendu ses conclusions :
- il propose de déclarer **irrecevables** les questions sur l'**entraînement** des modèles
  (aucune preuve que les articles du plaignant aient servi à entraîner le modèle) ;
- un chatbot qui va chercher un article de presse en direct pour répondre peut
  **reproduire** l'article au sens du droit voisin des éditeurs de presse s'il y accède
  illégalement (en contournant une protection) **ou** si sa réponse reprend la forme de
  l'article au point que le lecteur n'a plus besoin de lire l'original ;
- ces actes sont imputables au fournisseur si c'est inhérent à son modèle économique ou
  s'il n'a pas pris de mesures raisonnables pour les empêcher.
Ces conclusions **ne lient pas** la Cour ; l'arrêt est attendu plus tard.
Position de Google (d'après un commentaire de l'audience) : chaque droit doit être examiné
séparément, la réponse n'est pas une copie de l'entraînement. Côté ayants droit : le
Parlement européen a adopté le 10 mars 2026 une résolution non contraignante (rapport
Voss) jugeant le droit actuel insuffisant pour les licences.

(c) Proposition de ligne : « Like Company contre Google (Union européenne) | Premier dossier
sur l'IA générative devant la Cour de justice de l'UE. L'avocat général estime
(3 novembre 2026, avis non contraignant) qu'un chatbot qui reprend un article de presse
au point de dispenser de lire l'original peut violer les droits de l'éditeur ; il écarte
les questions sur l'entraînement. Arrêt attendu. »

(d) Sources :
- Cour de justice de l'UE, *Conclusions de l'avocat général M. Szpunar présentées le
  3 novembre 2026, affaire C-250/25, Like Company c. Google Ireland* (texte intégral,
  PDF hébergé par Courthouse News) —
  https://courthousenews.com/wp-content/uploads/2026/11/like-company-v-google-ireland-limited-cjeu-ag-opinion.pdf — **primaire, [lu]** (conclusions, point 240)
- Curia, « Opinion: Case C-250/25 Like Company » —
  https://curia.europa.eu/site/jcms/p1_1000088866/en/ — **primaire, [lu]** (date et objet)
- IE-Forum (A. Guadamuz), « An end to the input-output dichotomy in AI copyright? Like
  Company v Google takes an unexpected turn », 24 mars 2026 (compte rendu d'audience) —
  https://ie-forum.nl/artikelen/an-end-to-the-input-output-dichotomy-in-ai-copyright-like-company-v-google-takes-an-unexpected-turn — **[lu]**
- Parlement européen, résolution du 10 mars 2026 « Copyright and generative AI »
  (TA-10-2026-0066) — https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1891581 — **[résumé]**
  (ne pas publier sans l'ouvrir)

#### 1.9 Règles européennes (l. 226-232 et 257-261) — RIEN À CHANGER, AJOUT POSSIBLE

(a) l. 230-232 : « Depuis le 2 août 2025, le règlement européen sur l'IA oblige les
fournisseurs de grands modèles à respecter les oppositions… » ; l. 257-261 : « … à partir
du 2 août 2026 … marqués … (jusqu'au 2 décembre 2026 pour les systèmes déjà sur le
marché) … code de bonnes pratiques publié en juin 2026 … »

(b) Vérifié dans la version consolidée (27 juillet 2026) : art. 113 (application générale
au 2 août 2026) et art. 111 § 4 (systèmes génératifs mis sur le marché avant le 2 août
2026 : conformité à l'art. 50 § 2 « d'ici au 2 décembre 2026 »). **Exact.** Lignes
directrices finales de la Commission sur l'article 50 publiées le 20 juillet 2026 [résumé].
**Ajout possible** : l'omnibus a créé de **nouvelles interdictions applicables le
2 décembre 2026** (art. 5 § 1 b bis et b ter) : systèmes qui fabriquent des images, vidéos
ou sons réalistes montrant les parties intimes ou des actes sexuels d'une personne
identifiable sans son accord, et contenus pédocriminels. La page `etats-regulation.astro`
(l. 194) le dit déjà ; ia-creer pourrait y renvoyer.

(c) Proposition d'ajout (fin du § l. 261) : « Depuis le 2 décembre 2026, il interdit aussi
les IA qui fabriquent des images intimes d'une personne sans son consentement. » —
**ne publier qu'après le 2 décembre 2026**, ou écrire « À partir du 2 décembre 2026 ».

(d) Sources :
- Commission européenne (AI Act Service Desk), article 113 consolidé —
  https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-113 — **primaire, [lu]**
- Idem, article 111 — https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-111 — **primaire, [lu]**
- Idem, article 5 — https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-5 — **primaire, [lu]**
- Commission, FAQ « Transparency obligations under Article 50 AI Act » —
  https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act — **[résumé]**

#### 1.10 Légende du tableau

(a) l. 214 : « Quelques affaires (état au 16 octobre 2026) » → « (état au 25 novembre 2026) »
si les lignes ci-dessus sont mises à jour ; idem `MiseAJour` l. 29 et `verifie` l. 265.

---

#### 2. Calendrier de l'AI Act : `ia-classer.astro`, `ia-texte.astro`, `ia-surveiller.astro`, `ia-decident.astro` — RIEN À CHANGER

(a)
- ia-classer.astro l. 273-275 : « … parmi les systèmes à haut risque ; leurs obligations
  s'appliquent à partir du 2 décembre 2027. »
- ia-texte.astro l. 367-372 : « … En 2026, un règlement de simplification a repoussé à 2027
  et 2028 les règles sur les systèmes « à haut risque ». »
- ia-surveiller.astro l. 177-180 : « Après une modification adoptée en 2026, les
  obligations de ceux de l'annexe III … s'appliqueront à partir du 2 décembre 2027 »
- ia-decident.astro l. 194 : « … elles s'appliqueront à partir du 2 décembre 2027. »

(b) Version consolidée au 27 juillet 2026 : annexe III au **2 décembre 2027**, annexe I au
**2 août 2028** ; aucune nouvelle modification trouvée depuis. La Commission avait publié
en mai 2026 un **projet** de lignes directrices sur le haut risque, après avoir manqué
l'échéance de février [résumé] — pas nécessaire pour ces pages.

(c) Aucune reformulation ; seulement mettre à jour la date de vérification si on retouche
les pages.

(d) AI Act Service Desk, article 113 (ci-dessus) — **primaire, [lu]** ; IAPP, « European
Commission delivers draft high-risk AI guidelines after delays » —
https://iapp.org/news/a/european-commission-delivers-draft-high-risk-ai-guidelines-after-delays — **[résumé]**.

---

#### 3. `src/pages/modules/ia-texte.astro` — chiffres de l'énergie — CHANGEMENT MINEUR

(a) l. 383-386 : « Selon l'Agence internationale de l'énergie, les centres de données … ont
consommé environ 415 TWh d'électricité en 2024, environ 1,5 % de l'électricité mondiale ;
elle en prévoit environ 945 TWh en 2030, l'IA étant le premier moteur de la hausse. »

(b) L'AIE a publié en avril 2026 une mise à jour (*Key Questions on Energy and AI*) :
**environ 485 TWh en 2025** (+17 % en un an ; +50 % pour les centres dédiés à l'IA) et
**environ 950 TWh en 2030** (environ 3 % de la demande mondiale). La phrase actuelle reste
exacte pour 2024, mais n'est plus la plus récente.

(c) Proposition : « Selon l'Agence internationale de l'énergie, les centres de données
(pour l'IA et tout le reste) ont consommé environ 485 TWh d'électricité en 2025, 17 % de
plus qu'en 2024 ; elle en prévoit environ 950 TWh en 2030, soit près de 3 % de
l'électricité mondiale, l'IA étant le premier moteur de la hausse. »

(d) Sources :
- D. D'Ambrosio (analyste à l'AIE), « Data centers from every angle: AIE's opinion »,
  RiEnergia, 18 juin 2026 —
  https://rienergia.staffettaonline.com/articolo/35985/Data+centers+from+every+angle:+AIEs+Opinion/DAmbrosio — **[lu]** (485 TWh, 17 %, 950 TWh, ~3 %)
- Rigzone, « Data Center Electricity Use Surges », 20 avr. 2026 (reprend le communiqué de
  l'AIE) — https://www.rigzone.com/news/data_center_electricity_use_surges-20-apr-2026-183486-article/ — **[lu]** (17 %, doublement d'ici 2030)
- AIE, *Key Questions on Energy and AI*, résumé —
  https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary — **[résumé]** (403 ; à ouvrir avant publication pour citer la source primaire)
- AIE, communiqué « Data centre electricity use surged in 2025… » —
  https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions — **[résumé]** (403)

Les autres chiffres de ia-texte (GPT-2, GPT-3, Llama 3) sont historiques : rien à changer.

---

#### 4. `src/pages/modules/ia.astro` — « AI washing » — RIEN À CHANGER, AJOUT POSSIBLE

(a) l. 117-124 : « … En mars 2024, le gendarme boursier américain a poursuivi deux sociétés
de conseil … 400 000 dollars au total ; en septembre 2024, l'autorité américaine de
protection des consommateurs a lancé cinq actions … « le premier avocat robot du monde ». »

(b) Toujours exact. Pas de nouvelle sanction de la SEC pour « AI washing » trouvée en
2026 ; en octobre 2026 son directeur de l'exécution a dit surveiller les déclarations des
sociétés cotées sur l'IA [résumé]. Exemple plus parlant, **non encore jugé** : en avril
2025, la justice et la SEC américaines ont poursuivi le fondateur de l'application d'achat
Nate, accusé d'avoir présenté comme automatique par IA un service en réalité assuré par
des centaines de personnes dans un centre d'appels aux Philippines (taux d'automatisation
« effectivement nul » selon l'accusation). Il plaide non coupable ; pas de procès ni de
verdict au 25 novembre 2026.

(c) Ajout possible (présomption d'innocence explicite) : « En avril 2025, le fondateur de
l'application Nate a été inculpé aux États-Unis : selon l'accusation, les achats
« automatiques » de son appli étaient faits à la main par des employé·es d'un centre
d'appels aux Philippines. Il plaide non coupable (procès non tenu au 25 novembre 2026). »
Ne pas nommer la personne (règle sur les données personnelles : inutile ici).

(d) Sources :
- Quinn Emanuel, « The First Real Test: What Saniger Means for AI Disclosure Fraud »,
  juin 2026 —
  https://www.quinnemanuel.com/the-firm/publications/client-alert-the-first-real-test-what-saniger-means-for-ai-disclosure-fraud/ — **[lu]** (statut de la procédure)
- TechCrunch, « Fintech founder charged with fraud after 'AI' shopping app found to be
  powered by humans in the Philippines », 10 avr. 2025 —
  https://techcrunch.com/2025/04/10/fintech-founder-charged-with-fraud-after-ai-shopping-app-found-to-be-powered-by-humans-in-the-philippines — **[lu]**
- U.S. Attorney's Office SDNY, « Tech CEO Charged In Artificial Intelligence Investment
  Fraud Scheme », 9 avr. 2025 —
  https://www.justice.gov/usao-sdny/pr/tech-ceo-charged-artificial-intelligence-investment-fraud-scheme — **[résumé]** (page anti-robot ; à ouvrir dans un navigateur avant publication)
- Cleary Gottlieb, « The SEC and AI Disclosures: Potential Enforcement on the Horizon »,
  nov. 2026 — https://www.clearygottlieb.com/news-and-insights/publication-listing/the-sec-and-ai-disclosures-potential-enforcement-on-the-horizon — **[résumé]**

---

#### 5. `src/pages/modules/ia-voir.astro` — reconnaissance faciale, VSA

#### 5.1 Reconduction de la VSA (l. 216-224) — RIEN À CHANGER sur la date, AJOUT IMPORTANT (Conseil d'État, Nice)

(a) l. 219-220 : « Le Conseil constitutionnel a validé en mars 2026 sa reconduction jusqu'au
31 décembre 2027. »

(b) Date inchangée (aucune nouvelle loi votée). **Absent de la page et des dossiers** :
le **Conseil d'État a jugé le 30 janvier 2026** (n° 506370) qu'en dehors de
l'expérimentation, la loi **n'autorise pas** l'analyse algorithmique des images de
vidéosurveillance de la voie publique. Nice voulait repérer automatiquement les voitures
mal garées devant les écoles ; la CNIL avait dit non (mai 2025) ; le Conseil d'État lui
donne raison. Le maire de Nice a critiqué une décision qui empêche, selon lui, de sécuriser
les abords des écoles [résumé].

(c) Proposition (après la phrase l. 219-220) : « Hors de cette expérimentation, ces
logiciels restent interdits sur la voie publique : en janvier 2026, le Conseil d'État a
donné raison à la CNIL contre la ville de Nice, qui voulait repérer automatiquement les
voitures mal garées devant les écoles. »

(d) Sources :
- Conseil d'État, « Nice : le traitement algorithmique des images de vidéosurveillance de
  la voie publique n'est, en l'état actuel de la loi, pas autorisé », 30 janv. 2026 —
  https://conseil-etat.fr/actualites/nice-le-traitement-algorithmique-des-images-de-videosurveillance-de-la-voie-publique-n-est-en-l-etat-actuel-de-la-loi-pas-autorise — **primaire, [lu]**
- Conseil d'État, décision n° 506370 du 30 janvier 2026 —
  https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2026-01-30/506370 — **[résumé]**
- Banque des Territoires, « Vidéosurveillance algorithmique à l'entrée des écoles à Nice : le
  Conseil d'État confirme l'interdiction » —
  https://www.banquedesterritoires.fr/videosurveillance-algorithmique-lentree-des-ecoles-nice-le-conseil-detat-confirme-linterdiction — **[résumé]** (réaction du maire)

#### 5.2 Annonce sur la reconnaissance faciale des manifestant·es — À SURVEILLER (pas de changement proposé)

(b) Selon deux sources (une association opposée, un média), Gérald Darmanin a dit sur TF1
le 19 octobre 2026 vouloir utiliser la reconnaissance faciale sur le fichier TAJ pour
identifier des participant·es au mouvement social à partir d'images des réseaux sociaux.
La Quadrature du Net y voit surtout un « effet d'annonce » [résumé]. **Aucun texte
juridique** n'est cité ; la déclaration primaire (TF1) n'a pas été vue. Ne rien publier
avant d'avoir la source primaire et la position du ministère.

(d) La Quadrature du Net, « Pourquoi nous sommes contre la reconnaissance faciale »,
2 nov. 2026 — https://www.laquadrature.net/2026/11/02/pourquoi-nous-sommes-contre-la-reconnaissance-faciale/ — **[lu]** (partie opposée) ;
Plurielle.info, « Reconnaissance faciale : après les manifestations, nos visages dans le
viseur de la police ? », 15 nov. 2026 —
https://plurielle.info/reconnaissance-faciale-apres-les-manifestations-nos-visages-dans-le-viseur-de-la-police/ — **[lu]**.

#### 5.3 CNIL — RIEN DE NOUVEAU

Aucune nouvelle sanction de la CNIL sur la reconnaissance faciale trouvée depuis octobre
2026 (communiqués de novembre 2026 : sanctions sur la cybersécurité des collectivités et
procédure simplifiée). Sources : cnil.fr, « La CNIL a prononcé 38 nouvelles sanctions en
procédure simplifiée depuis juin 2026 » — https://cnil.fr/fr/node/169161 — **[résumé]**.

---

#### 6. `src/pages/modules/ia-surveiller.astro` — VSA — CHANGEMENT MINEUR

(a) l. 136-142 : « Les avis restent opposés. Une proposition de loi sénatoriale de décembre
2025 s'appuie sur ce bilan … pour autoriser durablement ces traitements dans les
transports. … État au 1ᵉʳ novembre 2026. »

(b) Rien n'a été voté depuis : la proposition « transports » (Sénat n° 221) n'a pas avancé
(page mise à jour en juin 2026). Deux autres textes **en cours**, absents de la page :
- **Commerces** : l'Assemblée nationale a adopté le **16 février 2026**, en première lecture,
  une proposition de loi qui permettrait aux commerces à fort risque de vol d'analyser
  automatiquement leurs images **jusqu'au 31 décembre 2027**, **sans reconnaissance faciale**
  ni identification biométrique, après avis de la CNIL et autorisation du préfet. Elle
  attend l'examen du Sénat (n° 402). Des député·es opposé·es estiment qu'elle dépasse le
  cadre fixé par le Conseil constitutionnel en 2023 (qui excluait les simples atteintes aux
  biens) [résumé].
- **Généralisation** : une proposition sénatoriale du **12 mai 2026** (n° 609) vise à
  « généraliser la vidéoprotection algorithmique » ; non examinée (page mise à jour le
  19 nov. 2026).
Le Conseil d'État (Nice, 30 janv. 2026) : voir § 5.1.

(c) Proposition : « Les avis restent opposés. Plusieurs propositions de loi veulent aller
plus loin : l'une, au Sénat (décembre 2025), pour les transports ; une autre, adoptée par
l'Assemblée nationale en février 2026, pour les commerces, sans reconnaissance faciale ;
une troisième (mai 2026) pour la généraliser. Aucune n'est définitivement votée au
25 novembre 2026. [suite inchangée : Défenseure des droits, Amnesty…] État au 25 novembre
2026. »

(d) Sources :
- Sénat, PPL n° 402 (2025-2026) « … outils d'analyse vidéo automatique pour lutter contre
  le vol », transmise le 16 févr. 2026 — https://www.senat.fr/leg/ppl25-402.html — **primaire, [lu]**
- Sénat, dossier PPL n° 609 « Généraliser la vidéoprotection algorithmique » —
  https://www.senat.fr/dossier-legislatif/ppl25-609.html — **primaire, [lu]**
- Sénat, dossier PPL n° 221 (transports) —
  https://www.senat.fr/dossier-legislatif/ppl25-221.html — **primaire, [lu]**
- Assemblée nationale, texte adopté n° 239 (16 févr. 2026) —
  https://www.assemblee-nationale.fr/dyn/17/textes/l17t0239_texte-adopte-provisoire — **[résumé]** (PDF illisible par l'outil)

l. 120-133 (historique de l'expérimentation, reconduction au 31 décembre 2027, rapport au
30 septembre 2027) : **rien à changer**.

---

#### 7. `src/pages/modules/ia-entendre.astro` — voix de synthèse — RIEN À CHANGER, AJOUT POSSIBLE

(a) l. 250-261 : FCC (février 2024), amende de 6 M$, acquittement de 2025 ; « En Europe, le
règlement sur l'IA impose, à partir du 2 août 2026, d'indiquer qu'un « hypertrucage » audio
ou vidéo a été « généré ou manipulé par une IA » … »

(b) Exact (art. 50 applicable au 2 août 2026, voir § 1.9). Nouveautés **en cours**, non
adoptées :
- **Danemark** : la ministre de la Culture a déposé le **8 octobre 2026** un projet de loi
  interdisant de diffuser sans consentement des imitations réalistes du **visage et de la
  voix** d'une personne, avec exceptions pour la satire, la parodie et la critique ;
  entrée en vigueur visée début 2027.
- **États-Unis** : le *NO FAKES Act*, redéposé le 20 mai 2026, créerait un droit fédéral
  sur sa voix et son image face aux répliques numériques ; adopté à l'unanimité par la
  commission judiciaire du Sénat le 18 juin 2026, pas encore voté en séance. Soutenu par
  l'industrie musicale et le syndicat d'acteurs SAG-AFTRA ; l'EFF estime qu'il pousserait
  les plateformes à retirer satire, commentaire et information par précaution.

(c) Ajout possible : « D'autres pays préparent des règles sur les voix imitées. Au
Danemark, un projet de loi (octobre 2026) interdirait de diffuser sans accord une imitation
réaliste du visage ou de la voix de quelqu'un, sauf satire ou parodie. Aux États-Unis, le
projet NO FAKES, soutenu par l'industrie musicale, est critiqué par des défenseur·ses de la
liberté d'expression qui craignent des retraits abusifs. Aucun des deux n'est adopté au
25 novembre 2026. »

(d) Sources :
- Euronews, « Denmark introduces a bill protecting people's faces and voices from
  deepfakes », 8 oct. 2026 —
  https://www.euronews.com/2026/10/08/denmark-introduces-a-bill-protecting-peoples-faces-and-voices-from-deepfakes — **[lu]**
- Commission européenne (IP Helpdesk), « Denmark's proposed copyright rules on deepfakes »,
  1ᵉʳ juin 2026 — https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/denmarks-proposed-copyright-rules-deepfakes-2026-06-01_en — **[résumé]**
- Sénatrice M. Blackburn (co-autrice), « … Bill to Protect Individuals and Creators from
  Deepfakes Passes Senate Judiciary Committee », 18 juin 2026 —
  https://www.blackburn.senate.gov/2026/6/blackburn-coons-bipartisan-bill-to-protect-individuals-and-creators-from-deepfakes-passes-senate-judiciary-committee — **primaire (partie favorable), [lu]**
- EFF, « NO FAKES Act Could Silence Satire, Commentary, and News », 17 juin 2026 —
  https://www.eff.org/deeplinks/2026/06/no-fakes-act-could-silence-satire-commentary-and-news — **[lu]** (partie opposée)
- Texte S.4591 (119ᵉ Congrès) — https://www.govinfo.gov/content/pkg/BILLS-119s4591is/xhtml/BILLS-119s4591is.html — **[résumé]**

---

#### 8. `src/pages/modules/ia-predire.astro` — police prédictive — RIEN À CHANGER

(a) l. 221-224 : « État au 1ᵉʳ novembre 2026 : depuis le 2 février 2025, le règlement
européen sur l'IA interdit les systèmes qui évaluent le risque qu'une personne commette une
infraction « uniquement sur la base du profilage » … elle ne mentionne pas les prévisions
par lieux. »

(b) Aucun changement trouvé (art. 5 inchangé sur ce point dans la version consolidée ;
aucune loi française nouvelle sur la police prédictive trouvée — seules des sources
secondaires de faible qualité évoquent le sujet).

(d) AI Act Service Desk, article 5 — https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-5 — **[lu]** ;
recherche « police prédictive France loi 2026 » — **[non trouvé]**.

---

#### 9. `src/pages/modules/ia-decident.astro` — recours CNAF — RIEN À CHANGER (date seulement)

(a) l. 162-168 : « … État au 29 octobre 2026 : aucune décision du Conseil d'État n'a été
trouvée sur le recours. »

(b) Toujours **aucune décision trouvée** (requête n° 498440). Les associations attendaient
une audience « au printemps » 2026 et demandent un renvoi à la Cour de justice de l'UE ;
aucune audience ni conclusion du rapporteur public trouvée. Le site de La Quadrature du Net
(liste des articles d'octobre-novembre 2026) ne mentionne pas de décision ; il annonce le
12 novembre 2026 un **autre** recours, contre la collaboration entre police et
administrations sociales (contrôles CAF demandés par la police) — sujet voisin, une seule
source associative, ne pas publier en l'état.

(c) Remplacer seulement la date : « État au 25 novembre 2026 : aucune décision du Conseil
d'État n'a été trouvée sur le recours. »

(d) Sources :
- La Quadrature du Net, page d'accueil (articles d'oct.-nov. 2026) — https://www.laquadrature.net/ — **[lu]**
- La Quadrature du Net, « CNAF's discriminatory scoring algorithm: 10 new organisations
  join the case… », 20 janv. 2026 —
  https://www.laquadrature.net/en/2026/01/20/cnafs-discriminatory-scoring-algorithm-10-new-organisations-join-the-case-before-the-conseil-detat-in-france/ — **[résumé]**
- La Quadrature du Net, observations n° 498440 (févr. 2026) —
  https://www.laquadrature.net/wp-content/uploads/sites/8/2026/02/08_LQDN_Cnaf_Observations.pdf — **[résumé]**
- Recherche « 498440 » sur conseil-etat.fr (ArianeWeb) — **[non trouvé]**

À noter pour le texte (l. 155-159) : la coalition compte **25 organisations** depuis
janvier 2026 (15 au départ) [résumé ; à vérifier avant d'ajouter].

---

#### 10. `src/pages/modules/ia-agir.astro`

#### 10.1 Armes autonomes : CCW — CHANGEMENT IMPORTANT

(a) l. 197-200 : « … En décembre 2025, une nouvelle résolution recueille 164 voix pour,
6 contre (dont les États-Unis, la Russie et Israël) et 7 abstentions. État au
1ᵉʳ novembre 2026 : aucun traité ne les interdit. »

(b) La **7ᵉ conférence d'examen de la Convention sur certaines armes classiques (CCW)**
s'est tenue à Genève du 16 au 20 novembre 2026 (fin dans la nuit du 20 au 21). Les États
**n'ont pas lancé de négociations** d'un traité contraignant, contrairement à l'objectif
fixé par le secrétaire général de l'ONU pour 2026. Ils ont adopté sans objection un
**nouveau mandat pour le groupe d'experts gouvernementaux** : environ **deux ans** pour
« élaborer » un instrument et recommander sa forme (protocole contraignant ou non),
soit vers 2028. Une proposition de sept États (Brésil, Autriche, Belgique, Irlande,
Mexique, Nouvelle-Zélande, Panama) pour ouvrir des négociations n'a pas abouti. Points de
vue :
- Izumi Nakamitsu (Haute Représentante de l'ONU pour le désarmement) : une « avancée
  importante » ; la voie vers un instrument contraignant « reste ouverte » ;
- le président de la conférence : la CCW reste un forum « indispensable », mais le mandat
  « ne compense pas entièrement » l'examen de la convention, qui n'a pas pu avoir lieu
  faute d'accord procédural ;
- le CICR : la conférence n'a pas obtenu de mandat de négociation « clair et immédiat » ;
  « une occasion a été manquée » ;
- Stop Killer Robots : un mandat « édulcoré » ; les ONG attribuent le blocage surtout à la
  Russie et, dans une moindre mesure, aux États-Unis, qui préféraient un texte non
  contraignant (la Russie estime que le droit humanitaire existant suffit) [résumé pour ce
  dernier point].
Assemblée générale 2026 : un nouveau projet de résolution (A/C.1/81/L.37) a été présenté
en Première Commission ; résultat du vote **non trouvé** ; vote en plénière attendu
début décembre.

(c) Proposition : « … En décembre 2025, une nouvelle résolution recueille 164 voix pour,
6 contre (dont les États-Unis, la Russie et Israël) et 7 abstentions. En novembre 2026, à
Genève, les États parties à la Convention sur certaines armes classiques renoncent à
ouvrir des négociations : ils se donnent deux ans de plus pour préparer un texte, sans
décider s'il sera contraignant. L'ONU y voit une « avancée importante », le CICR « une
occasion manquée ». État au 25 novembre 2026 : aucun traité ne les interdit. »

(d) Sources :
- ONU, transcription automatique de la 11ᵉ séance de la 7ᵉ conférence d'examen de la CCW,
  20 nov. 2026 — https://transcripts.un.org/en/asset/k1g/k1g52399ip — **primaire, [lu]**
  (transcription non officielle : adoption de la décision 1 sur le groupe d'experts, propos
  du président)
- Associated Press, repris par Daily News Egypt Africa, « UN killer robots talks put off
  binding AI weapons rules until 2028 », 21-22 nov. 2026 —
  https://africa.dailynewsegypt.com/un-killer-robots-talks-2028/ — **[lu]**
- MENAFN, « UN Notes Progress on AI Weapons Rules as Treaty Efforts Stall », 22 nov. 2026
  (citations de I. Nakamitsu et du CICR) —
  https://menafn.com/1112002542/UN-Notes-Progress-on-AI-Weapons-Rules-as-Treaty-Efforts-Stall — **[lu]**
- ONU Genève, annonce de la 7ᵉ conférence d'examen (16-20 nov. 2026) —
  https://www.ungeneva.org/en/news-media/press-release/2026/11/seventh-review-conference-high-contracting-parties-convention — **[résumé]**
- JURIST, « UN arms conference falls short of treaty mandate on autonomous weapons due to US
  and Russia opposition », nov. 2026 — https://www.jurist.org/news/2026/11/un-arms-conference-falls-short-of-treaty-mandate-on-autonomous-weapons-due-to-us-and-russia-opposition/ — **[résumé]** (403)
- Nouvelle-Zélande (MFAT), explication de vote, Première Commission 2026, 30 oct. 2026 —
  https://www.mfat.govt.nz/br/media-and-resources/united-nations-general-assembly-first-committee-2026-new-zealand-explanation-of-vote-on-cluster-4 — **[lu]** (existence de L.37 ; pas de résultat)
- Résultat du vote 2026 sur L.37 — **[non trouvé]**
À faire avant publication : lire le texte officiel de la décision (document final
CCW/CONF.VII) quand il sera en ligne, pour citer la formulation exacte du mandat.

#### 10.2 Robotaxis Waymo et bus scolaires — CHANGEMENT IMPORTANT

(a) l. 156-159 : « … fin 2025, après des cas de robotaxis dépassant des bus scolaires à
l'arrêt, au Texas et en Géorgie, l'agence fédérale de sécurité routière (NHTSA) ouvre une
enquête et Waymo annonce un rappel logiciel, sans blessé signalé. » ; l. 170-173 (citations,
« État au 1ᵉʳ novembre 2026 »).

(b) La NHTSA a **clos sa première enquête** (PE25013) et ouvert le **6 novembre 2026** une
**enquête sur l'efficacité du rappel** (*recall query* RQ26006, 2 895 véhicules) : selon
elle, la majorité des incidents signalés ont eu lieu **après** le 17 novembre 2025, date à
laquelle Waymo disait la correction déployée, ce qui « met en doute l'efficacité » du
rappel. Le district scolaire d'Austin a signalé au moins quatre nouvelles infractions après
le rappel. Par ailleurs, le **NTSB** (bureau d'enquête sur les accidents) enquête depuis un
incident du **12 janvier 2026** à Austin : un Waymo vide, après avoir contacté
l'assistance à distance, a dépassé un bus scolaire bras d'arrêt déployé (pas de
collision). Waymo dit avoir « nettement amélioré » le comportement de ses voitures près des
bus et n'avoir reçu aucune contravention depuis mars 2026 [résumé : citation de seconde
main via TechCrunch] ; il dit coopérer avec le NTSB [lu, KXAN].

(c) Proposition (remplace la fin du § l. 156-159) : « … fin 2025, après des cas de
robotaxis dépassant des bus scolaires à l'arrêt, au Texas et en Géorgie, l'agence fédérale
de sécurité routière (NHTSA) ouvre une enquête et Waymo annonce un rappel logiciel, sans
blessé signalé. Mais des incidents continuent : en novembre 2026, la NHTSA enquête sur
l'efficacité de ce rappel, la plupart des cas étant survenus après la correction. »
Et l. 173 : « État au 25 novembre 2026. »

(d) Sources :
- NTSB, enquête HWY26FH007 (Austin, 12 janv. 2026) —
  https://www.ntsb.gov/investigations/Pages/HWY26FH007.aspx — **primaire, [lu]**
- Reuters, repris par Stock Analysis, « U.S. probes whether Waymo's school bus fix failed,
  covering 2,895 robotaxis », 9 nov. 2026 —
  https://stockanalysis.com/news/waymo-school-bus-recall-probe/ — **[lu]**
- Fox 4 News, « Feds investigate Waymo recall after continued school bus violations »,
  9 nov. 2026 — https://www.fox4news.com/news/feds-investigate-waymo-recall-after-continued-school-bus-violations.amp — **[lu]**
- KXAN, « NHTSA probing Waymo software recall after bus violations », nov. 2026 —
  https://www.kxan.com/investigations/nhtsa-probing-waymo-software-recall-after-bus-violations/amp/ — **[lu]**
- NHTSA, rapport de rappel 25E-084 —
  https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25E084-7732.pdf — **[résumé]**
- Document NHTSA de l'enquête RQ26006 — **[non trouvé]** (à chercher sur nhtsa.gov avant publication)

Étude Kusano et al. (l. 148-152) : rien à changer.

---

### Liste triée

### Changements importants
1. **ia-agir.astro l. 197-200** — CCW (Genève, 16-20 nov. 2026) : pas de négociations,
   nouveau mandat de deux ans ; « État au 25 novembre 2026 » (§ 10.1).
2. **ia-agir.astro l. 156-159 et 173** — Waymo : la NHTSA enquête depuis le 6 nov. 2026 sur
   l'efficacité du rappel ; enquête du NTSB (§ 10.2).
3. **ia-creer.astro, tableau l. 214-224** — nouvelle ligne *Like Company c. Google* :
   conclusions de l'avocat général de la CJUE du 3 nov. 2026 (§ 1.8).
4. **ia-creer.astro l. 219** — LAION : BGH, décision annoncée le 17 déc. 2026 (§ 1.2).
5. **ia-voir.astro l. 216-224** — ajouter la décision du Conseil d'État du 30 janv. 2026
   (Nice) : pas d'analyse algorithmique hors expérimentation (§ 5.1).

### Changements mineurs
6. ia-creer.astro l. 218 — Getty : audience d'appel en nov. 2026, décision en 2027 (§ 1.1).
7. ia-creer.astro l. 220 — GEMA c. OpenAI : appel pendant (§ 1.3).
8. ia-creer.astro l. 162-163 — GEMA c. Suno : appel pendant (une seule source) (§ 1.4).
9. ia-creer.astro l. 222 — NYT : demandes de jugement sans procès, pas de décision (§ 1.5).
10. ia-creer.astro l. 214, 29, 265 — dates « état au » / `MiseAJour` / `verifie` (§ 1.10).
11. ia-creer.astro l. 257-261 — ajout possible des nouvelles interdictions du 2 déc. 2026
    (images intimes sans consentement) (§ 1.9).
12. ia-surveiller.astro l. 136-142 — propositions de loi « commerces » (AN, févr. 2026) et
    « généralisation » (Sénat, mai 2026), aucune votée ; date d'état (§ 6).
13. ia-texte.astro l. 383-386 — chiffres AIE actualisés (485 TWh en 2025, 950 TWh en 2030) ;
    ouvrir la page AIE avant publication (§ 3).
14. ia-entendre.astro — ajout possible : projet danois et NO FAKES Act, non adoptés (§ 7).
15. ia.astro l. 117-124 — ajout possible : affaire Nate (inculpation, pas de verdict) (§ 4).
16. ia-decident.astro l. 167 — seulement la date : « État au 25 novembre 2026 » (§ 9).

### Rien à changer
- Calendrier de l'AI Act (haut risque au 2 déc. 2027 / 2 août 2028 ; art. 50 au 2 août
  2026 ; marquage au 2 déc. 2026) : ia-classer l. 273-275, ia-texte l. 367-372,
  ia-surveiller l. 177-180, ia-decident l. 194, ia-creer l. 230-232 et 257-260,
  ia-entendre l. 258-261 (§ 1.9, 2).
- Thaler (ia-creer l. 217), Andersen (l. 221) (§ 1.6, 1.7).
- Reconduction de la VSA jusqu'au 31 déc. 2027 (ia-voir l. 219-220, ia-surveiller
  l. 131-133) (§ 5.1, 6).
- Police prédictive (ia-predire l. 221-224) (§ 8).
- Sanctions CNIL sur la reconnaissance faciale : rien de nouveau (§ 5.3).
- Annonce de G. Darmanin sur la reconnaissance faciale des manifestant·es (19 oct. 2026) :
  à surveiller, pas de source primaire ni de texte juridique (§ 5.2).

### À revérifier bientôt
- 2 déc. 2026 : entrée en application des nouvelles interdictions (art. 5) et fin du délai
  de marquage.
- Début déc. 2026 : vote de l'Assemblée générale de l'ONU sur les armes autonomes.
- 17 déc. 2026 : BGH, Kneschke c. LAION.
- 18 déc. 2026 : fin des échanges dans NYT c. OpenAI (jugement sommaire).
- 17 févr. 2027 : audience Andersen c. Stability AI.
- 2027 : arrêt CJUE *Like Company* ; Cour d'appel, Getty c. Stability.

## Partie 3 : plateformes, concurrence, faux avis, matérialité, jeux

Non publiés : date d'audience en appel de l'affaire « recherche » (source primaire non lue), World Energy Outlook 2026 (iea.org bloqué), affaire publicitaire américaine, EU KIDS Act, règlement sur l'équité numérique, règle britannique de classement (ajouts facultatifs, à décider). Jeux : 72 liens sur 73 répondent ; **Netsim** ne répondait pas le 25 novembre 2026 (503) : à revérifier avant de le classer parmi les disparus.


Recherche du 25 novembre 2026. Dépôt lu sans rien y écrire. Requêtes curl avec le User-Agent
`RouagesDuNet-research/0.1 (https://rouages.net)`, sans donnée personnelle.
Statuts : **[lu]** = page ou PDF réellement ouvert et lu (au moins le passage cité) ;
**[résumé/métadonnées seulement]** = vu seulement dans un extrait de moteur de recherche, ou
page bloquée ; **[non trouvé]**. Wikipédia n'est cité nulle part.

Avertissement de méthode : plusieurs pages ont été lues par WebFetch, qui renvoie un résumé fait
par un modèle (je le signale par « [lu, via WebFetch] ») ; les citations entre guillemets viennent
du texte brut lu par curl/pdftotext quand c'est indiqué « [lu, texte brut] ».

---

#### 1. `src/pages/modules/pagerank.astro` (MiseAJour 2026-10-17, encart « État au 17 octobre 2026 »)

#### 1.1 États-Unis, affaire « recherche » : appel

**(a) Phrase actuelle** — `pagerank.astro:242-246` : « En août 2024, un tribunal fédéral de
Washington juge que « Google est un monopole ». En septembre 2025, il lui interdit les contrats
d'exclusivité et l'oblige à partager certaines données de son index avec des concurrents. Google
et le gouvernement ont fait appel ; la cour d'appel n'a pas encore statué. »

**(b) Ce qui a changé** : sur le fond, **rien** : la cour d'appel du circuit de D.C. n'a pas
statué. Le mémoire final du gouvernement, déposé le **21 octobre 2026**, porte encore la mention
« ORAL ARGUMENT NOT YET SCHEDULED ». Une audience serait fixée en **janvier 2027** : un article
de commentaire (ecorpit.com, 7 nov. 2026) cite une ordonnance du 9 octobre 2026 « to calendar
argument for the first appropriate date in January 2027 », et Law360 (23 nov. 2026) titre
« DC Circ. Tees Up Google, Meta Cases For January Arguments ». **Je n'ai pas pu lire
l'ordonnance elle-même** (Justia, CourtListener et Law360 renvoient 403) : ne pas publier la date
d'audience sans l'avoir vérifiée.

**(c) Proposition** (facultative, la phrase actuelle reste juste) : « Google et le gouvernement
ont fait appel ; au 25 novembre 2026, la cour d'appel n'a pas encore statué. » Ajouter « une
audience est annoncée pour janvier 2027 » **seulement** après lecture de l'ordonnance
(docket D.C. Cir. n° 26-5023).

**(d) Sources**
- U.S. DOJ, *United States v. Google LLC*, D.C. Cir. n° 26-5023, « Final Response Brief and
  Opening Brief on Cross-Appeal for the United States and Co-Plaintiff States », déposé le
  21/10/2026, https://www.justice.gov/atr/media/1470911/dl — **[lu, texte brut, p. 1]**.
- U.S. DOJ, « Plaintiffs' Second Status Report as to the Enforcement of and Google's Compliance
  with the Final Judgment », D.D.C. 1:20-cv-03010, 17/09/2026,
  https://www.justice.gov/atr/media/1461926/dl — **[lu, texte brut, p. 1]** (l'exécution du
  jugement suit son cours en première instance).
- ecorpit.com, « Google antitrust appeal 2027: D.C. Circuit, search remedies, SEO and ads »,
  7/11/2026, https://ecorpit.com/google-search-antitrust-appeal-2027-seo-ads/ — **[lu, via
  WebFetch]** (source secondaire, de faible poids).
- Law360, « DC Circ. Tees Up Google, Meta Cases For January Arguments », 23/11/2026,
  https://www.law360.com/articles/2558630 — **[résumé/métadonnées seulement]** (403).

#### 1.2 États-Unis, affaire « publicité en ligne » (ad tech) — absente de la page

**(a) Phrase actuelle** : aucune. La page ne parle que de l'affaire « recherche » (le dossier
`recommander-sans-ia.md` §3.5 demandait de ne pas mélanger les deux affaires). Si l'encart doit
couvrir « la publicité », il manque un fait antérieur à la date de la page.

**(b) Ce qui a changé** : le **2 septembre 2026**, la juge Leonie Brinkema (tribunal fédéral de
l'Est de la Virginie) a **refusé d'ordonner la vente d'AdX** demandée par le ministère de la
Justice et a imposé des mesures de comportement pour **six ans**, sous le contrôle d'un
superviseur et d'un comité technique : connexions avec l'outil libre Prebid, données exportables
par les éditeurs, interdiction pour Google Ads d'enchérir en priorité sur les outils de Google.
Le ministère parle d'une « significant victory » ; Google s'est dit « very pleased the court
rejected the DOJ's proposal » et fera appel du jugement sur la responsabilité (avril 2025).
Je n'ai trouvé aucune source sur le dépôt effectif de cet appel.

**(c) Proposition** (ajout facultatif, à placer après le point « États-Unis ») : « Dans une
autre affaire, sur la publicité en ligne, une juge de Virginie a refusé en septembre 2026
d'obliger Google à vendre sa bourse publicitaire AdX ; elle lui impose plutôt pendant six ans
des règles d'ouverture aux concurrents, sous surveillance. Le ministère de la Justice y voit une
victoire, Google se félicite du refus de la vente et conteste sa condamnation de 2025. »

**(d) Sources**
- U.S. DOJ, « Department of Justice Again Wins Substantial Relief Against Google », communiqué
  n° 26-1071, 16/09/2026,
  https://www.justice.gov/opa/pr/department-justice-again-wins-substantial-relief-against-google
  — **[lu, via WebFetch]** (partie au procès ; ne mentionne pas le refus de la vente).
- Al Jazeera, « US judge rejects bid to break up Google's ad business », 2/09/2026,
  https://www.aljazeera.com/economy/2026/9/2/us-judge-rejects-bid-to-break-up-googles-ad-business
  — **[lu, via WebFetch]** (refus de la vente d'AdX, citations de Google et du DOJ).

#### 1.3 Union européenne : DMA et Google Shopping

**(a) Phrase actuelle** — `pagerank.astro:247-250` : « En septembre 2024, la Cour de justice
confirme l'amende de 2,4 milliards d'euros infligée en 2017 pour avoir favorisé Google Shopping.
Le 23 juillet 2026, la Commission inflige 460 millions d'euros au titre du DMA pour
auto-préférence dans les résultats de recherche. »

**(b) Ce qui a changé** :
- Décision DMA du 23 juillet 2026 : **rien de nouveau trouvé** ; aucun recours de Google
  contre l'amende de 460 M€ confirmé par une source lue. Communiqué IP/26/1670 relu : chiffres
  exacts.
- **Nouveau (12 novembre 2026)** : dans l'affaire **AdSense** (publicité liée aux recherches sur
  des sites tiers, amende de près de 1,5 milliard d'euros de 2019, **annulée** par le Tribunal
  le 18 septembre 2024), l'avocate générale Juliane Kokott propose à la Cour de justice
  d'annuler l'arrêt du Tribunal et de lui renvoyer l'affaire. Ce n'est qu'un avis : la Cour
  statuera plus tard.
- Pour mémoire, antérieurs au 17 octobre et absents de la page : amende « adtech » de
  2,95 milliards d'euros (5 septembre 2025, la Commission ordonnant à Google de mettre fin à ses
  « inherent conflicts of interest ») ; mesures DMA du 16 juillet 2026 obligeant Google à
  partager des données de recherche anonymisées avec d'autres moteurs (IP/26/1634).

**(c) Proposition** (ajout mineur) : « État au 25 novembre 2026. […] En 2019, la Commission
avait aussi infligé près de 1,5 milliard d'euros à Google pour ses contrats publicitaires AdSense ;
le Tribunal a annulé cette amende en 2024, mais le 12 novembre 2026 une avocate générale a
proposé à la Cour de justice de casser cette annulation. La Cour n'a pas encore tranché. »

**(d) Sources**
- Commission européenne, IP/26/1670, « Commission fines Google €890 million for breaches of the
  Digital Markets Act », 23/07/2026,
  https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1670 — **[lu, texte brut via
  l'API presscorner]**.
- CJUE, communiqué n° 164/26, conclusions de l'avocate générale Kokott, affaire C-826/24 P
  *Commission/Google et Alphabet (Google AdSense)*, 12/11/2026,
  https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260164fr.pdf — **[lu, texte
  brut]**.
- Commission européenne, IP/25/1992, « Commission fines Google €2.95 billion over abusive
  practices in online advertising technology », 5/09/2025,
  https://ec.europa.eu/commission/presscorner/detail/en/ip_25_1992 — **[lu, texte brut via
  l'API presscorner]**.
- Commission européenne, IP/26/1634, « Commission provides guidance to Google for AI
  interoperability on Android and sharing of Google Search data under the DMA », 16/07/2026,
  https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1634 — **[lu, texte brut via
  l'API presscorner]**.
- Search Engine Roundtable, « Google appeals EU DMA search history data » (recours de Google
  contre les mesures de partage de données, 29/09/2026),
  https://www.seroundtable.com/google-appeals-eu-dma-search-history-data-42180.html — **[lu, via
  WebFetch]** (secondaire ; pas de source primaire lue sur ce recours : ne pas publier).

#### 1.4 Autres pays

**(a) Phrase actuelle** — `pagerank.astro:251-253` : « Japon. En avril 2025, la Commission de
la concurrence ordonne à Google de cesser d'imposer la préinstallation de son moteur sur les
téléphones Android. »

**(b) Ce qui a changé** : Japon : **rien de nouveau trouvé** (pas de recherche approfondie).
**Royaume-Uni (antérieur à la date de la page, mais applicable bientôt)** : le 17 juin 2026,
l'autorité de la concurrence (CMA) a imposé à Google une obligation de « classement équitable » :
classer ses résultats « based on objective and non-discriminatory criteria », y compris dans ses
fonctions d'IA générative. Elle entre en vigueur « six months after the date of this Notice »,
soit vers le **17 décembre 2026** (calcul de ma part).

**(c) Proposition** (ajout facultatif, très proche du sujet PageRank) : « Royaume-Uni. Depuis
juin 2026, l'autorité de la concurrence impose à Google de classer ses résultats selon des
critères « objectifs et non discriminatoires », y compris dans ses réponses générées par IA ;
la règle s'applique à partir de décembre 2026. »

**(d) Sources**
- Competition and Markets Authority, « Fair ranking conduct requirement » (notice), 17/06/2026,
  https://assets.publishing.service.gov.uk/media/6a312d7acd3a3f24b55a5bff/_Fair_ranking_CR_notice_.pdf
  — **[lu, texte brut]**.
- Point de vue de Google sur cette règle : **[non trouvé]** (à chercher avant publication, pour
  présenter les deux parties).

#### 1.5 Phrase finale

**(a)** `pagerank.astro:256-257` : « Google conteste ces décisions et a fait appel aux
États-Unis ; les procédures européennes peuvent aussi faire l'objet de recours. »
**(b)** Toujours exact. **(c)** Remplacer seulement « État au 17 octobre 2026 » (`:240`) par
« État au 25 novembre 2026 » si l'on intègre 1.2 à 1.4 ; sinon rien à changer.

---

#### 2. `src/pages/modules/ia-recommander.astro` (MiseAJour 2026-10-16)

#### 2.1 Procédures DSA contre TikTok et Meta

**(a) Phrase actuelle** — `ia-recommander.astro:305-309` : « État au 16 octobre 2026. La
Commission européenne a publié des conclusions préliminaires sur la « conception addictive » de
TikTok (6 février 2026), puis d'Instagram et de Facebook (10 juillet 2026), en visant notamment
leurs systèmes de recommandation très personnalisés. Les entreprises peuvent répondre : aucune
décision finale n'a été prise. »

**(b) Ce qui a changé — IMPORTANT, au cœur du module** : le **6 novembre 2026**, la Commission
a publié de **nouvelles conclusions préliminaires contre TikTok, cette fois sur l'algorithme du
fil « Pour toi »** lui-même et son « effet terrier de lapin » (*rabbit hole*) : plus on regarde
un type de contenu (tristesse, isolement, image du corps), plus l'algorithme en recommande. Selon
la Commission, TikTok n'a pas correctement évalué ce risque ; ses mesures (diversification,
bouton « pas intéressé ») ne suffisent pas, car « The algorithm prioritises showing users content
based on viewing time, over their choice to see less of certain content ». Elle suggère de
s'appuyer davantage sur les préférences explicites, de **ne plus utiliser le temps de visionnage
comme signal de recommandation**, d'améliorer les réglages et de tester l'algorithme
régulièrement. TikTok répond que ces conclusions sont « fundamentally inaccurate and distort our
platform's architecture and our commitment to user safety ». Aucune décision finale (amende
possible jusqu'à 6 % du chiffre d'affaires mondial).
Le même communiqué rappelle d'autres volets : conclusions préliminaires sur la protection des
mineurs (juillet 2026), accès des chercheur·ses aux données (octobre 2025), et volet publicité
clos par des engagements (décembre 2025).
Meta (Instagram, Facebook) : **rien de nouveau trouvé** depuis le 10 juillet 2026 (pas de
décision finale). X : pas de nouvelle étape trouvée (enquête élargie en janvier 2026 au
système de recommandation fondé sur Grok ; amende de 120 M€ du 5 décembre 2025 sur d'autres
sujets) — ces faits ne sont pas sur la page et n'ont été vus qu'en résumé.

**(c) Proposition** :
« *État au 25 novembre 2026.* La Commission européenne a publié des **conclusions
préliminaires** sur la « conception addictive » de TikTok (6 février 2026), puis d'Instagram et
de Facebook (10 juillet 2026). Le 6 novembre 2026, elle vise directement l'algorithme du fil
« Pour toi » de TikTok : en recommandant toujours plus de vidéos semblables à celles qu'on a
regardées, il enfermerait des utilisateur·rices fragiles dans des « terriers de lapin » (tristesse,
image du corps). Elle suggère notamment de ne plus se fonder sur le temps de visionnage. TikTok
juge ces conclusions « fondamentalement inexactes ». Les entreprises peuvent répondre : aucune
décision finale n'a été prise. »
(Le lien avec la page est direct : le module explique justement que le temps de visionnage est
un objectif chiffré des recommandations.)

**(d) Sources**
- Commission européenne, IP/26/2361, « Commission preliminarily finds TikTok's 'For You' feed in
  breach of Digital Services Act for harmful 'rabbit holes' effect », 6/11/2026,
  https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2361 (même texte sur
  https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-you-feed-breach-digital-services-act-harmful-rabbit-holes)
  — **[lu, texte brut via l'API presscorner ; date 2026-11-06 dans les métadonnées]**.
- K. Chan (Associated Press), « EU says 'rabbit hole' video feeds on TikTok violate its digital
  rules », 6/11/2026,
  https://www.news4jax.com/business/2026/11/06/eu-says-rabbit-hole-video-feeds-on-tiktok-violate-its-digital-rules/
  — **[lu, via WebFetch]** (réponse de TikTok citée ; communiqué de TikTok lui-même
  **[non trouvé]**).
- Meta : recherche sans résultat postérieur au 10/07/2026 ; X : Commission, « Commission
  investigates Grok and X's recommender systems under the DSA » (janvier 2026),
  https://digital-strategy.ec.europa.eu/en/news/commission-investigates-grok-and-xs-recommender-systems-under-digital-services-act
  — **[résumé/métadonnées seulement]**.

#### 2.2 Règle européenne en préparation : EU KIDS Act (absente de la page)

**(a) Phrase actuelle** : aucune (le module cite le DSA, art. 27, 28, 34, 35, 38).

**(b) Ce qui a changé** (17 septembre 2026, donc antérieur à la date de la page, mais non
repris) : la Commission a proposé un règlement, l'« EU KIDS Act » : pas de compte personnel sur
les réseaux sociaux avant 15 ans (13-15 ans via un compte géré par les parents), et pour tous
les services utilisés par des mineur·es, « l'interdiction des fonctionnalités addictives et des
fils de recommandation fondés sur le profilage qui entraînent les mineurs dans des spirales de
contenus préjudiciables », plus « des systèmes de recommandation sûrs que les mineurs pourront
contrôler, régler et réinitialiser ». Ce n'est qu'une proposition : Parlement et Conseil doivent
l'adopter. Critique : l'association EDRi juge que le texte « leaves largely untouched the
business models that put us all at risk » et que « Age-gating cannot be a technological shortcut
for a problem rooted in platform design and business incentives ».
Le 11 novembre 2026, la Commission a aussi proposé un **règlement sur l'équité numérique**
(Digital Fairness Act) : « possibilité pour les consommateurs de désactiver les fonctionnalités
de conception addictives » (surtout celles qui poussent à dépenser).

**(c) Proposition** (ajout dans l'encart « décide ») : « En septembre 2026, la Commission
européenne a proposé l'EU KIDS Act : pas de compte personnel sur les réseaux sociaux avant
15 ans, et pour les mineur·es, plus de fil de recommandation fondé sur le profilage ni de
défilement infini sans pause. C'est une proposition, encore à négocier. Ses partisan·es veulent
que les plateformes prouvent que leurs services sont « sûrs dès leur conception » ; des
associations de défense des libertés, comme EDRi, craignent la vérification d'âge généralisée
et regrettent qu'on protège seulement les enfants plutôt que de changer le modèle des
plateformes pour tout le monde. »

**(d) Sources**
- Commission européenne, IP/26/1890, « EU KIDS Act : la Commission propose de restreindre
  l'accès des plateformes de médias sociaux aux enfants dans l'UE », 17/09/2026,
  https://ec.europa.eu/commission/presscorner/detail/fr/ip_26_1890 — **[lu, texte brut via
  l'API presscorner, version FR]**.
- EDRi, « The KIDS Act will make the internet less safe », 30/09/2026, https://edri.org/?p=63691
  — **[lu, via WebFetch]** (association opposée).
- Commission européenne, IP/26/2407, « La Commission renforce la législation relative à la
  protection des consommateurs pour l'adapter à l'ère numérique », 11/11/2026,
  https://ec.europa.eu/commission/presscorner/detail/fr/ip_26_2407 — **[lu, texte brut via
  l'API presscorner, version FR]**.

#### 2.3 France : interdiction des réseaux sociaux avant 15 ans

**(a) Phrase actuelle** — `ia-recommander.astro:312-319` : « […] le Conseil constitutionnel a
censuré cet article le 14 août 2026 […]. Le gouvernement prépare une nouvelle rédaction. »

**(b) Ce qui a changé** : la phrase était déjà dépassée au 16 octobre : le **14 septembre
2026**, le gouvernement a **notifié à la Commission européenne** une nouvelle rédaction. Selon le
rapport de la commission des affaires européennes de l'Assemblée (28 octobre 2026) : « Il ne
s'agit pas d'une loi adoptée mais d'un projet, qui devra être examiné par le Parlement et pourra
de nouveau être déféré au Conseil constitutionnel. Ce texte maintient l'interdiction d'accès
avant quinze ans mais en redéfinit le champ : sont visés les réseaux sociaux dont les
fonctionnalités ou pratiques commerciales présentent un risque […]. Le texte en énumère dix,
parmi lesquels le déclenchement automatique et le défilement infini. » Pas d'examen
parlementaire trouvé au 25 novembre 2026. Le même rapport souligne la question de la
compatibilité avec le KIDS Act européen.

**(c) Proposition** : « […] le Conseil constitutionnel a censuré cet article le 14 août 2026
[…]. Le 14 septembre 2026, le gouvernement a notifié à la Commission européenne une nouvelle
version : l'interdiction viserait les réseaux sociaux qui ont au moins une de dix
fonctionnalités jugées à risque, comme la lecture automatique ou le défilement infini. Au
25 novembre 2026, le Parlement ne l'a pas encore examinée. »

**(d) Sources**
- Assemblée nationale, rapport n° 3425 (M. Karamanli, commission des affaires européennes) sur
  la proposition de résolution européenne n° 3281, enregistré le 28/10/2026,
  https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B3425.raw — **[lu, texte brut]**.
- Assemblée nationale, proposition de résolution européenne n° 3281, 7/10/2026,
  https://www.assemblee-nationale.fr/dyn/opendata/PNREANR5L17B3281.html — **[lu, texte brut,
  début]**.
- Franceinfo, « "Ne rien lâcher" : le gouvernement soumet une nouvelle version de l'interdiction
  des réseaux sociaux aux moins de 15 ans à la Commission européenne », 14/09/2026,
  https://www.franceinfo.fr/internet/reseaux-sociaux/le-gouvernement-soumet-une-nouvelle-version-de-l-interdiction-des-reseaux-sociaux-aux-moins-de-15-ans-a-la-commission-europeenne-apres-la-censure-d-un-precedent-texte-par-le-conseil-constitutionnel_8191493.html
  — **[lu, via WebFetch]**.
- Fiche TRIS de la notification : **[non trouvé]** (numéro non identifié avec certitude).

#### 2.4 Recherche sur les effets des algorithmes

**(a)** `ia-recommander.astro:242-282` (études 2015-2024, débat santé mentale).
**(b) Rien de nouveau trouvé** de majeur publié entre le 16 octobre et le 25 novembre 2026 (une
recherche ; résultats : étude CHI 2026 et prépublication « Prosocial Ranking Challenge » de mars
2026, non lues, antérieures). **(c)** Rien à changer. **(d)** Recherche web du 25/11/2026 —
**[résumé/métadonnées seulement]**.

---

#### 3. `src/pages/modules/classer-notes.astro` (MiseAJour 2026-10-17)

#### 3.1 Règle de la FTC sur les faux avis — **ERREUR À CORRIGER**

**(a) Phrase actuelle** — `classer-notes.astro:237-241` : « […] En décembre 2025, la FTC a
envoyé des lettres d'avertissement à dix entreprises ; à notre connaissance, aucune sanction n'a
encore été prononcée sur cette base. »

**(b) Ce qui a changé** (faits antérieurs à la date de la page, manqués par le dossier) :
- **13 avril 2026** : première action de la FTC fondée sur la règle. La plainte contre
  TruHeight (compléments alimentaires « pour grandir » destinés aux enfants) vise la loi FTC et
  la « Reviews and Testimonials Rule » : des milliers d'avis 5 étoiles « actually written by
  company employees », des avis payés en produits gratuits et de faux profils gérés par des
  robots. Accord amiable : **750 000 dollars** (jugement de 4 M$ suspendu en partie). Vote 2-0.
  **Ordonnance définitive le 15 juillet 2026.** L'entreprise a transigé ; aucune reconnaissance
  de culpabilité n'apparaît dans le communiqué.
- **11 mai 2026** : la FTC et l'Illinois, avec le ministère de la Justice, poursuivent Premium
  Home Service : des milliers de fiches d'entreprises de dépannage inexistantes, avec de faux
  avis 5 étoiles ; la plainte invoque la règle et demande des sanctions civiles. Affaire en cours.

**(c) Proposition** : « États-Unis. Une règle de la FTC, adoptée à l'unanimité en août 2024 et
en vigueur depuis le 21 octobre 2024, interdit d'acheter ou de vendre de faux avis, y compris
générés par IA. Après des lettres d'avertissement (décembre 2025), la FTC a obtenu en 2026 un
premier accord sur cette base : un vendeur de compléments alimentaires dont les salarié·es
écrivaient des avis 5 étoiles paiera 750 000 dollars, sans reconnaître de faute. Une autre
plainte, contre une entreprise accusée d'avoir inventé des milliers de fausses fiches d'artisans
avec leurs avis, est en cours (état au 25 novembre 2026). »

**(d) Sources**
- FTC, « FTC Takes Action Against TruHeight for Deceptive and Unsubstantiated Advertising of
  Supposed Height-Enhancing Supplements for Kids and Teens », 13/04/2026,
  https://www.ftc.gov/news-events/news/press-releases/2026/04/ftc-takes-action-against-truheight-deceptive-unsubstantiated-advertising-supposed-height-enhancing
  — **[lu, via WebFetch ; date vérifiée dans le HTML brut]**.
- FTC, « FTC Approves Final Order Against TruHeight… », 15/07/2026,
  https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-approves-final-order-against-truheight-deceptive-unsubstantiated-advertising-supplements-kids
  — **[lu, via WebFetch]** (ne nomme pas la règle ; c'est la plainte d'avril qui la cite).
- FTC, « FTC and Illinois Take Action to Stop Deceptive Conduct by Company that Created Thousands
  of Business Listings of Fake Local Home Repair Businesses », 11/05/2026,
  https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-illinois-take-action-stop-deceptive-conduct-company-created-thousands-business-listings-fake
  — **[lu, via WebFetch]**.
- Covington & Burling (Global Policy Watch), « FTC and DOJ Continue Focus on Consumer Reviews Rule
  with Complaint Against Premium Home Service », 2/06/2026,
  https://www.globalpolicywatch.com/2026/06/ftc-and-doj-continue-focus-on-consumer-reviews-rule-with-complaint-against-premium-home-service/
  — **[lu, via WebFetch]** (source indépendante n° 2).
- Plaintes elles-mêmes (PDF ftc.gov) : **[non lues]**.

#### 3.2 Union européenne (Omnibus)

**(a)** `classer-notes.astro:225-229` (directive « Omnibus », appliquée depuis le 28 mai 2022).
**(b)** Directive inchangée. Nouveau : le 11 novembre 2026, la Commission a proposé un
règlement sur l'équité numérique (Digital Fairness Act) et des pouvoirs d'enquête et d'amende
directs pour les affaires de grande ampleur (révision du règlement CPC). **Le communiqué ne
parle pas des avis** ; une source secondaire dit que le texte transformerait la directive sur les
pratiques commerciales déloyales en règlement (non vérifié).
**(c)** Rien à changer à la phrase. Ajout facultatif : « En novembre 2026, la Commission a
proposé de renforcer ces règles (règlement sur l'équité numérique) et de pouvoir elle-même
enquêter et sanctionner les infractions de grande ampleur ; le texte doit encore être adopté. »
**(d)** Commission européenne, IP/26/2407, 11/11/2026,
https://ec.europa.eu/commission/presscorner/detail/fr/ip_26_2407 — **[lu, texte brut]**.

#### 3.3 France, DGCCRF

**(a)** `classer-notes.astro:217-219` (« la DGCCRF disait en 2023 développer un outil
d'intelligence artificielle ») et `:230-236`.
**(b) Rien de nouveau trouvé.** Un résumé de recherche indique que l'outil s'appelle
« Polygraphe », déployé en 2023 ; la page DGCCRF « Comment la DGCCRF enquête sur les faux avis »
est bloquée (403, protection anti-robots), donc non vérifié.
**(c)** Rien à changer. **(d)** https://www.economie.gouv.fr/dgccrf/comment-la-dgccrf-enquete-sur-les-faux-avis
— **[résumé/métadonnées seulement]** (403).

#### 3.4 Seuil IMDb

**(a)** `classer-notes.astro:74-78` : « […] avec un seuil de 25 000 votes pour entrer au
classement (état au 17 octobre 2026) ».
**(b) Rien de changé** : « m = minimum ratings required to be listed in the Top Rated 250 chart
(currently 25,000) » ; IMDb dit toujours ne pas révéler sa pondération.
**(c)** Remplacer seulement la date : « (état au 25 novembre 2026) ».
**(d)** IMDb, « Ratings FAQ »,
https://help.imdb.com/article/imdb/track-movies-tv/ratings-faq/G67Y87TFYYP6TWAV — **[lu, via
WebFetch]**.

---

#### 4. `src/pages/jeux/index.astro` et `src/data/jeux.ts` (17 et 24 octobre 2026)

Méthode : les 73 liens externes de `jeux.ts` ouverts le 25/11/2026 avec curl (suivi des
redirections, code HTTP, puis titre de la page) ; dépôts GitHub vérifiés par WebFetch (le proxy
refuse curl et `gh` pour ces dépôts).

#### 4.1 Lien qui ne répond plus : Netsim

**(a)** `jeux.ts:105` : `{ nom: 'Netsim', lien: 'https://netsim.erinn.io/', … }`.
**(b)** Le 25/11/2026 : HTTPS → connexion réinitialisée (curl, code 000, deux essais espacés) ;
WebFetch → **HTTP 503 Service Unavailable**. Le nom de domaine résout encore. Le dossier
`jeux.md:356` le notait « fonctionne (lu) » le 17 octobre. Panne passagère ou fin du service :
impossible à dire.
**(c)** Revérifier dans quelques jours ; si la panne dure, déplacer Netsim dans « Disparus ou à
éviter » : « Netsim (ne répond plus au 25 novembre 2026) ».
**(d)** https://netsim.erinn.io/ — **[non trouvé]** (503 / connexion réinitialisée).

#### 4.2 Tous les autres liens répondent (code 200, titre attendu)

Rien à changer pour : Terminus, Hacknet, OverTheWire (Bandit, Natas), bashcrawl, CMD Challenge,
VIM Adventures, Castor, Algoréa, France-IOI, Blockly Games, LightBot, Human Resource Machine,
7 Billion Humans, Robocode Tank Royale, NandGame, Turing Complete, Digital Logic Sim, TIS-100,
SHENZHEN I/O, EXAPUNKS, MHRD, Grid Garden, Flexbox Froggy, CSS Diner, Learn Git Branching,
Oh My Git!, SQL Murder Mystery, Untrusted, CS Unplugged, fiche SNT (PDF), Filius, Cisco Packet
Tracer, NetsBlox, Root-Me (page anti-robot, normal), CyLab Security Academy, quiz hameçonnage,
Interland, deux jeux CNIL, Hacksplaining, TryHackMe, Grey Hack, Cyber Manhunt, Quick Draw!,
Survival of the Best Fit, Agent Breaker, Which Face Is Real?, Moral Machine, Teachable Machine,
E.M.I.SSAIRE, Médiasphères, Classe Investigation, Bad News, Spot the Troll, Fakey, Cranky Uncle,
Cryptris, MysteryTwister, CryptoHack, Cryptopals, Evolution of Trust, Parable of the Polygons,
Guess the Correlation, clickclickclick, VisuAlgo, Fresque du Numérique.
GameShell et The Command Line Murders (GitHub) : en ligne, non archivés **[lu, via WebFetch]**.

Remarques sans changement nécessaire :
- CodinGame : le titre est toujours « CodinGame: the arena for engineering agents » ; la
  description de `jeux.ts:66` reste juste.
- Harmony Square : `harmonysquare.game/fr` redirige toujours vers `harmonysquare.getbadnews.com/fr`
  (déjà noté dans `jeux.md:545`).
- AI for Oceans : `code.org/oceans` redirige vers `studio.code.org/…/oceans/…`, titre
  « AI for Oceans - CodeAI » : conforme.
- picoctf.org affiche toujours « picoCTF.org is now CyLab Security Academy » et « Coming Soon:
  picoCTF.com » : conforme à `jeux/index.astro:80-81`.
- « Disparus ou à éviter » (`jeux/index.astro:77-81`) : Go Viral! et SQL Island ne répondent
  toujours pas (code 000), humanornot.ai redirige toujours vers ai21.com, gandalf.lakera.ai vers
  Agent Breaker. Troll Factory (trollitehdas.yle.fi) répond 200 : c'est la version archivée déjà
  signalée. **Rien à changer.**

**(c)** Mettre à jour la date « ne marchent plus au 17 octobre 2026 » (`jeux/index.astro:77`)
seulement si l'on republie la page, en ajoutant Netsim si sa panne se confirme.
**(d)** Résultats bruts : `/tmp/claude-0/-home-user-rouages-net/333aff90-b346-5874-849d-9adc7dc73165/scratchpad/liens-res.txt`.
Contrôle limité au code HTTP et au titre ; prix, pisteurs et descriptions **non revérifiés**
(sauf CodinGame et picoCTF).

---

#### 5. `src/pages/modules/materialite.astro` et `src/data/materialite.ts` (6 novembre 2026)

#### 5.1 Électricité des centres de données (AIE)

**(a)** `materialite.astro:89-90` : « En 2024, ils ont consommé environ 1,5 % de l'électricité
mondiale. » ; `:94` « l'AIE prévoit un doublement d'ici 2030 » ; `:212` « pèsent 1,5 % de
l'électricité mondiale (2024) » ; `materialite.ts:19-21` : 2024 = 415 TWh, 2030 = 945 TWh,
2035 = 1 200 TWh.

**(b) Ce qui a changé** :
- Le rapport AIE *Key Questions on Energy and AI* (PDF créé le 16 avril 2026), que le dossier
  `materialite.md:141,770` n'avait pas pu lire (403), est **lisible** sur le stockage de l'AIE.
  Il donne l'année **2025** : « Our updated projections see electricity consumption from data
  centres roughly doubling from **485 TWh in 2025 to 950 TWh in 2030**, accounting for around 3%
  of global electricity demand by that date » ; ailleurs : « grew by more than 15% between 2024
  and 2025, adding around 70 terawatt-hours […] taking the sector's annual consumption to almost
  500 TWh, or slightly more than 1.5% of global electricity demand ». Le scénario de base
  conserve « around 415 TWh in 2024 to around 950 TWh in 2030 ». Pour 2035 : « from around
  500 TWh today to between 700 TWh and 1 700 TWh in 2035, depending on the case ».
  Attention : le rapport dit à la fois « 485 TWh » et « almost 500 TWh » ; et 950 TWh en 2030
  (le site affiche 945, valeur du rapport 2025).
- **World Energy Outlook 2026**, publié le **19 novembre 2026** (nouvelle édition) : selon
  Euronews, la consommation des centres de données « could double by 2030, reaching up to 1,000
  terawatt-hours » (scénario des politiques annoncées). **Rapport AIE non lu** (iea.org en 403) :
  ne pas reprendre ce chiffre.

**(c) Proposition** :
- `materialite.astro:89-90` : « En 2025, ils ont consommé près de 500 TWh (485 selon l'AIE),
  un peu plus de 1,5 % de l'électricité mondiale, en hausse de plus de 15 % en un an. »
- `materialite.ts` : ajouter `{ annee: '2025', twh: 485, note: 'estimation' }` ; garder 2024
  (415) pour montrer la hausse ; pour 2030, 950 TWh (scénario de base mis à jour en 2026) au lieu
  de 945, ou garder 945 en citant le rapport 2025. Ne pas toucher 2035 sans le dire : le rapport
  2026 ne donne plus qu'une fourchette (700 à 1 700 TWh selon le scénario).
- `:212` : « pèsent un peu plus de 1,5 % de l'électricité mondiale (2025) ».
- Mettre à jour la source (`materialite.astro:229-230`) avec le rapport *Key Questions on Energy
  and AI* (AIE, 2026).

**(d) Sources**
- AIE, *Key Questions on Energy and AI*, avril 2026,
  https://iea.blob.core.windows.net/assets/3179f7f8-01f6-4dd6-bffa-c9f7b73f1dc9/KeyQuestionsonEnergyandAI.pdf
  — **[lu, texte brut ; passages cités p. ~ chap. 1]**.
- P. Davies (Euronews), « Data centre energy consumption could double by 2030, straining grids,
  IEA warns », 19/11/2026,
  https://www.euronews.com/2026/11/19/data-centre-energy-consumption-could-double-by-2030-straining-grids-iea-warns
  — **[lu, via WebFetch]**.
- AIE, *World Energy Outlook 2026*, https://www.iea.org/reports/world-energy-outlook-2026 —
  **[résumé/métadonnées seulement]** (403).

#### 5.2 Eau consommée par Google — nouvelle édition parue

**(a)** `materialite.astro:101-102` : « Google, qui publie les trois, annonce environ
31 milliards de litres consommés en 2024, en hausse de 28 % » (source : rapport 2025, `:234`).

**(b) Ce qui a changé** : le **rapport environnemental 2026** de Google (données 2025) est paru
(juin-juillet 2026). « In 2025, we consumed 10.9 billion gallons (41 billion liters or 41 million
cubic meters) of water across our data centers and offices […] Our water consumption increased
34% from 2024 to 2025 ». Tableau : consommation totale 8 135 → 10 869 millions de gallons
(2024 → 2025), dont 10 523 pour les centres de données. Google dit avoir « reconstitué » environ
7,7 milliards de gallons, « roughly 78% of our freshwater consumption » (périmètre « eau douce »,
différent du total).

**(c) Proposition** : « Google, qui publie les trois, annonce environ 41 milliards de litres
consommés en 2025 (centres de données et bureaux), en hausse de 34 % en un an ; les sites
refroidis à l'air n'en consomment presque pas. »

**(d) Sources**
- Google, *2026 Environmental Report*,
  https://sustainability.google/files/1699a2e19277e478b38a659f00cb38398a836e8c/download-1699a2e1.pdf
  (page d'accueil : https://sustainability.google/reports/google-2026-environmental-report/) —
  **[lu, texte brut]** (partie prenante).

#### 5.3 Autres chiffres datés

- TSMC, eau 2025 (rapport annuel 2025) : pages de investor.tsmc.com en 403 le 25/11/2026 —
  **[non trouvé]**. Rien à changer.
- Autres chiffres (USGS 2026, ADEME, RTE, e-waste 2024, câbles) : hors périmètre « nouvelle
  édition AIE » ; non revérifiés.

---

### Liste triée

### Changements importants
1. **classer-notes.astro:240-241** — corriger « aucune sanction n'a encore été prononcée » :
   accord TruHeight (avril 2026, définitif le 15 juillet 2026, 750 000 $) et plainte Premium Home
   Service (mai 2026). Faits antérieurs au 17 octobre, donc **erreur actuelle** de la page. [lu]
2. **ia-recommander.astro:305-309** — ajouter les conclusions préliminaires du **6 novembre
   2026** contre l'algorithme « Pour toi » de TikTok (« terriers de lapin », temps de visionnage)
   et la réponse de TikTok. [lu]
3. **ia-recommander.astro:319** — « Le gouvernement prépare une nouvelle rédaction » est dépassé :
   nouvelle version notifiée à Bruxelles le 14 septembre 2026 (dix fonctionnalités à risque),
   pas encore examinée par le Parlement. [lu]
4. **materialite.astro:89-90, :212, materialite.ts:19-21** — chiffre AIE 2025 (≈ 485 TWh, un
   peu plus de 1,5 %) désormais lisible en source primaire. [lu]
5. **materialite.astro:101-102** — eau de Google : 41 milliards de litres en 2025 (+34 %),
   rapport 2026. [lu]

### Changements mineurs ou facultatifs
6. ia-recommander : mentionner la proposition **EU KIDS Act** (17/09/2026) avec la critique
   d'EDRi, et éventuellement le règlement sur l'équité numérique (11/11/2026). [lu]
7. pagerank : avis de l'avocate générale sur **AdSense** (12/11/2026). [lu]
8. pagerank : affaire **ad tech** aux États-Unis (pas de vente d'AdX, mesures sur six ans,
   septembre 2026). [lu]
9. pagerank : obligation britannique de **classement équitable** (CMA, applicable vers le
   17/12/2026) ; point de vue de Google à trouver. [lu]
10. pagerank:246 — « État au 25 novembre 2026 » ; l'appel n'est toujours pas jugé ; date
    d'audience (janvier 2027) **à vérifier** avant toute mention. [résumé seulement]
11. classer-notes:76-77 — seuil IMDb inchangé : changer seulement la date. [lu]
12. classer-notes (Omnibus) — ajout facultatif sur le Digital Fairness Act. [lu]
13. jeux.ts:105 — **Netsim** ne répond plus le 25/11/2026 (503) : revérifier, puis déplacer
    dans « Disparus » si la panne dure. [non trouvé]
14. materialite : *World Energy Outlook 2026* (19/11/2026) annonce ~1 000 TWh en 2030 selon la
    presse : **ne pas publier** sans lecture du rapport. [résumé seulement]

### Rien à changer
- pagerank : Google Shopping (2024), amende DMA de 460 M€ (chiffres relus), Japon, phrase
  finale sur les recours.
- ia-recommander : Meta (pas de décision finale), X (rien de nouveau trouvé), recherche sur
  les effets (pas d'étude majeure nouvelle trouvée).
- classer-notes : directive Omnibus, France/DGCCRF (rien de nouveau trouvé ; page DGCCRF en 403).
- jeux : 72 liens sur 73 répondent ; descriptions de CodinGame, CyLab, Agent Breaker, Harmony
  Square, AI for Oceans conformes ; liste « Disparus » toujours exacte.
- materialite : TSMC (rapport 2025 inaccessible), autres chiffres hors périmètre.

## Compléments publiés le 25 novembre 2026 (seconde passe)

À la demande de l'équipe, les ajouts facultatifs de la partie 3 ont été publiés : affaire publicitaire américaine (AdX), conclusions AdSense (C-826/24 P), montants DMA (460 + 430 M€, vérifiés dans IP/26/1670), règle britannique de classement équitable (CMA ; point de vue de Google non trouvé), EU KIDS Act (avec la critique d'EDRi) et proposition du 11 novembre 2026 sur les fonctionnalités addictives.
