# Charte graphique

Une charte volontairement légère, pour que les pages et les animations
gardent un même style. Toutes les valeurs vivent dans
`src/styles/global.css` : **ne jamais écrire une couleur en dur** dans un
composant, toujours passer par une variable.

## Intention

- **Atelier de nuit** : un papier millimétré bleu le jour, un ciel étoilé la
  nuit, comme la table d'un·e inventeur·rice qui démonte une machine pour
  voir comment elle marche. Technique, mais joueur : on doit avoir envie
  d'ouvrir le capot.
- **Traits nets, ombres franches** : bordures de 2 px couleur d'encre, ombres
  portées décalées sans flou (`--ombre`), coins arrondis. Pas de dégradés
  « glossy », pas de flou.
- **Des clins d'œil** : une police pixel pour les petites étiquettes, des
  étoiles, un curseur de terminal, quelques secrets cachés (voir
  [`EASTER-EGGS.md`](EASTER-EGGS.md)). Jamais au détriment de la lecture.
- **Lisible avant tout** : une police conçue pour les personnes malvoyantes
  pour le texte, des contrastes AA partout, un mode sombre soigné.
- **Montrer la mécanique** : schémas précis plutôt qu'illustrations
  décoratives ; on préfère une flèche juste à une jolie image.

## Couleurs

Contrastes calculés selon WCAG 2 : toutes les couleurs de texte ci-dessous
atteignent au moins **5:1** sur le fond et sur les cartes, dans les deux
thèmes.

### Interface

| Variable | Rôle | Clair | Sombre |
|---|---|---|---|
| `--bg` | fond (papier millimétré / ciel de nuit) | `#f5f7ff` | `#0d1230` |
| `--card` | cartes, encarts | `#ffffff` | `#161c45` |
| `--border` | filets discrets | `#cfd6f2` | `#2c3470` |
| `--fg` | texte, traits d'encre | `#141a3a` | `#eef0ff` |
| `--muted` | texte secondaire | `#4d567f` | `#a9b0dd` |
| `--accent` | bleu électrique : liens, éléments actifs | `#2b4fd8` | `#86a8ff` |
| `--accent-2` | corail : second accent, sur-titres | `#c62853` | `#ff7a9c` |
| `--soleil` | jaune signal, **surface seulement** (pastilles, surlignage) | `#ffd23f` | `#ffd84d` |
| `--sur-soleil` | texte posé sur `--soleil` | `#141a3a` | `#141a3a` |
| `--grille` | lignes du papier millimétré | bleu à 7 % | bleu à 6 % |
| `--ombre` | ombre portée franche | `4px 4px 0` encre | `4px 4px 0 #050819` |

### Schémas et animations

Chaque acteur garde **la même couleur dans tout le site**, pour qu'on le
reconnaisse d'un module à l'autre. La couleur n'est jamais le seul indice :
chaque élément porte aussi une étiquette ou une forme distinctive.

| Variable | Représente | Clair | Sombre |
|---|---|---|---|
| `--ill-client` | ton appareil, ton navigateur | `#0b7285` | `#5fd9e8` |
| `--ill-reseau` | box, routeurs, câbles | `#565e84` | `#a9b0dd` |
| `--ill-serveur` | serveurs, datacenters | `#8a5300` | `#ffc95c` |
| `--ill-paquet` | données en transit, paquets | `#c62853` | `#ff7a9c` |
| `--ill-secret-a` | secret de la première partie | `#7a3fc4` | `#c39bff` |
| `--ill-secret-b` | secret de la seconde partie | `#1e7a46` | `#6fe0a0` |
| `--ill-commun` | élément public, partagé | `#ffc533` | `#ffd84d` |

`--ill-commun` est une couleur de **surface** (remplissage), pas de texte.
Le terminal (`--terminal-*`) reste sombre dans les deux thèmes.

## Typographie

Toutes les polices sont **servies par le site lui-même** (paquets
`@fontsource`), sous licence OFL, sans appel à un service tiers.

- **Texte** : *Atkinson Hyperlegible Next*, conçue par le Braille Institute
  pour la lisibilité des personnes malvoyantes.
- **Titres** : *Bricolage Grotesque*, une grotesque un peu bricolée, pour le
  côté atelier (`--police-titre`).
- **Étiquettes** : *Silkscreen*, police pixel (`--police-pixel`), seulement
  pour de courts libellés (navigation, badges, numéros d'étape, sur-titres),
  jamais pour du texte courant, jamais sous 12,8 px.
- **Code et commandes** : *Atkinson Hyperlegible Mono*.
- Taille de base 17 px, interligne 1,7 ; jamais de texte en dessous de 13 px.

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
