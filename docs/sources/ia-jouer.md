# Sources — « Les IA qui jouent »

Dossier du module `/modules/ia-jouent/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 25 octobre 2026. Complète
[`ia-intro.md`](ia-intro.md) (§ 3 Samuel, § 6 Deep Blue et AlphaGo, § 8
MENACE, portraits de Feng-hsiung Hsu, Aja Huang et Fan Hui), dont les faits
sont repris sans être recopiés ici.

Niveaux de lecture : **lu**, **lu partiellement**, **résumé seulement**.

## Formulation sûre

Les jeux servent de terrain d'essai à l'IA depuis ses débuts : les règles sont
claires, le résultat aussi. Deux grandes idées s'y relaient. **Chercher** :
explorer l'arbre des coups possibles et des réponses de l'adversaire, aussi
loin que possible (Shannon, 1950 ; Deep Blue, 1997). **Apprendre** : jouer des
milliers de parties et renforcer ce qui gagne (MENACE, 1961 ; TD-Gammon, 1992 ;
AlphaGo, 2016 ; AlphaZero, 2017). Les meilleurs programmes combinent les deux.
Même surhumains, ils gardent des angles morts.

## Faits clés

**Avant les ordinateurs**
- C. Shannon, « Programming a Computer for Playing Chess », *Philosophical
  Magazine*, série 7, vol. 41, n° 314, mars 1950 (reçu le 8 novembre 1949 ;
  présenté le 9 mars 1949 à New York). [1]
  - Le « Turc » de Maelzel (automate joueur d'échecs) était, selon la plupart
    des auteurs, manœuvré par un maître caché ; Edgar Allan Poe a écrit un essai
    à son sujet. [1]
  - « A more honest attempt » : en 1914, L. Torres y Quevedo (Espagne)
    construit une machine qui joue la finale roi et tour contre roi et force le
    mat quelle que soit la défense ; « the idea was quite advanced for that
    period ». [1]
  - Environ 30 coups légaux par position, environ 40 coups par partie :
    « 10^120 variations » depuis la position initiale ; à une variation par
    microseconde, plus de 10^90 ans pour le premier coup. [1]
  - Objectif : « tolerably good » ; le problème « will act as a wedge in
    attacking other problems ». [1]

**Apprendre en jouant**
- G. Tesauro, « Temporal Difference Learning and TD-Gammon », *Communications
  of the ACM* 38(3), mars 1995 (transcription autorisée par l'ACM) : réseau de
  neurones qui apprend son évaluation du backgammon « by playing against
  itself » ; Neurogammon (apprentissage supervisé sur des parties d'experts) gagne
  l'Olympiade informatique de 1989 ; fin 1991, la version 1.0 joue 51 parties
  contre Bill Robertie, Paul Magriel et Malcolm Davis : perte nette de 13 points
  (environ un quart de point par partie) ; version 2.0 en exhibition à la coupe
  du monde de backgammon de 1992. [2]

**Go**
- DeepMind, « AlphaGo's next move » (D. Hassabis, D. Silver, 27 mai 2017) :
  « Future of Go Summit » à Wuzhen (Chine), contre Ke Jie, « Chinese Go
  Grandmaster and world number one » ; parties en ligne précédentes sous le nom
  « Magister (Master) » ; parties en paire humain + AlphaGo ; « our final match
  event with AlphaGo ». Le score n'est pas donné dans ce billet. [3]
- Silver et al., « Mastering Chess and Shogi by Self-Play with a General
  Reinforcement Learning Algorithm » (arXiv 1712.01815, déc. 2017) : AlphaZero,
  « tabula rasa », à partir des seules règles ; niveau surhumain en moins de 24
  heures aux échecs, au shogi (« échecs japonais ») et au go ; bat un programme
  champion du monde dans chaque cas. [4]
- Wang, Gleave et al. (11 auteurs, arXiv 2211.00241, 2022-2023) : des
  « politiques adverses » battent KataGo réglé à un niveau surhumain dans plus de
  97 % des parties ; elles ne jouent pas bien, elles le piègent ; l'attaque est
  assez compréhensible pour que des expert·es humain·es la reproduisent sans aide
  et battent régulièrement des IA surhumaines ; la faille persiste après un
  entraînement défensif. [5]

**Poker**
- Meta AI et Carnegie Mellon, « Pluribus » (11 juillet 2019) : premier programme
  à battre des professionnel·les au poker Texas Hold'em sans limite à six joueurs ;
  information cachée, bluff ; apprentissage en jouant contre lui-même, sans
  exemples humains ; s'appuie sur Libratus (2017, deux joueurs) et sur le
  laboratoire de Tuomas Sandholm ; entraînement équivalent à moins de 150 dollars
  de calcul en nuage ; environ 5 dollars gagnés par main, si chaque jeton valait
  un dollar. [6]

**Jeux vidéo**
- Mnih et al. (DeepMind, arXiv 1312.5602, déc. 2013) : un réseau de neurones
  apprend à jouer à sept jeux Atari 2600 à partir des pixels, par
  apprentissage par renforcement ; meilleur que les approches précédentes sur
  six, meilleur qu'un expert humain sur trois. [7]

**MENACE (règles)**
- O. Child, *Chalkdust* (13 mars 2016) : 304 boîtes ; MENACE joue en premier ;
  perles au départ : 4 par coup possible au 1er tour, 3 au 2e, 2 au 3e, 1 au
  4e ; défaite : on retire les perles jouées ; nul : une perle ajoutée ; victoire :
  trois perles ajoutées ; positions symétriques confondues. [8] (voir aussi
  `ia-intro.md` § 8)

## Sources

1. Shannon, C. E. (1950). « Programming a Computer for Playing Chess ». *Philosophical Magazine* 41(314). Copie PDF : https://vision.unipv.it/IA1/ProgrammingaComputerforPlayingChess.pdf — P, en, **lu partiellement** (§ 1-3).
2. Tesauro, G. (1995). « Temporal Difference Learning and TD-Gammon ». *CACM* 38(3). https://bkgm.com/articles/tesauro/tdl.html — P (transcription autorisée), en, **lu partiellement**.
3. Hassabis, D., Silver, D. (27 mai 2017). « AlphaGo's next move ». https://deepmind.google/discover/blog/alphagos-next-move/ — P (entreprise concernée), en, **lu**.
4. Silver, D. et al. (2017). arXiv:1712.01815. https://arxiv.org/abs/1712.01815 — R, en, **résumé seulement**.
5. Wang, T. T. et al. (2023). « Adversarial Policies Beat Superhuman Go AIs ». arXiv:2211.00241. https://arxiv.org/abs/2211.00241 — R, en, **résumé seulement**.
6. Meta AI (11 juillet 2019). « Facebook, Carnegie Mellon build first AI that beats pros in 6-player poker ». https://ai.meta.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/ — P (entreprise concernée), en, **lu partiellement**.
7. Mnih, V. et al. (2013). « Playing Atari with Deep Reinforcement Learning ». arXiv:1312.5602. https://arxiv.org/abs/1312.5602 — R, en, **résumé seulement**.
8. Child, O. (13 mars 2016). « Menace: the Machine Educable Noughts And Crosses Engine ». *Chalkdust*. https://chalkdustmagazine.com/features/menace-machine-educable-noughts-crosses-engine/ — Pr, en, **lu**.

## Points d'attention

- **Torres Quevedo** : Shannon donne 1914 (d'après Vigneron, 1914) ; d'autres
  sources datent la construction de 1912 (non lu ici) : écrire « présentée en
  1914 » ou « vers 1912-1914 ». Ne pas en faire « le premier ordinateur » : c'est
  un automate électromécanique pour une finale précise.
- **Le Turc** : c'est un canular (un joueur caché), pas une IA. Le nom
  « Mechanical Turk » d'Amazon en vient (non sourcé ici, ne pas l'affirmer).
- **Ke Jie** : score de Wuzhen non lu, ne pas le donner.
- **AlphaZero** : chiffres de DeepMind sur son propre programme ; « moins de 24
  heures » dépend d'une puissance de calcul considérable (non chiffrée ici).
- **Pluribus** : « 150 dollars » est le chiffre de l'entreprise.
- **KataGo** : ne pas nommer les joueur·ses humain·es (lu seulement dans la
  presse) ; rester sur le résultat de l'article.
- **Deep Blue** ne s'entraînait pas par apprentissage automatique (`ia-intro.md`
  § 6) : recherche + évaluation réglée à la main + puces dédiées.
