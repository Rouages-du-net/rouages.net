#!/usr/bin/env node
// Importe une image de Wikimedia Commons : télécharge une version de 1 200 px
// de large dans src/assets/illustrations/ et ajoute sa fiche (auteur, licence,
// source) à src/data/illustrations.json. Les champs « alt » et « legende »
// restent à écrire à la main : les tests refusent une fiche sans eux.
//
//   node scripts/illustrations/importer.mjs <id> "File:Nom du fichier.jpg"
//
// Licences acceptées : domaine public, CC0, CC BY, CC BY-SA (pas de NC ni ND).
// Voir docs/ILLUSTRATIONS.md.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const UA = 'RouagesDuNet-research/0.1 (https://rouages.net)';
const DONNEES = 'src/data/illustrations.json';
const DOSSIER = 'src/assets/illustrations';
const LARGEUR = 1200;

// Mêmes règles que licenceAcceptee() dans src/lib/illustrations.ts.
export const LICENCE_OK = /^(public domain|domaine public|pd\b|cc0|cc[ -]by(?:[ -]sa)?[ -]\d(\.\d)?)/i;
export const LICENCE_INTERDITE = /\b(nc|nd)\b|non[- ]commercial|no[- ]deriv|fair use/i;

const texte = (html = '') =>
  html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();

function telecharger(url, sortie) {
  const args = ['-sSfL', '--retry', '5', '--retry-delay', '10', '-A', UA, url];
  if (sortie) args.push('-o', sortie);
  return execFileSync('curl', args, { encoding: sortie ? undefined : 'utf8', maxBuffer: 1 << 26 });
}

async function principal() {
  const [id, titre] = process.argv.slice(2);
  if (!id || !/^[a-z0-9-]+$/.test(id) || !titre?.startsWith('File:')) {
    console.error('Usage : node scripts/illustrations/importer.mjs <id-en-minuscules> "File:Nom.jpg"');
    process.exit(1);
  }
  const fiches = existsSync(DONNEES) ? JSON.parse(readFileSync(DONNEES, 'utf8')) : {};
  if (fiches[id]) throw new Error(`L'identifiant « ${id} » existe déjà.`);

  const api = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({
    action: 'query', titles: titre, prop: 'imageinfo', iiprop: 'url|extmetadata|mime',
    iiurlwidth: String(LARGEUR), format: 'json', formatversion: '2',
  }).forEach(([k, v]) => api.searchParams.set(k, v));
  const page = JSON.parse(telecharger(api.href)).query.pages[0];
  if (page.missing) throw new Error(`${titre} : fichier introuvable sur Commons.`);
  const info = page.imageinfo[0];
  const m = info.extmetadata;
  const licence = texte(m.LicenseShortName?.value);
  if (!LICENCE_OK.test(licence) || LICENCE_INTERDITE.test(licence)) {
    throw new Error(`${titre} : licence « ${licence} » non acceptée (domaine public, CC0, CC BY ou CC BY-SA seulement).`);
  }
  // « Unknown author Unknown author » : Commons double parfois le nom (deux balises).
  const dedoubler = (t) => { const mots = t.split(' '); const n = mots.length / 2; return Number.isInteger(n) && mots.slice(0, n).join(' ') === mots.slice(n).join(' ') ? mots.slice(0, n).join(' ') : t; };
  const brut = dedoubler(texte(m.Artist?.value) || texte(m.Credit?.value));
  const auteur = /^unknown( author)?$/i.test(brut) ? 'Auteur·e inconnu·e' : brut;
  if (!auteur) throw new Error(`${titre} : auteur introuvable, à vérifier sur ${info.descriptionurl}.`);

  const ext = info.thumburl.split('?')[0].match(/\.(jpe?g|png|webp|gif)$/i)?.[1].toLowerCase().replace('jpeg', 'jpg') ?? 'png';
  const fichier = `${id}.${ext}`;
  telecharger(info.thumburl, `${DOSSIER}/${fichier}`);

  fiches[id] = {
    fichier,
    alt: '',
    legende: '',
    auteur,
    licence,
    licenceUrl: m.LicenseUrl?.value ?? '',
    source: info.descriptionurl,
    date: texte(m.DateTimeOriginal?.value).slice(0, 60),
    importe: new Date().toISOString().slice(0, 10),
  };
  const trie = Object.fromEntries(Object.entries(fiches).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(DONNEES, JSON.stringify(trie, null, 2) + '\n');
  console.log(`✓ ${fichier} : ${auteur} — ${licence}\n  À compléter dans ${DONNEES} : « alt » et « legende ».`);
}

if (import.meta.url === `file://${process.argv[1]}`) principal().catch((e) => { console.error(e.message); process.exit(1); });
