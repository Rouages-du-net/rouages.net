# Sources — Module « Les IA qui classent »

Dossier de sources du module `/modules/ia-classer/`, établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 16 octobre 2026.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué (« lu », « lu partiellement », « résumé seulement »,
  « métadonnées seulement »).
- Accès bloqués pendant la recherche : royalsocietypublishing.org,
  projecteuclid.org, rand.org, reuters.com, cnbc.com,
  deepblue.lib.umich.edu.
- Aucune page Wikipédia n'est utilisée comme source.

Types : **P** primaire (texte original, loi, décision, rapport officiel) ·
**R** recherche · **Pr** presse · **S** autre secondaire

---

## 1. Thomas Bayes, Richard Price et Laplace

### Formulation sûre

Le pasteur anglais Thomas Bayes (mort en 1761) a laissé un essai sur la « probabilité des causes ». Son ami Richard Price l'a fait publier après sa mort dans les *Philosophical Transactions* de la Royal Society, dans le volume daté de 1763. Le Français Pierre-Simon Laplace a énoncé la règle de façon générale et indépendante (mémoire de 1774), puis l'a exposée dans ses grands traités de 1812 et 1814 ; c'est surtout sa version que l'on utilise aujourd'hui. Le nom « théorème de Bayes » est donc une attribution simplifiée : des historiens discutent même d'un possible prédécesseur.

### Faits clés

- Titre exact de l'essai (notice Crossref) : « LII. An essay towards solving a problem in the doctrine of chances. By the late Rev. Mr. Bayes, F. R. S. communicated by Mr. Price, in a letter to John Canton, A. M. F. R. S », *Philosophical Transactions of the Royal Society of London*, p. 370-418, daté 1763 [1]. (« the late » = « feu » : publication posthume.)
- Date de mort : 7 avril 1761 d'après sa tombe à Bunhill Fields ; date de naissance incertaine (« 1701? ») [2]. Le seul portrait souvent reproduit est d'authenticité douteuse : « the authenticity of even this portrait is open to question » [2]. **Ne pas illustrer avec ce portrait sans le dire.**
- Laplace lui-même reconnaît l'antériorité de Bayes dans l'*Essai philosophique sur les probabilités* (trad. anglaise) : « Bayes, in the Transactions philosophiques of the year 1763, sought directly the probability that the possibilities indicated by past experiences are comprised within given limits; and he has arrived at this in a refined and very ingenious manner, although a little perplexing » [3].
- Le « sixième principe » de Laplace (forme verbale de la règle moderne) : « The probability of the existence of any one of these causes is then a fraction whose numerator is the probability of the event resulting from this cause and whose denominator is the sum of the similar probabilities relative to all the causes » ; si les causes ne sont pas également probables a priori, il faut multiplier par « the possibility of the cause itself » [3]. Laplace le qualifie de « fundamental principle of this branch of the analysis of chances which consists in passing from events to causes » [3].
- Mémoire de 1774 (« Mémoire sur la probabilité des causes par les événements ») : traduit et présenté par S. M. Stigler, *Statistical Science* 1(3), 1986, p. 359-363 (présentation) et 364-378 (traduction) [4][5].
- Stigler, « Who Discovered Bayes's Theorem? », *The American Statistician* 37(4), nov. 1983, p. 290 sq. [6] : il s'appuie sur un passage de David Hartley (1749) évoquant un « ingenious friend » ayant résolu le problème inverse, et avance le nom de Nicholas Saunderson ; cette hypothèse est contestée par d'autres auteurs [6][7].

### Sources

1. Bayes T. (publié par R. Price), « An essay towards solving a problem in the doctrine of chances », *Phil. Trans.* 1763, DOI 10.1098/rstl.1763.0053, https://api.crossref.org/works/10.1098/rstl.1763.0053 — P, anglais, **métadonnées seulement** (le site de la Royal Society renvoie 403 ; la copie https://www.york.ac.uk/depts/maths/histstat/essay.pdf est un scan sans couche texte, non lu).
2. *IMS Bulletin* 17(3), 1988, p. 276-278 (réponses de D. Bellhouse, A. Dale, S. Stigler), « The Reverend Thomas Bayes, F.R.S. — 1701?–1761 », https://www.york.ac.uk/depts/maths/histstat/bayespic.htm — R, anglais, lu (via outil de synthèse).
3. Laplace P.-S., *A Philosophical Essay on Probabilities*, trad. Truscott & Emory (1902) de la 6e éd. française, Projet Gutenberg n° 58881, https://gutenberg.org/files/58881/58881-h/58881-h.htm — P (traduction), anglais, lu partiellement (passages « Sixth Principle » et « Bayes »). *Original français (1814) non consulté.*
4. Stigler S. M., « Laplace's 1774 Memoir on Inverse Probability », *Statistical Science* 1(3), 1986, DOI 10.1214/ss/1177013620 — R, anglais, métadonnées seulement (Project Euclid bloqué).
5. Laplace, « Memoir on the Probability of the Causes of Events » (trad. Stigler), *Statistical Science* 1(3), 1986, p. 364-378, DOI 10.1214/ss/1177013621 — P (traduction), anglais, métadonnées seulement.
6. Stigler S. M., « Who Discovered Bayes's Theorem? », *The American Statistician* 37(4), 1983, DOI 10.2307/2682766 — R, anglais, métadonnées (Crossref) + résumé seulement.
7. Bellhouse D. R., « The Reverend Thomas Bayes, FRS: A Biography… », *Statistical Science* 19(1), 2004, p. 3-43, DOI 10.1214/088342304000000189 — R, anglais, métadonnées seulement.

### Points d'attention

- Écrire « publié en 1763 » avec prudence : le volume porte l'année 1763 ; certaines sources parlent de 1764 pour la parution effective. Formulation sûre : « dans le volume de 1763 des *Philosophical Transactions* ».
- Ne pas écrire « Bayes a inventé le théorème » : Bayes traite un cas particulier (binomial, raisonnement géométrique) ; Laplace généralise ; l'hypothèse Saunderson de Stigler est discutée. Bonne illustration de la « loi d'éponymie de Stigler » (aucune découverte ne porte le nom de son premier découvreur) — à citer comme boutade d'historien, pas comme fait.
- Le rôle de Price (éditeur, auteur de l'introduction et d'un appendice) est important et souvent oublié.

---

## 2. Classifieur bayésien naïf et filtrage du spam

### Formulation sûre

Dès 1961, M. E. Maron (RAND puis *Journal of the ACM*) testait un classement automatique de documents par probabilités, à partir de « mots indices ». En 1998, Mehran Sahami, Susan Dumais, David Heckerman et Eric Horvitz (Stanford et Microsoft Research) ont appliqué un classifieur bayésien « naïf » au courrier indésirable. En 2002, l'essai « A Plan for Spam » de Paul Graham a popularisé l'idée auprès du grand public et des développeur·ses de logiciels libres. On dit « naïf » parce que le modèle fait comme si chaque mot apparaissait indépendamment des autres, ce qui est faux mais marche bien.

### Faits clés

- Sahami et al. 1998, résumé : « By casting this problem in a decision theoretic framework, we are able to make use of probabilistic learning methods in conjunction with a notion of differential misclassification cost » [1].
- Définition de l'hypothèse naïve : le classifieur « assumes that each feature is conditionally independent of every other feature, given the class variable » ; ils l'attribuent à Good (1965) [1].
- **Seuil asymétrique** (parfait pour le module « seuil ») : « a message is only classified as junk if the probability that it would be placed in the junk class is greater than 99.9% » ; les auteurs reconnaissent que le modèle, « due to its independence assumption », ne donne pas des probabilités très exactes, mais que le seuil reste raisonnable [1].
- Justification : « the cost for misclassifying a legitimate E-mail as junk far outweighs the cost of marking a piece of junk as legitimate » [1].
- Résultats (tableau 1) : mots seuls → précision « junk » 97,1 %, rappel 94,3 % ; mots + expressions + indices propres au domaine → précision 100 %, rappel 98,3 % [1]. Indices non textuels : expressions comme « FREE! », « only $ », etc. [1].
- **Vraie matrice de confusion publiée** (tableau 3, boîte réelle d'un·e utilisateur·rice, 222 messages de test) [1] :

  |                     | Classé indésirable | Classé légitime | Total |
  |---------------------|-------------------:|----------------:|------:|
  | Vraiment indésirable | 36                 | 9               | 45    |
  | Vraiment légitime    | 3                  | 174             | 177   |

  → 3 faux positifs, 9 faux négatifs ; « the filter is in fact quite successful at eliminating 80% of the incoming junk E-mail » (36/45). Les 3 faux positifs : un spam transféré (« Check out this spam... ») et deux lettres d'information [1].
- Publication : AAAI-98 Workshop on Learning for Text Categorization, rapport technique WS-98-05 [1][2].
- Paul Graham, « A Plan for Spam », août 2002 : « I think it's possible to stop spam, and that content-based filters are the way to do it » ; filtrage par « a Bayesian combination of the spam probabilities of individual words » ; sur son propre corpus, moins de 5 spams manqués pour 1000, « with 0 false positives » ; seuil de spam fixé à 0,9 ; « missing legitimate email is an order of magnitude worse than receiving spam » [3].
- Maron 1961 : « Automatic Indexing: An Experimental Inquiry », *J. ACM* 8(3), p. 404-417, juillet 1961 [4] ; version RAND P-2180 présentée en février 1961 [5]. Sebastiani (2002) : « TC goes back to Maron's [1961] seminal work on probabilistic text classification » [6]. Le manuel de Manning, Raghavan et Schütze cite plutôt Maron et Kuhns (1960) comme « one of the first NB text classifiers » [7].
- Sebastiani explique l'hypothèse d'indépendance (« any two coordinates of the document vector are […] statistically independent of each other ») et note que « the binary independence assumption seldom harms effectiveness » (justification théorique : Domingos & Pazzani 1997) [6].

### Sources

1. Sahami M., Dumais S., Heckerman D., Horvitz E., « A Bayesian Approach to Filtering Junk E-Mail », AAAI-98 Workshop, 1998, https://www.microsoft.com/en-us/research/wp-content/uploads/1998/01/junkfilter.pdf — P, anglais, lu partiellement (texte extrait, sections méthode et résultats).
2. Même article, copie AAAI : https://cdn.aaai.org/Workshops/1998/WS-98-05/WS98-05-009.pdf — P, anglais, métadonnées seulement (scan sans texte).
3. Graham P., « A Plan for Spam », août 2002, https://paulgraham.com/spam.html — P, anglais, lu (via outil de synthèse).
4. Maron M. E., « Automatic Indexing: An Experimental Inquiry », *J. ACM* 8(3), 1961, DOI 10.1145/321075.321084 ; https://projects.csail.mit.edu/jacm/References/maron1961:404.html — P, anglais, métadonnées seulement.
5. RAND P-2180, https://www.rand.org/pubs/papers/P2180.html — P, anglais, résumé seulement (page bloquée, contenu connu par moteur de recherche).
6. Sebastiani F., « Machine Learning in Automated Text Categorization », arXiv cs/0110053 (2001 ; publié dans *ACM Computing Surveys* 2002), https://arxiv.org/pdf/cs/0110053 — R, anglais, lu partiellement.
7. Manning, Raghavan, Schütze, *Introduction to Information Retrieval*, « References and further reading » ch. 13, https://nlp.stanford.edu/IR-book/html/htmledition/references-and-further-reading-13.html — R, anglais, lu.

### Points d'attention

- Ne pas présenter Graham comme l'inventeur du filtrage bayésien : l'article de 1998 le précède de quatre ans. Graham a popularisé et amélioré une version simple.
- Le contenu exact de Maron 1961 n'a pas pu être lu (RAND bloqué) : dire « classement probabiliste de documents à partir de mots indices », pas plus. Maron et Kuhns (1960) existe aussi : éviter « premier classifieur ».
- La matrice réelle de Sahami et al. est un excellent exemple concret pour l'animation (36 / 9 / 3 / 174).

---

## 3. Le mot « spam » et les premiers envois de masse

### Formulation sûre

Le mot vient d'un sketch des Monty Python diffusé par la BBC en décembre 1970 : dans un café, presque tous les plats contiennent du Spam (une marque de viande en conserve) et un chœur de Vikings répète le mot jusqu'à couvrir la conversation. Des internautes ont repris le mot pour désigner un message répété à l'excès. Le plus ancien envoi publicitaire de masse connu sur un réseau date de mai 1978 : une invitation de l'entreprise DEC envoyée à plusieurs centaines d'utilisateur·rices de l'ARPANET. Le terme s'est imposé sur Usenet en 1993-1994, notamment après la publicité des avocats Canter et Siegel (avril 1994).

### Faits clés

- Merriam-Webster : le sens « messages non sollicités » vient du sketch où « chanting of the word Spam overrides the other dialogue » ; premier emploi attesté du nom en ce sens : **1990** ; du verbe : **1994** [1].
- Brad Templeton (pionnier d'Usenet) : usage dans les MUD dès la fin des années 1980 (« the term goes back to the late 1980s and the "MUD" community ») ; 31 mars 1993, un bogue du logiciel ARMM poste ~200 messages et Joel Furr est, selon lui, « the first to call a spam a spam » sur Usenet ; 18 janvier 1994 : « The first major USENET spam » (message religieux) ; avril 1994 : Canter et Siegel, « the first deliberate mass posting to commonly get that name » [2].
- Message DEC 1978 (dossier Templeton reproduisant les réactions d'époque) : en-tête daté du 1er mai 1978, envoi le 3 mai selon l'article ; envoyé depuis le compte de Gary Thuerk (marketing DEC) par l'ingénieur Carl Gartley ; invitation à des présentations du DECSYSTEM-20 ; le logiciel n'acceptait que 320 adresses, le reste a débordé dans le corps du message [3]. Réaction du major Raymond Czahor (gestion de l'ARPANET, Defense Communications Agency) : « a flagrant violation of the use of ARPANET » [3].
- Nombre de destinataires : 393 dans la plupart des récits, 397 dans d'autres [4] ; non tranché par une source primaire lue.
- Date de diffusion du sketch (15 décembre 1970, série 2) : confirmée seulement par des sources secondaires (catalogue de DVD, bases de séries) ; BBC Genome non consulté [5].

### Sources

1. Merriam-Webster, entrée « spam », https://www.merriam-webster.com/dictionary/spam — S (dictionnaire), anglais, lu.
2. Templeton B., « Origin of the term "spam" to mean net abuse », https://www.templetons.com/brad/spamterm.html — R/S (témoin et historien amateur), anglais, lu.
3. Templeton B., « Reaction to the DEC Spam of 1978 », https://www.templetons.com/brad/spamreact.html — P (reproduit les messages d'époque), anglais, lu.
4. Synthèse de recherche (tportal.hr, pplware, abusix) — Pr/S, résumé seulement ; à ne pas citer tel quel.
5. Notices secondaires (catalogue bibliothèque de Keller, bases de séries), résumé seulement.

### Points d'attention

- **« Premier spam »** : dire « le plus ancien envoi publicitaire de masse connu sur l'ARPANET » ; le mot « spam » n'existait pas en 1978.
- Canter et Siegel ne sont pas les premiers spammeurs d'Usenet (Templeton cite des cas antérieurs en 1993-1994) : « la plus célèbre » ou « la première publicité délibérée de masse appelée ainsi ».
- Spam® est une marque déposée de Hormel : écrire « Spam » (la conserve) et « spam » (le courriel).
- Ne pas mentionner de détails de vie privée des personnes citées.

---

## 4. Part du spam dans les courriels aujourd'hui

### Formulation sûre

Selon l'éditeur de sécurité Kaspersky, en 2025 environ 45 % des courriels envoyés dans le monde étaient du spam (44,99 %), soit près d'un sur deux. Ce chiffre vient des données collectées par les produits de l'entreprise : c'est une estimation d'un acteur privé, pas une statistique publique.

### Faits clés

- « 44.99% of all emails sent worldwide and 43.27% of all emails sent in the Russian web segment were spam » (rapport « Spam and phishing in 2025 », 11 février 2026) [1].
- Baisse de 2,28 points par rapport à l'année précédente (donc ≈ 47,3 % en 2024, calcul) ; pic au 4e trimestre (49,26 %), novembre 2025 à 52,87 % [1].
- Communiqué : « According to Kaspersky telemetry, almost every second email – 44.99% of global traffic – was spam in 2025 » ; Kaspersky inclut dans le spam arnaques, hameçonnage et maliciels [2].
- Méthode : « Kaspersky telemetry » ; la section lue du rapport ne détaille pas le mode de calcul [1][2].

### Sources

1. Kaspersky / Securelist, « Spam and phishing in 2025 », 11 févr. 2026, https://securelist.com/spam-and-phishing-report-2025/118785/ — P (rapport de l'éditeur), anglais, lu partiellement.
2. Kaspersky, communiqué « Kaspersky reports 15% growth in malicious email attacks in 2025 », 11 févr. 2026, https://www.kaspersky.com/about/press-releases/kaspersky-reports-15-growth-in-malicious-email-attacks-in-2025 — P, anglais, lu.

### Points d'attention

- Une seule source (éditeur commercial, méthode opaque) : présenter comme « selon Kaspersky », avec l'année. Pas de deuxième source indépendante trouvée dans le temps imparti.
- Ce chiffre mesure le trafic, pas ce qui arrive dans les boîtes de réception (la plupart est filtré avant).
- Contexte géopolitique : l'entreprise est d'origine russe et fait l'objet de restrictions dans certains pays ; ne pas en faire un sujet, mais ne pas présenter le chiffre comme officiel.

---

## 5. Karen Spärck Jones et la pondération IDF (1972)

### Formulation sûre

En 1972, l'informaticienne britannique Karen Spärck Jones (université de Cambridge) a proposé une idée simple : un mot présent dans peu de documents est plus révélateur qu'un mot présent partout. Elle a donc donné plus de poids aux mots rares lors de la recherche. Cette « fréquence inverse de document » (IDF) est encore utilisée par les moteurs de recherche et dans de nombreux classifieurs de textes.

### Faits clés

- Référence : *Journal of Documentation* 28(1), 1972, p. 11-21, DOI 10.1108/eb026526 ; réimprimé en 2004 (vol. 60 n° 5) [1][2].
- Résumé : « It is suggested that specificity should be interpreted statistically, as a function of term use rather than of term meaning » ; « terms should be weighted according to collection frequency, so that matches on less frequent, more specific, terms are of greater value than matches on frequent terms » [1].
- Elle ne propose pas d'écarter les mots fréquents : « Throwing very frequent terms away is throwing the baby out with the bath water » [1].
- Formule d'origine (forme logarithmique en base 2) : f(n) = m tel que 2^(m-1) < n ≤ 2^m ; poids d'un terme présent dans n documents sur N : f(N) − f(n) + 1. Exemple de l'article : collection Cranfield de 200 documents, un terme présent 90 fois a le poids 2, un terme présent 3 fois a le poids 7 [1].
- Collections de test : Cranfield, INSPEC, Keen (College of Librarianship Wales) [1].

### Sources

1. Spärck Jones K., « A statistical interpretation of term specificity and its application in retrieval », réimpression *J. Doc.* 60(5) 2004, https://www.staff.city.ac.uk/~sb317/idfpapers/ksj_orig.pdf — P, anglais, lu partiellement (résumé, sections « Statistical specificity » et « Weighting by specificity »).
2. Notice Crossref DOI 10.1108/eb026526 — métadonnées seulement.

(Faits professionnels : voir section 10.)

### Points d'attention

- La forme « log(N/n) » moderne est une écriture ultérieure ; l'article utilise une échelle en puissances de 2 équivalente à un logarithme arrondi.
- Ne pas dire « elle a inventé TF-IDF » : elle a introduit la pondération par fréquence dans la collection (IDF) ; la combinaison avec la fréquence dans le document (TF) s'est faite ensuite.

---

## 6. Arbres de décision : CLS, ID3, C4.5, CART

### Formulation sûre

Un arbre de décision pose une suite de questions simples (« le ciel est-il couvert ? ») pour arriver à une classe. Dans les années 1960, Earl Hunt et ses collègues ont construit le *Concept Learning System* (CLS). L'informaticien australien J. Ross Quinlan a mis au point ID3 (fin des années 1970, article de référence en 1986), puis C4.5 (livre de 1993). En parallèle, quatre statisticiens américains (Breiman, Friedman, Olshen, Stone) ont publié en 1984 la méthode CART. Les deux traditions, informatique et statistique, se sont développées en partie séparément.

### Faits clés

- Quinlan 1986, *Machine Learning* 1(1), p. 81-106, mars 1986, DOI 10.1007/BF00116251 ; affiliation : « New South Wales Institute of Technology, Sydney » [1][2].
- Filiation : « The patriarch of this family is Hunt's Concept Learning System framework (Hunt, Marin and Stone, 1966) » ; CLS minimisait un coût (mesure + erreur de classement) ; ID3 « abandons the cost-driven lookahead of CLS with an information-driven evaluation function » [1].
- Origine d'ID3 : une tâche proposée par Donald Michie — décider si une position d'échecs (Roi-Tour contre Roi-Cavalier) est perdue [1].
- Exemple pédagogique d'origine : les « Saturday mornings » décrits par outlook (sunny, overcast, rain), temperature, humidity, windy, classés P ou N [1] — base du célèbre exemple « jouer au tennis ».
- Livre de Hunt, Marin, Stone : *Experiments in Induction*, New York, Academic Press, 1966 [3].
- CART : *Classification and Regression Trees*, Belmont (Californie), Wadsworth, 1984 ; rééditions Chapman & Hall/CRC ensuite [4]. Auteurs : Leo Breiman (Berkeley), Jerome Friedman et Richard Olshen (Stanford), Charles Stone (Berkeley) [5].
- Quinlan : ID3 « developed in 1978 with Donald Michie while both were visiting Stanford University » ; C4.5 dérive d'ID3 ; en 1997, il fonde RuleQuest Research ; prix SIGKDD Innovation 2011 pour « seminal contributions to rule induction and decision tree algorithms » [6].
- C4.5 : Quinlan, *C4.5: Programs for Machine Learning*, Morgan Kaufmann, San Mateo ; daté 1993 (copyright) ou fin 1992 selon les notices [7].

### Sources

1. Quinlan J. R., « Induction of Decision Trees », *Machine Learning* 1, 1986, https://www.cs.williams.edu/~andrea/cs374/Articles/Quinlan.pdf — P, anglais, lu partiellement (introduction, sections 2-3).
2. Crossref DOI 10.1007/BF00116251 — métadonnées seulement.
3. Catalogue Texas A&M, *Experiments in induction*, https://libcat.library.tamu.edu/Record/in00000113246 — métadonnées seulement (via moteur de recherche).
4. Notices de bibliothèques (NYPL, Univ. Nantes) pour CART 1984 — métadonnées seulement (via moteur de recherche).
5. Université de Californie, « In Memoriam: Leo Breiman », https://senate.universityofcalifornia.edu/_files/inmemoriam/html/leobreiman.htm — R/P (nécrologie institutionnelle), anglais, lu.
6. KDnuggets, « SIGKDD 2011 Innovation Award: Ross Quinlan », août 2011, https://www.kdnuggets.com/2011/08/sigkdd-2011-innovation-award-ross-quinlan.html — S (reprend l'annonce de l'ACM SIGKDD), anglais, lu.
7. Notices éditeur/libraires (Elsevier, etc.) — métadonnées seulement.

### Points d'attention

- Ne pas dire « Quinlan a inventé les arbres de décision » : CLS (1966) et des travaux statistiques (CART, et AID de Morgan & Sonquist 1963, non vérifié ici) existent avant ou en parallèle.
- La source [6] affirme que Quinlan a obtenu « the first PhD in Computer Science from the University of Washington » (1968) : affirmation de type « premier », une seule source secondaire → **ne pas publier**.
- Origine de l'exemple « tennis » : le texte de 1986 dit seulement « some unspecified activity » ; le « tennis » vient de manuels ultérieurs.

---

## 7. Matrice de confusion, sensibilité/spécificité, ROC et détection du signal

### Formulation sûre

Pour juger un classifieur, on compte ses réussites et ses erreurs dans un tableau à quatre cases : vrais positifs, faux positifs, faux négatifs, vrais négatifs. En médecine, on parle depuis au moins les années 1940 de « sensibilité » et de « spécificité » d'un test. La courbe ROC montre comment ces erreurs évoluent quand on déplace le seuil ; elle vient de la théorie de la détection du signal, née de la recherche sur le radar pendant et juste après la Seconde Guerre mondiale, puis reprise en psychologie et en médecine.

### Faits clés

- Yerushalmy 1947, *Public Health Reports* 62(40), p. 1432-1449, étude de lecture de radiographies pour la tuberculose : « 1. A measure of sensitivity or the probability of correct diagnosis of "positive" cases, and 2. A measure of specificity or the probability of correct diagnosis of "negative" cases » ; il présente ces deux mesures comme « The usual procedure » [1]. Il note aussi : « in practical work sensitivity is more important than specificity » (dépistage) [1].
- Peterson, Birdsall, Fox, « The theory of signal detectability », *Transactions of the IRE Professional Group on Information Theory* 4(4), sept. 1954, p. 171-212, DOI 10.1109/TIT.1954.1057460 [2] ; rapport technique antérieur de Peterson et Birdsall à l'université du Michigan (métadonnées datées 1953) [3].
- Tanner & Swets, « A decision-making theory of visual detection », *Psychological Review* 61(6), 1954, p. 401-409 [4] ; Green & Swets, *Signal Detection Theory and Psychophysics*, Wiley, 1966 [5].
- Calì & Longobardi (2015) : la méthode ROC « was first developed during the Second World War by electrical engineers to analyze radar signals » […] « to quantify the ability of a radar operator to discern between information-bearing patterns (signal) and random patterns » ; ils citent Marcum, *A Statistical Theory of Target Detection by Pulsed Radar*, RAND RM-754 (1947) [5].
- Association for Psychological Science sur John Swets : la détection du signal est « an idea he borrowed from World War II radar experts and adapted for the study of human decision making » ; « Both radar and the human mind have trouble detecting the few meaningful signals amid random noise » [6].
- Fawcett 2006 (synthèse de référence en apprentissage automatique) : « ROC graphs have long been used in signal detection theory to depict the tradeoff between hit rates and false alarm rates of classifiers » ; premier usage en apprentissage automatique attribué à Spackman (1989) ; la matrice 2×2 « (also called a contingency table) » [7].

### Sources

1. Yerushalmy J., « Statistical problems in assessing methods of medical diagnosis, with special reference to X-ray techniques », *Public Health Reports* 62(40), 1947, https://jhanley.biostat.mcgill.ca/anniversaries/ByTopic/Yerushalmy1947.pdf — P, anglais, lu partiellement (section « Analysis »).
2. Crossref DOI 10.1109/TIT.1954.1057460 — P, métadonnées seulement.
3. Deep Blue (Univ. Michigan), handle 2027.42/7068 — P, métadonnées seulement (via moteur de recherche ; page bloquée).
4. Crossref DOI 10.1037/h0058700 — P, métadonnées seulement.
5. Calì C., Longobardi M., « Some mathematical properties of the ROC curve and their applications », *Ricerche di Matematica*, 2015, DOI 10.1007/s11587-015-0246-8, https://www.iris.unina.it/retrieve/e268a72e-5451-4c8f-e053-1705fe0a812c/Cal%c3%ac-Longobardi.pdf — R, anglais, lu partiellement (introduction historique).
6. APS Observer, « John Swets » (série 25 at 25), page datée 2013, https://www.psychologicalscience.org/publications/observer/25at25/john-swets.html — S, anglais, lu.
7. Fawcett T., « An introduction to ROC analysis », *Pattern Recognition Letters* 27(8), 2006, DOI 10.1016/j.patrec.2005.10.010, https://www2.cs.uh.edu/~acl/cs6397/Doc/2006-PRL-An%20Intro%20to%20ROC%20analysis.pdf — R, anglais, lu partiellement.

### Points d'attention

- **Origine « radar »** : deux sources indépendantes la confirment [5][6], mais la *théorie formelle* et le nom « ROC » apparaissent dans les travaux de 1947-1954 (Marcum 1947, Peterson-Birdsall-Fox 1954). Formulation sûre : « issue des recherches sur le radar menées pendant et après la Seconde Guerre mondiale ». Éviter « inventée pendant la guerre pour repérer les avions japonais » (anecdote répandue, non sourcée ici).
- **Yerushalmy « inventeur » de sensibilité/spécificité** : son propre texte dit « The usual procedure is to determine… », ce qui suggère que les notions (sinon les mots) circulaient déjà. Écrire « l'un des premiers textes à définir clairement ces deux mesures » plutôt que « il a inventé ».
- Origine du terme « matrice de confusion » : non vérifiée.

---

## 8. Tri de CV et droit européen

### Formulation sûre

En Europe, le RGPD donne à chacun le droit de ne pas faire l'objet d'une décision « fondée exclusivement sur un traitement automatisé » qui l'affecte de manière importante, sauf exceptions encadrées (contrat, loi, consentement explicite), avec dans ces cas un droit à une intervention humaine. Le RGPD cite lui-même en exemple « des pratiques de recrutement en ligne sans aucune intervention humaine ». En 2023, la Cour de justice de l'UE a jugé qu'un simple *score* peut déjà constituer une telle décision s'il joue un rôle déterminant. Le règlement européen sur l'IA classe les systèmes de tri de candidatures parmi les systèmes « à haut risque ».

### Faits clés

- **RGPD, article 22, § 1** (texte officiel) : « La personne concernée a le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques la concernant ou l'affectant de manière significative de façon similaire. » [1]
- **§ 2** : exceptions si la décision « a) est nécessaire à la conclusion ou à l'exécution d'un contrat […] ; b) est autorisée par le droit de l'Union ou le droit de l'État membre […] ; ou c) est fondée sur le consentement explicite de la personne concernée » [1].
- **§ 3** : dans les cas a) et c), garanties dont « au moins du droit de la personne concernée d'obtenir une intervention humaine de la part du responsable du traitement, d'exprimer son point de vue et de contester la décision » [1]. **§ 4** : pas de décision fondée sur les données sensibles de l'article 9 sauf exceptions [1].
- **Considérant 71** : exemples cités — « le rejet automatique d'une demande de crédit en ligne ou des pratiques de recrutement en ligne sans aucune intervention humaine » ; le profilage vise notamment à « analyser ou prédire des aspects concernant le rendement au travail » [1].
- **CJUE, C-634/21, SCHUFA Holding (Scoring), 7 décembre 2023**, dispositif : « l'établissement automatisé, par une société fournissant des informations commerciales, d'une valeur de probabilité fondée sur des données à caractère personnel relatives à une personne et concernant la capacité de celle-ci à honorer des engagements de paiement à l'avenir constitue une « décision individuelle automatisée », au sens de cette disposition, lorsque dépend de manière déterminante de cette valeur de probabilité le fait qu'une tierce partie […] établisse, exécute ou mette fin à une relation contractuelle avec cette personne » [2].
- Communiqué n° 186/23 : « Le « scoring » est une méthode statistique mathématique permettant d'établir une prévision quant à la probabilité d'un comportement futur » ; le scoring est une décision automatisée « en principe interdite par le RGPD, pour autant que les clients de SCHUFA, tels que des banques, lui accordent un rôle déterminant » ; il revient au tribunal de Wiesbaden de vérifier si le droit allemand prévoit une exception valable [3].
- **Règlement (UE) 2024/1689 sur l'IA, annexe III, point 4** (texte officiel) : « 4. Emploi, gestion de la main-d'œuvre et accès à l'emploi indépendant: a) systèmes d'IA destinés à être utilisés pour le recrutement ou la sélection de personnes physiques, en particulier pour publier des offres d'emploi ciblées, analyser et filtrer les candidatures et évaluer les candidats; b) systèmes d'IA destinés à être utilisés pour prendre des décisions influant sur les conditions des relations professionnelles, la promotion ou le licenciement dans le cadre de relations professionnelles contractuelles, pour attribuer des tâches sur la base du comportement individuel, de traits de personnalité ou de caractéristiques personnelles ou pour suivre et évaluer les performances et le comportement de personnes dans le cadre de telles relations. » [4]
- **Calendrier (important, mis à jour)** : l'article 113 initial prévoyait l'application générale au 2 août 2026 [4]. Le **règlement (UE) 2026/1744** (« omnibus numérique sur l'IA », 8 juillet 2026, JO du 24.7.2026) fixe l'entrée en application des obligations des systèmes à haut risque de l'annexe III au **2 décembre 2027** (et au 2 août 2028 pour ceux de l'annexe I) [5]. Le texte de l'omnibus ne modifie pas la rédaction du point 4 de l'annexe III (recherche des mots « Emploi », « recrutement » sans résultat dans l'acte modificatif) [5].
- **France** : le Défenseur des droits, avec la CNIL, a publié le 31 mai 2020 le rapport « Algorithmes : prévenir l'automatisation des discriminations », qui cite le recrutement parmi les domaines concernés (« l'accès aux prestations sociales, la police, la justice ou encore le recrutement ») et avertit que ces outils peuvent reproduire les biais des données [6][7].
- **Exemple de tri de CV** (presse) : Reuters (Jeffrey Dastin, 10 octobre 2018) a révélé qu'Amazon avait abandonné un outil expérimental de notation de CV qui « penalized resumes that included the word "women's" », entraîné sur des CV « submitted to the company over a 10-year period » ; selon Reuters, les recruteur·ses « never relied solely on those rankings » ; Amazon a refusé de commenter l'outil et s'est dit attaché à la diversité [8].

### Sources

1. Règlement (UE) 2016/679 (RGPD), EUR-Lex, version française, https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679 — P, français, lu partiellement (art. 22, considérant 71).
2. CJUE, arrêt C-634/21, 7 déc. 2023, EUR-Lex, https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:62021CJ0634 — P, français, lu partiellement (dispositif).
3. CJUE, communiqué de presse n° 186/23, 7 déc. 2023, https://curia.europa.eu/jcms/upload/docs/application/pdf/2023-12/cp230186fr.pdf — P, français, lu.
4. Règlement (UE) 2024/1689, EUR-Lex, version française, https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202401689 — P, français, lu partiellement (annexe III, art. 113).
5. Règlement (UE) 2026/1744 (omnibus numérique sur l'IA), EUR-Lex, https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202601744 — P, français, lu partiellement (titre, considérant sur les dates, art. 4).
6. Défenseur des droits, page du rapport, 31 mai 2020, https://www.defenseurdesdroits.fr/rapport-algorithmes-prevenir-lautomatisation-des-discriminations-283 — P, français, lu (page de présentation ; PDF non lu).
7. CNIL, « Algorithmes et discriminations : le Défenseur des droits, avec la CNIL, appelle à une mobilisation collective », 2 juin 2020, https://www.cnil.fr/fr/algorithmes-et-discriminations-le-defenseur-des-droits-avec-la-cnil-appelle-une-mobilisation — P, français, lu.
8. Dastin J. (Reuters), « Amazon scraps secret AI recruiting tool that showed bias against women », 10 oct. 2018, reprise par Euronews : https://www.euronews.com/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women — Pr, anglais, lu (reprise ; l'original Reuters est bloqué).

### Points d'attention

- Article 22 : interdiction « de principe » (lecture confirmée par la CJUE), pas une interdiction absolue ; bien citer les exceptions.
- SCHUFA concerne le crédit, pas l'emploi : l'appliquer au tri de CV est une **analogie** (un score de CV qui décide en pratique de l'entretien pourrait être qualifié de même) — à présenter comme raisonnement, non comme jurisprudence établie sur l'emploi.
- AI Act : les dates ont changé en 2026 ; préciser « à partir du 2 décembre 2027 » pour les obligations haut risque de l'annexe III, et dater la vérification.
- Amazon : une seule source journalistique (Reuters, sources anonymes), démentie en partie par Amazon (« never used by Amazon recruiters to evaluate candidates » selon d'autres reprises, non lues) ; présenter comme « selon Reuters ».
- Recommandations détaillées du rapport du Défenseur des droits : PDF non lu.

---

## 9. Deux cas réels de classement automatisé contesté

### Cas A — Pays-Bas : l'affaire des allocations de garde d'enfants (*toeslagenaffaire*)

#### Formulation sûre

Aux Pays-Bas, l'administration fiscale a utilisé à partir de 2013 un système automatique qui signalait les demandes d'allocation de garde d'enfants jugées « à risque ». La nationalité (néerlandaise ou non) faisait partie des indicateurs. Des dizaines de milliers de familles, souvent modestes, ont été accusées à tort de fraude. Une commission parlementaire a parlé d'« injustice sans précédent », le gouvernement a démissionné en janvier 2021 et l'autorité néerlandaise de protection des données a infligé une amende de 2,75 millions d'euros.

#### Faits clés

- Autorité néerlandaise de protection des données (AP), 7 décembre 2021 : amende de 2,75 M€ parce que l'administration « processed data on the (dual) nationality of childcare benefit applicants in an unlawful, discriminatory and therefore improper manner » ; elle a utilisé « applicants' nationality (Dutch/not Dutch) as an indicator in a system that automatically designated certain applications as risky » ; en mai 2018, environ 1,4 million de personnes étaient encore enregistrées comme binationales ; « Entitlement to childcare benefit is not contingent on nationality but on lawful residence in the Netherlands » [1].
- Amnesty International, « Xenophobic Machines », 25 octobre 2021 : système introduit en 2013 ; « the tax authorities used information on whether an applicant had Dutch nationality as a risk factor » ; « These discriminatory design flaws were reproduced by a self-learning mechanism » ; « Tens of thousands of parents and caregivers from mostly low-income families were falsely accused of fraud » ; « the scandal brought down the Dutch government in January » [2].
- Rapport de la commission d'enquête parlementaire (« Ongekend onrecht », « injustice sans précédent ») présenté le 17 décembre 2020 ; démission du gouvernement Rutte III le 15 janvier 2021 [3].
- Position des autorités : la secrétaire d'État Alexandra van Huffelen a qualifié l'amende de « zeer pijnlijk » (« très douloureuse ») et indiqué ne pas la contester (presse) ; le Premier ministre Rutte a parlé d'un échec du système politique tout entier [3][4]. Selon l'AP, l'usage de la nationalité dans le système de risque a cessé en octobre 2018 (synthèse, non relu mot à mot) [1].

#### Sources

1. Autoriteit Persoonsgegevens, « Tax Administration fined for discriminatory and unlawful data processing », 7 déc. 2021, https://www.autoriteitpersoonsgegevens.nl/en/current/tax-administration-fined-for-discriminatory-and-unlawful-data-processing — P, anglais, lu partiellement (début du communiqué).
2. Amnesty International, « Dutch childcare benefit scandal an urgent wake-up call to ban racist algorithms », 25 oct. 2021, https://www.amnesty.org/en/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/ — P (ONG, position), anglais, lu ; rapport complet EUR 35/4686/2021 https://www.amnesty.org/en/documents/eur35/4686/2021/en/ non lu.
3. NL Times, Holland Times, Public Matters (janvier 2021) — Pr, anglais, résumé seulement.
4. Hart van Nederland / Taxlive (7 déc. 2021) — Pr, néerlandais, résumé seulement.

#### Points d'attention

- Nombre de victimes : chiffres divergents selon les sources et les dates (≈ 10 000 à 26 000 familles, davantage ensuite) : écrire « des dizaines de milliers » (formule d'Amnesty) ou citer un chiffre officiel daté (non trouvé ici).
- Le caractère « auto-apprenant » est l'analyse d'Amnesty ; l'AP parle d'un « système » de classement de risque. Attribuer chaque qualification à sa source.
- La démission du gouvernement a eu lieu à deux mois d'élections déjà prévues (contexte à mentionner prudemment, non vérifié ici).

### Cas B — Royaume-Uni 2020 : les notes calculées d'Ofqual

#### Formulation sûre

En 2020, les examens anglais (A levels, GCSE) ont été annulés à cause de la pandémie. Le régulateur Ofqual a calculé les notes avec un modèle statistique qui ajustait les notes proposées par les enseignant·es en fonction des résultats passés de chaque établissement. Environ 39 % des notes de A level ont été abaissées par rapport aux propositions des enseignant·es. Après une forte contestation, le gouvernement et Ofqual ont décidé le 17 août 2020 d'attribuer la plus haute des deux notes.

#### Faits clés

- 17 août 2020, gouvernement : « the system has resulted in too many inconsistent and unfair outcomes for A and AS level students » ; les résultats avaient été publiés le 13 août [5].
- Ofqual (Roger Taylor, président), 17 août 2020 : « we have decided that the best way to do this is to award grades on the basis of what teachers submitted » ; note finale = note proposée par l'établissement ou note modérée, « whichever is higher » ; Ofqual reconnaît l'angoisse causée et présente des excuses [6].
- Évaluation d'Ofqual (2021) : la note calculée était identique à la note des enseignant·es pour 59 % des entrées de A level, plus basse pour environ 39 %, plus haute pour un peu plus de 2 % ; après prise en compte de l'établissement et de la matière, pas d'association démontrée entre les écarts de trois notes et l'éligibilité aux repas gratuits ou la défavorisation du quartier ; pour les groupes de moins de 5 élèves, le modèle n'était pas appliqué (note des enseignant·es utilisée directement), pondération progressive de 5 à 15 élèves [7].
- Chiffre de presse : 39,1 % des notes abaissées (35,6 % d'une note, 3,3 % de deux) [8].
- Point de vue des défenseur·ses du modèle : éviter une inflation des notes et des écarts entre établissements (rationale du rapport intérimaire du 13 août 2020, 319 pages, non lu) [9]. Gavin Williamson (ministre) a écrit ensuite que la décision avait été prise par Ofqual, « which we agreed with » (résumé seulement) [10].

#### Sources

5. GOV.UK (DfE/Ofqual), « GCSE and A level students to receive centre assessment grades », 17 août 2020, https://www.gov.uk/government/news/gcse-and-a-level-students-to-receive-centre-assessment-grades — P, anglais, lu.
6. GOV.UK, « Statement from Roger Taylor, Chair, Ofqual », 17 août 2020, https://www.gov.uk/government/news/statement-from-roger-taylor-chair-ofqual — P, anglais, lu.
7. Ofqual, « Grading gaps in summer 2020: who was affected by differences between centre assessment grades and calculated grades? » (mise à jour 2 août 2021), https://www.gov.uk/government/publications/evaluation-of-centre-assessment-grades-and-grading-gaps-in-summer-2020/grading-gaps-in-summer-2020-who-was-affected-by-differences-between-centre-assessment-grades-and-calculated-grades — P, anglais, lu (via outil de synthèse).
8. Schools Week / Tes (août 2020) — Pr, anglais, résumé seulement.
9. Ofqual, « Awarding GCSE, AS & A levels in summer 2020: interim report », 13 août 2020, https://www.gov.uk/government/publications/awarding-gcse-as-a-levels-in-summer-2020-interim-report — P, anglais, lu (page de présentation seulement).
10. Education Hub (blog du DfE), août 2020 — P, anglais, résumé seulement.

#### Points d'attention

- Les 39 % portent sur des **entrées** (une par matière), pas sur des élèves.
- L'idée répandue « le modèle a favorisé les écoles privées » s'explique en partie par la règle des petits effectifs (notes des enseignant·es conservées), plus fréquents dans le privé ; l'évaluation d'Ofqual ne donne pas de chiffres par type d'établissement → ne pas l'affirmer comme fait chiffré.
- Le modèle n'est pas de l'« IA » au sens apprentissage : c'est un modèle statistique de standardisation. Le présenter comme « algorithme de classement », ce qui est exact.

### Autre cas possible (non retenu, insuffisamment vérifié)

- France, algorithme de « score de risque » de la CNAF : enquête de La Quadrature du Net (fin 2023), Le Monde et Lighthouse Reports ; recours devant le Conseil d'État déposé en octobre 2024 par 15 organisations dont Amnesty. Réponse officielle de la CNAF non trouvée → ne pas publier sans elle.

---

## 10. Personnes à mettre en avant (faits professionnels)

### Karen Spärck Jones (1935-2007), Royaume-Uni

- Professeure émérite « of Computers and Information » à l'université de Cambridge ; « pioneer of information retrieval (IR) and natural language processing (NLP) » ; débute à la Cambridge Language Research Unit à la fin des années 1950 ; thèse « Synonymy and Semantic Classification » [1].
- « Introduced IDF term weighting », aujourd'hui standard, y compris dans les moteurs de recherche web ; avec Stephen Robertson, pondération par pertinence (modèle probabiliste) ; membre du comité du programme TREC dès 1994 ; présidente de l'ACL en 1994 [1].
- Distinctions : prix Salton (ACM SIGIR), Lovelace Medal (BCS), prix Allen Newell (ACM-AAAI), Fellow de la British Academy [1].
- Citation vérifiée (entretien BCS, 2007) : « My slogan is: Computing is too important to be left to men », juste après « I think it's very important to get more women into computing » [2].

### Susan Dumais, États-Unis

- Co-autrice de l'article de 1998 sur le filtrage du spam [voir §2].
- Athena Lecturer 2014-2015 de l'ACM-W ; à l'époque « Distinguished Scientist » et directrice adjointe du laboratoire Microsoft Research de Redmond ; travaux sur l'indexation sémantique latente (LSI), la personnalisation de la recherche, l'évolution des pages web [3].
- Citation (Mary Jane Irwin, ACM-W) : « Dumais has helped us understand that the search is not the end goal » [3].

### J. Ross Quinlan, Australie

- Licence de physique à l'université de Sydney (1965), doctorat à l'université de Washington (1968) ; postes à l'université de Sydney, à la RAND Corporation, au New South Wales Institute of Technology (aujourd'hui UTS) ; fondateur de RuleQuest Research en 1997 ; ID3, C4.5, puis C5.0 et Cubist ; prix SIGKDD Innovation 2011 [4]. C4.5 classé parmi les « top 10 » algorithmes de fouille de données par l'IEEE ICDM en 2006 [4].

### Leo Breiman (1928-2005), États-Unis

- Doctorat de mathématiques à Berkeley, enseigne les probabilités à UCLA, démissionne pour devenir statisticien appliqué et consultant (environ 18 ans) ; rejoint le département de statistique de Berkeley en 1980 ; co-auteur de CART ; forêts aléatoires avec Adele Cutler, méthode qu'il voyait comme « a culmination of his work » [5].
- Article célèbre : « Statistical Modeling: The Two Cultures », *Statistical Science* 16(3), 2001, p. 199-231 [6].
- Mettre en avant **Adele Cutler** (co-développeuse des forêts aléatoires) [5].

### Cynthia Rudin, États-Unis

- « Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead », *Nature Machine Intelligence* 1(5), 13 mai 2019, p. 206-215 [7]. Résumé : « trying to explain black box models, rather than creating models that are interpretable in the first place, is likely to perpetuate bad practices and can potentially cause catastrophic harm to society. There is a way forward -- it is to design models that are inherently interpretable » [8].
- Professeure à Duke depuis 2017 ; prix AAAI Squirrel AI (1 million de dollars), annoncé en octobre 2021 (deuxième lauréate) ; premier projet appliqué : prédire les explosions de regards souterrains à New York avec Con Edison ; modèle simple aussi performant que l'outil propriétaire COMPAS ; « no loss in accuracy to gain interpretability » [9].

### Sources

1. University of Cambridge, Computer Laboratory, « Karen Spärck Jones, FBA », https://www.cl.cam.ac.uk/misc/obituaries/sparck-jones/ — R/P (nécrologie institutionnelle), anglais, lu.
2. BCS, « Computing's too important to be left to men » (entretien par Brian Runciman, 2007), https://www.bcs.org/articles-opinion-and-research/computings-too-important-to-be-left-to-men/ — P, anglais, lu partiellement (passage recherché).
3. ACM-W, « Dumais Athena Lecturer Award », 8 avril 2014, https://women.acm.org/Dumais-Athena-Lecturer-Award/ — P, anglais, lu.
4. KDnuggets, août 2011 (voir §6 [6]) — S, anglais, lu.
5. University of California, « In Memoriam: Leo Breiman » (voir §6 [5]) — R/P, anglais, lu.
6. Crossref DOI 10.1214/ss/1009213726 — métadonnées seulement.
7. Crossref DOI 10.1038/s42256-019-0048-x — métadonnées seulement.
8. Rudin C., arXiv 1811.10154v3, https://arxiv.org/abs/1811.10154v3 — P, anglais, lu (résumé).
9. Duke Pratt School of Engineering, Ken Kingery, « Duke Professor Wins $1 Million Artificial Intelligence Prize, A 'New Nobel' », 12 oct. 2021, https://pratt.duke.edu/news/rudin-squirrel-award/ — P (institution), anglais, lu.

### Points d'attention

- Spärck Jones : la Lovelace Medal 2007 est parfois présentée comme « la première décernée à une femme » (une seule source secondaire vue) → ne pas publier. Ne pas évoquer sa vie privée (conjoint, etc.).
- Dumais : son titre actuel varie selon les dates (Technical Fellow, directrice de laboratoires) ; dater toute fonction citée.
- Quinlan : pas d'information sur sa nationalité dans les sources lues ; écrire « chercheur australien » est cohérent avec sa carrière (Sydney), mais « informaticien basé en Australie » est plus sûr.
- Rudin : « Squirrel AI » est le nom du mécène (entreprise chinoise d'éducation) ; le surnom « nouveau Nobel » vient de Duke, à guillemeter.

---

## À vérifier plus tard

- Année exacte de parution effective de l'essai de Bayes (1763 vs 1764) et numéro de volume (53) : non vus dans une source lue.
- Contenu détaillé du mémoire de Laplace de 1774 et formulation dans la *Théorie analytique des probabilités* (1812) : non lus.
- Argument complet de Stigler (1983) sur Saunderson : connu par résumé.
- Contenu exact de Maron 1961 (méthode bayésienne explicite ?) : non lu.
- Date du sketch des Monty Python (15 décembre 1970) : seulement sources secondaires ; BBC Genome non consulté.
- Nombre de destinataires du message DEC de 1978 (393 / 397 / autre).
- Canter et Siegel : nombre de groupes Usenet touchés (« 5 500 » dans une synthèse) et suites judiciaires.
- Part du spam : aucune deuxième source indépendante pour 2025.
- Rôle de Hunt, Marin, Stone : seulement via Quinlan 1986 et notice de catalogue ; méthode AID (Morgan & Sonquist 1963) non vérifiée.
- Doctorat de Quinlan présenté comme « le premier en informatique » à l'université de Washington : une seule source.
- Origine du terme « matrice de confusion » et premier usage de « ROC ».
- Anecdote « radar et Pearl Harbor / avions japonais » souvent associée à l'origine des courbes ROC : non sourcée.
- Démenti d'Amazon (« never used… to evaluate candidates ») : non lu dans une source ouverte.
- Recommandations détaillées du rapport Défenseur des droits/CNIL 2020 : PDF non lu.
- Nombre officiel de familles victimes de la *toeslagenaffaire* ; date d'arrêt de l'usage de la nationalité (octobre 2018) lue seulement en synthèse.
- Argumentaire d'Ofqual pour la standardisation (rapport intérimaire de 319 pages) : non lu.
- Algorithme de la CNAF : réponse de la CNAF non trouvée ; état du recours au Conseil d'État non vérifié.
- Spärck Jones « première femme » lauréate de la Lovelace Medal : non vérifié.

