# Dossier de sources : Linux (fichiers, droits, comptes et SSH)

Module `/modules/linux/`, rédigé le 24 novembre 2026. Recherche déléguée à un agent puis relue ; corrections reportées dans la page (voir « Faits non confirmés ou corrigés » en fin de fichier).


Recherche faite le 24 novembre 2026. Toutes les pages ont été téléchargées
avec le User-Agent `RouagesDuNet-research/0.1 (https://rouages.net)`, puis
les citations ont été extraites du texte. Aucune donnée personnelle n'a été
envoyée.

Légende :
- **[lu]** : URL ouverte, phrase citée relue dans le texte téléchargé ;
- **[résumé/métadonnées seulement]** : seulement un résumé de moteur de
  recherche, des métadonnées ou un extrait indirect ;
- **[non trouvé]** : aucune source primaire trouvée ou accessible ;
- **[observation locale]** : constaté dans le conteneur de travail
  (Ubuntu 24.04.5 LTS), utile pour illustrer mais ce n'est pas une source
  publiable ;
- **[déduction]** : raisonnement à partir de sources lues, sans phrase
  explicite.

Les pages de manuel man7.org viennent de *Linux man-pages 6.19* (pages datées
de 2025-2026). chmod(1) vient de *GNU coreutils 9.11* (avril 2026).
login.defs(5) vient de *shadow-utils 4.19.0*. Les pages OpenSSH de
man.openbsd.org sont celles d'*OpenBSD-current* (2 novembre 2026).

---

## A. Arborescence

### A1. FHS 3.0 — éditeur, date, URL — [lu]
- Page de titre : « Filesystem Hierarchy Standard — LSB Workgroup, The Linux
  Foundation — Version 3.0 — Copyright © 2015 The Linux Foundation » […]
  « March 19, 2015 ».
- URL : https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
  (une seule page : https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html)
- Résultat : **confirmé**. Éditeur : LSB Workgroup de la Linux Foundation.
  Date : 19 mars 2015.

Rôle de chaque dossier, avec la phrase « Purpose » du FHS 3.0 [lu] (même URL) :

| Dossier | Citation FHS 3.0 |
|---|---|
| `/bin` | « /bin contains commands that may be used by both the system administrator and by users, but which are required when no other filesystems are mounted (e.g. in single user mode). » (§3.4) |
| `/boot` | « This directory contains everything required for the boot process except configuration files not needed at boot time and the map installer. » (§3.5) |
| `/dev` | « The /dev directory is the location of special or device files. » (§3.6) |
| `/etc` | « The /etc hierarchy contains configuration files. A "configuration file" is a local file used to control the operation of a program; it must be static and cannot be an executable binary. » (§3.7) |
| `/home` | « /home : User home directories (optional) » ; « /home is a fairly standard concept, but it is clearly a site-specific filesystem. » ; « On smaller systems, each user's home directory is typically implemented as a subdirectory directly under /home, for example /home/smith, /home/torvalds » (§3.8) |
| `/lib` | « The /lib directory contains those shared library images needed to boot the system and run the commands in the root filesystem, ie. by binaries in /bin and /sbin. » (§3.9) |
| `/media` | « This directory contains subdirectories which are used as mount points for removable media such as floppy disks, cdroms and zip disks. » (§3.11) |
| `/mnt` | « This directory is provided so that the system administrator may temporarily mount a filesystem as needed. » (§3.12) |
| `/opt` | « /opt is reserved for the installation of add-on application software packages. » (§3.13) |
| `/root` | « /root : Home directory for the root user (optional) » ; « The root account's home directory may be determined by developer or local preference, but this is the recommended default location. » (§3.14) |
| `/run` | « This directory contains system information data describing the system since it was booted. Files under this directory must be cleared (removed or truncated as appropriate) at the beginning of the boot process. » (§3.15) |
| `/sbin` | « Utilities used for system administration (and other root-only commands) are stored in /sbin, /usr/sbin, and /usr/local/sbin. » (§3.16) |
| `/srv` | « /srv contains site-specific data which is served by this system. » (§3.17) |
| `/tmp` | « The /tmp directory must be made available for programs that require temporary files. Programs must not assume that any files or directories in /tmp are preserved between invocations of the program. » (§3.18) |
| `/usr` | « /usr is the second major section of the filesystem. /usr is shareable, read-only data. » (§4.1) |
| `/var` | « /var contains variable data files. This includes spool directories and files, administrative and logging data, and transient and temporary files. » (§5.1) |

À savoir aussi (FHS §3.8.3) [lu] : « User specific configuration files for
applications are stored in the user's home directory in a file that starts
with the '.' character (a "dot file"). » Cela explique les fichiers cachés
comme `~/.ssh`.

### A2. usrmerge (`/bin` → `/usr/bin`) — [lu]
- **Debian 12 « bookworm »**, notes de version, §5.1.14 « A "merged-/usr" is
  now required » : « the legacy directories are replaced with symlinks to the
  corresponding locations /usr/bin, /usr/sbin, /usr/lib, and /usr/lib64. This
  means that, for example, both /bin/bash and /usr/bin/bash will launch
  bash. » et « the new filesystem layout was already the default in these
  releases » (buster, bullseye).
  https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.en.html
- **Wiki Debian UsrMerge** : « the /{bin,sbin,lib}/ directories becoming
  symbolic links to /usr/{bin,sbin,lib}/ » ; « In February 2021, the
  Technical Committee has resolved that Debian 'bookworm' should support only
  the merged-usr root filesystem layout ». https://wiki.debian.org/UsrMerge
- **Fedora** (page de la fonctionnalité UsrMove) : « move all content to /usr
  and provide only symlinks in the root filesystem » ; « Targeted release:
  Fedora 17 ». https://fedoraproject.org/wiki/Features/UsrMove
- **freedesktop / systemd**, « The Case for the /usr Merge » : « This feature
  has been implemented successfully in Fedora 17. » ; « /bin becomes a symlink
  to /usr/bin ». Elle démonte aussi un mythe : « Fact: Oracle Solaris has
  implemented the /usr merge in parts 15 years ago, and completed it in
  Solaris 11. Fedora is following suit here, it is not the pioneer. »
  https://www.freedesktop.org/wiki/Software/systemd/TheCaseForTheUsrMerge/
- Ubuntu : [observation locale] sur Ubuntu 24.04, `ls -l /bin` affiche
  `/bin -> usr/bin`. Je n'ai lu aucune source Ubuntu officielle qui donne la
  version où ce changement est devenu le défaut : **[non trouvé]**.
- Conséquence : le FHS 3.0 (2015) décrit encore `/bin` et `/usr/bin` comme
  deux dossiers distincts. Sur les distributions récentes, ce sont en pratique
  le même dossier. Il faut le dire dans le module.

### A3. hier(7) — [lu]
https://man7.org/linux/man-pages/man7/hier.7.html (man-pages 6.19,
2026-02-08). Citations utiles :
- `/etc` : « Contains configuration files which are local to the machine. »
- `/home` : « On machines with home directories for users, these are usually
  beneath this directory, directly or not. »
- `/tmp` : « This directory contains temporary files which may be deleted
  with no notice, such as by a regular job or at system boot up. »
- `/usr` : « It should hold only shareable, read-only data »
- `/var` : « This directory contains files which may change in size, such as
  spool and log files. »
- `/dev` : « Special or device files, which refer to physical devices. »
- `/root` : « This directory is usually the home directory for the root user
  (optional). »
- `/srv` : « This directory contains site-specific data that is served by this
  system. »
- `/opt` : « This directory should contain add-on packages that contain static
  files. »

### A4. `~`, `.` et `..` (POSIX.1-2024) — [lu]
- **Tilde** (XCU 2.6.1 Tilde Expansion) : « If the tilde-prefix consists of
  only the <tilde> character, it shall be replaced by the value of the variable
  HOME. » https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html
- **Dossier personnel** (XBD 3.170 Home Directory) : « The directory specified
  by the HOME environment variable. »
  https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html
- **Dot / Dot-Dot** (XBD 3.110, 3.111) : Dot = « the filename consisting of a
  single <period> character ('.') » ; Dot-Dot = « The filename consisting
  solely of two <period> characters (".."). » (même URL)
- **Résolution** (XBD 4.16 Pathname Resolution) : « The special filename dot
  shall refer to the directory specified by its predecessor. The special
  filename dot-dot shall refer to the parent directory of its predecessor
  directory. As a special case, in the root directory, dot-dot may refer to
  the root directory itself. » Et : « If the pathname begins with a <slash>,
  the predecessor of the first filename in the pathname shall be taken to be
  the root directory of the process (such pathnames are referred to as
  "absolute pathnames"). »
  https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap04.html

---

## B. Droits

### B5. chmod : modes symboliques et octaux ; `ls -l` — [lu]
- **chmod(1) GNU** : « The format of a symbolic mode is
  [ugoa...][[-+=][perms...]...] » ; « the user who owns it (u), other users in
  the file's group (g), other users not in the file's group (o), or all users
  (a) » ; « The operator + causes the selected file mode bits to be added […];
  - causes them to be removed; and = causes them to be added and causes
  unmentioned bits to be removed » ; « read (r), write (w), execute (or search
  for directories) (x) ».
  https://man7.org/linux/man-pages/man1/chmod.1.html
- **Valeurs octales** (manuel GNU coreutils, « Numeric Modes ») : « one bit for
  read, one for write, and one for execute/search permission. These three bits
  are represented as one octal digit » ; tableau « 4 Read 2 Write 1
  Execute/search » ; « numeric mode '664' corresponds to symbolic mode
  'ug=rw,o=r' ».
  https://www.gnu.org/software/coreutils/manual/html_node/Numeric-Modes.html
- **POSIX chmod** (tableau) : « 4000 S_ISUID 0400 S_IRUSR … 2000 S_ISGID …
  1000 S_ISVTX … 0001 S_IXOTH ».
  https://pubs.opengroup.org/onlinepubs/9799919799/utilities/chmod.html
- **ls -l** (POSIX ls) : « The <entry type> character shall describe the type
  of file, as follows: d Directory. b Block special file. c Character special
  file. l (ell) Symbolic link. p FIFO. s Socket. - Regular file. »
  https://pubs.opengroup.org/onlinepubs/9799919799/utilities/ls.html
  Même page : « s If in <owner permissions>, the file is executable and
  set-user-ID mode is set » ; « t […] If in <other permissions> and the file is
  a directory, search permission is granted to others, and the restricted
  deletion flag is set. »

### B6. r, w, x sur un dossier — [lu]
Manuel GNU coreutils 9.12, §27.1 « Structure of File Mode Bits » :
- r : « For directories, this means permission to list the contents of the
  directory. »
- w : « For directories, this means permission to create and remove files in
  the directory. »
- x : « For directories, this means permission to access files in the
  directory. »
https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html
(le serveur gnu.org a d'abord coupé la connexion ; la page a été lue au
deuxième essai).
Complément, path_resolution(7) : « the first bit determines read permission,
the second write permission, and the last execute permission in case of
ordinary files, or search permission in case of directories. »

### B7. Ordre de vérification ; root — [lu]
- **POSIX XBD 3.150 File Owner Class** : « A process is in the file owner class
  of a file if the effective user ID of the process matches the user ID of the
  file. »
  **XBD 3.142 File Group Class** : « A process is in the file group class of a
  file if the process is not in the file owner class and if the effective
  group ID or one of the supplementary group IDs of the process matches the
  group ID associated with the file. »
  **XBD 3.149 File Other Class** : « if the process is not in the file owner
  class or file group class. »
  https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap03.html
- **XBD 4.7 File Access Permissions** (attention : c'est la **section 4.7**
  dans POSIX.1-2024, pas 4.5) : « Access shall be granted if […] the requested
  access permission bit is set for the class (file owner class, file group
  class, or file other class) to which the process belongs ». Pour un
  processus privilégié : « If read, write, or directory search permission is
  requested, access shall be granted. If execute permission is requested,
  access shall be granted if execute permission is granted to at least one
  user by the file permission bits ».
  https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap04.html
- **path_resolution(7)** (Linux) : « The first group of three is used when the
  effective user ID of the calling process equals the owner ID of the file.
  The second group of three is used when the group ID of the file either
  equals the effective group ID […]. When neither holds, the third group is
  used. » ; « On a traditional UNIX system, the superuser (root, user ID 0) is
  all-powerful, and bypasses all permissions restrictions » ; « The
  CAP_DAC_OVERRIDE capability overrides all permission checking, but grants
  execute permission only when at least one of the file's three execute
  permission bits is set. »
  https://man7.org/linux/man-pages/man7/path_resolution.7.html
- **capabilities(7)** : « CAP_DAC_OVERRIDE Bypass file read, write, and execute
  permission checks. »
  https://man7.org/linux/man-pages/man7/capabilities.7.html
- Résultat : **confirmé**. Une seule classe s'applique. Le propriétaire n'a
  que les droits du propriétaire, même si le groupe ou les autres en ont plus
  (cela découle des définitions : « not in the file owner class »).

### B8. umask, setuid, sticky bit — [lu]
- **umask(2)** : « The typical default value for the process umask is S_IWGRP
  | S_IWOTH (octal 022). » ; « 0666 & ~022 = 0644 ».
  https://man7.org/linux/man-pages/man2/umask.2.html
- **login.defs(5)** : « UMASK (number) The file mode creation mask is
  initialized to this value. If not specified, the mask will be initialized to
  022. » https://man7.org/linux/man-pages/man5/login.defs.5.html
- **pam_umask(8)** (d'où vient la valeur 002) : « usergroups If the user is not
  root and the username is the same as primary group name, the umask group bits
  are set to be the same as owner bits (examples: 022 -> 002, 077 -> 007). »
  https://man7.org/linux/man-pages/man8/pam_umask.8.html
  Il est donc juste d'écrire « 022, ou 002 sur les systèmes où chaque
  personne a son propre groupe ».
- **setuid** (coreutils Mode Structure) : « On execution, set the process's
  effective user ID to that of the file. » Exemple `/usr/bin/passwd` :
  [observation locale] `-rwsr-xr-x 1 root root … /usr/bin/passwd` (mode 4755)
  sur Ubuntu 24.04. Je n'ai pas trouvé de source publiée qui montre ce mode
  exact : à présenter comme une capture d'écran d'exemple.
- **sticky bit** : chmod(1) : « For directories, it prevents unprivileged users
  from removing or renaming a file in the directory unless they own the file or
  the directory; this is called the restricted deletion flag for the directory,
  and is commonly found on world-writable directories like /tmp. »
  inode(7) : « The sticky bit (S_ISVTX) on a directory means that a file in that
  directory can be renamed or deleted only by the owner of the file, by the
  owner of the directory, and by a privileged process. »
  https://man7.org/linux/man-pages/man7/inode.7.html
  [observation locale] `drwxrwxrwt … /tmp`, mode `1777`.

### B9. Brevet du bit setuid — [lu]
- Google Patents US4135240A « Protection of data file contents » : inventeur
  « Dennis M. Ritchie » ; « Application filed by Bell Telephone Laboratories
  Inc » ; dépôt (priority/filing date) **1973-07-09** ; publication
  **1979-01-16** ; numéro de demande US05/377,591 ; statut « Expired -
  Lifetime ». Résumé : « An improved arrangement for controlling access to data
  files by computer users. Access permission bits are used in the prior art to
  separat[e] ».
  https://patents.google.com/patent/US4135240A/en
- Résultat : **confirmé** (déposé le 9 juillet 1973, accordé le
  16 janvier 1979). Une seule source (registre de brevets, primaire). Je n'ai
  pas lu de deuxième source qui relie explicitement ce brevet au bit setuid
  (page de Ritchie inaccessible) : le lien « ce brevet = setuid » vient du
  résumé, qui parle de bits de permission. Je n'ai pas lu les revendications
  en entier. **À vérifier** avant de publier « brevet du setuid ».

---

## C. Utilisateurs

### C10. `/etc/passwd`, `/etc/shadow`, `/etc/group`, `id`, UID — [lu]
- **passwd(5)** : « Each line of the file describes a single user, and contains
  seven colon-separated fields: name:password:UID:GID:GECOS:directory:shell » ;
  « UID The privileged root login account (superuser) has the user ID 0. » ;
  « These days many people run some version of the shadow password suite, where
  /etc/passwd has an 'x' character in the password field, and the encrypted
  passwords are in /etc/shadow, which is readable by the superuser only. »
  Anecdote à citer (GECOS) : « GECOS stands for "General Electric Comprehensive
  Operating System" ».
  https://man7.org/linux/man-pages/man5/passwd.5.html
- **shadow(5)** : « This file must not be readable by regular users if password
  security is to be maintained. Each line of this file contains 9 fields » ;
  « If the password field begins with an exclamation mark !, the password is
  locked. » https://man7.org/linux/man-pages/man5/shadow.5.html
- **group(5)** : « group_name:password:GID:user_list »
  https://man7.org/linux/man-pages/man5/group.5.html
- **id(1)** : « Print user and group information for each specified USER, or
  (when USER omitted) for the current process. »
  https://man7.org/linux/man-pages/man1/id.1.html
- **login.defs(5)** : « UID_MAX (number), UID_MIN (number) Range of user IDs
  used for the creation of regular users by useradd or newusers. The default
  value for UID_MIN (resp. UID_MAX) is 1000 (resp. 60000). » ; « The default
  value for SYS_UID_MIN (resp. SYS_UID_MAX) is 101 (resp. UID_MIN-1). »
  https://man7.org/linux/man-pages/man5/login.defs.5.html
  [observation locale] Ubuntu 24.04 : `UID_MIN 1000`, `UMASK 022`,
  `USERGROUPS_ENAB yes`.

---

## D. root, su, sudo

### D11. Histoire de sudo — [lu], avec une **précision**
https://www.sudo.ws/about/history/
- « Sudo was first conceived and implemented by Bob Coggeshall and Cliff
  Spencer around 1980 at the Department of Computer Science at SUNY/Buffalo. It
  ran on a VAX-11/750 running 4.1BSD. » → **confirmé**.
- « An updated version, credited to Phil Betchel, Cliff Spencer, **Gretchen
  Phillips**, John LoVerso, and Don Gworek, was posted to the net.sources Usenet
  newsgroup in December of 1985. » → une femme figure parmi les
  contributeur·rices de 1985.
- « In 1994, after maintaining sudo informally within CU-Boulder for some time,
  Todd C. Miller made a public release of "CU sudo" (version 1.3) ».
- « Present Day: Sudo, in its current form, is maintained by: Todd C. Miller »
  → **confirmé**.
- Point nouveau : « Quest's sponsorship of Sudo ended in February of 2024. »
  (Quest finançait sudo depuis 2010.)

### D12. sudoers(5) — [lu]
https://www.sudo.ws/docs/man/sudoers.man/
- Mot de passe : « Unlike su(1), when sudoers requires authentication, it
  validates the invoking user's credentials, not the target user's (or root's)
  credentials. » → **confirmé**.
- Délai : « timestamp_timeout Number of minutes that can elapse before sudo
  will ask for a password again. […] The default is 5. » → **confirmé**.
  Une distribution peut changer cette valeur.
- Journalisation : « Messages can be logged to syslog(3), a log file, or both.
  The default is to log to syslog(3) ». sudo peut aussi enregistrer les
  entrées et sorties (« I/O logging »).
- Groupe **wheel** (exemple de sudoers(5)) : « %wheel ALL = (ALL) ALL — We let
  root and any user in group wheel run any command on any host as any user. »
- **Fedora** : fichier sudoers du paquet Fedora : « ## Allows people in group
  wheel to run all commands / %wheel ALL=(ALL) ALL ».
  https://src.fedoraproject.org/rpms/sudo/raw/rawhide/f/sudoers [lu]
  Doc Fedora : « When sudo prompts you for a password, it expects your user
  password, not the root password. »
  https://docs.fedoraproject.org/en-US/quick-docs/performing-administration-tasks-using-sudo/
  [lu]. Pour RHEL, docs.redhat.com a répondu 403 : **[non lu]**.
- **Debian** (wiki) : « the system user you create during installation becomes
  member of the sudo group » si aucun mot de passe root n'est défini à
  l'installation ; sinon « sudo does not get installed ».
  https://wiki.debian.org/sudo [lu]
- **Ubuntu** : voir D13 (groupe `sudo`). [observation locale] `/etc/sudoers`
  d'Ubuntu 24.04 contient `%sudo ALL=(ALL:ALL) ALL` et aussi
  `%admin ALL=(ALL) ALL` (ancien groupe d'administration d'Ubuntu).

### D13. Ubuntu : compte root verrouillé — [lu] (URL corrigée)
- `help.ubuntu.com/community/RootSudo` renvoie **404** (même avec la barre
  finale, qui redirige vers wiki.ubuntu.com). Ne pas utiliser cette URL.
- Source officielle à la place : Ubuntu Server documentation, « User
  management » : « Ubuntu developers decided to disable the administrative root
  account by default in all Ubuntu installations. This does not mean that the
  root account has been deleted, or that it may not be accessed. Instead, it
  has been given a password hash that matches no possible value » ; « sudo
  allows an authorized user to temporarily elevate their privileges using
  their own password » ; « By default, the initial user created by the Ubuntu
  installer is a member of the group sudo ».
  https://documentation.ubuntu.com/server/how-to/security/user-management/
  (redirige vers https://ubuntu.com/server/docs/how-to/security/user-management/)
- Fedora fait pareil depuis Fedora 28, si aucun mot de passe root n'est donné
  à l'installation : « Fedora releases 28 and newer, which don't require
  password for root account during installation […] In this case root account
  is locked ». https://docs.fedoraproject.org/en-US/quick-docs/root-account-locked/
  [lu]

### D14. Invite `$` / `#` — [lu]
bash(1), section PROMPTING : « \$ If the effective UID is 0, a #, otherwise a
$. » https://man7.org/linux/man-pages/man1/bash.1.html → **confirmé**. C'est le
comportement de bash, et une convention reprise par d'autres shells.

---

## E. SSH

### E15. Origine de SSH — [lu], avec des **nuances**
- **Annonce d'origine** (12 juillet 1995, cypherpunks, republiée sur Bugtraq
  le 18 juillet 1995) : en-têtes « Message-Id: <199507121451.RAA06122 ()
  shadows cs hut fi> From: Tatu Ylonen […] Subject: ANNOUNCEMENT: Ssh (Secure
  Shell) remote login program Organization: Helsinki University of Technology,
  Finland » ; « Introducing SSH (Secure Shell) Version 1.0 » ; « Closes several
  security holes (e.g., IP, routing, and DNS spoofing and listening for
  passwords from the network). »
  https://seclists.org/bugtraq/1995/Jul/72 [lu] → l'Université de technologie
  d'Helsinki, 1995, et la version 1.0 sont **confirmées par une source
  primaire**.
- **Le renifleur** : ssh.com (entreprise fondée par Ylönen) : « The Secure
  Shell protocol was originally developed by Tatu Ylonen in 1995 in response to
  a hacking incident in the Finnish university network. A password sniffer had
  been installed on a server connected directly to the backbone, and when it
  was discovered, it had thousands of usernames and passwords in its database
  […]. three months later, in July 1995, Ylonen published the first version »
  https://www.ssh.com/academy/ssh [lu]
  - `https://www.ssh.com/academy/ssh/history` renvoie **404**.
  - Nuance : cette page parle du « Finnish university network », sans nommer
    l'université. L'annonce de 1995 donne Helsinki University of Technology
    comme organisation d'Ylönen.
  - **Une seule source**, et elle n'est pas indépendante (l'entreprise
    d'Ylönen). L'article de Ylönen à USENIX Security 1996 [lu,
    https://www.usenix.org/legacy/publications/library/proceedings/sec96/full_papers/ylonen/index.html]
    dit seulement « SSH was first published on the Internet in July 1995 » et
    ne parle pas du renifleur. D'autres pages (podcast SC Magazine, Wikipédia,
    O'Reilly) ne sont connues que par **[résumé/métadonnées seulement]**
    (403 ou non ouvertes). → Écrire : « selon le récit de Tatu Ylönen /
    SSH Communications Security ».
- **OpenSSH 1999** (openssh.com/history.html) [lu] : « OpenSSH is a derivative
  of the original free ssh 1.2.12 release from Tatu Ylönen » ; « Early in 1999,
  Björn Grönvall re-discovered the old free release and started fixing bugs.
  His version of ssh was called OSSH » ; « The initial import was done on Sep
  26, 1999 » ; « the OpenSSH 1.2.2 release, which was shipped with OpenBSD 2.6
  in December 1, 1999 ».
  https://www.openssh.com/history.html → **confirmé**. À noter : OpenSSH part
  d'OSSH, le travail du Suédois Björn Grönvall. La page explique aussi que les
  licences des versions suivantes de ssh étaient devenues plus restrictives.

### E16. RFC, port 22, clé d'hôte, clés, StrictModes, type de clé par défaut
- **RFC 4251 à 4254** : auteur « T. Ylonen, SSH Communications Security Corp »
  (C. Lonvick, Ed., Cisco), « January 2006 », « Category: Standards Track ».
  https://www.rfc-editor.org/rfc/rfc4251.txt (et 4252, 4253, 4254) [lu]
  → **confirmé** : janvier 2006.
- **Port 22** : RFC 4253 §4.1 : « When used over TCP/IP, the server normally
  listens for connections on port 22. This port number has been registered with
  the IANA, and has been officially assigned for SSH. » [lu]
  sshd_config(5) : « Port Specifies the port number that sshd(8) listens on.
  The default is 22. » https://man.openbsd.org/sshd_config.5 [lu]
- **known_hosts** : ssh(1) : « Host keys are stored in ~/.ssh/known_hosts in
  the user's home directory. […] If a host's identification ever changes, ssh
  warns about this and disables password authentication to prevent server
  spoofing or man-in-the-middle attacks ». https://man.openbsd.org/ssh.1 [lu]
  ssh_config(5), StrictHostKeyChecking : « If this flag is set to ask (the
  default), new host keys will be added to the user known host files only after
  the user has confirmed that is what they really want to do, and ssh will
  refuse to connect to hosts whose host key has changed. »
  https://man.openbsd.org/ssh_config.5 [lu]
- **Message « The authenticity of host … can't be established »** : il ne
  figure pas dans les pages de manuel. Il se trouve dans le code source
  d'OpenSSH (sshconnect.c) : `"The authenticity of host " "'%.200s (%s)'
  can't be established"`.
  https://raw.githubusercontent.com/openssh/openssh-portable/master/sshconnect.c
  [lu]
- **authorized_keys** : ssh(1) : « The file ~/.ssh/authorized_keys lists the
  public keys that are permitted for logging in. » ; « The user should then
  copy the public key to ~/.ssh/authorized_keys in their home directory on the
  remote machine. » [lu]
- **Permissions recommandées** (ssh(1), section FILES) : pour `~/.ssh/` :
  « the recommended permissions are read/write/execute for the user, and not
  accessible by others » (= 700) ; pour `~/.ssh/authorized_keys` : « the
  recommended permissions are read/write for the user, and not accessible by
  others » (= 600). [lu]
- **StrictModes** : sshd_config(5) : « StrictModes Specifies whether sshd(8)
  should check file modes and ownership of the user's files and home directory
  before accepting login. This is normally desirable because novices sometimes
  accidentally leave their directory or files world-writable. The default is
  yes. » sshd(8) : « If this file, the ~/.ssh directory, or the user's home
  directory are writable by other users, then the file could be modified or
  replaced by unauthorized users. In this case, sshd will not allow it to be
  used unless the StrictModes option has been set to "no". »
  https://man.openbsd.org/sshd.8 [lu] → **confirmé**. Le dossier personnel
  est vérifié lui aussi.
- **Type de clé par défaut** : notes de version d'OpenSSH 9.5 (« OpenSSH 9.5 was
  released on 2023-10-04 ») : « ssh-keygen(1): generate Ed25519 keys by
  default. […] OpenSSH has supported them since version 6.5 (January 2014). »
  https://www.openssh.com/txt/release-9.5 [lu] → **confirmé** : Ed25519 par
  défaut depuis OpenSSH 9.5 (octobre 2023).
  ssh-keygen(1) actuel : « "ed25519 (the default)," ». Pour RSA : « the
  default is 3072 bits ». https://man.openbsd.org/ssh-keygen.1 [lu]
  À noter : la page de manuel d'OpenBSD-current (novembre 2026) liste aussi un
  type hybride post-quantique `mldsa44-ed25519`. Je ne l'ai pas trouvé dans les
  notes de version publiées (dernière version : OpenSSH 10.6, 2026-10-06, puis
  10.6p2 le 2026-11-05). Ne pas le mentionner sans vérification.
- **PermitRootLogin** (sshd_config(5)) : « The default is prohibit-password. »
  Autrement dit, par défaut, root peut se connecter avec une clé mais pas avec
  un mot de passe. [lu]

### E17. ProxyJump / -J, ForwardAgent, ~/.ssh/config
- **OpenSSH 7.3** (« released on 2016-08-01 ») : « ssh(1): Add a ProxyJump
  option and corresponding -J command-line flag to allow simplified indirection
  through a one or more SSH bastions or "jump hosts". »
  https://www.openssh.com/txt/release-7.3 [lu] → **confirmé** (août 2016).
- **ssh(1) -J** : « Connect to the target host by first making an ssh
  connection to the jump host described by destination and then establishing a
  TCP forwarding to the ultimate destination from there. Multiple jump hops may
  be specified separated by comma characters. » [lu]
- **ssh_config(5) ProxyJump** : « Specifies one or more jump proxies as either
  [user@]host[:port] or an ssh URI. […] Setting this option will cause ssh(1)
  to connect to the target host by first making an ssh(1) connection to the
  specified ProxyJump host and then establishing a TCP forwarding to the
  ultimate target from there. » [lu]
- **Chiffrement de bout en bout** : [déduction]. Aucune page de manuel ne le
  dit en une phrase. Mais le rebond fait seulement un « TCP forwarding »
  (canal `direct-tcpip` de la RFC 4254 §7.2,
  https://www.rfc-editor.org/rfc/rfc4254.txt [lu]). Le client négocie donc sa
  propre session SSH (échange de clés, vérification de la clé d'hôte,
  authentification) directement avec la cible, à travers ce tunnel. Le rebond
  relaie des octets déjà chiffrés et ne voit ni les commandes ni la clé privée.
  Il voit en revanche les métadonnées (qui se connecte, vers quelle machine,
  quand, combien de données).
- **ForwardAgent** : ssh_config(5) : « Agent forwarding should be enabled with
  caution. Users with the ability to bypass file permissions on the remote host
  (for the agent's Unix-domain socket) can access the local agent through the
  forwarded connection. An attacker cannot obtain key material from the agent,
  however they can perform operations on the keys that enable them to
  authenticate using the identities loaded into the agent. » Le défaut est
  « no ». ssh(1) (option -A) ajoute : « A safer alternative may be to use a
  jump host (see -J). » [lu]
- **~/.ssh/config** : ssh_config(5) : « Host Restricts the following
  declarations (up to the next Host or Match keyword) to be only for those
  hosts that match one of the patterns given after the keyword » ; « User
  Specifies the user to log in as. » ssh(1) : « ~/.ssh/config […] Because of
  the potential for abuse, this file must have strict permissions: read/write
  for the user, and not writable by others. » [lu]. Exemple, construit à
  partir de ces options :
  ```
  Host bastion
      HostName bastion.example.org
      User alice
  Host serveur-interne
      HostName 10.0.0.12
      User alice
      ProxyJump bastion
  ```

### E18. Bastion : recommandations de l'ANSSI — [lu], avec une **mise en garde**
1. **Note technique « Recommandations pour un usage sécurisé d'(Open)SSH »**,
   DAT-NT-007/ANSSI/SDE/NP, « Paris, le 17 août 2015 » (la page catalogue
   indique « Publié le 23 janvier 2014 », date de la première version).
   - Page : https://messervices.cyber.gouv.fr/guides/usage-securise-dopenssh
   - PDF : https://messervices.cyber.gouv.fr/documents-guides/NT_OpenSSH.pdf
   - L'ancienne URL `cyber.gouv.fr/sites/default/files/2014/01/NT_OpenSSH.pdf`
     renvoie maintenant une page HTML de MesServicesCyber, plus le PDF.
   Recommandations utiles :
   - « R6 Il faut s'assurer de la légitimité du serveur contacté avant de
     poursuivre l'accès. Cela passe par l'authentification préalable de la
     machine au travers de l'empreinte de sa clé publique »
   - « R17 L'authentification d'un utilisateur doit se faire à l'aide d'un des
     mécanismes suivants, par ordre de préférence : • par cryptographie
     asymétrique ECDSA ; • par cryptographie asymétrique RSA ; » (les clés
     passent avant le mot de passe)
   - « R21 Chaque utilisateur doit disposer de son propre compte, unique,
     incessible. » ; « Le compte root ne doit pas être accessible directement à
     un utilisateur : PermitRootLogin no »
   - « R13 La clé privée ne doit être connue que de l'entité qui cherche à
     prouver son identité »
   - **Mise en garde** : « R19 L'usage du mécanisme d'agent forwarding (option
     -A de ssh) est recommandé dans les cas où un rebond SSH est nécessaire au
     travers d'un serveur hôte relais. » et « R20 Le serveur hôte relais doit
     être un hôte de confiance. » Ce conseil de 2015 date d'avant ProxyJump
     (2016). Il **s'oppose** à l'avis actuel du manuel OpenSSH (« A safer
     alternative may be to use a jump host (see -J) »). Ne pas présenter R19
     comme une bonne pratique actuelle. Le choix ECDSA de R10/R17 date aussi :
     Ed25519 est aujourd'hui le type par défaut.
2. **Guide « Recommandations relatives à l'administration sécurisée des
   systèmes d'information »**, ANSSI-PA-022, v3.0 du « 11/05/2021 ».
   - Page : https://messervices.cyber.gouv.fr/guides/recommandations-relatives-ladministration-securisee-des-si
   - PDF : https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-admin_securisee_si_v3-0.pdf
   Citations :
   - §13.1 « Il existe sur le marché des produits nommés bastions
     d'administration ou plus simplement bastions. Il s'agit d'une déclinaison
     du rebond […]. Ces équipements concentrent généralement plusieurs fonctions
     de sécurité, comme par exemple la gestion centralisée de
     l'authentification, la traçabilité, le renouvellement automatique des
     secrets. »
   - « le bastion constitue une ressource d'administration critique dans la
     mesure où il concentre potentiellement à un instant des secrets
     d'authentification des comptes d'administration ou des journaux liés aux
     actions d'administration. »
   - « La solution qui consisterait à déployer un bastion comme moyen
     d'interconnexion d'un SI bureautique et d'un SI d'administration est à
     proscrire […] procurerait un faux sentiment de sécurité ».
   - §6.3 / R25 : « il est recommandé d'étudier la mise en œuvre d'une rupture
     protocolaire des flux d'administration ».
   À noter : l'ANSSI distingue deux modèles. Le **rebond avec rupture
   protocolaire** (le bastion termine la session : il trace tout, mais il voit
   tout). La session **de bout en bout** (« garantir l'établissement de bout en
   bout d'une authentification puis d'une session »). Un `ProxyJump` simple
   correspond au second modèle.

---

## F. Histoire

### F19. Unix, 1969 — [lu], avec une **nuance** (attribution)
D. M. Ritchie, « The Evolution of the Unix Time-sharing System », présenté en
septembre 1979, réimprimé dans *AT&T Bell Laboratories Technical Journal* 63
n° 6, oct. 1984. Copie lue :
https://www.read.seas.harvard.edu/~kohler/class/aosref/ritchie84evolution.pdf
(copie d'enseignement à Harvard ; les URL Bell Labs/Nokia ont répondu 410 ou
403, et web.archive.org a coupé la connexion).
- « However, Unix was born in 1969 not 1974 »
- « From the point of view of the group that was to be most involved in the
  beginnings of Unix (K. Thompson, Ritchie, M. D. McIlroy, J. F. Ossanna) »
- « Thompson, R. H. Canaday, and Ritchie developed, on blackboards and
  scribbled notes, the basic design of a file system that was later to become
  the heart of Unix. Most of the design was Thompson's […] but I believe I
  contributed the idea of device files. »
→ 1969 et Bell Labs : **confirmé**. Pour éviter l'attribution à deux personnes
seulement, citer aussi McIlroy, Ossanna et Canaday. Anecdote : en 1971, le
service des brevets de Bell Labs a été l'un des premiers utilisateurs
(« we supported three typists from the Patent department »).

### F20. Linux 1991, GNU 1983 — [lu]
- **Message de Torvalds** : copie de Torvalds lui-même (« The following text was
  written by Linus on July 31 1992 »), en-têtes : « From:
  torvalds@klaava.Helsinki.FI (Linus Benedict Torvalds) Newsgroups:
  comp.os.minix Subject: What would you like to see most in minix? […] Date: 25
  Aug 91 20:57:08 GMT Organization: University of Helsinki » ; texte : « I'm
  doing a (free) operating system (just a hobby, won't be big and professional
  like gnu) for 386(486) AT clones. This has been brewing since april ».
  https://www.cs.cmu.edu/~awb/linux.history.html [lu]
  Deuxième source : le fil Google Groups comp.os.minix. Le message d'origine
  y est marqué « Message has been deleted », mais il est cité dans une réponse
  avec la même phrase, horodaté « August 26, 1991 6:12:08 PM UTC+12 »
  https://groups.google.com/g/comp.os.minix/c/dlNtH7RRrGA/m/SwRavCzVE7gJ [lu]
  → **confirmé** : 25 août 1991, vers 20 h 57 GMT (déjà le 26 août en
  Nouvelle-Zélande ou à Fidji). Torvalds était à l'Université d'Helsinki.
- **GNU** : « Initial Announcement of the GNU Project, posted by Richard Stallman
  on September 27, 1983 » ; « Free Unix! Starting this Thanksgiving I am going
  to write a complete Unix-compatible software system called GNU » ; et « the
  beginning was delayed until January 1984 ».
  https://www.gnu.org/gnu/initial-announcement.en.html [lu]
  → **précision** : GNU a été *annoncé* en septembre 1983, mais le travail a
  *commencé* en janvier 1984.

### F21. Femmes et histoire hors Occident
- **Lorinda Cherry** — [lu], deux sources indépendantes :
  - Douglas McIlroy, liste TUHS, 16 févr. 2022 (texte écrit pour le prix NCWIT en
    2018) : « Lorinda Cherry, a long-time member of the original Unix Lab died
    recently. » ; « First came "dc", an unlimited-precision desk calculator,
    which is still a Unix staple 45 years on. Building on dc, she would later
    make "bc" » ; « Brian Kernighan soon joined her effort. The result was
    "eqn" » ; « Writers Workbench […] It all began as a one-woman skunk-works
    project. »
    https://www.tuhs.org/pipermail/tuhs/2022-February/025390.html
  - NCWIT, « Pioneer in Tech Award Recipient » : « received her Master's in
    Computer Science from Stevens Institute of Technology in 1969 » ; « She
    eventually found a home at Bell Labs, where she worked on the nascent Unix
    operating system » ; « a desk-calculator language (bc); eqn, a typesetting
    system for publishing mathematical formulae ».
    https://ncwit.org/profile/lorinda-cherry/
  - LWN (16 févr. 2022) : « she was the creator of the dc and bc »
    https://lwn.net/Articles/885010/
  - Le décès en février 2022 est annoncé par J. P. Linderman le 15 février :
    « Lorinda passed away a few days ago »
    https://www.tuhs.org/pipermail/tuhs/2022-February/025387.html. La date
    exacte du décès n'est pas confirmée : **[non trouvé]**.
  - Nuance : McIlroy écrit que dc a été fait avec Bob Morris (« collaborating on
    several applications with Bob Morris. First came "dc" »), et eqn avec Brian
    Kernighan. Parler de « co-autrice », pas d'autrice unique.
- **Gretchen Phillips** (sudo, 1985) — [lu], une seule source (sudo.ws, voir
  D11). Le rôle exact n'est pas détaillé.
- **Ubuntu** — [lu] https://ubuntu.com/about : « Ubuntu is an ancient African
  word meaning 'humanity to others'. » ; « Linux was already established in 2004
  […]. That's when Mark Shuttleworth gathered a small team of Debian developers
  who together founded Canonical » ; « starting in October 2004 ».
  → 2004 et Shuttleworth : **confirmé**. Ni l'origine sud-africaine du mot
  (nguni/zoulou/xhosa) ni la nationalité de Shuttleworth ne sont précisées sur
  cette page : **[non trouvé dans une source primaire lue]**. La page dit
  seulement « ancient African word ».
- **Pardus (Turquie)** — [lu] https://pardus.org.tr/en/pardus-history/ :
  « Initial efforts for the Pardus project began in 2003 within the framework of
  the Informatics and Information Security Research Center (BİLGEM) of the
  Scientific and Technological Research Council of Turkey (TÜBİTAK). » ; « On
  February 1, 2005, the first product, Pardus Live CD 1.0, was released » ;
  « on December 27, 2005, the first stable release, Pardus 1.0, was officially
  launched » ; « it was decided in 2013 that the Pardus operating system would
  continue as a Debian GNU/Linux–based […] distribution ». Le nom vient de
  « Panthera Pardus Tulliana », le léopard d'Anatolie.
- **Red Flag Linux (Chine)** : **[non vérifié]**, aucune source ouverte.
- Autres apports hors des États-Unis, déjà sourcés plus haut : la Finlande
  (Ylönen, Torvalds), la Suède (Björn Grönvall, OSSH), le Canada (Theo de
  Raadt, OpenBSD, « (CANADA) » sur openssh.com/history.html).

### F22. TOP500 : 100 % Linux — [lu]
https://www.top500.org/statistics/details/osfam/1/ (famille de systèmes
d'exploitation « Linux »). La page contient une série de données (graphique
JavaScript, colonnes « List », « Count », « System Share (%) ») avec, entre
autres :
`new Date(2017, 10, 1),500` (novembre 2017 : 500 systèmes) …
`new Date(2026, 10, 1),500` (novembre 2026 : 500) ; juin 2017 : 498 ;
novembre 2016 : 498.
→ **confirmé** : 500 sur 500 depuis la liste de novembre 2017, et c'est encore
le cas sur la liste de novembre 2026. (Il s'agit de données brutes du
graphique : la page n'a pas de phrase à citer.)
Part de Linux sur les serveurs web : **[non trouvé]** (pas de source primaire
cherchée ; les chiffres de W3Techs et Netcraft ne mesurent pas la même chose).
ssh.com affirme : « the protocol is used for managing more than half of
world's web servers » (affirmation commerciale, à ne pas reprendre).

---

## Pour aller plus loin (Wikipédia)
Les pages existent (HTTP 200, vérifié le 24/11/2026). Je n'ai pas vérifié leur
label de qualité (AdQ/BA) :
- https://fr.wikipedia.org/wiki/Filesystem_Hierarchy_Standard
- https://fr.wikipedia.org/wiki/Secure_Shell
- https://fr.wikipedia.org/wiki/Sudo
- https://fr.wikipedia.org/wiki/Lorinda_Cherry

---

## Faits NON confirmés ou CORRIGÉS

**Corrigés ou précisés**
1. **POSIX « XBD 4.5 File Access Permissions »** : dans POSIX.1-2024, c'est la
   **section 4.7**. La règle « une seule classe » est dans les définitions
   XBD 3.142, 3.149 et 3.150.
2. **help.ubuntu.com/community/RootSudo** : renvoie 404. Utiliser
   documentation.ubuntu.com/server/how-to/security/user-management/.
3. **ssh.com/academy/ssh/history** : renvoie 404. Le récit du renifleur se
   trouve sur https://www.ssh.com/academy/ssh. Il parle d'un « Finnish
   university network » sans nommer l'université. Le lien avec l'Université
   de technologie d'Helsinki vient de l'annonce de 1995 (affiliation
   d'Ylönen).
4. **Renifleur de mots de passe** : une seule source, et elle n'est pas
   indépendante (l'entreprise d'Ylönen). Il faut écrire « selon Tatu
   Ylönen ».
5. **GNU « lancé en 1983 »** : *annoncé* le 27 septembre 1983, travail
   *commencé* en janvier 1984 (selon gnu.org).
6. **Unix « Thompson et Ritchie »** : Ritchie lui-même cite aussi McIlroy,
   Ossanna et Canaday.
7. **Lorinda Cherry** : dc a été fait avec Bob Morris, eqn avec Brian
   Kernighan. Writer's Workbench était au départ son projet personnel.
8. **ANSSI 2015, R19** : recommande l'agent forwarding pour les rebonds, ce qui
   contredit l'avis actuel d'OpenSSH (préférer `-J`). Il faut le signaler si on
   cite ce guide.
9. **usrmerge** : le FHS 3.0 (2015) décrit encore `/bin` et `/usr/bin` comme
   des dossiers séparés. Debian (défaut depuis buster, obligatoire en bookworm)
   et Fedora (depuis la version 17) les ont fusionnés.
10. **sudo** : le soutien de Quest a pris fin en février 2024. Todd C. Miller
    maintient toujours sudo.

**Confirmés** (pour mémoire) : FHS 3.0 (Linux Foundation, 19 mars 2015) ;
ProxyJump dans OpenSSH 7.3 (1ᵉʳ août 2016) ; Ed25519 par défaut depuis
OpenSSH 9.5 (4 octobre 2023) ; RFC 4251 à 4254 (janvier 2006) ; port 22 ;
timestamp_timeout = 5 min ; sudo demande le mot de passe de l'utilisateur ;
StrictModes ; `\$` de bash ; brevet US 4,135,240 (déposé le 9 juillet 1973,
publié le 16 janvier 1979, Ritchie, Bell Labs) ; TOP500 à 100 % Linux depuis
novembre 2017 ; Torvalds le 25 août 1991 ; Ubuntu en 2004 (Shuttleworth).

**Non confirmés ou non trouvés**
- Lien explicite « brevet 4,135,240 = bit setuid » : seul le résumé du brevet
  a été lu (« access permission bits »). Revendications non lues, pas de
  deuxième source.
- Version d'Ubuntu où usrmerge est devenu le défaut : non trouvé
  (observation locale seulement sur 24.04).
- RHEL et le groupe wheel : docs.redhat.com en 403. Fedora est confirmé par
  son fichier sudoers.
- Exemple `/usr/bin/passwd -rwsr-xr-x` : observation locale seulement.
- Date exacte du décès de Lorinda Cherry.
- Origine précise du mot « ubuntu » (langues nguni) et nationalité
  sud-africaine de Shuttleworth : pas dans la source primaire lue.
- Red Flag Linux : non vérifié.
- Part de Linux sur les serveurs web : non recherchée ou non trouvée.
- Type `mldsa44-ed25519` dans ssh-keygen (OpenBSD-current) : absent des notes
  de version publiées.

## Messages de sudo (vérifiés dans le code source, 24 novembre 2026)

- Traduction française officielle du greffon sudoers :
  https://raw.githubusercontent.com/sudo-project/sudo/main/plugins/sudoers/po/fr.po [lu]
  - `"[sudo] password for %p: "` → `"[sudo] Mot de passe de %p : "`
  - `"%s is not in the sudoers file.\n"` → `"%s n'est pas dans le fichier sudoers.\n"`
  - ancien message (marqué obsolète `#~`) : « %s n'apparaît pas dans le fichier sudoers. Cet incident sera signalé. »
- `plugins/sudoers/logging.c` : la phrase « This incident has been reported to the administrator. » n'est
  affichée que si un courriel d'alerte est envoyé (`if (mailit)`).
  https://raw.githubusercontent.com/sudo-project/sudo/main/plugins/sudoers/logging.c [lu]
- `configure.ac` : `timeout=5` (« minutes before sudo asks for passwd again (def is 5 minutes) »).
  https://raw.githubusercontent.com/sudo-project/sudo/main/configure.ac [lu]

## Messages d'erreur en français (bash, coreutils, glibc)

Les messages du terminal simulé (« Aucun fichier ou dossier de ce type », « N'est pas un dossier »,
« Permission non accordée », « commande introuvable ») reprennent ceux d’un système Debian ou Ubuntu en français :
**[non vérifié ici]** (locale française absente du conteneur) : à contrôler lors de la relecture humaine.
→ Mise à jour du 28 novembre 2026 : vérifiés dans les traductions officielles, voir § G13
(« de ce type » devient « de ce nom » depuis glibc 2.39).

---

## G. Première passe de correction (28 novembre 2026)

Sources ouvertes le 28 novembre 2026 pour traiter la grille `docs/relecture/linux.md`.
« Vérifié dans un shell » : Ubuntu 24.04.5 LTS, coreutils 9.4, glibc 2.39, OpenSSH 9.6p1
(installé pour l'occasion), adduser 3.137ubuntu1.

### G1. Brevet US 4,135,240 : c'est bien le bit setuid — [lu]
https://patents.google.com/patent/US4135240A/en (résumé et revendication 1) :
« An additional access control bit is added to each executable file. » ; « When this bit is
set to one, the identification of the current user is changed to that of the owner of the
executable file. » ; « This change is temporary, the proper identification being restored when
the program is terminated. » Revendication 1 : « changing temporarily the identification of said
current user of the computer system to that of said file owner ». Le résumé dit aussi
« Access permission bits are used in the prior art ». → **confirmé** : le brevet porte sur le
futur bit setuid, pas sur les bits de permission eux-mêmes (une seule source, primaire).

### G2. Linux : « free » en 1991, GPL en 1992 — [lu]
- Notes de version de Linux 0.12 :
  https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12 : « The GNU
  copyleft takes effect as of the first of February » ; il s'agit de retirer la condition
  « you may not distribute it for money ».
- Page de cs.cmu.edu (déjà citée en F20) : message du 19 déc. 1991 « It's free (copyright by me,
  but freely distributable under a very lenient copyright) » ; note de l'éditeur : « The early
  copyright was in fact much more restrictive than the GNU copyleft ».
  https://www.cs.cmu.edu/~awb/linux.history.html
- Statut d'étudiant : la page ne contient qu'une allusion de 1992 (« your studies suffer »).
  → page : « à l'université d'Helsinki », sans « étudiant ».

### G3. OpenSSH : Björn Grönvall — [lu]
https://www.openssh.org/history.html (openssh.com y redirige) : « Early in 1999, Björn Grönvall
re-discovered the old free release and started fixing bugs. » ; « Word of mouth has it that OSSH
was integrated at the time into some commercial products in Sweden. » La page ne donne **pas** sa
nationalité. → « le Suédois » retiré.

### G4. SSH : la clé d'hôte signe l'échange, avant le chiffrement — [lu]
RFC 4253, https://www.rfc-editor.org/rfc/rfc4253 :
- § 8 : le serveur calcule H « and signature s on H with its private host key » ; le client
  « verifies that K_S really is the host key for S (e.g., using certificates or a local
  database) » et « verifies the signature s on H ».
- § 7.3 : « All messages sent after this message [SSH_MSG_NEWKEYS] MUST use the new keys and
  algorithms. »
- § 4.1 : « When used over TCP/IP, the server normally listens for connections on port 22. »
- Vérifié dans les chaînes du binaire `ssh` (OpenSSH 9.6p1) : « The authenticity of host
  '%.200s (%s)' can't be established », « Are you sure you want to continue connecting
  (yes/no/[fingerprint])? », « Warning: Permanently added '%.200s' (%s) to the list of known
  hosts. », « WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! », « IT IS POSSIBLE THAT SOMEONE IS
  DOING SOMETHING NASTY! », « Host key verification failed. » ; `ssh-copy-id` : « Number of key(s)
  added: ». `ssh-keygen -t ed25519` affiche « Your identification has been saved in … » et
  « Your public key has been saved in … ».
- Vérifié dans un shell : `ssh -G web1 | grep -i proxyjump` affiche `proxyjump
  alice@bastion.example` avec la configuration de l'animation ; `ssh-keygen -lf fichier.pub`
  affiche `256 SHA256:… (ED25519)`. `ssh -v` affiche la négociation (lignes `debug1:`).
  `ssh -v -J` n'a pas été essayé (pas de bastion).

### G5. sshd(8), scp(1) — [lu]
- https://man.openbsd.org/sshd.8 (FILES, authorized_keys) : « If this file, the ~/.ssh directory,
  or the user's home directory are writable by other users, then the file could be modified or
  replaced by unauthorized users. In this case, sshd will not allow it to be used unless the
  StrictModes option has been set to "no". » Droits recommandés pour le fichier : « read/write for
  the user, and not accessible by others ».
- https://man.openbsd.org/scp.1 : « scp uses the SFTP protocol over an ssh(1) connection for data
  transfer, and uses the same authentication and provides the same security as a login
  session. » → chaque commande a sa connexion (sauf multiplexage `ControlMaster`, ssh_config(5)).

### G6. Debian 12 : rsyslog n'est plus installé par défaut — [lu]
https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.en.html, § 5.1.7
« Changes to system logging » : « From bookworm, rsyslog is no longer installed by default. » ; on
lit alors le journal avec journalctl (fichiers binaires dans /var/log/journal). La page ne parle
pas de `auth.log` en particulier : sans rsyslog, aucun fichier texte de ce nom n'est écrit
(**[déduction]**). Ubuntu : non vérifié (le conteneur n'a ni rsyslog ni auth.log).

### G7. Ubuntu : /usr fusionné — [lu], presse
https://lwn.net/Articles/773342/ (4 déc. 2018) : Dimitri John Ledkov annonce que dans Ubuntu 19.04
« new installations will use merged /usr », « existing ones will not have their /usr merged on
upgrade ». Observation locale : `/bin -> usr/bin`, `/sbin -> usr/sbin`, `/lib -> usr/lib`.

### G8. Ubuntu : dossiers personnels en 750 — [lu] + shell
- https://ubuntu.com/blog/private-home-directories-for-ubuntu-21-04 (A. Murray, 1er févr. 2021) :
  « sudo sed -i s/DIR_MODE=0755/DIR_MODE=0750/ /etc/adduser.conf » ; « ensure any users created by
  either the adduser(8) or useradd(8) commands have their home directories private by default ».
- Vérifié dans un shell : `HOME_MODE 0750` (`/etc/login.defs`), `dir_mode => "0750"`
  (`/usr/share/perl5/Debian/AdduserCommon.pm`) ; `adduser` et `useradd -m` créent
  `drwxr-x---` ; `cd /home/autre` → `Permission denied` ; `ls /root` → `ls: cannot open directory
  '/root': Permission denied` ; `/root` est en `drwx------`.
- Attention : la page de manuel adduser.conf(5) d'Ubuntu noble
  (https://manpages.ubuntu.com/manpages/noble/man5/adduser.conf.5.html) dit encore « Defaults to
  0700 » (texte de Debian), alors que le programme utilise 0750.

### G9. Comptes et droits — [lu]
- Debian base-passwd, « Users and groups » :
  https://sources.debian.org/data/main/b/base-passwd/3.6.7/doc/users-and-groups.sgml
  - www-data : « Some web servers run as www-data. Web content should not be owned by this user,
    or a compromised web server would be able to rewrite a web site. »
  - shadow : « /etc/shadow is readable by this group. Some programs that need to be able to access
    the file are setgid shadow. »
  - `/usr/share/base-passwd/passwd.master` (Ubuntu 24.04) :
    `www-data:*:33:33:www-data:/var/www:/usr/sbin/nologin` (dossier personnel /var/www).
- chown(2), https://man7.org/linux/man-pages/man2/chown.2.html : « Only a privileged process
  (Linux: one with the CAP_CHOWN capability) may change the owner of a file. » ; « The owner of a
  file may change the group of the file to any group of which that owner is a member. »
- chmod(2), https://man7.org/linux/man-pages/man2/chmod.2.html : « The effective UID of the calling
  process must match the owner of the file, or the process must be privileged (Linux: it must have
  the CAP_FOWNER capability). »
- Vérifié dans un shell : un fichier dont l'UID n'existe pas (`chown 4242:4242`) s'affiche
  `-rw-r--r-- 1 4242 4242 …` dans `ls -l`.

### G10. visudo(8), proc(5), rm(1) — [lu]
- https://www.sudo.ws/docs/man/visudo.man/ : « visudo locks the sudoers file against multiple
  simultaneous edits » ; « checks for syntax errors before installing the edited file » ;
  « visudo parses the sudoers file after editing and will not save the changes if there is a
  syntax error ».
- https://man7.org/linux/man-pages/man5/proc.5.html : « The proc filesystem is a pseudo-filesystem
  which provides an interface to kernel data structures. » ; sous /proc/<pid> : « Each one of these
  subdirectories contains files and subdirectories exposing information about the process ».
- https://man7.org/linux/man-pages/man1/rm.1.html : « --preserve-root[=all] do not remove '/'
  (default) » ; « --no-preserve-root do not treat '/' specially ». Vérifié avec `rm --help`.
  La page du manuel coreutils « Treating / specially » a répondu 429 : non lue.

### G11. macOS, WSL, GNU/Linux — [lu]
- Apple, File System Programming Guide :
  https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
  - /Users : « This directory contains one or more user home directories. »
  - « Any file or directory whose name starts with a period (.) character is hidden
    automatically. This convention is taken from UNIX » ; « The directories in this category are
    inherited from traditional UNIX installations » (/etc, /tmp, /usr, /var, /bin, /dev, /sbin).
- Microsoft, https://learn.microsoft.com/en-us/windows/wsl/compare-versions : « WSL 2 is the
  current default version when installing a Linux distribution » ; WSL 2 utilise « an actual Linux
  kernel inside a managed VM » ; WSL 1 « used a translation layer ».
- R. Stallman, « Linux and the GNU System », https://www.gnu.org/gnu/linux-and-gnu.en.html :
  « When you're talking about this combination, please call it “GNU/Linux.” »

### G12. Lorinda Cherry — [lu]
https://www.tuhs.org/pipermail/tuhs/2022-February/025390.html (McIlroy) : « She then joined the
(self-organized) Unix team, collaborating on several applications with Bob Morris. First came
"dc" » ; « Building on dc, she would later make "bc" ». (NCWIT, déjà cité en F21, non rouvert.)

### G13. Messages français : vérifiés dans les traductions officielles — [lu]
Fichiers téléchargés depuis le Translation Project (https://translationproject.org/latest/libc/fr.po,
…/coreutils/fr.po, …/bash/fr.po) et le dépôt de glibc
(https://sourceware.org/git/?p=glibc.git;a=blob_plain;f=po/fr.po, étiquettes glibc-2.38 et
glibc-2.39) :
- glibc : « Permission denied » → « Permission non accordée » ; « Not a directory » → « N'est pas
  un dossier » ; « No such file or directory » → « Aucun fichier ou dossier de ce type » jusqu'à
  glibc 2.38, **« Aucun fichier ou dossier de ce nom » depuis glibc 2.39** (Ubuntu 24.04 :
  glibc 2.39 ; Debian 13 : plus récent). Le terminal simulé suit la version récente.
- coreutils : « cannot access %s » → « impossible d'accéder à %s » ; « cannot open directory %s »
  → « impossible d'ouvrir le répertoire %s » ; format de date de `ls -l` : « %b %e %H:%M » →
  « %e %b %H:%M » (le jour avant le mois : « 24 nov. 10:00 », abréviation « nov. » de la locale
  fr_FR de glibc). Les noms de fichiers des messages d'erreur gardent les apostrophes droites
  (style de citation « shell »).
- bash : « command not found » → « commande introuvable ».
- Tous ces messages utilisent l'apostrophe droite ('). Les traductions installées par une
  distribution peuvent différer légèrement (paquets de langue d'Ubuntu) : non vérifié sur une
  machine en français.
- sudo : la traduction est identique dans l'étiquette `SUDO_1_9_16p2`
  (https://raw.githubusercontent.com/sudo-project/sudo/SUDO_1_9_16p2/plugins/sudoers/po/fr.po),
  lien stable qui remplace le lien vers `main`.

### G14. TOP500 — [lu] de nouveau
https://www.top500.org/statistics/details/osfam/1/ : `new Date(2026, 10, 1),500`,
`new Date(2026, 5, 1),500`, `new Date(2017, 10, 1),500`, `new Date(2017, 5, 1),498`.
→ 500 sur 500 en novembre 2026, et depuis novembre 2017.

### G15. Liens d'archive
L'API de la Wayback Machine (https://archive.org/wayback/available) signale des copies :
- Ritchie : https://web.archive.org/web/20261103234958/https://www.read.seas.harvard.edu/~kohler/class/aosref/ritchie84evolution.pdf
- Torvalds : https://web.archive.org/web/20261117080826/https://www.cs.cmu.edu/~awb/linux.history.html
Ces deux copies n'ont **pas pu être ouvertes** (connexion coupée par web.archive.org) : à
contrôler. Pas de copie signalée pour le fr.po de sudo (remplacé par un lien vers une étiquette).

### G16. Compléments — [lu]
- RFC 4252 § 7, https://www.rfc-editor.org/rfc/rfc4252 : « The value of 'signature' is a signature
  by the corresponding private key over the following data » (en premier : « string session
  identifier ») ; « it MUST check whether the supplied key is acceptable for authentication, and
  if so, it MUST check whether the signature is correct. »
- credentials(7), https://man7.org/linux/man-pages/man7/credentials.7.html : « These IDs are
  integers, respectively represented using the types uid_t and gid_t ». La page ne dit pas en
  toutes lettres que le noyau ignore les noms (c'est passwd(5) qui fait le lien nom ↔ UID).
- su(1), https://man7.org/linux/man-pages/man1/su.1.html : « su allows commands to be run with a
  substitute user and group ID. » ; « When called with no user specified, su defaults to running
  an interactive shell as root. » Le mot de passe demandé dépend de PAM : la page ne le précise
  pas ; sudoers(5) (« Unlike su(1) … not the target user's ») reste la seule source indirecte.
