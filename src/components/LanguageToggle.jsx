import { LANGS, useLang } from "../i18n/language";

export const LanguageToggle = () => {
  const { lang, setLang, s } = useLang();

  return (
    <div role="group" aria-label={s.language.label} className="flex rounded-full border border-line p-0.5">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          title={s.language[code]}
          className={`rounded-full px-2.5 py-1 text-xs font-medium uppercase transition-colors ${
            lang === code ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
          }`}
        >
          {code}
          <span className="sr-only"> ({s.language[code]})</span>
        </button>
      ))}
    </div>
  );
};
