// Les IA qui agissent : modèles du module du même nom.
//   - un robot qui suit une ligne : boucle perception → décision → action,
//     avec un correcteur proportionnel et un retard de perception (inventé) ;
//   - freiner à temps : la physique du freinage, avec les chiffres du rapport
//     du NTSB sur l'accident de Tempe (2018).

/**
 * Le robot avance à vitesse constante. À chaque pas, il mesure son écart à la
 * ligne (avec `retard` pas de décalage) et s'oriente vers elle d'autant plus
 * fort que l'écart est grand (`gain`), dans la limite d'un angle maximal.
 * Renvoie l'écart à la ligne à chaque pas.
 */
export function suivre(gain: number, retard: number, pas = 160) {
  const dt = 0.1, v = 1;
  let y = 1, cap = 0;
  const ecarts: number[] = [];
  for (let i = 0; i < pas; i++) {
    ecarts.push(y);
    const mesure = ecarts[Math.max(0, i - retard)];
    cap = Math.max(-1.2, Math.min(1.2, -gain * mesure));
    y += v * Math.sin(cap) * dt;
  }
  return ecarts;
}

/** Résumé d'une trajectoire : dépassement, oscillation finale, temps pour rejoindre la ligne. */
export function bilanSuivi(ecarts: number[]) {
  const depassement = Math.max(0, -Math.min(...ecarts));
  const fin = Math.max(...ecarts.slice(-40).map(Math.abs));
  const rejoint = ecarts.findIndex((y) => Math.abs(y) < 0.1);
  return { depassement, fin, rejoint };
}

// ---- Freiner à temps (NTSB, rapport HAR-19/03) ----

export const MPH = 0.44704; // m/s
export const G = 9.81;
/** Vitesse au moment de la première détection : environ 44 mph. */
export const V0 = 44 * MPH;
export const REPERES = [
  { t: 5.6, id: 'detection' },
  { t: 1.2, id: 'urgence' },
  { t: 0.2, id: 'suppression' },
] as const;

/**
 * Si le freinage commence `t` secondes avant le point d'impact (à vitesse
 * constante jusque-là), avec une décélération de `g` fois la gravité : la
 * voiture s'arrête-t-elle à temps, et sinon à quelle vitesse heurte-t-elle ?
 */
export function freiner(t: number, g: number) {
  const a = g * G;
  const dispo = V0 * t; // distance jusqu'au point d'impact
  const arret = (V0 * V0) / (2 * a);
  const reste = V0 * V0 - 2 * a * dispo;
  return {
    dispo,
    arret,
    sArrete: reste <= 0,
    marge: Math.max(0, dispo - arret),
    vImpact: reste > 0 ? Math.sqrt(reste) : 0, // m/s
    tMin: arret / V0, // freinage à commencer au plus tard tant de secondes avant
  };
}
