# Section-Umbenennung (Namenskonzept)

Alle Startseiten-Sections wurden mit dem Präfix `Section` umbenannt, damit sie sich klar von den gleichnamigen **Pages** (Routen) unterscheiden.

## Mapping-Tabelle

| Alter Name (Datei) | Neuer Name (Datei) | Betroffene Dateien |
|--------------------|--------------------|--------------------|
| `Hero.astro` | `SectionHero.astro` | `src/pages/index.astro`, `README.md` |
| `Haflinger.astro` | `SectionHaflinger.astro` | `src/pages/index.astro` |
| `Zucht.astro` | `SectionZucht.astro` | `src/pages/index.astro` |
| `Netzwerk.astro` | `SectionNetzwerk.astro` | `src/pages/index.astro` |
| `News.astro` | `SectionNews.astro` | `src/pages/index.astro` |
| `Events.astro` | `SectionEvents.astro` | `src/pages/index.astro` |
| `Hwzsv.astro` | `SectionHwzsv.astro` | `src/pages/index.astro` |

## Betroffene Stellen

- **Imports und Komponenten-Nutzung:** ausschließlich in `src/pages/index.astro`
- **Dokumentation:** `README.md` (Beispiele und Namenskonventionen)

## Unverändert

- **Pages** (`src/pages/`): Dateinamen und Routen bleiben wie bisher (`haflinger.astro` → `/haflinger`, `news.astro` → `/news` usw.).
- **Section-IDs im HTML:** `id="haflinger"`, `id="zucht"`, `id="netzwerk"`, `id="news"`, `id="events"`, `id="hwzsv"` – keine Änderung (Anker-Links und Routing funktionieren weiter).
- **CSS-Klassen** innerhalb der Sections (z. B. `.haflinger-card`, `.zucht-card`, `.netzwerk-card`, `.hwzsv-card`) – unverändert, nur Dateinamen/Imports geändert.

## Abhängigkeiten

- Navbar und Footer verlinken weiter auf `/haflinger`, `/zucht`, `/news` usw. und auf Anker `#haflinger`, `#zucht` usw. – keine Anpassung nötig.
- `MainLayout.astro` verwendet keine Section-Komponenten direkt.
