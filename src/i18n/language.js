import { createContext, useContext } from "react";
import { strings } from "./strings";

export const LANGS = ["en", "nl"];
export const STORAGE_KEY = "lang";

// Saved choice wins, then the browser language, otherwise English
export const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Storage unavailable: fall through to the browser language
  }
  const browser = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browser.some((l) => l?.toLowerCase().startsWith("nl")) ? "nl" : "en";
};

export const LanguageContext = createContext(null);

/**
 * `s` is the UI dictionary for the active language.
 * `t(value)` resolves a bilingual content field ({ en, nl }) and passes anything else through.
 */
export const useLang = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const t = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && "en" in value ? value[lang] : value;
  return { lang, setLang, s: strings[lang], t };
};
