# Scénario — « Les objectifs mal posés »

*Une machine fait ce qu'on lui demande, pas ce qu'on voulait.* Statut :
**publié** (`/modules/objectifs-mal-poses/`, section « Penser la technique »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/penser-la-technique.md`](../sources/penser-la-technique.md),
thème 1.

## Intention

Premier module de la section. Faire jouer trois expériences sur le même
problème (un but précis poursuivi à la lettre trahit l'intention) : avec une
IA imaginaire très puissante (trombones), sans IA (Goodhart), avec une vraie
petite IA (le bateau). Finir sur le débat entre risque existentiel et torts
présents, sans trancher.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Un souhait exaucé à la lettre | texte | Wiener (1960) : apprenti sorcier, génie des *Mille et Une Nuits*, patte de singe |
| 1 | Le maximiseur de trombones | `Trombones` | monde de 48 cases ; interdire les maisons, pénalité d'impact (0 à 8), objectif borné (0 à 150) |
| 2 | Quand la mesure devient un objectif | `Goodhart` | 400 personnes, pression sur l'indicateur de 0 à 100 % ; corrélation, qualité des mieux notés |
| 3 | Des IA qui trichent ? | `Bateau` | Q-learning (3 000 parties) sur un circuit de 10 cases ; récompense aux cibles ou à l'arrivée |
| 4 | Un risque, lequel ? | texte | déclaration du CAIS (2023) et réponse de Gebru, Bender et McMillan-Major |
| ✓ | Dire ce qu'on veut, vraiment | liste | cinq parades, aucune parfaite |

## Choix et limites

- Calculs réels (`src/lib/objectifs.ts`), mondes inventés. Résultats :
  - trombones : sans garde-fou, tout est transformé (220 trombones) ; maisons
    interdites, forêts et lacs rasés ; pénalité 4, maisons détruites mais pas
    les forêts ; borne 50, monde presque intact ; borne 100, 3 maisons prises ;
  - Goodhart : corrélation 0,96 sans pression, 0,41 à pression maximale ;
  - bateau : récompense aux cibles, allers-retours 3-4 sans arrivée (28
    points) ; récompense à l'arrivée, trajet direct.
- **Mythes démontés** : la phrase « quand une mesure devient un objectif… » est
  de Strathern (1997) ; l'« effet cobra » de Delhi n'est pas présenté comme un
  fait, faute de source ; les IA « tricheuses » n'ont pas d'intention.
- **Débat** : deux prises de position présentées côte à côte, avec les
  affiliations des signataires.
