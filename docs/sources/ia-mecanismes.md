# Sources — Les IA qui écrivent

Dossier de sources établi selon la [charte des sources](../SOURCES.md), pour
le module [« Les IA qui écrivent »](../scenarios/ia-texte.md) ; voir aussi [`ia.md`](ia.md) (histoire de l'IA).

- **Recherche effectuée le** : 16 octobre 2026
- **Wikipédia** : l'API a répondu 429 (trop de requêtes) ; aucun renvoi « pour aller plus loin » n'a été vérifié pour ce dossier.
- **Archives** : non relevées pour ce dossier, sauf mention contraire (copie
  Wayback de la page de l'AIE, dont le site répondait 403).
- Toutes les URL ont été ouvertes ; quand seul un résumé ou des métadonnées
  ont pu être lus, c'est indiqué.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution/musée

---

# Lot L — mécanismes des grands modèles de langage : vérification des sources

Vérification faite le 16 octobre 2026. Toutes les URL ci-dessous ont été ouvertes (HTTP 200) sauf mention contraire.
Types : P = source primaire (article original, rapport technique, documentation officielle) ; R = travaux de chercheur·ses (manuel, synthèse, histoire) ; Pr = presse/institution ; S = Wikipédia (renvoi seulement).

Manuel de référence utilisé partout : Jurafsky & Martin, *Speech and Language Processing*, 3e éd., brouillon du **19 août 2026** (chapitres réorganisés : ch. 1 Introduction, 2 Words and Tokens, 3 N-gram LMs, 5 Embeddings, 6 Neural Networks, 7 Transformers and Pretraining, 8 Post-training). Les numéros de chapitre ont changé par rapport aux versions 2024-2025 : citer la date de la version.

---

## 1. Prédire le token suivant

**Formulation sûre** — Un modèle de langage est un programme qui, à partir d'un début de texte, calcule une probabilité pour chaque « token » (morceau de mot) qui pourrait venir ensuite. Pour écrire, on choisit un token selon ces probabilités, on l'ajoute au texte, puis on recommence : le texte est produit un token à la fois, de gauche à droite. Les grands modèles de langage reposent sur ce même principe, avec un réseau de neurones très grand à la place de simples comptages de mots. Prédire le mot suivant n'est donc pas « tout ce qu'ils font » au sens de leurs capacités, mais c'est bien ce sur quoi ils sont entraînés et la façon dont ils génèrent.

**Faits clés**
- Définition du manuel : « A language model is a machine learning model that predicts upcoming words. More formally, a language model assigns a probability to each possible next word, or equivalently gives a probability distribution over possible next words. » [2] ; au ch. 1 : un modèle de langage « assigns a probability distribution over possible next words » [1].
- Le manuel précise qu'en pratique on calcule les modèles de langage sur des tokens plutôt que des mots [2].
- Génération : on transforme le modèle prédictif en modèle génératif « by repeatedly sampling from the distribution » ; chaque token produit est ajouté au contexte (modèle « autorégressif ») [1].
- GPT-2 (2019) formule la modélisation du langage comme le produit des probabilités conditionnelles p(sₙ | s₁…sₙ₋₁) (équation 1) [3].
- Les modèles à n-grammes (comptages) sont le modèle de langage le plus simple ; les LLM apprennent « an enormous amount about language » simplement en étant entraînés à prédire des mots [2].

**Sources**
1. D. Jurafsky, J. H. Martin, *Speech and Language Processing*, ch. 1 « Introduction », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/1.pdf — R — anglais — lu (passages pertinents)
2. D. Jurafsky, J. H. Martin, ch. 3 « N-gram Language Models », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/3.pdf — R — anglais — lu (introduction)
3. A. Radford, J. Wu, R. Child, D. Luan, D. Amodei, I. Sutskever, « Language Models are Unsupervised Multitask Learners », OpenAI, 2019 — https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf — P — anglais — lu (sections 1-2)

**Points d'attention**
- Dire « token » (ou « morceau de mot ») plutôt que « mot » dès qu'on parle des LLM réels.
- Le manuel consacre une section à l'anthropomorphisme (ch. 1, § 1.11) : « prédire », « savoir », « penser » sont des métaphores. Éviter « le modèle sait / comprend » sans guillemets.
- Ne pas réduire les modèles conversationnels actuels à la seule prédiction : ils passent aussi par un post-entraînement (sujet 7), mais génèrent toujours token par token.

---

## 2. Tokenisation et BPE

**Formulation sûre** — Avant d'être traité, le texte est découpé en « tokens » : des mots fréquents entiers, des morceaux de mots, de la ponctuation, voire des octets isolés. La méthode la plus répandue, le *byte-pair encoding* (BPE), part des caractères (ou des octets) et fusionne pas à pas les paires voisines les plus fréquentes dans un corpus, jusqu'à obtenir un vocabulaire de quelques dizaines à quelques centaines de milliers de tokens (50 257 pour GPT-2 en 2019). Ce procédé vient d'un algorithme de compression publié par Philip Gage en 1994, adapté au découpage des mots par Sennrich, Haddow et Birch (2016). Comme les vocabulaires sont surtout construits sur de l'anglais, un même texte demande en général plus de tokens dans d'autres langues : environ 1,6 fois plus en français qu'en anglais avec le tokeniseur de ChatGPT/GPT-4 mesuré en 2023, et jusqu'à 15 fois plus pour certaines langues.

**Faits clés**
- BPE (Gage, 1994) est « a simple data compression technique that iteratively replaces the most frequent pair of bytes in a sequence with a single, unused byte » ; Sennrich et al. l'adaptent en fusionnant des caractères ou suites de caractères, pour traduire des mots rares ou inconnus [1][2].
- Le manuel décrit l'entraînement BPE (fusion itérative des paires voisines les plus fréquentes), le fait qu'on l'applique aux octets UTF-8 (donc jamais de token inconnu) et des vocabulaires réels de « 50,000, 100,000, or even 200,000 tokens » ; le tokeniseur de GPT-4o compte 200K tokens [2].
- GPT-2 : vocabulaire de 50 257 tokens, BPE au niveau des octets [3]. Llama 3 (2024) : vocabulaire de 128 000 tokens (100K repris de tiktoken + 28K pour les autres langues) [6].
- Petrov et al. (NeurIPS 2023), corpus parallèle FLORES-200 : « prime » de tokenisation du **français par rapport à l'anglais = 2,00** pour GPT-2/RoBERTa et **1,60** pour cl100k_base (ChatGPT et GPT-4) ; 1,6× pour l'italien, 2,6× le bulgare, 3× l'arabe, jusqu'à 15× pour le shan (Birmanie) [4].
- Conséquences : coût plus élevé des API facturées au token, latence, moins de contenu dans la fenêtre de contexte [4][5] ; Ahia et al. (2023) montrent sur 22 langues que les locuteur·ices de nombreuses langues sont « surfacturé·es » par l'API d'OpenAI [5].
- Le manuel montre un exemple espagnol : 16 mots → 33 tokens, contre 19 tokens pour la traduction anglaise ; la sur-segmentation est pire pour les langues peu dotées [2].

**Sources**
1. R. Sennrich, B. Haddow, A. Birch, « Neural Machine Translation of Rare Words with Subword Units », ACL 2016 — https://aclanthology.org/P16-1162/ (texte : https://arxiv.org/abs/1508.07909) — P — anglais — lu (section 3)
2. D. Jurafsky, J. H. Martin, ch. 2 « Words and Tokens », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/2.pdf — R — anglais — lu (section 2.4)
3. Radford et al., « Language Models are Unsupervised Multitask Learners », OpenAI, 2019 — https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf — P — anglais — lu
4. A. Petrov, E. La Malfa, P. H. S. Torr, A. Bibi, « Language Model Tokenizers Introduce Unfairness Between Languages », NeurIPS 2023 — https://arxiv.org/abs/2305.15425 ; page NeurIPS : https://papers.nips.cc/paper_files/paper/2023/hash/74bb24dca8334adce292883b4b651eda-Abstract-Conference.html — P — anglais — lu (texte intégral, tableau 1 et annexe C)
5. O. Ahia, S. Kumar, H. Gonen, J. Kasai, D. R. Mortensen, N. A. Smith, « Do All Languages Cost the Same? Tokenization in the Era of Commercial Language Models », 2023 — https://arxiv.org/abs/2305.13707 — P — anglais — résumé seulement
6. Llama Team (A. Grattafiori et al.), « The Llama 3 Herd of Models », Meta, 2024 — https://arxiv.org/abs/2407.21783 — P — anglais — lu (sections 1 et 3)

**Points d'attention**
- Gage 1994 (« A New Algorithm for Data Compression », *C Users Journal*, 12(2):23-38, février 1994) : **non lu**, référence reprise de Sennrich et al. et de Jurafsky & Martin. Citer comme « d'après Sennrich et al. ».
- Les chiffres de Petrov et al. valent pour les tokeniseurs de 2023 (GPT-2, cl100k_base). Les tokeniseurs plus récents (o200k de GPT-4o, Llama 3) ont des vocabulaires plus grands et plus multilingues : l'écart a probablement diminué, mais je n'ai pas trouvé de mesure publiée comparable pour le français. Écrire « en 2023, avec le tokeniseur de GPT-4… ».
- Ne pas dire « un token = un mot » ni « un token ≈ 4 caractères » (règle empirique d'OpenAI non vérifiée ici, et fausse hors anglais).
- BPE n'est pas le seul algorithme : le manuel cite aussi le *unigram language model* (Kudo, 2018).

---

## 3. Embeddings (plongements lexicaux), « roi − homme + femme ≈ reine » et biais

**Formulation sûre** — Un modèle représente chaque token par une liste de nombres (un vecteur, ou « plongement ») apprise à partir des contextes où il apparaît : des mots employés dans des contextes semblables obtiennent des vecteurs proches. En 2013, Tomas Mikolov et ses collègues ont montré que, avec word2vec, le calcul vecteur(« king ») − vecteur(« man ») + vecteur(« woman ») tombe très près de vecteur(« queen »). Cet exemple célèbre est en partie enjolivé : les programmes d'évaluation excluent d'office les mots de la question, sans quoi la réponse la plus proche est généralement… « king » lui-même ; et la méthode marche bien pour certaines relations (pays-capitales, conjugaisons) beaucoup moins pour d'autres. Les plongements reproduisent aussi les stéréotypes présents dans les textes d'entraînement (genre, origine), ce que plusieurs études ont mesuré ; les corriger les atténue sans les supprimer.

**Faits clés**
- Mikolov, Yih, Zweig (NAACL 2013) : « the male/female relationship is automatically learned, and with the induced vector representations, "King − Man + Woman" results in a vector very close to "Queen." » [2] ; repris dans Mikolov et al. 2013 (word2vec) [1].
- Linzen (2016) : si les mots de la question ne sont pas exclus, le plus proche voisin de a* − a + b est **b dans 93 % des cas** (et a* dans 5 %) ; il propose des « lignes de base » pour juger la méthode [3].
- Nissim, van Noord, van der Goot (2020) : word2vec, gensim et le code de Bolukbasi et al. interdisent par défaut de renvoyer un mot de la question ; sans cette contrainte, « man is to king as woman is to **king** » ; ce choix a pu déformer l'image des biais (« man is to doctor as woman is to doctor ») — tout en affirmant que les plongements encodent bien des biais humains [4].
- Jurafsky & Martin : la réponse la plus proche est « usually not in fact b* but one of the 3 input words » et doit être exclue explicitement ; la méthode du parallélogramme marche moins bien pour d'autres relations [5].
- Bolukbasi et al. (NeurIPS 2016) : des plongements word2vec entraînés sur Google News renvoient « man : computer programmer :: woman : homemaker » et présentent des stéréotypes de genre ; proposent une méthode de « débiaisage » [6].
- Caliskan, Bryson, Narayanan (*Science*, 2017) : avec GloVe entraîné sur le Web, reproduction des biais mesurés par le test d'associations implicites (IAT), p. ex. prénoms afro-américains plus associés à des mots déplaisants [7][5]. Le débiaisage réduit le biais sans l'éliminer (Gonen & Goldberg 2019, cité par [5]).

**Sources**
1. T. Mikolov, K. Chen, G. Corrado, J. Dean, « Efficient Estimation of Word Representations in Vector Space », 2013 — https://arxiv.org/abs/1301.3781 — P — anglais — lu (introduction)
2. T. Mikolov, W. Yih, G. Zweig, « Linguistic Regularities in Continuous Space Word Representations », NAACL-HLT 2013 — https://aclanthology.org/N13-1090/ — P — anglais — lu (résumé et intro)
3. T. Linzen, « Issues in evaluating semantic spaces using word analogies », RepEval 2016 (ACL) — https://aclanthology.org/W16-2503/ (texte : https://arxiv.org/abs/1606.07736) — P — anglais — lu
4. M. Nissim, R. van Noord, R. van der Goot, « Fair Is Better than Sensational: Man Is to Doctor as Woman Is to Doctor », *Computational Linguistics* 46(2):487-497, 2020 — https://aclanthology.org/2020.cl-2.7/ (texte : https://arxiv.org/abs/1905.09866) — P — anglais — lu (sections 1-4)
5. D. Jurafsky, J. H. Martin, ch. 5 « Embeddings », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/5.pdf — R — anglais — lu (§ 5.7-5.8)
6. T. Bolukbasi, K.-W. Chang, J. Zou, V. Saligrama, A. Kalai, « Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings », NeurIPS 2016 — https://papers.nips.cc/paper_files/paper/2016/hash/a486cd07e4ac3d270571622f4f316ec5-Abstract.html (texte : https://arxiv.org/abs/1607.06520) — P — anglais — lu (intro)
7. A. Caliskan, J. J. Bryson, A. Narayanan, « Semantics derived automatically from language corpora contain human-like biases », *Science* 356(6334):183-186, 2017 — DOI 10.1126/science.aal4230 (page Science bloquée, HTTP 403 ; métadonnées via Crossref) ; préprint : https://arxiv.org/abs/1608.07187 — P — anglais — résumé seulement

**Points d'attention**
- Ne pas présenter « roi − homme + femme = reine » comme une égalité exacte ni comme une preuve que le modèle « comprend » la royauté. Dire « tombe près de », et signaler l'exclusion des mots de la question.
- Ne pas utiliser la critique de Nissim et al. pour nier les biais : leurs auteur·ices insistent sur le fait que les biais existent, seulement que les analogies sont un mauvais outil pour les mesurer.
- word2vec donne un vecteur fixe par mot ; dans un Transformeur, la représentation d'un token change selon le contexte (plongements « contextuels »). Ne pas confondre les deux.
- Exemples en anglais : la traduction française (« roi/reine ») est une illustration, pas le résultat publié.

---

## 4. Neurone artificiel, perceptron, descente de gradient et rétropropagation

**Formulation sûre** — Un neurone artificiel est un petit calcul : il fait une somme pondérée de ses entrées, ajoute un biais et applique une fonction ; il n'a qu'un lointain rapport avec un neurone biologique. Le perceptron, proposé par Frank Rosenblatt en 1958, en est une version qui apprend à classer en deux catégories, mais un perceptron seul ne sait séparer que ce qui est séparable par une droite (il échoue sur le « ou exclusif »). Pour entraîner des réseaux à plusieurs couches, on ajuste petit à petit tous les poids dans la direction qui réduit l'erreur (descente de gradient), et la rétropropagation est la méthode efficace pour calculer ces directions, en remontant les calculs depuis la sortie. Cette idée a été découverte plusieurs fois : on la trouve dès 1970 chez Seppo Linnainmaa (hors réseaux de neurones), elle est appliquée aux réseaux par Paul Werbos, puis popularisée en 1986 par Rumelhart, Hinton et Williams dans *Nature*.

**Faits clés**
- Origines : neurone de McCulloch et Pitts (1943) ; perceptron de Rosenblatt (1958) à Cornell ; déclin après la démonstration qu'un perceptron seul ne calcule pas le XOR (Minsky & Papert, 1969) ; renouveau dans les années 1980 quand la rétropropagation « became widespread (Rumelhart et al., 1986) » [1].
- Le manuel note que « multi-layer perceptron » est un abus de langage : les unités des réseaux modernes ne sont pas des perceptrons [1].
- Rumelhart, Hinton, Williams (*Nature* 323:533-536, oct. 1986) décrivent la rétropropagation comme une procédure qui ajuste les poids « so as to minimize a measure of the difference between the actual output vector of the net and the desired output vector », permettant aux unités cachées de représenter des traits utiles [3].
- Griewank (2012) : la « reverse mode » de différentiation (dont la rétropropagation est un cas) a été « suggested by several people from various fields since the late 1960s » ; Linnainmaa l'a formulée dans son mémoire de master (1970, en finnois) pour estimer les erreurs d'arrondi, publiée en anglais en 1976 dans *BIT* ; Ostrowski l'aurait utilisée ~5 ans plus tôt en génie chimique ; Werbos (1982) l'a comparée dans le contexte des réseaux de neurones [4][5].
- Schmidhuber (2022, mis à jour) : Linnainmaa 1970 = « first to publish » la rétropropagation moderne ; première application spécifique aux réseaux de neurones par Werbos en **1982** « (but not yet in his 1974 thesis, as is sometimes claimed) » ; précurseurs en théorie du contrôle (Kelley 1960, Bryson, Dreyfus) [6].
- La rétropropagation est une mise en œuvre efficace de la règle de dérivation des fonctions composées (règle de la chaîne) [1][6].

**Sources**
1. D. Jurafsky, J. H. Martin, ch. 6 « Neural Networks », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/6.pdf — R — anglais — lu (§ 6.2, 6.6, notes historiques)
2. F. Rosenblatt, « The perceptron: A probabilistic model for information storage and organization in the brain », *Psychological Review* 65(6):386-408, 1958 — https://doi.org/10.1037/h0042519 — P — anglais — métadonnées seulement (Crossref / APA PsycNet)
3. D. E. Rumelhart, G. E. Hinton, R. J. Williams, « Learning representations by back-propagating errors », *Nature* 323:533-536, 1986 — https://www.nature.com/articles/323533a0 — P — anglais — résumé seulement
4. A. Griewank, « Who invented the reverse mode of differentiation? », *Documenta Mathematica*, Extra Volume ISMP « Optimization Stories », 2012, p. 389-400 — https://doi.org/10.4171/dms/6/38 (PDF : https://content.ems.press/assets/public/full-texts/books/251/chapters/online-pdf/978-3-98547-540-7-chapter-4949.pdf) — R — anglais — lu (prologue et section Linnainmaa)
5. S. Linnainmaa, « Taylor expansion of the accumulated rounding error », *BIT* 16:146-160, 1976 — https://doi.org/10.1007/BF01931367 — P — anglais — métadonnées seulement
6. J. Schmidhuber, « Annotated History of Modern AI and Deep Learning », 2022 (version web consultée datée du 29/12/2025) — https://arxiv.org/abs/2212.11279 ; https://people.idsia.ch/~juergen/deep-learning-history.html — R (point de vue d'un acteur engagé) — anglais — lu (section rétropropagation)

**Points d'attention**
- Ne pas écrire « Rumelhart, Hinton et Williams ont inventé la rétropropagation » : écrire « l'ont popularisée / rendue célèbre pour les réseaux de neurones ». Leur article dit pourtant « We describe a new learning procedure », d'où la confusion.
- Werbos 1974 : sa thèse de Harvard est souvent citée comme première application aux réseaux de neurones ; Schmidhuber le conteste (application seulement en 1982). Fait **contesté** : écrire « Paul Werbos, dans les années 1970-1980 » ou « dès sa thèse de 1974 selon certain·es historien·nes, en 1982 selon d'autres ». La thèse elle-même n'a pas été lue.
- Schmidhuber est une voix très engagée dans les querelles d'attribution ; Griewank (mathématicien de la différentiation automatique) est plus neutre. Les deux convergent sur Linnainmaa 1970.
- Ostrowski, Kelley, Bryson, Dreyfus, Amari (Japon), Tsypkin et Galushkin (URSS) sont cités par Schmidhuber/Griewank : utile pour une histoire non uniquement occidentale, mais non vérifié à la source.
- Éviter « le neurone artificiel imite le cerveau ».

---

## 5. Attention et Transformeur ; tailles de GPT-2 et GPT-3

**Formulation sûre** — En 2014, Dzmitry Bahdanau, Kyunghyun Cho et Yoshua Bengio ont proposé, pour la traduction automatique, un mécanisme permettant au réseau de « chercher » dans la phrase source les mots utiles pour produire chaque mot traduit, au lieu de tout comprimer dans un seul vecteur : c'est l'idée d'attention. En 2017, une équipe de huit chercheurs de Google (« Attention Is All You Need ») a construit le Transformeur, une architecture qui repose entièrement sur l'attention, sans réseau récurrent. Dans une « tête » d'attention, chaque token produit une requête (Q), une clé (K) et une valeur (V) ; on compare la requête de chaque token aux clés de tous les autres, on transforme ces scores en poids qui somment à 1, et on fait la moyenne pondérée des valeurs : softmax(QKᵀ/√dₖ)V. Le modèle utilise plusieurs têtes en parallèle (8 dans l'article original), chacune pouvant repérer un type de relation différent. Les modèles GPT ont ensuite grandi très vite : 1,5 milliard de paramètres pour GPT-2 (2019), 175 milliards pour GPT-3 (2020).

**Faits clés**
- Bahdanau, Cho, Bengio : l'encodeur-décodeur à vecteur de taille fixe est un « bottleneck » ; leur modèle « (soft-)search[es] for parts of a source sentence that are relevant to predicting a target word » ; testé en anglais→français ; préprint sept. 2014, publié à ICLR 2015 [1].
- Auteurs du Transformeur (ordre de l'article) : **Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin** ; note : « Equal contribution. Listing order is random. » ; NeurIPS (NIPS) 2017 [2].
- Formule (éq. 1) : Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V ; la division par √dₖ évite que les produits scalaires deviennent trop grands et « écrasent » le softmax [2].
- Attention multi-têtes : h = 8 têtes, dₖ = dᵥ = 64, chaque tête a ses propres projections apprises ; permet « to jointly attend to information from different representation subspaces at different positions » [2] ; le manuel : chaque tête « might be attending to the context for different purposes » [3].
- GPT-2 : « a 1.5B parameter Transformer » (plus grand modèle : 1 542 M paramètres, 48 couches) [4]. GPT-3 : « an autoregressive language model with 175 billion parameters », mai 2020 [5].

**Sources**
1. D. Bahdanau, K. Cho, Y. Bengio, « Neural Machine Translation by Jointly Learning to Align and Translate », ICLR 2015 (arXiv 1er sept. 2014) — https://arxiv.org/abs/1409.0473 — P — anglais — lu (résumé, intro)
2. A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin, « Attention Is All You Need », NeurIPS 2017 — https://papers.nips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html ; https://arxiv.org/abs/1706.03762 — P — anglais — lu (section 3.2)
3. D. Jurafsky, J. H. Martin, ch. 7 « Transformers and Pretraining », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/7.pdf — R — anglais — lu (§ attention multi-têtes)
4. Radford et al., « Language Models are Unsupervised Multitask Learners », OpenAI, 2019 — https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf — P — anglais — lu
5. T. B. Brown et al. (31 auteur·ices), « Language Models are Few-Shot Learners », NeurIPS 2020 — https://arxiv.org/abs/2005.14165 ; https://papers.nips.cc/paper_files/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html — P — anglais — lu (sections 1-2)

**Points d'attention**
- Bahdanau et al. n'ont pas « inventé l'attention » ex nihilo, et le Transformeur n'a pas « inventé l'attention » : il l'a généralisée (auto-attention) et supprimé la récurrence. Le mot « attention » est une métaphore.
- Le Transformeur de 2017 est un encodeur-décodeur pour la traduction ; les GPT n'en utilisent que la partie décodeur (« decoder-only », cf. Meta pour Llama 3 [sujet 9]).
- Dans les modèles GPT (décodeurs), un token ne regarde que les tokens précédents (attention « causale ») ; ne pas dire « chaque mot regarde tous les autres » sans nuance.
- Ne pas affirmer qu'une tête correspond à une fonction linguistique précise : certaines têtes semblent spécialisées (figures 3-5 de l'article : anaphores, structure), mais c'est une interprétation partielle.
- Le chiffre 1,5 milliard concerne la plus grande version de GPT-2 (quatre tailles publiées). Huit auteurs, tous des hommes : à mentionner sans en faire une attribution unique (« une équipe de Google Brain et Google Research »).

---

## 6. Génération : échantillonnage et température

**Formulation sûre** — Le modèle ne produit pas directement un mot, mais une liste de scores pour tous les tokens possibles, que la fonction softmax transforme en probabilités. Prendre toujours le token le plus probable donne des textes plats et répétitifs ; tirer au hasard selon les probabilités brutes fait parfois sortir des tokens très improbables. La « température » règle ce compromis : on divise les scores par un nombre τ avant le softmax ; une température basse (< 1) renforce les tokens déjà probables et rend la sortie plus prévisible, une température haute (> 1) aplatit les probabilités et rend la sortie plus variée, au risque d'incohérences. C'est pour cela qu'une même question peut recevoir des réponses différentes.

**Faits clés**
- Échantillonnage aléatoire : « at each step we'll sample tokens according to their probability conditioned on our previous choices » [1].
- « greedy decoding is too boring, and random sampling is too random » ; trois méthodes standard : température, top-k, top-p [1].
- Température : « dividing the logit by a temperature parameter τ before passing it through the softmax » ; τ = 1 = softmax normal ; quand τ → 0 on se rapproche du choix glouton ; τ > 1 aplatit la distribution [1].
- Exemple chiffré du manuel : avec τ = 0,5 la probabilité du meilleur candidat passe de 0,44 à 0,59 ; avec τ = 0,1, à 0,95 [1].
- Compromis qualité/diversité : les méthodes favorisant les mots probables donnent des textes jugés plus exacts mais « more boring and more repetitive » [1]. Holtzman et al. (2019) montrent que maximiser la vraisemblance au décodage produit un texte « bland and strangely repetitive » et proposent l'échantillonnage *nucleus* (top-p) [2].

**Sources**
1. D. Jurafsky, J. H. Martin, ch. 7 « Transformers and Pretraining », § 7.6 (échantillonnage), brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/7.pdf — R — anglais — lu (§ 7.6)
2. A. Holtzman, J. Buys, L. Du, M. Forbes, Y. Choi, « The Curious Case of Neural Text Degeneration », 2019 (ICLR 2020) — https://arxiv.org/abs/1904.09751 — P — anglais — résumé seulement

**Points d'attention**
- La température vient d'une analogie avec la physique statistique (le manuel le dit) ; ce n'est pas une « créativité » du modèle.
- Température 0 ≈ choix glouton, mais en pratique les services ne garantissent pas toujours des réponses identiques (non vérifié ici : ne pas l'affirmer).
- Ne pas présenter la température comme la seule source de variation (top-k, top-p, consignes système…).

---

## 7. Ajustement par des humains : InstructGPT et RLHF

**Formulation sûre** — Un modèle seulement entraîné à prédire la suite de textes du Web ne suit pas forcément bien les consignes. Pour InstructGPT (OpenAI, 2022), l'équipe a d'abord fait écrire par des annotateur·ices des exemples de bonnes réponses, puis leur a fait classer plusieurs réponses du modèle ; un second modèle (« modèle de récompense ») a appris à prédire ces préférences, et a servi à ajuster le modèle par apprentissage par renforcement : c'est le RLHF (*reinforcement learning from human feedback*). Les réponses obtenues ont été préférées par les annotateur·ices à celles de GPT-3, même avec un modèle 100 fois plus petit, et inventaient moins souvent des informations. Mais ce réglage reflète les préférences d'un petit groupe (une quarantaine de personnes et l'équipe de recherche), pas des « valeurs humaines » universelles, et le modèle continue de faire des erreurs simples.

**Faits clés**
- Trois étapes : démonstrations écrites par des humains (ajustement supervisé), comparaisons classées par des humains → modèle de récompense, puis optimisation par l'algorithme PPO [1].
- « We first hire a team of 40 contractors » ; la procédure aligne le modèle sur « the stated preferences of a specific group of people (mostly our labelers and researchers), rather than any broader notion of "human values" » [1].
- Les sorties du modèle InstructGPT de 1,3 milliard de paramètres sont préférées à celles de GPT-3 175 milliards ; 175B InstructGPT préféré à GPT-3 175B dans 85 ± 3 % des cas [1].
- Tâches « fermées » (résumé, etc.) : taux d'informations inventées 21 % contre 41 % pour GPT-3 ; peu de progrès sur les biais ; « InstructGPT still makes simple mistakes » [1].
- Le RLHF ne naît pas avec InstructGPT : Christiano et al. (2017) l'appliquaient à des jeux Atari et à la robotique simulée, Stiennon et al. (2020) au résumé [1][2]. Le manuel parle plus largement d'« alignement par préférences » (RLHF, DPO…) [3].

**Sources**
1. L. Ouyang, J. Wu, X. Jiang et al. (20 auteur·ices), « Training language models to follow instructions with human feedback », NeurIPS 2022 — https://arxiv.org/abs/2203.02155 ; https://papers.nips.cc/paper_files/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract-Conference.html — P — anglais — lu (résumé, section 1, extraits)
2. P. Christiano, J. Leike, T. B. Brown, M. Martic, S. Legg, D. Amodei, « Deep reinforcement learning from human preferences », 2017 — https://arxiv.org/abs/1706.03741 — P — anglais — résumé seulement
3. D. Jurafsky, J. H. Martin, ch. 8 « Post-training », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/8.pdf — R — anglais — lu (intro et § 8.3)

**Points d'attention**
- Ne pas dire que ChatGPT « a été éduqué par des humains pour être vrai » : le RLHF optimise ce que des annotateur·ices préfèrent, ce qui peut récompenser des réponses plaisantes ou assurées (lien avec le sujet 8).
- Les prompts d'InstructGPT sont « mostly English » ; les annotateur·ices sont des prestataires : utile pour parler du travail humain derrière l'IA (conditions de travail : non vérifié dans ce lot).
- Les techniques actuelles varient (DPO, IA constitutionnelle, etc.) : ne pas présenter InstructGPT comme la recette actuelle de tous les modèles.

---

## 8. « Hallucinations »

**Formulation sûre** — On appelle « hallucination » le fait qu'un modèle produise un texte fluide et assuré mais faux, ou non fondé sur les documents qu'on lui a fournis (par exemple une référence bibliographique ou une personne qui n'existe pas). Le terme est une métaphore discutée : le modèle ne « perçoit » rien. Une explication proposée en 2025 par des chercheurs d'OpenAI et de Georgia Tech : même avec des données parfaites, un modèle entraîné à imiter des textes fera des erreurs sur les faits rares (vus une seule fois), et les évaluations courantes, qui notent 0 une réponse « je ne sais pas » comme une réponse fausse, poussent les modèles à deviner plutôt qu'à avouer leur incertitude. C'est une analyse parmi d'autres ; la question reste un sujet de recherche actif.

**Faits clés**
- Définition de synthèse (Ji et al., ACM Computing Surveys, 2023) : « generated content that is nonsensical or unfaithful to the provided source content » ; distinction entre hallucinations **intrinsèques** (contredisent la source) et **extrinsèques** (invérifiables à partir de la source) [1].
- Jurafsky & Martin (2026) : en TAL, « hallucinate » signifie « generating text that is factually incorrect, especially emphasizing cases like inventing people or facts that simply don't exist » ; les LLM sont aussi mal « calibrés » (trop confiants) [2].
- Kalai, Nachum, Vempala, Zhang (« Why Language Models Hallucinate », arXiv, 4 sept. 2025 ; OpenAI et Georgia Tech) : « language models hallucinate because the training and evaluation procedures reward guessing over acknowledging uncertainty » ; les hallucinations « originate simply as errors in binary classification » [3].
- Même article : si 20 % des dates d'anniversaire n'apparaissent qu'une fois dans les données, on s'attend à ce qu'un modèle de base se trompe sur au moins 20 % d'entre elles (résultat repris de Kalai & Vempala 2024) ; remède proposé : changer la notation des évaluations dominantes pour ne plus pénaliser l'abstention [3].
- InstructGPT avait réduit mais pas supprimé les inventions (21 % vs 41 % sur des tâches fermées) [4].

**Sources**
1. Z. Ji, N. Lee, R. Frieske, T. Yu, D. Su, Y. Xu, E. Ishii, Y. J. Bang, A. Madotto, P. Fung, « Survey of Hallucination in Natural Language Generation », *ACM Computing Surveys* 55, 2023, DOI 10.1145/3571730 (page ACM bloquée, HTTP 403) — https://arxiv.org/abs/2202.03629 — R — anglais — lu (section 2)
2. D. Jurafsky, J. H. Martin, ch. 1 « Introduction », § « Some Remaining Limitations », brouillon du 19 août 2026 — https://web.stanford.edu/~jurafsky/slp3/1.pdf — R — anglais — lu (passage)
3. A. T. Kalai, O. Nachum, S. S. Vempala, E. Zhang, « Why Language Models Hallucinate », arXiv:2509.04664, 4 septembre 2025 — https://arxiv.org/abs/2509.04664 — P — anglais — lu (résumé, section 1)
4. Ouyang et al., 2022 (voir sujet 7) — https://arxiv.org/abs/2203.02155 — P — anglais — lu (extrait)

**Points d'attention**
- L'article de Kalai et al. est un préprint (version 1) rédigé majoritairement par des employés d'OpenAI : statut de publication évaluée par les pairs **non vérifié**. Le billet de blog d'OpenAI (openai.com/index/why-language-models-hallucinate/) a renvoyé HTTP 403 : non lu, ne pas le citer.
- Ne pas présenter cette explication comme « la » cause démontrée ; c'est un argument théorique + socio-technique. D'autres facteurs sont discutés dans la littérature (données erronées, décodage, etc. : voir Ji et al.).
- Ne pas promettre que la recherche web (RAG) ou une température basse « supprime » les hallucinations.
- Certain·es chercheur·ses critiquent le mot « hallucination » (anthropomorphisme) ; Kalai et al. eux-mêmes notent qu'il « differs fundamentally from the human perceptual experience ».

---

## 9. Ordres de grandeur des données d'entraînement

**Formulation sûre** — Les grands modèles sont entraînés sur des quantités de texte gigantesques, comptées en tokens. GPT-2 (2019) a été entraîné sur WebText, environ 40 Go de texte issus de 8 millions de pages web. GPT-3 (2020) a vu 300 milliards de tokens pendant son entraînement. Pour Llama 3, Meta annonçait en avril 2024 plus de 15 000 milliards de tokens « issus de sources publiquement disponibles », soit sept fois plus que pour Llama 2 — dont un peu plus de 5 % seulement dans une autre langue que l'anglais. Ces chiffres sont déclarés par les entreprises et la composition exacte des données n'est généralement pas publiée.

**Faits clés**
- GPT-2 : WebText, « slightly over 8 million documents for a total of 40 GB of text », Wikipédia retirée [1].
- GPT-3 : « All models were trained for a total of 300 billion tokens » ; Common Crawl filtré : 570 Go, « roughly equivalent to 400 billion byte-pair-encoded tokens » ; certains jeux de données vus jusqu'à 3,4 fois, d'autres moins d'une fois [2].
- Llama 3 (billet Meta du 18 avril 2024) : « pretrained on over 15T tokens that were all collected from publicly available sources », 7× Llama 2, 4× plus de code ; « over 5% … high-quality non-English data that covers over 30 languages », Meta ne s'attendant pas au même niveau de performance que l'anglais [3].
- Rapport technique Llama 3 (juillet 2024) : « about 15T multilingual tokens, compared to 1.8T tokens for Llama 2 » ; le modèle phare de 405 milliards de paramètres a été pré-entraîné sur **15,6 T** tokens ; fenêtre de contexte jusqu'à 128K tokens [4].

**Sources**
1. Radford et al., « Language Models are Unsupervised Multitask Learners », OpenAI, 2019 — https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf — P — anglais — lu (section 2.1)
2. Brown et al., « Language Models are Few-Shot Learners », NeurIPS 2020 — https://arxiv.org/abs/2005.14165 — P — anglais — lu (section 2)
3. Meta AI, « Introducing Meta Llama 3: The most capable openly available LLM to date », billet de blog, 18 avril 2024 — https://ai.meta.com/blog/meta-llama-3/ — P (communication d'entreprise) — anglais — lu
4. Llama Team, AI @ Meta (A. Grattafiori et al.), « The Llama 3 Herd of Models », 2024 — https://arxiv.org/abs/2407.21783 — P — anglais — lu (sections 1 et 3)

**Points d'attention**
- « Publicly available » ne veut pas dire « libre de droits » ni « avec consentement » : ne pas reformuler en « données libres ».
- Comparer des tokens entre modèles est approximatif : les tokeniseurs diffèrent (50 257 vs 128 000 tokens de vocabulaire).
- 300 milliards = tokens vus pendant l'entraînement de GPT-3, pas la taille du corpus (certaines sources répétées, d'autres partiellement vues).
- Chiffres datés : 2019, 2020, 2024. Les modèles plus récents (2025-2026) déclarent souvent davantage, ou ne déclarent plus rien ; non vérifié dans ce lot.
- Pour « 15 000 milliards » : utiliser « plus de 15 000 milliards » (blog) ou « 15 600 milliards pour la version 405B » (rapport), pas un mélange.

---

# Dossier de vérification — lot M (histoire, acteurs, coûts)

Vérifié le 16 octobre 2026. Toutes les URL ci-dessous ont été ouvertes (HTTP 200) et leur contenu confirme le fait cité, sauf mention contraire. Types : P = primaire, R = recherche (historien·nes, chercheur·ses), Pr = presse, S = site secondaire ou institutionnel.

---

## 1. Andreï Markov et « Eugène Onéguine » (1913)

**Formulation sûre** — Le 23 janvier 1913, à Saint-Pétersbourg, le mathématicien Andreï Markov présente à l'Académie des sciences une étude statistique d'*Eugène Onéguine* de Pouchkine. Il recopie à la main les 20 000 premières lettres du roman, sans ponctuation ni espaces, et compte les voyelles et les consonnes. Il compte aussi la nature de chaque paire de lettres consécutives. Il montre qu'une lettre dépend de celle qui la précède : après une voyelle vient beaucoup plus souvent une consonne que le hasard ne le prévoit. C'est la première application à un texte de ce qu'on appelle aujourd'hui les « chaînes de Markov », un ancêtre lointain des modèles de langage.

**Faits clés**
- Échantillon : 20 000 lettres russes (le premier chapitre en entier et seize strophes du deuxième), conférence du 23 janvier 1913 à l'Académie de Saint-Pétersbourg [1].
- Décompte : 8 638 voyelles (≈ 43 %) et 11 362 consonnes. Paires : 1 104 voyelle-voyelle, 3 827 consonne-consonne, 15 069 paires mixtes [2][3].
- Si les lettres étaient indépendantes, on attendrait environ 3 731 paires voyelle-voyelle, soit plus de trois fois le nombre observé. Les lettres ne sont donc pas indépendantes : voyelles et consonnes ont tendance à alterner [2].
- Tous les calculs sont faits au crayon. Le texte est découpé en 200 blocs de 10 × 10 caractères [2][3].
- Contexte polémique : Markov voulait réfuter Pavel Nekrassov, qui tirait de la loi des grands nombres un argument en faveur du libre arbitre. Markov démontre que cette loi vaut aussi pour des événements dépendants [2].
- Il refait ensuite l'exercice sur 100 000 caractères d'un texte de Sergueï Aksakov [2]. Ce travail n'a été traduit en anglais qu'en 2006 [1][3].

**Sources**
1. A. A. Markov (trad. angl. Gloria Custance et David Link), « An Example of Statistical Investigation of the Text *Eugene Onegin* Concerning the Connection of Samples in Chains », *Science in Context* 19(4), déc. 2006, p. 591-600 (conférence du 23 janvier 1913) — https://www.cambridge.org/core/journals/science-in-context/article/abs/an-example-of-statistical-investigation-of-the-text-eugene-onegin-concerning-the-connection-of-samples-in-chains/EA1E005FA0BC4522399A4E9DA0304862 — P — anglais — **résumé et métadonnées seulement** (article payant).
2. Brian Hayes, « First Links in the Markov Chain », *American Scientist* 101(2), mars-avril 2013, p. 92 et suiv. — https://www.americanscientist.org/sites/americanscientist.org/files/201321152149545-2013-03Hayes.pdf — R/Pr (vulgarisation scientifique de référence) — anglais — lu en entier (PDF). La page HTML https://www.americanscientist.org/article/first-links-in-the-markov-chain renvoyait une erreur 503 (anti-robot) le jour de la vérification.
3. Oscar Schwartz, « Andrey Markov & Claude Shannon Counted Letters to Build the First Language-Generation Models », *IEEE Spectrum*, 11 nov. 2019 — https://spectrum.ieee.org/andrey-markov-and-claude-shannon-built-the-first-language-generation-models — Pr — anglais — lu en entier.

**Points d'attention**
- Ne pas écrire que Markov « a inventé l'IA » ni qu'il « générait du texte ». Il **analysait** un texte : il ne produisait rien.
- Markov avait étudié les chaînes dépendantes dès 1906. Onéguine (1913) en est une **application**, pas l'invention [2].
- Les chiffres : 1 104 + 3 827 + 15 069 = 20 000, alors qu'on ne compte que 19 999 paires dans 20 000 lettres. Garder les chiffres tels que publiés, sans les recalculer.
- Il existe une photo-montage « Markov devant ses tableaux » dans IEEE Spectrum : c'est une illustration, pas une archive.

---

## 2. Claude Shannon (1948) : écrire avec des statistiques

**Formulation sûre** — En 1948, dans « A Mathematical Theory of Communication », l'ingénieur Claude Shannon (Bell Labs) fabrique du « faux anglais » de plus en plus ressemblant. Il tire d'abord des lettres au hasard. Il respecte ensuite la fréquence de chaque lettre, puis celle des paires (digrammes) et des triplets (trigrammes). Il passe enfin aux mots : d'abord tirés selon leur fréquence, puis selon la probabilité qu'un mot en suive un autre. Plus le contexte pris en compte est long, plus le texte « sonne » anglais, sans rien vouloir dire. C'est le principe des modèles de langage à n-grammes.

**Faits clés**
- Six approximations : ordre zéro (lettres équiprobables), ordre 1 (fréquences des lettres), ordre 2 (digrammes), ordre 3 (trigrammes), puis approximation de mots d'ordre 1 et d'ordre 2 [1].
- L'alphabet utilisé compte 27 symboles : les 26 lettres et l'espace [1].
- Exemples publiés : « OCRO HLI RGWR NMIELWIS… » (ordre 1 sur les lettres) et « THE HEAD AND IN FRONTAL ATTACK ON AN ENGLISH WRITER THAT THE CHARACTER OF THIS POINT IS… » (ordre 2 sur les mots) [1].
- Méthode manuelle : pour les ordres supérieurs, Shannon ouvre un livre au hasard, cherche la lettre (ou le mot) précédente et recopie celle qui la suit. Il juge que l'étape suivante demanderait un travail « énorme » [1].
- Shannon nomme ces processus des « processus de Markoff » [1]. Le lien entre Markov et Shannon est développé par la presse spécialisée [2].

**Sources**
1. Claude E. Shannon, « A Mathematical Theory of Communication », *Bell System Technical Journal* 27, juillet et octobre 1948, p. 379-423 et 623-656 (réimpression corrigée) — https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf — P — anglais — lu (section 3, p. 7).
2. Oscar Schwartz, *IEEE Spectrum*, 11 nov. 2019 (voir sujet 1, source 3) — Pr — anglais — lu en entier.

**Points d'attention**
- Shannon ne cite pas directement l'article de Markov sur Onéguine. Sa note 6 renvoie à Maurice Fréchet (*Théorie des événements en chaîne*). Ne pas écrire que Shannon « s'est inspiré d'Onéguine ».
- Les exemples ont été tirés **à la main**, avec une table de nombres aléatoires et des livres, et non sur ordinateur.
- Les tables de fréquences venaient de Fletcher Pratt (*Secret and Urgent*, 1939, un livre sur la cryptographie) et de G. Dewey (1923) [1]. C'est un joli lien avec le chiffrement.

---

## 3. Alekseï Ivakhnenko et la méthode GMDH (Kyiv, 1965-1971)

**Formulation sûre** — À Kyiv, en Ukraine soviétique, l'ingénieur Oleksiï (Alekseï) Ivakhnenko et son collègue Valentin Lapa mettent au point à partir du milieu des années 1960 la « méthode de groupement des arguments » (GMDH). Ce sont des réseaux à plusieurs couches de petites fonctions polynomiales. On ajoute les couches une à une, on les entraîne sur des données, puis on élimine les unités inutiles grâce à un jeu de validation. En 1971, Ivakhnenko décrit un réseau de ce type à 8 couches. Le chercheur Jürgen Schmidhuber y voit « peut-être » les premiers systèmes d'apprentissage profond.

**Faits clés**
- Schmidhuber (2015) : les réseaux GMDH (Ivakhnenko et Lapa 1965 ; Ivakhnenko 1968, 1971) « were perhaps the first DL systems of the Feedforward Multilayer Perceptron type » [1].
- Fonctionnement : couches ajoutées progressivement et entraînées par régression, puis élagage à l'aide d'un jeu de validation. Le nombre de couches est appris selon le problème [1].
- Article de 1971 : A. G. Ivakhnenko, « Polynomial Theory of Complex Systems », *IEEE Transactions on Systems, Man, and Cybernetics* SMC-1(4), oct. 1971, p. 364-378. Schmidhuber y situe le réseau à 8 couches [1][2].
- Ivakhnenko (1913-2007), né dans la province de Poltava, dirige à partir de 1964 le département des systèmes de contrôle combinés de l'Institut de cybernétique de la RSS d'Ukraine. Il est aussi professeur à l'Institut polytechnique de Kyiv [3].
- Son équipe revendique plus de 220 thèses de candidat et 27 thèses de doctorat soutenues autour de la GMDH [4].

**Sources**
1. Jürgen Schmidhuber, « Deep learning in neural networks: An overview », *Neural Networks* 61, 2015, p. 85-117 (préprint arXiv:1404.7828, section 5.3) — https://arxiv.org/abs/1404.7828 — R — anglais — lu (section 5.3 du PDF v4).
2. A. G. Ivakhnenko, « Polynomial Theory of Complex Systems », *IEEE Trans. SMC* 1(4), 1971 — https://api.crossref.org/works/10.1109/TSMC.1971.4308320 (DOI 10.1109/TSMC.1971.4308320) — P — anglais — **métadonnées seulement** (IEEE Xplore inaccessible au robot).
3. Université polytechnique de Kyiv (KPI), « Ivakhnenko Oleksii Grygorovych. To the 100th anniversary of academician » — https://kpi.ua/en/ivakhnenko-about — S (institutionnel) — anglais — lu.
4. « GMDH history », site gmdh.net (site de la communauté GMDH) — https://gmdh.net/GMDH_his.htm — S — anglais — lu.

**Points d'attention**
- **Dates** : Schmidhuber date la GMDH de 1965 (livre d'Ivakhnenko et Lapa, *Cybernetic Predicting Devices*). gmdh.net écrit « développée depuis 1968 ». Écrire « à partir du milieu des années 1960 ».
- Ne pas dire « inventeur du deep learning ». Écrire « souvent cité comme l'un des premiers ». Le « perhaps » vient de Schmidhuber lui-même, et sa lecture de l'histoire est discutée par d'autres chercheur·ses.
- Ce sont des réseaux polynomiaux entraînés par régression, **sans rétropropagation**. Ils ne ressemblent pas aux réseaux actuels.
- Translittération : le nom ukrainien est Oleksiï Hryhorovytch Ivakhnenko (KPI écrit « Oleksii Grygorovych »). Préciser « Ukraine soviétique » et éviter « russe ».
- Valentin Lapa est co-auteur des travaux de 1965-1967 : le citer.

---

## 4. ELIZA (Weizenbaum, 1966) et l'« effet ELIZA »

**Formulation sûre** — En 1966, Joseph Weizenbaum, au MIT, publie ELIZA. Ce programme repère des mots-clés dans une phrase tapée et la renvoie reformulée, à la manière d'un psychothérapeute « rogérien ». Le programme ne comprend rien, et Weizenbaum l'explique dans son article. Pourtant, « certaines personnes ont eu beaucoup de mal à être convaincues qu'ELIZA n'est pas humain », note-t-il. On appelle aujourd'hui « effet ELIZA » cette tendance à prêter de la compréhension à une machine qui produit des phrases plausibles. Choqué, Weizenbaum devient l'un des premiers critiques de l'informatique triomphante, notamment dans *Computer Power and Human Reason* (1976).

**Faits clés**
- Article : J. Weizenbaum, « ELIZA — A Computer Program For the Study of Natural Language Communication Between Man and Machine », *Communications of the ACM* 9(1), janvier 1966, p. 36-45. Le programme tourne sur le système à temps partagé MAC du MIT [1].
- Citation de 1966 : « Some subjects have been very hard to convince that ELIZA (with its present script) is not human » et « ELIZA shows, if nothing else, how easy it is to create and maintain the illusion of understanding » [1].
- Le script psychothérapeute a été choisi parce que l'interlocuteur peut y « faire mine de ne presque rien savoir du monde réel » [1].
- L'anecdote de la secrétaire qui demande à Weizenbaum de quitter la pièce pour parler seule à ELIZA apparaît dans un article de **1967** (« Contextual understanding by computers », *CACM* 10(8), p. 474-480), puis dans le livre de 1976 [2][3].
- Livre : *Computer Power and Human Reason: From Judgment to Calculation*, W. H. Freeman, San Francisco, 1976. Thèse : il y a des tâches que les ordinateurs ne devraient pas accomplir, qu'ils en soient capables ou non [2][4].
- Le livre a suscité dès 1976-1977 des critiques, notamment de John McCarthy. Il les relativise : selon lui, les gens se laissent tromper parce qu'ils doivent conclure sur peu d'indices [5].

**Sources**
1. Joseph Weizenbaum, « ELIZA… », *CACM* 9(1), 1966, p. 36-45 — https://web.stanford.edu/class/cs124/p36-weizenabaum.pdf (copie hébergée par un cours de Stanford ; DOI 10.1145/365153.365168, page ACM bloquée au robot) — P — anglais — lu en entier.
2. Ben Tarnoff, « Weizenbaum's nightmares: how the inventor of the first chatbot turned against AI », *The Guardian*, 25 juillet 2023 — https://www.theguardian.com/technology/2023/jul/25/joseph-weizenbaum-inventor-eliza-chatbot-turned-against-artificial-intelligence-ai — Pr — anglais — lu.
3. J. Weizenbaum, « Contextual understanding by computers », *CACM* 10(8), 1967 — https://api.crossref.org/works/10.1145/363534.363545 — P — anglais — **métadonnées seulement**.
4. Notice Internet Archive, *Computer power and human reason*, W. H. Freeman, 1976 — https://archive.org/metadata/computerpowerhum0000weiz_v0i3 — P (notice) — **métadonnées seulement** (texte en prêt contrôlé, non lu).
5. DTIC ADA044713, *Three Reviews of J. Weizenbaum's Computer Power and Human Reason* (dont celle de John McCarthy, avec la réponse de Weizenbaum) — https://archive.org/details/DTIC_ADA044713 (texte : https://archive.org/download/DTIC_ADA044713/DTIC_ADA044713_djvu.txt) — P — anglais — lu en partie.

**Points d'attention**
- **Ne pas attribuer l'expression « effet ELIZA » à Weizenbaum** : IEEE Spectrum (2019) l'écrit, mais rien dans l'article de 1966 ne l'appuie. L'expression est postérieure et son auteur n'a pas été vérifié.
- La citation « delusional thinking in quite normal people » circule et viendrait du livre de 1976, mais elle **n'a pas été lue dans le texte**. Ne pas la publier sans vérification sur le livre.
- « Premier chatbot » est la formule de la presse (Guardian). Préférer « l'un des tout premiers programmes de conversation » : le mot « chatbot » est bien plus tardif.
- L'anecdote de la secrétaire : la dater de 1967 (premier récit écrit) et non de 1976.

---

## 5. Qui décide : le règlement européen sur l'IA (AI Act)

**Formulation sûre** — Le règlement (UE) 2024/1689, dit « AI Act », est la première loi générale sur l'IA adoptée par l'Union européenne. Il classe les usages selon leur niveau de risque. Il est entré en vigueur le 1er août 2024 et s'applique par étapes. Depuis le 2 février 2025, certaines pratiques sont interdites, comme la notation sociale ou la reconnaissance des émotions au travail et à l'école. Depuis le 2 août 2025, des règles s'appliquent aux modèles d'IA « à usage général » comme ceux des grands chatbots. La règle générale s'applique depuis le 2 août 2026. En 2026, un règlement de « simplification » (dit « Omnibus IA ») a repoussé les règles sur les systèmes « à haut risque » à décembre 2027 et août 2028.

**Faits clés**
- Entrée en vigueur le 1er août 2024 ; application générale le 2 août 2026 [1][2].
- Article 113 consolidé : chapitres I et II (définitions, culture de l'IA, pratiques interdites) applicables depuis le **2 février 2025**. Les nouvelles interdictions ajoutées par l'Omnibus s'appliquent à partir du **2 décembre 2026** [2].
- Gouvernance et obligations des modèles d'IA à usage général (chapitre V) applicables depuis le **2 août 2025** [1][2].
- Haut risque : **2 décembre 2027** pour les usages de l'annexe III (biométrie, éducation, emploi, migration, justice…). **2 août 2028** pour l'IA intégrée à des produits réglementés de l'annexe I (jouets, ascenseurs…) [1][2].
- Omnibus IA : proposé le 19 novembre 2025, accord politique le 7 mai 2026, entré en vigueur le 27 juillet 2026 [1]. C'est le règlement (UE) 2026/1744 du 8 juillet 2026, publié au JO le 24 juillet 2026 [3]. Il ajoute une 9e interdiction : les systèmes générant des contenus sexuels non consentis ou pédocriminels, comme les applis de « dénudage » [1].
- Transparence (article 50) : chatbots signalés comme tels, contenus générés identifiables, « deepfakes » étiquetés. La Commission annonce ces règles pour août 2026. Pour le marquage des contenus générés, un délai court jusqu'au 2 décembre 2026 pour les systèmes déjà sur le marché [1][3].

**Sources**
1. Commission européenne, « AI Act — Shaping Europe's digital future » (page « Regulatory framework for AI ») — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai — P (institutionnel) — anglais — lu (consulté le 16/10/2026).
2. Commission européenne, AI Act Service Desk, « Article 113 : Entrée en vigueur et application » (version consolidée, modifications signalées) — https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-113 (version anglaise : https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113) — P — français/anglais — lu.
3. Albert Agustinoy et Mireia Sala (Cuatrecasas), « Digital Omnibus on AI has been published », 24 juillet 2026 — https://www.cuatrecasas.com/en/spain/intellectual-property/art/digital-omnibus-ai-has-been-published — S (cabinet d'avocats) — anglais — lu.
- Texte officiel EUR-Lex (non lu : protection anti-robot, réponse HTTP 202 vide) : https://eur-lex.europa.eu/eli/reg/2024/1689/oj et, pour l'Omnibus, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744. **À ouvrir à la main** pour vérifier la référence 2026/1744 et la date du 8 juillet 2026.

**Points d'attention**
- **Les dates de 2024 ne sont plus à jour** : le calendrier initial (haut risque au 2 août 2026 et 2027) a été **modifié par l'Omnibus IA** en 2026. Ne pas recopier les frises de 2024.
- Interdictions : 8 pratiques depuis février 2025 et une 9e à partir de décembre 2026 [1]. Ne pas écrire « l'IA de reconnaissance faciale est interdite ». L'interdiction vise l'identification biométrique à distance **en temps réel**, par les forces de l'ordre, dans l'espace public, et elle comporte des exceptions.
- « Première loi sur l'IA au monde » est une formule de communication. Préférer « premier cadre général de cette ampleur adopté par l'UE ». La Chine avait adopté dès 2022-2023 des règles sectorielles (algorithmes de recommandation, IA générative), non vérifiées dans ce lot.
- Présenter les deux camps : industrie et États favorables à la simplification ; associations de défense des droits critiques des reports. Sources à ajouter si on développe.

---

## 6. « Open source » ou « poids ouverts » ?

**Formulation sûre** — Un modèle « à poids ouverts » publie ses paramètres, que l'on peut télécharger et faire tourner chez soi. Cela ne suffit pas, selon l'Open Source Initiative (OSI), pour parler d'« open source ». Sa définition de l'IA open source (OSAID 1.0, 28 octobre 2024) exige les quatre libertés : utiliser, étudier, modifier, partager. Elle exige aussi le code d'entraînement et une description suffisamment détaillée des données d'entraînement. Meta présente ses modèles Llama comme « open source », mais l'OSI conteste ce terme à cause des restrictions de leur licence. D'autres acteurs publient des poids sous des licences libres classiques : Mistral AI (France) pour Mistral 7B sous Apache 2.0 en 2023, DeepSeek (Chine) pour R1 sous licence MIT en janvier 2025.

**Faits clés**
- OSAID 1.0 : annoncée le 28 octobre 2024 à la conférence All Things Open (Raleigh), après un an de processus de conception [1][2].
- Exigences de l'OSAID : les quatre libertés, plus l'accès à la « forme préférée pour modifier » le système : « Data Information » (description complète des données, provenance, sélection, étiquetage), code complet et paramètres, sous conditions approuvées par l'OSI [1].
- Llama : l'OSI juge dès le 20 juillet 2023 que la licence de Llama 2 n'est pas open source, car elle discrimine des personnes et des domaines d'usage (critères 5 et 6 de l'Open Source Definition). Elle le redit pour Llama 3.x le 18 février 2025, en relevant notamment l'exclusion de personnes dans l'UE [3][4].
- La licence de Llama 3.1 (sortie le 23 juillet 2024) oblige les services de plus de 700 millions d'utilisateur·ices actif·ves mensuel·les à demander une licence à Meta, « à sa seule discrétion » [5].
- Mistral 7B : annoncé le 27 septembre 2023, « sous licence Apache 2.0 », utilisable « sans restrictions » [6].
- DeepSeek-R1 : publié le 20 janvier 2025. Le code et les poids sont sous licence MIT, avec usage commercial et distillation autorisés. Les modèles « distillés » héritent toutefois des licences de leurs bases, Qwen 2.5 (Apache 2.0) ou Llama [7][8].

**Sources**
1. Open Source Initiative, « The Open Source AI Definition – 1.0 » — https://opensource.org/ai/open-source-ai-definition — P — anglais — lu.
2. OSI, « The Open Source Initiative Announces the Release of the Industry's First Open Source AI Definition », 28 oct. 2024 — https://opensource.org/blog/the-open-source-initiative-announces-the-release-of-the-industrys-first-open-source-ai-definition — P — anglais — lu.
3. OSI (Stefano Maffulli), « Meta's LLaMa license is not Open Source », 20 juillet 2023 — https://opensource.org/blog/metas-llama-2-license-is-not-open-source — P — anglais — lu.
4. OSI, « Meta's LLaMa license is still not Open Source », 18 février 2025 — https://opensource.org/blog/metas-llama-license-is-still-not-open-source — P — anglais — lu.
5. Meta, « Llama 3.1 Community License Agreement » (dépôt officiel meta-llama/llama-models) — https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/LICENSE — P — anglais — lu.
6. Mistral AI, « Announcing Mistral 7B », 27 sept. 2023 — https://mistral.ai/news/announcing-mistral-7b — P — anglais — lu.
7. DeepSeek, « DeepSeek-R1 Release », 20 janv. 2025 — https://api-docs.deepseek.com/news/news250120 — P — anglais — lu.
8. DeepSeek, README et LICENSE du dépôt DeepSeek-R1 — https://raw.githubusercontent.com/deepseek-ai/DeepSeek-R1/main/README.md et https://raw.githubusercontent.com/deepseek-ai/DeepSeek-R1/main/LICENSE — P — anglais — lu.

**Points d'attention**
- Une licence libre sur les poids (Apache 2.0, MIT) ne rend **pas** un modèle « open source » au sens de l'OSAID si les données d'entraînement ne sont pas décrites. Le dépôt de R1 publie code et poids, mais nous n'avons pas trouvé de description complète des données. Ne pas qualifier R1 ni Mistral 7B d'« open source au sens de l'OSI » : l'OSI n'a pas publié d'évaluation de ces modèles que nous ayons lue.
- Mistral AI ne publie pas tous ses modèles sous Apache 2.0 : certains sont sous licences propriétaires ou de recherche. Toujours nommer le modèle précis.
- L'OSAID elle-même est **contestée**, jugée trop laxiste sur les données par une partie de la communauté du logiciel libre, trop exigeante par d'autres. Si on en parle, le présenter comme un débat, sources à ajouter.
- Sans jugement de valeur : la licence de Meta est gratuite pour la plupart des usages. Le désaccord porte sur le **mot** « open source ».

---

## 7. Énergie et eau

**Formulation sûre** — Selon l'Agence internationale de l'énergie (AIE), les centres de données ont consommé environ 415 TWh d'électricité en 2024, soit environ 1,5 % de l'électricité mondiale. Les États-Unis en représentent 45 %, la Chine 25 % et l'Europe 15 %. Dans son scénario de référence, l'AIE prévoit plus qu'un doublement, à environ 945 TWh en 2030, un peu plus que la consommation actuelle du Japon. L'IA est le premier moteur de cette hausse. En 2026, l'AIE indique que la demande a crû de près de 20 % en 2025, et que sa trajectoire pour 2030 reste proche de celle de 2025. L'eau est un autre coût, moins visible : des chercheurs de l'université de Californie estiment que l'entraînement de GPT-3 a pu évaporer directement environ 700 000 litres d'eau douce.

**Faits clés**
- 2024 : ≈ 415 TWh, ≈ 1,5 % de la consommation mondiale d'électricité. Croissance d'environ 12 % par an depuis 2017 [1].
- Répartition 2024 : États-Unis 45 %, Chine 25 %, Europe 15 % [1].
- Projection (scénario de référence) : ≈ 945 TWh en 2030, ≈ 1 200 TWh en 2035. Aux États-Unis, les centres de données représentent près de la moitié de la croissance de la demande d'électricité d'ici 2030 [1].
- À l'échelle mondiale, les centres de données ne pèsent qu'environ un dixième de la croissance de la demande d'électricité d'ici 2030 : moins que les moteurs industriels, la climatisation ou les véhicules électriques [1].
- Mise à jour AIE de juin 2026 : demande des centres de données en hausse de près de 20 % en 2025. Les goulets d'étranglement (turbines, transformateurs, raccordements, mémoire) maintiennent la trajectoire 2030 proche du rapport de 2025 [2].
- Eau : 700 000 litres évaporés pour entraîner GPT-3 dans les centres de données de Microsoft aux États-Unis (estimation). Prélèvements d'eau de l'IA mondiale projetés à 4,2-6,6 milliards de m³ en 2027 [3].

**Sources**
1. AIE, *Energy and AI* (avril 2025), « Executive summary » — https://www.iea.org/reports/energy-and-ai/executive-summary — P — anglais — **lu via la copie de la Wayback Machine** (https://web.archive.org/web/20251229195231/https://www.iea.org/reports/energy-and-ai/executive-summary), car le site de l'AIE renvoie une erreur 403 (Cloudflare) au robot. Licence CC BY 4.0, citation : IEA (2025), *Energy and AI*, IEA, Paris.
2. AIE (Natalie Kauf), « Key questions on energy and AI », présentation du 11 juin 2026 (Asia Clean Energy Forum, BAD) — https://asiacleanenergyforum.adb.org/wp-content/uploads/2026/06/Key-questions-on-energy-and-AI.pdf — P (diapositives AIE) — anglais — lu. Le rapport AIE d'avril 2026 portant ce titre n'a **pas** été lu.
3. Pengfei Li, Jianyi Yang, Mohammad A. Islam, Shaolei Ren, « Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models », arXiv:2304.03271 (v1 avril 2023, v5 mars 2025 ; accepté par *Communications of the ACM*) — https://arxiv.org/abs/2304.03271 — R — anglais — résumé lu.

**Points d'attention**
- 415 TWh concerne **tous** les centres de données, pas seulement l'IA. Ne pas écrire « l'IA consomme 1,5 % de l'électricité mondiale ».
- 945 TWh est une **projection** du scénario de référence. L'AIE publie aussi des scénarios haut et bas : toujours écrire « selon le scénario de référence de l'AIE ».
- Eau : distinguer **prélèvement** (withdrawal) et **consommation** (eau évaporée). Les 700 000 litres sont une estimation de chercheurs, non une donnée publiée par Microsoft ou OpenAI. Le chiffre « une bouteille d'eau pour 20 à 50 questions », qui circule, vient d'une version de ce préprint : ne pas l'utiliser sans relire la version publiée.
- L'impact est surtout **local** : grappes de centres de données, réseaux saturés. L'AIE le souligne [1].

---

## 8. Travailleur·ses de l'annotation et de la modération

**Formulation sûre** — Derrière l'IA, il y a des humains qui étiquettent des données, notent les réponses et filtrent les contenus violents, souvent via des sous-traitants et pour de faibles salaires. L'anthropologue Mary L. Gray et l'informaticien Siddharth Suri ont appelé ce travail invisible le « travail fantôme » (*Ghost Work*, 2019). La sociologue Milagros Miceli a étudié ce travail en Argentine et au Venezuela, puis lancé avec l'institut DAIR le *Data Workers' Inquiry*, une recherche menée par les travailleur·ses elles et eux-mêmes. Au Kenya, le 1er mai 2023, plus de 150 modérateur·ices travaillant pour des sous-traitants de Meta, TikTok et OpenAI ont voté pour créer un syndicat. En juillet 2023, quatre ancien·nes modérateur·ices du contrat OpenAI-Sama ont déposé une pétition au Parlement kényan pour demander une enquête.

**Faits clés**
- *Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass*, Mary L. Gray et Siddharth Suri, Houghton Mifflin Harcourt, 2019. Le livre repose sur une ethnographie et des enquêtes par questionnaire [1][2].
- Miceli et Posada, « The Data-Production Dispositif », *Proc. ACM HCI* 6 (CSCW2), 2022 : étude de trois plateformes au Venezuela et d'un sous-traitant (BPO) en Argentine [3].
- *Data Workers' Inquiry* : recherche participative coordonnée par Milagros Miceli (DAIR, Weizenbaum Institute, TU Berlin), avec Adio Dinika, Krystal Kauffman et d'autres. 19 travailleur·ses du Venezuela, du Kenya, de Syrie, du Brésil, de France et d'Allemagne enquêtent sur leurs propres lieux de travail [4].
- 1er mai 2023, Nairobi : plus de 150 travailleur·ses de sous-traitants de Meta, Bytedance et OpenAI votent pour enregistrer le « Content Moderators Union ». Certain·es gagnaient à peine 1,50 $ de l'heure [5].
- Juillet 2023 : pétition de quatre ancien·nes salarié·es de Sama (contrat OpenAI 2021-2022) à l'Assemblée nationale du Kenya. Elle demande une enquête et la reconnaissance de l'exposition à des contenus nocifs comme risque professionnel [6][7].

**Sources**
1. Site officiel du livre *Ghost Work* — https://ghostwork.info/ — S — anglais — lu (page d'accueil et page auteurs).
2. Notice Open Library, ISBN 9781328566249 (Houghton Mifflin Harcourt, 2019) — https://openlibrary.org/isbn/9781328566249.json — métadonnées — **métadonnées seulement**. Attention : cette notice donne un autre sous-titre (« How Amazon, Google, and Uber Are Creating… »), sans doute celui d'une épreuve. Retenir le sous-titre du site officiel.
3. Milagros Miceli et Julian Posada, « The Data-Production Dispositif », *Proc. ACM HCI* 6(CSCW2), 2022, DOI 10.1145/3555561 — https://arxiv.org/abs/2205.11963 — R — anglais — résumé lu.
4. *Data Workers' Inquiry* (DAIR, Weizenbaum Institute, TU Berlin) — https://data-workers.org/ et https://data-workers.org/about/ — R/S — anglais — lu.
5. Billy Perrigo, « 150 African Workers for ChatGPT, TikTok and Facebook Vote to Unionize at Landmark Nairobi Meeting », *TIME*, 1er mai 2023 — https://time.com/6275995/chatgpt-facebook-african-workers-union/ — Pr — anglais — lu.
6. Niamh Rowe, « "It's destroyed me completely": Kenyan moderators decry toll of training of AI models », *The Guardian*, 2 août 2023 — https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai — Pr — anglais — lu.
7. *Citizen Digital* (Kenya), « Kenyan moderators behind ChatGPT want parliament to probe OpenAI, Sama over exploitation », juillet 2023 — https://citizen.digital/article/kenyan-moderators-behind-chatgpt-want-parliament-to-probe-openai-sama-over-exploitation-n323387 — Pr (presse kényane) — anglais — lu.

**Points d'attention**
- Le syndicat : TIME rapporte un **vote pour enregistrer** le syndicat. Son enregistrement légal effectif n'a pas été vérifié. Écrire « ont voté pour créer ».
- Les conditions décrites sont des **allégations** des travailleur·ses. Donner la parole aux entreprises : OpenAI a reconnu des conditions de travail « difficiles » auprès d'ITWeb Africa (lu en résumé seulement). Sama conteste une partie des accusations : à sourcer si on développe.
- Les noms des pétitionnaires sont publics, mais ne pas reprendre les détails de vie privée rapportés par la presse (famille, santé).
- Le dossier existant (TIME 2023, Kenya, moins de 2 $/h) reste la source principale sur le contrat Sama-OpenAI.

---

## 9. Femmes et personnes oubliées de l'IA moderne

**Formulation sûre (une par personne retenue)**

- **Margaret Masterman (1910-1986)**, linguiste et philosophe britannique, ancienne élève de Wittgenstein, fonde à Cambridge le Cambridge Language Research Unit, l'un des tout premiers centres de linguistique computationnelle. Avec son équipe, elle conçoit pour la traduction automatique les premiers systèmes appelés « réseaux sémantiques », qui représentent le sens par des concepts reliés entre eux. [1][2]
- **Kathleen McKeown**, professeure à l'université Columbia, est une pionnière de la génération automatique de texte et du résumé automatique. Elle est directrice fondatrice du Data Science Institute de Columbia. [3]
- **Daphne Koller**, professeure à Stanford, a fait progresser les réseaux bayésiens, qui permettent à une machine de raisonner avec des informations incertaines, en créant notamment les « modèles relationnels probabilistes ». Elle a reçu pour cela une bourse MacArthur en 2004. Elle a cofondé Coursera avec Andrew Ng en 2012. [4][5]
- **Cynthia Breazeal**, professeure au MIT Media Lab, est une pionnière de la robotique sociale et de l'interaction humain-robot. Son livre *Designing Sociable Robots* est considéré comme fondateur du domaine. Elle mène aujourd'hui des programmes d'éducation à l'IA pour les élèves. [6]
- **Niki Parmar** est l'une des huit co-auteur·ices de « Attention Is All You Need » (2017), l'article qui a introduit le Transformer, architecture de ChatGPT et de ses concurrents. Selon la note de l'article, elle a conçu, implémenté, réglé et évalué « d'innombrables variantes du modèle ». [7]
- **Latanya Sweeney**, informaticienne alors professeure à Harvard, montre en 2013 qu'une recherche Google sur un prénom associé aux personnes noires affichait bien plus souvent des publicités suggérant un casier judiciaire. Elle a fondé le Data Privacy Lab et le Public Interest Tech Lab de Harvard. [8][9]

**Faits clés**
- Masterman : élève du cours de Wittgenstein (1933-1934) ; fonde le CLRU ; *Language, Cohesion and Form* (CUP, 2005), recueil édité par Yorick Wilks [1]. Le CLRU est lié à Karen Spärck Jones (déjà au dossier), qui commente un des articles [1].
- Réseaux sémantiques : selon John Sowa, « Masterman et ses collègues du CLRU ont conçu les premiers systèmes appelés réseaux sémantiques ». Le premier usage publié du terme serait de Richard Richens (CLRU) en 1956. Masterman (1961) propose une liste de 100 types de concepts primitifs organisés en treillis [2].
- Koller : travaux sur les réseaux bayésiens hiérarchiques et les « probabilistic relational models » ; bourse MacArthur 2004 [4]. Coursera lancé en 2012 par Andrew Ng et Daphne Koller [5].
- Parmar : note de contribution ajoutée dans les versions ultérieures de l'article (v7). Ordre des auteur·ices aléatoire, « contribution égale » [7].
- Sweeney : 2 184 noms testés. Les prénoms donnés surtout à des bébés noirs (DeShawn, Darnell, Jermaine…) déclenchaient des publicités évoquant une arrestation dans 81 à 86 % des recherches sur un site, et 92 à 95 % sur l'autre [8].

**Sources**
1. John F. Sowa, compte rendu de *Language, Cohesion and Form* (M. Masterman, éd. Y. Wilks, CUP 2005), *Computational Linguistics* 32(4), 2006 — https://aclanthology.org/J06-4005.pdf — R — anglais — lu (p. 1). Version longue : https://jfsowa.com/pubs/mmb_rev.htm — lu.
2. John F. Sowa, « Semantic Networks » (article d'encyclopédie, version en ligne) — https://www.jfsowa.com/pubs/semnet.htm — R — anglais — lu (passage sur le CLRU).
3. Kathleen McKeown, page personnelle, Columbia University — https://www.cs.columbia.edu/~kathy/ — S (institutionnel) — anglais — lu.
4. MacArthur Foundation, « Daphne Koller, Class of 2004 » — https://www.macfound.org/fellows/class-of-2004/daphne-koller — P/S — anglais — lu.
5. Coursera, « About » — https://www.coursera.org/about/ — P (entreprise) — anglais — lu.
6. MIT Media Lab, « Cynthia Breazeal — Overview » — https://www.media.mit.edu/people/cynthiab/overview/ — S (institutionnel) — anglais — lu.
7. A. Vaswani, N. Shazeer, N. Parmar et al., « Attention Is All You Need », arXiv:1706.03762 (v7) — https://arxiv.org/pdf/1706.03762v7 — P — anglais — lu (p. 1, note de contribution).
8. Latanya Sweeney, « Discrimination in Online Ad Delivery », arXiv:1301.6822 (janv. 2013) ; *Communications of the ACM* 56(5), 2013, p. 44-54 — https://arxiv.org/abs/1301.6822 — P — anglais — résumé lu.
9. Site de Latanya Sweeney — https://latanyasweeney.org/ — S (autobiographique) — anglais — lu.

**Points d'attention**
- **Masterman, dates du CLRU** : selon les sources, la fondation tombe en 1954, 1955 ou « à la fin des années 1950 » (Sowa 2006). Écrire « au milieu des années 1950 ».
- **Masterman, « réseau sémantique »** : Sowa se contredit d'un texte à l'autre. Le compte rendu de 2006 attribue le premier usage du terme à Masterman (1961), l'article « Semantic Networks » le donne à Richens (1956). Écrire « son équipe a conçu les premiers systèmes appelés réseaux sémantiques », sans « elle a inventé ».
- **Parmar** : ne pas écrire « la seule femme parmi les auteur·ices », faute de source. Ne pas l'isoler non plus : les huit sont crédité·es à égalité.
- **McKeown** : des affirmations du type « première femme à… » circulent, mais n'ont **pas** été vérifiées. Ne pas les publier.
- **Sweeney** : l'affirmation courante « première femme noire docteure en informatique du MIT » n'a **pas** été vérifiée ici, et c'est un mythe potentiel de type « premier·e ». Ne pas la publier sans deux sources.
- **Koller** : l'affirmation est sourcée par Coursera lui-même. Ses rôles actuels (insitro) n'ont pas été vérifiés : la page insitro a renvoyé une erreur 404.
- **Breazeal** : le robot Kismet (fin des années 1990) n'est pas mentionné sur la page lue. À sourcer à part si on veut le citer.

---

## À vérifier plus tard

### Mécanismes

- **Gage 1994** (« A New Algorithm for Data Compression », *C Users Journal* 12(2):23-38) : texte original non trouvé/lu ; référence connue uniquement via Sennrich et al. 2016 et Jurafsky & Martin.
- **Werbos 1974** (thèse de Harvard) : non lue ; son contenu (rétropropagation appliquée aux réseaux de neurones ou non) est **contesté** (Schmidhuber dit non). Werbos 1982 et la position de Werbos lui-même : non lues.
- **Linnainmaa 1970** (mémoire de master en finnois) : connu via Griewank 2012 et Schmidhuber ; article *BIT* 1976 : métadonnées seulement.
- **Rosenblatt 1958** et **Rumelhart et al. 1986** : métadonnées / résumé seulement (paywall) ; **Caliskan et al. 2017** : page *Science* bloquée (403), lu le résumé du préprint arXiv.
- **Ji et al. 2023** : version ACM bloquée (403) ; lu la version arXiv (février 2022, dont le texte peut différer légèrement de la version publiée).
- **Billet de blog OpenAI « Why language models hallucinate »** (septembre 2025) : HTTP 403, non lu ; statut d'évaluation par les pairs de Kalai et al. 2025 inconnu.
- **Tokenisation du français avec les tokeniseurs récents** (o200k de GPT-4o, Llama 3, etc.) : aucune mesure publiée comparable à Petrov et al. trouvée ; l'écart français/anglais actuel n'est pas chiffré ici. La règle « 1 token ≈ 4 caractères / ¾ de mot » n'a pas été vérifiée.
- **Nombre de paramètres et de tokens de modèles postérieurs à 2024** : non vérifié.
- **Pages Wikipédia en français** (Transformeur, Rétropropagation du gradient, Word2vec, Hallucination (IA), Byte pair encoding, Perceptron) pour « pour aller plus loin » : l'API a renvoyé 429 (trop de requêtes) ; titres et labels non vérifiés.
- **Mythes connexes non vérifiés** : « Mark I Perceptron » et déclarations de presse de 1958 sur le perceptron ; rôle d'Amari, Tsypkin, Galushkin, Ostrowski, Kelley (cités seulement via Schmidhuber/Griewank).
- Dépôt GitHub openai/gpt-2 : HTTP 403 (non consulté) ; la fiche Hugging Face de GPT-2 répond mais son contenu n'a pas été exploité.

### Histoire, acteurs et coûts

- Texte intégral de l'article de Markov (1913/2006) : seuls le résumé et les métadonnées de *Science in Context* ont été lus. Les chiffres viennent de Hayes (2013), qui a lu l'original.
- Texte du livre *Computer Power and Human Reason* (1976) : non lu (prêt contrôlé). Notamment la citation « powerful delusional thinking in quite normal people » et la version de 1976 de l'anecdote de la secrétaire.
- Origine de l'expression « effet ELIZA » : non vérifiée. Ne pas l'attribuer à Weizenbaum.
- Article de 1967 de Weizenbaum (« Contextual understanding by computers ») : métadonnées seulement. L'anecdote de la secrétaire y est située d'après le Guardian.
- Ivakhnenko et Lapa, *Cybernetic Predicting Devices* (1965), et l'article de 1971 : non lus, métadonnées seulement. Le réseau à 8 couches est rapporté par Schmidhuber.
- Texte officiel EUR-Lex de l'AI Act et du règlement Omnibus (UE) 2026/1744 : non lu, à cause de la protection anti-robot. Dates prises sur les pages de la Commission (digital-strategy et AI Act Service Desk). Référence 2026/1744 et date de publication (24 juillet 2026) prises chez un cabinet d'avocats et dans le lien EUR-Lex « OJ:L_202601744 » de la page de la Commission.
- Rapport complet de l'AIE *Energy and AI* (2025) et rapport *Key Questions on Energy and AI* (avril 2026) : non lus. Seuls le résumé exécutif de 2025 (via Wayback) et la présentation de juin 2026 ont été lus. La part exacte de l'IA dans la consommation des centres de données n'a pas été vérifiée.
- Version publiée dans *CACM* de « Making AI Less Thirsty » : non lue, seul le résumé arXiv v5 l'a été.
- Enregistrement légal effectif du Content Moderators Union au Kenya, et suites données à la pétition de 2023 : non vérifiés.
- Réponse d'OpenAI à la pétition (ITWeb Africa) : vue en extrait de recherche seulement.
- Débats et critiques de l'OSAID 1.0, et évaluation éventuelle par l'OSI de Mistral ou DeepSeek : non vérifiés.
- Mentions de type « premier·e » pour Sweeney, McKeown et Parmar : non vérifiées et volontairement écartées.
