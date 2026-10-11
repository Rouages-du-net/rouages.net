// Le monde du jeu : un vrai système de fichiers miniature.
// Un dossier = un lieu, un fichier = un objet ou un personnage.

export type Fichier = { type: 'fichier'; contenu: string };
export type Dossier = {
  type: 'dossier';
  enfants: Record<string, Noeud>;
  // Raison du blocage si on ne peut pas encore y entrer, sinon null.
  bloque?: (racine: Dossier) => string | null;
};
export type Noeud = Fichier | Dossier;

const f = (contenu: string): Fichier => ({ type: 'fichier', contenu: contenu.trim() });
const d = (enfants: Record<string, Noeud>, bloque?: Dossier['bloque']): Dossier => ({
  type: 'dossier',
  enfants,
  bloque,
});

export const ACCUEIL = '/Accueil';

export function creerMonde(): Dossier {
  return d({
    Accueil: d({
      'bienvenue.txt': f(`
Tu te réveilles dans un endroit inconnu. Devant toi, un écran noir et un
curseur qui clignote.

Dans ce monde, chaque LIEU est un dossier et chaque OBJET est un fichier.
C'est exactement comme ça que Linux range tout.

Pour regarder autour de toi, tape :  ls
Pour te déplacer dans un lieu, tape : cd NomDuLieu
Pour lire un objet, tape :            cat nom_du_fichier
`),
      Foret: d({
        'panneau.txt': f(`
« Forêt des Chemins. »

Tu peux toujours revenir en arrière : « .. » désigne le lieu parent.
Essaie :  cd ..

Et si tu te perds, « pwd » (print working directory) te dit où tu es.
`),
        Clairiere: d({
          'vieille_dame.txt': f(`
Une vieille dame lève les yeux de son ordinateur ternaire.

« Bonjour, voyageur·se. Moi, j'ai programmé avant que l'on parle de
"logiciel". Un conseil : la touche Tab complète les noms à ta place,
et la flèche du haut rappelle tes commandes précédentes.

On m'a dit qu'un rocher bloque le Pont, près de la Riviere.
Pour déplacer un objet, on utilise  mv objet destination
Par exemple :  mv rocher Riviere »
`),
        }),
      }),
      Bibliotheque: d({
        'livre_des_commandes.txt': f(`
LE LIVRE DES COMMANDES

  ls       liste ce qu'il y a ici (list)
  cd       change de lieu (change directory)
  pwd      affiche où tu es
  cat      affiche le contenu d'un fichier (concatenate)
  mv       déplace ou renomme (move)
  man      le manuel d'une commande, ex. : man ls
  clear    efface l'écran

Les vraies commandes ont des options. Par exemple, « ls -a » montre aussi
les fichiers cachés, dont le nom commence par un point.
`),
        Archives: d({
          'poussiere.txt': f(`De la poussière. Beaucoup de poussière. Rien d'autre... en apparence ?`),
          '.parchemin': f(`
Tu as trouvé un fichier caché ! Sous Linux, tout fichier dont le nom
commence par un point est invisible pour un simple « ls ».

Le parchemin dit : « Le chemin absolu commence par / et part de la racine.
Le tilde ~ est un raccourci vers ta maison. Essaie :  cd ~ »
`),
        }),
      }),
      Pont: d({
        rocher: f(`Un énorme rocher. Il bloque l'accès à l'AutreRive.`),
        Riviere: d({
          'poisson.txt': f(`Un poisson te regarde. « Bloub. »`),
        }),
        AutreRive: d(
          {
            'tresor.txt': f(`
Bravo ! Tu as traversé le pont.

Tu viens d'utiliser les commandes de base de Linux : ls, cd, cat et mv.
Ce sont les mêmes que sur un vrai serveur, celui qui héberge peut-être ce site.

As-tu trouvé le fichier caché des Archives de la Bibliotheque ?

Ce monde est en construction : de nouveaux lieux arrivent bientôt.
`),
          },
          (racine) => {
            const pont = (racine.enfants.Accueil as Dossier).enfants.Pont as Dossier;
            return 'rocher' in pont.enfants
              ? "Un rocher bloque le passage. Il faudrait le déplacer (mv) dans la Riviere..."
              : null;
          },
        ),
      }),
    }),
  });
}
