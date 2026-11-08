# Sources — Module « Les IA qui voient »

Dossier de sources du module `/modules/ia-voir/`, établi selon la
[charte des sources](../SOURCES.md). Fukushima et LeCun sont aussi sourcés
dans [`ia.md`](ia.md) ; ImageNet et Gender Shades dans
[`apprendre.md`](apprendre.md).

- **Recherche effectuée le** : 16 octobre 2026.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué. Accès bloqués pendant la recherche : Légifrance,
  EUR-Lex (articles de l'AI Act lus sur une copie du Journal officiel, à
  relire sur EUR-Lex), fda.gov, PDF de DSpace MIT, web.archive.org, ACM DL,
  PMC.
- Aucune page Wikipédia n'est utilisée comme source.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution/association

---

## 1. L'image numérique : Kirsch, le SEAC, le pixel

### Formulation sûre
En 1957, au National Bureau of Standards (NBS, aujourd'hui NIST) à Washington, Russell Kirsch et ses collègues
ont fabriqué un scanner à tambour relié à l'ordinateur SEAC. La première image qu'ils y ont fait entrer était une
photo de son fils bébé : 176 × 176 pixels, chaque pixel étant **soit noir soit blanc**. Aujourd'hui, une image en
couleur est une grille de pixels, chacun décrit par trois nombres (rouge, vert, bleu) qui vont en général de 0 à 255.

### Faits clés
- NIST : « The first digital image made on a computer in 1957 showed researcher Russell Kirsch's baby son » ;
  « only measured 176 pixels on a side » ; image de « 5 centimeters by 5 centimeters » [1].
- NIST : Kirsch a demandé « What would happen if computers could look at pictures? » ; l'équipe « created a rotating
  drum scanner and programming that allowed images to be fed into it » [1][2].
- Kirsch lui-même (2010) : « 176 × 176 = 30976 such pixels » ; « The scanner I used divided the scanned image into
  square pixels. Each pixel had only two possible colors: black or white. » Il regrette d'avoir lancé la tradition
  du pixel carré, en évoquant les mosaïstes de Ravenne [3].
- Kirsch : « I introduced the first computer scanned image at the National Bureau of Standards in 1957 » [3].
- RVB 0-255 : la spécification CSS du W3C donne l'exemple `rgb(0 255 0)` commenté « RGB range 0-255 » [4].

### Sources
1. NIST, « Fiftieth Anniversary of First Digital Image Marked », 24 mai 2007 (mise à jour 3 février 2025).
   https://www.nist.gov/news-events/news/2007/05/fiftieth-anniversary-first-digital-image-marked — S/P (institution
   concernée), anglais, **lu**.
2. NIST, « First Digital Image » (page de 2022, mise à jour 2024). https://www.nist.gov/mathematics-statistics/first-digital-image
   — S, anglais, **lu**.
3. Russell A. Kirsch, « Precision and Accuracy in Scientific Imaging », *J. Res. NIST* 115(3), 2010, p. 195-199.
   https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=905116 — P (témoignage de l'auteur), anglais, **lu partiellement** (introduction).
4. W3C, *CSS Color Module Level 4*. https://www.w3.org/TR/css-color-4/ — P (norme), anglais, **lu partiellement** (exemple cité).

### Points d'attention
- « Première image numérique » : les deux sources sont le NIST et Kirsch, donc **pas indépendantes**. Formuler
  « l'une des toutes premières images numérisées par ordinateur, souvent présentée comme la première ».
- Le NIST écrit que le SEAC était « the nation's first programmable computer ». C'est discutable (« premier X »),
  à ne pas reprendre.
- L'image de 1957 n'avait **pas** 256 niveaux : 1 bit par pixel (noir ou blanc), selon Kirsch.
- La page NIST cite le prénom du bébé et des détails sur la famille (métier, lieu de résidence) : **ne pas les reprendre**
  (vie privée). Dire « son fils, alors âgé de trois mois ».
- 0-255 = 8 bits par canal : convention répandue, pas une loi (il existe des images en 10, 12 ou 16 bits).

---

## 2. Hubel et Wiesel : les neurones des bords orientés

### Formulation sûre
À la fin des années 1950, David Hubel et Torsten Wiesel ont enregistré l'activité de neurones du cortex visuel
du chat. Ils ont découvert que certains neurones réagissent surtout à une ligne ou à un bord **orienté dans un
sens précis**. Ces travaux leur ont valu le prix Nobel de médecine en 1981. L'idée de cellules « simples » puis
« complexes », organisées en étages, a inspiré les réseaux convolutifs.

### Faits clés
- Nobel 1981 : une moitié à Roger Sperry, l'autre « jointly to David H. Hubel and Torsten N. Wiesel "for their
  discoveries concerning information processing in the visual system" » [1].
- Communiqué Nobel : le message de la rétine « undergoes a step-wise analysis in a system of nerve cells stored in
  columns. In this system each cell has its specific function » [2].
- Découverte par hasard (conférence Nobel de Hubel) : en glissant une lame de verre, « its edge was casting onto
  the retina a faint but sharp shadow, a straight dark line on a light background. That was what the cell wanted,
  and it wanted it, moreover, in just one narrow range of orientations. » [3]
- Hubel : le stimulus optimal d'une cellule simple est « a slit, dark bar or edge » ; une cellule complexe reçoit
  les entrées de « many simple cells, all of whose receptive fields have the same orientation but differ slightly in
  position » [3].
- Articles : « Receptive fields of single neurones in the cat's striate cortex », *J. Physiol.* 148, 574-591 (1959) ;
  « Receptive fields, binocular interaction and functional architecture in the cat's visual cortex », *J. Physiol.*
  160, 106-154 (1962) [4].
- Lien avec les CNN : LeCun et al. 1998 écrivent que la combinaison convolution/sous-échantillonnage, « inspired by
  Hubel and Wiesel's notions of "simple" and "complex" cells, was implemented in Fukushima's Neocognitron » [5, §5].
  Fukushima (1980) : le réseau a « a structure similar to the hierarchy model of the visual nervous system proposed by
  Hubel and Wiesel » [5, §5].

### Sources
1. Fondation Nobel, « The Nobel Prize in Physiology or Medicine 1981 » (résumé). https://www.nobelprize.org/prizes/medicine/1981/summary/ — P, anglais, **lu**.
2. Assemblée Nobel (Institut Karolinska), communiqué de presse 1981. https://www.nobelprize.org/prizes/medicine/1981/press-release/ — P, anglais, **lu partiellement**.
3. David H. Hubel, « Evolution of ideas on the primary visual cortex, 1955-1978: a biased historical account »,
   conférence Nobel, 8 décembre 1981. https://www.nobelprize.org/uploads/2018/06/hubel-lecture.pdf — P, anglais, **lu partiellement**.
4. Europe PMC, notices des deux articles (DOI 10.1113/jphysiol.1959.sp006308 et 10.1113/jphysiol.1962.sp006837).
   https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=AUTH:%22Hubel%20DH%22%20AND%20AUTH:%22Wiesel%20TN%22 — P, anglais, **métadonnées seulement** (PMC bloqué par reCAPTCHA).

### Points d'attention
- Expériences sur des animaux (chats, puis singes) : les mentionner sobrement.
- Ne pas dire « les CNN copient le cerveau » : l'inspiration est revendiquée par les auteurs, mais l'analogie est
  lointaine. Dire « s'en inspirent ».

---

## 3. Le « Summer Vision Project » (MIT, 1966) et Larry Roberts

### Formulation sûre
En juillet 1966, Seymour Papert a rédigé au MIT une note (AI Memo 100) qui proposait aux étudiant·es d'été de
construire « une partie significative » d'un système visuel : séparer la figure du fond, décrire les régions, puis
nommer des objets. On raconte souvent que le MIT pensait « résoudre la vision en un été ». Le texte est plus modeste
que la légende, même si le problème s'est révélé bien plus dur qu'imaginé. Trois ans plus tôt, la thèse de Larry
Roberts (MIT, 1963) portait sur la perception de solides en 3D par une machine.

### Faits clés
- Notice DSpace : titre « The Summer Vision Project », auteur « Papert, Seymour A. », date « 1966-07-01 » [1].
- Texte d'ouverture du mémo (reproduit dans la notice) : « The summer vision project is an attempt to use our
  summer workers effectively in the construction of a significant part of a visual system. » Objectifs : « FIGURE-GROUND
  analysis », « REGION DESCRIPTION », et « The final goal is OBJECT IDENTIFICATION which will actually name objects by
  matching them with a vocabulary of known objects. » Coordination : « Sussman is coordinator » [1].
- Le mémo parle de construire un système « complex enough to be real landmark in the development of "pattern
  recognition" » : il ne dit **pas** « résoudre la vision » [1].
- Roberts : « Machine perception of three-dimensional solids », thèse, MIT, 1963 [2].

### Sources
1. Seymour A. Papert, « The Summer Vision Project », AI Memo 100, MIT, juillet 1966. Notice : https://dspace.mit.edu/handle/1721.1/6125
   — P, anglais, **lu partiellement** (texte d'ouverture reproduit dans la notice ; le PDF a renvoyé 429 à chaque essai).
2. Lawrence G. Roberts, « Machine perception of three-dimensional solids », thèse, MIT, 1963. https://dspace.mit.edu/handle/1721.1/11589
   — P, anglais, **métadonnées seulement**.

### Points d'attention
- Le « mythe » circule sous la forme « Minsky a demandé à un étudiant de brancher une caméra et de faire décrire ce
  qu'elle voit, en un été ». Cette anecdote n'a **pas** été vérifiée ici (voir lot final). Présenter le mémo comme
  une source qui nuance la légende.
- Pour la page, relire le PDF complet du mémo quand DSpace ne bloque plus (calendrier juillet-août, sous-tâches).

---

## 4. Reconnaissance faciale des années 1960 (Bledsoe, Chan Wolf, Bisson)

### Formulation sûre
Au début des années 1960, à Palo Alto, la petite société Panoramic Research de Woody Bledsoe a travaillé sur la
reconnaissance de visages par ordinateur. La méthode était « homme-machine » : des opérateur·rices relevaient à la
main des points du visage (coins des yeux, nez…), et l'ordinateur comparait ces mesures. Helen Chan (plus tard
Helen Chan Wolf) faisait partie de l'équipe. Les financeurs semblent avoir été des sociétés écrans de la CIA,
selon une enquête de presse fondée sur les archives de Bledsoe.

### Faits clés
- Rapport de Bledsoe du 6 mars 1964, « Facial Recognition Project Report », remis au « King-Hurley Research Group » :
  « picture recognition by machine for a large sample of people is beyond the state of the art of the present pattern
  recognition and computer technology at this time » (texte issu d'une reconnaissance optique, citation à relire sur
  le scan) [1].
- Wired (2020) : Panoramic Research fondée en 1960 à Palo Alto ; Helen Chan Wolf, « a pioneer in robot programming
  who started at Panoramic a couple of years out of college » ; avec une tablette RAND, des étudiants saisissent les
  données de « some 2,000 images » à « about 40 an hour » [2].
- Wired : les financeurs « seem to have been front companies for the CIA » (déduction du journaliste à partir
  d'archives et d'un témoignage) [2].
- Wired, sur une étude ultérieure (avec Peter Hart, SRI) : base de « 400 adult male caucasians » ; « I did not see
  images of women or people of color » dans ces études [2]. Le biais de données est donc présent dès l'origine.
- Helen (Chan) Wolf figure dans l'équipe du robot Shakey du SRI (photo de groupe, Computer History Museum) [3].

### Sources
1. W. W. Bledsoe, *Facial Recognition Project Report*, Panoramic Research, 6 mars 1964, numérisé sur Internet Archive.
   https://archive.org/details/firstfacialrecognitionresearch (texte OCR : https://archive.org/download/firstfacialrecognitionresearch/SecondReport_djvu.txt)
   — P, anglais, **lu partiellement** (OCR imparfaite).
2. Shaun Raviv, « The Secret History of Facial Recognition », *Wired*, 21 janvier 2020.
   https://www.wired.com/story/secret-history-facial-recognition/ — Pr (enquête), anglais, **lu partiellement**.
3. Computer History Museum, *Revolution*, « Shakey team ». https://www.computerhistory.org/revolution/artificial-intelligence-robotics/13/289
   — S, anglais, **lu partiellement**.

### Points d'attention
- **Charles Bisson** : son rôle n'apparaît que dans des textes dérivés de Wikipédia. Aucune source sérieuse lue ici.
  Ne pas le nommer, ou le nommer avec prudence après vérification.
- La piste CIA repose sur une seule enquête (Wired) : écrire « selon une enquête du magazine Wired ».
- La notice Internet Archive dit « the first known attempt » : c'est une affirmation de la personne qui a déposé
  le document, pas une source. Éviter « première reconnaissance faciale ».
- L'article Wired contient des détails sur la vie privée et la fin de vie de Bledsoe : ne pas les reprendre.

---

## 5. Réseaux convolutifs : Fukushima, LeCun, MNIST

### Formulation sûre
En 1980, Kunihiko Fukushima publie le « néocognitron », un réseau en couches inspiré de Hubel et Wiesel. En 1989,
Yann LeCun et ses collègues des Bell Labs (AT&T) entraînent par rétropropagation un réseau convolutif qui lit des
chiffres manuscrits de codes postaux américains. En 1998, l'article sur LeNet-5 décrit un système de lecture de
chèques utilisé par des banques aux États-Unis, et présente la base MNIST : 70 000 chiffres écrits à la main par
des employé·es du Bureau du recensement et par des lycéen·nes.

### Faits clés
- Fukushima, « Neocognitron… », *Biological Cybernetics* 36, 193-202, avril 1980 ; réseau « self-organized by
  "learning without a teacher" » [1].
- LeCun et al. 1989 (Neural Computation 1(4), 541-551) : « handwritten zip code digits provided by the U.S. Postal
  Service » ; « 9298 segmented numerals digitized from handwritten zip codes that appeared on U.S. mail passing through
  the Buffalo, NY post office » ; « 7291 examples are used for training the network and 2007 are used for testing » ;
  images normalisées en « 16 by 16 » pixels [2].
- LeCun, Bottou, Bengio, Haffner, « Gradient-Based Learning Applied to Document Recognition », *Proc. IEEE*, novembre
  1998 : LeNet-5 « is in commercial use in the NCR Corporation line of check recognition systems for the banking
  industry. It is reading millions of checks per month in several banks across the United States. » [3]
- MNIST [3] : construite à partir de « NIST's Special Database 3 and Special Database 1 » ; « SD-3 was collected among
  Census Bureau employees, while SD-1 was collected among high-school students » ; SD-1 = « 58,527 digit images
  written by 500 different writers » ; 60 000 images d'entraînement, 10 000 de test ; images en « 28x28 ».
- Erreur de LeNet-5 sur MNIST : « 0.95% », « 0.8% » avec données déformées artificiellement [3].
- La fiche Hugging Face du jeu de données nomme « Yann LeCun, Corinna Cortes, and CJ Burges » [4].

### Sources
1. K. Fukushima, « Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition
   unaffected by shift in position », *Biol. Cybernetics* 36, 1980. https://link.springer.com/article/10.1007/BF00344251
   — P, anglais, **lu partiellement** (résumé).
2. Y. LeCun, B. Boser, J. S. Denker, D. Henderson, R. E. Howard, W. Hubbard, L. D. Jackel, « Backpropagation Applied to
   Handwritten Zip Code Recognition », *Neural Computation* 1(4), 1989. http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf
   — P, anglais, **lu partiellement** (pages 1-2, scan). Métadonnées Crossref : https://api.crossref.org/works/10.1162/neco.1989.1.4.541.
3. Y. LeCun, L. Bottou, Y. Bengio, P. Haffner, « Gradient-Based Learning Applied to Document Recognition », *Proc. IEEE*
   86(11), 1998 (copie hébergée par Stanford). http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf — P, anglais, **lu partiellement**.
4. Hugging Face, fiche « ylecun/mnist ». https://huggingface.co/datasets/ylecun/mnist/raw/main/README.md — S, anglais, **lu**.

### Points d'attention
- **Contradiction interne de l'article de 1998** : l'introduction dit « millions of checks per **month** », la
  section X dit « reading millions of checks per **day** since then » (déployé « since June 1996 »). Écrire
  « des millions de chèques » sans préciser la période.
- **Licence de MNIST : non établie.** La page d'origine (yann.lecun.com/exdb/mnist/) n'affiche plus qu'un répertoire
  vide (« Index of /exdb/mnist », vérifié aujourd'hui) ; l'archive n'a pas pu être ouverte. La fiche Hugging Face indique
  « MIT Licence », d'autres reprises parlent de CC BY-SA 3.0 (non vérifié). Ne rien affirmer ; dire que la base est
  dérivée de bases du NIST (agence fédérale américaine) et librement diffusée depuis 1998.
- « Moitié recensement, moitié lycéen·nes » : c'est approximatif (le découpage passe par les scripteur·rices de SD-1).
  Dire « des employé·es du Bureau du recensement et des lycéen·nes ».
- Le rôle de Corinna Cortes dans la **construction** de MNIST n'est pas décrit dans l'article de 1998 (elle n'en est
  pas co-autrice) ; il ressort de la citation officielle du jeu de données. Rester à « co-autrice de la base MNIST ».

---

## 6. ImageNet, AlexNet et ce que « voit » la première couche

### Formulation sûre
ImageNet a été construit en faisant trier des millions d'images du web par des travailleur·ses rémunéré·es à la
tâche sur la plateforme Amazon Mechanical Turk. AlexNet (2012) a été entraîné sur environ 1,2 million d'images de la
compétition ILSVRC. Les filtres de sa première couche ressemblent à des détecteurs de bords orientés, de fréquences
et de taches de couleur ; les couches plus profondes réagissent à des formes plus complexes (textures, museaux de
chien, objets entiers).

### Faits clés
- Deng et al. 2009 : « 12 subtrees with 5247 synsets and 3.2 million images » ; « This is achieved by using the service
  of Amazon Mechanical Turk (AMT), an online platform on which one can put up tasks for users to complete and to get
  paid » ; objectif de « around 50 million images in the next two years » [1].
- Krizhevsky, Sutskever, Hinton 2012 : ImageNet « over 15 million labeled high-resolution images belonging to roughly
  22,000 categories… labeled by human labelers using Amazon's Mechanical Turk » ; ILSVRC : « roughly 1.2 million training
  images, 50,000 validation images, and 150,000 testing images » [2].
- Première couche d'AlexNet : « a variety of frequency- and orientation-selective kernels, as well as various colored
  blobs » [2].
- Zeiler et Fergus : « Layer 2 responds to corners and other edge/color conjunctions. Layer 3 … similar textures … Layer 4
  … dog faces … bird's legs. Layer 5 shows entire objects » ; les filtres de première couche d'AlexNet sont « a mix of
  extremely high and low frequency information, with little coverage of the mid frequencies », d'où leur passage de
  filtres 11×11 à 7×7 [3].

### Sources
1. J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li, Li Fei-Fei, « ImageNet: A Large-Scale Hierarchical Image Database », CVPR 2009.
   https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf — P, anglais, **lu partiellement**.
2. A. Krizhevsky, I. Sutskever, G. Hinton, « ImageNet Classification with Deep Convolutional Neural Networks », NIPS 2012.
   https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf — P, anglais, **lu partiellement**.
3. M. D. Zeiler, R. Fergus, « Visualizing and Understanding Convolutional Networks », arXiv:1311.2901 (v3, nov. 2013 ;
   publié à ECCV 2014). https://arxiv.org/pdf/1311.2901 — P, anglais, **lu partiellement**.
4. ImageNet, page « About ». https://www.image-net.org/about.php — S, anglais, **lu partiellement**.

### Points d'attention
- Nombre d'images : distinguer ImageNet complet (« plus de 15 millions », 2012) et le sous-ensemble ILSVRC
  (≈ 1,2 million d'images d'entraînement, 1 000 catégories).
- Le nombre de travailleur·ses de Mechanical Turk (souvent « près de 50 000 dans 167 pays ») n'a **pas** été lu dans
  une source primaire ici.
- Zeiler et Fergus ne décrivent pas eux-mêmes la couche 1 comme « des bords » ; c'est AlexNet qui parle de noyaux
  sélectifs à l'orientation. Citer chacun pour ce qu'il dit.

---

## 7. Imagerie médicale : IDx-DR (FDA, 2018)

### Formulation sûre
En 2018, l'agence américaine du médicament (FDA) a autorisé IDx-DR, un logiciel qui analyse des photos du fond de
l'œil pour repérer une rétinopathie diabétique « plus que légère ». Il est destiné aux médecins généralistes, pour des
adultes diabétiques sans diagnostic antérieur. Dans l'essai, il repérait environ 87 % des malades et écartait
environ 90 % des personnes saines. Il ne détecte que cette maladie et ne remplace pas un suivi ophtalmologique.

### Faits clés
- Dossier FDA (De Novo DEN180001) : « IDx-DR is indicated for use by health care providers to automatically detect
  more than mild diabetic retinopathy (mtmDR) in adults diagnosed with diabetes who have not been previously diagnosed
  with diabetic retinopathy » ; appareil photo : « Topcon NW400 » ; classe II, prescription seulement [1].
- Avertissement : « IDx-DR is only designed to detect diabetic retinopathy. IDx-DR is not intended to detect concomitant
  diseases » [1].
- Essai : « 900 participants were enrolled at 10 sites » ; « observed sensitivity was at 87.4% » ; « observed
  specificity was 89.5% » ; 819 participants analysables ; valeur prédictive positive « 72.7% (173/238) » [1].
- Article de l'essai : sensibilité 87,2 %, spécificité 90,7 % (valeurs corrigées) ; 28,6 % de participant·es
  afro-américain·es ; « the first FDA authorized autonomous AI diagnostic system in any field of medicine » (affirmation
  des auteurs) [2].

### Sources
1. FDA, « De Novo Classification Request for IDx-DR » (DEN180001), résumé de décision.
   https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN180001.pdf — P, anglais, **lu partiellement**.
2. M. D. Abràmoff et al., « Pivotal trial of an autonomous AI-based diagnostic system for detection of diabetic
   retinopathy in primary care offices », *npj Digital Medicine*, 2018. https://www.nature.com/articles/s41746-018-0040-6
   — P/R, anglais, **résumé seulement**.

### Points d'attention
- La date du **11 avril 2018** vient du communiqué FDA, que je n'ai pas pu ouvrir (404 sur fda.gov, 403 sur le miroir) :
  connue par résumé de moteur de recherche seulement. Le dossier De Novo indique « DATE OF DE NOVO: January 12, 2018 »
  (date de dépôt). Écrire « en 2018 » ou revérifier.
- Le premier auteur de l'essai, M. Abràmoff, est le fondateur de la société IDx : conflit d'intérêts à signaler.
- « Premier dispositif autonome » : affirmation de la FDA (communiqué non lu) et des auteurs ; à formuler « présenté
  comme le premier ».
- Les deux jeux de chiffres (87,4/89,5 observés ; 87,2/90,7 corrigés) sont tous deux exacts : en choisir un et le dire.
- Une valeur prédictive positive de 72,7 % signifie qu'environ un résultat positif sur quatre est un faux positif :
  utile pour expliquer, sans alarmer.

---

## 8. Reconnaissance faciale et biais

### Formulation sûre
En 2018, Joy Buolamwini et Timnit Gebru ont testé trois services commerciaux qui devinaient le genre d'une personne
d'après sa photo. Les erreurs étaient presque nulles pour les hommes à peau claire et atteignaient 21 à 35 % pour les
femmes à peau foncée. Un an plus tard, les trois entreprises avaient réduit l'écart. En 2019, le NIST a mesuré sur
189 algorithmes que les faux positifs varient souvent d'un facteur 10 à plus de 100 selon les groupes de population.

### Gender Shades : tableau 4 (taux d'erreur = 1 − TPR, en %, jeu PPB)

| Entreprise | Toutes | Femmes | Hommes | Peau foncée | Peau claire | Femmes peau foncée | Hommes peau foncée | Femmes peau claire | Hommes peau claire |
|---|---|---|---|---|---|---|---|---|---|
| Microsoft | 6,3 | 10,7 | 2,6 | 12,9 | 0,7 | **20,8** | 6,0 | 1,7 | **0,0** |
| Face++ | 10,0 | 21,3 | 0,7 | 16,5 | 4,7 | **34,5** | 0,7 | 9,8 | 0,8 |
| IBM | 12,1 | 20,3 | 5,6 | 22,4 | 3,2 | **34,7** | 12,0 | 7,1 | 0,3 |

Recopié de la ligne « Error Rate(%) » du tableau 4 du PDF PMLR [1]. Légende : « All classifiers have the highest
error rates for darker-skinned females (ranging from 20.8% for Microsoft to 34.7% for IBM). »

### Faits clés
- Jeu de test « Pilot Parliaments Benchmark » : « 1270 individuals », parlementaires de « three African countries
  (Rwanda, Senegal, South Africa) and three European countries (Iceland, Finland, Sweden) » ; peau classée selon
  l'échelle de Fitzpatrick [1].
- Bases existantes : « overwhelmingly composed of lighter-skinned subjects (79.6% for IJB-A and 86.2% for Adience) » [1].
- Constats : « All classifiers perform better on male faces than female faces (8.1% − 20.6% difference in error
  rate) » ; « The maximum difference in error rate between the best and worst classified groups is 34.4% » [1].
- Raji et Buolamwini 2019 : « Within 7 months of the original audit, we find that all three targets released new API
  versions » ; réduction de l'erreur pour les femmes à peau foncée de « 17.7% - 30.4% » ; entreprises non visées :
  Amazon et Kairos, erreurs « 31.37% and 22.50% for the darker female subgroup » [2].
- NISTIR 8280 (décembre 2019) : « 18.27 million images of 8.49 million people through 189 mostly commercial algorithms
  from 99 developers » [3].
- NIST, conclusions exactes [3] :
  - « Our main result is that false positive differentials are much larger than those related to false negatives and
    exist broadly, across many, but not all, algorithms tested. Across demographics, false positives rates often vary
    by factors of 10 to beyond 100 times. False negatives tend to be more algorithm-specific, and vary often by factors
    below 3. »
  - « false positive rates are highest in West and East African and East Asian people, and lowest in Eastern European
    individuals… However, with a number of algorithms developed in China this effect is reversed, with low false positive
    rates on East Asian faces. »
  - « With domestic law enforcement images, the highest false positives are in American Indians, with elevated rates in
    African American and Asian populations »
  - « We found false positives to be higher in women than men… This effect is smaller than that due to race. »
  - « We found elevated false positives in the elderly and in children »
  - « some developers supplied highly accurate identification algorithms for which false positive differentials are
    undetectable » ; « it is incumbent upon the system owner to know their algorithm. »

### Sources
1. J. Buolamwini, T. Gebru, « Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification »,
   *PMLR* 81:1-15, 2018 (FAT* 2018). https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf — P, anglais, **lu partiellement** (résumé, §3-4, tableau 4).
2. I. D. Raji, J. Buolamwini, « Actionable Auditing: Investigating the Impact of Publicly Naming Biased Performance Results
   of Commercial AI Products », AIES 2019, p. 429-435. Notice MIT Media Lab :
   https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/
   — P, anglais, **résumé seulement** (PDF ACM bloqué ; métadonnées Crossref vérifiées).
3. P. Grother, M. Ngan, K. Hanaoka, *Face Recognition Vendor Test (FRVT) Part 3: Demographic Effects*, NISTIR 8280,
   décembre 2019. https://doi.org/10.6028/NIST.IR.8280 — P, anglais, **lu partiellement** (résumé exécutif).

### Points d'attention
- Gender Shades évalue la **classification de genre** (homme/femme), pas l'identification d'une personne. Ne pas confondre
  avec la reconnaissance faciale au sens du NIST.
- L'étude utilise des catégories binaires de genre et un classement de peau « plus claire / plus foncée » : les auteures
  le discutent ; le signaler.
- « 34,4 % » est un écart en **points de pourcentage** (34,7 − 0,3).
- Le NIST parle de « race » et de pays de naissance, catégories issues des fichiers administratifs américains : traduire
  prudemment (« groupes de population », « personnes nées en… »).
- Amazon a contesté publiquement le travail de Buolamwini (selon l'AJL, site militant) : présenter les deux parties si
  on l'évoque.

---

## 9. Droit : AI Act, CNIL/Clearview, vidéosurveillance algorithmique en France

### Formulation sûre
Depuis le 2 février 2025, le règlement européen sur l'IA interdit de constituer des bases de reconnaissance faciale en
aspirant sans cible des visages sur internet ou dans la vidéosurveillance. Il interdit aussi l'identification
biométrique à distance « en temps réel » dans l'espace public par la police, sauf exceptions strictes (victimes
d'enlèvement, menace terroriste imminente, suspect·es de crimes graves). En 2022, la CNIL a infligé 20 millions
d'euros d'amende à Clearview AI. En France, la loi « JO 2024 » a autorisé à titre expérimental des caméras « augmentées »
par algorithme, **sans reconnaissance faciale** ; l'expérimentation, prolongée, court désormais jusqu'au 31 décembre 2027.

### Faits clés — règlement (UE) 2024/1689 [1]
- Art. 5, § 1, e) — interdit : « la mise sur le marché, la mise en service à cette fin spécifique ou l'utilisation de
  systèmes d'IA qui créent ou développent des bases de données de reconnaissance faciale par le moissonnage non ciblé
  d'images faciales provenant de l'internet ou de la vidéosurveillance ».
- Art. 5, § 1, h) — interdit : « l'utilisation de systèmes d'identification biométrique à distance en temps réel dans
  des espaces accessibles au public à des fins répressives, sauf si et dans la mesure où cette utilisation est
  strictement nécessaire eu égard à l'un des objectifs suivants : i) la recherche ciblée de victimes spécifiques
  d'enlèvement, de la traite ou de l'exploitation sexuelle d'êtres humains, ainsi que la recherche de personnes
  disparues ; ii) la prévention d'une menace spécifique, substantielle et imminente pour la vie ou la sécurité physique
  de personnes physiques ou d'une menace réelle et actuelle ou réelle et prévisible d'attaque terroriste ; iii) la
  localisation ou l'identification d'une personne soupçonnée d'avoir commis une infraction pénale […] punissables dans
  l'État membre concerné d'une peine ou d'une mesure de sûreté privatives de liberté d'une durée maximale d'au moins
  quatre ans. »
- Art. 113 : « Il est applicable à partir du 2 août 2026. Toutefois : a) les chapitres I et II sont applicables à
  partir du 2 février 2025 » (l'article 5 est dans le chapitre II).

### Faits clés — CNIL / Clearview AI
- Lettre d'information CNIL d'octobre 2022 : « À la suite d'une mise en demeure restée sans réponse, la CNIL prononce
  une sanction de 20 millions d'euros et enjoint à la société CLEARVIEW AI de cesser de collecter et d'utiliser, sans
  base légale, les données des personnes se trouvant en France et de supprimer celles déjà collectées. » [2]
- Décision du 17 octobre 2022 (délibération SAN-2022-019) ; astreinte de 5,2 millions d'euros prononcée le
  13 avril 2023 pour non-exécution : **résumés de moteur de recherche seulement** (Légifrance bloqué).

### Faits clés — France, loi JO 2024
- Loi n° 2023-380 du 19 mai 2023, article 10 : expérimentation de traitements algorithmiques sur les images de
  vidéoprotection et de drones ; jugée conforme par le Conseil constitutionnel (décision 2023-850 DC du 17 mai 2023),
  qui relève que ces traitements « ne mettent en œuvre aucune technique de reconnaissance faciale, n'utilisent aucun
  système d'identification biométrique » ; fin prévue « le 31 mars 2025 » [3].
- CNIL : huit événements détectables : « objets abandonnés ; […] armes ; […] non-respect […] du sens de circulation ;
  […] zone interdite ou sensible ; […] personne au sol à la suite d'une chute ; un mouvement de foule ; une densité
  trop importante de personnes ; un départ de feu » ; « les dispositifs qui seront utilisés pendant les JO
  n'intègreront pas de reconnaissance faciale » [4].
- 24 avril 2025 : le Conseil constitutionnel censure, comme sans lien avec le texte (article 45 de la Constitution),
  l'article 15 de la loi sur la sûreté dans les transports, qui prorogeait l'expérimentation « jusqu'au 1er mars 2027 »
  (décision 2025-878 DC) [5].
- 19 mars 2026 : le Conseil constitutionnel juge conforme l'article 47 de la loi relative à l'organisation des JO de 2030,
  qui reconduit l'expérimentation « jusqu'au 31 décembre 2027 » (rapport d'évaluation au 30 septembre 2027) ;
  ces dispositions « n'affectent, par elles-mêmes, ni le droit à un recours juridictionnel effectif, ni le droit au
  respect de la vie privée, ni la liberté d'aller et de venir » (décision 2026-902 DC) [6].

### Points de vue opposés
- **CNIL** (autorité administrative indépendante) : la reconnaissance faciale est porteuse de « risques importants »,
  dont un « potentiel de surveillance inédit » et des biais (« taux d'erreur pouvant varier avec le sexe ou la couleur
  de peau ») ; elle a obtenu son exclusion du dispositif JO [4].
- **Gouvernement** : a défendu la prolongation (amendement de 2025, loi JO 2030) ; le Conseil constitutionnel a jugé
  en 2023 que le dispositif poursuivait l'objectif de prévention des atteintes à l'ordre public [3]. La position
  argumentée du ministère de l'Intérieur n'a **pas** été lue dans une source primaire.
- **La Quadrature du Net** (association) : l'expérimentation, « achevée fin mars », a été « émaillée de multiples
  défaillances » ; la reconduction pour les JO 2030 est « une pierre de plus à l'édifice de la surveillance
  algorithmique de l'espace public » [7].

### Sources
1. Règlement (UE) 2024/1689 du 13 juin 2024 (« AI Act »), JO L du 12.7.2024, texte français. Référence :
   https://eur-lex.europa.eu/eli/reg/2024/1689/oj/fra — P, français, **lu partiellement** (art. 5 et 113) à partir de
   la version Formex française du JO téléchargée plus tôt dans cette session ; EUR-Lex lui-même a renvoyé un défi
   anti-robot aujourd'hui. Relire sur EUR-Lex avant publication.
2. CNIL, *Lettre d'information n° 10*, octobre 2022. https://www.cnil.fr/sites/default/files/atoms/files/lettre_information_cnil_octobre_2022.html
   — P, français, **lu partiellement**.
3. Conseil constitutionnel, décision n° 2023-850 DC du 17 mai 2023. https://www.conseil-constitutionnel.fr/decision/2023/2023850DC.htm — P, français, **lu partiellement**.
4. CNIL, « JOP 2024 : les questions-réponses de la CNIL ». https://www.cnil.fr/fr/jop-2024-les-questions-reponses-de-la-cnil — P/S, français, **lu partiellement**.
5. Conseil constitutionnel, décision n° 2025-878 DC du 24 avril 2025. https://www.conseil-constitutionnel.fr/decision/2025/2025878DC.htm — P, français, **lu partiellement**.
6. Conseil constitutionnel, décision n° 2026-902 DC du 19 mars 2026. https://www.conseil-constitutionnel.fr/decision/2026/2026902DC.htm — P, français, **lu partiellement**.
7. La Quadrature du Net, « Jeux Olympiques 2030 : vous reprendriez bien un peu de VSA ? », 28 juillet 2025.
   https://www.laquadrature.net/2025/07/28/jeux-olympiques-2030-vous-reprendriez-bien-un-peu-de-vsa/ — S (association militante), français, **lu partiellement**.
8. CNIL, « Les caméras "augmentées" ou algorithmiques dans l'espace public ». https://cnil.fr/fr/cameras-augmentees-espaces-publics — S, français, **lu partiellement** (non cité ci-dessus).

### Points d'attention
- **Le communiqué CNIL sur Clearview n'est plus en ligne** : l'ancienne URL redirige vers « Mise en demeure ou
  sanction à l'encontre d'un organisme », avec la mention « This page is no longer available » (durée de publicité
  expirée). Citer la lettre d'information d'octobre 2022 ou la décision sur Légifrance (à ouvrir manuellement).
- Les citations de l'AI Act sont exactes, mais le texte imprimé met « en temps réel » entre guillemets dans d'autres
  articles : relire la typographie sur EUR-Lex.
- Ne pas écrire « l'UE interdit la reconnaissance faciale » : seuls certains usages sont interdits ; d'autres sont
  classés « à haut risque » et autorisés sous conditions.
- Une proposition de loi « Ripost » (prolongation jusqu'à fin 2030, adoptée au Sénat le 26 mai 2026 selon Next) est
  connue **par résumé seulement** : ne pas la présenter comme adoptée.
- Ne publier aucune adresse ni aucun nom de personne visée par une sanction autre que l'entreprise.

---

## 10. Personnes à mettre en avant (faits professionnels)

- **Russell Kirsch** (NBS/NIST) : a numérisé en 1957 l'une des premières images par ordinateur ; a plus tard regretté
  le choix du pixel carré [§1, sources 1-3]. Lu.
- **Fei-Fei Li** : professeure à Stanford, directrice fondatrice de Stanford HAI ; directrice du laboratoire d'IA de
  Stanford de 2013 à 2018 ; doctorat à Caltech en 2005 ; dernière autrice de l'article ImageNet de 2009 (alors à
  Princeton). Sources : Stanford HAI, https://hai.stanford.edu/people/fei-fei-li (S, anglais, **lu partiellement**) ;
  Deng et al. 2009 [§6-1].
- **Joy Buolamwini** : autrice principale de Gender Shades (MIT Media Lab, 2018) ; fondatrice et présidente de
  l'Algorithmic Justice League ; selon l'AJL, l'idée est née quand un logiciel d'analyse faciale « struggled to detect
  her face » lors d'un projet d'études. Source : AJL, https://www.ajl.org/about (S, militant, anglais, **lu partiellement**).
- **Timnit Gebru** : co-autrice de Gender Shades (alors à Microsoft Research, selon l'article) ; fondatrice et directrice
  exécutive de DAIR (https://www.dair-institute.org/team/, S, anglais, **lu partiellement**) ; co-autrice d'un jeu de
  données d'images satellites sur l'« apartheid spatial » en Afrique du Sud (NeurIPS 2021) [ci-dessous].
- **Inioluwa Deborah Raji** : autrice principale d'« Actionable Auditing » (AIES 2019), le suivi de Gender Shades [§8-2].
  Son parcours n'a pas été vérifié plus loin.
- **Helen Chan Wolf** : membre de l'équipe de Panoramic Research sur la reconnaissance faciale (années 1960), puis de
  l'équipe du robot Shakey au SRI [§4-2, §4-3].
- **Corinna Cortes** : vice-présidente de Google Research ; plus de dix ans aux AT&T Bell Labs ; prix Paris Kanellakis
  2008 avec Vladimir Vapnik pour les machines à vecteurs de support ; doctorat à Rochester en 1993 ; co-autrice de la base
  MNIST. Source : Google Research, https://research.google/people/corinna-cortes/ (S, anglais, **lu partiellement**).
  Écart : la page de Rochester (non ouverte) dit « Ph.D. '94 ».
- **Kunihiko Fukushima** : néocognitron, *Biological Cybernetics*, 1980 [§5-1]. Le reste est déjà sourcé sur le site.
- **Takeo Kanade** (Japon) : doctorat à l'université de Kyoto en 1974 ; prix de Kyoto 2016 en technologies avancées ;
  travaux pionniers de reconnaissance d'images, dont la détection de visages par réseaux de neurones. Source : Fondation
  Inamori, https://www.kyotoprize.org/en/laureates/takeo_kanade/ (P/S, anglais, **lu partiellement**).
- **Raesetje Sefala** (Afrique du Sud) : autrice principale de « Constructing a Visual Dataset to Study the Effects of
  Spatial Apartheid in South Africa » (NeurIPS 2021, avec Gebru, Mfupe, Moorosi, Klein) : « 6,768 high resolution
  satellite images of 9 provinces in South Africa, 550 of which are labeled ». Affiliations : DAIR et université du
  Witwatersrand. Source : https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/file/07e1cd7dca89a1678042477183b7ac3f-Paper-round2.pdf
  (P, anglais, **lu partiellement**). L'article se dit « the first publicly available dataset » de ce type :
  ne pas reprendre « premier ».
- **Ruzena Bajcsy** : déjà sourcée sur le site, pas revérifiée ici.

### Points d'attention
- Pour Gebru, le départ de Google (fin 2020) est un sujet contesté (versions opposées) : ne pas l'évoquer sans les
  deux versions sourcées.
- Ne publier aucune donnée personnelle (lieu de vie, famille) : les pages lues en contiennent (Cortes, Kirsch, Bledsoe).

---

## À vérifier plus tard

- Anecdote « Minsky confie à un étudiant le projet de faire décrire à l'ordinateur ce que voit une caméra, en un
  été » : non lue dans une source primaire.
- PDF complet de l'AI Memo 100 (calendrier, liste des participant·es) : DSpace en 429.
- Contenu de la thèse de Larry Roberts (1963) : métadonnées seulement.
- Rôle de Charles Bisson chez Panoramic Research : aucune source sérieuse ouverte.
- Rapport Chan & Bledsoe 1965 (« A Man-Machine Facial Recognition System: Some Preliminary Results ») et rapport
  PRI:22 de 1966 : connus par bibliographies de moteur de recherche seulement.
- Licence de MNIST (MIT selon Hugging Face ; CC BY-SA 3.0 selon d'autres reprises) : non tranchée.
- Communiqué FDA du 11 avril 2018 sur IDx-DR : non ouvert (date connue par résumé seulement).
- Décision CNIL SAN-2022-019 du 17 octobre 2022 et astreinte de 5,2 M€ du 13 avril 2023 : non ouvertes (Légifrance 403).
- Texte de la loi n° 2023-380 sur Légifrance : non ouvert ; contenu connu par les décisions du Conseil constitutionnel
  et la CNIL.
- Numéro et date de promulgation de la loi JO 2030 : non vérifiés (seule la décision 2026-902 DC a été lue).
- Proposition de loi « Ripost » (prolongation jusqu'à fin 2030) : résumé d'article de presse seulement.
- Position argumentée du ministère de l'Intérieur et rapport du comité d'évaluation de l'expérimentation (2025) :
  non lus.
- Nombre de travailleur·ses de Mechanical Turk pour ImageNet (≈ 49 000 ? 167 pays ?) : non vérifié.
- Contestation de Gender Shades par Amazon : connue par le site de l'AJL seulement.
- Parcours professionnel détaillé d'Inioluwa Deborah Raji et doctorat de Joy Buolamwini : non vérifiés.
