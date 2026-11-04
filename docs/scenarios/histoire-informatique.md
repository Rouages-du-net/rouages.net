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
| 0 | Deux mille ans de calcul | `FriseHistoire` | 52 événements (IIᵉ s. av. J.-C. – 1989), 8 régions dont Afrique et Océanie, filtres région / thème / pionnières, une source par événement |
| 1 | Calculer avant les machines | texte | Pingala, al-Khwârizmî, Lovelace (Note G), calculatrices de Harvard, Greenwich, NACA, dames de la Carte du Ciel (Paris), mesureuses de Melbourne, calculateurs de l'ISI (Calcutta), calculateur·rices du projet atomique soviétique (Olga Kramer), soroban contre calculatrice (Tokyo, 1946) ; mythes « première programmeuse », chiffres « arabes » |
| 2 | Des machines partout dans le monde | texte | Z3, ABC, Colossus et les Wrens, MESM (Chkabara), FUJIC, paramétron, Enigma (Polonais, Turing, Joan Clarke), ENIAC Six, Setun, TIFRAC, Clementina, Le Cap (1957), Ibadan (1964), Osofisan ; condamnation et pardon de Turing, Nuit des longs bâtons ; mythes « premier ordinateur » (procès de 1973), « Turing seul », « père de l'informatique », Colossus attribué à Turing |
| 3 | Programmer | texte | Hopper (A-0, FLOW-MATIC), Iouchtchenko (Adresse), Vaughan, Johnson, Easley, Keller, Hamilton, Shirley ; mythes COBOL, papillon, Apollo, pointeurs |
| 4 | Puces et petites mains | texte | Conway et Mead, Dean, Lawson, Wilson et Furber, ouvrières de Hong Kong, Shiprock (occupation de 1975, deux lectures), Penang, maquiladoras ; mythes ARM et cartouche |
| 5 | Des choix politiques | texte | OGAS, Cybersyn, réserve de marché brésilienne, Wang Xuan et Chen Kunqiu (brevet de 1982), TRON, registres de l'apartheid, LOGO en wolof à Dakar (Fatimata Sèye Sylla, critiques du Centre mondial) ; mythe des sanctions contre TRON |
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
- Afrique : seuls les faits solidement sourcés sont publiés (Le Cap, Ibadan,
  Dakar, apartheid, Osofisan) ; rien sur le Kenya ni le Ghana, dont les
  « premiers ordinateurs » ne sont racontés que par des blogs.
- Calcul humain à Calcutta : pas de femmes documentées (Mertia), d'où
  « calculateurs ».
- Shiprock : la fermeture de 1975 est présentée avec ses deux lectures
  (conséquence de l'occupation ou prétexte).
- Fatimata Sèye Sylla est nommée comme responsable du laboratoire de l'ENS
  de Dakar (photo MIT, biographie, mémoire de 1985), pas comme
  « informaticienne du ministère de la Recherche » : ce lien n'est pas vérifié.
- Restent à chercher : le document UNESCO sur le projet de Dakar, la date
  d'installation de l'ICT 1202 au Kenya, la Tanzanie (1965 ou 1968), le
  Ghana, des programmeuses japonaises, et ce que T. Mullaney et J. Tsu écrivent
  de Wang Xuan.
