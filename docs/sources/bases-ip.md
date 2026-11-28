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

8. J. Postel (éd.), USC/Information Sciences Institute, pour la DARPA, RFC 791, *Internet Protocol*, septembre 1981 (rédigée avant la création de l'IETF en 1986 ; auteur selon l'en-tête et les métadonnées rfc-editor) — https://www.rfc-editor.org/rfc/rfc791 — P — en
9. J. Mogul, J. Postel, RFC 950, *Internet Standard Subnetting Procedure*, août 1985 — https://www.rfc-editor.org/rfc/rfc950 — P — en
10. V. Fuller, T. Li, RFC 4632, *Classless Inter-domain Routing (CIDR)*, août 2006 — https://www.rfc-editor.org/rfc/rfc4632 — P — en
11. Y. Rekhter, B. Moskowitz, D. Karrenberg, G. J. de Groot, E. Lear, RFC 1918, *Address Allocation for Private Internets*, février 1996 — https://www.rfc-editor.org/rfc/rfc1918 — P — en
12. J. Arkko, M. Cotton, L. Vegoda, RFC 5737, *IPv4 Address Blocks Reserved for Documentation*, janvier 2010 — https://www.rfc-editor.org/rfc/rfc5737 — P — en
13. G. Huston, A. Lord, P. Smith, RFC 3849, *IPv6 Address Prefix Reserved for Documentation*, juillet 2004 — https://www.rfc-editor.org/rfc/rfc3849 — P — en
14. A. Retana, R. White, V. Fuller, D. McPherson, RFC 3021, *Using 31-Bit Prefixes on IPv4 Point-to-Point Links*, décembre 2000 — https://www.rfc-editor.org/rfc/rfc3021 — P — en
15. R. Hinden, S. Deering, RFC 4291, *IP Version 6 Addressing Architecture*, février 2006 — https://www.rfc-editor.org/rfc/rfc4291 — P — en
16. S. Deering, R. Hinden, RFC 8200, *Internet Protocol, Version 6 (IPv6) Specification*, juillet 2017 — https://www.rfc-editor.org/rfc/rfc8200 — P — en
17. S. Kawamura, M. Kawashima, RFC 5952, *A Recommendation for IPv6 Address Text Representation*, août 2010 — https://www.rfc-editor.org/rfc/rfc5952 — P — en
18. Number Resource Organization, « Free Pool of IPv4 Address Space Depleted », 3 février 2011 — https://www.nro.net/ipv4-free-pool-depleted/ — S — en — archive : http://web.archive.org/web/20261111005112/https://www.nro.net/ipv4-free-pool-depleted/
19. RIPE NCC, « The RIPE NCC has run out of IPv4 Addresses », 25 novembre 2019 — https://www.ripe.net/publications/news/the-ripe-ncc-has-run-out-of-ipv4-addresses/ — S — en — archive : http://web.archive.org/web/20240620130825/https://www.ripe.net/publications/news/the-ripe-ncc-has-run-out-of-ipv4-addresses/

**Points d'attention**

- « Épuisement » : il reste des adresses IPv4 en circulation (marché, récupération) ;
  ce qui est épuisé, ce sont les réserves libres des registres.
- Exemples du site : uniquement des adresses de documentation (RFC 5737,
  RFC 3849) et des plages privées (RFC 1918).
- Nombre d'hôtes d'un réseau : 2^(32 − n) − 2 en général (adresse de réseau et
  de diffusion retirées), mais 2 pour un /31 (RFC 3021) et 1 pour un /32.

## 3. Sous-réseaux et VLSM (module `/modules/sous-reseaux/`, recherche du 6 novembre 2026)

**Faits clés**

- RFC 950 (août 1985) : les valeurs « tout à 0 » et « tout à 1 » du champ de
  sous-réseau « should not be assigned to actual (physical) subnets » [20].
- RFC 1878 (décembre 1995) : les tables incluent ces sous-réseaux « per the
  current, standards-based practice for using all definable subnets »
  (renvoi à la RFC 1812) ; l'exclusion est qualifiée d'**obsolète** (« This
  practice is obsolete! ») [21] [22].
- RFC 3021 (2000) : /31 sur les liaisons point à point [14].
- IPv6 : identifiant d'interface de 64 bits pour presque toutes les adresses,
  d'où des réseaux locaux en /64 (RFC 4291 ; analyse de la frontière fixe dans
  la RFC 7421, janvier 2015) [15] [24].
- RFC 6177 (mars 2011, BCP 157, remplace la RFC 3177 qui recommandait le /48) :
  pas de taille imposée aux sites, mais « at least one /64, and in most cases
  significantly more » ; les registres encouragent aussi des /56 [23].

**Sources**

20. J. Mogul, J. Postel, RFC 950, 1985 — https://www.rfc-editor.org/rfc/rfc950 — P — en
21. T. Pummill, B. Manning, RFC 1878, *Variable Length Subnet Table For IPv4*, décembre 1995 (publiée « Informational », statut actuel « Historic » selon rfc-editor) — https://www.rfc-editor.org/rfc/rfc1878 — P — en
22. F. Baker, RFC 1812, *Requirements for IP Version 4 Routers*, juin 1995 — https://www.rfc-editor.org/rfc/rfc1812 — P — en
23. T. Narten, G. Huston, L. Roberts, RFC 6177, *IPv6 Address Assignment to End Sites*, mars 2011 — https://www.rfc-editor.org/rfc/rfc6177 — P — en
24. B. Carpenter (éd.), T. Chown, F. Gont, S. Jiang, A. Petrescu, A. Yourtchenko, RFC 7421, *Analysis of the 64-bit Boundary in IPv6 Addressing*, janvier 2015 — https://www.rfc-editor.org/rfc/rfc7421 — P — en

**Points d'attention**

- L'astuce « 256 − octet du masque » est une méthode de calcul, pas une règle
  normative ; elle vaut pour l'octet où passe la frontière.
- Les exercices n'utilisent que les plages de documentation (RFC 5737) et
  10.0.0.0/8 (RFC 1918).

## 4. Relecture des modules Adresses IP et Sous-réseaux (vérifications du 28 novembre 2026)

Recherche du 28 novembre 2026, pour la première passe de correction des
grilles `docs/relecture/adresses-ip.md` et `docs/relecture/sous-reseaux.md`.
Les RFC ont été téléchargées en texte intégral depuis rfc-editor.org et lues
aux passages cités ; leurs auteur·es et statuts viennent de l'en-tête et des
métadonnées `https://www.rfc-editor.org/rfc/rfcNNNN.json`. Les liens
d'archive ont été obtenus par l'API de disponibilité d'Internet Archive
(`archive.org/wayback/available`) ; les pages d'archive elles-mêmes n'ont pas
été ouvertes.

**Faits clés**

- RFC 791 : en-tête « prepared for DARPA … by Information Sciences
  Institute », signée « Jon Postel, Editor » ; rfc-editor indique J. Postel
  comme auteur [8].
- RFC 917 (J. Mogul, octobre 1984) : décrit les sous-réseaux, que « many
  organizations have chosen » de pratiquer déjà ; elle se présente comme une
  proposition (« suggests a proposed protocol ») [25].
- RFC 950, § « Special Addresses » : les bits de sous-réseau, définis par un
  masque, « need not be adjacent in the address. However, we recommend that
  the subnet bits be contiguous » ; l'annexe donne un exemple de masque non
  contigu, 255.255.255.88 (« illustrating non-contiguous subnet bits »). Les
  sous-réseaux « tout à 0 » et « tout à 1 » « should not be assigned » :
  recommandation, pas interdiction [9] [20].
- RFC 1519 (V. Fuller, T. Li, J. Yu, K. Varadhan, septembre 1993) : trois
  problèmes, « exhaustion of the class B network address space », « growth
  of routing tables » et, à long terme, l'épuisement de l'espace IPv4. Elle
  note les routes en paires (réseau, masque) et n'emploie pas la notation
  « /n » [26].
- RFC 4632, § 1 : « conserving the address space and limiting the growth
  rate of global routing state » ; § 3.1 : la notation « / » suivie du
  nombre de bits significatifs ; § 5.1 : « The only outstanding constraint is
  that the mask must be left contiguous » [10].
- RFC 1812 (juin 1995) : un préfixe est « a contiguous set of bits at the
  more significant end of the address » ; « the use of discontiguous subnet
  masks is not permitted » [22]. La RFC 1878 fonde l'inclusion de tous les
  sous-réseaux sur « the current, standards-based practice for using all
  definable subnets [4] », la référence [4] étant la RFC 1812 ; elle ajoute
  « Many vendors only support subnetting based upon this premise. This
  practice is obsolete! Modern software will be able to utilize all
  definable networks » [21].
- RFC 1878 : statut actuel « HISTORIC » (publiée « INFORMATIONAL ») selon
  rfc-editor [21].
- RFC 1009 (R. Braden, J. Postel, juin 1987), § 4.2 : « A different subnet
  address mask must be configurable for each interface of a given gateway.
  This will allow […] to connect two subnets of the same network with
  different masks » : des masques de longueurs différentes dans un même
  réseau, avant le CIDR [27]. La RFC 4632 qualifie d'obsolète un protocole de
  routage interne « that doesn't support classless routing or
  variable-length subnets » [10].
- RFC 3021 : vise les « point-to-point links (common throughout the Internet
  infrastructure) » [14]. RFC 6164 (avril 2011) : préfixes /127 sur les
  liaisons point à point entre routeurs, « parallels the use of 31-bit
  prefixes in IPv4 » [28].
- RFC 7421, résumé : « describes the advantages of this fixed boundary and
  analyzes the issues that would be involved in treating it as a variable
  boundary » [24].
- RFC 6177 : « at least one /64, and in most cases significantly more. One
  particular situation that must be avoided is having an end site feel
  compelled to use IPv6-to-IPv6 Network Address Translation or other
  burdensome address conservation techniques » ; pas de recommandation
  formelle de taille ; les registres encouragent des /56 [23].
- RIPE-690 (octobre 2017) : « offering /48 for business customers and /56
  for residential customers » ; les opérateurs ne devraient pas « assign
  prefixes longer than /56 unless there are very strong and unsolvable
  technical reasons » ; le /60 est cité comme taille possible (lu en résumé
  par un outil de lecture, citations reprises de ce résumé) [29].
- RFC 4291 : « The "::" can only appear once in an address » ; forme
  `x:x:x:x:x:x:d.d.d.d` pour une adresse qui finit par une IPv4 [15].
- Plages à usage spécial (RFC 6890 et registre IANA, CSV du registre lu) :
  0.0.0.0/8, 100.64.0.0/10 (RFC 6598, NAT d'opérateur), 127.0.0.0/8
  (bouclage), 169.254.0.0/16 (lien local, « Forwardable: False »),
  198.18.0.0/15, 240.0.0.0/4 (réservé), 255.255.255.255/32 (diffusion
  limitée) [30] [31] [32]. Multidiffusion : 224.0.0.0 à 239.255.255.255
  (RFC 5771) [33]. NAT : RFC 3022 [34].
- Épuisement, état au 28 novembre 2026 :
  - NRO, 3 février 2011 : « Each RIR will have its final full /8 from
    IANA » ; AFRINIC confirme : « Each RIR then received one /8 each, which
    is around 16.8 million IPv4 addresses » [18] [35].
  - ARIN, 24 septembre 2015 : « ARIN issued the final IPv4 addresses in its
    free pool » ; les demandes passent par la liste d'attente « or through
    the IPv4 Transfer Market » [36].
  - RIPE NCC, 25 novembre 2019 : liste d'attente, adresses récupérées, un
    seul /24 par nouveau membre [19]. Région : « Europe, Middle East and
    Central Asia » (page « About us ») [37].
  - LACNIC, 28 août 2020 : « the last available IPv4 address block had been
    reserved » ; adresses récupérées après six mois de quarantaine,
    attribuées selon une liste d'attente [38].
  - APNIC : « The maximum amount of IPv4 address space new or existing APNIC
    Members can get is a /23 or 512 addresses » ; liste d'attente supprimée
    le 2 juillet 2019 [39].
  - AFRINIC : « Current IPv4 Exhaustion Phase: Phase 2 », depuis le
    13 janvier 2020 [35].
- Adoption d'IPv6, état au 28 novembre 2026 : Google mesure entre 46,3 % et
  50,7 % d'utilisateur·ices qui y accèdent en IPv6 du 17 au 26 novembre 2026
  (fichier de données `adoption.js` de la page de statistiques) [40] ;
  APNIC Labs mesure, pour le monde, 43,2 % de « capable » et 39,6 % de
  « preferred » en moyenne sur 30 jours au 24 novembre 2026 (fichier JSON
  `XA.json`) [41].
- Population mondiale : « 8.2 billion in 2024 » (ONU, *World Population
  Prospects 2024*, résumé des résultats, PDF lu) [42]. 2³² ≈ 4,29 milliards,
  soit environ 0,52 adresse par personne.

**Sources**

25. J. Mogul, RFC 917, *Internet Subnets*, octobre 1984 — https://www.rfc-editor.org/rfc/rfc917 — P — en
26. V. Fuller, T. Li, J. Yu, K. Varadhan, RFC 1519, *Classless Inter-Domain Routing (CIDR): an Address Assignment and Aggregation Strategy*, septembre 1993 (remplacée par la RFC 4632) — https://www.rfc-editor.org/rfc/rfc1519 — P — en
27. R. Braden, J. Postel, RFC 1009, *Requirements for Internet Gateways*, juin 1987 — https://www.rfc-editor.org/rfc/rfc1009 — P — en
28. M. Kohno, B. Nitzan, R. Bush, Y. Matsuzaki, L. Colitti, T. Narten, RFC 6164, *Using 127-Bit IPv6 Prefixes on Inter-Router Links*, avril 2011 — https://www.rfc-editor.org/rfc/rfc6164 — P — en
29. J. Žorž, S. Steffann, P. Dražumerič, M. Townsley et al., RIPE-690, *Best Current Operational Practice for Operators: IPv6 prefix assignment for end-users*, 16 octobre 2017 — https://www.ripe.net/publications/docs/ripe-690/ — P — en — archive : http://web.archive.org/web/20260918234650/https://www.ripe.net/publications/docs/ripe-690/
30. M. Cotton, L. Vegoda, R. Bonica (éd.), B. Haberman, RFC 6890, *Special-Purpose IP Address Registries*, avril 2013 — https://www.rfc-editor.org/rfc/rfc6890 — P — en
31. IANA, *IANA IPv4 Special-Purpose Address Registry* (CSV) — https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry-1.csv — P — en
32. J. Weil, V. Kuarsingh, C. Donley, C. Liljenstolpe, M. Azinger, RFC 6598, *IANA-Reserved IPv4 Prefix for Shared Address Space*, avril 2012 — https://www.rfc-editor.org/rfc/rfc6598 — P — en
33. M. Cotton, L. Vegoda, D. Meyer, RFC 5771, *IANA Guidelines for IPv4 Multicast Address Assignments*, mars 2010 — https://www.rfc-editor.org/rfc/rfc5771 — P — en
34. P. Srisuresh, K. Egevang, RFC 3022, *Traditional IP Network Address Translator (Traditional NAT)*, janvier 2001 — https://www.rfc-editor.org/rfc/rfc3022 — P — en
35. AFRINIC, « AFRINIC IPv4 Exhaustion » — https://afrinic.net/exhaustion — S — en — archive : http://web.archive.org/web/20261113132032/https://afrinic.net/exhaustion
36. ARIN, « ARIN IPv4 Free Pool Reaches Zero », 24 septembre 2015 — https://www.arin.net/vault/announcements/20150924/ — S — en — archive : http://web.archive.org/web/20261112215433/https://www.arin.net/vault/announcements/20150924/
37. RIPE NCC, « About us » — https://www.ripe.net/about-us/ — S — en
38. LACNIC, « IPv4 Exhaustion: LACNIC Has Assigned the Last Remaining Address Block », 28 août 2020 — https://blog.lacnic.net/en?p=13745 — S — en — pas d'archive trouvée
39. APNIC, « IPv4 exhaustion » — https://www.apnic.net/manage-ip/ipv4-exhaustion/ — S — en — archive : http://web.archive.org/web/20261116070258/https://www.apnic.net/manage-ip/ipv4-exhaustion/
40. Google, « IPv6 Statistics » — https://www.google.com/intl/en/ipv6/statistics.html (données : https://www.google.com/intl/en_ALL/ipv6/statistics/data/adoption.js) — S — en — archive : http://web.archive.org/web/20261115103919/http://www.google.com/intl/en/ipv6/statistics.html
41. APNIC Labs, « IPv6 Capability Metrics », monde (XA) — https://stats.labs.apnic.net/ipv6/XA (données : https://data1.labs.apnic.net/v6stats/v6region/XA.json) — R — en — archive : http://web.archive.org/web/20260517123740/https://stats.labs.apnic.net/ipv6/XA
42. Nations unies, DESA, Division de la population, *World Population Prospects 2024: Summary of Results*, 2024 — https://population.un.org/wpp/assets/Files/WPP2024_Summary-of-Results.pdf — P — en

**Points d'attention**

- Les chiffres d'épuisement et d'adoption d'IPv6 bougent : la page porte
  `evolutif` et « état au 28 novembre 2026 ». À la prochaine mise à jour,
  relire les cinq pages des registres et les deux mesures d'IPv6.
- « Les 1 du masque toujours à gauche » est la règle d'aujourd'hui (RFC 1812,
  RFC 4632) ; la RFC 950 admettait des masques non contigus.
- Le premier « /n » n'est pas dans la RFC 1519 ; la RFC 1878 (1995) parle
  déjà de « CIDR [3] representation form (/xx) ».
- Le nombre d'appareils connectés n'a pas été sourcé : la page dit seulement
  que « beaucoup d'entre nous ont plusieurs appareils connectés ».
- La RFC 1878 est « Historic » : l'usage de tous les sous-réseaux s'appuie
  aussi sur la RFC 1812.
- Les exercices ont été renumérotés le 28 novembre 2026 (type toujours tiré,
  cas déroutants exclus) : un numéro donné avant cette date ne donne plus le
  même exercice.

