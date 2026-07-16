import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";
import { SectionLink } from "./SectionLink";

const links = [
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Personalization", href: "#personalization" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5"
    >
      <div
        className={`w-full max-w-[1280px] mt-3 flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <SectionLink
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              {l.label}
            </SectionLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SectionLink href="#download" className="btn-primary text-sm py-2.5 px-5">
            <Download size={16} />
            Download App
          </SectionLink>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface-2 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[72px] left-5 right-5 bg-white rounded-2xl border border-border shadow-lg p-5 flex flex-col gap-3"
          >
            {links.map((l) => (
              <SectionLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-text py-2"
              >
                {l.label}
              </SectionLink>
            ))}
            <SectionLink
              href="#download"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              <Download size={16} />
              Download App
            </SectionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
