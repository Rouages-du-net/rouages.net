// Clins d'œil cachés (voir docs/EASTER-EGGS.md). Tous annoncés aux lecteurs
// d'écran par la bulle `[data-clin]` (role="status"), ignorés quand on écrit
// dans un champ, sans animation si l'utilisateur réduit les mouvements.

const bulle = () => document.querySelector<HTMLElement>('[data-clin]');
let minuterie: number | undefined;

/** Affiche un message éphémère (8 s), annoncé poliment. */
export function clin(texte: string) {
  const b = bulle();
  if (!b) return;
  b.textContent = texte;
  b.hidden = false;
  window.clearTimeout(minuterie);
  minuterie = window.setTimeout(() => { b.hidden = true; }, 8000);
}

const dansUnChamp = (e: KeyboardEvent) => {
  const t = e.target as HTMLElement | null;
  return !!t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName));
};

// 1. Code Konami : mode « phosphore » (un vieux terminal vert).
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let pos = 0;
// 2. Taper « sudo » sur la page.
let tape = '';

function basculerPhosphore(actif?: boolean) {
  const html = document.documentElement;
  const on = actif ?? !html.hasAttribute('data-phosphore');
  if (on) html.setAttribute('data-phosphore', ''); else html.removeAttribute('data-phosphore');
  try { if (on) sessionStorage.setItem('rouages-phosphore', '1'); else sessionStorage.removeItem('rouages-phosphore'); } catch { /* stockage indisponible */ }
  clin(on
    ? 'Mode phosphore activé : bienvenue en 1983. Échap ou le même code pour revenir.'
    : 'Retour au XXIᵉ siècle.');
}

document.addEventListener('keydown', (e) => {
  if (dansUnChamp(e) || e.ctrlKey || e.metaKey || e.altKey) return;
  const touche = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  pos = touche === KONAMI[pos] ? pos + 1 : touche === KONAMI[0] ? 1 : 0;
  if (pos === KONAMI.length) { pos = 0; basculerPhosphore(); return; }
  if (e.key === 'Escape' && document.documentElement.hasAttribute('data-phosphore')) { basculerPhosphore(false); return; }
  if (e.key.length === 1) {
    tape = (tape + e.key.toLowerCase()).slice(-4);
    if (tape === 'sudo') {
      tape = '';
      clin('[sudo] Mot de passe de visiteur·se : … visiteur·se n’est pas dans le fichier sudoers. (Promis, on ne le dira à personne.)');
    }
  }
});

try { if (sessionStorage.getItem('rouages-phosphore')) document.documentElement.setAttribute('data-phosphore', ''); } catch { /* rien */ }

// 3. Trois clics sur un rouage (le logo, ou ceux de la scène d'accueil) : ils
// s'emballent. Le logo est un lien vers l'accueil : sur l'accueil, il ne
// recharge plus la page ; ailleurs, le premier clic y ramène et le compte est
// gardé quelques secondes (sessionStorage), pour que les clics suivants comptent.
const SECRET_RFC = 'Rouage secret débloqué ☕ Le 1ᵉʳ avril 1998, la RFC 2324 décrit un protocole pour piloter des cafetières par internet. Une théière à qui l’on demande du café doit répondre « 418 I’m a teapot ».';
const CLE_CLICS = 'rouages-clics';
const lireClics = () => {
  try {
    const [n, t] = (sessionStorage.getItem(CLE_CLICS) ?? '0|0').split('|').map(Number);
    return Date.now() - t < 6000 ? n : 0;
  } catch { return 0; }
};
const ecrireClics = (n: number) => { try { sessionStorage.setItem(CLE_CLICS, `${n}|${Date.now()}`); } catch { /* rien */ } };
let clicsRouage = lireClics();

function emballer(el: Element | null) {
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  el.classList.remove('emballe');
  void (el as HTMLElement).getBoundingClientRect(); // relance l'animation
  el.classList.add('emballe');
}
function clicRouage() {
  clicsRouage += 1;
  ecrireClics(clicsRouage);
  emballer(document.querySelector('[data-logo]'));
  emballer(document.querySelector('[data-rouages-secrets]'));
  if (clicsRouage >= 3) {
    clicsRouage = 0;
    ecrireClics(0);
    clin(SECRET_RFC);
  }
}
document.querySelectorAll<HTMLElement>('[data-rouages-secrets]').forEach((scene) => scene.addEventListener('click', clicRouage));
document.querySelectorAll<HTMLAnchorElement>('[data-logo]').forEach((logo) => logo.addEventListener('click', (e) => {
  if (location.pathname === '/') {
    e.preventDefault(); // déjà sur l'accueil : pas de rechargement
    clicRouage();
  } else {
    ecrireClics(clicsRouage + 1); // compté, puis la page d'accueil s'ouvre
  }
}));

// 6. Pour les curieux·ses qui ouvrent la console.
console.info(
  '%c⚙ Les rouages du net %c\nTu lis la console ? Tu es des nôtres.\nEssaie ↑ ↑ ↓ ↓ ← → ← → B A sur n’importe quelle page.',
  'font: 700 16px sans-serif',
  'font: 13px monospace',
);
