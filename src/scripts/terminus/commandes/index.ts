// Toutes les commandes du jeu. Chaque chapitre choisit celles qu'il connaît
// (Chapitre.commandes). Une commande lit ses arguments et l'entrée du tube,
// renvoie sa sortie, et signale ses erreurs avec jeu.erreur().

import type { Shell } from '../shell';
import { FICHIERS } from './fichiers';
import { TEXTE } from './texte';
import { SYSTEME } from './systeme';
import { RESEAU } from './reseau';
import { GIT } from './git';

export interface Contexte {
  args: string[];
  // Ce qui arrive par un tube (null : rien, la commande est en tête).
  entree: string | null;
  jeu: Shell;
  // Vrai si la sortie va à l'écran (dernière commande, sans redirection).
  dernier: boolean;
}

export interface Commande {
  manuel: string;
  lancer: (c: Contexte) => string;
}

export const COMMANDES: Record<string, Commande> = {
  ...FICHIERS,
  ...TEXTE,
  ...SYSTEME,
  ...RESEAU,
  ...GIT,
  sudo: {
    manuel:
      'sudo commande — exécute une commande en tant que root, l’administrateur qui a tous les droits (superuser do). Demande TON mot de passe, pas celui de root.',
    lancer: () => '',
  },
  clear: { manuel: 'clear — efface l’écran.', lancer: () => '' },
  man: { manuel: 'man commande — affiche le manuel d’une commande (manual).', lancer: () => '' },
  aide: { manuel: 'aide — liste les commandes que tu connais.', lancer: () => '' },
};
