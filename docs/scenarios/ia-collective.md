# Scénario — « L'IA, fruit d'une intelligence collective »

*L'IA est faite du travail de millions de personnes, souvent invisible ; et
elle peut, à son tour, aider des groupes à délibérer.* Statut : **publié**
(`/modules/ia-collective/`, section « L'intelligence collective »), relecture
humaine à faire. Faits sourcés dans
[`docs/sources/intelligence-collective.md`](../sources/intelligence-collective.md),
thème 4 (complément du 24 octobre 2026 pour GPT-3 et reCAPTCHA).

## Intention

Dernier module de la section : retourner la question. Après des collectifs
humains aidés par des algorithmes, montrer que l'IA elle-même est un produit
collectif : textes du web, mots des reCAPTCHA, annotations payées à la pièce,
préférences de quelques dizaines de personnes. Finir sur l'IA comme aide à la
délibération, avec ses limites.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Des milliards de pages | `Melange` | part du volume et part des exemples des cinq sources de GPT-3 (tableau 2.2) ; 100 exemples tirés |
| 1 | Un mot pour un livre | `Recaptcha` | la règle de vote publiée (2,5 voix) mot par mot ; statistiques sur 1 000 mots comparées à l'article |
| 2 | Étiqueter le monde | tableau | ImageNet et Mechanical Turk ; Kenya, Venezuela, Madagascar, avec les réponses des entreprises |
| 3 | Préférer une réponse | `Recompense` | 5 réponses, part des annotateur·rices qui aiment le détail, vérification ou non ; ses propres choix ; modèle de Bradley-Terry |
| 4 | L'IA médiatrice ? | texte | la « machine de Habermas » (DeepMind, 2024) et ses limites |
| ✓ | Qui fait l'IA ? | tableau | quatre groupes de contributeur·rices, et s'ils le savent |

## Choix et limites

- **Mélange de GPT-3** et **règle de reCAPTCHA** : chiffres exacts des
  articles (PDF relus). Les lectures de mots, les fautes et la justesse des
  personnes (92 %) et du premier OCR (80 %) sont inventées ; elles donnent
  environ 67 % de mots déchiffrés avec deux personnes, proche des 67,87 %
  mesurés.
- **Modèle de récompense** : Bradley-Terry sur 400 comparaisons simulées ; les
  préférences sont inventées. Le cas « personne ne vérifie » est une
  conséquence logique du modèle, pas un résultat d'étude.
- **Travail des annotateur·rices** : aucun·e travailleur·se nommé·e ; contenus
  décrits de façon générale ; chiffres de TIME et de la MIT Technology Review
  présentés avec les réponses de Sama, OpenAI, Appen et Scale AI. Les 90
  centimes de l'heure sont un chiffre de Scale AI elle-même.
- **RLHF** : pas d'inventeur unique ; l'article de 2017 est présenté comme une
  collaboration qui s'appuie sur des travaux antérieurs.
- **Machine de Habermas** : étude menée par l'entreprise qui développe
  l'outil, contexte britannique ; limites citées d'après l'un des auteurs.
- Prénoms donnés seulement quand ils sont lus dans la source (auteurs de
  reCAPTCHA) ; initiales sinon.
