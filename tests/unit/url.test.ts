import { describe, expect, it } from 'vitest';
import { cheminVersFichier, decouperUrl } from '../../src/lib/url';

describe('decouperUrl', () => {
  it('découpe l’exemple de la RFC 3986', () => {
    const u = decouperUrl('foo://example.com:8042/over/there?name=ferret#nose')!;
    expect(u.schema).toBe('foo');
    expect(u.hote).toBe('example.com');
    expect(u.port).toBe('8042');
    expect(u.chemin).toBe('/over/there');
    expect(u.requete).toBe('name=ferret');
    expect(u.fragment).toBe('nose');
  });
  it('déduit le port par défaut', () => {
    expect(decouperUrl('https://cours.example/reseau/')!.portEffectif).toBe(443);
    expect(decouperUrl('https://cours.example/reseau/')!.portParDefaut).toBe(true);
    expect(decouperUrl('http://cours.example:8080/')!.portEffectif).toBe(8080);
    expect(decouperUrl('sftp://eleve@cours.example/depot/')!.utilisateur).toBe('eleve');
    expect(decouperUrl('pas une url')).toBeNull();
  });
});

describe('cheminVersFichier', () => {
  const F = ['index.html', 'reseau/index.html', 'reseau/ports.html', 'images/logo.png'];
  const R = '/var/www/cours.example';
  it('sert les fichiers et les index', () => {
    expect(cheminVersFichier(R, '/', F)).toEqual({ statut: 200, fichier: `${R}/index.html`, via: 'index' });
    expect(cheminVersFichier(R, '/reseau/ports.html?x=1', F)).toEqual({ statut: 200, fichier: `${R}/reseau/ports.html`, via: 'fichier' });
    expect(cheminVersFichier(R, '/reseau/', F)).toMatchObject({ statut: 200, via: 'index' });
  });
  it('redirige, refuse et ne trouve pas', () => {
    expect(cheminVersFichier(R, '/reseau', F)).toEqual({ statut: 301, vers: '/reseau/' });
    expect(cheminVersFichier(R, '/secret.txt', F)).toMatchObject({ statut: 404 });
    expect(cheminVersFichier(R, '/../etc/passwd', F)).toMatchObject({ statut: 403 });
    expect(cheminVersFichier(R, '/images/%2e%2e/%2e%2e/etc', F)).toMatchObject({ statut: 403 });
  });
});
