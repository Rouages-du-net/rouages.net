// Classeurs calculés pour de vrai dans le navigateur, pour le module « Les
// IA qui classent » :
//   - un filtre anti-spam bayésien « naïf », qu'on entraîne soi-même ;
//   - un seuil de décision et sa matrice de confusion ;
//   - des courriels inventés pour le site (noms et adresses fictifs, en
//     .example).

import { mots } from './minilm';

export type Etiquette = 'spam' | 'normal';
export interface Courriel {
  de: string;
  objet: string;
  texte: string;
  etiquette: Etiquette;
}

// Mots trop courants pour aider à décider : on les ignore.
const VIDES = new Set(
  'le la les un une des de du d l à au aux et ou en est pour par sur avec dans ce cette ces vous votre vos je j nous tu te ton ta tes il elle on a ne pas qui que qu se s son sa ses mon ma mes y ai as être été'.split(' '),
);

export const motsUtiles = (texte: string) =>
  [...new Set(mots(texte).map((m) => m.replace(/^[a-z]'/, '')).filter((m) => m.length > 1 && !VIDES.has(m) && /[a-zà-ÿ0-9€]/.test(m)))];

const texteDe = (c: Pick<Courriel, 'objet' | 'texte'>) => `${c.objet} ${c.texte}`;

// Bayes naïf : on compte, pour chaque mot, dans combien de spams et de
// courriels normaux il apparaît. Pour un nouveau courriel, on multiplie les
// indices donnés par chacun de ses mots, comme s'ils étaient indépendants
// (c'est l'hypothèse « naïve »). Lissage de Laplace : +1 partout, pour qu'un
// mot jamais vu dans une catégorie ne la rende pas impossible.
export class FiltreBayes {
  private dans = { spam: new Map<string, number>(), normal: new Map<string, number>() };
  readonly n = { spam: 0, normal: 0 };

  constructor(exemples: Courriel[] = []) {
    exemples.forEach((e) => this.apprendre(e, e.etiquette));
  }

  apprendre(c: Pick<Courriel, 'objet' | 'texte'>, etiquette: Etiquette) {
    this.n[etiquette]++;
    for (const m of motsUtiles(texteDe(c))) this.dans[etiquette].set(m, (this.dans[etiquette].get(m) ?? 0) + 1);
  }

  // Combien de fois un mot rend le spam plus (ou moins) probable :
  // P(mot | spam) / P(mot | normal).
  rapport(mot: string) {
    const ps = ((this.dans.spam.get(mot) ?? 0) + 1) / (this.n.spam + 2);
    const pn = ((this.dans.normal.get(mot) ?? 0) + 1) / (this.n.normal + 2);
    return ps / pn;
  }

  connu(mot: string) {
    return this.dans.spam.has(mot) || this.dans.normal.has(mot);
  }

  // Probabilité que le courriel soit un spam, et le poids de chaque mot connu
  // (du plus parlant au moins parlant). On additionne des logarithmes pour
  // éviter de multiplier des nombres minuscules.
  juger(c: Pick<Courriel, 'objet' | 'texte'>): { p: number; indices: { mot: string; rapport: number }[] } {
    const indices = motsUtiles(texteDe(c))
      .filter((m) => this.connu(m))
      .map((mot) => ({ mot, rapport: this.rapport(mot) }));
    const depart = Math.log((this.n.spam + 1) / (this.n.normal + 1));
    const cote = indices.reduce((s, i) => s + Math.log(i.rapport), depart);
    indices.sort((x, y) => Math.abs(Math.log(y.rapport)) - Math.abs(Math.log(x.rapport)));
    return { p: 1 / (1 + Math.exp(-cote)), indices };
  }
}

// ——— Seuil et matrice de confusion ———

export interface Confusion {
  vraisPositifs: number; // spams bloqués
  fauxPositifs: number; // courriels normaux bloqués à tort
  fauxNegatifs: number; // spams qui passent
  vraisNegatifs: number; // courriels normaux reçus
}

export function confusion(resultats: { p: number; etiquette: Etiquette }[], seuil: number): Confusion {
  const m = { vraisPositifs: 0, fauxPositifs: 0, fauxNegatifs: 0, vraisNegatifs: 0 };
  for (const r of resultats) {
    const bloque = r.p >= seuil;
    if (r.etiquette === 'spam') bloque ? m.vraisPositifs++ : m.fauxNegatifs++;
    else bloque ? m.fauxPositifs++ : m.vraisNegatifs++;
  }
  return m;
}

// ——— Les courriels ———

const c = (etiquette: Etiquette, de: string, objet: string, texte: string): Courriel => ({ de, objet, texte, etiquette });

// Pour entraîner le filtre.
export const ENTRAINEMENT: Courriel[] = [
  c('spam', 'promo@offres-folles.example', 'Félicitations, vous avez gagné !', 'Vous avez gagné un smartphone gratuit. Cliquez ici pour réclamer votre cadeau avant minuit.'),
  c('spam', 'service@banque-securite.example', 'Votre compte est bloqué', 'Urgent : confirmez votre mot de passe en cliquant sur ce lien, sinon votre compte sera supprimé.'),
  c('spam', 'gains@casino-royal.example', 'Bonus de 500 € offert', 'Inscrivez-vous maintenant et recevez 500 € gratuits. Offre limitée, cliquez vite !'),
  c('spam', 'livraison@colis-rapide.example', 'Votre colis est en attente', 'Des frais de livraison de 1,99 € sont à régler. Cliquez sur le lien pour payer et recevoir votre colis.'),
  c('spam', 'contact@crypto-fortune.example', 'Devenez riche en 30 jours', 'Notre méthode secrète garantie : investissez 250 € et gagnez des milliers d’euros. Offre exclusive.'),
  c('spam', 'pharma@prix-bas.example', 'Médicaments à prix cassés', 'Achetez sans ordonnance, livraison discrète et gratuite. Promotion exceptionnelle.'),
  c('spam', 'loterie@tirage-international.example', 'Vous êtes l’heureux gagnant', 'Votre adresse a été tirée au sort. Pour recevoir votre gain, envoyez vos coordonnées bancaires.'),
  c('spam', 'remboursement@impots-service.example', 'Remboursement en attente', 'Vous avez droit à un remboursement de 312 €. Cliquez ici et confirmez votre carte bancaire.'),
  c('spam', 'offres@soldes-geantes.example', 'Dernière chance : -90 %', 'Soldes incroyables, prix cassés sur tout le site. Offre valable aujourd’hui seulement, cliquez !'),
  c('spam', 'rencontre@coeur-solitaire.example', 'Quelqu’un pense à vous', 'Une personne a consulté votre profil. Inscription gratuite, cliquez pour découvrir son message.'),
  c('spam', 'support@compte-verification.example', 'Action requise sur votre compte', 'Votre abonnement expire. Mettez à jour votre carte bancaire immédiatement via ce lien sécurisé.'),
  c('spam', 'travail@emploi-facile.example', 'Gagnez 3000 € par mois chez vous', 'Travail à domicile garanti, sans expérience. Cliquez pour recevoir le kit gratuit.'),
  c('normal', 'awa@famille.example', 'Dimanche chez mamie', 'Coucou ! On se retrouve dimanche midi chez mamie ? Apporte le dessert si tu peux.'),
  c('normal', 'secretariat@college.example', 'Réunion parents-professeurs', 'La réunion aura lieu jeudi à 18 h en salle 12. Merci de confirmer votre présence.'),
  c('normal', 'karim@travail.example', 'Compte rendu de la réunion', 'Voici le compte rendu de la réunion de lundi. Relis la partie sur le budget avant vendredi.'),
  c('normal', 'mediatheque@ville.example', 'Rappel : livres à rendre', 'Les trois livres empruntés sont à rendre avant le 24. Vous pouvez les prolonger en ligne.'),
  c('normal', 'club@basket.example', 'Entraînement annulé', 'L’entraînement de mercredi est annulé à cause du gymnase. Match maintenu samedi à 15 h.'),
  c('normal', 'lea@amis.example', 'Photos des vacances', 'Je t’envoie les photos de la randonnée. Celle du lac est vraiment belle, non ?'),
  c('normal', 'cabinet@medecin.example', 'Confirmation de rendez-vous', 'Votre rendez-vous est confirmé mardi à 9 h 30. Pensez à apporter votre carte vitale.'),
  c('normal', 'tom@travail.example', 'Projet : nouvelle version', 'J’ai terminé la nouvelle version du projet. Tu peux la relire avant la réunion de jeudi ?'),
  c('normal', 'asso@jardin-partage.example', 'Atelier compost samedi', 'Atelier compost samedi matin au jardin partagé. Venez avec des gants, café offert.'),
  c('normal', 'papa@famille.example', 'Billets de train', 'J’ai réservé les billets de train pour le 12. Départ 8 h 05, arrivée vers midi.'),
  c('normal', 'mairie@ville.example', 'Inscriptions à la cantine', 'Les inscriptions à la cantine pour l’année prochaine sont ouvertes jusqu’au 30 juin.'),
  c('normal', 'sami@amis.example', 'Ciné ce soir ?', 'Ça te dit, le cinéma ce soir ? La séance est à 20 h, on peut manger avant.'),
];

// Pour l'examen : des courriels que le filtre n'a jamais vus, dont des cas
// difficiles (une vraie banque, une vraie promotion, un spam poli).
export const EXAMEN: Courriel[] = [
  c('spam', 'cadeau@super-jeu.example', 'Un cadeau vous attend', 'Cliquez ici pour recevoir votre cadeau gratuit, offre limitée.'),
  c('spam', 'alerte@banque-securite.example', 'Compte suspendu', 'Confirmez votre mot de passe et votre carte bancaire via ce lien, urgent.'),
  c('spam', 'jackpot@casino-royal.example', 'Jackpot : 1000 € gratuits', 'Gagnez des milliers d’euros, bonus offert à l’inscription, cliquez vite.'),
  c('spam', 'colis@livraison-express.example', 'Colis bloqué en douane', 'Payez 2,50 € de frais pour recevoir votre colis, cliquez sur le lien.'),
  c('spam', 'investir@bourse-magique.example', 'Méthode garantie', 'Investissez aujourd’hui, gains garantis, offre exclusive et secrète.'),
  c('spam', 'remise@grande-promo.example', 'Prix cassés sur tout', 'Promotion exceptionnelle, -80 % aujourd’hui seulement.'),
  c('spam', 'gagnant@tirage.example', 'Résultat du tirage', 'Vous êtes tiré au sort, envoyez vos coordonnées pour recevoir le gain.'),
  c('spam', 'contact@partenaire-pro.example', 'Proposition de partenariat', 'Bonjour, nous aimerions vous présenter une opportunité d’affaires. Pouvez-vous répondre à ce message ?'),
  c('spam', 'service@abonnement-tv.example', 'Renouvelez votre abonnement', 'Votre abonnement expire demain. Mettez à jour votre carte pour ne rien manquer.'),
  c('spam', 'emploi@job-maison.example', 'Travail à domicile', 'Recevez 2000 € par mois, sans expérience, inscription gratuite.'),
  c('spam', 'info@pilules.example', 'Livraison discrète', 'Médicaments sans ordonnance, prix bas, livraison gratuite.'),
  c('spam', 'amour@rencontres.example', 'Nouveau message', 'Une personne vous a écrit. Découvrez son profil, inscription gratuite.'),
  c('normal', 'banque@ma-banque.example', 'Votre relevé de compte', 'Votre relevé du mois est disponible dans votre espace. Nous ne vous demanderons jamais votre mot de passe.'),
  c('normal', 'librairie@quartier.example', 'Promotion de la rentrée', 'Pour la rentrée, -10 % sur les cahiers et les livres scolaires, en magasin seulement.'),
  c('normal', 'awa@famille.example', 'Cadeau pour mamie', 'Tu participes au cadeau pour l’anniversaire de mamie ? On pensait à un livre de jardinage.'),
  c('normal', 'karim@travail.example', 'Budget du projet', 'Le budget est validé. On en parle à la réunion de jeudi.'),
  c('normal', 'secretariat@college.example', 'Sortie scolaire', 'La sortie au musée aura lieu vendredi. Merci de rendre l’autorisation signée.'),
  c('normal', 'lea@amis.example', 'Randonnée dimanche', 'On refait une randonnée dimanche ? Départ 9 h, prends de l’eau.'),
  c('normal', 'transporteur@livraison.example', 'Votre colis arrive demain', 'Votre colis sera livré demain entre 8 h et 12 h. Aucun frais à payer.'),
  c('normal', 'mairie@ville.example', 'Travaux rue des écoles', 'Des travaux auront lieu rue des écoles du 3 au 7 mars. Merci de votre compréhension.'),
  c('normal', 'club@basket.example', 'Tournoi gratuit', 'Le club organise un tournoi gratuit samedi. Inscriptions au gymnase.'),
  c('normal', 'tom@travail.example', 'Urgent : relecture', 'Peux-tu relire le document en urgence avant midi ? Merci !'),
  c('normal', 'sami@amis.example', 'Gagné !', 'On a gagné le match hier soir ! Tu viens fêter ça samedi ?'),
  c('normal', 'mediatheque@ville.example', 'Nouveaux livres', 'De nouveaux livres sont arrivés à la médiathèque, venez les découvrir.'),
];

// ——— Des indices lisibles, pour un arbre de décision ———

const contient = (c: Courriel, re: RegExp) => re.test(`${c.objet} ${c.texte}`.toLowerCase());
const CONTACTS = /@(famille|travail|amis|college|ville|basket|medecin|jardin-partage)\./;

// Des questions qu'un humain comprend : l'arbre (src/lib/apprendre.ts)
// choisit lui-même lesquelles poser, et dans quel ordre.
export const QUESTIONS_COURRIEL: { id: string; texte: string; test: (c: Courriel) => boolean }[] = [
  { id: 'contact', texte: 'l’expéditeur est dans mes contacts', test: (c) => CONTACTS.test(c.de) },
  { id: 'lien', texte: 'il demande de cliquer sur un lien', test: (c) => contient(c, /cliqu|lien/) },
  { id: 'argent', texte: 'il parle d’argent ou de gratuit', test: (c) => contient(c, /€|gratuit|gain|gagn|prix|payer|frais/) },
  { id: 'presse', texte: 'il presse d’agir', test: (c) => contient(c, /urgent|vite|immédiatement|maintenant|aujourd’hui|limitée|dernière chance|demain/) },
  { id: 'coordonnees', texte: 'il demande des informations personnelles', test: (c) => contient(c, /mot de passe|carte bancaire|coordonnées|votre carte/) },
];

export const attributsCourriel = (c: Courriel) => Object.fromEntries(QUESTIONS_COURRIEL.map((q) => [q.id, q.test(c)]));

// ——— Trier des candidatures ———

export interface Candidature {
  diplome: boolean;
  experience: boolean; // au moins 5 ans
  interruption: boolean; // une pause dans la carrière (congé parental, maladie…)
  femme: boolean;
  retenue: boolean; // décision prise par les recruteur·ses du passé
}

// Un historique inventé : autrefois, les recruteur·ses écartaient presque
// toujours les candidatures avec une interruption de carrière. Or ces pauses
// (souvent un congé parental) concernent bien plus de femmes que d'hommes.
export function historique(alea: () => number, n: number): Candidature[] {
  return Array.from({ length: n }, () => {
    const femme = alea() < 0.5;
    const diplome = alea() < 0.6;
    const experience = alea() < 0.55;
    const interruption = alea() < (femme ? 0.45 : 0.1);
    const qualifie = diplome && experience;
    const retenue = qualifie && (!interruption || alea() < 0.15) ? alea() < 0.9 : alea() < 0.05;
    return { diplome, experience, interruption, femme, retenue };
  });
}
