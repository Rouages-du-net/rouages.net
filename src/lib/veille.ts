// Accès typé aux données de la veille (data/veille.json, data/veille-sources.yaml).
// Voir docs/VEILLE.md.
import veilleJson from '../../data/veille.json';
import { parse } from 'yaml';
import sourcesYaml from '../../data/veille-sources.yaml?raw';

export interface ArticleVeille {
  titre: string;
  lien: string;
  date: string;
  extrait: string;
  source_id: string;
  source: string;
  themes: string[];
  modules: string[];
  langue: string;
}
export interface SourceVeille { id: string; nom: string; url: string; site?: string; themes: string[]; modules?: string[]; langue?: string; actif?: boolean }

export const THEMES: Record<string, string> = {
  gouvernance: 'Gouvernance d’internet',
  regulation: 'Lois et régulation',
  securite: 'Sécurité',
  ia: 'Intelligence artificielle',
  savoirs: 'Savoirs',
  reseau: 'Réseaux et techniques',
  libertes: 'Libertés',
};

const config = parse(sourcesYaml) as { sources: SourceVeille[]; modules_par_mot_cle: Record<string, string[]> };
export const sources: SourceVeille[] = config.sources.filter((s) => s.actif !== false);
export const motsCles = config.modules_par_mot_cle;
export const articles: ArticleVeille[] = (veilleJson as { items: ArticleVeille[] }).items;
export const genereLe = new Date((veilleJson as { genere_le: string }).genere_le);

/** Jour (Europe/Paris) d'une date ISO, sous la forme AAAA-MM-JJ. */
export const jourDe = (iso: string) => new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(iso));
export function jourLisible(cle: string) {
  const [a, m, j] = cle.split('-').map(Number);
  return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(Date.UTC(a, m - 1, j, 12)));
}

// Titres des modules, lus dans leurs pages (attribut title de <Base>), pour
// afficher « concerne : Savoirs » sans tenir une liste à la main.
const pages = import.meta.glob('../pages/modules/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
export const TITRES_MODULES: Record<string, string> = Object.fromEntries(
  Object.entries(pages).map(([chemin, src]) => [
    chemin.replace(/^.*\/(.+)\.astro$/, '$1'),
    (/title="([^"]+)"/.exec(src)?.[1] ?? chemin).replace(/ : .*$/, ''),
  ]),
);
