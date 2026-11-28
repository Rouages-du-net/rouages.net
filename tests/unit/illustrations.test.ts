import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { FICHES, inclinaison, licenceAcceptee } from '../../src/lib/illustrations';

describe('illustrations', () => {
  it('accepte seulement les licences libres sans NC ni ND', () => {
    expect(licenceAcceptee('Public domain')).toBe(true);
    expect(licenceAcceptee('CC0')).toBe(true);
    expect(licenceAcceptee('CC BY 2.0')).toBe(true);
    expect(licenceAcceptee('CC BY-SA 4.0')).toBe(true);
    expect(licenceAcceptee('CC BY-NC-SA 2.0')).toBe(false);
    expect(licenceAcceptee('CC BY-ND 4.0')).toBe(false);
    expect(licenceAcceptee('Fair use')).toBe(false);
  });

  it('penche chaque tirage, toujours de la même façon', () => {
    for (const id of ['a', 'pouzin-cyclades', 'next-cern']) {
      const a = inclinaison(id);
      expect(Math.abs(a)).toBeGreaterThanOrEqual(0.8);
      expect(Math.abs(a)).toBeLessThanOrEqual(2.4);
      expect(inclinaison(id)).toBe(a);
    }
  });

  for (const [id, f] of Object.entries(FICHES)) {
    it(`${id} : fichier, texte alternatif, légende et attribution complets`, () => {
      expect(id).toMatch(/^[a-z0-9-]+$/);
      expect(existsSync(`src/assets/illustrations/${f.fichier}`), f.fichier).toBe(true);
      expect(f.alt.trim(), 'alt').not.toBe('');
      expect(f.legende.trim(), 'légende').not.toBe('');
      expect(f.auteur.trim(), 'auteur').not.toBe('');
      expect(licenceAcceptee(f.licence), f.licence).toBe(true);
      expect(f.source).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
    });
  }
});
