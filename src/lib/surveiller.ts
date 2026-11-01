// Les IA qui surveillent : modèles et données du module du même nom.
//   - repérer la fraude : un détecteur inventé face à une fraude rare (la
//     fréquence suit l'ordre de grandeur de la Banque de France) ;
//   - vidéosurveillance algorithmique : part des signalements exacts par cas
//     d'usage, d'après le rapport du Sénat n° 374 (2024-2025).

/** Fonction de répartition de la loi normale (approximation d'Abramowitz et Stegun). */
export function phi(x: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp((-x * x) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x >= 0 ? 1 - p : p;
}

/**
 * En 2024, environ 7,3 millions de paiements par carte frauduleux sur
 * environ 21 milliards (OSMP) : à peu près 1 sur 2 900. Sur 100 000 paiements,
 * cela fait environ 34 fraudes.
 */
export const PAIEMENTS = 100_000;
export const FRAUDES = 34;

/**
 * Détecteur inventé : il donne à chaque paiement un score de suspicion. Les
 * paiements honnêtes ont un score centré sur 0, les fraudes un score centré
 * sur `ecart` (écart-type 1 dans les deux cas). Au-delà du seuil, le paiement
 * est bloqué.
 */
export function alarme(seuil: number, ecart = 3) {
  const reperees = FRAUDES * (1 - phi(seuil - ecart));
  const bloques = (PAIEMENTS - FRAUDES) * (1 - phi(seuil));
  const alertes = reperees + bloques;
  return {
    reperees,
    manquees: FRAUDES - reperees,
    bloques,
    alertes,
    precision: alertes > 0 ? reperees / alertes : 0,
  };
}

// ---- Vidéosurveillance algorithmique ----

export interface Bilan {
  vrais: number; // vrais positifs
  faux: number; // faux positifs
  utiles?: number; // cas jugés pertinents au plan opérationnel
}

export interface CasUsage {
  id: 'intrusion' | 'surdensite' | 'objets';
  ratp?: Bilan;
  sncf?: Bilan;
}

/**
 * Rapport du comité d'évaluation (janvier 2025), § 2.3.5 : RATP pendant les
 * Jeux olympiques ; SNCF sur l'ensemble de l'expérimentation. Le rapport ne
 * détaille pas la surdensité à la SNCF (environ 2 % des signalements).
 */
export const CAS: CasUsage[] = [
  { id: 'intrusion', ratp: { vrais: 1222, faux: 324, utiles: 11 }, sncf: { vrais: 660, faux: 233 } },
  { id: 'surdensite', ratp: { vrais: 305, faux: 41, utiles: 1 } },
  { id: 'objets', ratp: { vrais: 42, faux: 151, utiles: 2 }, sncf: { vrais: 206, faux: 423 } },
];

export const partVrais = (b: Bilan) => Math.round((100 * b.vrais) / (b.vrais + b.faux));
