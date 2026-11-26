// Générateur de flux Atom minimal et sans dépendance (repris de datascience.fr).
export interface EntreeAtom { url: string; titre: string; resume: string; publie: Date; maj?: Date; categories?: readonly string[] }
export interface FluxAtom { titre: string; sousTitre?: string; urlFlux: string; urlSite: string; auteur: string; entrees: EntreeAtom[] }

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function fluxAtom(o: FluxAtom): string {
  const entrees = [...o.entrees].sort((a, b) => b.publie.getTime() - a.publie.getTime());
  const maj = entrees[0]?.maj ?? entrees[0]?.publie ?? new Date(0);
  const l = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="fr">',
    `  <title>${esc(o.titre)}</title>`,
    ...(o.sousTitre ? [`  <subtitle>${esc(o.sousTitre)}</subtitle>`] : []),
    `  <id>${esc(o.urlFlux)}</id>`,
    `  <link rel="self" type="application/atom+xml" href="${esc(o.urlFlux)}"/>`,
    `  <link rel="alternate" type="text/html" href="${esc(o.urlSite)}"/>`,
    `  <updated>${maj.toISOString()}</updated>`,
    `  <author><name>${esc(o.auteur)}</name></author>`,
  ];
  for (const e of entrees) {
    l.push('  <entry>', `    <id>${esc(e.url)}</id>`, `    <title>${esc(e.titre)}</title>`,
      `    <link rel="alternate" type="text/html" href="${esc(e.url)}"/>`,
      `    <published>${e.publie.toISOString()}</published>`, `    <updated>${(e.maj ?? e.publie).toISOString()}</updated>`,
      `    <summary type="text">${esc(e.resume)}</summary>`);
    for (const c of e.categories ?? []) l.push(`    <category term="${esc(c)}"/>`);
    l.push('  </entry>');
  }
  l.push('</feed>', '');
  return l.join('\n');
}
