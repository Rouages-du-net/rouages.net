# Sources — Module « Comment apprend une machine »

Dossier de sources du module `/modules/apprendre/`, établi selon la
[charte des sources](../SOURCES.md). Le neurone, le perceptron et la
rétropropagation sont sourcés dans [`ia-mecanismes.md`](ia-mecanismes.md)
(§ 4) ; Shun-ichi Amari et Kunihiko Fukushima dans [`ia.md`](ia.md).

- **Recherche effectuée le** : 16 octobre 2026.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué (« lu », « lu partiellement », « résumé seulement »,
  « métadonnées seulement »). Les sites inaccessibles (403) sont signalés.
- Aucune page Wikipédia n'est utilisée comme source.

Types : **P** primaire · **R** recherche/historien·ne · **Pr** presse · **S** site/institution

---

## 1. Descente de gradient : Cauchy (1847), puis Robbins et Monro (1951)

### Formulation sûre
En 1847, le mathématicien français Augustin-Louis Cauchy décrit dans une note de
deux pages une méthode pour résoudre des équations : on part d'une valeur au
hasard, on regarde dans quelle direction une quantité « d'erreur » diminue le
plus vite, et on fait un petit pas dans cette direction, encore et encore. C'est
l'idée de la descente de gradient. Cauchy voulait calculer des orbites d'astres,
pas faire apprendre des machines. En 1951, Herbert Robbins et Sutton Monro
publient une méthode qui avance pas à pas à partir de mesures bruitées : c'est
l'ancêtre de la « descente de gradient stochastique » utilisée aujourd'hui.

### Faits clés
- Note de Cauchy, *Comptes rendus hebdomadaires des séances de l'Académie des
  sciences*, t. 25 (juillet-décembre 1847), séance du **lundi 18 octobre 1847**,
  p. 536-538 (vérifié dans le volume numérisé : la note suit l'en-tête « SÉANCE
  DU LUNDI 18 OCTOBRE 1847 » ; date confirmée par Lemaréchal [3]).
- Idée centrale, texte original [1] : « il suffira de faire décroître
  indéfiniment la fonction u, jusqu'à ce qu'elle s'évanouisse ». Le pas choisi
  est α = −θX, β = −θY, γ = −θZ… où X, Y, Z sont les dérivées partielles : on va
  « à contre-pente ».
- Cauchy annonce la convergence « vers une valeur minimum de u » et promet un
  mémoire plus détaillé (« dans un prochain Mémoire ») ; selon Lemaréchal, ce
  mémoire « ne semble pas exister » et la convergence est traitée de manière
  approximative (« sloppily ») [3].
- Motivation : « la détermination de l'orbite d'un astre » (fin de la note,
  traduction anglaise [2]) ; six inconnues (les éléments de l'orbite).
- Pour un système de plusieurs équations u = 0, v = 0, w = 0…, Cauchy les
  remplace par une seule : u² + v² + w² + … = 0 — c'est-à-dire qu'il minimise
  une **somme de carrés** (lien direct avec le sujet 2).
- Robbins & Monro, « A Stochastic Approximation Method », *Annals of
  Mathematical Statistics* 22(3), 400-407, sept. 1951 [4]. Résumé : faire des
  expériences successives « in such a way that x_n will tend to θ in
  probability ».
- Bottou, Curtis & Nocedal (2018) [5] : la méthode du gradient stochastique
  « proposed by Robbins and Monro » est la stratégie centrale de l'apprentissage
  à grande échelle ; mais elle fut « first proposed […] not as a gradient method,
  but as a Markov chain ».

### Sources
1. Cauchy, A.-L., « Méthode générale pour la résolution des systèmes d'équations
   simultanées », *Comptes rendus* t. 25, 1847, p. 536-538. Volume numérisé
   (Internet Archive, OCR) :
   https://archive.org/download/comptesrendusheb25acad/comptesrendusheb25acad_djvu.txt
   — P, fr, **lu** (p. 536-537 intégralement, OCR imparfait). Gallica (ark
   bpt6k2982c supposé) : **non accessible** (erreur 403), non vérifié.
2. Pulskamp, R. J. (trad.), « General method for the resolution of systems of
   simultaneous equations », 2021 :
   https://gtfp.cs.rhul.ac.uk/pulskamp/Cauchy/Orbits/1847%20CR%20536%28383%29.pdf
   — P (traduction), en, **lu**. Donne aussi la réimpression : *Œuvres*, série 1,
   t. 10, p. 399-402.
3. Lemaréchal, C., « Cauchy and the Gradient Method », *Documenta Mathematica*,
   volume supplémentaire ISMP, 2012, p. 251-254 :
   https://ems.press/content/book-chapter-files/27368 — R, en (citations fr),
   **lu**.
4. Robbins, H. & Monro, S., « A Stochastic Approximation Method », *Ann. Math.
   Statist.* 22(3), 1951, 400-407, DOI 10.1214/aoms/1177729586 (métadonnées et
   résumé via https://api.openalex.org/works/https://doi.org/10.1214/aoms/1177729586)
   — P, en, **résumé seulement** (Project Euclid bloque les robots).
5. Bottou, L., Curtis, F. E., Nocedal, J., « Optimization Methods for
   Large-Scale Machine Learning », *SIAM Review* 60(2), 2018 ; préprint
   https://arxiv.org/pdf/1606.04838v3 — R, en, **lu partiellement** (intro et
   encadré 3.1).

### Points d'attention
- Ne pas écrire que Cauchy « a inventé l'apprentissage automatique » : il
  résolvait des équations d'astronomie. Dire « l'idée mathématique qu'on
  réutilise aujourd'hui ».
- Cauchy n'emploie pas le mot « gradient » ; il parle de faire « décroître »
  la fonction. Le nom « méthode du gradient » est postérieur.
- Pas de preuve de convergence rigoureuse chez Cauchy (Lemaréchal) ; ne pas
  dire « il a démontré que ça marche toujours ».
- Robbins-Monro ne parlent ni de réseaux de neurones ni de « gradient » au sens
  moderne ; dire « ancêtre » ou « point de départ », pas « inventeurs de la SGD ».
- Prénom : Augustin-Louis Cauchy (signe « M. Augustin Cauchy » dans la note).

---

## 2. Moindres carrés : Legendre (1805) contre Gauss (1809)

### Formulation sûre
Quand on a plus de mesures que d'inconnues, les mesures ne s'accordent jamais
parfaitement. En 1805, Adrien-Marie Legendre publie une règle simple : choisir
les valeurs qui rendent la plus petite possible la somme des carrés des erreurs.
En 1809, Carl Friedrich Gauss publie la même méthode et affirme l'utiliser
depuis 1795, ce qui déclenche une célèbre querelle de priorité. C'est l'ancêtre
direct de « ajuster un modèle aux données » en minimisant une erreur.

### Faits clés
- Legendre, *Nouvelles méthodes pour la détermination des orbites des comètes*,
  Paris, Firmin Didot, an XIII – 1805 ; appendice « Sur la méthode des moindres
  quarrés » (vers p. 72-73 ; pagination lue sur OCR) [1].
- Citation : le principe « consiste à rendre minimum la somme des quarrés des
  erreurs. Par ce moyen, il s'établit entre les erreurs une sorte d'équilibre
  qui, empêchant les extrêmes de prévaloir, est très-propre à faire connoître
  l'état du système le plus proche de la vérité » [1] (orthographe d'époque,
  OCR corrigé à la main ; à recontrôler sur l'image).
- Legendre note : « le plus souvent, le nombre des équations est supérieur à
  celui des inconnues, et il est impossible d'anéantir toutes les erreurs » [1].
  Il présente la moyenne arithmétique comme un cas particulier (« une
  conséquence très-simple de notre méthode générale ») [1].
- Stigler (1981) [2] : Legendre publie en 1805 ; l'Américain Robert Adrain fin
  1808 ou début 1809 ; Gauss en 1809, qui revendique un usage « since 1795 (or
  1794; the date varied in later retellings) ».
- Conclusion de Stigler : « It is argued (though not conclusively) that Gauss
  probably possessed the method well before Legendre, but that he was
  unsuccessful in communicating it to his contemporaries » [2].
- Les quatre « preuves » de Gauss (sa parole ; une entrée de journal du 17 juin
  1798 « Calculus probabilitatis contra La Place defensus » ; des témoins
  astronomes ; une lettre de 1799) sont jugées non concluantes une à une par
  Stigler ; Olbers ne soutient Gauss qu'en 1816 « after seven years of repeated
  prodding by Gauss » [2].
- Lemaréchal rapporte la réplique de Gauss : il ne pensait pas que Legendre
  tiendrait tant à une idée si simple [3, note 7] (paraphrase anglaise, pas la
  citation originale).

### Sources
1. Legendre, A.-M., *Nouvelles méthodes pour la détermination des orbites des
   comètes*, 1805, numérisation Google Books via Internet Archive :
   https://archive.org/download/bub_gb_FRcOAAAAQAAJ/bub_gb_FRcOAAAAQAAJ_djvu.txt
   — P, fr, **lu partiellement** (page de titre et début de l'appendice, OCR).
   Gallica non consulté (403 sur Gallica pour ce lot).
2. Stigler, S. M., « Gauss and the Invention of Least Squares », *Annals of
   Statistics* 9(3), 1981, 465-474, DOI 10.1214/aos/1176345451 ; copie JSTOR
   hébergée par un cours universitaire :
   https://economia.uniroma2.it/corso/asset/YTo0OntzOjI6ImlkIjtzOjQ6IjI2OTIiO3M6MzoiaWRhIjtzOjU6IjgxNDkzIjtzOjI6ImVtIjtOO3M6MToiYyI7czo1OiJjMDhmZCI7fQ==
   — R, en, **lu partiellement** (résumé, § 1-2). Citer de préférence le DOI.
3. Lemaréchal 2012 (voir sujet 1, source 3) — R, en, **lu**.

### Points d'attention
- Querelle **non tranchée** : écrire « Legendre publie le premier (1805) ;
  Gauss affirme l'avoir utilisée dès 1795 ; les historiens jugent plausible
  qu'il l'ait eue avant, sans preuve décisive ». Ne pas écrire « Gauss a
  inventé les moindres carrés » ni « Gauss a volé l'idée ».
- Ne pas oublier Robert Adrain (1808-1809), souvent omis — mais Stigler
  suggère qu'il a pu la tirer du livre de Legendre : rester prudent.
- « quarrés » est l'orthographe de 1805 ; garder « carrés » dans le texte
  courant.

---

## 3. Phénomène de Runge (1901) : trop coller aux points

### Formulation sûre
En 1901, le mathématicien allemand Carl Runge montre qu'un polynôme obligé de
passer exactement par des points régulièrement espacés peut se mettre à
osciller violemment entre ces points, surtout vers les bords. Et ajouter des
points (donc augmenter le degré) aggrave le problème au lieu de le corriger.
C'est une bonne image du sur-apprentissage : un modèle qui « colle » à chaque
exemple peut très mal prédire entre les exemples.

### Faits clés
- Runge, C., « Über empirische Funktionen und die Interpolation zwischen
  äquidistanten Ordinaten », *Zeitschrift für Mathematik und Physik* 46 (1901),
  p. 224-243 ; signé « Von C. Runge in Hannover » [1].
- Exemple de Runge (p. 243) : f(x) = 1/(1 + x²) sur l'intervalle [−5 ; +5],
  interpolé par un polynôme passant par 11 points d'abscisses −5, −4, …, +5.
- Résultat chiffré (p. 243) : à x = ±4,5, l'écart « nicht weniger als 1.53 »,
  soit « mehr als das Anderthalbfache der grössten Ordinate » (plus d'une fois
  et demie la hauteur maximale de la courbe, qui vaut 1).
- L'écart près de ±4,5 « wird nun nicht etwa kleiner » quand on augmente le
  degré et le nombre de points, « sondern sie wird im Gegenteil immer grösser ».
  Au centre (x = ±0,5), l'écart n'est que de 0,044 et diminue.
- Runge qualifie cela d'« überraschende Resultat » (p. 242) : au-delà
  d'environ ±3,63, l'interpolation par ces polynômes est impossible.

### Sources
1. Runge, C., 1901, *Zeitschrift für Mathematik und Physik* 46, 224-243,
   volume numérisé (Google Books via Internet Archive) :
   https://archive.org/download/zeitschriftfrma12runggoog/zeitschriftfrma12runggoog_djvu.txt
   — P, de, **lu partiellement** (p. 224-225 et 241-243, OCR). (Les métadonnées
   d'archive.org indiquent par erreur « 1856 » ; le texte porte « 46. Band.
   1901 ».)

### Points d'attention
- Le lien avec le sur-apprentissage est une **analogie pédagogique**, pas une
  idée de Runge. Le dire explicitement.
- Le problème vient aussi des points **équidistants** : avec d'autres points
  (rapprochés aux bords), l'oscillation disparaît. Ne pas écrire « les
  polynômes de haut degré oscillent toujours ».
- L'exemple fréquent 1/(1 + 25x²) sur [−1 ; 1] est la même fonction remise à
  l'échelle ; l'original de Runge est 1/(1 + x²) sur [−5 ; 5].
- Source secondaire indépendante non consultée pour ce lot (voir « Non vérifié »).

---

## 4. Sur-apprentissage et données de test : la validation croisée

### Formulation sûre
Un modèle peut avoir l'air excellent sur les exemples qui ont servi à le
régler, et décevoir sur de nouveaux cas. Depuis au moins les années 1930, des
statisticien·nes gardent donc une partie des données de côté, sans y toucher,
pour « l'examen final ». La validation croisée généralise l'idée : on met de
côté tour à tour différents morceaux des données, et on fait la moyenne des
résultats.

### Faits clés
- Larson, S. C., « The shrinkage of the coefficient of multiple correlation »,
  *Journal of Educational Psychology* 22(1), 1931, 45-55 : division aléatoire
  de l'échantillon pour mesurer la « shrinkage » (perte de qualité) entre
  construction et essai d'un prédicteur — décrit par Stone [2] ; Larson lui-même
  **non lu** (métadonnées) [1].
- Stone (1974) [2], description du principe : le statisticien prudent « sets
  aside a randomly selected part of his sample without looking at it », puis
  les données mises de côté « will deliver an unbiased judgment ».
- Stone [2] cite aussi un symposium de 1951 « The need and means of
  cross-validation » (Mosier, Cureton, Katzell, Wherry), Mosteller & Wallace
  (1963) et Lachenbruch.
- Stone [2] attribue à Mosteller & Tukey (1968) « the first clear general
  statement » de la validation croisée « simple », et cite leur texte :
  « Suppose that we set aside one individual case, optimize for what is left,
  then test on the set-aside case. Repeating this for every case squeezes the
  data almost dry. »
- Stone [2] préfère le mot « assessment » à « validation », qui a selon lui
  « a ring of excessive confidence about it ».
- Arlot & Celisse [3] : le « leave-one-out » a été introduit indépendamment
  par Stone (1974), Allen (1974) et Geisser (1975) ; Larson (1931) avait noté
  qu'évaluer un modèle sur ses propres données d'entraînement est
  « overoptimistic ».
- Grace Wahba (avec Peter Craven, 1979) : « validation croisée généralisée »
  pour choisir automatiquement le degré de lissage d'une spline [4].

### Sources
1. Larson 1931, DOI 10.1037/h0072400, via
   https://api.openalex.org/works/https://doi.org/10.1037/h0072400 — P, en,
   **métadonnées seulement**.
2. Stone, M., « Cross-Validatory Choice and Assessment of Statistical
   Predictions », *JRSS B* 36(2), 1974, 111-147 (avec discussion) :
   https://sites.stat.washington.edu/courses/stat527/s13/readings/Stone1974.pdf
   — P/R, en, **lu partiellement** (introduction).
3. Arlot, S. & Celisse, A., « A survey of cross-validation procedures for model
   selection », *Statistics Surveys* 4, 2010 ; préprint
   https://arxiv.org/pdf/0907.4728 — R, en, **lu partiellement** (§ historique).
4. Craven, P. & Wahba, G., « Smoothing Noisy Data with Spline Functions… by the
   Method of Generalized Cross-Validation », *Numerische Mathematik* 31, 1979,
   377-403 : https://sites.stat.washington.edu/courses/stat527/s13/readings/cravenwabha79.pdf
   — P, en, **lu partiellement** (page 1).

### Points d'attention
- Mosteller & Tukey 1968 (*Handbook of Social Psychology*, chap. « Data
  analysis, including statistics ») : **non lu directement**, connu par la
  citation de Stone. Le dire si on le cite.
- **M. Stone = Mervyn Stone** (University College London d'après l'article).
  Attention : OpenAlex l'indexe à tort comme « Marla Stone ». Ne pas reprendre.
- Pas d'inventeur unique : écrire « l'idée apparaît dans les années 1930 et se
  formalise dans les années 1970 ».
- Vocabulaire actuel « jeu d'entraînement / de validation / de test » :
  convention moderne, pas celle de ces auteurs.

---

## 5. XOR et réseaux à plusieurs couches ; approximation universelle

### Formulation sûre
Une seule « couche » de calcul qui trace une frontière droite ne peut pas
apprendre le « OU exclusif » (XOR : vrai si exactement une des deux entrées est
vraie). Avec une couche intermédiaire, dite cachée, de deux neurones seulement,
le problème se résout. En 1989, deux travaux indépendants (George Cybenko ;
Kurt Hornik, Maxwell Stinchcombe et Halbert White) démontrent qu'un réseau à
une seule couche cachée peut approcher d'aussi près qu'on veut n'importe quelle
fonction continue — à condition d'avoir assez de neurones. Ce théorème dit que
c'est **possible**, pas qu'on saura l'apprendre.

### Faits clés
- Goodfellow, Bengio & Courville [3], § 6.1 « Example: Learning XOR » : un modèle
  linéaire « is not able to represent the XOR function » ; solution : « a simple
  feedforward network with one hidden layer containing two hidden units ».
- Cybenko (1989) [1], résumé : des combinaisons finies d'une fonction
  sigmoïde peuvent « uniformly approximate any continuous function of n real
  variables » sur l'hypercube unité ; cela règle « an open question about
  representability in the class of single hidden layer neural networks ».
  *Mathematics of Control, Signals and Systems* 2(4), 303-314.
- Hornik, Stinchcombe & White (1989), « Multilayer feedforward networks are
  universal approximators », *Neural Networks* 2(5), 359-366 [2].
- Limite, d'après [3] : « a feedforward network with a single layer is
  sufficient to represent any function, but the layer may be infeasibly large
  and may fail to learn and generalize correctly » ; et le théorème ne garantit
  pas que l'algorithme d'entraînement trouvera les bons paramètres.

### Sources
1. Cybenko, G., « Approximation by superpositions of a sigmoidal function »,
   1989, DOI 10.1007/BF02551274 ; résumé via
   https://api.semanticscholar.org/graph/v1/paper/DOI:10.1007/BF02551274 —
   P, en, **résumé seulement**.
2. Hornik, K., Stinchcombe, M., White, H., 1989, DOI 10.1016/0893-6080(89)90020-8
   (via OpenAlex) — P, en, **métadonnées seulement**.
3. Goodfellow, I., Bengio, Y., Courville, A., *Deep Learning*, MIT Press, 2016,
   chap. 6 : https://www.deeplearningbook.org/contents/mlp.html — R
   (manuel), en, **lu partiellement** (§ 6.1 et 6.4.1).

### Points d'attention
- Ne pas écrire que Minsky et Papert (*Perceptrons*, 1969) « ont prouvé que les
  réseaux de neurones ne marchent pas » ni qu'ils ont « causé à eux seuls
  l'hiver de l'IA » : mythe répandu, non traité ici (voir « Non vérifié »).
- « Approximer » ≠ « apprendre » ≠ « généraliser ». Le théorème ne dit rien du
  nombre de neurones nécessaire (il peut être énorme) ni de l'entraînement.
- Les fonctions d'activation exigées varient (sigmoïde chez Cybenko ;
  « squashing » chez Hornik et al.) ; ne pas généraliser abusivement.

---

## 6. Plus proches voisins : Evelyn Fix et Joseph Hodges (1951)

### Formulation sûre
Pour classer un cas nouveau, on regarde les exemples déjà connus qui lui
ressemblent le plus — ses « plus proches voisins » — et on lui donne la
catégorie majoritaire parmi eux. Cette règle a été formulée et étudiée en 1951
par deux statisticien·nes de l'université de Californie à Berkeley, Evelyn Fix
et Joseph Hodges, dans un rapport pour l'armée de l'air américaine resté
inédit jusqu'en 1989. En 1967, Thomas Cover et Peter Hart montrent que, avec
beaucoup d'exemples, la règle du plus proche voisin se trompe au plus deux fois
plus souvent que la meilleure règle possible.

### Faits clés
- Rapport : E. Fix et J. L. Hodges Jr., « Discriminatory analysis, nonparametric
  discrimination », USAF School of Aviation Medicine, Randolph Field (Texas),
  Project 21-49-004, Report 4, février 1951 (référence telle que citée par
  Cover & Hart [2]). Rapport compagnon de 1952 sur les petits échantillons [2].
- Cover & Hart (1967) [2] : « The first formulation of a rule of the nearest
  neighbor type and primary previous contribution to the analysis of its
  properties, appears to have been made by Fix and Hodges » ; leur règle
  « assigns to an unclassified point the class most heavily represented among
  its k_n nearest neighbors ».
- Cover & Hart [2], résumé : erreur « bounded above by twice the Bayes
  probability of error » ; « half the classification information in an
  infinite sample set is contained in the nearest neighbor ». *IEEE Trans.
  Information Theory* 13(1), 21-27.
- Republication : Silverman, B. W. & Jones, M. C., « E. Fix and J. L. Hodges
  (1951): An Important Contribution to Nonparametric Discriminant Analysis and
  Density Estimation », *International Statistical Review* 57(3), déc. 1989,
  commentaire p. 233-238, suivi du rapport [3].
- Evelyn Fix (faits professionnels, d'après la notice nécrologique officielle de
  l'université de Californie, signée Neyman, Hodges, Le Cam, Lehmann et
  Elizabeth L. Scott [4]) : A.B. 1924, M.S. 1925, M.A. 1933 en mathématiques
  (université du Minnesota) ; assistante de recherche au Statistical Laboratory
  de Berkeley dès 1940 ; calculs pour l'Applied Mathematics Panel pendant la
  guerre ; doctorat 1948 ; professeure de statistique en 1963 ; participe à
  l'organisation du Statistical Laboratory puis du département de statistique ;
  travail éditorial sur les actes des Berkeley Symposia ; tables de puissance du
  test du χ² avec Neyman ; enseigne au centre de formation statistique de la FAO
  à Bangkok en 1952 ; décès le 30 décembre 1965.

### Sources
1. Fix & Hodges 1951, rapport DTIC : https://apps.dtic.mil/sti/pdfs/ADA800276.pdf
   — P, en, **non ouvert** (403) ; connu seulement par [2] et [3].
2. Cover, T. M. & Hart, P. E., « Nearest Neighbor Pattern Classification »,
   1967 : https://isl.stanford.edu/~cover/papers/transIT/0021cove.pdf — P, en,
   **lu partiellement** (résumé, introduction, références).
3. Silverman & Jones 1989, DOI 10.2307/1403796 (via OpenAlex) — R, en,
   **métadonnées seulement**.
4. « Evelyn Fix, Statistics: Berkeley », *University of California: In
   Memoriam* (reproduit par le département) :
   https://statistics.berkeley.edu/node/5864 — S, en, **lu**.

### Points d'attention
- Écrire « Evelyn Fix et Joseph Hodges » (ordre de signature), pas « Hodges et
  Fix », ni « l'algorithme de Cover et Hart ».
- Ne pas écrire « Evelyn Fix a inventé l'apprentissage automatique » ni
  « première femme… ». Formule sûre : « a formulé avec Joseph Hodges la règle
  des plus proches voisins ».
- Cover & Hart disent « appears to have been » : la priorité de Fix et Hodges est
  admise mais formulée prudemment. Des auteurs font remonter l'idée intuitive à
  Ibn al-Haytham (Alhazen) : non vérifié ici, ne pas publier sans source.
- **Ne publier aucun détail de vie privée** d'Evelyn Fix (des sources en
  ligne en évoquent ; hors sujet et à exclure).
- Le rapport était financé par l'armée de l'air (contrat AF41(128)-31) ; le
  mentionner sans dramatiser.

---

## 7. Données biaisées → modèle biaisé

### Formulation sûre
Une machine apprend à partir des exemples qu'on lui donne : si ces exemples sont
déséquilibrés, ses erreurs le seront aussi. En 2018, Joy Buolamwini et Timnit
Gebru ont testé trois logiciels commerciaux qui devinent le genre d'une personne
d'après une photo : ils se trompaient au plus 0,8 % du temps sur les hommes à
peau claire, mais jusqu'à 34,7 % du temps sur les femmes à peau foncée. Selon
l'agence Reuters (2018), Amazon a abandonné un outil de tri de CV qui défavorisait
les candidates, parce qu'il avait appris sur dix ans de CV majoritairement
masculins.

### Faits clés — Gender Shades
- Buolamwini, J. & Gebru, T., « Gender Shades: Intersectional Accuracy
  Disparities in Commercial Gender Classification », *Proceedings of the 1st
  Conference on Fairness, Accountability and Transparency*, PMLR 81, 2018,
  p. 77-91 [1][2].
- Chiffres exacts (résumé) : « darker-skinned females are the most
  misclassified group (with error rates of up to 34.7%). The maximum error rate
  for lighter-skinned males is 0.8% » [1][2].
- Systèmes testés : Microsoft (Cognitive Services Face API), IBM (Watson Visual
  Recognition), Face++ (entreprise chinoise) [2].
- Détail [2] : erreur sur les femmes à peau foncée de 20,8 % (Microsoft) à
  34,7 % (IBM) ; Microsoft et IBM au mieux sur les hommes à peau claire (0,0 %
  et 0,3 %) ; Face++ au mieux sur les hommes à peau foncée (0,7 %) ; écart
  maximal entre groupes : 34,4 points.
- Nouveau jeu de test « Pilot Parliaments Benchmark » : 1 270 parlementaires de
  six pays (Rwanda, Sénégal, Afrique du Sud, Islande, Finlande, Suède) ; types de
  peau classés selon l'échelle de Fitzpatrick [2].
- Deux jeux de référence existants (IJB-A, Adience) étaient composés à
  79,6 %-86,24 % de personnes à peau claire (mémoire de master de Buolamwini,
  MIT 2017 [3]).

### Faits clés — Amazon
- Reuters, Jeffrey Dastin, 10 octobre 2018 (repris par Euronews) [4] : équipe
  formée en 2014 ; dès 2015, le système ne notait pas les candidatures
  techniques « de manière neutre » ; modèles entraînés sur les CV reçus
  pendant « 10-year period », majoritairement d'hommes ; pénalisait le mot
  « women's » (ex. « women's chess club captain ») et des diplômées de deux
  universités pour femmes ; équipe dissoute début 2017 ; les recruteurs
  consultaient les classements mais « never relied solely on those rankings ».
- Sources de Reuters : **cinq personnes anonymes** ; Amazon a refusé de
  commenter l'outil.

### Sources
1. https://proceedings.mlr.press/v81/buolamwini18a.html — P, en, **lu**
   (page résumé).
2. https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf — P, en,
   **lu partiellement** (résumé, § 3-4, résultats).
3. Buolamwini, J. A., *Gender shades: intersectional phenotypic and demographic
   evaluation of face datasets and gender classifiers*, S.M., MIT, 2017 :
   https://dspace.mit.edu/handle/1721.1/114068 — P, en, **résumé seulement**.
4. Dastin, J. (Reuters), « Amazon scraps secret AI recruiting tool that showed
   bias against women », reproduit par Euronews, 10/10/2018 :
   https://www.euronews.com/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women
   — Pr, en, **lu** (reuters.com inaccessible à l'outil).

### Points d'attention
- Gender Shades mesure des classifieurs de genre **binaires** (homme/femme) ;
  l'article le reconnaît. Ne pas présenter ces catégories comme naturelles.
- Ne pas mélanger : 34,7 % = pire cas (IBM, femmes à peau foncée) ; 0,8 % =
  pire cas chez les hommes à peau claire. Pas « 35 fois plus d'erreurs » sans
  calcul explicite. Les logiciels testés ont depuis été modifiés : dire « en
  2017-2018 ».
- Amazon : **une seule source de presse principale** (Reuters), reprise
  ailleurs, fondée sur des sources anonymes ; Amazon n'a pas confirmé les
  détails. Écrire « selon Reuters ». Ne pas écrire que l'outil a « rejeté des
  milliers de femmes » : rien de tel dans l'article.

---

## 8. Auto-supervision : apprendre sans étiquettes humaines

### Formulation sûre
Pour entraîner un modèle de langage, personne n'a besoin d'annoter les textes à
la main : le texte fournit lui-même les réponses. On cache un mot (ou on coupe la
phrase) et on demande au modèle de deviner le mot manquant ou le mot suivant ;
la bonne réponse est simplement le mot qui était là. C'est ce qu'on appelle
l'apprentissage auto-supervisé. Des humain·es interviennent ensuite, dans
d'autres étapes (choix des données, réglages après l'entraînement).

### Faits clés
- Jurafsky & Martin [1], § 7.7 : on demande au modèle, à chaque position, « to
  predict the next token » ; « We call such a model self-supervised because we
  don't have to add any special gold labels to the data; the natural sequence of
  words is its own supervision! ».
- BERT (Devlin et al., 2018/2019) [2] : objectif de « masked language model »
  (MLM), « inspired by the Cloze task (Taylor, 1953) » ; « we mask 15% of all
  WordPiece tokens in each sequence at random » ; entraînement sur BooksCorpus
  (800 millions de mots) et Wikipédia anglaise (2 500 millions de mots).
- Deux variantes à distinguer : **mot suivant** (modèles génératifs type GPT)
  et **mot masqué** (BERT).

### Sources
1. Jurafsky, D. & Martin, J. H., *Speech and Language Processing*, 3e éd.,
   brouillon du 19 août 2026, chap. 7 « Transformers and Pretraining » :
   https://web.stanford.edu/~jurafsky/slp3/7.pdf — R (manuel), en, **lu
   partiellement** (§ 7.7). Le brouillon évolue : noter la date de version.
2. Devlin, J., Chang, M.-W., Lee, K., Toutanova, K., « BERT: Pre-training of
   Deep Bidirectional Transformers for Language Understanding », 2018 (NAACL
   2019) : https://arxiv.org/pdf/1810.04805v2 — P, en, **lu partiellement**
   (intro, § 3.1, données).

### Points d'attention
- « Sans étiquettes humaines » ≠ « sans humains » : les textes sont écrits par
  des humains, et la phase d'« après-entraînement » (réglage par retours
  humains) mobilise des annotateur·rices. Le préciser.
- Le « test de closure » (Cloze, Taylor 1953) vient de la psychologie de la
  lecture : bon exemple d'emprunt interdisciplinaire.
- Ne pas affirmer que l'auto-supervision a été « inventée par BERT » :
  Jurafsky & Martin la rattachent aux modèles de langage neuronaux de Bengio et
  coll. (2000-2006) et, plus loin, aux modèles statistiques de mots.

---

## 9. Personnes à mettre en avant (faits professionnels sourcés)

**Evelyn Fix** — voir sujet 6 (source : notice *In Memoriam*, lue).

**Corinna Cortes** — co-autrice avec Vladimir Vapnik de « Support-Vector
Networks », *Machine Learning* 20, 273-297, 1995 ; affiliation : AT&T Bell
Labs, Holmdel (NJ) [1]. L'article combine trois idées : hyperplans optimaux,
« convolution of the dot-product » (noyaux) et **marges souples** (« soft
margins », pour tolérer des erreurs d'entraînement) [1]. Prix Paris Kanellakis
de l'ACM 2008, partagé avec Vapnik, pour les SVM [5] ; doctorat Rochester 1993 et
poste actuel chez Google : non vérifiés sur page primaire.
- Attention : Cortes & Vapnik écrivent eux-mêmes que l'idée avait été
  « previously implemented » dans le cas séparable, et citent Boser, **Isabelle
  Guyon** & Vapnik (1992) pour l'astuce des noyaux [1]. Ne pas écrire « Cortes
  et Vapnik ont inventé les SVM » seuls : dire « ont publié la forme qui s'est
  imposée (marge souple) ». Isabelle Guyon est une autre femme à mentionner.

**Vladimir Vapnik et Alexeï Tchervonenkis** — à l'Institut des problèmes de
commande (Moscou, URSS) ; entre 1962 et 1973, ils créent « a new discipline of
statistical learning theory » : convergence uniforme des fréquences vers les
probabilités, notion de « capacité » (емкость) « later renamed as
VC-dimension », minimisation structurelle du risque, méthodes « Generalised
Portrait » et « Optimal Separating Hyperplane », « later transformed by Vladimir
Vapnik into Support Vector Machine » [2]. Article de référence : « On the
Uniform Convergence of Relative Frequencies of Events to Their Probabilities »,
*Theory of Probability and Its Applications* 16(2), 1971, 264-280 (traduction de
l'original russe) [3]. Premier livre commun sur la reconnaissance des formes :
1974 [4]. Tchervonenkis : 1938-2014 ; prix d'État de l'URSS pour un système
appliqué à la mine d'or de Murun-Tau (Ouzbékistan) [2] ; a partagé son temps
avec le Computer Learning Research Centre de Royal Holloway [4].
- Montre bien que l'apprentissage statistique est aussi une histoire
  soviétique. Graphie française : Alexeï Tchervonenkis (anglais :
  Chervonenkis).

**Joy Buolamwini** — fondatrice de l'Algorithmic Justice League ; mémoire de
master MIT 2017 « Gender shades… » (dir. Ethan Zuckerman) [6] ; master d'Oxford
et licence en informatique de Georgia Tech selon sa page MIT [7]. Doctorat MIT
2022 et livre *Unmasking AI* (2023) : non vérifiés.

**Timnit Gebru** — co-autrice de Gender Shades (affiliation 2018 : Microsoft
Research [sujet 7, 2]) ; fondatrice et directrice exécutive du DAIR ;
co-fondatrice de Black in AI ; ancienne co-responsable de l'équipe Ethical AI de
Google [8].
- Départ de Google (décembre 2020) : **versions divergentes** — le DAIR écrit
  qu'elle a été renvoyée (« dismissed ») ; Google a parlé d'une démission. Si on
  en parle, présenter les deux versions ; aucune source primaire Google lue ici.

**Fei-Fei Li** — ImageNet : article CVPR 2009, auteurs Jia Deng, Wei Dong,
Richard Socher, Li-Jia Li, Kai Li et Li Fei-Fei (Princeton) [9] ; 3,2 millions
d'images, 5 247 catégories au moment de l'article ; images organisées selon la
hiérarchie WordNet ; étiquetage via Amazon Mechanical Turk [9]. Aujourd'hui
plus de 14 millions d'images et 21 841 « synsets » ; responsable scientifique
(PI) du projet (Stanford) [10]. Stanford la décrit comme « the inventor of
ImageNet and the ImageNet Challenge » ; codirectrice du HAI depuis 2019 ;
doctorat Caltech 2005 [11].
- Attention : l'article est cosigné (Jia Deng premier auteur) ; écrire « le
  projet ImageNet, lancé par l'équipe de Fei-Fei Li ». Mentionner les
  travailleur·ses du clic (Mechanical Turk) qui ont étiqueté les images.

**Grace Wahba** — University of Wisconsin-Madison ; avec Peter Craven
(Liverpool), « validation croisée généralisée » pour régler le lissage des
splines, 1979 [12]. Autres distinctions : non vérifiées dans ce lot.

### Sources
1. Cortes & Vapnik 1995 : https://link.springer.com/content/pdf/10.1007/BF00994018.pdf
   — P, en, **lu partiellement**.
2. Gammerman, A. & Vovk, V., « Preface to this Special Issue », *JMLR* 16, 2015,
   1677-1681 : https://jmlr.org/papers/volume16/gammerman15a/gammerman15a.pdf —
   R, en, **lu**.
3. Vapnik & Chervonenkis 1971, DOI 10.1137/1116025 (via OpenAlex) — P, en,
   **métadonnées seulement**.
4. Royal Holloway, page « Alexey Chervonenkis » :
   https://cml.rhul.ac.uk/people/chervonenkis/ — S, en, **lu**.
5. ACM, prix Kanellakis 2008 : https://www.acm.org/media-center/2009/march/acm-awards-recognize-innovators-in-computer-science
   — S, en, **résumé seulement** (403 ; connu par extrait de moteur de recherche).
6. DSpace@MIT : https://dspace.mit.edu/handle/1721.1/114068 — P, en, **résumé
   seulement**.
7. MIT Media Lab, « Joy Buolamwini » :
   https://www.media.mit.edu/people/joyab/overview/ — S, en, **lu**.
8. DAIR, « Timnit Gebru » : https://www.dair-institute.org/team/timnit-gebru/ —
   S, en, **lu**.
9. Deng et al., « ImageNet: A Large-Scale Hierarchical Image Database », CVPR
   2009 : https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf —
   P, en, **lu partiellement**.
10. https://www.image-net.org/about.php — S, en, **lu**.
11. Stanford Profiles, « Fei-Fei Li » : https://profiles.stanford.edu/fei-fei-li
   — S, en, **lu partiellement**.
12. Craven & Wahba 1979 (voir sujet 4, source 4) — P, en, **lu partiellement**.

### Points d'attention (personnes)
- Aucune formule « première femme… » n'a été vérifiée par deux sources : n'en
  utiliser aucune.
- S'en tenir aux faits professionnels ; pas de lieu de résidence, de vie
  familiale ni de circonstances de décès détaillées.

---

## À vérifier plus tard

- Page Gallica de la note de Cauchy (t. 25 des *Comptes rendus*) et du livre
  de Legendre : Gallica a renvoyé 403 ; textes lus sur Internet Archive (OCR).
  Identifiant ark Gallica non confirmé.
- Pagination exacte de l'appendice de Legendre (p. 72-73 lue sur OCR ; à
  vérifier sur l'image) ; date exacte de parution du livre en 1805.
- Robbins & Monro 1951 : seulement le résumé ; texte intégral non lu.
- Runge 1901 : aucune source secondaire indépendante consultée (p. ex. manuels
  d'analyse numérique) ; lien avec le sur-apprentissage = analogie.
- Larson 1931 et Mosteller & Tukey 1968 : non lus directement (connus par Stone
  1974 et Arlot & Celisse).
- Hornik, Stinchcombe & White 1989 : métadonnées seulement (résumé non
  accessible).
- Mythe « Minsky et Papert ont tué les réseaux de neurones » : non documenté
  dans ce lot (chercher une source d'historien·ne, p. ex. Olazaran 1996).
- Rapport Fix & Hodges 1951 : texte non ouvert (DTIC 403) ; commentaire de
  Silverman & Jones non lu (métadonnées).
- Antécédent attribué à Ibn al-Haytham (Alhazen) pour la règle du plus proche
  voisin : non vérifié.
- Gender Shades : suites (audit de 2019 avec Inioluwa Deborah Raji, réponses
  d'IBM et Microsoft) non vérifiées.
- Amazon : article original sur reuters.com non ouvert (lu via Euronews) ;
  déclaration ultérieure d'Amazon (outil « jamais utilisé » pour évaluer des
  candidats) non vérifiée.
- Corinna Cortes : doctorat (Rochester, 1993) et poste actuel chez Google non
  vérifiés sur page primaire ; prix Kanellakis vu seulement en extrait.
- Joy Buolamwini : doctorat MIT 2022 et livre *Unmasking AI* (2023) non
  vérifiés.
- Timnit Gebru : doctorat (Stanford) non vérifié ; version de Google sur son
  départ non lue en source primaire.
- Vapnik & Tchervonenkis : article de 1968 aux *Doklady* et titre exact du livre
  de 1974 (« Теория распознавания образов ») non vérifiés.
- Grace Wahba : distinctions et carrière au-delà de l'article de 1979 non
  vérifiées.
