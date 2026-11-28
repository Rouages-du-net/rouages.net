# Relecture humaine des modules

Chaque module porte la mention « module en construction » tant qu'une
personne n'a pas tout relu. Une **grille** par module rend cette relecture
plus rapide : on relit en suivant une liste précise au lieu de reprendre le
module de zéro.

## Comment ça marche

1. **La grille** `docs/relecture/<slug>.md` est préparée à l'avance, avec un
   assistant d'IA. Elle croise chaque affirmation du module avec son dossier
   de sources (`docs/sources/`) et signale les écarts. Elle ne remplace pas la
   relecture : elle sert à la guider.
2. **La relecture** : on ouvre le module à côté de la grille et on coche
   chaque case, `- [x]`, une fois l'affirmation vérifiée ou corrigée. Pour un
   point à corriger, on note la correction à la suite (« → corrigé : … ») ou
   on ouvre une PR.
3. **La validation** : quand plus aucune case n'est vide, on ajoute le module
   dans `src/data/relecture.ts` avec la date. Le bandeau « module en
   construction » disparaît au déploiement suivant.

Un test (`tests/unit/relecture.test.ts`) bloque la validation d'un module
tant que sa grille n'existe pas ou qu'il y reste une case vide.

## Les sections d'une grille

| Section | Contenu | Conseil |
|---|---|---|
| 1. Faits à vérifier | Chaque affirmation vérifiable (date, chiffre, nom, attribution, commande, RFC) et sa source dans le dossier | Ouvrir la source quand le fait est surprenant ; sinon, vérifier que la page dit bien ce que dit le dossier |
| 2. Points de vigilance | Les écarts repérés : fait sans source, chiffre différent, nuance perdue, calcul faux | **À traiter en premier** : c'est là que se cachent les vraies erreurs |
| 3. Simplifications | Ce que les niveaux 🟢 et les animations simplifient | Critère : « simplifier, oui ; mentir, jamais » |
| 4. Animations | Ce que montre chaque animation, et sa version sans JavaScript | Jouer l'animation une fois en entier ; désactiver JavaScript pour lire le texte de remplacement |
| 5. Décision | Récapitulatif et validation | |

## Critères communs (pour la case « Ton, lisibilité, accessibilité »)

**Sources** (`docs/SOURCES.md`)

- Chaque fait publié a sa source dans le bloc « Sources » du bas de page ; les
  sources primaires passent d'abord.
- Un fait surprenant ou contesté a deux sources indépendantes.
- Wikipédia n'apparaît qu'en « pour aller plus loin ».
- Ce qui bouge vite (lois, procès, chiffres) est marqué « état au [date] »,
  et la page porte le marqueur ⏳ « évolutif ».
- Aucun « premier·e X » ni « inventé par » sans nuance ; l'histoire n'est pas
  seulement occidentale ; les femmes et les minorités apparaissent quand les
  sources le permettent.

**Ton** (`docs/CHARTE.md`, « Ton des textes »)

- On tutoie le lecteur, avec des phrases courtes et des exemples réels.
- Pas de « En effet », « Ainsi », « Il est important de noter ».
- Le niveau 🔴 reste précis et sobre.

**Lecture et accessibilité**

- Le niveau 🟢 seul se comprend sans les deux autres.
- Les termes techniques renvoient au glossaire, et la définition du
  glossaire est juste.
- La page se lit sur un téléphone, sans défilement horizontal.
- Elle reste compréhensible sans JavaScript, et rien ne bouge quand le
  système demande de réduire les animations.
- On peut tout faire au clavier : touche Tab pour avancer, Entrée pour
  ouvrir un encart.

## État

| Module | Grille | Relu le |
|---|---|---|
| De l'Entrée à la page | [entree-a-la-page.md](entree-a-la-page.md) | — |
| Linux : fichiers, droits, comptes et SSH | [linux.md](linux.md) | — |
| Adresses IP et masques | [adresses-ip.md](adresses-ip.md) | — |
| Découper un réseau en sous-réseaux | [sous-reseaux.md](sous-reseaux.md) | — |
| Client et serveur : protocoles, ports, URL | [client-serveur.md](client-serveur.md) | — |

Les 40 autres modules n'ont pas encore de grille. On les ajoutera au fur et à
mesure, en commençant par ceux dont le ton a déjà été retravaillé.
