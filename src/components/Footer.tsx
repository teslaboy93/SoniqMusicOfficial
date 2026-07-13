import { Logo } from "./Logo";
import { Globe, MessageCircle, Send, Rss } from "lucide-react";

const columns = [
  {
    title: "Features",
    links: ["Daily Mixes", "Quick Picks", "Lyrics", "Top Charts"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Status"],
  },
  {
    title: "Privacy",
    links: ["Privacy Policy", "Terms of Service", "Data Usage"],
  },
  {
    title: "Download",
    links: ["Android", "iOS (Coming Soon)", "Release Notes"],
  },
];

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Rss, href: "#", label: "Blog" },
];

export function Footer() {
  return (
    <footer id="support" className="border-t border-border px-5 md:px-8 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Logo />
            <p className="text-sm text-text-secondary leading-relaxed">
              Soniq is a modern music streaming app focused on personalization
              and discovery — built for people who love music.
            </p>
            <div className="flex gap-2 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-surface-2 border border-border flex items-center justify-center text-text-secondary hover:text-accent-from hover:border-accent-from/30 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h4 className="text-sm font-bold text-text">{col.title}</h4>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Soniq. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Made with love for music lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}


export { Footer }