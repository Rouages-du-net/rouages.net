# Sources — « Les IA qui prédisent »

Dossier du module `/modules/ia-predire/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 1ᵉʳ novembre 2026.

Niveaux de lecture : **lu**, **lu partiellement**, **résumé seulement**.

## Formulation sûre

Prévoir, c'est s'appuyer sur le passé pour estimer l'avenir. La météo est
calculée depuis 1950 par ordinateur à partir des équations de la physique ;
depuis peu, des IA entraînées sur la météo passée font aussi bien ou mieux,
pour beaucoup moins de calcul, et les centres météorologiques les présentent
comme complémentaires des modèles physiques. Une prédiction s'appuie sur des
corrélations : elle ne dit pas les causes. Et quand la prédiction guide
l'action qui produit les données (la police prédictive), elle peut se
confirmer elle-même.

## Faits clés

**Richardson (1922)** [1]
- L. F. Richardson, *Weather Prediction by Numerical Process*, Cambridge
  University Press, 1922 (texte intégral lu sur Internet Archive, domaine
  public).
- Ch. 11/2, p. 219 : « It took me the best part of six weeks to draw up the
  computing forms and to work out the new distribution in two vertical columns
  for the first time » ; « 32 x 2000 = 64,000 computers would be needed to race
  the weather for the whole globe » ; le « forecast-factory » : « Imagine a
  large hall like a theatre […] A myriad computers are at work upon the weather
  of the part of the map where each sits ».
- Résultat de son essai : « The rate of rise of surface pressure […] is found
  on Form P xiii as 145 millibars in 6 hours, whereas observations show that
  the barometer was nearly steady. This glaring error is examined in detail
  below in Ch. 9/3, and is traced to errors in the representation of the
  initial winds. »

**ENIAC (1950)** [2] [3] [4]
- J. G. Charney, R. Fjörtoft, J. von Neumann, « Numerical Integration of the
  Barotropic Vorticity Equation », *Tellus* 2(4), 1950, p. 237-254 (CC BY ;
  **résumé seulement**, site de la revue indisponible) : « The results of a
  series of four 24-hour forecasts computed from actual data at the 500 mb
  level are presented ».
- ENIAC et durée du calcul : C. Yang (arXiv, 2025) : 24 heures de calcul pour
  une prévision à 24 heures, « 33 days and nights » de travail sur l'ENIAC ;
  Guinness World Records cite l'article : « with a thorough routinization of
  the operations, a 24-hour prediction could be made on the ENIAC in as little
  as 12 hours ». (Deux sources secondaires concordantes ; la fiche Guinness
  qualifie l'ENIAC de « first digital programmable computer » : affirmation
  non reprise.)
- Rôle de Klara von Neumann (remerciée dans l'article pour l'enseignement du
  codage sur l'ENIAC et la vérification du code, selon un résumé de recherche) :
  **non vérifié** dans le texte de l'article ; non publié.

**GraphCast (2023)** [5]
- R. Lam et al., « Learning skillful medium-range global weather
  forecasting », *Science* 382(6677), 2023, p. 1416-1421 (résumé lu via
  Crossref) : « trained directly from reanalysis data. It predicts hundreds of
  weather variables for the next 10 days at 0.25° resolution globally in under
  1 minute. GraphCast significantly outperforms the most accurate operational
  deterministic systems on 90% of 1380 verification targets ».

**AIFS, ECMWF (2025)** [6]
- « ECMWF's AI forecasts become operational », 25 février 2025 : « The first
  operational version is called AIFS Single » ; « outperforms state-of-the-art
  physics-based models for many measures, including tropical cyclone tracks,
  with gains of up to 20% » ; « a reduction of approximately 1,000 times in
  energy use for making a forecast » ; « We see the AIFS and IFS as
  complementary » ; l'hybridation sera un champ de recherche.

**Consommation d'électricité et température** [7]
- Connaissance des énergies (mis à jour le 21 nov. 2019), d'après les analyses
  publiées par RTE le 20 novembre 2019 : l'appel de puissance augmente
  « jusqu'à 2 400 MW par degré en moins en cas de vague froid sévère et
  durable ». (Source secondaire ; ordre de grandeur repris dans plusieurs
  bilans électriques de RTE d'après des résumés de recherche, non ouverts.)

**Corrélation : chocolat et prix Nobel** [8]
- F. H. Messerli, « Chocolate Consumption, Cognitive Function, and Nobel
  Laureates », *NEJM* 367(16), 18 oct. 2012, p. 1562-1564 (**lu**, PDF transmis
  par le mainteneur) : « a close, significant linear correlation (r = 0.791,
  P<0.0001) between chocolate consumption per capita and the number of Nobel
  laureates per 10 million persons in a total of 23 countries » ; Suisse en tête
  des deux ; « about 0.4 kg of chocolate per capita per year to increase the
  number of Nobel laureates in a given country by 1 » ; « a correlation between
  X and Y does not prove causation » ; trois hypothèses (chocolat → Nobel,
  causalité inverse, cause commune : « Differences in socioeconomic status […]
  fall short of fully explaining the close correlation ») ; liste des lauréats
  tirée de Wikipédia. Ton humoristique manifeste, mais non qualifié comme tel
  dans la page faute de source le disant.

**Essais de police prédictive (2015)** [9]
- G. O. Mohler, M. B. Short, S. Malinowski, M. Johnson, G. E. Tita,
  A. L. Bertozzi, P. J. Brantingham, « Randomized Controlled Field Trials of
  Predictive Policing », *JASA* 110(512), 2015, p. 1399-1411 (résumé lu via
  OpenAlex) : deux essais (trois divisions de la police de Los Angeles, deux
  divisions de la police du Kent) ; « ETAS models predict 1.4–2.2 times as
  much crime compared to a dedicated crime analyst » ; « Police patrols using
  ETAS forecasts led to an average 7.4% reduction in crime volume as a function
  of patrol time, whereas patrols based upon analyst predictions showed no
  significant effect ». Article **lu** (copie eScholarship transmise par le
  mainteneur). Remerciements : « G.M. and P.J.B. are co-founders of PredPol, a
  company offering predictive policing services to law enforcement agencies.
  G.M., P.J.B., M.B.S., A.L.B., and G.E.T. hold stock in PredPol. »

**Lum et Isaac (2016)** [10] [11] [12]
- K. Lum, W. Isaac, « To Predict and Serve? », *Significance* 13(5), 2016,
  p. 14-19 (**lu**, PDF transmis par le mainteneur) : arrestations pour drogue
  de 2010 (police d'Oakland) comparées à une population synthétique et à
  l'enquête NSDUH 2011 ; West Oakland et International Boulevard, « two areas
  with largely non-white and low-income populations », « about 200 times more
  drug-related arrests than areas outside of these clusters » ; consommation
  estimée « much more evenly distributed across the city » ; algorithme PredPol
  publié (réf. 9 = Mohler et al. 2015) appliqué à 2011 : « black people would be
  targeted by predictive policing at roughly twice the rate of whites », autres
  groupes 1,5 fois, alors que « drug use is roughly equivalent across racial
  classifications » ; simulation : +20 % de délits observés dans les zones
  ciblées, boucle de rétroaction ; « it is predicting future policing, not
  future crime » ; affiliations : HRDAG (K. Lum), Michigan State University
  (W. Isaac).
- FAQ de HRDAG (K. Lum, 4 nov. 2016) : données 2010-2011 de la police
  d'Oakland, population synthétique (recensement) et enquête NSDUH ; « if police
  find additional crime in the targeted locations » l'algorithme continue de
  viser ces lieux ; « PredPol does not make predictions about drug crime »
  (les auteurs répondent que leurs arguments ne sont pas propres à PredPol).
- Résumé de la communication de K. Lum à l'AAAS (2017) : modèle appliqué aux
  données de la police d'Oakland sur la drogue ; le surcroît de contrôle tombe
  sur les quartiers non blancs et à bas revenus alors que les enquêtes de santé
  publique n'y indiquent pas plus de consommation ; « create a feedback loop
  that amplifies the police targeting of low-income and minority residents » ;
  « Virtually all police forecasting models are trained using police-recorded
  instances of crime ».

**Ensign et al. (2018)** [13]
- D. Ensign, S. A. Friedler, S. Neville, C. Scheidegger,
  S. Venkatasubramanian, « Runaway Feedback Loops in Predictive Policing »,
  PMLR 81, 2018, p. 160-171 (résumé lu) : « police are repeatedly sent back to
  the same neighborhoods regardless of the true crime rate » ; « while reported
  incidents can attenuate the degree of runaway feedback, they cannot entirely
  remove it without the interventions we suggest ».

**The Markup (2021)** [14]
- D. Mehrotra, S. Mattu, A. Gilbertson, A. Sankin, 2 déc. 2021 : 5,9 millions
  de prévisions PredPol, 38 services ; dans au moins 84 % (32), « a higher
  proportion of Black or Latino residents lived in the most-targeted block
  groups » ; réponse du PDG de PredPol (renommée Geolitica) : données
  « erroneous » et « incomplete », logiciel sans donnée démographique, plus de
  patrouilles là où les habitant·es signalent plus de délits.

**Règlement européen sur l'IA** [15]
- Règlement (UE) 2024/1689, art. 5, § 1, d) (texte français lu via le dépôt
  Cellar, comme dans `ia-intro.md`) : interdiction des systèmes d'IA « pour
  mener des évaluations des risques des personnes physiques visant à évaluer
  ou à prédire le risque qu'une personne physique commette une infraction
  pénale, uniquement sur la base du profilage d'une personne physique ou de
  l'évaluation de ses traits de personnalité ou caractéristiques » ; exception
  pour l'appui à une évaluation humaine fondée sur des faits objectifs et
  vérifiables. Applicable depuis le 2 février 2025 (voir `ia-voir.md`).

## Sources

1. Richardson, L. F. (1922). *Weather Prediction by Numerical Process*. https://archive.org/details/weatherpredictio00richrich — P, en, **lu partiellement** (ch. 11, essai du ch. 9).
2. Charney, J. G., Fjörtoft, R., von Neumann, J. (1950). *Tellus* 2(4). https://doi.org/10.3402/tellusa.v2i4.8607 — P, en, **résumé seulement**.
3. Yang, C. (2025). « The First Compute Arms Race ». https://arxiv.org/abs/2506.21816 — R, en, **lu partiellement**.
4. Guinness World Records. « First computer-assisted weather forecast ». https://www.guinnessworldrecords.com/world-records/775520-first-computer-assisted-weather-forecast — site, en, **lu**.
5. Lam, R. et al. (2023). *Science* 382. https://doi.org/10.1126/science.adi2336 — R, en, **résumé seulement**.
6. ECMWF (25 févr. 2025). https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational — P, en, **lu**.
7. Connaissance des énergies (2019). https://www.connaissancedesenergies.org/reseau-electrique-quelle-securite-dapprovisionnement-cet-hiver-et-dici-2025-241104 — Pr, fr, **lu partiellement**.
8. Messerli, F. H. (2012). *NEJM* 367. https://doi.org/10.1056/NEJMon1211064 — R, en, **lu**.
9. Mohler, G. O. et al. (2015). *JASA* 110. https://doi.org/10.1080/01621459.2015.1077710 ; copie libre https://escholarship.org/uc/item/1br4975j — R, en, **lu** (résumé, résultats, remerciements).
10. Lum, K., Isaac, W. (2016). *Significance* 13(5). https://doi.org/10.1111/j.1740-9713.2016.00960.x — R, en, **lu**.
11. Lum, K. (2016). « FAQs on Predictive Policing and Bias ». HRDAG. https://hrdag.org/2016/11/04/faqs-predpol/ — P, en, **lu**.
12. Lum, K. (2017). « Societal Consequences of Biased Data in Predictive Policing ». AAAS. https://aaas.confex.com/aaas/2017/webprogram/Paper18706.html — P, en, **lu** (résumé de communication).
13. Ensign, D. et al. (2018). PMLR 81. https://proceedings.mlr.press/v81/ensign18a.html — R, en, **résumé seulement**.
14. Mehrotra, D. et al. (2021). The Markup. https://themarkup.org/show-your-work/2021/12/02/how-we-determined-crime-prediction-software-disproportionately-targeted-low-income-black-and-latino-neighborhoods — Pr, en, **lu partiellement**.
15. Règlement (UE) 2024/1689, art. 5. http://publications.europa.eu/resource/celex/32024R1689 (lien public : https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202401689) — P, fr, **lu** (art. 5).

## Points d'attention

- **Police prédictive** : présenter l'essai de Mohler et al. (résultats
  favorables) et les critiques (Lum et Isaac, Ensign et al., The Markup), avec
  la réponse de l'entreprise. Ne pas dire que l'étude de Lum et Isaac porte sur
  un déploiement réel : c'est une application rétrospective et une simulation.
- Lien entre les auteurs de l'essai de 2015 et PredPol : **vérifié** dans
  l'article lui-même (cofondateurs, actionnaires) ; le mentionner.
- Règlement IA : l'interdiction vise l'évaluation de personnes ; ne pas dire
  qu'elle interdit la police prédictive en général. Sujet évolutif.
- Chiffres d'électricité : l'animation est inventée ; seul l'ordre de grandeur
  de 2,4 GW par degré vient de RTE.
- Klara von Neumann : à ajouter si le texte de l'article de 1950 peut être lu.
