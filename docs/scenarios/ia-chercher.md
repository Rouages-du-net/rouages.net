# Scénario — « Les IA qui cherchent et optimisent »

*Des IA qui n'apprennent rien : elles cherchent.* Statut : **publié**
(`/modules/ia-chercher/`), relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-chercher.md`](../sources/ia-chercher.md).

## Place dans la famille « L'IA »

Module « par but » qui correspond, dans la carte des IA, aux mécanismes
« recherche et exploration » et « inspirés de la nature ». Il montre que l'IA
ne se réduit pas à l'apprentissage : la recherche est l'une de ses plus
vieilles branches.

## Intention

Partir du GPS (familier), montrer qu'on ne teste pas tous les trajets
(Dijkstra), qu'une bonne estimation accélère sans rien perdre (A*), et qu'en
faire trop fait perdre la garantie. Puis montrer l'explosion combinatoire (le
voyageur de commerce) et les méthodes approchées, dont celles inspirées de la
nature (fourmis, évolution), sans les présenter comme magiques.

**Fil conducteur** : se déplacer et faire sa tournée, puis faire son sac.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'un itinéraire se calcule sur un graphe, et que Dijkstra trouve le
   meilleur trajet sans tout essayer ;
2. qu'une heuristique admissible (A*) accélère la recherche sans perdre la
   garantie, et qu'une heuristique trop confiante la perd ;
3. que certains problèmes explosent (voyageur de commerce) et qu'on se
   contente alors de très bonnes solutions ;
4. que les fourmis virtuelles et les algorithmes génétiques sont des
   méthodes approchées inspirées de la nature ;
5. qu'optimiser, c'est toujours optimiser un critère choisi par des humains.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Le plus court chemin | `Itineraire` (Dijkstra seul) | ville en grille avec une avenue embouteillée ; exploration en onde, 167 carrefours examinés, trajet de 27 min |
| 1 | Chercher malin : A* | `Itineraire` (trois méthodes) | A* : 34 carrefours, même trajet ; « foncer vers l'arrivée » : 22 carrefours mais 81 min dans le bouchon |
| 2 | Trop de tournées | `Tournee` | tracer sa tournée entre 8 hameaux imaginaires ; au plus proche, 2-opt, force brute (2 520 tournées) ; tableau de l'explosion |
| 3 | S'inspirer des fourmis | `Fourmis` | Ant System sur 20 villes ; épaisseur des traits = phéromone ; comparaison avec 2-opt |
| 4 | S'inspirer de l'évolution | `Evolution` | algorithme génétique, sac de randonnée de 15 objets (9 kg) ; population affichée ligne par ligne ; comparaison avec les 32 768 sacs |
| ✓ | Bilan | tableau | qui choisit le critère optimisé ; UPS ORION (chiffres de l'entreprise), Parcoursup (appariement) |

## Choix et limites

- **Carte, hameaux et sac inventés** (`src/lib/chercher.ts`) ; les « km » et
  les « points d'utilité » sont fictifs, réglés pour que le meilleur sac soit
  vraisemblable (tente, sac de couchage, eau, nourriture).
- **Graines fixes** : les mêmes résultats à chaque visite (sauf « Recommencer »
  pour les fourmis, qui tire une nouvelle colonie).
- **GPS** : on rappelle que les satellites ne donnent qu'une position ; le
  module ne dit pas quel algorithme utilise tel service, car ce n'est pas
  public.
- **Parcoursup** : présenté comme une adaptation de Gale-Shapley d'après le
  témoignage de Claire Mathieu ; le document officiel du ministère ne cite pas
  Gale-Shapley.
- Le recuit simulé et les essaims particulaires sont seulement racontés, sans
  animation.
