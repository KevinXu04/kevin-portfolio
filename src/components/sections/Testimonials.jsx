import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaQuoteLeft } from "react-icons/fa";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jose",
      role: "Internship Supervisor",
      company: "GSM Parts Center",
      quote:
        "Kevin is one of the most driven and talented interns I've had the pleasure of supervising. He picked up our tech stack incredibly fast and started delivering production-ready features within weeks. His work on the trade-in platform was outstanding. He took full ownership, communicated clearly, and consistently went above and beyond. I didn't hesitate to bring him on as a developer after his internship. Any team would be lucky to have him.",
      avatar: "J",
      accentColor: "from-indigo-500 to-purple-500",
    },
    {
      name: "Angelique Noordijk",
      role: "Product Owner",
      company: "Depot Software",
      quote:
        "Kevin played a key role in building our solar panel and home battery simulator. He was proactive, creative, and always came up with smart solutions to complex problems. His dashboards were intuitive and visually polished, and he consistently delivered on time during sprints. What impressed me most was his ability to translate technical requirements into a product that our clients could actually use and understand. A real asset to the team.",
      avatar: "A",
      accentColor: "from-cyan-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-400/80 tracking-wider uppercase">
              What others say
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
              Testi
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                monials
              </span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>
        </RevealOnScroll>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card p-8 md:p-10 card-shine relative hover:z-10 h-full flex flex-col"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${testimonial.accentColor} opacity-20`}
                  >
                    <FaQuoteLeft className="text-2xl text-white" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-white/60 text-base leading-relaxed mb-8 italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.accentColor} 
                      flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/40 text-sm">
                      {testimonial.role} &middot;{" "}
                      <span className="text-indigo-400/60">
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Decorative gradient line at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${testimonial.accentColor} opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-b-2xl`}
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
