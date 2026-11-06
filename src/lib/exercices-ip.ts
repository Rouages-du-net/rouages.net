// Exercices corrigés du module « Découper un réseau en sous-réseaux ».
// Tirage reproductible (même graine, mêmes exercices) ; adresses de
// documentation (RFC 5737) pour les petits réseaux, privées (RFC 1918) pour les
// grands. Aucune dépendance au DOM.
import { bits32, ecrireIPv4, hasard, lireIPv4, masque, prefixePour, reseau } from './ip';

export interface Exercice {
  type: string;
  enonce: string;
  reponse: string; // réponse attendue, telle qu'on l'écrit
  aide: string; // format attendu
  correction: string[]; // étapes de la correction
}

const fr = (n: number) => n.toLocaleString('fr-FR');
const DOC = ['192.0.2.0', '198.51.100.0', '203.0.113.0'];

function adresse(alea: () => number, p: number): number {
  const entier = (n: number) => Math.floor(alea() * n);
  if (p >= 24) return lireIPv4(DOC[entier(3)])! + 1 + entier(254);
  // Grands réseaux : plage privée 10.0.0.0/8 (RFC 1918).
  return lireIPv4('10.0.0.0')! + entier(2 ** 24 - 2) + 1;
}

const octetsMasque = (p: number) => ecrireIPv4(masque(p));
const binaire = (n: number) => bits32(n).match(/.{8}/g)!.join('.');

const TYPES = ['reseau', 'diffusion', 'machines', 'masque', 'prefixe', 'meme'] as const;

export function exercice(graine: number, type?: (typeof TYPES)[number]): Exercice {
  const alea = hasard(graine);
  const t = type ?? TYPES[Math.floor(alea() * TYPES.length)];
  const p = 16 + Math.floor(alea() * 15); // /16 à /30
  const ip = adresse(alea, p);
  const r = reseau(ip, p);
  const m = masque(p);
  const ipT = ecrireIPv4(ip);
  switch (t) {
    case 'reseau':
      return {
        type: 'Adresse du réseau', aide: 'une adresse, par exemple 192.0.2.0',
        enonce: `Quelle est l’adresse du réseau de ${ipT}/${p} ?`, reponse: ecrireIPv4(r.reseau),
        correction: [
          `/${p} : les ${p} premiers bits désignent le réseau. Masque : ${octetsMasque(p)}.`,
          `En binaire, l’adresse : ${binaire(ip)}.`,
          `Le masque : ${binaire(m)}.`,
          `ET logique bit à bit (on garde les bits de l’adresse là où le masque vaut 1) : ${binaire(r.reseau)}.`,
          `Soit ${ecrireIPv4(r.reseau)}.`,
        ],
      };
    case 'diffusion':
      return {
        type: 'Adresse de diffusion', aide: 'une adresse',
        enonce: `Quelle est l’adresse de diffusion du réseau de ${ipT}/${p} ?`, reponse: ecrireIPv4(r.diffusion),
        correction: [
          `Réseau : ${ecrireIPv4(r.reseau)}/${p} (adresse ET masque ${octetsMasque(p)}).`,
          `La diffusion met à 1 les ${32 - p} bits de la partie machine : ${binaire(r.diffusion)}.`,
          `Soit ${ecrireIPv4(r.diffusion)}.`,
        ],
      };
    case 'machines':
      return {
        type: 'Nombre de machines', aide: 'un nombre',
        enonce: `Combien de machines peut-on adresser dans un réseau /${p} ?`, reponse: String(r.hotes),
        correction: [
          `Partie machine : 32 − ${p} = ${32 - p} bits, soit 2^${32 - p} = ${fr(r.adresses)} adresses.`,
          `On retire l’adresse du réseau et celle de diffusion : ${fr(r.adresses)} − 2 = ${fr(r.hotes)}.`,
        ],
      };
    case 'masque':
      return {
        type: 'Masque en décimal', aide: 'quatre nombres, par exemple 255.255.255.0',
        enonce: `Écrire le masque /${p} en décimal pointé.`, reponse: octetsMasque(p),
        correction: [
          `/${p} = ${p} bits à 1 puis ${32 - p} bits à 0 : ${binaire(m)}.`,
          `Chaque octet converti en décimal : ${octetsMasque(p)}.`,
        ],
      };
    case 'prefixe': {
      const n = 3 + Math.floor(alea() * 2000);
      const q = prefixePour(n)!;
      const rq = reseau(0, q);
      return {
        type: 'Préfixe pour N machines', aide: 'un préfixe, par exemple /24',
        enonce: `Quel est le plus petit sous-réseau (le plus long préfixe) qui peut accueillir ${fr(n)} machines ?`, reponse: `/${q}`,
        correction: [
          `Il faut 2^k − 2 ≥ ${fr(n)} : on cherche la plus petite puissance de 2 qui convient.`,
          `2^${32 - q} − 2 = ${fr(rq.hotes)} suffit${q < 30 ? `, alors que 2^${31 - q} − 2 = ${fr(2 ** (31 - q) - 2)} ne suffit pas` : ''}.`,
          `${32 - q} bits pour les machines, donc 32 − ${32 - q} = ${q} bits de réseau : /${q}.`,
        ],
      };
    }
    default: {
      // Deux adresses : même réseau ou pas ? On choisit une fois sur deux une adresse dans le même réseau.
      const meme = alea() < 0.5;
      let autre: number;
      if (meme) autre = r.reseau + 1 + Math.floor(alea() * Math.max(1, r.hotes));
      else if (p > 24) {
        // Un autre sous-réseau du même bloc de documentation /24.
        const bloc = reseau(ip, 24).reseau;
        do autre = bloc + 1 + Math.floor(alea() * 254); while (reseau(autre, p).reseau === r.reseau);
      } else if (p === 24) {
        autre = lireIPv4(DOC.find((d) => lireIPv4(d)! !== r.reseau)!)! + 1 + Math.floor(alea() * 254);
      } else {
        // Le réseau voisin dans 10.0.0.0/8, sans sortir de la plage privée.
        const voisin = r.reseau + r.adresses < lireIPv4('11.0.0.0')! ? r.reseau + r.adresses : r.reseau - r.adresses;
        autre = voisin + 1 + Math.floor(alea() * Math.max(1, r.hotes));
      }
      const ra = reseau(autre, p);
      const reponse = ra.reseau === r.reseau ? 'oui' : 'non';
      return {
        type: 'Même réseau ?', aide: 'oui ou non',
        enonce: `Avec le préfixe /${p}, ${ipT} et ${ecrireIPv4(autre)} sont-elles dans le même réseau ?`, reponse,
        correction: [
          `Réseau de ${ipT}/${p} : ${ecrireIPv4(r.reseau)}.`,
          `Réseau de ${ecrireIPv4(autre)}/${p} : ${ecrireIPv4(ra.reseau)}.`,
          reponse === 'oui' ? 'Les deux réseaux sont identiques : oui.' : 'Les deux réseaux diffèrent : non, il faut passer par un routeur.',
        ],
      };
    }
  }
}

/** Compare une réponse saisie à la réponse attendue (espaces, « / » et casse ignorés). */
export function juste(saisie: string, attendue: string): boolean {
  const n = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '').replace(/^\//, '').replace(/[  ]/g, '');
  return n(saisie) === n(attendue);
}
