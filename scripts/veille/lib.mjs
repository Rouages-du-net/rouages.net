/** Fonctions partagées par les scripts de la veille (voir docs/VEILLE.md). */
import { readFile } from 'node:fs/promises';
import YAML from 'yaml';

export const ROOT = new URL('../../', import.meta.url);
export const SOURCES_PATH = new URL('data/veille-sources.yaml', ROOT);
export const ITEMS_PATH = new URL('data/veille.json', ROOT);
export const ETAT_PATH = new URL('data/veille-etat.json', ROOT);
export const REVUES_DIR = new URL('src/content/revues/', ROOT);

export async function lireConfig() {
  const doc = YAML.parse(await readFile(SOURCES_PATH, 'utf8'));
  const sources = (doc.sources ?? []).map((s) => ({ max_items: 6, extrait: true, actif: true, themes: [], modules: [], ...s }));
  return { sources, motsCles: doc.modules_par_mot_cle ?? {} };
}

export async function lireJson(url, defaut) {
  try { return JSON.parse(await readFile(url, 'utf8')); } catch { return defaut; }
}

/** Le mot-clé apparaît-il comme mot entier (insensible à la casse) ? */
export function contientMot(texte, mot) {
  const echappe = mot.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^\\p{L}\\p{N}])${echappe}([^\\p{L}\\p{N}]|$)`, 'iu').test(texte);
}

/** Modules concernés par un article : ceux de sa source, plus ceux de ses mots-clés. */
export function modulesDe(texte, sourceModules, motsCles) {
  const m = new Set(sourceModules);
  for (const [mot, mods] of Object.entries(motsCles)) if (contientMot(texte, mot)) for (const x of mods) m.add(x);
  return [...m].sort();
}

/** HTML → texte brut, une ligne, tronqué. */
export function texteBrut(html, max = 220) {
  if (!html) return '';
  let t = String(html)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/\s+/g, ' ')
    .trim();
  if (t.length > max) t = t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
  return t;
}

/** Numéro de semaine ISO et année ISO d'une date. */
export function semaineIso(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const jour = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - jour);
  const debut = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return { annee: date.getUTCFullYear(), semaine: Math.ceil(((date - debut) / 86400000 + 1) / 7) };
}
