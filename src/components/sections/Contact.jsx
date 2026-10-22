import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  WarningCircle,
} from "@phosphor-icons/react";
import { Reveal } from "../Reveal";
import { links } from "../../data/content";
import { useLang } from "../../i18n/language";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns message keys (see strings.contact.errors) so they follow the active language
const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "nameRequired";
  if (!email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "emailInvalid";
  if (!message.trim()) errors.message = "messageRequired";
  return errors;
};

const Field = ({ id, label, error, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-sm text-danger">
        {error}
      </p>
    )}
  </div>
);

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-bg px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-soft ${
    hasError ? "border-danger" : "border-line hover:border-muted"
  }`;

export const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const { s } = useLang();
  const errorText = (field) => errors[field] && s.contact.errors[errors[field]];

  // Spam guards: bots fill the hidden "website" field and submit within moments of page load
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    const honeypot = formRef.current.elements.website.value;
    const tooFast = Date.now() - mountedAt.current < 2000;
    if (honeypot || tooFast) {
      // Pretend it worked so bots get no signal to retry
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setStatus("sending");
    try {
      // Loaded on demand: most visitors never submit the form
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const channels = [
    { icon: EnvelopeSimple, label: links.email, href: `mailto:${links.email}` },
    { icon: Phone, label: links.phone, href: links.phoneHref },
  ];

  const socials = [
    { icon: LinkedinLogo, label: "LinkedIn", href: links.linkedin },
    { icon: GithubLogo, label: "GitHub", href: links.github },
    { icon: InstagramLogo, label: "Instagram", href: links.instagram },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{s.contact.title}</h2>
          <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-muted">{s.contact.intro}</p>

          <ul className="mt-10 space-y-4">
            {channels.map(({ icon: Icon, label, href }) => (
              <li key={href}>
                <a href={href} className="link inline-flex items-center gap-3 text-lg font-medium hover:text-accent">
                  <Icon size={22} className="text-muted" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-10 flex flex-wrap gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-fg"
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-5 rounded-2xl border border-line bg-surface p-6 md:p-8"
          >
            {/* Honeypot: hidden from people and screen readers, tempting for bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <Field id="name" label={s.contact.name} error={errorText("name")}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClass(errors.name)}
              />
            </Field>

            <Field id="email" label={s.contact.email} error={errorText("email")}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass(errors.email)}
              />
            </Field>

            <Field id="message" label={s.contact.message} error={errorText("message")}>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClass(errors.message)} resize-y`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full whitespace-nowrap rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-[opacity,scale] duration-150 hover:opacity-90 motion-safe:active:scale-[0.98] disabled:opacity-60"
            >
              {status === "sending" ? s.contact.sending : s.contact.send}
            </button>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="flex items-start gap-2 text-sm text-accent">
                  <CheckCircle size={18} className="shrink-0" />
                  {s.contact.sent}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-start gap-2 text-sm text-danger">
                  <WarningCircle size={18} className="shrink-0" />
                  {s.contact.failed(links.email)}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
