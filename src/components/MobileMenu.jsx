import { motion } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[rgba(5,5,16,0.95)] backdrop-blur-2xl"
        onClick={() => setMenuOpen(false)}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative flex flex-col items-center justify-center h-full gap-2"
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            variants={itemVariants}
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-4xl font-bold text-white/80 hover:text-white py-3 px-8 rounded-xl
                       hover:bg-white/[0.05] transition-colors duration-200"
          >
            <span className="text-indigo-400/60 text-lg font-mono mr-3">
              0{i + 1}.
            </span>
            {link.name}
          </motion.a>
        ))}

        <motion.div
          variants={itemVariants}
          className="mt-8 flex gap-6"
        >
          <a
            href="https://www.linkedin.com/in/kevin-xiu-a43471249/"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
