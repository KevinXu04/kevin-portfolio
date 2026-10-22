# Kevin Xiu - Portfolio

Personal portfolio of Kevin Xiu, software developer and Applied Data Science & Artificial Intelligence student at Hogeschool Rotterdam.

**Live:** [xuprojects.dev](https://xuprojects.dev/)

![Portfolio preview](public/og-image.png)

## Features

- **One-page layout**: hero, about, experience & education, projects, testimonials and contact
- **English and Dutch**: switch in the navigation. The site follows the browser language until a choice is saved
- **Light and dark theme**: follows the system setting, with a toggle in the navigation. No flash of the wrong theme on load
- **Project details**: each project opens a dialog with a description, key features and a link to the live site
- **Contact form**: sends email through EmailJS, with inline validation and basic spam protection (honeypot field and minimum fill time)
- **Accessible and fast**: keyboard friendly, respects `prefers-reduced-motion`, self-hosted fonts. Lighthouse scores 96-100 on mobile

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite 6 |
| Styling | Tailwind CSS 4, CSS variables for theming |
| Animation | Motion (`motion/react`, loaded via `LazyMotion`) |
| Icons | Phosphor Icons |
| Fonts | Geist and Geist Mono (Fontsource, self-hosted) |
| Contact form | EmailJS |
| Hosting | Own server at xuprojects.dev |

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173/`.

### Environment variables

The contact form needs three EmailJS values in a `.env` file in the project root:

```bash
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

The template receives the form fields `name`, `email` and `message`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
public/
  og-image.png          Link preview image (1200x630)
  projects/             Project screenshots (WebP)
  robots.txt, sitemap.xml
src/
  data/content.js       Projects, experience, education, testimonials, links
  i18n/strings.js       All interface text in English and Dutch
  i18n/language.js      Language detection and the useLang() hook
  components/
    sections/           One component per page section
    Navbar.jsx, Footer.jsx, ThemeToggle.jsx, LanguageToggle.jsx, Reveal.jsx
  index.css             Design tokens (colors, fonts) for light and dark theme
index.html              Meta tags, structured data, early theme/language script
```

## Editing content

- **Projects, experience and education** live in `src/data/content.js`. Text fields that differ per language are written as `{ en: "...", nl: "..." }`.
- **Buttons, headings and other interface text** live in `src/i18n/strings.js`, with an `en` and `nl` section that share the same keys.
- **Adding a project screenshot**: place a 1440x900 WebP image in `public/projects/` and add `image: "projects/name.webp"` to the project. Projects with a screenshot also appear in the hero.
- **Colors** are defined once in `src/index.css` (`:root` for light, `[data-theme="dark"]` for dark).

## Deployment

The site runs on its own server at [xuprojects.dev](https://xuprojects.dev/). To publish a change:

1. Push to this repository.
2. On the server, pull the latest version and build it:

   ```bash
   git pull
   npm ci
   npm run build
   ```

3. The web server serves the static files in `dist/` from the domain root.

The `.env` file with the EmailJS values must be present on the server when building, because Vite bakes these values into the build.

If the domain changes, update the URLs in `index.html` (link preview and structured data), `public/robots.txt` and `public/sitemap.xml`.

## Contact

- LinkedIn: [kevin-xiu](https://www.linkedin.com/in/kevin-xiu-0aa962250/)
- GitHub: [kevinxu04](https://github.com/kevinxu04)
- Email: x.kevinxiu@hotmail.com
