import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useLang } from "../i18n/language";

const STORAGE_KEY = "theme";
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

const getSaved = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  // Switch every color in the same frame instead of letting transitions lag behind
  root.classList.add("theme-switching");
  root.dataset.theme = theme;
  const bg = getComputedStyle(root).getPropertyValue("--bg").trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
  requestAnimationFrame(() => root.classList.remove("theme-switching"));
};

export const ThemeToggle = () => {
  // The inline script in index.html already set the initial theme
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");
  const { s } = useLang();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow system changes until the visitor makes an explicit choice
  useEffect(() => {
    const query = darkQuery();
    const onChange = (e) => {
      if (!getSaved()) setTheme(e.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit only
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? s.theme.toLight : s.theme.toDark}
      title={isDark ? s.theme.light : s.theme.dark}
      className="rounded-full p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg motion-safe:active:scale-[0.95]"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
