// Chapitre 2 — Le Bourg : grep, rm, touch, cp, mkdir. Même progression que
// le niveau 2 du Terminus original (MIT), avec notre propre histoire.

import { d, f, type Chapitre } from '../monde';

const M = '/Place';
const FERME = `${M}/CheminRocailleux/Ferme`;
const ATELIER = `${M}/Atelier`;
const PONT = `${M}/PontCasse`;
const CLAIRIERE = `${PONT}/Clairiere`;
const GROTTE = `${CLAIRIERE}/SentierSombre/GrotteDesTrolls`;

const livre = (titre: string, lignes: string[]) => f([titre, '', ...lignes].join('\n'), { lignes: true });

export const bourg: Chapitre = {
  id: 'bourg',
  numero: 2,
  titre: 'Le Bourg',
  resume: 'Chercher, créer, copier, effacer : grep, touch, cp, mkdir, rm.',
  commandes: ['ls', 'cd', 'pwd', 'cat', 'less', 'mv', 'grep', 'rm', 'touch', 'cp', 'mkdir'],
  maison: M,
  accueil: 'crieur.txt',
  final: 'nour',
  creerMonde: () =>
    d({
      Place: d({
        'crieur.txt': f(`
Le portail te dépose sur la place d'un bourg. Un crieur public agite sa
cloche.

« Oyez ! L'Effaceur est passé par le Bourg ! La ferme est ruinée, le pont
est cassé, et la petite Nour a disparu ! Qui nous aidera ? »

Il te tend un parchemin :  cat parchemin_des_sorts.txt
`),
        'parchemin_des_sorts.txt': f(`
LE PARCHEMIN DES SORTS — cinq nouvelles commandes

  grep motif fichier    trouve les lignes qui contiennent un motif
  touch nom             crée un objet (un fichier vide)
  cp source dest        copie un objet (copy)
  mkdir Nom             crée un lieu (make directory)
  rm objet              efface un objet (remove) — pour toujours !

Rappel : « man grep » (ou man cp, man rm…) donne le mode d'emploi.

Les gens du Bourg ont besoin de toi : la Bibliotheque, le CheminRocailleux,
l'Atelier, le PontCasse… Commence où tu veux.
`),
        Marche: d({
          'marchande.txt': f(`
« Plus rien à vendre, l'Effaceur a tout pris ! Enfin, presque : regarde
mes étals. »

Elle baisse la voix : « Un conseil. Avant d'effacer quoi que ce soit avec
rm, réfléchis bien. Il n'y a pas de corbeille, sous Linux. C'est comme ça
que l'Effaceur travaille : rm, rm, rm, sans jamais se retourner. »
`),
          'pomme': f(`Une pomme un peu fripée.`),
          'pomme_2': f(`Une autre pomme, tout aussi fripée.`),
        }),
        Bibliotheque: d({
          'bibliothecaire.txt': f(`
Le bibliothécaire lève à peine les yeux de sa pile de livres.

« On dit qu'un de ces livres parle d'un levier qui ouvre la Reserve. Mais
lequel ? Je n'ai pas le temps de tous les lire. Toi non plus.

Utilise grep : il cherche un mot dans des fichiers et affiche les lignes
qui le contiennent. L'étoile * veut dire « tous les fichiers d'ici » :

  grep levier *
`),
          'almanach.txt': livre('ALMANACH DU BOURG', [
            'Janvier : il gèle. Février : il gèle encore.',
            'Mars : on sème le maïs.',
            'Septembre : on récolte le maïs, si l’Effaceur le permet.',
          ]),
          'recettes.txt': livre('RECETTES DE GRAND-MÈRE', [
            'Galette de maïs : un épi, de l’eau, du sel.',
            'Compote : des pommes, même fripées.',
          ]),
          'atlas_des_rouages.txt': livre('ATLAS DES ROUAGES', [
            'Le Bourg est bâti sur une rivière souterraine.',
            'Les anciens ont caché un levier derrière cet atlas.',
            'Comme tout ce qu’on veut cacher, son nom commence par un point.',
          ]),
          'contes.txt': livre('CONTES POUR LES SOIRS D’HIVER', [
            'Il était une fois une machine qui comptait jusqu’à trois.',
            'Elle s’appelait Setun, et on l’avait construite à Moscou.',
          ]),
          'traite_des_ponts.txt': livre('TRAITÉ DES PONTS', [
            'Un pont sans planche n’est qu’un trou bien organisé.',
          ]),
          '.levier': f(`Tu tires le levier. Clac ! Quelque part, une étagère pivote.`, {
            lu: (j) => {
              j.drapeaux.add('levier');
              return 'Une porte apparaît : la Reserve est ouverte.';
            },
          }),
          Reserve: d(
            {
              'archiviste.txt': f(`
Une archiviste travaille à la lueur d'une bougie.

« Tu as trouvé le levier ! Alors tu sais te servir de grep. J'étudie
l'Effaceur depuis des années. Tout est dans la chronique, mais elle est
longue. Cherche les lignes qui parlent de lui :

  grep Effaceur chronique.txt

Et si tu ne sais plus si c'est avec une majuscule, ajoute -i :

  grep -i effaceur chronique.txt
`),
              'chronique.txt': f(`
CHRONIQUE DU ROYAUME

An 1 : fondation du Bourg au bord de la rivière.
An 12 : construction du pont, en bois de chêne.
An 40 : l'Effaceur est créé à la Racine pour vider la Corbeille.
An 41 : grande récolte de maïs.
An 77 : la maison de l'horloger est agrandie.
An 102 : l'Effaceur n'obéit plus qu'à un seul ordre : tout effacer.
An 103 : on raconte que seule la personne qui l'a lancé peut l'arrêter.
An 104 : la foire aux pommes est annulée (il pleut).
An 130 : un portail est caché dans les Montagnes, par prudence.
An 131 : l'Effaceur vit à la Racine, sous la grotte des trolls.
`, { lignes: true }),
            },
            (jeu) => (jeu.drapeaux.has('levier') ? null : 'Une étagère pleine de livres. Pas de porte en vue… Il doit y avoir un mécanisme.'),
          ),
        }),
        CheminRocailleux: d({
          'gros_rocher': f(`Un rocher énorme, bien plus gros que celui de la grotte. Impossible de le pousser.`, {
            protege: { mv: 'Tu pousses de toutes tes forces… rien. Ce rocher-là est trop lourd pour mv. Mais tu connais un sort plus radical.' },
          }),
          Ferme: d(
            {
              'fermier.txt': f(`
Le fermier est assis au milieu de ses champs brûlés.

« L'Effaceur a tout pris. Il ne me reste qu'un epi de maïs, et j'ai trois
enfants à nourrir. Ah, si je pouvais en avoir trois ! »

(cp epi epi_2 crée une copie de l'épi.)
`),
              'epi': f(`Un épi de maïs, un peu sec mais bien réel.`, {
                protege: { rm: '« Ne touche pas à mon seul épi ! » crie le fermier.' },
              }),
            },
            (jeu) =>
              jeu.existe(`${M}/CheminRocailleux/gros_rocher`) ? 'Un gros_rocher bloque le chemin de la Ferme.' : null,
          ),
        }),
        Atelier: d({
          'artisane.txt': f(`
L'artisane fouille ses tiroirs vides.

« Ah, de l'aide ! L'Effaceur a effacé tous mes engrenages, et sans eux,
l'horloge du Bourg ne tourne plus. Tu sais fabriquer un objet ? Il suffit
d'une commande :

  touch engrenage

Ensuite, il m'en faudrait cinq en tout. Fabriquer, c'est long… copier,
c'est rapide. »
`),
        }),
        PontCasse: d({
          'pont.txt': f(`
Un pont de bois enjambe un ravin. Il manque une planche : le trou est trop
large pour sauter.

Si seulement on pouvait fabriquer une planche…
`),
          Clairiere: d(
            {
              'habitant.txt': f(`
Un homme est assis sur des gravats, la tête dans les mains.

« Ma maison… effacée. Et ma fille, Nour, a disparu en suivant l'Effaceur
vers le SentierSombre. Je n'irai pas la chercher sans un toit où la
ramener. Tu sais construire une Maison ? Une maison, c'est un lieu. »
`),
              SentierSombre: d(
                {
                  'ronces': f(`Des ronces couvertes d'épines barrent le sentier.`, {
                    protege: { mv: 'Aïe ! Les épines te piquent les doigts. Impossible de les déplacer.' },
                  }),
                  GrotteDesTrolls: d(
                    {
                      'troll.txt': f(`
Un troll énorme est assis devant une Cage.

« GRRR. Troll a FAIM. Troll garde la Cage tant que Troll a faim. Troll veut
un EPI ICI, tout de suite ! »

Il y a un épi à la Ferme. Pour en copier un ici, sans y retourner, donne
son chemin complet et . (le lieu où tu es) comme destination :

  cp ~/CheminRocailleux/Ferme/epi .
`),
                      Cage: d(
                        {
                          'nour.txt': f(`
Nour sort de la cage en s'étirant.

« Merci ! L'Effaceur m'a enfermée ici quand j'ai voulu le suivre. Je l'ai
vu descendre par un Toboggan, au fond de la grotte, vers la Racine. Il
parlait tout seul : "effacer, effacer, l'ordre de la racine…"

Rentrons au Bourg. Mon père m'attend. »
`, {
                            lu: (j) => {
                              j.drapeaux.add('nour-lue');
                            },
                          }),
                        },
                        (jeu) => (jeu.existe(`${GROTTE}/troll.txt`) ? '« GRRR ! » Le troll ne te laisse pas approcher de la Cage.' : null),
                      ),
                    },
                    (jeu) => (jeu.existe(`${CLAIRIERE}/SentierSombre/ronces`) ? 'Des ronces barrent le passage.' : null),
                  ),
                },
                (jeu) =>
                  jeu.trouver(`${CLAIRIERE}/Maison`)?.type === 'dossier'
                    ? null
                    : '« Pas sans une Maison où ramener ma fille », dit l’habitant. (Un lieu se crée avec mkdir.)',
              ),
            },
            (jeu) => (jeu.existe(`${PONT}/planche`) ? null : 'Il manque une planche au pont. Tu ne peux pas traverser.'),
          ),
        }),
      }),
    }),
  evenements: [
    {
      id: 'rocher',
      condition: (j) => !j.existe(`${M}/CheminRocailleux/gros_rocher`),
      message: 'Pouf ! Le rocher disparaît dans un nuage de poussière. Le chemin de la Ferme est libre.\n(Pas de corbeille : il ne reviendra jamais.)',
    },
    {
      id: 'mais',
      condition: (j) => j.compter(FERME, 'epi') >= 3,
      message: '« Trois épis ! » Le fermier n’en revient pas. « Une copie, c’est un nouvel objet, identique à l’original. Merci ! »',
    },
    {
      id: 'engrenage',
      condition: (j) => j.compter(ATELIER, 'engrenage') >= 1,
      message: '« Un engrenage ! Parfait. Plus que quatre… avec cp, ce sera vite fait. »',
    },
    {
      id: 'engrenages',
      condition: (j) => j.compter(ATELIER, 'engrenage') >= 5,
      message: 'Tic, tac… L’horloge du Bourg se remet à tourner ! L’artisane te remercie : « Si tu passes au PontCasse : une planche, ça se fabrique comme un engrenage. »',
    },
    {
      id: 'planche',
      condition: (j) => j.existe(`${PONT}/planche`),
      message: 'Tu poses la planche toute neuve. Le pont tient ! La Clairiere est accessible.',
    },
    {
      id: 'maison',
      condition: (j) => j.trouver(`${CLAIRIERE}/Maison`)?.type === 'dossier',
      message: 'Une Maison se dresse dans la Clairiere. L’habitant se relève : « Merci… Maintenant, va chercher Nour, je t’en prie. Le SentierSombre est par là. »',
    },
    {
      id: 'ronces',
      condition: (j) => !j.existe(`${CLAIRIERE}/SentierSombre/ronces`),
      message: 'Les ronces se dissolvent. Au bout du sentier, l’entrée de la GrotteDesTrolls.',
    },
    {
      id: 'troll',
      condition: (j) => j.existe(`${GROTTE}/epi`),
      action: (j) => {
        j.effacer(`${GROTTE}/troll.txt`);
        j.effacer(`${GROTTE}/epi`);
      },
      message: 'Le troll engloutit l’épi d’une bouchée, rote, et s’en va faire la sieste. La Cage n’est plus gardée.',
    },
    {
      id: 'nour',
      condition: (j) => j.drapeaux.has('nour-lue'),
      message: `Bravo ! Tu as terminé le chapitre 2.

Tu sais maintenant chercher (grep), créer (touch, mkdir), copier (cp) et
effacer (rm) — avec prudence, puisqu'il n'y a pas de corbeille.

L'Effaceur se cache à la Racine : le chapitre 3 t'attend.`,
    },
  ],
};

