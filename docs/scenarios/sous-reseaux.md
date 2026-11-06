# Scénario — « Découper un réseau en sous-réseaux »

*Un outil pour les cours, suite de « Adresses IP et masques ».* Statut :
**publié** (`/modules/sous-reseaux/`), relecture humaine à faire. Sources :
[`docs/sources/bases-ip.md`](../sources/bases-ip.md), § 3.

## Les étapes

| # | Étape | Animation | Contenu |
|---|---|---|---|
| 0 | Couper en parts égales | `ip/Decoupe` | Réseau de départ modifiable, nouveau préfixe au curseur ; bits réseau / empruntés / machines ; barre découpée ; liste des sous-réseaux (16 affichés) ; alignement ; mythe « subnet zero » (RFC 950 → RFC 1878) |
| 1 | Des parts à la bonne taille | `ip/PlanVLSM` (pas à pas) | Besoins modifiables (ajout, retrait, liaison /31) ; tri décroissant puis attribution alignée ; adresses inutilisées et reste ; dépassement signalé |
| 2 | Exercices corrigés | `ip/Exercices` | Six types, numéro reproductible (graine), vérification, correction pas à pas, score ; sans JavaScript : six exercices fixes avec corrections dépliables |
| 3 | Et en IPv6 ? | `ip/Ipv6Sites` | Site en /48, /56 ou /60 ; numéro de réseau local dans le 4ᵉ groupe ; /64 (RFC 4291, 6177, 7421) |
| ✓ | Ce qu'il faut retenir | liste | cinq points |

## Choix et limites

- Calculs dans `src/lib/ip.ts` (`decouper`, `prefixePour`, `planVLSM`) et
  `src/lib/exercices-ip.ts` (générateur mulberry32), vérifiés sur 2 000 tirages.
- Le plan VLSM suit la méthode classique (plus grand d'abord, premier bloc
  aligné) ; il ne cherche pas l'optimum quand on retire des besoins au milieu.
