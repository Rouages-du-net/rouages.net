# Sources — « Les IA qui surveillent »

Dossier du module `/modules/ia-surveiller/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 1ᵉʳ novembre 2026. Sujet
évolutif : cadre légal de la vidéosurveillance algorithmique (VSA) à suivre.

Niveaux de lecture : **lu**, **lu partiellement**, **résumé seulement**.

## Formulation sûre

Les banques analysent chaque paiement par carte pour repérer la fraude, qui est
rare (environ 1 paiement sur 2 900 en France en 2024) : même un bon détecteur
produit donc beaucoup de fausses alertes. En France, des logiciels qui
analysent les images des caméras ont été expérimentés à partir des Jeux de Paris
2024 : sans reconnaissance faciale, ils signalent des situations à des agent·es.
Leurs résultats varient beaucoup selon la tâche ; l'expérimentation est
prolongée jusqu'au 31 décembre 2027. Le règlement européen sur l'IA interdit
depuis le 2 février 2025 plusieurs usages de surveillance.

## Faits clés

**Fraude aux moyens de paiement (OSMP)** [1] [2]
- Dossier statistique du rapport 2024 (tableaux T1 et T3) : paiements par carte
  émise en France, 20 982 millions de transactions en 2024 ; transactions
  frauduleuses : 7 313 235 (taux de fraude en valeur 0,0567 %) ; fraude totale
  sur l'ensemble des transactions : 1 188 653 201 €. Calcul : environ 1 paiement
  sur 2 870, soit environ 34 pour 100 000 (arrondi « 1 sur 2 900 »).
- Communiqué du 9 septembre 2025 : fraude « juste en-dessous de 1,2 milliard
  d'euros » ; fraude par manipulation « 32% du montant total de la fraude » ;
  « réseaux criminels qui utilisent désormais des outils d'intelligence
  artificielle pour industrialiser et sophistiquer leurs attaques » ; Denis Beau,
  sous-gouverneur de la Banque de France, président de l'OSMP.

**Expérimentation de la VSA : cadre** [3] [6]
- Conseil constitutionnel, décision n° 2023-850 DC du 17 mai 2023 (loi du
  19 mai 2023, art. 10) : détection en temps réel d'« événements
  prédéterminés susceptibles de présenter ou de révéler » des risques d'actes de
  terrorisme ou d'atteintes graves à la sécurité des personnes (§ 41) ; aucune
  reconnaissance faciale ni identification biométrique, pas d'interconnexion
  (§ 42) ; simple signalement, aucune décision individuelle ni poursuite fondée
  sur lui seul, contrôle humain permanent (§ 43-45) ; fin le 31 mars 2025 ;
  pour pérenniser, le législateur devra tirer les conséquences de l'évaluation,
  « notamment » sur l'efficacité (§ 47-48) ; réserve : autorisations d'un mois
  au plus (§ 39). (Paragraphes lus via un outil de synthèse.)
- Décision n° 2026-902 DC du 19 mars 2026 (loi relative à l'organisation des
  JOP de 2030, art. 47) : reconduction jusqu'au « 31 décembre 2027 », rapport
  d'évaluation au « 30 septembre 2027 » ; conformes à la Constitution
  (§ 177-181). Loi n° 2026-201 du 20 mars 2026 (numéro d'après un résumé de
  recherche, non ouvert sur Légifrance).
- Censure d'une première prolongation (loi sur la sûreté dans les transports)
  par le Conseil constitutionnel le 24 avril 2025 : Amnesty International
  France [8] et presse (LCP, Club des juristes, résumés de recherche) ; décision
  elle-même **non ouverte**.
- Liste des événements du décret du 28 août 2023 : citée par le rapport du
  comité (Légifrance inaccessible).

**Évaluation** [4] [5]
- Rapport d'information du Sénat n° 374 (2024-2025), F. Dumont et M.-P. de La
  Gontrie, déposé le 19 février 2025 (lu via un outil de synthèse) : RATP,
  2 083 signalements (80 % d'intrusions, 15 % de surdensité) ; vrais positifs
  RATP 79 % (intrusion), 88 % (surdensité), 22 % (objets abandonnés, sur 1 302
  signalements) ; SNCF, 1 552 signalements, vrais positifs 74 % (intrusion),
  100 % (surdensité, 28 signalements), 23 % (objets abandonnés) ; SNCF :
  357 signalements pertinents sur 1 012 traités (35 %) ; erreur : « confusion
  entre un objet abandonné et des personnes assises ou statiques, notamment des
  personnes sans domicile fixe » ; cas d'usage « globalement satisfaisants »
  (intrusion, contresens, surdensité), « très insatisfaisantes » (départs de
  feu, personnes au sol), « inégales » (objets abandonnés), « incertaines »
  (mouvements de foule) ; intérêt opérationnel « limité mais réel » selon le
  comité ; proposition n° 1 : prolonger l'expérimentation avant toute
  pérennisation.
- **Rapport du comité d'évaluation** (janvier 2025, 122 p.), **lu** (PDF
  transmis par le mainteneur, le téléchargement direct échouant) :
  - huit événements de l'article 3 du décret du 28 août 2023 : « présence
    d'objets abandonnés ; présence ou utilisation d'armes ; non-respect par une
    personne ou un véhicule, du sens de circulation commun ; franchissement ou
    présence d'une personne ou d'un véhicule dans une zone interdite ou
    sensible ; présence d'une personne au sol à la suite d'une chute ; mouvement
    de foule ; densité trop importante de personnes ; départs de feux » ;
  - 33 événements testés (préfecture de police 14, RATP 8, SNCF 7, Cannes 4),
    environ 800 caméras ; évaluation « principalement centrée sur le dispositif
    de la société Wintics » ;
  - § 2.3.5 (données « à interpréter avec précaution ») : RATP pendant les JO,
    intrusion 1222 vrais positifs / 324 faux positifs / 11 cas pertinents au
    plan opérationnel ; objets délaissés 42 / 151 / 2 ; densité 305 / 41 / 1.
    SNCF, 1 552 signalements sur 56 jours (58 % intrusions, 40 % objets, 2 %
    surdensité) ; objets : 206 vrais positifs sur 629 alertes (≈ 33 %) ;
    intrusions : 660 vrais positifs, 233 faux positifs (≈ 74 %). Préfecture de
    police (Jeux paralympiques) : densité 401 détections, 42 faux positifs ;
    contresens 21 / 0 ; départ de feu 7 / 3 ; mouvement de foule 2 / 0 ;
    55 détections d'intérêt opérationnel. Cannes (Festival) : 37 194 alarmes,
    25 639 traitées, « aucune n'a nécessité l'intervention d'un agent de
    terrain » ; essais ultérieurs « plus concluants » ;
  - confusions : mobilier urbain, matériel de nettoyage, « des personnes
    assises ou statiques, notamment des sans domicile fixe » ; la Défenseure des
    droits évoque des équipements de personnes en situation de handicap
    assimilés à des objets non autorisés ;
  - titres : performances « globalement satisfaisantes » (intrusion,
    circulation, densité), « encore incertains » (mouvements de foule),
    « inégales » (objets abandonnés et armes à feu), « très insatisfaisantes »
    (départs de feu, personne au sol) ; « Un intérêt opérationnel limité mais
    réel » ; « Un dispositif expérimental qui, en l'état, ne heurte les libertés
    publiques ni dans sa conception ni dans sa mise en œuvre » ;
    « L'abandon, la prolongation ou la pérennisation : un choix politique qui ne
    relève pas de la mission du comité d'évaluation ».
- **Écarts avec le rapport du Sénat** : le Sénat donne 23 % de vrais positifs
  pour les objets abandonnés à la SNCF (le comité : 206 sur 629, ≈ 33 %), « sur
  1 302 signalements » pour les objets à la RATP (le comité : 193) et 100 % sur
  28 signalements pour la surdensité à la SNCF (absent du texte du comité). La
  page suit le rapport du comité.

**Positions** [7] [8]
- Proposition de loi n° 221 (Sénat, I. Florennes, 12 décembre 2025) : le comité
  a conclu que le dispositif « ne heurte les libertés publiques ni dans sa
  conception ni dans sa mise en œuvre » ; la préfecture de police, la SNCF et la
  RATP en ont « reconnu son intérêt ».
- Amnesty International France (24 mars 2025, mis à jour) : chronologie ; les JO
  comme tremplin pour normaliser ces technologies ; personnes sans-abri
  considérées comme des colis abandonnés ; appel à interdire la reconnaissance
  faciale.

**Règlement européen sur l'IA** [9]
- Art. 5, § 1, c) (notation sociale), d) (prédiction d'infraction sur la seule
  base du profilage), f) (inférer les émotions au travail et dans
  l'enseignement, sauf raisons médicales ou de sécurité), h) (identification
  biométrique à distance en temps réel par la police dans l'espace public, sauf
  exceptions : victimes d'enlèvement ou de traite et personnes disparues,
  menace imminente ou attaque terroriste, suspects de certaines infractions
  graves). Texte français lu via le dépôt Cellar (voir `ia-intro.md`) ;
  application depuis le 2 février 2025 (voir `ia-voir.md`) ; calendrier haut
  risque : `ia-classer.md`.

**« Crédit social » chinois** [10] [11]
- Z. Yang, *MIT Technology Review*, 22 nov. 2022 : « Contrary to popular belief,
  there's no central social credit score for individuals » ; « the national
  government has built only a system focused on companies, not individuals » ;
  Rongcheng : score de base de 1 000 points en 2013, puis possibilité de se
  retirer.
- V. Brussee, MERICS, 11 févr. 2022 : « such a score simply does not exist » ;
  système « lowly digitalized, highly fragmented, and primarily focuses on
  businesses » ; Wenzhou et Rongcheng passés à des dispositifs de récompense ;
  « All of this does not mean that the SoCS is benign » ; le score mythique
  détourne des « real threats of surveillance ».
- Deux sources indépendantes concordantes (fait surprenant : règle des deux
  sources respectée). État : analyses de 2022.

## Sources

1. OSMP. Rapport 2024, annexe 5 « Dossier statistique ». https://www.banque-france.fr/system/files/2025-09/OSMP-2024_Annexe-5_Dossier-statistique.pdf — P, fr, **lu partiellement** (T1, T3).
2. Banque de France (9 sept. 2025). Communiqué de presse OSMP 2024. https://www.banque-france.fr/system/files/2025-09/CP-OSMP-2024_20250909.pdf — P, fr, **lu**.
3. Conseil constitutionnel. Décision n° 2023-850 DC du 17 mai 2023. https://www.conseil-constitutionnel.fr/decision/2023/2023850DC.htm — P, fr, **lu partiellement**.
4. Sénat. Rapport d'information n° 374 (2024-2025). https://www.senat.fr/rap/r24-374/r24-3745.html — P, fr, **lu partiellement**.
5. Comité d'évaluation (janv. 2025). https://www.vie-publique.fr/files/rapport/pdf/297322.pdf — P, fr, **lu** (§ 2.3, 3, 5 et conclusions ; PDF transmis par le mainteneur).
6. Conseil constitutionnel. Décision n° 2026-902 DC du 19 mars 2026. https://www.conseil-constitutionnel.fr/decision/2026/2026902DC.htm — P, fr, **lu partiellement** (§ 177-181) ; communiqué : https://www.conseil-constitutionnel.fr/actualites/communique/decision-n-2026-902-dc-du-19-mars-2026-communique-de-presse — **lu**.
7. Sénat. Proposition de loi n° 221 (2025-2026). https://www.senat.fr/leg/ppl25-221.pdf — P, fr, **lu partiellement** (exposé des motifs, article 1ᵉʳ).
8. Amnesty International France. https://www.amnesty.fr/actualites/voici-comment-le-gouvernement-a-prolonge-la-videosurveillance-algorithmique/ — site, fr, **lu partiellement**.
9. Règlement (UE) 2024/1689, art. 5. http://publications.europa.eu/resource/celex/32024R1689 — P, fr, **lu** (art. 5).
10. Yang, Z. (2022). *MIT Technology Review*. https://www.technologyreview.com/2022/11/22/1063605/china-announced-a-new-social-credit-law-what-does-it-mean/ — Pr, en, **lu partiellement**.
11. Brussee, V. (2022). MERICS. https://merics.org/en/short-analysis/chinas-social-credit-score-untangling-myth-reality — R, en, **lu partiellement**.

## Points d'attention

- VSA : sujet évolutif (prolongation jusqu'au 31 décembre 2027, nouveau rapport
  au 30 septembre 2027) ; vérifier avant chaque mise à jour.
- Présenter les deux camps : rapporteur·es du Sénat et auteure de la
  proposition de loi (prolonger, étendre), Amnesty (banalisation, erreurs).
- Les chiffres de vrais positifs ne disent pas l'utilité : distinguer faux
  positifs techniques et opérationnels.
- Le détecteur de fraude de l'animation est inventé ; seule la fréquence de la
  fraude vient de l'OSMP.
- Ne pas présenter le crédit social chinois comme anodin (MERICS).
