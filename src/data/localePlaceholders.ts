import { newsArticles } from './news';

export const supportedLocales = ['it', 'en'] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export interface LocalePlaceholderPageProps {
  locale: SupportedLocale;
  title: string;
  description: string;
  heroTitle: string;
  lead: string;
  accent: string;
  breadcrumbItems: { label: string; href?: string }[];
  germanHref: string;
  germanCtaLabel: string;
  statusLabel: string;
  statusTitle: string;
  statusText: string;
  paragraphs: string[];
  showCookieAnchor: boolean;
  cookieTitle?: string;
  cookieText?: string;
}

const localeCopy = {
  it: {
    accent: 'Versione in lavorazione',
    homeLabel: 'Home',
    heroTitle: 'Contenuti in italiano in preparazione',
    germanCtaLabel: 'Apri la pagina tedesca',
    statusLabel: 'Pagina provvisoria',
    statusTitle: 'Traduzione e contenuti definitivi in arrivo',
    statusText:
      'Questa pagina esiste gia come destinazione valida per la navigazione, ma i contenuti editoriali completi saranno aggiunti in una fase successiva.',
    cookieTitle: 'Impostazioni cookie',
    cookieText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    lead: (pageTitle: string) =>
      `${pageTitle} e gia raggiungibile anche in italiano. Per ora mostriamo una pagina segnaposto, cosi i link del sito restano coerenti durante la preparazione della traduzione.`,
    description: (pageTitle: string) =>
      `Pagina segnaposto in italiano per ${pageTitle}.`,
  },
  en: {
    accent: 'Version in progress',
    homeLabel: 'Home',
    heroTitle: 'English content is being prepared',
    germanCtaLabel: 'Open the German page',
    statusLabel: 'Temporary page',
    statusTitle: 'Translation and final content are still in progress',
    statusText:
      'This route is now available so shared navigation and CTA buttons land on a real page while the final English content is being prepared.',
    cookieTitle: 'Cookie settings',
    cookieText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    lead: (pageTitle: string) =>
      `${pageTitle} is already available as a working English destination. This placeholder keeps navigation stable until the final translated content is ready.`,
    description: (pageTitle: string) =>
      `English placeholder page for ${pageTitle}.`,
  },
} as const;

const routeTitles: Record<string, Record<SupportedLocale, string>> = {
  '': { it: 'Home', en: 'Home' },
  haflinger: { it: 'Haflinger', en: 'Haflinger' },
  zucht: { it: 'Allevamento', en: 'Breeding' },
  mitglieder: { it: 'Membri', en: 'Members' },
  netzwerk: { it: 'Rete internazionale', en: 'International network' },
  projekte: { it: 'Progetti', en: 'Projects' },
  hwzsv: { it: 'HWZSV', en: 'HWZSV' },
  news: { it: 'News', en: 'News' },
  events: { it: 'Eventi e calendario', en: 'Events and calendar' },
  datenschutz: { it: 'Privacy', en: 'Privacy' },
  impressum: { it: 'Note legali', en: 'Legal notice' },
};

const baseRouteKeys = Object.keys(routeTitles).filter(Boolean);

const loremParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
];

function normalizeSlug(slug?: string | string[]) {
  if (!slug) return [];
  if (Array.isArray(slug)) return slug.filter(Boolean);
  return slug.split('/').filter(Boolean);
}

function formatFallbackTitle(segments: string[]) {
  return segments
    .map((segment) =>
      segment
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' '),
    )
    .join(' / ');
}

function getPageTitle(locale: SupportedLocale, segments: string[]) {
  if (segments[0] === 'news' && segments[1]) {
    const article = newsArticles.find((item) => item.slug === segments[1]);
    if (article) return article.title;
  }

  const slugKey = segments.join('/');
  const topLevelKey = segments[0] ?? '';
  const fallbackTitle = formatFallbackTitle(segments);
  return (
    routeTitles[slugKey]?.[locale] ??
    routeTitles[topLevelKey]?.[locale] ??
    (fallbackTitle ||
    routeTitles[''][locale]
    )
  );
}

export function getLocaleIndexPaths() {
  return supportedLocales.map((locale) => ({
    params: { locale },
    props: buildLocalePageProps(locale),
  }));
}

export function getLocaleNestedPaths() {
  const paths = [];

  for (const locale of supportedLocales) {
    for (const slug of baseRouteKeys) {
      paths.push({
        params: { locale, slug },
        props: buildLocalePageProps(locale, slug),
      });
    }

    for (const article of newsArticles) {
      const slug = `news/${article.slug}`;
      paths.push({
        params: { locale, slug },
        props: buildLocalePageProps(locale, slug),
      });
    }
  }

  return paths;
}

export function buildLocalePageProps(
  locale: SupportedLocale,
  slug?: string | string[],
): LocalePlaceholderPageProps {
  const segments = normalizeSlug(slug);
  const copy = localeCopy[locale];
  const pageTitle = getPageTitle(locale, segments);
  const germanHref = segments.length ? `/${segments.join('/')}` : '/';

  return {
    locale,
    title: `${pageTitle} | ${locale === 'it' ? 'Versione italiana' : 'English version'}`,
    description: copy.description(pageTitle),
    heroTitle: segments.length === 0 ? copy.heroTitle : pageTitle,
    lead: copy.lead(pageTitle),
    accent: copy.accent,
    breadcrumbItems: segments.length
      ? [{ label: copy.homeLabel, href: `/${locale}` }, { label: pageTitle }]
      : [{ label: copy.homeLabel }],
    germanHref,
    germanCtaLabel: copy.germanCtaLabel,
    statusLabel: copy.statusLabel,
    statusTitle: copy.statusTitle,
    statusText: copy.statusText,
    paragraphs: loremParagraphs,
    showCookieAnchor: segments[0] === 'datenschutz',
    cookieTitle: copy.cookieTitle,
    cookieText: copy.cookieText,
  };
}