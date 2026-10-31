# Scénario — « Une machine peut-elle penser ? »

*Imiter, comprendre, manipuler des symboles.* Statut : **publié**
(`/modules/machine-pense/`, section « Penser la technique »), relecture
humaine à faire. Faits sourcés dans
[`docs/sources/penser-la-technique.md`](../sources/penser-la-technique.md),
thème 2.

## Intention

Faire vivre de l'intérieur trois expériences sur la compréhension : être
trompé·e par ELIZA, être la personne de la chambre chinoise, deviner si une
phrase a été pensée ou fabriquée. Montrer que la question « une machine
peut-elle penser ? » en cache plusieurs, et présenter les positions opposées
sur les grands modèles de langage.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Le jeu de l'imitation | texte | Turing (1950), version homme/femme, prédiction des 70 %, erreur de calcul volontaire, objection de Lady Lovelace ; Jones et Bergen (2025) |
| 1 | L'illusion d'ELIZA | `Eliza` | un mini-ELIZA français (8 règles), affichage de la règle utilisée |
| 2 | La chambre chinoise | `Chambre` | un livre de 4 règles, des questions en chinois, traduction cachée ou visible ; objections et réponses |
| 3 | Des perroquets ? | `Perroquet` | phrases du corpus ou fabriquées par le modèle bigramme du site ; Bender, Gebru et al. (2021) contre Microsoft Research (2023) |
| ✓ | Ce que la question demande vraiment | tableau | cinq questions, qui les a posées, ce qu'on sait |

## Choix et limites

- **ELIZA** : script inventé en français, sur le principe de 1966 (mots-clés,
  phrases à trous, inversion des pronoms) ; ce n'est pas le script DOCTOR
  d'origine. Rien n'est envoyé hors du navigateur.
- **Chambre chinoise** : quatre phrases chinoises simples, avec leur
  traduction ; le livre de Searle est immense, ici en miniature.
- **Perroquet** : réutilise `NGramme` et le corpus de `minilm.ts` ; les
  phrases fabriquées sont tirées jusqu'à en trouver une absente du corpus.
- **Mythes** : le jeu de l'imitation ne prétend pas mesurer la pensée ;
  « effet ELIZA » n'est pas de Weizenbaum ; la chambre chinoise ne « prouve »
  pas qu'une IA ne pensera jamais.
- Page marquée `evolutif` : l'étude de 2025 est une prépublication, et le débat
  sur les grands modèles bouge vite.
