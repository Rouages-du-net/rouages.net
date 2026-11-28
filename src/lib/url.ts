// Calculs du module « Client et serveur » : découper une URL selon la
// RFC 3986 (schéma, autorité, chemin, requête, fragment), retrouver le port
// par défaut du protocole (registre de l'IANA), et suivre le chemin d'une URL
// jusqu'à un fichier d'un serveur web statique.

/**
 * Ports par défaut des schémas courants (registre des ports de l'IANA).
 * Registre des schémas d'URI de l'IANA (consulté le 28 novembre 2026) : http,
 * https, ftp, ws et wss y sont « permanents » ; sftp et ssh seulement
 * « provisoires » ; ftps n'y figure pas (usage des logiciels, qui y mettent
 * FTPS « implicite », port 990).
 */
export const PORTS_DEFAUT: Record<string, number> = {
  http: 80,
  https: 443,
  ftp: 21,
  ftps: 990,
  sftp: 22,
  ssh: 22,
  ws: 80,
  wss: 443,
};

export interface UrlDecoupee {
  schema: string;
  utilisateur: string;
  hote: string;
  port: string;
  portEffectif: number | null;
  portParDefaut: boolean;
  chemin: string;
  requete: string;
  fragment: string;
}

/**
 * Port écrit dans le texte de l'URL (autorité de la RFC 3986), même s'il vaut
 * le port par défaut : l'analyseur WHATWG le supprime alors de `URL.port`.
 */
function portEcrit(texte: string): string {
  const m = texte.match(/^[a-z][a-z0-9+.-]*:\/\/(?:[^@/?#]*@)?(?:\[[^\]]*\]|[^:/?#]*):(\d+)(?=[/?#]|$)/i);
  return m ? String(Number(m[1])) : '';
}

/** Découpe une URL absolue ; renvoie null si elle n'est pas valide. */
export function decouperUrl(texte: string): UrlDecoupee | null {
  let u: URL;
  try {
    u = new URL(texte.trim());
  } catch {
    return null;
  }
  const schema = u.protocol.replace(/:$/, '');
  const defaut = PORTS_DEFAUT[schema] ?? null;
  // « https://cours.example:443/ » : le port a été écrit, il n'est pas sous-entendu.
  const port = u.port || portEcrit(texte.trim());
  return {
    schema,
    utilisateur: u.username ? decodeURIComponent(u.username) : '',
    hote: u.hostname,
    port,
    portEffectif: port ? Number(port) : defaut,
    portParDefaut: !port && defaut !== null,
    chemin: u.pathname,
    requete: u.search.replace(/^\?/, ''),
    fragment: u.hash.replace(/^#/, ''),
  };
}

export type Resultat =
  | { statut: 200; fichier: string; via: 'fichier' | 'index' }
  | { statut: 301; vers: string }
  | { statut: 404; fichier: string }
  | { statut: 403; raison: string };

/**
 * Comme un serveur web statique : racine + chemin de l'URL = fichier. Un
 * dossier sert son « index.html » ; un dossier demandé sans « / » final est
 * redirigé ; on refuse de sortir de la racine avec « .. ».
 */
export function cheminVersFichier(racine: string, chemin: string, fichiers: readonly string[]): Resultat {
  let p: string;
  try {
    p = decodeURIComponent(chemin.split(/[?#]/)[0] || '/');
  } catch {
    return { statut: 403, raison: 'chemin mal encodé' };
  }
  const morceaux = p.split('/');
  if (morceaux.includes('..')) return { statut: 403, raison: 'interdit de remonter au-dessus de la racine' };
  const relatif = p.replace(/^\/+/, '');
  const existe = (f: string) => fichiers.includes(f);
  const estDossier = (d: string) => fichiers.some((f) => f.startsWith(d === '' ? '' : `${d}/`));
  const dossier = relatif.replace(/\/$/, '');
  if (relatif === '' || relatif.endsWith('/')) {
    const index = dossier === '' ? 'index.html' : `${dossier}/index.html`;
    return existe(index) ? { statut: 200, fichier: `${racine}/${index}`, via: 'index' } : { statut: 404, fichier: `${racine}/${index}` };
  }
  if (existe(relatif)) return { statut: 200, fichier: `${racine}/${relatif}`, via: 'fichier' };
  if (estDossier(relatif)) return { statut: 301, vers: `/${relatif}/` };
  return { statut: 404, fichier: `${racine}/${relatif}` };
}
