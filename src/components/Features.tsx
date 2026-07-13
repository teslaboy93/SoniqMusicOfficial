import { motion } from "framer-motion";
import {
  CalendarDays,
  Zap,
  RotateCcw,
  BarChart3,
  ListMusic,
  Mic2,
  Heart,
  Radio,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "Daily Mixes",
    description: "Fresh playlists crafted for you every single day based on your taste.",
  },
  {
    icon: Zap,
    title: "Quick Picks",
    description: "Instant recommendations ready to play the moment you open the app.",
  },
  {
    icon: RotateCcw,
    title: "Listen Again",
    description: "Jump right back into the songs and artists you recently enjoyed.",
  },
  {
    icon: BarChart3,
    title: "Top Charts",
    description: "Stay in the loop with trending tracks and the hottest charts.",
  },
  {
    icon: ListMusic,
    title: "Custom Playlists",
    description: "Build your own playlists and organize your library your way.",
  },
  {
    icon: Mic2,
    title: "Lyrics & Player",
    description: "Sing along with synchronized lyrics in a beautiful player.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description: "Save the songs you love and access them all in one tap.",
  },
  {
    icon: Radio,
    title: "Genres & Moods",
    description: "Explore curated collections for every genre, mood, and moment.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-[120px] px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            Everything you need
            <br />
            for effortless listening.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Powerful features designed to keep your music flowing seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="card p-6 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center transition-transform group-hover:scale-110">
                <f.icon size={22} className="text-accent-from" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1.5">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
              {/* Tiny placeholder illustration */}
              <div className="mt-auto pt-2 flex gap-1.5">
                {[0, 1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full"
                    style={{
                      width: `${24 + j * 8}px`,
                      background: j === 0 ? "linear-gradient(135deg,#FF2F72,#FF7B66)" : "#ECECEC",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
