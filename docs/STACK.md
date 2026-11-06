# Choix techniques

## Contrainte : hébergement cPanel

Un hébergement cPanel mutualisé sert très bien des **fichiers statiques**
(Apache). Pas besoin de Node.js sur le serveur : on génère le site en local
(ou sur GitHub Actions) puis on envoie le dossier `dist/` dans `public_html/`.

## Stack

| Besoin | Choix | Pourquoi |
|---|---|---|
| Générateur de site | **[Astro](https://astro.build)** (sortie statique) | Pages en Markdown/MDX, zéro JavaScript par défaut, composants interactifs seulement là où il faut |
| Contenu | **MDX** | On écrit du texte et on y insère des composants animés |
| Composants interactifs | **Svelte** (à ajouter en phase 1) | Léger, très adapté aux animations |
| Visualisations | **D3** / SVG | Cartes, frises, graphes d'acteurs |
| Schémas | **Mermaid** | Diagrammes en texte, faciles à maintenir |
| IA dans le navigateur | **Transformers.js** ou modèle maison minuscule | Démonstrations sans serveur |
| Recherche | **[Pagefind](https://pagefind.app)** (index fabriqué après `astro build`, servi dans `/pagefind/`) | Recherche plein texte sans serveur ni service tiers ; ce qui est indexé : le `<main>` des pages (`data-pagefind-body`), sauf les sources, réglages, bulles du glossaire (`data-pagefind-ignore`) ; une page s'exclut avec `<Base indexer={false}>` |
| Langues | i18n d'Astro (FR d'abord, EN ensuite) | Prévu dès le départ, ajouté plus tard |
| Mesure d'audience | Aucune, ou une solution sans cookie auto-hébergée | Cohérent avec le propos |

## Arborescence

```
.
├── docs/                 Vision, feuille de route, recherches
├── public/               Fichiers copiés tels quels (dont .htaccess)
├── src/
│   ├── layouts/          Gabarits de page
│   ├── pages/            Pages du site (une page = un fichier)
│   └── styles/           CSS global
├── astro.config.mjs
└── .github/workflows/    Déploiement vers cPanel
```

## Développer en local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/ puis l'index de recherche (dist/pagefind/)
npm run preview   # sert dist/ localement
```

## Déployer sur cPanel

### Option A — À la main

1. `npm run build`
2. Dans cPanel → **Gestionnaire de fichiers**, ouvrir `public_html/`
   (ou le dossier du domaine `rouages.net`)
3. Envoyer le **contenu** de `dist/` (pas le dossier lui-même), y compris
   le fichier caché `.htaccess`

### Option B — Automatique avec GitHub Actions (recommandé)

Le fichier `.github/workflows/deploy.yml` construit le site et l'envoie par
FTP à chaque push sur `main`.

1. Dans cPanel → **Comptes FTP**, créer un compte dédié dont le dossier est
   celui du site (ex. `public_html/`).
2. Dans GitHub → *Settings → Secrets and variables → Actions*, ajouter :
   - `FTP_SERVER` : ex. `ftp.rouages.net`
   - `FTP_USERNAME` : ex. `deploy@rouages.net`
   - `FTP_PASSWORD`
   - *(optionnel)* `FTP_SERVER_DIR` : dossier distant, par défaut `./`
     (relatif au dossier du compte FTP)
3. Pousser sur `main` : le site est en ligne.

Seuls les fichiers modifiés sont envoyés (l'action garde un état sur le
serveur dans `.ftp-deploy-sync-state.json`).

> Si votre hébergeur propose FTPS, il est utilisé automatiquement
> (`protocol: ftps`). Sinon, passer à `ftp` dans le workflow.

### Le `.htaccess`

`public/.htaccess` active HTTPS forcé, la compression, le cache longue durée
des fichiers versionnés d'Astro (`/_astro/`), et la page 404.
