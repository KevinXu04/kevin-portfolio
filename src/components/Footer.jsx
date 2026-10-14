import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { links } from "../data/content";

const socials = [
  { icon: LinkedinLogo, label: "LinkedIn", href: links.linkedin },
  { icon: GithubLogo, label: "GitHub", href: links.github },
  { icon: InstagramLogo, label: "Instagram", href: links.instagram },
];

export const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
      <p>&copy; {new Date().getFullYear()} Kevin Xiu</p>
      <ul className="flex gap-2">
        {socials.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex rounded-full p-2 transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
