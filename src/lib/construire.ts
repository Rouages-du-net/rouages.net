// Construire ensemble, en simulation, pour le module « Construire ensemble »
// (section « L'intelligence collective ») :
//   - des veilleur·ses qui réparent une page vandalisée (wiki) ;
//   - des volontaires qui classent des galaxies et votent (sciences
//     participatives) ;
//   - une ressource partagée, avec ou sans règles (les communs d'Ostrom).
// Modèles simplifiés et chiffres inventés, pour montrer des mécanismes.

// ---- Patrouille d'un wiki ----

/**
 * n modifications malveillantes arrivent sur une page. Chaque veilleur·se
 * regarde la page à chaque minute avec la probabilité `attention` ; la
 * première personne qui la voit annule la modification. Renvoie, pour
 * chaque vandalisme, le nombre de minutes pendant lesquelles il est resté
 * visible (au plus `maxi`).
 */
export function patrouille(alea: () => number, n: number, veilleurs: number, attention = 0.01, maxi = 600): number[] {
  const p = 1 - Math.pow(1 - attention, veilleurs); // au moins une personne regarde
  return Array.from({ length: n }, () => {
    if (veilleurs === 0) return maxi;
    let t = 1;
    while (t < maxi && alea() >= p) t++;
    return t;
  });
}

// ---- Galaxies ----

export type Forme = 'spirale' | 'elliptique';

/**
 * Chaque galaxie reçoit `votes` classements de volontaires, justes chacun
 * avec la probabilité `fiabilite`. Le classement retenu est celui de la
 * majorité (en cas d'égalité, la galaxie reste « à revoir »).
 */
export function galaxies(alea: () => number, n: number, votes: number, fiabilite: number) {
  return Array.from({ length: n }, () => {
    const vraie: Forme = alea() < 0.5 ? 'spirale' : 'elliptique';
    let pour = 0;
    for (let v = 0; v < votes; v++) if (alea() < fiabilite) pour++;
    const contre = votes - pour;
    const verdict: Forme | 'a-revoir' = pour > contre ? vraie : pour < contre ? (vraie === 'spirale' ? 'elliptique' : 'spirale') : 'a-revoir';
    return { vraie, verdict, accord: Math.max(pour, contre) / votes };
  });
}

// ---- Les communs ----

export type Regle = 'aucune' | 'quota' | 'quota-surveille';

/**
 * Un lac partagé par `usagers` pêcheur·ses, sur `saisons` saisons. Les
 * poissons se reproduisent (croissance logistique, capacité 100). Sans
 * règle, chacun·e pêche autant qu'il·elle peut. Avec un quota, le groupe se
 * fixe une prise totale qui laisse le stock se renouveler, mais une partie
 * triche s'il n'y a pas de surveillance. Avec surveillance et sanctions
 * graduées, la triche ne paie plus.
 */
export function lac(regle: Regle, saisons = 30, usagers = 6) {
  const K = 100, r = 0.5;
  let stock = 80;
  const historique: { stock: number; prise: number }[] = [];
  for (let s = 0; s < saisons; s++) {
    const croissance = r * stock * (1 - stock / K);
    // Envie de pêche de chacun·e : 4 unités (le lac peut en nourrir ~12,5 en tout).
    const envie = 4;
    const quota = (0.9 * r * K) / 4 / usagers; // 90 % de la prise durable maximale, partagée
    let prise: number;
    if (regle === 'aucune') prise = usagers * envie;
    else if (regle === 'quota') {
      const tricheurs = Math.min(usagers, 2); // sans surveillance, deux personnes dépassent
      prise = (usagers - tricheurs) * quota + tricheurs * envie;
    } else prise = usagers * quota;
    prise = Math.min(prise, stock + croissance);
    stock = Math.max(0, stock + croissance - prise);
    historique.push({ stock, prise });
  }
  const total = historique.reduce((s, h) => s + h.prise, 0);
  return { historique, total };
}
