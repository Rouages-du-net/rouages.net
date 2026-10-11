import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rouages.net',
  output: 'static',
  // Apache (cPanel) sert /page/index.html pour /page/
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
