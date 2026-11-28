import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { MODULES_RELUS, estRelu, slugModule } from '../../src/data/relecture';

describe('relecture des modules', () => {
  it('reconnaît le slug d’un module', () => {
    expect(slugModule('/modules/linux/')).toBe('linux');
    expect(slugModule('/modules/linux')).toBe('linux');
    expect(slugModule('/ia/')).toBeNull();
    expect(estRelu('/a-propos/')).toBe(false);
  });

  for (const [slug, date] of Object.entries(MODULES_RELUS)) {
    it(`${slug} : validé seulement avec une grille entièrement cochée`, () => {
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(existsSync(`src/pages/modules/${slug}.astro`), 'page du module').toBe(true);
      const grille = `docs/relecture/${slug}.md`;
      expect(existsSync(grille), grille).toBe(true);
      const texte = readFileSync(grille, 'utf8');
      const restantes = texte.split('\n').filter((l) => /^\s*- \[ \]/.test(l));
      expect(restantes, 'cases non cochées').toEqual([]);
      expect(texte).toMatch(/^\s*- \[x\]/im);
    });
  }
});
