# Charte des sources

**Tout est sourcé.** Chaque fait, date, chiffre ou citation publié sur le site
renvoie à au moins une source, et chaque page affiche sa date de dernière
vérification.

## Hiérarchie des sources

Du plus fiable au moins fiable, pour un même fait :

1. **Sources primaires** : RFC et normes (IETF, W3C, IEEE), articles
   scientifiques originaux, textes de loi et décisions de justice, archives,
   rapports officiels, documentation technique de référence.
2. **Travaux d'historien·nes et de chercheur·ses** : livres et articles
   universitaires, thèses.
3. **Presse de qualité et vulgarisation reconnue** : enquêtes journalistiques,
   musées (Computer History Museum, musée des Arts et Métiers…), revues de
   vulgarisation.
4. **Wikipédia**, voir ci-dessous.

Pour un fait contesté ou surprenant : **au moins deux sources
indépendantes**, dont une de niveau 1 ou 2.

## Wikipédia

Wikipédia est un excellent **renvoi « pour aller plus loin »** quand l'article
est bien fait. Règles :

- On y renvoie quand l'article est **détaillé, sourcé et à jour** : de
  préférence un article labellisé (*Article de qualité* ou *Bon article* sur
  Wikipédia en français, *Featured* / *Good article* en anglais), sinon un
  article qu'on a relu et dont les sources sont solides.
- On préfère l'article **en français** s'il est de qualité comparable ;
  sinon on renvoie vers l'anglais (ou la langue la plus pertinente) en le
  signalant : *(en anglais)*.
- Wikipédia **ne suffit pas seule** pour un fait contesté, un chiffre ou une
  citation : on remonte à la source qu'elle cite, et c'est celle-ci qu'on
  cite.
- On lie vers l'article, pas vers une version figée, sauf pour justifier un
  point précis (lien vers la révision).

Bonus : quand on constate qu'un article sur une personne oubliée manque ou
est pauvre, on peut le signaler au projet *Women in Red* ou l'améliorer.

## Sur chaque page

En bas de chaque page, un encart **Sources** (composant `Sources.astro`) :

- la liste des sources, avec leur type (primaire, recherche, presse,
  Wikipédia) ;
- la mention de la langue si ce n'est pas le français ;
- la date de dernière vérification.

Pour les sujets qui bougent vite (IA, régulation, procès comme celui de
Sci-Hub), la date de vérification est aussi affichée **en haut** de la page.

## Liens morts

Pour les sources web, conserver aussi un lien d'archive (Internet Archive /
archive.today) dans le code source de la page, pour pouvoir le substituer si
le lien d'origine disparaît.

## Dossiers de sources

Les recherches détaillées (faits vérifiés, sources, archives, labels
Wikipédia, points d'attention) sont rangées par thème dans `docs/sources/` :

- [Histoire d'internet](sources/internet.md)
- [Histoire de l'informatique](sources/informatique.md)
- [Histoire de l'IA](sources/ia.md)
