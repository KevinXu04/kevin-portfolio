import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { links, navLinks } from "../data/content";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();

  // Compact the bar once the visitor scrolls past the top; hysteresis avoids flicker at the threshold
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled((was) => (was ? y > 8 : y > 48));
  });

  // Highlight the nav item of the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-soft ${
        scrolled || menuOpen
          ? "border-line bg-bg/85 shadow-soft backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-[height] duration-300 ease-soft motion-reduce:transition-none md:px-8 ${
          scrolled && !menuOpen ? "h-14" : "h-16"
        }`}
      >
        <a href="#home" className="text-[15px] font-semibold tracking-tight">
          Kevin Xiu
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="md:ml-2">
            <ThemeToggle />
          </div>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden rounded-full border border-line px-4 py-2 text-sm font-medium transition-[border-color,scale] duration-150 hover:border-fg motion-safe:active:scale-[0.98] md:inline-flex"
          >
            LinkedIn
          </a>

          <button
            type="button"
            className="-mr-2 rounded-full p-2 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="z-45 h-[calc(100dvh-4rem)] border-t border-line bg-bg px-4 pt-6 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-2xl font-medium tracking-tight ${
                      active === link.id ? "bg-surface-2" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-line px-5 py-3 font-medium"
            >
              LinkedIn
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
