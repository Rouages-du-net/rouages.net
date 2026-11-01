# Scénario — « Les IA qui prédisent »

*Météo, consommation d'électricité, corrélation et causalité, police
prédictive.* Statut : **publié** (`/modules/ia-predire/`, section « L'IA »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-predire.md`](../sources/ia-predire.md).

## Intention

Montrer qu'une prédiction s'appuie sur le passé et sur des corrélations, et
en tirer trois questions : fait-elle mieux qu'une méthode naïve, prédit-elle
ou explique-t-elle, et change-t-elle ce qu'elle prédit ? Partir de la météo,
où les IA récentes complètent la physique, pour finir sur la police
prédictive, où la prédiction fabrique ses propres données.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Prévoir le temps | texte | Richardson (1922), ENIAC (1950), GraphCast (2023), AIFS de l'ECMWF (2025) |
| 1 | Prévoir la consommation | `Serie` | quatre méthodes (dernier jour, semaine précédente, moyenne, modèle jour + température) ; vague de froid ; erreur moyenne |
| 2 | Prédire n'est pas expliquer | `Correlation` | glaces et coups de soleil ; comparer à température égale ; interdire les glaces |
| 3 | Prédire les délits ? | `Boucle` | réalité (délits égaux ou doublés en B) ; méthode naïve ou corrigée ; quartier patrouillé jour par jour |
| ✓ | Questions à poser à une prédiction | liste | cinq questions |

## Choix et limites

- Données et modèles inventés (`src/lib/predire.ts`) ; seul l'ordre de
  grandeur de la sensibilité au froid (2,4 GW par degré) vient de RTE.
- La boucle de police reprend le mécanisme décrit par Ensign et al. (2018) en
  version « le quartier le plus enregistré gagne tout » ; ce n'est pas le
  fonctionnement d'un logiciel précis.
- L'article de Lum et Isaac n'a pas été lu (accès refusé) : la page s'appuie
  sur la FAQ et la communication de K. Lum.
- Le rôle de Klara von Neumann dans les prévisions de 1950 n'a pas pu être
  vérifié dans l'article : non publié.
- L'étape 3 renvoie à l'animation des contrôles du module « Les IA qui
  décident pour nous », qui montre une boucle voisine.
