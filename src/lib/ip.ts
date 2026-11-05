// Calculs du module « Adresses IP et masques » (IPv4, IPv6, CIDR).
// Références : RFC 791, 950, 4632, 3021 (IPv4) ; RFC 4291, 5952 (IPv6).
// Aucune dépendance au DOM.

/** Lit une adresse IPv4 « a.b.c.d » ; renvoie un entier non signé de 32 bits, ou null. */
export function lireIPv4(texte: string): number | null {
  const parts = texte.trim().split('.');
  if (parts.length !== 4) return null;
  let n = 0;
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p)) return null;
    const v = Number(p);
    if (v > 255) return null;
    n = n * 256 + v;
  }
  return n;
}

export const octets = (n: number) => [24, 16, 8, 0].map((d) => Math.floor(n / 2 ** d) % 256);
export const ecrireIPv4 = (n: number) => octets(n).join('.');
export const bits32 = (n: number) => (n >>> 0).toString(2).padStart(32, '0');

/** Masque d'un préfixe /p (0 à 32). */
export const masque = (p: number) => (p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0);

/** Longueur de préfixe d'un masque, ou null si ses 1 ne sont pas tous à gauche. */
export function prefixe(m: number): number | null {
  const b = bits32(m);
  const p = b.indexOf('0') === -1 ? 32 : b.indexOf('0');
  return b.slice(p).includes('1') ? null : p;
}

export interface Reseau {
  reseau: number;
  diffusion: number;
  premiere: number;
  derniere: number;
  adresses: number;
  hotes: number;
}

/** Réseau d'une adresse avec un préfixe /p : adresse de réseau (ET logique), de diffusion, hôtes. */
export function reseau(ip: number, p: number): Reseau {
  const m = masque(p);
  const res = (ip & m) >>> 0;
  const diff = (res | (~m >>> 0)) >>> 0;
  const adresses = 2 ** (32 - p);
  // /31 : deux adresses, toutes deux utilisables (RFC 3021) ; /32 : une seule.
  if (p >= 31) return { reseau: res, diffusion: diff, premiere: res, derniere: diff, adresses, hotes: adresses };
  return { reseau: res, diffusion: diff, premiere: res + 1, derniere: diff - 1, adresses, hotes: adresses - 2 };
}

/** Nature d'une adresse IPv4 (plages privées RFC 1918, documentation RFC 5737). */
export function nature(ip: number): string | null {
  const dans = (base: string, p: number) => (ip & masque(p)) >>> 0 === lireIPv4(base)!;
  if (dans('10.0.0.0', 8) || dans('172.16.0.0', 12) || dans('192.168.0.0', 16))
    return 'Adresse privée (RFC 1918) : utilisable seulement à l’intérieur d’un réseau local.';
  if (dans('192.0.2.0', 24) || dans('198.51.100.0', 24) || dans('203.0.113.0', 24))
    return 'Adresse réservée aux exemples et à la documentation (RFC 5737) : elle ne désigne aucune machine réelle.';
  return null;
}

// ---------- IPv6 ----------

/** Développe une adresse IPv6 (avec ou sans « :: ») en 8 groupes de 16 bits ; null si invalide. */
export function lireIPv6(texte: string): number[] | null {
  const s = texte.trim().toLowerCase();
  if (!/^[0-9a-f:]+$/.test(s) || s.includes(':::')) return null;
  const morceaux = s.split('::');
  if (morceaux.length > 2) return null;
  const lire = (t: string) => (t === '' ? [] : t.split(':'));
  const gauche = lire(morceaux[0]);
  const droite = morceaux.length === 2 ? lire(morceaux[1]) : [];
  if ([...gauche, ...droite].some((g) => !/^[0-9a-f]{1,4}$/.test(g))) return null;
  const manquants = 8 - gauche.length - droite.length;
  if (morceaux.length === 2 ? manquants < 1 : manquants !== 0) return null;
  return [...gauche, ...Array(manquants).fill('0'), ...droite].map((g) => parseInt(g, 16));
}

/** Plus longue suite d'au moins deux groupes nuls (la première en cas d'égalité), selon la RFC 5952. */
export function suiteNulle(groupes: number[]): { debut: number; longueur: number } | null {
  let meilleure: { debut: number; longueur: number } | null = null;
  for (let i = 0; i < 8; ) {
    if (groupes[i] !== 0) { i++; continue; }
    let j = i;
    while (j < 8 && groupes[j] === 0) j++;
    if (j - i >= 2 && (!meilleure || j - i > meilleure.longueur)) meilleure = { debut: i, longueur: j - i };
    i = j;
  }
  return meilleure;
}

export const ecrireComplet = (g: number[]) => g.map((x) => x.toString(16).padStart(4, '0')).join(':');
export const ecrireSansZeros = (g: number[]) => g.map((x) => x.toString(16)).join(':');

/** Écriture recommandée (RFC 5952) : sans zéros en tête, « :: » pour la plus longue suite nulle, minuscules. */
export function ecrireCourt(g: number[]): string {
  const z = suiteNulle(g);
  if (!z) return ecrireSansZeros(g);
  const avant = g.slice(0, z.debut).map((x) => x.toString(16)).join(':');
  const apres = g.slice(z.debut + z.longueur).map((x) => x.toString(16)).join(':');
  return `${avant}::${apres}`;
}
