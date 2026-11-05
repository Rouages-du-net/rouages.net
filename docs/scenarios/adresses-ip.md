# Scénario — « Adresses IP et masques »

*Un outil pour les cours.* Statut : **publié** (`/modules/adresses-ip/`),
relecture humaine à faire. Sources : [`docs/sources/bases-ip.md`](../sources/bases-ip.md).

## Intention

Lire une adresse comme un nombre binaire, abréger une adresse IPv6 selon la
règle officielle, et comprendre le masque sous ses trois écritures (/n,
décimal pointé, binaire), avec le calcul du réseau par un ET logique.

## Les étapes

| # | Étape | Animation | Contenu |
|---|---|---|---|
| 0 | IPv4 : quatre octets | `ip/Ipv4` | Quatre champs 0-255 ↔ 32 bits cliquables, hexadécimal, nombre entier ; plages privées et de documentation reconnues ; épuisement (IANA 2011, RIPE 2019) |
| 1 | IPv6 : huit groupes | `ip/Ipv6` (pas à pas) | Forme complète → zéros en tête retirés → plus longue suite nulle → « :: » ; exemples d'égalité et de groupe nul isolé ; /64 |
| 2 | Le masque | `ip/Masque` | Curseur /0 à /32, saisie d'un masque décimal (contiguïté vérifiée), trois rangées de bits (adresse, masque, ET), réseau, diffusion, plage, nombre d'adresses ; /31 et /32 |
| ✓ | Ce qu'il faut retenir | liste | cinq points |

## Choix et limites

- Calculs dans `src/lib/ip.ts` (sans DOM), vérifiés sur les exemples de la
  RFC 5952.
- Exemples : adresses de documentation (RFC 5737, RFC 3849) et privées
  (RFC 1918) uniquement.
- Pas encore traités : découpage en sous-réseaux (VLSM), IPv6 en mode mixte
  (::ffff:192.0.2.1), calcul de masque IPv6.
