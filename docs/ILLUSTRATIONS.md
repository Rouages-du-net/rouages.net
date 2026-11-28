# Illustrations libres

Des documents d'époque et des photos de vraies machines illustrent les faits
historiques et techniques : la personne dont on parle, l'ordinateur, le
document original, le lieu. Ils viennent de **Wikimedia Commons** et sont
présentés dans un cadre « photo agrafée » : un tirage papier un peu penché, tenu
par une agrafe. Le cadre fait le lien entre des styles très différents (photo
noir et blanc, schéma, capture) et le reste du site.

## Règles

- **Pertinente ou rien** : une image montre la chose réelle dont parle le
  texte. Pas de logo, pas d'image d'ambiance, pas de capture banale. Mieux vaut
  aucune image qu'une image approximative.
- **Licences acceptées** : domaine public, CC0, CC BY, CC BY-SA. Jamais NC, ND
  ni « fair use ». Le test `tests/unit/illustrations.test.ts` le vérifie.
- **Attribution complète** sous chaque image : auteur·e (lien vers la page
  Commons), licence (lien vers son texte), « via Wikimedia Commons ».
- **Servie par le site** : l'image est copiée dans `src/assets/illustrations/`
  et optimisée à la construction (formats et tailles adaptés). Aucune requête
  vers Wikimedia depuis les pages.
- **Texte alternatif** qui dit ce que montre l'image ; **légende** courte et
  factuelle (date, lieu), dans le ton du site. La légende est un fait publié :
  elle suit `docs/SOURCES.md`, comme le reste.
- **Personnes** : portraits publics seulement (conférence, portrait officiel,
  photo d'archive). Jamais de photo privée d'une personne vivante.
- **Ligne éditoriale** : histoire mondiale, femmes et minorités mises en avant ;
  une image ne doit pas renforcer un mythe (« le » premier, « l' »inventeur).

## Ajouter une image

```bash
node scripts/illustrations/importer.mjs <id> "File:Nom exact sur Commons.jpg"
```

Le script interroge l'API de Commons et refuse une licence non libre. Il
télécharge une version de 1 200 px de large et ajoute la fiche dans
`src/data/illustrations.json`. Il reste à écrire à la main `alt` et `legende`,
et à vérifier l'auteur·e sur la page Commons (le champ est parfois approximatif).

Puis, dans la page :

```astro
import Illustration from '../../components/Illustration.astro';
<Illustration id="<id>" />                       <!-- à droite du texte sur grand écran -->
<Illustration id="<id>" place="centre" />        <!-- seule sur sa ligne -->
<Illustration id="<id>" legende="Légende propre à cette page." />
```

Couleurs du cadre : variables `--photo-cadre`, `--sur-photo`,
`--sur-photo-lien`, `--agrafe` et `--agrafe-reflet` de `src/styles/global.css`.
Le tirage reste clair dans les deux thèmes : une photo reste une photo.
