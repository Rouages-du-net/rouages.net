# Scénario — « Classer par les notes »

*Passer de milliers d'avis à une liste ordonnée, sans se faire avoir.*
Statut : **publié** (`/modules/classer-notes/`, section « Recommander »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/recommander-sans-ia.md`](../sources/recommander-sans-ia.md),
thème 2.

## Intention

Montrer, sans IA, que classer par les notes est déjà un choix technique et
politique : quelle confiance accorder à peu d'avis, quelle place laisser au
temps, qui écrit des avis, et comment la triche s'y glisse. Préparer le module
« Les IA qui recommandent ».

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | La moyenne trompe | `Palmares` | 7 produits inventés ; tri par moyenne, nombre d'avis, moyenne bayésienne (m réglable, C = moyenne du site) ou borne de Wilson ; ajouter un avis, acheter 30 faux avis |
| 1 | Combien d'avis pour être sûr ? | `Intervalle` | avis positifs et négatifs ; intervalle de Wilson à 95 % ; exemples 2/2, 100/101… |
| 2 | Ce qui est frais | `Tendance` | 8 publications inventées sur 48 h ; tri par total, formule « hot » de Reddit, formule d'Anarki (Hacker News) |
| 3 | Les avis en J | `AvisJ` | 5 000 opinions en cloche ; biais d'achat et de déclaration ; histogramme publié en J |
| 4 | Les faux avis | — | texte : Yelp (Luca et Zervas), Amazon (He et al.), contrôle européen 2022 ; droit UE, France, FTC daté |
| ✓ | Lire une note sans se faire avoir | tableau | cinq réflexes |

## Choix et limites

- **Formules publiées seulement** : IMDb (Top 250), code archivé de Reddit,
  Anarki (pas le code de production de Hacker News, dit sur la page).
- **Avis en J** : simulation simplifiée (l'avis réel sert aussi d'attrait
  avant achat) ; l'expérience du disque (60 étudiant·es) est présentée comme
  petite.
- **Chiffres de faux avis** : « 16 % d'avis filtrés à Boston », pas « 16 % de
  faux avis » ; le « 55 % » européen = sites potentiellement en infraction.
- **Peines françaises** : citées d'après la réponse du Gouvernement (2023) ; à
  revérifier sur Légifrance (inaccessible au robot de recherche).
- **Personnes** : peu de femmes dans ce module ; à compléter à la relecture.
