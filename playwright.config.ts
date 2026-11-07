import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';

// Tests dans le navigateur, sur le site compilé (npm run build d'abord).
// Localement, le Chromium de l'environnement (/opt/pw-browsers/chromium) est
// utilisé s'il existe ; en CI, celui installé par `npx playwright install`.
const chromiumLocal = process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium';

export default defineConfig({
  testDir: 'tests/navigateur',
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  timeout: 60_000,
  use: {
    baseURL: 'http://localhost:4399',
    launchOptions: {
      executablePath: existsSync(chromiumLocal) ? chromiumLocal : undefined,
      args: ['--headless=new'],
    },
  },
  webServer: {
    command: 'node scripts/servir.mjs',
    url: 'http://localhost:4399/',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
