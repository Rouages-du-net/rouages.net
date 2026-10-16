# Scénario — « Les IA qui classent »

*Ranger des cas dans des cases, et ce que cela change quand ce sont des
personnes.* Statut : **publié** (`/modules/ia-classer/`), relecture humaine à
faire. Faits sourcés dans [`docs/sources/ia-classer.md`](../sources/ia-classer.md).

## Place dans la famille « L'IA »

Premier module « par but » après le module transversal « Comment apprend une
machine », vers lequel il renvoie. La carte des IA (`src/lib/carte-ia.ts`)
pointe ici depuis la ligne « qui classent ». Les réseaux bayésiens et
l'explicabilité au sens large sont gardés pour « Les IA qui décident pour
nous » ; ici, l'arbre de décision suffit à montrer un modèle lisible.

## Intention

Beaucoup d'IA ne font que classer. Le module part d'un cas familier (le spam),
montre un vrai classeur qu'on entraîne soi-même, puis les deux questions qui
comptent : quelle erreur préfère-t-on (le seuil), et peut-on lire le
raisonnement (l'arbre). Il finit par des classements qui touchent des
personnes, avec le droit qui les encadre.

**Fil conducteur** : ta boîte de courriels, puis une pile de candidatures.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'un classeur range des cas dans des catégories fixées par des humains,
   en apprenant sur des exemples déjà triés ;
2. comment un filtre bayésien naïf combine des indices (les mots), et
   pourquoi il est « naïf » (il ne comprend ni l'ordre ni la négation) ;
3. qu'il existe deux erreurs (faux positifs, faux négatifs), qu'un seuil
   arbitre entre elles, et que ce choix dépend du coût de chaque erreur ;
4. qu'un arbre de décision se lit, ce qui permet de repérer un raccourci ;
5. que retirer une colonne sensible ne suffit pas à supprimer un biais
   (variable indirecte), et que le droit européen encadre les décisions
   automatisées (RGPD art. 22, AI Act annexe III).

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Trier, c'est décider | `Trier` | six courriels à trier soi-même, avec les indices révélés après chaque choix |
| 1 | Compter les mots | `FiltreSpam` | filtre bayésien entraîné sur 24 courriels : on écrit un message, on voit la probabilité et le poids de chaque mot, on lui apprend de nouveaux exemples |
| 2 | Le seuil | `Seuil` | 24 courriels jamais vus placés selon leur probabilité ; curseur de seuil et matrice de confusion |
| 3 | Un arbre qui s'explique | `ArbreCourriel` | arbre ID3 sur cinq questions lisibles ; avec « contact », il prend un raccourci ; on retire des questions et on lit ses erreurs |
| 4 | Quand on classe des personnes | `TriCV` | arbre entraîné sur 300 décisions de recrutement passées (inventées) ; retirer « genre », puis « interruption de carrière » ; taux de sélection par groupe |
| ✓ | Bilan | tableau | faux positifs et faux négatifs de cinq classements de la vie courante |

## Choix et limites

- **Courriels et candidatures inventés** (`src/lib/classer.ts`), adresses en
  `.example`, aucune marque réelle imitée. Le cas « vraie banque » montre la
  limite du modèle (négation ignorée).
- **Seuil** : l'échelle de l'axe est logistique, pour que les probabilités
  très proches de 0 ou de 1 restent visibles.
- **Tri de CV** : l'historique est un modèle simplifié et assumé comme tel
  (interruption de carrière plus fréquente chez les femmes). Le texte ne
  présente pas ces chiffres comme des statistiques réelles.
- **Cas réels** : Pays-Bas (*toeslagenaffaire*) et Ofqual 2020, avec la
  position des autorités. L'algorithme de la CNAF n'est pas traité faute de
  réponse officielle trouvée.
- **SCHUFA** porte sur le crédit : l'appliquer au recrutement serait une
  analogie, le texte ne l'affirme pas.
