import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiSharp,
  SiMysql,
  SiJavascript,
  SiLaravel,
} from "react-icons/si";

export const About = () => {
  const birthDate = new Date(2004, 5, 1); // June 1, 2004
  const age = Math.floor((Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { name: "C#", icon: <SiSharp />, color: "#512BD4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  ];

  const experiences = [
    {
      period: "2026 - Present",
      title: "Software Developer Part Time",
      company: "GSM Parts Center",
      description:
        "Improved the trade-in platform and created an admin dashboard enabling customers to trade in devices seamlessly, handling valuations, logistics, and inventory management.",
    },
    {
      period: "2025 - 2026",
      title: "Software Development Intern",
      company: "GSM Parts Center",
      description:
        "Developed a trade-in platform for device trade-ins, streamlining the customer journey from valuation to processing.",
    },
    {
      period: "2024 - 2025",
      title: "Software Developer",
      company: "Depot Software",
      description:
        "Built a solar panel and home battery simulator, designing dashboards, leading Agile sprints, and integrating APIs with MySQL for data insights.",
    },
    {
      period: "2023 - 2024",
      title: "Software Development Intern",
      company: "GSM Parts Center",
      description:
        "Designed and developed 5+ client webshops, tailoring plugins and optimizing UX/UI through client collaboration.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 md:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-400/80 tracking-wider uppercase">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          </div>
        </RevealOnScroll>

        {/* Bio */}
        <RevealOnScroll delay={0.1}>
          <div className="glass-card p-8 md:p-10 mb-12 card-shine">
            <p className="text-white/60 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Hi, I&apos;m Kevin, a{" "}
              <span className="text-white font-medium">{age} year old Software Developer</span>{" "}
              from Dordrecht. I recently graduated from{" "}
              <span className="text-indigo-300">ROC Da Vinci College</span>{" "}
              and I&apos;m now pursuing{" "}
              <span className="text-indigo-300">
                Business IT &amp; Management at Hogeschool Rotterdam
              </span>
              . I&apos;m passionate about building impactful software and have
              professional experience at companies like Depot Software and GSM Parts Center.
            </p>
          </div>
        </RevealOnScroll>

        {/* Skills grid */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    boxShadow: `0 8px 30px ${skill.color}20`,
                  }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]
                             hover:border-white/[0.15] transition-all duration-300 cursor-default"
                >
                  <span style={{ color: skill.color }} className="text-lg">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-white/70">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <RevealOnScroll delay={0.1} direction="left">
            <div className="glass-card p-8 h-full card-shine group relative hover:z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-indigo-500/20">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-indigo-400" />
                  <div className="mb-1">
                    <span className="text-xs font-mono text-indigo-400/70 tracking-wider">
                      2026 — 2030
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-0.5">
                    HBO Business IT & Management
                  </h4>
                  <p className="text-white/40 text-sm">Hogeschool Rotterdam</p>
                </div>
                <div className="relative pl-6 border-l-2 border-indigo-500/20">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-indigo-400" />
                  <div className="mb-1">
                    <span className="text-xs font-mono text-indigo-400/70 tracking-wider">
                      2022 — 2026
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-0.5">
                    MBO 4 Software Developer
                  </h4>
                  <p className="text-white/40 text-sm">ROC Da Vinci College</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll delay={0.2} direction="right">
            <div className="glass-card p-8 h-full card-shine group relative hover:z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-purple-500/20"
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-purple-400" />
                    <div className="mb-1">
                      <span className="text-xs font-mono text-purple-400/70 tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-0.5">
                      {exp.title}
                    </h4>
                    <p className="text-indigo-300/60 text-sm mb-1.5">
                      {exp.company}
                    </p>
                    <p className="text-white/35 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
