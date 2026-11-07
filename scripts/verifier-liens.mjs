// Vérifie les liens externes du site compilé (dist/) : sources, renvois.
// Usage : npm run build && npm run liens [-- --strict]
// Classe chaque lien : correct, redirigé, refusé aux robots (à vérifier à la
// main dans un navigateur), mort (404, 410), erreur réseau. Écrit un rapport
// Markdown sur la sortie standard et, en CI, dans le résumé de la tâche
// (GITHUB_STEP_SUMMARY). Avec --strict, sort en erreur s'il y a des liens morts.
import { readdirSync, readFileSync, statSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';

const UA = 'RouagesDuNet-liens/0.1 (https://rouages.net)';
const PARALLELE = 6;
const DELAI = 20_000;
const strict = process.argv.includes('--strict');

// 1. Liens externes de toutes les pages, avec les pages qui les citent.
const liens = new Map();
const parcourir = (dossier) => {
  for (const f of readdirSync(dossier)) {
    const chemin = join(dossier, f);
    if (statSync(chemin).isDirectory()) { if (f !== 'pagefind' && f !== '_astro') parcourir(chemin); continue; }
    if (!f.endsWith('.html')) continue;
    const page = '/' + chemin.slice('dist/'.length).replace(/index\.html$/, '');
    for (const m of readFileSync(chemin, 'utf8').matchAll(/href="(https?:\/\/[^"#]+)[^"]*"/g)) {
      const url = m[1].replace(/&amp;/g, '&');
      if (!liens.has(url)) liens.set(url, new Set());
      liens.get(url).add(page);
    }
  }
};
parcourir('dist');

// 2. Requête : HEAD, puis GET si le serveur refuse HEAD.
async function verifier(url) {
  for (const methode of ['HEAD', 'GET']) {
    try {
      const r = await fetch(url, { method: methode, redirect: 'follow', headers: { 'user-agent': UA, accept: '*/*' }, signal: AbortSignal.timeout(DELAI) });
      if (methode === 'HEAD' && [403, 405, 501].includes(r.status)) continue;
      return { statut: r.status, final: r.url !== url ? r.url : null };
    } catch (e) {
      if (methode === 'GET') return { statut: 0, erreur: e.cause?.code ?? e.name };
    }
  }
  return { statut: 0, erreur: 'inconnue' };
}

const urls = [...liens.keys()].sort();
const resultats = [];
for (let i = 0; i < urls.length; i += PARALLELE) {
  const lot = urls.slice(i, i + PARALLELE);
  resultats.push(...(await Promise.all(lot.map(async (u) => ({ url: u, ...(await verifier(u)) })))));
}

// 3. Rapport.
const morts = resultats.filter((r) => r.statut === 404 || r.statut === 410);
const refuses = resultats.filter((r) => [401, 403, 429, 451].includes(r.statut));
const erreurs = resultats.filter((r) => r.statut === 0 || r.statut >= 500);
const autres = resultats.filter((r) => r.statut >= 300 && r.statut < 400 || (r.statut > 400 && r.statut < 500 && !morts.includes(r) && !refuses.includes(r)));
const ok = resultats.length - morts.length - refuses.length - erreurs.length - autres.length;

const ligne = (r) => `| ${r.statut || r.erreur} | ${r.url} | ${[...liens.get(r.url)].join(', ')} |`;
const section = (titre, liste, aide) => liste.length
  ? `\n### ${titre} (${liste.length})\n\n${aide}\n\n| Code | Lien | Pages |\n|---|---|---|\n${liste.map(ligne).join('\n')}\n`
  : '';
const rapport = `## Vérification des liens externes\n\n${resultats.length} liens vérifiés : ${ok} corrects, ${morts.length} morts, ${refuses.length} refusés aux robots, ${erreurs.length} en erreur, ${autres.length} autres.\n`
  + section('Liens morts', morts, 'À remplacer : chercher une archive (web.archive.org) ou une nouvelle adresse, et le noter dans le dossier de sources.')
  + section('Erreurs réseau ou serveur', erreurs, 'Souvent passager : relancer avant de corriger.')
  + section('Refusés aux robots', refuses, 'Le site bloque les programmes : vérifier à la main dans un navigateur.')
  + section('Autres codes', autres, 'À regarder au cas par cas.');

console.log(rapport);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, rapport);
if (strict && morts.length) process.exit(1);
