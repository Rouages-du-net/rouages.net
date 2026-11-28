// Données du module « Linux : fichiers, droits, comptes et SSH ».
// Faits sourcés : voir docs/sources/linux.md (FHS 3.0, hier(7), passwd(5),
// sudoers(5), ssh(1), ssh_config(5), base-passwd de Debian).

/** Un dossier ou fichier de l'arborescence d'exemple. */
export interface Noeud {
  chemin: string;
  role?: string;
  /** Le dossier est un lien symbolique vers ce chemin. */
  lien?: string;
  fichier?: boolean;
  /** Droits du dossier, quand le terminal simulé doit en tenir compte. */
  proprietaire?: string;
  groupe?: string;
  mode?: number;
}

/** Arborescence d'exemple : une machine Debian ou Ubuntu récente, réduite. */
export const ARBRE: Noeud[] = [
  { chemin: '/', role: 'La racine : tout part d’ici, même les autres disques et les clés USB, qui viennent se « monter » dans un dossier.' },
  { chemin: '/bin', lien: '/usr/bin', role: 'Les commandes de base (ls, cp, cat…). Sur les systèmes récents, c’est un simple raccourci (lien symbolique) vers /usr/bin.' },
  { chemin: '/boot', role: 'Ce qu’il faut pour démarrer : le noyau Linux et le chargeur de démarrage.' },
  { chemin: '/boot/vmlinuz', fichier: true, role: 'Le noyau Linux lui-même, compressé.' },
  { chemin: '/dev', role: 'Les périphériques, vus comme des fichiers : disques, clavier, terminal…' },
  { chemin: '/dev/sda', fichier: true, role: 'Le premier disque SATA ou USB (un disque NVMe s’appelle plutôt /dev/nvme0n1). Écrire dedans, c’est écrire sur le disque brut : à manier avec précaution.' },
  { chemin: '/dev/null', fichier: true, role: 'Le « trou noir » : tout ce qu’on y écrit disparaît.' },
  { chemin: '/etc', role: 'La configuration de la machine : des fichiers texte qu’on lit et qu’on modifie (en tant que root).' },
  { chemin: '/etc/hostname', fichier: true, role: 'Le nom de la machine.' },
  { chemin: '/etc/passwd', fichier: true, role: 'La liste des comptes : nom, numéro (UID), dossier personnel, shell. Lisible par tous, sans mot de passe dedans.' },
  { chemin: '/etc/shadow', fichier: true, role: 'Les mots de passe, sous forme hachée. Lisible seulement par root et, sous Debian et Ubuntu, par le groupe shadow.' },
  { chemin: '/etc/group', fichier: true, role: 'La liste des groupes et de leurs membres.' },
  { chemin: '/etc/sudoers', fichier: true, role: 'Qui a le droit d’utiliser sudo, et pour quoi faire.' },
  { chemin: '/etc/ssh', role: 'La configuration de SSH.' },
  { chemin: '/etc/ssh/sshd_config', fichier: true, role: 'Les réglages du serveur SSH (port, connexion de root autorisée ou non…).' },
  { chemin: '/home', role: 'Les dossiers personnels des comptes : un sous-dossier par personne.' },
  { chemin: '/home/alice', proprietaire: 'alice', groupe: 'alice', mode: 0o750, role: 'Le dossier personnel d’alice, son « ~ ». C’est là qu’elle arrive en se connectant.' },
  { chemin: '/home/alice/cours', role: 'Un dossier ordinaire, créé par alice.' },
  { chemin: '/home/alice/cours/tp1.md', fichier: true, role: 'Un fichier ordinaire.' },
  { chemin: '/home/alice/.ssh', role: 'Dossier caché (son nom commence par un point) : les clés et réglages SSH d’alice.' },
  { chemin: '/home/alice/.ssh/authorized_keys', fichier: true, role: 'Les clés publiques autorisées à se connecter au compte d’alice.' },
  { chemin: '/home/alice/.ssh/known_hosts', fichier: true, role: 'Les empreintes des serveurs déjà rencontrés, pour reconnaître un imposteur.' },
  { chemin: '/home/bob', proprietaire: 'bob', groupe: 'bob', mode: 0o750, role: 'Le dossier personnel de bob. Sur un Ubuntu récent, il est créé en 750 (drwxr-x---) : seul bob y entre.' },
  { chemin: '/lib', lien: '/usr/lib', role: 'Les bibliothèques de base. Sur les systèmes récents, un raccourci vers /usr/lib.' },
  { chemin: '/media', role: 'Où apparaissent les clés USB et disques amovibles.' },
  { chemin: '/mnt', role: 'Pour monter un disque à la main, temporairement.' },
  { chemin: '/opt', role: 'Les logiciels installés « en bloc », hors du système de paquets.' },
  { chemin: '/proc', role: 'Un dossier virtuel fabriqué par le noyau : un sous-dossier par programme en cours. Rien n’est sur le disque.' },
  { chemin: '/root', proprietaire: 'root', groupe: 'root', mode: 0o700, role: 'Le dossier personnel de root, l’administrateur, fermé aux autres comptes (700). À ne pas confondre avec la racine « / ».' },
  { chemin: '/sbin', lien: '/usr/sbin', role: 'Les commandes d’administration. Sur les systèmes récents, un raccourci vers /usr/sbin.' },
  { chemin: '/srv', role: 'Les données des services que la machine offre (site web, dépôt de fichiers…).' },
  { chemin: '/tmp', role: 'Les fichiers temporaires : tout le monde peut y écrire, et il est souvent vidé au redémarrage.' },
  { chemin: '/usr', role: 'Les programmes et bibliothèques installés, partagés par tous les comptes. La plus grosse partie du système.' },
  { chemin: '/usr/bin', role: 'Les commandes : ls, ssh, sudo, python3…' },
  { chemin: '/usr/bin/ls', fichier: true, role: 'La commande ls, un programme comme un autre.' },
  { chemin: '/usr/bin/sudo', fichier: true, role: 'La commande sudo.' },
  { chemin: '/usr/lib', role: 'Les bibliothèques partagées par les programmes.' },
  { chemin: '/usr/sbin', role: 'Les commandes d’administration : useradd, sshd…' },
  { chemin: '/usr/share', role: 'Les données qui ne dépendent pas du processeur : documentation, icônes, traductions.' },
  { chemin: '/var', role: 'Ce qui change en permanence : journaux, files d’attente, bases de données, sites web.' },
  { chemin: '/var/log', role: 'Les journaux : qui s’est connecté, ce qui a planté…' },
  { chemin: '/var/log/auth.log', fichier: true, role: 'Le journal des connexions et des utilisations de sudo, quand rsyslog est installé (Debian ne l’installe plus par défaut depuis la version 12 : on lit alors le journal avec journalctl).' },
  { chemin: '/var/www', role: 'Les sites web, souvent. Sous Debian et Ubuntu, c’est le dossier du compte www-data, celui du serveur web.' },
  { chemin: '/var/www/html', role: 'La racine du site web par défaut.' },
];

/** Comptes de l'exemple (avec leurs groupes : le principal en premier). */
export const COMPTES = [
  { nom: 'alice', uid: 1000, groupes: ['alice', 'sudo', 'profs'], qui: 'professeure, administratrice de la machine' },
  { nom: 'bob', uid: 1001, groupes: ['bob', 'profs'], qui: 'professeur' },
  { nom: 'eve', uid: 1002, groupes: ['eve', 'eleves'], qui: 'élève' },
  { nom: 'root', uid: 0, groupes: ['root'], qui: 'l’administrateur, UID 0' },
];

/** Fichiers de l'exemple « Qui peut faire quoi ? ». */
export const FICHIERS_DROITS = [
  { chemin: '/home/alice/notes.txt', proprietaire: 'alice', groupe: 'alice', mode: 0o600, note: 'Notes personnelles d’alice.' },
  { chemin: '/srv/cours/tp1.md', proprietaire: 'alice', groupe: 'profs', mode: 0o664, note: 'Un sujet que les profs préparent ensemble, lisible par tous.' },
  { chemin: '/srv/cours/corrige.md', proprietaire: 'bob', groupe: 'profs', mode: 0o640, note: 'Le corrigé : les profs le lisent, les élèves non.' },
  { chemin: '/srv/rendus/eve-tp1.md', proprietaire: 'eve', groupe: 'profs', mode: 0o460, note: 'Le devoir rendu par eve, sans droit w pour elle : elle peut le relire, plus le modifier par erreur ; les profs peuvent l’annoter. Mais il est à elle : elle peut remettre le droit w avec chmod u+w.' },
  { chemin: '/home/alice/sauvegarde.sh', proprietaire: 'alice', groupe: 'alice', mode: 0o744, note: 'Un script : le x permet de le lancer.' },
  { chemin: '/etc/shadow', proprietaire: 'root', groupe: 'shadow', mode: 0o640, note: 'Les mots de passe hachés.' },
];

/** Lignes de /etc/passwd de l'exemple (format de passwd(5)). */
export const PASSWD = [
  'root:x:0:0:root:/root:/bin/bash',
  'www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin',
  'alice:x:1000:1000:Alice Martin,,,:/home/alice:/bin/bash',
  'bob:x:1001:1001:Bob Diallo,,,:/home/bob:/bin/bash',
];

/** Les sept champs d'une ligne de /etc/passwd. */
export const CHAMPS_PASSWD = [
  { nom: 'Nom du compte', detail: 'Le nom qu’on tape pour se connecter.' },
  { nom: 'Mot de passe', detail: 'Un « x » : le mot de passe (haché) est rangé à part, dans /etc/shadow, que seuls root et, sous Debian et Ubuntu, le groupe shadow peuvent lire.' },
  { nom: 'UID', detail: 'Le numéro du compte. C’est lui que le noyau utilise, pas le nom. 0 = root ; les comptes de personnes commencent en général à 1000.' },
  { nom: 'GID', detail: 'Le numéro du groupe principal (détaillé dans /etc/group).' },
  { nom: 'Description', detail: 'Un commentaire libre, souvent le nom complet.' },
  { nom: 'Dossier personnel', detail: 'Où l’on arrive en se connectant : le « ~ ».' },
  { nom: 'Shell', detail: 'Le programme lancé à la connexion. /usr/sbin/nologin interdit de se connecter : c’est le cas des comptes de service comme www-data, qui fait tourner le serveur web.' },
];
