# Scénario — « Les IA qui décident pour nous »

*Crédit, contrôles des allocations, justice : des scores qui pèsent sur des
décisions.* Statut : **publié** (`/modules/ia-decident/`, section « L'IA »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-decider.md`](../sources/ia-decider.md) et
[`docs/sources/ia-classer.md`](../sources/ia-classer.md) (§ 8 et 9).

## Intention

Montrer que la plupart des « IA qui décident » sont des scores assez simples,
et que les vraies questions sont ailleurs : quelles données, quelle définition
de l'équité, quelles boucles, quels droits. Présenter toutes les parties sur
COMPAS (ProPublica, Northpointe, chercheur·ses) et sur l'algorithme de la CAF
(La Quadrature du Net et les requérant·es, CNAF). Éviter de refaire le module
« Les IA qui classent », qui traite déjà le seuil, l'arbre de décision, la
*toeslagenaffaire*, Ofqual et l'article 22 : y renvoyer.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Un score qui décide | `Score` | grille de points à cinq critères, seuil à 500 ; détail par critère ; explication contrefactuelle sur les critères modifiables |
| 1 | Juste, mais selon quelle définition ? | `Equite` | deux groupes (taux de base 30 % et 50 %, ou 40 % et 40 %), un seuil par groupe ; valeur prédictive, faux positifs, faux négatifs |
| 2 | Qui est contrôlé ? | `Controles` | même taux d'erreurs (8 %) dans deux groupes, historique déséquilibré ; estimation naïve ou juste ; part de contrôles au hasard |
| 3 | Le droit de comprendre | texte | CRPA (L. 311-3-1, L. 312-1-3), RGPD art. 22, règlement sur l'IA, Parcoursup (2020-834 QPC) |
| ✓ | Cinq questions à poser | liste | qui décide, quelles données, quelle équité, quelle boucle, quel recours |

## Choix et limites

- **Grille de score inventée** (`src/lib/decider.ts`) ; la forme des vraies
  grilles n'est pas sourcée ici, la page ne la décrit pas. Le contrefactuel ne change qu'un critère à la fois.
- **Équité** : le score est le vrai risque de chaque personne (calibré). Au
  même seuil, valeur prédictive proche (63 % et 68 %) et faux positifs trois
  fois plus fréquents dans le groupe B (10 % contre 32 %) : la situation de
  COMPAS, en miniature. Tolérance d'« égalité » : 5 points.
- **Boucle de contrôles** : simulation générique, explicitement **pas**
  l'algorithme de la CNAF. Résultat : estimation naïve, le groupe B garde
  environ 60 % des contrôles (pour 40 % des dossiers) et paraît 2,7 fois plus
  fautif ; estimation sur les dossiers contrôlés, retour à 40 %.
- **CAF** : variables critiquées = modèles 2010-2018 ; modèle 2026 décrit par
  la CNAF ; recours au Conseil d'État sans décision trouvée (état au
  29 octobre 2026). Vocabulaire : « indu », « erreur », « contrôle » plutôt
  que « fraude ».
- Aucune personne privée citée (ni prévenu·es de ProPublica, ni allocataires).
