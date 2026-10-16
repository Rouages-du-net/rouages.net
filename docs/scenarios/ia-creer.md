# Scénario — « Les IA qui créent »

*Créer à partir du bruit, et la frontière entre création et copie.* Statut :
**publié** (`/modules/ia-creer/`), relecture humaine à faire. Faits sourcés
dans [`docs/sources/ia-creer.md`](../sources/ia-creer.md).

## Intention

Montrer, avec de vrais calculs, comment une IA générative fabrique quelque
chose à partir du bruit (diffusion) ou en devinant la suite (musique), et
rendre visible la question centrale : quand crée-t-elle, quand recopie-t-elle ?
Puis exposer les débats juridiques sans prendre parti, en datant l'état des
procès, et finir par la traçabilité.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Du bruit à la forme | `Diffusion2D` | 160 points en étoile noyés dans le bruit ; 40 points générés par débruitage ; mémoire parfaite (copies : 31/40), un peu floue (1/40), floue (0/40) |
| 1 | Une image qui sort du bruit | `DiffusionImage` | demande (cercle, carré, triangle, croix) ; 16 × 16 pixels ; mémoire parfaite (copie exacte d'un exemple) ou floue (image nouvelle) ; étapes du débruitage |
| 2 | Composer une mélodie | `Melodie` | chaîne de Markov d'ordre 2 sur trois comptines ; température ; plus longue copie surlignée ; écoute |
| 3 | À qui appartient l'œuvre ? | — | texte : droit d'auteur, fouille de données et opt-out, tableau des affaires daté, artistes pour et contre |
| ✓ | Reconnaître une création d'IA | tableau | C2PA, filigranes, détecteurs, et leurs limites ; AI Act art. 50 |

## Choix et limites

- **Débruiteur idéal** (`src/lib/creer.ts`) au lieu d'un réseau entraîné : il
  calcule exactement la meilleure estimation pour un petit jeu d'exemples. La
  « mémoire floue » ajoute de l'incertitude, ce qui imite la généralisation
  d'un vrai modèle ; c'est une image pédagogique, dite comme telle.
- **Airs traditionnels** du domaine public, notés pour le site.
- **Procès** : tableau daté du 16 octobre 2026, avec la position de chaque
  partie ; à mettre à jour.
- **LAION** : aucun détail sur les contenus illicites, seulement le fait et
  la réaction.
