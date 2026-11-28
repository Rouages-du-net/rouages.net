import { describe, expect, it } from 'vitest';
import {
  abreger, acces, expliquer, appliquerChmod, depuisLettres, depuisOctal, enBinaire, enLettres, enOctal, enSymbolique,
  lignePasswd, resoudre, type Compte, type Fichier,
} from '../../src/lib/linux';

describe('resoudre', () => {
  const maison = '/home/alice';
  it('suit les chemins absolus et relatifs', () => {
    expect(resoudre('/home/alice', '/etc', maison)).toBe('/etc');
    expect(resoudre('/home/alice', 'cours', maison)).toBe('/home/alice/cours');
    expect(resoudre('/home/alice/cours', '..', maison)).toBe('/home/alice');
    expect(resoudre('/home/alice/cours', '../../bob', maison)).toBe('/home/bob');
    expect(resoudre('/home/alice', './cours/./tp', maison)).toBe('/home/alice/cours/tp');
  });
  it('comprend ~ et reste à la racine', () => {
    expect(resoudre('/etc', '~', maison)).toBe('/home/alice');
    expect(resoudre('/etc', '~/cours', maison)).toBe('/home/alice/cours');
    expect(resoudre('/etc', '', maison)).toBe('/home/alice');
    expect(resoudre('/', '..', maison)).toBe('/');
    expect(resoudre('/', '../../..', maison)).toBe('/');
  });
  it('explique chaque étape', () => {
    const e = expliquer('/home/alice', '../bob', maison);
    expect(e[0]).toContain('relatif');
    expect(e.at(-1)).toContain('/home/bob');
    expect(expliquer('/home/alice', '/etc', maison)[0]).toContain('absolu');
    expect(expliquer('/', '..', maison).at(-1)).toContain('racine');
  });
  it('abrège le dossier personnel', () => {
    expect(abreger('/home/alice', maison)).toBe('~');
    expect(abreger('/home/alice/cours', maison)).toBe('~/cours');
    expect(abreger('/home/alicette', maison)).toBe('/home/alicette');
  });
});

describe('écritures des droits', () => {
  it('passe d’une forme à l’autre', () => {
    expect(enLettres(0o750)).toBe('rwxr-x---');
    expect(enOctal(0o750)).toBe('750');
    expect(enOctal(0o7)).toBe('007');
    expect(enBinaire(0o750)).toBe('111 101 000');
    expect(enSymbolique(0o750)).toBe('u=rwx,g=rx,o=');
    expect(enSymbolique(0o644)).toBe('u=rw,g=r,o=r');
  });
  it('relit l’octal et les lettres', () => {
    expect(depuisOctal('644')).toBe(0o644);
    expect(depuisOctal('0755')).toBe(0o755);
    expect(depuisOctal('8')).toBeNull();
    expect(depuisLettres('-rw-r--r--')).toBe(0o644);
    expect(depuisLettres('rwxr-x---')).toBe(0o750);
    expect(depuisLettres('rwz------')).toBeNull();
  });
  it('applique chmod', () => {
    expect(appliquerChmod(0o644, '600')).toBe(0o600);
    expect(appliquerChmod(0o644, 'g+w')).toBe(0o664);
    // « = » sans classe, umask 022 : vérifié avec le vrai chmod (GNU coreutils).
    expect(appliquerChmod(0o777, '=r')).toBe(0o444);
    expect(appliquerChmod(0o777, '=rw')).toBe(0o644);
    expect(appliquerChmod(0o777, '=w')).toBe(0o200);
    expect(appliquerChmod(0o777, 'o-rwx')).toBe(0o770);
    expect(appliquerChmod(0o000, 'u=rw,go=r')).toBe(0o644);
    expect(appliquerChmod(0o644, 'a+x')).toBe(0o755);
    expect(appliquerChmod(0o644, '+x')).toBe(0o755);
    // Sans classe, le masque 022 protège l'écriture du groupe et des autres.
    expect(appliquerChmod(0o444, '+w')).toBe(0o644);
    expect(appliquerChmod(0o666, '=r')).toBe(0o444);
    expect(appliquerChmod(0o644, 'u+q')).toBeNull();
  });
});

describe('acces', () => {
  const alice: Compte = { nom: 'alice', uid: 1000, groupes: ['alice', 'profs'] };
  const bob: Compte = { nom: 'bob', uid: 1001, groupes: ['bob', 'profs'] };
  const eve: Compte = { nom: 'eve', uid: 1002, groupes: ['eve'] };
  const root: Compte = { nom: 'root', uid: 0, groupes: ['root'] };
  const notes: Fichier = { chemin: 'notes.txt', proprietaire: 'alice', groupe: 'profs', mode: 0o640 };
  it('applique la première classe qui correspond', () => {
    expect(acces(alice, notes, 'w').permis).toBe(true);
    expect(acces(bob, notes, 'r').classe).toBe('g');
    expect(acces(bob, notes, 'r').permis).toBe(true);
    expect(acces(bob, notes, 'w').permis).toBe(false);
    expect(acces(eve, notes, 'r').permis).toBe(false);
  });
  it('ne cumule pas les classes', () => {
    const bizarre: Fichier = { chemin: 'f', proprietaire: 'alice', groupe: 'profs', mode: 0o047 };
    const d = acces(alice, bizarre, 'r');
    expect(d.classe).toBe('u');
    expect(d.permis).toBe(false);
    expect(acces(eve, bizarre, 'r').permis).toBe(true);
  });
  it('laisse root passer, sauf pour exécuter sans aucun x', () => {
    expect(acces(root, notes, 'w').permis).toBe(true);
    expect(acces(root, notes, 'x').permis).toBe(false);
    expect(acces(root, { ...notes, mode: 0o700 }, 'x').permis).toBe(true);
  });
});

describe('lignePasswd', () => {
  it('découpe les sept champs', () => {
    expect(lignePasswd('alice:x:1000:1000:Alice,,,:/home/alice:/bin/bash')).toEqual(['alice', 'x', '1000', '1000', 'Alice,,,', '/home/alice', '/bin/bash']);
    expect(lignePasswd('pas:assez')).toBeNull();
  });
});
