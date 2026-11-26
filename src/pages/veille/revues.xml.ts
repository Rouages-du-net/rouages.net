// Flux Atom des revues hebdomadaires publiées (draft: false).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { fluxAtom } from '../../lib/atom';

export const GET: APIRoute = async ({ site }) => {
  const revues = await getCollection('revues', ({ data }) => !data.draft);
  return new Response(fluxAtom({
    titre: 'Les rouages du net · Revues de veille',
    sousTitre: 'Chaque semaine, ce qui a bougé dans les rouages d’internet.',
    urlFlux: new URL('/veille/revues.xml', site).href,
    urlSite: new URL('/veille/', site).href,
    auteur: 'Les rouages du net',
    entrees: revues.map((r) => ({ url: new URL(`/veille/revues/${r.id}/`, site).href, titre: r.data.title, resume: r.data.description, publie: r.data.date })),
  }), { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
