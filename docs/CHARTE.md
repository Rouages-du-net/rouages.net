# Charte graphique

Une charte volontairement légère, pour que les pages et les animations
gardent un même style. Toutes les valeurs vivent dans
`src/styles/global.css` : **ne jamais écrire une couleur en dur** dans un
composant, toujours passer par une variable.

## Intention

- **Papier et laiton** : un fond chaud, comme une planche d'atlas ou un carnet
  d'ingénieur ; un accent cuivre, la couleur des rouages… et des fils de
  cuivre qui transportent les données.
- **Lisible avant tout** : une police conçue pour les personnes malvoyantes,
  des contrastes AA partout, un mode sombre soigné.
- **Montrer la mécanique** : schémas précis plutôt qu'illustrations
  décoratives ; on préfère une flèche juste à une jolie image.

## Couleurs

Contrastes calculés selon WCAG 2 : toutes les couleurs ci-dessous atteignent
au moins **4,5:1** sur le fond et sur les cartes, dans les deux thèmes (elles
peuvent donc aussi servir pour du texte).

### Interface

| Variable | Rôle | Clair | Sombre |
|---|---|---|---|
| `--bg` | fond de page (« papier ») | `#fbf8f3` | `#15140f` |
| `--card` | cartes, encarts | `#ffffff` | `#1f1d17` |
| `--border` | filets, bordures | `#e6dfd3` | `#34302a` |
| `--fg` | texte | `#1d1b18` | `#ece7de` |
| `--muted` | texte secondaire | `#665f55` | `#a39b8e` |
| `--accent` | cuivre : liens, éléments actifs | `#a84a14` | `#e8874a` |
| `--accent-2` | sarcelle : second accent | `#1b6670` | `#5fbcc6` |

### Schémas et animations

Chaque acteur garde **la même couleur dans tout le site**, pour qu'on le
reconnaisse d'un module à l'autre. La couleur n'est jamais le seul indice :
chaque élément porte aussi une étiquette ou une forme distinctive.

| Variable | Représente | Clair | Sombre |
|---|---|---|---|
| `--ill-client` | ton appareil, ton navigateur | `#1b6670` | `#5fbcc6` |
| `--ill-reseau` | box, routeurs, câbles | `#5f5a52` | `#a39b8e` |
| `--ill-serveur` | serveurs, datacenters | `#7a5c12` | `#d6b25a` |
| `--ill-paquet` | données en transit, paquets | `#a84a14` | `#e8874a` |
| `--ill-secret-a` | secret de la première partie | `#6b3fa0` | `#b48ce6` |
| `--ill-secret-b` | secret de la seconde partie | `#2f7a3a` | `#7cc98a` |
| `--ill-commun` | élément public, partagé | `#d9a300` | `#e3b934` |

`--ill-commun` est une couleur de **surface** (remplissage), pas de texte.

## Typographie

- **Texte** : *Atkinson Hyperlegible Next*, conçue par le Braille Institute
  pour la lisibilité des personnes malvoyantes (licence OFL), **servie par le
  site lui-même** (paquet `@fontsource-variable`), sans appel à un service
  tiers.
- **Code et commandes** : *Atkinson Hyperlegible Mono*, de la même famille.
- Taille de base 17 px, interligne 1,6 ; titres en graisse 700 ; jamais de
  texte en dessous de 13 px.

## Mise en page : aérer

Une page dense fatigue. Règles :

- le texte courant ne dépasse pas `--mesure` (42rem, environ 70 signes par ligne) ;
  seules les animations prennent toute la largeur ;
- interligne 1,7 ; grands espaces entre l'animation, le texte et les encarts ;
- les encarts « Un peu d'histoire », « Qui décide ? », « Vérifie toi-même » et
  « Idées reçues » sont **repliés** (`<details>`) : on les ouvre à la demande ;
- **un écran par étape** (par défaut, `src/lib/ecrans.ts`) : une seule étape
  affichée, des liens Précédent / Suivant en bas, la frise pour sauter
  ailleurs. L'ancre de l'URL suit l'étape (liens internes et bouton Retour).
  Le lecteur peut choisir « Tout sur une page » (mémorisé). Sans JavaScript et
  à l'impression, tout est sur une seule page.

## Illustrations

- **SVG** uniquement, intégrés dans la page (pas d'image bitmap pour un schéma).
- Traits de **2 px**, extrémités et angles **arrondis**, aplats sans dégradé.
- Couleurs : uniquement les variables `--ill-*`, `--fg`, `--muted`,
  `--border` ; le SVG suit donc automatiquement le mode sombre.
- Le **rouage** (composant `Rouage`) est le motif du site : logo, séparateurs,
  états de chargement. Il ne tourne que si l'utilisateur accepte les
  animations.
- Texte des schémas en vrai texte (`<text>` ou HTML), jamais vectorisé.

## Animations

- Durées courtes (150 à 400 ms pour une transition, quelques secondes pour une
  scène) ; courbe `ease-out`.
- **Toujours pilotables** : pas à pas, pause, rejouer. Jamais de boucle infinie
  qui distrait la lecture.
- `prefers-reduced-motion: reduce` : pas de mouvement, la scène s'affiche dans
  son état final avec ses étapes en texte.
- Chaque scène a un **équivalent texte** complet, lu par les lecteurs d'écran.
