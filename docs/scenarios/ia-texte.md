# Scénario — « Les IA qui écrivent »

*Démonter un grand modèle de langage, pièce par pièce.* Troisième module des
*Rouages du net*. Statut : **publié** (`/modules/ia-texte/`). Faits
sourcés dans [`docs/sources/ia-mecanismes.md`](../sources/ia-mecanismes.md)
et [`docs/sources/ia.md`](../sources/ia.md).

## Place dans la famille « L'IA »

Ce module traite des modèles de langage. Il fait partie d'une famille de
modules sur l'IA (voir `docs/ROADMAP.md`, phase 5) : « L'IA, c'est quoi ? »
(porte d'entrée : IA à règles et IA qui apprend), « Comment apprend une
machine », « Les IA qui écrivent » (celui-ci), « Les IA qui voient », « Les IA
qui dessinent », « Les IA qui jouent ». Quand « Comment apprend une machine »
existera, les étapes 3 (le neurone) et 4 (apprendre) y seront déplacées.

## Intention

Les assistants conversationnels semblent penser. Le module montre ce qu'ils
font vraiment : deviner la suite d'un texte, token après token. On démonte
chaque pièce avec **un vrai petit modèle qui tourne dans le navigateur**
(`src/lib/minilm.ts`) : il apprend sur un corpus de quelques dizaines de
phrases écrites pour le site, découpe en tokens avec un vrai BPE, calcule de
vraies probabilités, une vraie attention, une vraie descente de gradient.

Ce qui est **illustratif** est dit comme tel sur la page : la carte des
plongements (coordonnées choisies à la main, en 2 dimensions) et les vecteurs
de l'attention (4 dimensions choisies à la main). Les calculs, eux, sont les
vrais.

**Fil conducteur** : « le chat… » — une phrase qu'on suit du découpage en
tokens jusqu'au tirage du mot suivant.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'un modèle de langage calcule la probabilité du token suivant, et écrit
   en répétant ce calcul ;
2. que le texte est d'abord découpé en tokens, puis changé en vecteurs
   (plongements) appris ;
3. qu'un réseau de neurones est fait de petites formules à poids, et
   qu'apprendre, c'est ajuster ces poids par descente de gradient ;
4. que l'attention permet à chaque mot de tenir compte des autres ;
5. que la réponse contient une part de hasard (température) et qu'une
   « hallucination » découle du fonctionnement même ;
6. qu'il y a des humains (auteur·ices des textes, annotateur·ices,
   modérateur·ices), des machines et de l'énergie derrière chaque réponse ;
   qui décide (entreprises, AI Act, poids ouverts ou non).

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Deviner le mot suivant | `MotSuivant` | modèle n-gramme entraîné dans le navigateur : on écrit un début, on clique les mots proposés, ou on le laisse finir |
| 1 | Découper en tokens | `Tokeniseur` | les fusions BPE apprises pas à pas, puis son propre texte découpé en tokens numérotés |
| 2 | Les mots deviennent des points | `Plongements` | carte 2D : voisins, analogies, et le piège des analogies (exclure les mots de départ) |
| 3 | Un neurone artificiel | `Neurone` | perceptron à deux entrées : régler les poids à la main ou par la règle de Rosenblatt |
| 4 | Apprendre en se trompant | `Descente` | descente de gradient sur une courbe d'erreur, taille du pas (dont un pas qui diverge) |
| 5 | L'attention | `Attention` | « il » regarde « chat » ou « pont » selon la fin de la phrase ; calcul softmax(q·k/√d) |
| 6 | Écrire : un peu de hasard | `Temperature` | curseur de température, cinq phrases tirées au sort |
| 7 | Les coulisses | `Fabrication` | la chaîne : textes, pré-entraînement, ajustement humain, filtres, réponse |
| ✓ | Bilan | tableau | ce qui se passe quand on parle à un assistant |

Chaque étape a ses trois niveaux de lecture et, selon les besoins, ses encarts
« Un peu d'histoire », « Qui décide ? », « Vérifie toi-même » et « Idées
reçues ». Les éléments d'histoire et de « Qui décide ? » viennent des dossiers
de sources (Markov, Shannon, Weizenbaum, Amari, Fukushima, Ivakhnenko,
Vaswani et al., Fei-Fei Li, Buolamwini et Gebru, annotateur·ices ; AI Act,
poids ouverts).

## Choix et limites

- **Corpus** : `CORPUS` dans `src/lib/minilm.ts`, écrit pour le site (libre
  de droits). Volontairement minuscule : on voit le modèle se tromper
  (« le chat dort sur le jardin »), ce qui illustre les hallucinations.
- **Pas de vrai grand modèle dans la page** : le site reste statique, sans
  appel à un service extérieur (cf. `CLAUDE.md`).
- **Neutralité** : on cite plusieurs assistants (ChatGPT, Gemini, Le Chat)
  comme exemples, sans en recommander aucun.
