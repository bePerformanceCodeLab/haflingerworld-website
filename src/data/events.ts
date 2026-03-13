export type CalendarEventCategory =
  | 'Weltausstellung'
  | 'Kongress'
  | 'Zucht'
  | 'Sport'
  | 'Verband';

export type CalendarEventStatus = 'confirmed' | 'planned' | 'tba';

export interface CalendarEvent {
  id: string;
  title: string;
  category: CalendarEventCategory;
  location: string;
  description: string;
  startDate?: string;
  endDate?: string;
  dateText?: string;
  status: CalendarEventStatus;
  featured?: boolean;
  link?: string;
}

export const eventCalendarData: CalendarEvent[] = [
  {
    id: 'weltausstellung-2026-planung',
    title: 'Haflinger Weltausstellung',
    category: 'Weltausstellung',
    location: 'International',
    description:
      'Groesste internationale Schaubuehne fuer die Haflinger-Rasse. Die naechste Ausgabe wird vorbereitet.',
    dateText: 'In Vorbereitung (2026)',
    status: 'planned',
    featured: true,
    link: '/events',
  },
  {
    id: 'weltkongress-2026',
    title: 'Haflinger Weltkongress',
    category: 'Kongress',
    location: 'Bozen / International',
    description:
      'Forum fuer Zucht, Sport und strategische Weiterentwicklung im globalen Verbandsnetzwerk.',
    dateText: 'Termin folgt (2026)',
    status: 'tba',
    featured: true,
    link: '/events',
  },
  {
    id: 'hengstkoerung-neumarkt-2026',
    title: 'Gesamtitalienische Haflinger-Hengstkoerung und Hengstparade',
    category: 'Zucht',
    location: 'Neumarkt, Suedtirol',
    description:
      'Koerung, Praesentation und zuechterische Standortbestimmung auf internationaler Ebene.',
    startDate: '2026-01-31',
    status: 'confirmed',
    link: '/events',
  },
  {
    id: 'skijoering-jenesien-2026',
    title: 'Landesmeisterschaft Schlittenrennen und Skijoering',
    category: 'Sport',
    location: 'Jenesien, Suedtirol',
    description:
      'Traditionssport mit starker Haflinger-Kultur und hoher regionaler Sichtbarkeit.',
    startDate: '2026-02-08',
    status: 'confirmed',
    link: '/events',
  },
  {
    id: 'stuten-stammbuch-2026',
    title: 'Stammbucheintragung dreijaehriger Stuten',
    category: 'Zucht',
    location: 'Neumarkt, Suedtirol',
    description:
      'Wichtiger Termin fuer Dokumentation, Vergleichbarkeit und zuechterische Selektion.',
    startDate: '2026-04-24',
    endDate: '2026-04-26',
    status: 'confirmed',
    link: '/events',
  },
  {
    id: 'jungstutenschau-lana-2026',
    title: 'Internationale Jungstutenschau',
    category: 'Zucht',
    location: 'Lana, Suedtirol',
    description:
      'Schau und Austauschplattform fuer Zuechterinnen und Zuechter aus mehreren Laendern.',
    startDate: '2026-05-17',
    status: 'confirmed',
    link: '/events',
  },
  {
    id: 'richter-fortbildung-2026',
    title: 'Internationale Richterfortbildung',
    category: 'Verband',
    location: 'Bozen, Suedtirol',
    description:
      'Harmonisierung von Bewertungsstandards, Protokollen und Qualitaetskriterien.',
    startDate: '2026-06-12',
    endDate: '2026-06-13',
    status: 'planned',
    link: '/projekte',
  },
  {
    id: 'eurochampionat-turnus',
    title: 'Haflinger Europachampionat',
    category: 'Sport',
    location: 'Wechselnde Austragungsorte',
    description:
      'Mehrdisziplinaerer Leistungsvergleich in Dressur, Springen, Fahren und Vielseitigkeit.',
    dateText: 'Im Turnus',
    status: 'planned',
    link: '/events',
  },
  {
    id: 'fokustag-genetik-2026',
    title: 'Fokustag Genetik und Datenqualitaet',
    category: 'Verband',
    location: 'Online / Bozen',
    description:
      'Praxisnahe Session zu Datenmodellen, Abstammungspruefung und internationalen Schnittstellen.',
    startDate: '2026-09-11',
    status: 'planned',
    link: '/projekte',
  },
  {
    id: 'sportforum-herbst-2026',
    title: 'Internationales Haflinger Sportforum',
    category: 'Kongress',
    location: 'Online',
    description:
      'Austausch zu Saisonanalyse, Ausbildungspfaden und Turnierentwicklung.',
    startDate: '2026-10-03',
    status: 'planned',
    link: '/netzwerk',
  },
];
