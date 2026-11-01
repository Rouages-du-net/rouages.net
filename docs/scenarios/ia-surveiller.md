# Scénario — « Les IA qui surveillent »

*Fraude à la carte, vidéosurveillance algorithmique, interdits du règlement
européen.* Statut : **publié** (`/modules/ia-surveiller/`, section « L'IA »),
relecture humaine à faire. Faits sourcés dans
[`docs/sources/ia-surveiller.md`](../sources/ia-surveiller.md).

## Intention

Faire sentir le problème central de toute surveillance automatisée : chercher un
événement rare au milieu de gens ordinaires produit surtout de fausses alertes,
qui tombent sur les personnes « inhabituelles ». Le montrer d'abord avec un
modèle (la fraude), puis avec des données réelles (les caméras des JO de Paris),
avant de présenter le cadre légal et ses débats.

## Les étapes

| # | Étape | Animation | Ce qu'on manipule |
|---|---|---|---|
| 0 | Repérer la fraude | `Alarme` | sévérité du blocage, qualité du détecteur ; fraudes repérées, manquées, paiements honnêtes bloqués, part des alertes justes (100 000 paiements, 34 fraudes) |
| 1 | Des caméras qui signalent | `Signalements` | cas d'usage (intrusion, surdensité, objets abandonnés), exploitant (RATP, SNCF) ; part des signalements exacts et cas jugés utiles (données du comité d'évaluation) |
| 2 | Ce que la loi interdit | texte | article 5 du règlement sur l'IA ; mythe du « score social » chinois |
| ✓ | Questions à poser à une surveillance | liste | cinq questions |

## Choix et limites

- Le détecteur de fraude est inventé (scores gaussiens, `src/lib/surveiller.ts`) ;
  la fréquence de la fraude suit l'OSMP 2024.
- Les chiffres de la VSA sont réels et tirés du rapport du comité d'évaluation
  (§ 2.3.5), qui diffèrent sur quelques points du rapport du Sénat (voir le
  dossier) ; la surdensité à la SNCF n'y est pas détaillée.
- La reconnaissance faciale est renvoyée au module « Les IA qui voient », la
  surveillance des allocataires au module « Les IA qui décident pour nous ».
- Sujet évolutif : la date de fin de l'expérimentation (31 décembre 2027) et
  l'état du débat sont datés au 1ᵉʳ novembre 2026.
