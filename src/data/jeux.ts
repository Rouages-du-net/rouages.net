// Jeux pour apprendre, rangés par thème, pour la page /jeux/. Chaque lien a
// été ouvert le 17 octobre 2026 (quatre ajouts le 24 octobre 2026) ; détails et sources dans
// docs/sources/jeux.md. Les jeux changent souvent de nom, de modèle ou
// disparaissent : revérifier régulièrement.

export interface Jeu {
  nom: string;
  lien: string;
  /** Qui l'a fait (organisation ou personnes), et d'où, quand c'est vérifié. */
  par?: string;
  desc: string;
  fr: boolean;
  prix: 'gratuit' | 'freemium' | 'payant' | 'variable';
  compte: boolean;
  /** Navigateur, à télécharger, débranché (sans ordinateur)… */
  forme: string;
  /** Points d'attention : publicité, pisteurs, collecte de données, changement récent. */
  attention?: string;
  /** Jeu à discuter : ce qu'il montre, et ce qu'il banalise. */
  discuter?: string;
  /** Jeu fait par Les rouages du net. */
  maison?: boolean;
}

export interface Theme {
  id: string;
  titre: string;
  intro: string;
  /** Module du site qui va avec. */
  module?: { titre: string; lien: string };
  jeux: Jeu[];
}

export const THEMES: Theme[] = [
  {
    id: 'ligne-de-commande',
    titre: 'Ligne de commande et administration système',
    intro: 'Taper de vraies commandes, sans peur de casser quelque chose.',
    jeux: [
      { nom: 'Quêtes de Sysadmin', lien: '/jeux/quetes-de-sysadmin/', par: 'Les rouages du net, logiciel libre (GPL v3)', desc: 'Cinq histoires pour apprendre la ligne de commande et l’administration système : se déplacer, chercher, les permissions et sudo, les journaux, le réseau, git et les archives, avec un vrai manuel.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur, intégrable dans un site', maison: true },
      { nom: 'Terminus', lien: 'https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html', par: 'Shawn Conrad et Michele Pratusevich (MIT, États-Unis)', desc: 'Le jeu qui a inspiré Quêtes de Sysadmin : une aventure où l’on se déplace avec ls, cd et less.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'Hacknet', lien: 'https://www.hacknet-os.com/', par: 'Team Fractal Alligator, édité par Fellow Traveller', desc: 'Un simulateur de piratage en terminal, « basé sur des commandes UNIX réelles », autour du mystère d’un hacker disparu.', fr: true, prix: 'payant', compte: false, forme: 'ordinateur', attention: 'Fiction : les commandes de base sont celles d’un vrai terminal, les attaques sont très simplifiées. Langage grossier ; une licence pour les écoles donne une version sans.' },
      { nom: 'GameShell', lien: 'https://github.com/phyver/GameShell', par: 'Université Savoie Mont Blanc (France), logiciel libre (GPL v3)', desc: 'Des missions à réussir dans un vrai shell, vérifiées automatiquement. Pensé pour le lycée et la première année d’université.', fr: true, prix: 'gratuit', compte: false, forme: 'à installer (Linux, macOS)' },
      { nom: 'OverTheWire : Bandit', lien: 'https://overthewire.org/wargames/bandit/', par: 'communauté OverTheWire', desc: 'Chaque niveau cache le mot de passe du suivant : fichiers, recherche, permissions, SSH.', fr: false, prix: 'gratuit', compte: false, forme: 'terminal et SSH', attention: 'On joue sur des serveurs partagés : à encadrer avec des plus jeunes. Google Analytics sur le site.' },
      { nom: 'The Command Line Murders', lien: 'https://github.com/veltman/clmystery', par: 'Noah Veltman', desc: 'Une enquête policière à résoudre avec grep, head et cat.', fr: false, prix: 'gratuit', compte: false, forme: 'à télécharger (terminal)' },
      { nom: 'bashcrawl', lien: 'https://gitlab.com/slackermedia/bashcrawl', par: 'Slackermedia, logiciel libre (GPL v3)', desc: 'Un jeu d’aventure textuel dont les salles sont des dossiers.', fr: false, prix: 'gratuit', compte: false, forme: 'à télécharger (terminal)' },
      { nom: 'CMD Challenge', lien: 'https://cmdchallenge.com/', par: 'John Jarvis, logiciel libre (MIT)', desc: 'Des défis à résoudre en une seule ligne de bash, exécutée dans un vrai conteneur.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'VIM Adventures', lien: 'https://vim-adventures.com/', par: 'Doron Linder', desc: 'Apprendre l’éditeur Vim dans un jeu d’aventure.', fr: false, prix: 'freemium', compte: false, forme: 'navigateur', attention: 'Seuls les premiers niveaux sont gratuits.' },
    ],
  },
  {
    id: 'programmation',
    titre: 'Programmation et algorithmique',
    intro: 'Des blocs à l’assembleur, apprendre à donner des ordres précis à une machine.',
    jeux: [
      { nom: 'Concours Castor Informatique', lien: 'https://castor-informatique.fr/', par: 'association France-ioi, avec Inria', desc: 'De courts casse-têtes interactifs de pensée informatique, du primaire au lycée. Entraînement possible toute l’année.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'Concours Algoréa', lien: 'https://algorea.org/', par: 'association France-ioi', desc: 'Programmer en blocs puis en Python, par tours progressifs, du CM1 à la terminale.', fr: true, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'Compte nécessaire à partir des tours qualificatifs.' },
      { nom: 'France-IOI', lien: 'https://www.france-ioi.org/algo/chapters.php', par: 'association France-ioi', desc: 'Des centaines de problèmes d’algorithmique corrigés automatiquement, jusqu’au niveau des olympiades.', fr: true, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'Compte utile pour suivre sa progression.' },
      { nom: 'Blockly Games', lien: 'https://blockly.games/?lang=fr', par: 'Google, logiciel libre (Apache 2.0)', desc: 'Labyrinthe, oiseau, tortue : boucles, conditions et fonctions en blocs, puis passage au JavaScript.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur ou hors ligne' },
      { nom: 'LightBot', lien: 'https://lightbot.com/', desc: 'Guider un robot avec des séquences, des procédures et des boucles.', fr: false, prix: 'freemium', compte: false, forme: 'navigateur, mobile', attention: 'Démos gratuites ; applications complètes payantes. Ancien Google Analytics.' },
      { nom: 'Human Resource Machine', lien: 'https://tomorrowcorporation.com/humanresourcemachine', par: 'Tomorrow Corporation', desc: 'Programmer des employé·es de bureau dans un langage proche de l’assembleur.', fr: true, prix: 'payant', compte: false, forme: 'ordinateur, mobile, consoles' },
      { nom: '7 Billion Humans', lien: 'https://tomorrowcorporation.com/7billionhumans', par: 'Tomorrow Corporation', desc: 'La suite : plusieurs ouvrier·es exécutent le même programme en même temps (programmation parallèle).', fr: true, prix: 'payant', compte: false, forme: 'ordinateur, mobile, consoles' },
      { nom: 'Robocode Tank Royale', lien: 'https://robocode.dev/', par: 'logiciel libre (Apache 2.0)', desc: 'Programmer un char autonome en Java, Python, .NET ou TypeScript et l’opposer à d’autres.', fr: false, prix: 'gratuit', compte: false, forme: 'à installer' },
      { nom: 'CodinGame', lien: 'https://www.codingame.com/', par: 'CodinGame (France)', desc: 'Programmer des bots pour des jeux, en duel ou en « code golf ».', fr: false, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'Se présente depuis 2026 comme une arène pour agents d’IA ; on peut encore jouer à la main. Plateforme de recrutement, outils de pistage (Mixpanel).' },
    ],
  },
  {
    id: 'processeur',
    titre: 'Du transistor au processeur',
    intro: 'Construire un ordinateur porte logique par porte logique.',
    module: { titre: 'Comment marche un ordinateur', lien: '/modules/ordinateur/' },
    jeux: [
      { nom: 'NandGame', lien: 'https://nandgame.com/', par: 'Olav Junker Kjær', desc: 'De la porte NAND à l’additionneur, la mémoire et le processeur, avec seulement des additions et des soustractions.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
      { nom: 'Turing Complete', lien: 'https://turingcomplete.game/', par: 'LevelHead', desc: 'Des portes logiques à un ordinateur complet, puis l’assembleur sur sa propre machine.', fr: true, prix: 'payant', compte: false, forme: 'ordinateur' },
      { nom: 'Digital Logic Sim', lien: 'https://sebastian.itch.io/digital-logic-sim', par: 'Sebastian Lague, logiciel libre (MIT)', desc: 'Un bac à sable pour créer ses propres puces à partir d’une seule porte NAND.', fr: false, prix: 'gratuit', compte: false, forme: 'ordinateur' },
      { nom: 'TIS-100', lien: 'https://www.zachtronics.com/tis-100/', par: 'Zachtronics', desc: 'De l’assembleur sur des nœuds qui tournent en parallèle, avec un manuel « d’époque » à imprimer.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur' },
      { nom: 'SHENZHEN I/O', lien: 'https://www.zachtronics.com/shenzhen-io/', par: 'Zachtronics', desc: 'Concevoir des circuits à microcontrôleurs et les programmer, en lisant de vraies fiches techniques.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur' },
      { nom: 'EXAPUNKS', lien: 'https://www.zachtronics.com/exapunks/', par: 'Zachtronics', desc: 'Programmer en assembleur des EXA, de petits agents qui passent de machine en machine, se copient et modifient des fichiers ; le manuel est un fanzine de 1997.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur', attention: 'Univers de piratage fictif (« écrire des virus ») : c’est un jeu de programmation, pas de sécurité.' },
      { nom: 'MHRD', lien: 'https://store.steampowered.com/app/576030/MHRD/', par: 'Funghisoft', desc: 'Concevoir un processeur dans un langage de description matérielle.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur' },
    ],
  },
  {
    id: 'web',
    titre: 'Web, bases de données et git',
    intro: 'Mettre en page, interroger des données, garder l’historique de son travail.',
    jeux: [
      { nom: 'Grid Garden', lien: 'https://cssgridgarden.com/', par: 'Codepip', desc: 'Arroser un potager avec la mise en page CSS Grid.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
      { nom: 'Flexbox Froggy', lien: 'https://flexboxfroggy.com/', par: 'Thomas Park / Codepip, logiciel libre (MIT)', desc: 'Ramener des grenouilles sur leurs nénuphars avec CSS Flexbox. Mode daltonien.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Publicité Google AdSense et Google Analytics.' },
      { nom: 'CSS Diner', lien: 'https://flukeout.github.io/', par: 'Luke Pacholski', desc: 'Choisir des plats sur une table avec les sélecteurs CSS.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
      { nom: 'Learn Git Branching', lien: 'https://learngitbranching.js.org/?locale=fr_FR', par: 'Peter Cottle, logiciel libre (MIT)', desc: 'Branches, rebase, cherry-pick et dépôts distants, avec le graphe des commits sous les yeux.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
      { nom: 'Oh My Git!', lien: 'https://ohmygit.org/', par: 'bleeptrack et blinry (Allemagne), financé par le Prototype Fund ; logiciel libre', desc: 'Git avec des cartes à jouer et un vrai Git intégré.', fr: false, prix: 'gratuit', compte: false, forme: 'à installer', attention: 'Peu maintenu depuis 2021.' },
      { nom: 'The SQL Murder Mystery', lien: 'https://mystery.knightlab.com/', par: 'Knight Lab, Northwestern University ; logiciel libre (MIT)', desc: 'Résoudre un meurtre à « SQL City » avec SELECT et JOIN.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
      { nom: 'Untrusted', lien: 'https://untrustedgame.com/', par: 'Alex Nisnevich', desc: 'Pour avancer, lire et modifier le JavaScript qui fait tourner le niveau.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics.' },
    ],
  },
  {
    id: 'reseaux',
    titre: 'Réseaux et internet',
    intro: 'Paquets, adresses, routeurs : peu de vrais jeux, surtout des activités et des simulateurs.',
    module: { titre: 'De l’Entrée à la page', lien: '/modules/entree-a-la-page/' },
    jeux: [
      { nom: 'CS Unplugged (L’informatique sans ordinateur)', lien: 'https://www.csunplugged.org/fr/', par: 'Université de Canterbury (Nouvelle-Zélande), CC BY-SA', desc: 'Binaire, tris, détection d’erreurs… avec des cartes, des cordes et des craies. Dès 5 ans.', fr: true, prix: 'gratuit', compte: false, forme: 'débranché', attention: 'Une partie des activités n’est pas traduite.' },
      { nom: 'Le routage des paquets (fiche SNT)', lien: 'https://ressources.forge.apps.education.fr/snt/Internet/a_telecharger/05/05.%20Routage%20des%20paquets%20-%20INTERNET.pdf', par: 'Forge des communs numériques éducatifs (Éducation nationale), d’après Class’Code', desc: 'Une activité d’une heure pour jouer les switchs et les routeurs et acheminer des paquets.', fr: true, prix: 'gratuit', compte: false, forme: 'débranché' },
      { nom: 'Filius', lien: 'https://www.lernsoftware-filius.de/', par: 'logiciel éducatif (Allemagne)', desc: 'Monter un réseau (ordinateurs, switch, routeur, DNS, serveur web) et regarder passer les paquets. Version web en test : Filius II.', fr: false, prix: 'gratuit', compte: false, forme: 'à installer, navigateur', attention: 'Simulateur plutôt que jeu ; en allemand et en anglais.' },
      { nom: 'Netsim', lien: 'https://netsim.erinn.io/', desc: 'Fabriquer des paquets à la main et comprendre l’usurpation d’adresse ou le déni de service.', fr: false, prix: 'gratuit', compte: true, forme: 'navigateur' },
      { nom: 'Cisco Packet Tracer', lien: 'https://www.netacad.com/cisco-packet-tracer', par: 'Cisco Networking Academy', desc: 'Le simulateur utilisé dans les formations réseau, avec des activités notées.', fr: false, prix: 'gratuit', compte: true, forme: 'à installer', attention: 'Logiciel propriétaire, compte obligatoire, cookies commerciaux.' },
      { nom: 'NetsBlox', lien: 'https://netsblox.org/', par: 'Vanderbilt University (États-Unis)', desc: 'Programmer en blocs des programmes qui s’envoient des messages : jeux en réseau, services en ligne.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Environnement de programmation plutôt que jeu.' },
    ],
  },
  {
    id: 'securite',
    titre: 'Sécurité et vie privée',
    intro: 'Défis « Capture The Flag », hameçonnage, données personnelles. Toujours sur des cibles prévues pour ça.',
    jeux: [
      { nom: 'Root-Me', lien: 'https://www.root-me.org/?lang=fr', par: 'association Root-Me (France)', desc: 'Plus de 600 défis de sécurité (web, réseau, cryptographie, forensique) et des environnements virtuels.', fr: true, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'Compte avec adresse e-mail.' },
      { nom: 'CyLab Security Academy (ex-picoCTF)', lien: 'https://cylabacademy.org/', par: 'Carnegie Mellon University (États-Unis)', desc: 'Des défis CTF pour débuter : web, cryptographie, rétro-ingénierie, sécurité de l’IA.', fr: false, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'picoCTF a changé de nom en 2026.' },
      { nom: 'OverTheWire : Natas et Krypton', lien: 'https://overthewire.org/wargames/natas/', par: 'communauté OverTheWire', desc: 'Natas : la sécurité des serveurs web, dans le navigateur. Krypton : la cryptographie classique, en SSH.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur, SSH', attention: 'Google Analytics sur le site.' },
      { nom: 'Quiz sur l’hameçonnage', lien: 'https://phishingquiz.withgoogle.com/?hl=fr', par: 'Jigsaw (Google)', desc: 'Repérer les faux courriels qui cherchent à voler un mot de passe.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Cookies et Google Analytics.' },
      { nom: 'Interland', lien: 'https://beinternetawesome.withgoogle.com/fr_be/interland', par: 'Google (Les Cyber Héros)', desc: 'Mots de passe, partage d’informations et bienveillance en ligne, pour les 8-12 ans.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Cookies Google.' },
      { nom: 'Données paires-sonnelles', lien: 'https://www.cnil.fr/fr/donnees-paires-sonnelles-jouez-apprenez-protegez-votre-vie-privee', par: 'CNIL (France)', desc: 'Un jeu de paires à imprimer pour reconnaître une donnée personnelle, une donnée sensible… et les pièges.', fr: true, prix: 'gratuit', compte: false, forme: 'débranché' },
      { nom: 'Gardiens et gardiennes du numérique', lien: 'https://www.cnil.fr/fr/gardiens-et-gardiennes-du-numerique-tous-en-mission', par: 'CNIL et Groupe VYV', desc: 'Des livrets de mini-jeux sur la vie privée en ligne, du CM2 à la 3e.', fr: true, prix: 'gratuit', compte: false, forme: 'à imprimer' },
      { nom: 'Hacksplaining', lien: 'https://www.hacksplaining.com/', par: 'Malcolm McDonald (États-Unis)', desc: 'Plus de 45 leçons interactives de 15 à 30 minutes : on mène soi-même l’attaque (injection SQL, cross-site scripting, injection d’instructions dans une appli d’IA…), puis on apprend à s’en protéger.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Gratuit pour un usage personnel, offre payante pour les équipes. Compte facultatif pour garder sa progression. Mesure d’audience (Umami) et suivi des erreurs (Sentry).' },
      { nom: 'TryHackMe', lien: 'https://tryhackme.com/', desc: 'Des parcours guidés, de la découverte du réseau à l’analyse d’incidents.', fr: false, prix: 'freemium', compte: true, forme: 'navigateur', attention: 'Plateforme commerciale.' },
      { nom: 'Grey Hack', lien: 'https://greyhackgame.com/', par: 'Loading Home', desc: 'Un simulateur de piratage en ligne sur un réseau de machines générées. Chaque commande du terminal est un script que l’on peut lire, modifier ou réécrire.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur, multijoueur en ligne', attention: 'En accès anticipé depuis décembre 2017. Monde partagé où les joueur·ses s’attaquent entre eux : à encadrer avec des plus jeunes. Fiction de piratage.' },
      { nom: 'Cyber Manhunt', lien: 'https://store.steampowered.com/app/1216710/Cyber_Manhunt/', par: 'Aluba Studio', desc: 'Des enquêtes où l’on reconstitue la vie de personnes fictives à partir de leurs traces en ligne : recherche web, mots de passe devinés, hameçonnage, conversations sous une fausse identité.', fr: false, prix: 'payant', compte: false, forme: 'ordinateur', discuter: 'Le studio dit vouloir montrer les dangers d’internet : cyberharcèlement, données personnelles exposées. Mais le jeu fait pratiquer ces gestes contre des cibles, sans montrer comment s’en protéger. À jouer en en parlant : qu’est-ce qu’on trouverait sur moi, et comment le limiter ? La suite (Cyber Manhunt 2, 2025) fait jouer une IA qui mène ces enquêtes.' },
    ],
  },
  {
    id: 'ia',
    titre: 'Intelligence artificielle',
    intro: 'Surtout des expériences : jouer avec une IA pour voir comment elle apprend, se trompe… ou se fait tromper.',
    module: { titre: 'L’IA', lien: '/ia/' },
    jeux: [
      { nom: 'Quick, Draw!', lien: 'https://quickdraw.withgoogle.com/', par: 'Google Creative Lab', desc: 'Dessiner en 20 secondes pendant qu’un réseau de neurones devine ; voir ce qui le trompe.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Tes dessins rejoignent un jeu de données public. Cookies Google.' },
      { nom: 'Survival of the Best Fit', lien: 'https://www.survivalofthebestfit.com/', par: 'G. Csapo, J. Kim, M. Klasinc, A. ElKattan (prix de la Fondation Mozilla)', desc: 'En six minutes, voir un algorithme d’embauche apprendre les biais des recrutements passés.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Analytics et pixel Facebook.' },
      { nom: 'Agent Breaker (ex-Gandalf)', lien: 'https://play.lakera.ai/agent-breaker', par: 'Lakera (entreprise de sécurité de l’IA)', desc: 'Pirater des applications d’IA générative par injection d’instructions cachées.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Remplace le jeu Gandalf. Outils marketing (HubSpot) ; ce que tu tapes sert probablement à l’entreprise.' },
      { nom: 'Which Face Is Real?', lien: 'https://www.whichfaceisreal.com/', par: 'Jevin West et Carl Bergstrom (University of Washington)', desc: 'Repérer le visage généré par une IA à côté d’une vraie photo.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Images de 2019 : les générateurs actuels sont bien plus réalistes.' },
      { nom: 'Moral Machine', lien: 'https://www.moralmachine.net/hl/fr', desc: 'Choisir qui une voiture autonome doit épargner dans des dilemmes.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Plateforme de collecte de données de recherche : elle mesure des préférences, elle ne dit pas ce que la voiture devrait faire.' },
      { nom: 'Teachable Machine', lien: 'https://teachablemachine.withgoogle.com/', par: 'Google', desc: 'Entraîner soi-même un classifieur d’images, de sons ou de poses, en trois étapes.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Outil plutôt que jeu ; utilise la caméra et le micro.' },
      { nom: 'AI for Oceans', lien: 'https://code.org/oceans', par: 'Code.org (CodeAI)', desc: 'Entraîner une IA à trier des poissons et des déchets, et découvrir les biais des données.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Google Tag Manager.' },
    ],
  },
  {
    id: 'medias',
    titre: 'Désinformation et éducation aux médias',
    intro: 'Se mettre à la place de celles et ceux qui manipulent, pour mieux s’en protéger.',
    jeux: [
      { nom: 'Harmony Square', lien: 'https://harmonysquare.game/fr', par: 'DROG (Pays-Bas) et Université de Cambridge', desc: 'Semer la discorde dans un village paisible pour comprendre les techniques de manipulation politique.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Statistiques de jeu utilisées pour la recherche ; Google Analytics.' },
      { nom: 'Classe Investigation', lien: 'https://www.clemi.fr/classeinvestigation', par: 'CLEMI (Éducation nationale)', desc: 'Un jeu de rôle en classe pour comprendre comment se fabrique l’information, du CM2 à la terminale.', fr: true, prix: 'gratuit', compte: false, forme: 'en classe', attention: 'Matériel remis aux enseignant·es après une formation en ligne du CLEMI.' },
      { nom: 'E.M.I.SSAIRE', lien: 'https://www.clemi.fr/ressources/jeux-deducation-aux-medias-et-linformation/emissaire-0', par: 'CLEMI et Atelier Canopé 93', desc: 'Un jeu coopératif à imprimer pour débattre des écrans et des réseaux sociaux, dès 10 ans.', fr: true, prix: 'gratuit', compte: false, forme: 'débranché' },
      { nom: 'Médiasphères', lien: 'https://www.clemi.fr/ressources/jeux-deducation-aux-medias-et-linformation/mediaspheres', par: 'CLEMI et Réseau Canopé', desc: 'Un jeu de société sur l’identité numérique, les données personnelles et le smartphone.', fr: true, prix: 'variable', compte: false, forme: 'débranché' },
      { nom: 'Bad News', lien: 'https://www.getbadnews.com/en', par: 'DROG et Université de Cambridge', desc: 'Devenir producteur·rice de fausses nouvelles : usurpation, émotion, complot, trolls.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Plus de version française. Statistiques de recherche.' },
      { nom: 'Spot the Troll', lien: 'https://spotthetroll.org/', par: 'Clemson University Media Forensics Hub (États-Unis)', desc: 'Huit profils de réseaux sociaux : troll ou vrai compte ? Avec des explications après chaque réponse.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'Fakey', lien: 'https://fakey.osome.iu.edu/', par: 'Observatory on Social Media, Indiana University', desc: 'Partager ou signaler des articles dans un fil simulé, en jugeant la fiabilité des sources.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Sert aussi à étudier comment on réagit à la désinformation.' },
      { nom: 'Cranky Uncle', lien: 'https://crankyuncle.com/game/', par: 'John Cook (Université de Melbourne)', desc: 'Apprendre les techniques du déni de la science (faux experts, données triées) avec un oncle grincheux.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur, mobile' },
    ],
  },
  {
    id: 'crypto',
    titre: 'Cryptographie',
    intro: 'Chiffrer, déchiffrer, et casser les mauvaises mises en œuvre.',
    jeux: [
      { nom: 'Cryptris', lien: 'https://inriamecsci.github.io/cryptris/', par: 'Inria (France)', desc: 'Le principe de la cryptographie à clé publique, dans un jeu façon Tetris.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'MysteryTwister', lien: 'https://mysterytwister.org/', par: 'projet CrypTool (Allemagne)', desc: 'Des centaines d’énigmes de chiffrement, du classique au moderne.', fr: false, prix: 'gratuit', compte: true, forme: 'navigateur', attention: 'Compte pour soumettre ses réponses.' },
      { nom: 'CryptoHack', lien: 'https://cryptohack.org/', desc: 'Casser de mauvaises mises en œuvre d’AES, RSA ou des courbes elliptiques, en Python.', fr: false, prix: 'gratuit', compte: true, forme: 'navigateur' },
      { nom: 'The Cryptopals Crypto Challenges', lien: 'https://cryptopals.com/', desc: 'Huit séries d’attaques réelles contre des systèmes de chiffrement, pour programmeur·ses confirmé·es.', fr: false, prix: 'gratuit', compte: false, forme: 'défis' },
    ],
  },
  {
    id: 'donnees',
    titre: 'Données, modèles et simulations',
    intro: 'Corrélations, modèles et collecte de données, à manipuler soi-même.',
    jeux: [
      { nom: 'The Evolution of Trust', lien: 'https://ncase.me/trust/', par: 'Nicky Case', desc: 'Le dilemme du prisonnier répété : quand la confiance gagne, quand elle s’effondre.', fr: true, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'Parable of the Polygons', lien: 'https://ncase.me/polygons/', desc: 'De petits biais individuels qui produisent une forte ségrégation (le modèle de Schelling).', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur' },
      { nom: 'Guess the Correlation', lien: 'https://guessthecorrelation.com/', par: 'Omar Wagih', desc: 'Estimer une corrélation à partir d’un nuage de points.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Publicité Google AdSense.' },
      { nom: 'clickclickclick', lien: 'https://clickclickclick.click/', desc: 'Un site qui commente en direct tout ce que fait ta souris : la collecte de données comportementales, rendue visible.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Il enregistre ton comportement sur la page, c’est le principe.' },
      { nom: 'VisuAlgo', lien: 'https://visualgo.net/en', desc: 'Des animations d’algorithmes et de structures de données, avec un mode quiz.', fr: false, prix: 'gratuit', compte: false, forme: 'navigateur', attention: 'Outil plutôt que jeu.' },
    ],
  },
  {
    id: 'sobriete',
    titre: 'Numérique responsable',
    intro: 'Peu de jeux vérifiables pour l’instant. Les ateliers collaboratifs sont la piste la plus solide.',
    jeux: [
      { nom: 'La Fresque du Numérique', lien: 'https://www.fresquedunumerique.org/', par: 'association La Fresque du Numérique (France)', desc: 'Un atelier collaboratif d’une demi-journée, en équipes, sur les impacts environnementaux du numérique (IA comprise depuis la version 3.0).', fr: true, prix: 'variable', compte: false, forme: 'atelier', attention: 'Gratuit ou payant selon l’organisateur.' },
    ],
  },
];
