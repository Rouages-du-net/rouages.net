// Fiches des illustrations libres (Wikimedia Commons) : voir docs/ILLUSTRATIONS.md.
import donnees from '../data/illustrations.json';

export interface FicheIllustration {
  fichier: string;
  alt: string;
  legende: string;
  auteur: string;
  licence: string;
  licenceUrl: string;
  source: string;
  date: string;
  importe: string;
}

export const FICHES: Record<string, FicheIllustration> = donnees;

/** Licences acceptées : domaine public, CC0, CC BY, CC BY-SA ; jamais NC ni ND. */
export function licenceAcceptee(licence: string): boolean {
  const ok = /^(public domain|domaine public|pd\b|cc0|cc[ -]by(?:[ -]sa)?[ -]\d(\.\d)?)/i.test(licence);
  const interdite = /\b(nc|nd)\b|non[- ]commercial|no[- ]deriv|fair use/i.test(licence);
  return ok && !interdite;
}

/** Inclinaison du tirage, entre −2,4° et 2,4°, toujours la même pour une image. */
export function inclinaison(id: string): number {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const a = ((h % 49) - 24) / 10;
  return Math.abs(a) < 0.8 ? (a < 0 ? -1.2 : 1.2) : a;
}
