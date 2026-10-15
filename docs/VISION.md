# Les rouages du net — Vision

> Expliquer internet, l'informatique et l'IA de manière animée et didactique,
> **sans masquer la vraie technologie**.

Dans l'esprit de [rouages.fr](https://rouages.fr) (les rouages de la République),
*Les rouages du net* démonte la machine numérique : qui la fait tourner, comment,
et qui a décidé qu'elle tourne ainsi.

## Principes

1. **Vrai, mais accessible.** Chaque explication peut être lue à plusieurs
   niveaux (🟢 découverte · 🟡 curieux · 🔴 ingénieur). On simplifie, on ne
   ment pas : le niveau 🔴 montre les vrais paquets, les vrais protocoles,
   le vrai code.
2. **Interactif plutôt que décoratif.** Une animation doit permettre de
   *manipuler* (curseur, bouton, pas-à-pas), pas seulement de regarder.
3. **Une histoire mondiale et inclusive.** Pas seulement la Silicon Valley :
   l'URSS, l'Amérique latine, l'Afrique, l'Asie, l'Europe. Mettre en avant
   les femmes, les personnes racisées, LGBTQ+ et les travailleurs invisibles.
4. **Matériel et politique.** Internet a des câbles, des datacenters, une
   consommation d'énergie, des lois et des rapports de force. On montre tout.
5. **Tout est sourcé et daté.** Chaque fait renvoie à une source, chaque
   page affiche sa date de dernière vérification. Wikipédia sert de renvoi
   « pour aller plus loin » quand l'article est bien fait. Voir
   [`SOURCES.md`](SOURCES.md).
6. **Accessible à tous.** Équivalent texte de chaque animation, respect de
   `prefers-reduced-motion`, contraste AA, navigation au clavier.
7. **Sobre et libre.** Site statique, léger, sans pistage, hébergeable
   partout (y compris un simple hébergement cPanel). Contenus sous licence libre.

## Les modules

### 1. Comment ça marche

| Module | Idée centrale | Pièce maîtresse interactive |
|---|---|---|
| **L'ordinateur** | Du transistor au programme | Un mini-processeur 4 bits pas-à-pas ; des portes logiques à câbler |
| **De l'Entrée à la page** *(module phare)* | Ce qui se passe quand on tape `rouages.net` | La trace : DNS → TCP/QUIC → TLS → BGP → câbles → CDN → serveur → rendu |
| **Les appareils** | Qui fait quoi : box, routeur, switch, antenne, DNS, serveur, CDN | Une carte « de ton salon au datacenter » |
| **L'IA** | Tokens, embeddings, attention, entraînement | Un mini-modèle qui prédit le mot suivant dans le navigateur |
| **La matérialité** | Câbles sous-marins, datacenters, énergie, eau, métaux, déchets | Carte animée des câbles ; calculateur d'empreinte |
| **Sécurité & vie privée** | Chiffrement, mots de passe, pistage | Le cadenas HTTPS expliqué par le mélange de couleurs ; une enchère publicitaire en 100 ms |
| **Les algorithmes du quotidien** | Recherche, recommandation, fil d'actualité | Un PageRank à manipuler |
| **Le dark net** | Ce que c'est, comment ça marche, qui l'utilise et pourquoi | Un paquet qui traverse trois relais Tor, couche de chiffrement par couche |

#### Le dark net, sans fantasme

On ne fait pas comme si ça n'existait pas : on l'explique.

- **Démêler les termes** : *deep web* (tout ce qui n'est pas indexé : votre
  messagerie, votre banque) ≠ *dark web* (services accessibles seulement par
  un réseau d'anonymat).
- **Comment ça marche** : le routage en oignon de Tor (né au laboratoire de
  recherche de la marine américaine, puis développé par le Tor Project),
  les adresses `.onion`, les services cachés ; aussi I2P et Freenet.
- **Qui l'utilise** : journalistes et lanceur·ses d'alerte (SecureDrop),
  dissident·es sous censure, médias (BBC, *New York Times*) et réseaux sociaux
  qui ont leur version `.onion` ; et aussi des marchés illégaux (Silk Road).
- **Limites et débats** : ce que Tor protège et ce qu'il ne protège pas,
  comment des services ont été démantelés, anonymat vs enquête.
- **Ligne éditoriale** : on explique le mécanisme et les enjeux, pas comment
  acheter quoi que ce soit ; on rappelle le cadre légal (utiliser Tor est
  légal en France).

### Savoirs : à qui appartient la connaissance ?

Un module qui élargit d'internet aux savoirs en général.

| Thème | Contenu |
|---|---|
| **L'économie de l'édition scientifique** | La recherche publique, relue gratuitement, revendue aux bibliothèques ; marges des grands éditeurs ; abonnements |
| **Le libre accès** | arXiv, l'Initiative de Budapest (2002), HAL en France, Plan S, la loi pour une République numérique (2016) |
| **Sci-Hub** | Créé en 2011 par **Alexandra Elbakyan** (Kazakhstan) ; comment il fonctionne, son impact mesuré, les procès (Elsevier aux États-Unis, blocage ordonné en France en 2019, procédure en Inde) |
| **Les bibliothèques de l'ombre** | LibGen, Anna's Archive ; le débat légalité / légitimité |
| **Les communs de la connaissance** | Wikipédia (et ses biais : le projet *Women in Red*), Projet Gutenberg, Internet Archive, OpenStreetMap |
| **Aaron Swartz** | Le *Guerilla Open Access Manifesto*, l'affaire JSTOR, sa mort en 2013 |

Ligne éditoriale : présenter les arguments de toutes les parties (chercheur·ses,
bibliothèques, éditeurs, tribunaux), dire clairement ce qui est légal ou non
et où, sans ni diaboliser ni faire de prosélytisme.

### 2. Qui décide

| Module | Contenu |
|---|---|
| **Gouvernance technique** | IETF (RFC), W3C, ICANN/IANA, RIR (RIPE NCC, AFRINIC, APNIC, ARIN, LACNIC), ISOC, IEEE, Unicode |
| **États & régulation** | RGPD, DSA/DMA, AI Act, Arcom, CNIL ; internet souverain, censure, coupures |
| **Entreprises & économie** | Opérateurs, hyperscalers, plateformes ; publicité, effets de réseau, monopoles ; quand une entreprise impose une norme (ex. QUIC) |
| **Société civile & communs** | Logiciel libre, Wikipédia, OpenStreetMap, EFF, La Quadrature du Net |

La cartographie des acteurs montre les **rapports de force**, pas seulement
un organigramme : qui propose, qui valide, qui applique, qui contourne.

### 3. Histoires

- **Histoire de l'informatique**
- **Histoire d'internet**
- **Histoire de l'IA**

Chaque histoire est une frise interactive filtrable (région, thème, personnes).
Voir [`PERSONNES.md`](PERSONNES.md) pour la liste de départ des figures et
projets à mettre en avant.

### 4. Idées reçues (debunking)

Une rubrique « Vrai ou faux ? » : chaque fiche part d'une idée reçue, dit ce
qui est vrai, ce qui est faux, et renvoie vers le module qui explique le
mécanisme. Le ton est bienveillant : on ne se moque pas de celles et ceux qui
y croient. Pistes de départ :

- « La navigation privée me rend anonyme. »
- « Le dark net, c'est 90 % d'internet » (confusion avec le *deep web*).
- « Internet a été créé pour résister à une attaque nucléaire. »
- « Le cloud, c'est dématérialisé. »
- « L'IA comprend ce qu'elle dit » / « L'IA n'est qu'un perroquet. »
- « Supprimer un fichier l'efface vraiment. »
- « Le Wi-Fi, c'est Hedy Lamarr » ; « le premier bug était un papillon de nuit. »
- « Je n'ai rien à cacher. »
- « Les mails pèsent plus lourd que la vidéo en streaming. »

### 5. Jeux

Apprendre en jouant, avec de **vrais** outils et de vraies commandes.

| Jeu | Ce qu'on apprend | État |
|---|---|---|
| **Terminus** | La ligne de commande Linux : `ls`, `cd`, `pwd`, `cat`, `mv`, fichiers cachés, chemins, puis `grep`, `touch`, `cp`, `mkdir`, `rm` | Lien vers l'original du MIT (en anglais) + version française en chapitres sur `/jeux/terminus/` (voir `docs/scenarios/terminus.md`) |
| *Le routeur* (idée) | Router des paquets dans un réseau qui tombe en panne | — |
| *Casse le code* (idée) | Du chiffre de César au chiffrement moderne | — |
| *Le paquet perdu* (idée) | Retrouver un paquet avec `ping`, `traceroute`, `dig` | — |
| *Entraîne ton neurone* (idée) | Régler les poids d'un perceptron à la main | — |

Terminus s'inspire du jeu du même nom créé au MIT, mais il est réécrit en
français avec son propre univers et son propre code.

### 6. Transversal

- **Glossaire vivant** : chaque terme technique est cliquable partout sur le site.
- **Fil conducteur** : une même requête (ou un personnage) suit le visiteur de
  module en module.
- **Labos** : les pièces interactives sont aussi accessibles seules, pour
  l'enseignement.

## Pièges à éviter

- **IA** : ni anthropomorphisme (« l'IA pense, veut ») ni dénigrement (« ce
  n'est qu'un perroquet ») ; montrer le mécanisme réel.
- **Histoire** : éviter le récit du « génie solitaire » ; montrer les équipes,
  les institutions, les financements (souvent militaires).
- **Mythes tenaces** : vérifier les anecdotes célèbres (le « premier bug »,
  Hedy Lamarr et le Wi-Fi, etc.) et dire ce qui est vrai et ce qui est exagéré.

## Publics

- Curieux·ses adultes (cible principale)
- Lycéen·nes et enseignant·es (SNT, NSI)
- Élu·es, journalistes, décideur·ses qui doivent comprendre pour décider
