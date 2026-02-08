import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 w-full z-40 px-4 pt-3"
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-700 ease-out ${
          scrolled ? "liquid-glass" : "liquid-glass-subtle"
        }`}
      >
        <div className="flex justify-between items-center h-14 px-6">
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-lg font-bold text-white/90 tracking-tight">
                Kevin{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Xiu
                </span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>

            {/* Hamburger */}
            <button
              className="w-8 h-6 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-full h-[2px] bg-white/80 rounded-full origin-left"
                animate={menuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-[2px] bg-white/80 rounded-full"
                animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-[2px] bg-white/80 rounded-full origin-left"
                animate={menuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center">
              {/* Pill navigation container */}
              <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "text-white"
                        : "text-white/45 hover:text-white/80"
                    }`}
                  >
                    {activeSection === link.href.slice(1) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/[0.1] rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/kevin-xiu-a43471249/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-1.5 text-sm font-semibold rounded-lg
                  bg-white/[0.12] text-white/90 border border-white/[0.15]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_3px_rgba(0,0,0,0.2)]
                  hover:bg-white/[0.18] hover:border-white/[0.2]
                  transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
    </motion.nav>
  );
};
