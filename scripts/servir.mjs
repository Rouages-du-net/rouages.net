// Petit serveur statique pour les tests (sert dist/), sans dépendance.
// `astro preview` passe en arrière-plan quand il n'a pas de terminal, ce que
// le webServer de Playwright prend pour un arrêt : d'où ce serveur.
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const racine = join(process.cwd(), 'dist');
const port = Number(process.env.PORT ?? 4399);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.wasm': 'application/wasm', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

createServer((req, res) => {
  const chemin = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
  let fichier = normalize(join(racine, chemin));
  if (!fichier.startsWith(racine)) { res.writeHead(403).end(); return; }
  if (existsSync(fichier) && statSync(fichier).isDirectory()) fichier = join(fichier, 'index.html');
  if (!existsSync(fichier)) {
    res.writeHead(404, { 'content-type': TYPES['.html'] });
    createReadStream(join(racine, '404.html')).on('error', () => res.end()).pipe(res);
    return;
  }
  res.writeHead(200, { 'content-type': TYPES[extname(fichier)] ?? 'application/octet-stream' });
  createReadStream(fichier).pipe(res);
}).listen(port, () => console.log(`dist/ servi sur http://localhost:${port}/`));
