import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, FileText, Database, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";

type LegalKey = "privacy" | "terms" | "data" | "release";

type LegalSection = {
  id: string;
  key: LegalKey;
  title: string;
  icon: LucideIcon;
  intro: string;
  points: { heading: string; body: string }[];
};

const sections: Record<LegalKey, LegalSection> = {
  privacy: {
    id: "privacy",
    key: "privacy",
    title: "Privacy Policy",
    icon: ShieldCheck,
    intro:
      "Soniq is built around your privacy. Most of what makes Soniq personal happens directly on your device, so your listening stays yours. This policy explains what we collect and why.",
    points: [
      {
        heading: "On-device personalization",
        body: "Daily mixes, playlists, genre suggestions, and listening stats are generated locally on your device. Your listening history is not uploaded to our servers for profiling.",
      },
      {
        heading: "Information we collect",
        body: "We may collect minimal, non-identifying analytics (such as app crashes and general usage counts) to improve stability. We do not sell your personal data.",
      },
      {
        heading: "Account & payments",
        body: "If you create an account or subscribe, we store only what is required to provide the service, such as your email and subscription status, handled by our secure payment provider.",
      },
      {
        heading: "Your choices",
        body: "You can clear your local listening data at any time from Settings. You may request deletion of any account data by contacting support.",
      },
    ],
  },
  terms: {
    id: "terms",
    key: "terms",
    title: "Terms of Service",
    icon: FileText,
    intro:
      "These terms govern your use of the Soniq app and services. By using Soniq you agree to the following.",
    points: [
      {
        heading: "Eligibility",
        body: "You must be at least 13 years old to use Soniq. By using the app you confirm you meet this requirement.",
      },
      {
        heading: "Use of the service",
        body: "Soniq is provided for personal, non-commercial listening. You agree not to redistribute, reverse engineer, or misuse the service.",
      },
      {
        heading: "Subscriptions",
        body: "Paid plans renew automatically until cancelled. Refunds follow the policies of the app store you purchased from.",
      },
      {
        heading: "Content & licenses",
        body: "Music and artwork are licensed to us and are provided for streaming only. All intellectual property remains with its respective owners.",
      },
      {
        heading: "Changes & termination",
        body: "We may update these terms or discontinue features with notice. We may suspend accounts that violate these terms.",
      },
    ],
  },
  data: {
    id: "data",
    key: "data",
    title: "Data Usage",
    icon: Database,
    intro:
      "Soniq is designed to be light on your data. Here is how the app uses data and storage on your device.",
    points: [
      {
        heading: "Streaming",
        body: "Streaming music consumes data like any audio service. We adapt quality to your connection to balance quality and usage. Download for offline listening to save data.",
      },
      {
        heading: "On-device storage",
        body: "Downloaded tracks and caches are stored locally on your device. You can manage or clear this from Settings at any time.",
      },
      {
        heading: "Analytics",
        body: "We send only anonymous, aggregated diagnostics to help us fix issues and improve performance. No audio or personal listening content is transmitted.",
      },
      {
        heading: "Permissions",
        body: "Soniq requests only the permissions it needs — such as storage for offline downloads and network access for streaming.",
      },
    ],
  },
  release: {
    id: "release-notes",
    key: "release",
    title: "What's New",
    icon: FileText,
    intro:
      "The latest improvements and features in Soniq, all running locally on your device.",
    points: [
      {
        heading: "Custom Playlists",
        body: "Custom playlists now work locally, including create, add track, and remove track flows.",
      },
      {
        heading: "Daily Mix",
        body: "Daily Mix was added using listening history, favorites, and recent plays for personalized recommendations.",
      },
      {
        heading: "Playback & Library",
        body: "Playback and library behavior improved with stream-quality handling, recently played sorting, and better top-songs playback support.",
      },
    ],
  },
};

export function LegalPage({ section }: { section: LegalKey }) {
  const s = sections[section];
  const Icon = s.icon;

  return (
    <main className="min-h-screen bg-surface-2 px-5 md:px-8 py-[72px]">
      <div className="max-w-[820px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[32px] border border-border shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center">
              <Icon size={24} className="text-accent-from" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text">
              {s.title}
            </h1>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">{s.intro}</p>

          <div className="flex flex-col gap-6">
            {s.points.map((p, i) => (
              <motion.div
                key={p.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="text-lg font-semibold text-text mb-1.5">
                  {p.heading}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <Logo />
            <p className="mt-3 text-sm text-text-secondary">
              Last updated: {new Date().getFullYear()}. For questions, contact
              us from the support section on our home page.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
