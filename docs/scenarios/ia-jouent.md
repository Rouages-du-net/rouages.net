# Scénario — « Les IA qui jouent »

*Chercher dans l'arbre des coups, apprendre en jouant, et les angles morts des
IA surhumaines.* Statut : **publié** (`/modules/ia-jouent/`, section
« L'IA »), relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-jouer.md`](../sources/ia-jouer.md) et
[`docs/sources/ia-intro.md`](../sources/ia-intro.md).

## Intention

Montrer les deux grandes idées des IA de jeu, chercher et apprendre, sur un
seul jeu que tout le monde connaît, le morpion, avec de vrais calculs :
minimax et alpha-bêta, MENACE, Monte-Carlo. Raconter l'histoire au-delà des
échecs (Espagne 1914, Royaume-Uni 1961, Corée et Chine pour le go, poker), et
finir sur les failles des IA surhumaines.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | L'arbre des coups | `Arbre` | une partie contre minimax ; positions examinées avec ou sans élagage alpha-bêta (549 946 contre 18 297 depuis la grille vide) |
| 1 | Apprendre en jouant | `Menace` | MENACE contre un adversaire au hasard ou parfait, par séries de 20 parties ; perles de la première boîte |
| 2 | Le go et le hasard | `MonteCarlo` | trois positions à un seul coup gagnant ; 1 à 1 000 parties au hasard par coup, comparées au verdict exact |
| 3 | Cartes cachées | texte | Libratus, Pluribus ; Atari (DQN) |
| 4 | Pas invincibles | texte | politiques adverses contre KataGo ; lien vers « Les IA qu'on trompe exprès » |
| ✓ | Chercher ou apprendre | tableau | six programmes, de 1914 à 2019 |

## Choix et limites

- **Calculs réels** (`src/lib/morpion.ts`). MENACE suit les règles de perles
  de *Chalkdust* (secondaire) ; quand une boîte est vide, il abandonne (choix
  de l'animation). Il confond les positions symétriques et ne garde qu'un coup
  par classe de coups équivalents, comme l'original.
- **Monte-Carlo** : positions choisies pour n'avoir qu'un coup gagnant (une
  « fourchette ») ; avec 30 parties par coup ou plus, le meilleur score le
  trouve pour les graines testées ; avec 1 ou 10, il peut se tromper.
- **Chiffres d'entreprises** (AlphaZero en 24 heures, Pluribus pour 150
  dollars) présentés comme tels.
- **Personnes** : Fan Hui, Lee Sedol, Ke Jie, Aja Huang, Feng-hsiung Hsu,
  Garry Kasparov cités pour leur rôle public ; aucun détail personnel.
  Torres Quevedo par son initiale (prénom non lu dans les sources).
- Score de Wuzhen (2017) non donné : non lu.
