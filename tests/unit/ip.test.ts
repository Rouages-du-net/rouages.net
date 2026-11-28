import { describe, expect, it } from 'vitest';
import {
  decouper, ecrireCourt, ecrireIPv4, lireIPv4, lireIPv6, masque, nature, planVLSM, prefixe, prefixePour, reseau,
} from '../../src/lib/ip';
import { exercice, juste } from '../../src/lib/exercices-ip';

const ip = (s: string) => lireIPv4(s)!;

describe('IPv4 et masques', () => {
  it('lit et écrit une adresse', () => {
    expect(ecrireIPv4(ip('192.0.2.17'))).toBe('192.0.2.17');
    expect(lireIPv4('256.1.1.1')).toBeNull();
    expect(lireIPv4('1.2.3')).toBeNull();
  });
  it('passe du préfixe au masque et inversement', () => {
    expect(ecrireIPv4(masque(17))).toBe('255.255.128.0');
    expect(ecrireIPv4(masque(0))).toBe('0.0.0.0');
    expect(ecrireIPv4(masque(32))).toBe('255.255.255.255');
    for (let p = 0; p <= 32; p++) expect(prefixe(masque(p))).toBe(p);
    expect(prefixe(ip('255.0.255.0'))).toBeNull();
  });
  it('calcule réseau, diffusion et machines', () => {
    const r = reseau(ip('198.51.100.77'), 26);
    expect([ecrireIPv4(r.reseau), ecrireIPv4(r.diffusion), r.hotes]).toEqual(['198.51.100.64', '198.51.100.127', 62]);
    expect(reseau(ip('203.0.113.9'), 31).hotes).toBe(2); // RFC 3021
    expect(reseau(ip('203.0.113.9'), 32).hotes).toBe(1);
  });
  it('reconnaît les plages privées et de documentation', () => {
    expect(nature(ip('172.31.0.1'))).toMatch(/privée/);
    expect(nature(ip('172.32.0.1'))).toBeNull();
    expect(nature(ip('203.0.113.5'))).toMatch(/documentation/);
  });
  it('ne présente pas les plages spéciales comme publiques (RFC 6890, 6598, 5771)', () => {
    expect(nature(ip('127.0.0.1'))).toMatch(/bouclage/);
    expect(nature(ip('169.254.10.1'))).toMatch(/lien local/);
    expect(nature(ip('100.64.0.1'))).toMatch(/partagé/);
    expect(nature(ip('100.128.0.1'))).toBeNull();
    expect(nature(ip('0.1.2.3'))).toMatch(/ce réseau/);
    expect(nature(ip('224.0.0.251'))).toMatch(/multidiffusion/);
    expect(nature(ip('239.255.255.255'))).toMatch(/multidiffusion/);
    expect(nature(ip('240.0.0.1'))).toMatch(/réservée/);
    expect(nature(ip('255.255.255.255'))).toMatch(/diffusion limitée/);
    expect(nature(ip('8.8.8.8'))).toBeNull();
  });
});

describe('IPv6 (exemples de la RFC 5952)', () => {
  const court = (s: string) => ecrireCourt(lireIPv6(s)!);
  it('applique les règles d’écriture', () => {
    expect(court('2001:0db8::0001')).toBe('2001:db8::1');
    expect(court('2001:db8:0:0:0:0:2:1')).toBe('2001:db8::2:1');
    expect(court('2001:db8:0:1:1:1:1:1')).toBe('2001:db8:0:1:1:1:1:1');
    expect(court('2001:0:0:1:0:0:0:1')).toBe('2001:0:0:1::1');
    expect(court('2001:db8:0:0:1:0:0:1')).toBe('2001:db8::1:0:0:1');
    expect(court('2001:DB8::ABCD')).toBe('2001:db8::abcd');
    expect(court('::')).toBe('::');
  });
  it('refuse les adresses invalides', () => {
    expect(lireIPv6('1::2::3')).toBeNull();
    expect(lireIPv6('1:2:3:4:5:6:7:8:9')).toBeNull();
    expect(lireIPv6('1:2:3:4:5:6:7::8')).toBeNull();
  });
});

describe('sous-réseaux', () => {
  it('découpe en parts égales', () => {
    const d = decouper(ip('192.0.2.0'), 24, 26);
    expect(d.total).toBe(4);
    expect(d.liste.map((s) => ecrireIPv4(s.reseau))).toEqual(['192.0.2.0', '192.0.2.64', '192.0.2.128', '192.0.2.192']);
  });
  it('choisit le plus petit préfixe suffisant', () => {
    expect([prefixePour(50), prefixePour(62), prefixePour(63), prefixePour(2), prefixePour(2, true)]).toEqual([26, 26, 25, 30, 31]);
  });
  it('fait un plan VLSM aligné, du plus grand au plus petit', () => {
    const plan = planVLSM(ip('192.0.2.0'), 24, [
      { nom: 'Admin', machines: 20 }, { nom: 'Wi-Fi', machines: 100 },
      { nom: 'Liaison', machines: 2, liaison: true }, { nom: 'Salle', machines: 50 },
    ]);
    expect(plan.attributions.map((a) => `${ecrireIPv4(a.reseau)}/${a.prefixe}`)).toEqual(['192.0.2.0/25', '192.0.2.128/26', '192.0.2.192/27', '192.0.2.224/31']);
    for (const a of plan.attributions) expect(a.reseau % a.adresses).toBe(0);
    expect(planVLSM(ip('192.0.2.0'), 24, [{ nom: 'A', machines: 200 }, { nom: 'B', machines: 100 }]).manque?.nom).toBe('B');
    // Une liaison (/31) et un réseau d'une machine (/30) : le /30 d'abord, sans trou.
    const sansTrou = planVLSM(ip('192.0.2.0'), 29, [{ nom: 'L', machines: 2, liaison: true }, { nom: 'M', machines: 1 }]);
    expect(sansTrou.attributions.map((a) => `${a.besoin.nom}/${a.prefixe}`)).toEqual(['M/30', 'L/31']);
    expect(sansTrou.reste).toBe(2);
  });
});

describe('exercices corrigés', () => {
  it('sont reproductibles et restent dans les plages autorisées', () => {
    const doc = ['192.0.2.0', '198.51.100.0', '203.0.113.0'].map(ip);
    for (let g = 1; g <= 2000; g++) {
      const e = exercice(g);
      expect(exercice(g)).toEqual(e);
      for (const m of e.enonce.matchAll(/\d+\.\d+\.\d+\.\d+/g)) {
        const a = ip(m[0]);
        expect(doc.some((d) => (a & masque(24)) >>> 0 === d) || a >>> 24 === 10).toBe(true);
      }
      expect(juste(e.reponse, e.reponse)).toBe(true);
    }
  });
  it('donnent le même exercice pour un numéro, que le type soit imposé ou tiré', () => {
    for (let g = 1; g <= 500; g++) {
      const e = exercice(g);
      const type = ({ 'Adresse du réseau': 'reseau', 'Adresse de diffusion': 'diffusion', 'Nombre de machines': 'machines',
        'Masque en décimal': 'masque', 'Préfixe pour N machines': 'prefixe', 'Même réseau ?': 'meme' } as const)[e.type as 'Adresse du réseau'];
      expect(exercice(g, type)).toEqual(e);
    }
  });
  it('évitent les cas déroutants (adresse comparée à elle-même, adresse de réseau ou de diffusion)', () => {
    for (let g = 1; g <= 3000; g++) {
      for (const t of ['reseau', 'diffusion', 'meme'] as const) {
        const e = exercice(g, t);
        const p = Number(e.enonce.match(/\/(\d+)/)![1]);
        const adresses = [...e.enonce.matchAll(/\d+\.\d+\.\d+\.\d+/g)].map((m) => ip(m[0]));
        for (const a of adresses) {
          const r = reseau(a, p);
          expect(a === r.reseau || a === r.diffusion).toBe(false);
        }
        if (t === 'meme') expect(adresses[0]).not.toBe(adresses[1]);
      }
    }
  });
  it('acceptent les variantes d’écriture', () => {
    expect(juste(' /26', '/26')).toBe(true);
    expect(juste('26', '/26')).toBe(true);
    expect(juste('Oui', 'oui')).toBe(true);
    expect(juste('255.255.255.1', '255.255.255.0')).toBe(false);
  });
});
