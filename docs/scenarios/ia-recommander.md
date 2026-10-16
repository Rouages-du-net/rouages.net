# Scénario — « Les IA qui recommandent »

*Qui choisit ce qu'on te montre, et pour quoi faire.* Statut : **publié**
(`/modules/ia-recommander/`), relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-recommander.md`](../sources/ia-recommander.md).

## Intention

Faire manipuler les deux grandes techniques (voisins de goût, factorisation de
matrice), puis montrer que le cœur politique d'une recommandation est
l'**objectif chiffré** choisi par l'entreprise, et les boucles qu'il crée.
Présenter le débat sur les bulles de filtre et la santé des jeunes sans
trancher, avec les limites de chaque étude, et finir sur ce que chacun·e peut
faire, appuyé sur le DSA.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Les gens qui te ressemblent | `Voisins` | notes de 12 vidéos fictives ; corrélation de Pearson avec 8 personnes fictives ; notes prédites |
| 1 | Des goûts cachés | `GoutsCaches` | factorisation de matrice en 2 dimensions, entraînée par passages de 20 ; les thèmes se regroupent seuls |
| 2 | Ce qu'on optimise | `Fil` | thèmes aimés ; curseur entre « ce qui te plaît » et « le temps passé » ; les vidéos « choc » montent |
| 3 | La boucle de popularité | `Boucle` | 12 morceaux, 1 500 auditeurs, sans et avec classement visible ; gagnants et indice de Gini (inspiré de MusicLab) |
| 4 | Une bulle autour de toi ? | — | texte : études Facebook 2015 et 2023 et leurs critiques, YouTube 2020-2024, santé des jeunes, DSA, procédures et lois françaises datées |
| ✓ | Reprendre la main | tableau | fil sans profilage, explications, historique, signaux ; biais de genre en musique (Ferraro, Serra, Bauer) |

## Choix et limites

- **Données inventées** (`src/lib/recommander.ts`) : vidéos, personnes et
  hypothèses de la simulation du fil (les vidéos « choc » retiennent plus
  sans plaire plus) sont affichées comme inventées.
- **MusicLab** est présenté comme une analogie (influence sociale), pas comme
  une étude d'algorithme.
- **Bulles** : ni « c'est prouvé » ni « c'est un mythe » ; on distingue
  ségrégation de l'information, part de l'algorithme et effet sur les
  opinions. Les études faites avec Meta sont signalées comme telles.
- **Santé** : l'avis du Surgeon General n'a été lu que via NPR ; à relire dans
  le PDF officiel. Pas d'« addiction » présentée comme diagnostic.
- **Régulation** : « conclusions préliminaires », jamais « sanction » ; état
  au 16 octobre 2026, à mettre à jour.
- **Personnes mises en avant** : Pattie Maes, Christine Bauer, Candice Odgers,
  Virgílio Almeida (Brésil). Aucune voix africaine ou asiatique vérifiée dans
  ce lot : à chercher.
