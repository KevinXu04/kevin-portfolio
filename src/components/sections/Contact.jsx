import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus("sent");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      toast.error("Failed to send message. Please try again or email me directly.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "x.kevinxiu@hotmail.com",
      href: "mailto:x.kevinxiu@hotmail.com",
    },
    {
      icon: <FaPhone size={18} />,
      label: "Phone",
      value: "+31 6 42 80 88 88",
      href: "tel:+31642808888",
    },
  ];

  const socials = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/kevin-xiu-a43471249/",
      label: "LinkedIn",
      handle: "kevin-xiu",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/kevinxu04",
      label: "GitHub",
      handle: "kevinxu04",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/realkevinxu/",
      label: "Instagram",
      handle: "@realkevinxu",
    },
  ];

  const inputClasses = (field) =>
    `w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-white placeholder:text-white/20
     transition-all duration-300 outline-none text-sm
     ${
       focusedField === field
         ? "border-indigo-500/50 bg-indigo-500/[0.03] shadow-[0_0_20px_rgba(99,102,241,0.1)]"
         : "border-white/[0.06] hover:border-white/[0.12]"
     }`;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 md:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-indigo-400/80 tracking-wider uppercase">
              Let&apos;s connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-4" />
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              Whether it&apos;s feedback, a project idea, or just a hello —
              I&apos;m happy to connect!
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={0.1} direction="left">
              <div className="space-y-6">
              {/* Contact details */}
              <div className="glass-card p-7 card-shine">
                <h3 className="text-lg font-bold text-white mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="p-3 rounded-xl bg-indigo-500/[0.08] border border-indigo-500/20
                                    group-hover:bg-indigo-500/[0.15] group-hover:border-indigo-500/30
                                    transition-all duration-300"
                      >
                        <span className="text-indigo-400">{item.icon}</span>
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-white/30 uppercase tracking-wider font-mono">
                          {item.label}
                        </p>
                        <p className="text-sm text-white/60 group-hover:text-indigo-300 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-7 card-shine">
                <h3 className="text-lg font-bold text-white mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]
                                    group-hover:bg-indigo-500/[0.08] group-hover:border-indigo-500/20
                                    transition-all duration-300"
                      >
                        <span className="text-white/40 group-hover:text-indigo-400 transition-colors duration-300">
                          {social.icon}
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                          {social.label}
                        </p>
                        <p className="text-xs text-white/25">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <RevealOnScroll delay={0.2} direction="right">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card p-8 md:p-10 card-shine"
              >
                <h3 className="text-lg font-bold text-white mb-8">
                  Send Me a Message
                </h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("name")}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("email")}
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses("message")} resize-none`}
                      placeholder="Hello Kevin, I have a project idea..."
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300
                      flex items-center justify-center gap-2 cursor-pointer
                      ${
                        status === "sent"
                          ? "bg-green-500/20 border border-green-500/30 text-green-400"
                          : status === "error"
                          ? "bg-red-500/20 border border-red-500/30 text-red-400"
                          : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                      }
                      disabled:opacity-60 disabled:cursor-not-allowed
                    `}
                  >
                    <AnimatePresence mode="wait">
                      {status === "sending" ? (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FaSpinner className="animate-spin" />
                          Sending...
                        </motion.span>
                      ) : status === "sent" ? (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FaCheck />
                          Message Sent!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FaPaperPlane />
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
