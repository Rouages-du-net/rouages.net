# Sources — « Les IA qu'on trompe exprès »

Dossier du module `/modules/ia-trompe/`, établi selon la
[charte des sources](../SOURCES.md). Recherche du 24 octobre 2026.

Niveaux de lecture : **lu** (texte ou PDF lu), **lu partiellement** (passages
lus), **résumé seulement** (résumé arXiv ou métadonnées).

## Formulation sûre

Une IA qui apprend à partir d'exemples peut être trompée exprès, de trois
façons. **Pendant l'utilisation**, une entrée légèrement modifiée (quelques
pixels, des autocollants sur un panneau) lui fait donner une mauvaise réponse
avec assurance : ce sont les exemples adverses. **Par les données qu'elle lit**,
un texte caché dans une page web ou un e-mail peut détourner un assistant
conversationnel : c'est l'injection d'instructions (*prompt injection*). **Pendant
l'apprentissage**, quelques exemples piégés glissés dans les données
d'entraînement peuvent installer une « porte dérobée » : c'est l'empoisonnement.
Le domaine n'est pas né avec l'apprentissage profond : dès 2004, des
chercheur·ses étudiaient comment les spammeurs contournent les filtres.

## Faits clés

**Exemples adverses**
- Szegedy et al., « Intriguing properties of neural networks » (arXiv 1312.6199,
  déc. 2013 ; 7 auteurs dont I. Goodfellow) : une perturbation
  « imperceptible », trouvée en maximisant l'erreur du réseau, fait mal classer
  une image ; la même perturbation trompe aussi un autre réseau entraîné sur
  d'autres données. [1]
- Goodfellow, Shlens, Szegedy, « Explaining and Harnessing Adversarial
  Examples » (arXiv 1412.6572, déc. 2014) : la cause principale serait la
  nature « linéaire » des réseaux ; méthode rapide (signe du gradient) ;
  entraînement sur exemples adverses. Figure 1 : GoogLeNet voit un « panda » à
  57,7 % ; après ajout d'un bruit imperceptible, un « gibbon » à 99,3 %. [2]
- Eykholt et al. (9 auteurs dont Dawn Song), « Robust Physical-World Attacks on
  Deep Learning Models » (arXiv 1707.08945, 2017-2018) : avec des autocollants
  noirs et blancs sur un vrai panneau stop, mauvaise classification ciblée dans
  100 % des images en laboratoire et 84,8 % des images d'une vidéo prise en
  voiture (test sur le terrain). [3]
- Athalye, Engstrom, Ilyas, Kwok, « Synthesizing Robust Adversarial Examples »
  (arXiv 1707.07397, 2017) : premiers objets adverses physiques imprimés en 3D,
  robustes aux changements de point de vue. [4] (Le cas « tortue prise pour un
  fusil » est connu par la presse : non lu ici, non repris.)
- Tencent Keen Security Lab (Chine, 29 mars 2019) : sur une Tesla Model S, une
  image adverse déclenche les essuie-glaces ; des autocollants sur la route font
  entrer l'Autopilot dans la voie inverse ; prise de contrôle de la direction
  par une manette. **Réponse de Tesla** (publiée sur la même page) : écran posé
  devant le pare-brise, « not a real-world situation » ; le conducteur « can
  easily override Autopilot at any time » ; la faille de direction avait été
  corrigée en 2017 et 2018. [5]

**Histoire : le domaine ne commence pas en 2014**
- Biggio & Roli, « Wild Patterns: Ten Years After the Rise of Adversarial
  Machine Learning » (arXiv 1712.03141, *Pattern Recognition*, 2018) : « The
  primary misconception is about the start date of the field of adversarial
  machine learning, which is not 2014 ». Travaux pionniers : Dalvi et al. (KDD
  2004) puis Lowd & Meek (2005) sur le contournement des filtres anti-spam
  (mots maquillés, « bons mots » ajoutés) ; « Even earlier », T. Matsumoto et
  al. (Japon) fabriquent de faux doigts en matière plastique (« gummy
  fingers ») pour tromper des lecteurs d'empreintes ; Barreno et al. (2006),
  « Can machine learning be secure? ». Les spammeurs passent au spam en image
  vers 2005-2007. [6]

**Injection d'instructions**
- Simon Willison, billet du 12 septembre 2022 : reprend l'exemple de Riley
  Goodside (un texte à traduire qui ordonne d'ignorer les consignes) et propose
  le nom « prompt injection », par analogie avec l'injection SQL : les
  applications assemblent la consigne et le texte de l'utilisateur·rice
  « by concatenating strings together ». [7]
- Greshake, Abdelnabi, Mishra, Endres, Holz, Fritz (arXiv 2302.12173, 2023) :
  injection **indirecte** : des instructions placées dans des données que l'IA
  ira lire (pages web…) ; les applications intégrant un LLM « blur the line
  between data and instructions » ; démonstrations sur Bing Chat (GPT-4) ;
  risques : vol de données, propagation, contamination de l'information. [8]
- OWASP, « LLM01:2025 Prompt Injection » : distingue injections directes et
  indirectes ; techniques de contournement de filtres (plusieurs langues,
  Base64, émojis). [9]
- ANSSI, « Recommandations de sécurité pour un système d'IA générative »
  (29 avril 2024) : définit l'« attaque adverse » ; cite l'injection de requête
  indirecte (« le contenu d'un mail reçu ou d'une page Web issue d'une
  recherche ») ; recommande qu'un système d'IA générative ne puisse pas
  « prendre des décisions critiques […] sans un contrôle humain » (R9) et que
  ses interactions avec les autres applications soient maîtrisées (R26). [10]

**Empoisonnement des données**
- Biggio, Nelson, Laskov (arXiv 1206.6389, ICML 2012) : attaques par
  empoisonnement contre les machines à vecteurs de support : des données
  d'entraînement fabriquées augmentent l'erreur. [11]
- Microsoft, « Learning from Tay's introduction » (25 mars 2016) : Tay, robot
  conversationnel pour les 18-24 ans aux États-Unis, retiré après que « a
  coordinated attack by a subset of people exploited a vulnerability in Tay » ;
  Microsoft cite son robot XiaoIce, utilisé en Chine par environ 40 millions de
  personnes. [12]
- Carlini et al. (arXiv 2302.10149, 2023) : empoisonner 0,01 % des jeux de
  données LAION-400M ou COYO-700M aurait coûté 60 dollars (rachat de noms de
  domaine expirés) ; les responsables des jeux de données ont été prévenus et
  des défenses peu coûteuses proposées. [13]
- Souly et al. (arXiv 2510.07192, oct. 2025 ; 13 auteurs dont N. Carlini) :
  **250 documents empoisonnés** suffisent à installer une porte dérobée dans des
  modèles de 600 millions à 13 milliards de paramètres, quel que soit le volume
  de données propres (plus de 20 fois plus pour les plus gros). [14]
- Glaze et Nightshade (université de Chicago) et leur contrepoint : voir
  [`ia-creer.md`](ia-creer.md), § artistes.

## Sources

1. Szegedy, C. et al. (2013). arXiv:1312.6199. https://arxiv.org/abs/1312.6199 — R, en, **résumé seulement**.
2. Goodfellow, I. J., Shlens, J., Szegedy, C. (2014). arXiv:1412.6572. https://arxiv.org/abs/1412.6572 — R, en, **lu partiellement** (résumé, figure 1).
3. Eykholt, K. et al. (2018). arXiv:1707.08945. https://arxiv.org/abs/1707.08945 — R, en, **lu partiellement** (résumé, introduction).
4. Athalye, A. et al. (2017). arXiv:1707.07397. https://arxiv.org/abs/1707.07397 — R, en, **résumé seulement**.
5. Tencent Keen Security Lab (29 mars 2019). « Experimental Security Research of Tesla Autopilot ». https://keenlab.tencent.com/en/2019/03/29/Tencent-Keen-Security-Lab-Experimental-Security-Research-of-Tesla-Autopilot/ — P, en, **lu** (page, avec la réponse de Tesla).
6. Biggio, B., Roli, F. (2018). arXiv:1712.03141. https://arxiv.org/abs/1712.03141 — R, en, **lu partiellement** (introduction, références).
7. Willison, S. (12 sept. 2022). « Prompt injection attacks against GPT-3 ». https://simonwillison.net/2022/Sep/12/prompt-injection/ — P, en, **lu**.
8. Greshake, K. et al. (2023). arXiv:2302.12173. https://arxiv.org/abs/2302.12173 — R, en, **résumé seulement**.
9. OWASP GenAI Security Project, « LLM01:2025 Prompt Injection ». https://genai.owasp.org/llmrisk/llm01-prompt-injection/ — P, en, **lu partiellement**.
10. ANSSI (29 avril 2024). « Recommandations de sécurité pour un système d'IA générative ». https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative (PDF lu) — P, fr, **lu partiellement**.
11. Biggio, B., Nelson, B., Laskov, P. (2012). arXiv:1206.6389. https://arxiv.org/abs/1206.6389 — R, en, **résumé seulement**.
12. Microsoft (25 mars 2016). « Learning from Tay's introduction ». https://blogs.microsoft.com/blog/2016/03/25/learning-tays-introduction/ — P, en, **lu**.
13. Carlini, N. et al. (2023). arXiv:2302.10149. https://arxiv.org/abs/2302.10149 — R, en, **résumé seulement**.
14. Souly, A. et al. (2025). arXiv:2510.07192. https://arxiv.org/abs/2510.07192 — R, en, **résumé seulement**.

## Points d'attention

- **Pas de mode d'emploi** : le module montre les mécanismes sur des modèles
  jouets ; aucune instruction utilisable contre un service réel, aucun
  contournement de filtre recopié. Domaines d'exemple en `.example` (RFC 6761).
- **Mythe de la date** : ne pas dire que les exemples adverses ont été
  « découverts » en 2013-2014 ; c'est leur version contre les réseaux de
  neurones profonds (Biggio & Roli).
- **Tesla** : toujours donner la réponse de Tesla à côté des résultats de Keen Lab.
- **Tay** : rester général sur le contenu des messages ; ne pas reprendre de
  citations. Ne pas dire que Tay a été « empoisonné pendant l'entraînement » :
  Microsoft parle d'une vulnérabilité exploitée par une attaque coordonnée,
  sans détailler.
- **250 documents** : expériences jusqu'à 13 milliards de paramètres, avec une
  porte dérobée précise ; ne pas généraliser à « on peut empoisonner n'importe
  quelle IA avec 250 documents ».
- **Prénoms** : seulement ceux lus dans les sources (Dawn Song, Simon Willison,
  Riley Goodside, Kai Greshake…), initiales sinon.
- Le règlement européen sur l'IA (2024/1689) parle de robustesse face à ces
  attaques : page EUR-Lex inaccessible depuis l'outil de recherche (réponse
  202 vide), **non repris**.
