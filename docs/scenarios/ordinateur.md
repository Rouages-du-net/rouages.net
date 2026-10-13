# Scénario — « Comment marche un ordinateur »

*Du transistor au programme.* Deuxième module des *Rouages du net*.
Statut : **publié** (`/modules/ordinateur/`). Faits sourcés dans
[`docs/sources/ordinateur.md`](../sources/ordinateur.md) et
[`docs/sources/informatique.md`](../sources/informatique.md).

## Intention

Ouvrir la boîte : montrer qu'un ordinateur n'est qu'un empilement de
mécanismes simples, chacun compréhensible, du minuscule interrupteur jusqu'au
programme. À chaque étage, le visiteur **construit** lui-même la pièce (il
câble une porte, additionne avec des interrupteurs, fait tourner un
processeur pas à pas) avant qu'on lui montre la vraie version.

**Fil conducteur** : un même calcul, `2 + 3`, suivi d'étage en étage :
d'abord des bits, puis des portes, puis un additionneur, puis une instruction
d'un mini-processeur, puis une ligne de programme.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. que tout, dans un ordinateur, est codé en nombres binaires (bits) : texte,
   images, sons, programmes ;
2. qu'un transistor est un interrupteur commandé électriquement, et qu'une
   puce en contient des milliards ;
3. qu'avec des interrupteurs on fabrique de la logique (portes), et qu'avec de
   la logique on fabrique du calcul (additionneur) et de la mémoire (bascule) ;
4. qu'un processeur répète sans fin « chercher, décoder, exécuter » au rythme
   d'une horloge ;
5. qu'un programme est une suite d'instructions en mémoire, et que les
   langages de programmation sont traduits jusqu'à ces instructions ;
6. qui décide (normes, fondeurs, architectures) et qui a construit cette
   histoire, partout dans le monde.

## Les étapes

### 0 — Tout est nombre (le binaire)

- **🟢** Un ordinateur ne connaît que deux états : allumé ou éteint, 1 ou 0.
  Avec assez de 0 et de 1, on peut tout écrire : des nombres, des lettres,
  des couleurs.
- **🟡** Un *bit* vaut 0 ou 1 ; un *octet* regroupe 8 bits (256 valeurs).
  Compter en binaire ; une lettre est un nombre (code ASCII, puis Unicode) ;
  un pixel est trois nombres (rouge, vert, bleu).
- **🔴** Poids des bits, conversion, UTF-8 (1 à 4 octets par caractère),
  nombres négatifs (complément à deux), nombres à virgule (IEEE 754) et la
  surprise `0,1 + 0,2`.
- **Animation** : 8 interrupteurs = 1 octet. On les bascule et l'on voit en
  direct la valeur décimale, la lettre correspondante et une couleur. Champ
  « tape ton prénom » : chaque lettre devient ses octets UTF-8 (accents
  compris : « é » prend 2 octets).
- **Histoire** : Pingala, Leibniz et le *Yi Jing*, Boole ; l'ordinateur
  **ternaire** Setun (URSS) : le binaire est un choix, pas une fatalité.
- **Qui décide ?** Le consortium Unicode (quels caractères existent, emojis
  compris) ; l'IEEE (nombres à virgule).
- **Idée reçue** : « l'ordinateur pense en 0 et 1 » : il ne « pense » pas ;
  0 et 1 sont notre façon de décrire deux niveaux de tension.

### 1 — Le transistor, un interrupteur sans doigt

- **🟢** Un transistor est un interrupteur que l'on commande avec de
  l'électricité au lieu d'un doigt. Une puce en contient des milliards.
- **🟡** Le MOSFET : une tension sur la grille ouvre ou ferme le passage
  entre source et drain. Gravure sur silicium, taille nanométrique ; les noms
  « 3 nm » ne sont plus une taille réelle.
- **🔴** Transistor bipolaire (1947) puis MOSFET (1959) ; logique CMOS
  (paire N + P) ; loi de Moore et sa fin annoncée ; fin de la montée en
  fréquence.
- **Animation** : un transistor schématisé ; le visiteur met la grille à 0 ou
  1 et voit le courant passer ou non. Zoom progressif : transistor → porte →
  bloc → puce, avec le nombre de transistors à chaque échelle.
- **Histoire** : Bell Labs (Bardeen, Brattain, Shockley) ; **Mohamed
  Atalla et Dawon Kahng** (MOSFET) ; Kilby et Noyce, et le procédé planaire
  de Jean Hoerni ; **les ouvrières de l'électronique** (assemblage des
  puces, déjà sourcé) ; **Lynn Conway** (conception VLSI, déjà sourcé).
- **Qui décide ?** Les fondeurs (TSMC, Samsung, Intel…) ; ASML, seul
  fabricant des machines de lithographie EUV ; les États (restrictions
  d'exportation, subventions).
- **Matérialité** : silicium, eau, énergie, salles blanches : renvoi vers le
  module *Matérialité*.

### 2 — Les portes logiques

- **🟢** En reliant quelques transistors, on fabrique des « portes » qui
  répondent à des questions simples : « les deux sont allumés ? » (ET),
  « au moins un ? » (OU), « le contraire ? » (NON).
- **🟡** Tables de vérité de NON, ET, OU, OU exclusif ; tout circuit peut se
  construire avec une seule sorte de porte (NON-ET).
- **🔴** Algèbre de Boole ; Shannon relie relais et logique (et les
  travaux parallèles de Nakashima et Shestakov) ; porte NON-ET en CMOS
  (4 transistors).
- **Animation « Câble ta porte »** : des interrupteurs d'entrée, des portes à
  glisser, une lampe de sortie. Défis : allumer la lampe seulement si les deux
  interrupteurs sont levés ; fabriquer un OU exclusif avec des NON-ET.
  Vérification automatique par table de vérité.

### 3 — Calculer : l'additionneur

- **🟢** Avec des portes, on peut additionner : c'est comme l'addition posée
  de l'école, avec des retenues, mais en binaire.
- **🟡** Demi-additionneur (OU exclusif + ET) ; additionneur complet ;
  4 additionneurs en chaîne = additionneur 4 bits.
- **🔴** Propagation de la retenue et son délai ; additionneurs rapides ;
  l'unité arithmétique et logique (UAL).
- **Animation** : deux nombres de 4 bits (`2` et `3` par défaut) à basculer ;
  les retenues se propagent visiblement d'un étage à l'autre ; le résultat
  s'affiche en binaire et en décimal ; dépassement (`15 + 1`) expliqué.

### 4 — Mémoriser : la bascule et la mémoire

- **🟢** Un ordinateur doit se souvenir. Une boucle de deux portes peut
  « garder » un 1 ou un 0 tant qu'il y a du courant.
- **🟡** Verrou et bascule ; registres ; la mémoire vive (RAM) est un immense
  tableau de cases numérotées (adresses) ; différence entre mémoire vive
  (rapide, s'efface) et stockage (lent, garde les données).
- **🔴** DRAM (un transistor et un condensateur, à rafraîchir) ; SRAM ;
  hiérarchie des caches.
- **Animation** : un verrou SR à manipuler (Mettre / Effacer), puis une
  petite mémoire de 16 cases adressables : écrire et lire à une adresse.

### 5 — L'horloge

- **🟢** Un chef d'orchestre donne le tempo : à chaque « tic », tous les
  circuits avancent d'un pas. Un processeur bat des milliards de tics par
  seconde.
- **🟡** Fréquence (hertz), cycle d'horloge ; pourquoi on n'augmente plus
  guère la fréquence et pourquoi on multiplie les cœurs.
- **Animation** : un métronome réglable qui fait avancer le mini-processeur
  de l'étape 6 ; on peut le ralentir à 1 tic par seconde.

### 6 — Le processeur : chercher, décoder, exécuter

- **🟢** Le processeur lit une instruction en mémoire, comprend ce qu'elle
  demande, l'exécute, puis passe à la suivante. Encore, et encore.
- **🟡** Compteur de programme, registre d'instruction, registres, UAL ;
  programme et données dans la même mémoire (programme enregistré).
- **🔴** Cycle détaillé, sauts conditionnels, drapeaux ; jeux d'instructions
  (x86, ARM, RISC-V).
- **Animation « Mini-processeur 4 bits »** : 16 cases de mémoire, un
  accumulateur, un compteur de programme, 6 instructions (`CHARGE`,
  `AJOUTE`, `RANGE`, `SAUTE`, `SAUTE SI ZÉRO`, `STOP`). Programmes d'exemple :
  `2 + 3`, puis un compte à rebours (boucle). Pas à pas avec l'horloge de
  l'étape 5 ; chaque phase (chercher / décoder / exécuter) est surlignée.
  Le visiteur peut modifier la mémoire et écrire son propre programme.
- **Histoire** : rapport EDVAC (1945) et la controverse d'attribution ;
  **Kateryna Iouchtchenko** (adressage indirect, déjà sourcé) ; Intel 4004
  et l'équipe **Faggin, Hoff, Mazor, Shima** ; **Sophie Wilson** (jeu
  d'instructions ARM, déjà sourcé).
- **Qui décide ?** Les détenteurs d'architectures : Intel et AMD (x86), Arm
  (licences), RISC-V International (jeu d'instructions ouvert).

### 7 — Du langage humain aux instructions

- **🟢** Personne n'écrit directement des 0 et des 1 : on écrit dans des
  langages plus proches du nôtre, puis un programme les traduit pour le
  processeur.
- **🟡** Code machine → langage d'assemblage → langages de haut niveau ;
  compilateur et interpréteur.
- **🔴** Une même ligne (`total = 2 + 3`) montrée en Python, en assembleur
  RISC-V et en code machine.
- **Animation** : la ligne `total = 2 + 3` se « traduit » sous les yeux du
  visiteur, étage par étage, jusqu'aux instructions du mini-processeur de
  l'étape 6 (boucle bouclée avec le fil conducteur).
- **Histoire** : **Kathleen Booth** et le langage d'assemblage ;
  **Grace Hopper** (compilateurs, déjà sourcé) ; FORTRAN ; Plankalkül de
  Zuse ; **Ada Lovelace** (déjà sourcé).
- **Et ensuite** : le système d'exploitation, qui partage le processeur et
  la mémoire entre les programmes : renvoi vers un futur module.

## Encart final — « Et ton ordinateur à toi ? »

Un tableau qui relie chaque étape à une caractéristique qu'on lit sur une
fiche produit : nombre de cœurs et fréquence (étapes 5-6), mémoire vive en
Go (étape 4), stockage (étape 4), finesse de gravure (étape 1, avec la
nuance sur les « nm »), architecture x86 ou ARM (étape 6).

## Vérifie toi-même

- Afficher les caractéristiques de son processeur (`lscpu` sous Linux,
  « Informations système » sous Windows et macOS).
- Voir les octets d'un texte : l'animation de l'étape 0, ou `xxd` / un
  éditeur hexadécimal.
- Jouer à **Terminus** pour la ligne de commande.

## Réalisation

Mêmes briques que le module 1 : `Etape`, `Niveaux`, `Terme`, `Sources`,
`src/lib/pasapas.ts`. Le mini-processeur (étape 6) est un composant
autonome, réutilisable dans un futur jeu (« programme le processeur »).
