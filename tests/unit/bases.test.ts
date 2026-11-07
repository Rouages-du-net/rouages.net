import { describe, expect, it } from 'vitest';
import { depuisBase, divisions, droitsUnix, grouper, poids, versBase } from '../../src/lib/bases';

describe('bases de numération', () => {
  it('écrit un nombre dans une base', () => {
    expect(versBase(13, 2)).toBe('1101');
    expect(versBase(493, 8)).toBe('755');
    expect(versBase(255, 16)).toBe('FF');
    expect(versBase(0, 2)).toBe('0');
    expect(versBase(5, 2, 8)).toBe('00000101');
  });
  it('lit un nombre et refuse les chiffres impossibles', () => {
    expect(depuisBase('ff', 16)).toBe(255);
    expect(depuisBase('2F', 16)).toBe(47);
    expect(depuisBase('129', 8)).toBeNull();
    expect(depuisBase('', 10)).toBeNull();
  });
  it('donne les divisions successives et les poids', () => {
    expect(divisions(13, 2).map((d) => d.reste)).toEqual([1, 0, 1, 1]);
    expect(poids('2F', 16).map((t) => t.valeur)).toEqual([32, 15]);
  });
  it('regroupe les bits depuis la droite', () => {
    expect(grouper('1101101', 4)).toEqual(['110', '1101']);
    expect(grouper('111101101', 3)).toEqual(['111', '101', '101']);
  });
  it('traduit les droits Unix', () => {
    expect(droitsUnix(0o755)).toBe('rwxr-xr-x');
    expect(droitsUnix(0o644)).toBe('rw-r--r--');
  });
  it('fait l’aller-retour pour tous les nombres de 0 à 4 095', () => {
    for (const b of [2, 8, 10, 16]) for (let n = 0; n < 4096; n++) expect(depuisBase(versBase(n, b), b)).toBe(n);
  });
});
