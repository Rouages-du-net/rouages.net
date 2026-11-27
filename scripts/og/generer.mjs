#!/usr/bin/env node
/**
 * Génère public/og.png (1200 × 630), l'image d'aperçu quand on partage un lien
 * rouages.net. À relancer seulement si la charte change :
 *   node scripts/og/generer.mjs   (Node 24 : il lit directement src/lib/rouage.ts)
 * Les couleurs reprennent celles de src/styles/global.css (thème clair).
 * Utilise Chromium via Playwright (variable CHROMIUM pour un autre chemin).
 */
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { traceRouage } from '../../src/lib/rouage.ts';

const racine = new URL('../../', import.meta.url);
const police = (p) => new URL(`node_modules/${p}`, racine).href;
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
@font-face { font-family: Bricolage; src: url(${police('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}); font-weight: 200 800; }
@font-face { font-family: Atkinson; src: url(${police('@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2')}); font-weight: 200 800; }
@font-face { font-family: Pixel; src: url(${police('@fontsource/silkscreen/files/silkscreen-latin-400-normal.woff2')}); }
html, body { margin: 0; width: 1200px; height: 630px; }
body { background-color: #f5f7ff; color: #141a3a; font-family: Atkinson;
  background-image: linear-gradient(rgba(43,79,216,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(43,79,216,.08) 1px, transparent 1px),
    linear-gradient(rgba(43,79,216,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(43,79,216,.08) 1px, transparent 1px);
  background-size: 30px 30px, 30px 30px, 150px 150px, 150px 150px; display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; padding: 0 70px; box-sizing: border-box; }
.sur { font-family: Pixel; color: #c62853; font-size: 26px; margin: 0; }
h1 { font-family: Bricolage; font-weight: 800; font-size: 104px; line-height: .95; margin: 12px 0 22px; letter-spacing: -1px; }
.du { font-family: Pixel; font-weight: 400; font-size: 52px; padding: 0 10px; background: #ffd23f; border: 4px solid #141a3a; border-radius: 8px; vertical-align: 14px; }
p.promesse { font-size: 31px; line-height: 1.35; margin: 0; max-width: 600px; }
.url { margin-top: 26px; display: inline-block; font-family: Pixel; font-size: 24px; padding: 6px 14px; border: 3px solid #141a3a; border-radius: 10px; background: #fff; box-shadow: 6px 6px 0 #141a3a; }
svg { width: 100%; }
</style></head><body>
<div><p class="sur">// ouvre le capot</p><h1>Les rouages <span class="du">du</span> net</h1>
<p class="promesse">Internet, l'informatique et l'IA expliqués avec des animations, sans masquer la vraie technologie.</p>
<span class="url">rouages.net</span></div>
<svg viewBox="0 0 320 220">
  <path d="M40 30 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#ffd23f" stroke="#141a3a" stroke-width="1.5"/>
  <path d="M268 22 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#ffd23f" stroke="#141a3a" stroke-width="1.5"/>
  <path d="M70 150 C 110 150, 110 90, 160 90 S 220 150, 252 150" fill="none" stroke="#4d567f" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
  <rect x="22" y="122" width="52" height="38" rx="5" fill="#fff" stroke="#141a3a" stroke-width="3"/><rect x="14" y="160" width="68" height="8" rx="3" fill="#fff" stroke="#141a3a" stroke-width="3"/>
  <text x="48" y="146" text-anchor="middle" font-family="Atkinson" font-weight="700" font-size="16" fill="#2b4fd8">:)</text>
  <rect x="250" y="112" width="48" height="74" rx="6" fill="#fff" stroke="#141a3a" stroke-width="3"/>
  <line x1="258" y1="132" x2="290" y2="132" stroke="#4d567f" stroke-width="3" stroke-linecap="round"/><line x1="258" y1="150" x2="290" y2="150" stroke="#4d567f" stroke-width="3" stroke-linecap="round"/><line x1="258" y1="168" x2="290" y2="168" stroke="#4d567f" stroke-width="3" stroke-linecap="round"/>
  <circle cx="286" cy="124" r="3" fill="#1e7a46"/>
  <path transform="translate(160 90) scale(2.4)" d="${traceRouage(10)}" fill-rule="evenodd" fill="#2b4fd8" stroke="#141a3a" stroke-width=".6"/>
  <path transform="translate(196 58) scale(1.4)" d="${traceRouage(8)}" fill-rule="evenodd" fill="#c62853" stroke="#141a3a" stroke-width=".8"/>
  <circle cx="112" cy="122" r="6" fill="#ffd23f" stroke="#141a3a" stroke-width="2.5"/>
</svg></body></html>`;

const navigateur = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const page = await navigateur.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
// Une page chargée depuis un fichier peut lire les polices locales (file://).
const gabarit = join(tmpdir(), 'rouages-og.html');
await writeFile(gabarit, html);
await page.goto(pathToFileURL(gabarit).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const sortie = fileURLToPath(new URL('public/og.png', racine));
await page.screenshot({ path: sortie });
await navigateur.close();
await rm(gabarit);
console.log(`Image écrite : ${sortie}`);
