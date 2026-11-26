// Flux Atom des liens de la veille : chaque entrée pointe vers l'article chez sa source.
import type { APIRoute } from 'astro';
import { fluxAtom } from '../../lib/atom';
import { articles } from '../../lib/veille';

export const GET: APIRoute = ({ site }) =>
  new Response(fluxAtom({
    titre: 'Les rouages du net · Veille, les liens',
    sousTitre: 'Ce qui bouge dans les rouages d’internet, chaque jour.',
    urlFlux: new URL('/veille/feed.xml', site).href,
    urlSite: new URL('/veille/', site).href,
    auteur: 'Les rouages du net',
    entrees: articles.slice(0, 60).map((a) => ({ url: a.lien, titre: `${a.titre} (${a.source})`, resume: a.extrait || a.titre, publie: new Date(a.date), categories: a.themes })),
  }), { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
