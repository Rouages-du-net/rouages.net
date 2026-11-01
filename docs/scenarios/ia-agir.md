# Scénario — « Les IA qui agissent »

*Robots, voitures autonomes, robotaxis, armes autonomes.* Statut : **publié**
(`/modules/ia-agir/`, section « L'IA »), relecture humaine à faire. Faits
sourcés dans [`docs/sources/ia-agir.md`](../sources/ia-agir.md).

## Intention

Montrer ce qui change quand une IA agit dans le monde physique : la boucle
perception-décision-action, le poids du retard, la différence entre détecter
et comprendre, et l'arbitrage entre fausse alerte et réaction tardive. Partir
d'un modèle (le robot qui suit une ligne), puis d'un accident réel documenté
(Tempe), avant les débats sur la sécurité des robotaxis et les armes autonomes.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Percevoir, décider, agir | `Ligne` | force de la réaction (gain), retard de perception ; trajectoire du robot |
| 1 | Voir n'est pas comprendre | `Freinage` | moment du début du freinage (0 à 5,6 s), force (0,92 g ou 0,71 g), boutons des moments clés ; distance de freinage, vitesse d'impact (chiffres du NTSB) |
| 2 | Plus sûrs que nous ? | texte | étude de Waymo (auteurs salariés), rappel après les bus scolaires |
| 3 | Des machines qui tirent ? | texte | position du CICR, votes de l'ONU (2023, 2025) |
| ✓ | Questions à poser à une machine qui agit | liste | cinq questions |

## Choix et limites

- Le robot de l'étape 0 est un modèle inventé (`src/lib/agir.ts`).
- Le freinage de l'étape 1 suppose une vitesse constante jusqu'au début du
  freinage ; il ne reproduit pas la trajectoire exacte (l'opératrice a braqué
  au dernier moment, impact à 39 mph).
- La victime et l'opératrice ne sont pas nommées.
- L'apprentissage par renforcement et la planification renvoient aux modules
  « Les IA qui jouent » et « Les IA qui cherchent et optimisent ».
- Non traités faute de source ouverte : WABOT-1, origine du mot « robot ».
