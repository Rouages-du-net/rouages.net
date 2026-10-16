# Scénario — « L'IA, c'est quoi ? »

*La porte d'entrée de la famille « L'IA ».* Statut : **publié**
(`/modules/ia/`), relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-intro.md`](../sources/ia-intro.md).

## Place dans la famille « L'IA »

Ce module ouvre la famille de modules sur l'IA (voir `docs/ROADMAP.md`,
phase 5). Il ne détaille aucune technique : il donne une définition, montre
les grandes façons de faire (règles, apprentissage supervisé, non supervisé,
par renforcement) et dresse la **carte buts × mécanismes** qui renvoie vers
les modules par but (« Les IA qui écrivent », « qui classent », « qui
voient »…). Les données de la carte sont dans `src/lib/carte-ia.ts` : quand un
module paraît, on renseigne son `lien`.

## Intention

« IA » désigne des choses très différentes : un filtre anti-spam, un GPS, un
assistant conversationnel. Le module donne des repères pour s'y retrouver et
pour se méfier du mot. Comme ailleurs sur le site, les algorithmes tournent
**pour de vrai** dans le navigateur (`src/lib/apprendre.ts`) : système expert
à chaînage avant, arbre de décision ID3, k-moyennes, Q-learning.

**Fil conducteur** : des animaux (`src/lib/animaux.ts`), une souris dans un
labyrinthe, et ta journée.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'il n'y a pas une définition unique de l'IA, que la définition juridique
   actuelle (AI Act, OCDE) repose sur l'idée qu'un système « déduit » ses
   sorties de ses entrées, et que le mot sert aussi d'argument commercial ;
2. qu'on peut faire une IA en écrivant des règles (système expert) ou en
   apprenant à partir d'exemples, avec des forces et des limites pour
   chacune ;
3. qu'on peut apprendre sans étiquettes (regrouper) ou par essais et erreurs
   (récompenses) ;
4. qu'on peut ranger les IA par but et par mécanisme ;
5. que l'histoire de l'IA est faite d'emballements et de reflux.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | IA ou pas ? | `IaOuPas` | dix objets du quotidien : on vote, puis on lit le verdict (oui, non, ça se discute) |
| 1 | Des règles ou des exemples | `ReglesOuExemples` | on coche des caractéristiques : un système expert (7 règles) et un arbre appris sur 8 exemples répondent, chacun avec son raisonnement |
| 2 | Apprendre sans professeur | `KMoyennes` | 45 points, 3 centres : on avance l'algorithme des k-moyennes pas à pas |
| 3 | Apprendre par essais et erreurs | `Renforcement` | une souris apprend un labyrinthe par Q-learning, partie par partie ; les flèches montrent ce qu'elle a appris |
| 4 | La carte des IA | `CarteIA` | tableau buts × mécanismes, ligne ou colonne mise en évidence |
| 5 | Des printemps et des hivers | `Saisons` | frise de 1956 à 2022, filtrable printemps / hivers |
| ✓ | Bilan | tableau | les IA croisées dans une journée, chacune rattachée à sa ligne de la carte |

Encarts « Un peu d'histoire » et « Idées reçues » : Dartmouth (1955), Larry
Tesler et l'effet IA, AI washing (SEC et FTC, 2024), DENDRAL et MYCIN,
H. Penny Nii et les systèmes à tableau noir, Raj Reddy, Kazuhiro Fuchi et la
cinquième génération (Prolog venu de Marseille), Steinhaus et l'histoire
partagée des k-moyennes, Samuel (et la fausse citation qu'on lui prête),
MENACE de Donald Michie, Ruzena Bajcsy, *Perceptrons*, Feng-hsiung Hsu,
Aja Huang, Fan Hui.

## Choix et limites

- **Les verdicts « IA ou pas ? »** suivent la définition de l'AI Act ; les
  cas limites sont marqués « ça se discute » plutôt que tranchés.
- **Jeux de données minuscules**, écrits pour le site : l'arbre appris sur
  8 animaux se trompe parfois, ce qui montre la dépendance aux exemples.
- **Pas de date précise pour le second hiver** (« fin des années 1980 ») :
  les sources ne s'accordent pas sur une année.
- **Données personnelles** : rien sur la vie privée des personnes citées
  (lieu de résidence, famille) ; rôle de Fan Hui après 2015 non publié car
  non vérifié.
