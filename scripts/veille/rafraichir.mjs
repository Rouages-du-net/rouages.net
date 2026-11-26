#!/usr/bin/env node
/**
 * Rafraîchit la veille : lit les flux de data/veille-sources.yaml, garde les
 * articles récents, les rattache aux modules du site (source + mots-clés), les
 * fusionne avec data/veille.json, et tient data/veille-etat.json pour repérer
 * les flux morts. Lancé chaque jour par .github/workflows/veille.yml.
 */
import { writeFile } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';
import { lireConfig, lireJson, modulesDe, texteBrut, ITEMS_PATH, ETAT_PATH } from './lib.mjs';

const UA = 'RouagesDuNet-veille/1.0 (+https://rouages.net/veille/)';
const AGE_MAX_JOURS = 90;
const ITEMS_MAX = 600;
const ERREURS_AVANT_ALERTE = 7;

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', trimValues: true });
const texteDe = (v) => (v == null ? '' : typeof v === 'string' || typeof v === 'number' ? String(v) : Array.isArray(v) ? texteDe(v[0]) : typeof v === 'object' ? texteDe(v['#text'] ?? v['@_href'] ?? '') : '');
function lienDe(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v.trim();
  if (Array.isArray(v)) return lienDe(v.find((l) => typeof l === 'object' && (!l['@_rel'] || l['@_rel'] === 'alternate')) ?? v[0]);
  if (typeof v === 'object') return String(v['@_href'] ?? v['#text'] ?? '').trim();
  return '';
}
function dateDe(e) {
  const brut = texteDe(e.pubDate ?? e.published ?? e.updated ?? e['dc:date'] ?? e.date);
  const d = brut ? new Date(brut) : null;
  return d && !Number.isNaN(d.getTime()) ? d : null;
}
/** RSS 2.0, Atom et RSS 1.0 → [{ titre, lien, date, extrait }]. */
function entrees(xml) {
  const doc = parser.parse(xml);
  let liste = [];
  if (doc.rss?.channel) liste = [].concat(doc.rss.channel.item ?? []);
  else if (doc.feed) liste = [].concat(doc.feed.entry ?? []);
  else if (doc['rdf:RDF']) liste = [].concat(doc['rdf:RDF'].item ?? []);
  return liste.map((e) => ({
    titre: texteBrut(texteDe(e.title), 200),
    lien: lienDe(e.link) || texteDe(e.guid) || texteDe(e.id),
    date: dateDe(e),
    extrait: texteBrut(texteDe(e.summary ?? e.description ?? e['content:encoded'] ?? e.content), 220),
  }));
}
async function lireFlux(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'application/atom+xml, application/rss+xml, application/xml;q=0.9, */*;q=0.8' },
    signal: AbortSignal.timeout(20000),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const texte = await res.text();
  if (!/<(rss|feed|rdf:RDF)[\s>]/.test(texte.slice(0, 3000))) throw new Error('réponse sans flux RSS ou Atom');
  return texte;
}

const { sources, motsCles } = await lireConfig();
const existant = await lireJson(ITEMS_PATH, { items: [] });
const etat = await lireJson(ETAT_PATH, {});
const maintenant = new Date();
const parLien = new Map(existant.items.map((it) => [it.lien, it]));
let ajoutes = 0;

for (const s of sources) {
  if (!s.actif) continue;
  const st = (etat[s.id] ??= { erreurs_consecutives: 0 });
  try {
    let liste = entrees(await lireFlux(s.url)).filter((e) => e.titre && /^https?:\/\//.test(e.lien));
    if (s.mots_cles?.length) {
      liste = liste.filter((e) => s.mots_cles.some((k) => `${e.titre} ${e.extrait}`.toLowerCase().includes(String(k).toLowerCase())));
    }
    liste.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
    for (const e of liste.slice(0, s.max_items)) {
      const date = e.date ?? maintenant;
      if ((maintenant - date) / 86400000 > AGE_MAX_JOURS || parLien.has(e.lien)) continue;
      parLien.set(e.lien, {
        titre: e.titre,
        lien: e.lien,
        date: date.toISOString(),
        extrait: s.extrait ? e.extrait : '',
        source_id: s.id,
        source: s.nom,
        themes: s.themes,
        modules: modulesDe(`${e.titre} ${e.extrait}`, s.modules, motsCles),
        langue: s.langue ?? 'fr',
        vu_le: maintenant.toISOString(),
      });
      ajoutes++;
    }
    Object.assign(st, { erreurs_consecutives: 0, dernier_succes: maintenant.toISOString(), dernier_message: `${liste.length} entrées lues` });
    console.log(`✓ ${s.nom} : ${liste.length} entrées`);
  } catch (err) {
    st.erreurs_consecutives += 1;
    st.derniere_erreur = maintenant.toISOString();
    st.dernier_message = String(err.message ?? err);
    const alerte = st.erreurs_consecutives >= ERREURS_AVANT_ALERTE ? ' ⚠ flux probablement mort' : '';
    console.log(`✗ ${s.nom} : ${st.dernier_message} (${st.erreurs_consecutives} échec(s) consécutif(s))${alerte}`);
  }
}

const items = [...parLien.values()]
  .filter((it) => (maintenant - new Date(it.date)) / 86400000 <= AGE_MAX_JOURS)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, ITEMS_MAX);
await writeFile(ITEMS_PATH, JSON.stringify({ genere_le: maintenant.toISOString(), items }, null, 2) + '\n');
await writeFile(ETAT_PATH, JSON.stringify(etat, null, 2) + '\n');
console.log(`${ajoutes} nouvel(s) article(s), ${items.length} au total dans data/veille.json`);
