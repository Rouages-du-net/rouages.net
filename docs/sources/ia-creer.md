# Sources — Module « Les IA qui créent »

Dossier de sources du module `/modules/ia-creer/`, établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 16 octobre 2026. L'état des procès (§ 5)
  est daté de ce jour : à revérifier régulièrement.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué. sacem.fr et christies.com n'ont pas pu être ouverts.
- Aucune page Wikipédia n'est utilisée comme source.
- Corrections : l'opposition de la SACEM date d'octobre 2023 (et non de
  2022) ; les formules « premier·e » (Molnár, AARON, Stuttgart 1965,
  Belamy) sont reformulées sur la page.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** autre secondaire

---

## 1. Modèles de diffusion

### Formulation sûre
Un modèle de diffusion apprend à **enlever du bruit**. Pendant l'entraînement, on abîme des
images en y ajoutant un peu de bruit aléatoire, pas à pas, jusqu'à ce qu'il ne reste que de la
« neige » ; le réseau apprend à deviner, à chaque pas, quel bruit a été ajouté. Pour créer une
image, on part d'une neige pure et on applique ce débruitage des dizaines de fois, guidé par
le texte demandé. L'idée vient d'un article de 2015 (Sohl-Dickstein et al.), elle est devenue
performante en 2019-2020 (Song & Ermon ; Ho, Jain, Abbeel) et Stable Diffusion (2022) la fait
tourner dans un espace « compressé » pour la rendre moins coûteuse.

### Faits clés
- 2015 : l'approche consiste à « systematically and slowly destroy structure in a data
  distribution through an iterative forward diffusion process », puis à apprendre le
  processus inverse qui restaure la structure [1]. Auteurs : Jascha Sohl-Dickstein, Eric A.
  Weiss, Niru Maheswaranathan, Surya Ganguli (Stanford ; Berkeley pour Weiss) ; arXiv 12 mars
  2015 (publication à ICML 2015 non vérifiée) [1].
- Le nom « diffusion » vient de la thermodynamique hors équilibre (titre de [1]) : c'est une
  analogie physique, pas une description d'un « mélange » d'images.
- 2019 : Song & Ermon génèrent des images en suivant le « gradient » de la distribution des
  données, estimé par *score matching*, avec des niveaux de bruit décroissants (« annealed
  Langevin dynamics ») ; pas besoin d'entraînement adversarial [2]. Présenté à NeurIPS 2019.
- 2020 : DDPM (Ho, Jain, Abbeel, UC Berkeley) — FID de 3,17 et score Inception de 9,46 sur
  CIFAR-10 non conditionnel, « state-of-the-art » à l'époque [3].
- Déc. 2021 / CVPR 2022 : Latent Diffusion (Rombach, Blattmann, Lorenz, Esser, Ommer).
  Affiliations sur l'article : « Ludwig Maximilian University of Munich & IWR, Heidelberg
  University » et « Runway ML » (Esser) [4]. Les modèles de diffusion en pixels consomment
  « hundreds of GPU days » ; l'entraînement dans l'espace latent d'un auto-encodeur réduit
  fortement le calcul [4].
- Stable Diffusion : le dépôt CompVis indique « Stable Diffusion was made possible thanks to a
  collaboration with Stability AI and Runway » ; entraîné sur un sous-ensemble de LAION-5B,
  calcul fourni par Stability AI ; licence CreativeML OpenRAIL-M ; images 512×512 [5].
  Annonce de la diffusion publique par Stability AI le 22 août (2022) [6].

### Sources
1. Sohl-Dickstein J., Weiss E. A., Maheswaranathan N., Ganguli S., « Deep Unsupervised Learning
   using Nonequilibrium Thermodynamics », arXiv:1503.03585 — https://arxiv.org/abs/1503.03585
   — P — en — lu (résumé + 1re page du PDF).
2. Song Y., Ermon S., « Generative Modeling by Estimating Gradients of the Data
   Distribution », arXiv:1907.05600 — https://arxiv.org/abs/1907.05600 — P — en — lu
   partiellement (page résumé).
3. Ho J., Jain A., Abbeel P., « Denoising Diffusion Probabilistic Models »,
   arXiv:2006.11239 — https://arxiv.org/abs/2006.11239 — P — en — lu partiellement (résumé).
4. Rombach R. et al., « High-Resolution Image Synthesis with Latent Diffusion Models »,
   arXiv:2112.10752 — https://arxiv.org/abs/2112.10752 — P — en — lu (résumé + 1re page PDF).
5. CompVis, dépôt « stable-diffusion » — https://github.com/CompVis/stable-diffusion — P — en
   — lu partiellement.
6. Stability AI, « Stable Diffusion Public Release » —
   https://stability.ai/news-updates/stable-diffusion-public-release — P — en — lu
   partiellement (l'année n'est pas affichée sur la page).

### Points d'attention
- Ne pas dire que le modèle « colle des morceaux d'images » : il prédit du bruit. Mais ne pas
  dire non plus qu'il « ne garde rien » des images : voir la mémorisation (§ 3).
- « Inventeur de la diffusion » : éviter. 2015 (idée), 2019 (score), 2020 (DDPM) sont des
  étapes ; Song et al. 2021 (non lu ici) ont montré que les deux approches sont deux faces
  d'un même cadre.
- Le guidage par le texte (CLIP, *classifier-free guidance*) n'a pas été sourcé ici.
- Stable Diffusion n'est pas « de Stability AI » seulement : laboratoire universitaire
  (CompVis, LMU), Runway, Stability AI (calcul), LAION (données).

---

## 2. Avant la diffusion : GAN et art algorithmique

### Formulation sûre
Bien avant les IA actuelles, des artistes ont écrit des programmes qui dessinent : en 1965 à
Stuttgart, Georg Nees expose des dessins faits par ordinateur ; Frieder Nake, Vera Molnár et
Lillian Schwartz suivent ; Harold Cohen consacre des décennies à son programme AARON. En 2014,
Ian Goodfellow et ses collègues inventent les GAN : deux réseaux qui s'affrontent, l'un
fabrique des images, l'autre essaie de repérer les fausses. En 2018, un portrait produit
avec un GAN est vendu 432 500 $ chez Christie's, sur fond de polémique sur l'origine du code.

### Faits clés
- GAN : « a generative model G that captures the data distribution, and a discriminative model
  D that estimates the probability that a sample came from the training data rather than G »
  ; G cherche à faire se tromper D (« minimax two-player game ») [1]. Huit auteur·es,
  Université de Montréal, arXiv 10 juin 2014 [1].
- Georg Nees : exposition « computer grafik » du 4 au 19 février 1965, galerie
  expérimentale de Max Bense à la Technische Hochschule Stuttgart ; Nees était mathématicien
  chez Siemens-Schuckert à Erlangen et dessinait avec une table traçante Zuse Graphomat Z64,
  programmée en ALGOL [2].
- Frieder Nake et Nees : exposition à la galerie Wendelin Niedlich (Stuttgart), novembre
  1965 [3, résumé]. A. Michael Noll expose à New York (Howard Wise Gallery) en avril 1965 [3].
- Vera Molnár (Budapest 1924 – 2023), installée à Paris en 1947 ; méthode de la « machine
  imaginaire » dans les années 1960 ; en 1968, dessins par ordinateur relié à une table
  traçante ; rétrospective « Parler à l'œil », Centre Pompidou, 28 février – 26 août 2024 [4].
- Harold Cohen : AARON, présenté par le Whitney comme « the earliest artificial intelligence
  (AI) program for artmaking » ; développé à la fin des années 1960 à l'UC San Diego, nommé
  AARON au début des années 1970 ; exposition « Harold Cohen: AARON », Whitney, 3 février –
  19 mai 2024 (commissaire Christiane Paul) [5]. La date « 1973 » correspond à son passage
  au laboratoire d'IA de Stanford (1973-1975), connu seulement par un résumé de recherche [5b].
- Lillian Schwartz (1927-2024) : artiste en résidence aux Bell Labs à partir de la fin des
  années 1960 ; film « Pixillation » (1970), 4 minutes, réalisé avec des cartes perforées sur
  un IBM 7094 ; sculpture cinétique au MoMA en 1968 (« The Machine as Seen at the End of the
  Mechanical Age ») [6].
- « Portrait d'Edmond de Belamy » : vendu 432 500 $ le 25 octobre 2018 chez Christie's New
  York, estimation 7 000 – 10 000 $ ; collectif parisien Obvious (Hugo Caselles-Dupré,
  Pierre Fautrel, Gauthier Vernier) ; GAN entraîné sur environ 15 000 portraits du XIVe au
  XXe siècle ; « signé » de la formule de perte du GAN [7][8].
- Polémique : Obvious a reconnu avoir repris en grande partie le code publié en open source
  par Robbie Barrat, alors âgé de 19 ans. Caselles-Dupré : « If you're just talking about the
  code, then there is not a big percentage that has been modified » ; Barrat avait d'abord
  donné son accord (« I'm 100% okay with it ») puis contesté la vente ; Christie's indique
  qu'Obvious l'a crédité (catalogue, billet Medium) [8]. Critiques : Jerry Saltz
  (« 100 percent generic »), Mario Klingemann [7].

### Sources
1. Goodfellow I. J. et al., « Generative Adversarial Nets », arXiv:1406.2661 —
   https://arxiv.org/abs/1406.2661 — P — en — lu (résumé + 1re page PDF).
2. Digital Art Museum (DAM), notice « Georg Nees » —
   https://dam.org/museum/artists_ui/artists/nees-georg/ — S — en — lu partiellement.
3. Résultats de recherche (DAM, essai Nake/Lieser ; historyofinformation.com) —
   https://dam.org/museum/essays_ui/essays/frieder-nake-wolf-lieser-60-years-of-algorithmic-art/
   — S — en — résumé seulement.
4. Centre Pompidou, « Vera Molnár. Parler à l'œil » —
   https://www.centrepompidou.fr/fr/programme/agenda/evenement/PA7jRZ5 — P (institution) —
   fr — lu partiellement.
5. Whitney Museum, « Harold Cohen: AARON » — https://whitney.org/exhibitions/harold-cohen-aaron
   — P (institution) — en — lu partiellement. [5b] mention Stanford 1973-75 : même site,
   page non lue (résumé seulement).
6. Boston Globe (reprise de la nécrologie du New York Times), « Lillian Schwartz, pioneer in
   computer-generated art, dies at 97 », 15 oct. 2024 —
   https://www.bostonglobe.com/2024/10/15/metro/lillian-schwartz-pioneer-computer-generated-art-dies-97
   — Pr — en — lu partiellement.
7. Smithsonian Magazine, « Christie's Is First to Sell Art Made by Artificial Intelligence,
   But What Does That Mean? » —
   https://www.smithsonianmag.com/smart-news/christies-first-sell-art-made-artificial-intelligence-what-does-mean-180970642/
   — Pr — en — lu partiellement.
8. Hyperallergic, « Christie's Sells "AI-Generated" Art for $432,500 As Controversy Swirls
   Over Creators' Use of Copied Code », 29 oct. 2018 —
   https://hyperallergic.com/468060/christies-sells-ai-generated-art-for-432500-as-controversy-swirls-over-creators-use-of-copied-code/
   — Pr — en — lu partiellement.

### Points d'attention
- « Première exposition d'art par ordinateur » (Stuttgart, février 1965) : affirmé par le DAM
  [2] ; d'autres historien·nes discutent cette primauté. Préférer « l'une des premières ».
- « Première artiste en France à faire des dessins numériques (1968) » : affirmé par le
  Centre Pompidou [4] seul ; formuler « dès 1968 » sans « première ».
- « Premier programme d'IA pour l'art » (AARON) : formule du Whitney ; citer comme telle.
- « Première œuvre d'IA vendue aux enchères » (Belamy) : formule marketing de Christie's,
  à présenter comme telle ; de nombreux artistes utilisaient déjà les GAN.
- Ne pas mentionner le lieu de résidence des personnes (nécrologies, profils).

---

## 3. Mémorisation et copie

### Formulation sûre
Un modèle d'images n'est pas une photocopieuse, mais il peut **retenir** certaines images
d'entraînement et les recracher presque à l'identique, surtout celles qui apparaissaient
des centaines de fois dans les données. En 2023, des chercheur·ses ont ainsi récupéré une
centaine d'images quasi identiques à partir de Stable Diffusion, sur 175 millions d'essais
ciblés : c'est rare, mais réel. D'autres travaux montrent des copies partielles (un objet, un
décor) dans environ 2 % des images testées.

### Faits clés
- Carlini et al. (Google, DeepMind, ETH Zurich, Princeton, UC Berkeley…), arXiv 30 janvier
  2023 [1] :
  - 350 000 légendes les plus dupliquées des données, 500 images générées chacune, soit
    « 175 million generated images » ; **94** images extraites selon leur définition
    mathématique, **109** au total après inspection humaine des 1 000 meilleures
    candidates [1] ;
  - extraction plus probable pour les images dupliquées au moins ~100 fois [1, fig. 5] ;
  - Imagen (Google) : 23 mémorisations sur les 1 000 légendes les plus dupliquées [1] ;
  - « diffusion models are much less private than prior generative models such as GANs » ;
    ils « leak more than twice as much training data as GANs » (expériences CIFAR-10) [1] ;
  - exemples : photos de personnes, logos de marques déposées [1].
- Somepalli et al. (Univ. Maryland, NYU), arXiv décembre 2022, publié à CVPR 2023 (non
  vérifié) [2] :
  - sur des images générées à partir de légendes de LAION, environ 170 images ont une
    similarité > 0,5 avec une image d'entraînement, soit « approximate 1.88% of our random
    generations » [2] ;
  - recherche limitée aux 12 millions d'images de LAION Aesthetics v2 6+, « less than 0.6%
    of the total training data » : le taux réel peut être plus élevé [2] ;
  - « none of the generations match their respective source image » (copies de décor ou
    d'objets plutôt que de l'image d'origine) [2] ;
  - les contenus copiés proviennent d'images dupliquées en moyenne 34,1 fois [2].

### Sources
1. Carlini N., Hayes J., Nasr M., Jagielski M., Sehwag V., Tramèr F., Balle B., Ippolito D.,
   Wallace E., « Extracting Training Data from Diffusion Models », arXiv:2301.13188 —
   https://arxiv.org/abs/2301.13188 — P — en — lu (PDF intégral, sections 1 et 4).
2. Somepalli G., Singla V., Goldblum M., Geiping J., Goldstein T., « Diffusion Art or Digital
   Forgery? Investigating Data Replication in Diffusion Models », arXiv:2212.03860 —
   https://arxiv.org/abs/2212.03860 — P — en — lu (PDF v3, sections 7-9).

### Points d'attention
- Les deux chiffres ne se comparent pas : 109 / 175 millions (copie quasi exacte, recherche
  ciblée) contre 1,88 % (similarité partielle, seuil choisi par les auteurs).
- Les modèles testés sont de 2022 (Stable Diffusion 1.x) ; ne pas extrapoler aux modèles
  récents sans source.
- La justice a tiré des conclusions opposées de la « mémorisation » : voir Munich (§ 5)
  et Londres (Getty).

---

## 4. Données d'entraînement : LAION-5B

### Formulation sûre
Pour apprendre, ces modèles ont besoin de milliards d'images accompagnées d'une légende.
LAION, une association allemande, a publié en 2022 LAION-5B : 5,85 milliards de liens vers
des images du web avec leur texte. Fin 2023, un rapport de Stanford y a trouvé des liens vers
des images d'abus sexuels sur enfants ; LAION a retiré le jeu de données, puis publié en
août 2024 une version nettoyée, Re-LAION-5B.

### Faits clés
- « 5.85 billion CLIP-filtered image-text pairs », dont 2,32 milliards en anglais ; arXiv 16
  octobre 2022 (NeurIPS 2022, non vérifié) [1].
- Le jeu contient des **liens** (URL) et des légendes, pas les images elles-mêmes (formulation
  de LAION : « text-link-to-image pairs ») [3].
- Rapport du Stanford Internet Observatory, David Thiel, 20 décembre 2023, « Identifying and
  Eliminating CSAM in Generative ML Training Data and Models » [2]. Chiffres repris par la
  presse : 3 226 cas suspects, dont 1 008 validés par des organismes extérieurs [4][5].
  Recommandations du rapport : sur la conservation des copies, la construction des futurs
  jeux, la modification et l'hébergement des modèles entraînés dessus [2].
- LAION retire LAION-5B et LAION-400M « to ensure they are safe before republishing them »
  (20 décembre 2023) [4].
- Re-LAION-5B, 30 août 2024 : 2 236 liens retirés (« upper bound ») sur listes d'empreintes
  fournies par l'Internet Watch Foundation, le Centre canadien de protection de l'enfance et
  Stanford ; liens signalés par Human Rights Watch (données privées d'enfants) également
  retirés ; 5 526 641 167 paires restantes ; licence Apache-2.0, accès restreint ; LAION
  déconseille l'usage industriel (« We strongly advise AGAINST using the datasets in
  industrial settings ») [3].

### Sources
1. Schuhmann C. et al., « LAION-5B: An open large-scale dataset for training next generation
   image-text models », arXiv:2210.08402 — https://arxiv.org/abs/2210.08402 — P — en — lu
   partiellement (résumé).
2. Thiel D. (Stanford Internet Observatory), « Identifying and Eliminating CSAM in Generative
   ML Training Data and Models », Stanford Digital Repository — https://purl.stanford.edu/kh752sm9123
   — P/R — en — lu partiellement (notice et résumé ; le rapport lui-même non lu).
3. LAION, « Releasing Re-LAION 5B » — https://laion.ai/blog/relaion-5b/ — P — en — lu
   partiellement.
4. 404 Media, article du 20 déc. 2023 —
   https://www.404media.co/laion-datasets-removed-stanford-csam-child-abuse/ — Pr — en — lu
   partiellement.
5. Engadget, « Researchers found child abuse material in the largest AI image generation
   dataset », 20 déc. 2023 —
   https://www.engadget.com/researchers-found-child-abuse-material-in-the-largest-ai-image-generation-dataset-154006002.html
   — Pr — en — lu partiellement.

### Points d'attention
- Aucun détail sur les contenus. Parler d'« images d'abus sexuels sur enfants » (terme
  juridique), sans plus.
- Les chiffres 3 226 / 1 008 viennent de la presse [4][5], pas d'une lecture du rapport.
- Ne pas écrire que LAION « a stocké » des images : ce sont des liens (mais le fait de
  télécharger le jeu télécharge les images).

---

## 5. Procès et décisions (état au 16 octobre 2026)

### Formulation sûre
Partout dans le monde, des artistes, des agences photo, des journaux et des maisons de disques
attaquent les entreprises d'IA ; les entreprises répondent que l'entraînement est un usage
légal (« fair use » aux États-Unis, exception de fouille de données en Europe). Les décisions
vont dans des sens différents selon les pays et selon les faits : à Londres, Getty a perdu
l'essentiel ; à Munich, la GEMA a gagné contre OpenAI et Suno ; à Hambourg, LAION a gagné. Aux
États-Unis, une œuvre produite par une IA sans auteur humain n'est pas protégeable. La
plupart des grandes affaires ne sont pas terminées.

### Faits clés
**Getty Images c. Stability AI (Royaume-Uni)**
- Jugement [2025] EWHC 2863 (Ch), Haute Cour (Business and Property Courts, Intellectual
  Property List), juge Joanna Smith, **4 novembre 2025** [1].
- Getty a abandonné avant la fin du procès ses demandes sur l'entraînement et sur les
  images produites (faute de preuve que l'entraînement avait eu lieu au Royaume-Uni) [2][3].
- Contrefaçon « secondaire » rejetée : les poids du modèle peuvent être un « article », mais
  ne sont pas une « copie contrefaisante » car ils ne stockent pas les œuvres [2][3].
- Marques : Getty gagne sur quelques images anciennes portant ses filigranes ; conclusions
  « historic » et « extremely limited in scope » [2].
- **16 décembre 2025** : la juge autorise Getty à faire appel sur la contrefaçon secondaire
  (« The point of law is both novel and important ») ; Stability n'a pas été autorisée à
  faire appel sur les marques (une seule source) [4][5]. Aucune date d'audience ou décision
  de la Cour d'appel trouvée au 16 octobre 2026.

**Andersen et al. c. Stability AI, Midjourney, DeviantArt, Runway (Californie, N.D. Cal.)**
- Plainte collective du 13 janvier 2023 (n° 3:23-cv-00201-WHO), juge William H. Orrick ;
  plaignant·es dont Sarah Andersen, Kelly McKernan, Karla Ortiz, puis Gregory Manchess,
  Gerald Brom, Grzegorz Rutkowski, Julia Kaye, Jingna Zhang, Adam Ellis [6][7][8].
- 12 août 2024 : les demandes principales en contrefaçon contre les quatre défenderesses
  survivent à la requête en irrecevabilité ; d'autres demandes rejetées [7][9].
- 2026 : procédure en phase de communication des preuves (*discovery*) ; l'audience sur les
  jugements sommaires a été repoussée du 4 novembre 2026 au **17 février 2027** à la demande
  des plaignant·es [10]. Date de procès : sources contradictoires (voir « Non vérifié »).
- Position des défenderesses (en résumé) : les modèles ne contiennent pas de copies des
  œuvres ; à vérifier dans leurs mémoires (non lus).

**The New York Times c. Microsoft et OpenAI (New York, S.D.N.Y.)**
- Plainte de décembre 2023 (date exacte non revérifiée) ; juge Sidney Stein [11].
- Le Times soutient que les systèmes copient son journalisme à grande échelle et peuvent
  servir de « commercial substitute » ; OpenAI et Microsoft répondent que l'entraînement sur
  des contenus publics est un *fair use* et que les faits ne sont pas protégés, en
  s'appuyant sur *Bartz c. Anthropic* et *Kadrey c. Meta* [11].
- 1er-2 septembre 2026 : le ministère de la Justice des États-Unis dépose une « Statement of
  Interest » favorable au *fair use* de l'entraînement (avis non contraignant) [11][12].
- Requêtes croisées en jugement sommaire déposées début septembre 2026 ; pas de décision ni
  de date de procès au 16 octobre 2026 (sources secondaires) [11].

**Thaler c. Perlmutter (États-Unis)**
- Cour d'appel du circuit de D.C., **18 mars 2025**, opinion de la juge Patricia Millett :
  le Copyright Act exige que l'œuvre soit créée « in the first instance by a human being » ;
  l'image « A Recent Entrance to Paradise », produite par la « Creativity Machine » de
  Stephen Thaler, n'est pas enregistrable [13].
- Cour suprême : certiorari **refusé le 2 mars 2026** (n° 25-449) [14]. Le refus ne juge pas
  le fond ; la décision d'appel reste en vigueur.
- U.S. Copyright Office, rapport partie 2 (« Copyrightability »), **29 janvier 2025** :
  « prompts alone do not provide sufficient human control to make users of an AI system the
  authors of the output » ; les apports humains expressifs et la sélection/agencement
  restent protégeables au cas par cas [15]. Partie 3 (entraînement) : version
  pré-publication du 9 mai 2025 [15].

**Allemagne**
- Kneschke c. LAION : le tribunal régional de Hambourg (LG, 310 O 227/23) rejette la demande
  du photographe le **27 septembre 2024** : téléchargement couvert par l'exception de
  recherche scientifique (§ 60d UrhG) [16][17].
- Appel rejeté par la cour d'appel de Hambourg (OLG, 5 U 104/24) le **10 décembre 2025** :
  copie couverte aussi par l'exception de fouille (§ 44b) ; une réserve en langage naturel
  dans des conditions d'utilisation n'est pas « lisible par machine » ; pourvoi devant la
  Cour fédérale de justice (BGH) autorisé [17][18][19]. Pourvoi effectivement formé et
  audience : non vérifiés.
- GEMA c. OpenAI : tribunal régional de Munich I, **11 novembre 2025** : la mémorisation de
  paroles de chansons dans le modèle est une reproduction, non couverte par § 44b [20].
- GEMA c. Suno : Munich I, **31 juillet 2026** (42 O 763/25) : six œuvres musicales jugées
  mémorisées dans les modèles v3.5 et v4 ; ni l'exception de fouille ni le *fair use* ne
  s'appliquent ; Suno responsable des sorties ; jugement **non définitif** [21]. Suno : « Wir
  sind mit dem heutigen Urteil nicht einverstanden » ; envisage un appel [22].

**France**
- CSPLA, rapport de mission sur le statut des productions de l'IA (présidente Alexandra
  Bensamoun, rapporteure Julie Groffe-Charrier), présenté en séance plénière le **9 juillet
  2026** : seule la « création hybride » où l'humain garde un rôle actif est protégeable ;
  la « production synthétique » sans intervention humaine significative reste hors du droit
  d'auteur ; pas de redéfinition de l'originalité [23]. Le rapport n'engage que ses auteures.
- Proposition de loi « relative à l'instauration d'une présomption d'utilisation des contenus
  culturels par les fournisseurs d'intelligence artificielle » : adoptée à l'unanimité par
  le Sénat en avril 2026 ; rapport de la commission de l'Assemblée (rapporteur Emmanuel
  Maurel) du 2 juin 2026 ; crée un article L. 331-4-1 du CPI : présomption **réfragable**
  d'utilisation d'une œuvre dès qu'un indice la rend vraisemblable [24]. Adoption définitive :
  non vérifiée.

### Sources
1. Judiciary UK, « Getty Images -v- Stability AI », [2025] EWHC 2863 (Ch) —
   https://www.judiciary.uk/judgments/getty-images-v-stability-ai/ — P — en — lu
   partiellement (page de la décision ; PDF de 200 p. non lu).
2. Cleary Gottlieb, « UK High Court Issues Landmark Ruling in Getty Images v Stability AI » —
   https://www.clearygottlieb.com/news-and-insights/publication-listing/uk-high-court-issues-landmark-ruling-in-getty-images-v-stability-ai
   — S — en — résumé seulement.
3. Simmons & Simmons, « Getty Images v Stability AI: Key IP Issues » —
   https://www.simmons-simmons.com/en/publications/cmhuqd9a2003eumdoquejjgqd/getty-images-v-stability-ai-key-ip-issues-in-ai-litigation
   — S — en — résumé seulement.
4. Chambers, « Copyright and AI remain in focus for 2026 with Getty appeal given the green
   light » — https://chambers.com/articles/copyright-and-ai-remain-in-focus-for-2026-with-getty-appeal-given-the-green-light
   — S — en — lu partiellement.
5. Burges Salmon, « Getty Images v Stability AI: Getty granted permission to appeal », 19 déc.
   2025 — https://www.burges-salmon.com/articles/102lydc/getty-images-v-stability-ai-getty-granted-permission-to-appeal
   — S — en — lu partiellement.
6. CourtListener, dossier « Andersen v. Stability AI Ltd. », 3:23-cv-00201 (API de
   recherche) — https://www.courtlistener.com/ — P (registre) — en — métadonnées seulement
   (entrées jusqu'en avril 2025).
7. Saveri Law Firm (avocats des plaignant·es), « AI Art Generators Copyright Litigation » —
   https://www.saverilawfirm.com/our-cases/ai-artgenerators-copyright-litigation — S (partie)
   — en — lu partiellement.
8. U.S. District Court N.D. Cal., fiche de l'affaire —
   https://cand.uscourts.gov/cases-e-filing/cases/323-cv-00201-who/andersen-et-al-v-stability-ai-ltd-et-al
   — P — en — lu partiellement (date de dépôt 13 janv. 2023).
9. Schor Z., NYU JIPEL, « Andersen v. Stability AI: The Landmark Case… », 2 déc. 2024 —
   https://jipel.law.nyu.edu/andersen-v-stability-ai-the-landmark-case-unpacking-the-copyright-risks-of-ai-image-generators/
   — R — en — lu partiellement.
10. ChatGPT Is Eating the World, « Sarah Andersen's copyright lawsuit… gets pushed back
    again », 3 févr. 2026 —
    https://chatgptiseatingtheworld.com/2026/02/03/sarah-andersens-copyright-lawsuit-the-1st-filed-v-ai-companies-gets-pushed-back-again-at-her-request/
    — S — en — lu partiellement.
11. Tran V. (The Cool Down, repris par Yahoo Finance), « New York Times, OpenAI, and
    Microsoft clash as copyright fight turns pivotal », 15 sept. 2026 —
    https://finance.yahoo.com/technology/ai/articles/york-times-openai-microsoft-clash-172300022.html
    — Pr — en — lu partiellement (source de qualité moyenne).
12. GIGAZINE, « The Department of Justice has submitted a document arguing that 'AI training
    is fair use'… », 3 sept. 2026 —
    https://gigazine.net/gsc_news/en/20260903-trump-administration-sides-with-openai-in-lawsuit-against-nyt/
    — Pr — en — lu partiellement (renvoie au document n° 1682 sur CourtListener, non ouvert).
13. Crowell & Moring, IPWatchdog, Renner Otto (commentaires de l'arrêt Thaler) —
    https://ipwatchdog.com/2025/03/24/d-c-circuit-upholds-human-authorship-requirement-thaler-v-perlmutter/
    — S — en — résumé seulement (l'arrêt sur media.cadc.uscourts.gov n'a pas pu être ouvert :
    erreur serveur).
14. SCOTUSblog, « Thaler v. Perlmutter » (dossier n° 25-449) —
    https://www.scotusblog.com/cases/case-files/thaler-v-perlmutter — S (registre) — en — lu
    partiellement.
15. U.S. Copyright Office, « Copyright and Artificial Intelligence, Part 2:
    Copyrightability », janv. 2025 —
    https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf
    — P — en — lu (passages sur les prompts et conclusion) ; page index
    https://www.copyright.gov/ai/ — lu partiellement.
16. netzpolitik.org, « Erster KI-Urheberrechtsprozess: LAION darf urheberrechtlich
    geschütztes Bild für KI-Training anbieten », 30 sept. 2024 —
    https://netzpolitik.org/2024/erster-ki-urheberrechtsprozess-laion-darf-urheberrechtlich-geschuetztes-bild-fuer-ki-training-anbieten/
    — Pr — de — lu partiellement.
17. DLA Piper, « Robert Kneschke v. LAION: Judgment of 10 December 2025 (Ref.: 5 U 104/24) »,
    23 déc. 2025 — https://www.dlapiper.com/en/insights/blogs/mse-today/2025/robert-kneschke-v-laion
    — S — en — lu partiellement.
18. CMS, « AI and Copyright Case Tracker — Germany: Robert Kneschke v LAION e.V. » (état mai
    2026) — https://cms.law/en/zaf/publication/artificial-intelligence-and-copyright-case-tracker/germany-robert-kneschke-v-laion-e.v
    — S — en — lu partiellement.
19. Hogan Lovells / Inside Tech Law, « Machine-Readable opt-outs and AI training: Hamburg
    Court clarifies copyright exceptions », déc. 2025 —
    https://www.insidetechlaw.com/blog/2025/12/machine-readable-opt-outs-and-ai-training-hamburg-court-clarifies-copyright-exceptions
    — S — en — lu partiellement.
20. CMS, fiche « GEMA v OpenAI » (Munich I, 11 nov. 2025 ; état janvier 2026), obtenue en
    ouvrant https://cms.law/en/rou/publication/artificial-intelligence-and-copyright-case-tracker/united-kingdom-getty-images-us-inc-ors-v-stability-ai-ltd2
    (l'adresse a renvoyé la fiche GEMA) — S — en — lu partiellement. **Une seule source.**
21. Landgericht München I, communiqué de presse n° 16/2026 (GEMA c. Suno) —
    https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php
    — P — de — lu partiellement.
22. ZDFheute, « Gema gewinnt: Gericht stärkt Urheberrecht gegen Musik-KI », 31 juil. 2026 —
    https://www.zdfheute.de/panorama/musik-gema-ki-suno-100.html — Pr — de — lu partiellement.
23. CSPLA (ministère de la Culture), « Rapport de mission relatif au statut des productions de
    l'intelligence artificielle », séance du 9 juillet 2026 —
    https://www.culture.gouv.fr/nous-connaitre/organisation-du-ministere/conseil-superieur-de-la-propriete-litteraire-et-artistique-cspla/travaux-et-publications-du-cspla/rapport-de-mission-sur-le-statut-des-productions-de-l-intelligence-artificielle2
    — P — fr — lu (page de garde et résumé exécutif, pages 1-8).
24. Assemblée nationale, rapport n° 2864 (17e législature) sur la proposition de loi adoptée
    par le Sénat, 2 juin 2026 — https://www.assemblee-nationale.fr/dyn/opendata/RAPPANR5L17B2864.html
    — P — fr — lu partiellement.

### Points d'attention
- Toujours dater (« au 16 octobre 2026 ») : plusieurs affaires bougent chaque mois.
- Getty : ne pas écrire « Getty a perdu son procès contre l'IA » sans nuance ; l'appel est
  autorisé et la question de l'entraînement n'a pas été jugée (abandonnée).
- Hambourg et Munich ne se contredisent pas forcément : Hambourg juge la **constitution d'un
  jeu de données** par une association de recherche ; Munich juge des **modèles
  commerciaux** qui ont mémorisé des œuvres.
- NYT : la position du ministère de la Justice est un avis, pas une décision.
- Le rapport CSPLA de 2025 sur la rémunération (Bensamoun) n'a été vu qu'en résumé
  (exposé des motifs du Sénat) : non intégré.

---

## 6. Droit de l'UE

### Formulation sûre
Depuis 2019, le droit européen autorise la « fouille de textes et de données » (l'analyse
automatique de contenus) sur ce qui est accessible légalement, **sauf si l'ayant droit s'y
oppose** de façon appropriée, par exemple par un signal lisible par machine (« opt-out »).
Depuis le 2 août 2025, le règlement européen sur l'IA oblige les fournisseurs de grands
modèles à respecter ces oppositions et à publier un résumé des données d'entraînement. À
partir de 2026, les contenus générés doivent aussi porter un marquage lisible par machine.

### Faits clés
- Directive (UE) 2019/790, art. 2(2) : fouille = « toute technique d'analyse automatisée
  visant à analyser des textes et des données sous une forme numérique afin d'en dégager des
  informations » [1].
- Art. 4(1) : exception pour les reproductions et extractions « d'œuvres et d'autres objets
  protégés accessibles de manière licite aux fins de la fouille de textes et de données » ;
  art. 4(3) : s'applique si l'utilisation « n'a pas été expressément réservée par leurs
  titulaires de droits de manière appropriée, notamment par des procédés lisibles par machine
  pour les contenus mis à la disposition du public en ligne » [1]. L'art. 3 (recherche
  scientifique) n'admet pas d'opt-out. Transposition française : art. L. 122-5-3 du CPI
  (résumé seulement).
- Règlement (UE) 2024/1689 (AI Act), art. 53(1) c) : politique de respect du droit d'auteur,
  notamment pour « identifier et respecter, y compris au moyen de technologies de pointe, une
  réservation de droits exprimée conformément à l'article 4, paragraphe 3, de la directive
  (UE) 2019/790 » ; d) « résumé suffisamment détaillé du contenu utilisé pour entraîner le
  modèle », selon un modèle du Bureau de l'IA [2].
- Art. 113 : chapitre V (modèles à usage général) applicable au **2 août 2025** ; règlement
  applicable en général au 2 août 2026 [2]. Les modèles mis sur le marché avant le 2 août
  2025 ont jusqu'au 2 août 2027 (art. 111(3), version consolidée) [3].
- Art. 50(2) : les fournisseurs de systèmes générant audio, image, vidéo ou texte de
  synthèse veillent à ce que les sorties « soient marquées dans un format lisible par machine
  et identifiables comme ayant été générées ou manipulées par une IA » [2].
- Règlement (UE) 2026/1744 du 8 juillet 2026 (« omnibus numérique » sur l'IA, JO du 24 juillet
  2026) : les systèmes mis sur le marché avant le 2 août 2026 ont jusqu'au **2 décembre 2026**
  pour se conformer à l'art. 50(2) (nouvel art. 111(4)) [3].
- Code de bonnes pratiques pour l'IA à usage général : publié le **10 juillet 2025**, trois
  chapitres (transparence, droit d'auteur, sûreté et sécurité) ; volontaire ; jugé « adequate
  voluntary tool » par la Commission et le Comité IA ; signataires dont Amazon, Anthropic,
  Google, Microsoft, Mistral AI, OpenAI ; xAI n'a signé que le chapitre sûreté [4].
- Code de bonnes pratiques sur le marquage et l'étiquetage des contenus générés (art. 50) :
  version finale publiée le **10 juin 2026** ; volontaire ; au moins deux couches de marquage
  lisible par machine (métadonnées, filigrane…) ; reconnaît qu'aucune technique seule ne
  suffit [5].

### Sources
1. Directive (UE) 2019/790 du 17 avril 2019, EUR-Lex —
   https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019L0790 — P — fr — lu
   (articles 2 et 4, version HTML intégrale).
2. Règlement (UE) 2024/1689 du 13 juin 2024 (texte initial), EUR-Lex —
   https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689 — P — fr — lu
   (articles 50, 53, 113).
3. Règlement (UE) 2024/1689, version consolidée au 27 juillet 2026 (modifié par le règlement
   (UE) 2026/1744), EUR-Lex — https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:02024R1689-20260727
   — P (outil de documentation, sans valeur juridique) — fr — lu (articles 111 et 113).
4. Commission européenne, « The General-Purpose AI Code of Practice » —
   https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai — P — en — lu
   partiellement.
5. Jones Day, « European Commission Publishes Final Code of Practice on Marking and Labelling
   AI-Generated Content », juin 2026 —
   https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content
   — S — en — lu partiellement. (Page de la Commission non ouverte.)

### Points d'attention
- L'opt-out est une **condition** de l'exception, pas un droit nouveau ; sa forme
  « lisible par machine » est discutée en justice (Hambourg, § 5).
- Le contenu exact du chapitre « droit d'auteur » du code (robots.txt, etc.) n'a pas été lu :
  à vérifier avant de le détailler.
- L'omnibus de 2026 a modifié d'autres échéances (systèmes à haut risque) : ne citer que
  l'art. 50(2) vérifié.

---

## 7. Traçabilité : C2PA, SynthID, limites

### Formulation sûre
Deux familles d'outils existent pour signaler qu'un contenu vient d'une IA. Les
« Content Credentials » (norme C2PA) attachent au fichier une sorte de carnet de bord signé :
qui l'a créé, avec quel outil, quelles retouches. Les filigranes invisibles, comme SynthID de
Google DeepMind, cachent un signal dans l'image, le son ou le texte. Aucun n'est infaillible :
les métadonnées peuvent être effacées, et des chercheurs ont montré qu'on peut retirer ou
imiter certains filigranes.

### Faits clés
- C2PA (Coalition for Content Provenance and Authenticity) fondée le **22 février 2021** par
  Adobe, Arm, BBC, Intel, Microsoft et Truepic ; réunit la Content Authenticity Initiative
  (Adobe) et Project Origin (Microsoft, BBC) [1][2].
- « Content Credential » : « the preferred non-technical term for a C2PA Manifest », un
  ensemble signé d'informations de provenance [3].
- La spécification reconnaît que le manifeste peut être retiré (« Yes it can ») ; elle prévoit
  des liaisons « souples » par filigrane invisible ou empreinte pour le retrouver [3].
- « provenance information alone cannot tell you whether the digital content is true,
  accurate or factual » [3].
- SynthID (Google DeepMind) : filigrane invisible pour images, vidéo, audio (Lyria, NotebookLM)
  et texte (Gemini) ; portail de détection lancé en 2025 [4]. Pour le texte : modification des
  probabilités des mots choisis ; article dans *Nature*, 23 octobre 2024 (Dathathri et al.,
  « Scalable watermarking for identifying large language model outputs ») [5].
- Limites (Saberi et al., Univ. Maryland, 2023-2024) : la « diffusion purification »
  « effectively removes low perturbation budget watermarks » ; une attaque par modèle
  substitut retire aussi des filigranes plus forts ; on peut **faire passer de vraies images
  pour filigranées** (spoofing) ; compromis fondamental entre fiabilité et robustesse des
  détecteurs [6].

### Sources
1. C2PA, communiqué de fondation, 22 févr. 2021 — https://c2pa.org/c2pa-founding-press-release/
   — P — en — lu partiellement.
2. C2PA, « About » — https://c2pa.org/about/ — P — en — lu partiellement.
3. C2PA, « Explainer » de la spécification 2.2 —
   https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html — P — en —
   lu partiellement.
4. Google DeepMind, « SynthID » — https://deepmind.google/models/synthid/ — P — en — lu
   partiellement (page promotionnelle, aucune limite affichée).
5. Dathathri S. et al., *Nature*, DOI 10.1038/s41586-024-08025-4 —
   https://www.nature.com/articles/s41586-024-08025-4 — P — en — métadonnées seulement
   (Crossref ; page Nature non accessible).
6. Saberi M. et al., « Robustness of AI-Image Detectors: Fundamental Limits and Practical
   Attacks », arXiv:2310.00076 — https://arxiv.org/abs/2310.00076 — R — en — lu partiellement
   (résumé ; publication à ICLR 2024 non vérifiée).

### Points d'attention
- Ne pas présenter les détecteurs « d'images IA » comme fiables : [6] montre l'inverse.
- SynthID ne détecte que les filigranes SynthID (et partenaires), pas « toute IA ».
- Les Content Credentials prouvent l'intégrité d'un historique, pas la vérité de l'image.

---

## 8. Musique

### Formulation sûre
La musique par ordinateur est ancienne : en 1957, Lejaren Hiller et Leonard Isaacson
composent l'*Illiac Suite* pour quatuor à cordes avec un ordinateur de l'université de
l'Illinois ; dès 1981, David Cope crée EMI, un programme qui imite le style de compositeurs.
Aujourd'hui, Suno et Udio génèrent des chansons entières à partir d'un texte. Les trois
grandes maisons de disques les ont attaqués en 2024 ; depuis, certaines ont signé des accords
de licence, d'autres poursuivent les procès.

### Faits clés
- *Illiac Suite* (Quatuor à cordes n° 4), 1957, Hiller et Isaacson ; procédé expliqué dans
  *Experimental Music: Composition with an Electronic Computer* (McGraw-Hill, 1959) ; décrite
  comme « the first significant work to use a computer in its composition » par les archives
  de l'université de Buffalo [1]. La chronologie la date de 1956, la liste des œuvres de
  1957 [1].
- David Cope (1941-2025), professeur émérite de musique (UC Santa Cruz) : crée EMI
  (*Experiments in Musical Intelligence*) en 1981 face à un blocage sur une commande d'opéra ;
  EMI analyse des œuvres et recombine les « signatures » d'un compositeur [2].
- 24 juin 2024 : Sony Music, UMG et Warner (via la RIAA) attaquent Suno (tribunal fédéral du
  Massachusetts) et Udio / Uncharted Labs (New York, S.D.N.Y.) [3][4].
- Accords : UMG–Udio, 29 octobre 2025 (règlement « compensatoire » + licences ; plateforme
  sous licence annoncée pour 2026 ; téléchargements bloqués pendant la transition) [5] ;
  Warner–Udio, mi-novembre 2025 [6] ; Warner–Suno, 25 novembre 2025 (nouveaux modèles sous
  licence en 2026, anciens modèles retirés, téléchargements limités, accord des artistes
  pour l'usage de leur nom, voix, image ; rachat de Songkick par Suno) [6].
- Procès en cours (au 16 octobre 2026) : UMG et Sony contre Suno (Massachusetts) — le juge
  F. Dennis Saylor IV a refusé le 18 août 2026 d'ajouter 61 026 enregistrements au premier
  dossier (560 œuvres) ; nouvelle plainte le **18 septembre 2026** visant les modèles v6
  (60 202 enregistrements) [7]. Suno qualifie l'entraînement de « quintessential fair use » et
  affirme que v6 a été entraîné « entirely from scratch » sans données d'UMG ou Sony [7].
  Sony contre Udio : seconde plainte à New York en juillet 2026 (≈ 30 000 titres) [8].
- SACEM : l'exercice de l'opt-out par la SACEM, la SACD et la SCAM est daté d'**octobre
  2023** (notifications à « des centaines de fournisseurs d'IA », restées « pour l'essentiel »
  sans réponse, selon une question écrite de députée) [9] ; annonce SACEM du 12 octobre 2023
  selon la Gazette Drouot [10]. **Aucune source pour 2022.**
- En Allemagne, la GEMA a gagné en première instance contre Suno (31 juillet 2026, § 5).

### Sources
1. University at Buffalo Libraries, « Lejaren Hiller Resources » —
   https://research.lib.buffalo.edu/hiller/external — P (archives) — en — lu partiellement.
2. University of California Academic Senate, « In Memoriam: David Cope » —
   https://senate.universityofcalifornia.edu/in-memoriam/files/david-cope.html — P — en — lu
   partiellement.
3. RIAA, plaintes déposées le 24 juin 2024 —
   https://www.riaa.com/wp-content/uploads/2024/06/Suno-complaint-file-stamped20.pdf et
   https://www.riaa.com/wp-content/uploads/2024/06/Udio-Complaint-6.24.241.pdf — P — en —
   résumé seulement (communiqué RIAA non lisible par l'outil).
4. Music Business Worldwide, « Universal Music settles Udio lawsuit… », 30 oct. 2025 —
   https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform
   — Pr (spécialisée) — en — lu partiellement.
5. Même source que [4] (citations de Lucian Grainge et Andrew Sanchez).
6. Music Business Worldwide, « Warner Music Group settles with Suno… », 25 nov. 2025 —
   https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/
   — Pr — en — lu partiellement.
7. Music Business Worldwide, « Universal and Sony sue Suno for a second time… » (sept. 2026)
   — https://www.musicbusinessworldwide.com/universal-and-sony-sue-suno-for-a-second-time-claiming-platforms-v6-models-are-the-fruit-of-the-same-poisoned-tree/
   — Pr — en — lu partiellement.
8. Variety, « Sony Music Files Another Lawsuit Against Udio… » (2026) —
   https://variety.com/2026/music/news/sony-music-new-lawsuit-udio-ai-music-generator-1236817746/
   — Pr — en — résumé seulement (page payante).
9. Assemblée nationale, question écrite n° 16057 (V. Ludmann), JO 16 juin 2026, réponse JO
   11 août 2026 — https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE16057 — P —
   fr — lu partiellement (l'affirmation est celle de la députée, pas du ministère).
10. Gazette Drouot, « Generative artificial intelligence: a threat or an… » —
    https://www.gazette-drouot.com/en/article/generative-artificial-intelligence-a-threat-or-an/61433
    — Pr — en — résumé seulement (403).

### Points d'attention
- « Première musique composée par ordinateur » : souvent dit de l'*Illiac Suite* ;
  d'autres expériences existent (Australie, CSIRAC, vers 1951 ; non vérifié). Écrire « l'une
  des premières ».
- Les montants des accords ne sont pas publics.
- La date SACEM « 2022 » demandée n'est pas confirmée : corriger en octobre 2023.

---

## 9. Artistes et outils de protection

### Formulation sûre
Beaucoup d'artistes refusent que leurs œuvres servent à entraîner des IA sans accord,
crédit ni rémunération. À l'université de Chicago, l'équipe de Ben Zhao a créé Glaze (pour
brouiller le style aux yeux d'une IA) et Nightshade (pour « empoisonner » l'entraînement).
D'autres chercheurs montrent que ces protections se contournent assez facilement. D'autres
artistes, enfin, font de l'IA leur matériau, souvent avec leurs propres données.

### Faits clés
- Glaze (Shan, Cryan, Wenger, Zheng, Hanocka, Zhao ; USENIX Security 2023) : « style cloaks »
  presque invisibles ; études auprès de plus de 1 000 artistes ; efficacité annoncée > 92 %
  (> 85 % face à des contre-mesures adaptées) [1].
- Nightshade (Shan, Ding, Passananti, Wu, Zheng, Zhao ; IEEE S&P 2024) : moins de 100 images
  empoisonnées suffisent à corrompre un mot-clé dans SDXL ; présenté comme « last defense for
  content creators against web scrapers that ignore opt-out/do-not-crawl directives » [2].
- Contrepoint (Hönig, Rando, Carlini, Tramèr ; ETH Zurich / Google DeepMind) : ces protections
  « only provide a false sense of security » ; un simple agrandissement (upscaling) suffit à
  les affaiblir fortement [3].
- Position d'artiste : Karla Ortiz devant le Sénat américain (12 juillet 2023) : les IA
  utilisent les œuvres « without consent, credit, or compensation » [4].
- Artistes qui travaillent avec l'IA : Sougwen Chung peint avec des robots (D.O.U.G.) entraînés
  sur ses propres peintures [5] ; Linda Dounia Rebeiz travaille avec des GAN entraînés sur
  ses propres jeux de données (fleurs, bâtiments du Sénégal) [6] ; Stephanie Dinkins,
  première lauréate du LG Guggenheim Award (2023) [7].

### Sources
1. Shan S. et al., « Glaze: Protecting Artists from Style Mimicry by Text-to-Image Models »,
   arXiv:2302.04222 — https://arxiv.org/abs/2302.04222 — P — en — lu partiellement.
2. Shan S. et al., « Nightshade: Prompt-Specific Poisoning Attacks on Text-to-Image
   Generative Models », arXiv:2310.13828 — https://arxiv.org/abs/2310.13828 — P — en — lu
   partiellement.
3. Hönig R. et al., « Adversarial Perturbations Cannot Reliably Protect Artists From
   Generative AI », arXiv:2406.12027 — https://arxiv.org/abs/2406.12027 — R — en — lu
   partiellement (publication à ICLR 2025 non vérifiée).
4. Ortiz K., témoignage écrit, Sénat des États-Unis, sous-commission propriété intellectuelle,
   daté du 7 juillet 2023 —
   https://www.judiciary.senate.gov/imo/media/doc/2023-07-12_pm_-_testimony_-_ortiz.pdf — P —
   en — lu (première page).
5. Chow A. R., « Sougwen Chung », TIME100 AI 2023, 7 sept. 2023 —
   https://time.com/collections/time100-ai/6309455/sougwen-chung/ — Pr — en — lu partiellement.
6. TIME, « Linda Dounia Rebeiz », TIME100 AI 2023 —
   https://time.com/collections/time100-ai/6309451/linda-dounia-rebeiz/ — Pr — en — résumé
   seulement.
7. LG, communiqué « LG Guggenheim Award: Stephanie Dinkins » —
   https://www.lg.com/global/newsroom/news/media-entertainment-solution/lg-guggenheim-award-recipient-stephanie-dinkins-presents-demo-of-latest-ai-artwork-in-progress/
   — P (sponsor) — en — résumé seulement.

### Points d'attention
- Glaze/Nightshade : présenter les chiffres comme ceux des auteurs, et le contrepoint [3]
  (dont Carlini, auteur de [§ 3]) ; l'équipe de Chicago a contesté ce contrepoint (non lu).
- Sougwen Chung utilise le pronom « they » (non binaire) selon TIME : en français,
  écrire « l'artiste » ou accorder en écriture inclusive.

---

## 10. Personnes à mettre en avant (faits professionnels)

- **Vera Molnár** (1924-2023) : née à Budapest, à Paris dès 1947 ; « machine imaginaire »
  dans les années 1960 ; dessins par ordinateur et table traçante dès 1968 ; rétrospective
  Centre Pompidou 2024 (§ 2 [4]).
- **Lillian Schwartz** (1927-2024) : Bell Labs ; « Pixillation » (1970) ; MoMA 1968 (§ 2 [6]).
- **Harold Cohen** : peintre, AARON de la fin des années 1960 aux années 2010 ; Whitney 2024
  (§ 2 [5]). Dates de vie non vérifiées (1928-2016 selon mémoire, à vérifier).
- **Ian Goodfellow** : premier auteur de l'article GAN (Université de Montréal, 2014)
  (§ 2 [1]). Postes ultérieurs non vérifiés.
- **Jascha Sohl-Dickstein** : premier auteur de l'article fondateur de 2015, alors à
  Stanford (§ 1 [1]). Postes ultérieurs non vérifiés.
- **Robin Rombach et Björn Ommer** : premier et dernier auteur de Latent Diffusion ;
  laboratoire CompVis, LMU Munich (§ 1 [4]). Ommer dirige le groupe (affiliation de
  l'article ; titre exact non vérifié). La suite de carrière de Rombach (Stability AI, Black
  Forest Labs) n'est pas vérifiée.
- **Linda Dounia Rebeiz** : artiste sénégalaise (sénégalo-libanaise selon une galerie),
  TIME100 AI 2023, catégorie « Innovators » ; critique des biais des grands générateurs
  envers les pays du Sud ; projet *Once Upon a Flower* (§ 9 [6], résumé).
- **Sougwen Chung** : TIME100 AI 2023 ; collaboration peintre-robot ; dirige le studio
  Scilicet (§ 9 [5]).
- **Stephanie Dinkins** : artiste et enseignante états-unienne, première lauréate du LG
  Guggenheim Award (2023), 100 000 $ ; travaille sur une IA plus inclusive (§ 9 [7], source
  du sponsor).
- **Karla Ortiz** : artiste conceptuelle et illustratrice (Marvel : *Doctor Strange*,
  *Black Panther*, *Loki*… ; *Magic: The Gathering*) ; plaignante dans Andersen c. Stability
  AI ; témoin au Sénat le 12 juillet 2023 (§ 9 [4]).
- Autres pistes non vérifiées : Holly Herndon (voix « Holly+ »), Refik Anadol
  (« Unsupervised », MoMA 2022-2023 ; page du MoMA inaccessible), A. Michael Noll, Frieder
  Nake (fiche à faire).

Points d'attention : ne publier ni lieu de résidence, ni données familiales (plusieurs
profils consultés en contiennent : à ne pas reprendre).

---

## À vérifier plus tard

- Andersen c. Stability AI : date de procès. Une source annonce un procès devant jury à
  partir du 8 septembre 2026 (sigmalawgroup.com, résumé seulement), une autre le 5 avril 2027
  (ailawsuittracker.com, résumé) ; le report des jugements sommaires au 17 février 2027 rend
  un procès en septembre 2026 peu probable. Docket récent (PACER) non consulté.
- Andersen : mention d'une lettre conjointe d'août 2026 sur la conservation des preuves par
  Stability AI (résumé de recherche seulement).
- NYT c. OpenAI : date exacte de la plainte (27 décembre 2023 de mémoire), calendrier des
  mémoires (6 ou 20 novembre 2026), rejet de demandes contre Microsoft en août 2026,
  production de 20 millions de journaux ChatGPT (janvier 2026) : sources secondaires
  divergentes, non ouvertes.
- Déclaration du ministère de la Justice (NYT) : date 1er ou 2 septembre 2026 ; document
  n° 1682 non ouvert.
- Getty c. Stability : date d'audience devant la Cour d'appel (aucune trouvée) ; frais
  (69,4 % des frais de Stability, provision ≈ 4,4 M£ : résumé seulement) ; affaire parallèle
  aux États-Unis (refiled en Californie : résumé seulement).
- Thaler : texte de l'arrêt du 18 mars 2025 non ouvert (serveur de la cour en erreur) ;
  citations reprises de commentaires.
- Kneschke c. LAION : numéro du pourvoi devant la BGH (I ZR 281/25 ?) et audience de
  septembre 2026 (une source secondaire, résumé seulement) ; éventuel renvoi à la CJUE.
- GEMA c. OpenAI (11 nov. 2025) : une seule source (CMS) ; appel éventuel non vérifié.
- Proposition de loi française sur la présomption d'utilisation : adoption définitive non
  vérifiée ; rapport CSPLA 2025 sur la rémunération (adopté le 9 juillet 2025 selon
  l'exposé des motifs du Sénat, résumé seulement).
- Code de bonnes pratiques art. 50 : évaluation d'adéquation par la Commission ; page
  officielle de la Commission non ouverte.
- Somepalli et al. : publication à CVPR 2023 ; LAION-5B à NeurIPS 2022 ; Saberi et al. à
  ICLR 2024 ; Hönig et al. à ICLR 2025 — non vérifiés.
- Udio–Warner : date exacte (19 ou 25 novembre 2025) ; Sony c. Udio : numéro 1:26-cv-06120
  et nombre exact de titres (30 117) — résumé seulement.
- Plateforme UMG–Udio : lancée ou non en 2026.
- SACEM : communiqué original (site sacem.fr inaccessible aux robots) ; aucune trace d'un
  opt-out en 2022.
- Harold Cohen à Stanford (1973-1975) : résumé de la page du Whitney, non lu directement.
- Lillian Schwartz : prix (Emmy 1984, Winsor McCay 2021) ; collaborations avec Ken Knowlton
  et Leon Harmon — résumé seulement.
- Première exécution de l'*Illiac Suite* (1956 ou 1957, interprètes) — sources divergentes.
- Christie's : page officielle du lot Belamy non accessible ; prix et date confirmés par
  deux sources de presse.
- Carrières actuelles de Goodfellow, Sohl-Dickstein, Rombach ; dates de vie de Harold Cohen.
