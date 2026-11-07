import { readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import type { Page } from '@playwright/test';

// Toutes les pages du site compilé (fichiers index.html de dist), sauf le jeu intégré.
export function pages(): string[] {
  const racine = 'dist';
  const liste: string[] = [];
  const parcourir = (dossier: string) => {
    for (const f of readdirSync(dossier)) {
      const chemin = join(dossier, f);
      if (statSync(chemin).isDirectory()) { if (f !== 'pagefind' && f !== '_astro') parcourir(chemin); }
      else if (f === 'index.html') liste.push('/' + relative(racine, dossier).split(sep).filter(Boolean).map((s) => s + '/').join(''));
    }
  };
  parcourir(racine);
  // Le jeu Quêtes de Sysadmin est chargé depuis son propre site : testé dans son dépôt.
  return liste.filter((u) => !u.includes('quetes-de-sysadmin')).sort();
}

/** Lecture « tout sur une page » : toutes les étapes sont affichées, donc mesurées. */
export async function lectureContinue(page: Page) {
  await page.addInitScript(() => {
    try { localStorage.setItem('rouages-lecture', 'continu'); } catch { /* stockage indisponible */ }
  });
}

/** Erreurs JavaScript et messages d'erreur de la console. */
export function erreurs(page: Page): string[] {
  const liste: string[] = [];
  page.on('pageerror', (e) => liste.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') liste.push(m.text()); });
  return liste;
}

export const largeur = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth);
