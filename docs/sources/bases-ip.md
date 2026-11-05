# Sources : bases de numération, adresses IP et masques

Dossier des modules « Compter en binaire, octal et hexadécimal »
(`/modules/bases/`) et « Adresses IP et masques » (`/modules/adresses-ip/`).
Recherche du 5 novembre 2026 ; toutes les pages ci-dessous ont été ouvertes et
lues (les RFC en texte intégral). Légende : P = primaire, R = recherche,
S = site institutionnel.

## 1. Bases de numération

**Faits clés**

- Les Babyloniens utilisaient un système positionnel en base 60, avec seulement
  deux symboles ; il en reste nos 60 minutes et 60 secondes. Le système garde
  des traces de base 10 [1].
- Le système maya est en base 20 (vigésimal), avec trois symboles (point, barre,
  zéro) [2].
- La numération positionnelle décimale avec un zéro vient d'Inde ; elle passe
  au monde arabe puis à l'Europe [3]. (Voir aussi al-Khwârizmî dans
  `informatique.md`.)
- En 1703, Leibniz publie l'*Explication de l'arithmétique binaire* : voir
  `ordinateur.md`, § 2 (fac-similé HAL lu) [4].
- Les droits des fichiers Unix s'écrivent en octal : `chmod` accepte un
  « nombre octal » dont chaque bit allume un droit [5].
- Les couleurs CSS s'écrivent en hexadécimal (`#RRGGBB`) [6].
- En programmation, les préfixes `0x`, `0o` et `0b` signalent l'hexadécimal,
  l'octal et le binaire (exemple : Python) [7].

**Sources**

1. J. J. O'Connor, E. F. Robertson, « Babylonian numerals », MacTutor (St Andrews) — https://mathshistory.st-andrews.ac.uk/HistTopics/Babylonian_numerals/ — R — en
2. J. J. O'Connor, E. F. Robertson, « Mayan mathematics », MacTutor — https://mathshistory.st-andrews.ac.uk/HistTopics/Mayan_mathematics/ — R — en
3. J. J. O'Connor, E. F. Robertson, « Indian numerals », MacTutor — https://mathshistory.st-andrews.ac.uk/HistTopics/Indian_numerals/ — R — en
4. G. W. Leibniz, « Explication de l'arithmétique binaire », 1703, fac-similé HAL — https://hal.science/ads-00104781 — P — fr
5. The Open Group, POSIX, « chmod » — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chmod.html — P — en
6. W3C, *CSS Color Module Level 4*, notation hexadécimale — https://www.w3.org/TR/css-color-4/ — P — en
7. Python, *Lexical analysis*, littéraux entiers — https://docs.python.org/3/reference/lexical_analysis.html — P — en

**Points d'attention**

- Ne pas dire que le binaire est « la langue de l'ordinateur » : c'est une
  notation pour deux états électriques (voir le module ordinateur).
- Les 60 minutes « viennent de Babylone » : formulation courante, MacTutor dit
  que la base 60 « survit » dans la mesure du temps et des angles.

## 2. Adresses IP et masques

**Faits clés**

- IPv4 (RFC 791, septembre 1981) : adresses de 32 bits ; à l'origine, des
  **classes** A, B, C selon les premiers bits [8].
- Les **masques de sous-réseau** sont décrits en août 1985 (RFC 950) [9].
- Le **CIDR** (adressage sans classes, préfixe de longueur quelconque, notation
  `/n`) date de septembre 1993 (RFC 1519), remplacé par la RFC 4632 en août
  2006 ; il répond à l'épuisement des classes B et, à terme, de l'espace IPv4
  [10].
- Plages privées (RFC 1918) : 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 [11].
- Plages réservées à la documentation : 192.0.2.0/24, 198.51.100.0/24,
  203.0.113.0/24 (RFC 5737) et 2001:db8::/32 en IPv6 (RFC 3849) [12] [13].
- Préfixes /31 sur les liaisons point à point : deux adresses, sans adresse de
  réseau ni de diffusion (RFC 3021, décembre 2000) [14].
- IPv6 : adresses de 128 bits, écrites en huit groupes de 16 bits en
  hexadécimal (`x:x:x:x:x:x:x:x`) ; la plupart des adresses ont un identifiant
  d'interface de 64 bits (RFC 4291) [15]. Spécification du protocole : RFC 8200
  [16].
- Écriture recommandée des adresses IPv6 (RFC 5952, août 2010) : supprimer les
  zéros en tête de chaque groupe ; utiliser « :: » au maximum ; ne pas
  l'utiliser pour un seul groupe nul ; raccourcir la plus longue suite de
  groupes nuls, la première en cas d'égalité ; lettres en minuscules [17].
- Épuisement : le 3 février 2011, l'IANA distribue ses derniers blocs IPv4 aux
  cinq registres régionaux [18] ; le 25 novembre 2019, le RIPE NCC (Europe,
  Moyen-Orient, Asie centrale) annonce avoir épuisé les siens [19].

**Sources**

8. RFC 791, *Internet Protocol*, septembre 1981 — https://www.rfc-editor.org/rfc/rfc791 — P — en
9. J. Mogul, J. Postel, RFC 950, *Internet Standard Subnetting Procedure*, août 1985 — https://www.rfc-editor.org/rfc/rfc950 — P — en
10. V. Fuller, T. Li, RFC 4632, *Classless Inter-domain Routing (CIDR)*, août 2006 — https://www.rfc-editor.org/rfc/rfc4632 — P — en
11. RFC 1918, *Address Allocation for Private Internets*, 1996 — https://www.rfc-editor.org/rfc/rfc1918 — P — en
12. RFC 5737, *IPv4 Address Blocks Reserved for Documentation*, 2010 — https://www.rfc-editor.org/rfc/rfc5737 — P — en
13. RFC 3849, *IPv6 Address Prefix Reserved for Documentation*, 2004 — https://www.rfc-editor.org/rfc/rfc3849 — P — en
14. RFC 3021, *Using 31-Bit Prefixes on IPv4 Point-to-Point Links*, décembre 2000 — https://www.rfc-editor.org/rfc/rfc3021 — P — en
15. R. Hinden, S. Deering, RFC 4291, *IP Version 6 Addressing Architecture*, février 2006 — https://www.rfc-editor.org/rfc/rfc4291 — P — en
16. RFC 8200, *Internet Protocol, Version 6 (IPv6) Specification*, 2017 — https://www.rfc-editor.org/rfc/rfc8200 — P — en
17. S. Kawamura, M. Kawashima, RFC 5952, *A Recommendation for IPv6 Address Text Representation*, août 2010 — https://www.rfc-editor.org/rfc/rfc5952 — P — en
18. Number Resource Organization, « Free Pool of IPv4 Address Space Depleted », 3 février 2011 — https://www.nro.net/ipv4-free-pool-depleted/ — S — en
19. RIPE NCC, « The RIPE NCC has run out of IPv4 Addresses », 25 novembre 2019 — https://www.ripe.net/publications/news/the-ripe-ncc-has-run-out-of-ipv4-addresses/ — S — en

**Points d'attention**

- « Épuisement » : il reste des adresses IPv4 en circulation (marché, récupération) ;
  ce qui est épuisé, ce sont les réserves libres des registres.
- Exemples du site : uniquement des adresses de documentation (RFC 5737,
  RFC 3849) et des plages privées (RFC 1918).
- Nombre d'hôtes d'un réseau : 2^(32 − n) − 2 en général (adresse de réseau et
  de diffusion retirées), mais 2 pour un /31 (RFC 3021) et 1 pour un /32.
