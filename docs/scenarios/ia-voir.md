# Scénario — « Les IA qui voient »

*Une machine ne voit que des nombres.* Statut : **publié** (`/modules/ia-voir/`),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-voir.md`](../sources/ia-voir.md).

## Place dans la famille « L'IA »

Module « par but ». Il s'appuie sur « Comment apprend une machine » (neurone,
rétropropagation) et y renvoie. La reconnaissance faciale y est abordée sous
l'angle des biais et du droit ; la vidéosurveillance algorithmique sera
développée dans « Les IA qui surveillent », et les images piégées dans « Les IA
qu'on trompe exprès ».

## Intention

Montrer, sans boîte noire, la chaîne d'un réseau qui voit : des pixels, des
filtres de convolution, un réseau qui apprend ses propres filtres. Puis
montrer ce qui change quand l'image est un visage : erreurs inégales,
encadrement légal.

**Fil conducteur** : ce que tu dessines toi-même.

## Objectifs pédagogiques

À la fin du module, le visiteur sait :

1. qu'une image est un tableau de nombres ;
2. qu'un filtre de convolution fait ressortir des bords ou floute, en
   faisant le même calcul partout ;
3. qu'un réseau convolutif apprend ses filtres à partir d'exemples, et qu'il
   ne reconnaît que ce qu'on lui a appris ;
4. qu'un système de reconnaissance faciale peut avoir des taux d'erreur très
   différents selon les groupes, et qu'une moyenne cache ces écarts ;
5. ce que le droit européen et français interdit ou encadre.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Une image, ce sont des nombres | `Pixels` | dessiner sur 16 × 16 pixels et voir les 256 nombres correspondants |
| 1 | Des filtres pour voir les bords | `Convolution` | cinq noyaux 3 × 3 sur une petite maison ; calcul détaillé d'un pixel |
| 2 | Un réseau qui apprend ses filtres | `Formes` | petit réseau convolutif (4 filtres, < 900 paramètres) entraîné sur 400 formes générées ; on dessine, il répond ; ses filtres et ses cartes de caractéristiques |
| 3 | Quand l'image est un visage | `Visages` | taux d'erreur de Gender Shades (tableau 4) par service et par groupe ; sans JavaScript, le tableau complet |
| ✓ | Bilan | tableau | cinq usages courants et la question à poser pour chacun |

## Choix et limites

- **Formes générées** (`src/lib/voir.ts`) plutôt que la base MNIST : la licence
  de MNIST n'est pas établie, et le site reste léger. Le réseau est entraîné
  dans le navigateur, avec une graine fixe.
- **Gender Shades** porte sur la classification du genre (binaire), pas sur
  l'identification : la page le dit, et cite à côté l'étude du NIST.
- **Pas de nom de personne privée** : le fils de Russell Kirsch n'est pas nommé ;
  aucune personne visée par une sanction n'est citée, seulement l'entreprise.
- **Droit** : citations de l'AI Act lues sur une copie du Journal officiel
  (EUR-Lex bloqué ce jour-là) : à relire sur EUR-Lex.
