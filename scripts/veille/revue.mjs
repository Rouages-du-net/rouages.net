#!/usr/bin/env node
/**
 * Prépare la revue hebdomadaire : un brouillon (draft: true) dans
 * src/content/revues/, avec les articles des sept derniers jours groupés par
 * thème et la liste des modules du site touchés par l'actualité (pages à
 * revérifier). Le texte éditorial est rédigé ensuite (par un humain, ou par la
 * tâche programmée décrite dans docs/VEILLE.md), puis relu avant draft: false.
 * Ne réécrit jamais un brouillon existant.
 */
import { writeFile, access, mkdir } from 'node:fs/promises';
import { lireJson, semaineIso, ITEMS_PATH, REVUES_DIR } from './lib.mjs';

const THEMES = { gouvernance: 'Gouvernance d’internet', regulation: 'Lois et régulation', securite: 'Sécurité', ia: 'Intelligence artificielle', savoirs: 'Savoirs et accès ouvert', reseau: 'Réseaux et techniques', libertes: 'Libertés' };
const maintenant = new Date();
const { annee, semaine } = semaineIso(maintenant);
const slug = `${annee}-s${String(semaine).padStart(2, '0')}`;
const sortie = new URL(`${slug}.md`, REVUES_DIR);
try { await access(sortie); console.log(`${slug}.md existe déjà, rien à faire.`); process.exit(0); } catch { /* à créer */ }

const depuis = new Date(maintenant.getTime() - 7 * 86400000);
const { items = [] } = await lireJson(ITEMS_PATH, { items: [] });
const recents = items.filter((it) => new Date(it.date) >= depuis);
if (recents.length === 0) { console.log('Aucun article sur sept jours, pas de revue.'); process.exit(0); }

const fmt = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'Europe/Paris' });
const parTheme = new Map();
for (const it of recents) {
  const t = it.themes[0] ?? 'reseau';
  if (!parTheme.has(t)) parTheme.set(t, []);
  parTheme.get(t).push(it);
}
const parModule = new Map();
for (const it of recents) for (const m of it.modules ?? []) {
  if (!parModule.has(m)) parModule.set(m, []);
  parModule.get(m).push(it);
}
const echappe = (s) => s.replace(/[[\]]/g, (c) => `\\${c}`);
const lignes = [];
for (const [theme, liste] of [...parTheme.entries()].sort((a, b) => b[1].length - a[1].length)) {
  lignes.push(`## ${THEMES[theme] ?? theme}`, '');
  for (const it of liste) lignes.push(`- [${echappe(it.titre)}](${it.lien}), ${it.source}, ${fmt.format(new Date(it.date))}.${it.extrait ? ` ${it.extrait}` : ''}`);
  lignes.push('');
}
const aVerifier = [...parModule.entries()].sort((a, b) => b[1].length - a[1].length)
  .map(([m, l]) => `- \`/modules/${m}/\` : ${l.length} article(s) — ${l.slice(0, 3).map((it) => `« ${it.titre} »`).join(' ; ')}`);

const md = `---
title: "Revue de veille, semaine ${semaine} de ${annee}"
description: "Ce qui a bougé cette semaine dans les rouages d’internet : ${recents.length} liens choisis."
date: ${maintenant.toISOString().slice(0, 10)}
draft: true
---

<!-- Brouillon généré par scripts/veille/revue.mjs. Avant publication :
     1. rédiger trois à cinq points saillants, chacun avec sa source ;
     2. élaguer la liste des liens ;
     3. vérifier les modules signalés plus bas et ouvrir une PR si un fait a changé ;
     4. supprimer la section « Modules à revérifier » et passer draft: false. -->

## Les points saillants

<!-- à rédiger -->

${lignes.join('\n')}
## Modules à revérifier (à retirer avant publication)

${aVerifier.join('\n') || '- aucun'}
`;
await mkdir(REVUES_DIR, { recursive: true });
await writeFile(sortie, md);
console.log(`Brouillon écrit : src/content/revues/${slug}.md (${recents.length} articles, ${parModule.size} module(s) touché(s))`);
