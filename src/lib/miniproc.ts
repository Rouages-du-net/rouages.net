// Mini-processeur pédagogique (module « Comment marche un ordinateur »).
//
// Mémoire : 16 cases de 8 bits (adresses 0 à 15, sur 4 bits).
// Une instruction tient dans une case : 4 bits de code d'opération (poids
// fort) et 4 bits d'adresse (poids faible). Un seul registre de calcul,
// l'accumulateur (ACC, 8 bits), un compteur de programme (CP) et un
// registre d'instruction (RI).
//
// Le cycle est découpé en trois phases, comme dans un vrai processeur :
// chercher (lire la case pointée par CP), décoder (comprendre le code),
// exécuter (faire l'action).

export const OPS = [
  { code: 0, nom: 'STOP', aide: "arrête le programme" },
  { code: 1, nom: 'CHARGE', aide: "copie la case dans l'accumulateur" },
  { code: 2, nom: 'AJOUTE', aide: "ajoute la case à l'accumulateur" },
  { code: 3, nom: 'RETIRE', aide: "retire la case de l'accumulateur" },
  { code: 4, nom: 'RANGE', aide: "copie l'accumulateur dans la case" },
  { code: 5, nom: 'SAUTE', aide: "continue à l'adresse indiquée" },
  { code: 6, nom: 'SAUTE SI ZÉRO', aide: "saute seulement si l'accumulateur vaut 0" },
] as const;

export type Phase = 'chercher' | 'decoder' | 'executer';

export interface Etat {
  memoire: number[]; // 16 cases, valeurs 0 à 255
  acc: number;
  cp: number;
  ri: number;
  phase: Phase;
  arrete: boolean;
  cycles: number;
  /** Description de la dernière action, pour la légende. */
  journal: string;
  /** Cases lues ou écrites par la dernière action (surlignage). */
  lues: number[];
  ecrites: number[];
}

export const decoder = (mot: number) => ({ code: mot >> 4, adresse: mot & 0xf });
export const nomOp = (code: number) => OPS.find((o) => o.code === code)?.nom ?? '???';
export const assembler = (code: number, adresse = 0) => ((code & 0xf) << 4) | (adresse & 0xf);
export const binaire = (n: number, bits = 8) => n.toString(2).padStart(bits, '0');

/** Écrit une case de mémoire en clair : « CHARGE 14 » ou « (donnée 3) ». */
export function desassembler(mot: number): string {
  const { code, adresse } = decoder(mot);
  if (code === 0) return mot === 0 ? 'STOP' : `(donnée ${mot})`;
  if (code > 6) return `(donnée ${mot})`;
  return `${nomOp(code)} ${adresse}`;
}

export function etatInitial(memoire: number[]): Etat {
  return {
    memoire: [...memoire],
    acc: 0,
    cp: 0,
    ri: 0,
    phase: 'chercher',
    arrete: false,
    cycles: 0,
    journal: 'Prêt. Le compteur de programme pointe sur la case 0.',
    lues: [],
    ecrites: [],
  };
}

/** Avance d'une phase. Renvoie un nouvel état (l'ancien n'est pas modifié). */
export function pas(e: Etat): Etat {
  if (e.arrete) return e;
  const s: Etat = { ...e, memoire: [...e.memoire], lues: [], ecrites: [] };
  if (s.phase === 'chercher') {
    s.ri = s.memoire[s.cp];
    s.lues = [s.cp];
    s.journal = `Chercher : je lis la case ${s.cp} (${binaire(s.ri)}) et je la place dans le registre d'instruction. Le compteur passe à ${(s.cp + 1) % 16}.`;
    s.cp = (s.cp + 1) % 16;
    s.phase = 'decoder';
    return s;
  }
  const { code, adresse } = decoder(s.ri);
  if (s.phase === 'decoder') {
    s.journal =
      code <= 6
        ? `Décoder : les 4 premiers bits (${binaire(code, 4)}) veulent dire « ${nomOp(code)} », les 4 derniers (${binaire(adresse, 4)}) désignent la case ${adresse}.`
        : `Décoder : le code ${binaire(code, 4)} ne correspond à aucune instruction. Le processeur s'arrête.`;
    s.phase = 'executer';
    return s;
  }
  // Exécuter
  s.cycles++;
  s.phase = 'chercher';
  switch (code) {
    case 0:
      s.arrete = true;
      s.journal = 'Exécuter : STOP. Le programme est terminé.';
      break;
    case 1:
      s.acc = s.memoire[adresse];
      s.lues = [adresse];
      s.journal = `Exécuter : l'accumulateur reçoit le contenu de la case ${adresse}, soit ${s.acc}.`;
      break;
    case 2: {
      const somme = s.acc + s.memoire[adresse];
      s.lues = [adresse];
      s.journal = `Exécuter : ${s.acc} + ${s.memoire[adresse]} = ${somme % 256}${somme > 255 ? ' (dépassement : on ne garde que 8 bits)' : ''}.`;
      s.acc = somme % 256;
      break;
    }
    case 3: {
      const diff = s.acc - s.memoire[adresse];
      s.lues = [adresse];
      s.journal = `Exécuter : ${s.acc} − ${s.memoire[adresse]} = ${(diff + 256) % 256}${diff < 0 ? ' (passage sous zéro : on repart de 255)' : ''}.`;
      s.acc = (diff + 256) % 256;
      break;
    }
    case 4:
      s.memoire[adresse] = s.acc;
      s.ecrites = [adresse];
      s.journal = `Exécuter : la case ${adresse} reçoit la valeur de l'accumulateur, ${s.acc}.`;
      break;
    case 5:
      s.cp = adresse;
      s.journal = `Exécuter : saut. Le compteur de programme passe à ${adresse}.`;
      break;
    case 6:
      if (s.acc === 0) {
        s.cp = adresse;
        s.journal = `Exécuter : l'accumulateur vaut 0, donc on saute à la case ${adresse}.`;
      } else {
        s.journal = `Exécuter : l'accumulateur vaut ${s.acc}, pas 0 : on ne saute pas.`;
      }
      break;
    default:
      s.arrete = true;
      s.journal = 'Exécuter : instruction inconnue, arrêt.';
  }
  return s;
}

/** Programmes d'exemple. */
export const PROGRAMMES: Record<string, { nom: string; description: string; memoire: number[] }> = {
  addition: {
    nom: '2 + 3',
    description: 'Charge 2 (case 14), ajoute 3 (case 15), range le résultat dans la case 13, puis s’arrête.',
    memoire: (() => {
      const m = new Array(16).fill(0);
      m[0] = assembler(1, 14); // CHARGE 14
      m[1] = assembler(2, 15); // AJOUTE 15
      m[2] = assembler(4, 13); // RANGE 13
      m[3] = assembler(0); // STOP
      m[14] = 2;
      m[15] = 3;
      return m;
    })(),
  },
  rebours: {
    nom: 'Compte à rebours',
    description: 'Part de 3 (case 15) et retire 1 (case 14) jusqu’à 0 : une boucle, grâce aux sauts.',
    memoire: (() => {
      const m = new Array(16).fill(0);
      m[0] = assembler(1, 15); // CHARGE 15
      m[1] = assembler(6, 5); // SAUTE SI ZÉRO 5
      m[2] = assembler(3, 14); // RETIRE 14
      m[3] = assembler(4, 15); // RANGE 15
      m[4] = assembler(5, 1); // SAUTE 1
      m[5] = assembler(0); // STOP
      m[14] = 1;
      m[15] = 3;
      return m;
    })(),
  },
};
