// Lecture « un écran par étape » d'un module.
//
// Les écrans sont les <Etape> (.etape) et les sections marquées [data-ecran]
// (bilan, sources). En mode « ecrans », seul l'écran courant est affiché, avec
// des liens Précédent / Suivant en bas ; l'ancre de l'URL (#transistor…) dit
// quel écran montrer, donc les liens internes, la frise et le bouton Retour du
// navigateur fonctionnent. En mode « continu », tout est sur une seule page.
//
// Sans JavaScript, data-lecture n'est jamais posé : lecture continue.
// Le mode est posé tôt sur <html> par un script du <head> (Base.astro), pour
// éviter d'afficher toute la page puis de la replier.

export type ModeLecture = 'ecrans' | 'continu';
export const CLE_LECTURE = 'rouages-lecture';

const html = document.documentElement;
const reduit = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function modeLecture(): ModeLecture {
  return html.dataset.lecture === 'continu' ? 'continu' : 'ecrans';
}

export function initialiserEcrans(): (mode: ModeLecture) => void {
  const ecrans = [...document.querySelectorAll<HTMLElement>('.etape, [data-ecran]')];
  if (ecrans.length < 2) return () => {};
  let courant = 0;

  const titreDe = (e: HTMLElement) => {
    const h = e.querySelector<HTMLElement>('h2');
    const n = e.dataset.etape;
    const texte = (h?.textContent ?? '').replace(/^Étape \d+ : /, '').trim();
    return { h, texte, n };
  };

  // Liens Précédent / Suivant, créés ici : sans JavaScript, ils n'existent pas.
  ecrans.forEach((e, i) => {
    e.classList.add('ecran');
    const nav = document.createElement('nav');
    nav.className = 'ecran-nav';
    nav.setAttribute('aria-label', 'Changer d’étape');
    const lien = (j: number, classe: string, sens: string) => {
      const cible = ecrans[j];
      const { texte, n } = titreDe(cible);
      const a = document.createElement('a');
      a.href = `#${cible.id}`;
      a.className = classe;
      const s = document.createElement('span');
      s.className = 'sens';
      s.textContent = sens;
      const t = document.createElement('span');
      t.className = 'titre';
      t.textContent = n !== undefined ? `${n} · ${texte}` : texte;
      a.append(s, t);
      nav.append(a);
    };
    if (i > 0) lien(i - 1, 'precedent', '← Étape précédente');
    if (i < ecrans.length - 1) lien(i + 1, 'suivant', 'Étape suivante →');
    e.append(nav);
  });

  const indexDe = (id: string) => {
    if (!id) return 0;
    const i = ecrans.findIndex((e) => e.id === id);
    if (i >= 0) return i;
    // Ancre placée à l'intérieur d'un écran (un tableau, un titre…).
    const el = document.getElementById(id);
    const parent = el?.closest<HTMLElement>('.ecran');
    return parent ? ecrans.indexOf(parent) : 0;
  };

  const montrer = (i: number, deplacer: boolean) => {
    courant = i;
    ecrans.forEach((e, j) => e.classList.toggle('ecran-actif', j === i));
    html.dataset.ecranCourant = String(i);
    document.dispatchEvent(new CustomEvent('rouages:ecran', { detail: ecrans[i].id }));
    if (!deplacer || modeLecture() !== 'ecrans') return;
    // Au premier écran, on remonte en haut de la page (titre, niveau) ;
    // sinon, au début de l'étape, sous la frise.
    if (i === 0) window.scrollTo({ top: 0, behavior: reduit() ? 'auto' : 'smooth' });
    else ecrans[i].scrollIntoView({ block: 'start', behavior: reduit() ? 'auto' : 'smooth' });
    // Les lecteurs d'écran annoncent le titre de la nouvelle étape.
    const h = titreDe(ecrans[i]).h;
    if (h) {
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    }
  };

  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    // En lecture continue, le navigateur fait défiler tout seul.
    montrer(indexDe(id), true);
  });

  montrer(indexDe(location.hash.slice(1)), false);
  if (location.hash && courant > 0) ecrans[courant].scrollIntoView({ block: 'start' });

  // Changement de mode : on garde l'étape en cours sous les yeux.
  return (mode: ModeLecture) => {
    html.dataset.lecture = mode;
    try {
      localStorage.setItem(CLE_LECTURE, mode);
    } catch {}
    montrer(courant, false);
    if (courant > 0) ecrans[courant].scrollIntoView({ block: 'start' });
  };
}
