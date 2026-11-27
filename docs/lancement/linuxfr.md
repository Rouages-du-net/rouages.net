# Dépêche LinuxFr.org (brouillon)

**Titre** : Les rouages du net : internet, l'informatique et l'IA démontés pièce par pièce

**Étiquettes** : éducation, internet, réseau, ia, logiciel_libre

---

*Les rouages du net* (https://rouages.net) est un site de vulgarisation, en
français, qui explique internet, l'informatique et l'intelligence artificielle
avec des animations à manipuler. Sa règle : simplifier, oui ; mentir, jamais.
Chaque étape se lit à trois niveaux (découverte, curieux, ingénieur), et le
niveau ingénieur montre les vrais paquets, les vrais protocoles, les vraies
commandes.

## Ce qu'on y trouve

- **Les bases techniques**, avec des exercices pour les cours : binaire, octal
  et hexadécimal ; adresses IP et masques ; découpage en sous-réseaux (VLSM) ;
  client et serveur (ports, URL, FTP, FTPS et SFTP) ; **Linux** (arborescence,
  droits `rwx` sous toutes leurs écritures, `sudo`, SSH et rebonds par un
  bastion avec `ssh -J`).
- **De l'Entrée à la page** : ce qui se passe entre la touche Entrée et
  l'affichage (DNS, TCP et QUIC, TLS, BGP, câbles, serveur).
- **Qui décide** : la gouvernance technique (IETF, ICANN, registres
  régionaux…), les lois (RGPD, DSA, AI Act), une carte des rapports de force
  entre institutions, et un module sur l'accès au savoir (édition
  scientifique, accès ouvert, Sci-Hub, bibliothèques de l'ombre et IA).
- **L'IA sans magie** : une quinzaine de modules sur ce que font vraiment les IA
  qui classent, voient, écrivent, recommandent ou surveillent.
- Une **veille** quotidienne, avec une revue chaque semaine.

## Sous le capot

- Site **100 % statique** (Astro), hébergé sur un simple mutualisé ; recherche
  plein texte avec **Pagefind**, servie par le site lui-même.
- **Aucun pistage, aucune publicité, aucune ressource tierce** : polices
  (Atkinson Hyperlegible, Bricolage Grotesque, Silkscreen, sous OFL) et scripts
  auto-hébergés.
- **Accessibilité** : tout se lit sans JavaScript, chaque animation a son
  équivalent texte, `prefers-reduced-motion` respecté, contrastes AA.
- **Sources** : chaque page cite ses sources (primaires d'abord) et sa date de
  vérification ; les sujets qui bougent vite portent un « état au… ».
- Contenus sous licence **CC BY-SA 4.0**.
- Tests : Vitest pour la logique, Playwright pour vérifier chaque page dans
  Chromium (pas de débordement à 375 px, pas d'erreur console, rendu sans
  JavaScript).

[Une phrase sur qui fait le site et pourquoi.]

Il paraît que quelques surprises se cachent dans le site. Indice : ↑ ↑ ↓ ↓.

Les retours sont bienvenus, surtout les erreurs : contact@rouages.net.
