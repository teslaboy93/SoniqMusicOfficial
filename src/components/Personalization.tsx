import { motion } from "framer-motion";
import { CalendarDays, Zap, RotateCcw, Heart, Mic as Mic2, TrendingUp, Radio, Music2 } from "lucide-react";

const gradients = [
  "linear-gradient(135deg,#FF2F72,#FF7B66)",
  "linear-gradient(135deg,#FF5A6A,#FF9966)",
  "linear-gradient(135deg,#FF7B66,#FFB088)",
  "linear-gradient(135deg,#FF2F72,#FF5A6A)",
  "linear-gradient(135deg,#FF6B9D,#FFA07A)",
  "linear-gradient(135deg,#E8556E,#FF7B66)",
  "linear-gradient(135deg,#FF4E8E,#FF8A77)",
  "linear-gradient(135deg,#FF2F72,#FF9966)",
];

export function Personalization() {
  return (
    <section className="py-[120px] px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            Made around your taste.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Every part of Soniq adapts to what you love to listen to.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[180px]">
          {/* Daily Mix - large */}
          <BentoCard className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 opacity-90" style={{ background: gradients[0] }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-7 text-white">
              <CalendarDays size={28} />
              <div>
                <h3 className="text-2xl font-bold mb-1">Daily Mix</h3>
                <p className="text-white/80 text-sm max-w-xs">
                  A fresh mix of songs tailored to your taste, updated every day.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Quick Picks */}
          <BentoCard className="lg:col-span-2">
            <div className="h-full flex items-center gap-5 p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: gradients[1] }}>
                <Zap size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-1">Quick Picks</h3>
                <p className="text-sm text-text-secondary">Instant recommendations ready to play.</p>
              </div>
            </div>
          </BentoCard>

          {/* Listen Again */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between p-6">
              <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center">
                <RotateCcw size={22} className="text-accent-from" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1">Listen Again</h3>
                <p className="text-sm text-text-secondary">Jump back into recent tracks.</p>
              </div>
            </div>
          </BentoCard>

          {/* Favorites - gradient */}
          <BentoCard>
            <div className="absolute inset-0 opacity-90" style={{ background: gradients[3] }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              <Heart size={24} fill="white" />
              <div>
                <h3 className="text-lg font-bold mb-1">Favorites</h3>
                <p className="text-white/80 text-sm">All your loved songs in one tap.</p>
              </div>
            </div>
          </BentoCard>

          {/* Lyrics */}
          <BentoCard className="lg:col-span-2">
            <div className="h-full flex items-center gap-5 p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: gradients[5] }}>
                <Mic2 size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-1">Lyrics</h3>
                <p className="text-sm text-text-secondary">Synchronized lyrics that move with the music.</p>
              </div>
            </div>
          </BentoCard>

          {/* Trending */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between p-6">
              <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center">
                <TrendingUp size={22} className="text-accent-from" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1">Trending</h3>
                <p className="text-sm text-text-secondary">What the world is listening to.</p>
              </div>
            </div>
          </BentoCard>

          {/* Genres & Moods - wide */}
          <BentoCard className="md:col-span-2 lg:col-span-2">
            <div className="h-full flex items-center gap-5 p-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: gradients[7] }}>
                <Radio size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-1">Genres & Moods</h3>
                <p className="text-sm text-text-secondary">Curated collections for every moment and feeling.</p>
              </div>
            </div>
          </BentoCard>

          {/* Player */}
          <BentoCard>
            <div className="absolute inset-0 opacity-90" style={{ background: gradients[2] }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              <Music2 size={24} />
              <div>
                <h3 className="text-lg font-bold mb-1">Player</h3>
                <p className="text-white/80 text-sm">A beautiful, immersive listening experience.</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`relative rounded-[24px] overflow-hidden border border-border bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04),0_2px_12px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
