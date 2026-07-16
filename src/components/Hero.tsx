import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import heroImage from "../assets/Hero.png";

const floatingChips = [
  { label: "Daily Mix", x: "-10%", y: "14%", delay: 0 },
  { label: "Trending", x: "78%", y: "20%", delay: 0.5 },
  { label: "Quick Picks", x: "-14%", y: "42%", delay: 1 },
  { label: "Listen Again", x: "80%", y: "48%", delay: 1.5 },
  { label: "New Releases", x: "-8%", y: "72%", delay: 2 },
];

const floatingChipPositions = {
  "Daily Mix": "left-[0%] top-[2%] sm:left-[-10%] sm:top-[14%]",
  Trending: "left-[82%] top-[10%] sm:left-[92%] sm:top-[20%]",
  "Quick Picks": "left-[0%] top-[35%] sm:left-[-9%] sm:top-[50%] lg:top-[52%]",
  "Listen Again": "left-[80%] top-[48%] sm:left-[88%] sm:top-[48%]",
  "New Releases": "left-[0%] top-[76%] sm:left-[34%] sm:top-[20%] lg:left-[38%] lg:top-[10%]",
} as const;

export function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-start pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 overflow-hidden bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.98)_0%,rgba(249,247,255,0.96)_28%,rgba(240,233,255,0.96)_58%,rgba(224,211,255,1)_100%)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.85) 0, rgba(255,255,255,0.45) 22%, transparent 48%), radial-gradient(circle at 86% 22%, rgba(169,138,230,0.34) 0, transparent 28%), radial-gradient(circle at 90% 78%, rgba(103,80,164,0.22) 0, transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0))",
          }}
        />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-28 -left-28 w-[560px] h-[560px] rounded-full blur-[120px] opacity-50"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0))" }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-0 w-[680px] h-[680px] rounded-full blur-[150px] opacity-60"
          style={{ background: "radial-gradient(circle, rgba(170,141,231,0.35), rgba(170,141,231,0))" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(224,211,255,0.9), rgba(224,211,255,0)), repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 1px, transparent 1px 36px)",
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div>

      <div className="max-w-[1360px] w-full mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
        <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex mt-12 sm:mt-0 items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/70 text-xs font-semibold text-text-secondary self-center lg:self-start shadow-[0_10px_30px_rgba(103,80,164,0.08)] backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full gradient-bg" />
            Now available on Android
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.8rem] font-extrabold tracking-tight leading-[0.94] text-text lg:-mt-1"
          >
            Music,
            <br />
            <span className="whitespace-nowrap">personalized for</span>
            <br />
            <span className="gradient-text">every mood.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base md:text-xl text-text-secondary leading-relaxed max-w-xl mt-0.5 sm:mt-2 lg:-mt-1"
          >
            Discover new favorites, revisit the songs you love, and enjoy
            uninterrupted listening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
          >
            <a href="#download" className="btn-primary">
              <Download size={18} />
              Download App
            </a>
            <a href="#features" className="btn-secondary">
              See Features
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[520px] lg:min-h-[680px] -mt-16 sm:-mt-4 lg:mt-0">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[72%] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0)_70%)] blur-3xl" />
          </div>
          <motion.img
            src={heroImage}
            alt="Hero"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[820px] max-h-[560px] sm:max-h-[640px] object-contain drop-shadow-[0_28px_60px_rgba(77,54,139,0.18)] translate-y-[-20px] sm:translate-y-0 lg:-translate-y-6"
          />
          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: chip.delay,
              }}
              className={`absolute z-20 hidden items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-full bg-white/88 border border-white/70 shadow-[0_14px_34px_rgba(103,80,164,0.12)] text-xs font-semibold text-text backdrop-blur-xl sm:flex sm:scale-100 scale-90 ${floatingChipPositions[chip.label as keyof typeof floatingChipPositions]}`}
              style={{
                opacity: chip.label === "Trending" || chip.label === "Listen Again" ? 0.95 : 1,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
              {chip.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
