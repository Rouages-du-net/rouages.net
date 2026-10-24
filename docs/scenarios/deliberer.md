# Scénario — « Délibérer avec des algorithmes »

*Comment des algorithmes et des règles aident des milliers de personnes à se
mettre d'accord.* Statut : **publié** (`/modules/deliberer/`, section
« L'intelligence collective »), relecture humaine à faire. Faits sourcés dans
[`docs/sources/intelligence-collective.md`](../sources/intelligence-collective.md),
thème 3.

## Intention

Après la foule qui rassemble des réponses et les communautés qui construisent,
montrer des outils qui aident à *délibérer* : cartographier les opinions
(Polis), afficher ce qui fait accord entre points de vue (notes de la
communauté), choisir qui délibère (tirage au sort), agréger des priorités
(budget participatif). Les deux premiers calculs sont faits pour de vrai dans
le navigateur.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Cartographier les opinions | `Polis` | 10 à 100 participant·es votent sur 8 phrases (VTC) ; ACP en deux dimensions, k-moyennes (k = 2), phrases de consensus (> 60 % d'accord dans chaque groupe) et phrases qui divisent |
| 1 | Des notes qui font le pont | `Pont` | 80 évaluateur·rices, part du camp A de 30 à 70 % ; règle de la majorité (≥ 2/3 « utile ») contre ordonnée à l'origine d'une factorisation de matrice à un facteur |
| 2 | Tirer au sort | `Tirage` | population de 10 000 ; 150 volontaires contre 150 tiré·es au sort par catégories (âge × diplôme) |
| 3 | Le budget en assemblée | texte | Porto Alegre, note de la Banque mondiale (2003) |
| ✓ | Ce que fait l'algorithme | tableau | quatre méthodes, ce que fait la règle, sa limite |

## Choix et limites

- **Polis** (`src/lib/deliberer.ts`) : ACP par puissance itérée avec
  déflation, k-moyennes avec initialisation par le point le plus éloigné.
  Polis fait d'abord une centaine de groupes, puis les réunit : simplifié ici
  en deux groupes directement. Phrases et votes inventés.
- **Notes de la communauté** : même fonction de coût que la documentation
  publique (régularisation 0,15 des ordonnées, 0,03 des facteurs), mais notes
  0/1, un seul facteur, 80 évaluateur·rices. Le seuil est fixé à 0,30 dans ce
  petit modèle (0,40 dans le vrai, écrit sous l'animation). La colonne des
  facteurs n'est pas affichée : elle est trop bruitée pour les notes peu utiles
  sur si peu de données.
- **Efficacité des notes** : quatre sources présentées côte à côte (équipe de
  Twitter, Chuai et al., Slaughter et al., CCDH), avec la réponse de X.
- **Audrey Tang** : fonctions officielles seulement ; pas ministre en 2015 ;
  vTaiwan présenté comme une création collective (g0v et gouvernement).
- **Convention citoyenne** : les deux lectures de la suite (gouvernement,
  membres). La note globale de 3,3/10 (lue seulement en résumé) n'est pas
  reprise.
- **Porto Alegre** : chiffres de la note de 2003 seulement ; causalité non
  démontrée, dite dans l'encart des mythes. La suspension du dispositif (lue
  seulement en résumé) n'est pas reprise.
- **Tirage au sort** : la population et l'envie de participer sont inventées ;
  l'antériorité (Athènes, autres pays) n'est pas affirmée faute de source lue.
