import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaArrowDown, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Hero gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <RevealOnScroll>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-indigo-300/80 font-medium">
              Available for opportunities
            </span>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Kevin Xiu
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="text-xl md:text-2xl text-white/50 mb-4 font-mono h-8">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Frontend Enthusiast",
                2000,
                "Problem Solver",
                2000,
                "Tech Student",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-indigo-300/70"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="text-white/40 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Building modern web experiences with clean code and creative design.
            Recently graduated &amp; heading to Hogeschool Rotterdam for Business IT &amp; Management.
            Always looking for the next challenge.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cosmic-button flex items-center gap-2 group"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl border border-white/[0.1] text-white/70 font-semibold
                         hover:bg-white/[0.04] hover:border-indigo-500/30 hover:text-white
                         transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          {/* Social links */}
          <div className="flex justify-center items-center gap-4">
            {[
              {
                icon: <FaLinkedin size={20} />,
                href: "https://www.linkedin.com/in/kevin-xiu-a43471249/",
                label: "LinkedIn",
              },
              {
                icon: <FaInstagram size={20} />,
                href: "https://www.instagram.com/realkevinxu/",
                label: "Instagram",
              },
              {
                icon: <HiOutlineMail size={20} />,
                href: "mailto:x.kevinxiu@hotmail.com",
                label: "Email",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/40
                           hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]
                           transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </RevealOnScroll>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/20 font-mono tracking-widest uppercase">
              Scroll
            </span>
            <FaArrowDown className="text-white/20" size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
