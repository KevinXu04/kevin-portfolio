export const links = {
  linkedin: "https://www.linkedin.com/in/kevin-xiu-0aa962250/",
  github: "https://github.com/kevinxu04",
  instagram: "https://www.instagram.com/realkevinxu/",
  email: "x.kevinxiu@hotmail.com",
  phone: "+31 6 42 80 88 88",
  phoneHref: "tel:+31642808888",
};

export const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const skillGroups = [
  { name: "Frontend", items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Vite"] },
  { name: "Backend", items: ["Node.js", "PHP", "Laravel", "C#"] },
  { name: "Data", items: ["Python", "MySQL"] },
];

export const experiences = [
  {
    period: "Feb 2026 - Jun 2026",
    title: "Software Developer (part-time)",
    company: "GSM Parts Center",
    description:
      "Improved the trade-in platform and built an admin dashboard for valuations, logistics and inventory management.",
  },
  {
    period: "Sep 2025 - Feb 2026",
    title: "Software Developer Intern",
    company: "GSM Parts Center",
    description:
      "Developed a trade-in platform for devices, covering the customer journey from valuation to processing.",
  },
  {
    period: "Sep 2024 - Feb 2025",
    title: "Software Developer Intern",
    company: "Depot Software",
    description:
      "Built a solar panel and home battery simulator: designed dashboards, led Agile sprints and integrated APIs with MySQL.",
  },
  {
    period: "Sep 2023 - Feb 2024",
    title: "Software Developer Intern",
    company: "GSM Parts Center",
    description:
      "Designed and developed 5+ client webshops, tailoring plugins and improving UX/UI together with clients.",
  },
];

export const education = [
  {
    period: "Sep 2026 - 2030",
    title: "HBO Applied Data Science & AI",
    school: "Hogeschool Rotterdam",
  },
  {
    period: "Sep 2022 - Feb 2026",
    title: "MBO 4 Software Developer",
    school: "ROC Da Vinci College",
  },
];

export const projects = [
  {
    id: "tradein",
    title: "Trade-in Platform",
    client: "GSM Parts Center",
    description:
      "Customers trade in their devices with automated valuations, logistics tracking and inventory management.",
    longDescription:
      "Developed for GSM Parts Center, this platform digitizes the entire device trade-in process. Customers select their device model, answer condition questions and receive an instant valuation. The system handles shipping label generation, device inspection workflows, payment processing and inventory integration. The admin dashboard shows trade-in volumes, device categories and revenue in real time.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: "projects/tradein.webp",
    link: "https://tradein.xuprojects.dev",
    highlights: [
      "Automated device valuation engine",
      "End-to-end logistics tracking",
      "Admin analytics dashboard",
      "Inventory management system",
    ],
  },
  {
    id: "solar",
    title: "Solar Panel & Home Battery Simulator",
    client: "Depot Software",
    description:
      "Uses real-time weather and energy data to calculate savings, ROI and environmental impact of solar investments.",
    longDescription:
      "A simulator built during my internship at Depot Software. The app fetches real-time weather data and electricity prices to calculate potential savings from solar panel installations. Users enter their roof size, orientation and energy consumption to get personalized ROI estimates, payback periods and CO₂ reduction projections, presented in interactive dashboards.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: [
      "Real-time weather API integration",
      "Interactive energy dashboards",
      "Personalized ROI calculations",
      "Built with Agile/Scrum",
    ],
  },
  {
    id: "jukebox",
    title: "Jukebox",
    description:
      "A Spotify-like music streaming app. Stream songs, create playlists and explore tracks.",
    longDescription:
      "A music streaming platform inspired by Spotify, built with PHP Laravel on the backend and a responsive JavaScript frontend. Users browse a library of songs, create and manage playlists, search by artist or genre and listen with queue-based playback including shuffle and repeat. Admins can upload songs and manage album artwork.",
    tech: ["Laravel", "MySQL", "JavaScript", "CSS"],
    highlights: [
      "Full authentication system",
      "Playlist creation and management",
      "Queue-based playback",
      "Admin panel for content",
    ],
  },
  {
    id: "etenbijsuti",
    title: "etenbijsuti.nl",
    client: "Thai catering",
    description:
      "A catering website for Thai food with a full menu, catering request form and contact options.",
    longDescription:
      "A website for a Thai food catering business. It presents an extensive menu with categories, a form for catering requests and a clear overview of what is on offer. Built with Next.js and Tailwind CSS for fast load times on every device.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "projects/etenbijsuti.webp",
    link: "https://etenbijsuti.nl",
    highlights: [
      "Full menu with categories",
      "Catering request form",
      "Fast, statically rendered pages",
      "Responsive design",
    ],
  },
  {
    id: "portfolio",
    title: "This portfolio",
    client: "Personal",
    description:
      "The site you are looking at. A calm, accessible one-pager with light and dark mode and a working contact form.",
    longDescription:
      "Built with React 19 and Vite, styled with Tailwind CSS and animated sparingly with Motion. The layout follows your system's light or dark preference, respects reduced-motion settings and uses self-hosted fonts. The contact form sends messages through EmailJS.",
    tech: ["React", "Tailwind CSS", "Motion", "EmailJS"],
    highlights: [
      "Automatic light and dark mode",
      "Respects reduced-motion settings",
      "Working contact form",
      "Self-hosted fonts, no trackers",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "He picked up our tech stack incredibly fast and started delivering production-ready features within weeks.",
    name: "Jose Cano",
    role: "Internship Supervisor",
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
