# Haflinger World (HWZSV)

Website der Haflinger Welt-Zucht- und Sportvereinigung.

## Projektstruktur

```text
haflingerworld/
├── public/                 # Statische Assets (ohne Build-Verarbeitung)
│   ├── fonts/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── components/        # Wiederverwendbare UI-Komponenten
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── Squircle.astro
│   │   └── sections/      # Seitenabschnitte (SectionHero, SectionZucht, SectionNews, …)
│   ├── images/            # Importierte Bilder (Optimierung via astro:assets)
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/             # File-based Routing (URL = Dateiname)
│   │   ├── index.astro    → /
│   │   ├── impressum.astro → /impressum
│   │   └── datenschutz.astro → /datenschutz
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

### Namenskonventionen

| Bereich | Konvention | Beispiele |
|--------|------------|-----------|
| **Seiten** (`src/pages/`) | Kleinbuchstaben, ggf. Bindestrich | `index.astro`, `datenschutz.astro` |
| **Komponenten** | PascalCase | `Navbar.astro`, `SectionHero.astro` |
| **Layouts** | PascalCase + „Layout“ | `MainLayout.astro` |
| **Styles** | Kleinbuchstaben, Bindestrich | `global.css` |
| **Package-Name** | kebab-case | `haflingerworld` |

### Bilder (Best Practice)

- **`public/`**: Statische Dateien mit fester URL (favicon, og-image, Fonts). Keine Build-Verarbeitung.
- **`src/images/`**: Bilder, die in Komponenten **importiert** werden → Optimierung und Cache-Busting (z. B. Logo für Navbar/Footer).

### Imports

Es wird das Path-Alias `@/` für `src/` verwendet:

```astro
import MainLayout from '@/layouts/MainLayout.astro';
import SectionHero from '@/components/sections/SectionHero.astro';
import '@/styles/global.css';
```

## Befehle

| Befehl | Aktion |
|--------|--------|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Dev-Server (z. B. localhost:4321) |
| `npm run build` | Produktions-Build nach `./dist/` |
| `npm run preview` | Build lokal vorschauen |

## Technologie

- **Astro** (Static Site)
- **Tailwind CSS** (Styling)
- **TypeScript** (strict)
