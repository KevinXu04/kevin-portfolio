import { useEffect, useState } from "react";
import { LanguageContext, STORAGE_KEY, getInitialLang } from "./language";
import { strings } from "./strings";

export const LanguageProvider = ({ children }) => {
  // Resolved before the first render, so the page never shows the wrong language first
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = strings[lang].meta.title;
  }, [lang]);

  const setLang = (next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit only
    }
    setLangState(next);
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};
