# Sources — Histoire de l'intelligence artificielle

Dossier de sources pour les entrées « Intelligence artificielle » de
[`PERSONNES.md`](../PERSONNES.md), établi selon la [charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 11 octobre 2026
- **Labels Wikipédia** vérifiés via l'API Wikipédia (catégories *Article de
  qualité* / *Bon article* en FR, *Featured* / *Good articles* en EN).
- **Archives** : liens fournis par l'API Wayback quand un instantané existe ;
  « aucune » = pas d'instantané. Les pages d'archive elles-mêmes n'ont pas pu
  être ouvertes depuis l'environnement de recherche.
- Toutes les URL ont été ouvertes ; quand seul un résumé ou des métadonnées
  ont pu être lus, c'est indiqué.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution/musée

Sommaire : les pionniers des réseaux de neurones et de la recherche
d'information · données, biais et travail humain · à vérifier plus tard.

---

## Frank Rosenblatt

**Tableau corrigé** — Où : États-Unis (Cornell Aeronautical Laboratory, Buffalo, puis Université Cornell, Ithaca) · Quand : 1957–1958 · Pourquoi : le perceptron, premier modèle de réseau de neurones qui apprend à partir d'exemples, simulé sur IBM 704 puis construit en machine (Mark I, 1960) *(changements : « 1958 » → « 1957–1958 », puisque le projet et le premier rapport datent de 1957 ; ajout du lieu précis ; « perceptron » précisé)*

**Faits clés**
- Le projet PARA (*Perceiving and Recognizing Automaton*) est un programme interne du Cornell Aeronautical Laboratory, en cours depuis plus d'un an quand l'Office of Naval Research (ONR) commence à le financer en juillet 1957. À l'automne 1957, la théorie est posée et une simulation démarre sur un IBM 704 [2].
- L'article fondateur est F. Rosenblatt, « The perceptron: A probabilistic model for information storage and organization in the brain », *Psychological Review* 65(6), p. 386-408, 1958 [3]. Il est précédé du rapport technique CAL 85-460-1 de janvier 1957 (référence bibliographique seulement, voir « Non vérifié »).
- En juillet 1958, l'ONR fait une démonstration publique : l'IBM 704, nourri de cartes perforées, apprend en 50 essais à distinguer les cartes marquées à gauche de celles marquées à droite. La presse s'emballe ; le *New York Times* titre sur un appareil « qui apprend en faisant » [1].
- Le Mark I Perceptron, un classifieur visuel matériel, est construit ensuite. La machine originale est conservée par la Smithsonian Institution [1][5].
- Antécédent direct : le neurone formel de McCulloch et Pitts, « A logical calculus of the ideas immanent in nervous activity », *Bulletin of Mathematical Biophysics* 5, 1943 [4].
- Le livre *Perceptrons* de Minsky et Papert (1969) est souvent présenté comme la cause de l'« hiver » des réseaux de neurones. Le sociologue Mikel Olazaran montre que ce récit « officiel » a été en partie construit après coup : les financements de Rosenblatt s'étaient taris dès la seconde moitié des années 1960, avant le livre, sur fond de montée de l'IA symbolique financée par l'ARPA [6][7]. Rosenblatt meurt dans un accident de bateau en 1971 [1].

**Sources**
1. Cornell Chronicle, « Professor's perceptron paved the way for AI – 60 years too soon », Université Cornell, 2019 — https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon — Pr — en — archive : http://web.archive.org/web/20261008222104/https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon *(lu via WebFetch ; curl reçoit un 403 anti-robot)*
2. F. Rosenblatt, « The Design of an Intelligent Automaton », *Research Trends* (Cornell Aeronautical Laboratory) vol. VI n° 2, été 1958 — https://archive.org/details/sim_research-trends_summer-1958_6_2 — P — en — archive : (document hébergé sur archive.org)
3. F. Rosenblatt, « The perceptron: A probabilistic model for information storage and organization in the brain », *Psychological Review* 65(6):386-408, 1958 — https://doi.org/10.1037/h0042519 — P — en — archive : aucune *(métadonnées Crossref seulement)*
4. W. S. McCulloch & W. Pitts, « A logical calculus of the ideas immanent in nervous activity », *Bulletin of Mathematical Biophysics* 5(4):115-133, 1943 — https://doi.org/10.1007/BF02478259 — P — en — archive : aucune *(métadonnées Crossref seulement)*
5. J. Rothenberg Gritz, « In the early days of machine learning… », *Smithsonian Magazine*, été 2026 — https://www.smithsonianmag.com/innovation/early-days-machine-learning-massive-computers-said-george-harrison-was-woman-ai-come-long-way-180988805/ — Pr — en — archive : http://web.archive.org/web/20261003101838/https://www.smithsonianmag.com/innovation/early-days-machine-learning-massive-computers-said-george-harrison-was-woman-ai-come-long-way-180988805/
6. M. Olazaran, « A Sociological History of the Neural Network Controversy », *Advances in Computers* vol. 37, Academic Press, 1993 — https://gwern.net/doc/ai/nn/1993-olazaran.pdf — R — en — archive : aucune
7. M. Olazaran, « A Sociological Study of the Official History of the Perceptrons Controversy », *Social Studies of Science* 26(3):611-659, 1996 — https://doi.org/10.1177/030631296026003005 — R — en — archive : aucune *(métadonnées Crossref seulement ; la page de l'éditeur renvoie un 403)*

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Frank_Rosenblatt (sans label ; court, ~5 ko) · EN : https://en.wikipedia.org/wiki/Frank_Rosenblatt (sans label ; ~20 ko). **Recommandé : EN (plus complet ; l'article FR, court, mériterait d'être enrichi)**

**Points d'attention**
- Ne pas écrire que le Mark I a été « présenté en 1958 ». En 1958, c'est une **simulation sur IBM 704** qui est montrée [1][2] ; le Mark I est assemblé en 1959-1960. L'article du *Smithsonian Magazine* [5] entretient lui-même cette confusion, il faut donc s'appuyer sur [1][2] pour la chronologie.
- Les promesses extravagantes reprises par la presse en 1958 (une machine qui marcherait, parlerait, aurait conscience d'elle-même) relèvent du battage médiatique de l'ONR et de la presse. Il faut les citer comme telles, pas comme des résultats.
- Il ne faut pas dire que Minsky et Papert ont « tué » les réseaux de neurones à eux seuls ni « causé l'hiver de l'IA ». Le déclin est antérieur et multifactoriel : financements, essor de l'IA symbolique, difficulté d'entraîner les réseaux multicouches [6][7]. Les « hivers de l'IA » au sens courant (rapport Lighthill de 1973, coupes de la DARPA) dépassent largement la question du perceptron.
- Rosenblatt n'a pas inventé le neurone artificiel (McCulloch et Pitts, 1943) [4]. Son apport est l'**apprentissage** des poids et le modèle probabiliste.

---

## Shun-ichi Amari

**Tableau corrigé** — Où : Japon (Université de Kyushu puis Université de Tokyo ; RIKEN) · Quand : 1967– (1967 : apprentissage par gradient stochastique ; 1972 : réseau récurrent à mémoire associative ; années 1980 : géométrie de l'information) · Pourquoi : théorie de l'apprentissage des réseaux de neurones par gradient stochastique, réseau associatif précurseur du réseau de Hopfield, fondation de la géométrie de l'information *(changements : précision des jalons ; ne pas lui attribuer « la » rétropropagation)*

**Faits clés**
- S. Amari, « A Theory of Adaptive Pattern Classifiers », *IEEE Transactions on Electronic Computers* EC-16(3):299-307, juin 1967 [2]. Amari est alors maître de conférences à l'Université de Kyushu (1963-1967), puis à l'Université de Tokyo (à partir de 1967) [1].
- Selon J. Schmidhuber, Amari propose en 1967 d'entraîner des perceptrons multicouches de bout en bout par descente de gradient stochastique. Son élève Saito l'aurait mis en œuvre sur un réseau à cinq couches dont deux modifiables [4]. *(Source secondaire et engagée, voir Points d'attention.)*
- Sur les réseaux récurrents auto-organisés, son article de 1972 est S. Amari, « Learning Patterns and Pattern Sequences by Self-Organizing Nets of Threshold Elements », *IEEE Transactions on Computers* C-21(11):1197-1206 [3]. Selon la Fondation Inamori, ses travaux de 1972 ont influencé les réseaux de Hopfield (1982) et les réseaux récurrents [1].
- Il fonde la géométrie de l'information, qui traite les modèles statistiques comme des variétés riemanniennes (connexions duales), et propose le « gradient naturel » [1].
- **Prix de Kyoto 2025** en technologie avancée (sciences de l'information) — confirmé [1]. Il a dirigé le RIKEN Brain Science Institute de 2003 à 2008 [1].
- La rétropropagation au sens moderne s'appuie sur le mode inverse de la différentiation automatique, décrit par Linnainmaa (mémoire de master de 1970, publié dans *BIT* en 1976) [5]. Elle a été appliquée aux réseaux de neurones par Werbos, puis popularisée par Rumelhart, Hinton et Williams dans *Nature* en 1986 [6].

**Sources**
1. Fondation Inamori, « Shun-ichi Amari — 2025 Kyoto Prize, Advanced Technology », kyotoprize.org — https://www.kyotoprize.org/en/laureates/shun-ichi_amari/ — Pr — en — archive : http://web.archive.org/web/20260822033101/https://www.kyotoprize.org/en/laureates/shun-ichi_amari/
2. S. Amari, « A Theory of Adaptive Pattern Classifiers », *IEEE Trans. Electronic Computers* EC-16(3):299-307, 1967 — https://doi.org/10.1109/PGEC.1967.264666 — P — en — archive : aucune *(métadonnées Crossref seulement ; texte non lu)*
3. S. Amari, « Learning Patterns and Pattern Sequences by Self-Organizing Nets of Threshold Elements », *IEEE Trans. Computers* C-21(11):1197-1206, 1972 — https://doi.org/10.1109/T-C.1972.223477 — P — en — archive : aucune *(métadonnées Crossref seulement)*
4. J. Schmidhuber, « Annotated history of modern AI and deep neural networks », arXiv:2212.11279, 2022 (version révisée en 2025) — https://arxiv.org/abs/2212.11279 — R — en — archive : http://web.archive.org/web/20260908002337/https://arxiv.org/abs/2212.11279
5. S. Linnainmaa, « Taylor expansion of the accumulated rounding error », *BIT* 16(2):146-160, 1976 — https://doi.org/10.1007/BF01931367 — P — en — archive : aucune *(métadonnées Crossref seulement)*
6. D. E. Rumelhart, G. E. Hinton, R. J. Williams, « Learning representations by back-propagating errors », *Nature* 323:533-536, 1986 — https://doi.org/10.1038/323533a0 — P — en — archive : aucune *(métadonnées Crossref seulement)*

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Shun%27ichi_Amari (sans label ; très court, ~3,7 ko, à enrichir) · EN : https://en.wikipedia.org/wiki/Shun%27ichi_Amari (sans label ; ~6 ko). **Recommandé : EN, avec prudence (les deux sont courts ; vérifier les formulations « first » qui reprennent Schmidhuber)**

**Points d'attention**
- **Priorité de la rétropropagation** : ne pas présenter Amari comme « l'inventeur de la rétropropagation ». Son travail de 1967 porte sur la descente de gradient stochastique appliquée à des classifieurs adaptatifs ; il ne décrit pas l'algorithme de rétropropagation tel qu'on l'entend depuis 1986. On peut proposer : « l'un des premiers à entraîner des réseaux multicouches par gradient stochastique ». L'affirmation « premier MLP entraîné par SGD » vient surtout de Schmidhuber [4], qui défend activement la priorité de chercheurs ignorés : à présenter comme « selon… ».
- **« Réseau de Hopfield-like »** : on peut écrire « modèle de mémoire associative récurrente (1972) qui annonce le réseau de Hopfield (1982) ». Certains parlent de « réseau d'Amari-Hopfield » [4], mais cette appellation n'est pas d'usage général.
- Le prix de Kyoto 2025 est confirmé [1]. Le « ? » du tableau peut être retiré.
- La chaîne de la rétropropagation (Linnainmaa 1970/1976, Werbos 1974, Rumelhart et al. 1986) est à présenter comme une histoire à plusieurs mains, sans « premier » unique. La thèse de Werbos (1974) n'a pas été consultée ici.

---

## Kunihiko Fukushima

**Tableau corrigé** — Où : Japon (NHK Broadcasting Science Research Laboratories, Tokyo) · Quand : 1979–1980 (Cognitron 1975) · Pourquoi : le néocognitron, réseau hiérarchique inspiré du cortex visuel, insensible à la position des formes, et précurseur architectural des réseaux convolutifs *(changements : « ancêtre » nuancé en « précurseur architectural » ; affiliation précisée : Broadcasting Science Research Laboratories, et non « Science & Technical Research Laboratories »)*

**Faits clés**
- K. Fukushima, « Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position », *Biological Cybernetics* 36:193-202, 1980. L'affiliation indiquée est « NHK Broadcasting Science Research Laboratories, Kinuta, Setagaya, Tokyo ». Une note précise que des rapports préliminaires ont paru en 1979 [1][2].
- Le néocognitron prolonge le cognitron (1975), dont la réponse dépendait de la position du motif [1][3]. Il alterne des couches de cellules S (extraction de traits) et C (tolérance au décalage), inspirées de la hiérarchie de Hubel et Wiesel [1].
- Il s'auto-organise par « apprentissage sans professeur » (non supervisé) et ne s'entraîne pas par rétropropagation [1].
- La fonction de sortie des cellules S de l'article de 1980 est une rectification : φ[x] = x si x ≥ 0, 0 sinon (éq. 2), c'est-à-dire l'équivalent de la ReLU actuelle [1]. L'article de 1969, « Visual Feature Extraction by a Multilayered Network of Analog Threshold Elements » (*IEEE Trans. Systems Science and Cybernetics* 5(4)), utilise des « éléments à seuil analogiques » [4]. Ce point n'est confirmé que par des sources secondaires, le texte n'a pas été lu.
- Il reçoit en 2021 le Bower Award and Prize for Achievement in Science de la Franklin Institute (génie électrique), dont la citation parle du « premier réseau de neurones convolutif profond » [5]. Né en 1936, il entre à la NHK après l'Université de Kyoto et rejoint l'Université d'Osaka en 1989 [5].
- LeCun et ses collègues combinent en 1989 une architecture convolutive avec poids partagés et l'apprentissage par rétropropagation (*Neural Computation* 1(4):541-551) [6].

**Sources**
1. K. Fukushima, « Neocognitron… », *Biological Cybernetics* 36:193-202, 1980 (copie PDF hébergée par Princeton, texte lu) — https://www.cs.princeton.edu/courses/archive/spring08/cos598B/Readings/Fukushima1980.pdf — P — en — archive : http://web.archive.org/web/20240428044636/https://www.cs.princeton.edu/courses/archive/spring08/cos598B/Readings/Fukushima1980.pdf
2. Idem, notice éditeur — https://doi.org/10.1007/BF00344251 — P — en — archive : aucune *(métadonnées Crossref)*
3. K. Fukushima, « Cognitron: A self-organizing multilayered neural network », *Biological Cybernetics* 20:121-136, 1975 — https://doi.org/10.1007/BF00342633 — P — en — archive : aucune *(métadonnées Crossref seulement)*
4. K. Fukushima, « Visual Feature Extraction by a Multilayered Network of Analog Threshold Elements », *IEEE Trans. Systems Science and Cybernetics* 5(4):322-333, 1969 — https://doi.org/10.1109/TSSC.1969.300225 — P — en — archive : aucune *(métadonnées Crossref seulement)*
5. The Franklin Institute, « Kunihiko Fukushima — 2021 Bower Award and Prize for Achievement in Science » — https://fi.edu/en/awards/laureates/kunihiko-fukushima — Pr — en — archive : http://web.archive.org/web/20260609053318/https://fi.edu/en/awards/laureates/kunihiko-fukushima
6. Y. LeCun et al., « Backpropagation Applied to Handwritten Zip Code Recognition », *Neural Computation* 1(4):541-551, 1989 — https://doi.org/10.1162/neco.1989.1.4.541 — P — en — archive : aucune *(métadonnées Crossref seulement)*

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Kunihiko_Fukushima (sans label ; court, ~5 ko) · EN : https://en.wikipedia.org/wiki/Kunihiko_Fukushima (sans label ; ~8 ko). **Recommandé : EN (un peu plus complet ; les deux sont courts)**

**Points d'attention**
- « Ancêtre des CNN » : c'est juste pour l'architecture (convolution et sous-échantillonnage hiérarchiques), mais le néocognitron **n'apprenait pas par rétropropagation**. Ce sont LeCun et al. (1989) qui associent cette architecture à l'apprentissage supervisé par gradient [1][6]. Mieux vaut éviter « Fukushima a inventé le deep learning » ; « premier CNN profond » reprend la citation de la Franklin Institute [5] et doit être présenté comme telle.
- **ReLU** : la rectification est vérifiée dans l'article de 1980 (éq. 2) [1]. Son usage dès 1969 n'est attesté que par des sources secondaires [4], et Householder l'utilisait déjà en 1941. On peut écrire « parmi les premiers à utiliser une fonction d'activation rectifiée », pas « inventeur de la ReLU ».
- Le nom exact du laboratoire est « NHK Broadcasting Science Research Laboratories » (1980) [1]. La dénomination « Science & Technical Research Laboratories » est celle d'aujourd'hui.
- Fukushima est né à Taïwan (alors sous domination japonaise), en 1936 [5].

---

## Karen Spärck Jones

**Tableau corrigé** — Où : Royaume-Uni (Université de Cambridge) · Quand : 1972 · Pourquoi : la pondération des termes par leur rareté dans la collection (nommée ensuite IDF, *inverse document frequency*), qui reste au cœur du classement des résultats dans les moteurs de recherche *(changements : précision que le nom « IDF » est postérieur ; « base des moteurs de recherche » nuancé en « au cœur du classement »)*

**Faits clés**
- K. Spärck Jones, « A statistical interpretation of term specificity and its application in retrieval », *Journal of Documentation* 28(1):11-21, 1972 (réimprimé en 2004 dans le vol. 60(5):493-502) [1][2].
- Le principe : la spécificité d'un terme doit être interprétée **statistiquement**, en fonction de son usage et non de son sens. Une correspondance sur un terme rare compte davantage qu'une correspondance sur un terme fréquent. La pondération proposée est f(N) − f(n) + 1, où f est une fonction logarithmique (base 2) du nombre de documents [1]. L'expression « inverse document frequency » n'apparaît pas dans l'article [1].
- Selon S. Robertson, la mesure « later became known as inverse document frequency, or IDF ». Proposée sur des bases heuristiques, elle reste « at the core of many, if not most, ranking methods used in search engines ». Elle a été justifiée ensuite dans le modèle probabiliste (Robertson et Spärck Jones, 1976 ; Croft et Harper, 1979) [3][4].
- Elle commence en 1958 à la Cambridge Language Research Unit (CLRU), dirigée par Margaret Masterman [5][7]. Elle termine sa carrière comme professeure émérite d'informatique et d'information à Cambridge [6].
- Distinctions : Lovelace Medal de la BCS en 2007, dont elle dit être la première femme lauréate ; ACM/AAAI Allen Newell Award ; ACL Lifetime Achievement Award en 2004 ; présidente de l'ACL en 1994 [5][6]. Elle est née le 26 août 1935 et morte le 4 avril 2007 [6].
- Citation **authentifiée** : « Computing is too important to be left to men ». Elle figure dans l'entretien BCS mené par Brian Runciman, et la nécrologie de l'Université de Cambridge la présente comme son « slogan » [5][6][7].

**Sources**
1. K. Spärck Jones, « A statistical interpretation of term specificity and its application in retrieval », *Journal of Documentation* 28(1), 1972 (réimpression 2004, PDF lu) — https://www.staff.city.ac.uk/~sbrp622/idfpapers/ksj_orig.pdf — P — en — archive : http://web.archive.org/web/20261001070732/https://www.staff.city.ac.uk/~sbrp622/idfpapers/ksj_orig.pdf
2. Idem, notice éditeur — https://doi.org/10.1108/eb026526 — P — en — archive : aucune *(métadonnées Crossref)*
3. S. Robertson, « Understanding inverse document frequency: on theoretical arguments for IDF », *Journal of Documentation* 60(5):503-520, 2004 — https://www.staff.city.ac.uk/~sbrp622/idfpapers/Robertson_idf_JDoc.pdf — R — en — archive : http://web.archive.org/web/20240829044653/http://www.staff.city.ac.uk/~sbrp622/idfpapers/Robertson_idf_JDoc.pdf
4. S. Robertson, « The Spärck Jones / Robertson IDF page », City University — https://www.staff.city.ac.uk/~sbrp622/idf.html — R — en — archive : http://web.archive.org/web/20240716112024/http://www.staff.city.ac.uk/~sbrp622/idf.html
5. B. Runciman (BCS), « Computing's too important to be left to men » (entretien, mis en ligne en mai 2009, repris dans *Leaders in Computing*) — https://www.bcs.org/articles-opinion-and-research/computings-too-important-to-be-left-to-men/ — P — en — archive : http://web.archive.org/web/20260915102551/https://www.bcs.org/articles-opinion-and-research/computings-too-important-to-be-left-to-men
6. University of Cambridge, « Karen Spärck Jones (26 August 1935 – 4 April 2007) », 4 avril 2007 — https://www.cam.ac.uk/news/karen-sparck-jones-26-august-1935-4-april-2007 — Pr — en — archive : http://web.archive.org/web/20251113020452/https://www.cam.ac.uk/news/karen-sparck-jones-26-august-1935-4-april-2007
7. Girton College, « Karen Spärck Jones », 2025 — https://www.girton.cam.ac.uk/news/karen-sparck-jones-girton — Pr — en — archive : http://web.archive.org/web/20260710235458/https://www.girton.cam.ac.uk/news/karen-sparck-jones-girton

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones (sans label ; court, ~8 ko — cible Women in Red pour enrichissement) · EN : https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones (sans label ; ~23 ko). **Recommandé : EN (nettement plus développé)**

**Points d'attention**
- Ne pas écrire qu'elle a « inventé les moteurs de recherche » ni « tf-idf ». Elle a proposé la pondération par fréquence dans la collection (IDF). La combinaison TF·IDF, avec la fréquence du terme dans le document, doit beaucoup aux travaux de Salton, qu'elle cite d'ailleurs [1][3]. Le nom « IDF » vient plus tard [3].
- On parle de « Lovelace Medal » de la BCS, pas de « prix Lovelace ». La page de Cambridge date l'Allen Newell Award de 2007 ; l'ACM le date habituellement de 2006 (remis en 2007). Ce point n'a pas été vérifié sur le site de l'ACM.
- La citation « Computing is too important to be left to men » est bien attestée [5][6][7]. L'entretien BCS a été mis en ligne en 2009, mais il a forcément été réalisé avant son décès en avril 2007 : ne pas le dater de 2009.
- L'affiliation de 1972 n'est pas tranchée. La réimpression de 2004 indique « Computer Laboratory, University of Cambridge » [1], mais elle a pu être mise à jour. Écrire simplement « Université de Cambridge ».

---

## Fei-Fei Li

**Tableau corrigé** — Où : Princeton (puis Stanford), États-Unis · Quand : 2009 · Pourquoi : ImageNet, base d'images annotées à grande échelle (via Amazon Mechanical Turk) qui, avec le concours ILSVRC (2010–), a servi de banc d'essai au tournant de l'apprentissage profond (AlexNet, 2012). *(Changements : « Où » précisé, Princeton étant l'affiliation de l'article de 2009 ; « Pourquoi » reformulé pour présenter ImageNet comme un travail collectif et un catalyseur, et non comme l'invention de l'apprentissage profond.)*

**Faits clés**
- L'article fondateur « ImageNet: A Large-Scale Hierarchical Image Database » (CVPR 2009) est signé Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li et Li Fei-Fei, tous au département d'informatique de Princeton. La base repose sur la hiérarchie de WordNet. Version initiale : 12 sous-arbres, 5 247 synsets et 3,2 millions d'images. [1]
- L'article décrit la collecte et la vérification des images par Amazon Mechanical Turk. [1]
- Le concours ImageNet Large Scale Visual Recognition Challenge (ILSVRC) a lieu chaque année depuis 2010 et a réuni plus de cinquante institutions. [2]
- En 2012, le réseau convolutif de Krizhevsky, Sutskever et Hinton (AlexNet) atteint 18,9 % d'erreur top-5 sur des données ImageNet (ILSVRC-2010), « considérablement mieux » que l'état de l'art. [3]
- Née à Pékin, elle a émigré aux États-Unis avec ses parents à 15 ans, avant d'étudier la physique à Princeton [4]. Stanford HAI la décrit arrivant « jeune adolescente » de Chine dans le New Jersey [5]. En 2015, elle fonde avec Olga Russakovsky et Rick Sommer un programme d'été d'IA à Stanford pour lycéennes (SAILORS). AI4ALL devient officiellement une organisation à but non lucratif en 2017. [6]
- Critiques : Crawford et Paglen (« Excavating AI », 2019) relèvent 2 833 sous-catégories « Person », dont des étiquettes insultantes [7]. L'équipe ImageNet indique avoir désactivé dès janvier 2019 le téléchargement de la base complète. Le 17 septembre 2019, elle annonce le retrait de 1 593 synsets « unsafe » sur 2 832, soit 600 040 images [8]. Ces travaux sont publiés dans Yang et al., FAT* 2020 [9].

**Sources**
1. J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li, L. Fei-Fei, « ImageNet: A Large-Scale Hierarchical Image Database », CVPR, 2009 — https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf — P — en — archive : http://web.archive.org/web/20261001171948/https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf
2. O. Russakovsky et al., « ImageNet Large Scale Visual Recognition Challenge », arXiv:1409.0575 (IJCV 2015), 2014 — https://arxiv.org/abs/1409.0575 — P — en — archive : aucune (résumé lu)
3. A. Krizhevsky, I. Sutskever, G. E. Hinton, « ImageNet Classification with Deep Convolutional Neural Networks », NeurIPS, 2012 — https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html — P — en — archive : http://web.archive.org/web/20261010082617/https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html (résumé lu)
4. Université Yale, notice de doctorat honoris causa de Fei-Fei Li, 2025 — https://yale2025.yale.edu/node/87050 — S — en — archive : aucune
5. Stanford HAI, « Fei-Fei Li: A Candid Look at a Young Immigrant's Rise to AI Trailblazer », 7 nov. 2023 — https://hai.stanford.edu/news/fei-fei-li-candid-look-young-immigrants-rise-ai-trailblazer — S — en — archive : http://web.archive.org/web/20260517210911/https://hai.stanford.edu/news/fei-fei-li-candid-look-young-immigrants-rise-ai-trailblazer
6. AI4ALL, « Our Story », s.d. (consulté 2026) — https://ai-4-all.org/about/our-story/ — S — en — archive : http://web.archive.org/web/20261002013753/https://ai-4-all.org/about/our-story/
7. K. Crawford, T. Paglen, « Excavating AI: The Politics of Images in Machine Learning Training Sets », AI Now Institute, 19 sept. 2019 — https://excavating.ai/ — R — en — archive : http://web.archive.org/web/20261007085208/https://excavating.ai/
8. Équipe ImageNet, « Towards Fairer Datasets… » (mise à jour du 17 sept. 2019) — https://www.image-net.org/update-sep-17-2019.php — P — en — archive : http://web.archive.org/web/20260617082233/https://www.image-net.org/update-sep-17-2019.php
9. K. Yang, K. Qinami, L. Fei-Fei, J. Deng, O. Russakovsky, « Towards Fairer Datasets: Filtering and Balancing the Distribution of the People Subtree in the ImageNet Hierarchy », arXiv:1912.07726 (FAT* 2020), 2019 — https://arxiv.org/abs/1912.07726 — P — en — archive : http://web.archive.org/web/20260921193928/https://arxiv.org/abs/1912.07726 (résumé lu)

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Fei-Fei_Li (sans label ; ~26 ko) · EN : https://en.wikipedia.org/wiki/Fei-Fei_Li (sans label ; ~60 ko). Pour aller plus loin : FR https://fr.wikipedia.org/wiki/ImageNet (~9 ko, court) / EN https://en.wikipedia.org/wiki/ImageNet (~40 ko). **Recommandé : EN** (plus complet ; l'article FR sur ImageNet est mince et pourrait être enrichi).

**Points d'attention**
- Ne pas écrire qu'elle a « inventé » l'apprentissage profond, ni qu'ImageNet seul l'a « déclenché ». Les réseaux convolutifs existaient depuis longtemps, et les GPU ont joué un rôle clé. AlexNet est l'œuvre de l'équipe Hinton (Toronto). ImageNet a fourni le banc d'essai.
- ImageNet est un travail collectif : Jia Deng (premier auteur), Kai Li, Olga Russakovsky… Le titre de « marraine de l'IA » est un surnom médiatique, à éviter ou à mettre entre guillemets.
- L'annotation a été faite par des milliers de travailleurs de Mechanical Turk, peu visibles. Ce point fait le lien avec l'entrée sur les annotateur·ices.
- Il existe un écart de date pour les critiques. Le retrait des téléchargements date de janvier 2019, soit avant « Excavating AI » (septembre 2019). L'annonce du retrait de 600 040 images date du 17 septembre 2019, deux jours avant la date indiquée sur « Excavating AI ». L'antériorité exacte entre les deux, et le lien de cause à effet, ne sont pas établis par les sources lues.
- Âge d'arrivée : 15 ans (Yale), et non « 16 ». Stanford HAI dit seulement « jeune adolescente ».

---

## Joy Buolamwini & Timnit Gebru

**Tableau corrigé** — Où : MIT Media Lab (Cambridge, Mass.) et Microsoft Research (New York), États-Unis · Quand : 2018 · Pourquoi : *Gender Shades*, audit montrant que trois systèmes commerciaux de **classification du genre** à partir du visage (IBM, Microsoft, Face++) se trompent jusqu'à 34,7 % du temps pour les femmes à peau foncée, contre 0,8 % au plus pour les hommes à peau claire. *(Changements : « reconnaissance faciale » remplacée par « classification du genre / analyse faciale » ; entreprises nommées ; chiffres confirmés ; affiliations précisées.)*

**Faits clés**
- L'article est publié dans les Proceedings of the 1st Conference on Fairness, Accountability and Transparency (FAT*), PMLR 81:77-91, 2018. Buolamwini y est affiliée au MIT Media Lab, Gebru à Microsoft Research New York. [1]
- Les autrices ont constitué un nouveau jeu de test, le Pilot Parliaments Benchmark : 1 270 parlementaires de trois pays africains et de trois pays nordiques, annotés selon l'échelle de Fitzpatrick. Les jeux de référence existants comptaient 79,6 % (IJB-A) et 86,2 % (Adience) de personnes à peau claire. [1]
- Résultats : jusqu'à 34,7 % d'erreur pour les femmes à peau foncée et 0,8 % au maximum pour les hommes à peau claire. Pour IBM, l'écart atteint 34,4 points. [1][2]
- Un suivi en 2019 (Raji et Buolamwini, AIES) constate que les trois entreprises ont publié de nouvelles versions en moins de sept mois et réduit les écarts. Ce suivi teste aussi Amazon et Kairos : 31,37 % et 22,50 % d'erreur pour les femmes à peau foncée [3]. Amazon (Matt Wood, AWS) a contesté l'étude, la jugeant « trompeuse » car elle confond analyse faciale et reconnaissance faciale [4].
- En juin 2020, après la mort de George Floyd, plusieurs entreprises reculent. IBM (lettre d'Arvind Krishna au Congrès, 8 juin) cesse d'offrir la reconnaissance faciale « généraliste » [5]. Amazon annonce un moratoire d'un an sur l'usage policier de Rekognition [6]. Microsoft déclare qu'il ne vendra pas cette technologie à la police américaine sans loi fédérale [7].
- En décembre 2020, Gebru quitte Google après un conflit sur l'article « On the Dangers of Stochastic Parrots » (Bender, Gebru, McMillan-Major, « Shmitchell », FAccT 2021). Selon elle, Google l'a évincée. Selon Jeff Dean (Google), l'article « ne répondait pas à nos critères de publication », et elle avait posé des conditions faute desquelles elle démissionnerait [8]. Elle avait cofondé Black in AI en 2017 avec Rediet Abebe [9]. Elle lance DAIR le 2 décembre 2021 [10]. Buolamwini a fondé l'Algorithmic Justice League [11].

**Sources**
1. J. Buolamwini, T. Gebru, « Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification », PMLR 81, 2018 — https://proceedings.mlr.press/v81/buolamwini18a.html — P — en — archive : http://web.archive.org/web/20261008075850/http://proceedings.mlr.press/v81/buolamwini18a.html (page et PDF lus)
2. MIT Media Lab / J. Buolamwini, « Gender Shades — Overview », 2018 — http://gendershades.org/overview.html — P — en — archive : http://web.archive.org/web/20261001011423/http://gendershades.org/overview.html
3. I. D. Raji, J. Buolamwini, « Actionable Auditing… », AIES 2019 (DOI 10.1145/3306618.3314244) — https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/ — P — en — archive : http://web.archive.org/web/20260924131217/https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/ (résumé lu ; ACM DL renvoie 403)
4. M. Wood (AWS), « Thoughts on Recent Research Paper and Associated Article on Amazon Rekognition », AWS Machine Learning Blog, 26 janv. 2019 — https://aws.amazon.com/blogs/machine-learning/thoughts-on-recent-research-paper-and-associated-article-on-amazon-rekognition/ — P — en — archive : aucune
5. J. Peters, « IBM will no longer offer, develop, or research facial recognition technology », The Verge, 8 juin 2020 — https://www.theverge.com/2020/6/8/21284683/ibm-no-longer-general-purpose-facial-recognition-analysis-software — Pr — en — archive : http://web.archive.org/web/20261008154405/https://www.theverge.com/2020/6/8/21284683/ibm-no-longer-general-purpose-facial-recognition-analysis-software
6. Amazon, « We are implementing a one-year moratorium on police use of Rekognition », 2020 — https://www.aboutamazon.com/news/policy-news-views/we-are-implementing-a-one-year-moratorium-on-police-use-of-rekognition — P — en — archive : http://web.archive.org/web/20260918165903/https://www.aboutamazon.com/news/policy-news-views/we-are-implementing-a-one-year-moratorium-on-police-use-of-rekognition
7. NBC News, « Microsoft won't sell facial recognition to police without federal regulation », juin 2020 — https://www.nbcnews.com/tech/internet/microsoft-won-t-sell-facial-recognition-police-without-federal-regulation-n1230286 — Pr — en — archive : http://web.archive.org/web/20260302004834/https://www.nbcnews.com/tech/internet/microsoft-won-t-sell-facial-recognition-police-without-federal-regulation-n1230286
8. K. Hao, « We read the paper that forced Timnit Gebru out of Google. Here's what it says », MIT Technology Review, 4 déc. 2020 — https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/ — Pr — en — archive : http://web.archive.org/web/20261008130951/https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/ (métadonnées de l'article Stochastic Parrots vérifiées via l'API Crossref, DOI 10.1145/3442188.3445922)
9. Black in AI, « About », s.d. — https://www.blackinai.org/about — S — en — archive : http://web.archive.org/web/20261010142149/https://www.blackinai.org/about
10. DAIR, communiqué « Timnit Gebru Launches Independent AI Research Institute… », 2 déc. 2021 — https://dair-institute.org/press-release — P — en — archive : aucune
11. Algorithmic Justice League, « About », s.d. — https://www.ajl.org/about — S — en — archive : aucune

**Wikipédia** — FR : https://fr.wikipedia.org/wiki/Joy_Buolamwini (sans label ; ~18 ko) ; https://fr.wikipedia.org/wiki/Timnit_Gebru (sans label ; **~8 ko, court** : à enrichir, cible Women in Red) · EN : https://en.wikipedia.org/wiki/Joy_Buolamwini (sans label ; ~49 ko) ; https://en.wikipedia.org/wiki/Timnit_Gebru (sans label ; ~55 ko). **Recommandé : EN** (nettement plus complet, surtout pour Gebru).

**Points d'attention**
- **Ne pas parler de « reconnaissance faciale »** pour Gender Shades : l'étude porte sur la *classification du genre* (analyse faciale). La distinction est au cœur de la réponse d'Amazon. Écrire plutôt « systèmes d'analyse faciale ».
- Amazon ne fait **pas** partie de l'étude de 2018. Il est testé dans le suivi de 2019 (Raji et Buolamwini).
- Les chiffres exacts sont « jusqu'à 34,7 % » et « 0,8 % au maximum ». Le chiffre de 34,4 points est l'écart propre à IBM.
- Le moratoire d'Amazon dure un an. La position de Microsoft (pas de vente à la police sans loi fédérale) n'est pas un « moratoire » formel au même titre. IBM a annoncé quitter le secteur (la portée exacte, « offrir / développer / rechercher », varie selon les sources).
- Ne pas attribuer mécaniquement les décisions de 2020 à Gender Shades seul. Le contexte (mouvement Black Lives Matter) et d'autres travaux (ACLU, Raji) comptent aussi.
- Départ de Gebru : présenter les deux versions (« évincée » / démission sous conditions acceptée). Ne pas trancher.
- Gender Shades est une coécriture. Buolamwini en est la première autrice, le travail étant issu de son mémoire au MIT.

---

## Annotateur·ices de données

**Tableau corrigé** — Où : Kenya, Philippines, Venezuela… (Sud global surtout, mais pas seulement) · Quand : fin des années 2000 – aujourd'hui · Pourquoi : le travail humain peu visible d'étiquetage, de vérification et de modération des données (« travail du clic », *ghost work*) sans lequel l'IA ne fonctionne pas, souvent mal payé et parfois traumatisant. *(Changements : « Quand » élargi, car les plateformes de microtâches sont déjà utilisées pour ImageNet en 2007–2009 ; mention de la modération ajoutée.)*

**Faits clés**
- Kenya : selon TIME (Billy Perrigo, 18 janv. 2023), des employé·es de Sama à Nairobi ont étiqueté pour OpenAI, à partir de novembre 2021, des textes violents et sexuels destinés à un détecteur de toxicité pour ChatGPT. Leur salaire net allait d'environ 1,32 à 2 $ de l'heure. Sama conteste ces chiffres (1,46 à 3,74 $). Les trois contrats valaient environ 200 000 $, et Sama y a mis fin en février 2022, huit mois avant leur terme. [1]
- Nairobi, 1er mai 2023 : plus de 150 travailleur·ses de sous-traitants de Meta, TikTok et OpenAI votent pour créer un syndicat des modérateurs de contenu africains. [2]
- Philippines : selon le Washington Post (Rebecca Tan et Regine Cabato, août 2023), au moins 10 000 personnes travaillaient sur Remotasks, plateforme de Scale AI. Sur 36 personnes interrogées, 34 ont subi des paiements retardés, réduits ou annulés. Scale AI affirme que ces retards sont « exceedingly rare ». [3]
- Venezuela : selon MIT Technology Review (Karen Hao et Andrea Paola Hernández, 20 avril 2022, série « AI Colonialism »), l'effondrement économique a fait du pays un réservoir de main-d'œuvre bon marché pour Remotasks, Appen ou Hive. Un dirigeant de Scale y cite un gain moyen d'« un peu plus de 90 cents de l'heure ». [4]
- Travaux de référence : Mary L. Gray et Siddharth Suri, *Ghost Work* (2019) [5] ; Antonio A. Casilli, *En attendant les robots. Enquête sur le travail du clic* (Seuil, 3 janv. 2019), sur le *digital labor* et les « tâcherons du clic » [6].
- Amazon Mechanical Turk est déjà la plateforme utilisée pour construire ImageNet (article de 2009). [7]

**Sources**
1. B. Perrigo, « Exclusive: OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic », TIME, 18 janv. 2023 — https://time.com/6247678/openai-chatgpt-kenya-workers/ — Pr — en — archive : http://web.archive.org/web/20261009142945/https://time.com/6247678/openai-chatgpt-kenya-workers/
2. B. Perrigo, « 150 African Workers for ChatGPT, TikTok and Facebook Vote to Unionize at Landmark Nairobi Meeting », TIME, 1er mai 2023 — https://time.com/6275995/chatgpt-facebook-african-workers-union/ — Pr — en — archive : http://web.archive.org/web/20260928144347/https://time.com/6275995/chatgpt-facebook-african-workers-union/
3. R. Tan, R. Cabato (The Washington Post), « Behind the AI boom, an army of overseas workers in 'digital sweatshops' », repris par Stars and Stripes, 29-30 août 2023 — https://www.stripes.com/theaters/asia_pacific/2023-08-29/ai-boom-overseas-workers-11208813.html — Pr — en — archive : http://web.archive.org/web/20230913184954/https://www.stripes.com/theaters/asia_pacific/2023-08-29/ai-boom-overseas-workers-11208813.html (original WaPo https://www.washingtonpost.com/world/2023/08/28/scale-ai-remotasks-philippines-artificial-intelligence/ illisible, 403 ou délai dépassé ; l'API Wayback signale http://web.archive.org/web/20260208052542/https://www.washingtonpost.com/world/2023/08/28/scale-ai-remotasks-philippines-artificial-intelligence/, non consultée)
4. K. Hao, A. P. Hernández, « How the AI industry profits from catastrophe », MIT Technology Review, 20 avril 2022 — https://www.technologyreview.com/2022/04/20/1050392/ai-industry-appen-scale-data-labels/ — Pr — en — archive : http://web.archive.org/web/20261004133656/https://www.technologyreview.com/2022/04/20/1050392/ai-industry-appen-scale-data-labels/
5. M. L. Gray, S. Suri, *Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass*, 2019 (site du livre) — https://ghostwork.info/ — R — en — archive : http://web.archive.org/web/20261007110318/https://ghostwork.info/
6. A. A. Casilli, *En attendant les robots. Enquête sur le travail du clic*, Seuil, 2019 — https://www.seuil.com/ouvrage/en-attendant-les-robots-antonio-a-casilli/9782021401882 — R — fr — archive : http://web.archive.org/web/20261008052958/https://www.seuil.com/ouvrage/en-attendant-les-robots-antonio-a-casilli/9782021401882 (notice éditeur lue)
7. J. Deng et al., « ImageNet: A Large-Scale Hierarchical Image Database », CVPR, 2009 — https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf — P — en — archive : http://web.archive.org/web/20261001171948/https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf

**Wikipédia** — FR : pas d'article « Travail du clic » (absent) ; voir https://fr.wikipedia.org/wiki/Travail_numérique (sans label ; ~54 ko) et https://fr.wikipedia.org/wiki/Antonio_Casilli (~15 ko) · EN : https://en.wikipedia.org/wiki/Ghost_work (sans label ; ~4,5 ko, court) ; https://en.wikipedia.org/wiki/Amazon_Mechanical_Turk (sans label ; ~50 ko) ; https://en.wikipedia.org/wiki/Sama_(company) (~12 ko). **Recommandé : FR « Travail numérique »** (plus développé, avec ancrage francophone : Casilli).

**Points d'attention**
- Distinguer **annotation** (étiquetage pour l'entraînement, cas Sama/OpenAI) et **modération de contenu** (cas du syndicat de Nairobi, qui vise surtout les modérateurs de Meta et TikTok). Ces métiers sont proches mais différents.
- Les salaires sont contestés. Pour Sama, donner la fourchette de TIME **et** celle de Sama. Les rapporter aux salaires locaux plutôt que les présenter seulement en dollars.
- Ne pas présenter ce travail comme exclusivement « au Sud ». *Ghost Work* étudie largement les États-Unis, et Casilli inclut aussi les pays du Nord.
- Le syndicat de mai 2023 est un vote en vue de l'enregistrement. Son statut légal ultérieur n'a pas été vérifié.
- Éviter de nommer des travailleur·ses individuels, sauf s'ils ou elles s'expriment publiquement dans les sources.

---

## À vérifier plus tard

### Les pionniers

- Rapport CAL 85-460-1 de Rosenblatt (janvier 1957) : référence bibliographique vue seulement dans des notices secondaires, texte non consulté.
- Article du *New York Times* du 8 juillet 1958 (« New Navy Device Learns By Doing ») : site du NYT bloqué. Il n'est confirmé que via Cornell [Rosenblatt 1] et des reprises secondaires. Le *Smithsonian Magazine* mentionne aussi un article du NYT du 13 juillet 1958 (« Electronic 'Brain' Teaches Itself »), non vérifié.
- Fiche d'objet du Mark I Perceptron au National Museum of American History (https://americanhistory.si.edu/collections/object/nmah_334414) : la page était indisponible (403/erreur Cloudflare). Dates de construction (1959-1960) et de transfert (1967) non confirmées par une source de premier niveau.
- Amari 1967 : contenu multicouche et expériences de Saito non lus dans le texte original (IEEE fermé). Ils reposent sur Schmidhuber.
- Fukushima 1969 et la fonction rectifiée : article non lu.
- Lien LeCun–Fukushima : les PDF de LeCun (1989, 1998) étaient illisibles ou indisponibles. La citation explicite du néocognitron par LeCun n'a pas été vérifiée.
- Thèse de Werbos (1974) et mémoire de Linnainmaa (1970) : non consultés directement.
- Date exacte de l'Allen Newell Award de Spärck Jones (2006 ou 2007) : non vérifiée côté ACM.
- Labels Wikipédia : l'API renvoyait des erreurs 429 via curl ; les requêtes ont été faites via WebFetch (un appel FR, un appel EN, titres regroupés). Aucune catégorie AdQ/BA ni FA/GA pour les 4 articles ; tailles en octets de wikitexte.

### Données, biais et travail humain

- Date de début du projet ImageNet (2007 à Princeton, idée née en 2006 à l'Université de l'Illinois) : l'article de Quartz (Gershgorn, 2017) renvoie 403, et l'archive Wayback n'a pas pu être consultée (blocage réseau). Seule la date de 2009 est confirmée par une source primaire.
- Départ de Fei-Fei Li de Princeton pour Stanford en 2009 : non confirmé par une page lue.
- Lettre d'IBM : texte intégral non lu sur un site d'IBM (pages renvoyant à des pages génériques). Le contenu est confirmé par The Verge, qui la cite.
- Date de lancement d'Amazon Mechanical Turk (2005) : non vérifiée.
- Fondation de l'Algorithmic Justice League (année) : non indiquée sur la page lue.
- Éditeur de *Ghost Work* (Houghton Mifflin Harcourt) : non confirmé sur une page lue.
- Version longue de l'article du Washington Post : lue seulement via la reprise de Stars and Stripes.
- Texte de « Stochastic Parrots » sur l'ACM DL (403) : seules les métadonnées Crossref et le compte rendu de MIT Technology Review ont été lus.
