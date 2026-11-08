// Données du module « Se protéger : mots de passe, hameçonnage, chiffrement,
// mises à jour ». Faits sourcés : voir docs/sources/se-proteger.md.

/**
 * Vitesses d'attaque (essais par seconde) pour l'animation « Phrase de passe ».
 * - En ligne : 1 000 essais par seconde contre un service web mal protégé
 *   (hypothèse de la bande dessinée xkcd 936).
 * - Hors ligne : environ 1,5 million d'essais par seconde contre une base de
 *   mots de passe hachés avec bcrypt (facteur 10), ordre de grandeur déduit du
 *   tableau 2025 de Hive Systems (12 cartes graphiques RTX 5090).
 */
export const VITESSES = [
  { id: 'en-ligne', nom: 'en ligne, sur un site mal protégé', essais: 1_000 },
  { id: 'bcrypt', nom: 'hors ligne, sur une base volée bien hachée (bcrypt)', essais: 1_500_000 },
];

/** Seuils officiels, en bits d'entropie. */
export const SEUILS = [
  { bits: 50, qui: 'CNIL : minimum si le site limite les essais (blocage, temporisation)' },
  { bits: 80, qui: 'CNIL : minimum pour un mot de passe seul' },
  { bits: 100, qui: 'ANSSI : sensibilité forte à très forte' },
];

/** Messages pour le jeu « Hameçonnage ou pas ? » (domaines fictifs .example). */
export const MESSAGES: { canal: string; de: string; texte: string; piege: boolean; explication: string }[] = [
  {
    canal: 'SMS', de: '+33 6 00 00 00 00',
    texte: 'Votre colis n’a pas pu être livré. Frais de réacheminement : 1,99 €. Réglez ici : https://suivi-colis-relais.example/paiement',
    piege: true,
    explication: 'Hameçonnage : une petite somme à payer, un lien vers un domaine qui imite un transporteur. Le faux colis est l’une des arnaques les plus vues en 2025 selon Cybermalveillance.gouv.fr.',
  },
  {
    canal: 'Appel puis WhatsApp', de: '« Service fraude de votre banque »',
    texte: 'Des opérations suspectes ont été détectées sur votre compte. Pour les bloquer, partagez votre écran et validez les opérations dans votre appli : nous vous guidons.',
    piege: true,
    explication: 'Arnaque au faux conseiller bancaire (+159 % en 2025). Aucune banque ne demande de valider des opérations, de partager son écran ou de donner ses codes. Raccroche et rappelle le numéro au dos de ta carte.',
  },
  {
    canal: 'SMS', de: 'Numéro inconnu',
    texte: 'Coucou maman, j’ai cassé mon téléphone, c’est mon nouveau numéro. Tu peux m’aider à payer une facture urgente ?',
    piege: true,
    explication: 'Le « coucou maman » : l’escroc se fait passer pour un enfant. Réflexe : appeler l’ancien numéro, ou poser une question que seul ton enfant connaît.',
  },
  {
    canal: 'Appli de ta banque', de: 'Notification dans l’appli officielle, que tu as ouverte toi-même',
    texte: 'Votre relevé de compte du mois est disponible dans l’onglet Documents.',
    piege: false,
    explication: 'Pas de piège : le message arrive dans l’appli officielle que tu as ouverte toi-même, sans lien, sans urgence, sans demande de code.',
  },
  {
    canal: 'Courriel', de: 'securite@impots-gouv-fr.example',
    texte: 'Bonjour, un remboursement de 312,40 € vous attend. Confirmez vos coordonnées bancaires avant 24 h pour le recevoir.',
    piege: true,
    explication: 'Hameçonnage, même sans faute d’orthographe : urgence (24 h), demande de coordonnées bancaires, domaine qui imite un site public. Les IA écrivent aujourd’hui sans fautes : regarde le domaine et la demande, pas l’orthographe.',
  },
  {
    canal: 'Courriel', de: 'Le site où tu viens de créer un compte',
    texte: 'Voici votre code de confirmation : 482 913. Si vous n’êtes pas à l’origine de cette demande, ignorez ce message.',
    piege: false,
    explication: 'Pas de piège si tu viens de faire la demande : le message ne demande rien, ne contient pas de lien, et te dit quoi faire si ce n’est pas toi. Ne donne jamais ce code à quelqu’un qui te le demande au téléphone.',
  },
];

/** Comment une passkey déjoue un faux site (WebAuthn : chaque clé est liée à un domaine). */
export const PASSKEY: { etape: string; mdp: string; passkey: string }[] = [
  { etape: 'Un message t’envoie sur un faux site', mdp: 'Le faux site banque-en-ligne.example ressemble au vrai, banque.example.', passkey: 'Même faux site, même apparence.' },
  { etape: 'Le faux site demande de te connecter', mdp: 'Tu tapes ton mot de passe, puis le code reçu par SMS ou affiché par ton appli.', passkey: 'Ton téléphone cherche une clé pour banque-en-ligne.example. Il n’en a aucune : ta clé est liée à banque.example.' },
  { etape: 'L’escroc relaie', mdp: 'Le faux site renvoie aussitôt ton mot de passe et ton code au vrai site : l’escroc entre dans ton compte. Le code à usage unique ne protège pas contre ce relais.', passkey: 'Rien à relayer : ta clé privée ne quitte jamais ton appareil, et elle ne signe que pour le vrai domaine.' },
  { etape: 'Résultat', mdp: 'Compte piraté.', passkey: 'Connexion impossible : le hameçonnage échoue, même si tu ne l’as pas repéré.' },
];
