# Dossier de sources : Se protéger

Module `/modules/se-proteger/`. Recherches menées le 8 novembre 2026 par deux agents de recherche
(User-Agent `RouagesDuNet-research/0.1`), puis relues pour la rédaction. Aucune adresse e-mail ni aucun mot
de passe réel n'a été testé.

Statuts : **[lu]** page ou document lu ; **[extrait]** extrait de moteur de recherche seulement ;
**[méta]** métadonnées seulement. Seuls les faits [lu] sont publiés.

## Calculs propres au site

- **Fréquences des lettres du français** (`FREQ_FR` dans `src/lib/securite.ts`) : comptées sur Victor Hugo,
  *Les Misérables*, tome I (Projet Gutenberg n° 17489, texte entre les marqueurs START et END), soit 512 877
  lettres, accents ramenés à la lettre de base, Œ et Æ développés. E : 17,32 % ; A : 8,79 % ; I : 7,73 %.
- **Liste de 512 mots** (`src/data/mots-phrases.ts`) : noms communs sans accent établis pour le site ;
  512 = 2⁹, donc 9 bits par mot tiré au sort (avec `crypto.getRandomValues`, sans biais de modulo).
- **Vitesses d'attaque** de l'animation « Phrase de passe » : 1 000 essais par seconde en ligne (hypothèse de
  xkcd 936) ; environ 1,5 million par seconde hors ligne contre bcrypt (facteur 10), ordre de grandeur déduit
  du tableau 2025 de Hive Systems (8 caractères minuscules et chiffres en environ 3 semaines).
- **Diffie-Hellman** : exemple classique p = 23, g = 5, secrets 6 et 15, secret commun 2 (vérifié par les
  tests unitaires).

## Choix de rédaction

- Non publiés (extrait seulement, source unique ou contestés) : confirmation d'Arup (la page cite la police de
  Hong Kong, qui ne nomme pas l'entreprise), hausse de 327 % du SIM swap au Kenya, classement NordPass, détails
  sur Perceval et le 33700, terme *mlecchita-vikalpa*, date de la découverte de Babbage, chiffres de Maersk,
  position du Conseil de l'UE sur « Chat Control » de novembre 2025 (site inaccessible), « 8 000 vies sauvées »
  par Elizebeth Friedman, priorité de Merkle (métadonnées seulement), attribution à Bellaso et à Miller
  (métadonnées seulement : Bellaso est cité dans un mythe, à confirmer par une source lue).
- Chat Control : l'état est donné d'après la fiche officielle de l'Observatoire législatif (régime provisoire)
  et des comptes rendus de négociation, signalés comme tels.
- ANSSI : Panorama 2025 lu dans la presse (Le Monde Informatique, Next), le site de l'ANSSI étant inaccessible.
- Les exemples de messages du jeu « Hameçonnage ou pas ? » utilisent des domaines `.example` (RFC 6761) et
  aucun vrai numéro de téléphone.

## À revérifier (sujets évolutifs)

- Règlement « Chat Control » (trilogue annoncé en novembre ou décembre 2026).
- Have I Been Pwned (compteurs), Passkey Index de la FIDO Alliance, rapport annuel de Cybermalveillance (mars).
- Calendrier post-quantique (NIST, ANSSI, UE) ; norme HQC.
- Programme ESU de Windows 10 (jusqu'au 12 octobre 2027).
- Recours d'Apple sur ADP au Royaume-Uni (non cité sur la page).

---

# Partie 1 : comptes et arnaques

- **Date de rédaction** : 8 novembre 2026.
- **Statut des sources** :
  - **[lu]** : page ou PDF ouvert et lu, en tout ou en partie, dans cette session.
  - **[extrait]** : vu seulement dans un extrait de moteur de recherche, souvent parce que le site bloquait les robots (403).
  - **[méta]** : métadonnées bibliographiques seulement.
- **Règles suivies** :
  - aucune adresse e-mail ni aucun mot de passe testé ;
  - l'API HIBP n'a été interrogée que pour la liste publique des fuites (`/api/v3/breaches`) ;
  - User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)` pour curl.
- **Calculs** : ceux signalés « calcul » sont les miens, avec les hypothèses indiquées. Ils ne viennent pas d'une source.

---

## 1. Mots de passe

### 1.1 Recommandations officielles actuelles

#### ANSSI : « Recommandations relatives à l'authentification multifacteur et aux mots de passe », version 2.0 du 08/10/2021

C'est une réécriture complète du guide de 2012, avec 42 recommandations. **[lu]** https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-authentification_multifacteur_et_mots_de_passe.pdf

- **Longueur plutôt que complexité.**
  - Citation : « Il est souvent plus efficace d'allonger un mot de passe que de chercher à le rendre plus complexe ».
  - Le tableau 3 suppose un jeu de 90 caractères :
    - sensibilité faible à moyenne : 9 à 11 caractères (≈ 65 bits) ;
    - moyenne à forte : 12 à 14 caractères (≈ 85 bits) ;
    - forte à très forte : au moins 15 caractères (≥ 100 bits).
  - Pour un mot de passe qu'on n'a pas à mémoriser, plus de 20 caractères.
- **Phrases de passe.**
  - Elles « consistent à choisir aléatoirement un certain nombre de mots parmi un corpus déterminé ».
  - Citation : « À entropie égale, les phrases de passe sont souvent bien plus longues […] mais sont aussi pour certains utilisateurs plus simples à mémoriser ».
  - R22 : ne pas imposer de longueur maximale. Une limite à « plusieurs centaines de caractères » reste acceptable.
- **Pas d'expiration par défaut (R24)** pour les comptes non sensibles. Le guide constate que les utilisateurs créent « des itérations » (« Toto1, Toto2 »).
  - R25 : en revanche, une expiration pour les comptes à privilèges (par exemple entre 1 et 3 ans).
- **SMS déconseillé (R8)** : « Il est recommandé de ne pas utiliser le SMS comme moyen de réception d'un facteur d'authentification ». Le guide cite SS7 et le SIM swapping (voir § 3).
- **Coffre-fort de mots de passe (R31).**
  - KeePass y est cité comme exemple (« Keepass [29] est un exemple »).
  - Le guide préfère « coffre-fort » à « gestionnaire ».

#### CNIL : délibération n° 2022-100 du 21 juillet 2022

Elle a été publiée au JO en octobre 2022 et remplace la recommandation de 2017. **[lu]** https://cnil.fr/sites/cnil/files/atoms/files/deliberation-2022-100-du-21-juillet-2022_recommandation-aux-mots-de-passe.pdf et page pédagogique du 14 octobre 2022 **[lu]** https://cnil.fr/fr/mot-de-passe

- **Raisonner en entropie.**
  - Cas n° 1, mot de passe seul : « l'équivalent d'une entropie d'au moins 80 bits ». Trois exemples équivalents :
    - au moins 12 caractères avec majuscules, minuscules, chiffres et caractères spéciaux (parmi au moins 37) ;
    - au moins 14 caractères avec majuscules, minuscules et chiffres, sans caractère spécial obligatoire ;
    - une phrase de passe d'« au minimum 7 mots » de la langue française.
  - Cas n° 2, avec restriction d'accès (temporisation, blocage) : 50 bits.
  - Code de déverrouillage d'un appareil : 13 bits.
  - Explication pédagogique de la CNIL : un code à 4 chiffres donne 10⁴ combinaisons, « du même ordre de grandeur » que 2¹³ = 8 192, donc 13 bits.
- **Autoriser le copier-coller** pour encourager les gestionnaires de mots de passe (§ 32). Longueur maximale d'au moins 50 caractères (§ 31).
- **Ne jamais stocker en clair (§ 48).**
  - Utiliser une fonction « non réversible et sûre », avec un « sel » et des paramètres de coût en temps ou en mémoire.
  - Sel aléatoire d'au moins 128 bits, propre à chaque utilisateur (§ 49).
- **Renouvellement (§ 54)** : les responsables « ne devraient plus imposer de modification périodique » à tous les utilisateurs. Le renouvellement périodique reste prévu pour les comptes d'administration.

#### NIST SP 800-63B-4 (révision 4, finale de juillet 2025)

**[lu]** https://pages.nist.gov/800-63-4/sp800-63b.html, § 3.1.1.2.
Date : CSRC indique « Date Published: July 2025 » et une version finale du 31/07/2025 **[extrait]** https://csrc.nist.gov/pubs/sp/800/63/4/final

- **Longueur minimale.**
  - 15 caractères pour un mot de passe utilisé seul (« used as a single-factor authentication mechanism »).
  - 8 caractères s'il fait partie d'une authentification multifacteur.
  - Longueur maximale acceptée d'au moins 64 caractères (« SHOULD »).
- **Composition** : « SHALL NOT impose other composition rules » (pas d'obligation de mélanger les types de caractères).
- **Renouvellement** : « SHALL NOT require subscribers to change passwords periodically ». Le changement reste obligatoire en cas de compromission.
- **Liste de blocage** : comparer à « a blocklist that contains known commonly used, expected, or compromised passwords ».
- **Gestionnaires** : « SHALL allow the use of password managers and autofill ». Le collage est autorisé (« SHOULD permit […] paste »).
- **Interdits** :
  - pas d'indice accessible sans authentification ;
  - pas de questions secrètes (« SHALL NOT prompt subscribers to use knowledge-based authentication ») ;
  - pas de troncature : « SHALL verify the entire submitted password ».
- **L'annexe A** (informative) explique pourquoi : « users respond in very predictable ways to the requirements imposed by composition rules ». **[lu]** https://pages.nist.gov/800-63-4/sp800-63b/passwords/

### 1.2 L'entropie : calcul et exemples

La CNIL définit l'entropie comme le « degré d'imprédictibilité » d'un mot de passe, mesuré en bits **[lu, délibération CNIL § 19]**.

- **Formule**, valable seulement si chaque symbole est tiré au hasard : entropie = longueur × log₂(taille de l'alphabet).
- **Cas d'une phrase de passe** : nombre de mots × log₂(taille de la liste).

Exemples chiffrés (calcul) :

| Secret tiré au hasard | Combinaisons | Entropie |
|---|---|---|
| Code de 4 chiffres | 10⁴ | 13,3 bits |
| 8 caractères minuscules et chiffres | 36⁸ | 41,4 bits |
| 8 caractères parmi 94 imprimables ASCII | 94⁸ | 52,4 bits |
| 12 caractères parmi 94 | 94¹² | 78,7 bits |
| 4 mots de la liste EFF (7 776 mots) | 7 776⁴ | 51,7 bits |
| 5 mots EFF | 7 776⁵ | 64,6 bits |
| 6 mots EFF | 7 776⁶ | 77,5 bits |
| 7 mots EFF | 7 776⁷ | 90,5 bits |

- **Diceware et liste EFF.**
  - L'EFF a publié en juillet 2016 (Joseph Bonneau) des listes de 7 776 mots, soit 6⁵, autant que de lancers de cinq dés.
  - Cela donne 12,9 bits par mot. L'EFF recommande 6 mots, soit environ 77 bits.
  - La liste Diceware d'Arnold Reinhold date de 1995 et compte aussi 7 776 mots.
  - **[lu]** https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases
- **xkcd 936, « Password Strength ».**
  - « Tr0ub4dor&3 » est estimé à environ 28 bits ; « correct horse battery staple » (4 mots courants, environ 11 bits chacun) à environ 44 bits.
  - À 1 000 essais par seconde (attaque en ligne sur un service web faible) : environ 3 jours contre environ 550 ans.
  - **[lu]** https://xkcd.com/936/
- **NCSC britannique** : la méthode « trois mots au hasard » (Ian Levy, 2019). **[lu]** https://www.ncsc.gov.uk/news/most-hacked-passwords-revealed-as-uk-cyber-survey-exposes-gaps-in-online-security
- **Limite de la formule.**
  - L'ANSSI rappelle que l'estimation « ne vaut que si chaque caractère (respectivement chaque mot) » est tiré au hasard. Un mot du dictionnaire, une date ou une citation ont une entropie bien plus faible **[lu, guide ANSSI § 4.1]**.
  - Une étude de Carnegie Mellon (2012) montre que les estimations d'entropie du NIST de l'époque reflètent mal la résistance réelle aux attaques par devinette **[extrait]**, article IEEE S&P 2012 « Guess Again… » : https://ieee-security.org/TC/SP2012/papers/4681a523.pdf.

### 1.3 Force brute : ordres de grandeur

**Principe.** Le temps maximal se calcule ainsi : nombre de combinaisons ÷ vitesse d'essai. En moyenne, il faut moitié moins de temps. La vitesse varie énormément selon la situation :

1. **Attaque en ligne** sur le site : elle est limitée par le réseau et par le blocage après échecs. xkcd prend 1 000 essais par seconde pour un service faible **[lu]**. Un service bien protégé est beaucoup plus lent.
2. **Attaque hors ligne** sur une base de condensats volée : tout dépend de la fonction de hachage.
   - **Hive Systems, tableau 2025** **[lu]** https://www.hivesystems.com/blog/are-your-passwords-in-the-green-2025 :
     - matériel : 12 cartes RTX 5090 contre bcrypt avec un facteur de travail de 10 (« the bcrypt strength levels people seem to use most in the wild ») ;
     - le tableau suppose des mots de passe générés aléatoirement ;
     - d'après le résumé de PC Gamer **[extrait]** : 8 caractères minuscules et chiffres, environ 3 semaines ; avec majuscules, environ 15 ans ; avec symboles, environ 164 ans.
   - **Calcul.** « 3 semaines pour 36⁸ » correspond à environ 1,5 million d'essais par seconde contre bcrypt(10). À cette vitesse, temps maximal :
     - 4 mots EFF : environ 75 ans ;
     - 5 mots : environ 580 000 ans ;
     - 6 mots : environ 4,5 milliards d'années ;
     - « correct horse battery staple » à 44 bits : environ 4 mois.
   - **Hypothèse pédagogique (non sourcée)** : contre une fonction rapide non salée (MD5, SHA-1), la vitesse est plusieurs ordres de grandeur plus élevée. À 10¹¹ essais par seconde, 8 caractères parmi 94 tombent en moins d'une journée. C'est l'intérêt de bcrypt et d'Argon2.
3. **En pratique**, les attaquants n'essaient pas tout : ils testent d'abord les listes de mots de passe fuités et leurs variantes. Les temps de force brute ne valent que pour un secret réellement aléatoire.

**Hachage et stockage.**

- **OWASP Password Storage Cheat Sheet** **[lu]** https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html :
  - hacher plutôt que chiffrer : le hachage est à sens unique, le chiffrement est réversible ;
  - **Argon2id** de préférence (au moins 19 Mio de mémoire, 2 itérations, parallélisme 1) ;
  - sinon scrypt (N = 2¹⁷), ou bcrypt pour les systèmes anciens (facteur au moins 10, limite de 72 octets en entrée) ;
  - PBKDF2-HMAC-SHA-256 avec 600 000 itérations si FIPS est exigé ;
  - le sel empêche les tables précalculées et masque les mots de passe identiques ;
  - le « poivre » est un secret gardé hors de la base.
- La CNIL impose la même logique (§ 48-49) **[lu]**.
- **Pourquoi pas en clair** : une fuite donnerait directement tous les mots de passe, réutilisables ailleurs (credential stuffing, § 2.3). La CNIL relève aussi qu'en cas de fuite on peut tenter les « couples mot de passe sans sel / valeur hachée précalculés » **[lu]**.

### 1.4 Les mots de passe les plus courants

- **NCSC (Royaume-Uni), 21 avril 2019** **[lu]** :
  - analyse des 100 000 mots de passe les plus fréquents dans les fuites publiées sur Have I Been Pwned ;
  - 123456 : 23,2 millions de comptes ; 123456789 : 7,7 millions ; qwerty : 3,8 millions ; password : 3,6 millions ; 1111111 : 3,1 millions.
- **NordPass**, classement annuel :
  - 2025 est la 7ᵉ édition, faite avec NordStellar et des chercheurs indépendants, sur des données de 44 pays ;
  - « 123456 » est en tête mondiale six années sur sept ; « admin » arrive en tête aux États-Unis et aux Pays-Bas en 2025 **[extrait]** https://nordpass.com/most-common-passwords-list/ (403 au robot).
  - Une description ancienne évoque « a 2.5TB database extracted from various publicly available sources, including those on the dark web » **[extrait]**. Pas vérifié pour 2025.
- **Limites méthodologiques à expliquer aux élèves.**
  - Ces listes comptent des mots de passe *fuités*. Elles surreprésentent les sites mal protégés, les comptes jetables et les comptes créés par des robots.
  - Les doublons entre fuites ne sont pas toujours retirés.
  - NordPass vend un gestionnaire de mots de passe : il y a un conflit d'intérêts.
  - La méthode n'est pas publiée en détail et n'est pas reproductible.
  - Ces listes disent ce qui est *fréquent*, pas ce que choisit l'utilisateur·rice moyen·ne d'un service sérieux.

### 1.5 Gestionnaires de mots de passe

- **ANSSI** : R31 recommande de fournir un coffre-fort et de former à son usage ; KeePass est cité en exemple **[lu]**.
- **CNIL** : elle encourage les gestionnaires (§ 32 : autoriser le collage) **[lu]**.
- **KeePass et l'ANSSI.**
  - KeePass a obtenu une **CSPN** (Certification de sécurité de premier niveau) de l'ANSSI. Le site de KeePass l'écrit et rappelle que KeePass figure au **SILL** (Socle interministériel de logiciels libres) **[lu]** https://keepass.info/ratings.html.
  - Le rapport ANSSI-CSPN-2010/07 porte sur **KeePass 2.10** (version portable), daté du 19 janvier 2011 **[extrait]** https://cyber.gouv.fr/sites/default/files/IMG/cspn/anssi-cspn_2010-07fr.pdf (lien en 404 lors de l'essai).
  - **KeePassXC** est un projet distinct. Sa version 2.7.9 (Windows 10) a reçu le visa **ANSSI-CSPN-2025/16** le 17 novembre 2025, valable jusqu'au 17 novembre 2028. KeePassXC est sous GPLv3 **[lu]** https://keepassxc.org/audits/
  - Le BSI allemand a aussi financé un audit de code de KeePass 2.x : aucune faille moyenne, haute ni critique **[lu, page KeePass]**.
  - **Formulation juste** : « KeePass (version 2.10, 2011) et KeePassXC (version 2.7.9, 2025) ont obtenu une certification de sécurité de premier niveau (CSPN) de l'ANSSI ; une certification porte sur une version précise, pas sur le logiciel pour toujours. »
- **Bitwarden.**
  - Le code des clients est sous **GPL v3**, sauf le dossier `/bitwarden_license`, qui est sous « Bitwarden License v1.0 » **[lu]** https://raw.githubusercontent.com/bitwarden/clients/main/LICENSE.txt
  - C'est donc un logiciel majoritairement libre, avec une partie sous licence propre.

### 1.6 Recherche en sécurité utilisable

- **Anne Adams et M. Angela Sasse, « Users Are Not The Enemy »**, *Communications of the ACM* 42(12), décembre 1999, p. 40-46 **[lu]** https://tlseminar.github.io/docs/usersnotenemy.pdf
  - Questionnaire en ligne, 139 réponses.
  - Les services de sécurité voient l'utilisateur au mieux comme un risque, « at worst, they are the enemy within ».
  - Les politiques de changement fréquent « reduce the overall password security in an organization ». Les personnes concernées « produce less secure password content […] and disclose their passwords more frequently ».
  - Conclusion : traiter les utilisateurs « as partners ».
  - Angela Sasse est une pionnière de la sécurité utilisable (UCL).
- **Lorrie Faith Cranor** (Carnegie Mellon, alors technologue en chef de la FTC), « Time to rethink mandatory password changes », FTC, 2 mars 2016 **[lu]** https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2016/03/time-rethink-mandatory-password-changes
  - Elle cite l'étude de l'UNC : environ 10 000 comptes avec changement tous les 3 mois. Connaître l'ancien mot de passe permettait de deviner le nouveau en moins de 5 essais pour 17 % des comptes, et pour 41 % hors ligne.
  - Recommandation : changer de mot de passe en cas de compromission, sinon miser sur la longueur, le hachage lent et la double authentification.
- **Équipe CMU (Cranor, Bauer, Christin et al.)**, « Helping Users Create Better Passwords », *;login:* (USENIX), décembre 2012 **[lu]** https://www.usenix.net/system/files/login/articles/login1212_ur.pdf
  - Plus de 12 000 participant·es recruté·es sur Mechanical Turk.
  - Politique « basic16 » : au moins 16 caractères, sans autre règle. Politique « comprehensive8 » : 8 caractères avec les 4 classes et un contrôle dictionnaire.
  - « with one trillion guesses, only around half as many basic16 passwords were cracked as in comprehensive8 ».
  - Les participant·es basic16 ont eu besoin de moins d'essais, ont moins réutilisé et ont exprimé moins de frustration.
- **Article fondateur** : Komanduri, Shay, Kelley, Mazurek, Bauer, Christin, Cranor, Egelman, « Of passwords and people », CHI 2011 **[méta]** (notice Semantic Scholar, DOI 10.1145/1978942.1979321).

### Réserves et points contestés (§ 1)

- **Les seuils divergent : CNIL 80 bits, ANSSI 65 à 100 bits selon la sensibilité, NIST 15 caractères sans calcul d'entropie.** Il faut présenter des fourchettes, pas un chiffre magique.
- **« 7 mots » (CNIL) contre « 6 mots » (EFF).**
  - La CNIL ne précise pas la taille du dictionnaire. Ses 7 mots correspondent à environ 11,4 bits par mot, soit une liste d'environ 2 700 mots (calcul).
  - La liste EFF de 7 776 mots atteint environ 77 bits avec 6 mots.
- **Les temps de cassage dépendent entièrement des hypothèses** (matériel, fonction de hachage, mot de passe aléatoire ou non). Les « tableaux » commerciaux (Hive Systems) sont des ordres de grandeur.
- **Divergence sur la classification de NIST SP 800-63-4** : date de juillet 2025 (CSRC) ou août 2025 (diaporama de présentation). La version finale est datée du 31/07/2025.
- **L'ANSSI maintient une expiration de 1 à 3 ans pour les comptes à privilèges, et la CNIL un renouvellement périodique pour les administrateurs.** On ne peut donc pas dire « plus jamais de renouvellement » sans nuance.

---

## 2. Fuites de données et credential stuffing

### 2.1 Have I Been Pwned (Troy Hunt)

- **État au 8 novembre 2026** (API publique `/api/v3/breaches` et page d'accueil) : **1 049 fuites** recensées, **17 847 746 941 comptes**. **[lu]** https://haveibeenpwned.com/api/v3/breaches et https://haveibeenpwned.com/
  - Ajouts les plus récents : « Harvard » (3/11/2026), « AfD » (27/10/2026), « AssuranceRetraite » (20/10/2026).
- **Plus gros lot** : « Synthient Credential Stuffing Threat Data » (ajout du 6/11/2025), avec **1 957 476 021** adresses.
  - Description : listes de credential stuffing agrégées en 2025, « used by attackers to compromise other, unrelated accounts of victims who have reused their passwords ».
  - Il contenait aussi 1,3 milliard de mots de passe uniques, ajoutés à Pwned Passwords **[lu, champ Description de l'API]**.
- **Fuites françaises indexées** (exemples) :
  - Free (FreeMobile, fuite du 17/10/2024) : 13,9 millions d'adresses, avec IBAN ;
  - Bouygues Telecom (fuite du 4/08/2025) : 5,7 millions, avec IBAN ;
  - « FrenchCitizens » (2024) : 28,4 millions ;
  - Pass'Sport (décembre 2025) : 6,4 millions ;
  - Boulanger, Cultura, Sport 2000, Autosur, Gîtes de France… **[lu, API]**.

### 2.2 Pwned Passwords et le k-anonymat

- **Fonctionnement** **[lu]** https://haveibeenpwned.com/API/v3 :
  1. le navigateur calcule le SHA-1 du mot de passe **localement** ;
  2. il n'envoie que les **5 premiers caractères hexadécimaux** (`GET https://api.pwnedpasswords.com/range/{5 caractères}`) ;
  3. le serveur renvoie tous les suffixes qui commencent ainsi (environ 800), avec le nombre d'occurrences ;
  4. la comparaison se fait **chez l'utilisateur**.
- **Options** : `Add-Padding: true` complète la réponse à 800-1 000 lignes, avec de fausses entrées à compte 0, pour qu'on ne puisse rien déduire de la taille. Il existe aussi un mode NTLM.
- **Troy Hunt, 30 juin 2022** **[lu]** https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/ :
  - 16⁵ = 1 048 576 préfixes possibles ;
  - « 5 characters was the sweet spot » : avec 4 caractères, la réponse serait 16 fois plus grosse ; avec 6, l'anonymat serait plus faible ;
  - SHA-1 convient ici parce qu'on ne cherche pas à se protéger des collisions. Mais SHA-1 « reste inadapté » pour *stocker* des mots de passe ;
  - le modèle a été conçu avec Cloudflare (version 2 de Pwned Passwords, début 2018 d'après le décompte du billet).

### 2.3 Grandes fuites en France (2024-2026)

- **Viamedis et Almerys** (tiers payant santé), attaque fin janvier 2024 :
  - **plus de 33 millions de personnes** touchées : état civil, date de naissance, numéro de sécurité sociale, assureur, garanties ;
  - pas de coordonnées bancaires ni de données médicales ;
  - la CNIL a ouvert une enquête (7 février 2024) **[lu]** https://www.cnil.fr/fr/violation-de-donnees-de-deux-operateurs-de-tiers-payant-la-cnil-ouvre-une-enquete-et-rappelle-aux
  - **Je n'ai trouvé aucune sanction publiée** au 8/11/2026 (non mentionnée dans le bilan 2025 de la CNIL, voir ci-dessous).
- **France Travail**, intrusion signalée le 8 mars 2024 :
  - « susceptible de toucher 43 millions de personnes » : inscrit·es et ancien·nes inscrit·es sur 20 ans, et titulaires d'un espace candidat ;
  - données : nom, numéro de sécurité sociale, identifiant, coordonnées ; pas de mot de passe ni de coordonnées bancaires ;
  - source : CNIL, 13 mars 2024 **[lu]** https://www.cnil.fr/fr/france-travail-la-cnil-enquete-sur-la-fuite-de-donnees-et-donne-des-conseils-pour-se-proteger
  - **Sanction : 5 millions d'euros**, décision du 22 janvier 2026 **[lu]** https://www.cnil.fr/fr/violation-de-donnees-sanction-5millions-france-travail. Constats :
    - prise de contrôle de comptes de conseiller·es CAP EMPLOI par ingénierie sociale ;
    - authentification « pas suffisamment robuste » ;
    - journalisation insuffisante ;
    - habilitations trop larges.
  - Injonction assortie d'une astreinte de 5 000 € par jour ; injonction **clôturée le 23 septembre 2026** sans liquidation de l'astreinte **[extrait]** https://www.cnil.fr/fr/cloture-injonction-france-travail
- **Free et Free Mobile**, intrusion d'octobre 2024 :
  - **24 millions de contrats**, avec IBAN pour une partie ;
  - **Sanctions : 27 M€ (Free Mobile) + 15 M€ (Free) = 42 M€**, décisions annoncées le 13 janvier 2026 **[lu]** https://www.cnil.fr/fr/sanction-free-2026 ;
  - constats : authentification VPN pas assez robuste, détection d'anomalies « inefficaces », courriel d'information incomplet (art. 34), conservation excessive des données d'anciens abonné·es.
- **Bilan des sanctions 2025 de la CNIL** (9 février 2026) **[lu]** https://www.cnil.fr/fr/bilan-sanctions-2025 :
  - 83 sanctions ;
  - 14 organismes sanctionnés pour manquement à la sécurité en procédure simplifiée, notamment pour « l'utilisation de mots de passe insuffisamment robustes ou l'usage de comptes partagés ».
- **Autres fuites de 2025** (Bouygues Telecom, Fédération française de tir en octobre 2025, etc.) :
  - le rapport Cybermalveillance 2025 relie ces fuites à des escroqueries ciblées, voire à des violences physiques ;
  - exemple : tentatives de vol chez des licencié·es de tir après la fuite de la FFTir ;
  - **[lu]** https://www.cybermalveillance.gouv.fr/medias/2026/03/RA_2025_Cybermalveillance_gouv_fr.pdf, p. 48-49.

### 2.4 Credential stuffing

- **Définition** : on rejoue des couples identifiant et mot de passe volés sur un site pour entrer sur d'autres sites, en comptant sur la réutilisation.
- **Google, 17 mai 2019** : « Most attacks stem from automated bots with access to third-party password breaches » **[lu]** https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html
- **HIBP** : le lot Synthient décrit exactement cet usage (voir § 2.1).
- **Cybermalveillance (rapport 2025)** : certains chantages par courriel citent un vrai mot de passe de la victime « issu d'une autre fuite de données pour renforcer la crédibilité de la menace » **[lu, p. 43]**.
- **Défenses** :
  - un mot de passe unique par site, donc un gestionnaire ;
  - la double authentification ;
  - côté site, la vérification contre les listes compromises (NIST) et la limitation des essais.

### Réserves et points contestés (§ 2)

- **Le chiffre « 43 millions » pour France Travail était une estimation initiale « à confirmer »** (CNIL, mars 2024). La décision de 2026 ne donne pas de chiffre exact.
- **Les compteurs HIBP comptent des comptes (adresses) par fuite.** Une même personne apparaît dans plusieurs fuites, donc 17,8 milliards ≠ 17,8 milliards de personnes.
- **Pas d'information publique trouvée sur une sanction contre Viamedis ou Almerys** : à revérifier avant publication.

---

## 3. Double authentification et clés d'accès (passkeys)

### 3.1 Facteurs

Les trois familles classiques sont décrites par l'ANSSI **[lu, guide § 2]** :

- **connaissance** : mot de passe, code ;
- **possession** : téléphone, clé physique, carte à puce ;
- **inhérence** : biométrie.

L'authentification multifacteur combine des facteurs de familles **différentes**.

### 3.2 Les faiblesses du SMS

- **ANSSI**, recommandation R8 : ne pas utiliser le SMS **[lu]**.
  - « La majorité des SMS transitent grâce à l'ensemble de protocoles de signalisation SS7 […] peuvent être aisément interceptés ».
  - **SIM swapping** : l'attaquant se fait passer pour la victime auprès de l'opérateur pour obtenir une nouvelle carte SIM.
  - Le guide cite aussi la réattribution de numéros.
  - Pondération : « En l'absence d'alternative », le code par SMS reste un outil pour « limiter ou détecter » les fraudes.
- **NIST SP 800-63B-4** **[lu]** :
  - le réseau téléphonique (SMS, voix) est le seul « restricted authenticator » (§ 3.2.9, 3.1.3.3) ;
  - les vérificateurs doivent proposer une alternative à tous et toutes ;
  - ils doivent tenir compte d'indicateurs comme « device swap, SIM change, number porting ».
- **Cas SS7 réel** : en Allemagne, en janvier 2017, des codes mTAN bancaires ont été interceptés via le réseau d'un opérateur étranger. O2-Telefónica l'a confirmé à la *Süddeutsche Zeitung* **[extrait]** https://www.helpnetsecurity.com/2017/05/04/ss7-vulnerabilities-exploited/
- **États-Unis (FBI IC3 2025)** : 971 plaintes pour SIM swap, 17,4 M$ de pertes déclarées **[lu, rapport IC3]**.
- **Le SMS vaut mieux que rien.** L'étude Google de 2019 **[lu]** montre qu'un code SMS vers un numéro de récupération a bloqué :
  - 100 % des robots ;
  - 96 % du hameçonnage de masse ;
  - 76 % des attaques ciblées.
  - Les invites sur l'appareil font mieux : 100 %, 99 % et 90 %.

### 3.3 Applications TOTP

Codes à 6 chiffres calculés localement à partir d'un secret partagé et de l'heure (RFC 6238, référence à vérifier dans le texte si on la cite).

- **Avantage** : pas de SMS, donc pas de SIM swap.
- **Limite** : le code peut être saisi sur un faux site et relayé en temps réel par l'attaquant. Le TOTP n'est donc **pas** résistant au hameçonnage.
- Je n'ai pas ouvert de source primaire spécifique au TOTP : à compléter avec le RFC 6238 si nécessaire.

### 3.4 Clés physiques FIDO2 : l'étude Google de 2019

Kurt Thomas et Angelika Moscicki, avec NYU et UC San Diego, étude sur un an présentée à The Web Conference **[lu]** https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html

- Citation : « zero users that exclusively use security keys fell victim to targeted phishing during our investigation ».
- Sans numéro de récupération, les questions de connaissance protègent mal contre le hameçonnage (« as low as 10% »).
- Frein pratique : 38 % des utilisateur·rices n'avaient pas leur téléphone sous la main lors d'un défi.

### 3.5 Passkeys

- **Principe** :
  1. à l'inscription, l'appareil crée une **paire de clés** ; le site ne garde que la clé publique ;
  2. à la connexion, l'appareil signe un défi avec la clé privée, qui ne quitte pas l'appareil ou le trousseau synchronisé ;
  3. chaque identifiant est **lié au domaine du site** : un faux site ne peut pas demander la signature pour le vrai domaine. C'est ce qui le rend résistant au hameçonnage.
- **W3C WebAuthn Level 3**, **Recommandation W3C du 25 août 2026** **[lu]** https://www.w3.org/TR/webauthn-3/ :
  - « public key credentials, each scoped to a given WebAuthn Relying Party » ;
  - cas d'usage « phishing-resistant sign in using multi-device credentials (commonly referred to as synced passkeys) » ;
  - Level 2 datait du 8 avril 2021.
- **NIST SP 800-63B-4** : les « syncable authenticators » sont admis, avec des clés « inherently exportable » (§ 3.2.13 et annexe B) **[lu, extrait de la page]**.
- **Adoption, état au 15 octobre 2026.**
  - FIDO Alliance, « Passkey Index 2026 » **[lu]** https://fidoalliance.org/wp-content/uploads/2026/10/Passkey-Index-October-2026.pdf :
    - 15 services participants : Amazon, Google, Microsoft, PayPal, TikTok, WhatsApp, NTT DOCOMO, KDDI, LY Corporation, Mercari, Abanca, Banesco, CVS, JPMorgan Chase, Shopify ;
    - données compilées le 21/09/2026 ;
    - **36 % des connexions réussies** se font par passkey, contre 26 % en 2025 ;
    - taux de réussite de 93 % contre 78 % pour le mot de passe avec MFA classique ;
    - connexions environ 3 fois plus rapides.
  - FIDO « estime » **7 milliards** de passkeys en usage, contre 5 milliards annoncés en mai 2026 **[lu]** https://fidoalliance.org/7-billion-passkeys-and-counting-the-next-chapter-of-passwordless-authentication/ ; mai : **[extrait]** https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/
  - Le **NCSC britannique** recommande désormais les passkeys **[extrait]** https://www.ncsc.gov.uk/collection/annual-review-2026/building-strong-foundations/passkeys-beyond-passwords

### 3.6 Fatigue des notifications (« MFA fatigue ») : Uber, septembre 2022

Communiqué d'Uber des 15-16 septembre 2022 **[lu]** https://www.uber.com/newsroom/security-update/

- Le compte d'un prestataire externe a été compromis. Son mot de passe avait probablement été acheté sur le dark web après l'infection de son appareil personnel par un logiciel malveillant.
- L'attaquant a multiplié les demandes de validation. Le prestataire a fini par en accepter une.
- Uber attribue l'attaque à un groupe lié à Lapsus$.
- **Parade** : la saisie d'un nombre affiché (« number matching »), ou mieux FIDO2 et les passkeys.
- La fiche de la CISA sur le number matching n'a pas pu être ouverte (403).

### Réserves et points contestés (§ 3)

- **Les chiffres d'adoption des passkeys viennent de la FIDO Alliance**, consortium industriel promoteur de la technologie.
  - Les « 7 milliards » sont une estimation non auditée.
  - L'échantillon du Passkey Index change d'une année à l'autre (9 puis 15 participants), donc les comparaisons sont « directionnelles », selon FIDO elle-même.
- **Les passkeys synchronisées** dépendent de la sécurité du compte du fournisseur (Apple, Google, gestionnaire). La récupération de compte reste un point faible.
- **Le chiffre « 100 % » pour les clés de sécurité** vient de la communication Google. Le texte exact parle de **zéro victime de hameçonnage ciblé** parmi les utilisateur·rices *n'utilisant que* des clés.

---

## 4. Hameçonnage et arnaques

### 4.1 Cybermalveillance.gouv.fr : rapport d'activité 2025 (publié fin mars 2026)

**[lu]** https://www.cybermalveillance.gouv.fr/medias/2026/03/RA_2025_Cybermalveillance_gouv_fr.pdf

- **Volume** : **504 000 demandes d'assistance en ligne** en 2025, dont 93 % de particuliers. 471 798 particuliers ont été aidés via 17Cyber.
- **Classement des menaces pour les particuliers** :

| Rang | Menace | Part des assistances | Évolution sur 2024 |
|---|---|---|---|
| 1 | Hameçonnage | 32,9 % | +71 % |
| 2 | Piratage de compte | plus de 11 % (11,6 % sur le graphique) | -2 % selon le texte |
| 3 | Violations de données | 6,6 % | +107 % |
| 4 | Faux support technique | 5,9 % | +39 % |
| — | Cyberharcèlement | 18 000 demandes | +134 % |
| — | **Faux conseiller bancaire** | 15 000 demandes, environ 5 % | **+159 %** |
| 7 | Virus | | +8 % |
| — | Fraude au virement (faux RIB) | 13 000 | +196 % |
| 9 | Fraude à la carte bancaire | | +96 % |
| 10 | Usurpation de numéro de téléphone | 7 000 | +517 % |

- **Faux placements financiers** : 6 000 demandes, +277 %, 6ᵉ menace pour les particuliers selon la page dédiée.
- **Hameçonnage, tous publics** : 108 000 demandes, +70 %, un tiers des assistances. Formes les plus vues en 2025 :
  - **faux colis**, avec un « réacheminement » à 1-2 €. Mondial Relay est la marque la plus usurpée. Variante de l'été 2025 : « Bonjour, vous êtes chez vous ? ». Si on répond, la messagerie considère la conversation comme légitime et active les liens ;
  - fausses amendes (ANTAI) ;
  - faux péages en « flux libre » (Vinci ULYS, SANEF) ;
  - fausses commandes Amazon personnalisées avec l'IBAN des destinataires, probablement issu des fuites ;
  - fausses cartes Vitale ;
  - fausses convocations judiciaires.
- **« Coucou papa/maman »** : ces SMS de l'enfant qui a un problème de téléphone « s'installent dans la durée », avec des préjudices de « plusieurs milliers d'euros » **[p. 44]**.
- **Faux conseiller bancaire** **[p. 54]** :
  - hameçonnage préalable ;
  - **faux numéro d'opposition** (« ce n'est plus l'escroc qui contacte la victime mais bien cette dernière qui l'appelle ») ;
  - exploitation des IBAN fuités ;
  - compte « de secours » créé pendant l'appel ;
  - WhatsApp avec le logo de la banque et **partage d'écran** ;
  - récupération de la carte à domicile par un faux coursier.
  - Rappel : aucun agent « n'appellera jamais […] pour leur demander leurs identifiants, codes ou mots de passe ».
- **IA générative** : utilisée pour les « traductions automatisées d'hameçonnage en plusieurs dizaines de langues, textes et visuels générés par IA ». En revanche, « les campagnes malveillantes de masse entièrement pilotées par IA ne sont pas attestées à ce stade » **[p. 34]**.
- **Usurpation de numéro** : elle persiste malgré la loi « Naegelen » et les mesures du 1ᵉʳ janvier 2026 (numéro masqué pour les appels non authentifiés). L'Arcep a ouvert une enquête **[p. 57]**.
- **Arnaque au CPF** : elle **n'apparaît plus** dans le rapport 2025. Le contexte :
  - la loi n° 2022-1587 du 19 décembre 2022 interdit le démarchage des titulaires du CPF (téléphone, SMS, courriel, réseaux sociaux) **[extrait]** https://www.lemondedudroit.fr/social/306-relations-individuelles-de-travail/83875-lutte-contre-les-abus-et-les-fraudes-au-cpf-la-loi-est-publiee.html ;
  - depuis le 25 octobre 2022, les achats sur Mon Compte Formation passent par FranceConnect+ **[extrait]** https://www.transformation.gouv.fr/files/presse/CP_Compte_personnel_formation_Renforcement_securite_franceconnect.pdf
  - C'est un bon exemple d'arnaque qui recule grâce à la loi et à une authentification plus forte.

### 4.2 Reconnaître un hameçonnage, et ce qui ne marche plus

- **Indices qui restent valables** :
  - urgence ou menace (amende majorée, compte bloqué) ;
  - demande de payer une petite somme ;
  - lien vers un domaine qui ressemble au vrai sans l'être ;
  - demande de codes ou d'identifiants ;
  - canal inhabituel (WhatsApp « de la banque ») ;
  - demande de rappeler un numéro fourni dans le message.
  - **Bon réflexe** : passer par l'appli ou par l'adresse tapée soi-même, jamais par le lien.
- **Ce qui ne marche plus : les fautes d'orthographe.**
  - Heiding, Schneier, Vishwanath et al., arXiv 2412.00586 (30/11/2024) **[lu]** https://arxiv.org/abs/2412.00586, avec 101 participant·es :
    - courriels d'hameçonnage ciblé entièrement générés par IA : **54 % de clics**, comme ceux écrits par des expert·es humain·es (54 %), contre 12 % pour le groupe témoin ;
    - les profils collectés par l'IA étaient exacts et utiles dans 88 % des cas.
  - Une version revue par les pairs est parue dans *Expert Systems with Applications* (2026) **[extrait]**.
  - Avec la traduction automatique, citée par Cybermalveillance, le critère « fautes » est caduc.
- **Domaines qui ressemblent et homographes IDN.**
  - **Xudong Zheng, 14 avril 2017** **[lu]** https://www.xudongz.com/blog/2017/idn-phishing/ :
    - il a enregistré `xn--80ak6aa92e.com`, qui s'affichait « аррӏе.com » entièrement en **cyrillique** ;
    - le filtre des navigateurs bloquait le mélange d'écritures, pas un domaine écrit dans une seule écriture étrangère ;
    - « fixed as of Chrome 59 », mais non corrigé dans Firefox à l'époque.
  - **Politique actuelle de Chrome** **[lu]** https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md :
    - affichage en punycode si l'étiquette mélange certaines écritures (« Latin, Cyrillic or Greek characters cannot be mixed with each other ») ;
    - affichage en punycode aussi si l'étiquette contient des caractères interdits, entre autres.
  - **Pour les exemples pédagogiques**, n'utiliser que des domaines `.example` (RFC 6761).

### 4.3 Que faire si on s'est fait avoir (France)

- **17Cyber** (17cyber.gouv.fr) :
  - lancé fin 2024 ; « Le lancement du 17Cyber (déc. 2024) » d'après le rapport Cybermalveillance **[lu, p. 31]** ;
  - communiqué conjoint ministère de l'Intérieur et Cybermalveillance daté du 17 décembre 2024 **[extrait]** https://www.cybermalveillance.gouv.fr/medias/2024/12/20241216_CP17Cyber.pdf ;
  - service en ligne 24 h/24 et 7 j/7, diagnostic, mise en relation avec un·e policier·e ou un·e gendarme par messagerie instantanée, orientation vers des prestataires **[lu, rapport p. 6-7]**.
- **Perceval** : signalement en ligne d'une fraude à la carte bancaire **quand on a encore la carte** (achats en ligne). Il faut avoir fait opposition avant **[extrait]** https://www.lesclesdelabanque.com/particulier/perceval-fraude-carte-bancaire/
  - Une source indique une nouvelle version sur masecurite.interieur.gouv.fr depuis le 14 octobre 2026, à vérifier.
- **33700** : transférer le SMS indésirable tel quel ; pour un appel, envoyer « spam vocal » suivi du numéro. Le service est géré par l'association des opérateurs (AF2M). Le signalement ne bloque pas immédiatement l'expéditeur **[extrait]** https://www.economie.gouv.fr/dgccrf/sms-et-appels-indesirables-le-33-700-facilite-le-signalement-des-numeros-frauduleux (403 au robot).
- **Réflexes communs** : faire opposition auprès de la banque, changer les mots de passe (en commençant par la messagerie), activer la double authentification, garder les preuves, porter plainte.

### 4.4 États-Unis : FBI IC3, rapport 2025 (publié en avril 2026)

**[lu]** https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf

- **Volume** : 1 008 597 plaintes, **20,877 milliards de dollars** de pertes déclarées (+26 % sur 2024). Les plus de 60 ans totalisent 201 266 plaintes et 7,7 Md$.
- **Hameçonnage et usurpation** : 191 561 plaintes. C'est la catégorie n° 1 en nombre, mais seulement 216 M$ de pertes directes.
- **« Investment »** : 72 984 plaintes, **8,65 Md$**, n° 1 en pertes.
  - La fraude à l'investissement en cryptomonnaies représente **7,2 Md$**.
  - Elle est « largely perpetrated by organized criminal enterprises based in Southeast Asia using victims of human trafficking as forced labor ».
- **Autres catégories** : compromission de messagerie d'entreprise (BEC) 3,05 Md$ ; faux support technique 2,13 Md$.
- **Nouveauté** : 22 364 plaintes « AI Related », 893 M$.

### 4.5 Asie du Sud-Est : centres d'arnaques (« pig butchering ») et traite

- **HCDH (OHCHR), 29 août 2023**, relayé par ONU Info **[lu]** https://news.un.org/en/story/2023/08/1140187 :
  - « at least 120,000 people across Myanmar and another 100,000 in Cambodia **may be held** in situations where they are forced to execute lucrative online scams » ;
  - le Laos, les Philippines et la Thaïlande sont aussi des pays de destination ou de transit ;
  - Volker Türk : « They are victims. They are not criminals. »
- **ONUDC (UNODC), rapport « Inflection Point », 21 avril 2025** **[lu]** https://www.unodc.org/unodc/frontpage/2025/April/cyberfraud-in-the-mekong-reaches-inflection-point--unodc-reveals.html :
  - « hundreds of industrial-scale scam centres generating just under US $40 billion in annual profits » ;
  - déplacement des centres sous la pression policière (Cambodge, Laos, Myanmar, Philippines) ;
  - expansion vers l'Afrique, l'Asie du Sud, le Moyen-Orient et le Pacifique.
- **L'ONUDC a publié en 2026** « Trafficked to Scam: South Asian Responses » **[extrait]** https://www.unodc.org/documents/human-trafficking/2026/Publications/UNODC_Trafficked_to_Scam.pdf. Non lu.
- **Démantèlements de 2025-2026** :
  - raid sur KK Park (Myanmar) en octobre 2025 ;
  - le Cambodge annonce avoir fermé environ 80 % des centres (mars 2026) ;
  - plus de 5 300 personnes encore piégées près de la frontière thaïlandaise selon une ONG (juin 2026) ;
  - tout cela vient d'extraits de presse **[extrait]** et doit être vérifié avant publication.
- **Principe du « pig butchering »**, à expliquer sans mode d'emploi :
  - premier contact par SMS « erroné », réseaux sociaux ou appli de rencontre ;
  - relation de confiance sur des semaines ;
  - fausse plateforme d'investissement qui affiche des gains fictifs ;
  - « frais » et « taxes » exigés au moment de retirer l'argent.
  - La description de l'IC3 2025 est conforme **[lu, p. 12]**.

### 4.6 Afrique : mobile money et SIM swap

- **INTERPOL, Africa Cyberthreat Assessment Report 2025** (4ᵉ édition, mai 2025) **[lu]** https://www.interpol.int/content/download/23094/file/INTERPOL_Africa_Cyberthreat_Assessment_Report_2025.pdf :
  - Afrique de l'Ouest : « Mobile money fraud, including SIM swap scams and telecom impersonation, is widespread » ;
  - Afrique de l'Est : « SIM swap fraud has notably increased in Uganda and Tanzania […] often through deception or collusion with insiders » ;
  - Afrique australe : deepfakes vocaux de dirigeant·es pour le vishing (2024) ;
  - l'hameçonnage reste la menace la plus répandue.
- **INTERPOL, rapport 2026** (juin 2026) **[extrait]** https://www.interpol.int/en/News-and-Events/News/2026/INTERPOL-report-finds-AI-linked-to-more-than-half-of-cybercrime-in-Africa :
  - IA liée à 55 % de la cybercriminalité signalée ;
  - pertes passées de 192 à 484 M$ depuis 2024 ;
  - **Kenya** : hausse de 327 % des enquêtes pour SIM swap en 2025, plus de 123 000 cartes SIM frauduleuses, environ 3,8 M$ (491,6 M KSh) détournés des portefeuilles mobiles.
  - Source en cascade : Communications Authority of Kenya, citée par Capital FM puis par INTERPOL. **À vérifier dans le PDF**, qui était inaccessible (403).
- **GSMA, State of the Industry Report on Mobile Money 2026** **[extrait]** :
  - 2,3 milliards de comptes enregistrés, 593 millions actifs sur 30 jours ;
  - la fraude est citée comme un frein à l'usage ;
  - fraude à l'identité la plus fréquente.
- **Nigeria (NIBSS)** **[extrait]** https://nairametrics.com/2026/06/19/bank-customers-lose-n134-48-billion-to-fraud-in-six-years-cbn/ :
  - pertes à la fraude de 52,26 Md₦ en 2024, dont un seul cas interne d'environ 30 Md₦ ;
  - l'ingénierie sociale est la technique la plus fréquente ;
  - le canal mobile était le plus « rentable » pour les fraudeurs en 2023.
  - **Chiffres de presse** : citer de préférence le rapport NIBSS lui-même.

### 4.7 Inde : fraude UPI et « arrestation numérique »

- **Fraude UPI**, réponse écrite du ministre d'État aux Finances Pankaj Chaudhary à la Lok Sabha, 15 décembre 2025, rapportée par l'agence IANS **[lu]** https://ianslive.in/upi-frauds-worth-rs-805-crore-witnessed-this-fiscal-so-far-minister--20251215175703 :

| Exercice | Incidents | Montant |
|---|---|---|
| 2023-24 | 13,42 lakh (1,34 million) | 1 087 crore ₹ |
| 2024-25 | 12,64 lakh | 981 crore ₹ |
| 2025-26 (jusqu'à novembre) | 10,64 lakh | 805 crore ₹ |

- **Contexte** : selon le PIB, « Curbing Cyber Frauds in Digital India », 8 octobre 2025 **[lu]** https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/oct/doc2025108660701.pdf :
  - incidents de cybersécurité passés de 10,29 lakh (2022) à 22,68 lakh (2024) ;
  - plus de 9,42 lakh cartes SIM et 263 348 IMEI bloqués ;
  - numéro d'aide **1930** ;
  - indicateur de risque « Financial Fraud Risk Indicator » du ministère des Télécoms.
- **« Digital arrest »** :
  - Des escrocs se font passer en visioconférence pour la police, le CBI, les stupéfiants ou la RBI, « placent » la victime en « arrestation numérique » et exigent de l'argent.
  - Le **27 octobre 2024** (Mann Ki Baat, 115ᵉ épisode), le Premier ministre a rappelé qu'aucune agence n'interroge par téléphone ou par vidéo et ne réclame d'argent. Mantra : « Stop – Think – Take Action » (« Ruko, Socho aur Action lo »), puis appeler le 1930 **[extrait, presse indienne]** https://www.theweek.in/news/india/2024/10/27/modi-raises-digital-arrest-scam-in-mann-ki-baat-lakhs-of-bank-accounts-blocked-says-pm.html
  - Mesures de l'I4C (ministère de l'Intérieur) **[extrait]** https://www.pib.gov.in/PressReleasePage.aspx?PRID=2110809&reg=3&lang=2 :
    - plus de 3 962 identifiants Skype et 83 668 comptes WhatsApp liés à l'« arrestation numérique » bloqués (mars 2025) ;
    - le NCRB ne tient pas de statistique séparée pour ce type d'arnaque.

### 4.8 Deepfakes vocaux et vidéo : Arup, Hong Kong (janvier 2024)

- **Police de Hong Kong**, rapportée par *The Standard* le 4 février 2024 **[lu]** https://www.thestandard.com.hk/news/article/213122/HKs-first-deepfake-video-conference-scam-involving-HK200-million :
  - un·e employé·e de la branche hongkongaise est invité·e à une visioconférence avec le « directeur financier » de Londres et d'autres collègues, tous générés par deepfake ;
  - 15 virements vers 5 comptes locaux, **200 millions HK$** (environ 25 M$US) ;
  - conseils de la police : poser des questions de vérification, se méfier dès qu'il y a un transfert d'argent.
- **Arup** a confirmé en mai 2024 être la victime (« We can confirm that fake voices and images were used »).
  - Son DSI Rob Greig parle de « technology-enhanced social engineering » : aucun système n'a été compromis **[extrait]** https://www.weforum.org/stories/2025/02/deepfake-ai-cybercrime-arup/ (403).
- **Défense** : vérifier par un **autre canal** connu (rappeler un numéro qu'on a déjà), double validation des virements, mot de code familial ou d'équipe.
- **IC3 2025** : les arnaques « de détresse » (fausses voix de proches, clonage vocal) sont citées dans la section IA **[lu]**.

### Réserves et points contestés (§ 4)

- **Rapport Cybermalveillance** :
  - le piratage de compte est noté « +11,6 % » dans l'encadré mais « -2 % » dans le texte : incohérence interne ;
  - le faux support technique est 3ᵉ ou 4ᵉ selon les versions ;
  - les chiffres comptent des **recherches d'assistance**, pas des victimes avérées.
- **Les chiffres sur les centres d'arnaques sont des estimations** (« may be held », « credible sources »). Le HCDH souligne qu'ils sont difficiles à établir. Les profits (« just under 40 Md$ ») sont une estimation de l'ONUDC. Les données de 2025-2026 sur les démantèlements viennent surtout de la presse et des autorités concernées, dont le Cambodge et la junte birmane, qui ne sont pas neutres.
- **Pertes de l'IC3** : ce sont des pertes **déclarées**, donc à la fois sous-estimées (non-déclaration) et non vérifiées une à une.
- **Chiffres indiens** : la source lue est une dépêche (IANS) qui reprend une réponse parlementaire. Il faudrait le texte de la Lok Sabha. Les chiffres « 36,45 lakh » du document du PIB sont ambigus (cas ou montant ?) : ne pas les reprendre.
- **Kenya, 327 %** : chaîne de citations indirecte ; à vérifier dans le rapport INTERPOL 2026.
- **Arup** : la confirmation de l'entreprise n'est connue que par des extraits (Guardian, CNN, WEF inaccessibles). La police n'a pas nommé l'entreprise.

---

## 5. Mythes à démonter

### « Le cadenas HTTPS veut dire que le site est fiable »

- **Faux.** HTTPS chiffre la connexion et garantit qu'on parle bien au détenteur du **nom de domaine**. Cela ne dit pas que ce détenteur est honnête.
- **APWG (rapport de tendances, 2018)** **[lu]** https://docs.apwg.org/reports/apwg_trends_report_q2_2018.pdf : « At the end of 2016, less than five percent of phishing sites were found on HTTPS infrastructure. By the second quarter of 2018, however, 35 percent of phishing attacks were hosted on Web sites that had HTTPS and SSL certificates ».
- **PhishLabs, contributeur de l'APWG** : près de 80 % au 2ᵉ trimestre 2020 **[extrait]** https://www.phishlabs.com/blog/apwg-two-thirds-phishing-sites-ssl-https
- **Ministère de l'Économie** : le cadenas « ne signifie pas que le site web lui-même est légitime » **[extrait]** https://www.economie.gouv.fr/particuliers/numerique-et-cybersecurite/comment-se-premunir-contre-lhameconnage
- **À retenir** : vérifier le **nom de domaine**, pas le cadenas.

### « Un mot de passe compliqué comme P@ssw0rd! est sûr »

- **Faux.** Les substitutions prévisibles (a→@, o→0, ! à la fin) sont les premières que testent les attaquants.
- Le NIST interdit d'imposer des règles de composition parce que les utilisateurs y répondent « in very predictable ways » **[lu, annexe A]**.
- xkcd 936 : « Tr0ub4dor&3 » ≈ 28 bits **[lu]**.
- CMU : 16 caractères sans règle résistent mieux, à mille milliards d'essais, que 8 caractères avec 4 classes **[lu, ;login: 2012]**.
- En outre, « password » figurait 3,6 millions de fois dans les fuites (NCSC 2019) **[lu]**.

### « Il faut changer son mot de passe tous les 3 mois »

- **Faux pour les comptes ordinaires.**
  - NIST : « SHALL NOT require subscribers to change passwords periodically » **[lu]**.
  - CNIL § 54 **[lu]**.
  - ANSSI R24 **[lu]**.
  - Adams et Sasse, 1999 **[lu]**.
  - Cranor, FTC 2016 : 17 % des nouveaux mots de passe devinés en moins de 5 essais à partir de l'ancien **[lu]**.
- **Vrai** : il faut changer **dès qu'il y a compromission**, et périodiquement pour les comptes d'administration (CNIL, ANSSI).

### « Je n'intéresse pas les pirates »

- **Faux.** La plupart des attaques sont automatisées et visent tout le monde.
  - Google : « Most attacks stem from automated bots with access to third-party password breaches » **[lu]**.
  - **93 %** des demandes d'aide à Cybermalveillance viennent de particuliers ; 7 particuliers sur 1 000 ont eu recours à l'assistance en 2025 **[lu]**.
  - Les données fuitées (IBAN, téléphone) se revendent et servent au faux conseiller bancaire ; le rapport parle d'un « marché mature » de la donnée personnelle **[lu, p. 41]**.
  - Un compte de messagerie piraté sert à piéger les contacts de la victime **[lu, p. 44]**.

### « Les Mac et les téléphones n'ont pas de virus »

- **Faux.**
  - **Apple** décrit elle-même trois couches de défense contre les logiciels malveillants sur macOS (Gatekeeper, Notarization, XProtect), dont XProtect pour « remediate malware that has managed to successfully execute » **[lu]** https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web
  - **Google** a empêché plus de **1,75 million** d'applications non conformes d'arriver sur Google Play en 2025 et a banni plus de 80 000 comptes de développeurs malveillants **[lu]** https://blog.google/security/keeping-google-play-android-app-ecosystem-safe-2025/
  - **Logiciels espions sur iPhone** (Pegasus) : la méthode d'analyse d'Amnesty International a été validée par le Citizen Lab le 18 juillet 2021 **[lu]** https://citizenlab.ca/amnesty-peer-review/
  - **Nuance** : ces systèmes sont plus cloisonnés, et la plupart des attaques sur téléphone passent par l'**arnaque** (SMS, faux appels, fausses applis) plutôt que par un « virus ».

### « Les messages d'hameçonnage sont pleins de fautes »

- **De moins en moins vrai.**
  - Cybermalveillance : traductions automatiques « en plusieurs dizaines de langues », textes générés par IA **[lu]**.
  - Heiding et al. : 54 % de clics pour l'hameçonnage ciblé entièrement automatisé par IA, autant que les expert·es humain·es **[lu]**.
  - De nombreuses campagnes copient des courriels officiels réels.
- **Critères qui restent valables** : l'urgence, la demande d'agir hors du canal habituel, le domaine.

### Réserves (§ 5)

- **Chiffres HTTPS** : je n'ai lu qu'un chiffre de l'APWG (35 %, 2018). Les chiffres plus récents (environ 80 %) ne sont connus que par des extraits.
- **Mac et mobile** : pas de statistique comparative neutre trouvée sur les infections. On s'en tient à des faits qualitatifs et sourcés.

---

## 6. Personnes à mettre en avant

- **M. Angela Sasse** (University College London) : « Users Are Not The Enemy » (1999), texte fondateur de la sécurité utilisable **[lu]**.
- **Anne Adams**, co-autrice de cet article **[lu]**.
- **Lorrie Faith Cranor** (Carnegie Mellon, technologue en chef de la FTC en 2016) : études sur les règles de mots de passe **[lu]**.
- **Michelle L. Mazurek**, co-autrice des études CMU **[lu, ;login:]**.
- **Angelika Moscicki**, co-autrice de l'étude Google de 2019 **[lu]**.
- **Volker Türk** (HCDH) : rappel que les personnes forcées à escroquer sont des victimes **[lu]**.
- **Piste non vérifiée** : chercheuses africaines ou indiennes sur la fraude au mobile money, à rechercher.

---

## 7. Idées d'animations interactives (100 % locales, aucune donnée envoyée)

1. **Le dé des phrases de passe.**
   - On lance 5 dés virtuels (`crypto.getRandomValues`) pour tirer un mot dans une liste embarquée de 7 776 mots en français (à construire, sous licence libre).
   - On voit l'entropie monter de 12,9 bits par mot. Un curseur choisit le scénario : en ligne à 1 000 essais/s, bcrypt hors ligne, hash rapide. Le temps maximal s'affiche avec ses hypothèses.
   - Message permanent : « ne tapez jamais votre vrai mot de passe ici ». Pas de champ de saisie libre, seulement des tirages.
2. **« Toto1, Toto2… » : pourquoi le changement forcé échoue.**
   - Un petit automate montre un attaquant qui connaît « Toto1 » et essaie les variantes évidentes.
   - On compare avec un mot de passe tiré au hasard. Source : Cranor 2016, ANSSI R24.
3. **Hameçonnage ou pas ?**
   - 10 faux SMS et courriels inspirés du rapport Cybermalveillance 2025 : colis à 1,99 €, amende ANTAI, péage en flux libre, « Coucou maman », faux numéro d'opposition.
   - Tous avec des domaines `.example` ou `.test` (par exemple `colis-suivi.example`) et des noms de marques fictifs.
   - Chaque réponse explique l'indice : urgence, domaine, canal. Une carte rappelle que l'absence de fautes ne prouve rien.
4. **Comment une passkey déjoue un faux site.**
   - Animation pas à pas : le vrai site `banque.example` et le faux `banque-securite.example`.
   - Avec un mot de passe, l'utilisateur le tape sur le faux site, qui le relaie.
   - Avec une passkey, l'authentificateur cherche une clé pour `banque-securite.example`, n'en trouve pas, et rien n'est signé.
   - Mêmes étapes avec un code TOTP, relayé en temps réel, pour montrer la différence.
5. **Le k-anonymat de Pwned Passwords.**
   - On tape un mot de passe d'exemple **imposé** (« soleil123 »…, pas de saisie libre). Le SHA-1 est calculé dans le navigateur (`crypto.subtle.digest`).
   - Les 5 premiers caractères sont surlignés : « voilà tout ce qui partirait sur le réseau ».
   - Une liste locale fictive d'environ 800 suffixes s'affiche, et la comparaison se fait sur l'appareil.
   - Aucune requête réseau. On affiche « 16⁵ = 1 048 576 tiroirs ».
6. **Hacher n'est pas chiffrer.**
   - On compare la base d'un site qui stocke « en clair », « SHA-1 sans sel » et « Argon2id avec sel ».
   - On montre que deux utilisateurs avec le même mot de passe ont des condensats différents grâce au sel.
   - Un chronomètre symbolique montre le coût par essai. Hachage réel local en SHA-256 ou SHA-1. Argon2 peut être simulé ou embarqué en WebAssembly servi par le site.
7. **L'homographe.**
   - On affiche côte à côte « apple.example » et « аррӏе.example » en cyrillique, puis le bouton « Voir comme le navigateur » révèle le punycode (calcul local avec `URL`).
   - Exemple fidèle à la démonstration de Xudong Zheng, mais avec un domaine `.example`.
8. **Le parcours d'une fuite.**
   - Frise interactive : une fuite sur le site A, puis la revente, puis le credential stuffing sur le site B (même mot de passe), puis le faux conseiller bancaire qui cite votre IBAN.
   - À chaque étape, la bonne défense : mot de passe unique, double authentification, raccrocher et rappeler la banque.
   - Exemples tirés des sanctions CNIL contre Free et France Travail.

---

## 8. Liste des sources par statut

**[lu]**

- **Recommandations sur les mots de passe**
  - ANSSI, guide 2021 : https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-authentification_multifacteur_et_mots_de_passe.pdf
  - CNIL, délibération 2022-100 : https://cnil.fr/sites/cnil/files/atoms/files/deliberation-2022-100-du-21-juillet-2022_recommandation-aux-mots-de-passe.pdf
  - CNIL, page pédagogique : https://cnil.fr/fr/mot-de-passe
  - NIST SP 800-63B-4 : https://pages.nist.gov/800-63-4/sp800-63b.html et https://pages.nist.gov/800-63-4/sp800-63b/passwords/
- **Entropie et stockage**
  - xkcd 936 : https://xkcd.com/936/
  - EFF : https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases
  - OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
  - Hive Systems : https://www.hivesystems.com/blog/are-your-passwords-in-the-green-2025
- **Recherche en sécurité utilisable**
  - USENIX ;login: : https://www.usenix.net/system/files/login/articles/login1212_ur.pdf
  - Adams et Sasse : https://tlseminar.github.io/docs/usersnotenemy.pdf
  - FTC, Cranor : https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2016/03/time-rethink-mandatory-password-changes
  - NCSC 2019 : https://www.ncsc.gov.uk/news/most-hacked-passwords-revealed-as-uk-cyber-survey-exposes-gaps-in-online-security
- **Gestionnaires de mots de passe**
  - KeePass : https://keepass.info/ratings.html
  - KeePassXC : https://keepassxc.org/audits/
  - Bitwarden : https://raw.githubusercontent.com/bitwarden/clients/main/LICENSE.txt
- **Fuites et HIBP**
  - HIBP : https://haveibeenpwned.com/api/v3/breaches, https://haveibeenpwned.com/, https://haveibeenpwned.com/API/v3
  - Troy Hunt : https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/
  - CNIL : https://www.cnil.fr/fr/violation-de-donnees-sanction-5millions-france-travail, https://www.cnil.fr/fr/france-travail-la-cnil-enquete-sur-la-fuite-de-donnees-et-donne-des-conseils-pour-se-proteger, https://www.cnil.fr/fr/sanction-free-2026, https://www.cnil.fr/fr/violation-de-donnees-de-deux-operateurs-de-tiers-payant-la-cnil-ouvre-une-enquete-et-rappelle-aux, https://www.cnil.fr/fr/bilan-sanctions-2025
- **Double authentification et passkeys**
  - Google 2019 : https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html
  - FIDO : https://fidoalliance.org/wp-content/uploads/2026/10/Passkey-Index-October-2026.pdf, https://fidoalliance.org/7-billion-passkeys-and-counting-the-next-chapter-of-passwordless-authentication/
  - W3C : https://www.w3.org/TR/webauthn-3/, https://www.w3.org/TR/webauthn-2/
  - Uber : https://www.uber.com/newsroom/security-update/
- **Hameçonnage et arnaques**
  - Cybermalveillance, rapport 2025 : https://www.cybermalveillance.gouv.fr/medias/2026/03/RA_2025_Cybermalveillance_gouv_fr.pdf
  - FBI IC3 2025 : https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf
  - ONUDC : https://www.unodc.org/unodc/frontpage/2025/April/cyberfraud-in-the-mekong-reaches-inflection-point--unodc-reveals.html
  - ONU Info (HCDH) : https://news.un.org/en/story/2023/08/1140187
  - INTERPOL 2025 : https://www.interpol.int/content/download/23094/file/INTERPOL_Africa_Cyberthreat_Assessment_Report_2025.pdf
  - IANS (UPI) : https://ianslive.in/upi-frauds-worth-rs-805-crore-witnessed-this-fiscal-so-far-minister--20251215175703
  - PIB : https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/oct/doc2025108660701.pdf
  - The Standard (Hong Kong) : https://www.thestandard.com.hk/news/article/213122/HKs-first-deepfake-video-conference-scam-involving-HK200-million
  - arXiv (Heiding et al.) : https://arxiv.org/abs/2412.00586
  - APWG : https://docs.apwg.org/reports/apwg_trends_report_q2_2018.pdf
  - Xudong Zheng : https://www.xudongz.com/blog/2017/idn-phishing/
  - Chromium : https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md
- **Mythes (Mac, mobile)**
  - Apple : https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web
  - Google Play : https://blog.google/security/keeping-google-play-android-app-ecosystem-safe-2025/
  - Citizen Lab : https://citizenlab.ca/amnesty-peer-review/

**[extrait]**

- **NIST, ANSSI, CNIL**
  - CSRC (date de NIST SP 800-63-4) : https://csrc.nist.gov/pubs/sp/800/63/4/final
  - CSPN 2010/07 : https://cyber.gouv.fr/sites/default/files/IMG/cspn/anssi-cspn_2010-07fr.pdf
  - Clôture de l'injonction France Travail : https://www.cnil.fr/fr/cloture-injonction-france-travail
- **Recherche et classements**
  - IEEE S&P 2012 : https://ieee-security.org/TC/SP2012/papers/4681a523.pdf
  - NordPass : https://nordpass.com/most-common-passwords-list/
- **Double authentification et passkeys**
  - FIDO, mai 2026 : https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/
  - NCSC 2026 : https://www.ncsc.gov.uk/collection/annual-review-2026/building-strong-foundations/passkeys-beyond-passwords
  - SS7 2017 : https://www.helpnetsecurity.com/2017/05/04/ss7-vulnerabilities-exploited/
- **France : CPF, signalements**
  - Loi CPF : https://www.lemondedudroit.fr/social/306-relations-individuelles-de-travail/83875-lutte-contre-les-abus-et-les-fraudes-au-cpf-la-loi-est-publiee.html
  - FranceConnect+ : https://www.transformation.gouv.fr/files/presse/CP_Compte_personnel_formation_Renforcement_securite_franceconnect.pdf
  - Communiqué 17Cyber : https://www.cybermalveillance.gouv.fr/medias/2024/12/20241216_CP17Cyber.pdf
  - Perceval : https://www.lesclesdelabanque.com/particulier/perceval-fraude-carte-bancaire/
  - 33700 : https://www.economie.gouv.fr/dgccrf/sms-et-appels-indesirables-le-33-700-facilite-le-signalement-des-numeros-frauduleux
- **Monde : Asie, Afrique, Inde**
  - ONUDC 2026 : https://www.unodc.org/documents/human-trafficking/2026/Publications/UNODC_Trafficked_to_Scam.pdf
  - INTERPOL 2026 : https://www.interpol.int/en/News-and-Events/News/2026/INTERPOL-report-finds-AI-linked-to-more-than-half-of-cybercrime-in-Africa
  - GSMA 2026 : https://www.gsma.com/sotir/wp-content/plugins/plugin_gsma_sotir/reports/The-State-of-the-Industry-Report-2026_English.pdf
  - Nigeria (Nairametrics) : https://nairametrics.com/2026/06/19/bank-customers-lose-n134-48-billion-to-fraud-in-six-years-cbn/
  - PIB, « digital arrest » : https://www.pib.gov.in/PressReleasePage.aspx?PRID=2110809&reg=3&lang=2
  - The Week (Mann Ki Baat) : https://www.theweek.in/news/india/2024/10/27/modi-raises-digital-arrest-scam-in-mann-ki-baat-lakhs-of-bank-accounts-blocked-says-pm.html
  - WEF (Arup) : https://www.weforum.org/stories/2025/02/deepfake-ai-cybercrime-arup/
- **Mythes (HTTPS)**
  - PhishLabs : https://www.phishlabs.com/blog/apwg-two-thirds-phishing-sites-ssl-https
  - Ministère de l'Économie : https://www.economie.gouv.fr/particuliers/numerique-et-cybersecurite/comment-se-premunir-contre-lhameconnage
- **Europol IOCTA 2025** (« Steal, deal and repeat », 2025) : page ouverte mais contenu chargé en JavaScript, non lu. Non utilisé.

**[méta]**

- Komanduri et al., CHI 2011, DOI 10.1145/1978942.1979321 (notice Semantic Scholar).

---

# Partie 2 : chiffrement et mises à jour

- **Date de recherche :** 8 novembre 2026.
- **User-Agent des requêtes curl :** `RouagesDuNet-research/0.1 (https://rouages.net)`.

## Légende des statuts

- **[lu]** : page ou document ouvert et lu (texte intégral ou partie pertinente). Quand la lecture est passée par l'outil de récupération web, le texte a été lu à travers un résumé automatique. Les citations marquées ainsi viennent de ce résumé ou de l'extraction PDF : **relire la source avant publication** pour les citations entre guillemets.
- **[extrait]** : vu uniquement dans un extrait de moteur de recherche.
- **[méta]** : métadonnées seulement (notice Crossref, PDF scanné sans texte, page d'existence).

## Sites inaccessibles depuis l'environnement de recherche

Ces sites étaient bloqués (protection anti-robot ou 403) :

- cyber.gouv.fr (ANSSI), cybermalveillance.gouv.fr, consilium.europa.eu, legislative-train (europarl), nsa.gov, americanindian.si.edu, legifrance (via curl ; une page lue via l'outil web), investor.maersk.com.

Les faits qui en dépendent sont donc sourcés par la presse ou marqués [extrait]. **À revérifier à la main avant publication.**

---

## 1. Histoire du chiffrement

### 1.1 Antiquité : scytale et César

- **Scytale spartiate.** Plutarque, *Vie de Lysandre*, 19, la décrit ainsi :
  - deux bâtons « exactement semblables en longueur et en épaisseur » (trad. anglaise Perrin) ;
  - une bande de parchemin enroulée sur le bâton, sur laquelle on écrit ;
  - la bande, une fois déroulée, est illisible sans le bâton jumeau.
  - C'est un chiffre **par transposition** (on change l'ordre des lettres, pas les lettres).
  - Source : Plutarque, *Lives*, Loeb, sur LacusCurtius, https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Lysander*.html **[lu]**
- **Chiffre de César.** Suétone, *Vie de César*, 56, écrit que César décalait les lettres : « substitute the fourth letter of the alphabet, namely D, for A, and so with the others ». C'est un chiffre **par substitution** monoalphabétique, avec un décalage de 3.
  - Source : Suétone, Loeb, LacusCurtius, https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Julius*.html **[lu]**

### 1.2 Inde : l'écriture chiffrée parmi les 64 arts

Le *Kamasutra* de Vatsyayana (date débattue, souvent placée entre le IIIe et le Ve siècle) range parmi les 64 arts : « 44. The art of understanding writing in cypher, and the writing of words in a peculiar way ».

- Source : traduction anglaise de 1883, Projet Gutenberg n° 27827 (le traducteur noté dans les métadonnées est S. P. Bhide ; la traduction est habituellement attribuée à Burton et Arbuthnot), https://www.gutenberg.org/cache/epub/27827/pg27827.txt **[lu]**
- Le terme sanskrit *mlecchita-vikalpa* est popularisé par David Kahn (*The Codebreakers*, 1967), qui en fait le 45e art.
  - Le numéro (44 ou 45) varie selon les éditions et les listes.
  - Le terme lui-même n'apparaît pas dans la traduction lue.
  - **Non vérifié en source primaire** : formuler prudemment, par exemple « un art de l'écriture secrète figure parmi les 64 arts ».

### 1.3 Monde arabe : al-Kindi et l'analyse des fréquences (IXe siècle)

- **Al-Kindi** (Abu Yusuf Ya'qub ibn Ishaq al-Kindi, vers 801-873) écrit vers 850 la *Risala fi istikhraj al-mu'amma* (« Traité sur le déchiffrement des messages cryptographiques »).
  - C'est le plus ancien texte connu qui décrit **l'analyse des fréquences** : comparer la fréquence des lettres du message chiffré à celle des lettres de la langue.
  - Le manuscrit a été retrouvé parmi des manuscrits des archives ottomanes de la Süleymaniye (Istanbul), par une équipe de Damas (Mrayati, Alam, al-Tayyan). Les recherches ont commencé vers 1979 et une publication en arabe a suivi en 1987.
  - Source 1 : M. I. Al-Suwaiyel, « Arab Origins of Cryptology », Muslim Heritage, 14 mai 2018, https://muslimheritage.com/arab-origins-of-cryptology/ **[lu]**
  - Source 2 : I. A. Al-Kadi, « Origins of cryptology: the Arab contributions », *Cryptologia* 16(2), avril 1992, p. 97-126, DOI 10.1080/0161-119291866801 **[méta]** (notice Crossref ; le texte est payant). Une recension de la série *Arabic Origins of Cryptology* (Mrayati et al., KFCRIS) existe : *Cryptologia* 32(3), 2008, DOI 10.1080/01611190802129104 **[méta]**.
  - Vulgarisation : Simon Singh, https://simonsingh.net/media/articles/maths-and-science/arab-code-breakers **[extrait]**
- **Ibn Adlan** (mort en 1268) et **Ibn al-Durayhim** (mort en 1359)
  - Ibn al-Durayhim a écrit *Miftah al-kunuz fi idah al-marmuz* (vers 1350).
  - Tous deux décrivent des systèmes que l'article compare à ceux, bien plus tardifs, de Porta, Vigenère et Cardan.
  - Al-Qalqashandi reprend Ibn al-Durayhim dans son encyclopédie *Subh al-a'sha* (1412). C'est sur ce texte que David Kahn a écrit : « Cryptology was born among the Arabs ».
  - Source : Al-Suwaiyel, Muslim Heritage **[lu]** (source unique pour Ibn Adlan et Ibn al-Durayhim : à recouper, par exemple dans les volumes Mrayati et al.).

### 1.4 Le « chiffre de Vigenère », inventé par Bellaso : un mythe d'attribution

- **Giovan Battista Bellaso** publie en 1553 *La cifra del Sig. Giovan Battista Bellaso*. Il y décrit le chiffre polyalphabétique **à clé répétée** qu'on appelle aujourd'hui « de Vigenère ».
- **Blaise de Vigenère**, dans son *Traicté des chiffres* (1586), décrit surtout un **autoclave** (la clé dérive du texte clair), plus solide.
- L'attribution à Vigenère date d'une erreur du XIXe siècle.
- Sources :
  - A. Buonafalce, « Bellaso's Reciprocal Ciphers », *Cryptologia* 30(1), 2006, DOI 10.1080/01611190500383581 **[méta]** ;
  - historyofinformation.com, https://www.historyofinformation.com/detail.php?id=1678 **[extrait]**.
  - Prévoir une source académique lue (Kahn, ou une numérisation de l'édition de 1553) avant publication.
- **Cassage**
  - Friedrich **Kasiski** publie en 1863 *Die Geheimschriften und die Dechiffrir-Kunst*. Sa méthode cherche les répétitions dans le texte chiffré pour en déduire la longueur de la clé.
  - Charles **Babbage** avait trouvé une méthode comparable sans la publier.
  - Sources : pages universitaires (MTU, https://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/Vig-Kasiski.html) **[extrait]**.
  - Date de Babbage contestée : vers 1846 selon certaines sources, 1854 selon S. Singh.

### 1.5 Le principe de Kerckhoffs (1883)

- **Auguste Kerckhoffs**, né en 1835 aux Pays-Bas (Nuth, Limbourg) et naturalisé français en 1873, publie « La cryptographie militaire » dans le *Journal des sciences militaires* (vol. IX). La première partie paraît en janvier 1883 (p. 5-38), la seconde en février 1883 (p. 161-191).
- Le 2e de ses six principes dit : « Il faut qu'il n'exige pas le secret, et qu'il puisse sans inconvénient tomber entre les mains de l'ennemi. »
- Autrement dit, la sécurité doit reposer sur **la clé**, pas sur le secret de la méthode.
- Sources :
  - Ph. Guillot, « Auguste Kerckhoffs et la cryptographie militaire », *BibNum*, 2013, https://journals.openedition.org/bibnum/555 **[lu]** ;
  - F. Petitcolas, https://www.petitcolas.net/kerckhoffs/ **[lu]** (références de pages).
  - Le lieu de naissance, Nuth, n'est pas confirmé par les pages lues : écrire « né aux Pays-Bas ».

### 1.6 Enigma : l'histoire polonaise, puis britannique

- **Pologne**
  - En 1929, le Biuro Szyfrów recrute des mathématicien·nes formé·es à Poznań, dont Marian **Rejewski**, Jerzy **Różycki** et Henryk **Zygalski**.
  - Le **31 décembre 1932**, à partir de documents reçus le 8 décembre 1932, les Polonais déchiffrent pour la première fois des messages Enigma.
  - En **septembre 1938**, ils construisent la **bomba** et créent les **feuilles de Zygalski**.
  - Source : Agencja Wywiadu (renseignement extérieur polonais), https://aw.gov.pl/en/history/enigma-decryption/183,Enigma-decryption.html **[lu]**
- **Réunion de Pyry**, près de Varsovie, les **25 et 26 juillet 1939**
  - Les Polonais exposent leurs résultats aux Français et aux Britanniques (Denniston et Knox) et leur remettent des copies de la machine.
  - GCHQ : les Britanniques et les Français découvrent que les Polonais sont « much further forward than they were ».
  - En **janvier 1940**, Turing rencontre Rejewski à Paris. Selon le GCHQ, ces échanges sont « fundamental » pour la conception de la Bombe britannique.
  - Sources :
    - GCHQ, « The Pyry Forest meeting », https://www.gchq.gov.uk/information/the-pyry-forest-meeting **[lu]** ;
    - GCHQ, commémoration du 3 juillet 2014, https://www.gchq.gov.uk/news/director-gchq-commemorates-crucial-pre-war-enigma-information-sharing-meeting-poland **[lu]**.
    - Le discours de 2014 dit « 15 et 16 juillet », mais la notice historique du même site dit 25-26 : **retenir 25-26 juillet**, confirmé par l'AW.
- **Bletchley Park**
  - Le site compte environ 150 personnes en 1939 et « nearly 10,000 » dans l'organisation élargie.
  - « By 1945, 75% of the staff of Bletchley Park were women » ; six sur dix de ces femmes étaient en uniforme (WRNS, ATS, WAAF).
  - Source : Bletchley Park Trust, https://www.bletchleypark.org.uk/our-story/who-were-the-codebreakers/ **[lu]**
  - Le Trust note ailleurs qu'elles étaient sous-représentées aux postes de direction **[extrait]**.
- **La Bombe Turing-Welchman**
  - La première, « Victory », fonctionne à partir du **14 mars 1940**.
  - Gordon Welchman ajoute le **diagonal board**, qui réduit fortement les faux arrêts. La machine « Agnus » (août 1940) intègre ce perfectionnement.
  - En fin de guerre, environ **211 Bombes** étaient servies par près de **1 676 Wrens** et 263 membres de la RAF.
  - Source : The National Museum of Computing, https://www.tnmoc.org/bh-6-enter-turing-and-welchman et https://www.tnmoc.org/bombe **[extrait]** ; Bletchley Park, « 6 facts about the Bombe », https://www.bletchleypark.org.uk/our-story/6-facts-about-the-bombe/ **[lu]** (« industrialisation of codebreaking »).
- **Joan Clarke**
  - Arrivée le 17 juin 1940, elle travaille au Hut 8 avec Turing et excelle au *Banburismus*.
  - Payée d'abord 2 £ par semaine, moins que les hommes de même niveau, elle est promue au grade de « linguiste » sans parler de langue étrangère (« Grade: Linguist, Languages: none! »).
  - Elle devient cheffe adjointe du Hut 8 début 1944.
  - Sources : GCHQ, https://www.gchq.gov.uk/information/joan-clarke **[lu]** ; MacTutor (Univ. St Andrews), https://mathshistory.st-andrews.ac.uk/Biographies/Clarke_Joan/ **[lu]**
- **Mavis Batey (née Lever)**
  - Elle joue « a key role in breaking Abwehr Enigma ».
  - Elle déchiffre aussi le message révélant que la marine italienne est en alerte « D-3 », prélude à la bataille du cap Matapan (mars 1941). Le nom Matapan n'apparaît pas dans la page GCHQ.
  - Elle coécrit l'histoire officielle de l'ISK avec Margaret Rock, Keith Batey et Peter Twinn.
  - Sources : GCHQ, https://www.gchq.gov.uk/person/mavis-batey **[lu]** ; Roll of Honour de Bletchley Park (Italian naval Enigma, ISK) **[extrait]**.

### 1.7 États-Unis : Elizebeth Friedman et Agnes Driscoll

- **Elizebeth Smith Friedman (1892-1980)**
  - Pendant la Prohibition, pour les garde-côtes (1928-1930), elle et un assistant déchiffrent **plus de 12 000** messages de contrebandiers.
  - Elle témoigne au procès de La Nouvelle-Orléans.
  - Source : George C. Marshall Foundation (qui conserve ses archives), https://www.marshallfoundation.org/articles-and-features/elizebeth-smith-friedman-and-prohibition/ **[lu]**
  - Pendant la Seconde Guerre mondiale, son unité reconstitue des réseaux d'espionnage nazis en Amérique du Sud. Le FBI de Hoover s'en attribue le mérite.
  - Sources : Smithsonian Women's History, https://womenshistory.si.edu/blog/elizebeth-smith-friedman-was-us-governments-first-woman-codebreaker-she-cracked-nazi-codes **[extrait]** ; US Coast Guard History, « The Long Blue Line » **[extrait]** ; NSA Hall of Honor (1999) **[extrait]**.
  - Le chiffre de « 8 000 vies sauvées » est invérifié : ne pas le reprendre.
- **Agnes Meyer Driscoll (1889-1971), dite « Madame X »**
  - Elle entre dans la Navy en 1918, travaille sur les codes de la marine japonaise (Red Book, Blue Book) et fait des percées sur JN-25 en 1940.
  - Elle entre au Hall of Honor de la NSA en 2000.
  - Sources : National Cryptologic Foundation, https://cryptologicfoundation.org/ncf-history/agnes-meyer-driscoll/ **[lu]** (1918, Blue Book, Hall of Honor 2000) ; NSA et Naval History and Heritage Command **[extrait]** (Red Book, JN-25).
  - Son année de naissance (1887 ou 1889) et les dates du Red Book varient selon les sources.

### 1.8 Les « code talkers »

- **Choctaw**, Première Guerre mondiale (1918) : le « Choctaw Telephone Squad » sur le front de l'Ouest.
  - Source : National WWII Museum, https://www.nationalww2museum.org/war/articles/american-indian-code-talkers **[lu]**
- **Navajos (Diné)**
  - Les 29 premiers arrivent au camp de recrues de San Diego le **5 mai 1942**.
  - Le code compte **211** termes au départ, puis **411**. Entre **375 et 420** Navajos ont servi comme code talkers.
  - Le programme est resté classifié **jusqu'en 1968**.
  - Selon un responsable du renseignement japonais, c'était « one code they were never able to break ».
  - Source : National Archives, *Prologue*, 2001, https://www.archives.gov/publications/prologue/2001/winter/navajo-code-talkers.html **[lu]**
  - Le major Howard Connor : « Were it not for the Navajos, the Marines would never have taken Iwo Jima ».
  - Médailles d'or du Congrès en 2001 (National WWII Museum **[lu]**).
- **Autres nations**
  - Au moins 14 autres nations autochtones ont servi, dont les Cherokees et les **Comanches** (ces derniers à **Utah Beach** le jour J).
  - Source : National WWII Museum **[lu]**
  - Meskwaki, Chippewa, Oneida et Hopi sont cités par d'autres pages ; environ 534 code talkers au total pendant la Seconde Guerre mondiale **[extrait]**.
- **Les « code talkers basques » sont un mythe**
  - L'histoire vient d'un récit paru en 1952 dans la revue *Euzko Deya* (le capitaine Carranza, Guadalcanal 1942).
  - Les historiens Pedro Oiarzabal et Guillermo Tabernilla n'ont trouvé **aucune preuve** que l'armée américaine ait utilisé le basque comme code. Ils suggèrent une possible opération d'influence de l'OSS.
  - L'association Sancho de Beurko défend en revanche la mémoire de neuf Marines basco-américains réels, présents à Guadalcanal.
  - Sources : Euskal Kultura, https://www.euskalkultura.eus/english/news/sancho-de-beurko-elkartea-defends-the-role-of-the-other-basques-at-guadalcanal-1942-history-vs-myth **[lu]** ; Buber's Basque Page, « Myth debunked », https://buber.net/Basque/2017/07/29/myth-debunked-no-such-thing-as-basque-code-talkers/ **[extrait]**

### 1.9 La clé publique : Diffie-Hellman, RSA, et le GCHQ avant eux

- **Diffie et Hellman**, « New Directions in Cryptography », *IEEE Transactions on Information Theory*, vol. IT-22, n° 6, novembre 1976, p. 644-654.
  - Sources : notice Crossref DOI 10.1109/TIT.1976.1055638 **[méta]** ; PDF scanné sur le site de Hellman, https://ee.stanford.edu/~hellman/publications/24.pdf **[méta]** (image sans couche texte).
  - La première phrase, « We stand today on the brink of a revolution in cryptography », est très citée mais **non vérifiée directement** : à relire sur le scan.
- **Ralph Merkle** (puzzles de Merkle), « Secure communications over insecure channels », *CACM* 21(4), avril 1978. Le travail a été soumis dès 1975, ce qui fait de Merkle un co-pionnier souvent oublié.
  - Source : Crossref DOI 10.1145/359460.359473 **[méta]**
- **RSA** (Rivest, Shamir, Adleman), « A Method for Obtaining Digital Signatures and Public-Key Cryptosystems ».
  - Manuscrit « Received April 4, 1977 ; revised September 1, 1977 », publié dans *Communications of the ACM* 21(2), février 1978.
  - Le résumé : « publicly revealing an encryption key does not thereby reveal the corresponding decryption key » ; la sécurité repose « in part on the difficulty of factoring ».
  - Sources : PDF sur le site de Rivest, https://people.csail.mit.edu/rivest/Rsapaper.pdf **[lu]** ; Crossref 10.1145/359340.359342 **[méta]**
- **GCHQ, en secret**
  - James **Ellis** conçoit la « non-secret encryption » (NCSC, chronologie : **1970**) **[lu]**.
  - Clifford **Cocks** en trouve la réalisation mathématique (l'équivalent de RSA) : « The discovery in 1973 remained classified for a long time » (GCHQ) **[lu]**.
  - Malcolm **Williamson** invente peu après l'échange de clés « now known as the Diffie-Hellmann key exchange » (orthographe de la page), découvert indépendamment « at almost the same time ». En 2010, Ellis, Cocks et Williamson reçoivent un IEEE Milestone **[lu]**.
  - Ellis meurt le **25 novembre 1997**, « just a month before the public announcement » (donc **décembre 1997**) **[lu]**.
  - Sources : GCHQ, https://www.gchq.gov.uk/person/james-ellis et https://www.gchq.gov.uk/person/malcolm-williamson **[lu]** ; NCSC, « Our history », https://www.ncsc.gov.uk/information/our-history **[lu]**
  - Dates contestées : l'idée d'Ellis est datée de 1969 par certaines pages GCHQ et de 1970 par le NCSC. La date de l'échange de Williamson (1974 ou 1975-1976 selon les récits) n'est pas donnée par la page GCHQ lue (« shortly afterwards »).

### Réserves et points contestés (histoire)

- **« Premier·e »**
  - Al-Kindi est le plus ancien texte *connu* sur l'analyse des fréquences, ce qui ne veut pas dire qu'il en est l'inventeur absolu.
  - Diffie-Hellman sont les premiers *publiés* sur la clé publique, pas les premiers inventeurs : Ellis, Cocks et Williamson au GCHQ les précèdent, et Merkle est contemporain.
  - Pour Vigenère, l'invention revient à Bellaso.
- **Enigma** : présenter la chaîne Pologne (1932-1938), puis France (Bertrand, PC Bruno), puis Bletchley Park (Knox, Turing, Welchman, des milliers de femmes), puis les Bombes américaines. Ne jamais écrire « Turing a cassé Enigma ».
- **Effectifs de Bletchley** : « nearly 10,000 » (organisation élargie) ou « almost 9,000 » (selon d'autres pages du Trust) ; préciser « environ 9 000 à 10 000 ».
- **Kamasutra** : numéro de l'art et terme *mlecchita-vikalpa* non vérifiés en source primaire.
- **Babbage** : date (1846 ou 1854) discutée.

---

## 2. Principes, expliqués simplement

### 2.1 Symétrique et asymétrique

- **Chiffrement symétrique** : la même clé chiffre et déchiffre. Il est rapide, mais il faut partager la clé à l'avance.
- **AES (Rijndael)**
  - Conçu par les Belges **Joan Daemen** (Proton World International) et **Vincent Rijmen** (KU Leuven).
  - Choisi le 2 octobre 2000, il devient la norme **FIPS 197**, approuvée par le secrétaire au Commerce le **4 décembre 2001**, à l'issue d'un concours international lancé en septembre 1997 (candidats de 12 pays).
  - Les clés font 128, 192 ou 256 bits. Une clé de 128 bits offre environ « 340 undecillion (340 followed by 36 zeros) possible keys ».
  - Les auteurs ont renoncé aux redevances.
  - Source : NIST, communiqué du 4 décembre 2001, https://www.nist.gov/news-events/news/2001/12/commerce-secretary-announces-new-standard-global-information-security **[lu]**
  - Le Federal Register est daté du 6 décembre 2001 selon un article du *Journal of Research* du NIST **[extrait]**.
- **Chiffrement asymétrique (à clé publique)** : une clé publique sert à chiffrer ou à vérifier, une clé privée à déchiffrer ou à signer. Il résout la question du partage de la clé, mais il est plus lent.
  - En pratique, on combine les deux : l'asymétrique sert à convenir d'une clé, le symétrique chiffre les données. C'est le cas de TLS et de Signal.
  - Source : RSA 1977 **[lu]** (définition et usage pour la signature).

### 2.2 Masque jetable (one-time pad)

- C'est le seul chiffre dont la sécurité est **prouvée parfaite**, à trois conditions : une clé aléatoire, aussi longue que le message, et jamais réutilisée.
  - Source pour la preuve : C. Shannon, « Communication Theory of Secrecy Systems », *Bell System Technical Journal* 28(4), octobre 1949, p. 656-715, DOI 10.1002/j.1538-7305.1949.tb00928.x **[méta]**. Le texte reprend un rapport confidentiel du 1er septembre 1945.
- **Mythe d'attribution** : le procédé est souvent attribué à Vernam et Mauborgne (1917-1919), mais Frank **Miller** l'avait décrit dès **1882**.
  - Sources : S. Bellovin, « Frank Miller: Inventor of the One-Time Pad », *Cryptologia* 35(3), 2011, DOI 10.1080/01611194.2011.583711 **[méta]** ; S. Bellovin, « Vernam, Mauborgne, and Friedman », LNCS 2016, DOI 10.1007/978-3-662-49301-4_4 **[méta]**.

### 2.3 Hachage (lien avec les mots de passe, sans empiéter)

- Une fonction de hachage produit une **empreinte** de taille fixe. On ne peut pas revenir en arrière, et deux contenus différents ne doivent pas donner la même empreinte.
- Une **collision** est atteinte pour **SHA-1** le **23 février 2017** (CWI Amsterdam et Google), au prix de « roughly nine quintillion SHA-1 computations ».
- Leçon : les algorithmes vieillissent, il faut migrer (vers SHA-256 ou SHA-3).
- Source : https://shattered.io/ **[lu]**
- Pour les mots de passe, renvoyer au module voisin : on stocke une empreinte salée produite par une fonction lente, pas le mot de passe.

### 2.4 Pourquoi la taille des clés compte

- **DES** (clé de 56 bits, norme de 1977) est cassé par force brute en **56 heures** les 13-15 juillet 1998, par la machine « Deep Crack » de l'EFF (budget environ 210 000 dollars, coût final « well under $250,000 »).
  - Source : EFF, FAQ du 16 juillet 1998, https://w2.eff.org/Privacy/Crypto/Crypto_misc/DESCracker/HTML/19980716_eff_des_faq.html **[lu]**
- **Ordre de grandeur pédagogique** : chaque bit en plus double le nombre de clés, donc 128 bits font 2^72 fois plus de clés que 56 bits. AES-128 a 2^128 clés, soit environ 3,4 × 10^38 (NIST 2001 **[lu]**).

### 2.5 Ordinateur quantique et cryptographie post-quantique (PQC)

- **Menace** : un grand ordinateur quantique *tolérant aux fautes* casserait RSA et les courbes elliptiques (algorithme de Shor). Il ne casserait pas AES, pour lequel il suffit de doubler la clé.
  - Le risque actuel est le « **harvest now, decrypt later** » : on collecte aujourd'hui des données chiffrées pour les déchiffrer demain.
  - Source : NIST IR 8547, octobre 2026, https://csrc.nist.gov/pubs/ir/8547/final et https://nvlpubs.nist.gov/nistpubs/ir/2026/NIST.IR.8547.pdf **[lu]**
- **Normes du NIST (13 août 2024)**
  - **FIPS 203** : ML-KEM, ex-CRYSTALS-Kyber, pour l'échange de clés.
  - **FIPS 204** : ML-DSA, ex-Dilithium, pour la signature.
  - **FIPS 205** : SLH-DSA, ex-SPHINCS+, signature de secours.
  - Dustin Moody : « There is no need to wait for future standards ».
  - Source : https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards **[lu]**
- **HQC** est choisi le **11 mars 2025** comme algorithme de secours à ML-KEM. Il repose sur une autre famille mathématique (codes correcteurs plutôt que réseaux euclidiens).
  - Calendrier annoncé : un projet de norme environ un an plus tard, une norme finale attendue en 2027.
  - Source : https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption **[lu]**
  - **État au 8 novembre 2026** : selon NIST IR 8547 (octobre 2026), « A FIPS that specifies HQC-KEM is under development » **[lu]**.
- **Calendrier du NIST** (IR 8547 final, octobre 2026, qui remplace le projet de novembre 2024)
  - RSA, ECDSA, EdDSA et (EC)DH seront « Deprecated after 2030 » et « Disallowed after 2035 ».
  - Les systèmes fédéraux les plus sensibles devront passer à la PQC avant le 31 décembre 2030 pour l'échange de clés et avant le 31 décembre 2031 pour les signatures (EO 14412, OMB M-26-15).
  - Source : NIST IR 8547 **[lu]**
- **Union européenne** : feuille de route coordonnée des États membres (groupe de coopération NIS), publiée le 23 juin 2025.
  - Au **31/12/2026** : premières étapes et feuilles de route nationales.
  - Au **31/12/2030** : transition achevée pour les usages à haut risque, mises à jour « quantum-safe » activées par défaut.
  - Au **31/12/2035** : transition achevée pour les usages à risque moyen, et « as much as feasible » pour le faible risque.
  - Source : Commission européenne, https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography et le PDF https://ec.europa.eu/newsroom/dae/redirection/document/117507 **[lu]**
- **Royaume-Uni (NCSC, 20 mars 2025)** : découverte et inventaire d'ici **2028**, migrations prioritaires d'ici **2031**, migration complète d'ici **2035**.
  - Source : https://www.ncsc.gov.uk/guidance/pqc-migration-timelines **[lu]**
- **France (ANSSI)**
  - Le 8 octobre 2025, aux Assises de la cybersécurité, l'ANSSI annonce que l'intégration de PQC conditionnera la qualification des produits à partir de **2027**, et qu'« après 2030, il ne sera plus raisonnable d'acheter des produits sans cryptographie post-quantique ». Elle recommande l'**hybridation** (algorithme post-quantique combiné à un algorithme classique éprouvé) et la crypto-agilité.
    - Source : Clubic, 8 octobre 2025, https://www.clubic.com/actualite-582496-la-menace-quantique-est-la-l-anssi-alerte-et-fixe-une-date-limite-pour-se-preparer.html **[lu]**
  - Le 16 juin 2026, à la conférence France Quantum, l'ANSSI (Samih Souissi, chef de cabinet) confirme la fin de la certification des produits sans PQC en 2027.
    - Source : Clubic, 19 juin 2026, https://www.clubic.com/actualite-617680-face-a-la-menace-quantique-l-anssi-renforce-ses-exigences-de-certification.html **[lu]**
  - La FAQ PQC de l'ANSSI (https://cyber.gouv.fr/cryptographie-post-quantique-faq) précise que ces préconisations n'ont « pas à ce jour de caractère d'obligation réglementaire », et que l'hybridation n'est pas exigée pour les signatures à base de hachage (SLH-DSA, XMSS, LMS) **[extrait]** (site inaccessible).
- **État de l'art quantique** : C. Gidney (21 mai 2025) estime qu'on pourrait factoriser une clé RSA-2048 avec **moins d'un million de qubits bruités**, en moins d'une semaine. L'estimation de 2019 était d'environ 20 millions de qubits.
  - Aucun ordinateur actuel n'approche cette échelle (à formuler avec prudence ; aucune source lue ne donne l'état du matériel en 2026).
  - Source : https://arxiv.org/abs/2505.15917 **[lu]**
- **Messageries** : elles ont déjà adopté le post-quantique.
  - Signal PQXDH (X25519 + Kyber), 19 septembre 2023, https://signal.org/blog/pqxdh/ **[lu]**.
  - Signal SPQR, « Triple Ratchet », 2 octobre 2025, https://signal.org/blog/spqr/ **[lu]**.
  - iMessage PQ3, 21 février 2024, https://security.apple.com/blog/imessage-pq3/ **[lu]**.

### Réserves (principes)

- **Date de Q-Day** : aucune source fiable ne la donne. Le NIST cite « some experts predict … within a decade » (2024) : c'est une estimation, pas un fait.
- **Recommandations ANSSI** : passées par la presse (Clubic), car le site de l'ANSSI était inaccessible. Les vérifier sur cyber.gouv.fr (FAQ PQC et avis de 2022 et 2023).

---

## 3. HTTPS et chiffrement de bout en bout

### 3.1 Ce que protège HTTPS, et ce qu'il ne protège pas

- **Ce que protège HTTPS** (TLS entre le navigateur et le serveur) :
  - le **contenu** des pages et des formulaires et les cookies, contre l'écoute et la modification en route (Wi-Fi public, fournisseur d'accès) ;
  - l'**authenticité** du serveur, grâce au certificat.
- **Ce qu'il ne protège pas** :
  - le site lui-même voit tout en clair (HTTPS n'est pas du « bout en bout » entre deux personnes) ;
  - un site d'hameçonnage peut avoir un cadenas ;
  - l'adresse IP du serveur et la date restent visibles pour le réseau ;
  - historiquement, le **nom du site** est visible via le DNS et le champ SNI.
- **Encrypted Client Hello** (ECH), qui chiffre ce nom, est normalisé depuis **mars 2026**.
  - Source : RFC 9849, https://www.rfc-editor.org/rfc/rfc9849.txt **[lu]** (date « March 2026 » dans l'en-tête ; une version PDF de l'auteur porte « novembre 2025 » **[extrait]**).
- L'IETF considère que la surveillance de masse est « a technical attack » (RFC 7258, BCP 188, mai 2014), https://www.rfc-editor.org/rfc/rfc7258 **[lu]**.
- Note : la répartition « ce que protège ou non HTTPS » est une synthèse pédagogique standard. La sourcer, si besoin, par la documentation Mozilla ou CNIL (non lues ici).

### 3.2 Chiffrement de bout en bout (E2EE)

- **Protocole Signal**
  - Ses spécifications publiques sont : X3DH, PQXDH, Double Ratchet, Sesame, XEdDSA et ML-KEM Braid.
  - Le Double Ratchet a pour auteurs **Trevor Perrin** (éditeur), **Moxie Marlinspike** et Rolfe Schmidt (révision 4, 4 novembre 2025).
  - Sources : https://signal.org/docs/ et https://signal.org/docs/specifications/doubleratchet/ **[lu]**
- **WhatsApp** : l'intégration du protocole Signal est « fully complete » le **5 avril 2016**, pour « over a billion » d'utilisateur·rices.
  - Source : https://signal.org/blog/whatsapp-complete/ **[lu]**
- **Messenger (Meta)** : le chiffrement de bout en bout devient le réglage par défaut des conversations privées le **6 décembre 2023** (déploiement sur plusieurs mois ; protocole Signal plus « Labyrinth » pour les sauvegardes).
  - Source : https://about.fb.com/news/2023/12/default-end-to-end-encryption-on-messenger/ **[lu]**
- **iMessage** est chiffré de bout en bout depuis 2011 (Apple). PQ3 est déployé en 2024.
  - Source : https://security.apple.com/blog/imessage-pq3/ **[lu]**
- **RCS**
  - La GSMA publie l'Universal Profile 3.0 (chiffrement par **MLS**, IETF), qui permet un chiffrement interopérable, le 14 mars 2025.
    - Source : https://www.gsma.com/newsroom/?p=23417 **[lu]**
  - Apple lance le RCS chiffré de bout en bout entre iPhone et Android **en bêta** le **11 mai 2026** (iOS 26.5, dernière version de Google Messages, uniquement chez les opérateurs compatibles).
    - Source : https://www.apple.com/newsroom/2026/05/end-to-end-encrypted-rcs-messaging-begins-rolling-out-today-in-beta/ **[lu]**
  - **État au 8 novembre 2026** : le déploiement dépend des opérateurs, et il est inégal en Europe **[extrait]**.
- **Telegram** n'est **pas** chiffré de bout en bout par défaut.
  - Telegram écrit : « Server-client encryption is used in Cloud Chats (private and group chats) » ; seuls les « secret chats » sont chiffrés de bout en bout (et pas les groupes).
  - Source : https://telegram.org/faq **[lu]**

### 3.3 Métadonnées

- Stewart Baker (ancien juriste en chef de la NSA) : « metadata absolutely tells you everything about somebody's life ».
- Michael Hayden (ancien directeur de la NSA et de la CIA) : « We kill people based on metadata » (débat à Johns Hopkins, 2014).
- Source : D. Cole, *New York Review of Books*, 10 mai 2014, https://www.nybooks.com/online/2014/05/10/we-kill-people-based-metadata/ **[lu]**
- **Ce que peut livrer Signal** sur réquisition (première réquisition : district Est de Virginie, 2016) : seulement la date d'inscription et la date de dernière connexion.
  - Source : https://signal.org/bigbrother/ **[lu]**
  - C'est un exemple d'un service conçu pour minimiser les métadonnées. Ce n'est pas le cas de tous : WhatsApp conserve davantage de métadonnées (non sourcé ici, à documenter si on le dit).

### 3.4 Ce que voit qui (tableau pédagogique)

| Qui | Site en HTTPS | Messagerie chiffrée de bout en bout |
|---|---|---|
| Wi-Fi ou fournisseur d'accès | IP du serveur, heure, volume, nom du site (sauf ECH et DNS chiffré) ; **pas** le contenu | Qu'on utilise la messagerie, quand, combien de données ; **pas** le contenu ni le correspondant |
| Le service (site, messagerie) | **Tout** le contenu échangé avec lui | **Pas** le contenu ; des métadonnées (variables selon le service) |
| Un État | Ce qu'il obtient du réseau ou du service (réquisition) | Les métadonnées détenues par le service, ou le **téléphone** lui-même (saisie, logiciel espion) |

Ce tableau est une synthèse fondée sur les sections 3.1 à 3.3. Le dernier cas (attaque du terminal) est illustré par EncroChat : l'infiltration des terminaux est requalifiée par la CJUE en « interception » (voir la section 4).

### Réserves (HTTPS et bout en bout)

- **Dates de la RFC ECH** : légère incohérence (mars 2026 dans le texte officiel).
- **RCS chiffré** : déploiement en bêta et dépendant des opérateurs. Ne pas écrire « tous les SMS iPhone-Android sont chiffrés ».

---

## 4. Les « crypto wars » et le débat actuel

### 4.1 Années 1990

- **Puce Clipper**
  - Annoncée par la Maison-Blanche le **16 avril 1993**, elle reposait sur le dépôt de clés (key escrow) : l'État gardait une copie des clés.
    - Source : copie archivée du communiqué de presse **[extrait]**
  - En 1994, **Matt Blaze** (AT&T Bell Labs) montre la faille du champ LEAF, protégé par une somme de contrôle de **16 bits** (« Protocol Failure in the Escrowed Encryption Standard »).
    - Source : EFF, dépêche du 7 juin 1994, https://w2.eff.org/Privacy/Key_escrow/Clipper/ees_flaw.article **[lu]**
  - Le projet est abandonné vers 1996 **[extrait]**.
- **Le chiffrement classé comme munition aux États-Unis**
  - Les produits de chiffrement étaient des « defense articles in Category XIII of the United States Munitions List ».
  - L'Executive Order 13026 du **15 novembre 1996** les transfère au contrôle du Commerce.
  - Source : https://www.govinfo.gov/content/pkg/CFR-1997-title3-vol1/html/CFR-1997-title3-vol1-eo13026.htm **[lu]**
- **France**
  - Les décrets **99-199 et 99-200 du 17 mars 1999** rendent libre l'usage du chiffrement jusqu'à 40 bits. Entre 40 et 128 bits, l'usage est libre si le produit a été déclaré par son fournisseur ou s'il est réservé à l'usage privé d'une personne physique.
    - Source : réponse ministérielle à la question écrite n° 25103 (JO du 17 mai 1999), https://www.assemblee-nationale.fr/dyn/11/questions/QANR5L11QE25103.pdf **[lu]**
  - **Loi pour la confiance dans l'économie numérique (LCEN) du 21 juin 2004**, article 30-I : « L'utilisation des moyens de cryptologie est libre. »
    - Source : Légifrance, https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006421577 **[lu]**
  - Le classement du chiffrement comme « arme de guerre » en France avant 1990-1996 et l'annonce de Lionel Jospin (janvier 1999) ne sont pas vérifiés : l'ANSSI les présente dans son webdoc « Crypto », https://cyber.gouv.fr/crypto-le-webdoc/chapitre-iii-s%C3%A9curit%C3%A9-secret-et-l%C3%A9galit%C3%A9/ **[extrait]**.

### 4.2 Apple contre FBI (San Bernardino, 2016)

- Le **16 février 2016**, lettre de Tim Cook : « The government is asking Apple to hack our own users » ; une porte dérobée serait « a master key, capable of opening hundreds of millions of locks ».
  - Source : https://www.apple.com/customer-letter/ **[lu]**
- Le **28 mars 2016**, le ministère de la Justice abandonne la procédure : le FBI a accédé au téléphone grâce à un tiers.
  - Sources : MacRumors, ABC News **[extrait]** ; prévoir le dépôt judiciaire du DOJ comme source primaire.

### 4.3 EncroChat (2020) et Sky ECC (2021)

- **EncroChat**
  - Conférence de presse franco-néerlandaise avec Europol et Eurojust le **2 juillet 2020**.
  - La Gendarmerie enquête depuis 2017 ; une équipe commune d'enquête est créée en avril 2020.
  - Un dispositif technique a permis « to go beyond the encryption technique ». Les messages ont souvent été lus « in real time, over the shoulder of the unsuspecting senders ».
  - Source : Europol, https://www.europol.europa.eu/media-press/newsroom/news/dismantling-of-encrypted-network-sends-shockwaves-through-organised-crime-groups-across-europe **[lu]**
  - Bilan au 27 juin 2023 : **6 558 arrestations** et près de **900 millions d'euros** saisis.
  - Source : Eurojust, https://www.eurojust.europa.eu/news/dismantling-encrypted-criminal-encrochat-communications-6-500-arrests-900-eur-seized **[extrait]**
- **Sky ECC**
  - Journée d'action le **9 mars 2021** (communiqué du 10 mars) en Belgique, en France et aux Pays-Bas.
  - Environ **70 000** utilisateur·rices ont été surveillé·es depuis mi-février, sur environ 170 000 dans le monde et environ 3 millions de messages par jour.
  - Source : Europol, https://www.europol.europa.eu/media-press/newsroom/news/new-major-interventions-to-block-encrypted-communications-of-criminal-networks **[lu]**
- **CJUE, 30 avril 2024, C-670/22, *M.N. (EncroChat)*** (grande chambre, renvoi du Landgericht de Berlin) :
  - une décision d'enquête européenne visant des preuves déjà recueillies peut être émise par un procureur ;
  - l'infiltration de terminaux constitue une **interception** qui doit être notifiée à l'État concerné ;
  - le juge pénal doit écarter une preuve sur laquelle la personne « is not in a position to comment » si elle est susceptible d'avoir une influence « preponderant ».
  - Source : communiqué n° 77/24, https://curia.europa.eu/site/upload/docs/application/pdf/2024-04/cp240077en.pdf **[lu]**
- **CEDH, *A.L. et E.J. c. France*** : irrecevabilité pour non-épuisement des voies de recours internes (« there had been a remedy available to the applicants in France »). La Cour **n'a pas statué sur le fond**.
  - Source : https://www.echr.coe.int/w/inadmissibility-decision-concerning-france-2 **[lu]** (date affichée 17 octobre 2024 ; eucrim donne une décision du 24 septembre 2024, rendue publique le 17 octobre).
- **France**
  - Le Conseil constitutionnel valide le cadre (décision 2022-987 QPC du 8 avril 2022 ; eucrim écrit « 4 April 2022 », **à vérifier**).
  - La Cour de cassation rend plusieurs arrêts de 2022 à 2025.
  - Source : eucrim, « EncroChat – A Judicial Chronology », https://eucrim.eu/articles/encrochat-a-judicial-chronology/ **[lu]**

### 4.4 Le règlement européen dit « Chat Control » (règlement CSAM ou CSAR)

**Deux textes différents :**

**(a) Le règlement permanent** (procédure 2022/0155(COD))

- **11 mai 2022** : proposition de la Commission, avec des **injonctions de détection** obligatoires et un Centre européen.
- **14 novembre 2023** : vote en commission LIBE, puis mandat de négociation confirmé en plénière le **22 novembre 2023**.
  - Le texte du Parlement **exclut le chiffrement de bout en bout** des injonctions de détection : « Members excluded end-to-end encryption from the scope of the detection orders ».
  - Les injonctions sont présentées comme un dernier recours.
  - Source : Observatoire législatif (OEIL), fiche 2022/0155(COD), https://oeil.europarl.europa.eu/oeil/en/procedure-file/pdf?reference=2022%2F0155%28COD%29 **[lu]**
- **26 novembre 2025** : position du Conseil.
  - Les **injonctions de détection obligatoires sont supprimées**.
  - Restent l'évaluation et l'atténuation des risques, le retrait et le blocage, et la **détection volontaire rendue permanente**.
  - Sources : communiqué du Conseil, https://www.consilium.europa.eu/en/press/press-releases/2025/11/26/child-sexual-abuse-council-reaches-position-on-law-protecting-children-from-online-abuse/ **[extrait]** (site bloqué) ; eucrim, https://eucrim.eu/news/csa-regulation-council-position-reached/ **[extrait]**
- **Trilogues** : 9 décembre 2025, 26 février, 16 avril, 11 mai, 29 juin et **29 septembre 2026** (6e).
  - Au 29 septembre : accord sur les missions du Centre européen, **pas d'accord sur la détection dans les messages privés**. Agence Europe évoque un accord de principe sur la détection dans les contenus *publics*.
  - La présidence irlandaise (jusqu'au 31 décembre 2026) proposait une distinction entre contenus publics et contenus privés.
  - Sources : Brussels Record, révision du 2 octobre 2026, https://brusselsrecord.com/trilogue-29-september-what-it-can-decide/ **[lu]** ; Patrick Breyer (ancien député, militant opposé au texte), https://www.patrick-breyer.de/en/posts/chat-control/ **[lu]**. Ce sont des sources militantes ou secondaires.
- **État au 8 novembre 2026 : pas d'accord.** Un 7e trilogue, peut-être final, est annoncé pour novembre ou le **8 décembre 2026** (selon Breyer).
  - Le décompte d'une minorité de blocage au Conseil contre la détection obligatoire (environ 33 % de la population pour 35 % requis) est donné par Brussels Record : **non officiel**.

**(b) Le règlement provisoire** (« Chat Control 1.0 », règlement 2021/1232 ; prolongation 2025/0429(COD))

- **19 décembre 2025** : la Commission propose une prolongation jusqu'au 3 avril 2028.
- **11 mars 2026** : le Parlement adopte des amendements par 458 voix contre 103 (63 abstentions). Il veut une durée plus courte (3 août 2027), exclure le chiffrement de bout en bout, et limiter la détection aux contenus *connus*.
- **26 mars 2026** : le Parlement **rejette** la prolongation (228 pour, 311 contre). Le régime provisoire **expire le 3 avril 2026**.
- **2 juillet 2026** : position du Conseil.
- **9 juillet 2026** : en 2e lecture, le Parlement amende pour exclure le chiffrement de bout en bout. Une motion de rejet obtient 314 voix, sans atteindre la majorité absolue.
- **23 et 24 juillet 2026** : adoption, puis publication au JO le **28 juillet 2026**. Il s'agit du **règlement (UE) 2026/1881**, en vigueur le 31 juillet 2026 et applicable **jusqu'au 3 avril 2028**.
  - La dérogation « does not apply to audio communications or to communications protected by end-to-end encryption » et « must not be interpreted as prohibiting or weakening end-to-end encryption ».
  - Elle ne s'applique qu'aux scans *volontaires* des fournisseurs.
- Source : OEIL, fiche 2025/0429(COD), https://oeil.europarl.europa.eu/oeil/en/procedure-file/pdf?reference=2025%2F0429%28COD%29 **[lu]**. Le résumé du Parlement y est signalé comme « AI-generated and human-reviewed » : vérifier sur EUR-Lex (CELEX 32026R1881).
- Euronews : vote au Conseil par procédure écrite (25 pour, 1 contre, 1 abstention).
  - Source : https://www.euronews.com/my-europe/2026/07/28/why-is-chat-control-one-of-the-eus-biggest-digital-rights-fights **[lu]**

### 4.5 Royaume-Uni : Online Safety Act et Apple ADP

- **Online Safety Act 2023, section 121** : « Notices to deal with terrorism content or CSEA content (or both) ». L'Ofcom peut imposer une « accredited technology », y compris pour des communications privées (§2).
  - Source : https://www.legislation.gov.uk/ukpga/2023/50/section/121 **[lu]**
  - En septembre 2023, le gouvernement a déclaré qu'il n'utiliserait ce pouvoir que lorsque ce serait « technically feasible » (Lord Parkinson, Lords, 6 septembre 2023) **[extrait]**.
- **Apple ADP** (Protection avancée des données d'iCloud)
  - Apple cesse de proposer l'ADP aux nouveaux comptes britanniques en **février 2025** (21 février 2025, selon la presse **[extrait]**). Cela fait suite à une « technical capability notice » (TCN) au titre de l'Investigatory Powers Act, que le gouvernement ne confirme ni n'infirme.
  - La page d'assistance Apple (mise à jour le 23 septembre 2025) indique que les utilisateur·rices britanniques « will no longer have the option to enable Advanced Data Protection », que les messageries Apple « remain end-to-end encrypted globally, including in the UK », et que l'ADP reste disponible partout ailleurs.
    - Source : https://support.apple.com/en-gb/122234 **[lu]**
- **État au 8 novembre 2026**
  - La première procédure d'Apple devant l'Investigatory Powers Tribunal (IPT) s'est arrêtée après un « changement de circonstances » : la TCN, d'abord mondiale, aurait été réduite aux seul·es Britanniques.
  - Apple a déposé un **nouveau recours en 2026** ; audience de gestion le 17 septembre 2026.
  - Le recours de Privacy International et Liberty (IPT/25/83/CH) doit être plaidé au fond en **décembre 2026**. L'audience complète d'Apple est peu probable avant **2027**.
  - Source : Lawyer Monthly, 18 septembre 2026, https://www.lawyer-monthly.com/2026/09/apple-data-access-secrecy-challenged-at-uk-tribunal/ **[lu]**
  - Points relevés par les extraits **[extrait]** : jugement public de l'IPT du 7 avril 2025 ; la date du nouveau recours d'Apple varie (juillet ou 4 août 2026). Privacy International, https://privacyinternational.org/long-read/5547/our-challenge-against-uks-secret-tcn-powers, est redirigé : non lu.
- **Avis technique** : voir la section 4.6 (« Keys Under Doormats », « Bugs in our Pockets »).

### 4.6 Les arguments en présence

- **Polices (Europol, « going dark »)**
  - Déclaration commune des chefs de police européens (Londres, 18 avril 2024, publiée le 21 avril 2024) : le chiffrement de bout en bout « will stop tech companies from seeing any offending » et empêchera les forces de l'ordre d'obtenir des preuves (abus sexuels sur enfants, trafic, terrorisme…).
  - Catherine De Bolle : « Our homes are becoming more dangerous than our streets ».
  - Source : Europol, https://www.europol.europa.eu/media-press/newsroom/news/european-police-chiefs-call-for-industry-and-governments-to-take-action-against-end-to-end-encryption-roll-out **[lu]**
  - Le rapport IOCTA 2026 d'Europol plaide pour l'« accès légal » et la conservation des données, https://www.europol.europa.eu/cms/sites/default/files/documents/IOCTA-2026.pdf **[extrait]**.
  - Les défenseur·ses de l'enfance (IWF, Eurochild) jugent la détection volontaire seule insuffisante **[extrait]**.
- **Cryptographes**
  - « Keys Under Doormats » (Abelson, Anderson, Bellovin, Benaloh, Blaze, Diffie, Gilmore, Green, Landau, Neumann, Rivest, Schiller, Schneier…), MIT-CSAIL-TR-2015-026, 6 juillet 2015 : l'accès exceptionnel « would force Internet system developers to reverse forward secrecy design practices ».
    - Source : https://dspace.mit.edu/handle/1721.1/97690 **[lu]**
  - « Bugs in our Pockets: The Risks of Client-Side Scanning » (14 auteur·rices dont Rivest, Diffie, Landau, Troncoso), 14 octobre 2021 : « CSS by its nature creates serious security and privacy risks for all society ».
    - Source : https://arxiv.org/abs/2110.07450 **[lu]**
- **Associations** : Patrick Breyer : « Chat control really means mass surveillance » (cité par Euronews, 28 juillet 2026) **[lu]**.
- **Signal**
  - Meredith Whittaker (présidente), à la dpa, 1er octobre 2025 : si le règlement passait sans moyen de refuser la surveillance de masse, Signal « würden wir leider die Entscheidung treffen, den Markt zu verlassen » (quitterait le marché).
  - Source : netzpolitik.org, https://netzpolitik.org/?p=498941 **[lu]**
  - Signal a tenu la même position face au Royaume-Uni en 2023 (non sourcé ici).
- **Point d'équilibre factuel**
  - Le **régime provisoire en vigueur exclut le chiffrement de bout en bout**.
  - La **position du Conseil** a abandonné la détection obligatoire.
  - Le désaccord persistant porte sur la détection dans les contenus privés.

### Réserves (crypto wars)

- **Chat Control** : beaucoup de sources sont militantes (Breyer) ou de seconde main. Les sites du Conseil et du Parlement (legislative train) étaient bloqués. **Revérifier l'état au jour de la publication**, car un trilogue est prévu en novembre ou décembre 2026.
- **Arrestations EncroChat** : ce chiffre ne dit rien des condamnations ni de la validité des preuves dans chaque pays. Les débats juridiques continuent (France, Allemagne, Pays-Bas, Royaume-Uni).
- **ADP** : la TCN n'est ni confirmée ni infirmée officiellement, donc tout repose sur la presse et sur Apple.

---

## 5. Mises à jour et failles

### 5.1 Le cycle d'une faille

1. Découverte (par un·e chercheur·se, l'éditeur ou un attaquant).
2. Signalement à l'éditeur (divulgation coordonnée).
3. Correctif publié.
4. Publication de l'avis (CVE).
5. Installation par les utilisateur·rices.

- Une faille est un **« zero-day »** quand elle est exploitée avant l'existence d'un correctif.
- **Le cas inverse est le plus fréquent** : on est attaqué *après* la sortie du correctif, faute de l'avoir installé (WannaCry).
- Pour situer le volume : près de **50 000 CVE en 2025** (+18 % par an environ), et plus de 6 000 équipements en France encore exposés à des failles exploitées en 2023-2024.
  - Source : ANSSI, Panorama 2025, rapporté par *Le Monde Informatique*, 11 mars 2026, https://www.lemondeinformatique.fr/actualites/lireamp-un-niveau-de-menaces-toujours-tres-eleve-en-2025-selon-l-anssi-99602.html **[lu]**

### 5.2 WannaCry (12 mai 2017)

- **14 mars 2017** : bulletin **MS17-010**, « Critical » pour toutes les versions de Windows prises en charge (faille de SMBv1).
  - Les CVE y sont marquées « Publicly disclosed: No », « Exploited: No ».
  - Source : https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010 **[lu]**
- **Mi-avril 2017** : les Shadow Brokers publient des outils d'attaque. Microsoft (15 avril 2017) indique que « most of the exploits are already patched » ; EternalBlue est « Addressed by MS17-010 ».
  - Source : https://www.microsoft.com/en-us/msrc/blog/2017/04/protecting-customers-and-evaluating-risk **[lu]**
- **13 mai 2017** : Microsoft publie un correctif exceptionnel pour Windows XP, Windows 8 et Windows Server 2003, qui n'étaient plus pris en charge.
  - Source : https://www.microsoft.com/en-us/msrc/blog/2017/05/customer-guidance-for-wannacrypt-attacks **[lu]**
- **14 mai 2017** : Brad Smith (Microsoft) attribue l'attaque à « the exploits stolen from the National Security Agency » et la compare à des « Tomahawk missiles stolen ».
  - Source : https://blogs.microsoft.com/on-the-issues/2017/05/14/need-urgent-collective-action-keep-people-safe-online-lessons-last-weeks-cyberattack/ **[lu]**
- **NHS**, d'après le National Audit Office (27 octobre 2017) :
  - au moins **81 des 236** trusts (établissements) d'Angleterre ont été touchés, ainsi que **603** organisations de soins primaires, dont 595 cabinets de médecine générale ;
  - 6 912 rendez-vous ont été annulés, sur environ 19 000 annulations estimées au total ;
  - les systèmes étaient non corrigés ou non pris en charge ;
  - Amyas Morse : l'attaque « could have been prevented by the NHS following basic IT security best practice ».
  - Source : https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/ **[lu]**
- **Attribution** : le Royaume-Uni l'attribue au groupe nord-coréen Lazarus le 19 décembre 2017 (« highly likely ») ; environ 300 000 ordinateurs dans 150 pays.
  - Source : https://www.gov.uk/government/news/foreign-office-minister-condemns-north-korean-actor-for-wannacry-attacks **[lu]**
  - Ce communiqué dit « 48 NHS trusts », alors que le NAO, plus tardif et plus détaillé, en compte 81. **Retenir le NAO.**

### 5.3 NotPetya (27 juin 2017)

- **Royaume-Uni** (15 février 2018) : le Royaume-Uni attribue NotPetya à l'armée russe (« almost certainly »). L'Ukraine était la cible principale. L'attaque « masqueraded as a criminal enterprise » : elle se présentait comme un rançongiciel mais visait la destruction.
  - Source : https://www.gov.uk/government/news/foreign-office-minister-condemns-russia-for-notpetya-attacks **[lu]**
- **Saint-Gobain** :
  - environ **220 millions d'euros** d'impact sur le chiffre d'affaires du premier semestre 2017, et **65 millions d'euros** sur le résultat d'exploitation, « resulting from the June 27, 2017 cyber-attack » ;
  - Source : communiqué semestriel, https://www.saint-gobain.com.cn/en/node/1346 **[lu]**
  - environ 80 millions d'euros sur le résultat d'exploitation de l'année 2017 (rapport annuel) **[extrait]**.
- **Maersk** : impact estimé à **250-300 millions de dollars** (rapports du T3 2017 et annuel 2017 ; estimation de 200-300 millions au T2).
  - Source : investor.maersk.com **[extrait]** (site bloqué).

### 5.4 Rançongiciels contre les hôpitaux en France

- **Centre hospitalier Sud Francilien (Corbeil-Essonnes)** :
  - attaque dans la nuit du 20 au 21 août 2022 (LockBit 3.0) et déclenchement du plan blanc ;
  - rançon demandée de 10 millions de dollars, ramenée à 2 millions ;
  - refus de payer, puis publication d'environ 11 Go de données le 23 septembre 2022 ;
  - selon l'hôpital, « Les données publiées semblent concerner nos usagers, notre personnel ainsi que nos partenaires ».
  - Source : *Le Monde Informatique*, 26 septembre 2022, https://www.lemondeinformatique.fr/actualites/lire-piratage-du-ch-sud-francilien-de-corbeil-essonnes-des-donnees-sensibles-divulguees-88114.html **[lu]**
  - Public Sénat situe le plan blanc au 22 août **[extrait]**.
- **Centre hospitalier d'Armentières** :
  - attaque dans la nuit du 10 au 11 février 2024 (groupe « Blackout », plus de 100 serveurs et postes chiffrés) ;
  - fermeture temporaire des urgences ;
  - pas de rançon payée, puis publication de données.
  - Source : *Le Monde Informatique*, 27 février 2024, https://www.lemondeinformatique.fr/actualites/lire-piratage-de-l-hopital-d-armentieres-pres-d-1-million-de-donnees-patients-publiees-93082.html **[lu]**
  - Volume contesté : les attaquants revendiquent plus de 950 000 patients, la direction parle d'environ 300 000 patients et affirme qu'« aucun dossier patient informatisé » n'a été divulgué **[extrait]**, Europe 1 et *Le Quotidien du médecin*.
- **Panorama de la cybermenace 2025 de l'ANSSI** (publié le **11 mars 2026** ; c'est le dernier paru au 8 novembre 2026, à vérifier) :
  - **3 586** événements de sécurité (−18 % par rapport à 2024, année gonflée par les JO) ;
  - **1 366** incidents, contre 1 361 en 2024 ;
  - **128** compromissions par rançongiciel ;
  - **196** exfiltrations de données, contre 130 en 2024 ;
  - PME, TPE et ETI : 48 % des victimes de rançongiciel ;
  - santé : environ 10 à 11 % des incidents ;
  - Vincent Strubel : « On est sur un plateau très haut, pas sur un raz de marée ».
  - Sources : *Le Monde Informatique*, 11 mars 2026 **[lu]** ; Next, https://next.ink/228393/cyberattaques-en-france-des-niveaux-tres--mais-pas-de-raz-de-maree/ **[lu]** ; Siècle Digital, 16 mars 2026 **[lu]**
  - Le rapport lui-même, sur cyber.gouv.fr, n'a **pas** pu être ouvert.

### 5.5 Log4Shell (décembre 2021)

- **CVE-2021-44228** dans Apache Log4j :
  - score **CVSS 10,0** ;
  - signalée par Chen Zhaojun (Alibaba Cloud Security Team) ;
  - corrigée dans la version 2.15.0, puis 2.16 et 2.17 pour des failles voisines.
  - Source : https://logging.apache.org/security.html **[lu]**
- **CERT-FR**, alerte CERTFR-2021-ALE-022 du **10 décembre 2021** : « exécution de code arbitraire à distance » sans authentification ; « Cette vulnérabilité fait désormais l'objet d'une exploitation active. »
  - Source : https://cert.cyber.gouv.fr/alerte/CERTFR-2021-ALE-022/ **[lu]**
- **Leçon** : une petite brique libre, intégrée partout, sans que les entreprises sachent qu'elles l'utilisent.

### 5.6 xz Utils (mars 2024)

- **29 mars 2024** : Andres Freund écrit sur la liste oss-security : « The upstream xz repository and the xz tarballs have been backdoored » (versions 5.6.0 et 5.6.1).
  - Il l'a remarqué à cause de connexions SSH qui consommaient beaucoup de processeur et d'erreurs valgrind.
  - Source : https://www.openwall.com/lists/oss-security/2024/03/29/4 **[lu]**
- La CISA publie une alerte le même jour (CVE-2024-3094) et recommande de revenir à la version 5.4.6.
  - Source : https://www.cisa.gov/news-events/alerts/2024/03/29/reported-supply-chain-compromise-affecting-xz-utils-data-compression-library-cve-2024-3094 **[lu]**
- **Fragilité d'un projet tenu par un bénévole**
  - Le mainteneur Lasse Collin écrivait le 8 juin 2022 que sa « ability to care has been fairly limited mostly due to longterm mental health issues », et envisageait un rôle plus grand pour « Jia Tan ».
    - Source : https://www.mail-archive.com/xz-devel@tukaani.org/msg00567.html **[lu]**
  - Les archives piégées ont été « created and signed by Jia Tan ».
    - Source : https://tukaani.org/xz-backdoor/ **[lu]**
  - La campagne de pression par de faux comptes (« Jigar Kumar », etc.) est décrite par la presse et des blogs **[extrait]**.
- **Leçon** : un des projets les plus utilisés au monde, maintenu par une personne épuisée. Il a été sauvé par la curiosité d'un ingénieur qui mesurait un retard d'environ une demi-seconde.

### 5.7 Fin du support de Windows 10

- Le support a pris fin le **14 octobre 2025** : plus de mises à jour de sécurité, sauf avec le programme **ESU** (Extended Security Updates, mises à jour de sécurité étendues).
  - Source : https://support.microsoft.com/en-us/windows/windows-10-support-has-ended-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281 **[lu]**
- **ESU grand public**, trois options :
  - gratuit en synchronisant ses paramètres avec Windows Backup ;
  - avec 1 000 points Microsoft Rewards ;
  - ou 30 dollars (jusqu'à 10 appareils).
- **État au 8 novembre 2026** : le programme court désormais **jusqu'au 12 octobre 2027**.
  - Source : https://www.microsoft.com/en-us/windows/extended-security-updates **[lu]**
  - Cette prolongation d'un an, sans annonce, figure dans la documentation depuis le 25 juin 2026 **[extrait]**, BleepingComputer et TechRadar.
- **Espace économique européen** : Euroconsumers obtient le 22 septembre 2025 une année d'ESU gratuite jusqu'au 13 octobre 2026, « does not require engagement with Microsoft Rewards, OneDrive ». Selon son enquête, 22 % des utilisateur·rices sous Windows 10 ont un PC de 2017 ou plus ancien, non compatible avec Windows 11.
  - Source : https://www.euroconsumers.org/wp-content/uploads/2025/09/PR-Windows-10.pdf **[lu]**
  - Selon la presse, un compte Microsoft restait nécessaire **[extrait]**.
- **Déchets électroniques** : Canalys (décembre 2023) estimait qu'environ **240 millions** de PC pourraient devenir des déchets, soit environ 480 millions de kg. C'est une **projection**.
  - Source : Silicon UK, 22 décembre 2023, https://www.silicon.co.uk/e-innovation/green-it/report-warns-of-landfill-risk-when-microsoft-ends-windows-10-support-544026 **[lu]**
- **Alternatives à mentionner** pour un PC non compatible : passer à Linux, ou des offres de reconditionnement. Aucune source lue ici.

### 5.8 Recommandations : mises à jour et sauvegardes

- **Cybermalveillance.gouv.fr** : fiche « Pourquoi et comment bien gérer ses mises à jour ? » (10 bonnes pratiques), https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mises-a-jour **[extrait]** (site bloqué). On y lit notamment :
  - un appareil non à jour augmente le risque d'attaque ;
  - activer les mises à jour automatiques ;
  - ne télécharger les mises à jour que depuis les sites officiels ;
  - faire une sauvegarde avant de mettre à jour ;
  - fiche mémo du 18 août 2025.
- **Cybermalveillance, fiche rançongiciel** : sauvegardes régulières, dont des copies **déconnectées**, et tests de restauration **[extrait]**.
- **Règle 3-2-1** : « 3 – Keep 3 copies of any important file: 1 primary and 2 backups. 2 – Keep the files on 2 different media types… 1 – Store 1 copy offsite ».
  - Source : US-CERT et CISA, « Data Backup Options » (P. Ruggiero, Carnegie Mellon, 2012), https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf **[lu]**
  - **Aucune source française officielle lue** ne formule « 3-2-1 ». L'affirmation selon laquelle l'ANSSI recommanderait le « 3-2-1-1-0 » n'est **pas étayée**.
- **ANSSI** : le *Guide d'hygiène informatique* (42 mesures) recommande des mises à jour régulières et des sauvegardes hors ligne **[non lu]** (site bloqué).

### Réserves (mises à jour)

- **« Mettre à jour casse tout »** : il y a de vrais incidents de mises à jour défectueuses (par exemple CrowdStrike en juillet 2024, non sourcé ici). Le message honnête est : mettre à jour vite, avec une sauvegarde, et des tests en entreprise. Cybermalveillance conseille d'ailleurs de tester et de sauvegarder avant **[extrait]**.
- **Chiffres de l'ANSSI** : légères différences selon la presse sur la répartition par secteur (éducation et recherche 32 + 18 % chez LMI, 34 % chez Next ; santé 10 ou 11 %).
- **Rançongiciels 2024** : 144 selon le Panorama 2024 (LMI 2025), 141 selon d'autres articles **[extrait]**.

---

## 6. Mythes à démonter

1. **« Le chiffrement, c'est pour les criminels. »**
   - Faux : il protège chaque paiement en ligne, chaque connexion HTTPS et les messageries de milliards de personnes (WhatsApp, avril 2016 **[lu]** ; Messenger, décembre 2023 **[lu]**).
   - En France, son usage est **libre** (LCEN, art. 30 **[lu]**).
   - Le régime européen provisoire de 2026 s'interdit d'affaiblir le chiffrement de bout en bout (règlement 2026/1881 **[lu]**).
   - Nuance honnête : les criminel·les l'utilisent aussi (EncroChat, Sky ECC **[lu]**). On les a pourtant poursuivi·es par d'autres moyens : infiltration des terminaux, enquête, coopération judiciaire.
2. **« Une porte dérobée réservée aux gentils, c'est possible. »**
   - Les cryptographes répondent non : « Keys Under Doormats » (2015) **[lu]** et « Bugs in our Pockets » (2021) **[lu]**.
   - La puce Clipper avait une faille (Blaze, 1994) **[lu]**.
   - Les outils de la NSA ont fui, puis ont servi à WannaCry : Microsoft parle de « Tomahawk missiles stolen » **[lu]**.
   - Apple : « a master key, capable of opening hundreds of millions of locks » **[lu]**.
   - Présenter aussi l'argument des polices (Europol 2024 **[lu]**).
3. **« Mettre à jour, c'est risqué, ça casse tout. »**
   - WannaCry exploitait une faille corrigée **deux mois avant** (MS17-010 du 14 mars 2017 **[lu]**).
   - Selon le NAO, l'attaque contre le NHS « could have been prevented » **[lu]**.
   - Nuance : faire une sauvegarde avant (règle 3-2-1 **[lu]**).
4. **« Turing a cassé Enigma seul. »**
   - Les Polonais lisent Enigma dès décembre 1932 (AW **[lu]**) et transmettent tout le 25 juillet 1939 (GCHQ **[lu]**).
   - Les échanges avec Rejewski ont été « fundamental » pour la Bombe (GCHQ **[lu]**). Welchman a apporté le diagonal board (TNMOC **[extrait]**).
   - 75 % du personnel de Bletchley Park en 1945 était des femmes (Bletchley Park Trust **[lu]**), et Joan Clarke dirigeait en second le Hut 8 (MacTutor **[lu]**).
5. **« Les ordinateurs quantiques cassent déjà tout le chiffrement. »**
   - Faux aujourd'hui : il faudrait encore environ un million de qubits bruités pour RSA-2048 (Gidney 2025 **[lu]**).
   - Le chiffrement symétrique (AES) résiste en doublant la taille de clé.
   - Le danger est le « harvest now, decrypt later », d'où les normes de 2024 (NIST **[lu]**) et les calendriers 2030-2035 (NIST IR 8547, UE, NCSC **[lu]**).
6. **Bonus : d'autres mythes d'attribution.**
   - « Diffie et Hellman, premiers inventeurs de la clé publique » : voir GCHQ, Ellis, Cocks et Williamson **[lu]**, et Merkle **[méta]**.
   - « Vigenère a inventé son chiffre » : c'est Bellaso **[méta]**.
   - « Vernam a inventé le masque jetable » : Miller l'a décrit en 1882 **[méta]**.
   - « Il y a eu des code talkers basques » : c'est un mythe **[lu]**.

---

## 7. Pour aller plus loin (Wikipédia, renvois seulement)

L'existence des pages a été vérifiée (HTTP 200) le 8 novembre 2026. Leur **label de qualité n'a pas été vérifié**.

- https://fr.wikipedia.org/wiki/Analyse_fr%C3%A9quentielle **[méta]**
- https://fr.wikipedia.org/wiki/Chiffrement_de_bout_en_bout **[méta]**
- https://fr.wikipedia.org/wiki/WannaCry **[méta]**
- https://fr.wikipedia.org/wiki/Cryptographie_post-quantique **[méta]**

---

## 8. Idées d'animations interactives (locales, sans ressource tierce)

1. **Al-Kindi contre César**
   - Un court texte français est chiffré par décalage.
   - L'élève voit l'histogramme des lettres du message à côté de celui du français (fréquences précalculées et embarquées dans la page), puis fait glisser le décalage jusqu'à ce que les pics coïncident (E, A, S…).
   - Repli sans JavaScript : un tableau des fréquences et la solution détaillée.
   - Fidélité : c'est la méthode décrite par al-Kindi ; préciser que le texte d'origine visait l'arabe.
2. **La scytale à enrouler**
   - Une bande de lettres s'enroule autour d'un cylindre dont l'élève choisit le diamètre (le nombre de lettres par tour).
   - Seul le bon diamètre rend le texte lisible : c'est la transposition, opposée à la substitution de César.
3. **Diffie-Hellman avec des couleurs**
   - Couleur publique commune, couleurs secrètes d'Alice et de Bob, mélanges échangés en public, même couleur finale.
   - Un panneau « ce que voit Ève » montre les mélanges, mais pas la manière de les « démélanger ».
   - Un second onglet donne la version chiffrée avec de petits nombres (p = 23, g = 5) pour montrer les vrais calculs modulaires.
   - Note historique : Williamson au GCHQ, en secret, à la même époque.
4. **Pourquoi la taille de clé compte**
   - Un curseur de 8 à 256 bits affiche le nombre de clés et le temps de force brute pour une machine fictive à 10^12 essais par seconde.
   - Repère réel : DES (56 bits), cassé en 56 heures en 1998 par une machine d'environ 250 000 dollars.
   - Calcul en BigInt dans la page, sans aucun réseau.
5. **« Ce que voit chacun »**
   - Trois scénarios : HTTP, HTTPS, messagerie chiffrée de bout en bout.
   - Pour chacun, on clique sur un observateur (Wi-Fi du café, fournisseur d'accès, serveur, État) et la vue se brouille ou s'éclaire.
   - On distingue le contenu des métadonnées (heure, taille, destinataire, nom du site, avec la variante ECH).
   - Équivalent texte : le tableau de la section 3.4.
6. **La vie d'une faille, jusqu'à WannaCry**
   - Une frise pas à pas (lib `pasapas`) : signalement, 14 mars 2017 (MS17-010), 14-15 avril (fuite des Shadow Brokers), 12 mai (WannaCry), 13 mai (correctif XP), 27 octobre (rapport du NAO).
   - À chaque étape, l'élève choisit « je mets à jour » ou « j'attends », et un compteur montre son exposition.
   - Fin : les 81 trusts du NHS touchés et la phrase d'Amyas Morse.
7. **Sauvegarde 3-2-1 contre rançongiciel**
   - Placer trois copies sur des supports (disque interne, disque externe débranché, cloud ou lieu distant), puis lancer un « rançongiciel » simulé qui chiffre tout ce qui est connecté.
   - On voit ce qui survit, et pourquoi la copie hors ligne compte.
   - Aucune instruction offensive : le rançongiciel est un simple effet visuel.
8. **Masque jetable et réutilisation**
   - Chiffrer deux messages avec la même clé (XOR sur des lettres), puis montrer qu'en les combinant la clé disparaît et que des morceaux de texte réapparaissent.
   - Message : « jamais réutilisée ».
   - Rester à un niveau démonstratif, sans outil d'attaque générique.

---

## 9. Récapitulatif des points à revérifier avant publication

- **Chat Control** : état après le 7e trilogue (novembre ou 8 décembre 2026) ; texte EUR-Lex du règlement 2026/1881 (CELEX 32026R1881) ; communiqué du Conseil du 26 novembre 2025 (site bloqué).
- **ANSSI** : Panorama 2025 (PDF original), FAQ PQC, guide d'hygiène ; recommandations de Cybermalveillance (sites bloqués).
- **Diffie-Hellman 1976** : citer la première phrase après lecture du scan.
- **Kamasutra** : numéro de l'art et terme *mlecchita-vikalpa*.
- **Bellaso** : obtenir une source académique lue.
- **Conseil constitutionnel 2022-987 QPC** : date exacte (avril 2022).
- **Maersk** : rapport annuel 2017 (site bloqué).
- **Apple ADP** : date de février 2025 et nouveau recours de 2026, à confirmer sur Apple et sur les décisions publiées de l'IPT.
