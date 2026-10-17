# Scénario — « PageRank : les liens comme des votes »

*Classer des pages par les liens qu'elles reçoivent, et ce que cela entraîne.*
Statut : **publié** (`/modules/pagerank/`, section « Recommander »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/recommander-sans-ia.md`](../sources/recommander-sans-ia.md),
thème 3.

## Intention

Faire calculer un vrai PageRank sur un petit web, montrer le surfeur
aléatoire qui le retrouve par simulation, montrer la triche (fermes de liens)
et une parade (TrustRank), puis démonter le mythe d'une invention isolée en
rendant visibles les antécédents (citations, Katz, Pinski et Narin, RankDex de
Robin Li, HITS) et Karen Spärck Jones. Finir sur les enjeux de concurrence,
datés.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Un lien, une voix ? | `Reseau` | 7 pages inventées ; taille selon liens reçus ou PageRank ; ajouter ou retirer un lien (listes déroulantes, accessibles au clavier) ; tableau des deux classements |
| 1 | Le surfeur aléatoire | `Surfeur` | d réglable ; 1, 100 ou 2 000 clics ; temps passé comparé au PageRank |
| 2 | Les fermes de liens | `Ferme` | 0 à 60 pages qui pointent vers la boutique ; départ uniforme ou depuis des sites de confiance (TrustRank) |
| 3 | Bien avant Google | tableau | jalons 1953-1998 |
| 4 | Un classement, des milliards en jeu | — | procédures États-Unis, UE, Japon, état au 17 octobre 2026 |
| ✓ | Et aujourd'hui ? | texte | ce que Google dit de PageRank |

## Choix et limites

- **Formule normalisée** (1 − d)/N, signalée au niveau 🔴 : la formule de
  1998 donne une somme égale à N.
- **d** présenté comme la part des clics qui **suivent** un lien (l'article de
  1998 inverse la phrase par rapport à sa formule).
- **RankDex** n'est pas présenté comme PageRank : texte des liens, sans calcul
  récursif. Date de fondation de Baidu : année seulement.
- **Concurrence** : on précise que les procédures ne portent pas sur PageRank.
  Audience d'appel aux États-Unis non vérifiée, donc non publiée.
- **Écartés** : le jeu de mots « Page/page », la fin de la « Toolbar
  PageRank » (non vérifiés).
