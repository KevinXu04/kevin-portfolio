import { Reveal } from "../Reveal";
import { education, experiences } from "../../data/content";
import { useLang } from "../../i18n/language";

const Entry = ({ period, title, org, description }) => (
  <div className="grid gap-1 border-t border-line pt-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
    <p className="font-mono text-[13px] text-muted sm:pt-1">{period}</p>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-accent">{org}</p>
      {description && (
        <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{description}</p>
      )}
    </div>
  </div>
);

export const Experience = () => {
  const { s, t } = useLang();
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Heading stays in view while the timeline scrolls on large screens */}
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {s.experience.title}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-16 lg:col-span-8">
          <div className="space-y-8">
            <h3 className="text-lg font-semibold">{s.experience.work}</h3>
            {experiences.map((exp) => (
              <Reveal key={exp.id}>
                <Entry
                  period={t(exp.period)}
                  title={t(exp.title)}
                  org={exp.company}
                  description={t(exp.description)}
                />
              </Reveal>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-semibold">{s.experience.education}</h3>
            {education.map((edu) => (
              <Reveal key={edu.id}>
                <Entry
                  period={t(edu.period)}
                  title={edu.title}
                  org={edu.school}
                  description={t(edu.level)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
