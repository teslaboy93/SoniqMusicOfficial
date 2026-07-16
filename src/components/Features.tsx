import { motion } from "framer-motion";
import {
  CalendarDays,
  ListMusic,
  Radio,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  id: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "Daily Mixes",
    id: "daily-mixes",
    description:
      "Fresh playlists crafted for you every single day, powered by on-device algorithms that learn your taste.",
  },
  {
    icon: ListMusic,
    title: "Custom Playlists",
    id: "custom-playlists",
    description:
      "Build and organize playlists your way, with smart suggestions that adapt to your listening habits.",
  },
  {
    icon: Radio,
    title: "Genres & Moods",
    id: "genres-moods",
    description:
      "Explore curated collections for every genre, mood, and moment — personalized locally on your device.",
  },
  {
    icon: BarChart3,
    title: "Listening Stats",
    id: "listening-stats",
    description:
      "Track your listening habits and insights with detailed stats, all processed privately on your device.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-[72px] px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            Highlights that feel
            <br />
            personal.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Powered by on-device algorithms that learn your taste and adapt
            everything to you — privately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              id={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4 group scroll-mt-28"
            >
              <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center transition-transform group-hover:scale-110">
                <f.icon size={22} className="text-accent-from" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
              <div className="mt-auto pt-2 flex gap-1.5">
                {[0, 1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full"
                    style={{
                      width: `${24 + j * 8}px`,
                      background:
                        j === 0
                          ? "linear-gradient(135deg,#6750A4,#9A82DB)"
                          : "#ECECEC",
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
