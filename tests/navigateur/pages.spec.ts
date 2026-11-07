import { expect, test } from '@playwright/test';
import { erreurs, largeur, lectureContinue, pages } from './outils';

// Chaque page : aucune erreur, pas de défilement horizontal, à 1000 et 375 px,
// avec JavaScript ; et sans JavaScript, les textes de repli remplacent les scènes.
for (const url of pages()) {
  test.describe(url, () => {
    for (const w of [1000, 375]) {
      test(`${w} px, avec JavaScript`, async ({ page }) => {
        await page.setViewportSize({ width: w, height: 900 });
        await lectureContinue(page);
        const err = erreurs(page);
        await page.goto(url);
        await page.waitForLoadState('networkidle');
        expect(await largeur(page), 'défilement horizontal').toBeLessThanOrEqual(w);
        expect(err).toEqual([]);
        // Les scènes animées ont pris la place de leur repli.
        expect(await page.locator('.anim-repli:visible').count()).toBe(0);
      });
    }
    test('375 px, sans JavaScript', async ({ browser }) => {
      const contexte = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
      const page = await contexte.newPage();
      await page.goto(url);
      expect(await largeur(page), 'défilement horizontal').toBeLessThanOrEqual(375);
      expect(await page.locator('.anim-scene:visible').count(), 'scènes visibles sans JavaScript').toBe(0);
      await contexte.close();
    });
  });
}
