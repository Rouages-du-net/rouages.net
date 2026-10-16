# Sources — Module « Les IA qui recommandent »

Dossier de sources du module `/modules/ia-recommander/`, établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 16 octobre 2026. Les procédures européennes
  (§ 7) et les lois françaises sont datées de ce jour : à revérifier
  régulièrement.
- Le niveau de lecture de chaque source est indiqué. science.org, pnas.org,
  dl.acm.org, wsj.com, hhs.gov et legifrance.gouv.fr étaient inaccessibles :
  résumés lus via Europe PMC, métadonnées via Crossref, ou copie ouverte
  (signalée).
- Aucune page Wikipédia n'est utilisée comme source.
- Écarté de la page : le chiffre « 70 % du temps YouTube vient des
  recommandations » (non vérifié), le lien Ringo → Firefly (aucune source
  primaire), la formule « Tapestry a inventé le filtrage collaboratif ».
---

## 1. Histoire du filtrage collaboratif

### Formulation sûre
Au début des années 1990, des équipes ont eu l'idée de filtrer l'information avec l'avis des autres, et plus seulement avec le contenu. Chez Xerox PARC, le système Tapestry (1992) laisse chacun·e annoter les messages qu'il ou elle lit, et les filtres des autres utilisent ces annotations. GroupLens (1994) prédit la note qu'on donnerait à un message Usenet à partir des notes de personnes aux goûts proches. Ringo (MIT Media Lab, Upendra Shardanand et Pattie Maes, 1995) fait la même chose pour la musique. En 2003, Amazon décrit sa variante « article à article » : on compare les produits entre eux, pas les client·es.

### Faits clés
- Tapestry, définition : « Collaborative filtering simply means that people collaborate to help each other perform filtering by recording their reactions to documents that they read » [1]. Le rapport cite aussi le filtrage par contenu (« content-based filtering ») déjà disponible dans les logiciels de courrier [1].
- Rapport technique Xerox PARC CSL-92-10, septembre 1992 [1]. Version revue : *Communications of the ACM*, vol. 35, n° 12, déc. 1992, p. 61-70 [2].
- GroupLens : filtrage collaboratif des *netnews* (Usenet). Des serveurs de notes, les « Better Bit Bureaus », prédisent des scores. Principe : les personnes qui étaient d'accord par le passé le seront probablement encore. Les notes peuvent être données sous pseudonyme [3]. Auteurs : Resnick et Suchak (MIT Center for Coordination Science), Iacovou, Bergstrom et Riedl (Université du Minnesota). Actes de CSCW '94, p. 175-186 [3][4].
- Ringo : « personalized recommendations for music albums and artists » ; quatre algorithmes comparés ; « more than 2000 people » l'ont utilisé [5]. « Ringo became available to the Internet public July 1, 1994 » ; on s'en servait d'abord **par e-mail** [5]. L'article oppose explicitement ce « social information filtering » au « content-based filtering » [5]. Publié à CHI '95, p. 210-217 [6].
- Amazon (Linden, Smith, York, *IEEE Internet Computing*, janv.-févr. 2003, vol. 7, n° 1, p. 76-80) : « Rather than matching the user to similar customers, item-to-item collaborative filtering matches each of the user's purchased and rated items to similar items » [7][8]. L'article cite le brevet US 6 266 649 (2001) [7].

### Sources
1. Goldberg D., Nichols D., Oki B., Terry D., « Using Collaborative Filtering to Weave an Information Tapestry », Xerox PARC CSL-92-10, sept. 1992 — https://ftp.mirrorservice.org/sites/www.bitsavers.org/pdf/xerox/parc/techReports/CSL-92-10_Using_Collaborative_Filtering_to_Weave_an_Information_Tapestry.pdf — P, EN, lu partiellement (introduction, architecture).
2. Crossref, métadonnées DOI 10.1145/138859.138867 (*CACM* 35(12)) — https://api.crossref.org/works/10.1145/138859.138867 — P (métadonnées), EN, métadonnées seulement.
3. Resnick P. et al., « GroupLens: An Open Architecture for Collaborative Filtering of Netnews », CSCW '94 (version HTML sur la page de l'auteur) — https://presnick.people.si.umich.edu/papers/cscw94/GroupLens.htm — P, EN, lu partiellement (résumé, vue d'ensemble).
4. Crossref, DOI 10.1145/192844.192905 — https://api.crossref.org/works/10.1145/192844.192905 — P, EN, métadonnées seulement.
5. Shardanand U., Maes P., « Social Information Filtering: Algorithms for Automating "Word of Mouth" », CHI '95 (copie de cours) — https://www.stat.cmu.edu/~cshalizi/dm/19/readings/shardanand-and-maes-1995.pdf — P, EN, lu partiellement.
6. Crossref, DOI 10.1145/223904.223931 — https://api.crossref.org/works/10.1145/223904.223931 — P, EN, métadonnées seulement.
7. Linden G., Smith B., York J., « Amazon.com Recommendations: Item-to-Item Collaborative Filtering », *IEEE Internet Computing*, 2003 — https://www.cs.umd.edu/~samir/498/Amazon-Recommendations.pdf — P, EN, lu partiellement.
8. Crossref, DOI 10.1109/MIC.2003.1167344 — https://api.crossref.org/works/10.1109/MIC.2003.1167344 — P, EN, métadonnées seulement.

### Points d'attention
- **Pas de « premier ».** On lit souvent que Tapestry a « inventé » le terme *collaborative filtering*. Je n'ai pas trouvé deux sources indépendantes pour l'affirmer : écrire « l'un des premiers systèmes décrits sous ce nom ». Le communiqué de l'ACM (2011) qui dirait que GroupLens « launched the field of recommender systems in 1994 » n'a été lu qu'en résumé de recherche (page bloquée en 403) : ne pas le citer mot pour mot.
- Tapestry filtre les messages d'une **petite équipe**, avec des annotations explicites : on est loin d'un calcul de similarité statistique. Le calcul automatique de « voisins de goût » arrive avec GroupLens et Ringo.
- On lit souvent que Ringo a donné naissance à l'entreprise Firefly (voir § 10). Je n'ai trouvé aucune source primaire pour ce lien : ne pas l'écrire.
- Brian Oki est affilié à Teknekron dans la version *CACM* d'après un résumé de recherche (non vérifié) ; le rapport PARC liste les quatre auteurs sans détailler leurs affiliations.

---

## 2. Le prix Netflix (2006-2009)

### Formulation sûre
En 2006, Netflix publie plus de 100 millions de notes de films et promet 1 million de dollars à l'équipe qui battra de 10 % la précision de son propre algorithme. L'équipe BellKor's Pragmatic Chaos gagne le 21 septembre 2009, en grande partie grâce à la factorisation de matrices : chaque film et chaque personne y sont résumés par quelques « facteurs cachés ». Mais deux chercheurs montrent que ces données « anonymes » permettent de retrouver des abonné·es. Netflix renonce en 2010 à un second concours, après des échanges avec la FTC et une action en justice.

### Faits clés
- Règles : jeu d'entraînement de « more than 100 million ratings spanning about 500,000 anonymous customers » et plus de 17 000 films notés de 1 à 5 étoiles. La première équipe qui améliore le RMSE (erreur quadratique moyenne) de Netflix de 10 % « wins a $1 million prize » ; sinon, Progress Prize de 50 000 $ chaque année [1].
- BellKor gagne le Progress Prize 2007 (8,43 %), puis celui de 2008 avec Big Chaos (9,46 %). « More than 48,000 teams from 182 different countries have downloaded the data » [1].
- Grand prix : remis le 21 septembre 2009 à New York à BellKor's Pragmatic Chaos (Bob Bell, Martin Chabbert, Michael Jahrer, Yehuda Koren, Martin Piotte, Andreas Töscher, Chris Volinsky) ; 10,06 % d'amélioration, RMSE 0,8567 [2]. Le rapport de Koren décrit sa part de la solution, qui mélange plus de 100 prédicteurs [3][1].
- Factorisation : « matrix factorization models are superior to classic nearest-neighbor techniques » [1] (Koren, Bell, Volinsky, *Computer*, vol. 42, n° 8, août 2009, p. 30-37 [4]).
- Ré-identification : avec 8 notes (dont 2 peuvent être fausses) et des dates à 14 jours près, « 99% of records [can] be uniquely identified » ; avec 2 notes et des dates à 3 jours près, 68 % [5]. En croisant avec des critiques publiées sur IMDb, les auteurs ont identifié des abonné·es et « uncovering their apparent political preferences » [5]. Article publié à l'IEEE Symposium on Security and Privacy, mai 2008, p. 111-125 [6].
- FTC (lettre de clôture du 12 mars 2010) : Netflix avait annoncé le 6 août 2009 un « Prize 2 » avec des données démographiques. Le personnel de la FTC écrit le 3 novembre 2009 pour signaler « the risk of re-identification » ; Netflix « intended to suspend plans for Prize 2 » [7].

### Sources
1. Koren Y., Bell R., Volinsky C., « Matrix Factorization Techniques for Recommender Systems », *IEEE Computer*, 2009 (copie) — https://datajobs.com/data-science-repo/Recommender-Systems-%5BNetflix%5D.pdf — P, EN, lu partiellement.
2. NISS (National Institute of Statistical Sciences), « Bell and Volinsky Part of AT&T Team that Won $1Million from Netflix Prize contest » — https://www.niss.org/node/3341 — S, EN, résumé seulement.
3. Koren Y., « The BellKor Solution to the Netflix Grand Prize », août 2009 — https://www2.seas.gwu.edu/~simhaweb/champalg/cf/papers/KorenBellKor2009.pdf — P, EN, lu partiellement (introduction).
4. Crossref, DOI 10.1109/MC.2009.263 — https://api.crossref.org/works/10.1109/MC.2009.263 — P, EN, métadonnées seulement.
5. Narayanan A., Shmatikov V., « Robust De-anonymization of Large Sparse Datasets » (arXiv cs/0610105v2) — https://arxiv.org/pdf/cs/0610105 — P, EN, lu partiellement.
6. Crossref, DOI 10.1109/SP.2008.33 — https://api.crossref.org/works/10.1109/SP.2008.33 — P, EN, métadonnées seulement.
7. FTC, lettre de M. Mithal à R. Freeman (avocat de Netflix), 12 mars 2010 — https://www.ftc.gov/sites/default/files/documents/closing_letters/netflix-inc./100312netflixletter.pdf — P, EN, lu (pages 1-2).

### Points d'attention
- La FTC n'a **pas porté plainte** : c'est une enquête close par une lettre. L'action en justice est une action collective privée (« Doe v. Netflix »), que Netflix a réglée à l'amiable d'après la presse (InformationWeek, lu seulement en résumé de recherche). Écrire : « après une action en justice et des échanges avec l'autorité américaine de protection des consommateur·rices (FTC) ».
- Une équipe rivale, The Ensemble, aurait obtenu le même score ; BellKor l'emporte pour avoir soumis 20 minutes plus tôt. Je l'ai vu seulement en résumé de presse (non vérifié).
- netflixprize.com ne répond plus (erreur 503 ou TLS) : la source primaire sur le classement final n'est pas accessible.
- Le RMSE mesure l'erreur sur des **notes**. Netflix a ensuite dit que la précision des notes ne suffisait pas à mesurer la valeur métier (voir § 3, Gomez-Uribe et Hunt 2015).

---

## 3. Ce qu'on optimise

### Formulation sûre
Une recommandation optimise toujours un **objectif chiffré** choisi par la plateforme. YouTube a expliqué en 2016 que son modèle classait les vidéos selon le temps de visionnage attendu plutôt que selon la probabilité de clic, pour éviter les vidéos « piège à clic ». En 2018, Facebook a annoncé favoriser les « interactions sociales significatives ». Des documents internes publiés en 2021 par le *Wall Street Journal* suggèrent que ce changement a aussi récompensé l'indignation, ce que Meta conteste. Chez Netflix, environ 80 % des heures regardées passent par les recommandations, selon l'entreprise (2015).

### Faits clés
- YouTube (Covington, Adams, Sargin, RecSys 2016) : deux étages, « candidate generation » puis « ranking ». Le classement prédit « expected watch time (rather than click probability) ». « Ranking by click-through rate often promotes deceptive videos that the user does not complete ("clickbait") whereas watch time better captures engagement » [1][2].
- YouTube, 2021 (Cristos Goodrow, vice-président ingénierie, 15 sept. 2021) : la durée de visionnage est ajoutée en 2012 ; YouTube mesure depuis une « valued watchtime » grâce à des sondages (seules les vidéos notées 4 ou 5 étoiles comptent). Signaux : « clicks, watchtime, survey responses, sharing, likes, and dislikes ». Rétrogradation des contenus « limites » en 2019 : « a 70% drop in watchtime on non-subscribed, recommended borderline content in the U.S. ». Les recommandations pèsent plus que les abonnements ou la recherche, sans pourcentage donné [3].
- Facebook, 11 janvier 2018 (Adam Mosseri) : « prioritize posts that spark conversations and meaningful interactions between people » et « posts from friends and family over public content » [4].
- *Wall Street Journal*, Facebook Files (K. Hagey, J. Horwitz, 15 sept. 2021, reproduit dans un dossier du Congrès) : barème interne, un *like* = 1 point, une réaction ou un repartage sans texte = 5, un commentaire « significatif », un message ou un repartage = 30. Note interne : « Our approach has had unhealthy side effects on important slices of public content, such as politics and news ». Réponse de Facebook (Andy Stone) : « Is a ranking change the source of the world's divisions? No » [5].
- Réponse de Meta (Nick Clegg, 18 sept. 2021) : la série contiendrait des « deliberate mischaracterizations » ; elle reposerait sur le fait de « cherry-picking selective quotes from individual pieces of leaked material » [6].
- Frances Haugen, déclaration écrite au Sénat américain (4 oct. 2021) : les produits de Facebook « harm children, stoke division, weaken our democracy » [7].
- Netflix (Gomez-Uribe et Hunt, *ACM TMIS*, déc. 2015) : la recommandation « influences choice for about 80% of hours streamed at Netflix. The remaining 20% comes from search ». Sur la page d'accueil, « 2 of every 3 hours streamed on Netflix are discovered ». Personnalisation et recommandations « save us more than $1B per year » (moins de résiliations) [8][9].

### Sources
1. Covington P., Adams J., Sargin E., « Deep Neural Networks for YouTube Recommendations », RecSys 2016 — https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45530.pdf — P, EN, lu partiellement.
2. Crossref, DOI 10.1145/2959100.2959190 — https://api.crossref.org/works/10.1145/2959100.2959190 — P, EN, métadonnées seulement.
3. Goodrow C., « On YouTube's recommendation system », blog officiel YouTube, 15 sept. 2021 — https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/ — P, EN, résumé seulement (résumé d'outil avec citations).
4. Mosseri A., « Bringing People Closer Together », Meta Newsroom, 11 janv. 2018 — https://about.fb.com/news/2018/01/news-feed-fyi-bringing-people-closer-together/ — P, EN, résumé seulement.
5. Hagey K., Horwitz J., « Facebook Tried to Make Its Platform a Healthier Place. It Got Angrier Instead », *WSJ*, 15 sept. 2021, reproduit dans un dossier d'audition de la Chambre des représentants — https://www.congress.gov/117/meeting/house/114268/documents/HHRG-117-IF16-20211201-SD012.pdf — Pr, EN, lu partiellement.
6. Clegg N., « What the Wall Street Journal Got Wrong », Meta, 18 sept. 2021 — https://about.fb.com/news/2021/09/what-the-wall-street-journal-got-wrong/ — P, EN, résumé seulement.
7. Haugen F., déclaration écrite, sous-commission du Commerce du Sénat, 4 oct. 2021 — https://www.commerce.senate.gov/services/files/FC8A558E-824E-4914-BEDB-3A7B1190BD49 — P, EN, lu partiellement.
8. Gomez-Uribe C. A., Hunt N., « The Netflix Recommender System: Algorithms, Business Value, and Innovation », *ACM TMIS* 6(4), 2015 (copie) — https://gwern.net/doc/reinforcement-learning/exploration/2015-gomezuribe.pdf — P, EN, lu partiellement.
9. Crossref, DOI 10.1145/2843948 — https://api.crossref.org/works/10.1145/2843948 — P, EN, métadonnées seulement.

### Points d'attention
- Le chiffre « 70 % du temps passé sur YouTube vient des recommandations » (Neal Mohan, CES 2018) circule beaucoup. CNET était inaccessible : **ne pas le publier** sans vérification. Utiliser plutôt le chiffre de Netflix, qui vient d'un article signé par l'entreprise et daté.
- Le chiffre Netflix date de 2015 et vient de l'entreprise elle-même : le présenter comme « selon Netflix ».
- L'article YouTube 2016 décrit une architecture de 2016. Depuis 2021, YouTube dit optimiser une durée « appréciée » mesurée par sondages [3]. Présenter l'objectif comme **évolutif**.
- Facebook Files : le WSJ cite des documents internes qu'on ne peut pas vérifier ; News Corp, propriétaire du WSJ, avait un accord commercial avec Facebook (le journal le signale lui-même). Toujours donner la réponse de Meta [5][6].
- La phrase de Zuckerberg (janvier 2018) sur une baisse attendue du temps passé n'a pas été lue en source primaire (facebook.com illisible). Le WSJ écrit : « As Facebook predicted, time spent on the platform declined » [5].

---

## 4. Bulles de filtre et chambres d'écho

### Formulation sûre
L'expression « bulle de filtre » vient du militant et auteur Eli Pariser (2011) : à force de personnaliser, les plateformes ne nous montreraient que ce qui nous ressemble. Les études empiriques sont **partagées**. Sur Facebook, plusieurs grandes études (2015, 2023) trouvent que nos propres choix limitent la diversité plus que l'algorithme, et que réduire les contenus « de son camp » pendant trois mois ne change pas mesurablement les opinions. D'autres travaux montrent une forte ségrégation des informations politiques et des chemins vers des contenus extrêmes sur YouTube. Ces résultats dépendent beaucoup de la période, de la plateforme et de la méthode.

### Faits clés
- Pariser : TED2011, mars 2011. On y finit « stuck in a "filter bubble" » sans voir ce qui pourrait remettre en cause nos idées [1]. Livre *The Filter Bubble: How the New Personalized Web Is Changing What We Read and How We Think* (Penguin, livre numérique 12 mai 2011) [2].
- Bakshy, Messing, Adamic (*Science*, mai 2015) : 10,1 millions d'utilisateur·rices américain·es de Facebook ; « Compared with algorithmic ranking, individuals' choices played a stronger role in limiting exposure to cross-cutting content » [3]. Les trois auteur·es travaillaient alors chez Facebook (à vérifier dans le texte intégral, non lu).
- Projet Meta / élection américaine 2020 (publié le 27 juillet 2023) :
  - Guess et al. (*Science*) : fil antichronologique au lieu de l'algorithme pendant 3 mois → beaucoup moins de temps passé, plus de contenus politiques et « untrustworthy », mais « did not significantly alter levels of issue polarization, affective polarization, political knowledge » [4].
  - Nyhan et al. (*Nature*) : les sources « like-minded » forment la majorité de ce que voient les adultes américain·es ; les réduire d'environ un tiers chez 23 377 personnes n'a eu « no measurable effects on eight preregistered attitudinal measures » [5].
  - Guess et al. (*Science*), suppression des repartages : moins d'informations politiques et moins de connaissances sur l'actualité, pas d'effet net sur la polarisation [6].
  - González-Bailón et al. (*Science*), 208 millions d'utilisateur·rices : la ségrégation idéologique « is high and increases » de l'exposition potentielle à l'exposition réelle, puis à l'engagement ; un « coin » consommé seulement par des conservateur·rices concentre la plupart de la désinformation repérée [7].
- Limites :
  - Michael W. Wagner titre son commentaire « Independence by permission » (*Science*, 2023), sur la collaboration avec l'entreprise [8] (son rôle d'observateur indépendant du projet n'a pas été vérifié).
  - Bagchi et al. (eLetter à *Science*, 26 sept. 2024) : des mesures d'urgence (« break glass » ; 63 selon un résumé de presse, non vérifié) ont modifié l'algorithme de Facebook pendant l'étude, ce qui « systematically reduced the amount of misinformation in the control group » [9]. Les études ne durent que 3 mois, se limitent aux États-Unis, à une élection, et à des volontaires.
- YouTube :
  - Ribeiro, Ottoni, West, Almeida, Meira Jr. (FAT* 2020) : 330 925 vidéos, 349 chaînes, plus de 72 millions de commentaires ; « users consistently migrate from milder to more extreme content ». Côté algorithme, l'extrême droite « alt-right » n'est atteignable que par les recommandations de chaînes. Limite reconnue : « our recommendations do not account for personalization » (données collectées sans compte) [10][11].
  - Hosseinmardi et al. (*PNAS*, févr. 2024), « bots contrefactuels » : suivre uniquement les recommandations « results in less partisan consumption » ; « at least since the algorithm changes that YouTube implemented in 2019 », les recommandations jouent « if anything, a moderating role » [12].
  - Chen, Nyhan, Reifler, Robertson, Wilson (*Science Advances*, 2023) : l'exposition aux chaînes extrémistes est concentrée chez un petit groupe déjà très « rancunier » (sur le genre et la race), qui s'abonne et suit des liens externes ; « YouTube's algorithms were not sending people down "rabbit holes" » en 2020 [13].

### Sources
1. TED, page de la conférence d'E. Pariser « Beware online "filter bubbles" » — https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles — P, EN, résumé seulement.
2. Penguin Random House, fiche du livre *The Filter Bubble* — https://www.penguinrandomhouse.com/books/309214/the-filter-bubble-by-eli-pariser/ — P (éditeur), EN, lu.
3. Bakshy E., Messing S., Adamic L., « Exposure to ideologically diverse news and opinion on Facebook », *Science* 348, 2015, DOI 10.1126/science.aaa1160 — https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:%2210.1126/science.aaa1160%22&resultType=core&format=json — P, EN, résumé seulement.
4. Guess A. M. et al., « How do social media feed algorithms affect attitudes and behavior in an election campaign? », *Science*, 2023, DOI 10.1126/science.abp9364 — Europe PMC (même requête, DOI changé) — P, EN, résumé seulement.
5. Nyhan B. et al., « Like-minded sources on Facebook are prevalent but not polarizing », *Nature*, 2023, DOI 10.1038/s41586-023-06297-w — Europe PMC — P, EN, résumé seulement.
6. Guess A. M. et al., « Reshares on social media amplify political news but do not detectably affect beliefs or opinions », *Science*, 2023, DOI 10.1126/science.add8424 — Europe PMC — P, EN, résumé seulement.
7. González-Bailón S. et al., « Asymmetric ideological segregation in exposure to political news on Facebook », *Science*, 2023, DOI 10.1126/science.ade7138 — Europe PMC — P, EN, résumé seulement.
8. Wagner M. W., « Independence by permission », *Science*, 2023, DOI 10.1126/science.adi2430 — Europe PMC — R, EN, métadonnées seulement (titre et chapeau).
9. Bagchi C. et al., « Social media algorithms can curb misinformation, but do they? », arXiv 2409.18393 (eLetter *Science*, 26 sept. 2024) — https://arxiv.org/abs/2409.18393v1 — R, EN, résumé seulement.
10. Horta Ribeiro M. et al., « Auditing Radicalization Pathways on YouTube », arXiv 1908.08313v4 — https://arxiv.org/pdf/1908.08313 — P, EN, lu partiellement.
11. Crossref, DOI 10.1145/3351095.3372879 (FAT* 2020, p. 131-141) — https://api.crossref.org/works/10.1145/3351095.3372879 — P, EN, métadonnées seulement.
12. Hosseinmardi H. et al., « Causally estimating the effect of YouTube's recommender system using counterfactual bots », *PNAS* 121, 2024, DOI 10.1073/pnas.2313377121 — Europe PMC — P, EN, résumé seulement.
13. Chen A. Y. et al., « Subscriptions and external links help drive resentful users to alternative and extremist YouTube channels », *Science Advances*, 2023, DOI 10.1126/sciadv.add8080 — Europe PMC — P, EN, résumé seulement.

### Points d'attention
- **Ne pas trancher.** Écrire « les études récentes trouvent peu d'effet mesurable **de l'algorithme seul** sur les opinions, sur des périodes courtes », et non « les bulles de filtre n'existent pas ». La ségrégation de l'information existe [5][7] ; ce qu'on discute, c'est la part de l'algorithme et son effet sur les opinions.
- Les études 2023 ont été faites **avec Meta** (données et accès fournis par l'entreprise) : le dire, avec la critique de Wagner [8] et celle de Bagchi et al. [9].
- Ribeiro 2020 (données de 2019) et Hosseinmardi 2024 (données de 2021-2022) ne se contredisent pas forcément : YouTube a changé son algorithme en 2019 [12][13] et en 2021 [3 du § 3].
- Les grandes études portent surtout sur les États-Unis : le signaler.

---

## 5. Boucles de rétroaction et effet de popularité

### Formulation sûre
Quand on voit ce que les autres ont choisi, on a tendance à le choisir à son tour : les succès s'emballent et deviennent difficiles à prévoir. Une expérience de 2006 sur un « marché musical » artificiel l'a montré. Les systèmes de recommandation amplifient le même mécanisme : les contenus déjà populaires reçoivent plus d'exposition, donc plus de clics, donc plus d'exposition. C'est le « biais de popularité ».

### Faits clés
- Salganik, Dodds, Watts (*Science*, févr. 2006) : 14 341 participant·es téléchargent des chansons inconnues, avec ou sans voir les choix des autres. « Increasing the strength of social influence increased both inequality and unpredictability of success » ; « The best songs rarely did poorly, and the worst rarely did well, but any other result was possible » [1].
- Abdollahpouri, Mansoury, Burke, Mobasher (2019) : « popular (i.e. frequently rated) items get a lot of exposure while less popular ones are under-represented in the recommendations ». Les personnes aux goûts « de niche » en pâtissent le plus [2].
- Reproduction sur la musique : Kowald, Schedl, Lex, « The Unfairness of Popularity Bias in Music Recommendation: A Reproducibility Study » (2020) [3].
- Ferraro et al. (§ 9) simulent une boucle de rétroaction et montrent qu'un simple reclassement peut l'inverser.

### Sources
1. Salganik M. J., Dodds P. S., Watts D. J., « Experimental study of inequality and unpredictability in an artificial cultural market », *Science* 311, 2006, DOI 10.1126/science.1121066 — Europe PMC — P, EN, résumé seulement.
2. Abdollahpouri H. et al., « The Unfairness of Popularity Bias in Recommendation », arXiv 1907.13286v3 — https://arxiv.org/pdf/1907.13286 — R, EN, lu partiellement (résumé, introduction).
3. Kowald D., Schedl M., Lex E., 2020 — Europe PMC (recherche par titre) — R, EN, métadonnées seulement.

### Points d'attention
- MusicLab n'est **pas** un système de recommandation : c'est une expérience sur l'influence sociale (téléchargements visibles). Le présenter comme une analogie, pas comme une preuve sur les algorithmes.
- « Les riches deviennent plus riches » est une image, pas un résultat mesuré chez une plateforme réelle.

---

## 6. Santé et adolescent·es

### Formulation sûre
Le débat scientifique n'est pas tranché. En mai 2023, le médecin-chef des États-Unis (*Surgeon General*) a publié un avis selon lequel on ne peut pas conclure que les réseaux sociaux sont suffisamment sûrs pour les jeunes. D'autres chercheuses et chercheurs, comme Candice Odgers ou Amy Orben et Andrew Przybylski, trouvent surtout des associations faibles et rappellent qu'une corrélation n'est pas une cause. En France, la commission « Enfants et écrans » (avril 2024) juge que les réseaux sociaux semblent être un facteur de risque supplémentaire chez les jeunes déjà vulnérables. Elle cite les deux camps.

### Faits clés
- *Surgeon General* (Vivek Murthy, 23 mai 2023). Selon NPR : 95 % des 13-17 ans utilisent un réseau social ; « we do not have enough evidence to conclude that social media is, in fact, sufficiently safe for our kids » ; plus de 3 heures par jour irait avec un risque doublé de symptômes de dépression et d'anxiété (propos d'entretien) [1].
- Orben et Przybylski (*Nature Human Behaviour*, 2019), 355 358 jeunes : association « negative but small, explaining at most 0.4% of the variation in well-being » ; « too small to warrant policy change » [2].
- Odgers (*Nature*, 29 mars 2024, critique du livre de J. Haidt *The Anxious Generation*) : la thèse d'un « recâblage » des cerveaux « is not supported by science » ; les recherches ont produit « a mix of no, small and mixed associations » ; les jeunes qui vont déjà mal utiliseraient davantage ces plateformes [3].
- Commission « Enfants et écrans — À la recherche du temps perdu », avril 2024, coprésidée par Servane Mouton (neurologue) et Amine Benyamina (psychiatre addictologue) [4] :
  - « consensus scientifique net » sur les effets néfastes pour le sommeil, la sédentarité et la myopie ;
  - « la notion "d'addiction aux écrans" en tant que telle n'est pas encore reconnue par la science », mais les réseaux sociaux « semblent être […] des facteurs de risque supplémentaires lorsqu'il y a une vulnérabilité préexistante » ;
  - « Les risques d'enfermement provoqués par les bulles algorithmiques doivent être davantage considérés » ;
  - repères d'âge : pas de téléphone avant 11 ans ; pas de réseaux sociaux avant 13 ans ; à partir de 15 ans, seulement des réseaux « pourvus d'une conception éthique » ;
  - le rapport présente les deux camps : Twenge et Haidt d'un côté ; Hancock, Orben et Przybylski de l'autre (lien « extrêmement limité »).

### Sources
1. NPR (republié par HPPR), « Social media can put young people in danger, U.S. surgeon general warns », 23 mai 2023 — https://www.hppr.org/2023-05-23/social-media-can-put-young-people-in-danger-u-s-surgeon-general-warns — Pr, EN, lu partiellement.
2. Orben A., Przybylski A. K., « The association between adolescent well-being and digital technology use », *Nature Human Behaviour* 3, 2019, DOI 10.1038/s41562-018-0506-1 — Europe PMC — P, EN, résumé seulement.
3. Odgers C. L., « The great rewiring: is social media really behind an epidemic of teenage mental illness? », *Nature*, 29 mars 2024 — https://www.nature.com/articles/d41586-024-00902-2 — R, EN, lu partiellement.
4. Commission d'expert·es sur l'impact de l'exposition des jeunes aux écrans, *Enfants et écrans. À la recherche du temps perdu*, avril 2024 — https://www.vie-publique.fr/files/rapport/pdf/293978.pdf — P, FR, lu partiellement (synthèse, § 2.3, composition).

### Points d'attention
- **L'avis du Surgeon General n'a pas été lu en source primaire** (hhs.gov et NCBI bloqués). Les citations ci-dessus viennent d'un entretien de NPR. À vérifier dans le PDF officiel avant publication : https://www.hhs.gov/sites/default/files/sg-youth-mental-health-social-media-advisory.pdf.
- Le « risque doublé au-delà de 3 h » vient d'**une** étude de cohorte citée par l'avis (selon la presse) : c'est une association, pas une causalité.
- Date de remise du rapport français : 30 avril 2024 selon l'Élysée (résumé de recherche seulement) ; le PDF indique seulement « Avril 2024 ».
- Ne pas parler d'« addiction » comme d'un diagnostic : le rapport français lui-même dit que la notion n'est pas reconnue.

---

## 7. Régulation

### Formulation sûre
En Europe, le règlement sur les services numériques (DSA, règlement (UE) 2022/2065) oblige les plateformes à expliquer simplement les principaux critères de leurs recommandations. Les très grandes plateformes doivent proposer au moins une option qui ne repose pas sur le profilage. La Commission européenne enquête sur TikTok (depuis février 2024) et sur Instagram et Facebook (depuis mai 2024). Au 16 octobre 2026, elle a seulement publié des **conclusions préliminaires** sur leur « conception addictive », recommandations comprises, et n'a pris aucune décision finale. En France, la loi de 2023 sur la « majorité numérique » n'a jamais été appliquée. La loi de 2026 qui interdisait les réseaux sociaux avant 15 ans a été censurée par le Conseil constitutionnel le 14 août 2026.

### Faits clés (texte exact, EUR-Lex, version française)
- Art. 3, s) : « "système de recommandation": un système entièrement ou partiellement automatisé utilisé par une plateforme en ligne pour suggérer sur son interface en ligne des informations spécifiques aux destinataires du service ou pour hiérarchiser ces informations » [1].
- Art. 27, § 1 : les plateformes « établissent dans leurs conditions générales, dans un langage simple et compréhensible, les principaux paramètres utilisés dans leurs systèmes de recommandation, ainsi que les options dont disposent les destinataires du service pour modifier ou influencer ces principaux paramètres ». § 2 : ces paramètres « expliquent pourquoi certaines informations sont suggérées au destinataire du service » (au minimum : « a) les critères les plus importants […] ; b) les raisons de l'importance relative de ces paramètres »). § 3 : une fonctionnalité pour « sélectionner et de modifier à tout moment leur option favorite », « directement et aisément accessible » [1].
- Art. 28, § 1 : « mesures appropriées et proportionnées pour garantir un niveau élevé de protection de la vie privée, de sûreté et de sécurité des mineurs ». § 2 : pas de publicité fondée sur le profilage quand la plateforme sait « avec une certitude raisonnable » que l'utilisateur·rice est mineur·e [1].
- Art. 38 : les très grandes plateformes et très grands moteurs de recherche « proposent au moins une option pour chacun de leurs systèmes de recommandation qui ne repose pas sur du profilage, tel qu'il est défini à l'article 4, point 4), du règlement (UE) 2016/679 » [1].
- Art. 34, § 2 a) et art. 35, § 1 d) : l'évaluation des risques systémiques doit examiner « la conception de leurs systèmes de recommandation » ; parmi les mesures d'atténuation figure « le test et l'adaptation de leurs systèmes algorithmiques, y compris leurs systèmes de recommandation » [1].
- **TikTok** : enquête ouverte le 19 février 2024 (selon l'Arcom et la presse). Conclusions préliminaires du **6 février 2026** sur la « conception addictive » : défilement infini, lecture automatique, notifications et « highly personalised recommender system ». La Commission attend notamment que TikTok change sa conception, par exemple en « adapting its recommender system » [2][3].
- **Meta** : procédure ouverte le **16 mai 2024** ; les systèmes, « including their algorithms, may stimulate behavioural addictions in children » et des « so-called "rabbit-hole effects" » [4]. Conclusions préliminaires du 29 avril 2026 sur les moins de 13 ans (aucun lien avec les recommandations) [5], puis du **10 juillet 2026** sur la conception addictive d'Instagram et de Facebook, dont « the platforms' highly personalised recommender systems » [6].
- État au 16 octobre 2026 : je n'ai trouvé **aucune décision finale** ni amende pour TikTok ou Meta sur ces volets. Plafond légal : 6 % du chiffre d'affaires mondial annuel (presse, rappel général).
- **France, loi n° 2023-566 du 7 juillet 2023** (« visant à instaurer une majorité numérique et à lutter contre la haine en ligne ») : aucun décret d'application. Réponse du Gouvernement publiée au JO le 6 mai 2025 : la loi « n'a, pour sa part, pas pu prospérer en raison de frottements avec le droit de l'Union européenne ». Dans un courrier du 14 août 2023, la Commission a jugé la procédure non conforme à la directive 2015/1535 (« ce qui les rend inapplicables ») et le fond contraire au DSA et au principe du pays d'origine [7].
- **Loi « Miller » (2026)** : adoptée définitivement le 21 juillet 2026 ; « L'accès à un service de réseaux sociaux en ligne fourni par une plateforme en ligne est interdit aux mineurs de quinze ans » [8]. Décision **n° 2026-911 DC du 14 août 2026** : l'article 1er est censuré. Le Conseil juge l'atteinte à la liberté d'expression non « nécessaires, adaptées et proportionnées ». Il relève aussi l'absence de garanties pour la vie privée dans la vérification d'âge imposée à toutes et tous, adultes compris [9]. Le gouvernement prépare une nouvelle rédaction. Je n'ai trouvé aucun nouveau texte déposé (presse de septembre 2026) [10].

### Sources
1. Règlement (UE) 2022/2065 (DSA), JO L 277 du 27.10.2022, version FR — https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32022R2065 — P, FR, lu partiellement (art. 3 s, 27, 28, 34, 35, 38).
2. Commission européenne, « Commission preliminarily finds TikTok's addictive design in breach of the Digital Services Act », 6 févr. 2026 — https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act — P, EN, résumé seulement.
3. Arcom, « La Commission européenne demande à TikTok de modifier sa conception addictive… » — https://www.arcom.fr/presse/la-commission-europeenne-demande-tiktok-de-modifier-sa-conception-addictive-et-proteger-ses-utilisateurs-larcom-se-felicite-de-cette-etape-importante-dune-enquete-laquelle-elle-contribue — P, FR, métadonnées seulement (vu en résultat de recherche).
4. Commission européenne, « Commission opens formal proceedings against Meta under the Digital Services Act related to the protection of minors on Facebook and Instagram », 16 mai 2024 — https://digital-strategy.ec.europa.eu/en/news/commission-opens-formal-proceedings-against-meta-under-digital-services-act-related-protection — P, EN, résumé seulement.
5. Commission européenne, « Commission preliminarily finds Meta in breach of Digital Services Act for failing to prevent minors under 13… », 29 avr. 2026 — https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-meta-breach-digital-services-act-failing-prevent-minors-under-13 — P, EN, résumé seulement.
6. Commission européenne, « Commission preliminarily finds the addictive design of Instagram and Facebook in breach of the Digital Services Act », 10 juill. 2026 — https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-addictive-design-instagram-and-facebook-breach-digital-services-act — P, EN, résumé seulement.
7. Assemblée nationale, question écrite n° 5149 (M. Guiniot) et réponse du Gouvernement (JO du 6 mai 2025, p. 3291) — https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE5149.pdf — P, FR, lu.
8. La Quadrature du Net, « Le Parlement vote l'interdiction des réseaux sociaux aux jeunes de moins de 15 ans », 22 juill. 2026 (mise à jour du 17 août) — https://www.laquadrature.net/2026/07/22/le-parlement-vote-linterdiction-des-reseaux-sociaux-aux-jeunes-de-moins-de-15-ans/ — S (association, partie prenante), FR, résumé seulement.
9. Conseil constitutionnel, communiqué sur la décision n° 2026-911 DC du 14 août 2026 — https://www.conseil-constitutionnel.fr/actualites/communique/decision-n-2026-911-dc-du-14-aout-2026-communique-de-presse — P, FR, résumé seulement.
10. LCP, « Interdiction des réseaux sociaux aux moins de 15 ans : une nouvelle loi est-elle possible ? », sept. 2026 — https://lcp.fr/actualites/interdiction-des-reseaux-sociaux-aux-moins-de-15-ans-une-nouvelle-loi-est-elle-possible — Pr, FR, métadonnées seulement (vu en résultat de recherche).

### Points d'attention
- « Conclusions préliminaires » ≠ sanction : TikTok et Meta peuvent répondre. Toujours écrire « à titre préliminaire » et dater.
- Le titre exact de la loi « Miller » et son numéro de promulgation (si les articles non censurés ont été promulgués) ne sont pas vérifiés. Consulter la décision : https://www.conseil-constitutionnel.fr/decision/2026/2026911DC.htm.
- Selon un résumé de recherche (non vérifié), la Commission aurait rendu un avis circonstancié le 6 juillet 2026 jugeant la loi Miller « pas pleinement compatible » avec le droit de l'Union. Ne pas publier sans le document.
- La date d'ouverture de l'enquête TikTok (19 févr. 2024) vient de la presse et d'un résumé ; la page de la Commission que j'ai lue ne la donne pas.
- La Quadrature du Net est une association engagée contre la loi : présenter sa lecture comme une position.

---

## 8. Recommandation et vie privée

### Formulation sûre
Pour recommander, les plateformes utilisent surtout ce qu'on **fait** : ce qu'on regarde jusqu'au bout, ce qu'on aime, partage ou commente, qui on suit. Elles utilisent aussi des informations sur les contenus (sons, hashtags, légendes) et, dans une moindre mesure, des réglages de l'appareil (langue, pays). Le DSA oblige les très grandes plateformes à proposer un fil non fondé sur le profilage. TikTok propose ainsi en Europe un fil « non personnalisé » (vidéos populaires) et un fil des abonnements par ordre chronologique.

### Faits clés
- TikTok, « How TikTok recommends videos #ForYou » (18 juin 2020) : facteurs = « User interactions » (aimer, partager, suivre, commenter, créer), « Video information » (légendes, sons, hashtags), « Device and account settings » (langue, pays, type d'appareil), avec une « lower weight ». Finir de regarder une longue vidéo est un signal fort. Le nombre d'abonné·es n'est pas un facteur direct (« neither follower count nor whether the account has had previous high-performing videos are direct factors »). TikTok cite le risque de « filter bubble » et dit mêler des contenus variés [1].
- TikTok, 4 août 2023 (mise en conformité DSA) : possibilité de « turn off personalisation » ; le fil Pour toi montrera alors des « popular videos from both the places where they live and around the world » ; les fils Abonnements et Ami·es passent à l'« chronological order rather than based on the viewer's profile ». Fin de la publicité personnalisée pour les 13-17 ans en Europe [2].
- YouTube : on peut « pause, edit, or delete » son historique de recherche et de visionnage [3 du § 3].
- Narayanan et Shmatikov (§ 2) : des notes de films suffisent à ré-identifier une personne et à deviner des opinions politiques.
- Article 38 du DSA (§ 7) : option sans profilage obligatoire pour les très grandes plateformes.

### Sources
1. TikTok Newsroom, « How TikTok recommends videos #ForYou », 18 juin 2020 — https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you — P, EN, résumé seulement (résumé d'outil avec citations).
2. TikTok Newsroom, « Fulfilling our commitments under the Digital Services Act », 4 août 2023 — https://newsroom.tiktok.com/en-eu/fulfilling-commitments-dsa-update — P, EN, résumé seulement.

### Points d'attention
- Les pages de transparence sont écrites **par les plateformes** : elles disent ce qu'elles veulent bien dire. Le présenter ainsi (« selon TikTok »).
- L'annonce TikTok de 2023 décrit une fonction « à venir » : son fonctionnement actuel n'est pas vérifié.
- Le fil chronologique d'Instagram (« Abonnements », 2022) n'a pas été vérifié en source primaire.
- Ne pas confondre « non personnalisé » (classé par popularité) et « chronologique ».

---

## 9. Diversité et équité

### Formulation sûre
Un système de recommandation peut reproduire et amplifier les déséquilibres de ses données. Une étude de 2021 sur un algorithme de recommandation musicale classique montre que les artistes femmes, déjà minoritaires dans les écoutes, apparaissaient en moyenne seulement vers la septième position des recommandations. En simulation, faire légèrement remonter les artistes femmes suffit à inverser la boucle : l'algorithme se met à les recommander de lui-même.

### Faits clés
- Ferraro, Serra, Bauer, « Break the Loop: Gender Imbalance in Music Recommenders », CHIIR '21, DOI 10.1145/3406522.3446033, p. 249-254 [1][2].
- Selon les autrices et auteurs (Université d'Utrecht, 9 avril 2021) : « Only 25% of the artists » écouté·es sont des femmes (environ 330 000 personnes sur neuf ans). En moyenne, les sept premiers titres recommandés sont d'hommes ; il faut atteindre le 7e ou 8e titre pour une femme [2].
- Simulation : descendre les artistes hommes de quelques positions → « Eventually, the recommender started to place female artists higher up in the recommended list, even without our intervention » (C. Bauer) [2].
- Travaux sur le biais de popularité : § 5.

### Sources
1. Dépôt institutionnel UPF, notice « Break the loop: gender imbalance in music recommenders » (accès ouvert, CC BY 4.0) — https://repositori.upf.edu/items/b6bda787-ccda-4214-9e43-deaee6ec12fa — P, EN, métadonnées seulement (vu en résultat de recherche).
2. Universiteit Utrecht, « Music recommendation algorithms are unfair to female artists, but we can change that », 9 avr. 2021 (texte de C. Bauer et A. Ferraro, d'abord paru dans *The Conversation*) — https://uu.nl/en/news/music-recommendation-algorithms-are-unfair-to-female-artists-but-we-can-change-that — S (par les auteur·es), EN, lu partiellement.

### Points d'attention
- Données Last.fm (écoutes publiques) et algorithme de recherche standard : **pas** l'algorithme de Spotify ou Deezer. Ne pas écrire « Spotify discrimine les femmes ».
- Le genre des artistes a été attribué à partir de bases publiques : il s'agit d'une catégorisation, avec ses limites (artistes non binaires, groupes mixtes).
- Je n'ai pas trouvé d'étude solide sur l'invisibilisation de créateur·rices selon d'autres critères (couleur de peau, handicap…) sur TikTok ou YouTube. Des documents internes de TikTok (The Intercept, 2020) sont souvent cités mais n'ont pas été vérifiés ici.

---

## 10. Personnes à mettre en avant

- **Pattie Maes** — professeure au MIT Media Lab (Germeshausen Professor), dirige le groupe Fluid Interfaces ; « pioneered the concept of Software Agents in the 90s » ; cofondatrice de Firefly Networks, revendue à Microsoft [1]. Coautrice de Ringo (1995) avec Upendra Shardanand [§ 1-5].
- **Joseph Konstan** — professeur à l'Université du Minnesota (arrivé en 1993), laboratoire GroupLens. Prix ACM Software System 2010 (GroupLens), prix SIGIR Test of Time 2017 avec John Riedl [2].
- **John Riedl** — Université du Minnesota, coauteur de GroupLens (1994) [§ 1-3] et colauréat du prix SIGIR 2017 [2]. Aucune donnée personnelle à publier.
- **Paul Resnick** — premier auteur de GroupLens (1994), alors au MIT Center for Coordination Science [§ 1-3]. Rattachement actuel (Université du Michigan) : page bloquée, non vérifié ici.
- **Yehuda Koren** — chez Yahoo Research en 2009, membre de l'équipe gagnante du prix Netflix, coauteur de l'article de référence sur la factorisation de matrices [§ 2-1, § 2-2, § 2-3].
- **Eli Pariser** — auteur de *The Filter Bubble* (2011). Ancien directeur exécutif de MoveOn.org, cofondateur d'Avaaz.org (bio de l'éditeur) [3].
- **Zeynep Tufekci** — sociologue, professeure à Princeton (« Henry G. Bryant Professor of Sociology and Public Affairs »), chroniqueuse au *New York Times*, autrice de *Twitter and Tear Gas* (résumé de recherche ; page de Princeton bloquée) [4].
- **Joan Donovan** — professeure adjointe de journalisme à l'Université de Boston ; spécialiste de la manipulation médiatique ; coautrice de *Meme Wars* ; ancienne directrice de recherche au Shorenstein Center de Harvard [5].
- **Candice Odgers** — professeure de sciences psychologiques et d'informatique à l'Université de Californie à Irvine ; codirige des réseaux internationaux sur le développement de l'enfant (CIFAR, Jacobs Foundation) [§ 6-3].
- **Virgílio Almeida (Brésil)** — professeur émérite d'informatique à l'UFMG (Belo Horizonte), titulaire de la chaire Oscar Sala à l'IEA-USP depuis 2022, ancien coordinateur du Comité gestor da Internet (CGI.br), élu à l'Académie nationale d'ingénierie des États-Unis (2025) [6]. Coauteur de l'audit de la radicalisation sur YouTube (FAT* 2020), avec **Manoel Horta Ribeiro** (premier auteur) et Wagner Meira Jr. (UFMG) [§ 4-10].
- **Amy Orben** (Cambridge) et **Andrew Przybylski** (Oxford), voix « sceptiques » sur les effets des écrans [§ 6-2] (rattachements non vérifiés ici).
- **Christine Bauer** et **Andrés Ferraro**, équité de genre dans la recommandation musicale [§ 9].

### Sources
1. MIT Media Lab, profil de Pattie Maes — https://www.media.mit.edu/people/pattie/overview/ — P, EN, résumé seulement.
2. University of Minnesota, CS&E, profil de Joseph Konstan — https://cse.umn.edu/cs/joseph-konstan — P, EN, résumé seulement.
3. Penguin Random House (voir § 4-2) — P, EN, lu.
4. Princeton Sociology, profil de Z. Tufekci — https://sociology.princeton.edu/people/zeynep-tufekci — P, EN, métadonnées seulement (403 ; vu en résultat de recherche).
5. Boston University, profil de Joan Donovan — https://www.bu.edu/com/profile/joan-donovan/ — P, EN, résumé seulement.
6. UFMG, « Virgílio Almeida, emérito da UFMG, é novo membro da Academia Nacional de Engenharia dos EUA », 7 oct. 2025 — https://www.ufmg.br/comunicacao/noticias/pessoas/virgilio-almeida-emerito-da-ufmg-e-novo-membro-da-academia-nacional-de-engenharia-dos-eua/ — P, PT, résumé seulement.

### Points d'attention
- Pas d'âge, de lieu de résidence ni de détail de vie privée. Pour John Riedl (décédé), ne donner que des faits professionnels.
- Pattie Maes : ne pas écrire « inventrice des recommandations » ; « coautrice de Ringo, l'un des premiers systèmes de recommandation musicale » reste prudent.
- La fonction de « secrétaire national aux politiques informatiques » (2011-2015) de V. Almeida apparaît seulement dans des biographies secondaires : non vérifiée.
- Pour une voix africaine ou asiatique sur les plateformes, aucune piste n'a été vérifiée dans ce lot.

---

## À vérifier plus tard

- Texte primaire de l'avis du *Surgeon General* (mai 2023) : citations prises dans l'entretien NPR, pas dans l'avis.
- Chiffre « 70 % du temps de visionnage YouTube vient des recommandations » (Neal Mohan, CES 2018) : source inaccessible.
- Phrase de Zuckerberg du 11 janvier 2018 sur la baisse attendue du temps passé : non lue en source primaire.
- Égalité de score avec The Ensemble et victoire « à 20 minutes » dans le prix Netflix : presse seulement.
- Action collective « Doe v. Netflix » et accord amiable : presse seulement.
- Communiqué ACM 2011 (prix Software System, « launched the field of recommender systems in 1994 », MovieLens 1997, Net Perceptions) : page bloquée, lu seulement en résumé de recherche.
- Ouverture de l'enquête DSA sur TikTok le 19 février 2024 : presse et Arcom, page de la Commission non lue sur ce point.
- Avis circonstancié de la Commission sur la loi « Miller » (6 juillet 2026) : non vérifié.
- Titre exact et promulgation éventuelle (articles non censurés) de la loi « Miller » ; tout nouveau texte déposé entre mi-septembre et le 16 octobre 2026.
- Date de remise du rapport « Enfants et écrans » (30 avril 2024) : seulement en résumé de recherche.
- Affiliation des auteur·es de Bakshy et al. 2015 chez Facebook (connue mais non relue dans l'article).
- Rattachements actuels de Paul Resnick, Amy Orben et Andrew Przybylski ; page de Zeynep Tufekci (403).
- Fil chronologique d'Instagram (2022) et fonctionnement actuel de l'option non personnalisée de TikTok.
- Firefly (issue de Ringo) : rachat par Microsoft confirmé par le MIT, mais pas le lien Ringo → Firefly.
