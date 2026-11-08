import { expect, test, type Locator } from '@playwright/test';
import { erreurs, lectureContinue } from './outils';

test.beforeEach(async ({ page }) => { await lectureContinue(page); });

async function jusquAuBout(anim: Locator) {
  const suivant = anim.locator('[data-action="suivant"]');
  for (let i = 0; i < 20 && !(await suivant.isDisabled()); i++) await suivant.click();
}

test.describe('frises', () => {
  for (const [module, region] of [['histoire-internet', 'afrique'], ['histoire-informatique', 'europe-est'], ['histoire-ia', 'asie']]) {
    test(`${module} : les filtres masquent les événements`, async ({ page }) => {
      const err = erreurs(page);
      await page.goto(`/modules/${module}/`);
      const frise = page.locator('[data-frise-histoire]');
      const total = await frise.locator('.evenements > li').count();
      expect(await frise.locator('.evenements > li:visible').count()).toBe(total);
      await frise.locator(`input[value="${region}"]`).check();
      const n = await frise.locator('.evenements > li:visible').count();
      expect(n).toBeGreaterThan(0);
      expect(n).toBeLessThan(total);
      await expect(frise.locator('[data-compte]')).toContainText(`${n} événement`);
      await frise.locator('[data-pionnieres]').check();
      expect(await frise.locator('.evenements > li:visible').count()).toBeLessThanOrEqual(n);
      expect(err).toEqual([]);
    });
  }
});

test('bases : paquets, compteur et conversion', async ({ page }) => {
  await page.goto('/modules/bases/');
  const paquets = page.locator('[data-paquets]');
  await jusquAuBout(paquets);
  await expect(paquets.locator('[data-ecriture]')).toContainText('1101');
  const compteur = page.locator('[data-compteur-rouages]');
  await compteur.locator('[data-valeur]').fill('15');
  await compteur.locator('[data-valeur]').dispatchEvent('change');
  await compteur.locator('[data-plus="1"]').click();
  await expect(compteur.locator('[data-ecrit]')).toHaveText(['16', '20', '10', '10000']);
  const conversion = page.locator('[data-conversion]');
  await jusquAuBout(conversion);
  await expect(conversion.locator('[data-resultat]')).toContainText('1101');
});

test('adresses IP : masque et IPv6', async ({ page }) => {
  await page.goto('/modules/adresses-ip/');
  const masque = page.locator('[data-masque]');
  await masque.locator('[data-prefixe="17"]').click();
  await expect(masque.locator('dd').nth(1)).toHaveText('255.255.128.0');
  await masque.locator('[data-m]').fill('255.0.255.0');
  await masque.locator('[data-m]').dispatchEvent('change');
  await expect(masque.locator('.anim-legende')).toContainText('pas un masque valide');
  const v6 = page.locator('[data-ipv6]');
  await jusquAuBout(v6);
  await expect(v6.locator('[data-resultat]')).toHaveText('2001:db8::1');
});

test('sous-réseaux : plan VLSM et exercices', async ({ page }) => {
  await page.goto('/modules/sous-reseaux/');
  const plan = page.locator('[data-plan-vlsm]');
  await jusquAuBout(plan);
  await expect(plan.locator('.attrib code')).toHaveText(['192.0.2.0/25', '192.0.2.128/26', '192.0.2.192/27', '192.0.2.224/31']);
  const ex = page.locator('[data-exercices]');
  const solution = (await ex.locator('[data-solution]').textContent())!;
  await ex.locator('[data-reponse]').fill(solution);
  await ex.locator('[data-form] button').click();
  await expect(ex.locator('[data-verdict]')).toHaveText('Juste !');
});

test('recherche : trouve une notion et renvoie à l’étape', async ({ page }) => {
  await page.goto('/recherche/?q=masque');
  await expect(page.locator('[data-etat]')).toContainText('pour « masque »');
  await expect(page.locator('.resultats .etapes a[href*="/modules/adresses-ip/#"]').first()).toBeVisible();
});

test('index des notions : notions, personnes, modules', async ({ page }) => {
  await page.goto('/notions/');
  expect(await page.locator('.entree').count()).toBeGreaterThan(50);
  expect(await page.locator('.personnes li').count()).toBeGreaterThan(100);
  await expect(page.locator('.entree', { hasText: 'Masque de sous-réseau' }).locator('.usages')).toContainText('Adresses IP et masques');
});

test('portes logiques : bon nombre d’entrées et sortie juste', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/ordinateur/');
  const anim = page.locator('[data-portes]');
  const fils = anim.locator('[data-schema] [data-fil]');
  const lampe = anim.locator('[data-lampe]');
  // Portes à deux entrées : fils A, B et sortie.
  for (const porte of ['et', 'ou', 'oux', 'nonet']) {
    await anim.locator(`[data-porte="${porte}"]`).click();
    await expect(fils).toHaveCount(3);
    await expect(anim.locator('.verite tbody tr')).toHaveCount(4);
  }
  // NON : une seule entrée, B débranché, table de deux lignes.
  await anim.locator('[data-porte="non"]').click();
  await expect(fils).toHaveCount(2);
  await expect(anim.locator('[data-entree="b"]')).toBeDisabled();
  await expect(anim.locator('.verite tbody tr')).toHaveCount(2);
  await expect(lampe).toHaveClass(/allumee/);
  await anim.locator('[data-entree="a"]').click();
  await expect(lampe).not.toHaveClass(/allumee/);
  await expect(anim.locator('[data-fil="a"]')).toHaveClass(/allume/);
  // ET avec A = 1, B = 1 : lampe allumée.
  await anim.locator('[data-porte="et"]').click();
  await anim.locator('[data-entree="b"]').click();
  await expect(lampe).toHaveClass(/allumee/);
  expect(err).toEqual([]);
});

test('gouvernance technique : tri des RFC, hum, racine, adresses', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/gouvernance-technique/');
  const tri = page.locator('[data-tri-rfc]');
  await expect(tri.locator('[data-carte]')).toContainText('RFC 791');
  await tri.locator('[data-statut="Internet Standard"]').click();
  await expect(tri.locator('.anim-legende')).toContainText('Oui');
  await tri.locator('[data-action="suivante"]').click();
  await expect(tri.locator('[data-carte]')).toContainText('RFC 1149');
  await tri.locator('[data-statut="Proposed Standard"]').click();
  await expect(tri.locator('.anim-legende')).toContainText('Expérimentale');
  const hum = page.locator('[data-hum]');
  await jusquAuBout(hum);
  await expect(hum.locator('[data-etat]')).toContainText('Consensus approximatif');
  const racine = page.locator('[data-racine]');
  await racine.locator('.lettre', { hasText: 'M' }).click();
  await expect(racine.locator('.anim-legende')).toContainText('WIDE Project');
  expect(await racine.locator('.pt.choisi').count()).toBe(3);
  const adresse = page.locator('[data-adresse]');
  await jusquAuBout(adresse);
  await expect(adresse.locator('.anim-legende')).toContainText('Ton appareil');
  expect(err).toEqual([]);
});
