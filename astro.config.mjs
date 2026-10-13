import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rouages.net',
  output: 'static',
  // La compression HTML d'Astro supprime l'espace entre un mot et une balise
  // placée en début de ligne suivante (« lesadresses IP ») : on la désactive.
  // Apache compresse de toute façon les pages en gzip (.htaccess).
  compressHTML: false,
  // Apache (cPanel) sert /page/index.html pour /page/
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
