# Les rouages du net — consignes pour Claude

Site de vulgarisation (internet, informatique, IA), animé et didactique,
**sans masquer la vraie technologie**. Voir `docs/VISION.md`.

## Langue

Tout le contenu du site, la documentation, les messages de commit et les PR
sont **en français**. Écriture inclusive au point médian quand c'est naturel
(« lanceur·ses d'alerte »).

## Flux de travail

- **Ouvrir une PR automatiquement à la fin de chaque travail**, vers `main`,
  sans attendre qu'on la demande.
- Si la PR précédente de la branche a été fusionnée, repartir de `main` à jour
  avant de commencer.
- Avant de pousser : `npm run build` doit passer ; pour tout changement visible,
  vérifier la page dans Chromium (Playwright, `executablePath:
  '/opt/pw-browsers/chromium'`, `args: ['--headless=new']`), y compris à 375 px
  de large (pas de défilement horizontal) et sans erreur console.
- Ne jamais lancer `pkill -f` avec un motif qui figure dans sa propre ligne de
  commande (cela tue le shell) ; arrêter le serveur de prévisualisation avec
  `npx astro preview stop` ou par son PID.

## Hébergement

Hébergement mutualisé **cPanel** (Apache) : le site doit rester **100 %
statique** (Astro, `output: 'static'`). Pas de serveur Node, pas de base de
données. Déploiement par FTP via `.github/workflows/deploy.yml` à chaque push
sur `main`. Voir `docs/STACK.md`.

## Contenu : sources

Respecter `docs/SOURCES.md` :

- tout fait publié est sourcé ; sources primaires d'abord ;
- deux sources indépendantes pour un fait contesté ou surprenant ;
- Wikipédia seulement en renvoi « pour aller plus loin », label vérifié ;
- chaque page affiche ses sources (`<Sources>`) et sa date de vérification ;
- les dossiers de recherche vont dans `docs/sources/`.

Ligne éditoriale : histoire mondiale (pas seulement l'Occident), mettre en
avant les femmes et minorités, démonter les mythes (« premier·e X »,
attributions uniques), présenter toutes les parties sur les sujets
controversés. Ne jamais publier de donnée personnelle sensible (lieu de
résidence, prénom de naissance d'une personne trans…) ni d'adresse de site
illégal.

## Recherches déléguées à des agents

Consignes à donner à tout agent de recherche web :

- **aucune donnée personnelle de l'utilisateur** (adresse e-mail comprise)
  dans les requêtes ; User-Agent générique :
  `RouagesDuNet-research/0.1 (https://rouages.net)` ;
- **aucun fichier écrit dans le dépôt** : fichiers de travail dans le
  scratchpad uniquement ;
- ne citer que des URL réellement ouvertes ; signaler ce qui n'a été lu
  qu'en résumé ou métadonnées ;
- espacer les requêtes à l'API Wikipédia (limitation forte, erreurs 429).

## Code

- Composants dans `src/components/` : `Niveaux` et `SelecteurNiveau` (lecture
  🟢/🟡/🔴), `Terme` (glossaire, données dans `src/data/glossaire.ts`), `Etape`,
  `Sources`.
- Couleurs et typographie : uniquement via les variables de
  `src/styles/global.css` (voir `docs/CHARTE.md`) ; mode sombre obligatoire.
- Accessibilité : contenu lisible sans JavaScript, équivalent texte de chaque
  animation, `prefers-reduced-motion` respecté, navigation au clavier, contraste
  AA.
- Aucun pisteur, aucune ressource tierce (polices et scripts servis par le
  site lui-même).

## Commandes

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview   # sert dist/
```
