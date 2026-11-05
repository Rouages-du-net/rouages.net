# Sources : histoire de l'IA

Dossier du module « Histoire de l'IA » (`/modules/histoire-ia/`), recherche du
5 novembre 2026. Il complète les dossiers des modules IA, qui contenaient déjà
la plupart des jalons (Turing, Dartmouth, perceptron, systèmes experts, hivers,
Deep Blue, AlphaGo, Transformeur, ChatGPT, travail des données, AI Act) :
voir en particulier [`ia-intro.md`](ia-intro.md), [`ia.md`](ia.md),
[`ia-mecanismes.md`](ia-mecanismes.md) (lot M, histoire), [`apprendre.md`](apprendre.md),
[`ia-voir.md`](ia-voir.md), [`ia-entendre.md`](ia-entendre.md),
[`ia-jouer.md`](ia-jouer.md), [`ia-chercher.md`](ia-chercher.md),
[`intelligence-collective.md`](intelligence-collective.md),
[`penser-la-technique.md`](penser-la-technique.md) et
[`informatique.md`](informatique.md) (automates médiévaux, compléments 5).

## Corrections à reporter dans les autres dossiers

- **Niki Parmar** est co-autrice de « Attention Is All You Need » (2017) : la
  formule « huit auteurs, tous des hommes » de `ia-mecanismes.md` (lot L, § 5)
  est fausse.
- **Karen Spärck Jones et la Lovelace Medal** : ne pas écrire « première
  femme » (non vérifié, voir `ia-classer.md` § 10).
- **AI Act** : calendrier modifié par le règlement (UE) 2026/1744 (« Omnibus
  IA ») ; suivre `ia-mecanismes.md` (lot M, § 5) et `ia-classer.md` (§ 8).
- **Réseaux sémantiques** : terme employé par R. H. Richens dès 1956 ; ne pas
  l'attribuer à Margaret Masterman seule.
- **Hélène Bestougeff** : aucune source trouvée, non publiée.

---

## Complément 1 — l'IA hors des États-Unis

Module « Histoire de l'IA », rouages.net. Recherche faite le 2026-11-05.

**Légende des statuts**
- **[lu]** : page ou PDF réellement ouvert et lu (au moins les passages cités).
- **[méta]** : seulement la notice (Crossref, OpenAlex, page éditeur avec résumé, notice de musée) ; le texte intégral n'a pas été lu.
- **[extrait]** : vu seulement dans un résultat de moteur de recherche ; à ne pas citer tel quel.

Toutes les requêtes ont été faites avec le User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)` ; aucune requête vers l'API Wikipédia.

---

### 1. URSS et Europe de l'Est

#### 1.1 Traduction automatique soviétique (1954-1956)

**Faits clés**
- Après la mort de Staline (mars 1953), les chercheurs soviétiques s'intéressent aux ordinateurs, à la théorie de l'information et à la cybernétique, jusque-là condamnés comme « bourgeois ». Ils apprennent l'existence de la démonstration Georgetown-IBM (New York, janvier 1954) par la presse et les revues (Hutchins).
- **Janvier 1955** : début des travaux de traduction anglais → russe à l'Institut d'information scientifique de l'Académie des sciences, avec l'Institut de mécanique de précision et de technique de calcul (ITMVT) ; participant·es : D. Panov, **Izabella Bel'skaïa**, L. Korolev, S. Razoumovski, G. Zelenkevitch, I. Moukhine (Moukhine, 1956, source primaire).
- **Fin 1955 (décembre selon Hutchins)** : premières expériences de traduction anglais → russe sur l'ordinateur **BESM** (Bel'skaïa 1957 ; Hutchins 2013). Dictionnaire initial : 952 mots anglais, 1 073 équivalents russes (Bel'skaïa 1957).
- Bel'skaïa, nommée en janvier 1955, est la principale chercheuse du système de l'ITMVT (Hutchins). Elle meurt en 1964.
- Second groupe à Moscou (Alexeï Liapounov, Institut de mathématiques Steklov) : **Olga Koulaguina** et Igor Mel'tchouk travaillent dès décembre 1954 sur un système français → russe (FR-I), prêt à être testé sur l'ordinateur STRELA début 1956 (Hutchins). Mel'tchouk en tirera ensuite sa théorie « Sens-Texte ».
- Troisième groupe à Léningrad (Nikolaï Andreïev).
- Précurseur : **Piotr Smirnov-Troïanski** dépose en **1933** un brevet de machine à traduire mécanique (dictionnaire sur bande, codes grammaticaux « interlinguaux ») ; l'Académie des sciences l'examine de 1939 à 1944 et le rejette (Hutchins).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| I. S. Mukhin, *An experiment of the machine translation of languages carried out on the BESM*, Académie des sciences de l'URSS, Moscou, 1956 — https://aclanthology.org/www.mt-archive.info/Mukhin-1956.pdf | primaire (rapport de 1956) | anglais | [lu] (début) |
| I. K. Belskaja, « Machine translation of languages », *Research*, vol. 10, 1957, p. 383-389 — https://aclanthology.org/www.mt-archive.info/50/Research-1957-Belskaja.pdf | primaire (article de la chercheuse) | anglais | [lu] (introduction) |
| John Hutchins, « Historical sketch of machine translation in Eastern and Central Europe », 2013 — https://aclanthology.org/www.mt-archive.info/10/Hamburg-2013-Hutchins.pdf | historien de la TA | anglais | [lu] (sections 1-3) |

**Points d'attention**
- Contradiction interne chez Hutchins : il écrit que l'ITMVT « faisait tourner dès fin 1954 » un système anglais-russe, puis situe les premières expériences en décembre 1955. Les sources primaires (Moukhine, Bel'skaïa) disent : travaux commencés en janvier 1955, premières expériences fin 1955. **Retenir 1955.**
- Ne pas écrire « première traduction automatique » : la démonstration Georgetown-IBM (1954) précède, et le système soviétique s'en inspire explicitement.
- Hutchins rapporte que Panov « aurait été officier du KGB » (« it is reported ») : non recoupé, ne pas publier.
- Deux femmes centrales (Bel'skaïa, Koulaguina) : bonnes candidates « pionnière ».

#### 1.2 La cybernétique : condamnée puis réhabilitée (1948-1961)

**Faits clés**
- Après la parution de *Cybernetics* de Norbert Wiener (1948), la presse soviétique lance une campagne : « Cybernétique, pseudo-science américaine », etc. (Peters 2012).
- **1954** : la 4e édition du *Petit dictionnaire philosophique* (Kratki filosofski slovar) définit la cybernétique comme une « pseudo-science réactionnaire » apparue aux États-Unis, qui veut « remplacer l'homme vivant et pensant par une machine » (Peters 2012, citation traduite de l'entrée).
- 1952-1954 : Anatoli Kitov, Alexeï Liapounov et Sergueï Sobolev préparent un article de réhabilitation ; le Parti demande d'abord des conférences publiques (Peters).
- **1955** : publication de « Osnovnye tcherty kibernetiki » (« Traits fondamentaux de la cybernétique ») par Sobolev, Kitov et Liapounov dans *Voprossy filossofii*, n° 4, 1955 (Peters, note 36, d'après Gerovitch).
- **1959** : création du Conseil (scientifique) pour la cybernétique de l'Académie des sciences, présidé par l'ingénieur-amiral Axel Berg ; au début des années 1960, la cybernétique est présentée comme « au service du communisme » (titre de la série d'ouvrages lancée par Berg) (Peters ; Gerovitch).
- Périodisation de Gerovitch : rejet sous Staline, réhabilitation sous Khrouchtchev (« dégel »), mode à la fin des années 1960 (page de l'auteur).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Benjamin Peters, « Normalizing Soviet Cybernetics », *Information & Culture* 47(2), 2012, p. 145-175, DOI 10.1353/lac.2012.0009 — PDF déposé : https://nevzlincenter.huji.ac.il/sites/default/files/leonidnevzlin/files/47.2.peters.pdf | historien (revue à comité) | anglais | [lu] (p. 145-160) |
| Slava Gerovitch, page « History of Cybernetics » (résumés de ses travaux, dont *From Newspeak to Cyberspeak*, MIT Press, 2002) — https://sites.google.com/view/slava-gerovitch/home/history-of-cybernetics | historien (page de l'auteur) | anglais | [lu] |
| Gerovitch, *From Newspeak to Cyberspeak*, MIT Press — https://mitpress.mit.edu/9780262572255/from-newspeak-to-cyberspeak/ | livre d'historien | anglais | bloqué (403) |

**Points d'attention**
- Le PDF de Peters est hébergé par un centre de l'Université hébraïque (dépôt institutionnel). Préférer citer la référence DOI ; le lien Project MUSE est payant.
- Ne pas caricaturer : Gerovitch insiste sur le fait que l'informatique militaire continuait pendant la campagne (« dépasser l'Occident » et « critiquer l'Occident » en même temps).

#### 1.3 Alexeï Ivakhnenko et la méthode GMDH (1965-1971) — controverse « premiers réseaux profonds »

**Faits clés**
- **1965** : A. G. Ivakhnenko et V. G. Lapa, *Kibernetitcheskie predskazyvaiouchtchie oustroïstva* (Kiev) ; traduction anglaise *Cybernetic Predicting Devices*, CCM Information Corporation (référence donnée par Schmidhuber ; non vérifiée à la source).
- **1968** : article sur la « méthode de groupe de traitement des données » (GMDH) dans *Avtomatika* (Kiev) ; Schmidhuber cite une version anglaise dans *Soviet Automatic Control* 13 (1968).
- **Octobre 1971** : A. G. Ivakhnenko, « Polynomial Theory of Complex Systems », *IEEE Transactions on Systems, Man, and Cybernetics*, SMC-1(4), p. 364-378, DOI 10.1109/TSMC.1971.4308320. Résumé : réseau « de type perceptron » multicouche ; chaque élément est un polynôme à deux entrées ajusté **par régression** ; un jeu de test séparé sert à sélectionner les meilleurs éléments, couche après couche (« decision regularization »). Schmidhuber y voit un réseau à 8 couches.
- Thèse de Jürgen Schmidhuber (IDSIA) : l'apprentissage profond « commence en 1965 en Ukraine » avec Ivakhnenko et Lapa ; les lauréats du prix Turing 2018 ne les auraient pas cités.
- Position adverse : Yann LeCun (2022) : Schmidhuber « pense que si quelqu'un a le germe d'une idée, il mérite tout le crédit de ce qui suit ; pour la plupart des gens, ce n'est pas ainsi que ça marche ».

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Ivakhnenko 1971, IEEE SMC — DOI 10.1109/TSMC.1971.4308320 | primaire | anglais | [méta] (Crossref + résumé OpenAlex) |
| J. Schmidhuber, *Annotated history of modern AI and deep learning*, rapport IDSIA-22-22 (v3 2025) — https://people.idsia.ch/~juergen/deep-learning-history.html | chercheur partie prenante | anglais | [lu] (sections 7-9) |
| J. Schmidhuber, « Deep Learning in Neural Networks: An Overview », 2014/2015 — https://arxiv.org/abs/1404.7828 | revue de littérature | anglais | [lu] (résumé) |
| « Angels & demons of AI », *Analytics India Magazine*, 2022 (citation de LeCun) — https://analyticsindiamag.com/angels-demons-of-ai/ | presse spécialisée | anglais | [lu] |
| gmdh.net (site de promotion de la méthode) — https://www.gmdh.net/ | site militant / commercial | anglais | [lu] (non utilisé comme source de fait) |

**Points d'attention (controverse à présenter des deux côtés)**
- Schmidhuber est **partie prenante** (il conteste depuis des années l'attribution du prix Turing 2018 et revendique des travaux de son équipe) ; il le reconnaît lui-même dans son avertissement. Aucune source d'historien·ne indépendant·e trouvée qui tranche.
- Différence de nature : la GMDH construit le réseau couche par couche par **régression et sélection**, sans descente de gradient de bout en bout. Dire « un des premiers réseaux multicouches entraînés sur des données » est défendable ; « inventeur de l'apprentissage profond » ne l'est pas.
- Formulation proposée : « Ivakhnenko est parfois présenté comme un père de l'apprentissage profond ; d'autres jugent que sa méthode, très différente des réseaux actuels, n'en est qu'un ancêtre. »

#### 1.4 Vapnik et Tchervonenkis : théorie VC (1968-1974), puis machines à vecteurs de support

**Faits clés**
- Début des années 1960 : Vladimir Vapnik et Alexeï Tchervonenkis rejoignent le laboratoire d'A. Lerner à l'Institut des problèmes de commande (Moscou). De 1962 à 1971 environ, ils développent la méthode du « portrait généralisé » (IPU).
- **1968** : V. N. Vapnik, A. Ya. Tchervonenkis, « La convergence uniforme des fréquences d'apparition des événements vers leurs probabilités », *Doklady Akad. Nauk SSSR*, 181(4), p. 781-783 (liste de publications de l'IPU).
- **1971** : article long, *Teoriya veroyatnostei i ee primeneniya* 16(2) ; traduction *Theory of Probability & Its Applications* 16(2), p. 264-280, DOI 10.1137/1116025 (Crossref). Introduit la grandeur appelée plus tard **dimension VC**.
- **1974** : *Teoriya raspoznavaniya obrazov* (Théorie de la reconnaissance des formes), Moscou, Nauka, 416 p. ; traduction allemande *Theorie der Zeichenerkennung*, Akademie-Verlag, 1979 (IPU ; Royal Holloway).
- Le « portrait généralisé » et l'« hyperplan séparateur optimal » sont ensuite transformés par Vapnik en **machines à vecteurs de support** (Gammerman & Vovk, JMLR 2015) : Boser, Guyon, Vapnik, COLT **1992** (marge optimale + noyaux, DOI 10.1145/130385.130401) ; Cortes & Vapnik, « Support-vector networks », *Machine Learning* 20(3), **1995**, p. 273-297, DOI 10.1007/BF00994018.
- Tchervonenkis (1938-2014) devient professeur à Royal Holloway (Londres) en 2000 tout en restant à l'IPU ; il meurt en septembre 2014.

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Institut des problèmes de commande (IPU RAN), fiche A. Ya. Tchervonenkis — https://www.ipu.ru/en/node/74418 | institution | anglais | [lu] |
| Royal Holloway, Computer Learning Research Centre, page A. Chervonenkis — https://cml.rhul.ac.uk/people/chervonenkis/ | institution | anglais | [lu] |
| A. Gammerman, V. Vovk, préface du numéro spécial, *JMLR* 16 (2015) 1677-1681 — https://jmlr2020.csail.mit.edu/papers/volume16/gammerman15a/gammerman15a.pdf | revue scientifique | anglais | [lu] |
| Vapnik & Chervonenkis 1971 — DOI 10.1137/1116025 | primaire | anglais (trad.) | [méta] |
| Boser, Guyon, Vapnik 1992 — DOI 10.1145/130385.130401 | primaire | anglais | [méta] (résumé OpenAlex) |
| Cortes & Vapnik 1995 — DOI 10.1007/BF00994018 | primaire | anglais | [méta] |

**Points d'attention**
- Les SVM sont formalisées aux **États-Unis** (AT&T Bell Labs, où Vapnik émigre en 1990 — date non vérifiée ici) : histoire transnationale, pas « soviétique » seulement.
- Isabelle Guyon (co-autrice 1992) et Corinna Cortes (1995) : deux femmes dans l'histoire des SVM.

#### 1.5 École de reconnaissance des formes : Aizerman, Braverman, Rozonoer (1964)

**Faits clés**
- **1964** : M. A. Aizerman, E. M. Braverman, L. I. Rozonoer publient deux articles dans *Avtomatika i Telemekhanika* 25 : « Fondements théoriques de la méthode des fonctions potentielles… » (n° 6, p. 917-936) et « Problème probabiliste de l'apprentissage de la reconnaissance des formes et méthode des fonctions potentielles » (n° 9, p. 1307-1323) (Math-Net.Ru). Ils montrent notamment que le perceptron peut être vu comme une réalisation de la méthode des fonctions potentielles.
- Ces travaux introduisent en apprentissage automatique l'interprétation d'un **noyau** comme produit scalaire dans un espace de caractéristiques (théorème de Mercer, 1909) ; le potentiel n'en est pleinement exploité qu'avec Boser, Guyon et Vapnik (1992) (Cristianini & Shawe-Taylor, notes de lecture).
- 1970 : monographie *Metod potentsialnykh funktsii v teorii obucheniya mashin* (Nauka) — mentionnée par la recherche, non vérifiée.

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Math-Net.Ru, notice *Avtomat. i Telemekh.* 25:6 (1964) 917-936 — https://mathnet.ru/eng/at11677 | notice + résumé | anglais/russe | [méta] |
| Math-Net.Ru, notice *Avtomat. i Telemekh.* 25:9 (1964) 1307-1323 — https://mathnet.ru/eng/at11723 | notice + résumé | anglais/russe | [méta] |
| N. Cristianini, J. Shawe-Taylor, « Further Reading: Chapter 3 » (compagnon du livre *An Introduction to Support Vector Machines*) — https://supportvector.blogs.bristol.ac.uk/?p=63 | universitaires | anglais | [lu] |

**Points d'attention**
- « Astuce du noyau » : ne pas l'attribuer uniquement à Aizerman et al. ; Mercer (1909), Aronszajn (années 1940), Poggio (1975) sont cités par Cristianini et Shawe-Taylor.

#### 1.6 Kaissa, champion du monde des programmes d'échecs (1974)

**Faits clés**
- Origines : programme d'échecs de l'ITEP (Moscou, laboratoire d'Alexandre Kronrod), début des années 1960 ; **1967** : match par télégraphe ITEP contre Stanford (programme de McCarthy), gagné 3-1 par l'ITEP (mémoire de Donskoï, 1999, via chessprogramming).
- Le programme est repris à l'Institut des problèmes de commande ; en **1972**, match contre les lecteurs de la *Komsomolskaïa Pravda*, qui lui donne le nom de Kaïssa (déesse des échecs) ; les lecteurs gagnent 1,5-0,5.
- **Août 1974, Stockholm** : Kaissa remporte le 1er championnat du monde des programmes d'échecs, **4 victoires sur 4** (Computer History Museum). Auteurs officiels : Gueorgui Adelson-Velski, Vladimir Arlazarov, Mikhaïl Donskoï ; aussi A. Bitman, A. Ouskov et d'autres.
- Innovations citées : représentation par « bitboards », idées de réduction de recherche (coup nul).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Computer History Museum, « Arlazarov, Ushkov, and Donskoy in Moscow » (notice photo, exposition *Mastering the Game*) — https://www.computerhistory.org/chess/stl-431f4cc15a4a7/ | musée | anglais | [lu] |
| Chessprogramming wiki, « Kaissa » (contient la traduction d'un texte de M. Donskoï, 1999) — https://www.chessprogramming.org/Kaissa | wiki communautaire spécialisé | anglais | [lu] |

**Points d'attention**
- Le CHM date la création de 1971, Donskoï situe le développement « à partir de 1970 » et le nom en 1972 : écrire « au début des années 1970 ».
- Le niveau de jeu reste modeste (Donskoï lui-même : « forte première catégorie »).
- La notice nécrologique ChessBase de Donskoï donnant « 1971 » pour Stockholm est erronée [extrait].

---

### 2. Japon

#### 2.1 Shun'ichi Amari : apprentissage par gradient (1967) et débat sur la rétropropagation

**Faits clés**
- **Juin 1967** : S. Amari, « A Theory of Adaptive Pattern Classifiers », *IEEE Transactions on Electronic Computers* EC-16(3), p. 299-307, DOI 10.1109/PGEC.1967.264666. Résumé : procédures d'ajustement par correction d'erreur (descente de gradient stochastique sur un risque moyen) ; la théorie est généralisée aux fonctions discriminantes générales, « y compris linéaires par morceaux ».
- Schmidhuber affirme qu'Amari a proposé d'entraîner des perceptrons multicouches de bout en bout par descente de gradient stochastique, et qu'en 1967-1968 son étudiant S. Saito a simulé un réseau à 5 couches (2 couches modifiables) — d'après le livre d'Amari de 1968 (en japonais) et une **communication personnelle** d'Amari (2021).
- Rétropropagation : nombreuses découvertes indépendantes. Griewank (2012) : Seppo Linnainmaa (Helsinki, 1970, mode inverse de différentiation automatique), G. Ostrovski et al. (URSS, 1971), Paul Werbos (application aux réseaux de neurones, 1982), Speelpenning (1980), etc. Le grand article qui popularise la méthode pour les réseaux : Rumelhart, Hinton, Williams, *Nature* 323, 533-536, 1986 (DOI 10.1038/323533a0).
- 1972 : Amari publie aussi un réseau récurrent associatif proche de ce qu'on appellera « réseau de Hopfield » (1982) (Schmidhuber).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Amari 1967 — DOI 10.1109/PGEC.1967.264666 | primaire | anglais | [méta] (Crossref + résumé OpenAlex) |
| A. Griewank, « Who Invented the Reverse Mode of Differentiation? », *Documenta Mathematica*, vol. suppl. ISMP, 2012, p. 389-400, DOI 10.4171/dms/6/38 — https://ems.press/content/book-chapter-files/27379?nt=1 | mathématicien, histoire | anglais | [lu] (prologue) |
| Schmidhuber, *Annotated history…* (voir 1.3) | partie prenante | anglais | [lu] |
| Rumelhart, Hinton, Williams 1986 — DOI 10.1038/323533a0 | primaire | anglais | [méta] |

**Points d'attention**
- Le résumé d'Amari 1967 ne parle pas explicitement de « réseau multicouche » ; la lecture « premier apprentissage profond par gradient » repose sur Schmidhuber. Formuler : « Amari étudie dès 1967 l'apprentissage par descente de gradient de classifieurs, y compris non linéaires ».
- Pour la rétropropagation, **pas d'inventeur unique** : c'est l'exemple parfait de découverte multiple (Griewank, source indépendante de la querelle).

#### 2.2 Kunihiko Fukushima et le néocognitron (1979-1980)

**Faits clés**
- Fukushima (né en 1936 à Taïwan, alors sous domination japonaise) travaille aux laboratoires de recherche de la NHK, dans un groupe mêlant ingénieur·es, neurophysiologistes et psychologues (Franklin Institute).
- 1969 : réseau multicouche à éléments à seuil analogiques (fonction de type « ReLU », selon Schmidhuber) ; 1975 : cognitron.
- **Octobre 1979** : article en japonais présentant le **néocognitron** (*Denshi Tsūshin Gakkai Ronbunshi* A, 62(10), p. 658-665) [extrait, notice CiNii non ouverte].
- **Avril 1980** : version anglaise, « Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position », *Biological Cybernetics* 36(4), p. 193-202, DOI 10.1007/BF00344251. Architecture : couches alternées de cellules « S » et « C » inspirées de Hubel et Wiesel ; apprentissage **non supervisé**.
- 2021 : prix Bower du Franklin Institute (Philadelphie) « pour l'invention du premier réseau de neurones convolutif profond, le Neocognitron ».
- 1989 : LeCun et al. entraînent un réseau convolutif par rétropropagation pour lire les codes postaux (DOI 10.1162/neco.1989.1.4.541).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Franklin Institute, lauréat·es, « Kunihiko Fukushima » — https://www.fi.edu/laureates/kunihiko-fukushima | institution (prix) | anglais | [lu] |
| Fukushima 1980 — DOI 10.1007/BF00344251 | primaire | anglais | [méta] |
| Schmidhuber, *Annotated history…*, section CNN | partie prenante | anglais | [lu] |
| LeCun et al. 1989 — DOI 10.1162/neco.1989.1.4.541 | primaire | anglais | [méta] |
| CiNii, notice de l'article de 1979 — https://cir.nii.ac.jp/crid/1522262180163676160 | notice bibliographique | japonais | [extrait] |

**Points d'attention**
- « Premier réseau convolutif » : défendable pour l'architecture (convolution + sous-échantillonnage), mais pas pour l'entraînement par gradient (LeCun 1989 ; Waibel 1987 pour la parole, selon Schmidhuber). Présenter les deux.

#### 2.3 WABOT-1 (Université Waseda, 1973)

**Faits clés**
- 1970 : quatre laboratoires de la faculté des sciences et d'ingénierie de Waseda forment un « groupe de bio-ingénierie » et lancent le projet WABOT, sous la direction d'**Ichirō Katō** [extrait pour la date de 1970 ; page Waseda dédiée bloquée].
- **1973** : WABOT-1 est achevé ; Waseda le présente comme « largement considéré comme le premier robot humanoïde grandeur nature » : marche sur deux jambes, saisie d'objets avec des mains munies de capteurs tactiles, conversation simple en japonais ; capacités comparées à celles d'un enfant d'un an et demi. Il est exposé dans le hall du bâtiment 63 (campus de Nishi-Waseda).
- 1984 : WABOT-2 lit une partition et joue de l'orgue électronique (Expo '85 de Tsukuba).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Université Waseda, « Waseda traces 50 years of humanoid robots » (mai 2026) — https://www.waseda.jp/top/en/news/88080 | institution | anglais | [lu] |
| Waseda Future Robotics Organization — https://www.waseda.jp/inst/fro/en/ | institution | anglais | [lu] (mention seulement) |

**Points d'attention**
- **Une seule institution** (Waseda elle-même) : il manque une seconde source indépendante pour « premier humanoïde grandeur nature ». Écrire « souvent présenté comme le premier robot humanoïde complet ». Voir liens bloqués.

#### 2.4 Projet d'ordinateurs de cinquième génération (ICOT, 1982-1992)

**Faits clés**
- Programme du MITI ; institut ICOT créé en 1982, dirigé par Kazuhiro Fuchi ; vision : des machines parallèles fondées sur la **programmation logique** (langage KL1, machines PIM) pour le « traitement de l'information et des connaissances ».
- **1992** : fin officielle (Evan Tick parle de la période 1982-1992), suivie d'un projet de suivi de deux ans.
- Bilan **nuancé**, d'après les rapports d'évaluation de 1992 :
  - Wolfgang Bibel (TU Darmstadt, 4 juin 1992) : « succès remarquable » (logique comme cadre unique, gains du parallélisme).
  - Evan Tick (Univ. de l'Oregon, 16 juin 1992) : la plupart des observateurs étrangers jugent la vision (ingénierie des connaissances, programmation logique) comme un succès et **l'absence de matériel commercialement compétitif comme le principal échec**.
  - Seif Haridi et Siwert Sundström (SICS, Suède) : résultats internes au-delà des attentes, mais projet « inachevé » ; logiciel lié à du matériel propriétaire, donc peu diffusé ; il faut le porter sur des machines courantes.
  - Presse critique : *Nature* (D. Swinbanks, « Fifth generation project lives on », 25 juin 1992) — non lu (payant) ; un résumé de moteur rapporte des critiques de chercheurs américains sur des machines « lentes » et incompatibles [extrait].
- Effet international : Haridi et Sundström notent que de nombreux programmes de recherche ont été créés « en réaction » à l'ICOT (ex. Alvey au Royaume-Uni, ESPRIT, MCC aux États-Unis — à sourcer séparément).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| W. Bibel, *Evaluation Report on the FGCS Project*, 1992 (archives ICOT, AIST) — https://www.airc.aist.go.jp/aitec-icot/ICOT/Museum/FinalEval/finaleval039.html | primaire (rapport commandé) | anglais | [lu] (résumé) |
| E. Tick, *ICOT Evaluation Report*, 1992 — https://www.airc.aist.go.jp/aitec-icot/ICOT/Museum/FinalEval/finaleval137.html | primaire | anglais | [lu] (introduction) |
| S. Haridi, S. Sundström, *Some Reflections on the Fifth Generation Project*, 1992 — https://www.airc.aist.go.jp/aitec-icot/ICOT/Museum/FinalEval/finaleval116.html | primaire | anglais | [lu] (résumé) |
| D. Swinbanks, « Fifth generation project lives on », *Nature* 357, 619 (1992), DOI 10.1038/357619b0 | presse scientifique | anglais | [méta] |

**Points d'attention**
- Les rapports d'évaluation ont été **sollicités par l'ICOT** : ils penchent vers le positif. Il faut une source critique lue (voir liens bloqués : Nature 1992, NYT 1992).
- Budget (~57 milliards de yens) vu seulement dans un résumé de type Wikipédia [extrait] : ne pas publier sans source primaire.

---

### 3. Chine

#### 3.1 Wu Wenjun (Wu Wen-tsün) et la démonstration automatique en géométrie (1977-1978)

**Faits clés**
- Topologue reconnu (membre de l'Académie des sciences de Chine dès 1956).
- **Révolution culturelle (1966-1976)** : envoyé travailler dans une **usine de fabrication d'ordinateurs** ; il dit avoir été frappé par la puissance de l'ordinateur, et en même temps étudiait les mathématiques chinoises anciennes, qu'il voit comme algorithmiques plutôt qu'axiomatiques ; d'où l'idée de démontrer mécaniquement des théorèmes de géométrie (MacTutor, citant Wu).
- **Fin 1976-début 1977** : découverte de la méthode (Wu 1986, résumé). Elle s'appuie sur les « ensembles caractéristiques » de Joseph Ritt : les énoncés géométriques sont traduits en équations polynomiales.
- **1977** : article en chinois, « 初等几何判定问题与机械化证明 », *Zhongguo Kexue* (Scientia Sinica, éd. chinoise), n° 6 [extrait] ; **1978** : version anglaise, *Scientia Sinica* 21, p. 159-172 [extrait, référence vue dans une bibliographie].
- 1978 : prix de la Conférence nationale des sciences [extrait].
- **1997** : prix Herbrand (Conference on Automated Deduction) ; **2006** : prix Shaw de mathématiques (avec David Mumford) « pour ses contributions au nouveau domaine interdisciplinaire de la mécanisation des mathématiques » (MacTutor).

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| J. J. O'Connor, E. F. Robertson, « Wen-Tsun Wu », MacTutor History of Mathematics (Univ. St Andrews) — https://mathshistory.st-andrews.ac.uk/Biographies/Wu_Wen-Tsun/ | historiens des maths | anglais | [lu] |
| Wu Wen-tsün, « Basic principles of mechanical theorem proving in elementary geometries », *Journal of Automated Reasoning* 2, 221-252, 1986, DOI 10.1007/BF02328447 — https://link.springer.com/doi/10.1007/BF02328447 | primaire | anglais | [méta] (résumé lu) |
| Wu W.-T., Gao X.-S., « Mathematics mechanization and applications after thirty years », *Frontiers of Computer Science in China*, 2007, DOI 10.1007/s11704-007-0001-8 | primaire | anglais | [méta] |

**Points d'attention**
- Pas « premier démonstrateur automatique » : Logic Theorist (Newell, Shaw, Simon, 1956), Gelernter (géométrie, 1959), Tarski (décidabilité de la géométrie élémentaire, 1948, cité par Wu lui-même). L'originalité de Wu : une méthode **algébrique efficace** pour la géométrie sans relation d'ordre.

#### 3.2 L'IA en Chine sous la Révolution culturelle et après

**Faits clés (à consolider)**
- La recherche scientifique est en grande partie interrompue pendant la Révolution culturelle (1966-1976) ; le parcours de Wu (3.1) montre qu'un travail sur l'ordinateur a pourtant pu naître de cette période.
- 1983 : Jiang Xinsong, Song Guoning, Chen Yu, « Artificial Intelligence Research in the People's Republic of China: A Review », *AI Magazine* (15 déc. 1983) : « depuis les années 1970, la recherche en IA est devenue très active en Chine » (résumé).
- **1981** : fondation de l'Association chinoise d'intelligence artificielle (CAAI) [extrait : Université Tsinghua, OCDE.AI ; lieu (Changsha) et premier président (Qin Yuanxun) non vérifiés].

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| AITopics (AAAI), notice « Artificial Intelligence Research in the People's Republic of China: A Review », *AI Magazine*, 1983 — https://aitopics.org/doc/journals:7F9412BC | notice + résumé | anglais | [méta] |
| MacTutor (voir 3.1) | historiens | anglais | [lu] |

**Points d'attention**
- **Sujet faiblement sourcé ici** : pas de travail d'historien·ne lu. Ne publier que le parcours de Wu et la date de 1981 avec prudence.

#### 3.3 Plan national de 2017 (« New Generation AI Development Plan »)

**Faits clés**
- **8 juillet 2017** : texte adopté ; **20 juillet 2017** : publié par le Conseil des affaires de l'État, document **Guofa [2017] n° 35** (« 新一代人工智能发展规划 »).
- Trois étapes :
  - **2020** : technologie et applications « au niveau des pays avancés » ; industrie centrale de l'IA > 150 milliards de yuans, industries liées > 1 000 milliards ;
  - **2025** : percées en théorie de base ; premières lois, normes éthiques et politiques de l'IA ; industrie centrale > 400 milliards, liées > 5 000 milliards ;
  - **2030** : niveau « leader mondial », devenir « le principal centre d'innovation en IA du monde » ; industrie centrale > 1 000 milliards, liées > 10 000 milliards.
- Applications visées : industrie, santé, ville, agriculture, **défense nationale**, « gouvernance sociale ».

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Conseil des affaires de l'État, « 国务院关于印发新一代人工智能发展规划的通知 » (国发〔2017〕35号) — https://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm | texte officiel | chinois | [lu] |
| R. Creemers, G. Webster, P. Triolo, E. Kania, traduction intégrale, DigiChina (Stanford) — https://digichina.stanford.edu/work/full-translation-chinas-new-generation-artificial-intelligence-development-plan-2017/ | traduction universitaire | anglais | [lu] |

**Points d'attention**
- Objectifs **déclaratifs** : ne pas les présenter comme atteints. Pour un bilan, il faudrait une source d'évaluation (non cherchée).
- Sujet évolutif : « état au [date] » si on parle de l'avancement.

---

### 4. Inde, Amérique latine, Afrique, Moyen-Orient, monde

#### 4.1 Lotfi Zadeh et la logique floue (1965)

**Faits clés**
- Né en **1921 à Bakou** (Azerbaïdjan, alors en URSS) ; la famille s'installe en Iran (vers 1931) ; études au collège Alborz puis à l'Université de Téhéran (licence de génie électrique, 1942) ; part aux États-Unis en 1944 ; MIT (1946), doctorat à Columbia (1949) ; Berkeley dès 1959 (Berkeley Engineering).
- **Juin 1965** : « Fuzzy Sets », *Information and Control* 8(3), p. 338-353, DOI 10.1016/S0019-9958(65)90241-X.
- Meurt le 6 septembre 2017 à Berkeley.

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Berkeley Engineering, « Remembering Lotfi Zadeh », sept. 2017 — https://engineering.berkeley.edu/news/2017/09/remembering-lotfi-zadeh/ | institution | anglais | [lu] |
| Berkeley News, « Lotfi Zadeh, inventor of fuzzy logic, dies at 96 », 12 sept. 2017 — https://news.berkeley.edu/2017/09/12/lofti-zadeh-inventor-of-fuzzy-logic-dies-at-96 | institution | anglais | [lu] |
| Zadeh 1965 — DOI 10.1016/S0019-9958(65)90241-X | primaire | anglais | [méta] |
| S. Gottwald, « An early approach toward graded identity and graded membership in set theory », *Fuzzy Sets and Systems* 161, 2010, p. 2369-2379, DOI 10.1016/j.fss.2009.12.005 | historien des maths | anglais | [méta] (titre seul) |

**Points d'attention**
- **Origines** : présenter Zadeh comme né à Bakou, ayant grandi en Iran ; l'Azerbaïdjan et l'Iran le revendiquent tous deux. Ne pas trancher l'« identité » ; détails sur les parents contradictoires selon les sources : ne pas publier.
- Précurseurs : logiques à plusieurs valeurs (Łukasiewicz, années 1920) ; Dieter Klaua (Berlin-Est) publie en 1965 une théorie des ensembles à valeurs multiples, indépendamment (selon le titre de Gottwald 2010 ; **non lu**, à vérifier). Éviter « invention de la logique floue » sans nuance.
- Logique floue ≠ apprentissage automatique ; elle relève plutôt de la représentation de l'incertitude.

#### 4.2 Inde : projet KBCS (1986)

**Faits clés**
- **1986** : le Département de l'électronique du gouvernement indien lance, avec le **PNUD**, un projet de cinq ans *Knowledge Based Computer Systems* (KBCS) (Ramani & Anjaneyulu 1991 ; *AI Magazine*).
- Centres : IISc Bangalore (architectures parallèles), TIFR Bombay (parole, réseaux de neurones), Indian Statistical Institute Calcutta (reconnaissance des formes, vision), IIT Madras (systèmes experts), DoE New Delhi (systèmes experts pour l'administration), NCST Bombay (langue naturelle, éducation, planification, programmation logique), C-DAC Pune.
- Le PNUD finance des visites de chercheur·ses étrangers et la formation de jeunes Indien·nes à l'étranger. Conférences KBCS '89 (Bombay) et KBCS-90.
- Antécédent : article de R. Narasimhan (1963) sur les méthodes syntaxiques en reconnaissance des formes (Ramani & Anjaneyulu) ; tradition de recherche en vision à l'ISI.

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| S. Ramani, K. S. R. Anjaneyulu (NCST), « Knowledge Based Computer Systems in India », *AI for Development Newsletter* n° 4, août 1991 — https://www.cs.cmu.edu/afs/cs/Web/Groups/AI/pubs/lists/aidev/aidev4.txt | acteurs du projet | anglais | [lu] |
| AITopics, notice « The Knowledge-Based Computer System Development Program of India: A Review », *AI Magazine* — https://aitopics.org/doc/journals:72173C87 | notice + résumé | anglais | [méta] |

**Points d'attention**
- Montant du PNUD (5,25 M$) et date de septembre 1986 vus seulement dans un extrait de débats du Parlement indien [extrait] ; PDF bloqué.

#### 4.3 Afrique : Deep Learning Indaba (2017) et Masakhane (2019)

**Faits clés**
- **10-15 septembre 2017** : premier Deep Learning Indaba à l'Université du Witwatersrand, Johannesburg (Afrique du Sud) ; mission : « renforcer l'apprentissage automatique en Afrique » et faire des Africain·es « non pas seulement des observateurs mais des acteurs et propriétaires » de l'IA. « Indaba » : mot zoulou pour une assemblée.
- **2019** : Masakhane naît **au Deep Learning Indaba 2019** : effort de recherche ouvert, distribué, à l'échelle du continent, pour la traduction automatique des langues africaines (Orife et al. 2020). Constat : plus de 2 000 langues africaines (30 % des langues vivantes), mais 5 affiliations africaines sur 2 695 dans les conférences ACL de 2019.
- **Novembre 2020** : article collectif (Nekoto et al., *Findings of EMNLP 2020*) : « recherche participative », jeux de données et référentiels pour **plus de 30 langues**, évaluation humaine pour un tiers d'entre elles ; des participant·es sans formation formelle y contribuent.

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Deep Learning Indaba, « About » — https://deeplearningindaba.com/about/ | organisation | anglais | [lu] |
| Deep Learning Indaba, page 2017 — https://deeplearningindaba.com/2017/ | organisation | anglais | [lu] |
| Deep Learning Indaba, blog, « Remembering the Indaba and reporting on its outcomes », 8 nov. 2017 — https://deeplearningindaba.com/blog/2017/11/remembering-the-indaba-and-reporting-on-its-outcomes/ | organisation | anglais | [lu] |
| I. Orife et al., « Masakhane — Machine Translation For Africa », atelier AfricaNLP, ICLR 2020 — https://arxiv.org/abs/2003.11529 | primaire | anglais | [lu] |
| W. Nekoto et al., « Participatory Research for Low-resourced Machine Translation: A Case Study in African Languages », *Findings of EMNLP 2020*, p. 2144-2160 — https://aclanthology.org/2020.findings-emnlp.195/ | primaire (revue à comité) | anglais | [lu] (résumé) |
| Masakhane — https://www.masakhane.io/ | organisation | anglais | [lu] (« communauté de TAL pour l'Afrique, par des Africain·es ») |

**Points d'attention**
- Ne pas désigner de « fondateur·rice » unique de Masakhane : le papier est signé par 25 personnes.
- Wilhelmina Nekoto (première autrice de l'article de 2020), Kathleen Siminyu, Jade Abbott, Laura Martinus, Salomey Osei figurent parmi les auteur·ices : rôle exact non vérifié.

#### 4.4 Éthique : Déclaration de Montréal (2018) et Recommandation de l'UNESCO (2021)

**Faits clés**
- **3 novembre 2017** : l'Université de Montréal lance la coconstruction de la Déclaration de Montréal pour un développement responsable de l'IA ; plus de 500 citoyen·nes, expert·es et parties prenantes, une quinzaine d'ateliers.
- **4 décembre 2018** : dévoilement à la Société des arts technologiques de Montréal, en marge de NeurIPS ; **dix principes** (bien-être, autonomie, vie privée, solidarité, participation démocratique, équité, inclusion de la diversité, prudence, responsabilité, développement soutenable).
- **Novembre 2019** : la Conférence générale de l'UNESCO (40e session) mandate la préparation d'une recommandation.
- **23 novembre 2021** : adoption de la **Recommandation sur l'éthique de l'intelligence artificielle** par les États membres de l'UNESCO ; application **volontaire**. L'UNESCO la présente comme « la première norme mondiale sur l'éthique de l'IA ».

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Déclaration de Montréal, « La déclaration » — https://declarationmontreal-iaresponsable.com/la-declaration/ | texte officiel | français | [lu] |
| Texte de la Déclaration (PDF, 2018) — https://declarationmontreal-iaresponsable.com/wp-content/uploads/2023/01/UdeM_Decl-IA-Resp_LA-Declaration-FR_vFINALE_2_j.pdf | texte officiel | français | [lu] (page de titre) |
| ActuIA, « Retour sur la Déclaration de Montréal… », 5 déc. 2018 — https://www.actuia.com/actualite/retour-sur-la-declaration-de-montreal-sur-lintelligence-artificielle/ | presse spécialisée | français | [lu] |
| UNESCO, texte de la Recommandation — https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence | texte officiel | anglais | [lu] |
| UNESCO, page « Ethics of AI » — https://www.unesco.org/en/artificial-intelligence/recommendation-ethics (et version fr.) | institution | anglais/français | [lu] |

**Points d'attention**
- Nombre d'États : la page anglaise dit « 193 États membres » (2021), la page française « s'applique aux 194 États membres » (après le retour des États-Unis en 2023, à vérifier). Écrire « l'ensemble des États membres de l'UNESCO ».
- « Première norme mondiale » est l'expression de l'UNESCO : les Principes de l'OCDE sur l'IA (mai 2019) sont antérieurs mais non universels (page OCDE non lisible sans JavaScript, à vérifier).
- La Déclaration de Montréal est une initiative universitaire (non contraignante), portée notamment par Marc-Antoine Dilhac et Yoshua Bengio, parmi d'autres.

#### 4.5 Amérique latine (piste) : cybernétique au Chili, projet Cybersyn (1971-1973)

- Réseau informatique de pilotage de l'économie nationalisée sous Salvador Allende, conçu avec le cybernéticien britannique Stafford Beer et une équipe chilienne (Medina 2006). Ce n'est pas de l'IA au sens strict : à placer éventuellement dans une rubrique « cybernétique ».
- Source : Eden Medina, « Designing Freedom, Regulating a Nation: Socialist Cybernetics in Allende's Chile », *Journal of Latin American Studies* 38, 2006, p. 571-606, DOI 10.1017/S0022216X06001179 — [méta] (résumé OpenAlex). Il faut une seconde source lue avant publication.

---

### Liens bloqués à demander

| URL | Ce qu'on espère y trouver |
|---|---|
| https://www.humanoid.waseda.ac.jp/booklet/kato_2.html | Page Waseda sur WABOT-1 : composants (WAM-4, WL-5), date de lancement (1970), capacités ; connexion refusée, archive.org inaccessible |
| https://mitpress.mit.edu/9780262572255/from-newspeak-to-cyberspeak/ | Livre de Gerovitch (403) : dates précises de la campagne anti-cybernétique et du Conseil de cybernétique (1959) |
| https://hasp.ub.uni-heidelberg.de/journals/chakt/article/download/25094/24498/51174 | Article universitaire (Heidelberg) sur l'histoire de l'IA en Chine, Révolution culturelle comprise (bloqué par un anti-robot) |
| https://aaai.org/ojs/index.php/aimagazine/article/download/417/353 | Texte intégral de Jiang, Song, Chen, *AI Magazine* 1983 : IA en Chine dans les années 1970 (connexion requise) |
| https://eparlib.nic.in/bitstream/123456789/2566444/1/08_X_02-03-1988_p74_p74_u1411.pdf | Débats du Parlement indien (mars 1988) : date (sept. 1986) et budget du KBCS (5,25 M$ PNUD) |
| https://www.nature.com/articles/357619b0 et https://www.nature.com/articles/356273b0 | Articles de *Nature* (1992) sur le bilan critique du projet de cinquième génération (payants) |
| https://www.nytimes.com/1992/06/05/business/fifth-generation-became-japan-s-lost-generation.html (URL supposée, non vérifiée) | Bilan critique de l'ICOT dans la presse (A. Pollack, 1992) |
| https://www.nytimes.com/2016/11/27/technology/artificial-intelligence-pioneer-jurgen-schmidhuber-overlooked.html | Article du NYT sur la querelle de priorité Schmidhuber (403) |
| https://cir.nii.ac.jp/crid/1522262180163676160 | Notice CiNii de l'article japonais de Fukushima (1979) |
| https://www.ueda.info.waseda.ac.jp/AITEC_ICOT_ARCHIVES/ICOT/Museum/FinalEval/TEXT/finaleval137-142.txt | Version texte complète des rapports d'évaluation ICOT (miroir Waseda injoignable ; miroir AIST lisible mais page par page) |
| https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449 | Date d'adoption des Principes de l'OCDE sur l'IA (page générée en JavaScript) |
| https://doi.org/10.1016/j.fss.2009.12.005 | Gottwald 2010 sur Dieter Klaua (ensembles à valeurs multiples, 1965) : confirmer l'indépendance vis-à-vis de Zadeh |

---

### Propositions d'événements de frise

Format : année · titre · texte · région · thème · personnes · pionnière · source principale.

#### Sujet 1 — URSS et Europe de l'Est

1. **1955** · Traduire avec la BESM
   Texte : À Moscou, une équipe de l'Académie des sciences programme l'ordinateur BESM pour traduire des textes scientifiques de l'anglais vers le russe. Les premiers essais ont lieu fin 1955, avec un dictionnaire d'environ 950 mots anglais. La linguiste Izabella Bel'skaïa conçoit l'essentiel du système.
   Région : europe-est · Thème : machines · Personnes : Izabella Bel'skaïa, Dmitri Panov, Olga Koulaguina, Igor Mel'tchouk · Pionnière : oui
   Source : I. K. Belskaja, « Machine translation of languages », *Research*, 1957 — https://aclanthology.org/www.mt-archive.info/50/Research-1957-Belskaja.pdf

2. **1955** · La cybernétique réhabilitée
   Texte : En 1954, un dictionnaire soviétique qualifie encore la cybernétique de « pseudo-science réactionnaire ». En 1955, les mathématicien·nes Sobolev, Kitov et Liapounov publient un article qui la présente comme une science. En 1959, l'Académie des sciences lui consacre un conseil.
   Région : europe-est · Thème : societe · Personnes : Sergueï Sobolev, Anatoli Kitov, Alexeï Liapounov, Axel Berg · Pionnière : non
   Source : B. Peters, « Normalizing Soviet Cybernetics », 2012 — https://nevzlincenter.huji.ac.il/sites/default/files/leonidnevzlin/files/47.2.peters.pdf

3. **1968-1974** · Mesurer ce qu'une machine peut apprendre
   Texte : À Moscou, Vladimir Vapnik et Alexeï Tchervonenkis prouvent à quelles conditions un apprentissage sur des exemples se généralise. Leur mesure de la « capacité » d'un modèle, la dimension VC, devient un pilier de la théorie de l'apprentissage. Leurs travaux mèneront aux machines à vecteurs de support (1992-1995).
   Région : europe-est · Thème : apprentissage · Personnes : Vladimir Vapnik, Alexeï Tchervonenkis · Pionnière : non
   Source : IPU RAN, fiche A. Ya. Chervonenkis — https://www.ipu.ru/en/node/74418

4. **1974** · Kaissa, champion du monde
   Texte : À Stockholm, le programme soviétique Kaissa remporte ses quatre parties et le premier championnat du monde des programmes d'échecs. Il est issu d'un programme de l'ITEP (Moscou) qui avait battu un programme de Stanford, par télégraphe, en 1967.
   Région : europe-est · Thème : machines · Personnes : Gueorgui Adelson-Velski, Vladimir Arlazarov, Mikhaïl Donskoï · Pionnière : non
   Source : Computer History Museum, « Arlazarov, Ushkov, and Donskoy in Moscow » — https://www.computerhistory.org/chess/stl-431f4cc15a4a7/ (match de 1967 : récit de Donskoï sur https://www.chessprogramming.org/Kaissa, source unique)

(Option controverse) **1971** · Un réseau à huit couches en Ukraine
   Texte : À Kiev, Alexeï Ivakhnenko décrit un réseau de huit couches construit couche par couche, par régression et sélection. Certains y voient l'ancêtre de l'apprentissage profond ; d'autres soulignent que la méthode diffère beaucoup des réseaux actuels.
   Région : europe-est · Thème : apprentissage · Personnes : Alexeï Ivakhnenko, Valentin Lapa · Pionnière : non
   Source : A. G. Ivakhnenko, « Polynomial Theory of Complex Systems », IEEE SMC, 1971 — https://doi.org/10.1109/TSMC.1971.4308320

#### Sujet 2 — Japon

1. **1967** · Apprendre par descente de gradient
   Texte : Shun'ichi Amari publie une théorie des classifieurs adaptatifs qui corrigent leurs poids pas à pas, en suivant la pente de l'erreur. Le principe, la descente de gradient stochastique, est au cœur de l'apprentissage des réseaux de neurones actuels. La rétropropagation, elle, a été découverte plusieurs fois, indépendamment, entre 1970 et 1986.
   Région : asie · Thème : apprentissage · Personnes : Shun'ichi Amari · Pionnière : non
   Source : A. Griewank, « Who Invented the Reverse Mode of Differentiation? », 2012 — https://ems.press/content/book-chapter-files/27379?nt=1 (et Amari 1967, DOI 10.1109/PGEC.1967.264666)

2. **1973** · WABOT-1 marche et parle
   Texte : À l'université Waseda (Tokyo), l'équipe d'Ichirō Katō achève WABOT-1, un robot à forme humaine qui marche sur deux jambes, saisit des objets et échange quelques phrases en japonais. Waseda le présente comme le premier robot humanoïde grandeur nature.
   Région : asie · Thème : machines · Personnes : Ichirō Katō · Pionnière : non
   Source : Université Waseda, « Waseda traces 50 years of humanoid robots » — https://www.waseda.jp/top/en/news/88080

3. **1979-1980** · Le néocognitron
   Texte : Aux laboratoires de la NHK, Kunihiko Fukushima conçoit un réseau de neurones en couches, inspiré du cortex visuel, qui reconnaît des formes même déplacées. Son architecture préfigure les réseaux convolutifs actuels, entraînés plus tard par rétropropagation.
   Région : asie · Thème : apprentissage · Personnes : Kunihiko Fukushima · Pionnière : non
   Source : Franklin Institute, « Kunihiko Fukushima » — https://www.fi.edu/laureates/kunihiko-fukushima

4. **1982-1992** · Le pari de la cinquième génération
   Texte : Le Japon lance un grand programme public pour des ordinateurs parallèles fondés sur la programmation logique. Il inquiète l'Europe et les États-Unis, qui lancent leurs propres programmes. En 1992, les évaluateurs saluent la recherche, mais aucun matériel commercialement compétitif n'en est sorti.
   Région : asie · Thème : machines · Personnes : Kazuhiro Fuchi · Pionnière : non
   Source : E. Tick, *ICOT Evaluation Report*, 1992 — https://www.airc.aist.go.jp/aitec-icot/ICOT/Museum/FinalEval/finaleval137.html

#### Sujet 3 — Chine

1. **1977** · La méthode de Wu
   Texte : Envoyé dans une usine d'ordinateurs pendant la Révolution culturelle, le mathématicien Wu Wenjun conçoit une méthode pour démontrer par calcul des théorèmes de géométrie. Il traduit les figures en équations, en s'inspirant des mathématiques chinoises anciennes, très algorithmiques.
   Région : asie · Thème : idees · Personnes : Wu Wenjun · Pionnière : non
   Source : MacTutor, « Wen-Tsun Wu » — https://mathshistory.st-andrews.ac.uk/Biographies/Wu_Wen-Tsun/

2. **2017** · Un plan pour 2030
   Texte : Le 20 juillet 2017, le gouvernement chinois publie son plan de développement de l'IA « de nouvelle génération ». Il fixe trois étapes (2020, 2025, 2030) et l'objectif de faire de la Chine le principal centre d'innovation en IA du monde, y compris pour la défense et la « gouvernance sociale ».
   Région : asie · Thème : societe · Personnes : — · Pionnière : non
   Source : Conseil des affaires de l'État, 国发〔2017〕35号 — https://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm (traduction : DigiChina)

(Option, à sourcer davantage) **1981** · Une association chinoise d'IA — date seule [extrait], ne pas publier en l'état.

#### Sujet 4 — Inde, Afrique, Moyen-Orient, monde

1. **1965** · Les ensembles flous
   Texte : Lotfi Zadeh, né à Bakou et formé à Téhéran avant de rejoindre les États-Unis, propose les « ensembles flous » : un élément peut appartenir à un ensemble « un peu » ou « beaucoup ». Cette logique graduée sera utilisée dans des automatismes, des métros aux machines à laver.
   Région : moyen-orient · Thème : idees · Personnes : Lotfi Zadeh · Pionnière : non
   Source : Berkeley Engineering, « Remembering Lotfi Zadeh » — https://engineering.berkeley.edu/news/2017/09/remembering-lotfi-zadeh/
   *(Région à discuter : moyen-orient pour l'origine, amerique-nord pour le lieu de l'article.)*

2. **1986** · L'Inde lance le programme KBCS
   Texte : Avec le Programme des Nations unies pour le développement, le gouvernement indien finance pendant cinq ans des centres de recherche en IA : systèmes experts, parole, vision, traduction anglais-hindi. Le programme forme une génération de chercheur·ses.
   Région : asie · Thème : societe · Personnes : S. Ramani · Pionnière : non
   Source : S. Ramani, K. S. R. Anjaneyulu, « Knowledge Based Computer Systems in India », 1991 — https://www.cs.cmu.edu/afs/cs/Web/Groups/AI/pubs/lists/aidev/aidev4.txt

3. **2017-2019** · Deep Learning Indaba et Masakhane
   Texte : En 2017, le premier Deep Learning Indaba réunit à Johannesburg des étudiant·es et chercheur·ses du continent pour renforcer l'IA en Afrique. En 2019, il donne naissance à Masakhane, une communauté ouverte qui construit des outils de traduction pour les langues africaines, souvent oubliées par l'IA.
   Région : afrique · Thème : societe · Personnes : collectif (Wilhelmina Nekoto, Vukosi Marivate, Jade Abbott, Kathleen Siminyu…) · Pionnière : oui (collectif mixte ; à formuler sans désigner une fondatrice unique)
   Source : I. Orife et al., « Masakhane — Machine Translation For Africa », 2020 — https://arxiv.org/abs/2003.11529

4. **2021** · Une recommandation mondiale sur l'éthique de l'IA
   Texte : Le 23 novembre 2021, les États membres de l'UNESCO adoptent une recommandation sur l'éthique de l'IA : droits humains, égalité de genre, environnement, diversité culturelle. Son application est volontaire. Elle s'inscrit après d'autres textes, comme la Déclaration de Montréal (2018), élaborée avec plus de 500 citoyen·nes.
   Région : monde · Thème : societe · Personnes : — · Pionnière : non
   Source : UNESCO, Recommandation sur l'éthique de l'intelligence artificielle — https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence

---

### Ce qui reste non vérifié (résumé)

- Ivakhnenko & Lapa 1965 (livre) et article *Avtomatika* 1968 : références vues seulement chez Schmidhuber.
- Amari : simulation d'un réseau à 5 couches par Saito (1967-1968) : seule source = Schmidhuber + communication personnelle.
- Fukushima 1979 (version japonaise) : notice CiNii vue seulement en extrait.
- WABOT-1 : une seule institution (Waseda) ; date de lancement 1970 en extrait.
- ICOT : budget, critiques de la presse (Nature, NYT) non lus.
- Chine : CAAI 1981 (lieu, président), prix de 1978 pour Wu, IA sous la Révolution culturelle en général.
- KBCS : montant et mois de lancement.
- Klaua (1965) et principes de l'OCDE (2019) : non lus.
- Date d'arrivée de Vapnik aux États-Unis (1990).

---

## Complément 2 — femmes, mythes et période récente

Recherche faite le 5 novembre 2026 pour le module « Histoire de l'IA » de rouages.net.
User-Agent des requêtes : `RouagesDuNet-research/0.1 (https://rouages.net)`. Aucune donnée personnelle dans les requêtes.

**Légende des statuts**
- **[lu]** : page ou PDF ouvert et lu (au moins le passage cité).
- **[méta]** : seulement les métadonnées (Crossref, notice, résumé d'éditeur). Le texte intégral n'a pas été lu.
- **[extrait]** : vu seulement dans un résultat de moteur de recherche. Ne pas citer tel quel : à vérifier.

Aucune page Wikipédia n'a été ouverte pendant cette recherche. Les renvois « pour aller plus loin » vers Wikipédia restent donc à ajouter, avec un label à vérifier.

---

### 1. Femmes de l'histoire de l'IA

#### 1.1 Margaret Masterman (1910-1986) et la Cambridge Language Research Unit

**Faits clés**
- Au milieu des années 1950, un groupe de discussion informel se forme à Cambridge autour de Margaret Masterman, R. H. Richens et du linguiste M. A. K. Halliday. Ce groupe est « le progéniteur » de la Cambridge Language Research Unit (CLRU), qui sera ensuite financée (Spärck Jones, sur Richens). Masterman dirige la CLRU.
- **Date de fondation incertaine** : 1955 est la date la plus répandue (reprise par Wikipédia selon un résultat de moteur [extrait]). Une recension de 2006 écrit « late 1950s » [lu], et certains sites donnent 1953 ou 1954 [extrait]. Spärck Jones mentionne un « Cambridge Colloquium » en 1955 [lu].
- 1957 : dans *Mechanical Translation*, vol. 4, Masterman décrit des tests sur cartes perforées. Un **thésaurus (Roget)** y sert à choisir les équivalents de traduction de l'italien vers l'anglais [lu].
- Septembre 1961 : à la conférence du National Physical Laboratory (Teddington, 5-8 septembre 1961), Masterman présente « Semantic message detection for machine translation, using an interlingua ». L'article est dédié à Richens [lu].
- Le recenseur John F. Sowa écrit que cet article de 1961 contient « the first recorded use of the term *semantic network* » [lu]. **Mais** Richens emploie déjà « semantic net » en juillet 1956 dans *Mechanical Translation* [lu, PDF original], et Spärck Jones attribue l'idée à Richens [lu]. Voir les points d'attention.
- Selon Sowa, Masterman a suivi le cours de Wittgenstein de 1933-1934 (celui dont les notes forment le *Blue Book*). En 2005, Yorick Wilks publie un recueil de ses textes, *Language, Cohesion and Form* (Cambridge University Press) [lu].

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Masterman, « The Thesaurus in Syntax and Semantics », *Mechanical Translation* 4 (1-2), nov. 1957, p. 35-43 : https://aclanthology.org/www.mt-archive.info/50/MT-1957-Masterman.pdf | primaire | en | [lu] (début) |
| Masterman, « Semantic message detection for machine translation, using an interlingua », conf. NPL 1961 : https://aclanthology.org/www.mt-archive.info/50/NPL-1961-Masterman.pdf | primaire | en | [lu] (début) |
| Richens, « Preprogramming for Mechanical Translation », *Mechanical Translation* 3 (1), juillet 1956 : https://aclanthology.org/www.mt-archive.info/50/MT-1956-Richens.pdf | primaire | en | [lu] (contient « semantic net ») |
| K. Spärck Jones, « R.H. Richens: Translation in the NUDE » (version finale dans Hutchins (dir.), *Early Years in Machine Translation*, Benjamins, 2000) : https://www.cl.cam.ac.uk/archive/ksj21/ksjdigipapers/MTbook00.pdf | historienne et témoin | en | [lu] |
| J. F. Sowa, recension de *Language, Cohesion and Form*, *Computational Linguistics* 32 (4), 2006 : https://aclweb.org/anthology/J06-4005.pdf (version web : https://jfsowa.com/pubs/mmb_rev.htm) | secondaire | en | [lu] |

**Points d'attention**
- N'écrivez pas « Masterman a inventé les réseaux sémantiques ». Formulation prudente : « à la CLRU, Richens (1956) puis Masterman (1961) décrivent des "réseaux sémantiques" pour la traduction automatique ». C'est un travail **collectif**, mené aussi par Richens, Halliday, Spärck Jones et Wilks.
- Pour la fondation, écrivez « au milieu des années 1950 », ou « 1955 (date la plus citée) ».
- Masterman est décrite comme une pionnière de la **linguistique computationnelle** plutôt que de « l'IA » au sens de Dartmouth.

#### 1.2 Karen Spärck Jones (1935-2007) et la pondération IDF (1972)

**Faits clés**
- Janvier 1972 : Spärck Jones publie « A statistical interpretation of term specificity and its application in retrieval », *Journal of Documentation* 28 (1), p. 11-21 [méta]. Cet article introduit la pondération dite **IDF** (*inverse document frequency*) : un mot rare dans la collection pèse plus lourd qu'un mot fréquent.
- La nécrologie de son laboratoire (Cambridge) précise : « She introduced IDF term weighting, a technique which has been adopted as standard in modern systems, including Web search engines » [lu]. Le même texte cite sa thèse de 1964 sur la synonymie et la classification sémantique, son travail avec Stephen Robertson sur la pondération par pertinence, et ses prix : ACL Lifetime Achievement Award en 2004, BCS Lovelace Medal et ACM-AAAI Allen Newell Award en 2007 [lu].
- Elle a travaillé à la CLRU de Masterman (voir 1.1), ce qui relie les deux portraits.
- Robertson revient sur les fondements théoriques de l'IDF en 2004, dans le *Journal of Documentation* [méta].

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Spärck Jones 1972, DOI 10.1108/eb026526 : https://doi.org/10.1108/eb026526 | primaire (payant) | en | [méta] (Crossref) |
| Nécrologie, Department of Computer Science and Technology, Cambridge : https://www.cl.cam.ac.uk/misc/obituaries/sparck-jones/ | institution | en | [lu] |
| Pages archivées de K. Spärck Jones (liens vers ses articles sur l'IDF) : https://www.cl.cam.ac.uk/archive/ksj21/ | institution / primaire | en | [lu] |
| S. Robertson, « Understanding inverse document frequency: on theoretical arguments for IDF », *J. Doc.* 2004, DOI 10.1108/00220410410560582 | secondaire spécialisée | en | [méta] |

**Points d'attention**
- « Base des moteurs de recherche » est trop fort. Écrivez « l'IDF est devenue une pondération standard, utilisée notamment par les moteurs de recherche du Web », selon la formulation de Cambridge.
- L'IDF relève de la recherche d'information (*information retrieval*) et du traitement automatique des langues. Le rattacher à « l'IA » demande une phrase d'explication.
- Graphie : « Spärck Jones », avec tréma. Crossref écrit « SPARCK JONES ».

#### 1.3 Mary Kenneth Keller (1913-1985) : lien avec l'IA ténu

- Le Mathematics Genealogy Project indique un Ph.D. obtenu à l'University of Wisconsin-Madison en 1965, avec la thèse « Inductive Inference on Computer Generated Patterns » (graphie de la notice : « Interence ») ; directeur : Preston C. Hammer [lu].
- Le titre évoque l'inférence inductive, un thème proche de l'apprentissage automatique. Aucune source ouverte ne montre toutefois un apport à l'IA.
- Mythe à éviter : « première personne docteure en informatique ». Selon des résultats de moteur [extrait], Irving C. Tang a soutenu le même jour (Washington University). La formulation prudente est « parmi les deux premières personnes docteures en informatique aux États-Unis, et la première femme » [extrait, à vérifier dans un article CACM, bloqué].
- **Recommandation : ne pas l'intégrer au module IA.** Elle a sa place dans un module « histoire de l'informatique ».

Source : https://mathgenealogy.org/id.php?id=82720 (institutionnelle, en) [lu].

#### 1.4 Margaret Boden (1936-2025)

**Faits clés**, d'après la nécrologie de l'université du Sussex [lu]
- Elle étudie la médecine et la philosophie à Cambridge, enseigne la philosophie à Birmingham, puis étudie la psychologie à Harvard.
- 1965 : elle arrive au Sussex comme *lecturer* en philosophie.
- Au début des années 1970, elle joue un rôle central dans la création du Cognitive Studies Programme, puis de la School of Cognitive and Computing Studies (COGS), dont elle devient la première doyenne (*founding Dean*).
- Ses travaux ont défini le domaine de la « créativité computationnelle ». Elle a participé dès les débuts aux discussions sur les risques et les bénéfices de l'IA.
- 2017 : ACM-AAAI Allen Newell Award.
- Décès en juillet 2025, à 88 ans. La date du 18 juillet 2025 ne vient que d'extraits [extrait].
- Titres d'ouvrages non vérifiés dans une source ouverte : *Artificial Intelligence and Natural Man* (1977), *The Creative Mind* (1990), *Mind as Machine* (2006). La nécrologie cite seulement *Mind as Machine* d'après un extrait [extrait].

**Sources** : https://www.sussex.ac.uk/news/article/68608-obituary-professor-maggie-boden (institution, en) [lu]. Selon des extraits, il existe des nécrologies dans *Nature* (J. Bryson, 12 août 2025) et *The Guardian* (D. Cliff, 1er août 2025) [extrait, non ouvertes].

**Point d'attention** : Boden est philosophe et chercheuse en sciences cognitives, pas conceptrice de systèmes. Présentez-la comme une théoricienne de l'IA et de la créativité.

#### 1.5 Cynthia Breazeal et Kismet (fin des années 1990)

**Faits clés**
- Kismet est un robot « conçu pour des interactions sociales avec des humains ». Son approche s'inspire de la façon dont les nourrissons apprennent à communiquer avec les adultes, selon la page du projet au MIT AI Lab [lu]. L'architecture comporte six sous-systèmes : extraction de caractéristiques, perception, attention, motivation (émotions), comportement et moteur [lu].
- Le robot est réalisé pour sa thèse de doctorat (Sc.D.), soutenue au MIT en 2000 : « Sociable Machines: Expressive Social Exchange Between Humans and Robots ». Voir la page de recherche de Breazeal [lu].
- 2002 : livre *Designing Sociable Robots*, MIT Press [lu sur sa page ; méta Crossref]. 2003 : article « Toward sociable robots », *Robotics and Autonomous Systems* 42 [méta].
- Avant Kismet, elle participe au projet Cog (Brooks et al., 1998-1999) [lu, liste de publications].

**Sources**
| Source | Type | Langue | Statut |
|---|---|---|---|
| Page du projet Kismet, MIT AI Lab : http://www.ai.mit.edu/projects/sociable/kismet.html (aussi /overview.html, /people.html) | primaire (laboratoire) | en | [lu] |
| Page de recherche de C. Breazeal, MIT Media Lab : https://web.media.mit.edu/~cynthiab/NewFiles/research.html | primaire | en | [lu] |
| Breazeal 2003, DOI 10.1016/S0921-8890(02)00373-1 | article | en | [méta] |

**Points d'attention**
- Écrivez « fin des années 1990 (thèse soutenue en 2000) ». Aucune source ouverte ne date précisément le début du projet. Un résultat de moteur évoque une « version de 1993 » sur une page du MIT Museum [extrait], ce qui paraît douteux : la page est bloquée (erreur 429), à vérifier.
- Kismet ne « ressent » rien. Il **simule** des expressions émotionnelles.

#### 1.6 Daphne Koller

**Faits clés**
- 2004 : bourse MacArthur. La fondation la décrit ainsi : « devising new strategies and algorithms for making decisions in complex systems under uncertain conditions, and applying statistical reasoning to classical problems in artificial intelligence » (page publiée le 28 septembre 2004) [lu].
- Selon le Computer History Museum [lu] : doctorat à Stanford en 1994, plus de 18 ans au corps enseignant de Stanford (titulaire de la chaire Rajeev Motwani), « founder and president » de Coursera, puis Chief Computing Officer chez Calico.
- Coursera est cofondée avec Andrew Ng en **2012** [extrait : date non lue dans une source primaire ouverte]. Elle publie avec Nir Friedman *Probabilistic Graphical Models* (MIT Press, 2009) [extrait].

**Sources** : https://www.macfound.org/fellows/class-of-2004/daphne-koller (institution, en) [lu] ; https://computerhistory.org/profile/daphne-koller/ (musée, en) [lu].

**Point d'attention** : son apport scientifique à l'IA porte sur le **raisonnement probabiliste** (modèles graphiques probabilistes). Coursera est un apport à l'enseignement, pas à l'IA.

#### 1.7 Fei-Fei Li et ImageNet (2009)

**Faits clés**
- Juin 2009 : Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li et Li Fei-Fei présentent « ImageNet: A large-scale hierarchical image database » à CVPR 2009, p. 248-255 [méta].
- Le Computer History Museum écrit qu'ImageNet est « a project started and led by Stanford professor Fei-Fei Li » et qu'elle l'imagine à partir de 2006. Les catégories viennent de WordNet. L'étiquetage des images est **confié à des travailleur·ses du clic via Amazon Mechanical Turk**. La base est achevée en 2009 [lu].
- Le Stanford HAI la présente comme « the inventor of ImageNet and the ImageNet Challenge ». Elle dirige le Stanford AI Lab de 2013 à 2018 et devient directrice fondatrice de Stanford HAI [lu].

**Sources** : DOI 10.1109/CVPR.2009.5206848 [méta] ; https://computerhistory.org/blog/chm-releases-alexnet-source-code/ (musée, en, 20 mars 2025) [lu] ; https://hai.stanford.edu/people/fei-fei-li (institution, en) [lu]. Le PDF officiel https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf a renvoyé une connexion réinitialisée : il est bloqué.

**Points d'attention**
- ImageNet est une œuvre collective (six auteur·rices, plus des milliers d'annotateur·rices anonymes). C'est un lien direct avec le thème du travail invisible (voir le Turc mécanique, 2.1).
- Ne pas confondre la base (2009) avec le concours ILSVRC (à partir de 2010) ni avec AlexNet (2012).

#### 1.8 Joy Buolamwini et Timnit Gebru : *Gender Shades* (2018)

**Faits clés**
- Article de Joy Buolamwini et Timnit Gebru, *Proceedings of Machine Learning Research* 81, p. 77-91, conférence FAT* 2018 [lu]. Les autrices évaluent trois systèmes commerciaux de classification du genre (IBM, Microsoft, Face++) sur un jeu de données équilibré par genre et type de peau (échelle de Fitzpatrick).
- Résultats : les femmes à la peau foncée sont le groupe le plus mal classé, avec un taux d'erreur jusqu'à **34,7 %**. Le taux maximal pour les hommes à la peau claire est de **0,8 %** [lu].
- Le résumé note aussi que les jeux de référence IJB-A et Adience comptent respectivement 79,6 % et 86,2 % de sujets à la peau claire [lu].
- Le site du projet ajoute qu'IBM a eu le plus grand écart (34,4 points) et que la direction d'IBM Watson a répondu en un jour [lu].
- MIT News (11 février 2018) note que les trois systèmes traitaient le genre comme binaire. À l'époque, Gebru était doctorante à Stanford, puis postdoc chez Microsoft Research [lu].
- Buolamwini a fondé l'Algorithmic Justice League [lu, page « about » ; la date de fondation n'y figure pas].

**Sources** : https://proceedings.mlr.press/v81/buolamwini18a.html (primaire, en) [lu] ; http://gendershades.org/overview.html (primaire, en) [lu] ; https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212 (institution, en) [lu] ; https://www.ajl.org/about [lu].

**Points d'attention**
- L'étude porte sur la **classification du genre**, pas sur la reconnaissance faciale d'identité. Ne pas extrapoler.
- La catégorie « genre binaire » vient des systèmes testés, et les autrices le soulignent.

#### 1.9 « Stochastic Parrots » (2021) et le départ de Timnit Gebru de Google (décembre 2020)

**Faits clés**
- Article : Emily M. Bender, Timnit Gebru, Angelina McMillan-Major et « Shmargaret Shmitchell », « On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? », FAccT 2021, p. 610-623, publié le 3 mars 2021 [méta]. Le nom « Shmargaret Shmitchell » est un pseudonyme. L'identité qu'on lui prête n'a pas été vérifiée dans une source ouverte : ne pas l'écrire sans source.
- Selon MIT Technology Review, l'article examine notamment les coûts environnementaux et financiers des grands modèles de langue, en s'appuyant sur Strubell et al. 2019. Sa bibliographie compte 128 références [lu].
- **Version de Timnit Gebru** : le soir du 2 décembre 2020, elle annonce sur Twitter que Google l'a « poussée dehors » (*forced out*) [lu, MIT TR]. Platformer publie le 3 décembre 2020 son dernier courriel interne au groupe *Brain Women and Allies*. Elle y dénonce un ordre de retirer l'article « with no engagement whatsoever » et le fait de « silencing marginalized voices » [lu]. Platformer titre sur un licenciement (*fired*) [lu].
- **Version de Google (Jeff Dean, alors à la tête de Google AI)** : dans un courriel interne publié ensuite, il écrit que l'article « didn't meet our bar for publication », qu'il « ignored too much relevant research » et qu'il n'avait pas été soumis à la relecture interne dans les délais [lu, MIT TR et Platformer]. Toujours selon Dean, Gebru avait posé des conditions à son maintien, dont l'identité des relecteur·rices, faute de quoi elle partirait. Il conclut : « We accept and respect her decision to resign from Google » [lu, Platformer].
- Bender a fourni l'article à MIT TR, mais a demandé qu'il ne soit pas publié, car c'était une version préliminaire [lu].
- Gebru a ensuite fondé le DAIR (Distributed AI Research Institute). La page d'accueil évoque son 5e anniversaire, le 4 décembre [lu], ce qui place la fondation en décembre 2021 par déduction ; date de fondation non lue explicitement.

**Sources** : DOI 10.1145/3442188.3445922 [méta] ; https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/ (presse, en, 4 déc. 2020) [lu] ; https://www.platformer.news/the-withering-email-that-got-an-ethical/ (presse, en, 3 déc. 2020, contient les deux courriels) [lu] ; https://www.dair-institute.org/ [lu].

**Points d'attention**
- Présentez **les deux versions** : « licenciée selon elle, démission selon Google ». N'en tranchez aucune.
- La lettre de soutien (plus de 3 300 signatures) et les excuses de Sundar Pichai ne sont connues que par des extraits : à vérifier.

#### 1.10 Lucy Suchman, *Plans and Situated Actions* (1987)

**Faits clés**
- 1987 : *Plans and Situated Actions: The Problem of Human-Machine Communication*, Cambridge University Press, 203 pages. Le livre est attesté par une recension de 1988 dans *The Knowledge Engineering Review* (DOI 10.1017/S0269888900004537) et par une recension en français dans *Intellectica* en 1989 (DOI 10.3406/intel.1989.1374) [méta].
- 2006-2007 : deuxième édition augmentée, *Human-Machine Reconfigurations*, CUP, DOI 10.1017/CBO9780511808418 [méta].
- Contexte, connu par des extraits seulement : anthropologue à Xerox PARC à partir de 1979, elle étudie des utilisateur·rices face à une photocopieuse dotée d'un système expert d'aide. Thèse : l'action humaine est « située » et ne se réduit pas à l'exécution d'un plan, ce qui critique l'approche planificatrice de l'IA symbolique. Elle rejoint ensuite l'université de Lancaster [extrait].

**Source à lire en priorité** : la recension en français d'*Intellectica* (Persée), en accès libre probable.

**Point d'attention** : Suchman est une critique de l'IA venue de l'anthropologie. C'est une figure de l'interaction humain-machine, pas une conceptrice de systèmes d'IA.

#### 1.11 Pionnières françaises

- **Hélène Bestougeff** : aucune source ouverte ne la présente comme pionnière de l'IA. Seule une notice bibliographique sans titre a été trouvée [extrait]. **À exclure** faute de source.
- **Alice Recoque (1929-2021)** : selon l'hommage du bulletin *1024* de la Société informatique de France (n° 17, avril 2021, p. 119-122) [lu]
  - elle est cheffe de projet du mini-ordinateur **Mitra 15** (vendu à plus de 8 000 exemplaires, utilisé notamment dans le réseau Cyclades) ;
  - en **1985**, sous la présidence de Jacques Stern, elle « initie et prend la responsabilité de la mission sur l'intelligence artificielle » du groupe Bull, dans le contexte de la « 5e génération » japonaise ;
  - ses mots, cités dans l'hommage : « On me confie alors la mission de définir les structures à mettre en place. Un centre de recherche et développement pour le groupe (le CEDIAG), est alors créé » ;
  - le CEDIAG est dirigé successivement par Philippe Roussel et Jean Rohmer.

  Source : https://1024.societe-informatique-de-france.fr/1024/2021/04/1024_17_2021_119.pdf (société savante, fr) [lu]. Seconde source à ouvrir : l'article de Futura-Sciences [extrait] https://www.futura-sciences.com/tech/actualites/intelligence-artificielle-ils-ont-invente-intelligence-artificielle-alice-recoque-pionniere-francaise-histoire-oubliee-130574/

  **Point d'attention** : écrivez qu'elle « a lancé et dirigé la mission IA de Bull ». Évitez les superlatifs du type « mère de l'IA française ».

---

### 2. Mythes et origines

#### 2.1 Le « Turc mécanique » de Kempelen (1769-1770) : un humain caché

**Faits clés**
- Le Heinz Nixdorf MuseumsForum (Paderborn) écrit que la première démonstration a lieu **en 1769 à Vienne**, devant un public dont faisait partie l'impératrice Marie-Thérèse. Suit une tournée de plus de 70 ans en Europe et en Amérique. L'original brûle à Philadelphie, et le musée présente une reconstruction fonctionnelle le 25 mars 2004, à la veille des 200 ans de Kempelen [lu].
- Beaucoup d'autres sources datent la démonstration de **1770** [extrait]. Le Turc cachait un joueur d'échecs humain dans le meuble. Le secret est révélé après l'incendie de 1854 par des articles du *Chess Monthly* [extrait].
- Lien moderne :
  - Amazon lance en **2005** une plateforme de micro-travail nommée **Mechanical Turk**, présentée comme de l'« artificial artificial intelligence » [extrait] ;
  - ImageNet a été étiqueté via cette plateforme [lu, CHM] ;
  - l'annotation de données pour ChatGPT a été sous-traitée au Kenya (voir 3.4).

**Sources** : https://www.hnf.de/en/permanent-exhibition/exhibition-areas/the-mechanization-of-information-technology/early-automatons-miracles-of-technology/the-chess-turk-has-been-brought-back-to-life.html (musée, en) [lu] ; https://computerhistory.org/blog/chm-releases-alexnet-source-code/ [lu] (pour Mechanical Turk et ImageNet).

**Points d'attention**
- Pour la date, écrivez « 1769 ou 1770 selon les sources », ou bien « vers 1770 ».
- Le Turc n'est pas une IA, c'est une **supercherie**. Son intérêt pour la vulgarisation vient de l'illusion d'une machine pensante et du **travail humain caché**.
- La formule d'Amazon, qui serait de Jeff Bezos, n'a été vue qu'en extrait. Il faut une source primaire, par exemple un communiqué d'Amazon de 2005.

#### 2.2 McCulloch et Pitts (1943)

- Décembre 1943 : Warren S. McCulloch et Walter Pitts publient « A logical calculus of the ideas immanent in nervous activity », *Bulletin of Mathematical Biophysics* 5, p. 115-133 [méta]. L'article propose le premier modèle formel du neurone comme unité logique à seuil.
- La proposition de Dartmouth (1955) cite déjà « Pitts and McCulloch » parmi les travaux sur les réseaux de neurones [lu].
- Source : DOI 10.1007/BF02478259 [méta] ; proposition de Dartmouth (ci-dessous) [lu].
- **Point d'attention** : « premier modèle de neurone formel » est l'expression consacrée. « Premier réseau de neurones » est discutable.

#### 2.3 Le mot « intelligence artificielle » : proposition du 31 août 1955 et atelier de l'été 1956

**Faits clés**
- La proposition est datée du **31 août 1955** et signée de J. McCarthy (Dartmouth), M. L. Minsky (Harvard), N. Rochester (IBM) et C. E. Shannon (Bell Labs). Elle demande « a 2 month, 10 man study of artificial intelligence » pour l'été 1956 à Dartmouth (Hanover, New Hampshire) [lu].
- Elle repose sur la conjecture que « every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it » [lu].
- Les sept thèmes annoncés : calculateurs automatiques, langage, réseaux de neurones, théorie de la taille d'un calcul, auto-amélioration, abstractions, hasard et créativité [lu].
- Dartmouth présente aujourd'hui l'atelier de 1956 comme « the birth of this field of research » [lu].
- Avant 1955 : Turing, « Computing Machinery and Intelligence », *Mind*, octobre 1950 [méta] ; McCulloch et Pitts en 1943 ; la cybernétique (Wiener, *Cybernetics*, 1948 [non vérifié ici]).

**Sources** : http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf (primaire, en) [lu] ; https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth (institution, en) [lu] ; Turing 1950, DOI 10.1093/mind/LIX.236.433 [méta].

**Points d'attention**
- L'expression « naissance de l'IA » est un **raccourci institutionnel**. Le mot est forgé en 1955, l'atelier a lieu en 1956, et les idées sont antérieures (Turing, cybernétique, McCulloch et Pitts).
- La proposition dit littéralement « 10 man study ». Aucune femme ne figure parmi les signataires : c'est à signaler sobrement.
- Les dates exactes de l'atelier (juin-août 1956) n'ont pas été vérifiées dans une source ouverte.

#### 2.4 Frank Rosenblatt et le perceptron (1958) : l'emballement

**Faits clés**
- 1958 : Rosenblatt publie « The perceptron: A probabilistic model for information storage and organization in the brain », *Psychological Review* 65, p. 386-408 [méta].
- Juillet 1958 : l'Office of Naval Research présente une démonstration sur un IBM 704. Après 50 essais, la machine apprend à distinguer des cartes marquées à gauche de cartes marquées à droite [lu, Cornell Chronicle].
- Titre du *New York Times* cité par Cornell : « NEW NAVY DEVICE LEARNS BY DOING: Psychologist Shows Embryo of Computer Designed to Read and Grow Wiser ». *The New Yorker* écrit : « the first serious rival to the human brain ever devised » [lu, cité par Cornell].
- Rosenblatt lui-même, en 1958 : « we are about to witness the birth of such a machine – a machine capable of perceiving, recognizing and identifying its surroundings without any human training or control » [lu, cité par Cornell].
- Le Mark I Perceptron est conservé à la Smithsonian Institution. Rosenblatt meurt en 1971 [lu].

**Sources** : DOI 10.1037/h0042519 [méta] ; https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon (université, en, 25 sept. 2019) [lu]. L'archive du NYT (8 juillet 1958) est bloquée (erreur 403).

**Point d'attention** : c'est le cas d'école de l'emballement médiatique. La démonstration réelle était modeste (gauche ou droite).

#### 2.5 Minsky et Papert, *Perceptrons* (1969) : ont-ils « tué » les réseaux de neurones ?

**Faits clés et débat**
- 1969 : Marvin Minsky et Seymour Papert publient *Perceptrons* (MIT Press ; la page de l'éditeur est bloquée). Le livre démontre les limites des perceptrons à une couche.
- **Version « classique »** : Cornell écrit que le livre « assailed Rosenblatt's work and, essentially, sealed its fate ». Le déclin des financements contribue à un « hiver de l'IA » [lu].
- **Version des historien·nes** : le sociologue Mikel Olazaran (*Social Studies of Science*, 1996) analyse cette lecture comme une « histoire officielle ». Selon lui, l'interprétation qui faisait des preuves de Minsky et Papert une démonstration de l'impasse des réseaux de neurones résultait de l'institutionnalisation et de la légitimation de l'IA symbolique. Au niveau des chercheur·ses, il existait une « considerable interpretative flexibility », et l'histoire a été réécrite lors du renouveau des années 1980 [méta : résumé Crossref lu].

**Sources** : https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon [lu] ; Olazaran 1996, DOI 10.1177/030631296026003005 [méta].

**Point d'attention** : écrivez « le livre a été lu comme un arrêt de mort des réseaux de neurones », plutôt que « le livre a tué les réseaux de neurones ». Les recherches ont continué (Amari, Fukushima, Werbos...).

#### 2.6 Le rapport Lighthill (1972-1973)

**Faits clés**
- James Lighthill rédige « Artificial Intelligence: A General Survey » pour le Science Research Council britannique. Le texte est daté de **juillet 1972** et publié début 1973 [lu].
- Citations du rapport :
  - « Workers entered the field around 1950, and even around 1960, with high hopes that are very far from having been realised in 1972 » ;
  - il désigne comme cause générale la « failure to recognise the implications of the combinatorial explosion » [lu].
- Le rapport est publié avec des réponses de Sutherland, Needham, Longuet-Higgins et Michie [lu, sommaire].
- Effet selon le site patrimonial Chilton (STFC) : le rapport, plutôt favorable à l'automatisation et à la simulation neurophysiologique et psychologique, critique sévèrement la recherche fondamentale (robotique, langage). Il provoque « a massive loss of confidence in AI » au Royaume-Uni pendant près de dix ans, jusqu'au programme Alvey (1982-1983) [lu].
- Juin 1973 : débat télévisé de la BBC à la Royal Institution entre Lighthill, Michie, Gregory et McCarthy [lu, page AIAI Édimbourg].

**Sources** : http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm (texte intégral, primaire) [lu] ; http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/overview.htm [lu] ; http://www.aiai.ed.ac.uk/events/lighthill1973/ (université d'Édimbourg) [lu].

**Point d'attention** : l'effet du rapport vaut d'abord **au Royaume-Uni**. Il ne faut pas le présenter comme la cause unique d'un « hiver » mondial.

#### 2.7 La rétropropagation : plusieurs inventeur·rices

**Faits clés**
- 1970 : Seppo Linnainmaa, dans son mémoire de master à Helsinki, décrit le mode inverse de différentiation automatique, sans parler de réseaux de neurones. Il le publie dans *BIT* en 1976 [méta].
- Griewank (2012) raconte que l'idée lui serait venue « on a sunny afternoon in a Copenhagen park in 1970 » [lu]. Le même article signale que **G. Ostrowski** l'aurait découverte « some five years earlier » en génie chimique, et cite aussi Hachtel et al. (années 1960), Iri, Baur et Strassen (1983) et Speelpenning (1980) [lu].
- Werbos : sa thèse de 1974 contient une discussion préliminaire liée aux réseaux de neurones. **Selon Schmidhuber**, la première application explicite aux réseaux de neurones date de 1982, « not yet in his 1974 thesis, as is sometimes claimed » [lu]. Griewank cite Werbos 1982 [lu].
- Octobre 1986 : Rumelhart, Hinton et Williams publient « Learning representations by back-propagating errors » dans *Nature* 323 (n° 6088) [méta]. Schmidhuber reconnaît qu'ils ont montré expérimentalement que la méthode produit des représentations internes utiles dans les couches cachées [lu].
- Débat de priorité : Schmidhuber reproche à l'article de 1986 de ne pas citer les origines de la méthode [lu].

**Sources** : https://people.idsia.ch/~juergen/who-invented-backpropagation.html (chercheur, en) [lu] ; A. Griewank, « Who Invented the Reverse Mode of Differentiation? », *Documenta Math.*, vol. ISMP, 2012, p. 389-400 : https://www.maths.tcd.ie/EMIS/journals/DMJDMV/vol-ismp/52_griewank-andreas-b.pdf (mathématicien, en) [lu] ; Linnainmaa 1976, DOI 10.1007/BF01931367 [méta] ; Rumelhart et al. 1986, DOI 10.1038/323533a0 [méta].

**Points d'attention**
- Schmidhuber est **partie prenante** du débat de priorité. Croisez-le toujours avec Griewank, qui est indépendant et vient de la différentiation automatique.
- Formulation sûre : « inventée et réinventée plusieurs fois (années 1960-1980), popularisée pour les réseaux de neurones en 1986 ».

#### 2.8 ELIZA (Weizenbaum, 1966) et la critique de son auteur

**Faits clés**
- Janvier 1966 : Joseph Weizenbaum publie « ELIZA—A Computer Program For the Study of Natural Language Communication Between Man and Machine », *Communications of the ACM* 9 (1), p. 36-45 [méta].
- MIT News (2008) le décrit comme « perhaps the first instance of what today is known as a chatterbot program ». Le programme simulait un psychothérapeute. Weizenbaum « was shocked to discover that many users were taking his program seriously and were opening their hearts to it » [lu].
- 1976 : il publie *Computer Power and Human Reason: From Judgment to Calculation*. Il y met en garde contre l'idée de confier aux machines des choix proprement humains : « No other organism, and certainly no computer, can be made to confront genuine human problems in human terms » [lu, cité par MIT News]. Il meurt le 5 mars 2008 à Berlin [lu].

**Sources** : DOI 10.1145/365153.365168 [méta] ; https://news.mit.edu/2008/obit-weizenbaum-0310 (institution, en) [lu].

**Point d'attention** : ELIZA ne « comprenait » rien. Le programme reformulait la phrase de l'utilisateur·rice selon des règles. Le phénomène est souvent appelé « effet ELIZA » (expression non sourcée ici).

---

### 3. Période récente

#### 3.1 AlexNet (2012)

- Alex Krizhevsky, Ilya Sutskever et Geoffrey E. Hinton (université de Toronto) présentent « ImageNet Classification with Deep Convolutional Neural Networks » à NeurIPS 2012 (vol. 25) [lu].
- Le réseau remporte ILSVRC-2012 avec une erreur top-5 de **15,3 %**, contre **26,2 %** pour le deuxième [lu].
- L'entraînement a pris cinq à six jours sur deux GPU NVIDIA GTX 580 de 3 Go, avec 1,2 million d'images d'entraînement [lu].
- Le Computer History Museum en publie le code source, avec Google, le 20 mars 2025. Il explique le succès par la conjonction des données (ImageNet) et du calcul (GPU) [lu].

**Sources** : https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf (primaire) [lu] ; https://computerhistory.org/blog/chm-releases-alexnet-source-code/ [lu].

**Point d'attention** : AlexNet s'appuie sur les CNN de LeCun (fin des années 1980) et sur ImageNet. Ce n'est pas une rupture sortie de nulle part.

#### 3.2 « Attention Is All You Need » (2017)

- arXiv 1706.03762, soumis le 12 juin 2017 et présenté à NeurIPS 2017.
- Huit auteur·rices : Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin [lu].
- L'article propose le **Transformer**, une architecture « based solely on attention mechanisms, dispensing with recurrence and convolutions entirely » [lu].
- Note de bas de page : « Equal contribution. Listing order is random ». Elle détaille ensuite le rôle de chacun·e [lu].

**Source** : https://arxiv.org/abs/1706.03762 (primaire) [lu].

**Point d'attention** : le premier nom ne désigne pas l'auteur principal (l'ordre est aléatoire). L'attention elle-même existait avant (Bahdanau et al., 2014, non vérifié ici).

#### 3.3 ChatGPT (30 novembre 2022)

- Le Centre for Computing History (Cambridge) date le lancement de ChatGPT du 30 novembre 2022 [lu]. Selon des extraits, la sortie est présentée comme un « research preview » gratuit, issu de la famille InstructGPT/GPT-3.5 [extrait].
- Billet officiel « Introducing ChatGPT » : https://openai.com/index/chatgpt/ est **bloqué** (erreur 403).

**Sources** : https://computinghistory.org.uk/det/71180/OpenAI%20launches%20ChatGPT (musée, en) [lu]. Il manque une deuxième source : le billet d'OpenAI ou un article de presse de décembre 2022.

**Point d'attention** : le « million d'utilisateurs en cinq jours » n'est connu que par des extraits. À ne pas publier sans source primaire.

#### 3.4 Le travail d'annotation sous-payé : l'enquête TIME (18 janvier 2023)

**Faits clés** (enquête de Billy Perrigo, TIME, 18 janvier 2023) [lu]
- À partir de **novembre 2021**, OpenAI envoie des dizaines de milliers d'extraits de textes à Sama, au Kenya, pour les étiqueter. Le but est de construire un détecteur de contenus toxiques, intégré ensuite à ChatGPT.
- Les annotateur·rices touchaient environ **1,32 à 2 dollars de l'heure** net, selon leur ancienneté et leurs performances. OpenAI payait 12,50 dollars de l'heure à Sama, soit six à neuf fois plus que ce que les employé·es touchaient par heure. Trois contrats d'environ 200 000 dollars au total ont été signés fin 2021.
- Les employé·es décrivent des contenus traumatisants. Sama annule tout son travail pour OpenAI en **février 2022**, huit mois plus tôt que prévu.
- Réponses des entreprises, publiées dans l'article :
  - Sama conteste plusieurs points : accès à des séances individuelles de soutien psychologique, 70 passages par poste et non 250, salaires de 1,46 à 3,74 dollars de l'heure ;
  - OpenAI confirme le rôle de ces employé·es et affirme que filtrer les contenus nuisibles est « a necessary step ».
- Suite : le **14 juillet 2023**, TechCrunch rapporte qu'une pétition de travailleur·ses kényan·es demande au Parlement kényan d'enquêter sur la sous-traitance de la modération et du travail d'IA [lu].

**Sources** : https://time.com/6247678/openai-chatgpt-kenya-workers/ (presse d'investigation, en) [lu] ; https://techcrunch.com/2023/07/14/workers-that-made-chatgpt-less-harmful-ask-lawmakers-to-stem-alleged-exploitation-by-big-tech/ (presse, en) [lu].

**Points d'attention**
- Citez les **deux** fourchettes de salaire (celle de TIME et celle de Sama) et les réponses des entreprises.
- Restez sobre sur la nature des contenus. Ne reproduisez pas les descriptions détaillées.
- Le contexte d'« hiver de l'IA » n'a rien à voir ici. Le lien pédagogique pertinent est celui du Turc mécanique (2.1) et d'ImageNet (1.7).

#### 3.5 Le règlement européen sur l'IA (AI Act, règlement (UE) 2024/1689) : sujet évolutif

**Faits clés**
- La Commission européenne annonce : « On 1 August 2024, the European Artificial Intelligence Act (AI Act) enters into force ». La proposition datait d'avril 2021 [lu].
- La CNIL précise : publié au JOUE le **12 juillet 2024**, entré en vigueur le **1er août 2024** (vingt jours après), application progressive [lu].
- **Évolution importante** : la CNIL indique qu'une version amendée du règlement, dite « omnibus VII » (simplification), a été **adoptée le 24 juillet 2026 et est entrée en vigueur le 27 juillet 2026**. Elle modifie le calendrier d'application [lu ; page de la CNIL mise à jour le 17 août 2026]. État au 17 août 2026 selon la CNIL :
  - 2 février 2025 : interdictions des systèmes à risque inacceptable, sauf une ;
  - 2 août 2025 : règles sur les modèles d'IA à usage général ;
  - 2 août 2026 : obligations de transparence ;
  - 2 décembre 2026 : interdiction des systèmes générant des contenus pédocriminels et des hypertrucages sexuels ;
  - 2 décembre 2027 : haut risque, annexe III ;
  - 2 août 2028 : haut risque, annexe I.

**Sources** : https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en (institution, en) [lu] ; https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil (autorité, fr) [lu]. Le texte officiel sur EUR-Lex (https://eur-lex.europa.eu/eli/reg/2024/1689/oj) est **bloqué** (réponse 202 avec page vide, défi anti-robot).

**Points d'attention**
- Utilisez `<MiseAJour evolutif>` et la mention « état au [date] » pour le calendrier.
- Le règlement amendé (omnibus) doit être vérifié dans le Journal officiel : numéro du règlement modificatif et dates.

#### 3.6 La recommandation de l'UNESCO sur l'éthique de l'IA (novembre 2021)

- La page de l'UNESCO dit : « In November 2021, UNESCO's 193 Member States adopted » la Recommandation, présentée comme « the first global standard on AI ethics » [lu via WebFetch ; curl rejeté].
- Communiqué du 25 novembre 2021 : Audrey Azoulay présente « the first ever global standard on the ethics of artificial intelligence adopted by the member states of UNESCO at the General Conference » [lu].

**Sources** : https://www.unesco.org/en/artificial-intelligence/recommendation-ethics [lu] ; https://www.unesco.org/en/articles/unesco-member-states-adopt-first-ever-global-agreement-ethics-artificial-intelligence (communiqué, en) [lu]. Le texte officiel sur UNESDOC est bloqué (erreur 403).

**Point d'attention** : la date exacte d'adoption (souvent donnée comme le 23 novembre 2021, lors de la 41e Conférence générale) n'a pas été vérifiée. Écrivez « novembre 2021 ». Il s'agit d'une **recommandation**, non contraignante, à distinguer d'un traité.

---

### 4. Événements de frise proposés

Format : année | titre | texte | région | thème | personnes | pionnière | source principale.

#### Sujet 1 : femmes de l'histoire de l'IA

1. **1956-1961 | Des réseaux de sens pour traduire**
   - Texte : À Cambridge, la Cambridge Language Research Unit de Margaret Masterman cherche à traduire par le sens plutôt que mot à mot. R. H. Richens (1956) puis Masterman (1961) y décrivent des « réseaux sémantiques », ancêtres des représentations de connaissances.
   - Région : europe | Thème : idees | Personnes : Margaret Masterman, Richard H. Richens | Pionnière : oui
   - Source : Masterman, « Semantic message detection for machine translation, using an interlingua » (1961), https://aclanthology.org/www.mt-archive.info/50/NPL-1961-Masterman.pdf
2. **1972 | Peser les mots rares**
   - Texte : Karen Spärck Jones propose de donner plus de poids aux mots rares d'une collection : c'est la pondération IDF. Cette idée simple est devenue un standard, utilisé notamment par les moteurs de recherche du Web.
   - Région : europe | Thème : apprentissage | Personnes : Karen Spärck Jones | Pionnière : oui
   - Source : nécrologie de K. Spärck Jones, Cambridge, https://www.cl.cam.ac.uk/misc/obituaries/sparck-jones/
3. **1985 | Une mission IA chez Bull**
   - Texte : L'ingénieure Alice Recoque, qui avait mené le mini-ordinateur Mitra 15, lance la mission « intelligence artificielle » du groupe français Bull. Un centre de recherche dédié, le CEDIAG, en naît.
   - Région : europe | Thème : machines | Personnes : Alice Recoque | Pionnière : oui
   - Source : « Hommage à Alice Recoque », *1024* n° 17 (2021), https://1024.societe-informatique-de-france.fr/1024/2021/04/1024_17_2021_119.pdf
4. **1987 | L'action est située**
   - Texte : L'anthropologue Lucy Suchman observe des personnes face à une photocopieuse « intelligente » chez Xerox. Elle montre qu'on n'agit pas en exécutant un plan, mais en s'ajustant à la situation, ce qui critique l'IA planificatrice.
   - Région : amerique-nord | Thème : societe | Personnes : Lucy Suchman | Pionnière : oui
   - Source : Suchman, *Plans and Situated Actions*, CUP 1987, recension https://doi.org/10.3406/intel.1989.1374 [méta]
5. **2000 | Kismet, un robot sociable**
   - Texte : Au MIT, Cynthia Breazeal soutient sa thèse sur Kismet, un robot à visage expressif conçu pour des échanges sociaux avec des humains. Il simule des émotions pour réguler l'interaction, sans les ressentir.
   - Région : amerique-nord | Thème : machines | Personnes : Cynthia Breazeal | Pionnière : oui
   - Source : page du projet Kismet, MIT AI Lab, http://www.ai.mit.edu/projects/sociable/kismet.html
6. **2009 | ImageNet**
   - Texte : L'équipe de Fei-Fei Li publie ImageNet, une base de millions d'images classées selon les mots de WordNet. L'étiquetage a été confié à des travailleur·ses du clic. Cette base rendra possible l'essor de l'apprentissage profond.
   - Région : amerique-nord | Thème : apprentissage | Personnes : Fei-Fei Li, Jia Deng, Kai Li | Pionnière : oui
   - Source : Computer History Museum, « CHM Releases AlexNet Source Code », https://computerhistory.org/blog/chm-releases-alexnet-source-code/

#### Sujet 1 bis : critique et éthique

7. **2018 | Gender Shades**
   - Texte : Joy Buolamwini et Timnit Gebru testent trois logiciels commerciaux qui devinent le genre d'un visage. Erreur maximale : 0,8 % pour les hommes à peau claire, jusqu'à 34,7 % pour les femmes à peau foncée.
   - Région : amerique-nord | Thème : societe | Personnes : Joy Buolamwini, Timnit Gebru | Pionnière : oui
   - Source : Buolamwini et Gebru, « Gender Shades », PMLR 81, https://proceedings.mlr.press/v81/buolamwini18a.html
8. **2020-2021 | « Perroquets stochastiques »**
   - Texte : Un article d'Emily Bender, Timnit Gebru et leurs coautrices alerte sur les coûts et les risques des très grands modèles de langue. Le conflit autour de sa publication aboutit au départ de Gebru de Google en décembre 2020 : licenciement selon elle, démission selon Google.
   - Région : amerique-nord | Thème : societe | Personnes : Timnit Gebru, Emily M. Bender | Pionnière : oui
   - Source : MIT Technology Review, 4 déc. 2020, https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/

#### Sujet 2 : mythes et origines

1. **1769-1770 | Le Turc mécanique**
   - Texte : Wolfgang von Kempelen présente à la cour de Vienne un automate joueur d'échecs. Un joueur humain caché dans le meuble jouait à sa place : l'illusion d'une machine pensante reposait sur un travail invisible.
   - Région : europe | Thème : machines | Personnes : Wolfgang von Kempelen | Pionnière : non
   - Source : Heinz Nixdorf MuseumsForum, https://www.hnf.de/en/permanent-exhibition/exhibition-areas/the-mechanization-of-information-technology/early-automatons-miracles-of-technology/the-chess-turk-has-been-brought-back-to-life.html
2. **1943 | Le neurone formel**
   - Texte : Warren McCulloch et Walter Pitts décrivent le neurone comme une petite unité logique qui s'active au-delà d'un seuil. Ce modèle très simplifié inspire les réseaux de neurones artificiels.
   - Région : amerique-nord | Thème : idees | Personnes : Warren McCulloch, Walter Pitts | Pionnière : non
   - Source : « A logical calculus of the ideas immanent in nervous activity », DOI 10.1007/BF02478259 [méta]
3. **1955 | Le mot « intelligence artificielle »**
   - Texte : Le 31 août 1955, quatre chercheurs proposent une étude d'été sur « l'intelligence artificielle » à Dartmouth. L'atelier de 1956 donne un nom au domaine, mais les idées existaient déjà (Turing, cybernétique).
   - Région : amerique-nord | Thème : idees | Personnes : John McCarthy, Marvin Minsky, Nathaniel Rochester, Claude Shannon | Pionnière : non
   - Source : « A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence », http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf
4. **1958 | Le perceptron et l'emballement**
   - Texte : Frank Rosenblatt présente le perceptron, une machine qui apprend à classer des cartes perforées. La presse annonce une machine capable de lire et de devenir « plus sage » : la démonstration réelle était bien plus modeste.
   - Région : amerique-nord | Thème : apprentissage | Personnes : Frank Rosenblatt | Pionnière : non
   - Source : Cornell Chronicle, 25 sept. 2019, https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon
5. **1966 | ELIZA, et son auteur inquiet**
   - Texte : Joseph Weizenbaum crée ELIZA, un programme qui imite un psychothérapeute en reformulant les phrases. Choqué de voir des utilisateur·rices s'y confier, il devient en 1976 l'un des premiers critiques de l'IA.
   - Région : amerique-nord | Thème : societe | Personnes : Joseph Weizenbaum | Pionnière : non
   - Source : MIT News, 10 mars 2008, https://news.mit.edu/2008/obit-weizenbaum-0310
6. **1973 | Le rapport Lighthill**
   - Texte : Commandé par le Science Research Council, le rapport de James Lighthill juge décevants les résultats de l'IA et pointe « l'explosion combinatoire ». Au Royaume-Uni, la confiance et les financements reculent pour près de dix ans.
   - Région : europe | Thème : societe | Personnes : James Lighthill | Pionnière : non
   - Source : « Artificial Intelligence: A General Survey », http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm
7. **1970-1986 | La rétropropagation, plusieurs fois inventée**
   - Texte : La méthode qui permet d'entraîner les réseaux de neurones a été trouvée plusieurs fois : Linnainmaa (1970), Werbos (1974-1982), puis Rumelhart, Hinton et Williams, qui la popularisent en 1986. La priorité reste débattue.
   - Région : monde | Thème : apprentissage | Personnes : Seppo Linnainmaa, Paul Werbos, David Rumelhart, Geoffrey Hinton, Ronald Williams | Pionnière : non
   - Source : A. Griewank, « Who Invented the Reverse Mode of Differentiation? » (2012), https://www.maths.tcd.ie/EMIS/journals/DMJDMV/vol-ismp/52_griewank-andreas-b.pdf

Un événement possible sur *Perceptrons* (1969) est à présenter comme un débat, par exemple dans un encart plutôt que dans la frise.

#### Sujet 3 : période récente

1. **2012 | AlexNet**
   - Texte : Un réseau de neurones profond entraîné sur deux cartes graphiques remporte le concours ImageNet avec 15,3 % d'erreur, contre 26,2 % pour le suivant. Ce succès lance la vague actuelle de l'apprentissage profond.
   - Région : amerique-nord | Thème : apprentissage | Personnes : Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton | Pionnière : non
   - Source : article NeurIPS 2012, https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf
2. **2017 | Le Transformer**
   - Texte : Huit chercheur·ses de Google proposent le Transformer, une architecture fondée uniquement sur le mécanisme d'« attention ». Elle devient la base des grands modèles de langue.
   - Région : amerique-nord | Thème : apprentissage | Personnes : Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin | Pionnière : oui (Niki Parmar)
   - Source : « Attention Is All You Need », https://arxiv.org/abs/1706.03762
3. **2021 | Une recommandation mondiale**
   - Texte : En novembre 2021, les 193 États membres de l'UNESCO adoptent une recommandation sur l'éthique de l'IA, premier cadre normatif mondial sur le sujet. Ce texte n'est pas contraignant.
   - Région : monde | Thème : societe | Personnes : (aucune) | Pionnière : non
   - Source : UNESCO, communiqué du 25 nov. 2021, https://www.unesco.org/en/articles/unesco-member-states-adopt-first-ever-global-agreement-ethics-artificial-intelligence
4. **2022 | ChatGPT**
   - Texte : Le 30 novembre 2022, OpenAI ouvre au public ChatGPT, un agent conversationnel fondé sur un grand modèle de langue. Son succès rapide déclenche une course entre grandes entreprises.
   - Région : amerique-nord | Thème : machines | Personnes : (entreprise OpenAI) | Pionnière : non
   - Source : Centre for Computing History, https://computinghistory.org.uk/det/71180/OpenAI%20launches%20ChatGPT
5. **2023 | Les petites mains de l'IA**
   - Texte : Une enquête de TIME révèle que des annotateur·rices employé·es au Kenya par Sama, pour OpenAI, étiquetaient des textes violents pour moins de 2 dollars de l'heure. Sama conteste certains chiffres, et des travailleur·ses saisissent le Parlement kényan.
   - Région : afrique | Thème : societe | Personnes : (anonymes) | Pionnière : non
   - Source : TIME, 18 janv. 2023, https://time.com/6247678/openai-chatgpt-kenya-workers/
6. **2024 | Le règlement européen sur l'IA**
   - Texte : Le règlement (UE) 2024/1689 entre en vigueur le 1er août 2024. Il classe les systèmes d'IA selon leur niveau de risque. Son application est progressive, et son calendrier a été révisé en 2026 (état au 17 août 2026).
   - Région : europe | Thème : societe | Personnes : (aucune) | Pionnière : non
   - Source : CNIL, https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil

---

### 5. Ce qui reste non vérifié

- Date de fondation de la CLRU (1953, 1954, 1955 ou « fin des années 1950 »).
- Dates exactes de l'atelier de Dartmouth (été 1956).
- *Cybernetics* de Wiener (1948).
- Date de début du projet Kismet.
- Date de fondation de Coursera (2012) et de l'Algorithmic Justice League.
- Ouvrages de Boden.
- Date exacte d'adoption de la recommandation de l'UNESCO.
- Billet « Introducing ChatGPT » d'OpenAI et seconde source de presse sur la date du 30 novembre 2022.
- Origine Amazon de l'expression « artificial artificial intelligence » et lancement de Mechanical Turk en 2005.
- Identité derrière le pseudonyme « Shmargaret Shmitchell ».
- Lettre de soutien à Gebru et excuses de Sundar Pichai.
- Numéro et contenu du règlement modificatif « omnibus » de l'AI Act (2026).
- Statut de Mary Kenneth Keller (première ou ex æquo).
- Contributions de Hélène Bestougeff : aucune source.

### 6. Liens bloqués à demander

| URL | Ce qu'on espère y trouver |
|---|---|
| https://www.nytimes.com/1958/07/08/archives/new-navy-device-learns-by-doing-psychologist-shows-embryo-of.html | Article d'origine du NYT (8 juillet 1958) sur le perceptron : titre exact et citations |
| https://openai.com/index/chatgpt/ | Billet « Introducing ChatGPT » : date du 30/11/2022, « research preview », RLHF |
| https://help.openai.com/en/articles/6825453-chatgpt-release-notes | Notes de version, première entrée |
| https://eur-lex.europa.eu/eli/reg/2024/1689/oj | Texte officiel de l'AI Act : titre complet, date d'adoption (13 juin 2024 ?), article 113 sur l'entrée en vigueur et l'application |
| https://unesdoc.unesco.org/ark:/48223/pf0000381137 | Texte de la Recommandation de l'UNESCO et date d'adoption exacte |
| https://mitpress.mit.edu/9780262631112/perceptrons/ | Notice de *Perceptrons* (1969, édition augmentée de 1988) |
| https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf | Article ImageNet de 2009 : taille de la base, rôle de Mechanical Turk |
| https://mitmuseum.mit.edu/collections/exhibition/4 | Datation de Kismet au MIT Museum (la mention « 1993 » est douteuse) |
| https://cacm.acm.org/?p=49031 | Article CACM sur les premiers doctorats en informatique (Keller et Tang) |
| https://www.acm.org/articles/people-of-acm/2014/june-19-2014 | Entretien avec D. Koller : dates de Coursera |
| https://ai.stanford.edu/users/koller/ | Page personnelle de Koller (connexion réinitialisée) |
| https://www.lancaster.ac.uk/sociology/about/people/lucy-suchman | Biographie de Suchman (Xerox PARC 1979-1999 ?) — erreur 404, chercher la nouvelle URL |
| https://googlewalkout.medium.com/standing-with-dr-timnit-gebru-isupporttimnit-believeblackwomen-6dadc300d382 | Lettre de soutien à Gebru et nombre de signataires |
| https://www.discovermagazine.com/the-mechanical-turk-how-a-chess-playing-hoax-inspired-real-computers-40766 | Lien entre le Turc et Amazon Mechanical Turk |
| https://www.futura-sciences.com/tech/actualites/intelligence-artificielle-ils-ont-invente-intelligence-artificielle-alice-recoque-pionniere-francaise-histoire-oubliee-130574/ | Seconde source sur Alice Recoque (non tentée, à ouvrir) |
| https://doi.org/10.3406/intel.1989.1374 (Persée) | Recension en français de Suchman 1987 (non tentée, probablement en accès libre) |
