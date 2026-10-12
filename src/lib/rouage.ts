// Tracé SVG d'un rouage : `dents` dents trapézoïdales entre les rayons
// `interieur` et `exterieur`, centré en (0, 0). Le trou central est ajouté
// par le composant (règle fill-rule="evenodd").
export function traceRouage(dents = 8, exterieur = 10, interieur = 7.6, trou = 3): string {
  const pas = (2 * Math.PI) / dents;
  const pt = (r: number, a: number) => `${(r * Math.cos(a)).toFixed(3)} ${(r * Math.sin(a)).toFixed(3)}`;
  const segments: string[] = [];
  for (let i = 0; i < dents; i++) {
    const a = i * pas;
    // Base de la dent plus large que son sommet : 0,30 et 0,20 du pas.
    segments.push(
      `${i === 0 ? 'M' : 'L'}${pt(interieur, a - pas * 0.3)}`,
      `L${pt(exterieur, a - pas * 0.18)}`,
      `L${pt(exterieur, a + pas * 0.18)}`,
      `L${pt(interieur, a + pas * 0.3)}`,
      `A${interieur} ${interieur} 0 0 1 ${pt(interieur, a + pas * 0.7)}`,
    );
  }
  segments.push('Z');
  // Trou central, en deux demi-cercles.
  segments.push(`M${trou} 0 A${trou} ${trou} 0 1 0 ${-trou} 0 A${trou} ${trou} 0 1 0 ${trou} 0 Z`);
  return segments.join(' ');
}
