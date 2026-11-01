# Sources — « Les IA qui agissent »

Dossier du module `/modules/ia-agir/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 1ᵉʳ novembre 2026. Sujets
évolutifs : robotaxis (enquêtes de la NHTSA), armes autonomes (ONU).

Niveaux de lecture : **lu**, **lu partiellement**, **résumé seulement**.

## Formulation sûre

Un robot ou une voiture autonome tourne en boucle : percevoir, décider, agir.
Le retard et les erreurs de compréhension y ont des conséquences physiques. En
2018, à Tempe, une voiture d'essai d'Uber a détecté une piétonne 5,6 secondes
avant l'impact sans jamais la reconnaître comme piétonne ; la cause probable
retenue par le NTSB est l'inattention de l'opératrice de sécurité, avec des
défaillances de l'entreprise. Les études de sécurité des robotaxis existantes
sont surtout produites par les entreprises. Le CICR demande d'interdire
certaines armes autonomes ; l'ONU en débat, sans traité à ce jour.

## Faits clés

**Tortues de Grey Walter** [1]
- Université de Bristol, 22 juillet 2008 : « The first autonomous robots were
  built at the Burden Neurological Institute in Bristol, in the 1940s » ;
  « His first robots, Elmer and Elsie, constructed between 1948 and 1949 » ;
  shell « phototropic – it could follow light » ; « finding their way around
  obstacles » ; « described as tortoises due to their shape and slow rate of
  movement ».

**Le mot « robot »** [9]
- Larousse, Encyclopédie, article « robot » : « du tchèque robota, travail
  forcé » ; « mot créé en 1920 par K. Čapek » dans sa pièce *R.U.R.*
  (*Rossum's Universal Robots*), où il désigne un androïde fabriqué par un
  savant, capable de faire tous les travaux d'un humain.
- Rôle de Josef Čapek (qui aurait suggéré le mot, selon un article de Karel
  Čapek dans *Lidové noviny* en décembre 1933, d'après des résumés de
  recherche) : **non vérifié**, sources inaccessibles (Britannica 403, Blackbird
  503, PDF de l'université Masaryk) ; non publié.

**Shakey et A*** : voir `ia-chercher.md` § 2 (SRI 1966-1972 ; Hart, Nilsson,
Raphael 1968 ; IEEE Milestone).

**Niveaux d'automatisation (SAE J3016)** [2]
- Révision J3016_202104 (avril 2021, conjointe SAE-ISO) : six niveaux, de 0
  (pas d'automatisation) à 5 (automatisation complète) ; niveaux 3 à 5 =
  systèmes de conduite automatisée. (**Résumé seulement** : page SAE et
  résumés de recherche ; norme non lue.)

**Accident de Tempe (NTSB, HAR-19/03, adopté le 19 novembre 2019)** [3]
- 18 mars 2018, 21 h 58, Tempe (Arizona) ; Volvo XC90 modifié, système de
  conduite automatisée en développement d'Uber ATG ; piétonne de 49 ans
  traversant hors passage en poussant un vélo ; décès.
- Vitesse : 45 mph (résumé), 44,3 mph à la première détection (tableau).
- « The ADS detected the pedestrian 5.6 seconds before impact. Although the
  ADS continued to track the pedestrian until the crash, it never accurately
  classified her as a pedestrian or predicted her path. » Classifications
  successives : véhicule, objet inconnu (« other »), cycliste ; « the system
  design did not include consideration for jaywalking pedestrians » ; perte
  de l'historique de trajectoire à chaque changement de classe.
- Urgence reconnue à 1,2 s ; « action suppression » : 1 s pendant laquelle le
  freinage est retenu, « No alert was given to the operator », mis en place
  « because of concerns about false alarms » ; freinage automatique plafonné à
  0,71 g ; capacité de la voiture : 0,92 g en moyenne sur cette chaussée ; à
  44 mph et 0,92 g, arrêt complet en 2,1 s.
- Opératrice : regard vers son téléphone (diffusion d'une émission) ;
  « nearly a third of the trip looking down » ; regard revenu sur la route
  environ 1 s avant l'impact ; impact à 39 mph.
- « Probable Cause » : « the failure of the vehicle operator to monitor the
  driving environment and the operation of the automated driving system
  because she was visually distracted throughout the trip by her personal cell
  phone » ; facteurs contributifs d'Uber ATG : « (1) inadequate safety risk
  assessment procedures, (2) ineffective oversight of vehicle operators, and
  (3) lack of adequate mechanisms for addressing operators' automation
  complacency—all a consequence of its inadequate safety culture » ; piétonne
  positive à des drogues pouvant altérer perception et jugement ; traversée de
  nuit hors passage.
- Calculs de l'animation (physique simple) : 44 mph = 19,7 m/s ; distance
  d'arrêt v²/(2a) = 21,4 m à 0,92 g (freinage à commencer au plus tard 1,09 s
  avant le point d'impact à vitesse constante), 27,8 m à 0,71 g (1,41 s).
- Le nom de la victime n'est pas publié (personne privée).

**Robotaxis Waymo** [4] [5]
- K. D. Kusano, J. M. Scanlon, Y.-H. Chen, T. L. McMurry, T. Gode, T. Victor,
  « Comparison of Waymo Rider-Only crash rates by crash type to human
  benchmarks at 56.7 million miles », *Traffic Injury Prevention* 26 (sup1),
  2025 ; affiliation de tous les auteurs : Waymo LLC (Crossref) ; résumé (arXiv
  2505.01515) : taux d'accidents significativement plus bas ; « 96% reduction
  in Any-Injury-Reported (87%-99% CI) » pour les collisions entre véhicules aux
  intersections ; « no statistically significant disbenefit found in any of the
  11 crash type groups » ; kilométrage « provided by the company » ; références
  humaines construites à partir des kilomètres parcourus et des accidents
  déclarés à la police dans les mêmes zones. (**Résumé seulement**.)
- J. Brady, NPR (repris par OPB), 6 déc. 2025 : rappel logiciel volontaire après
  des dépassements de bus scolaires à l'arrêt ; Austin (19 cas documentés par
  le district scolaire), Atlanta (vidéo de septembre) ; enquête de la NHTSA
  ouverte en octobre : « the likelihood of other prior similar incidents is
  high » ; Mauricio Peña (Waymo) : « holding the highest safety standards means
  recognizing when our behavior should be better » ; pas de blessé. Le nombre
  de véhicules rappelés (3 067 selon d'autres articles) n'est pas repris.

**Armes autonomes** [6] [7] [8]
- CICR, position du 12 mai 2021 : systèmes qui « select and apply force to
  targets without human intervention » ; « Unpredictable autonomous weapon
  systems should be expressly ruled out » ; « use of autonomous weapon systems
  to target human beings should be ruled out » ; les autres « should be
  regulated ».
- Assemblée générale de l'ONU, résolution 78/241 du 22 décembre 2023 : 152 pour,
  4 contre, 11 abstentions (fiche de la Bibliothèque numérique de l'ONU, d'après
  un résumé de recherche).
- Résolution A/RES/80/57 du 1ᵉʳ décembre 2025 : 164 pour, 6 contre (Bélarus,
  Burundi, République populaire démocratique de Corée, Israël, Russie,
  États-Unis), 7 abstentions (UN Project).
- Règlement (UE) 2024/1689, considérant 24 : systèmes utilisés « à des fins
  militaires, de défense ou de sécurité nationale » exclus du champ
  d'application (texte Cellar, voir `ia-intro.md`).

## Sources

1. Université de Bristol (22 juill. 2008). « Grey Walter and his tortoises ». https://www.bristol.ac.uk/news/2008/212017945378.html — site, en, **lu**.
2. SAE International. J3016_202104. https://www.sae.org/standards/content/j3016_202104/ — P, en, **résumé seulement**.
3. NTSB (2019). HAR-19/03. https://www.ntsb.gov/investigations/accidentreports/reports/har1903.pdf — P, en, **lu partiellement** (résumé, § 1.5-1.6, analyse, cause probable).
4. Kusano, K. D. et al. (2025). *Traffic Injury Prevention* 26. https://doi.org/10.1080/15389588.2025.2499887 ; préprint https://arxiv.org/abs/2505.01515 — R, en, **résumé seulement**.
5. Brady, J. (6 déc. 2025). NPR, repris par OPB. https://www.opb.org/article/2025/12/06/waymo-updating-software-after-self-driving-cars-passed-stopped-school-buses/ — Pr, en, **lu**.
6. CICR (12 mai 2021). https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems — P, en, **lu partiellement**.
7. ONU, A/RES/78/241. https://digitallibrary.un.org/record/4033027 — P, **résumé seulement** (fiche).
9. Larousse. Encyclopédie, « robot ». https://www.larousse.fr/encyclopedie/divers/robot/88768 — site (encyclopédie), fr, **lu**. Orthodidacte, « Robot : étymologie » : https://www.orthodidacte.com/ressources/dictionnaire/etymologie/robot-etymologie/ — **non ouvert** (403).
8. UN Project. A/RES/80/57. https://un-project.org/votes/resolution/A-RES-80-57/ — site, en, **lu**.

## Points d'attention

- Ne pas nommer la victime de Tempe ni l'opératrice.
- Présenter la cause probable du NTSB complète : l'opératrice et l'entreprise.
- Études de sécurité des robotaxis : signaler l'affiliation des auteur·rices.
- Armes autonomes : ne pas affirmer qu'elles sont déjà utilisées sans source
  primaire ; rester sur le CICR et les votes de l'ONU.
- WABOT-1 (Waseda, 1973) : source non ouverte, non publié. Josef Čapek : à
  ajouter si une source fiable est lue.
