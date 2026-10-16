# Sources — Module « Les IA qui cherchent et optimisent »

Dossier de sources du module `/modules/ia-chercher/`, établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 16 octobre 2026.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué (« lu », « lu partiellement », « résumé seulement »,
  « métadonnées seulement »).
- Aucune page Wikipédia n'est utilisée comme source.
- Erreurs relevées dans des sources (ne pas les reprendre) : le bulletin SIF
  de 2023 attribue le prix 2012 à Gale (il est allé à Shapley et Roth) ; une
  page de l'université du Michigan donne un mauvais titre au livre de
  Holland ; Alison Doig est devenue Alison Harcourt.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution

---

## 1. Dijkstra et le plus court chemin

### Formulation sûre
En 1956, Edsger Dijkstra, programmeur au Centre mathématique d'Amsterdam, cherche une
démonstration compréhensible par le grand public pour un nouvel ordinateur (l'ARMAC) : trouver
le plus court trajet entre deux villes des Pays-Bas. Il raconte avoir conçu la méthode « en
une vingtaine de minutes », de tête, assis à la terrasse d'un café d'Amsterdam. Il ne la publie
qu'en 1959. D'autres chercheurs avaient décrit des méthodes proches à la même époque : Dijkstra
n'est pas « l'inventeur unique » du plus court chemin, mais sa description, courte et claire, est
celle qui s'est imposée.

### Faits clés
- Article : E. W. Dijkstra, « A note on two problems in connexion with graphs », *Numerische
  Mathematik* 1, p. 269-271, 1959 (métadonnées Crossref). Il traite **deux** problèmes : l'arbre
  couvrant minimal et le plus court chemin.
- Contexte (entretien oral, 2001) : « So I designed a program that would find the shortest route
  between two cities in the Netherlands, using a somewhat reduced roadmap of the Netherlands, on
  which I had selected, 64 cities (so that in the coding, 6 bits would suffice to identify a
  city). » Démonstration pour l'inauguration de l'ARMAC en 1956.
- L'anecdote, mot pour mot : « It is the algorithm for the shortest path, which I designed in
  about twenty minutes. One morning I was shopping in Amsterdam with my young fiancée, and tired,
  we sat down on the café terrace to drink a cup of coffee and I was just thinking about whether
  I could do this, and I then designed the algorithm for the shortest path. As I said, it was a
  twenty-minute invention. In fact, it was published in '59, three years late. » Et : « One of
  the reasons that it is so nice was that I designed it without pencil and paper. »
- Il découvre plus tard son nom dans un manuel allemand de gestion : « "Das Dijkstra'sche
  Verfahren." Suddenly, there was a method named after me. »
- L'entretien a été mené par Philip L. Frana (Charles Babbage Institute), le 2 août 2001 à
  Austin (Texas), cote **OH 330**. Une version condensée a paru dans *Communications of the ACM*
  53(8), août 2010, p. 41-47 (Frana & Misa ; métadonnées Crossref). Dijkstra est mort en 2002 :
  la publication de la CACM est posthume.
- Précurseurs et contemporains (Schrijver 2012) : la méthode « Bellman-Ford » est décrite par
  Shimbel (1955), Ford (rapport RAND du 14 août 1956), Bellman (1958) et Moore (1959). La
  méthode de Dijkstra est « described by Leyzorek, Gray, Johnson, Ladew, Meaker, Petry, and
  Seitz [1957] and Dijkstra [1959] », Dantzig (1958) donnant une méthode voisine. Edward F. Moore
  (Bell Labs) a présenté « The shortest path through a maze » en avril 1957 à Harvard (publié en
  1959), motivé par le routage des appels téléphoniques longue distance.
- Dijkstra lui-même compare sa solution à celle de Ford : elle demande de stocker moins de
  données et « the amount of work to be done seems to be considerably less » (cité par
  Schrijver).
- Les manuscrits EWD : notes numérotées que Dijkstra envoyait par la poste à des collègues
  pendant plus de quarante ans ; l'archive de l'université du Texas à Austin en met en ligne
  « over a thousand ». Les originaux sont au Briscoe Center (même université).

### Sources
1. P. L. Frana, *An Interview with Edsger W. Dijkstra*, OH 330, Charles Babbage Institute,
   2001 — transcription PDF :
   https://conservancy.umn.edu/server/api/core/bitstreams/7a97387c-e045-4647-925c-d6d94a312f6e/content
   (notice : https://hdl.handle.net/11299/107247). P, anglais, **lu** (passages p. 4-5).
2. P. L. Frana, T. J. Misa, « An interview with Edsger W. Dijkstra », *CACM* 53(8), 2010,
   https://doi.org/10.1145/1787234.1787249 — P, anglais, **métadonnées seulement** (page CACM
   en 403).
3. E. W. Dijkstra, « A note on two problems in connexion with graphs », *Numer. Math.* 1, 1959,
   https://doi.org/10.1007/BF01386390 — P, anglais, **métadonnées seulement** (+ citation
   reprise par Schrijver).
4. A. Schrijver, « On the History of the Shortest Path Problem », *Documenta Math.*, vol. ISMP,
   2012, p. 155-167,
   https://www.maths.tcd.ie/EMIS/journals/DMJDMV/vol-ismp/32_schrijver-alexander-sp.pdf — R,
   anglais, **lu partiellement** (sections Case 1957, Bellman, Dijkstra, Moore).
5. R. Bellman, « On a routing problem », *Quart. Appl. Math.* 16(1), 1958, p. 87-90,
   https://doi.org/10.1090/qam/102435 — P, anglais, **métadonnées seulement**.
6. E. W. Dijkstra Archive, University of Texas at Austin, https://www.cs.utexas.edu/~EWD/ —
   P (archive), anglais, **lu** (page d'accueil).
7. D. Gries, « Edsger Dijkstra and the shortest-path algorithm », notes de cours Cornell, 2017,
   https://courses.cs.cornell.edu/cs2110/2017sp/online/shortestPath/01shortestPathHistory.pdf —
   S, anglais, **lu** (2 pages).

### Points d'attention
- **Date** : l'invention est de 1956 selon Dijkstra lui-même, la publication de 1959. Écrire
  « conçu en 1956, publié en 1959 ».
- **Fiancée** : Gries la nomme et précise qu'elle était elle-même programmeuse au Centre
  mathématique ; c'est une personne privée : ne pas la nommer, dire « sa fiancée ».
- Ne pas écrire que Dijkstra a « inventé » le plus court chemin : au moins Leyzorek et al. (1957)
  décrivent la même méthode avant lui (Schrijver).
- Les temps d'exécution modernes (O(m log n) avec un tas) sont postérieurs (Johnson 1972,
  Fredman-Tarjan 1987), d'après Schrijver.

---

## 2. A* et le robot Shakey (SRI)

### Formulation sûre
A* a été mis au point au Stanford Research Institute (SRI, Californie) pour Shakey, un robot
mobile étudié de 1966 à 1972. L'idée : à chaque étape, explorer d'abord le point qui minimise
« distance déjà parcourue + estimation de la distance restante » (à vol d'oiseau). Si
l'estimation ne surestime jamais la vraie distance (heuristique « admissible »), A* trouve
toujours le plus court chemin, en explorant en général bien moins de points que Dijkstra.

### Faits clés
- Article : P. Hart, N. Nilsson, B. Raphael, « A Formal Basis for the Heuristic Determination of
  Minimum Cost Paths », *IEEE Trans. Systems Science and Cybernetics* 4(2), 1968, p. 100-107
  (métadonnées Crossref ; juillet 1968 selon le dossier IEEE Milestone).
- Récit de Nils Nilsson : il propose comme estimation « the "airline distance," ignoring any
  intervening obstacles » ; Bertram Raphael, « who was directing work on Shakey at that time »,
  propose d'y ajouter la distance déjà parcourue ; Peter Hart conclut que si l'estimation
  « was never larger than the actual remaining distance », la méthode « would always find a path
  having the shortest distance to the goal ».
- Le nom : « The "A" was for algorithm and the "∗" denoted its special property of finding
  shortest paths. » Nilsson : « I think Hart and Raphael did most of the heavy lifting in
  devising the proofs. »
- Précurseur cité par Nilsson : la méthode heuristique de J. Doran et Donald Michie pour le
  taquin (Graph Traverser).
- Shakey : « From 1966 through 1972, the Artificial Intelligence Center at SRI conducted
  research on a mobile robot system nicknamed "Shakey." » (SRI). Projet lancé par Charles Rosen
  (mémo de novembre 1963, selon Nilsson), puis dirigé par Nilsson, Raphael et Hart (IEEE).
- Postérité selon le dossier IEEE : itinéraires routiers, jeux vidéo ; les rovers martiens
  Spirit, Opportunity et Curiosity utilisent un dérivé, « Field D* ».

### Sources
1. P. E. Hart, N. J. Nilsson, B. Raphael, article de 1968, https://doi.org/10.1109/TSSC.1968.300136
   — P, anglais, **métadonnées seulement** (IEEE Xplore inaccessible).
2. N. J. Nilsson, *The Quest for Artificial Intelligence*, Cambridge University Press, 2010,
   version auteur : https://ai.stanford.edu/~nilsson/QAI/qai.pdf — P (témoignage d'un des
   auteurs) / R, anglais, **lu partiellement** (§ 12.1, p. 213-221).
3. IEEE Milestones, « Shakey: The World's First Mobile, Intelligent Robot, 1972 »,
   https://ieeemilestones.ethw.org/Milestones:Shakey:_The_World%E2%80%99s_First_Mobile,_Intelligent_Robot,_1972
   — R (dossier de candidature), anglais, **lu partiellement**.
4. SRI International, notice « Shakey the Robot » (N. J. Nilsson éd., 1984),
   https://www.sri.com/publication/artificial-intelligence-pubs/shakey-the-robot-pub/ — P,
   anglais, **résumé seulement**.

### Points d'attention
- « Premier robot mobile intelligent » est la formule de l'IEEE : ne pas la reprendre sans
  guillemets ni attribution.
- L'admissibilité garantit l'optimalité ; avec une heuristique qui surestime, A* va plus vite
  mais peut rater le meilleur chemin (à dire en 🔴).
- Nilsson attribue l'idée du « coût déjà parcouru » à Raphael et la condition d'optimalité à
  Hart : trois contributions distinctes, pas un génie unique.

---

## 3. Les calculateurs d'itinéraires d'aujourd'hui

### Formulation sûre
Le GPS ne calcule pas d'itinéraire : les satellites donnent seulement une position ; le trajet
est calculé par un logiciel à partir d'une carte. Sur un réseau routier continental (des
millions de carrefours), un Dijkstra « brut » prendrait plusieurs secondes par trajet. Les
services font donc un **précalcul** : ils ajoutent au graphe des raccourcis (hiérarchies de
contraction) ou le découpent en zones (CRP), ce qui ramène une requête à une fraction de
milliseconde. Le trafic se prend en compte en mettant à jour les « coûts » (temps de parcours)
des routes, ce que certaines méthodes permettent en quelques secondes.

### Faits clés
- Synthèse de référence (Bast et al., 2015/2016) : « one can compute driving directions in
  milliseconds or less even at continental scale ».
- Mesures sur le réseau d'Europe de l'Ouest (18 millions de sommets, 42,5 millions d'arcs) :
  Dijkstra parcourt en moyenne 9 326 696 sommets en ≈ 2,2 s ; les hiérarchies de contraction
  (CH) 280 sommets en 110 µs ; CRP 2 766 sommets en 1,65 ms (tableau 1). Les méthodes CRP, CH,
  Arc Flags sont « three to four orders of magnitude faster » que Dijkstra.
- Hiérarchies de contraction : Geisberger, Sanders, Schultes, Delling, « Contraction
  Hierarchies: Faster and Simpler Hierarchical Routing in Road Networks », WEA 2008, LNCS,
  p. 319-333. Principe : on « contracte » les sommets du moins au plus important en ajoutant des
  raccourcis.
- CRP : Delling, Goldberg, Pajor, Werneck (SEA 2011 ; version longue *Transportation Science*
  51(2), 2017). Le précalcul est séparé en une partie indépendante des coûts et une
  « personnalisation » rapide : « one should be able to incorporate a new cost function quickly
  to account for current traffic conditions ».
- Usage industriel (selon la synthèse) : « Microsoft's Bing Maps use CRP for routing in road
  networks. OSRM [...] uses CH for queries. » TomTom utilise une variante d'Arc Flags ;
  Transfer Patterns est utilisé pour les transports en commun de Google Maps depuis 2010.
  Mais : « companies tend to be secretive about the actual algorithms they use ».
- GPS.gov : « GPS satellites only provide location signals, not maps. »

### Sources
1. H. Bast, D. Delling, A. Goldberg, M. Müller-Hannemann, T. Pajor, P. Sanders, D. Wagner,
   R. F. Werneck, « Route Planning in Transportation Networks », arXiv:1504.05140 (2015),
   https://arxiv.org/abs/1504.05140 ; publié dans *Algorithm Engineering*, LNCS 9220, 2016,
   https://doi.org/10.1007/978-3-319-49487-6_2 — R, anglais, **lu partiellement** (résumé,
   § 2.3, 2.7, 3, conclusion).
2. R. Geisberger, P. Sanders, D. Schultes, D. Delling, « Contraction Hierarchies », WEA 2008,
   https://doi.org/10.1007/978-3-540-68552-4_24 — P, anglais, **métadonnées seulement**.
3. D. Delling, A. V. Goldberg, T. Pajor, R. F. Werneck, « Customizable Route Planning », SEA
   2011, https://doi.org/10.1007/978-3-642-20662-7_32 ; « Customizable Route Planning in Road
   Networks », *Transportation Science* 51(2), 2017, https://doi.org/10.1287/trsc.2014.0579 —
   P, anglais, **métadonnées seulement**.
4. GPS.gov (gouvernement des États-Unis), « My Address Is Wrong! »,
   https://www.gps.gov/my-address-wrong — Pr, anglais, **lu** ; renvoi général :
   https://www.gps.gov/driving-gps (lu).

### Points d'attention
- Les chiffres datent de 2015 et d'une machine de référence : présenter en ordres de grandeur
  (« des secondes » contre « des microsecondes »).
- Ne pas affirmer quel algorithme utilise Google Maps pour la voiture : non public (seul
  Transfer Patterns pour les transports en commun est documenté dans la synthèse).
- Le système GPS (satellites, trilatération) relève d'un autre module : simple renvoi.

---

## 4. Le problème du voyageur de commerce (TSP)

### Formulation sûre
Trouver la tournée la plus courte qui passe une fois par chaque ville et revient au départ :
facile à énoncer, très difficile à résoudre quand le nombre de villes grandit. Le mathématicien
Karl Menger le pose à Vienne en 1930 ; en 1954, trois chercheurs de la RAND prouvent la
meilleure tournée pour 49 villes américaines. Aujourd'hui, le logiciel Concorde a résolu
exactement un problème de 85 900 points (2006). On sait depuis 1972 que le problème appartient
à la famille des problèmes « NP-difficiles » : aucune méthode rapide n'est connue pour tous les
cas, mais on sait en résoudre de très grands en pratique.

### Faits clés
- Racines : cycles hamiltoniens de Kirkman (1856) et Hamilton (1856-1858, « jeu icosien »)
  (Cook ; Schrijver). Un manuel allemand de 1832 pour voyageurs de commerce pose déjà le
  problème sans mathématiques : « so viele Orte wie möglich mitzunehmen, ohne den nämlichen Ort
  zweimal berühren zu müssen » (Schrijver).
- Menger, séance du 5 février 1930 de son *Mathematisches Kolloquium* à Vienne :
  « Botenproblem » (problème du messager), « weil diese Frage in der Praxis von jedem
  Postboten [...] zu lösen ist » ; il note que la règle « aller au point le plus proche » ne
  donne pas en général le plus court chemin (Schrijver, *History of CO*).
- Le nom « traveling salesman problem » : origine incertaine ; Merrill Flood : « I don't know
  who coined the peppier name ». Julia Robinson l'utilise dans le titre d'un rapport RAND du
  5 décembre 1949 (« On the Hamiltonian game (a traveling salesman problem) »).
- 1954 : Dantzig, Fulkerson, Johnson, « Solution of a Large-Scale Traveling-Salesman Problem »,
  *J. Operations Research Soc. of America* 2(4), p. 393-410 : « a certain tour of 49 cities, one
  in each of the 48 states and Washington, D.C., has the shortest road distance » (résumé).
- Records (site de W. Cook) : 1954, 49 villes → 2006, **85 900 points** (pla85900, circuit
  imprimé VLSI des Bell Labs), Applegate, Bixby, Chvátal, Cook, Espinoza, Goycoolea, Helsgaun.
  « The largest solved instance of the traveling salesman problem consists of a tour through
  85,900 cities ». Calcul « carried out in 2005/06 ».
- Plus grand problème **routier** : 81 998 bars de Corée du Sud (calculs décembre 2024-mars 2025,
  Roskilde et Waterloo), « the largest road-map instance of the TSP that has been solved to
  provable optimality » ; 178 jours de marche.
- Concorde : programme en C ; a résolu « the full set of 110 TSPLIB instances ».
- NP-difficulté : Karp, « Reducibility among Combinatorial Problems » (conférence IBM, mars
  1972 ; actes p. 85-103) montre que 21 problèmes sont NP-complets, dont le circuit hamiltonien
  (Johnson 2012). Le TSP, qui le généralise, est donc NP-difficile. Cook (1971) et Levin
  (indépendamment) avaient posé la théorie.

### Sources
1. W. Cook, site « Traveling Salesman Problem », Univ. of Waterloo,
   https://www.math.uwaterloo.ca/tsp/ ; pages lues : /history/index.html,
   /history/milestone.html, /pla85900/index.html, /korea/index.html, /concorde/index.html — P
   (équipe auteure des records), anglais, **lu**.
2. A. Schrijver, « On the history of combinatorial optimization (till 1960) », CWI,
   https://homepages.cwi.nl/~lex/files/histco.pdf — R, anglais/allemand, **lu partiellement**
   (§ 7 et Robinson 1949).
3. G. Dantzig, R. Fulkerson, S. Johnson, 1954, https://doi.org/10.1287/opre.2.4.393 — P,
   anglais, **résumé seulement** (OpenAlex).
4. R. M. Karp, 1972, https://doi.org/10.1007/978-1-4684-2001-2_9 — P, anglais,
   **métadonnées seulement**.
5. D. S. Johnson, « A Brief History of NP-Completeness, 1954-2012 », *Documenta Math.* vol.
   ISMP, 2012, https://www.maths.tcd.ie/EMIS/journals/DMJDMV/vol-ismp/50_johnson-david.pdf — R,
   anglais, **lu partiellement**.

### Points d'attention
- Le problème de 1954 est appelé « dantzig42 » dans le tableau de Cook : 49 villes, mais
  réduites à 42 dans le calcul (à vérifier avant de détailler ; dire « 49 villes »).
- Distinguer « plus grand résolu à l'optimum » (85 900, 2006) et « plus grand sur routes
  réelles » (81 998, 2025). Des instances plus grandes (étoiles, 1,33 milliard) ont des tournées
  très bonnes **sans preuve d'optimalité**.
- « NP-difficile » ne veut pas dire « impossible » : Cook dénonce justement les articles qui
  disent qu'on ne peut pas résoudre 22 villes.
- Menger est « le premier mathématicien à avoir écrit » sur le problème selon Schrijver
  (« seems to be ») : rester prudent, et rappeler le manuel de 1832.

---

## 5. Algorithmes génétiques et calcul évolutionnaire

### Formulation sûre
L'idée d'imiter l'évolution sur ordinateur naît dans les années 1950 et 1960 dans plusieurs
pays à la fois : Nils Aall Barricelli à Princeton (1953), Alex Fraser en Australie (1957),
Ingo Rechenberg et Hans-Paul Schwefel à Berlin (stratégies d'évolution, années 1960), Lawrence
Fogel aux États-Unis. John Holland (université du Michigan) donne en 1975 le cadre des
« algorithmes génétiques » : une population de solutions qu'on croise, mute et sélectionne. En
2006, la NASA a envoyé dans l'espace une antenne dessinée de cette façon.

### Faits clés
- Holland : *Adaptation in Natural and Artificial Systems*, Univ. of Michigan Press, 1975
  (référence [11] de Bäck et al.) ; article précurseur « Outline for a logical theory of
  adaptive systems », *J. ACM* 3, 1962. Mort le 9 août 2015 à 86 ans (Univ. du Michigan).
  Décrit comme des codes « that mimic sexually reproducing organisms » / « mimicked
  evolutionary processes by mating and mutating possible solutions ».
- Barricelli : premières expériences « while working in von Neumann's group » à l'Institute for
  Advanced Study (Princeton), automate cellulaire à une dimension, « symbioorganisms » (Taylor
  et al.) ; article « Esempi numerici di processi di evoluzione », *Methodos*, 1954.
- Fraser : « Simulation of Genetic Systems by Automatic Digital Computers I. Introduction »,
  *Australian J. Biological Sciences* 10(4), 1957, p. 484-491.
- Bäck, Hammel, Schwefel (1997) : origines « traced back to the late 1950's » (Bremermann,
  Friedberg, Box…) ; « The fundamental work of Holland, Rechenberg, Schwefel, and Fogel served to
  slowly change this picture during the 1970's ». Rechenberg : rapport traduit en 1965
  (« Cybernetic solution path of an experimental problem ») ; livre *Evolutionsstrategie*,
  1973 ; Schwefel : rapport de 1968 (tuyère à deux phases, Berlin), thèse TU Berlin 1975.
- Antenne ST5 (NASA) : « The north-facing antenna is an "evolved" antenna designed using a
  computer program based on a "genetic" algorithm » ; « The evolved antennas were the first
  evolved hardware flown in space. » Lancement des trois microsatellites le 22 mars 2006 (fusée
  Pegasus XL).
- Atouts mesurés par l'équipe NASA Ames : environ trois mois-personne pour concevoir et
  fabriquer l'antenne évoluée contre cinq pour l'antenne classique ; nouvelle antenne
  recalculée « in a few weeks » quand l'orbite a changé ; forme « organic looking » qu'un
  expert « would not likely produce ».

### Sources
1. T. Bäck, U. Hammel, H.-P. Schwefel, « Evolutionary Computation: Comments on the History and
   Current State », *IEEE Trans. Evolutionary Computation* 1(1), 1997 — copie :
   https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/01%20-%20EC-History-IEEETEC-1-1-1997.pdf
   — R (Schwefel est un des pionniers), anglais, **lu partiellement** (introduction,
   bibliographie).
2. T. Taylor, A. Dorin, K. Korb, « Digital Genesis: Computers, Evolution and Artificial Life »,
   arXiv:1512.02100, https://ar5iv.labs.arxiv.org/html/1512.02100 — R, anglais,
   **lu partiellement** (via résumé automatique du passage Barricelli).
3. A. S. Fraser, 1957, https://doi.org/10.1071/BI9570484 — P, anglais, **métadonnées seulement**.
4. Univ. of Michigan, Center for the Study of Complex Systems, avis de décès (août 2015),
   https://prod.lsa.umich.edu/cscs/news-events/all-news/archived-news/2015/08/internationally-eminent-professor-john-holland-passes-away-at-ag.html
   — Pr, anglais, **lu** ; et Département de psychologie,
   https://prod.lsa.umich.edu/psych/news-events/all-news/archived-news/2015/08/john-henry-holland--who-computerized-evolution--dies-at-86.html
   — Pr, anglais, **lu**.
5. C. Carlisle (NASA Goddard), « Space Technology 5 - A Successful Micro-Satellite
   Constellation Mission », NTRS 20080013221,
   https://ntrs.nasa.gov/api/citations/20080013221/downloads/20080013221.pdf — P, anglais,
   **lu partiellement**.
6. G. Hornby, A. Globus, D. Linden, J. Lohn, « Automated Antenna Design with Evolutionary
   Algorithms », AIAA Space 2006, NTRS 20060024675,
   https://ntrs.nasa.gov/citations/20060024675 — P, anglais, **résumé seulement** (résumé long).
7. J. Lohn et al., « Evolutionary Design of an X-Band Antenna for NASA's Space Technology 5
   Mission », 2003, NTRS 20030067398, https://ntrs.nasa.gov/citations/20030067398 — P,
   anglais, **résumé seulement**.

### Points d'attention
- Holland n'est pas « l'inventeur » du calcul évolutionnaire : plusieurs lignées
  indépendantes (États-Unis, Allemagne, Australie). Parler de « pères et mères multiples ».
- La page CSCS du Michigan se trompe de titre (« Adaptation in Complex Adaptive Systems ») : le
  bon titre est *Adaptation in Natural and Artificial Systems*. Elle affirme aussi que Holland a
  reçu « the first Ph.D. in Computer Science ever awarded by the University of Michigan »
  (1959) : une seule source, institutionnelle, à ne pas reprendre sans seconde source.
- Antenne : l'article de 2003 parlait d'un lancement prévu en 2004 ; le lancement réel est le
  22 mars 2006. Le résumé de 2003 dit les antennes évoluées « comparables », les textes ultérieurs
  disent « meilleures » : rester sur « conforme aux exigences et plus simple à fabriquer ».
- Barricelli : dates de séjour à l'IAS et pages de l'article de 1954 seulement en secondaire.

---

## 6. Colonies de fourmis

### Formulation sûre
Des biologistes de l'Université libre de Bruxelles (Deneubourg, Aron, Goss, Pasteels) ont
relié un nid de fourmis d'Argentine à de la nourriture par deux ponts. Quand les deux ponts ont
la même longueur, la colonie finit par en choisir un au hasard ; quand l'un est plus court, elle
choisit le plus court, parce que les phéromones s'y accumulent plus vite. Marco Dorigo, à
l'École polytechnique de Milan, s'en inspire au début des années 1990 : des « fourmis
virtuelles » déposent des phéromones numériques sur les bons trajets du voyageur de commerce.

### Faits clés
- Double pont, branches égales : Deneubourg, Aron, Goss, Pasteels, « The self-organizing
  exploratory pattern of the argentine ant », *J. Insect Behavior* 3(2), 1990, p. 159-168.
  Dorigo et al. 2006 : « after some time the whole colony converges toward the use of the same
  bridge » ; répété plusieurs fois, « each of the two bridges is used in about 50% of the cases ».
- Branches inégales : Goss, Aron, Deneubourg, Pasteels, « Self-organized shortcuts in the
  Argentine ant », *Naturwissenschaften* 76(12), 1989, p. 579-581. « The short bridge receives,
  therefore, pheromone earlier than the long one ».
- Notion de **stigmergie** (communication indirecte par l'environnement) : Pierre-Paul Grassé,
  entomologiste français, à propos des termites (années 1940-1950).
- Dorigo : rapport technique avec Maniezzo et Colorni (Politecnico di Milano, 1991) ; thèse en
  italien « Optimization, learning and natural algorithms », Politecnico di Milano, 1992 ;
  article « Ant System: optimization by a colony of cooperating agents », *IEEE Trans. SMC
  Part B* 26(1), 1996, p. 29-41, qui applique la méthode au voyageur de commerce et la compare au
  recuit simulé et à la recherche tabou (résumé).
- Résumé de 1996 : « The main characteristics of this model are positive feedback, distributed
  computation, and the use of a constructive greedy heuristic. »
- Application réseau : AntNet (Di Caro et Dorigo) pour le routage dans les réseaux de
  communication (référence citée dans Dorigo et al. 2006) — lien possible avec le module
  « réseau ».

### Sources
1. M. Dorigo, M. Birattari, T. Stützle, « Ant Colony Optimization: Artificial Ants as a
   Computational Intelligence Technique », *IEEE Computational Intelligence Magazine*, nov.
   2006 — copie : https://www.cs.princeton.edu/courses/archive/fall24/cos597C/bib2/Ant_colony_optimization.pdf
   — R (par l'inventeur), anglais, **lu partiellement** (p. 28-30, bibliographie).
2. S. Goss, S. Aron, J.-L. Deneubourg, J. M. Pasteels, 1989, https://doi.org/10.1007/BF00462870
   — P, anglais, **métadonnées seulement**.
3. J.-L. Deneubourg, S. Aron, S. Goss, J. M. Pasteels, 1990, https://doi.org/10.1007/BF01417909
   — P, anglais, **métadonnées seulement**.
4. M. Dorigo, V. Maniezzo, A. Colorni, 1996, https://doi.org/10.1109/3477.484436 — P, anglais,
   **résumé seulement**.

### Points d'attention
- Les deux articles de biologie n'ont été vus qu'en métadonnées ; la description de l'expérience
  vient de la synthèse de Dorigo (figure 1 : pont de 15 cm, angle de 60° pour la version à
  branches inégales). Idéalement, lire les originaux (Springer, payant).
- Ordre des auteurs : Goss est premier auteur en 1989, Deneubourg en 1990.
- Dorigo est aujourd'hui à l'ULB (IRIDIA), d'après l'affiliation de l'article de 2006.

---

## 7. Optimisation par essaims particulaires

### Formulation sûre
En 1995, James Kennedy, psychologue social, et Russell Eberhart, ingénieur, proposent de
chercher le meilleur réglage d'un problème avec un « essaim » de points qui se déplacent : chacun
est attiré à la fois par la meilleure position qu'il a trouvée et par la meilleure trouvée par
le groupe. L'idée vient de simulations de vols d'oiseaux, notamment les « boids » de Craig
Reynolds (1986-1987), qui suivent trois règles simples : séparation, alignement, cohésion.

### Faits clés
- Kennedy & Eberhart, « Particle swarm optimization », *Proc. ICNN'95*, vol. 4, p. 1942-1948.
  « The method was discovered through simulation of a simplified social model ».
- Affiliations de l'article : Kennedy, Washington DC (adresse bls.gov, Bureau of Labor
  Statistics) ; Eberhart, Purdue School of Engineering and Technology, Indianapolis.
- Inspirations citées : « Notably, Reynolds and Heppner and Grenander presented simulations of
  bird flocking. Reynolds was intrigued by the aesthetics of bird flocking choreography, and
  Heppner, a zoologist, was interested in discovering the underlying rules » ; le sociobiologiste
  E. O. Wilson sur les bancs de poissons. Étape « cornfield vector » (oiseaux cherchant de la
  nourriture).
- Reynolds : « In 1986 I made a computer model of coordinated animal motion such as bird flocks
  and fish schools. [...] I called the generic simulated flocking creatures boids. » Trois
  règles : « Separation », « Alignment », « Cohesion ». Article SIGGRAPH 1987, « Flocks, herds
  and schools: A distributed behavioral model », p. 25-34. Premier long métrage à l'utiliser
  selon lui : *Batman Returns* (1992), chauves-souris et pingouins.

### Sources
1. J. Kennedy, R. Eberhart, 1995, https://doi.org/10.1109/ICNN.1995.488968 — copie :
   https://www.asc.ohio-state.edu/statistics/comp_exp/jour.club/KenEbe1995.pdf — P, anglais,
   **lu partiellement** (p. 1-2).
2. C. W. Reynolds, « Boids (Flocks, Herds, and Schools: a Distributed Behavioral Model) »,
   https://www.red3d.com/cwr/boids/ — P (page de l'auteur), anglais, **lu**.
3. C. W. Reynolds, 1987, https://doi.org/10.1145/37401.37406 — P, anglais, **métadonnées
   seulement**.

### Points d'attention
- Les boids sont un modèle d'**animation**, pas d'optimisation : l'essaim particulaire en dérive
  par étapes successives, à expliquer comme tel.
- Le titre de « premier film » vient de Reynolds lui-même : l'attribuer.

---

## 8. Recuit simulé

### Formulation sûre
En métallurgie, on recuit un métal en le chauffant puis en le refroidissant lentement, pour que
ses atomes trouvent un arrangement plus stable. Le recuit simulé fait pareil avec une solution :
au début (« chaud »), on accepte souvent des changements qui empirent la solution, pour ne pas
rester coincé ; puis on devient de plus en plus exigeant. La méthode a été publiée en 1983 par
Kirkpatrick, Gelatt et Vecchi (IBM) et, indépendamment, par Vlado Černý (Bratislava, publié en
1985). Elle s'appuie sur une méthode de physique de 1953, l'algorithme de Metropolis.

### Faits clés
- Kirkpatrick, Gelatt, Vecchi, « Optimization by Simulated Annealing », *Science* 220(4598),
  13 mai 1983, p. 671-680. Résumé : « A detailed analogy with annealing in solids provides a
  framework for optimization of the properties of very large and complex systems. »
- Černý, « Thermodynamical approach to the traveling salesman problem: An efficient simulation
  algorithm », *J. Optimization Theory and Applications* 45(1), janvier 1985, p. 41-51
  (affiliation OpenAlex : université Comenius de Bratislava).
- Base physique : Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller, E. Teller,
  « Equation of State Calculations by Fast Computing Machines », *J. Chem. Phys.*, 1953 ;
  calculs sur l'ordinateur MANIAC de Los Alamos (résumé).

### Sources
1. S. Kirkpatrick, C. D. Gelatt, M. P. Vecchi, 1983, https://doi.org/10.1126/science.220.4598.671
   — P, anglais, **résumé seulement**.
2. V. Černý, 1985, https://doi.org/10.1007/BF00940812 — P, anglais, **métadonnées seulement**.
3. N. Metropolis et al., 1953, https://doi.org/10.1063/1.1699114 — P, anglais, **résumé
   seulement**.

### Points d'attention
- Indépendance de Černý : elle est communément admise, mais je ne l'ai pas lue dans une source
  ouverte ici (voir « Non vérifié »). Écrire « publiée aussi par Černý ».
- La « température » est une image : pas de chaleur réelle dans l'ordinateur.

---

## 9. L'optimisation dans la vie courante

### Formulation sûre
Exemple 1 : le transporteur UPS indique que son système ORION calcule chaque jour la tournée de
ses chauffeurs américains ; selon l'entreprise, il économise des millions de litres de carburant
par an. Exemple 2 : Parcoursup, qui répartit les places dans l'enseignement supérieur, est une
adaptation de l'algorithme d'« acceptation différée » de Gale et Shapley (1962), dont la théorie
a valu en 2012 le prix d'économie en mémoire d'Alfred Nobel à Lloyd Shapley et Alvin Roth. Ce
n'est pas un problème de plus court chemin, mais un problème d'**appariement**.

### Faits clés — UPS ORION (chiffres de l'entreprise)
- Article écrit par cinq employés d'UPS (*Interfaces* 47(1), 2017, p. 8-23) : ORION fournit
  chaque jour un itinéraire optimisé « for each of UPS' 55,000 U.S. drivers » ; coût « more than
  $295 million » ; économie attendue « $300–$400 million annually » ; « 100,000 tons » de CO₂ en
  moins par an. Il s'agit d'un système « meta-heuristic ».
- Page INFORMS (prix Franz Edelman 2016) : 10 millions de gallons de carburant par an estimés
  (≈ 38 millions de litres), « more than 35,000 of 55,000 U.S. drivers » utilisateurs en
  décembre 2015, coût de déploiement estimé à « $250 million ».

### Faits clés — Parcoursup
- Gale & Shapley, « College Admissions and the Stability of Marriage », *American Mathematical
  Monthly* 69(1), 1962, p. 9-15.
- Comité Nobel : « Shapley and his colleagues derived specific methods – in particular, the
  so-called Gale-Shapley algorithm – that always ensure a stable matching. » Lauréats 2012 :
  Roth et Shapley, « for the theory of stable allocations and the practice of market design ».
- Claire Mathieu (CNRS, ancienne chargée de mission Parcoursup) : « comme son prédécesseur APB
  [...] Parcoursup serait basé sur l'algorithme de Gale et Shapley, mais sans hiérarchisation par
  les candidats avant exécution de l'algorithme » ; les candidats ne révèlent leur préférence
  « que lorsqu'ils ont plusieurs propositions ». Elle a travaillé avec Hugo Gimbert.
- Le ministère publie un « Document de présentation des algorithmes de Parcoursup » et le code
  du cœur algorithmique.

### Sources
1. C. Holland, J. Levis, R. Nuggehalli, B. Santilli, J. Winters, « UPS Optimizes Delivery
   Routes », *Interfaces* 47(1), 2017, https://doi.org/10.1287/inte.2016.0875 — P (entreprise),
   anglais, **résumé seulement**.
2. INFORMS, « UPS On-Road Integrated Optimization and Navigation (ORION) Project »,
   https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/UPS-On-Road-Integrated-Optimization-and-Navigation-ORION-Project
   — Pr, anglais, **lu** (via résumé automatique).
3. D. Gale, L. S. Shapley, 1962, https://doi.org/10.1080/00029890.1962.11989827 — P, anglais,
   **métadonnées seulement**.
4. Nobelprize.org, communiqué 2012,
   https://www.nobelprize.org/prizes/economic-sciences/2012/press-release/ — P, anglais,
   **lu partiellement** ; API officielle (lauréats et motivation) :
   https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=2012&nobelPrizeCategory=eco — P,
   **lu**.
5. L. Réveillère (dir.), « Journée sur les algorithmes d'aide à la décision publique », *1024 –
   Bulletin de la SIF* n° 22, nov. 2023, https://1024.socinfo.fr/2023/11/1024_22_2023_13.pdf —
   P (témoignage de C. Mathieu) / R, français, **lu partiellement** (p. 15-17 et synthèse).
6. MESRI, « Document de présentation des algorithmes de Parcoursup » (version 2019),
   https://www.enseignementsup-recherche.gouv.fr/sites/default/files/content_migration/document/Presentation_Algorithmes_Parcoursup2019_1133522.pdf
   — P, français, **lu partiellement** (contexte) ; version 2018 sur la page de C. Mathieu :
   https://www.irif.fr/_media/users/claire/presentation_algorithmes_parcoursup.pdf (lu
   partiellement).

### Points d'attention
- UPS : chiffres **de l'entreprise** (même l'article *Interfaces* est signé par des employés) ;
  les deux sources divergent sur le coût (250 ou 295 M$). Écrire « selon UPS ».
- Le document ministériel ne mentionne pas Gale-Shapley (recherche dans le texte) ; la filiation
  est affirmée par C. Mathieu. Ne pas écrire « Parcoursup = Gale-Shapley » mais « une
  adaptation ».
- **Erreur dans le bulletin SIF** (compte rendu de l'exposé d'un autre intervenant) : « Il a valu
  à Gale le prix Nobel 2012 d'économie (Shapley ne pouvait le recevoir...) ». C'est l'inverse :
  le prix est allé à **Shapley** et Roth (nobelprize.org). Ne pas reprendre ce passage.
- Rester factuel : Parcoursup est controversé (classements des formations, opacité locale) ;
  l'algorithme national n'est qu'une partie de la procédure.
- Planning hospitalier / emplois du temps : pas de source lue dans ce lot (voir plus bas).

---

## 10. Personnes à mettre en avant (faits professionnels)

- **Edsger W. Dijkstra** (1930-2002) : physicien théoricien devenu programmeur au Centre
  mathématique d'Amsterdam ; diplôme en 1956 ; plus de mille manuscrits EWD ; fin de carrière à
  l'université du Texas à Austin. Sources : OH 330 (lu) ; archive EWD (lu).
- **Peter Hart, Nils Nilsson, Bertram Raphael** : chercheurs au SRI ; Raphael dirigeait les
  travaux sur Shakey (selon Nilsson), après une thèse au MIT sur le système SIR ; Hart venait
  d'obtenir son doctorat à Stanford ; Nilsson a ensuite écrit *The Quest for AI* (2010).
  Sources : Nilsson (lu partiellement) ; IEEE Milestone (lu partiellement).
- **Marco Dorigo** : thèse au Politecnico di Milano (1992) ; Ant System (1991-1996) avec Vittorio
  Maniezzo et Alberto Colorni ; Université libre de Bruxelles en 2006. Source : Dorigo et al.
  2006 (lu partiellement).
- **John H. Holland** (1929-2015) : professeur de psychologie et d'informatique à l'université du
  Michigan ; livre de 1975 ; bourse MacArthur 1992 (non relu : voir plus bas). Sources : pages
  du Michigan (lues).
- **Nils Aall Barricelli** : expériences d'évolution numérique sur l'ordinateur de l'IAS de
  Princeton dès 1953. Source : Taylor et al. (lu partiellement).
- **Ailsa Land** (1927-2021) : toute sa carrière à la London School of Economics (BSc 1950, PhD
  1956) ; avec Alison Doig, article de 1960 dans *Econometrica* qui « introduced the
  branch-and-bound method in integer programming » (LSE) ; « in 1980 she was the first woman to
  become a chaired professor in Operational Research in the UK » (LSE) ; « the first woman
  professor of operational research in Britain » (INFORMS) — deux sources institutionnelles
  concordantes. Médaille d'or EURO 2021 (posthume). Calculs faits à la main sur calculatrices de
  bureau : « multiplying with the left hand, and adding and subtracting with the right on another
  machine! » (Land et Doig, mémoire de 2010, cité par Cook).
- **Alison Doig, devenue Alison Harcourt** : co-autrice de la méthode de 1960 ; nom de mariage
  Harcourt (et **non « Harris »** comme indiqué dans la commande : Cook et la LSE écrivent
  « Alison (Doig) Harcourt » / « Alison Harcourt (née Doig) ») ; ancienne étudiante puis
  enseignante à l'université de Melbourne ; ordre d'Australie (AO) en 2019 (Pearcey).
- **Julia Robinson** : rapport RAND de décembre 1949 « On the Hamiltonian game (a traveling
  salesman problem) » ; une tentative « unsuccessful » sur le TSP l'a menée à une méthode pour le
  problème d'affectation (Schrijver ; Cook).
- **Caroline Karel** : co-autrice, avec Little, Murty et Sweeney, de l'article de 1963 sur le TSP
  qui a donné son nom au « branch and bound » (Cook).
- **Arianna W. Rosenbluth** (1927-2020) : physicienne à Los Alamos, co-autrice de l'article
  Metropolis de 1953 (base du recuit simulé) ; elle a programmé le MANIAC I pour ce calcul
  (Radcliffe Institute, Harvard ; une seule source lue). **Augusta H. Teller** est aussi
  co-autrice (métadonnées).
- **Hannah Bast** (université de Fribourg-en-Brisgau) et **Dorothea Wagner** (KIT, Karlsruhe) :
  co-autrices de la synthèse de référence sur le calcul d'itinéraires (affiliations de l'article,
  lu).
- **Claire Mathieu** : directrice de recherche CNRS en informatique, membre de l'Académie des
  sciences, ancienne chargée de mission Parcoursup avec Hugo Gimbert (bulletin SIF, lu).

### Sources (complémentaires)
1. W. Cook, « Markowitz and Manne + Eastman + Land and Doig = Branch and Bound », *Documenta
   Math.* vol. ISMP, 2012, p. 227-238,
   https://www.maths.tcd.ie/EMIS/journals/DMJDMV/vol-ismp/38_cook-bill.pdf — R, anglais,
   **lu partiellement**.
2. A. H. Land, A. G. Doig, « An Automatic Method of Solving Discrete Programming Problems »,
   *Econometrica* 28(3), 1960, p. 497-520, https://doi.org/10.2307/1910129 — P, anglais,
   **résumé seulement**.
3. LSE, Department of Mathematics, « In memory of Ailsa Land (1927-2021) »,
   https://www.lse.ac.uk/Mathematics/News/In-memory-of-Ailsa-Land — Pr, anglais, **lu** (via
   résumé automatique).
4. INFORMS, « Ailsa H. Land », biographie,
   https://www.informs.org/Explore/History-of-O.R.-Excellence/Biographical-Profiles/Land-Ailsa-H
   — R, anglais, **lu** (via résumé automatique).
5. Pearcey Foundation, « Recognition for Alison Harcourt AO » (2019),
   https://pearcey.org.au/blog/2019/recognition-for-alison-harcourt-ao — Pr, anglais, **lu**.
6. Radcliffe Institute, « Flash of Genius » (Arianna Rosenbluth),
   https://www.radcliffe.harvard.edu/news-and-ideas/flash-of-genius — Pr, anglais,
   **lu partiellement**.

### Points d'attention
- Données personnelles : ne pas mentionner les causes de décès, la vie familiale (enfants,
  conjoint·es) ni le nom de la fiancée de Dijkstra. Le fait qu'Arianna Rosenbluth ait quitté la
  physique relève de la vie privée : à éviter ou à formuler sobrement.
- « Première femme professeure de RO au Royaume-Uni » : deux sources (LSE, INFORMS) mais toutes
  deux institutionnelles et proches ; la LSE précise « chaired professor » : garder cette
  nuance.
- Le rôle exact d'Arianna Rosenbluth dans la programmation est débattu entre témoignages (à
  présenter comme « selon… »).

---

## À vérifier plus tard

- Indépendance de Černý par rapport à Kirkpatrick et al. (rapport technique de 1982 ?) : non lu.
- Holland, « premier doctorat en informatique du Michigan » (1959) et bourse MacArthur 1992 :
  une seule source institutionnelle / résumé de moteur de recherche.
- Dates du séjour de Barricelli à l'IAS (1953-1956) et date du premier calcul (3 mars 1953,
  d'après un extrait de *Turing's Cathedral* de G. Dyson) : non lus en source primaire.
  Traduction anglaise de l'article de 1954 annoncée (Bianchi et Taylor) : non vérifiée.
- Rechenberg et Schwefel : date de 1964 (souvent citée) non lue ; seules les références de 1965,
  1968, 1973, 1975 sont confirmées par Bäck et al.
- Femmes du projet Shakey (par ex. Helen Chan Wolf) : Nilsson la cite pour la reconnaissance
  faciale avec Bledsoe, **pas** pour Shakey. Rien de vérifié.
- Éva Tardos : non recherchée faute de temps.
- Planning hospitalier / emplois du temps scolaires : aucune source lue (piste : E. K. Burke et
  al., « The state of the art of nurse rostering », *J. of Scheduling*, 2004 — non ouvert).
- Arianna Rosenbluth : article APS News (2022) et page du LANL inaccessibles (403 / erreur DNS) ;
  seconde source à trouver (par ex. J. E. Gubernatis, *Physics of Plasmas*, 2005).
- Contenu exact des articles de Dijkstra 1959, Hart et al. 1968, Goss 1989, Deneubourg 1990,
  Kirkpatrick 1983 (texte intégral) : vus en métadonnées ou résumé seulement.
- Ce que fait réellement Google Maps pour les itinéraires en voiture : non public.
- Chiffres UPS plus récents (« 100 millions de miles ») : seulement dans des études de cas
  secondaires.
