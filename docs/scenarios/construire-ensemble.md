# Scénario — « Construire ensemble »

*Comment des milliers de bénévoles construisent des biens communs, et les
règles qui les font durer.* Statut : **publié** (`/modules/construire-ensemble/`,
section « L'intelligence collective »), relecture humaine à faire. Faits
sourcés dans [`docs/sources/intelligence-collective.md`](../sources/intelligence-collective.md),
thème 2.

## Intention

Après la foule qui *rassemble* des réponses (« La sagesse des foules »),
montrer des communautés qui *travaillent* ensemble : logiciel libre,
Wikipédia, OpenStreetMap, sciences participatives, Ushahidi. Faire sentir
trois mécanismes avec de petites simulations (la surveillance partagée, les
avis croisés, des règles pour une ressource commune), puis poser la question
de qui participe.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Écrire ensemble | `Patrouille` | 0 à 100 veilleur·ses qui regardent la page une minute sur cent ; durée de visibilité de 20 dégradations |
| 1 | Cartographier ensemble | texte | Ushahidi (Kenya, 2008), OpenStreetMap et HOT (Haïti, 2010) |
| 2 | Classer des galaxies | `Galaxies` | 1 à 15 avis par galaxie, fiabilité de 55 à 95 % ; 40 galaxies affichées, taux sur 2 000 |
| 3 | Des règles pour durer | `Communs` | un lac partagé par six personnes sur trente saisons : sans règle, quota non surveillé, quota surveillé avec sanctions graduées |
| 4 | Qui participe ? | texte | écart de genre sur Wikipédia, 0,1 % des comptes d'OSM, Common Voice, Masakhane |
| ✓ | Ce qui fait tenir un commun | tableau | cinq ingrédients et ce qui arrive sans eux |

## Choix et limites

- **Modèles inventés** (`src/lib/construire.ts`), signalés sous chaque
  animation : la patrouille ignore les robots et les listes de suivi ; les
  galaxies supposent des avis indépendants et une même fiabilité ; le lac suit
  une croissance logistique (capacité 100, taux 0,5), le quota vaut 90 % de la
  prise durable maximale, deux personnes trichent quand rien n'est surveillé.
- **GNU/Linux** : les deux usages du nom sont présentés ; Linux n'est pas
  présenté comme l'origine du logiciel libre.
- **Haïti** : « plusieurs centaines » de bénévoles, les deux chiffres (450,
  Banque mondiale ; 600, OpenStreetMap) dans l'encart des mythes.
- **Foldit** : les « trois semaines » du communiqué sont remises en contexte
  (collaboration avec les chercheur·ses, « over a decade », « a few days »).
- **Hanny van Arkel** : seulement enseignante néerlandaise, bénévole,
  co-autrice de l'article ; aucun détail personnel.
- **Ostrom** : pas de « première femme » (non vérifié) ; la transposition aux
  communs numériques est présentée comme le travail d'autres chercheur·ses.
- **Ushahidi** : seule Ory Okolloh est nommée (source : son propre article) ;
  la liste des autres cofondateur·rices reste à confirmer.
- **Chiffres datés** (Wikipédia en français, enquêtes Wikimedia, Common
  Voice) : page marquée `evolutif`, « état au » dans le texte.
