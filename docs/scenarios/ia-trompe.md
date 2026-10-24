# Scénario — « Les IA qu'on trompe exprès »

*Images piégées, instructions cachées, données empoisonnées.* Statut :
**publié** (`/modules/ia-trompe/`, section « L'IA »), relecture humaine à
faire. Faits sourcés dans [`docs/sources/ia-tromper.md`](../sources/ia-tromper.md).

## Intention

Montrer, sur de vrais petits modèles calculés dans le navigateur, les trois
grandes façons de tromper une IA : pendant qu'elle sert (exemples adverses),
quand elle lit (injection d'instructions), quand elle apprend
(empoisonnement). Défaire le mythe d'une découverte en 2014, présenter les
réponses des entreprises mises en cause, et finir sur les défenses, sans
jamais donner de mode d'emploi utilisable contre un service réel.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Quelques pixels | `Pixels` | régression logistique entraînée sur 400 dessins (ronds, croix, 12 × 12) ; perturbation par le signe du gradient, ε de 0 à 0,3 |
| 1 | Dans le monde réel | texte | panneau stop (Eykholt et al.), objets 3D (Athalye et al.), Keen Lab et la réponse de Tesla |
| 2 | Des instructions cachées | `Injection` | assistant simulé qui résume une page contenant un texte invisible ; protections : aucune, filtre de mots, validation humaine ; l'attaquant peut reformuler |
| 3 | Empoisonner l'apprentissage | `Poison` | 0 à 30 croix marquées d'un carré, étiquetées « rond », ajoutées aux 400 dessins ; carte des poids appris |
| 4 | Se défendre | texte | entraînement adverse, données, limitation des pouvoirs (ANSSI), course aux armements (Biggio et Roli) |
| ✓ | Trois façons de tromper une IA | tableau | attaque, moment, exemple, défense |

## Choix et limites

- **Modèles réels mais jouets** (`src/lib/tromper.ts`) : pour une régression
  logistique, le gradient par rapport à l'image est exactement le vecteur des
  poids, donc la méthode du signe du gradient est exacte. Avec ε = 0,2, 90 %
  des dessins de test sont mal classés ; avec 10 dessins piégés sur 410, 95 %
  des croix marquées sont prises pour des ronds, sans perte de justesse.
- **L'assistant de l'étape 2 n'est pas un modèle de langage** : quelques
  règles qui miment le mécanisme ; dit sous l'animation. Le texte piège est
  générique, sans technique de contournement réelle ; adresses en `.example`.
  Le texte caché est lu par les lecteurs d'écran, comme par l'assistant : la
  légende l'explique.
- **Pas de mode d'emploi** : aucune technique de contournement recopiée des
  sources (OWASP cite plusieurs langues, Base64, émojis : seulement évoqué).
- **Tesla** : la réponse de l'entreprise est donnée à côté des résultats.
- **Tay** : contenu des messages non repris ; on reste sur l'explication de
  Microsoft.
- Le règlement européen sur l'IA n'est pas cité (texte non lu).
