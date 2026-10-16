# Scénario — « Comment apprend une machine »

*Le module transversal de la famille « L'IA ».* Statut : **publié**
(`/modules/apprendre/`), relecture humaine à faire. Faits sourcés dans
[`docs/sources/apprendre.md`](../sources/apprendre.md) et, pour le neurone et
la rétropropagation, [`docs/sources/ia-mecanismes.md`](../sources/ia-mecanismes.md).

## Place dans la famille « L'IA »

Les modules par but (« Les IA qui écrivent », « qui voient », « qui
classent »…) renvoient ici pour le mécanisme commun : des paramètres qu'on
ajuste pour réduire une erreur. Les étapes « Un neurone artificiel » et
« Apprendre en se trompant » viennent de « Les IA qui écrivent ». Les
apprentissages non supervisé et par renforcement sont montrés dans « L'IA,
c'est quoi ? » : le bilan y renvoie au lieu de les refaire.

## Intention

« Apprendre », pour une machine, n'a rien de mystérieux : c'est régler des
nombres. Le module le montre avec de vrais modèles entraînés dans le
navigateur (`src/lib/modeles.ts`, `src/lib/minilm.ts`), puis montre les deux
pièges principaux : apprendre par cœur (sur-apprentissage) et apprendre de
données déséquilibrées (biais).

**Fil conducteur** : des fruits mûrs ou pas mûrs, du premier neurone jusqu'aux
photos prises à l'ombre.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'un neurone artificiel est une formule à poids, et qu'apprendre, c'est
   régler ces poids à partir d'exemples ;
2. que la descente de gradient corrige les poids pas à pas dans le sens qui
   réduit l'erreur, et que la taille du pas compte ;
3. qu'un neurone seul ne trace qu'une droite, que des couches de neurones
   tracent des frontières courbes, et qu'on les entraîne par rétropropagation ;
4. qu'on juge un modèle sur des exemples qu'il n'a jamais vus, et qu'un modèle
   trop complexe apprend le bruit par cœur ;
5. qu'un même algorithme, entraîné sur des données déséquilibrées, se trompe
   davantage pour les groupes rares ;
6. les quatre façons d'apprendre (supervisé, non supervisé, par renforcement,
   auto-supervisé).

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Un neurone artificiel | `Neurone` | perceptron à deux entrées : régler les poids à la main ou par la règle de Rosenblatt |
| 1 | Apprendre en se trompant | `Descente` | descente de gradient sur une courbe d'erreur, taille du pas (dont un pas qui diverge) |
| 2 | Plusieurs couches | `Couches` | réseau à une couche cachée (1, 2, 4 ou 8 neurones) entraîné par rétropropagation sur le « ou exclusif » ou un cercle ; le fond montre la réponse du réseau |
| 3 | Par cœur ou compris ? | `SurApprentissage` | polynôme de degré 0 à 7 ajusté par moindres carrés à 8 points ; erreur à l'entraînement et à l'examen (30 points) |
| 4 | Les données font le modèle | `Biais` | 5 plus proches voisins, photos au soleil et à l'ombre : données déséquilibrées ou équilibrées, score par groupe |
| ✓ | Bilan | tableau | supervisé, non supervisé, par renforcement, auto-supervisé, avec renvois |

## Choix et limites

- **Données inventées et minuscules**, tirées par un générateur reproductible :
  les résultats sont les mêmes à chaque visite. Le décalage des couleurs à
  l'ombre est un modèle simplifié, dit comme tel.
- **L'étape 4 ne parle pas de visages** dans l'animation, pour rester sur un
  exemple neutre ; l'encart d'histoire fait le lien avec l'étude « Gender
  Shades ».
- **Rétropropagation** : pas d'inventeur unique ; le module suit la
  formulation prudente du dossier `ia-mecanismes.md` (Linnainmaa 1970, Werbos,
  Rumelhart, Hinton et Williams 1986).
