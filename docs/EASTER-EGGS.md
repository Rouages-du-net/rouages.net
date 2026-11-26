# Clins d'œil cachés

Quelques surprises, pour le plaisir de la découverte. Règles : jamais au
détriment de la lecture, toujours annoncées aux lecteurs d'écran (bulle
`role="status"`), inactives quand on écrit dans un champ, sans animation si
l'utilisateur réduit les mouvements, jamais de boucle infinie. Code :
`src/scripts/clins.ts` (sauf mention).

| Où | Comment | Ce qui se passe |
|---|---|---|
| Partout | Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A | « Mode phosphore » : le site devient un vieux terminal vert (lignes de balayage). Même code ou Échap pour revenir. Gardé le temps de l'onglet. |
| Partout | Taper `sudo` (hors d'un champ) | Le site refuse, avec le vrai message de sudo (« … n'est pas dans le fichier sudoers »). |
| Accueil | Cliquer trois fois sur les rouages de la scène | Les rouages s'emballent ; la troisième fois, l'histoire de la RFC 2324 (HTCPCP, poisson d'avril de 1998) et du code « 418 I'm a teapot ». Source : https://www.rfc-editor.org/rfc/rfc2324 |
| Module Linux, terminal simulé | `cowsay message`, `sl`, `whoami`, `rm -rf /`, `sudo …` | Une vache qui parle, une locomotive (le farceur `sl`, pour qui tape mal `ls`), et un refus pédagogique des commandes dangereuses. (`src/components/animations/linux/Terminal.astro`) |
| Page 404 | — | Un paquet perdu dont le TTL tombe à zéro, façon `traceroute`. (`src/pages/404.astro`) |
| Console du navigateur | Ouvrir les outils de développement | Un message pour les curieux·ses, et un indice. |
| Pied de page | — | L'indice « ↑ ↑ ↓ ↓ ». |

Idées pour plus tard : un `ping` qui répond « pong » dans le terminal, une
page `/418/` « I'm a teapot ».
