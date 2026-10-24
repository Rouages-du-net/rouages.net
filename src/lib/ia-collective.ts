// L'IA, fruit d'une intelligence collective, pour le module du même nom
// (section « L'intelligence collective ») :
//   - le mélange de données d'entraînement de GPT-3 (Brown et al., 2020,
//     tableau 2.2) ;
//   - la règle de vote de reCAPTCHA pour déchiffrer un mot (von Ahn et al.,
//     2008) ;
//   - un modèle de récompense appris à partir de comparaisons humaines, comme
//     dans l'apprentissage par renforcement à partir de retours humains (modèle
//     de Bradley-Terry).
// Le mélange et la règle de vote sont ceux des articles ; mots, personnes,
// réponses et préférences sont inventés.

// ---- Données d'entraînement de GPT-3 ----

export interface Source {
  nom: string;
  /** Quantité, en milliards de tokens. */
  tokens: number;
  /** Part des exemples d'entraînement tirés de cette source. */
  poids: number;
  /** Nombre de fois où la source est vue pendant l'entraînement (300 milliards de tokens). */
  passages: number;
}

export const MELANGE_GPT3: Source[] = [
  { nom: 'Common Crawl (filtré)', tokens: 410, poids: 0.6, passages: 0.44 },
  { nom: 'WebText2', tokens: 19, poids: 0.22, passages: 2.9 },
  { nom: 'Books1', tokens: 12, poids: 0.08, passages: 1.9 },
  { nom: 'Books2', tokens: 55, poids: 0.08, passages: 0.43 },
  { nom: 'Wikipédia', tokens: 3, poids: 0.03, passages: 3.4 },
];

/** Tire n exemples d'entraînement selon les poids du mélange ; renvoie l'indice de la source de chacun. */
export function tirerExemples(alea: () => number, n: number, melange = MELANGE_GPT3): number[] {
  const total = melange.reduce((s, m) => s + m.poids, 0);
  return Array.from({ length: n }, () => {
    let r = alea() * total;
    for (let i = 0; i < melange.length; i++) {
      r -= melange[i].poids;
      if (r < 0) return i;
    }
    return melange.length - 1;
  });
}

// ---- reCAPTCHA ----

export interface Lecture {
  /** Qui a lu : un logiciel de reconnaissance de caractères ou une personne. */
  par: 'ocr' | 'humain';
  texte: string;
}

export interface Dechiffrage {
  lectures: Lecture[];
  /** Mot retenu, ou null s'il a été abandonné comme illisible. */
  retenu: string | null;
  /** Nombre de personnes sollicitées. */
  humains: number;
}

/**
 * Déchiffre un mot avec la règle publiée : chaque réponse humaine compte pour
 * une voix, chaque lecture d'un des deux OCR pour une demi-voix ; un mot est
 * retenu dès qu'une lecture atteint 2,5 voix. Une personne lit juste avec la
 * probabilité `justesse`, sinon fait une faute de frappe ; chaque OCR lit
 * juste avec la probabilité `ocrJuste`. Au-delà de `maxi` personnes, le mot
 * est abandonné (l'article abandonne un mot rejeté par six personnes).
 */
export function dechiffrer(alea: () => number, mot: string, fautes: string[], justesse = 0.92, ocrJuste = 0.8, maxi = 6): Dechiffrage {
  const faute = () => fautes[Math.floor(alea() * fautes.length)];
  const lectures: Lecture[] = [
    { par: 'ocr', texte: alea() < ocrJuste ? mot : faute() },
    // Le second OCR s'est trompé : ces mots sont ceux que les deux logiciels lisent différemment.
    { par: 'ocr', texte: faute() },
  ];
  const voix = new Map<string, number>();
  lectures.forEach((l) => voix.set(l.texte, (voix.get(l.texte) ?? 0) + 0.5));
  for (let h = 1; h <= maxi; h++) {
    const texte = alea() < justesse ? mot : faute();
    lectures.push({ par: 'humain', texte });
    voix.set(texte, (voix.get(texte) ?? 0) + 1);
    if ((voix.get(texte) ?? 0) >= 2.5) return { lectures, retenu: texte, humains: h };
  }
  return { lectures, retenu: null, humains: maxi };
}

// ---- Retours humains ----

export interface Reponse {
  texte: string;
  /** Exacte (1) ou fausse (0). */
  exacte: number;
  /** De 0 (très courte) à 1 (très détaillée). */
  detail: number;
  /** Ton aimable, flatteur (de 0 à 1). */
  amabilite: number;
}

export interface Comparaison {
  gagnante: number;
  perdante: number;
}

/**
 * Des annotateur·rices comparent des paires de réponses. Une part `partDetail`
 * préfère les réponses détaillées, les autres les réponses courtes. Si
 * `verifient` est faux, personne n'a le temps de vérifier l'exactitude : seule
 * l'apparence compte.
 */
export function comparer(alea: () => number, reponses: Reponse[], n: number, partDetail: number, verifient: boolean): Comparaison[] {
  const utilite = (r: Reponse, aimeDetail: boolean) =>
    (verifient ? 3 * r.exacte : 0) + (aimeDetail ? 2.5 : -2.5) * r.detail + 1 * r.amabilite;
  return Array.from({ length: n }, () => {
    const a = Math.floor(alea() * reponses.length);
    let b = Math.floor(alea() * (reponses.length - 1));
    if (b >= a) b++;
    const aimeDetail = alea() < partDetail;
    const pa = 1 / (1 + Math.exp(-(utilite(reponses[a], aimeDetail) - utilite(reponses[b], aimeDetail))));
    return alea() < pa ? { gagnante: a, perdante: b } : { gagnante: b, perdante: a };
  });
}

/**
 * Modèle de Bradley-Terry : un score par réponse, tel que la probabilité que
 * A batte B vaille 1 / (1 + e^(score B − score A)). Les scores sont ajustés
 * par montée de gradient sur la vraisemblance des comparaisons. C'est, en
 * miniature, le « modèle de récompense » de l'apprentissage par renforcement
 * à partir de retours humains.
 */
export function bradleyTerry(nb: number, comparaisons: Comparaison[], iterations = 300, pas = 0.5): number[] {
  const s = new Array(nb).fill(0);
  if (!comparaisons.length) return s;
  for (let it = 0; it < iterations; it++) {
    const g = new Array(nb).fill(0);
    for (const { gagnante, perdante } of comparaisons) {
      const p = 1 / (1 + Math.exp(s[perdante] - s[gagnante]));
      g[gagnante] += 1 - p;
      g[perdante] -= 1 - p;
    }
    // Légère régularisation, puis centrage : seuls les écarts de score comptent.
    for (let i = 0; i < nb; i++) s[i] += (pas * g[i]) / comparaisons.length * nb - 0.001 * s[i];
    const moy = s.reduce((a, b) => a + b, 0) / nb;
    for (let i = 0; i < nb; i++) s[i] -= moy;
  }
  return s;
}
