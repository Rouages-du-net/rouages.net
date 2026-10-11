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
5. **Sourcé et daté.** Chaque page cite ses sources et affiche sa date de
   dernière vérification.
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

### 4. Transversal

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
