# Sources — « Les IA qui décident pour nous »

Dossier du module `/modules/ia-decident/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 25 octobre 2026. Complète
[`ia-classer.md`](ia-classer.md) § 8 (RGPD article 22, CJUE SCHUFA, règlement
sur l'IA et son calendrier modifié en 2026) et § 9 (affaire néerlandaise des
allocations, notes d'Ofqual), repris sans être recopiés.

Niveaux de lecture : **lu**, **lu partiellement**, **résumé seulement**.

## Formulation sûre

Des algorithmes aident à décider qui obtient un crédit, qui est contrôlé par
une caisse d'allocations, qui reste en détention. La plupart sont des calculs
de score assez simples (régression logistique, grille de points), pas des
réseaux de neurones. Les questions qu'ils posent sont donc moins techniques
que politiques : quelles données, quelle définition de l'équité, qui peut
comprendre et contester la décision. Sur l'équité, un résultat mathématique
montre qu'on ne peut pas, en général, satisfaire en même temps plusieurs
définitions raisonnables quand les groupes n'ont pas le même taux de base.

## Faits clés

**COMPAS (États-Unis) — toutes les parties**
- ProPublica (J. Angwin, J. Larson, S. Mattu, L. Kirchner), « Machine Bias »
  et « How We Analyzed the COMPAS Recidivism Algorithm » (23 mai 2016) [1][2] :
  - plus de 10 000 prévenu·es du comté de Broward (Floride), suivi sur deux ans ;
  - score juste pour la récidive dans 61 % des cas (violente : 20 %) ; justesse
    comparable selon le groupe (59 % pour les Blancs, 63 % pour les Noirs) « but
    made mistakes in very different ways » ;
  - parmi les personnes qui n'ont pas récidivé, classées à plus haut risque :
    45 % des Noir·es contre 23 % des Blanc·hes ; parmi celles qui ont récidivé,
    classées à bas risque : 48 % des Blanc·hes contre 28 % des Noir·es ;
  - 137 questions ; « Race is not one of the questions » ; calcul non public.
  - Réponse de Northpointe citée par ProPublica : « Northpointe does not agree
    that the results of your analysis, or the claims being made based upon that
    analysis, are correct ». [1]
- A. Chouldechova, « Fair prediction with disparate impact » (arXiv 1703.00056,
  fév. 2017 ; version courte 1610.07524) [3] : Northpointe répond avec un autre
  critère, la **parité prédictive** (même valeur prédictive positive dans chaque
  groupe), que COMPAS satisfait ; ProPublica regarde l'**égalité des taux
  d'erreur** (faux positifs, faux négatifs). Résultat : un score qui satisfait la
  parité prédictive « cannot have equal false positive and negative rates across
  groups when the recidivism prevalence differs across those groups ». Relation
  (sa formule) : FPR = p/(1−p) · (1−PPV)/PPV · (1−FNR), avec p la prévalence.
- J. Kleinberg, S. Mullainathan, M. Raghavan (arXiv 1609.05807, 2016) : trois
  conditions d'équité ; sauf cas très particuliers, aucune méthode ne peut les
  satisfaire simultanément. [4]
- La réponse technique de Northpointe (rapport de juillet 2016) : URL d'origine
  disparue (404), **non lue** ; connue via Chouldechova.

**CAF / CNAF (France) — toutes les parties**
- La Quadrature du Net, 27 nov. 2023 [5] (association, partie prenante) :
  publie le code de deux versions (2010-2014, 2014-2018) obtenues après des mois
  de demandes ; « score de suspicion » entre 0 et 1, mis à jour chaque mois ;
  une quarantaine de paramètres ; parmi ceux qui augmentent le score : revenus
  faibles, chômage, RSA, quartier « défavorisé » (variable masquée, déduite d'une
  réponse de la CAF à la CADA), part du loyer, bénéfice de l'AAH en travaillant ;
  ses profils-types sont des simulations « à titre indicatif seulement » ; 32
  millions de personnes concernées, dont 13 millions d'enfants.
- Recours devant le Conseil d'État annoncé le 16 octobre 2024 par 15
  organisations (dont La Quadrature du Net, Amnesty International France, la
  Fondation Abbé Pierre, APF France handicap, la LDH, le Syndicat des avocats de
  France), au nom de la protection des données et de la non-discrimination [6].
  **Décision non trouvée au 25 octobre 2026** (recherche web : seulement le dépôt).
- CNAF, dossier de presse « Transparence et garanties éthiques autour de
  l'algorithme d'appui aux contrôles des Caf », janvier 2026 [7] :
  - nouveau modèle « DMDE 2026 » depuis janvier 2026 ; code source « pour la
    première fois accessible en ligne » ; régression logistique « choisie pour sa
    lisibilité et son explicabilité » ;
  - but : repérer les dossiers les plus exposés à un indu (trop-perçu) de plus de
    600 € sur six mois ; aussi des rappels de droits ;
  - variables écartées : nationalité, genre, adresse, lieu de résidence, données
    de « comportement » (connexions, contacts), contrôles antérieurs ; « La
    situation économique de l'allocataire étant inévitable, elle est intégrée » ;
  - deux modèles : 17 variables (avant la « solidarité à la source »), 11 après ;
  - moins de 1 % des 31,5 millions de contrôles de 2024, 6,5 % des 2,5 millions
    de contrôles sur pièces ou sur place ; « la décision d'un contrôle reste
    humaine » ;
  - comité d'éthique réuni pour la première fois en mars 2025 (avec des
    associations d'usagers) et charte.
- Selon la presse (non lue en entier), les associations ont salué la
  publication du code mais maintiennent leur recours.

**Droit français**
- Conseil constitutionnel, décision n° 2020-834 QPC du 3 avril 2020
  (Parcoursup) [8] : décrit l'article L. 311-3-1 du CRPA (communiquer au candidat
  qui le demande « les règles définissant le traitement algorithmique et les
  principales caractéristiques de sa mise en œuvre ») et L. 312-1-3 (publier en
  ligne les règles des principaux traitements algorithmiques) ; réserve : chaque
  établissement doit publier, après la procédure, les critères d'examen
  « précisant, le cas échéant, dans quelle mesure des traitements algorithmiques
  ont été utilisés ». (Texte du CRPA sur Légifrance : 403 depuis l'outil, lu via
  la décision.)

**Expliquer une décision**
- S. Wachter, B. Mittelstadt, C. Russell (arXiv 1711.00399, 2017) :
  explications **contrefactuelles** « without opening the black box » ; trois
  buts : comprendre la décision, pouvoir la contester, savoir « what would need to
  change in order to receive a desired result ». [9]

## Sources

1. Angwin, J., Larson, J., Mattu, S., Kirchner, L. (23 mai 2016). « Machine Bias ». ProPublica. https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing — Pr (enquête), en, **lu partiellement**.
2. Larson, J. et al. (23 mai 2016). « How We Analyzed the COMPAS Recidivism Algorithm ». ProPublica. https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm — Pr/R, en, **lu partiellement**.
3. Chouldechova, A. (2017). « Fair prediction with disparate impact ». arXiv:1703.00056. https://arxiv.org/abs/1703.00056 — R, en, **lu partiellement** (§ 1-2).
4. Kleinberg, J., Mullainathan, S., Raghavan, M. (2016). arXiv:1609.05807. https://arxiv.org/abs/1609.05807 — R, en, **résumé seulement**.
5. La Quadrature du Net (27 nov. 2023). « Notation des allocataires : l'indécence des pratiques de la CAF désormais indéniable ». https://www.laquadrature.net/2023/11/27/notation-des-allocataires-lindecence-des-pratiques-de-la-caf-desormais-indeniable/ — S (association, partie prenante), fr, **lu partiellement**.
6. Amnesty International France (16 oct. 2024). « L'algorithme de notation de la CNAF attaqué devant le Conseil d'État par 15 organisations ». https://www.amnesty.fr/presse/lalgorithme-de-notation-de-la-cnaf-attaque-devant-le-conseil-detat-par-15-organisations — P (requérante), fr, **lu** (via outil de synthèse).
7. CNAF (janv. 2026). Dossier de presse « Transparence et garanties éthiques autour de l'algorithme d'appui aux contrôles des Caf ». https://www.caf.fr/sites/default/files/medias/cnaf/Nous_connaitre/Presse/2026/260115%20DP%20Transparence%20et%20garanties%20%C3%A9thiques%20autour%20de%20l'algorithme%20d'appui%20aux%20contr%C3%B4les%20des%20Caf%20(2).pdf — P (organisme concerné), fr, **lu**.
8. Conseil constitutionnel, décision n° 2020-834 QPC, 3 avril 2020. https://www.conseil-constitutionnel.fr/decision/2020/2020834QPC.htm — P, fr, **lu partiellement**.
9. Wachter, S., Mittelstadt, B., Russell, C. (2017). arXiv:1711.00399. https://arxiv.org/abs/1711.00399 — R, en, **résumé seulement**.

## Points d'attention

- **Ne nommer aucune personne citée dans les enquêtes** (prévenu·es de
  ProPublica, allocataires) : personnes privées.
- **COMPAS** : présenter ProPublica, Northpointe et l'analyse de Chouldechova ;
  le débat porte sur la **définition** de l'équité, pas seulement sur les chiffres.
- **CAF** : La Quadrature du Net est partie prenante (recours) ; la CNAF est
  l'organisme mis en cause. Les variables critiquées concernent les modèles
  2010-2018 ; le modèle 2026 en écarte certaines mais garde la situation
  économique. Dire « contrôle », « indu », « erreur » plutôt que « fraude » :
  la CNAF vise les indus, qui ne sont pas tous des fraudes. Dater : « état au
  25 octobre 2026 ».
- **Parcoursup** : la réserve porte sur la publication des critères après la
  procédure, pas sur un droit individuel à l'algorithme complet.
- Le mécanisme de boucle de l'animation « Qui est contrôlé ? » est une
  simulation générique (problème des « étiquettes sélectives » : on ne connaît
  le résultat que pour les dossiers contrôlés), **pas** une description de
  l'algorithme de la CNAF.
