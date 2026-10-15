// Chapitre 1 — L'Éveil : ls, cd, pwd, cat (less), ls -a, mv (déplacer et
// renommer), chemins (.., ~, /). Même progression que le niveau 1 du
// Terminus original (MIT), avec notre propre histoire.

import { d, f, type Chapitre } from '../monde';

const M = '/Maison';

export const eveil: Chapitre = {
  id: 'eveil',
  numero: 1,
  titre: 'L’Éveil',
  resume: 'Se repérer et se déplacer : ls, cd, pwd, cat, mv, les fichiers cachés.',
  commandes: ['ls', 'cd', 'pwd', 'cat', 'less', 'mv'],
  maison: M,
  accueil: 'bienvenue.txt',
  final: 'portail',
  creerMonde: () =>
    d({
      Maison: d({
        'bienvenue.txt': f(`
Tu te réveilles dans une maison inconnue. Devant toi, un écran noir et un
curseur qui clignote.

Dans ce monde, chaque LIEU est un dossier et chaque OBJET est un fichier.
C'est exactement comme ça que Linux range tout.

Pour regarder autour de toi, tape :   ls
Pour te déplacer dans un lieu, tape : cd NomDuLieu
Pour lire un objet, tape :            cat nom_du_fichier

Commence par lire la lettre :  cat lettre.txt
`),
        'lettre.txt': f(`
« Si tu lis ceci, c'est que l'Effaceur est passé.

Depuis quelque temps, une créature parcourt le royaume et efface tout ce
qu'elle touche : des objets, des lieux, des souvenirs. Personne ne sait d'où
elle vient.

Va à l'Académie des commandes, dans la Foret. On t'y apprendra ce qu'il
faut savoir. Puis traverse la Prairie jusqu'aux Montagnes : on dit qu'un
portail caché mène au Bourg, où l'on a besoin d'aide.

                                           — Une amie »
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
"logiciel". Deux conseils :

  - la touche Tab complète les noms à ta place : tape « cat vi » puis Tab ;
  - la flèche du haut rappelle tes commandes précédentes.

Et méfie-toi de l'Effaceur. Il ne détruit pas par méchanceté : il obéit à
un ordre que quelqu'un lui a donné, il y a longtemps. »
`),
          }),
          Academie: d({
            'directrice.txt': f(`
La directrice de l'Académie des commandes t'accueille.

« Bienvenue ! Tu sais déjà regarder (ls), te déplacer (cd) et lire (cat).
Il te manque une commande essentielle : mv (move), qui déplace un objet.

  mv objet Lieu

Va t'entraîner dans la SalleDExercice. Les Cours sont ouverts à tous, et
la Bibliotheque garde le Livre des commandes. »
`),
            SalleDExercice: d({
              'consigne.txt': f(`
EXERCICE : une grenouille s'est échappée. Range-la dans la Boite.

  mv grenouille Boite

Puis vérifie avec  ls  et  ls Boite
`),
              grenouille: f(`Une grenouille verte. « Croâ. » Elle n'a pas l'air pressée de retourner dans sa boîte.`),
              Boite: d({}),
            }),
            Cours: d({
              'cours_1_manuel.txt': f(`
COURS 1 — LE MANUEL

Chaque commande a son manuel. Tape  man  suivi du nom de la commande :

  man ls
  man mv

Sur un vrai Linux, le manuel est bien plus long. Tu le quittes avec q.
`),
              'cours_2_chemins.txt': f(`
COURS 2 — LES CHEMINS

Un chemin dit où se trouve un lieu ou un objet.

  ..            le lieu parent (un cran au-dessus)
  .             le lieu où tu es
  ~             ta maison
  /             la racine, tout en haut

Un chemin RELATIF part de là où tu es :     cd Cours
Un chemin ABSOLU part de la racine :        cd /Maison/Foret
On peut enchaîner les lieux avec / :        cat ../directrice.txt

Essaie :  cd ~  puis  pwd
`),
              'cours_3_caches.txt': f(`
COURS 3 — CE QUI NE SE VOIT PAS

Sous Linux, un fichier dont le nom commence par un point est CACHÉ :
un simple « ls » ne le montre pas. Ce n'est pas une protection, juste une
façon de ranger les réglages pour qu'ils ne gênent pas.

Pour tout voir :  ls -a

Il y a un fichier caché dans cette salle de cours. À toi de le trouver.
`),
              '.note_secrete': f(`
Bien vu ! Tu as trouvé un fichier caché.

Retiens-le : on le trouvera aussi sur ton chemin. Les portes les mieux
gardées ne sont pas toujours fermées : parfois, elles sont seulement
cachées.
`),
              'cours_4_renommer.txt': f(`
COURS 4 — RENOMMER

mv ne sert pas qu'à déplacer : si la destination n'est pas un lieu
existant, mv RENOMME l'objet.

  mv brouillon.txt lettre.txt     (brouillon.txt s'appelle désormais lettre.txt)

Sous Linux, déplacer et renommer, c'est la même opération : changer le
chemin d'un fichier.
`),
            }),
            Bibliotheque: d({
              'livre_des_commandes.txt': f(`
LE LIVRE DES COMMANDES

  ls       liste ce qu'il y a ici (list) ; ls -a montre aussi les cachés
  cd       change de lieu (change directory)
  pwd      affiche où tu es (print working directory)
  cat      affiche le contenu d'un fichier (concatenate)
  less     pareil, page par page (pour les longs fichiers)
  mv       déplace ou renomme (move)
  man      le manuel d'une commande, ex. : man ls
  clear    efface l'écran

Ces commandes existent depuis les années 1970 : elles viennent d'Unix,
l'ancêtre de Linux et de macOS. Celles et ceux qui administrent les
serveurs d'internet les tapent tous les jours.
`),
            }),
          }),
        }),
        Prairie: d({
          'bergere.txt': f(`
Une bergère compte ses moutons… il en manque la moitié.

« Effacés ! Hier soir, l'Effaceur a traversé la Prairie. Il venait des
Montagnes. Si tu y vas, sois prudent·e : la Grotte est sombre, et un
rocher bloque le chemin depuis l'éboulement. »
`),
          'mouton_1': f(`« Bêê. »`),
          'mouton_2': f(`« Bêêê. » Il te regarde avec méfiance.`),
          Montagnes: d({
            'vent.txt': f(`Le vent siffle entre les rochers. Plus haut, l'entrée d'une Grotte.`),
            Grotte: d({
              'graffiti.txt': f(`
Sur la paroi, quelqu'un a gravé :

  « L'EFFACEUR EST PASSÉ PAR ICI. IL CHERCHAIT LE PORTAIL. »
`),
              CouloirSombre: d({
                'obscurite.txt': f(`Il fait noir. Tu avances à tâtons. Un courant d'air vient de la SalleHumide.`),
                SalleHumide: d({
                  'rocher': f(`Un gros rocher, tombé lors de l'éboulement. Il bloque l'entrée du Tunnel. Tu pourrais le pousser dans le couloir d'où tu viens…`),
                  'indice.txt': f(`
Gravé près du rocher :

  « Ce qui gêne ici peut aller là-haut.
    Rappelle-toi : .. est le lieu parent. »

(Essaie :  mv rocher ..)
`),
                  Tunnel: d(
                    {
                      ChambreDePierre: d({
                        'gardien.txt': f(`
Un gardien de pierre bloque le fond de la salle.

« Halte ! Le portail ne s'ouvre que pour qui porte une clé nommée
exactement :  cle

Je vois que tu as ramassé une vieille_cle_rouillee. Ce n'est pas le bon
nom. Mais tu sais peut-être comment changer le nom d'un objet ? »
`),
                        'vieille_cle_rouillee': f(`Une vieille clé, rongée par la rouille. Une étiquette dit : « porte-moi sous mon vrai nom ».`),
                        '.Portail': d(
                          {
                            'portail.txt': f(`
Tu franchis le portail. Une lumière bleue t'enveloppe…

FIN DU CHAPITRE 1.
`),
                          },
                          (jeu) =>
                            jeu.existe(`${M}/Prairie/Montagnes/Grotte/CouloirSombre/SalleHumide/Tunnel/ChambreDePierre/cle`)
                              ? null
                              : '« Halte ! » dit le gardien. « Pas sans une clé nommée cle. »',
                        ),
                      }),
                    },
                    (jeu) =>
                      jeu.existe(`${M}/Prairie/Montagnes/Grotte/CouloirSombre/SalleHumide/rocher`)
                        ? 'Le rocher bloque l’entrée du Tunnel. Il faudrait le déplacer (mv) ailleurs…'
                        : null,
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  evenements: [
    {
      id: 'grenouille',
      condition: (j) => j.existe(`${M}/Foret/Academie/SalleDExercice/Boite/grenouille`),
      message: '« Croâ ! » La grenouille est dans sa boîte. La directrice applaudit : tu sais déplacer un objet avec mv.',
    },
    {
      id: 'rocher',
      condition: (j) => !j.existe(`${M}/Prairie/Montagnes/Grotte/CouloirSombre/SalleHumide/rocher`),
      message: 'Dans un grondement, le rocher roule hors du chemin. L’entrée du Tunnel est libre.',
    },
    {
      id: 'cle',
      condition: (j) => j.existe(`${M}/Prairie/Montagnes/Grotte/CouloirSombre/SalleHumide/Tunnel/ChambreDePierre/cle`),
      message: '« Voilà une clé qui porte son vrai nom », dit le gardien en s’écartant. « Le portail est ici… mais il ne se montre pas à n’importe qui. »',
    },
    {
      id: 'portail',
      condition: (j) => j.cwd.endsWith('/ChambreDePierre/.Portail'),
      message: `Bravo ! Tu as terminé le chapitre 1.

Tu sais maintenant te déplacer (cd, .., ~), regarder (ls, ls -a), lire
(cat, less), te situer (pwd), déplacer et renommer (mv). Ce sont les mêmes
commandes que sur un vrai serveur, celui qui héberge peut-être ce site.

Le chapitre 2, « Le Bourg », t'attend.`,
    },
  ],
};
