# Scénario — « Histoire de l'informatique »

*Une histoire mondiale de l'informatique, avec celles et ceux qu'on oublie.*
Statut : **publié** (`/modules/histoire-informatique/`), relecture humaine à
faire. Faits sourcés dans [`docs/sources/informatique.md`](../sources/informatique.md).

## Intention

Raconter l'informatique comme une histoire d'idées, de métiers, de machines et
de choix politiques venus de plusieurs continents (`VISION.md`, § 3) : une
frise filtrable par région, thème et pionnières (composant générique
`FriseHistoire`, données dans `src/data/histoire-informatique.ts`), puis cinq
étapes qui démontent les « premier·es » et les attributions uniques.

## Les étapes

| # | Étape | Animation | Contenu |
|---|---|---|---|
| 0 | Deux mille ans de calcul | `FriseHistoire` | 31 événements (IIᵉ s. av. J.-C. – 1985), filtres région / thème / pionnières, une source par événement |
| 1 | Calculer avant les machines | texte | Pingala, al-Khwârizmî, Lovelace (Note G), calculatrices de Harvard, Greenwich, NACA ; mythes « première programmeuse », chiffres « arabes » |
| 2 | Des machines partout dans le monde | texte | Enigma (Polonais, Turing, Joan Clarke), ENIAC Six, Setun, TIFRAC, Clementina ; condamnation et pardon de Turing, Nuit des longs bâtons ; mythes « Turing seul », « père de l'informatique » |
| 3 | Programmer | texte | Hopper (A-0, FLOW-MATIC), Iouchtchenko (Adresse), Vaughan, Johnson, Easley, Keller, Hamilton, Shirley ; mythes COBOL, papillon, Apollo, pointeurs |
| 4 | Puces et petites mains | texte | Conway et Mead, Dean, Lawson, Wilson et Furber, ouvrières de Hong Kong, Shiprock, Penang, maquiladoras ; mythes ARM et cartouche |
| 5 | Des choix politiques | texte | OGAS, Cybersyn, réserve de marché brésilienne, Wang Xuan et Chen Kunqiu, TRON ; mythe des sanctions contre TRON |
| ✓ | Ce qu'il faut retenir | liste | cinq points |

## Choix et limites

- La frise est lisible sans JavaScript (liste complète) ; les filtres ne font
  que masquer des éléments.
- Lynn Conway et Sophie Wilson : jamais de nom de naissance ; la transition de
  Lynn Conway n'est évoquée que pour son licenciement par IBM (fait public,
  excuses de 2020) ; rien sur celle de Sophie Wilson, qui ne change rien à son
  travail.
- Le nom de naissance de Stephanie Shirley, présent dans le dossier, n'est pas
  publié : il n'apporte rien.
- Ouvrières de l'électronique : le discours patronal des « doigts agiles » est
  présenté comme un discours, pas comme une explication (Nakamura, lu en résumé).
- Wang Xuan : sources institutionnelles chinoises seulement ; Chen Kunqiu,
  codirectrice du projet, est nommée.
- Pas encore traités (voir « À vérifier plus tard » dans le dossier) : bureaux
  de calcul hors Royaume-Uni et États-Unis, Afrique, Zuse, Colossus, l'ABC.
