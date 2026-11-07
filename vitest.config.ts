import { defineConfig } from 'vitest/config';

// Tests unitaires (calculs et données). Les tests dans le navigateur sont dans
// tests/navigateur/ et passent par Playwright (playwright.config.ts).
export default defineConfig({
  test: { include: ['tests/unit/**/*.test.ts'] },
});
