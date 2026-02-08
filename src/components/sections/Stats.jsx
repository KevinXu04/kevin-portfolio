import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaCode, FaBriefcase, FaGraduationCap, FaCoffee } from "react-icons/fa";

export const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      icon: <FaBriefcase />,
      value: 2,
      suffix: "",
      label: "Work Experiences",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaCode />,
      value: 5,
      suffix: "+",
      label: "Projects Built",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaGraduationCap />,
      value: 10,
      suffix: "+",
      label: "Technologies",
      color: "from-cyan-500 to-indigo-500",
    },
    {
      icon: <FaCoffee />,
      value: 999,
      suffix: "+",
      label: "Cups of Coffee",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section ref={ref} className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card p-6 md:p-8 text-center group cursor-default"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} opacity-20 
                              group-hover:opacity-40 transition-opacity duration-300 mb-4`}
                >
                  <span className="text-white text-xl opacity-100">
                    {stat.icon}
                  </span>
                </div>

                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>

                <p className="text-xs md:text-sm text-white/40 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
