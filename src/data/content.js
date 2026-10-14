// Text fields are { en, nl }; resolve them with `t()` from useLang().
// Names, tech and links are the same in both languages.

export const links = {
  linkedin: "https://www.linkedin.com/in/kevin-xiu-0aa962250/",
  github: "https://github.com/kevinxu04",
  instagram: "https://www.instagram.com/realkevinxu/",
  email: "x.kevinxiu@hotmail.com",
  phone: "+31 6 42 80 88 88",
  phoneHref: "tel:+31642808888",
};

// Labels come from strings.js (nav.<id>)
export const navLinks = ["home", "about", "projects", "contact"];

export const skillGroups = [
  { name: "Frontend", items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vite"] },
  { name: "Backend", items: ["Node.js", "PHP", "Laravel", "C#"] },
  { name: "Data", items: ["Python", "MySQL"] },
];

export const experiences = [
  {
    id: "gsm-parttime",
    period: { en: "Feb 2026 - Jun 2026", nl: "feb 2026 - jun 2026" },
    title: { en: "Software Developer (part-time)", nl: "Software Developer (parttime)" },
    company: "GSM Parts Center",
    description: {
      en: "Improved the trade-in platform and built an admin dashboard for valuations, logistics and inventory management.",
      nl: "Het trade-in platform verbeterd en een admin-dashboard gebouwd voor taxaties, logistiek en voorraadbeheer.",
    },
  },
  {
    id: "gsm-intern-2025",
    period: { en: "Sep 2025 - Feb 2026", nl: "sep 2025 - feb 2026" },
    title: { en: "Software Developer Intern", nl: "Software Developer (stage)" },
    company: "GSM Parts Center",
    description: {
      en: "Developed a trade-in platform for devices, covering the customer journey from valuation to processing.",
      nl: "Een trade-in platform voor apparaten ontwikkeld, van taxatie tot afhandeling.",
    },
  },
  {
    id: "depot-intern",
    period: { en: "Sep 2024 - Feb 2025", nl: "sep 2024 - feb 2025" },
    title: { en: "Software Developer Intern", nl: "Software Developer (stage)" },
    company: "Depot Software",
    description: {
      en: "Built a solar panel and home battery simulator: designed dashboards, led Agile sprints and integrated APIs with MySQL.",
      nl: "Een simulator voor zonnepanelen en thuisbatterijen gebouwd: dashboards ontworpen, Agile-sprints geleid en API's gekoppeld aan MySQL.",
    },
  },
  {
    id: "gsm-intern-2023",
    period: { en: "Sep 2023 - Feb 2024", nl: "sep 2023 - feb 2024" },
    title: { en: "Software Developer Intern", nl: "Software Developer (stage)" },
    company: "GSM Parts Center",
    description: {
      en: "Designed and developed 5+ client webshops, tailoring plugins and improving UX/UI together with clients.",
      nl: "Meer dan 5 webshops voor klanten ontworpen en gebouwd, met plugins op maat en UX/UI-verbeteringen in overleg met de klant.",
    },
  },
];

export const education = [
  {
    id: "hr",
    period: { en: "Sep 2026 - 2030", nl: "sep 2026 - 2030" },
    title: "HBO Applied Data Science & AI",
    school: "Hogeschool Rotterdam",
  },
  {
    id: "davinci",
    period: { en: "Sep 2022 - Feb 2026", nl: "sep 2022 - feb 2026" },
    title: "MBO 4 Software Developer",
    school: "ROC Da Vinci College",
  },
];

export const projects = [
  {
    id: "tradein",
    title: "Trade-in Platform",
    client: "GSM Parts Center",
    description: {
      en: "Customers trade in their devices with automated valuations, logistics tracking and inventory management.",
      nl: "Klanten ruilen hun apparaten in met automatische taxaties, verzendtracking en voorraadbeheer.",
    },
    longDescription: {
      en: "Developed for GSM Parts Center, this platform digitizes the entire device trade-in process. Customers select their device model, answer condition questions and receive an instant valuation. The system handles shipping label generation, device inspection workflows, payment processing and inventory integration. The admin dashboard shows trade-in volumes, device categories and revenue in real time.",
      nl: "Dit platform, ontwikkeld voor GSM Parts Center, digitaliseert het hele inruilproces. Klanten kiezen hun model, beantwoorden vragen over de staat van het apparaat en krijgen direct een taxatie. Het systeem regelt verzendlabels, de keuring van apparaten, uitbetalingen en de koppeling met de voorraad. Het admin-dashboard toont inruilvolumes, apparaatcategorieën en omzet in realtime.",
    },
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: "projects/tradein.webp",
    link: "https://tradein.xuprojects.dev",
    highlights: {
      en: [
        "Automated device valuation engine",
        "End-to-end logistics tracking",
        "Admin analytics dashboard",
        "Inventory management system",
      ],
      nl: [
        "Automatische taxatie van apparaten",
        "Verzendtracking van begin tot eind",
        "Admin-dashboard met analyses",
        "Voorraadbeheersysteem",
      ],
    },
  },
  {
    id: "solar",
    title: { en: "Solar Panel & Home Battery Simulator", nl: "Simulator voor zonnepanelen en thuisbatterijen" },
    client: "Depot Software",
    description: {
      en: "Uses real-time weather and energy data to calculate savings, ROI and environmental impact of solar investments.",
      nl: "Berekent met realtime weer- en energiedata de besparing, terugverdientijd en milieu-impact van zonnepanelen.",
    },
    longDescription: {
      en: "A simulator built during my internship at Depot Software. The app fetches real-time weather data and electricity prices to calculate potential savings from solar panel installations. Users enter their roof size, orientation and energy consumption to get personalized ROI estimates, payback periods and CO₂ reduction projections, presented in interactive dashboards.",
      nl: "Een simulator die ik tijdens mijn stage bij Depot Software heb gebouwd. De app haalt realtime weerdata en stroomprijzen op en berekent daarmee de mogelijke besparing van zonnepanelen. Gebruikers vullen hun dakoppervlak, ligging en energieverbruik in en krijgen een persoonlijke ROI-schatting, terugverdientijd en CO₂-besparing, weergegeven in interactieve dashboards.",
    },
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: {
      en: [
        "Real-time weather API integration",
        "Interactive energy dashboards",
        "Personalized ROI calculations",
        "Built with Agile/Scrum",
      ],
      nl: [
        "Koppeling met een realtime weer-API",
        "Interactieve energiedashboards",
        "Persoonlijke ROI-berekeningen",
        "Gebouwd volgens Agile/Scrum",
      ],
    },
  },
  {
    id: "jukebox",
    title: "Jukebox",
    description: {
      en: "A Spotify-like music streaming app. Stream songs, create playlists and explore tracks.",
      nl: "Een muziekstreamingapp in de stijl van Spotify. Nummers streamen, playlists maken en muziek ontdekken.",
    },
    longDescription: {
      en: "A music streaming platform inspired by Spotify, built with PHP Laravel on the backend and a responsive JavaScript frontend. Users browse a library of songs, create and manage playlists, search by artist or genre and listen with queue-based playback including shuffle and repeat. Admins can upload songs and manage album artwork.",
      nl: "Een muziekplatform geïnspireerd op Spotify, gebouwd met PHP Laravel als backend en een responsive JavaScript-frontend. Gebruikers bladeren door een bibliotheek met nummers, maken en beheren playlists, zoeken op artiest of genre en luisteren via een wachtrij met shuffle en herhalen. Beheerders kunnen nummers uploaden en albumhoezen beheren.",
    },
    tech: ["Laravel", "MySQL", "JavaScript", "CSS"],
    highlights: {
      en: [
        "Full authentication system",
        "Playlist creation and management",
        "Queue-based playback",
        "Admin panel for content",
      ],
      nl: [
        "Volledig inlogsysteem",
        "Playlists maken en beheren",
        "Afspelen via een wachtrij",
        "Beheerpaneel voor content",
      ],
    },
  },
  {
    id: "etenbijsuti",
    title: "etenbijsuti.nl",
    client: { en: "Thai catering", nl: "Thaise catering" },
    description: {
      en: "A catering website for Thai food with a full menu, catering request form and contact options.",
      nl: "Een cateringwebsite voor Thais eten met een volledig menu, aanvraagformulier en contactmogelijkheden.",
    },
    longDescription: {
      en: "A website for a Thai food catering business. It presents an extensive menu with categories, a form for catering requests and a clear overview of what is on offer. Built with Next.js and Tailwind CSS for fast load times on every device.",
      nl: "Een website voor een Thaise cateraar. De site toont een uitgebreid menu met categorieën, een formulier voor cateringaanvragen en een helder overzicht van het aanbod. Gebouwd met Next.js en Tailwind CSS voor snelle laadtijden op elk apparaat.",
    },
    tech: ["Next.js", "Tailwind CSS"],
    image: "projects/etenbijsuti.webp",
    link: "https://etenbijsuti.nl",
    highlights: {
      en: [
        "Full menu with categories",
        "Catering request form",
        "Fast, statically rendered pages",
        "Responsive design",
      ],
      nl: [
        "Volledig menu met categorieën",
        "Formulier voor cateringaanvragen",
        "Snelle, statisch gegenereerde pagina's",
        "Responsive design",
      ],
    },
  },
  {
    id: "portfolio",
    title: { en: "This portfolio", nl: "Dit portfolio" },
    client: { en: "Personal", nl: "Persoonlijk" },
    description: {
      en: "The site you are looking at. A calm, accessible one-pager in English and Dutch, with light and dark mode and a working contact form.",
      nl: "De site die je nu bekijkt. Een rustige, toegankelijke one-pager in het Nederlands en Engels, met licht en donker thema en een werkend contactformulier.",
    },
    longDescription: {
      en: "Built with React 19 and Vite, styled with Tailwind CSS and animated sparingly with Motion. The site follows your light or dark preference, is available in English and Dutch, respects reduced-motion settings and uses self-hosted fonts. The contact form sends messages through EmailJS.",
      nl: "Gebouwd met React 19 en Vite, vormgegeven met Tailwind CSS en spaarzaam geanimeerd met Motion. De site volgt je voorkeur voor licht of donker, is beschikbaar in het Nederlands en Engels, houdt rekening met de instelling voor minder beweging en laadt fonts vanaf de eigen server. Het contactformulier verstuurt berichten via EmailJS.",
    },
    tech: ["React", "Tailwind CSS", "Motion", "EmailJS"],
    highlights: {
      en: [
        "Automatic light and dark mode",
        "Available in English and Dutch",
        "Respects reduced-motion settings",
        "Working contact form",
      ],
      nl: [
        "Automatisch licht en donker thema",
        "Beschikbaar in het Nederlands en Engels",
        "Houdt rekening met minder beweging",
        "Werkend contactformulier",
      ],
    },
  },
];

// Quotes stay in the author's original words in both languages
export const testimonials = [
  {
    quote:
      "He picked up our tech stack incredibly fast and started delivering production-ready features within weeks.",
    name: "Jose Cano",
    role: { en: "Internship Supervisor", nl: "Stagebegeleider" },
    company: "GSM Parts Center",
  },
  {
    quote:
      "What impressed me most was his ability to translate technical requirements into a product that our clients could actually use and understand.",
    name: "Angelique Noordijk",
    role: "Product Owner",
    company: "Depot Software",
  },
];
