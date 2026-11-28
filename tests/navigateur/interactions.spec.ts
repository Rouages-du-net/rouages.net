import { expect, test, type Locator } from '@playwright/test';
import { erreurs, lectureContinue } from './outils';

test.beforeEach(async ({ page }) => { await lectureContinue(page); });

async function jusquAuBout(anim: Locator) {
  const suivant = anim.locator('[data-action="suivant"]');
  for (let i = 0; i < 20 && !(await suivant.isDisabled()); i++) await suivant.click();
}

test.describe('frises', () => {
  for (const [module, region] of [['histoire-internet', 'afrique'], ['histoire-informatique', 'europe-est'], ['histoire-ia', 'asie']]) {
    test(`${module} : les filtres masquent les événements`, async ({ page }) => {
      const err = erreurs(page);
      await page.goto(`/modules/${module}/`);
      const frise = page.locator('[data-frise-histoire]');
      const total = await frise.locator('.evenements > li').count();
      expect(await frise.locator('.evenements > li:visible').count()).toBe(total);
      await frise.locator(`input[value="${region}"]`).check();
      const n = await frise.locator('.evenements > li:visible').count();
      expect(n).toBeGreaterThan(0);
      expect(n).toBeLessThan(total);
      await expect(frise.locator('[data-compte]')).toContainText(`${n} événement`);
      await frise.locator('[data-pionnieres]').check();
      expect(await frise.locator('.evenements > li:visible').count()).toBeLessThanOrEqual(n);
      expect(err).toEqual([]);
    });
  }
});

test('bases : paquets, compteur et conversion', async ({ page }) => {
  await page.goto('/modules/bases/');
  const paquets = page.locator('[data-paquets]');
  await jusquAuBout(paquets);
  await expect(paquets.locator('[data-ecriture]')).toContainText('1101');
  const compteur = page.locator('[data-compteur-rouages]');
  await compteur.locator('[data-valeur]').fill('15');
  await compteur.locator('[data-valeur]').dispatchEvent('change');
  await compteur.locator('[data-plus="1"]').click();
  await expect(compteur.locator('[data-ecrit]')).toHaveText(['16', '20', '10', '10000']);
  const conversion = page.locator('[data-conversion]');
  await jusquAuBout(conversion);
  await expect(conversion.locator('[data-resultat]')).toContainText('1101');
});

test('adresses IP : masque et IPv6', async ({ page }) => {
  await page.goto('/modules/adresses-ip/');
  const masque = page.locator('[data-masque]');
  await masque.locator('[data-prefixe="17"]').click();
  await expect(masque.locator('dd').nth(1)).toHaveText('255.255.128.0');
  await masque.locator('[data-m]').fill('255.0.255.0');
  await masque.locator('[data-m]').dispatchEvent('change');
  await expect(masque.locator('.anim-legende')).toContainText('pas un masque valide');
  const v6 = page.locator('[data-ipv6]');
  await jusquAuBout(v6);
  await expect(v6.locator('[data-resultat]')).toHaveText('2001:db8::1');
});

test('sous-réseaux : plan VLSM et exercices', async ({ page }) => {
  await page.goto('/modules/sous-reseaux/');
  const plan = page.locator('[data-plan-vlsm]');
  await jusquAuBout(plan);
  await expect(plan.locator('.attrib code')).toHaveText(['192.0.2.0/25', '192.0.2.128/26', '192.0.2.192/27', '192.0.2.224/31']);
  const ex = page.locator('[data-exercices]');
  const solution = (await ex.locator('[data-solution]').textContent())!;
  await ex.locator('[data-reponse]').fill(solution);
  await ex.locator('[data-form] button').click();
  await expect(ex.locator('[data-verdict]')).toHaveText('Juste !');
});

test('recherche : trouve une notion et renvoie à l’étape', async ({ page }) => {
  await page.goto('/recherche/?q=masque');
  await expect(page.locator('[data-etat]')).toContainText('pour « masque »');
  await expect(page.locator('.resultats .etapes a[href*="/modules/adresses-ip/#"]').first()).toBeVisible();
});

test('index des notions : notions, personnes, modules', async ({ page }) => {
  await page.goto('/notions/');
  expect(await page.locator('.entree').count()).toBeGreaterThan(50);
  expect(await page.locator('.personnes li').count()).toBeGreaterThan(100);
  await expect(page.locator('.entree', { hasText: 'Masque de sous-réseau' }).locator('.usages')).toContainText('Adresses IP et masques');
});

test('portes logiques : bon nombre d’entrées et sortie juste', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/ordinateur/');
  const anim = page.locator('[data-portes]');
  const fils = anim.locator('[data-schema] [data-fil]');
  const lampe = anim.locator('[data-lampe]');
  // Portes à deux entrées : fils A, B et sortie.
  for (const porte of ['et', 'ou', 'oux', 'nonet']) {
    await anim.locator(`[data-porte="${porte}"]`).click();
    await expect(fils).toHaveCount(3);
    await expect(anim.locator('.verite tbody tr')).toHaveCount(4);
  }
  // NON : une seule entrée, B débranché, table de deux lignes.
  await anim.locator('[data-porte="non"]').click();
  await expect(fils).toHaveCount(2);
  await expect(anim.locator('[data-entree="b"]')).toBeDisabled();
  await expect(anim.locator('.verite tbody tr')).toHaveCount(2);
  await expect(lampe).toHaveClass(/allumee/);
  await anim.locator('[data-entree="a"]').click();
  await expect(lampe).not.toHaveClass(/allumee/);
  await expect(anim.locator('[data-fil="a"]')).toHaveClass(/allume/);
  // ET avec A = 1, B = 1 : lampe allumée.
  await anim.locator('[data-porte="et"]').click();
  await anim.locator('[data-entree="b"]').click();
  await expect(lampe).toHaveClass(/allumee/);
  expect(err).toEqual([]);
});

test('gouvernance technique : tri des RFC, hum, racine, adresses', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/gouvernance-technique/');
  const tri = page.locator('[data-tri-rfc]');
  await expect(tri.locator('[data-carte]')).toContainText('RFC 791');
  await tri.locator('[data-statut="Internet Standard"]').click();
  await expect(tri.locator('.anim-legende')).toContainText('Oui');
  await tri.locator('[data-action="suivante"]').click();
  await expect(tri.locator('[data-carte]')).toContainText('RFC 1149');
  await tri.locator('[data-statut="Proposed Standard"]').click();
  await expect(tri.locator('.anim-legende')).toContainText('Expérimentale');
  const hum = page.locator('[data-hum]');
  await jusquAuBout(hum);
  await expect(hum.locator('[data-etat]')).toContainText('Consensus approximatif');
  const racine = page.locator('[data-racine]');
  await racine.locator('.lettre', { hasText: 'M' }).click();
  await expect(racine.locator('.anim-legende')).toContainText('WIDE Project');
  expect(await racine.locator('.pt.choisi').count()).toBe(3);
  const adresse = page.locator('[data-adresse]');
  await jusquAuBout(adresse);
  await expect(adresse.locator('.anim-legende')).toContainText('Ton appareil');
  expect(err).toEqual([]);
});

test('états et régulation : demande RGPD, guichet, calendrier, blocage', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/etats-regulation/');
  const demande = page.locator('[data-demande]');
  await demande.locator('[data-droit="portabilite"]').click();
  await demande.locator('[data-org]').fill('Exemple SA');
  await expect(demande.locator('[data-lettre]')).toContainText('article 20');
  await expect(demande.locator('[data-lettre]')).toContainText('À : Exemple SA');
  const guichet = page.locator('[data-guichet]');
  await jusquAuBout(guichet);
  await expect(guichet.locator('.anim-legende')).toContainText('1,2 milliard');
  expect(await guichet.locator('.a.objection').count()).toBe(4);
  const cal = page.locator('[data-calendrier]');
  await cal.locator('[data-curseur]').fill('2024');
  await expect(cal.locator('.anim-legende')).toContainText('aucune obligation');
  await cal.locator('[data-curseur]').fill('2029');
  await expect(cal.locator('.jalons li.applique')).toHaveCount(6);
  const blocage = page.locator('[data-blocage]');
  await blocage.locator('[data-bloquer="1"]').click();
  await expect(blocage.locator('[data-bord]')).toContainText('97 %');
  await expect(blocage.locator('[data-chemin] li.jamais')).toHaveCount(2);
  expect(err).toEqual([]);
});

test('se protéger : phrase de passe, al-Kindi, faille, sauvegarde', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/se-proteger/');
  const phrase = page.locator('[data-phrase]');
  await phrase.locator('[data-curseur]').fill('9');
  await expect(phrase.locator('[data-bits]')).toHaveText('81 bits d’entropie.');
  expect((await phrase.locator('[data-mots]').textContent())!.split(' ')).toHaveLength(9);
  const kano = page.locator('[data-kano]');
  await kano.locator('[data-ex="soleil"]').click();
  await expect(kano.locator('[data-envoi]')).toHaveText(/^GET \/range\/[0-9A-F]{5}$/);
  const kindi = page.locator('[data-kindi]');
  await kindi.locator('[data-curseur]').fill('7');
  await expect(kindi.locator('.anim-legende')).toContainText('les pics coïncident');
  await expect(kindi.locator('[data-texte]')).toContainText('UN MESSAGE CHIFFRE');
  const faille = page.locator('[data-faille]');
  await faille.locator('[data-maj]').uncheck();
  await faille.locator('[data-action="suivant"]').click();
  await faille.locator('[data-action="suivant"]').click();
  await expect(faille.locator('[data-pc]')).toContainText('rançon');
  const sauve = page.locator('[data-sauve]');
  await sauve.locator('[data-coche="disque"]').check();
  await sauve.locator('[data-coche="cloud"]').check();
  await sauve.locator('[data-action="attaque"]').click();
  await expect(sauve.locator('.anim-legende')).toContainText('règle 3-2-1 : 3 copies');
  expect(err).toEqual([]);
});

test('client et serveur : ports, URL, fichiers, transferts, HTTP', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/client-serveur/');
  const ports = page.locator('[data-ports]');
  await ports.locator('[data-choix="443"]').click();
  await expect(ports.locator('.anim-legende')).toContainText('Un programme y écoute');
  await ports.locator('[data-choix="21"]').click();
  await expect(ports.locator('.anim-legende')).toContainText('connexion refusée');
  const url = page.locator('[data-lire-url]');
  await url.locator('[data-saisie]').fill('http://cours.example:8080/test/?a=1#bas');
  await expect(url.locator('.anim-legende')).toContainText('port 8080');
  await expect(url.locator('.anim-legende')).toContainText('« bas » reste dans le navigateur');
  const arbo = page.locator('[data-arbo]');
  await arbo.locator('select').selectOption('https://cours.example/reseau');
  await expect(arbo.locator('[data-code]')).toContainText('301');
  await arbo.locator('select').selectOption('https://cours.example/../etc/passwd');
  await expect(arbo.locator('[data-code]')).toContainText('403');
  await arbo.locator('select').selectOption('https://cours.example/reseau/');
  await expect(arbo.locator('li.trouve')).toHaveText(/index\.html/);
  const tr = page.locator('[data-transfert]');
  await tr.locator('[data-action="suivant"]').click();
  await expect(tr.locator('[data-espion]')).toContainText('PASS');
  await tr.locator('[data-proto="sftp"]').click();
  await tr.locator('[data-action="suivant"]').click();
  await expect(tr.locator('[data-espion]')).not.toContainText('PASS');
  const req = page.locator('[data-requete]');
  await req.locator('[data-ech="introuvable"]').click();
  await expect(req.locator('[data-code]')).toHaveText('404');
  expect(err).toEqual([]);
});

test('client et serveur : un fichier, trois chemins', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/client-serveur/');
  const acces = page.locator('[data-acces]');
  await acces.locator('.fichier', { hasText: 'ports.html' }).click();
  await expect(acces.locator('[data-voie="web"] [data-adresse]')).toHaveText('https://cours.example/reseau/ports.html');
  await expect(acces.locator('[data-voie="sftp"] [data-adresse]')).toHaveText('sftp://eleve@cours.example/home/eleve/public_html/reseau/ports.html');
  await acces.locator('[data-action="modifier"]').click();
  await expect(acces.locator('[data-voie="web"] [data-vu]')).toContainText('(corrigé)');
  await expect(acces.locator('[data-voie="ftps"] [data-vu]')).toContainText('(corrigé)');
  await acces.locator('.fichier', { hasText: 'notes-perso.txt' }).click();
  await expect(acces.locator('[data-voie="web"]')).toHaveClass(/ferme/);
  await expect(acces.locator('[data-voie="sftp"]')).not.toHaveClass(/ferme/);
  expect(err).toEqual([]);
});

test('linux : arborescence, terminal, droits, accès et rebonds', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/linux/');
  const arbo = page.locator('[data-arborescence]');
  await arbo.locator('.noeud', { hasText: 'etc/' }).click();
  await arbo.locator('.noeud', { hasText: 'passwd' }).click();
  await expect(arbo.locator('[data-fiche-chemin]')).toHaveText('Fichier /etc/passwd');
  const term = page.locator('[data-terminal-linux]');
  await term.locator('[data-essai="cd ../bob"]').click();
  await expect(term.locator('[data-ecran]')).toContainText('Permission non accordée');
  await expect(term.locator('[data-invite]')).toHaveText('alice@machine:~$');
  await term.locator('[data-essai="cd /etc"]').click();
  await expect(term.locator('[data-invite]')).toHaveText('alice@machine:/etc$');
  await term.locator('[data-commande]').fill('cd ~/cours');
  await term.locator('[data-commande]').press('Enter');
  await expect(term.locator('[data-invite]')).toHaveText('alice@machine:~/cours$');
  await expect(term.locator('[data-explication]')).toContainText('dossier personnel');
  const droits = page.locator('[data-droits]');
  await droits.locator('[data-modele="755"]').click();
  await expect(droits.locator('[data-ls]')).toContainText('-rwxr-xr-x');
  await droits.locator('[data-saisie]').fill('go-rx');
  await droits.locator('[data-saisie]').press('Enter');
  await expect(droits.locator('[data-octal]')).toHaveText('700');
  await expect(droits.locator('[data-symbolique]')).toHaveText('u=rwx,g=,o=');
  const qui = page.locator('[data-qui-peut]');
  await qui.locator('[data-compte]').selectOption('bob');
  await expect(qui.locator('[data-reponse]')).toContainText('Oui');
  await qui.locator('[data-compte]').selectOption('root');
  await qui.locator('[data-op]').selectOption('x');
  await expect(qui.locator('[data-reponse]')).toContainText('Non');
  const sudo = page.locator('[data-sudo]');
  await jusquAuBout(sudo);
  await expect(sudo.locator('[data-ecran]')).toContainText("n'est pas dans le fichier sudoers");
  const rebonds = page.locator('[data-rebonds]');
  await rebonds.locator('[data-mode="saut"]').click();
  await jusquAuBout(rebonds);
  await expect(rebonds.locator('[data-voit]')).toContainText('chiffrés');
  await expect(rebonds.locator('[data-ecran]')).toContainText('ProxyJump');
  expect(err).toEqual([]);
});

test('institutions : la carte met en évidence les liens d’un acteur', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/institutions/');
  const carte = page.locator('[data-carte-acteurs]');
  await carte.locator('[data-acteur="isoc"]').click();
  await expect(carte.locator('[data-titre]')).toContainText('ISOC');
  await expect(carte.locator('[data-liste]')).toContainText('IETF');
  await carte.locator('input[data-type="finance"]').uncheck();
  await expect(carte.locator('[data-liste]')).not.toContainText('47,1');
  await carte.locator('[data-acteur="isoc"]').press('Enter');
  await expect(carte.locator('[data-titre]')).toContainText('Choisis un acteur');
  await page.goto('/institutions/icann/');
  await expect(page.locator('h1')).toContainText('ICANN');
  await expect(page.locator('.liens')).toContainText('PTI');
  expect(err).toEqual([]);
});

test('clins d’œil : Konami, sudo, terminal', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/');
  for (const k of ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']) await page.keyboard.press(k);
  await expect(page.locator('html')).toHaveAttribute('data-phosphore', '');
  await expect(page.locator('[data-clin]')).toContainText('phosphore');
  await page.keyboard.press('Escape');
  await expect(page.locator('html')).not.toHaveAttribute('data-phosphore', '');
  await page.keyboard.type('sudo');
  await expect(page.locator('[data-clin]')).toContainText('sudoers');
  // Trois clics sur le logo, depuis une autre page : le premier ramène à l'accueil.
  await page.goto('/glossaire/');
  await page.locator('[data-logo]').click();
  await page.waitForURL('**/');
  await page.locator('[data-logo]').click();
  await page.locator('[data-logo]').click();
  await expect(page.locator('[data-clin]')).toContainText('418');
  await page.goto('/modules/linux/');
  const term = page.locator('[data-terminal-linux]');
  await term.locator('[data-commande]').fill('cowsay bonjour');
  await term.locator('[data-commande]').press('Enter');
  await expect(term.locator('[data-ecran]')).toContainText('< bonjour >');
  expect(err).toEqual([]);
});

test('savoirs : couleurs de l’accès ouvert et article 30', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/savoirs/');
  const c = page.locator('[data-couleurs]');
  await c.locator('[data-modele="diamant"]').click();
  await expect(c.locator('[data-publier]')).toHaveText('Personne');
  const a = page.locator('[data-article30]');
  await a.locator('input[name="publication"]').fill('2026-03-10');
  await a.locator('input[value="shs"]').check();
  await expect(a.locator('[data-reponse]')).toContainText('10 mars 2027');
  await a.locator('input[name="fondsPublics"]').uncheck();
  await expect(a.locator('[data-reponse]')).toContainText('ne s’applique pas');
  expect(err).toEqual([]);
});

test('économie : tuyaux, enchère, argent', async ({ page }) => {
  const err = erreurs(page);
  await page.goto('/modules/economie/');
  const t = page.locator('[data-tuyaux]');
  await t.locator('[data-chemin="peering"]').click();
  await expect(t.locator('[data-qui-paie]')).toContainText('poignée de main');
  const e = page.locator('[data-enchere]');
  for (let i = 0; i < 4; i++) await e.locator('[data-action="suivant"]').click();
  await expect(e.locator('[data-ms]')).toHaveText('130');
  await expect(e.locator('[data-acteur="b"]')).toHaveClass(/gagnant/);
  const a = page.locator('[data-argent]');
  await a.locator('[data-entreprise="3"]').click();
  await expect(a.locator('.anim-legende')).toContainText('57 %');
  expect(err).toEqual([]);
});
