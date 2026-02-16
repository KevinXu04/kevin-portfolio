import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Solar Panel & Home Battery Simulator",
      description:
        "Analyzes real-time weather and energy data to calculate cost savings, ROI, and environmental benefits of solar investments based on user-specific inputs.",
      longDescription:
        "A comprehensive simulator built during my time at Depot Software. The app fetches real-time weather data and electricity prices to calculate potential savings from solar panel installations. Users input their roof size, orientation, and energy consumption to get personalized ROI estimates, payback periods, and CO₂ reduction projections. Features include interactive dashboards with live data visualization, comparison views for different panel configurations, and exportable reports.",
      tech: ["React", "TailwindCSS", "Node.js", "MySQL"],
      gradient: "from-indigo-500/20 to-purple-500/20",
      accentColor: "indigo",
      icon: "⚡",
      highlights: [
        "Real-time weather API integration",
        "Interactive energy dashboards",
        "Personalized ROI calculations",
        "Built with Agile/Scrum methodology",
      ],
    },
    {
      title: "Jukebox",
      description:
        "A Spotify-like music streaming app built with Laravel. Users can stream songs, create playlists, and explore tracks with a beautiful interface.",
      longDescription:
        "A full-featured music streaming platform inspired by Spotify, built with PHP Laravel on the backend and a responsive JavaScript frontend. Users can browse an extensive library of songs, create and manage personal playlists, search by artist or genre, and enjoy uninterrupted playback. The app supports user authentication, song uploads for admins, album artwork management, and queue-based playback with shuffle and repeat modes.",
      tech: ["PHP (Laravel)", "MySQL", "JavaScript", "CSS"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      icon: "🎵",
      highlights: [
        "Full authentication system",
        "Playlist creation & management",
        "Queue-based music playback",
        "Admin panel for content management",
      ],
    },
    {
      title: "Trade-in Platform",
      description:
        "A full-featured trade-in platform for GSM Parts Center, allowing customers to trade in their devices with automated valuations, logistics tracking, and inventory management.",
      longDescription:
        "Developed for GSM Parts Center, this platform digitizes the entire device trade-in process. Customers can select their device model, answer condition questions, and receive an instant valuation. The system handles shipping label generation, device inspection workflows, payment processing, and inventory integration. The admin dashboard provides real-time analytics on trade-in volumes, device categories, and revenue metrics. Built to handle high transaction volumes with a focus on UX simplicity.",
      tech: ["React", "Laravel", "MySQL", "TailwindCSS"],
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accentColor: "emerald",
      icon: "📱",
      link: "https://tradein.xuprojects.dev",
      highlights: [
        "Automated device valuation engine",
        "End-to-end logistics tracking",
        "Admin analytics dashboard",
        "Inventory management system",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "The site you're viewing now! Built with React and Framer Motion featuring a liquid glass design, smooth animations, and a working contact form.",
      longDescription:
        "This portfolio showcases my projects and skills with a focus on design and interactivity. Built from scratch with React 19 and Vite, it features iOS 26-inspired liquid glass effects, animated gradient mesh backgrounds, a custom cursor system, Framer Motion page animations, and a fully working contact form powered by EmailJS. Every detail — from the scrolling star field to the hover micro-interactions — was crafted to create a memorable experience.",
      tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      gradient: "from-cyan-500/20 to-indigo-500/20",
      accentColor: "cyan",
      icon: "🚀",
      highlights: [
        "iOS 26 liquid glass design",
        "Custom cursor with trailing ring",
        "Animated gradient mesh background",
        "Working EmailJS contact form",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 md:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-400/80 tracking-wider uppercase">
              My work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>
        </RevealOnScroll>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card overflow-hidden group h-full flex flex-col card-shine relative hover:z-10 cursor-hover"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedProject(project)
                }
              >
                {/* Top gradient banner */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`text-3xl p-2 rounded-lg bg-${project.accentColor}-500/10`}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white leading-snug mt-1 group-hover:text-indigo-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags + View more */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]
                                   text-white/50 font-mono hover:border-indigo-500/30 hover:text-indigo-300/70
                                   transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="ml-auto text-xs text-indigo-400/60 group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1">
                      View details
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* More projects hint */}
        <RevealOnScroll delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 text-center"
          >
            <p className="text-white/25 text-sm font-mono">
              More projects coming soon...
            </p>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl
                         border border-white/[0.1] bg-[#0a0a1a]/95 backdrop-blur-2xl
                         shadow-[0_25px_80px_rgba(0,0,0,0.5)] cursor-default"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${selectedProject.gradient} opacity-80`}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08]
                           hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200 z-10"
                aria-label="Close modal"
              >
                <FaTimes className="text-white/60 text-sm" />
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-4xl p-3 rounded-xl bg-${selectedProject.accentColor}-500/10 border border-${selectedProject.accentColor}-500/20`}
                  >
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]
                                     text-white/50 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                {selectedProject.link && (
                  <div className="mb-8">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20
                                 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/30
                                 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={12} />
                      View Live Demo
                    </a>
                  </div>
                )}

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-sm font-mono text-indigo-400/70 uppercase tracking-wider mb-3">
                    About this project
                  </h4>
                  <p className="text-white/55 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && (
                  <div className="mb-8">
                    <h4 className="text-sm font-mono text-indigo-400/70 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.highlights.map((highlight, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + j * 0.08 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedProject.gradient} opacity-80 shrink-0`}
                          />
                          <span className="text-sm text-white/60">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies breakdown */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <h4 className="text-sm font-mono text-indigo-400/70 uppercase tracking-wider mb-3">
                    Built with
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + j * 0.05 }}
                        className="text-sm px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]
                                   text-white/60 font-medium hover:border-indigo-500/30 hover:text-indigo-300
                                   transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
