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

/**
 * Nature d'une adresse IPv4 : plages privées (RFC 1918), de documentation
 * (RFC 5737) et principales plages à usage spécial du registre de l'IANA
 * (RFC 6890, multidiffusion RFC 5771). Renvoie null pour une adresse qui
 * n'est dans aucune de ces plages (ce qui ne garantit pas qu'elle soit
 * attribuée à quelqu'un).
 */
export function nature(ip: number): string | null {
  const dans = (base: string, p: number) => (ip & masque(p)) >>> 0 === lireIPv4(base)!;
  if (dans('10.0.0.0', 8) || dans('172.16.0.0', 12) || dans('192.168.0.0', 16))
    return 'Adresse privée (RFC 1918) : utilisable seulement à l’intérieur d’un réseau local.';
  if (dans('192.0.2.0', 24) || dans('198.51.100.0', 24) || dans('203.0.113.0', 24))
    return 'Adresse réservée aux exemples et à la documentation (RFC 5737) : elle ne désigne aucune machine réelle.';
  if (dans('127.0.0.0', 8)) return 'Adresse de bouclage (RFC 6890) : elle désigne la machine elle-même, et ne sort jamais sur le réseau.';
  if (dans('169.254.0.0', 16)) return 'Adresse de lien local (RFC 6890) : elle ne sert que sur le réseau local et ne passe jamais un routeur.';
  if (dans('100.64.0.0', 10)) return 'Espace d’adresses partagé (RFC 6598) : réservé au NAT des opérateurs, entre ta box et leur réseau.';
  if (dans('0.0.0.0', 8)) return 'Plage « ce réseau » (RFC 6890) : elle ne désigne aucune machine joignable.';
  if (ip === 0xffffffff) return 'Adresse de diffusion limitée (RFC 6890) : un message envoyé là va à toutes les machines du réseau local.';
  if (dans('224.0.0.0', 4)) return 'Adresse de multidiffusion (RFC 5771) : elle désigne un groupe de machines, pas une seule.';
  if (dans('240.0.0.0', 4)) return 'Plage réservée (RFC 6890) : elle n’est pas attribuée sur internet.';
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

// ---------- Sous-réseaux (RFC 950, RFC 1878, RFC 3021) ----------

export interface SousReseau extends Reseau {
  prefixe: number;
}

/** Découpe le réseau ip/p en sous-réseaux égaux de préfixe q (q ≥ p). Au plus `max` résultats. */
export function decouper(ip: number, p: number, q: number, max = 256): { total: number; liste: SousReseau[] } {
  const debut = reseau(ip, p).reseau;
  const total = 2 ** (q - p);
  const taille = 2 ** (32 - q);
  const liste: SousReseau[] = [];
  for (let i = 0; i < Math.min(total, max); i++) liste.push({ ...reseau(debut + i * taille, q), prefixe: q });
  return { total, liste };
}

/** Plus petit préfixe offrant au moins n adresses de machines (n = 2 → /30, ou /31 si `liaison`). */
export function prefixePour(n: number, liaison = false): number | null {
  if (n <= 0) return null;
  if (liaison && n <= 2) return 31;
  for (let p = 30; p >= 0; p--) if (2 ** (32 - p) - 2 >= n) return p;
  return null;
}

export interface Besoin {
  nom: string;
  machines: number;
  liaison?: boolean; // liaison point à point entre deux routeurs : /31 possible (RFC 3021)
}

export interface Attribution extends SousReseau {
  besoin: Besoin;
  perdues: number; // adresses de machines inutilisées dans ce sous-réseau
}

/**
 * Plan d'adressage à masques de longueur variable (VLSM) : on trie les besoins
 * du plus grand au plus petit et on attribue à chacun, dans l'ordre, le plus
 * petit bloc aligné qui lui suffit. Renvoie les attributions, ou l'indice du
 * besoin qui ne rentre plus.
 */
/** Besoins rangés du plus grand bloc au plus petit (préfixe le plus court d'abord). */
export function trierBesoins(besoins: Besoin[]): Besoin[] {
  const q = (b: Besoin) => prefixePour(b.machines, b.liaison) ?? -1;
  return [...besoins].sort((a, b) => q(a) - q(b) || b.machines - a.machines);
}

export function planVLSM(ip: number, p: number, besoins: Besoin[]): { attributions: Attribution[]; manque?: Besoin; reste: number } {
  const base = reseau(ip, p);
  const fin = base.reseau + base.adresses; // première adresse hors du réseau
  // Les plus grands blocs d'abord (préfixe le plus court) : chaque bloc tombe
  // alors aligné juste après le précédent, sans trou. Trier par nombre de
  // machines ne suffit pas : une liaison (/31) passe avant un réseau d'une
  // machine (/30), qui laisse alors deux adresses inutilisées.
  const tries = trierBesoins(besoins);
  const attributions: Attribution[] = [];
  let curseur = base.reseau;
  for (const b of tries) {
    const q = prefixePour(b.machines, b.liaison);
    if (q === null || q < p) return { attributions, manque: b, reste: fin - curseur };
    const taille = 2 ** (32 - q);
    // Un bloc /q commence à un multiple de sa taille (alignement).
    const debut = Math.ceil(curseur / taille) * taille;
    if (debut + taille > fin) return { attributions, manque: b, reste: fin - curseur };
    const r = reseau(debut, q);
    attributions.push({ ...r, prefixe: q, besoin: b, perdues: r.hotes - b.machines });
    curseur = debut + taille;
  }
  return { attributions, reste: fin - curseur };
}

// ---------- Exercices (tirage pseudo-aléatoire reproductible) ----------

/** Générateur pseudo-aléatoire déterministe (mulberry32) : même graine, mêmes exercices. */
export function hasard(graine: number) {
  let a = graine >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
