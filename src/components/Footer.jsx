import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[rgba(5,5,16,0.6)] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-lg font-bold text-white mb-2 block">
              Kevin{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Xiu
              </span>
            </a>
            <p className="text-sm text-white/40">
              &copy; {currentYear} Kevin Xiu. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/40 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaLinkedin size={18} />,
                href: "https://www.linkedin.com/in/kevin-xiu-a43471249/",
              },
              {
                icon: <FaGithub size={18} />,
                href: "https://github.com/kevinxu04",
              },
              {
                icon: <FaInstagram size={18} />,
                href: "https://www.instagram.com/realkevinxu/",
              },
              {
                icon: <FaEnvelope size={18} />,

                href: "mailto:x.kevinxiu@hotmail.com",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/50
                           hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]
                           transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <p className="mt-4 text-center text-xs text-white/20 font-mono">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};
