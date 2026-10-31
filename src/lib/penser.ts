// Une machine peut-elle penser ? Trois petites machines, pour le module du
// même nom (section « Penser la technique ») :
//   - un mini-ELIZA en français : des mots-clés et des phrases à trous, comme
//     le programme de J. Weizenbaum (1966), avec un script inventé ;
//   - une chambre chinoise : un livre de règles qui associe des suites de
//     symboles à des réponses (l'expérience de pensée de J. Searle, 1980) ;
//   - un perroquet : le mini-modèle de langage du site fabrique des phrases
//     plausibles qu'il n'a jamais lues.

import { CORPUS, NGramme, hasard, mots } from './minilm';

// ---- Mini-ELIZA ----

interface Regle {
  /** Motif reconnu (expression régulière, insensible à la casse). */
  motif: RegExp;
  /** Réponses possibles ; « $1 » reprend le morceau capturé, retourné (je → tu). */
  reponses: string[];
  /** Nom de la règle, montré à la demande. */
  nom: string;
}

const REGLES: Regle[] = [
  { nom: 'mot-clé « mère / père »', motif: /\b(m[eè]re|p[eè]re|famille|s(?:œ|oe)ur|fr[eè]re)\b/i, reponses: ['Parle-moi de ta famille.', 'Qui d’autre dans ta famille te vient à l’esprit ?'] },
  { nom: 'motif « je suis … »', motif: /\bje suis (.+)/i, reponses: ['Depuis combien de temps es-tu $1 ?', 'Pourquoi dis-tu que tu es $1 ?'] },
  { nom: 'motif « je me sens … »', motif: /\bje me sens (.+)/i, reponses: ['Qu’est-ce qui te fait te sentir $1 ?', 'Est-ce souvent que tu te sens $1 ?'] },
  { nom: 'motif « je veux … »', motif: /\bje (?:veux|voudrais) (.+)/i, reponses: ['Qu’est-ce que cela changerait pour toi, $1 ?', 'Pourquoi veux-tu $1 ?'] },
  { nom: 'motif « tu … » (parler de la machine)', motif: /\b(?:tu|toi)\b/i, reponses: ['Nous parlions de toi, pas de moi.', 'Pourquoi t’intéresses-tu à moi ?'] },
  { nom: 'mot-clé « parce que »', motif: /\bparce que\b/i, reponses: ['Est-ce la vraie raison ?', 'D’autres raisons te viennent-elles ?'] },
  { nom: 'mot-clé « toujours / jamais »', motif: /\b(toujours|jamais)\b/i, reponses: ['Peux-tu penser à un exemple précis ?', '« $1 », vraiment ?'] },
  { nom: 'oui / non', motif: /^\s*(oui|non)\b/i, reponses: ['Tu sembles bien sûr·e.', 'Peux-tu en dire plus ?'] },
];
const PAR_DEFAUT = ['Je vois. Continue.', 'Qu’est-ce que cela t’évoque ?', 'Peux-tu développer ?'];

// Retourner les points de vue : « mon » devient « ton », etc.
const REFLETS: [RegExp, string][] = [
  [/\bje\b/gi, 'tu'], [/\bj'/gi, 'tu '], [/\bmon\b/gi, 'ton'], [/\bma\b/gi, 'ta'], [/\bmes\b/gi, 'tes'],
  [/\bmoi\b/gi, 'toi'], [/\bme\b/gi, 'te'], [/\bm'/gi, 't’'],
];
const refleter = (s: string) => REFLETS.reduce((t, [m, r]) => t.replace(m, r), s.replace(/’/g, "'").replace(/[.!?]+$/, '').trim());

/** Répond comme ELIZA : première règle qui reconnaît la phrase, sinon une relance. */
export function eliza(phrase: string, tour: number): { reponse: string; regle: string } {
  for (const r of REGLES) {
    const m = phrase.match(r.motif);
    if (!m) continue;
    const modele = r.reponses[tour % r.reponses.length];
    return { reponse: modele.replace('$1', refleter(m[1] ?? '')), regle: r.nom };
  }
  return { reponse: PAR_DEFAUT[tour % PAR_DEFAUT.length], regle: 'aucune règle : relance passe-partout' };
}

// ---- Chambre chinoise ----

export interface Fiche {
  /** Ce qui arrive sous la porte. */
  question: string;
  /** Ce qu'il faut renvoyer, selon le livre. */
  reponse: string;
  /** Traductions, cachées dans la chambre. */
  questionFr: string;
  reponseFr: string;
}

export const LIVRE: Fiche[] = [
  { question: '你好吗？', reponse: '我很好，谢谢。', questionFr: 'Comment vas-tu ?', reponseFr: 'Je vais très bien, merci.' },
  { question: '你叫什么名字？', reponse: '我叫小房间。', questionFr: 'Comment t’appelles-tu ?', reponseFr: 'Je m’appelle Petite Chambre.' },
  { question: '今天天气怎么样？', reponse: '今天天气很好。', questionFr: 'Quel temps fait-il aujourd’hui ?', reponseFr: 'Il fait très beau aujourd’hui.' },
  { question: '你会说中文吗？', reponse: '会，我说得很好。', questionFr: 'Sais-tu parler chinois ?', reponseFr: 'Oui, je le parle très bien.' },
];

// ---- Le perroquet ----

/** Phrases du corpus (sans le point final). */
export const PHRASES = CORPUS.split('\n').map((l) => mots(l).filter((m) => m !== '.').join(' '));

/**
 * Fabrique une phrase nouvelle avec le modèle n-gramme du site : chaque mot
 * est tiré selon les probabilités apprises. On recommence tant que la phrase
 * existe déjà dans le corpus ou qu'elle est trop longue.
 */
export function phraseFabriquee(graine: number): string {
  const modele = new NGramme(CORPUS, 2);
  const alea = hasard(graine);
  for (let essai = 0; essai < 200; essai++) {
    const sortie: string[] = [];
    for (let k = 0; k < 12; k++) {
      const { suite } = modele.predire(sortie.join(' '));
      if (!suite.length) break;
      let r = alea(), choisi = suite[0].mot;
      for (const s of suite) if ((r -= s.p) < 0) { choisi = s.mot; break; }
      if (choisi === '.') break;
      sortie.push(choisi);
    }
    const phrase = sortie.join(' ');
    if (sortie.length >= 4 && sortie.length <= 9 && !PHRASES.includes(phrase)) return phrase;
  }
  return 'le chien dort sur le canapé';
}
