import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, GithubLogo, X } from "@phosphor-icons/react";
import { Reveal } from "../Reveal";
import { links, projects } from "../../data/content";

// Bento layout: 4+2 / 2+4 / 6 on large screens, one column on mobile.
const layout = {
  tradein: { span: "lg:col-span-4", bg: "bg-surface" },
  solar: { span: "lg:col-span-2", bg: "bg-accent-soft" },
  jukebox: { span: "lg:col-span-2", bg: "bg-surface-2" },
  etenbijsuti: { span: "lg:col-span-4", bg: "bg-surface" },
  portfolio: { span: "lg:col-span-6", bg: "bg-surface-2" },
};

const TechList = ({ tech }) => (
  <ul className="flex flex-wrap gap-2">
    {tech.map((t) => (
      <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
        {t}
      </li>
    ))}
  </ul>
);

const ProjectTile = ({ project, onOpen }) => (
  <button
    type="button"
    onClick={(e) => onOpen(project, e.currentTarget)}
    className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line text-left transition-[border-color,box-shadow,translate] duration-300 ease-soft hover:border-muted hover:shadow-soft focus-visible:border-muted focus-visible:shadow-soft motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 ${layout[project.id].bg}`}
  >
    {project.image && (
      <div className="overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt=""
          width="1440"
          height="900"
          loading="lazy"
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-soft motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col p-6 md:p-8">
      {project.client && <p className="text-sm text-muted">{project.client}</p>}
      <h3 className="mt-1 flex items-start justify-between gap-4 text-xl font-semibold tracking-tight">
        {project.title}
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-muted transition-[translate,color] duration-300 ease-soft group-hover:text-fg motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5"
        />
      </h3>
      <p className="mt-3 max-w-[60ch] flex-1 leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6">
        <TechList tech={project.tech} />
      </div>
    </div>
  </button>
);

const ProjectDialog = ({ project, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-fg/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        className="relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface shadow-soft sm:rounded-2xl"
      >
        {project.image && (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width="1440"
            height="900"
            className="aspect-[16/9] w-full border-b border-line object-cover object-top"
          />
        )}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-line bg-surface p-2 transition-colors hover:border-fg"
        >
          <X size={16} />
        </button>

        <div className="p-6 md:p-10">
          {project.client && <p className="text-sm text-muted">{project.client}</p>}
          <h3 id="project-dialog-title" className="mt-1 pr-10 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{project.longDescription}</p>

          <h4 className="mt-8 text-sm font-semibold">Key features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-sm font-semibold">Built with</h4>
          <div className="mt-3">
            <TechList tech={project.tech} />
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-[opacity,scale] duration-150 hover:opacity-90 motion-safe:active:scale-[0.98]"
            >
              Visit website
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selected, setSelected] = useState(null);
  const triggerRef = useRef(null);

  const open = (project, trigger) => {
    triggerRef.current = trigger;
    setSelected(project);
  };

  const close = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          A selection of work from internships, clients and my own time.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.06} className={layout[project.id].span}>
            <ProjectTile project={project} onOpen={open} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg"
        >
          <GithubLogo size={18} />
          More on GitHub
        </a>
      </Reveal>

      <AnimatePresence>
        {selected && <ProjectDialog project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
};
