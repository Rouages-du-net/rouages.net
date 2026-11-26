import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import YAML from 'yaml';
// @ts-expect-error module JavaScript sans types
import { contientMot, modulesDe, semaineIso, texteBrut } from '../../scripts/veille/lib.mjs';

const config = YAML.parse(readFileSync('data/veille-sources.yaml', 'utf8'));

describe('sources de la veille', () => {
  it('ont un identifiant unique, une URL et des thèmes connus', () => {
    const ids = config.sources.map((s: { id: string }) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    const themes = ['gouvernance', 'regulation', 'securite', 'ia', 'savoirs', 'reseau', 'libertes'];
    for (const s of config.sources) {
      expect(s.url, s.id).toMatch(/^https:\/\//);
      for (const t of s.themes) expect(themes, `${s.id} : ${t}`).toContain(t);
    }
  });
  it('ne renvoient qu’à des modules qui existent', () => {
    const tous = [...config.sources.flatMap((s: { modules?: string[] }) => s.modules ?? []), ...Object.values(config.modules_par_mot_cle).flat()] as string[];
    for (const m of new Set(tous)) expect(existsSync(`src/pages/modules/${m}.astro`), m).toBe(true);
  });
});

describe('rattachement aux modules', () => {
  it('cherche des mots entiers', () => {
    expect(contientMot('La situation est claire', 'uit')).toBe(false);
    expect(contientMot('Élection à l’UIT', 'uit')).toBe(true);
    expect(contientMot('Le DSA frappe Temu', 'dsa')).toBe(true);
    expect(contientMot('Sci-Hub bloqué', 'sci-hub')).toBe(true);
  });
  it('ajoute les modules des mots-clés à ceux de la source', () => {
    expect(modulesDe('Nouvelle procédure contre Sci-Hub', ['etats-regulation'], { 'sci-hub': ['savoirs'] })).toEqual(['etats-regulation', 'savoirs']);
  });
  it('nettoie le HTML et calcule la semaine ISO', () => {
    expect(texteBrut('<p>Bonjour &amp; <b>salut</b></p>')).toBe('Bonjour & salut');
    expect(semaineIso(new Date(2026, 10, 23))).toEqual({ annee: 2026, semaine: 48 });
  });
});
