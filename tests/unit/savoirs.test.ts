import { describe, expect, it } from 'vitest';
import { ajouterMois, article30 } from '../../src/lib/savoirs';

describe('ajouterMois', () => {
  it('ajoute des mois et garde le dernier jour du mois', () => {
    expect(ajouterMois('2026-01-15', 6)).toBe('2026-07-15');
    expect(ajouterMois('2026-08-31', 6)).toBe('2027-02-28');
    expect(ajouterMois('2027-08-31', 6)).toBe('2028-02-29');
    expect(ajouterMois('2026-11-26', 12)).toBe('2027-11-26');
  });
});

describe('article30', () => {
  it('donne 6 mois en STM et 12 en SHS', () => {
    expect(article30({ publication: '2026-03-10', discipline: 'stm', periodique: true, fondsPublics: true }).date).toBe('2026-09-10');
    expect(article30({ publication: '2026-03-10', discipline: 'shs', periodique: true, fondsPublics: true }).date).toBe('2027-03-10');
  });
  it('ne s’applique ni aux livres ni aux recherches surtout privées', () => {
    expect(article30({ publication: '2026-03-10', discipline: 'stm', periodique: false, fondsPublics: true }).applicable).toBe(false);
    const r = article30({ publication: '2026-03-10', discipline: 'stm', periodique: true, fondsPublics: false });
    expect(r.applicable).toBe(false);
    expect(r.raisons[0]).toContain('fonds publics');
  });
});
