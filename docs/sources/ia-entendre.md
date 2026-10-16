# Sources — Module « Les IA qui entendent et parlent »

Dossier de sources du module `/modules/ia-entendre/`, établi selon la
[charte des sources](../SOURCES.md).

- **Recherche effectuée le** : 16 octobre 2026.
- Toutes les URL ont été ouvertes, sauf mention contraire ; le niveau de
  lecture est indiqué. Le texte de l'AI Act a été lu sur une copie du
  Journal officiel (EUR-Lex bloquait ce jour-là) : à relire sur EUR-Lex.
- Aucune page Wikipédia n'est utilisée comme source.
- **Valeurs utilisées par les animations** (`src/lib/son.ts`) : formants
  des voix d'hommes = valeurs de référence de Calliope (tableau B du § 2) ;
  F3 approximatif ; voix de femmes et d'enfants = facteurs 1,15 et 1,35 et
  hauteurs de voix tirés de Peterson et Barney (tableau C, anglais
  américain), faute de données d'enfants francophones.

Types : **P** primaire · **R** recherche · **Pr** presse · **S** site/institution/association

---

## 1. Numériser le son : échantillonnage, Nyquist-Shannon, 44 100 Hz

**Formulation sûre.** Pour numériser un son, on mesure la pression de l'air à intervalles
réguliers (échantillonnage). Un signal qui ne contient pas de fréquences au-dessus de W hertz
est entièrement déterminé par des mesures prises 2W fois par seconde. Ce résultat a été trouvé
plusieurs fois, de façon indépendante : par le mathématicien britannique Edmund Whittaker (1915),
le Soviétique Vladimir Kotelnikov (1933), l'Allemand Herbert Raabe (1939), le Japonais Isao Someya
(1949) et l'Américain Claude Shannon (1949), qui l'a fait connaître. Le CD audio échantillonne à
44 100 Hz : assez pour couvrir l'audition humaine (jusqu'à environ 20 kHz), et un chiffre hérité
des magnétoscopes qui servaient alors à enregistrer le son numérique.

**Faits clés**
- Shannon, « Theorem 1 » : « If a function f(t) contains no frequencies higher than W cps, it is completely determined by giving its ordinates at a series of points spaced 1/2W seconds apart. » [1]
- Shannon lui-même ne revendique pas la découverte : « This is a fact which is common knowledge in the communication art. » [1] ; manuscrit reçu le 23 juillet 1940, publié en janvier 1949 [1].
- Shannon nomme « Nyquist interval » l'intervalle 1/2W, car « Nyquist pointed out the fundamental importance of the time interval 1/2W seconds in connection with telegraphy » [1].
- Lüke (RWTH Aachen) : Nyquist (1928) traitait de la transmission télégraphique sans distorsion, un problème différent ; « these works cannot be regarded as sources for the sampling theorem » [2].
- Lüke : « The first scientist to formulate the sampling theorem precisely and apply it to problems of communication engineering is probably V. A. Kotelnikov » (1933) [2]. Whittaker (1915) est « the first work ever to address the sampling theorem for all bandlimited functions » [2]. Raabe (thèse, 1939) et Someya (*Hakei Denso*, 1949, d'où « Someya's Theorem » au Japon) [2].
- Kotelnikov reçoit en 1999 le prix de recherche fondamentale de la fondation Eduard Rhein, qui dit qu'il « in 1933 was the first to formulate in a mathematically exact manner and publish the sampling theorem » [3] [4].
- 44,1 kHz (Immink, ingénieur Philips) : « The sampling frequencies of 44.1 and 44.056 kHz were thus the result of a need for compatibility with the NTSC and PAL video formats used for audio storage at the time » ; le choix de 44,1 plutôt que 44,056 : « simply for the reason that it was easier to remember – there was really no other reason » [5]. Sony impose les 16 bits [5].
- Immink démonte au passage la légende de la 9e symphonie de Beethoven pour la durée du CD : « you should not believe them » [5] (voir points d'attention).
- Calcul couramment donné (non trouvé dans une source primaire, voir « Non vérifié ») : 3 échantillons par ligne × 294 lignes utiles × 50 trames (PAL) = 44 100 ; 3 × 245 × 60 (NTSC noir et blanc) = 44 100.

**Sources**
1. C. E. Shannon, « Communication in the Presence of Noise », *Proc. IRE* 37(1), janv. 1949 — https://fab.cba.mit.edu/classes/S62.12/docs/Shannon_noise.pdf — P — en — lu partiellement (p. 10-12).
2. H. D. Lüke, « The Origins of the Sampling Theorem », *IEEE Communications Magazine*, avril 1999, p. 106-108 — https://www.cse.iitd.ac.in/~pkalra/sil801/OLD/read/sampling.pdf — R — en — lu.
3. Eduard-Rhein-Stiftung, page du lauréat Kotelnikov (1999) — https://eduard-rhein-stiftung.de/en/?p=1727 — S — en — lu.
4. S. Yankin, « The Origin Story of the Sampling Theorem and Vladimir Kotelnikov », blog COMSOL, 10 sept. 2019 — https://www.comsol.com/blogs/the-origin-story-of-the-sampling-theorem-and-vladimir-kotelnikov/ — S (blog d'éditeur) — en — lu.
5. K. A. Schouhamer Immink, « The CD Story », *J. Audio Eng. Soc.* 46, 1998, p. 458-465 (réimpression) — https://hagenbeuk.nl/wp-content/uploads/2021/07/Immink.pdf — P (témoignage d'acteur) — en — lu.

**Points d'attention**
- Ne pas écrire « théorème de Shannon découvert par Shannon » ni « premier » : présenter une découverte multiple (Whittaker, Kotelnikov, Raabe, Someya, Shannon ; Nyquist pour l'intervalle). Le nom « Nyquist-Shannon » est un usage, pas une attribution historique exacte.
- « Red Book » : je n'ai pas ouvert la norme IEC 60908 ni un document Sony/Philips sur ce point ; dire « la norme du CD audio (1980, Sony et Philips) » sans détailler.
- Beethoven : Immink est un témoin de Philips ; d'autres récits (côté Sony) défendent la légende. Formulation prudente : « une légende tenace, contestée par un ingénieur du projet ».

---

## 2. Voyelles et formants : modèle source-filtre et valeurs en Hz

**Formulation sûre.** Les cordes vocales produisent un son riche (la source) ; la gorge, la
bouche et les lèvres agissent comme un filtre qui renforce certaines bandes de fréquences, les
formants. Les deux premiers (F1, F2) suffisent presque à distinguer les voyelles : F1 monte quand
la bouche s'ouvre (/a/), F2 monte quand la langue avance (/i/). Cette théorie a été formalisée par
les Japonais Tsutomu Chiba et Masato Kajiyama (*The Vowel*, 1941-1942) puis par le Suédois Gunnar
Fant (*Acoustic Theory of Speech Production*, 1960). Les voix de femmes et d'enfants ont des
formants plus hauts, car leur conduit vocal est plus court.

**Faits clés**
- Fant : thèse de 1958 à KTH incluant le livre *The Acoustic Theory of Speech Production* (Mouton, 1960), « pioneering quantitative advance on how speech sounds are generated and filtered by the dynamically changing vocal tract » [1]. Réédition De Gruyter (1971) [2].
- Chiba et Kajiyama : le livre « was fundamental to the establishment of the modern acoustic theory of speech by Stevens, Fant, and other eminent scientists » et fonde « source-filter theory and perturbation theory » [3].
- Tableau A — **français, parole continue (journaux de France Inter)**, moyennes mesurées automatiquement sur ~24 000 voyelles, 15 hommes et 15 femmes [4] (F1 / F2 en Hz) :

| Voyelle | Hommes F1 | Hommes F2 | Femmes F1 | Femmes F2 |
|---|---|---|---|---|
| /i/ (lit) | 310 | 2005 | 348 | 2365 |
| /e/ (thé) | 370 | 1850 | 423 | 2176 |
| /ɛ/ (lait) | 438 | 1717 | 526 | 2016 |
| /a/ (patte) | 557 | 1444 | 685 | 1677 |
| /y/ (lu) | 336 | 1803 | 371 | 2063 |
| /ø/ (peu) | 384 | 1474 | 420 | 1693 |
| /œ/ (peur) | 400 | 1445 | 436 | 1643 |
| /ɔ/ (port) | 456 | 1203 | 528 | 1347 |
| /o/ (pot) | 397 | 1041 | 438 | 1140 |
| /u/ (loup) | 371 | 1105 | 404 | 1153 |

  Note : dans le PDF, les symboles /ɛ/ et /ɔ/ ne s'extraient pas ; l'ordre des colonnes (i y e ɛ a œ ø ɔ o u) est confirmé par le tableau 1 de [5], qui reprend les valeurs « femmes ». Dans ce corpus, /œ/ et le e muet (schwa) sont fusionnés, d'où un /œ/ plutôt fermé.
- Tableau B — **valeurs de référence « inspirées de phrases lues » (d'après Calliope 1989)** [4] : hommes /i/ 300-2050, /e/ 350-1950, /ɛ/ 450-1700, /a/ 650-1300, /y/ 300-1800, /ø/ 400-1450, /œ/ 500-1450, /ɔ/ 550-1050, /o/ 400-900, /u/ 350-850 ; femmes /i/ 350-2400, /e/ 450-2300, /ɛ/ 650-2000, /a/ 750-1550, /y/ 350-2050, /ø/ 450-1650, /œ/ 550-1650, /ɔ/ 600-1200, /o/ 450-950, /u/ 350-850 (F1-F2, Hz). **Ce sont les valeurs les plus « pédagogiques »** (voyelles bien articulées) ; en parole rapide, les voyelles se « centralisent » (tableau A).
- Voyelles isolées, 40 locutrices parisiennes [5] : /i/ 275-2585, /a/ 830-1438, /u/ 291-779 — plus extrêmes encore (hyperarticulation).
- Tableau C — **enfants (anglais américain, Peterson & Barney 1952 : 33 hommes, 28 femmes, 15 enfants)**, moyennes recalculées sur les données distribuées avec Praat (via le paquet R phonTools) [6] [7] :

| Voyelle | Hommes F1-F2 | Femmes F1-F2 | Enfants F1-F2 | F0 moyen H / F / E |
|---|---|---|---|---|
| /i/ (heed) | 267-2294 | 310-2783 | 360-3178 | 136 / 231 / 270 |
| /ɑ/ (hod, ≈ /a/) | 718-1091 | 864-1229 | 1030-1383 | 124 / 212 / 258 |
| /u/ (who'd) | 307-876 | 378-961 | 432-1193 | 139 / 235 / 278 |

  Valeurs proches dans Hillenbrand et al. 1995 (même paquet) : enfants /i/ ≈ 444-3028 (garçons), /u/ ≈ 493-1325 [7].
- Pas de tableau d'enfants **francophones** trouvé ; la revue Kent & Vorperian (2018) donne des plages : enfants de 4 ans F1 480-1200 Hz, F2 1700-3600 Hz [8].

**Sources**
1. J. L. Flanagan, H. G. Forsberg, W. W. Lang, « Gunnar Fant 1919-2009 », *Memorial Tributes* vol. 14, National Academy of Engineering, 2011 — https://www.nationalacademies.org/read/12884/chapter/15 — S — en — lu.
2. G. Fant, *Acoustic Theory of Speech Production*, De Gruyter (notice Crossref, DOI 10.1515/9783110873429) — https://api.crossref.org/works/10.1515/9783110873429 — P — en — métadonnées seulement.
3. T. Arai, « History of Chiba and Kajiyama and their influence in modern speech science », *From Sound to Sense*, 2004 — https://splab.net/papers/paper2004_16.html — R — en — résumé seulement.
4. C. Gendrot, M. Adda-Decker, « Impact of duration on F1/F2 formant values of oral vowels… », Interspeech 2005 — https://www.isca-archive.org/interspeech_2005/gendrot05_interspeech.pdf — P — en — lu.
5. L. Georgeton et al., « Analyse formantique des voyelles orales du français en contexte isolé », JEP-TALN 2012, p. 145-152 — https://aclanthology.org/F12-1019.pdf — P — fr — lu (tableau 1).
6. G. E. Peterson, H. L. Barney, « Control Methods Used in a Study of the Vowels », *JASA* 24(2), 1952 ; description du jeu de données dans le manuel Praat — https://www.fon.hum.uva.nl/praat/manual/Peterson___Barney__1952_.html — P — en — métadonnées seulement (PDF original : 403).
7. S. Barreda, paquet R *phonTools* 0.2-2.2 (jeux `pb52`, `h95`), CRAN — https://cran.r-project.org/src/contrib/phonTools_0.2-2.2.tar.gz — P (données) — en — lu (moyennes recalculées par moi).
8. R. D. Kent, H. K. Vorperian, « Static measurements of vowel formant frequencies and bandwidths: A review », *J. Commun. Disord.* 74, 2018 — https://pmc.ncbi.nlm.nih.gov/articles/PMC6002811/ — R — en — lu partiellement.

**Points d'attention**
- Toujours dire « valeurs moyennes, approximatives » : selon Kent & Vorperian, les moyennes d'une même voyelle varient jusqu'à 500-700 Hz d'une étude à l'autre [8].
- Les moyennes de Peterson & Barney recalculées ici diffèrent de quelques Hz du tableau imprimé de 1952 (données corrigées par Watrous, 1991, selon le manuel Praat) : citer « environ ».
- « Fant a inventé le modèle source-filtre » : non, il l'a formalisé et rendu quantitatif ; mentionner Chiba et Kajiyama (Japon). Date du livre japonais : 1941 (catalogues) ou 1942 (Arai).
- Enfants : valeurs anglaises seulement ; pour une démo en français, présenter l'enfant comme « formants environ 20-30 % plus hauts que chez l'adulte » plutôt qu'un tableau français inventé.

---

## 3. Le spectrogramme

**Formulation sûre.** Le spectrogramme dessine un son en trois dimensions : le temps en
abscisse, la fréquence en ordonnée et l'intensité en niveaux de gris. L'appareil des Bell Labs
(le « sound spectrograph ») a été proposé par Ralph Potter et décrit en 1946 par Koenig, Dunn et
Lacy ; il enregistrait 2,4 secondes de son sur une bande magnétique et les analysait en
repassant la boucle, bande de fréquence par bande de fréquence. Un des objectifs affichés était
de rendre la parole visible pour les personnes sourdes.

**Faits clés**
- « The sound spectrograph is a wave analyzer which produces a permanent visual record showing the distribution of energy in both frequency and time » (reçu le 4 mai 1946) [1].
- Méthode « as originally proposed by Mr. R. K. Potter » ; enregistrement sur bande magnétique montée sur un disque, papier sur tambour [1] ; « the last 2.4 seconds of signal are then on the tape » [1].
- Travail commencé « before our entry into the war » puis classé « war project » [1].
- Une figure montre les mots « visual telephony for the deaf » [1].
- *Visible Speech*, Ralph K. Potter, George A. Kopp et **Harriet C. Green**, D. Van Nostrand, New York, 1947 (série Bell Telephone Laboratories) [2] (métadonnées via résultat de recherche).

**Sources**
1. W. Koenig, H. K. Dunn, L. Y. Lacy, « The Sound Spectrograph », *JASA* 18(1), juillet 1946, p. 19 et suiv. — https://languagelog.ldc.upenn.edu/myl/koenig1946.pdf — P — en — lu partiellement.
2. Notice *Visible Speech* (1947) — https://catalogue.nli.ie/Record/vtls000407677 — S — en — métadonnées seulement, via moteur de recherche (page : 403). Compte rendu *Nature* 161, 1948 — https://www.nature.com/articles/161334a0.pdf — non lisible (renvoie du HTML).

**Points d'attention**
- Harriet C. Green : coautrice d'un ouvrage fondateur, à mettre en avant ; aucune donnée biographique vérifiée, s'en tenir à ce rôle.
- Les spectrogrammes ont ensuite servi aux « empreintes vocales » judiciaires, aujourd'hui contestées (non approfondi ici).

---

## 4. Machines parlantes

**Formulation sûre.** En 1791, Wolfgang von Kempelen publie à Vienne la description d'une
machine parlante mécanique (soufflet, anche, « bouche » en caoutchouc) pour que d'autres la
reconstruisent ; plusieurs copies suivent. En 1939, le Voder des Bell Labs (Homer Dudley) fabrique
une voix électrique : une opératrice la « joue » au clavier et au pédalier, après environ un an
d'entraînement. En 1984, DECtalk, issu des travaux de Dennis Klatt au MIT, rend la synthèse à
partir du texte accessible, notamment aux personnes aveugles. En 2016, WaveNet (DeepMind)
génère directement l'onde sonore, échantillon par échantillon, avec un réseau de neurones.

**Faits clés**
- « It was in 1791 that Wolfgang von Kempelen published the *Mechanismus der menschlichen Sprache nebst der Beschreibung seiner sprechenden Maschine* in Vienna » ; Kempelen y demande aux lecteurs de développer sa machine [1].
- Avant lui : Erasmus Darwin, Leonhard Euler, Christian Gottlieb Kratzenstein, l'abbé Mical [1]. Après : copies chez Loder (Goethe, 1797), Posch (Berlin, 1806), Wheatstone (1826) [1].
- La machine du Deutsches Museum (Munich), « often called "the speaking machine by Wolfgang von Kempelen" », fait l'objet de recherches sur son « history, context and attribution » [1].
- Voder : présenté aux Expositions de New York et de San Francisco en 1939 ; « a trained technician-usually a young female telephone operator » manipulait touches et pédale [2].
- Helen Harper, opératrice entendue dans les enregistrements de démonstration, « was considered the best » ; maîtrise : « about a year of constant practice » [3].
- Dudley, « Remaking Speech », *JASA* 11(2), oct. 1939 [4] ; Dudley a passé « over 40 years » aux Bell Labs ; vocodeur utilisé pour le chiffrement vocal de la Seconde Guerre mondiale [2] [3].
- Klatt : chercheur au MIT (synthèse depuis le milieu des années 1960), auteur de KlattTalk et MITalk ; DEC licencie l'algorithme → DECtalk ; voix par défaut « Perfect Paul », « based around Klatt's own voice » ; publicité : « can give a vision-impaired person an effective, economical way to work with computers » [5].
- La voix de Stephen Hawking venait d'un CallText 5010 (Speech Plus), lui aussi fondé sur MITalk [5].
- WaveNet : van den Oord, Dieleman, Zen, Simonyan, Vinyals, Graves, Kalchbrenner, Senior, Kavukcuoglu ; arXiv 12 sept. 2016 [6] ; billet du 8 sept. 2016 : audio brut « typically 16,000 samples per second or more » ; « reducing the gap with human performance by over 50% » (anglais américain et mandarin) [7].

**Sources**
1. S. Berdux (Deutsches Museum), « "Eine Kempelensche Sprechmaschine". New insights in speaking machines… », HSCR 2015, p. 50-51 — https://www.isca-archive.org/hscr_2015/berdux15_hscr.pdf — R — en — lu.
2. MIT Technology Review, « Vocal codes », 1er nov. 2003 — https://www.technologyreview.com/2003/11/01/274977/vocal-codes — Pr — en — lu partiellement.
3. Hackaday, « Retrotechtacular: The Voder From Bell Labs », 12 août 2014 — https://hackaday.com/2014/08/12/retrotechtacular-the-voder-from-bell-labs/ — Pr — en — lu.
4. H. Dudley, « Remaking Speech », *JASA* 11(2), 1939, p. 169-177 (Crossref) — https://api.crossref.org/works/10.1121/1.1916020 — P — en — métadonnées seulement.
5. C. Garcia, « Bringing A New Voice to Genius—MITalk, the CallText 5010, and Stephen Hawking's Wheelchair », Computer History Museum, 26 mars 2018 — https://computerhistory.org/blog/how-dectalk-gave-voice-to-a-genius-engineering-stephen-hawkings-wheelchair/ — S — en — lu.
6. A. van den Oord et al., « WaveNet: A Generative Model for Raw Audio », arXiv:1609.03499 — https://arxiv.org/abs/1609.03499 — P — en — résumé seulement.
7. A. van den Oord, S. Dieleman, « WaveNet: A generative model for raw audio », DeepMind, 8 sept. 2016 — https://deepmind.google/discover/blog/wavenet-a-generative-model-for-raw-audio/ — P — en — lu.

**Points d'attention**
- Ne pas dire « première machine parlante » (Kempelen) ni « premier synthétiseur électronique » (Voder) : prédécesseurs attestés [1] ; l'attribution de la machine de Munich est en cours d'étude.
- Nombre d'opératrices formées (20 ? 30 ? sur 300 candidates ?) : chiffres contradictoires dans des sources faibles → écrire « une vingtaine à une trentaine d'opératrices, selon les récits » ou ne pas chiffrer. Le texte de Dudley, Riesz et Watkins (*J. Franklin Inst.* 227, 1939) n'a pas été ouvert.
- Klatt : sa maladie (perte de la voix) est une donnée de santé ; ne pas la publier, même si des articles la mentionnent.
- Date DECtalk : 1983 ou 1984 selon les sources ; la publicité du CHM est datée de 1984.

---

## 5. Reconnaissance vocale : de « Audrey » à Whisper

**Formulation sûre.** En 1952, trois chercheurs des Bell Labs construisent une machine qui
reconnaît les chiffres prononcés par une seule personne en suivant ses formants. Dans les années
1960, des laboratoires japonais (Kyoto, NEC), soviétiques et britanniques progressent, et IBM
montre la « Shoebox » (16 mots). Le programme américain de la DARPA (1971-1976) produit Harpy
(1 011 mots). Puis les modèles statistiques (modèles de Markov cachés), défendus par James et
Janet Baker et par l'équipe de Frederick Jelinek chez IBM, dominent jusqu'aux années 2010, quand
les réseaux de neurones profonds prennent le relais. Whisper (2022) apprend sur 680 000 heures
d'audio.

**Faits clés**
- « In 1952, Davis, Biddulph, and Balashek of Bell Laboratories built a system for isolated digit recognition for a single speaker […] using the formant frequencies » [1] ; article « Automatic Recognition of Spoken Digits », *JASA* 24(6), nov. 1952, p. 637-642 [2].
- Histoire mondiale : Suzuki et Nakata (Tokyo), Sakai et Doshita (université de Kyoto), NEC ; Fry et Denes (University College London) ; Vintsyuk (URSS, programmation dynamique, 1968) ; Itakura (Japon, LPC) [1].
- IBM : Shoebox, « An experimental device designed by IBM in 1961 » ; « would recognize 16 words » ; « first demonstrated at the 1962 World's Fair in Seattle by its developer, William C. Dersch » [3].
- DARPA SUR : Harpy (CMU) « able to recognize speech using a vocabulary of 1,011 words » ; recherche en faisceau ; Hearsay-II et HWIM n'atteignent pas l'objectif en 1976 [1]. Thèse de Bruce Lowerre « HARPY Speech Understanding System », directeur Raj Reddy, mai 1976 [4].
- HMM : James Baker les applique à la parole à CMU (1975) ; « Independently, Frederick Jelinek and collaborators […] applied HMMs to speech at the IBM Thomas J. Watson Research Center » [5].
- Dragon Systems fondée en 1982 par Janet et Jim Baker ; Janet, vice-présidente recherche ; Janet : « It was a very heretical and radical idea » (l'approche purement statistique) [6]. DragonDictate 30K (1990) ; NaturallySpeaking (dictée continue) vendu 99,95 $ en 1998 [6].
- Citation de Jelinek, version de Jelinek lui-même (LREC 2004) : « Whenever I fire a linguist our system performance improves », tirée de sa conférence « Applying Information Theoretic Methods: Evaluation of Grammar Quality », Workshop on Evaluation of NLP Systems, Wayne (Pennsylvanie), décembre 1988 [7]. Il intitule sa conférence de 2004 « Some of my Best Friends are Linguists » [7].
- Apprentissage profond : Hinton, Deng, Yu, Dahl, Mohamed, Jaitly, Senior, Vanhoucke, Nguyen, Kingsbury, Sainath, « Deep Neural Networks for Acoustic Modeling in Speech Recognition: The Shared Views of Four Research Groups », *IEEE Signal Processing Magazine* 29(6), nov. 2012, p. 82-97 [8].
- Whisper : Radford, Kim, Xu, Brockman, McLeavey, Sutskever, arXiv 6 déc. 2022 ; « 680,000 hours of multilingual and multitask supervision » [9] ; dont « 117,000 hours cover 96 other languages » et 125 000 h de traduction vers l'anglais [9]. Le code publié liste 100 codes de langue [10].
- WER : « Word Error Rate = 100 × (Insertions + Substitutions + Deletions) / Total Words in Correct Transcript » ; il peut dépasser 100 % [11]. Exemples vers 2023-2024 : livres audio anglais 1,4 % ; conversations téléphoniques 5,8 à 11 % ; entretiens en anglais afro-américain (CORAAL) 16,2 % ; Common Voice swahili 51,2 % ; FLEURS bengali 50 % [11].

**Sources**
1. B. H. Juang, L. R. Rabiner, « Automatic Speech Recognition – A Brief History of the Technology Development », 2004 — https://web.ece.ucsb.edu/Faculty/Rabiner/ece259/Reprints/354_LALI-ASRHistory-final-10-8.pdf — R — en — lu.
2. Notice Crossref de Davis, Biddulph, Balashek 1952 — https://api.crossref.org/works/10.1121/1.1906946 — P — en — métadonnées seulement.
3. IBM Archives, « (1961) Shoebox » (vidéo 78-013) — https://mediacenter.ibm.com/media/(1961)+Shoebox+-+IBM+Archives+(78-013)/0_4m2ynnkk — P — en — lu (description).
4. CMU Computer Science Department, « Bruce Lowerre » — https://csd.cs.cmu.edu/academics/doctoral/degrees-conferred/bruce-lowerre — S — en — lu.
5. D. Jurafsky, J. H. Martin, *Speech and Language Processing*, 3e éd. (brouillon du 19 août 2026), ch. 16 « Automatic Speech Recognition » — https://web.stanford.edu/~jurafsky/slp3/16.pdf — R — en — lu partiellement.
6. S. Garfinkel, « Enter the Dragon », *MIT Technology Review*, sept. 1998 — https://simson.net/clips/1998/1998.TR.09.EnterTheDragon.pdf — Pr — en — lu.
7. F. Jelinek, « Some of my Best Friends are Linguists », LREC 2004 (diapositives) — http://www.lrec-conf.org/lrec2004/doc/jelinek.pdf — P — en — lu.
8. Microsoft Research, notice de Hinton et al. 2012 — https://www.microsoft.com/en-us/research/publication/deep-neural-networks-for-acoustic-modeling-in-speech-recognition/ — P — en — résumé seulement (+ Crossref).
9. A. Radford et al., « Robust Speech Recognition via Large-Scale Weak Supervision », arXiv:2212.04356 — https://arxiv.org/abs/2212.04356 (et PDF) — P — en — lu partiellement.
10. OpenAI, code de Whisper, `tokenizer.py` — https://raw.githubusercontent.com/openai/whisper/main/whisper/tokenizer.py — P — en — lu (comptage).
11. = [5], § 16.1 et définition du WER — lu.
12. X. Huang, J. Baker, R. Reddy, « A Historical Perspective of Speech Recognition », *CACM* 57(1), 2014, p. 94-103 — https://kk.org/reCCearch/(2014)%20A%20historical%20perspective%20of%20speech%20recognition.pdf — R (auteurs acteurs) — en — lu partiellement.

**Points d'attention**
- « Audrey » : nom donné par des sources secondaires (Wikipédia, blogs) ; ni Juang & Rabiner ni la notice de l'article ne l'emploient. Écrire « la machine de 1952, surnommée plus tard Audrey ». Précision « 97-99 % » : non vérifiée.
- Pages de l'article de 1952 : 637-642 (Crossref) ; Juang & Rabiner écrivent 627-642 (coquille).
- Citation de Jelinek : la forme célèbre « Every time I fire a linguist, the performance of the speech recognizer goes up » n'est pas la sienne ; il donne lui-même « Whenever I fire a linguist our system performance improves » (1988). Une autre version (atelier IEEE de 1985, rapportée par Roger Moore) circule : non vérifiée. Ne la présenter que comme boutade, avec sa source de 2004.
- « James Baker, premier à appliquer les HMM à la parole » (TR 1998) : à nuancer, Jelinek y est arrivé indépendamment [5] ; Juang & Rabiner citent aussi l'IDA. Juang & Rabiner ne nomment que « Jim Baker » pour Dragon : Janet Baker est cofondatrice [6].
- Shoebox : 1961 (conception) / 1962 (démonstration).
- Whisper : 96 langues + anglais à l'entraînement ; ne pas dire « comprend 100 langues » sans préciser que la qualité est très inégale.

---

## 6. Biais et langues peu dotées

**Formulation sûre.** En 2020, une équipe de Stanford a fait transcrire par cinq systèmes
commerciaux (Amazon, Apple, Google, IBM, Microsoft) des entretiens avec 42 personnes blanches et
73 personnes noires aux États-Unis : en moyenne, 35 mots sur 100 étaient mal reconnus pour les
locuteur·rices noir·es, contre 19 sur 100 pour les blanc·hes. Les écarts viennent surtout de
données d'entraînement peu diverses. Pour les langues peu dotées, des projets ouverts comme Common
Voice (Mozilla) et Masakhane (communauté africaine) collectent des données.

**Faits clés**
- Koenecke et al., *PNAS* 117(14), p. 7684-7689, 23 mars 2020 : 19,8 h d'audio, cinq villes ; « an average word error rate (WER) of 0.35 for black speakers compared with 0.19 for white speakers » [1].
- Meilleur système (Microsoft) : 0,27 contre 0,15 ; pire (Apple) : 0,45 contre 0,23 [1].
- Avec un seuil d'inutilisabilité à WER > 0,5 : « 23% of audio snippets of black speakers result in unusable transcripts, whereas only 1.6% of audio snippets of white speakers » [1].
- Sur des phrases identiques, l'écart persiste (Microsoft 0,13 contre 0,07) : le problème est dans le modèle acoustique [1].
- Common Voice : en 2019, « environ 1 400 heures » de plus de 42 000 personnes, 18 langues, sous licence CC0 (domaine public) [2] ; version 27.0 (11 sept. 2026) : 295 langues, 42 593 h dont 29 295 h validées (parole lue) [3].
- Masakhane : « a grassroots organisation whose mission is to strengthen and spur NLP research in African languages » ; « for Africans, by Africans » ; plus de 1 000 participant·es de 30 pays africains (février 2020) [4]. Article collectif (48 auteur·rices, Findings of EMNLP 2020) sur la « participatory research », traduction automatique pour plus de 30 langues [5].
- Ordre de grandeur des grands systèmes : Whisper, 96 langues + anglais à l'entraînement (§ 5) ; Meta MMS (2023), « a single multilingual automatic speech recognition model for 1,107 languages » et identification de 4 017 langues [6]. À comparer aux ~7 000 langues parlées (chiffre non vérifié ici).

**Sources**
1. A. Koenecke, A. Nam, E. Lake, J. Nudell, M. Quartey, Z. Mengesha, C. Toups, J. R. Rickford, D. Jurafsky, S. Goel, « Racial disparities in automated speech recognition », *PNAS* 2020 — https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7149386/fullTextXML — P — en — lu (texte intégral via Europe PMC ; pnas.org : 403).
2. Mozilla, « Common Voice : mutualiser nos voix… », 28 févr. 2019 — https://blog.mozilla.org/press-fr/2019/02/28/common-voice-mutualiser-nos-voix-mozilla-publie-le-plus-grand-jeu-de-donnees-vocales-transcrites-du-domaine-public-a-ce-jour/ — P — fr — lu.
3. Mozilla Common Voice, dépôt `cv-dataset` (README, tableau des versions) — https://raw.githubusercontent.com/common-voice/cv-dataset/main/datasets/scripted-speech/README.md — P — en — lu.
4. Masakhane, page d'accueil — https://www.masakhane.io/ — P — en — lu.
5. W. Nekoto et al., « Participatory Research for Low-resourced Machine Translation… », arXiv:2010.02353 — https://arxiv.org/abs/2010.02353 — P — en — résumé seulement.
6. V. Pratap et al., « Scaling Speech Technology to 1,000+ Languages », arXiv:2305.13516 — https://arxiv.org/abs/2305.13516 — P — en — résumé seulement.

**Points d'attention**
- Les mesures de Koenecke datent de 2019 ; les systèmes ont changé depuis. Écrire « en 2019-2020 ».
- L'étude parle de « black » / « white » speakers et d'AAVE ; traduire par « personnes noires / blanches » et « anglais afro-américain ».
- Licence CC0 : confirmée pour le jeu 2019 [2] ; pour les versions récentes (diffusées via Mozilla Data Collective), je n'ai pas pu lire la licence (page en JavaScript) → « publiées dans le domaine public (CC0) » au passé, ou vérifier.
- Masakhane travaille surtout sur le texte (traduction) ; pour la parole, citer plutôt les projets swahili de Common Voice (§ 10).

---

## 7. Accessibilité

**Formulation sûre.** La reconnaissance vocale sert à sous-titrer automatiquement ; c'est utile
au quotidien, mais les associations de personnes malentendantes rappellent que ces sous-titres
font encore des erreurs et ne doivent pas remplacer un sous-titrage humain pour les informations
vitales. La synthèse vocale permet aux personnes aveugles d'utiliser un ordinateur avec un lecteur
d'écran. Les personnes qui risquent de perdre la parole (par exemple dans la maladie de Charcot)
peuvent enregistrer leur voix à l'avance (« banque de voix ») pour qu'une voix de synthèse leur
ressemble.

**Faits clés**
- Association des malentendants canadiens (AMEC), 14 avril 2020 : la reconnaissance vocale « il s'agit encore d'une technologie relativement nouvelle » ; l'AMEC « s'oppose fermement à l'utilisation de la reconnaissance vocale dans une situation d'urgence pour relayer des informations essentielles et vitales » [1].
- Google Live Transcribe (4 févr. 2019) : « real-time captions using just the phone's microphone », « over 70 languages and dialects » ; conçu avec l'université Gallaudet (établissement pour personnes sourdes et malentendantes) [2].
- NVDA (lecteur d'écran libre, NV Access, organisme caritatif) : permet aux personnes aveugles et malvoyantes d'utiliser Windows ; synthèse vocale intégrée « over 55 languages » ; « 100% free » ; plus de 250 000 utilisateur·rices [3].
- DECtalk (1984) présenté comme outil pour « a vision-impaired person » [§ 4, source 5].
- MND Association (Royaume-Uni) : « Voice banking is where you can record yourself reading a set list of sentences […] A voice banking provider then uses your recording to create a computerised version of your own voice » ; plus efficace avant que la voix soit atteinte ; « message banking » = enregistrer des phrases rejouées telles quelles [4].

**Sources**
1. Association des malentendants canadiens, « COVID-19 et communication accessible pour les Canadiens malentendants », lettre, 14 avril 2020 — https://oldsite.chha.ca/wp-content/uploads/2020/04/Government-Broadcasters-Captions-Letter-fr.pdf — S — fr — lu.
2. B. Kemler (Google), « Making audio more accessible with two new apps », 4 févr. 2019 — https://blog.google/outreach-initiatives/accessibility/making-audio-more-accessible-two-new-apps/ — P — en — lu.
3. NV Access, « About NVDA » — https://www.nvaccess.org/about-nvda/ — P — en — lu.
4. MND Association, fiche 7D « Voice banking and message banking » (2026) — https://www.mndassociation.org/sites/default/files/public/2026-01/7D-Voice-banking-and-message-banking.pdf — S — en — lu partiellement.

**Points d'attention**
- Aucune source française (Arcom, FNSF, ARSLA, Valentin Haüy) trouvée sur ces points précis ; à chercher si une source francophone est préférée.
- Live Transcribe : l'article mentionne la surdité d'un chercheur de Google ; c'est une donnée de santé, ne pas reprendre son nom avec ce détail.
- Les chiffres de « précision » des sous-titres automatiques (80-95 %) viennent de vendeurs : ne pas les utiliser.

---

## 8. Voix clonées, fraudes et règlement européen

**Formulation sûre.** Quelques secondes ou minutes d'enregistrement suffisent désormais pour
imiter une voix, ce qui alimente des escroqueries. En 2024, une employée ou un employé d'Arup à
Hong Kong a viré 200 millions de dollars de Hong Kong après une visioconférence où de faux
dirigeants avaient été fabriqués par IA. La même année, des appels automatiques imitant la voix de
Joe Biden ont visé des électeur·rices du New Hampshire ; le régulateur américain des télécoms a
alors confirmé que les voix générées par IA relèvent des règles sur les voix « artificielles ».
En Europe, le règlement sur l'IA impose de signaler les hypertrucages à partir du 2 août 2026.

**Faits clés**
- Arup (porte-parole, mai 2024) : « We can confirm that fake voices and images were used » ; « Our financial stability and business operations were not affected » [1] [2]. HK$200 millions (environ 25,6 M$) en 15 virements, selon la police citée par RTHK [1].
- FCC, déclaration du 8 févr. 2024 (adoptée le 2) : « the TCPA's restrictions on the use of "artificial or prerecorded voice" encompass current AI technologies that generate human voices » → consentement préalable obligatoire [3]. Communiqué : « FCC makes AI-generated voices in robocalls illegal » [4].
- New Hampshire : appels du 21 janv. 2024, deux jours avant la primaire, imitant la voix de Biden et incitant à ne pas voter ; amende FCC de 6 000 000 $ (adoptée le 26 sept. 2024) pour usurpation d'identifiant d'appel (Truth in Caller ID Act) [5]. Le consultant a été **acquitté** au pénal par un jury du New Hampshire le 13 juin 2025 ; l'opérateur Lingo Telecom a transigé pour 1 M$ [6].
- Règlement (UE) 2024/1689, art. 50 § 4 : « Les déployeurs d'un système d'IA qui génère ou manipule des images ou des contenus audio ou vidéo constituant un hypertrucage indiquent que les contenus ont été générés ou manipulés par une IA. » (exception allégée pour les œuvres « manifestement artistique, créatif, satirique, fictif ») [7].
- Art. 50 § 2 : les fournisseurs veillent à ce que les sorties « soient marquées dans un format lisible par machine et identifiables comme ayant été générées ou manipulées par une IA » [7].
- Art. 50 § 1 : informer les personnes qu'elles « interagissent avec un système d'IA » [7].
- Définition (art. 3, 60) : « hypertrucage », un contenu « généré ou manipulé par l'IA, présentant une ressemblance avec des personnes […] existants et pouvant être perçu à tort par une personne comme authentiques ou véridiques » [7].
- Art. 113 : « Il est applicable à partir du 2 août 2026 » (sauf exceptions) [7].
- « Omnibus numérique » sur l'IA (2026) : selon des cabinets juridiques, l'art. 50 reste au 2 août 2026, sauf un délai jusqu'au 2 décembre 2026 pour le marquage (§ 2) des systèmes déjà sur le marché ; Parlement européen : vote du 16 juin 2026 [8] [9].

**Sources**
1. K. Magramo, « British engineering giant Arup revealed as $25 million deepfake scam victim », CNN, 16-17 mai 2024 — https://edition.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk/index.html — Pr — en — lu.
2. *The Guardian*, « UK engineering firm Arup… deepfake scam », 17 mai 2024 — https://www.theguardian.com/technology/article/2024/may/17/uk-engineering-arup-deepfake-scam-hong-kong-ai-video — Pr — en — lu.
3. FCC, Declaratory Ruling FCC 24-17, CG Docket 23-362 — https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf — P — en — lu partiellement.
4. FCC, communiqué du 8 févr. 2024 — https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf — P — en — lu.
5. FCC, Forfeiture Order FCC 24-104 (30 sept. 2024) — https://docs.fcc.gov/public/attachments/FCC-24-104A1_Rcd.pdf — P — en — lu partiellement.
6. H. Ramer (Associated Press), « New Hampshire jury acquits consultant behind AI robocalls mimicking Biden on all charges », 13 juin 2025 — https://www.ksat.com/news/politics/2025/06/13/new-hampshire-jury-acquits-consultant-behind-ai-robocalls-mimicking-biden-on-all-charges/ — Pr — en — lu partiellement.
7. Règlement (UE) 2024/1689 (JO L du 12.7.2024), version française — https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202401689 — P — fr — lu (texte FR déjà téléchargé dans le scratchpad lors d'une session précédente ; ma requête du jour a renvoyé une page vide, code 202).
8. Gibson Dunn, « EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines… », 27 mai 2026 — https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ — R (cabinet) — en — résumé seulement.
9. iubenda, « Parliament adopts the AI Omnibus », 19 juin 2026 — https://www.iubenda.com/en/blog/ai-omnibus-parliament-adoption-june-2026 — R (éditeur) — en — résumé seulement.

**Points d'attention**
- Ne nommer ni l'employé·e d'Arup ni, de préférence, le consultant (acquitté) : dire « un consultant politique ». L'amende FCC sanctionne l'usurpation du numéro d'appelant, pas la voix IA en soi.
- Affaire de 2019 (faux PDG, 220 000 €, *Wall Street Journal*) : seulement des reprises secondaires (PaymentsJournal, CISO Mag), WSJ non ouvert → éviter, ou citer comme « rapportée ».
- Omnibus : vérifier la publication au JO (UE) avant d'écrire une date pour le § 2 ; la date du 2 août 2026 pour le § 4 (hypertrucages) n'est remise en cause par aucune des sources lues.

---

## 9. Vie privée : assistants vocaux

**Formulation sûre.** En 2019, des journalistes ont révélé que des humains, souvent des
sous-traitants, écoutaient une petite partie des enregistrements d'Alexa (Amazon), de l'Assistant
Google et de Siri (Apple), y compris des déclenchements accidentels. Les entreprises ont expliqué
que cela servait à améliorer la reconnaissance, puis ont renforcé l'information et les options de
refus. En France, la CNIL a publié en 2020 un livre blanc, « À votre écoute », qui rappelle que la
voix est une donnée biométrique.

**Faits clés**
- *The Guardian*, 26 juil. 2019 : des sous-traitants d'Apple entendent des informations confidentielles ; Apple : « less than 1% of daily Siri activations » sont évaluées ; Amazon (avril) et Google (juillet) avaient été mis en cause auparavant [1].
- VRT NWS (Belgique), 10 juil. 2019 : la rédaction a pu écouter « more than a thousand recordings » de Google, dont des conversations « that should never have been recorded » [2].
- Google, 11 juil. 2019 : « Language experts only review around 0.2 percent of all audio snippets » ; extraits non associés aux comptes ; fuite de données audio en néerlandais par un relecteur sous contrat [3].
- Apple, 28 août 2019 : suspension de l'écoute humaine ; « by default, we will no longer retain audio recordings of Siri interactions » ; écoute sur consentement, par des employés d'Apple [4].
- CNIL, *À votre écoute*, collection Livre blanc n° 1, septembre 2020 : « la voix étant une caractéristique biométrique permettant l'identification » ; après les révélations de l'été 2019, « tous les grands acteurs […] (Amazon, Google, Microsoft, Facebook, et Apple) » ont reconnu ces réécoutes ; l'autorité de Hambourg a enjoint Google de suspendre trois mois l'écoute et la transcription [5].

**Sources**
1. A. Hern, « Apple contractors "regularly hear confidential details" on Siri recordings », *The Guardian*, 26 juil. 2019 — https://www.theguardian.com/technology/2019/jul/26/apple-contractors-regularly-hear-confidential-details-on-siri-recordings — Pr — en — lu partiellement.
2. T. Verheyden et al., « Google employees are eavesdropping, even in your living room », VRT NWS, 10 juil. 2019 — https://www.vrt.be/vrtnws/en/2019/07/10/google-employees-are-eavesdropping-even-in-flemish-living-rooms/ — Pr — en — lu partiellement.
3. D. Monsees (Google), « More information about our processes to safeguard speech data », 11 juil. 2019 — https://blog.google/products/assistant/more-information-about-our-processes-safeguard-speech-data/ — P — en — lu.
4. Apple, « Improving Siri's privacy protections », 28 août 2019 — https://www.apple.com/newsroom/2019/08/improving-siris-privacy-protections/ — P — en — lu.
5. CNIL, *À votre écoute. Exploration des enjeux éthiques, techniques et juridiques des assistants vocaux*, sept. 2020 — https://www.cnil.fr/sites/cnil/files/atoms/files/cnil_livre-blanc-assistants-vocaux.pdf — S — fr — lu partiellement.

**Points d'attention**
- Article Bloomberg sur Amazon (10 avril 2019) : bloqué (anti-robot) ; réponse d'Amazon non lue. S'appuyer sur le Guardian [1] et la CNIL [5] pour Amazon.
- Les chiffres (0,2 % ; < 1 %) sont ceux des entreprises, à attribuer comme tels.

---

## 10. Personnes à mettre en avant (faits professionnels)

- **Janet Baker** — Biophysicienne formée à l'université Rockefeller (New York), cofondatrice en 1982 de Dragon Systems avec James Baker, vice-présidente recherche ; défend une approche purement statistique de la reconnaissance, jugée « hérétique » à l'époque [§ 5, 6].
- **Homer Dudley** — Ingénieur des Bell Labs pendant plus de 40 ans ; vocodeur (analyse-synthèse de la parole, années 1930) puis Voder (1939) ; vocodeur réutilisé pour le chiffrement de la voix pendant la guerre [§ 4, 2-4] ; Juang & Rabiner font partir l'histoire de la reconnaissance de son modèle des années 1930 [§ 5, 1].
- **Les opératrices du Voder, dont Helen Harper** — Opératrices (souvent issues du téléphone) formées environ un an ; Helen Harper, réputée la meilleure [§ 4, 2-3].
- **Harriet C. Green** — Coautrice de *Visible Speech* (1947), manuel de lecture des spectrogrammes [§ 3].
- **Gunnar Fant** (1919-2009) — Fonde en 1951 le laboratoire de transmission de la parole de KTH (Stockholm) ; séjour au MIT en 1949 (travaux avec Roman Jakobson et Morris Halle) ; livre de 1960 ; synthétiseurs OVE [§ 2, 1].
- **Tsutomu Chiba et Masato Kajiyama** — *The Vowel: Its Nature and Structure* (Tokyo, 1941/1942), base des théories source-filtre [§ 2, 3].
- **Dennis Klatt** — Chercheur au MIT, auteur de KlattTalk/MITalk, base de DECtalk ; « Perfect Paul » modelée sur sa propre voix [§ 4, 5].
- **Raj Reddy** — Directeur de la thèse de Bruce Lowerre sur Harpy (1976) [§ 5, 4] ; son groupe à CMU a produit Hearsay, Dragon, Harpy et Sphinx I/II (article dont il est coauteur) [§ 5, 12] ; rôle dans Hearsay déjà sourcé dans `ia-intro.md`. La page ACM du prix Turing reste bloquée (Cloudflare).
- **Vladimir Kotelnikov** — Formule et démontre le théorème d'échantillonnage en 1933 (URSS) [§ 1].
- **Allison Koenecke** — Première autrice de l'étude *PNAS* 2020 ; aujourd'hui « Assistant Professor of Information Science at Cornell Tech », travaux sur l'équité algorithmique [§ 6, 1] et https://koenecke.infosci.cornell.edu/ (P, en, lu).
- **Kathleen Siminyu** — « AI Researcher who has focused on Natural Language Processing for African Languages » ; Machine Learning Fellow de la Fondation Mozilla (2021) pour le jeu de données swahili de Common Voice ; avait travaillé sur la transcription des langues luhya et sur la traduction de langues kényanes avec Masakhane ; ancienne coordinatrice régionale d'AI4D Africa. Même annonce : **Britone Mwasaru** (Swahilipot Hub, Mombasa) et **Rebecca Ryakitimbo Mwimbi** (communautés swahiliphones). Source : C. Chair, « Announcing 3 new Common Voice Fellows », Fondation Mozilla, 27 mai 2021 — https://www.mozillafoundation.org/en/blog/announcing-3-new-common-voice-fellows-2021/ — P — en — lu.
- **Li Deng et Xuedong Huang** — Li Deng, deuxième auteur de l'article de 2012 sur les réseaux profonds (Microsoft) [§ 5, 8] ; Xuedong Huang (Microsoft), premier auteur de l'histoire de 2014 [§ 5, 12].
- **Chloé Clavel** — « professeure associée en Affective Computing à Telecom Paris » (en 2020), interviewée par la CNIL sur la reconnaissance des émotions dans la voix [§ 9, 5].
- **Sakai et Doshita** (université de Kyoto) — reconnaisseur de phonèmes des années 1960, premier usage d'un segmenteur de parole selon Juang & Rabiner [§ 5, 1].

**Points d'attention**
- Aucune donnée personnelle : pas de vie familiale (les Baker sont mariés, cela figure dans [§ 5, 6] mais n'apporte rien), pas de santé (Klatt, Kanevsky), pas de lieu de résidence.
- Prénoms de Davis et Biddulph (« Kingsbury », « Rulon ») : seulement dans des sources faibles.

---

## À vérifier plus tard

- Calcul 3 × 294 × 50 = 44 100 (et 3 × 245 × 60) : cohérent mais non trouvé dans une source primaire.
- Norme « Red Book » (1980) : nom et date non vérifiés dans un document Sony/Philips/IEC.
- Kempelen : détails mécaniques de la machine ; Wheatstone 1826 (Berdux) vs 1835 (autres sources).
- Voder : nombre d'opératrices formées et de candidates ; texte de Dudley, Riesz et Watkins (1939).
- Date de sortie de DECtalk (1983 ou 1984).
- « Audrey » (nom), précision 97-99 %, taille de la machine.
- Version 1985 de la citation de Jelinek (Roger Moore).
- Licence CC0 des versions récentes de Common Voice (2024-2026).
- Nombre total de langues dans le monde (~7 000) : non sourcé ici.
- Affaire du faux PDG de 2019 (WSJ, Euler Hermes, 220 000 €) : reprises secondaires seulement.
- Réponse d'Amazon en 2019 (option de refus d'écoute humaine) : non lue.
- Publication au JO de l'« Omnibus numérique » IA et date exacte pour l'art. 50 § 2.
- Données biographiques de Harriet C. Green et Helen Harper.
- Valeurs de formants d'enfants francophones : aucune source trouvée.
