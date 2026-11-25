// Fiches institutions et carte des rapports de force (« Qui décide »).
// Faits sourcés : docs/sources/institutions.md (et, pour les faits déjà
// vérifiés, docs/sources/gouvernance-technique.md et etats-regulation.md).
// Seuls les faits lus dans une source sont repris ; ce qui bouge vite porte
// un « état au ».

export type Famille = 'technique' | 'noms' | 'web' | 'onu' | 'europe' | 'france';
export type TypeSource = 'primaire' | 'recherche' | 'presse' | 'wikipedia' | 'site';

export interface SourceFiche {
  auteur: string;
  titre: string;
  url: string;
  type: TypeSource;
  annee?: number;
  langue?: string;
}

export interface Fiche {
  slug: string;
  sigle: string;
  nom: string;
  famille: Famille;
  /** Une phrase : ce que c'est, pour la liste. */
  resume: string;
  nature: string;
  creation: string;
  siege?: string;
  decide: string[];
  finance: string[];
  fait: string[];
  pouvoirs: string;
  controverses?: string[];
  personnes?: string;
  /** Encart « état au » pour ce qui bouge vite. */
  etat?: string;
  module?: { titre: string; lien: string };
  sources: SourceFiche[];
}

export const FAMILLES: Record<Famille, { nom: string; aide: string }> = {
  technique: { nom: 'Communauté technique', aide: 'Elle écrit les protocoles d’internet.' },
  noms: { nom: 'Noms et adresses', aide: 'Elle distribue les noms de domaine et les adresses IP.' },
  web: { nom: 'Web', aide: 'Elle écrit les normes du web.' },
  onu: { nom: 'Nations unies', aide: 'Les États, entre eux.' },
  europe: { nom: 'Union européenne', aide: 'Règles et contrôle à l’échelle de l’Union.' },
  france: { nom: 'France', aide: 'Autorités et organismes français.' },
};

export const VERIFIE = '2026-11-24';

const BYLAWS: SourceFiche = { auteur: 'ICANN', titre: 'Statuts de l’ICANN (Bylaws)', url: 'https://www.icann.org/resources/pages/governance/bylaws-en', type: 'primaire', annee: 2026, langue: 'en' };
const BUDGET_ICANN: SourceFiche = { auteur: 'ICANN', titre: 'Budget adopté, exercice 2027', url: 'https://www.icann.org/en/system/files/files/adopted-icann-budget-fy2027-published-2026-en.pdf', type: 'primaire', annee: 2026, langue: 'en' };
const RFC8711: SourceFiche = { auteur: 'IETF', titre: 'RFC 8711 : structure de l’IETF Administration LLC', url: 'https://www.rfc-editor.org/rfc/rfc8711', type: 'primaire', annee: 2020, langue: 'en' };
const RFC8713: SourceFiche = { auteur: 'IETF', titre: 'RFC 8713 : le comité de nomination (NomCom)', url: 'https://www.rfc-editor.org/rfc/rfc8713', type: 'primaire', annee: 2020, langue: 'en' };
const RFC2860: SourceFiche = { auteur: 'IAB, IETF, ICANN', titre: 'RFC 2860 : protocole d’accord sur les fonctions IANA', url: 'https://www.rfc-editor.org/rfc/rfc2860', type: 'primaire', annee: 2000, langue: 'en' };
const ISOC_2025: SourceFiche = { auteur: 'Internet Society', titre: 'Rapport annuel 2025', url: 'https://www.internetsociety.org/wp-content/uploads/2026/03/2025-Annual-Report_EN.pdf', type: 'primaire', annee: 2026, langue: 'en' };
const RGPD: SourceFiche = { auteur: 'Union européenne', titre: 'Règlement (UE) 2016/679 (RGPD), articles 68 à 76', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679', type: 'primaire', annee: 2016, langue: 'fr' };
const NRO: SourceFiche = { auteur: 'NRO', titre: 'About the NRO', url: 'https://www.nro.net/about/', type: 'primaire', annee: 2026, langue: 'en' };
const GOUV = { titre: 'Gouvernance technique', lien: '/modules/gouvernance-technique/' };
const ETATS = { titre: 'États et régulation', lien: '/modules/etats-regulation/' };

export const FICHES: Fiche[] = [
  {
    slug: 'ietf', sigle: 'IETF', nom: 'Internet Engineering Task Force', famille: 'technique',
    resume: 'La communauté ouverte qui écrit les protocoles d’internet (TCP, TLS, QUIC, HTTP…), sous forme de RFC.',
    nature: 'Communauté sans personnalité juridique et sans membres : « il n’y a pas d’adhésion ». Son cadre juridique est une société, l’IETF Administration LLC, créée en 2018.',
    creation: 'Janvier 1986, à San Diego (États-Unis), avec 21 participant·es.',
    decide: [
      'Des groupes de travail ouverts à toute personne, qui décident par « consensus approximatif », sans vote.',
      'L’IESG (les directeur·rices de domaine) approuve les documents ; l’IAB veille à l’architecture d’ensemble.',
      'Un comité de nomination de volontaires tirés au sort choisit les membres de l’IESG et de l’IAB. L’IAB confirme ceux de l’IESG ; le conseil de l’Internet Society confirme ceux de l’IAB.',
    ],
    finance: [
      'Budget 2026 de l’IETF LLC : environ 14 millions de dollars de recettes, dont 4,6 millions issus des réunions.',
      'Premier financeur : l’Internet Society, engagée pour 47,1 millions de dollars de 2024 à 2029. S’y ajoutent une subvention de l’ICANN et des dons (1 million de dollars d’ARIN en 2025).',
    ],
    fait: [
      'Publie les RFC : environ 8 900 à ce jour, dont TLS 1.3, QUIC, HTTP.',
      'Trois réunions par an, ouvertes à qui paie l’inscription, et des listes de diffusion ouvertes à tous.',
      'Dit à l’IANA comment tenir les registres de protocoles (numéros de ports, codes…).',
    ],
    pouvoirs: 'Aucun pouvoir contraignant : ses normes sont volontaires (« l’IETF ne contrôle en rien internet, ni même ne le surveille »). Leur force vient de ce que tout le monde les applique.',
    controverses: [
      'Participation dominée par l’Amérique du Nord, l’Europe, la Chine et quelques grandes entreprises, en anglais seulement. Réponse de l’IETF : chacun·e participe à titre personnel, et le consensus ne se compte pas en voix.',
    ],
    personnes: 'Alissa Cooper, présidente de l’IETF de 2017 à 2021 ; Lixia Zhang, membre de l’IAB.',
    module: GOUV,
    sources: [
      { auteur: 'IETF', titre: 'Introduction to the IETF', url: 'https://www.ietf.org/about/introduction/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'IETF', titre: 'RFC 4677 : The Tao of IETF', url: 'https://www.rfc-editor.org/rfc/rfc4677', type: 'primaire', annee: 2006, langue: 'en' },
      RFC8711, RFC8713, RFC2860,
      { auteur: 'IETF LLC', titre: 'Budget 2026 de l’IETF Administration LLC', url: 'https://www.ietf.org/blog/ietf-administration-llc-2026-budget/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'IETF', titre: 'ISOC extends financial support to 2029', url: 'https://www.ietf.org/blog/isoc-extends-financial-support-to-2029/', type: 'primaire', annee: 2024, langue: 'en' },
    ],
  },
  {
    slug: 'isoc', sigle: 'ISOC', nom: 'Internet Society', famille: 'technique',
    resume: 'Association internationale qui finance l’IETF, grâce au registre du .org, et défend un internet ouvert.',
    nature: 'Association à but non lucratif, constituée à Washington (États-Unis).',
    creation: '1992 (premier conseil d’administration à Kobe, au Japon).',
    decide: [
      'Un conseil d’administration de 14 membres, élus ou nommés par les sections locales, les organisations membres et l’IETF ; il peut en coopter.',
      'En 2025, ses administrateur·rices venaient notamment du Nigeria, du Bénin, des îles Cook, de Hong Kong, du Sri Lanka, des États-Unis et du Portugal.',
      '156 880 membres individuels, 124 sections locales et 79 organisations membres (2025).',
    ],
    finance: [
      '66 millions de dollars de recettes en 2025, dont 58 millions versés par PIR, la société qui gère le registre du .org et qui appartient à l’ISOC.',
    ],
    fait: [
      'Verse 7,3 millions de dollars à l’IETF (2025).',
      'Accorde des bourses (7,28 millions de dollars en 2025) et finance les forums nationaux et régionaux sur la gouvernance d’internet (2 millions de dollars).',
      'Mesure les coupures d’internet dans le monde (Internet Society Pulse).',
    ],
    pouvoirs: 'Aucun pouvoir sur les normes, mais un pouvoir financier (premier financeur de l’IETF) et de confirmation : son conseil confirme les membres de l’IAB et nomme un administrateur de l’IETF LLC.',
    controverses: [
      'En novembre 2019, l’ISOC annonce la vente de PIR, donc du .org, au fonds d’investissement Ethos Capital. Le 30 avril 2020, l’ICANN refuse son accord : elle invoque la perte de la nature « d’intérêt public » de PIR et une dette de 360 millions de dollars. La vente est abandonnée.',
    ],
    personnes: 'Sally Wentworth, présidente-directrice générale.',
    module: GOUV,
    sources: [
      ISOC_2025,
      { auteur: 'Internet Society', titre: 'Board of Trustees', url: 'https://www.internetsociety.org/board-of-trustees/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'Internet Society', titre: 'History', url: 'https://www.internetsociety.org/history/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'ICANN', titre: 'ICANN Board withholds consent for a change of control of PIR', url: 'https://www.icann.org/en/blogs/details/icann-board-withholds-consent-for-a-change-of-control-of-the-public-interest-registry-pir-30-4-2020-en', type: 'primaire', annee: 2020, langue: 'en' },
      RFC8711, RFC8713,
    ],
  },
  {
    slug: 'iana', sigle: 'IANA / PTI', nom: 'Internet Assigned Numbers Authority (Public Technical Identifiers)', famille: 'noms',
    resume: 'Le « greffier » d’internet : la racine du DNS, les grands blocs d’adresses IP et les registres de protocoles.',
    nature: 'Les fonctions IANA sont exercées par PTI, une société à but non lucratif de droit californien dont l’ICANN est l’unique membre.',
    creation: 'Registres tenus par Jon Postel dès 1972 ; PTI est créée en 2016, quand le gouvernement américain cesse de superviser ces fonctions.',
    siege: 'Los Angeles (États-Unis), avec l’ICANN.',
    decide: [
      'Le conseil de PTI est élu par l’ICANN.',
      'Trois « clients » fixent les règles : la communauté des noms (par l’ICANN), les cinq registres régionaux (par un accord de service) et l’IETF (par la RFC 2860).',
    ],
    finance: ['Financée par l’ICANN : 11,5 millions de dollars pour l’exercice 2026-2027.'],
    fait: [
      'Vérifie et transmet les changements de la zone racine du DNS.',
      'Distribue les grands blocs d’adresses IP aux registres régionaux.',
      'Tient les registres de protocoles (ports, codes…) selon les RFC, et organise les cérémonies des clés DNSSEC de la racine.',
    ],
    pouvoirs: 'Un rôle d’exécution : elle applique des règles écrites par d’autres. Mais tout passe par elle.',
    controverses: ['Malgré la transition de 2016, l’IANA reste une société de droit californien, donc soumise au droit américain : un reproche fait par plusieurs États.'],
    personnes: 'Joyce K. Reynolds, qui a tenu les registres avec Jon Postel ; Elise Gerich, vice-présidente de l’IANA à l’ICANN à partir de 2010.',
    module: GOUV,
    sources: [
      { auteur: 'IANA', titre: 'About us', url: 'https://www.iana.org/about', type: 'primaire', annee: 2026, langue: 'en' },
      BYLAWS, BUDGET_ICANN, RFC2860,
      { auteur: 'ICANN', titre: 'Stewardship of IANA functions transitions to global internet community (1er octobre 2016)', url: 'https://www.icann.org/en/announcements/details/stewardship-of-iana-functions-transitions-to-global-internet-community-as-contract-with-us-government-ends-1-10-2016-en', type: 'primaire', annee: 2016, langue: 'en' },
    ],
  },
  {
    slug: 'icann', sigle: 'ICANN', nom: 'Internet Corporation for Assigned Names and Numbers', famille: 'noms',
    resume: 'Coordonne les noms de domaine : la racine du DNS, les extensions (.com, .org…) et les contrats des registres.',
    nature: 'Association à but non lucratif de droit californien.',
    creation: '1998.',
    siege: 'Comté de Los Angeles (États-Unis).',
    decide: [
      'Un conseil de 16 membres votants : 8 choisis par un comité de nomination, 2 par les registres d’adresses (ASO), 2 par les extensions nationales (ccNSO), 2 par les extensions génériques (GNSO), 1 par les utilisateur·rices (At-Large), plus le ou la PDG.',
      'Une « communauté habilitée » (ASO, ccNSO, GNSO, utilisateur·rices et comité des gouvernements) peut révoquer le conseil et rejeter le budget.',
      'Le comité des gouvernements (GAC, 184 membres) donne des avis : le conseil ne peut rejeter un avis de consensus qu’à 60 % des voix.',
      'Quatre agents de liaison sans droit de vote : gouvernements, opérateurs des serveurs racine, sécurité, IETF.',
    ],
    finance: [
      'Exercice 2026-2027 : 165 millions de dollars de recettes, surtout des redevances sur chaque nom de domaine en extension générique (116,8 millions), des forfaits des registres et des accréditations des 3 180 bureaux d’enregistrement.',
      'Contributions volontaires : 2,1 millions de dollars des extensions nationales, 0,8 million des registres d’adresses.',
    ],
    fait: [
      'Signe les contrats des registres et des bureaux d’enregistrement des extensions génériques.',
      'Ouvre des cycles de nouvelles extensions (2012, 2026).',
      'Contrôle PTI, qui exerce les fonctions IANA, et exploite le serveur racine L.',
    ],
    pouvoirs: 'Des pouvoirs contractuels sur les extensions génériques. Aucun pouvoir sur les adresses IP (règles des registres régionaux), ni sur les contenus. En 2022, elle a refusé de couper les extensions russes comme le demandait l’Ukraine.',
    controverses: [
      'La juridiction américaine, et le long contrôle du gouvernement des États-Unis, jusqu’en 2016.',
      'Les extensions .amazon et .africa : entreprises, États et communautés s’y sont opposés.',
    ],
    etat: 'Le 22 octobre 2026, Tripti Sinha est réélue présidente du conseil ; Kurtis Lindqvist est le PDG.',
    personnes: 'Esther Dyson, première présidente du conseil (1998) ; Tripti Sinha ; Nii Quaynor (Ghana), qui a aussi présidé le premier conseil d’AFRINIC.',
    module: GOUV,
    sources: [
      BYLAWS, BUDGET_ICANN,
      { auteur: 'ICANN', titre: 'History of ICANN', url: 'https://www.icann.org/history', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'ICANN', titre: 'Résolutions du conseil, 22 octobre 2026', url: 'https://www.icann.org/en/board-activities-and-meetings/materials/approved-resolutions-organizational-meeting-of-the-icann-board-22-10-2026-en', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'GAC', titre: 'About the GAC', url: 'https://gac.icann.org/about', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'ICANN', titre: 'ICANN Board withholds consent for a change of control of PIR', url: 'https://www.icann.org/en/blogs/details/icann-board-withholds-consent-for-a-change-of-control-of-the-public-interest-registry-pir-30-4-2020-en', type: 'primaire', annee: 2020, langue: 'en' },
    ],
  },
  {
    slug: 'rir', sigle: 'RIR', nom: 'Les cinq registres Internet régionaux (et la NRO)', famille: 'noms',
    resume: 'RIPE NCC, APNIC, ARIN, LACNIC et AFRINIC distribuent les adresses IP de leur région.',
    nature: 'Cinq organisations à but non lucratif, une par région, financées par leurs membres (opérateurs, hébergeurs, entreprises). La NRO les coordonne.',
    creation: 'RIPE NCC (1992, Amsterdam), APNIC (1993, à Tokyo, aujourd’hui à Brisbane), ARIN (1997, Virginie), LACNIC (2002, Montevideo), AFRINIC (2005, Ébène, Maurice). La NRO naît en 2003.',
    decide: [
      'Les règles d’attribution sont écrites par des communautés ouvertes, par consensus ; chaque registre a une assemblée de membres et un conseil élu.',
      'La NRO a un conseil exécutif d’une personne par registre ; elle remplit le rôle de l’ASO à l’ICANN, qui choisit deux sièges de son conseil.',
    ],
    finance: [
      'Cotisations des membres. Exemples : APNIC, 34,2 millions de dollars australiens de recettes en 2025, avec une réduction de 50 % pour les pays les moins avancés ; ARIN, 21,3 millions de dollars de janvier à août 2026.',
    ],
    fait: [
      'Enregistrent qui détient quelles adresses IPv4 et IPv6 et quels numéros de réseau (AS).',
      'Signent les attributions (RPKI) pour limiter les détournements de routes.',
      'Le RIPE NCC exploite le serveur racine K et le réseau de mesure RIPE Atlas.',
    ],
    pouvoirs: 'Le registre fait foi : un registre peut reprendre des adresses selon ses contrats. En 2022, le RIPE NCC a refusé de retirer des adresses à la Russie.',
    controverses: [
      'AFRINIC est sous administration judiciaire à Maurice depuis 2023, après un conflit avec Cloud Innovation, une société qui louait hors d’Afrique des adresses africaines. AFRINIC dénonce une guerre judiciaire destinée à le paralyser, soutenue en cela par l’ICANN et les autres registres ; Cloud Innovation affirme avoir obtenu ses adresses légitimement et réclame des procédures régulières ; des voix africaines s’inquiètent aussi de l’influence de quelques États sur le nouveau conseil.',
    ],
    etat: 'État au 24 novembre 2026 : AFRINIC a un conseil élu en septembre 2025 (élection contestée en justice), un PDG désigné, Mike Silber, en poste au 1ᵉʳ janvier 2027, et une demande de liquidation toujours pendante ; l’ICANN est autorisée à intervenir dans la procédure.',
    personnes: 'Anne Lord et Mirjam Kühne (RIPE NCC) ; Ida Holz (LACNIC) ; Nii Quaynor et Fiona Asonga (AFRINIC).',
    module: GOUV,
    sources: [
      NRO,
      { auteur: 'NRO', titre: 'Les registres régionaux', url: 'https://www.nro.net/about/rirs/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'ICANN ASO', titre: 'The ASO and the NRO', url: 'https://aso.icann.org/about/aso-and-nro/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'APNIC', titre: 'Rapport annuel 2025', url: 'https://www.apnic.net/wp-content/uploads/2026/02/Annual_Report_2025.pdf', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'ARIN', titre: 'Rapport financier, ARIN 58', url: 'https://www.arin.net/participate/meetings/ARIN58/materials/ARIN58_financialreport.pdf', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'AFRINIC', titre: 'Appointment of Mr Mike Silber as CEO-designate', url: 'https://afrinic.net/appointment-of-mr-mike-silber-as-ceo-designate', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'AFRINIC', titre: 'Official statement on the inclusion of Cloud Innovation in the register of members', url: 'https://afrinic.net/afrinic-official-statement-on-the-inclusion-of-cloud-innovation-limited-in-the-register-of-members', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'NRO', titre: 'NRO announcement on AFRINIC', url: 'https://www.nro.net/nro-announcement-on-afrinic/', type: 'primaire', annee: 2024, langue: 'en' },
    ],
  },
  {
    slug: 'w3c', sigle: 'W3C', nom: 'World Wide Web Consortium', famille: 'web',
    resume: 'Le consortium qui écrit les normes du web : CSS, accessibilité (WCAG)…',
    nature: 'Organisation à but non lucratif d’intérêt public depuis janvier 2023 ; auparavant hébergée par le MIT, l’ERCIM, Keio et Beihang.',
    creation: 'Octobre 1994, au MIT, par Tim Berners-Lee.',
    decide: [
      'Les normes passent par des groupes de travail puis par l’avis des membres (un·e représentant·e par membre).',
      'Un conseil d’administration : 7 personnes élues par les membres, 3 nommées par des partenaires (ERCIM en France, Beihang en Chine, un partenaire japonais) et jusqu’à 2 cooptées. Tim Berners-Lee y siège sans droit de vote.',
    ],
    finance: ['Surtout les cotisations de plus de 330 membres (entreprises, universités, administrations) ; une cinquantaine de salarié·es.'],
    fait: ['CSS, les règles d’accessibilité WCAG, et la validation des normes HTML et DOM écrites par le WHATWG.'],
    pouvoirs: 'Non contraignants (« le W3C n’a aucun pouvoir d’interdire quoi que ce soit »), mais des lois rendent les WCAG obligatoires, comme la norme européenne EN 301 549.',
    controverses: ['En 2017, le W3C normalise EME, qui permet aux navigateurs de lire des vidéos protégées (DRM). L’EFF quitte le consortium en protestation ; le W3C répond qu’il valait mieux encadrer ces protections que les laisser hors du web ouvert.'],
    etat: 'En 2026 : Léonie Watson préside le conseil ; après le départ de Seth Dobbs le 28 mai 2026, Dominique Hazaël-Massieux est PDG par intérim.',
    module: GOUV,
    sources: [
      { auteur: 'W3C', titre: 'About W3C', url: 'https://www.w3.org/consortium/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'W3C', titre: 'Board of Directors', url: 'https://www.w3.org/governance/board/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'W3C', titre: 'W3C leadership transition (2026)', url: 'https://www.w3.org/press-releases/2026/w3c-leadership-transition/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'W3C', titre: 'History', url: 'https://www.w3.org/about/history/', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'EFF', titre: 'An open letter to the W3C Director, CEO, team and membership', url: 'https://www.eff.org/deeplinks/2017/09/open-letter-w3c-director-ceo-team-and-membership', type: 'site', annee: 2017, langue: 'en' },
      { auteur: 'W3C', titre: 'On EME in HTML5', url: 'https://www.w3.org/blog/2017/02/on-eme-in-html5/', type: 'primaire', annee: 2017, langue: 'en' },
    ],
  },
  {
    slug: 'whatwg', sigle: 'WHATWG', nom: 'Web Hypertext Application Technology Working Group', famille: 'web',
    resume: 'Le groupe des éditeurs de navigateurs qui écrit HTML et le DOM, normes « vivantes ».',
    nature: 'Groupe de travail lancé par des personnes d’Apple, Mozilla et Opera.',
    creation: '2004.',
    decide: [
      'Chaque norme a ses éditeur·rices ; en cas de désaccord, on fait appel à un comité de pilotage.',
      'Ce comité réunit Apple, Google, Microsoft et Mozilla, les éditeurs de moteurs de navigateur.',
    ],
    finance: ['Non publié : le groupe repose sur les éditeurs de navigateurs.'],
    fait: ['Les normes « vivantes » HTML, DOM, URL, Fetch, mises à jour en continu.'],
    pouvoirs: 'De fait, décisif : ce sont ces entreprises qui programment les navigateurs. Depuis un accord du 28 mai 2019, le W3C valide des instantanés de ses normes.',
    controverses: ['Quatre entreprises tiennent la plume du web. Leur réponse : une norme ne vaut que si les navigateurs l’appliquent, et la discussion reste publique.'],
    module: GOUV,
    sources: [
      { auteur: 'WHATWG', titre: 'FAQ', url: 'https://whatwg.org/faq', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'W3C, WHATWG', titre: 'Memorandum of Understanding (2019)', url: 'https://www.w3.org/2019/04/WHATWG-W3C-MOU.html', type: 'primaire', annee: 2019, langue: 'en' },
    ],
  },
  {
    slug: 'uit', sigle: 'UIT', nom: 'Union internationale des télécommunications', famille: 'onu',
    resume: 'L’agence de l’ONU pour les télécommunications : fréquences radio, satellites, normes télécoms.',
    nature: 'Organisation intergouvernementale, institution spécialisée des Nations unies.',
    creation: '17 mai 1865, à Paris, sous le nom d’Union télégraphique internationale.',
    decide: [
      '194 États membres, qui élisent les dirigeant·es ; plus de 1 000 autres membres : entreprises, universités, organisations.',
      'Une conférence de plénipotentiaires, tous les quatre ans, élit les dirigeant·es.',
    ],
    finance: ['Un budget d’un peu plus de 160 millions de francs suisses par an (2026), payé à 68,4 % par les États, qui choisissent leur niveau de contribution.'],
    fait: [
      'Répartit les fréquences radio et les positions des satellites (UIT-R).',
      'Écrit des normes de télécommunications (UIT-T) et aide les pays à se connecter (UIT-D).',
      'A organisé le Sommet mondial sur la société de l’information (2003-2005).',
    ],
    pouvoirs: 'Certains de ses textes sont des traités, contraignants pour les États qui les ratifient ; ses recommandations techniques sont volontaires.',
    controverses: ['Plusieurs États voudraient lui confier la gouvernance d’internet (conférence de Dubaï en 2012, proposition « New IP » en 2019-2020) ; la communauté technique et d’autres États défendent le modèle multipartite.'],
    etat: 'Le 12 novembre 2026, à Doha, Doreen Bogdan-Martin (États-Unis) est réélue secrétaire générale avec 164 voix sur 173 : selon l’UIT, la première femme à avoir occupé ses deux postes élus. La conférence se termine le 27 novembre 2026.',
    module: GOUV,
    sources: [
      { auteur: 'UIT', titre: 'How is ITU funded?', url: 'https://www.itu.int/en/mediacentre/backgrounders/Pages/how-is-itu-funded.aspx', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'UIT', titre: 'ITU born in 1865', url: 'https://www.itu.int/en/history/Pages/ITUBorn1865.aspx', type: 'primaire', langue: 'en' },
      { auteur: 'UIT', titre: 'Élection de la secrétaire générale (12 novembre 2026)', url: 'https://www.itu.int/en/mediacentre/Pages/PR-2026-11-12-SG-Election.aspx', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'UIT', titre: 'Élection des directeur·rices (13 novembre 2026)', url: 'https://www.itu.int/en/mediacentre/Pages/PR-2026-11-13-Directors-Election.aspx', type: 'primaire', annee: 2026, langue: 'en' },
      { auteur: 'UIT', titre: 'Conférence de plénipotentiaires 2026', url: 'https://pp.itu.int/2026/en/', type: 'primaire', annee: 2026, langue: 'en' },
    ],
  },
  {
    slug: 'fgi', sigle: 'FGI', nom: 'Forum sur la gouvernance de l’internet (ONU)', famille: 'onu',
    resume: 'Un lieu de discussion de l’ONU, ouvert à tous les acteurs, sans pouvoir de décision.',
    nature: 'Forum des Nations unies, multipartite (États, entreprises, société civile, communauté technique).',
    creation: '2005, par l’Agenda de Tunis ; devenu forum permanent de l’ONU par une résolution du 17 décembre 2025.',
    decide: ['Aucune décision : l’Agenda de Tunis lui interdit toute fonction de contrôle. Un groupe consultatif prépare ses réunions, et un comité de personnalités est nommé par le secrétaire général de l’ONU.'],
    finance: ['Contributions volontaires ; la résolution de 2025 demande au secrétaire général une proposition de financement durable. L’ISOC a versé 2 millions de dollars aux forums nationaux et régionaux en 2025.'],
    fait: ['Un forum mondial chaque année, et plus de 170 forums nationaux, régionaux et de jeunes.'],
    pouvoirs: 'Aucun pouvoir contraignant.',
    controverses: ['Pour les uns, sa force est d’être ouvert à tous ; pour d’autres, un forum sans décision laisse le pouvoir aux États et aux entreprises qui décident ailleurs.'],
    etat: 'État au 24 novembre 2026 : le forum 2026 se tient à Nairobi du 14 au 18 décembre.',
    module: GOUV,
    sources: [
      { auteur: 'Assemblée générale des Nations unies', titre: 'Résolution A/RES/80/173 (SMSI+20)', url: 'https://digitallibrary.un.org/record/4097834/files/A_RES_80_173-EN.pdf', type: 'primaire', annee: 2025, langue: 'en' },
      { auteur: 'SMSI', titre: 'Agenda de Tunis pour la société de l’information', url: 'https://www.itu.int/net/wsis/docs2/tunis/off/6rev1.html', type: 'primaire', annee: 2005, langue: 'en' },
      ISOC_2025,
    ],
  },
  {
    slug: 'cepd', sigle: 'CEPD', nom: 'Comité européen de la protection des données', famille: 'europe',
    resume: 'Réunit les CNIL d’Europe et tranche entre elles pour appliquer le RGPD de façon cohérente.',
    nature: 'Organe de l’Union européenne doté de la personnalité juridique, créé par le RGPD.',
    creation: '2018, avec l’entrée en application du RGPD.',
    decide: [
      'Les chef·fes des autorités de protection des données de chaque État (dont la CNIL) et le Contrôleur européen de la protection des données.',
      'La Commission européenne y participe sans droit de vote. Président·e et vice-président·es élu·es pour cinq ans.',
    ],
    finance: ['Son secrétariat est fourni par le Contrôleur européen de la protection des données, sous l’autorité exclusive de la présidence du comité.'],
    fait: ['Lignes directrices sur le RGPD ; avis communs (par exemple contre une partie de l’« omnibus numérique » en 2026) ; décisions en cas de désaccord entre autorités.'],
    pouvoirs: 'Décisions contraignantes pour les autorités nationales en cas de litige entre elles : c’est ainsi que l’amende de 1,2 milliard d’euros contre Meta a été imposée à l’autorité irlandaise.',
    module: ETATS,
    sources: [
      RGPD,
      { auteur: 'DPC (Irlande)', titre: 'Conclusion de l’enquête sur Meta Ireland', url: 'https://www.dataprotection.ie/en/news-media/press-releases/Data-Protection-Commission-announces-conclusion-of-inquiry-into-Meta-Ireland', type: 'primaire', annee: 2023, langue: 'en' },
      { auteur: 'CEPD et CEPD', titre: 'Avis conjoint sur l’omnibus numérique', url: 'https://www.edpb.europa.eu/system/files/2026-02/edpb_edps_jointopinion_202602_digitalomnibus_en.pdf', type: 'primaire', annee: 2026, langue: 'en' },
    ],
  },
  {
    slug: 'cnil', sigle: 'CNIL', nom: 'Commission nationale de l’informatique et des libertés', famille: 'france',
    resume: 'L’autorité française de protection des données personnelles : conseils, contrôles et sanctions.',
    nature: 'Autorité administrative indépendante.',
    creation: 'Loi du 6 janvier 1978, après l’affaire SAFARI, un projet de fichage croisé des Français·es.',
    decide: [
      'Un collège de 18 membres : 6 issus des hautes juridictions, 5 personnalités qualifiées, 4 parlementaires, 2 membres du Conseil économique, social et environnemental, 1 de la Commission d’accès aux documents administratifs.',
      'Une formation restreinte de 5 membres prononce les sanctions.',
      'Présidente : Marie-Laure Denis, conseillère d’État, depuis février 2019.',
    ],
    finance: ['Budget de 30,2 millions d’euros et 303 agents en 2025, payés par l’État. Les amendes vont au budget de l’État, pas à la CNIL.'],
    fait: ['Avis sur les projets de lois et de décrets ; contrôles ; traitement des plaintes ; 83 sanctions en 2025, pour 486,8 millions d’euros, dont 325 millions contre Google et 150 millions contre Shein.'],
    pouvoirs: 'Contraignants : mises en demeure et amendes jusqu’à 4 % du chiffre d’affaires mondial. Mais pour les grandes plateformes installées en Irlande, c’est l’autorité irlandaise qui mène l’enquête (« guichet unique »).',
    controverses: ['Hors Google et Shein, les 81 autres sanctions de 2025 totalisent environ 12 millions d’euros : trop faible pour certains. La CNIL a créé en 2022 une procédure simplifiée pour sanctionner plus vite les petits manquements.'],
    module: ETATS,
    sources: [
      { auteur: 'CNIL', titre: 'Rapport annuel 2025', url: 'https://cnil.fr/sites/default/files/2026-05/rapport_annuel_2025.pdf', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'CNIL', titre: 'Bilan des sanctions 2025', url: 'https://cnil.fr/fr/bilan-sanctions-2025', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'CNIL', titre: 'La loi Informatique et Libertés', url: 'https://www.cnil.fr/fr/la-loi-informatique-et-libertes', type: 'primaire', annee: 2026, langue: 'fr' },
      RGPD,
    ],
  },
  {
    slug: 'arcom', sigle: 'Arcom', nom: 'Autorité de régulation de la communication audiovisuelle et numérique', famille: 'france',
    resume: 'Régule l’audiovisuel et une partie du numérique : piratage, vérification d’âge, blocages administratifs.',
    nature: 'Autorité indépendante née de la fusion du CSA et de l’Hadopi.',
    creation: 'Loi du 25 octobre 2021 ; en place le 1ᵉʳ janvier 2022.',
    decide: ['Un collège de neuf membres nommés par cinq autorités différentes, pour six ans non renouvelables.'],
    finance: ['49,9 millions d’euros et 379 emplois au plus (loi de finances 2025), payés par l’État.'],
    fait: [
      'Fait bloquer les sites « miroirs » de sites déjà condamnés et le piratage des retransmissions sportives.',
      'Impose la vérification de l’âge aux sites pornographiques (loi SREN de 2024).',
      'Désigne la personnalité qualifiée qui contrôle les blocages administratifs demandés par la police (depuis 2022, à la place de la CNIL).',
    ],
    pouvoirs: 'Contraignants : sanctions, demandes de blocage et de déréférencement.',
    controverses: ['La vérification d’âge : l’éditeur Aylo a coupé ses sites en France plutôt que de l’appliquer, et des associations s’inquiètent pour la vie privée ; ses défenseurs y voient la protection des mineur·es. Le blocage DNS, lui, se contourne facilement.'],
    module: ETATS,
    sources: [
      { auteur: 'Sénat', titre: 'Rapport d’information sur l’Arcom (23 octobre 2025)', url: 'https://www.senat.fr/rap/r25-068/r25-068-syn.pdf', type: 'primaire', annee: 2025, langue: 'fr' },
      { auteur: 'Arcom', titre: 'L’Arcom prend acte de la décision du groupe Aylo', url: 'https://www.arcom.fr/presse/larcom-prend-acte-de-la-decision-du-groupe-aylo', type: 'primaire', annee: 2025, langue: 'fr' },
      { auteur: 'Arcom', titre: 'Personnalité qualifiée : rapport d’activité 2024', url: 'https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/qualified-persons-2024-activity-report', type: 'primaire', annee: 2025, langue: 'en' },
    ],
  },
  {
    slug: 'arcep', sigle: 'Arcep', nom: 'Autorité de régulation des communications électroniques, des postes et de la distribution de la presse', famille: 'france',
    resume: 'Le « gendarme » des opérateurs télécoms : réseaux, couverture, neutralité du net.',
    nature: 'Autorité administrative indépendante.',
    creation: '1996, par la loi.',
    decide: [
      'Un collège de 7 membres nommés dans le respect de la parité : 3, dont la présidence, par le président de la République ; 4 par les présidents de l’Assemblée nationale et du Sénat. Mandat de six ans, irrévocable et non renouvelable.',
    ],
    finance: ['Budget de l’État ; près de 185 agents.'],
    fait: ['Régule la concurrence entre opérateurs, la couverture mobile et la fibre ; veille au respect de la neutralité du net.'],
    pouvoirs: 'Réglementation, autorisations, contrôles, règlement des litiges et sanctions.',
    controverses: ['En 2026, le président du Sénat nomme au collège une ancienne dirigeante de SFR, opérateur que l’Arcep régule : le passage du privé au régulateur est un risque de conflit d’intérêts pour les uns, une garantie de connaissance du secteur pour les autres.'],
    etat: 'État au 24 novembre 2026 : le mandat de la présidente, Laure de La Raudière, prend fin le 3 janvier 2027 ; un appel à candidatures a été publié le 17 juillet 2026.',
    module: ETATS,
    sources: [
      { auteur: 'Ministère de l’Économie (DGE)', titre: 'Appel à candidatures pour la présidence de l’Arcep', url: 'https://www.entreprises.gouv.fr/espace-presse/appel-candidature-la-presidence-de-lautorite-de-regulation-des-communications', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Arcep', titre: 'Biographies de la présidente et des membres du collège', url: 'https://www.arcep.fr/larcep/le-college-et-les-directions/biographies-de-la-presidente-et-des-membres-du-college.html', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Union européenne', titre: 'Règlement (UE) 2015/2120 (internet ouvert)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32015R2120', type: 'primaire', annee: 2015, langue: 'fr' },
    ],
  },
  {
    slug: 'anssi', sigle: 'ANSSI', nom: 'Agence nationale de la sécurité des systèmes d’information', famille: 'france',
    resume: 'L’agence française de cybersécurité : défense des systèmes de l’État et des opérateurs vitaux, guides, certification.',
    nature: 'Service à compétence nationale rattaché au Secrétariat général de la défense et de la sécurité nationale (Premier ministre).',
    creation: '2009.',
    decide: ['Un directeur général, Vincent Strubel, sous l’autorité du Premier ministre.'],
    finance: ['Budget de l’État ; environ 660 agents (2026).'],
    fait: ['Répond aux cyberattaques ; impose des règles de sécurité aux opérateurs d’importance vitale ; publie des guides (administration sécurisée, SSH…) ; certifie des produits.'],
    pouvoirs: 'Prescriptifs pour les opérateurs régulés. Avec la directive européenne NIS 2, environ 20 000 entités seraient régulées en France, avec une commission des sanctions indépendante.',
    etat: 'État au 24 novembre 2026 : la loi qui transpose NIS 2 n’est pas encore promulguée (examen à l’Assemblée nationale le 9 novembre 2026).',
    module: { titre: 'Linux : fichiers, droits, comptes et SSH', lien: '/modules/linux/#rebonds' },
    sources: [
      { auteur: 'Assemblée nationale', titre: 'Audition de Vincent Strubel (13 mai 2026)', url: 'https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59046N067.html', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'LCP', titre: 'Cybersécurité : les secteurs hautement critiques bientôt inscrits dans la loi', url: 'https://lcp.fr/actualites/cybersecurite-les-secteurs-hautement-critiques-bientot-inscrits-dans-la-loi-444844', type: 'presse', annee: 2026, langue: 'fr' },
    ],
  },
  {
    slug: 'afnic', sigle: 'Afnic', nom: 'Association française pour le nommage Internet en coopération', famille: 'france',
    resume: 'Gère le .fr (plus de 4,3 millions de noms) et, depuis 2026, huit extensions ultramarines.',
    nature: 'Association loi de 1901, à but non lucratif, à qui l’État délègue la gestion du .fr.',
    creation: '1997.',
    decide: ['Un conseil d’administration de 10 membres : 5 désignés par les fondateurs (2 par l’Inria, 1 par chacun des ministères des Télécommunications, de l’Industrie et de la Recherche) et 5 élus par l’assemblée générale.'],
    finance: ['24,68 millions d’euros de produits en 2025, presque tout issu des noms vendus aux bureaux d’enregistrement ; aucune subvention. 11 % du chiffre d’affaires va à des actions d’intérêt général.'],
    fait: ['Tient le registre du .fr ; depuis juin 2026, gère aussi .gp, .mq, .gf, .re, .yt, .pm, .tf et .wf.'],
    pouvoirs: 'Une délégation de l’État : désignée par arrêté du 20 septembre 2021, avec un cahier des charges et une convention de 2022.',
    controverses: ['En 2010, le Conseil constitutionnel juge que la loi laissait trop de liberté au gouvernement pour fixer les règles d’attribution des noms en .fr : la loi a dû être réécrite.'],
    etat: 'État au 24 novembre 2026 : le gouvernement a consulté (juillet-octobre 2026) sur une prolongation de cinq ans de la délégation ; décision non publiée.',
    module: GOUV,
    sources: [
      { auteur: 'Afnic', titre: 'Présentation', url: 'https://www.afnic.fr/association-excellences/qui-sommes-nous/presentation/', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Afnic', titre: 'Fonctionnement et statuts', url: 'https://www.afnic.fr/association-excellences/qui-sommes-nous/fonctionnement-statuts/', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Afnic', titre: 'Comptes annuels 2025', url: 'https://www.afnic.fr/wp-media/uploads/2026/07/Afnic_Comptes-annuels-2025.pdf', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Ministère de l’Économie (DGE)', titre: 'L’Afnic désignée pour les extensions ultramarines', url: 'https://www.entreprises.gouv.fr/espace-presse/souverainete-numerique-lafnic-designee-pour-gerer-et-developper-les-extensions', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Ministère de l’Économie (DGE)', titre: 'Consultation sur la prorogation de la délégation du .fr', url: 'https://www.entreprises.gouv.fr/espace-entreprises/consultations-publiques/consultation-publique-relative-la-prorogation-de-la', type: 'primaire', annee: 2026, langue: 'fr' },
      { auteur: 'Conseil constitutionnel', titre: 'Décision n° 2010-45 QPC du 6 octobre 2010', url: 'https://www.conseil-constitutionnel.fr/decision/2010/201045QPC.htm', type: 'primaire', annee: 2010, langue: 'fr' },
    ],
  },
];

// ——— Carte des rapports de force ———

export type TypeLien = 'finance' | 'nomme' | 'controle' | 'delegue' | 'conseille' | 'membre';
export const TYPES_LIENS: Record<TypeLien, { nom: string; verbe: string }> = {
  finance: { nom: 'Finance', verbe: 'finance' },
  nomme: { nom: 'Nomme ou élit', verbe: 'nomme des membres de' },
  controle: { nom: 'Contrôle ou supervise', verbe: 'contrôle' },
  delegue: { nom: 'Délègue, donne des règles', verbe: 'délègue à' },
  conseille: { nom: 'Conseille', verbe: 'conseille' },
  membre: { nom: 'Est membre de', verbe: 'est membre de' },
};

/** Acteurs sans fiche, présents sur la carte. */
export const AUTRES: { id: string; nom: string; famille: Famille }[] = [
  { id: 'pir', nom: 'PIR (.org)', famille: 'noms' },
  { id: 'registres', nom: 'Registres et bureaux d’enregistrement', famille: 'noms' },
  { id: 'gac', nom: 'Gouvernements (GAC)', famille: 'onu' },
  { id: 'navigateurs', nom: 'Apple, Google, Microsoft, Mozilla', famille: 'web' },
  { id: 'ag-onu', nom: 'Assemblée générale de l’ONU', famille: 'onu' },
  { id: 'commission', nom: 'Commission européenne', famille: 'europe' },
  { id: 'etat-fr', nom: 'Président·e, Parlement, gouvernement', famille: 'france' },
];

export interface Lien { de: string; vers: string; type: TypeLien; texte: string; url: string }

export const LIENS: Lien[] = [
  { de: 'isoc', vers: 'ietf', type: 'finance', texte: '47,1 M$ de 2024 à 2029 (7,3 M$ en 2025).', url: 'https://www.ietf.org/blog/isoc-extends-financial-support-to-2029/' },
  { de: 'isoc', vers: 'ietf', type: 'nomme', texte: 'Confirme les membres de l’IAB ; nomme un administrateur de l’IETF LLC.', url: 'https://www.rfc-editor.org/rfc/rfc8713' },
  { de: 'pir', vers: 'isoc', type: 'finance', texte: '58 M$ en 2025, issus des noms en .org.', url: ISOC_2025.url },
  { de: 'icann', vers: 'pir', type: 'controle', texte: 'Contrat du registre .org ; refus de la vente en 2020.', url: 'https://www.icann.org/en/blogs/details/icann-board-withholds-consent-for-a-change-of-control-of-the-public-interest-registry-pir-30-4-2020-en' },
  { de: 'icann', vers: 'ietf', type: 'finance', texte: 'Une subvention au budget de l’IETF LLC.', url: 'https://www.ietf.org/blog/ietf-administration-llc-2026-budget/' },
  { de: 'rir', vers: 'ietf', type: 'finance', texte: 'Don d’ARIN : 1 M$ en 2025.', url: 'https://www.ietf.org/blog/ietf-administration-llc-2026-budget/' },
  { de: 'ietf', vers: 'iana', type: 'delegue', texte: 'L’IANA tient les registres de protocoles selon les RFC.', url: 'https://www.rfc-editor.org/rfc/rfc2860' },
  { de: 'ietf', vers: 'icann', type: 'conseille', texte: 'Un agent de liaison sans droit de vote au conseil.', url: BYLAWS.url },
  { de: 'icann', vers: 'iana', type: 'controle', texte: 'Unique membre de PTI, élit son conseil.', url: BYLAWS.url },
  { de: 'icann', vers: 'iana', type: 'finance', texte: '11,5 M$ (exercice 2026-2027).', url: BUDGET_ICANN.url },
  { de: 'registres', vers: 'icann', type: 'finance', texte: 'Environ 162 M$ de redevances (exercice 2026-2027).', url: BUDGET_ICANN.url },
  { de: 'icann', vers: 'registres', type: 'controle', texte: 'Contrats des extensions génériques et accréditations.', url: BUDGET_ICANN.url },
  { de: 'afnic', vers: 'icann', type: 'finance', texte: 'Contribution volontaire des extensions nationales (2,1 M$ au total).', url: BUDGET_ICANN.url },
  { de: 'rir', vers: 'icann', type: 'finance', texte: 'Contribution volontaire (0,8 M$).', url: BUDGET_ICANN.url },
  { de: 'rir', vers: 'icann', type: 'nomme', texte: 'Par l’ASO : deux sièges du conseil.', url: BYLAWS.url },
  { de: 'gac', vers: 'icann', type: 'conseille', texte: 'Avis de consensus rejetables seulement à 60 % ; membre de la communauté habilitée.', url: 'https://gac.icann.org/about' },
  { de: 'iana', vers: 'rir', type: 'delegue', texte: 'Distribue les grands blocs d’adresses.', url: 'https://www.iana.org/about' },
  { de: 'rir', vers: 'iana', type: 'controle', texte: 'Accord de service (2016) : les RIR sont « clients » des fonctions IANA.', url: 'https://www.icann.org/en/stewardship-implementation' },
  { de: 'navigateurs', vers: 'whatwg', type: 'nomme', texte: 'Forment le comité de pilotage.', url: 'https://whatwg.org/faq' },
  { de: 'whatwg', vers: 'w3c', type: 'delegue', texte: 'Accord de 2019 : le W3C valide des instantanés de HTML et du DOM.', url: 'https://www.w3.org/2019/04/WHATWG-W3C-MOU.html' },
  { de: 'navigateurs', vers: 'w3c', type: 'finance', texte: 'Parmi les membres qui paient des cotisations.', url: 'https://www.w3.org/consortium/' },
  { de: 'ag-onu', vers: 'fgi', type: 'controle', texte: 'Forum permanent depuis la résolution du 17 décembre 2025.', url: 'https://digitallibrary.un.org/record/4097834/files/A_RES_80_173-EN.pdf' },
  { de: 'isoc', vers: 'fgi', type: 'finance', texte: '2 M$ aux forums nationaux et régionaux (2025).', url: ISOC_2025.url },
  { de: 'gac', vers: 'uit', type: 'membre', texte: 'Les États, membres de l’UIT, qu’ils financent à 68,4 %.', url: 'https://www.itu.int/en/mediacentre/backgrounders/Pages/how-is-itu-funded.aspx' },
  { de: 'cnil', vers: 'cepd', type: 'membre', texte: 'Chaque autorité nationale y siège.', url: RGPD.url },
  { de: 'commission', vers: 'cepd', type: 'membre', texte: 'Participe sans droit de vote.', url: RGPD.url },
  { de: 'cepd', vers: 'cnil', type: 'controle', texte: 'Décisions contraignantes en cas de désaccord entre autorités.', url: RGPD.url },
  { de: 'etat-fr', vers: 'cnil', type: 'nomme', texte: 'Juridictions, Parlement, Premier ministre nomment le collège.', url: 'https://cnil.fr/sites/default/files/2026-05/rapport_annuel_2025.pdf' },
  { de: 'etat-fr', vers: 'arcom', type: 'nomme', texte: 'Cinq autorités nomment les neuf membres.', url: 'https://www.senat.fr/rap/r25-068/r25-068-syn.pdf' },
  { de: 'etat-fr', vers: 'arcep', type: 'nomme', texte: '3 membres par le président de la République, 4 par les présidents des assemblées.', url: 'https://www.arcep.fr/larcep/le-college-et-les-directions/biographies-de-la-presidente-et-des-membres-du-college.html' },
  { de: 'etat-fr', vers: 'anssi', type: 'controle', texte: 'Service rattaché au Premier ministre (SGDSN).', url: 'https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59046N067.html' },
  { de: 'etat-fr', vers: 'afnic', type: 'delegue', texte: 'Délègue la gestion du .fr (arrêté de 2021) et nomme 5 administrateurs sur 10.', url: 'https://www.afnic.fr/association-excellences/qui-sommes-nous/fonctionnement-statuts/' },
];

export function nomActeur(id: string): string {
  return FICHES.find((f) => f.slug === id)?.sigle ?? AUTRES.find((a) => a.id === id)?.nom ?? id;
}
