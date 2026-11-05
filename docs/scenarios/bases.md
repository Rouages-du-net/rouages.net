# Scénario — « Compter en binaire, octal et hexadécimal »

*Un outil pour les cours.* Statut : **publié** (`/modules/bases/`), relecture
humaine à faire. Sources : [`docs/sources/bases-ip.md`](../sources/bases-ip.md).

## Intention

Montrer qu'une base n'est qu'une taille de paquets, faire « sentir » la
retenue avec des roues (rouages, comme le logo du site), puis donner deux
recettes de conversion et les raccourcis binaire ↔ hexadécimal/octal.

## Les étapes

| # | Étape | Animation | Contenu |
|---|---|---|---|
| 0 | Compter par paquets | `bases/Paquets` (pas à pas) | 0 à 100 jetons rangés en paquets de 10, 2, 8 ou 16 ; chiffres = nombres de paquets |
| 1 | Le compteur à rouages | `bases/CompteurRouages` | Le même nombre (0 à 4 095) sur quatre rangées de roues ; retenues visibles ; bits cliquables ; comptage automatique limité à 16 pas |
| 2 | Passer d'une base à l'autre | `bases/Conversion` (pas à pas) | Divisions successives (restes lus de bas en haut) ; chiffres × poids |
| 3 | Les raccourcis | `bases/GroupesBits` | 12 bits groupés par 4 (hexa, couleur CSS #RGB) ou par 3 (octal, droits Unix rwx) |
| ✓ | Ce qu'il faut retenir | liste | cinq points |

## Choix et limites

- Calculs dans `src/lib/bases.ts` (sans DOM).
- Hexadécimal affiché en majuscules dans ce module ; les adresses IPv6 sont en
  minuscules dans le module suivant (RFC 5952).
- Nombres négatifs et à virgule : renvoi au module ordinateur.
