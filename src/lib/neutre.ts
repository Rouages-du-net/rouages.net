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

// ---- Le dilemme de Collingridge ----

export interface Precautions {
  /** Garder la technique réversible : décisions corrigeables, options ouvertes. */
  reversible: boolean;
  /** Suivre ses effets en continu dès le début, plutôt qu'une fois. */
  suivi: boolean;
}

export const ANNEES = 30;

/**
 * Une technique inventée se diffuse sur 30 ans (courbe en S). On apprend ses
 * effets surtout en la voyant utilisée, et la changer coûte d'autant plus
 * qu'elle est répandue (usines, habitudes, emplois, normes…). Le suivi fait
 * apprendre plus tôt ; la réversibilité rend le changement moins coûteux.
 * Toutes les valeurs sont entre 0 et 1. Modèle inventé.
 */
export function collingridge(annee: number, p: Precautions) {
  const adoption = 1 / (1 + Math.exp(-(annee - 12) / 3));
  const savoir = p.suivi ? 1 - Math.pow(1 - adoption, 2.5) : Math.pow(adoption, 1.5);
  const cout = adoption * (p.reversible ? 0.6 : 1);
  return { adoption, savoir, cout, fenetre: savoir >= 0.5 && cout <= 0.5 };
}

/** Années (entières) où l'on sait assez et où changer reste abordable. */
export function fenetre(p: Precautions) {
  const ans: number[] = [];
  for (let a = 0; a <= ANNEES; a++) if (collingridge(a, p).fenetre) ans.push(a);
  return ans.length ? { debut: ans[0], fin: ans[ans.length - 1] } : null;
}
