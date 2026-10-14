import { m, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { projects } from "../../data/content";

const featured = projects.filter((p) => p.image);

// Hero text is visible from the first paint (it is the LCP element); it only settles 8px into place
const fadeUp = (delay, reduce) => ({
  initial: reduce ? false : { y: 8 },
  animate: { y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export const Home = () => {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-14 px-4 pb-20 pt-28 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-24"
    >
      <div className="lg:col-span-5">
        <m.p
          {...fadeUp(0, reduce)}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted"
        >
          {/* Real availability state, so the dot carries meaning */}
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Available for new opportunities
        </m.p>

        <m.h1
          {...fadeUp(0.08, reduce)}
          className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl"
        >
          Kevin Xiu
          <span className="mt-3 block text-3xl font-normal tracking-tight text-muted md:text-4xl">
            Software developer
          </span>
        </m.h1>

        <m.p
          {...fadeUp(0.16, reduce)}
          className="mt-8 max-w-[42ch] text-lg leading-relaxed text-muted"
        >
          I build web platforms and dashboards for businesses, and study Applied
          Data Science &amp; AI at Hogeschool Rotterdam.
        </m.p>

        <m.div {...fadeUp(0.24, reduce)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-[opacity,scale] duration-150 hover:opacity-90 motion-safe:active:scale-[0.98]"
          >
            View projects
            <ArrowRight
              size={16}
              className="transition-transform motion-safe:group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-medium transition-[border-color,scale] duration-150 hover:border-fg motion-safe:active:scale-[0.98]"
          >
            Contact
          </a>
        </m.div>
      </div>

      {/* Two shipped projects, shown whole (16:10, the native ratio) with labels below */}
      <m.ul
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7"
      >
        {featured.map((project, i) => (
          <li key={project.id} className={i === 1 ? "sm:mt-16" : ""}>
            <a href="#projects" className="group block">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow,translate] duration-300 ease-soft group-hover:border-muted group-hover:shadow-soft motion-safe:group-hover:-translate-y-1">
                <img
                  src={project.image}
                  alt={`Homepage of ${project.title}`}
                  width="1440"
                  height="900"
                  fetchPriority={i === 0 ? "high" : undefined}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium">{project.title}</p>
              <p className="text-sm text-muted">{project.client}</p>
            </a>
          </li>
        ))}
      </m.ul>
    </section>
  );
};
