# Scénario — « Les IA qui entendent et parlent »

*Pour une machine, une voix n'est qu'une suite de nombres.* Statut : **publié**
(`/modules/ia-entendre/`), relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-entendre.md`](../sources/ia-entendre.md).

## Intention

Montrer la chaîne complète, dans les deux sens : mesurer un son
(échantillonnage), le voir (spectrogramme), en extraire ce qui compte (les
formants), reconnaître une voyelle, puis fabriquer une voix. Finir sur ce que
la voix a de personnel : écoutes des assistants vocaux, voix clonées, droit.

**Fil conducteur** : cinq voyelles du français (i, é, a, o, ou), dites par un
homme, une femme ou un enfant.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Le son en nombres | `Echantillons` | hauteur du son et nombre de mesures par seconde ; repliement visible et audible |
| 1 | Voir le son | `Spectrogramme` | spectrogramme de « a… i… ou » synthétisés, pour trois voix ; écoute |
| 2 | Reconnaître une voyelle | `Voyelles` | formants estimés par prédiction linéaire, plan (F1, F2), plus proche modèle ; modèles tirés de voix d'hommes (5/5, 4/5, 3/5) ou de voix variées (15/15) |
| 3 | Faire parler une machine | `Voder` | synthétiseur à formants : f0, F1, F2, et cinq voyelles prêtes |
| 4 | Ta voix, une donnée sensible | — | texte : écoutes humaines (2019), voix clonées (Arup, New Hampshire), FCC, AI Act art. 50 |
| ✓ | Bilan | tableau | cinq usages et la question à poser |

## Choix et limites

- **Tout est synthétisé** (`src/lib/son.ts`), rien n'est enregistré : pas de
  micro, donc aucune donnée vocale du visiteur. Le son ne joue qu'après un clic.
- **Formants** : valeurs de référence de Calliope pour les hommes ; femmes et
  enfants par facteurs d'échelle (Peterson et Barney, anglais), présentés
  comme des ordres de grandeur.
- **Reconnaissance volontairement simple** (deux formants, plus proche
  modèle) : les systèmes réels utilisent des réseaux de neurones sur le
  spectrogramme entier ; le texte le dit.
- **Données de santé** : aucune mention de la maladie de personnes citées
  (Klatt, etc.).
