# Scénario — « La technique est-elle neutre ? »

*Kranzberg, les ponts de Moses, « Code is law », Jevons, Collingridge, McLuhan.* Statut : **publié**
(`/modules/technique-neutre/`, section « Penser la technique »), relecture
humaine à faire. Faits sourcés dans
[`docs/sources/penser-la-technique.md`](../sources/penser-la-technique.md),
thèmes 4 et 4 bis.

## Intention

Défaire l'idée « ce n'est qu'un outil » avec trois mécanismes manipulables :
un objet qui exclut sans loi (le pont), le code comme régulateur (Lessig), une
efficacité qui fait consommer plus (Jevons). Démonter au passage un mythe des
études sur la technique : le récit des ponts de Robert Moses, contesté.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Ni bonne, ni mauvaise, ni neutre | texte | Kranzberg (1986), le DDT en Occident et en Inde |
| 1 | Les objets font-ils de la politique ? | `Pont` | hauteur des ponts (2 à 4,5 m) ; véhicules qui passent ; part des habitant·es privé·es de plage (ville inventée) |
| 2 | Le code est la loi | `Code` | loi, normes, marché, architecture ; part des 1 000 personnes qui copient |
| 3 | Plus efficace, plus consommé | `Jevons` | efficacité (× 1 à × 4), élasticité de la demande (0,2 à 2) ; service et énergie consommés |
| 4 | Trop tôt pour savoir, trop tard pour changer | `Collingridge` | année de la décision (0 à 30) ; détecter tôt ses effets ; garder la technique réversible ; diffusion, savoir, coût et « fenêtre » (technique inventée) ; histoire : la voiture en 1908, le plomb dans l'essence (EPA contre Ethyl, fin en 2021), les CFC |
| 5 | Le médium est le message | texte | McLuhan (1964), la lumière électrique ; critique de Raymond Williams (1974) ; mythe « Gutenberg a inventé l'imprimerie » (le *Jikji*, 1377) |
| ✓ | Questions à poser à une technique | liste | sept questions |

## Choix et limites

- Modèles inventés (`src/lib/neutre.ts`), signalés sous chaque animation.
- **Winner (1980)** non lu (copies inaccessibles) : son exemple est rapporté
  comme un récit, avec le résumé de Joerges (1999) qui le juge contraire aux
  faits ; l'animation ne prétend pas raconter Long Island.
- Collingridge et McLuhan ajoutés en complément (étapes 4 et 5). Collingridge
  (1980) **lu** pour la préface et les chapitres 1, 3, 9 (p. 141-158), 10 et 11, d'après
  des pages scannées transmises par le mainteneur : citations directes.
  McLuhan (1964) et Williams (1974) non lus : McLuhan d'après le dictionnaire
  de citations de sa succession, Williams d'après une recension brésilienne
  (citations traduites du portugais, ce que la page signale).
- Le modèle du dilemme (`collingridge()` dans `src/lib/neutre.ts`) est
  inventé ; seuils « on sait assez » et « abordable » fixés à la moitié.
