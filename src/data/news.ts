import type { ImageMetadata } from 'astro';

import newsBericht1 from '@/images/news/news-bericht-1.webp';
import newsBericht2 from '@/images/news/news-bericht-2.webp';
import newsBericht3 from '@/images/news/news-bericht-3.webp';

export interface NewsArticle {
  slug: string;
  dateTime: string;
  dateLabel: string;
  category: string;
  title: string;
  excerpt: string;
  image: ImageMetadata;
  lead: string;
  content: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'haflinger-info-2026-veroeffentlicht',
    dateTime: '2026-03-05',
    dateLabel: '05. Maerz 2026',
    category: 'Partnerverband',
    title: 'Neue Haflinger Info 2026 veroeffentlicht',
    excerpt:
      'Aus dem Suedtiroler Verbandsumfeld liegt die neue Ausgabe der Haflinger Info mit Schwerpunkten zu Zucht, Sport und Terminen vor.',
    image: newsBericht1,
    lead:
      'Die neue Ausgabe der Haflinger Info 2026 liefert kompakte Updates zu Zucht, Verbandsarbeit und internationalen Terminen.',
    content: [
      'Die aktuelle Ausgabe buendelt die wichtigsten Entwicklungen aus dem Verbandsumfeld und richtet sich an Mitgliedsorganisationen, Zuechterinnen und Zuechter sowie am Sport interessierte Partner.',
      'Besonderes Augenmerk liegt auf der Abstimmung internationaler Termine und der transparenten Kommunikation von Fachthemen, damit Informationen schneller und einheitlicher verfuegbar sind.',
      'Die HWZSV begruesst dieses Format, weil es den Wissensaustausch zwischen Regionen foerdert und die gemeinsame Ausrichtung in der Haflinger-Welt staerkt.',
    ],
  },
  {
    slug: 'skijoering-passeier-ergebnisse-2026',
    dateTime: '2026-02-22',
    dateLabel: '22. Februar 2026',
    category: 'Sport',
    title: 'Pferdeschlittenrennen und Skijoering: Ergebnisse aus Passeier',
    excerpt:
      'Traditionssport und Nachwuchsarbeit bleiben ein wichtiger Baustein im regionalen Haflinger-Jahreskalender 2026.',
    image: newsBericht2,
    lead:
      'Die Veranstaltungen in Passeier zeigen erneut, wie sportliche Tradition und moderne Nachwuchsarbeit zusammenwirken.',
    content: [
      'Die Rennen und Wertungen wurden in einem starken Teilnehmerfeld ausgetragen und von zahlreichen Besucherinnen und Besuchern begleitet.',
      'Neben den sportlichen Ergebnissen stand vor allem die nachhaltige Einbindung junger Reiterinnen und Reiter im Mittelpunkt.',
      'Aus Sicht der HWZSV sind solche Formate ein wichtiger Baustein, um den Haflinger im Sport sichtbar und zukunftsfaehig aufzustellen.',
    ],
  },
  {
    slug: 'hengstkoerung-2026-mit-hengstparade',
    dateTime: '2026-01-31',
    dateLabel: '31. Januar 2026',
    category: 'Zucht',
    title: 'Haflinger-Hengstkoerung 2026 mit Hengstparade',
    excerpt:
      'Die Koerungssaison startet mit einer zentralen Praesentation der Zuchthengste und liefert wichtige Impulse fuer die weitere Zuchtplanung.',
    image: newsBericht3,
    lead:
      'Der Saisonauftakt 2026 setzt mit Koerung und Parade ein klares Signal fuer Qualitaet, Vergleichbarkeit und Weiterentwicklung in der Zucht.',
    content: [
      'Die vorgestellten Hengste wurden nach den geltenden Kriterien bewertet, sodass Zuechterinnen und Zuechter eine belastbare Grundlage fuer ihre Planung erhalten.',
      'Im Mittelpunkt standen Exterieur, Bewegungsqualitaet und zuechterische Perspektiven im internationalen Kontext.',
      'Die Ergebnisse unterstreichen die Bedeutung abgestimmter Standards und einer transparenten Dokumentation in der Haflinger-Zucht.',
    ],
  },
];
