import { describe, expect, it } from 'vitest';
import { FRISE_INTERNET } from '../../src/data/histoire-internet';
import { FRISE_INFORMATIQUE } from '../../src/data/histoire-informatique';
import { FRISE_IA } from '../../src/data/histoire-ia';
import { FICHES } from '../../src/data/vrai-ou-faux';
import { GLOSSAIRE } from '../../src/data/glossaire';

const FRISES = { internet: FRISE_INTERNET, informatique: FRISE_INFORMATIQUE, ia: FRISE_IA };
const url = (u: string) => /^https?:\/\/[^\s]+$/.test(u);

describe.each(Object.entries(FRISES))('frise %s', (_nom, frise) => {
  it('chaque événement a une région, un thème et une source', () => {
    for (const e of frise.evenements) {
      expect(frise.regions[e.region], `${e.titre} : région ${e.region}`).toBeTruthy();
      expect(frise.themes[e.theme], `${e.titre} : thème ${e.theme}`).toBeTruthy();
      expect(url(e.source.url), `${e.titre} : ${e.source.url}`).toBe(true);
      expect(e.source.titre.length).toBeGreaterThan(5);
    }
  });
  it('n’a pas deux événements au même titre', () => {
    const titres = frise.evenements.map((e) => e.titre);
    expect(new Set(titres).size).toBe(titres.length);
  });
});

describe('fiches Vrai ou faux', () => {
  it('ont un identifiant unique, du contenu et des sources', () => {
    const slugs = FICHES.map((f) => f.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const f of FICHES) {
      expect(f.sources.length, f.slug).toBeGreaterThan(0);
      expect(f.vrai.length + f.faux.length, f.slug).toBeGreaterThan(0);
      expect(f.verifie).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const s of f.sources) expect(url(s.url), `${f.slug} : ${s.url}`).toBe(true);
      if (f.module) expect(f.module.lien).toMatch(/^\//);
    }
  });
});

describe('glossaire', () => {
  it('ne renvoie qu’à des termes qui existent', () => {
    for (const [id, e] of Object.entries(GLOSSAIRE))
      for (const v of e.voirAussi ?? []) expect(GLOSSAIRE[v], `${id} → ${v}`).toBeTruthy();
  });
});
