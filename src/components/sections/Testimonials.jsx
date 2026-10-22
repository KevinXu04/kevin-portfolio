import { Reveal } from "../Reveal";
import { testimonials } from "../../data/content";
import { useLang } from "../../i18n/language";

export const Testimonials = () => {
  const { lang, s, t } = useLang();
  return (
    <section aria-labelledby="testimonials-title" className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 id="testimonials-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
          {s.testimonials.title}
        </h2>
      </Reveal>

      <div className="mt-12 space-y-16">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} className={i % 2 === 1 ? "md:ml-auto md:max-w-3xl" : "md:max-w-3xl"}>
            <figure className="border-l-2 border-accent pl-6 md:pl-8">
              {/* Quotes are the original English words; mark them as English on the Dutch page */}
              <blockquote
                lang={lang === "en" ? undefined : "en"}
                className="text-xl leading-relaxed md:text-2xl md:leading-relaxed"
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-muted">
                  , {t(item.role)} {s.testimonials.at} {item.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
