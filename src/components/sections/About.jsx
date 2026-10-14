import { Reveal } from "../Reveal";
import { skillGroups } from "../../data/content";

const birthDate = new Date(2004, 5, 1);
const getAge = () => {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  if (now < new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate())) age--;
  return age;
};

export const About = () => {
  const facts = [
    { label: "Based in", value: "Dordrecht, the Netherlands" },
    { label: "Studying", value: "Applied Data Science & AI, Hogeschool Rotterdam" },
    { label: "Experience", value: "4 developer roles at 2 companies since 2023" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7" delay={0.05}>
          <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">
            I&apos;m Kevin, a {getAge()}-year-old software developer. After
            graduating from ROC Da Vinci College, I&apos;m now a first-year Applied
            Data Science &amp; AI student at Hogeschool Rotterdam.
          </p>
          <p className="mt-6 max-w-[60ch] leading-relaxed text-muted">
            I like building software that people use every day, and I have
            professional experience at Depot Software and GSM Parts Center.
          </p>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
          <dl className="space-y-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-20 rounded-2xl bg-surface-2 p-6 md:p-10">
        <h3 className="text-lg font-semibold">Tech stack</h3>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <p className="text-sm text-muted">{group.name}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[13px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
