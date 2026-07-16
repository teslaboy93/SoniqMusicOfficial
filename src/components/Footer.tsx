import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { SectionLink } from "./SectionLink";

const columns = [
  {
    title: "Features",
    links: [
      { label: "Daily Mixes", href: "#daily-mixes" },
      { label: "Custom Playlists", href: "#custom-playlists" },
      { label: "Genres & Moods", href: "#genres-moods" },
      { label: "Listening Stats", href: "#listening-stats" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", mailto: "teslaboy93@gmail.com" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Privacy",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Data Usage", to: "/data" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "Android", href: "#download" },
      { label: "What's New", to: "/release-notes" },
    ],
  },
];

type ColumnLink = { label: string; href?: string; to?: string; mailto?: string };

function LinkOrAnchor({ link }: { link: ColumnLink }) {
  const className =
    "text-sm text-text-secondary hover:text-text transition-colors";
  if (link.mailto) {
    return (
      <a href={`mailto:${link.mailto}`} className={className}>
        {link.label}
      </a>
    );
  }
  if (link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <SectionLink href={link.href!} className={className}>
      {link.label}
    </SectionLink>
  );
}

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
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h4 className="text-sm font-bold text-text">{col.title}</h4>
                {col.links.map((link) => (
                  <LinkOrAnchor key={link.label} link={link} />
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
