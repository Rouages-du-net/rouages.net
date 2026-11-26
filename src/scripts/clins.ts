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

// 3. Les rouages de l'accueil : trois clics et ils s'emballent.
document.querySelectorAll<HTMLElement>('[data-rouages-secrets]').forEach((scene) => {
  let clics = 0;
  scene.addEventListener('click', () => {
    clics += 1;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scene.classList.remove('emballe');
      void scene.getBoundingClientRect(); // relance l'animation
      scene.classList.add('emballe');
    }
    if (clics === 3) {
      clics = 0;
      clin('Rouage secret débloqué ☕ Le 1ᵉʳ avril 1998, la RFC 2324 décrit un protocole pour piloter des cafetières par internet. Une théière à qui l’on demande du café doit répondre « 418 I’m a teapot ».');
    }
  });
});

// 6. Pour les curieux·ses qui ouvrent la console.
console.info(
  '%c⚙ Les rouages du net %c\nTu lis la console ? Tu es des nôtres.\nEssaie ↑ ↑ ↓ ↓ ← → ← → B A sur n’importe quelle page.',
  'font: 700 16px sans-serif',
  'font: 13px monospace',
);
