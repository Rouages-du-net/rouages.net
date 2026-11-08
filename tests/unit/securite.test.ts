import { describe, expect, it } from 'vitest';
import { alphabet, cesar, cleProbable, dureeForceBrute, dureeLisible, entropie, frequences, hasardSur, phrase } from '../../src/lib/securite';
import { MOTS } from '../../src/data/mots-phrases';

describe('entropie et tirage', () => {
  it('liste de 512 mots distincts, faciles à taper', () => {
    expect(MOTS.length).toBe(512);
    expect(new Set(MOTS).size).toBe(512);
    for (const m of MOTS) expect(m).toMatch(/^[a-z]+$/);
  });
  it('calcule l’entropie', () => {
    expect(entropie(512, 6)).toBe(54);
    expect(entropie(7776, 1)).toBeCloseTo(12.925, 3);
    expect(entropie(1, 10)).toBe(0);
  });
  it('mesure l’alphabet d’un mot de passe', () => {
    expect(alphabet('abc')).toBe(26);
    expect(alphabet('P@ssw0rd!')).toBe(26 + 26 + 10 + 33);
  });
  it('tire sans biais et rejette les valeurs hors limite', () => {
    let appels = 0;
    const faux = (t: Uint32Array) => { t[0] = appels++ === 0 ? 0xffff_ffff : 7; return t; };
    expect(hasardSur(10, faux)).toBe(7);
    expect(appels).toBe(2);
    expect(phrase(MOTS, 5)).toHaveLength(5);
  });
  it('estime la durée d’une attaque par force brute', () => {
    expect(dureeForceBrute(10, 512)).toBe(1);
    expect(dureeLisible(0.2)).toBe('moins d’une seconde');
    expect(dureeLisible(90)).toBe('1,5 minute');
    expect(dureeLisible(3 * 365.25 * 86400)).toBe('3 ans');
  });
});

describe('César et al-Kindi', () => {
  it('chiffre et déchiffre', () => {
    expect(cesar('Écrire à César', 3)).toBe('HFULUH D FHVDU');
    expect(cesar(cesar('BONJOUR', 7), -7)).toBe('BONJOUR');
  });
  it('compte les lettres', () => {
    const f = frequences('Été');
    expect(f[4]).toBe(2);
    expect(f[19]).toBe(1);
  });
  it('retrouve la clé d’un texte français assez long', () => {
    const clair = 'Le message est chiffre avec une cle secrete que seule la personne qui le recoit devrait connaitre entre elles';
    expect(cleProbable(cesar(clair, 11))).toBe(11);
  });
});
