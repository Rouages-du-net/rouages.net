# La veille

Page publique : `/veille/` ; flux Atom : `/veille/revues.xml` (revues) et
`/veille/feed.xml` (tous les liens). Inspirée de la veille de datascience.fr,
avec un ajout propre à ce site : **chaque article est rattaché aux modules qu'il
concerne**, pour repérer les pages à remettre à jour (les « sujets évolutifs »).

## Le circuit

1. **Chaque jour, 5 h 37 UTC** (`.github/workflows/veille.yml`) :
   `scripts/veille/rafraichir.mjs` lit les flux de `data/veille-sources.yaml`,
   garde les articles de moins de 90 jours, calcule leurs modules (ceux de la
   source, plus ceux des mots-clés de `modules_par_mot_cle`, cherchés comme mots
   entiers) et met à jour `data/veille.json`. `data/veille-etat.json` compte les
   échecs : au bout de 7 échecs d'affilée, le journal signale un flux
   « probablement mort ».
2. **Le lundi**, `scripts/veille/revue.mjs` écrit un brouillon
   `src/content/revues/AAAA-sNN.md` (`draft: true`) : les liens de la semaine par
   thème, et une section « Modules à revérifier ».
3. S'il y a du nouveau, l'action fait un commit sur `main`, puis lance
   `deploy.yml` (tests compris) : un push fait avec le jeton par défaut ne
   déclencherait pas le déploiement tout seul.
4. **Le lundi en fin de matinée**, une tâche programmée Claude (voir plus bas)
   rédige les points saillants, vérifie les modules signalés et ouvre une PR.
   **Rien n'est publié sans relecture humaine** : la revue reste en brouillon
   tant que `draft: true`.

## Règles éditoriales

- Ajouter ou retirer une source est une décision éditoriale : vérifier que le
  flux répond, préférer les sources primaires (régulateurs, institutions,
  chercheur·ses), garder la presse en titres seulement (`extrait: false`).
- Les points saillants suivent `docs/SOURCES.md` : chaque fait cité est lu dans
  sa source, deux sources pour un fait contesté, toutes les parties présentées.
- Un lien de la veille n'est **pas** une source vérifiée pour un module : avant
  de modifier un module, lire la source primaire.
- Aucune adresse de site illégal, aucune donnée personnelle sensible.

## Tâche programmée (Claude)

Session nouvelle chaque lundi à 10 h 41 (heure de Paris), créée depuis Claude
Code. Elle repart de `main`, complète le brouillon de la semaine (points
saillants sourcés, liens élagués), vérifie dans les sources primaires les
modules signalés, et ouvre une PR avec la revue (toujours `draft: true`) et,
s'il y a lieu, les mises à jour de modules. Pour publier la revue : relire, puis
passer `draft: false` et fusionner.

## Lancer à la main

```bash
node scripts/veille/rafraichir.mjs   # lit les flux
node scripts/veille/revue.mjs        # brouillon de la semaine (si absent)
```
