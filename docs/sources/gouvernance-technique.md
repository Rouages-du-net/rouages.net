# Dossier de sources : Gouvernance technique

Module `/modules/gouvernance-technique/`. Recherches menées le 8 novembre 2026 par deux agents de
recherche (User-Agent `RouagesDuNet-research/0.1`), puis relues pour la rédaction.

Statuts : **[lu]** page ou document lu ; **[extrait]** extrait de moteur de recherche seulement ;
**[méta]** métadonnées seulement. Seuls les faits [lu] sont publiés ; les faits [extrait] ou
contestés listés en « réserves » ne figurent pas sur la page (ou y sont signalés comme tels).

## Choix de rédaction

- Non publiés faute de seconde source : le « test » de la racine par Jon Postel en janvier 1998 ; la date
  de décès de Joyce K. Reynolds ; le lien explicite entre Snowden et la RFC 7258 (la page dit seulement
  « après la plénière de novembre 2013 sur la surveillance », ce que dit la RFC) ; les chiffres de 89
  signataires à la CMTI-12 et la liste des non-signataires (seul le chiffre de 55 non-signataires est lu) ;
  le rôle de Raúl Echeberría à LACNIC (extrait seulement).
- Feinler et les noms de domaine : présenté comme un travail collectif (NIC du SRI et ISI), la RFC 920
  étant signée Postel et Reynolds.
- Prix de l'IPv4 : sources commerciales uniquement, présenté comme une estimation « selon des courtiers ».
- Adresses de l'animation « D'où vient ton adresse IP ? » : `185.x.y.0/22` plutôt qu'un vrai bloc, pour
  ne pas exposer l'adresse de quelqu'un.
- AFRINIC : sujet évolutif et sources polarisées ; la page présente AFRINIC, Cloud Innovation, l'ICANN et
  la NRO, et les critiques africaines. Aucune accusation pénale non jugée n'est reprise.
- Instances de la racine : 2 048 instances opérationnelles (root-servers.org, 8 novembre 2026) ; les
  chiffres par lettre de l'animation viennent des fichiers JSON par lettre (sites suspendus compris,
  total 2 064) : ordres de grandeur. « Plus de 150 pays » sur la page (le calcul en donne environ 180).

## À revérifier (sujets évolutifs)

- AFRINIC : requête en liquidation (audience attendue en 2027), prise de fonctions du directeur général
  le 1er janvier 2027.
- Second roulement de la clé de la racine (11 octobre 2026) : bilan définitif de l'ICANN.
- FGI 2026 à Nairobi (14-18 décembre) ; conférence de plénipotentiaires de l'UIT à Doha (élection du ou de
  la secrétaire générale à partir du 12 novembre 2026).
- Nombre de RFC (index du RFC Editor), enquête communautaire annuelle de l'IETF.

---

# Partie 1 : les normes techniques (IETF, RFC, W3C, WHATWG)

Statut des sources :
- **[lu]** : page ou document ouvert et lu (texte intégral ou passage cité) ;
- **[extrait]** : seulement l'extrait d'un moteur de recherche ;
- **[méta]** : métadonnées seulement (titre, date, statut).

Les RFC ont été lues en texte brut sur `https://www.rfc-editor.org/rfc/rfcNNNN.txt`
(l'URL canonique `https://www.rfc-editor.org/rfc/rfcNNNN` donne le même document).
Les citations entre guillemets sont recopiées du texte original.

---

## 1. Les RFC

### Faits

**RFC 1 (7 avril 1969)**
- Titre « Host Software », auteur **Steve Crocker (UCLA)**, daté du « 7 April 1969 ».
  Elle porte sur le logiciel des « HOST » de l'ARPANET : les IMP (routeurs de l'époque) sont
  spécifiés par BBN, et « it is the responsibility of the HOST groups to agree on HOST software ».
- La RFC 1 cite elle-même le petit groupe de travail : « Steve Carr from Utah, Jeff Rulifson
  from SRI, and Steve Crocker of UCLA ». C'est un travail collectif, pas un auteur unique.
- Source : RFC 1 [lu] https://www.rfc-editor.org/rfc/rfc1.txt

**Pourquoi « Request for Comments »** (récit de Crocker, publié dans la RFC 1000 en 1987) :
- Le groupe était surtout composé d'étudiant·es de troisième cycle : « Most of us were graduate
  students and we expected that a professional crew would show up eventually ».
- « I remember having great fear that we would offend whomever the official protocol designers
  were, and I spent a sleepless night composing humble words for our notes. The basic ground
  rules were that anyone could say anything and that nothing was official. And to emphasize
  the point, I labeled the notes "Request for Comments." »
- Source : RFC 1000, J. Reynolds et J. Postel, août 1987 [lu] https://www.rfc-editor.org/rfc/rfc1000.txt
  (le même récit est repris dans la RFC 8700, décembre 2019 [lu] https://www.rfc-editor.org/rfc/rfc8700.txt).

**Ce qu'est une RFC aujourd'hui**
- La série publie le travail de plusieurs « flux » (streams) : IETF, IAB, IRTF, soumissions
  indépendantes, et depuis 2022 un flux éditorial (RFC 8700 [lu] ; RFC 9280 [lu]
  https://www.rfc-editor.org/rfc/rfc9280.txt).
- Selon l'IETF, les RFC « describe the Internet's technical foundations, such as addressing,
  routing, and transport technologies » et spécifient « TLS 1.3, QUIC, and WebRTC ». Leur
  adoption est volontaire : « Software developers, hardware manufacturers, and network operators
  around the world voluntarily implement and adopt » ces spécifications.
  Source : IETF, Introduction to the IETF [lu] https://www.ietf.org/about/introduction/
- Une RFC n'est jamais modifiée une fois publiée : on publie une nouvelle RFC qui « met à jour »
  (Updates) ou « rend obsolète » (Obsoletes) l'ancienne. Ces liens sont visibles dans l'index
  (par ex. RFC 9499 « Obsoletes RFC8499 »). Source : index des RFC [lu] https://www.rfc-editor.org/rfc-index.txt
- **Une RFC n'est pas forcément une norme.** RFC 2026 : une RFC « Informational » « does not
  represent an Internet community consensus or recommendation ».

**Statuts (RFC 2026, octobre 1996, BCP 9, mise à jour par la RFC 6410 en 2011)**
- *Proposed Standard* : « The entry-level maturity for the standards track ». Une spécification
  « generally stable », mais « further experience might result in a change or even retraction ».
- *Internet Standard* : « significant implementation and successful operational experience »,
  et elle reçoit un numéro dans la série STD.
- *Draft Standard* : niveau intermédiaire **supprimé** par la RFC 6410 (« it reduces the
  Standards Process from three Standards Track maturity levels to two »).
- *Experimental* : « part of some research or development effort ».
- *Informational* : publiée « for the general information of the Internet community ».
- *BCP (Best Current Practice)* : « a way to standardize practices and the results of community
  deliberations ». La RFC 7258 sur la surveillance de masse est une BCP.
- *Historic* : spécifications dépassées.
- Sources : RFC 2026 [lu] https://www.rfc-editor.org/rfc/rfc2026.txt ;
  RFC 6410 [lu] https://www.rfc-editor.org/rfc/rfc6410.txt

**Combien de RFC ? (état au 8 novembre 2026)**
Comptage fait sur l'index officiel, généré le 8 novembre 2026 [lu] https://www.rfc-editor.org/rfc-index.txt :
- numéro le plus élevé publié : **RFC 10082** (novembre 2026). Le cap des 10 000 a été franchi
  en 2026 (la RFC 9999 date de juillet 2026) ;
- **environ 8 925 RFC publiées**, plus 123 numéros « Not Issued » ; les numéros manquants
  (environ un millier) sont réservés ou pas encore publiés. **Il ne faut donc pas dire « plus de
  10 000 RFC »** : c'est le numéro qui dépasse 10 000, pas le nombre de documents ;
- répartition par statut actuel (mon comptage) : Proposed Standard 4 426 ; Informational 3 001 ;
  Experimental 554 ; BCP 337 ; Historic 301 ; Draft Standard 136 ; **Internet Standard 101** ;
  Unknown 69 (surtout des RFC anciennes, antérieures aux statuts) ;
- rythme : environ 150 à 220 RFC par an depuis 2019 ; 208 RFC publiées en 2025 selon l'IETF
  Snapshot 2025 [lu] https://www.ietf.org/media/documents/IETF-Snapshot-2025.pdf
- À retenir pour la vulgarisation : **seulement une RFC sur 90 environ est un « Internet
  Standard » au sens strict**. La plupart des protocoles très utilisés restent en « Proposed
  Standard ».

**Poissons d'avril**
- RFC 1149, D. Waitzman, « 1 April 1990 », « A Standard for the Transmission of IP Datagrams on
  Avian Carriers » : « The IP datagram is printed, on a small scroll of paper, in hexadecimal… The
  scroll of paper is wrapped around one leg of the avian carrier. » [lu] https://www.rfc-editor.org/rfc/rfc1149.txt
- RFC 2324, L. Masinter, « 1 April 1998 », Informational, « Hyper Text Coffee Pot Control
  Protocol (HTCPCP/1.0) » : « a protocol for controlling, monitoring, and diagnosing coffee pots ».
  [lu] https://www.rfc-editor.org/rfc/rfc2324.txt (section 2.3.2 : le code d'erreur
  « 418 I'm a teapot » vient de là).

**Le RFC Editor**
- Jon Postel prend en charge les RFC en 1971 : « Jon Postel assumed the role of RFC manager in
  1971 when Steve left UCLA for ARPA » (Vint Cerf, RFC 8700 [lu]).
- **Joyce K. Reynolds** : « As the load increased, he recruited additional "volunteer" talent,
  most notably Joyce K. Reynolds, a fellow researcher at USC/ISI. » Après la mort de Postel en
  octobre 1998, « Joyce and Bob [Braden] undertook carrying on with the RFC work in his stead,
  adding Sandy Ginoza to the team ». Cerf raconte que Reynolds le mettait au défi de deviner
  quelles corrections étaient d'elle ou de Postel : « I found this impossible » (RFC 8700 [lu]).
- Reynolds cosigne avec Postel des RFC clés, dont la RFC 1000 (1987), « Assigned numbers »
  (RFC 1010, 1060) et la RFC 920 « Domain requirements » (octobre 1984). Source : index des RFC [lu].
- Prix Postel 2006 de l'Internet Society, partagé par Reynolds et Braden, « For their stewardship
  of the RFC (Request for Comments) series ». Le communiqué précise : co-responsable du RFC Editor
  à l'ISI depuis 1998, « she performed the final quality control function on most RFC
  publications », et elle a dirigé le domaine « User Services » de l'IETF de 1988 à 1998.
  Source : ISOC, 10 novembre 2006 [lu]
  https://www.internetsociety.org/news/press-releases/2006/bob-braden-joyce-k-reynolds-receive-postel-award/
- Liste des agents de liaison du RFC Editor auprès de l'IAB : « Jon Postel (1998) | Joyce Reynolds
  (1999-2006) | Sandy Ginoza (2006-2010) | … | Heather Flanagan (2012-…) ». Source : IAB, membres
  passés [lu] https://www.iab.org/about/members/past-iab-members/
- Aujourd'hui (modèle « version 3 », RFC 9280, juin 2022) : la politique de la série est définie
  par le RFC Series Working Group (RSWG) et approuvée par le RFC Series Approval Board (RSAB) ;
  la production est assurée par le RFC Production Center sous contrat de l'IETF LLC ; il existe
  un RFC Series Consulting Editor (RSCE). En 2026, ce poste est occupé par Alexis Rossi (signature
  d'un billet du 30 septembre 2026 sur ietf.org [lu, liste des billets]
  https://www.ietf.org/blog/report-experience-of-women-participating-in-the-ietf/).

### Réserves et points contestés
- **« Steve Crocker a inventé les RFC »** : c'est lui qui a écrit la RFC 1 et choisi le nom, mais
  il décrit lui-même un travail de groupe (Carr, Rulifson, puis le Network Working Group).
- **Date de décès de Joyce K. Reynolds** : la RFC 8700 (2019) confirme qu'elle est décédée
  (« three of these tireless Internauts have passed on »), sans donner de date. La date du
  28 décembre 2015 ne vient que d'une source secondaire [extrait] (ithistory.org) : à ne pas
  publier sans une seconde source.
- Les comptages par statut viennent de mon analyse de l'index : ce sont des ordres de grandeur.
  Écrire « environ » et « état au 8 novembre 2026 ».

---

## 2. L'IETF

### Faits

**Fondation**
- « The first IETF meeting was held in January 1986 at Linkabit in San Diego, with 21
  attendees. The 4th IETF, held at SRI in Menlo Park in October 1986, was the first that
  non-government vendors attended. The concept of Working Groups was introduced at the 5th IETF
  meeting… in February 1987. » Source : RFC 4677, « The Tao of IETF » (2006) [lu]
  https://www.rfc-editor.org/rfc/rfc4677.txt
- L'IETF se présente comme « founded in 1986 », et précise : « in no way does the IETF control,
  or even patrol, the Internet ». Source : Introduction to the IETF [lu] https://www.ietf.org/about/introduction/
- Présidences de l'IETF : Michael Corrigan (1986), Phillip Gross (1986-1994), Paul Mockapetris,
  Fred Baker, **Harald Alvestrand (2001-2005)**, Brian Carpenter, Russ Housley, **Jari Arkko
  (2013-2017)**, **Alissa Cooper (2017-2021)**, Lars Eggert (2021-2024). Source : IESG Past Members [lu]
  https://www.ietf.org/about/groups/iesg/past-members/. En 2026, le président de l'IETF est
  Roman Danyliw (Carnegie Mellon University). Source : IAB, membres actuels [lu]
  https://www.iab.org/about/iab-members/

**Fonctionnement**
- « There is no membership in the IETF. Anyone can participate by signing up to a working group
  mailing list… or registering for an IETF meeting. All IETF participants are considered
  volunteers and expected to participate as individuals, including those paid to participate. »
- « In any one year, over 7000 people actively participate. » « The only fee the IETF charges is
  for registering for an IETF meeting », avec des exonérations possibles.
- **« The IETF conducts its work solely in English. »** (à signaler : barrière réelle pour une
  participation mondiale).
- Travail par groupes de travail (WG), chacun avec sa liste de diffusion ; « Decisions within
  WGs… are taken by 'rough consensus' and not by voting ».
- « The IETF holds three week-long meetings a year. Onsite participation averages between 1000
  and 1500 participants » plus « 600+ remote participants ».
- Point de départ : un Internet-Draft. « Anyone can write an Internet-Draft on any topic. »
- Mission (RFC 3935, reprise sur la page) : « the overall goal of the IETF is to make the Internet
  work better » ; la page ajoute que « the Internet isn't value-neutral, and neither is the IETF ».
- Source de tout ce bloc : Introduction to the IETF [lu] https://www.ietf.org/about/introduction/

**Les organes**
- **IESG** (Internet Engineering Steering Group) : directeur·rices de domaine (Area Directors),
  qui approuvent les documents. Membres en juillet 2026 : IESG Past Members [lu].
- **IAB** (Internet Architecture Board) : « thirteen members. Of these, six are nominated each
  year by a nominating committee… for a two year term… The thirteenth member of the IAB is the
  IETF Chair. The IAB elects its own Chair. » Source : IAB members [lu] https://www.iab.org/about/iab-members/
- **IRTF** (Internet Research Task Force) : recherche à long terme ; président en 2026 Dirk Kutscher
  (Hong Kong University of Science and Technology). Source : IAB members [lu].
- **NomCom** : les responsables (IESG, IAB) sont choisis par un comité de nomination dont les
  « 10 voting volunteers » sont **tirés au sort** parmi des volontaires, avec une méthode qui
  « must depend on random data whose value is not known or available until the date on which the
  random selection will occur ». Source : RFC 8713 (février 2020) [lu] https://www.rfc-editor.org/rfc/rfc8713.txt
  (détail intéressant à vulgariser : ni élection, ni nomination par une entreprise).

**Internet Society (1992) et IETF LLC (2018)**
- Chronologie officielle de l'ISOC [lu] https://www.internetsociety.org/history/ :
  - « 1 January 1992 : Official formation of Internet Society with Vint Cerf as president of the
    Board of Trustees » ;
  - « 15 June 1992 : The First Board, Council, and Member meeting of the Internet Society occurs
    at the INET'92 event in **Kobe, Japan** » ;
  - 18-19 juin 1992 : le conseil vote pour faire entrer l'IAB et ses activités dans l'ISOC ; l'IAB
    devient « Internet Architecture Board » et « The IETF… will continue to pursue
    standards-setting… under this new umbrella » ;
  - 10 décembre 1992 : constitution en association à but non lucratif à Washington ;
  - 1994 : premier chapitre de l'ISOC fondé au **Japon**, notamment par Toru Takahashi.
- **IETF LLC** : « The IETF Administration LLC (IETF LLC) provides the corporate legal home for
  the IETF, the Internet Architecture Board (IAB), and the Internet Research Task Force (IRTF). »
  Source : https://www.ietf.org/about/administration/ [lu]. L'accord constitutif est daté
  d'août 2018 (« Limited Liability Company Agreement of IETF Administration LLC », August 2018),
  et la RFC 8711 (février 2020, BCP 101) décrit cette organisation « IASA 2.0 » et le rôle
  restant de l'ISOC. Source : RFC 8711 [lu] https://www.rfc-editor.org/rfc/rfc8711.txt

**La devise de David Clark (1992) : source primaire trouvée**
- Texte exact, dans les diapositives de la présentation « A Cloudy Crystal Ball - Visions of the
  Future », David D. Clark (MIT), 24e réunion de l'IETF, **Cambridge (Massachusetts), 13-17
  juillet 1992**, actes p. 539-543 :
  « We reject: kings, presidents and voting.
  We believe in: rough consensus and running code. »
  Sur la même diapositive, Clark écrit que l'IETF est mauvaise pour « Growing our processes to
  match our size ». Source : Proceedings of the Twenty-Fourth IETF [lu, PDF de 30 Mo]
  https://www.ietf.org/proceedings/24.pdf
- La RFC 7282 cite cette présentation comme référence [Clark] : « Dave Clark's 1992 plenary
  presentation ». [lu]
- **Contexte, important et méconnu** : en juin 1992, après la conférence INET'92 de **Kobe**,
  l'IAB a semblé imposer une piste pour remplacer IP, en s'inspirant du protocole CLNP de l'OSI.
  Selon la RFC 1396 (S. Crocker, janvier 1993), il y a eu « immediate controversy along two
  dimensions » : technique, et politique : « Who makes decisions within the Internet community?
  Who chooses who makes these decisions? ». L'affaire « came to a head » à la réunion de juillet
  1992 à Cambridge, celle de la diapositive de Clark. La RFC précise aussi que beaucoup, à l'IAB,
  estimaient avoir donné un avis et non une décision. Source : RFC 1396 [lu]
  https://www.rfc-editor.org/rfc/rfc1396.txt
  → La devise est donc née d'un **conflit de gouvernance**, pas d'un slogan publicitaire.

**RFC 7282 : le consensus approximatif et le « hum »** (P. Resnick, juin 2014, Informational)
- Le hum : « When, for example, we have face-to-face meetings and the chair of the working group
  wants to get a "sense of the room", instead of a show of hands, sometimes the chair will ask
  for each side to hum on a particular question, either "for" or "against". »
- Le consensus approximatif : pas d'unanimité, sinon « a single intransigent person who simply
  keeps saying "No!" » bloquerait tout ; le président peut constater un consensus quand une
  objection « has been truly considered » et y a été répondu.
- Titre de section : « Lack of disagreement is more important than agreement ».
- « Humming should be the start of a conversation, not the end. » et « Hums should not be used as
  votes. »
- Autocritique : « more and more of our actions are now indistinguishable from voting, and quite
  often we are letting the majority win the day without consideration of minority concerns ».
- Source : RFC 7282 [lu] https://www.rfc-editor.org/rfc/rfc7282.txt

**Processus de normalisation**
- RFC 2026 (1996, BCP 9) : le processus de base ; RFC 6410 (2011) : passage à deux niveaux ;
  RFC 2418 (1998, BCP 25) : fonctionnement des groupes de travail [lu, téléchargée]
  https://www.rfc-editor.org/rfc/rfc2418.txt
- Parcours type : Internet-Draft individuel → adoption par un WG → discussions sur la liste,
  révisions → « last call » du WG → examen et « last call » de l'IETF → approbation par l'IESG →
  RFC Editor (édition, numéro) → éventuellement, plus tard, passage d'une RFC « Proposed
  Standard » à « Internet Standard ». Sources : Introduction to the IETF [lu] ; RFC 2026 [lu].
- Les documents sont protégés par une politique de brevets (IPR, BCP 79) qui oblige à déclarer
  les brevets connus (Introduction to the IETF [lu]).

**Qui participe vraiment ? (statistiques)**
- *Enquête communautaire 2025* (résumée dans l'« IETF Snapshot 2025 », données au 31 décembre
  2025) [lu] https://www.ietf.org/media/documents/IETF-Snapshot-2025.pdf :
  - 8 590 participant·es à des activités de l'IETF en 2025 (adresses e-mail uniques) ; 4 662
    inscriptions aux réunions (43 % à distance) ; 138 groupes de travail actifs ;
  - **genre** : hommes 80,6 % ; **femmes 9,3 %** ; non-binaires 1,3 % ; sans réponse 7,9 % ;
  - **géographie** : Europe 40,6 % ; Amérique du Nord 35,9 % ; Asie 11,2 % ; **Afrique 3,2 %** ;
    **Amérique latine 3,1 %** ; Océanie 2,7 % ; Moyen-Orient 1,3 % ; sans réponse 2,0 % ;
  - **secteur** : entreprises 53,3 % ; universités 22,2 % ; société civile 9,2 % ;
    gouvernements 8,3 %.
  (Attribution des chiffres de la géographie vérifiée d'après la position des étiquettes dans le
  PDF, la mise en page étant graphique.)
- *Expérience des femmes* : billet de Jay Daley (directeur exécutif de l'IETF), 9 octobre 2023 :
  « women make up approximately 10% of IETF participants, far lower than equal representation
  and even lower than the percentage of women in the IT industry ». [lu]
  https://www.ietf.org/blog/report-experience-of-women-participating-in-the-ietf/
- *Inscriptions par pays* (Datatracker, données officielles) [lu] :
  - IETF 124, Montréal (novembre 2025) : 1 885 inscriptions ; États-Unis 711, Canada 165, Chine 133.
    https://datatracker.ietf.org/stats/meeting/124/country/
  - **IETF 125, Shenzhen, Chine (mars 2026)** : 1 850 inscriptions ; **Chine 672**, États-Unis 386,
    Royaume-Uni 88, Inde 83, Allemagne 81 ; sur place (813) : Chine 443, États-Unis 114.
    https://datatracker.ietf.org/stats/meeting/125/country/
  - IETF 126, Vienne (juillet 2026) : 2 125 inscriptions ; États-Unis 582, Chine 243, Allemagne
    187, Inde 127 ; le Nigeria apparaît séparément (15). https://datatracker.ietf.org/stats/meeting/126/country/
  - Lieux confirmés par https://datatracker.ietf.org/meeting/past [lu]. Prochaines réunions
    annoncées sur ietf.org : IETF 128 Kuala Lumpur, IETF 129 Berlin [lu, menu du site].
  → Le lieu de la réunion change fortement la composition : bon support d'animation.
- *Auteur·rices des RFC par pays* (outil indépendant de Jari Arkko, ancien président de l'IETF,
  données du 11 août 2024) [lu] https://www.arkko.com/tools/rfcstats/d-countrydistr.html :
  73 pays au total ; 75,6 % des RFC ont au moins un·e auteur·rice des États-Unis ; Royaume-Uni
  8,7 % ; Allemagne 7,0 % ; **France 6,3 %** ; Canada 5,9 % ; Chine 5,7 % ; Finlande 5,7 % ; Japon
  4,0 % ; Inde 2,3 % ; Brésil 0,09 % (8 RFC) ; Afrique du Sud 0,05 % (5 RFC) ; Égypte 1 RFC.
- *Entreprises* (même outil, auteur·rices comptés à leur première affiliation, toutes époques) [lu]
  https://www.arkko.com/tools/rfcstats/companydistr.html : Cisco 6,8 % ; Huawei 2,5 % ; Ericsson
  2,0 % ; Google 1,9 % ; Nokia 1,7 % ; IBM, Microsoft, Juniper ≈ 1,6 % chacun.
- *Étude universitaire* : S. McQuistin, M. Karan, P. Khare, C. Perkins, G. Tyson, M. Purver,
  P. Healey, W. Iqbal, J. Qadir, I. Castro, « Characterising the IETF Through the Lens of RFC
  Deployment », ACM IMC 2021 [lu] https://tysong.github.io/files/IMC21.pdf :
  - auteur·rices d'Amérique du Nord : **75 % en 2001, 44 % en 2020** ; Europe de 17 % à 40 % ; Asie
    de 6 % à 14 % ; « Africa and South America continue to be underrepresented » ;
  - Cisco : « around 12% of authors affiliated with the company in 2020 », première affiliation
    chaque année ; Huawei : 7,1 % en 2020 (pic à 9,7 % en 2018) ; Google : 3,8 % en 2020 ;
  - standardisation plus longue et plus complexe ; environ 130 000 e-mails par an.
- Une autre étude (ICWSM 2022, « The Web We Weave », même équipe) analyse la centralisation du
  réseau social de l'IETF : [extrait] seulement https://tysong.github.io/files/ICWSM22.pdf.
  Un article (« Internet Fragmentation, Political Structuring, and Organizational Concentration in
  Transnational Engineering Networks ») affirmerait que six entreprises fournissaient plus de 40 %
  des auteur·rices des RFC en 2018 : **[extrait] seulement, auteurs non vérifiés, à ne pas publier
  en l'état**.

### Réserves et points contestés
- **« Ouverte à tous »** : c'est vrai formellement (pas d'adhésion), mais en pratique il faut du
  temps, parler anglais, et souvent un employeur qui finance les voyages. Les chiffres ci-dessus
  (80 % d'hommes, 76 % Europe + Amérique du Nord, 53 % d'entreprises) montrent l'écart.
- **Domination de quelques entreprises** : documentée (Cisco, Huawei, Google…), mais la RFC 2026
  et l'IETF insistent sur la participation « as individuals ». Les deux points de vue se
  présentent ensemble : l'IETF met en avant le consensus et le fait que les objections doivent
  recevoir une réponse technique ; les études montrent que les grands employeurs fournissent une
  grande part du travail et des auteur·rices. La montée de Huawei et de la Chine suscite aussi des
  débats géopolitiques ; je n'ai pas de source primaire lue sur ce point.
- Les statistiques de genre et de région viennent **d'enquêtes déclaratives** (personnes qui ont
  répondu), pas d'un recensement.
- Les chiffres d'Arkko viennent d'un outil indépendant de l'IETF (« The tool and the report are
  independent of the IETF »).

---

## 3. Personnes à mettre en avant (rôles vérifiés)

- **Elizabeth « Jake » Feinler** : a dirigé le Network Information Center (NIC) de l'ARPANET puis
  du DDN au SRI ; « Her group managed the Host Naming Registry for the Internet from 1972 until
  1989 » ; premier serveur WHOIS ; membre fondatrice de l'IETF selon le Hall of Fame.
  Source : Internet Hall of Fame [lu] https://www.internethalloffame.org/inductee/elizabeth-feinler/
  Ses RFC, vérifiées dans l'index [lu] : RFC 625 « On-line hostnames service » et RFC 627 « ASCII
  text file of hostnames » (mars 1974, avec M.D. Kudlick) ; RFC 756 « NIC name server » (1979) ;
  **RFC 810 « DoD Internet host table specification » (mars 1982)** ; RFC 952 (octobre 1985).
  Le surnom « Jake » n'a pas été vérifié dans une source lue (je ne l'ai pas cherché).
- **Joyce K. Reynolds** : voir question 1 (RFC Editor, IANA avec Postel, User Services de
  l'IETF 1988-1998, prix Postel 2006). Sources : RFC 8700 [lu] ; ISOC 2006 [lu] ; IAB [lu].
- **Radia Perlman** : conçoit l'algorithme du *spanning tree* (Ethernet) et le protocole de
  routage IS-IS, plus tard TRILL ; membre de l'IAB de 1996 à 1998 (Sun Microsystems). Sources :
  Internet Hall of Fame [lu] https://www.internethalloffame.org/inductee/radia-perlman/ ; IAB
  past members [lu]. Pertinente pour la normalisation (IS-IS et TRILL sont des normes).
- **Lixia Zhang** : a grandi dans le nord de la Chine, ouvrière agricole après la fermeture des
  écoles pendant la Révolution culturelle, autodidacte en anglais et en calcul ; conçoit RSVP ;
  invente le mot « middlebox » ; membre de l'IAB **1994-1996 (Xerox PARC) et 2005-2009 (UCLA)**.
  Sources : Internet Hall of Fame [lu] https://www.internethalloffame.org/inductee/lixia-zhang/ ;
  IAB past members [lu].
- **Jun Murai** (Japon) : crée JUNET en 1984, « father of the Internet in Japan » ; membre de l'IAB
  1993-1995 (WIDE) ; administrateur de l'ICANN 1998-2003. Sources : Hall of Fame [lu]
  https://www.internethalloffame.org/inductee/jun-murai/ ; IAB past members [lu].
- **Christian Huitema** (France, INRIA) : **président de l'IAB de 1993 à 1995**. Source : IAB past
  members [lu]. Intéressant pour un public français.
- **Leslie Daigle** : **présidente de l'IAB de 2002 à 2007**, première femme dans la liste des
  présidences de l'IAB ; **Mirja Kühlewind** (Ericsson) présidente de 2020 à 2024. Source : IAB past
  members [lu]. Daigle signe dans la RFC 8700 la section « Formalizing the RFC Editor Model ».
- **Alissa Cooper** : **présidente de l'IETF de 2017 à 2021**, seule femme dans la liste des
  présidences de l'IETF (1986-2024). Source : IESG Past Members [lu].
- **Dhruv Dhody** (Huawei) : **président de l'IAB depuis mars 2026**. Source : IAB past members
  [lu] et membres actuels [lu]. (Nationalité non vérifiée : ne citer que l'affiliation.)
- **Deborah Estrin** (USC, IAB 1989), **Elise Gerich** (Merit, IAB 1993-1997) : autres femmes
  membres de l'IAB au début des années 1990. Source : IAB past members [lu].
- **Heather Flanagan** : RFC Series Editor ; éditrice de la RFC 8700 « Fifty Years of RFCs » (2019).
  Sources : RFC 8700 [lu] ; IAB [lu].
- **Mallory Knodel** (ARTICLE 19) et Niels ten Oever : autrices et auteurs du brouillon sur la
  terminologie (voir question 4). Source : Datatracker [lu].
- Hors IETF mais essentiels pour une histoire mondiale des réseaux (gouvernance des adresses et
  des noms, pas des RFC) :
  - **Nii Quaynor** (Ghana) : premières connexions en Afrique, président fondateur d'AfriNIC,
    premier Africain élu au conseil de l'ICANN (2000-2003). Hall of Fame [lu]
    https://www.internethalloffame.org/inductee/nii-quaynor/
  - **Ida Holz** (Uruguay) : premier nœud Internet de l'Uruguay, rôle clé dans LACNIC, RedCLARA.
    Hall of Fame [lu] https://www.internethalloffame.org/inductee/ida-holz/
  - **Louis Pouzin** (France) : réseau CYCLADES, « datagram packet switching network, from which
    TCP/IP was derived » (formulation du Hall of Fame, voir réserves) ; participe à la
    normalisation à l'IFIP, l'ISO et au CCITT. [lu] https://www.internethalloffame.org/inductee/louis-pouzin/

### Réserves et points contestés
- **Feinler et les domaines .com, .edu, .gov…** : le Hall of Fame écrit « she and her group
  developed the top-level domain-naming scheme ». Mais la RFC 920 « Domain requirements »
  (octobre 1984), qui fixe ces domaines, est signée **J. Postel et J.K. Reynolds**. Présenter le
  résultat comme collectif (NIC du SRI + ISI), sans attribution unique.
- Les biographies du Hall of Fame (ISOC) sont élogieuses par nature : bonnes pour les rôles et les
  dates, à croiser pour les formules « premier·e » ou « père de ».
- « TCP/IP dérive de CYCLADES » : formule du Hall of Fame, plus forte que celle de l'historique de
  l'ISOC (qui ne cite pas Pouzin). Dire plutôt « a influencé la conception de TCP/IP » et chercher
  une seconde source (par ex. le texte de Cerf et Kahn de 1974) avant publication.
- Pas trouvé, faute de temps, de présidence de WG notable venue d'Afrique ou d'Amérique latine
  avec une source lue. Piste : Fernando Gont (Argentine), auteur de nombreuses RFC sur la sécurité
  d'IPv6 ; à vérifier dans le Datatracker.

---

## 4. Décisions politiques prises « techniquement »

**RFC 2804 « IETF Policy on Wiretapping » (IAB et IESG, mai 2000)**
- « The IETF has decided not to consider requirements for wiretapping as part of the process for
  creating and maintaining IETF standards. »
- Arguments : l'IETF, organisme international, est « the wrong forum for designing protocol or
  equipment features that address needs arising from the laws of individual countries » ; la
  complexité ajoutée « almost inevitably jeopardizes the security of communications » ; rappel du
  besoin de « strong cryptographic technology » (RFC 1984).
- Nuance : les mécanismes d'écoute existants doivent être « openly described ».
- **Toutes les parties** : la RFC rapporte le débat : « Opinions ranged from libertarian:
  'governments have no right to wiretap' - to pragmatic: 'it will be done somewhere, best have it
  done where the technology was developed' » ; à main levée, peu de soutien aux fonctions
  d'interception, mais « a sizable portion of the audience refused to state an opinion ».
- Source : RFC 2804 [lu] https://www.rfc-editor.org/rfc/rfc2804.txt

**RFC 7258 « Pervasive Monitoring Is an Attack » (S. Farrell, H. Tschofenig, mai 2014, BCP 188)**
- Résumé : « Pervasive monitoring is a technical attack that should be mitigated in the design of
  IETF protocols, where possible. »
- Le sujet a été « discussed at the technical plenary of the November 2013 IETF meeting » (IETF 88,
  Vancouver) ; le mot « attack » est employé « in a technical sense ».
- Équilibre revendiqué : « Making networks unmanageable to mitigate PM is not an acceptable
  outcome, but ignoring PM would go against the consensus documented here. »
- Source : RFC 7258 [lu] https://www.rfc-editor.org/rfc/rfc7258.txt
- **Lien avec Snowden** : la RFC ne nomme pas Snowden. Le lien vient du contexte (révélations de
  juin 2013, plénière « Hardening the Internet » du 6 novembre 2013 avec Bruce Schneier, hum de la
  salle demandé par le président de l'IAB Russ Housley). Sources : seulement [extrait] (IETF
  Journal, https://www.ietfjournal.org/packed-iab-plenary-debates-pervasive-monitoring-attacks/ ,
  rendu inaccessible par une limitation d'archive.org ; annonce de la plénière
  https://mailarchive.ietf.org/arch/msg/ietf-announce/SmUamPJScdJNJYVzzxVCGypW9L4/). **À vérifier
  avant publication.**
- **L'autre côté, au sein même de l'IETF** : RFC 8404 « Effects of Pervasive Encryption on
  Operators » (K. Moriarty, Dell EMC ; A. Morton, AT&T Labs ; juillet 2018, Informational) : elle
  documente les pratiques de sécurité et de gestion de réseau « that may be impacted by the shift
  to increased use of encryption », pour des « manageable and secure networks ». [lu]
  https://www.rfc-editor.org/rfc/rfc8404.txt

**RFC 8890 « The Internet is for End Users » (M. Nottingham, IAB, août 2020, Informational)**
- « when there is a conflict between the interests of end users of the Internet and other
  parties, IETF decisions should favor end users ».
- C'est un document de l'IAB : « not candidates for any level of Internet Standard ».
- Source : RFC 8890 [lu] https://www.rfc-editor.org/rfc/rfc8890.txt

**DNS sur HTTPS (DoH)**
- RFC 8484 (P. Hoffman, ICANN ; P. McManus, Mozilla ; octobre 2018, Proposed Standard) : « a
  protocol for sending DNS queries and getting DNS responses over HTTPS ». [lu]
  https://www.rfc-editor.org/rfc/rfc8484.txt (en-tête lu : Hoffman/ICANN, McManus/Mozilla,
  « October 2018 », « Standards Track »).
- Controverse 2019 au Royaume-Uni : l'association des fournisseurs d'accès ISPA nomme Mozilla
  « Internet Villain » parce que DoH contournerait le filtrage et le contrôle parental britanniques,
  puis retire la nomination et la catégorie le 9 juillet 2019 : « ISPA is therefore withdrawing
  the Mozilla nomination and Internet Villain category this year. » ISPA déclarait garder ses
  inquiétudes. Source : The Register, 10 juillet 2019 [lu] (ton très moqueur envers l'ISPA :
  ne reprendre que les faits et la citation) https://www.theregister.com/2019/07/10/ispa_clears_mozilla
  ; même faits [extrait] ISPreview https://www.ispreview.co.uk/index.php/2019/07/ispa-pulls-uk-internet-villain-category-over-mozilla-doh-fallout.html
- Arguments des deux côtés, à présenter ensemble : pour, la confidentialité (les requêtes DNS ne
  sont plus lisibles par le réseau) ; contre, le contournement des filtrages légaux ou parentaux,
  la gêne pour les enquêtes, et la concentration des requêtes chez quelques grands résolveurs
  (navigateur + fournisseur de DNS choisi par défaut). Le dernier argument n'est appuyé ici que
  par l'article du Register (qui cite Cloudflare) : trouver une source primaire (par ex. un avis
  d'un régulateur ou un document de l'IETF ADD WG) avant publication.

**Terminologie inclusive (master/slave, whitelist/blacklist)**
- Octobre 2018 : brouillon « Terminology, Power and Oppressive Language », M. Knodel (ARTICLE 19)
  et N. ten Oever (Université d'Amsterdam), visant le statut BCP. [lu]
  https://www.ietf.org/archive/id/draft-knodel-terminology-00.txt. Jamais publié en RFC : statut
  « Expired & archived », dernière version août 2023 ; son résumé le présente comme
  « an artefact of the discussion because it sparked many debates ». [lu]
  https://datatracker.ietf.org/doc/draft-knodel-terminology/
- Projet de groupe de travail « Effective Terminology in IETF Documents » (TERM) : **« Abandoned »**
  (mis à jour le 19 mai 2021). [lu] https://datatracker.ietf.org/doc/charter-ietf-term/
- 11 mai 2021 : « IESG Statement on Inclusive Language » : l'IESG « encourages IETF participants
  to use the guidance in [NISTIR8366] » (guide du NIST, avril 2021), en invoquant une terminologie
  « clear, precise, and widely accessible to readers from varying backgrounds and cultures ».
  C'est un **encouragement, pas une obligation**. Métadonnées mises à jour le 27 février 2025 ; le
  lien vers le guide du NIST pointe désormais vers une copie de web.archive.org. [lu]
  https://datatracker.ietf.org/doc/statement-iesg-iesg-statement-on-inclusive-language-20210511/
- Exemple concret : RFC 9499 « DNS Terminology » (P. Hoffman, ICANN ; K. Fujiwara, JPRS ; mars 2024,
  BCP 219) : « Although early DNS RFCs such as [RFC1996] referred to this as a "slave", the current
  common usage has shifted to calling it a "secondary". » [lu] https://www.rfc-editor.org/rfc/rfc9499.txt
- Débat : partisan·es (langage excluant, clarté pour un public mondial) et opposant·es (inutile
  ou relevant de la police du langage, coût de changer des termes établis). Les échanges sont
  publics sur la liste terminology@ietf.org (non lue ici) : citer des messages précis seulement
  après les avoir lus.

### Réserves et points contestés
- Pourquoi la référence au NIST pointe vers une archive depuis 2025 : non vérifié. Ne pas en tirer
  de conclusion sans source.
- RFC 7258 et RFC 8890 n'ont pas la même force : la première est une BCP (consensus de l'IETF), la
  seconde un document informatif de l'IAB.

---

## 5. Le W3C et le WHATWG

**Fondation et hôtes** (W3C, page History [lu] https://www.w3.org/about/history/)
- « In October 1994, Sir Tim Berners-Lee founded the World Wide Web Consortium (W3C) at the
  Massachusetts Institute of Technology, Laboratory for Computer Science [MIT/LCS] in
  collaboration with CERN… with support from DARPA and the European Commission. »
- « In April 1995, Inria… became the first European W3C host, followed by Keio University of
  Japan (Shonan Fujisawa Campus) in Asia in 1996. In 2003, ERCIM… took over the role of European
  W3C Host from INRIA. In 2013, W3C announced Beihang University as the fourth Host. »
- Berners-Lee « required from the start that W3C have a global footprint ».
- « Hosted model (1994-2022) » puis : « The World Wide Web Consortium began the year 2023 by
  forming a new public-interest non-profit organization », avec la citation de Berners-Lee datée
  du 31 janvier 2023.

**Processus** (W3C Process Document, version du 18 août 2025 [lu] https://www.w3.org/policies/process/)
- Étapes : « First Public Working Draft », « revised Working Drafts », « one or more Candidate
  Recommendations », « W3C Recommendation ». La Candidate Recommendation sert à « formally collect
  implementation experience ». À la fin, « the Advisory Committee reviews the mature technical
  report, and if there is support from its Membership, W3C publishes it as a Recommendation ».
- Différence avec l'IETF : le W3C a des **membres** (organisations qui cotisent) et un Advisory
  Committee ; il existe des « Formal Objections » et un « W3C Council » pour les trancher (le
  document les décrit ; détail non résumé ici).

**L'affaire EME/DRM (2017) : les deux côtés**
- *W3C* : communiqué du **18 septembre 2017** : EME publiée comme Recommendation ; « EME does not
  create, nor mandate Digital Rights Management (DRM) » ; la mise en œuvre est « voluntary » ;
  arguments : fin des plugins, sécurité, vie privée, accessibilité (« no barriers to accessing
  captions, transcripts, or audio description »). [lu]
  https://www.w3.org/press-releases/2017/eme-recommendation/
- *Tim Berners-Lee*, « On EME in HTML5 », billet du 28 février 2017 : « If W3C did not recommend
  EME then the browser vendors would just make it outside W3C » ; « W3C does not have any power to
  forbid anything. W3C is not the US Congress, or WIPO, or a court. » [lu]
  https://www.w3.org/blog/2017/02/on-eme-in-html5/
- *EFF*, lettre ouverte de Cory Doctorow, 18 septembre 2017 : « Effective today, EFF is resigning
  from the W3C. » L'EFF avait proposé un compromis (un engagement des membres à ne pas utiliser les
  lois anti-contournement contre la recherche en sécurité, l'accessibilité, l'archivage), rejeté ;
  « The Director decided to personally override every single objection » ; cela a provoqué « the
  first appeal against the Director in W3C history ». [lu]
  https://www.eff.org/deeplinks/2017/09/open-letter-w3c-director-ceo-team-and-membership
- Remarque pour le mythe « on ne vote pas » : l'EFF parle de membres qui « voted » ; au W3C, la
  revue par l'Advisory Committee ressemble davantage à un vote que le hum de l'IETF.

**WHATWG**
- « The WHATWG was founded by individuals of Apple, the Mozilla Foundation, and Opera Software in
  2004, after a W3C workshop », inquiets de « the W3C's direction with XHTML, lack of interest in
  HTML, and apparent disregard for the needs of real-world web developers ».
- 2017 : Apple, Google, Microsoft et Mozilla forment un « Steering Group ».
- Décision : « rough, informal consensus » ; l'éditeur ou l'éditrice d'un Living Standard juge si
  une fonction a assez de soutien ; appel possible au Steering Group, composé de membres
  « appointed from the organizations that develop browser engines ».
- Source : WHATWG FAQ [lu] https://whatwg.org/faq
- **Accord W3C–WHATWG du 28 mai 2019** (Memorandum of Understanding) : « HTML and DOM shall be
  developed principally in the WHATWG, following WHATWG Living Standard (LS) specification
  process » ; le W3C peut endosser des « Review Drafts » comme Recommendations ; constat commun :
  « a single development stream for each of the Web's specifications ». [lu]
  https://www.w3.org/2019/04/WHATWG-W3C-MOU.html

**Accessibilité : WCAG** (W3C WAI [lu] https://www.w3.org/WAI/standards-guidelines/wcag/)
- WCAG 2.0 : 11 décembre 2008 ; WCAG 2.1 : 5 juin 2018 ; **WCAG 2.2 : 5 octobre 2023** (mise à jour
  le 12 décembre 2024).
- WCAG 2.2 est aussi la norme ISO/IEC 40500:2025 ; la norme européenne EN 301 549 (version 2026)
  utilise WCAG 2.2 ; elle sert pour l'Acte européen sur l'accessibilité (EAA).
- WCAG 3 (anciennement « Silver ») : brouillon en cours.
- Pour les enseignant·es : le RGAA français s'appuie sur ces référentiels ; **non vérifié ici**
  (consulter accessibilite.numerique.gouv.fr avant de l'écrire).

### Réserves et points contestés
- Le WHATWG est piloté en dernier ressort par les **éditeurs de moteurs de navigateur** (Apple,
  Google, Microsoft, Mozilla) : sa FAQ le dit elle-même. Critique possible : quelques entreprises
  décident ; réponse du WHATWG : ce sont celles qui doivent implémenter, sinon la norme reste
  lettre morte.
- EME : présenter côte à côte le W3C (pragmatisme, interopérabilité) et l'EFF (contrôle des
  utilisateurs, lois anti-contournement). Aucun des deux textes n'est neutre.

---

## 6. Mythes à démonter

1. **« Internet n'a pas de règles / personne ne le dirige. »**
   Il y a des règles techniques précises (les RFC, ~8 925 documents) et des organisations qui les
   écrivent. Mais elles sont **volontaires** : « The IETF makes voluntary standards… But in no way
   does the IETF control, or even patrol, the Internet » (IETF [lu]). Même chose au W3C : « W3C
   does not have any power to forbid anything » (Berners-Lee, 2017 [lu]). Les règles s'imposent
   parce que tout le monde a intérêt à être compatible. Les noms et adresses relèvent d'autres
   acteurs (ICANN, registres régionaux comme AfriNIC ou LACNIC), et les lois nationales s'appliquent.

2. **« Les normes sont votées. »**
   Pas à l'IETF : « We reject: kings, presidents and voting » (Clark, 1992 [lu]) ; décisions par
   consensus approximatif, le hum n'est pas un vote (RFC 7282 [lu]). Nuances : la RFC 7282 avoue que
   certaines pratiques ressemblent de plus en plus à des votes ; la RFC 2804 mentionne une main
   levée ; le W3C, lui, a une revue des membres plus proche d'un vote ; les membres du NomCom sont
   tirés au sort (RFC 8713 [lu]).

3. **« Tim Berners-Lee a inventé Internet. »**
   Il a inventé le **Web** en 1989 au CERN (W3C History [lu] ; CERN [lu]
   https://home.cern/science/computing/the-birth-of-the-web/short-history-web/), une application
   qui fonctionne **sur** Internet. L'ARPANET date de 1969 (premier IMP installé à UCLA en septembre
   1969 selon l'historique de l'ISOC [lu]) et la RFC 1 d'avril 1969, vingt ans avant le Web.

4. **« Internet a un seul inventeur. »**
   L'historique de l'ISOC, écrit par neuf pionniers (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch,
   Postel, Roberts, Wolff), dit que les travaux au MIT (1961-1967), à la RAND (1962-1965) et au
   **NPL britannique** (1964-1967, Donald Davies et Roger Scantlebury) « had all proceeded in parallel
   without any of the researchers knowing about the other work », et que le mot « packet » vient du
   NPL. [lu] https://www.internetsociety.org/internet/history-internet/brief-history-internet/
   Ajouter CYCLADES en France (Louis Pouzin, Hall of Fame [lu]), le rôle de groupes d'étudiant·es
   (RFC 1000 [lu]), et la RFC 1 signée par une personne mais issue d'un groupe.

5. **Bonus : « Une RFC, c'est une norme officielle. »**
   Non : beaucoup sont informatives, expérimentales ou des poissons d'avril (RFC 1149, 2324 [lu]),
   et seulement ~101 RFC ont le statut « Internet Standard » (index [lu]).

### Réserves
- L'historique de l'ISOC est écrit par des protagonistes américains ; la priorité de Kleinrock sur
  la théorie de la commutation de paquets est discutée par certain·es historien·nes (point connu,
  **non sourcé ici** : trouver une source avant d'en parler).

---

## Pour aller plus loin (Wikipédia, renvoi uniquement)

Pages ouvertes le 8 novembre 2026, **sans label** « bon article » ni « article de qualité »
(vérifié dans le HTML de la page) :
- https://fr.wikipedia.org/wiki/Request_for_comments
- https://fr.wikipedia.org/wiki/Internet_Engineering_Task_Force
- https://fr.wikipedia.org/wiki/World_Wide_Web_Consortium
(Pas de page française « Elizabeth_Feinler » à cette adresse : erreur 404.)

---

## Idées d'animations interactives (simples et fidèles)

1. **Suivre une RFC de l'idée à la norme** : un Internet-Draft avance étape par étape (brouillon
   individuel → adoption par un groupe de travail → révisions -00, -01… → last call du groupe →
   last call de l'IETF → IESG → RFC Editor → numéro → « Proposed Standard », puis peut-être
   « Internet Standard » des années plus tard). À chaque étape, qui décide et sur quel critère
   (RFC 2026, RFC 6410). Repli sans JavaScript : une liste ordonnée.
2. **Le hum** : la salle « fredonne » pour A ou pour B ; le volume ne décide pas. La personne qui
   préside cherche s'il reste une **objection sans réponse** (RFC 7282 : « Lack of disagreement is
   more important than agreement »). Montrer un cas où une minorité bloque à raison, puis un cas où
   l'objection a reçu une réponse.
3. **Trier les RFC par statut** : un échantillon réel (RFC 1, 1149, 2324, 2026, 2804, 7258, 8484,
   8890, 9499) à classer dans Proposed Standard / Internet Standard / Informational / Experimental
   / BCP. Correction avec le vrai statut et la part de chaque statut dans l'index (état au 8 nov. 2026).
4. **Qui est dans la salle ?** : un graphique qui change selon la réunion (Montréal 2025, Shenzhen
   2026, Vienne 2026, données du Datatracker), avec les enquêtes (genre, régions, secteurs). Rappel
   que ce sont des inscriptions et des réponses déclaratives.
5. **Le choix de l'IETF face à l'écoute** : frise 2000 (RFC 2804) → 2013 (plénière de Vancouver) →
   2014 (RFC 7258) → 2018 (RFC 8484 DoH, RFC 8404 des opérateurs) → 2020 (RFC 8890). À chaque date,
   la phrase clé et l'argument de l'autre côté.
6. **Web ≠ Internet** : un schéma en couches à déplier : câbles et routeurs → IP/TCP (IETF) → HTTP
   (IETF) → HTML/DOM (WHATWG) → accessibilité (WCAG, W3C). On clique sur une couche pour voir qui
   en écrit les règles et depuis quand.
7. **Une norme à deux maisons (HTML)** : W3C 1994 → WHATWG 2004 → deux versions de HTML → accord du
   28 mai 2019 : un seul « Living Standard », endossé par le W3C. Animation pas à pas, jamais en
   boucle.
8. **Le poisson d'avril** : lire un extrait de la RFC 1149 (pigeons voyageurs) ou de la RFC 2324
   (cafetière), deviner « sérieux ou poisson ? », puis découvrir que le format est rigoureusement
   le même que celui d'une vraie norme, ce qui montre la culture de l'IETF.

---

# Partie 2 : les noms, les adresses et la diplomatie
Module « Gouvernance technique : qui écrit les règles du réseau ? » : IANA, ICANN, serveurs racine, RIR, ONU (UIT, SMSI, FGI).

- Recherche faite le **8 novembre 2026**. Les sujets qui bougent portent la mention « état au … ».
- Requêtes curl envoyées avec le User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)`.
- Aucune donnée personnelle de l'utilisateur n'a servi dans les requêtes.

**Légende des statuts**

- **[lu]** : page ou PDF ouvert et lu (WebFetch, ou curl puis extraction du texte).
- **[extrait]** : vu seulement dans un extrait de moteur de recherche. À rouvrir avant publication.
- **[méta]** : métadonnées seulement (titre, date).
- **Primaire** : texte de l'organisation concernée. **Secondaire** : presse, blog d'expert, courtier.

---

## 1. IANA, Jon Postel, ICANN et la transition de 2016

### Faits

| Fait | Source(s) | Statut |
|---|---|---|
| 1972 : Jon Postel commence à noter les numéros de sockets de l'Arpanet dans un carnet. Ce registre deviendra l'IANA. | https://www.icann.org/history (« Jon Postel began recording Arpanet socket numbers in his notebook ») | [lu] primaire |
| L'IANA fait remonter ses origines aux années 1970, aux « record-keeping activities that accompanied the earliest experiments ». Aujourd'hui, les fonctions IANA sont assurées par **PTI (Public Technical Identifiers)**, « a purpose-built affiliate of ICANN ». | https://www.iana.org/about | [lu] primaire |
| PTI est une société à but non lucratif de droit californien, distincte d'ICANN (statuts d'ICANN, article 16). | https://www.icann.org/resources/pages/governance/bylaws-en | [lu] primaire |
| Postel est aussi le premier éditeur des RFC. Vint Cerf, RFC 2468 (octobre 1998) : « When Steve invented the idea of the Request for Comments series, Jon became the instant editor » et « Jon, our beloved IANA, is gone ». | https://www.rfc-editor.org/rfc/rfc2468.txt | [lu] primaire |
| Postel meurt le 16 octobre 1998, après une opération du cœur (nécrologie du NYT reprise sur une liste). | https://lkml.iu.edu/hypermail/linux/kernel/9810.2/0894.html | [extrait] |
| **Joyce K. Reynolds** (1952 ?–2015) travaille avec Postel à l'ISI (Université de Californie du Sud). Elle codirige la fonction d'éditeur des RFC de 1998 à 2006. Elle est entrée au Internet Hall of Fame en 2025, à titre posthume. Une femme à mettre en avant. | https://www.internethalloffame.org/?p=8428 | [lu] (la page ne parle pas de l'IANA) |
| Son rôle dans le passage des fonctions IANA à ICANN après 1998 n'est rapporté que par des encyclopédies en ligne. | — | [extrait], à vérifier |
| **Janvier 1998, « test » de la racine** : Postel fait répliquer la racine depuis l'IANA par plus de la moitié des autres serveurs racine. Ira Magaziner (Maison-Blanche) lui ordonne d'y mettre fin, et Postel s'exécute. Témoignage de John Gilmore, participant, sur une liste de l'ISOC (2025) : « Put those back or you'll never work on the Internet again ». | https://elists.isoc.org/pipermail/internet-history/2025-July/010564.html | [lu] secondaire, témoignage |
| Les dates (27 ou 28 janvier) et le motif du « test » sont contestés. | — | Ne pas publier sans seconde source |
| 5 juin 1998 : Livre blanc du département du Commerce des États-Unis, « Management of Internet Names and Addresses ». | Rapport du Congressional Research Service 97-868 : https://www.everycrsreport.com/reports/97-868.html | [lu] secondaire officiel |
| 25 novembre 1998 : protocole d'accord (MoU) entre le département du Commerce et ICANN. | idem | [lu] |
| 1998 : ICANN est fondée, à la suite d'un engagement du gouvernement américain à confier le DNS à une association à but non lucratif basée aux États-Unis, avec participation mondiale. | https://www.icann.org/history | [lu] primaire |
| Le siège d'ICANN est dans le comté de Los Angeles (statuts, section 24.1). | https://www.icann.org/resources/pages/governance/bylaws-en | [lu] primaire |
| Première présidente du conseil d'administration d'ICANN : **Esther Dyson** (1998). | https://www.icann.org/resources/press-material/release-2023-03-08-en | [lu] primaire |
| **Tripti Sinha** préside le conseil depuis 2022, deuxième femme à ce poste. | idem | [lu] primaire |
| **Sally Costerton** (PDG par intérim, décembre 2022) est la première femme PDG d'ICANN. | idem | [lu] primaire |
| T. Sinha est réélue présidente en octobre 2025. | https://www.icann.org/resources/press-material/release-2025-10-30-en | [extrait] |
| 30 septembre 2009 : « Affirmation of Commitments » entre le département du Commerce et ICANN. | CRS 97-868 | [lu] |
| 2 juillet 2012 : nouveau contrat des fonctions IANA confié à ICANN par la NTIA. | CRS 97-868 | [lu] |
| 7 octobre 2013 : **déclaration de Montevideo**. Dix organisations techniques (ICANN, les 5 RIR, IETF, IAB, ISOC, W3C) dénoncent les « recent revelations of pervasive monitoring » (affaire Snowden) et demandent d'« accelerating the globalization of ICANN and IANA functions ». | https://www.icann.org/en/announcements/details/montevideo-statement-on-the-future-of-internet-cooperation-7-10-2013-en | [lu] primaire |
| 14 mars 2014 : la NTIA annonce son intention de transférer son rôle à la « communauté multipartite mondiale ». | CRS 97-868 | [lu] |
| Formulation exacte du critère « pas de solution gouvernementale ou intergouvernementale » : non lue dans le communiqué original de la NTIA (page introuvable, erreur 404). | https://www.ntia.gov/page/iana-functions-stewardship-transition | Non vérifié |
| 23-24 avril 2014 : **NETmundial** à São Paulo (Brésil), déclaration non contraignante. | CRS 97-868 | [lu] |
| 16 août 2016 : la NTIA prévient ICANN qu'elle laissera expirer le contrat. | https://www.ntia.doc.gov/files/ntia/publications/final_ntia_iana_8th_quarterly_report_q4_fy_2016.pdf | [extrait] |
| **1er octobre 2016** : fin du contrat. Lawrence Strickling (NTIA) : « As of October 1, 2016, the IANA functions contract has expired ». | https://www.ntia.gov/press-release/2016/statement-assistant-secretary-strickling-iana-functions-contract | [lu] primaire |
| Annonce d'ICANN : transition « committed to and underway since 1998 ». | https://www.icann.org/en/announcements/details/stewardship-of-iana-functions-transitions-to-global-internet-community-as-contract-with-us-government-ends-1-10-2016-en | [lu] primaire |
| Dernier rapport de la NTIA au Congrès, daté du 15 décembre 2016. | https://www.ntia.gov/report/2016/eighth-quarterly-report-transition-stewardship-internet-assigned-numbers-authority-iana | [lu] primaire |

### Ce qui a changé en 2016

| Changement | Source(s) | Statut |
|---|---|---|
| La NTIA n'autorise plus chaque modification de la zone racine. Verisign reste « mainteneur de la zone racine » (Root Zone Maintainer), mais pour ICANN, via un contrat entré en vigueur le **20 octobre 2016** (accord RZMA). Le billet d'ICANN parle de « release Verisign from its root zone maintainer obligations » envers la NTIA, et retire l'autorisation de la NTIA des systèmes. | https://www.icann.org/en/blogs/details/root-zone-maintainer-service-agreement-is-now-effective-20-10-2016-en | [lu] primaire |
| Création de PTI, du comité permanent des clients (Customer Standing Committee), d'un accord de service avec les RIR et d'un accord complémentaire avec l'IETF. | https://www.icann.org/en/stewardship-implementation | [lu] primaire |
| **Communauté habilitée** (Empowered Community, statuts section 6.2). Elle peut révoquer un administrateur ou **tout le conseil**, rejeter les budgets et plans stratégiques, rejeter les modifications des statuts ordinaires, approuver les modifications des statuts fondamentaux, saisir l'IRP (procédure de révision indépendante)… | https://www.icann.org/resources/pages/governance/bylaws-en | [lu] primaire |
| **Le GAC (comité consultatif gouvernemental)**. Un avis adopté par consensus du GAC « may only be rejected by a vote of no less than 60% of the Board » (statuts). Le conseil doit alors chercher une solution mutuellement acceptable. | statuts, idem | [lu] primaire |
| Le GAC compte 184 membres et 41 organisations observatrices (mai 2026). | https://itp.cdn.icann.org/en/files/policy-update/icann86-policy-outlook-report-14-05-2026-en.pdf | [lu] primaire |
| Rôle du GAC : avis « must be duly taken into account » ; si le conseil s'en écarte, il doit motiver sa décision. | https://gac.icann.org/about | [lu] primaire |

### Critiques, toutes parties

- **Républicains américains.** Le sénateur Ted Cruz et d'autres jugent que la transition renforce les gouvernements étrangers (Russie, Chine, Iran). Ils déposent le « Protecting Internet Freedom Act » (juin 2016) et demandent de prolonger le contrat.
  - Communiqués du sénateur, pages non ouvertes (le site renvoie une erreur 403) : https://www.cruz.senate.gov/newsroom/press-releases/2016/09/14/sen-cruz-this-internet-transition-poses-real-risks-to-liberties-of-americans [extrait] et https://www.cruz.senate.gov/newsroom/press-releases/sen-cruz-and-rep-duffy-introduce-the-protecting-internet-freedom-act [extrait].
  - Le CRS résume les deux camps. Opposant·es : risque que l'ONU ou des gouvernements favorables à la censure gagnent de l'influence ; ICANN « is not ready ». Partisan·es : la privatisation était prévue dès 1998, et la transition aide à résister au contrôle intergouvernemental. https://www.everycrsreport.com/files/20161005_IN10581_4f054a6201d7a253f9901c744ef7f6304cb2e243.html [lu]
- **Procès de quatre États.** L'Arizona, le Texas, l'Oklahoma et le Nevada portent plainte le 28 septembre 2016. Le tribunal fédéral de Galveston (Texas) rejette leur demande le 30 septembre. Strickling : « The federal court in Galveston, Texas denied the plaintiffs' application ». Noms des États : https://circleid.com/posts/20160930_restraining_order_filed_states_attorneys_against_iana_transition [extrait] et plusieurs médias [extrait].
- **Réponse de la NTIA.** Strickling, 14 septembre 2016 : « Do not give a gift to Russia and other authoritarian nations by blocking this transition » ; les accusations sont « extreme and wrong ». https://nexttv.com/news/strickling-blocking-iana-transition-benefits-russia-china-407723 [lu] secondaire
- **Partisan·es d'un contrôle intergouvernemental.**
  - Lettre de la Chine, de la Russie, du Tadjikistan et de l'Ouzbékistan à l'ONU (A/66/359, 12 septembre 2011), projet de « code de conduite ». On y lit : « policy authority for Internet-related public issues is the sovereign right of States » et l'appel à « a multilateral, transparent and democratic international Internet management system ». https://documents.un.org/api/symbol/access?s=A/66/359&l=en&t=pdf [lu] primaire
  - **Inde**, 26 octobre 2011 : proposition d'un comité de l'ONU pour les politiques liées à l'internet (CIRP), formé de 50 États élus selon une répartition géographique équitable. L'Inde dit ne pas vouloir « "control the Internet" or allow Governments to have the last word », mais veut que l'internet soit gouverné « not unilaterally ». https://itforchange.net/sites/default/files/939/India-UN-CIRP-Proposal-at-UNGA-2011.pdf [lu] primaire
- **Critique persistante, même après 2016.** ICANN et PTI restent des associations de droit californien, basées à Los Angeles : la question de la juridiction reste ouverte. C'est un fait (statuts [lu]). Les débats détaillés (sanctions américaines, OFAC) n'ont pas été lus pour ce dossier.

---

## 2. Les serveurs racine

### Faits

| Fait | Source(s) | Statut |
|---|---|---|
| « As of 2026-11-08T10:40:18Z, the root server system consists of **2048 operational instances** operated by the 12 independent root server operators. » | https://root-servers.org/ | [lu] primaire, état au 8 nov. 2026 |
| 13 identités (lettres A à M), une adresse IPv4 et une IPv6 chacune. 12 opérateurs, car Verisign exploite A et J. | https://root-servers.org/faq/ | [lu] primaire |

### Les 13 lettres et leurs opérateurs

Données JSON par lettre récupérées le 8 novembre 2026 sur `https://root-servers.org/root/<lettre>/json/` [lu]. Le champ « Instances » additionné donne 2 064, sites suspendus compris : c'est un ordre de grandeur. Le chiffre officiel est 2 048 instances opérationnelles.

| Lettre | Opérateur | Pays du siège | Sites | Instances |
|---|---|---|---|---|
| A | Verisign | États-Unis | 56 | 56 |
| B | USC-ISI (Information Sciences Institute) | États-Unis | 6 | 6 |
| C | Cogent Communications | États-Unis | 13 | 13 |
| D | Université du Maryland | États-Unis | 231 | 248 |
| E | NASA (bureau du DSI) | États-Unis | 328 | 355 |
| F | ISC (Internet Systems Consortium) | États-Unis | 389 | 655 |
| G | DISA (département de la Défense) | États-Unis | 6 | 6 |
| H | Laboratoire de recherche de l'armée américaine (ARL) | États-Unis | 12 | 12 |
| **I** | **Netnod** | **Suède** | 93 | 106 |
| J | Verisign | États-Unis | 147 | 147 |
| **K** | **RIPE NCC** | **Pays-Bas** (RIR européen) | 159 | 169 |
| L | ICANN | États-Unis | 138 | 257 |
| **M** | **WIDE Project** | **Japon** | 30 | 34 |

### Répartition géographique (calcul sur les mêmes données)

- Des instances dans **180 pays ou territoires**.
- États-Unis ≈ 339 instances, soit environ 16 %. Ensuite le Brésil (≈ 106), l'Inde (≈ 68), l'Allemagne (≈ 53).
- Afrique : ≈ 212 instances dans 44 pays ou territoires (La Réunion et Mayotte comprises).
- France : ≈ 30 instances.
- Ce sont des calculs à refaire au moment de publier.

### Pourquoi 13, et autres faits

| Fait | Source(s) | Statut |
|---|---|---|
| **Pourquoi 13 ?** Dans le standard DNS, « messages carried by UDP are restricted to 512 bytes ». Ajouter un serveur « would result in a priming response that exceeded 512 bytes ». Il y avait 9 serveurs renommés sous root-servers.net en 1995 ; « In 1997, four more were added, bringing the total… to 13 ». | https://www.icann.org/en/rssac/faq | [lu] primaire |
| La zone racine est signée : les fausses réponses « can be detected by DNSSEC validators ». | idem | [lu] primaire |
| Instances **globales ou locales** : une instance locale n'est annoncée qu'aux réseaux voisins (routage anycast, BGP). | https://root-servers.org/faq/ | [lu] primaire |
| Grâce au cache, moins de 1 % des requêtes atteignent la racine ; « For the DNS root, caching lasts up to 2 days ». | idem | [lu] primaire |
| Les opérateurs s'engagent à servir tout le monde sans filtrage (RFC 7720, RSSAC055). | idem | [lu] primaire |
| Rôles dans la chaîne : l'IANA (PTI) valide les changements, Verisign compile et signe avec la clé de zone (ZSK) puis distribue, et les 12 opérateurs servent la zone. | Billet RZMA d'ICANN ci-dessus [lu] ; FAQ RSSAC [lu] (« RSOs receive the authoritative zone data from the Root Zone Maintainer ») | Primaire |

### Cérémonies des clés DNSSEC (clé KSK de la racine)

| Fait | Source(s) | Statut |
|---|---|---|
| Cérémonies « usually conducted four times a year », dans deux installations de gestion de clés, à Culpeper (Virginie) et El Segundo (Californie). | https://www.iana.org/dnssec/ceremonies | [lu] primaire |
| Première cérémonie : 16 juin 2010. Le calendrier va jusqu'à la cérémonie 66-2, prévue le 5 août 2027. | idem | [lu] primaire |
| **33 représentant·es de confiance de la communauté** (TCR) : 14 « cryptographic officers » (7 à l'Est, 7 à l'Ouest), 7 détenteur·rices de fragments de la clé de secours, 12 suppléant·es. | https://www.iana.org/dnssec/tcrs | [lu] primaire, page consultée le 8 nov. 2026 |
| Elles et ils viennent de **22 pays** : Australie, Brésil, Canada, Chili, Chine, Tchéquie, Danemark, Allemagne, Islande, Maurice, Maroc, Pays-Bas, Nouvelle-Zélande, Palestine, Philippines, Sri Lanka, Suède, Taïwan, Tanzanie, Trinité-et-Tobago, États-Unis, Zimbabwe. | idem | [lu] primaire |
| Sélection sur appel à candidatures ; les personnes liées à PTI, ICANN ou Verisign sont exclues. | idem | [lu] primaire |
| **Premier roulement de clé : 11 octobre 2018 à 16 h UTC** (KSK-2010 remplacée par KSK-2017). Prévu le 11 octobre 2017, il a été reporté (annonce du report le 27 septembre 2017). | https://www.icann.org/resources/pages/ksk-rollover-2018-en | [lu] primaire |
| Bilan 2018 : « minimal disruption of the global Internet ». | https://www.icann.org/en/announcements/details/first-root-ksk-rollover-successfully-completed-15-10-2018-en | [lu] primaire |
| **Second roulement : 11 octobre 2026**, KSK-2017 remplacée par KSK-2024. ICANN note « reports of issues affecting a limited number of systems », lien encore à l'étude. Révocation de l'ancienne clé prévue en janvier 2027. | https://www.icann.org/en/announcements/details/icann-reports-root-zone-ksk-rollover-completed-as-planned-15-10-2026-en | [lu] primaire, **état au 15 oct. 2026** |

### Mythe « 13 serveurs »

13 **identités** (A à M), pas 13 machines. Elles sont servies par environ 2 048 instances en anycast, dans environ 180 pays, par 12 organisations indépendantes. Sources : root-servers.org et la FAQ [lu].

---

## 3. Les noms de domaine

### Nouvelles extensions (gTLD)

| Fait | Source(s) | Statut |
|---|---|---|
| **Cycle 2012** : 1 930 candidatures, dont 66 noms géographiques et 116 IDN (noms internationalisés). | https://www.icann.org/en/announcements/details/new-gtld-reveal-day---applied-for-strings-13-6-2012-en et https://www.icann.org/news/announcement-2012-06-13-en | [lu] primaire |
| Par région en 2012 : Amérique du Nord **911**, Europe **675**, Asie-Pacifique **303**, Amérique latine et Caraïbes **24**, **Afrique 17**. | idem | [lu] primaire |
| **Cycle 2026** : guichet ouvert le 30 avril 2026, fermé le 12 août 2026. | https://www.icann.org/en/announcements/details/icann-opens-application-window-for-new-generic-top-level-domains-30-04-2026-en [extrait] ; https://www.icann.org/en/announcements/details/icann-2026-round-closes-with-more-than-1600-new-gtld-applications-13-08-2026-en [extrait] | Primaire |
| 1 663 candidatures déposées, 1 616 payées. | https://www.icann.org/en/announcements/details/icann-confirms-number-of-applications-proceeding-in-the-2026-round-22-09-2026-en | [lu] primaire |
| Publication des candidatures (« Reveal Day ») le 7 octobre 2026 : 1 615 candidatures, dont 333 marques, 16 candidatures communautaires, 15 noms géographiques, **21 IDN** et 51 bénéficiaires du programme d'aide aux candidat·es. | https://icann.org/en/announcements/details/icann-reveals-2026-round-applications-for-new-generic-top-level-domains-07-10-2026-en | [lu] primaire |
| Par région en 2026 : Amérique du Nord **864**, Europe **506**, Asie/Australie/Pacifique **218**, **Afrique 16**, Amérique latine et Caraïbes **11**. Le déséquilibre Nord-Sud persiste. | idem | [lu] primaire |
| Confirmation des chaînes (« String Confirmation Day ») le 17 novembre 2026. | https://gac.icann.org/activity/new-gtld-program-next-round | [extrait], **état au 8 nov. 2026** |

### Noms internationalisés (IDN)

| Fait | Source(s) | Statut |
|---|---|---|
| 5 mai 2010 : premiers ccTLD IDN dans la racine, tous en écriture arabe : مصر (Égypte), السعودية (Arabie saoudite), امارات (Émirats). « For the first time in the history of the Internet, non-Latin characters are being used for top-level domains. » | https://www.icann.org/en/announcements/details/first-idn-cctlds-available-5-5-2010-en | [lu] primaire |
| .рф (Russie) suit le 12 mai 2010. | https://www.icann.org/en/blogs/details/idn-cctlds--the-first-four-13-5-2010-en | [extrait] |

### Litige .amazon

| Fait | Source(s) | Statut |
|---|---|---|
| L'OTCA (Organisation du traité de coopération amazonienne : Bolivie, Brésil, Colombie, Équateur, Guyana, Pérou, Suriname, Venezuela) refuse l'attribution de .amazon à l'entreprise. | — | — |
| 15 mai 2019 : le conseil d'ICANN juge la proposition d'Amazon du 17 avril 2019 acceptable. Amazon propose : 9 noms par TLD réservés à l'OTCA, jusqu'à 1 500 noms culturellement sensibles bloqués, un comité de pilotage. | https://archive.icann.org/historical-resolution-tracking-feature/consideration-amazon-corporations-proposal-acto-member-states-continuing-concerns-re-amazon-new-gtld.html | [lu] primaire |
| Position de l'OTCA : la proposition « cannot be said to accommodate the principles of shared responsibility and shared governance ». Le consentement des pays amazoniens serait requis. L'Équateur dénonce l'asymétrie (« books », « kindle » pour Amazon). | idem | [lu] primaire |
| Avant cela : IRP gagnée par Amazon (juillet 2017), facilitation par le PDG d'ICANN (2018), demande de reconsidération de l'OTCA rejetée (janvier 2019). | Synthèse d'un moteur de recherche à partir des pages de résolutions d'ICANN | [extrait] |
| **.amazon est délégué depuis le 2 juin 2020** à Amazon Registry Services. | https://www.iana.org/domains/root/db/amazon.html | [lu] primaire |

### Litige .africa

| Fait | Source(s) | Statut |
|---|---|---|
| Candidature soutenue par l'Union africaine (ZACR, Afrique du Sud) contre DotConnectAfrica (DCA). En juin 2013, le GAC recommande de ne pas poursuivre la candidature de DCA. | — | — |
| 9 juillet 2015 : un panel IRP donne raison à DCA. La conduite d'ICANN était « inconsistent with the ICANN Articles and Bylaws », en particulier pour avoir suivi un avis du GAC sans justification. | https://www.icann.org/en/announcements/details/independent-review-panel-finds-in-favor-of-dca-trust-makes-recommendation-to-icanns-board-to-resume-evaluation-of-dcas-application-10-7-2015-en | [lu] primaire |
| Procès en Californie : injonction refusée (22 décembre 2016). | https://www.icann.org/resources/pages/dca-v-icann-2016-01-26-en | [lu] primaire |
| Décision du 22 août 2019 qui « bar[s] DCA from bringing or maintaining its claims ». Jugement final le 3 octobre 2019. | idem | [lu] primaire |
| **.africa est délégué depuis le 15 février 2017** à ZA Central Registry (Registry.Africa). | https://www.iana.org/domains/root/db/africa.html | [lu] primaire |

### ccTLD au destin particulier

**.tv (Tuvalu)**

- Verisign payait 5 M$ par an, forfaitaire, depuis 2001.
- Le nouveau contrat avec GoDaddy Registry (2021-2022) rémunère Tuvalu au nombre de noms vendus.
- Le ministre Simon Kofe parle d'un « game-changer ». Les fonds iront aussi à l'adaptation climatique, pour « future proof itself against the worst impacts of climate change ».
- Source : https://pina.com.fj/2022/05/02/better-dottv-deal-for-tuvalu/ [lu] secondaire (dépêche PACNEWS).
- Le gestionnaire actuel au registre de l'IANA est le ministère des Transports, de l'Énergie, des Communications et de l'Innovation de Tuvalu : https://www.iana.org/domains/root/db/tv.html [lu].

**.io (Territoire britannique de l'océan Indien, archipel des Chagos)**

| Fait | Source(s) | Statut |
|---|---|---|
| Le registre de l'IANA indique toujours ICB (Internet Computer Bureau), « c/o Sure (Diego Garcia) ». | https://www.iana.org/domains/root/db/io.html | [lu] primaire, état au 8 nov. 2026 |
| ICANN s'appuie sur la norme ISO 3166-1. Si le code IO disparaît, la politique de retrait prévoit 5 ans, avec prolongation possible. « It is not a foregone conclusion that a change in sovereignty will result in a change to the .io domain. » (Kim Davies, 14 novembre 2024) | https://www.icann.org/fr/blogs/details/the-chagos-archipelago-and-the-io-domain-14-11-2024-en | [lu] primaire |
| Traité Royaume-Uni–Maurice signé en mai 2025. **En avril 2026, Londres met de côté la loi de ratification** : les États-Unis retirent leur soutien et n'ont pas échangé les lettres modifiant le traité de 1966. | https://www.irishtimes.com/world/uk/2026/04/11/uk-pauses-plan-to-return-chagos-islands-to-mauritius-after-us-opposition [lu] ; https://domainincite.com/31642-io-safe-for-now-as-trump-puts-chagos-deal-on-ice [lu] | Deux sources indépendantes, **état au 13 avril 2026** |
| Le Foreign Office affirme qu'il n'y a « no pause or set deadline ». | Irish Times, idem | [lu] |
| Aucune source postérieure à mai 2026 n'a été trouvée. | — | À revérifier |

**.ly (Libye)**

- Transféré le 30 octobre 2025 à la General Authority of Communications and Informatics (GACI), selon le registre de l'IANA : https://www.iana.org/domains/root/db/ly.html [lu].

**.su (ex-URSS)**

- Toujours actif, géré par ROSNIIROS (Moscou) : https://www.iana.org/domains/root/db/su.html [lu].
- Exemple d'un domaine de pays qui a survécu à l'État qu'il désignait.

---

## 4. Les registres régionaux (RIR)

### Les cinq RIR et la NRO

| RIR | Fondation | Région | Siège | Source |
|---|---|---|---|---|
| RIPE NCC | 1992 (opérations formelles le **1er avril 1992** au NIKHEF, Amsterdam ; premier responsable : Daniel Karrenberg) | Europe, Moyen-Orient, une partie de l'Asie centrale | Pays-Bas | https://www.nro.net/about/rirs/ [lu] ; https://www.ripe.net/about-us/news/celebrating-25-years-of-the-ripe-ncc/ [lu] |
| APNIC | 1993 (expérience lancée à Tokyo, soutenue par le JPNIC) | Asie-Pacifique | Australie | NRO [lu] ; histoire par G. Ross : https://sites.google.com/site/internethistoryasia/book2/section-7-2-apnic [extrait] |
| ARIN | 1997 | États-Unis, Canada, une partie des Caraïbes | États-Unis | NRO [lu] |
| LACNIC | 2002 (reconnu par ICANN le 31 octobre 2002 à Shanghai) | Amérique latine et Caraïbes | Uruguay | NRO [lu] ; date de reconnaissance [extrait] |
| AFRINIC | 2005 (accrédité par ICANN en avril 2005, enregistré à Maurice en 2004) | Afrique et océan Indien | Maurice | NRO [lu] ; https://afrinic.net/history [lu] |

- NRO : « established in 2003 as a coordinating body for the five Regional Internet Registries ». https://www.nro.net/about/rirs/ [lu]
- Politiques écrites par les communautés.
  - NRO : « anyone who is interested in Internet number resource policy can participate ». https://www.nro.net/policy/ [lu]
  - Procédure du RIPE (RIPE-781) : « open to all », « bottom-up », « Decisions are taken by consensus ». La discussion a lieu sur des listes de diffusion ouvertes. https://www.ripe.net/publications/docs/ripe-781/ [lu]
- Une politique mondiale doit être adoptée dans les 5 régions dans la même version. NRO [lu]

### Personnes fondatrices et figures notables (hors États-Unis, femmes)

- **Nii Quaynor** (Ghana) préside le premier conseil d'AFRINIC en 2001. https://afrinic.net/history [lu]
- **Alan Barrett** (Afrique du Sud, mort le 28 mai 2026) :
  - coauteur de la proposition de 1997 qui mène à AFRINIC ;
  - membre du premier conseil (2001-2009), PDG d'AFRINIC (2015-2019) ;
  - administrateur d'ICANN de 2021 à sa mort.
  - Source : https://afrinic.net/memoriam-of-alan-barrett [lu] primaire.
- **Raúl Echeberría** (Uruguay) participe à la création de LACNIC dès 1998, préside le conseil provisoire (2000-2002), puis en devient directeur exécutif. https://www.lacnic.net/1541/2/lacnic/lacnic-announces-the-departure-of-the-organizations-founder-and-ceo-raul-echeberria [extrait] (page vide à la lecture)
- **Daniel Karrenberg** (Allemagne/Pays-Bas) est le premier responsable du RIPE NCC. [lu, voir ci-dessus]
- **Anne Lord** et **Mirjam Kühne** font partie de l'équipe de base du RIPE NCC dès 1994. Message de D. Karrenberg du 10 novembre 1994 : « David will join Anne Lord, Mirjam Kuehne, Geert Jan de Groot and myself ». https://lists.ripe.net/pipermail/ripe-org-closed/1994/msg00000.html [lu] primaire
- A. Lord est ensuite hostmaster principale et formatrice à l'APNIC (vers 1998), d'après les diapositives d'histoire de l'APNIC [extrait].
- M. Kühne préside la communauté RIPE depuis 2020, reconduite en 2025 pour cinq ans. https://www.ripe.net/about-us/news/ripe-community-selects-new-chair-vice-chair-2025/ [extrait]
- « Première femme présidente du RIPE » : **non vérifié**, ne pas l'écrire.
- **Elise Gerich** est nommée vice-présidente IANA d'ICANN le 17 mai 2010 (« a 21 year veteran of Internet networking »). https://itp.cdn.icann.org/en/files/announcements/release-17may10-en.pdf [lu] primaire
- Elle a ensuite présidé PTI. Date de fin : 2017 ou 2018 selon les sources [extrait].
- **Fiona Asonga** (Kenya) est élue au conseil d'AFRINIC en septembre 2025. https://cioafrica.co/dr-fiona-asonga-and-ben-roberts-elected-to-afrinic-board [extrait]
- Trois personnes élues en 2026 au Governance Committee d'AFRINIC, dont deux femmes (Afaf El Maayati, Dr Maud Adjeley Ashong Elliot). https://afrinic.net/announcement-of-2026-afrinic-election-results [lu]
- Hors périmètre : Kathy Brown (ISOC) n'a pas été vérifiée.

### Épuisement d'IPv4

| Date | Événement | Source(s) | Statut |
|---|---|---|---|
| **3 février 2011** | L'IANA attribue ses cinq derniers /8 (102, 103, 104, 179, 185), un par RIR, lors d'une cérémonie à Miami. ARIN : « the free pool of available IPv4 addresses is now fully depleted ». | https://www.arin.net/vault/announcements/20110203 | [lu] primaire |
| 15 avril 2011 | L'APNIC entame son dernier /8 (premier RIR à le faire). | https://blog.apnic.net/2019/12/13/keep-calm-and-carry-on-the-status-of-ipv4-address-allocation/ | [lu] primaire |
| Septembre 2012 | Le RIPE NCC atteint son dernier /8 : 15 septembre selon l'APNIC, 14 septembre selon d'autres sources. | idem | [lu], date à recouper |
| 10 juin 2014 | LACNIC annonce : « No hay más direcciones IPv4 ». | https://mail.lacnic.net/pipermail/anuncios/2014-June/000902.html | [extrait] |
| 15 février 2017 | LACNIC entre en phase 3 ; le dernier bloc de la phase 3 est réservé le 19 août 2020. | https://www.lacnic.net/en/web/lacnic/agotamiento-ipv4 | [extrait] (page vide à la lecture) |
| **24 septembre 2015** | ARIN : « ARIN's IPv4 free pool has depleted ». | https://www.arin.net/blog/2015/09/24/arin-reaches-ipv4-depletion/ | [lu] primaire |
| 31 mars 2017 | AFRINIC entre en phase 1 d'épuisement. | https://afrinic.net/exhaustion | [lu] primaire |
| 13 janvier 2020 | AFRINIC entre en phase 2 (au plus un /11 restant ; attributions entre /24 et /22). « Current IPv4 Exhaustion Phase: Phase 2 ». | idem | [lu], état au 8 nov. 2026 |
| **25 novembre 2019** | RIPE NCC : « we made our final /22 IPv4 allocation… We have now run out of IPv4 addresses. » | https://www.ripe.net/ripe/mail/archives/ripe-list/2019-November/001712.html | [lu] primaire |

À retenir : **AFRINIC est le dernier RIR à attribuer encore de l'IPv4 neuf.** C'est l'un des enjeux de la crise (voir §5).

### Marché de l'IPv4

Les seules sources sont des courtiers et des analystes du secteur, aucune source primaire. Chiffres à présenter comme des estimations.

- Prix moyen d'environ **20 $ par adresse au 1er semestre 2026** (médiane 20 $, 596 transactions publiques). Pic « near $60 per address in late 2021 ».
- Environ 29,7 millions d'adresses transférées au 1er semestre 2026, selon les journaux de transfert des RIR.
- Source : https://ipregistry.co/blog/ipv4-market-mid-2026 [lu] secondaire, qui s'appuie sur CircleID, xTom et Brander Group.
- Seconde source, également commerciale : IPv4Center, moyenne de 20,04 $ par adresse au 1er semestre 2026. https://ipv4center.com/blog/ipv4-market-report-2026-h1 [extrait]

---

## 5. La crise d'AFRINIC (état au 8 novembre 2026)

### Chronologie

| Date | Fait | Source(s) | Statut |
|---|---|---|---|
| 2013-2016 | AFRINIC attribue à Cloud Innovation Ltd (CIL, société des Seychelles fondée par Lu Heng ; filiale Larus) quatre blocs IPv4, soit **6 291 456 adresses**. | https://circleid.com/posts/the-february-case-that-could-end-africas-internet-registry (Emmanuel Vitus, 5 nov. 2026, auteur engagé contre la liquidation) | [lu] secondaire |
| Mars 2021 | AFRINIC estime que certaines utilisations ne correspondent plus aux besoins déclarés : adresses louées et annoncées hors d'Afrique. | idem | [lu] |
| 8 juillet 2021 | Annonce de reprise des adresses. Le 13 juillet, CIL obtient une ordonnance qui l'empêche. | idem | [lu] |
| 23 juillet 2021 | Saisie conservatoire jusqu'à 50 M$ sur les comptes d'AFRINIC, levée le 15 octobre 2021. | idem ; AFRINIC confirme le gel de juillet 2021 et la tentative de saisie des IPv4 non attribuées en septembre 2021 : https://afrinic.net/afrinic-member-update-organisational-stability-and-ongoing-legal-challenges | [lu] ×2 |
| 2022 | Plus de conseil d'administration complet (« first board since 2022 » en 2025). | https://www.theregister.com/2025/09/15/afrinic_election_called_what_next/ | [lu] |
| 12 septembre 2023 | La Cour suprême de Maurice (division des faillites) nomme un administrateur judiciaire (« Official Receiver ») : maintenir le statu quo, élire un conseil, recruter un·e PDG. | https://www.icann.org/en/announcements/details/icann-update-on-afrinic-22-09-2023-en | [lu] primaire |
| 15 octobre 2024 | Appel d'AFRINIC rejeté ; la NRO y voit « a positive development ». | https://www.nro.net/nro-announcement-on-afrinic/ | [lu] primaire |
| 12 février 2025 | Un nouvel administrateur judiciaire est nommé, chargé d'organiser les élections avant le 25 avril 2025. | https://www.icann.org/en/announcements/details/icann-update-on-afrinic-receiver-appointment-09-03-2025-en | [lu] primaire |
| Juin 2025 | Élection interrompue puis annulée : procurations contestées, plaintes de l'ISPA (Afrique du Sud). | The Register, 27 août 2026 : https://www.theregister.com/networks/2026/08/27/police-investigating-possible-forgery-at-afrinic-election/5293100 | [lu] |
| 19 juin 2025 | La Cour suprême dit que CIL a été inscrite par erreur comme membre votant, « simply a resource member ». | Communiqué d'AFRINIC du 31 oct. 2026 : https://afrinic.net/afrinic-official-statement-on-the-inclusion-of-cloud-innovation-limited-in-the-register-of-members | [lu] primaire (version AFRINIC) |
| Juillet 2025 | **CIL dépose une requête en liquidation** d'AFRINIC (SC/COM/PET/000508/2025). Le Premier ministre mauricien fait d'AFRINIC une « Declared Company ». | Mise à jour d'AFRINIC, 12 mars 2026 [lu] | Primaire |
| 10-12 septembre 2025 | Nouvelle élection : 8 administrateur·rices élu·es, dont 7 soutenu·es par Smart Africa. | The Register 2025 [lu] ; AFRINIC parle d'une participation « unprecedentedly high » [lu] | — |
| 12 mars 2026 | AFRINIC dénonce une « web of litigation » menée par CIL et Larus. | Mise à jour d'AFRINIC [lu] | Primaire |
| 14 mai 2026 | La Cour suprême prononce une ordonnance provisoire contre CIL (publication jugée trompeuse sur la location d'adresses) et **autorise ICANN à intervenir** dans la procédure de liquidation. | https://afrinic.net/afrinic-communique-15052026 | [lu] primaire |
| 24-28 juin 2026 | Réunion AFRINIC-37 à Nairobi et élections internes. | https://afrinic.net/announcement-of-2026-afrinic-election-results | [lu] |
| 28 juillet 2026 | Le conseil des adresses de l'ASO remet à la NRO la version 3 du « RIR Governance Document » (refonte d'ICP-2). Elle prévoit un audit tous les 5 ans, des plans de réhabilitation, un opérateur d'urgence temporaire et une procédure de « dé-reconnaissance » d'un RIR. | https://afrinic.net/rir-governance-document-delivered-to-the-nro-ec et https://afrinic.net/draft-rir-governance-document-rationale-report-and-next-steps | [lu] primaire, adoption finale non trouvée |
| 24 août 2026 | Le conseil, avec l'accord de l'administrateur judiciaire, nomme **Mike Silber** (Afrique du Sud) PDG désigné, en poste au **1er janvier 2027**. | https://afrinic.net/appointment-of-mr-mike-silber-as-ceo-designate | [lu] primaire |
| Fin août 2026 | La police mauricienne enquête sur deux affaires de faux présumés liées aux élections de 2025. | The Register, 27 août 2026 | [lu], source unique |
| 9-31 octobre 2026 | CIL apparaît au registre des membres tenu par le registre des sociétés (inscription datée du 9 octobre). AFRINIC conteste et envoie une mise en demeure le 29 octobre 2026. | Communiqué d'AFRINIC du 31 oct. 2026 [lu] | Primaire, **état au 31 oct. 2026** |
| Février 2027 (attendu) | Examen de la requête en liquidation. « No published order reviewed… fixes a February date. » | CircleID, 5 nov. 2026 [lu] | Incertain |
| Non tranché au 12 mars 2026 | Demande de décharge de l'administrateur judiciaire : « judgment is now awaited ». | Mise à jour d'AFRINIC [lu] | Rien de plus récent trouvé |

### Positions des parties

- **AFRINIC (conseil élu, administrateur judiciaire).**
  - CIL aurait violé son contrat de service.
  - Elle mènerait une « relentless barrage of legal warfare » qui coûte « millions of dollars ».
  - L'objectif serait de « paralyse Africa's sole Regional Internet Registry ».
  - Source : mise à jour du 12 mars 2026 [lu].
- **Cloud Innovation / Larus / Lu Heng.**
  - Les adresses auraient été obtenues légitimement ; les RIR n'auraient pas de mandat géographique sur le routage : « Registry region describes an administrative coordination relationship. Network operation remains global. »
  - CIL réclame une procédure régulière (« transparent procedures », « proportionality »).
  - Elle conteste qu'on puisse résumer les procès à « one party "won" ».
  - Source : https://larus.net/blog/lu-heng-on-internet-governance/ (8 janvier 2026, mis à jour le 15 septembre 2026) [lu], source partisane.
  - En 2025, CIL a soutenu que la liquidation était le seul moyen de protéger les réseaux servis par AFRINIC (CircleID [lu]).
- **ICANN et NRO.** Elles soutiennent l'administrateur judiciaire et des élections, au nom de « the long-term viability of the RIR system ». ICANN est intervenue au tribunal en 2025 et 2026. Sources [lu] ci-dessus.
- **Voix critiques en Afrique.**
  - Certain·es doutent de la conformité aux statuts de l'élection de septembre 2025.
  - D'autres s'inquiètent d'une majorité soutenue par Smart Africa, perçue comme dominée par quelques États.
  - Smart Africa appelle elle-même à prévenir la « institutional capture ».
  - Source : The Register 2025 [lu].
  - Le média BTW (Blue Tech Wave), souvent cité, publie des tribunes hostiles au processus. Son indépendance vis-à-vis de CIL est contestée : à ne pas utiliser seul.

### Mise en garde

- Ne pas nommer d'autres personnes privées que celles qui ont un rôle public : dirigeant·es, élu·es, fondateur de CIL.
- Ne pas reprendre les accusations pénales non jugées autrement que comme « enquête en cours ».

---

## 6. L'ONU : UIT, SMSI, FGI, Pacte numérique, CMTI-12, « New IP »

### Faits

| Fait | Source(s) | Statut |
|---|---|---|
| **UIT** : convention télégraphique signée le **17 mai 1865** à Paris, dans le Salon de l'Horloge du Quai d'Orsay, par 20 États, surtout européens. Création de l'Union télégraphique internationale, « the world's first modern international organization ». | https://www.itu.int/en/history/Pages/ITUBorn1865.aspx | [lu] primaire |
| Nom d'Union internationale des télécommunications à partir du 1er janvier 1934. | https://www.itu.int/en/history/pages/ITUsHistory.aspx | [extrait] |
| **Doreen Bogdan-Martin** (États-Unis), première femme secrétaire générale de l'UIT, élue en 2022 contre Rashid Ismailov (Russie). Candidate à sa réélection. | Synthèse d'un moteur de recherche (pas de source citée) | [extrait] |
| **PP-26 (conférence de plénipotentiaires)**, Doha, **9-27 novembre 2026**. L'élection du ou de la secrétaire générale commence le 12 novembre. | https://pp.itu.int/2026/en/ [lu] pour les dates ; date de l'élection [extrait] | Ne pas annoncer de résultat |
| **SMSI** (Sommet mondial sur la société de l'information) en deux phases : Genève, 10-12 décembre 2003 (plus de 11 000 participant·es, 175 pays) ; Tunis, 16-18 novembre 2005 (plus de 19 000, 174 pays). | https://www.itu.int/net/wsis/basic/about.html | [lu] primaire |
| **Agenda de Tunis**. §34 : définition de travail de la gouvernance de l'internet (gouvernements, secteur privé, société civile « in their respective roles »). §35 : « Policy authority for Internet-related public policy issues is the sovereign right of States ». §68 : « all governments should have an equal role and responsibility ». §69 : coopération renforcée. §72 : création du FGI. §77 : le FGI « would have no oversight function », « non-binding ». | https://www.itu.int/net/wsis/docs2/tunis/off/6rev1.html | [lu] primaire |
| **Pacte numérique mondial** : annexe I du Pacte pour l'avenir, adopté au Sommet de l'avenir (22-23 septembre 2024, résolution 79/1). Le Pacte dit : « Internet governance must continue to be global and multi-stakeholder in nature ». Il fait du FGI « the primary multi-stakeholder platform ». Revue de haut niveau prévue à la 82e session de l'Assemblée générale. | https://www.un.org/pact-for-the-future/en/annex-i-global-digital-compact [lu] ; date via A/RES/80/173 [lu] | Primaire |
| **SMSI+20** : **résolution A/RES/80/173 adoptée le 17 décembre 2025**, « without reference to a Main Committee ». | https://digitallibrary.un.org/record/4097834/files/A_RES_80_173-EN.pdf | [lu] primaire |
| Adoption sans vote, par consensus. | Fiche de la bibliothèque numérique de l'ONU [extrait] ; W. Kleinwächter : https://circleid.com/posts/wsis20-a-small-light-of-hope-in-a-darkening-political-landscape [lu] | Deux sources |
| §99 : « We decide that the Internet Governance Forum shall be made a **permanent forum of the United Nations** with a continued secretariat hosted by… UN DESA ». | A/RES/80/173 [lu] ; texte identique dans le projet Rev.5 du 16 déc. 2025 : https://www.un.org/pga/wp-content/uploads/sites/110/2025/12/WSIS20_Rev5_16122516.pdf [lu] | Primaire |
| §103 : renforcer le secrétariat du FGI ; le secrétaire général doit proposer un financement durable. | idem | [lu] |
| §88 : réaffirme la définition de Tunis. §91 : gouvernance « global and multi-stakeholder », y compris la coopération renforcée. §94 : prend note des lignes directrices NETmundial+10. | idem | [lu] |
| Nouvel examen du SMSI en 2035. | idem | [lu] |
| Positions lors du SMSI+20, d'après W. Kleinwächter (CircleID, 23 déc. 2025) : | https://circleid.com/posts/wsis20-a-small-light-of-hope-in-a-darkening-political-landscape | [lu] secondaire, expert |
| — États-Unis : objections aux mentions des ODD, du genre et du climat ; se disent « not in a position to support the document » mais ne demandent pas de vote. | idem | [lu] |
| — Groupe des 77 et la Chine : un texte trop faible ; voulaient un financement et un rôle gouvernemental plus fort. | idem | [lu] |
| — Iran : voulait un paragraphe plus fort sur la coopération renforcée. | idem | [lu] |
| — Russie : réserves sur le rôle du Haut-Commissariat aux droits de l'homme. | idem | [lu] |
| — UE : contre une nouvelle institution de financement. | idem | [lu] |
| FGI 2026 : 21e réunion, **Nairobi, 14-18 décembre 2026** (KICC, format hybride). Première réunion depuis que le FGI est permanent. | https://indico.un.org/event/1024890/ | [lu] primaire |
| **CMTI-12** (Conférence mondiale des télécommunications internationales), Dubaï, 3-14 décembre 2012. Révision du Règlement des télécommunications internationales (RTI). 55 États ne signent pas, à cause de « the way the Internet was introduced into the treaty text ». | https://www.arin.net/vault/blog/2012/12/19/wcit-12-wrap-up-conference-concludes-but-internet-governance-discussions-arent-going-anywhere/ | [lu] |
| La résolution 3 (non contraignante) dit : « all governments should have an equal role and responsibility for international Internet governance ». Les États-Unis refusent de signer. | CRS 97-868 [lu] | — |
| 89 signataires (dont Russie, Chine, Arabie saoudite). Non-signataires : États-Unis, Royaume-Uni, Canada, France, Allemagne, Japon, Australie… | https://www.benton.org/headlines/wcit-over-who-won-nobody-knows [extrait] ; https://circleid.com/posts/20121214_wcit_12_disappoints_more_work_to_be_done [extrait] | À rouvrir |
| PP-14 (Busan, 2014) : décision de « not to expand the ITU's role in Internet governance », selon le département d'État. | CRS 97-868 [lu] | — |
| **« New IP »** : contribution TSAG C-83 de Huawei (avec China Mobile, China Unicom et le CAICT) en septembre 2019 ; présentée au groupe FG NET-2030 en janvier 2020. | https://www.internetsociety.org/?p=164792 | [lu] (FAQ de l'ISOC, partie critique) |
| Renommée « Future Vertical Communication Networks » en juillet 2020. En décembre 2020, les commissions d'études SG13 et SG11 refusent d'en faire des sujets d'étude. | idem | [lu] |
| Arguments de Huawei, rapportés par ses critiques : préparer les réseaux de 2030 (holographie, téléchirurgie, services déterministes) ; il ne s'agirait pas de contrôle centralisé. | idem ; https://www.theregister.com/2020/06/04/we_have_huawei_to_make/ | [lu] |
| Document de Huawei lui-même : **non lu**. | — | Lacune |
| Critiques de « New IP ». | — | — |
| — RIPE NCC (M. Hogewoning, 22 avril 2020) : l'objectif à long terme serait de « supersede TCP/IP and replace the Internet » ; le contrôle passerait de la périphérie au cœur du réseau. | https://labs.ripe.net/author/marco_hogewoning/do-we-need-a-new-ip | [lu] |
| — Alissa Cooper (présidente de l'IETF) : risque de « create network islands, damage interconnection ». | The Register 2020 [lu] | — |
| — Thierry Breton (Commission européenne) : défendre un internet « single, open, neutral, free and unfragmented ». | The Register 2020 [lu] | — |

### Arguments des deux modèles, à présenter à égalité

**Modèle intergouvernemental (Chine, Russie, nombreux pays du Sud, avec des nuances)**

- Les gouvernements ont seuls la légitimité démocratique pour les politiques publiques : Tunis §35, A/66/359 [lu].
- Égalité entre États contre la tutelle d'un seul : Tunis §68, résolution 3 de la CMTI-12.
- ICANN reste soumise au droit américain : statuts [lu].
- Les pays du Sud sont sous-représentés. Exemple : Afrique 17 candidatures en 2012 et 16 en 2026, contre 911 et 864 pour l'Amérique du Nord [lu].
- L'Inde (2011) se dit « multilateral and multi-stakeholder ». Ce n'est pas un rejet du multipartisme, mais une demande d'un organe onusien [lu].

**Modèle multipartite (ICANN, RIR, IETF, ISOC, États-Unis, UE, nombreux autres)**

- Décisions ouvertes à toute personne et prises par consensus (RIPE-781 [lu]).
- Rapidité technique et neutralité : refus de couper .ru (ICANN) ou de retirer les IP russes (RIPE NCC) en 2022 [lu].
- Peur de la fragmentation et de la censure : Montevideo 2013, critiques de « New IP » [lu].
- Le SMSI+20 (2025) a lui-même réaffirmé le caractère « global and multi-stakeholder » et rendu le FGI permanent [lu].

---

## 7. Mythes à démonter

1. **« Les États-Unis contrôlent Internet. »**
   - *Avant 2016* : un contrat de la NTIA encadrait les fonctions IANA, et la NTIA autorisait chaque changement de la zone racine. C'était un vrai levier sur le **sommet du DNS**, pas sur « Internet » : routage, câbles et contenus ne passent pas par là.
   - *Depuis le 1er octobre 2016* : contrat expiré [lu NTIA] et rôle d'autorisation retiré [lu ICANN RZMA].
   - *Restent* : ICANN et PTI sont de droit californien [lu statuts] ; 10 des 13 lettres racine sont exploitées par des organisations américaines (dont 3 militaires ou gouvernementales : NASA, DISA, armée) [lu root-servers.org].
   - *Mais* : seulement ≈ 16 % des instances sont aux États-Unis [calcul], et le contenu de la zone est signé par DNSSEC [lu FAQ RSSAC].
2. **« Internet a 13 serveurs racine. »** Faux : 13 identités, environ 2 048 instances, 12 opérateurs. Le chiffre 13 vient de la limite de 512 octets des réponses DNS de 1987 [lu FAQ RSSAC, root-servers.org].
3. **« L'ICANN peut couper Internet » (ou couper un pays).**
   - Le 28 février 2022, l'Ukraine demande de révoquer .ru, .рф et .su et d'éteindre des serveurs racine en Russie.
   - Réponse de Göran Marby, PDG d'ICANN, le 2 mars 2022 : « ICANN has been built to ensure that the Internet works, not for its coordination role to be used to stop it from working » ; « No one actor has the ability to control it or shut it down » ; ICANN n'a pas « sanction-levying authority ». https://www.icann.org/en/system/files/correspondence/marby-to-fedorov-02mar22-en.pdf [lu] primaire
   - Même refus du RIPE NCC le 10 mars 2022 : « Internet number resource registrations should not be used as a means to enforce political outcomes ». https://www.ripe.net/about-us/news/ripe-ncc-response-to-request-from-ukrainian-government/ [lu] primaire
   - Nuance : retirer un TLD de la racine est techniquement possible via la chaîne IANA → Verisign → opérateurs. Mais les politiques ne le prévoient pas sans le gestionnaire du ccTLD. Le cache (jusqu'à 2 jours) et les copies locales de la racine amortiraient l'effet.
4. **« L'ONU gouverne Internet. »**
   - Le FGI n'a « no oversight function » et il est « non-binding » (Tunis §77 [lu]).
   - L'UIT normalise les télécoms, pas les protocoles de l'internet (IETF). Les tentatives d'étendre son rôle ont échoué ou divisé : CMTI-12, PP-14, « New IP » [lu].
   - Le SMSI+20 (2025) rend le FGI permanent mais réaffirme le modèle multipartite [lu A/RES/80/173].
5. Mythes annexes, pour un encart « premier·e X » :
   - « Postel a inventé seul l'IANA » : il travaillait avec Joyce Reynolds et d'autres à l'ISI.
   - « Le premier nom de domaine non latin date de 2010 » : vrai seulement pour les **extensions** (ccTLD IDN) ; les noms IDN de second niveau existaient avant (non sourcé ici, à vérifier).

---

## Réserves et points contestés

- **Épisode de janvier 1998 (Postel et la racine)** : témoignages divergents sur la date, le nombre d'opérateurs et l'intention. Une seule source lue (témoignage de John Gilmore). Ne pas publier sans seconde source ; présenter comme « récit contesté ».
- **Critère de la NTIA de 2014** (refus d'une solution « government-led or intergovernmental ») : formulation non lue dans la source primaire (erreur 404).
- **Joyce Reynolds et la transition IANA** : non confirmé par une source primaire.
- **Mirjam Kühne « première femme présidente du RIPE »** : non vérifié.
- **Elise Gerich** : fin de mandat en 2017 ou 2018 selon les sources.
- **Dates d'épuisement d'IPv4** : chaque RIR a ses propres « phases ». Toujours préciser « dernier /8 » ou « plus d'adresses ». LACNIC n'est lu qu'en extrait.
- **Prix de l'IPv4** : uniquement des sources commerciales (courtiers). Fourchette et date obligatoires.
- **AFRINIC** :
  - sujet en mouvement, avec des sources très polarisées (communiqués d'AFRINIC, blog Larus, BTW Media, tribunes CircleID) ;
  - la date de l'audience de liquidation (février 2027) n'est pas confirmée par une ordonnance publiée ;
  - la décision sur la décharge de l'administrateur judiciaire n'a pas été trouvée ;
  - l'inscription de CIL au registre des sociétés (octobre 2026) est contestée par AFRINIC ;
  - les enquêtes policières de 2026 ne sont rapportées que par The Register.
- **SMSI+20** : la position américaine (explication de position) n'est connue que par un compte rendu secondaire, le site de la mission américaine n'ayant pas été trouvé. Le verbatim A/80/PV.68 n'a pas été lu.
- **CMTI-12** : les chiffres 89 / 55 ne sont lus qu'en partie (55 non-signataires [lu] chez ARIN ; 89 [extrait]). Certains comptes varient (70 signataires selon eWeek).
- **Chagos et .io** : le gel d'avril 2026 est confirmé par deux sources, mais rien n'a été trouvé après mi-mai 2026. Le Foreign Office nie une « pause ». À revérifier avant publication.
- **Comptages de serveurs racine par pays** : calcul maison sur les fichiers JSON de root-servers.org (sites suspendus inclus). À recalculer au moment de publier.
- **Second roulement de la KSK (octobre 2026)** : ICANN mentionne des incidents limités « being assessed ». Pas de bilan définitif.
- **PP-26 (Doha)** : élection du ou de la secrétaire générale à partir du 12 novembre 2026. Ne pas annoncer de résultat.
- **« New IP »** : le document de Huawei n'a pas été lu. Les arguments de Huawei ne sont connus que par ses critiques (ISOC, RIPE NCC) et par la presse.
- **Pour aller plus loin (Wikipédia)** : pages non ouvertes pour ce dossier, labels à vérifier. Articles possibles : « Internet Corporation for Assigned Names and Numbers », « Serveur racine du DNS », « Registre Internet régional », « Sommet mondial sur la société de l'information ».

---

## Idées d'animations interactives (simples et fidèles)

1. **« D'où vient ton adresse IP ? »**
   - Pas à pas, avec `pasapas.ts`. Chaîne : IANA (blocs /8, par exemple 185/8 donné au RIPE NCC le 3 février 2011) → RIR → FAI (opérateur, LIR) → ta box → ton appareil (NAT), avec un volet IPv6.
   - À chaque étape : qui décide, selon quelle politique et sur quelle liste ouverte.
   - Repli texte : une liste ordonnée.
2. **Carte des cinq RIR**
   - Carte SVG cliquable : date de fondation, siège, date d'épuisement IPv4, nombre de membres (à sourcer).
   - Bouton « AFRINIC aujourd'hui » vers une frise datée de la crise, avec la mention « état au ».
3. **Carte des instances racine**
   - Points par pays à partir des JSON de root-servers.org, figés à une date et servis en local (pas de ressource tierce).
   - Filtre par lettre (A à M) et compteur « 13 identités, 12 opérateurs, ≈ 2 048 instances ».
   - Démontre le mythe des 13 serveurs.
4. **« Pourquoi 13 ? » : le paquet de 512 octets**
   - On remplit une boîte de 512 octets avec des couples nom + adresse IPv4 ; au 14e, ça déborde.
   - Puis on active la compression de noms, IPv6 et EDNS0.
   - Fidèle à la FAQ du RSSAC.
5. **La cérémonie des clés**
   - Animation d'une cérémonie KSK : rôles (administrateur·rice de cérémonie, 3 cryptographic officers sur 7, coffre, module matériel de sécurité HSM, signature des ZSK pour 3 mois).
   - Carte des 22 pays des représentant·es de confiance.
   - Frise des roulements : 2010, 2018, 2026.
6. **Quiz « Qui peut couper quoi ? »**
   - Cartes « ICANN », « RIR », « opérateur racine », « FAI », « État » face à des actions : retirer .ru, bloquer un site, couper un pays.
   - Réponse avec la source : lettres de 2022 d'ICANN et du RIPE NCC, coupures nationales.
7. **Frise diplomatique 1865 → 2026**
   - Repères : UIT 1865, Postel 1972, ICANN 1998, SMSI 2003/2005, CMTI-12 2012, Montevideo 2013, NETmundial 2014, transition 2016, Pacte numérique 2024, FGI permanent 2025, FGI de Nairobi et PP-26 en 2026.
   - Deux couleurs : multipartite et intergouvernemental. Composant `Frise`.
8. **Qui demande une extension ?**
   - Graphique en barres 2012 / 2026 des candidatures gTLD par région (911/675/303/24/17 contre 864/506/218/16/11).
   - Avec les cas .amazon et .africa en encarts repliés (`Etape`).
