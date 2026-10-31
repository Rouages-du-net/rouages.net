// La technique est-elle neutre ? Trois mécanismes, pour le module du même
// nom (section « Penser la technique ») :
//   - le paradoxe de Jevons : plus d'efficacité peut faire consommer plus ;
//   - un pont trop bas : une hauteur décide qui passe ;
//   - le code comme régulateur (L. Lessig) : loi, normes, marché, architecture.
// Modèles et chiffres inventés.

/**
 * Jevons. Le coût d'un service (une heure de vidéo, une tonne de fer…) est
 * proportionnel à l'énergie qu'il demande, donc à 1/efficacité. La demande
 * suit le prix avec une élasticité ε : demande ∝ coût^(−ε). Énergie totale =
 * demande / efficacité ∝ efficacité^(ε−1). Si ε > 1, gagner en efficacité
 * fait consommer davantage d'énergie.
 */
export function jevons(efficacite: number, elasticite: number) {
  const demande = Math.pow(efficacite, elasticite);
  return { demande, energie: demande / efficacite };
}

// ---- Le pont ----

export interface Vehicule {
  id: 'velo' | 'voiture' | 'camionnette' | 'bus';
  hauteur: number; // en mètres
  /** Part (inventée) des personnes d'une ville qui n'ont que ce moyen pour aller à la plage. */
  part: number;
}
export const VEHICULES: Vehicule[] = [
  { id: 'velo', hauteur: 1.8, part: 0.1 },
  { id: 'voiture', hauteur: 1.6, part: 0.55 },
  { id: 'camionnette', hauteur: 2.6, part: 0.05 },
  { id: 'bus', hauteur: 3.4, part: 0.3 },
];
export const passe = (v: Vehicule, pont: number) => v.hauteur < pont - 0.1;

// ---- Le code comme régulateur ----

export interface Leviers {
  loi: boolean;
  normes: boolean;
  marche: boolean;
  architecture: boolean;
}

/**
 * 1 000 personnes veulent copier un fichier protégé ; chacune y gagne un
 * peu, plus ou moins. La loi ajoute un coût attendu (amende × risque), les
 * normes un coût social, le marché baisse l'intérêt (une offre légale bon
 * marché), l'architecture rend la copie impossible sauf pour les rares
 * personnes capables de contourner la protection. Renvoie la part qui copie.
 */
export function copier(alea: () => number, l: Leviers) {
  let n = 0;
  for (let i = 0; i < 1000; i++) {
    const envie = alea() * 10;
    const expert = alea() < 0.05;
    let cout = 2;
    if (l.loi) cout += 3;
    if (l.normes) cout += 2;
    const interet = l.marche ? envie - 4 : envie;
    if (l.architecture && !expert) continue;
    if (interet > cout) n++;
  }
  return n / 1000;
}
