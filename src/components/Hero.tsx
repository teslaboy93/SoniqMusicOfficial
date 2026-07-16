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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(103,80,164,0.2), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-32 w-[700px] h-[700px] rounded-full blur-[160px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(154,130,219,0.2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-xs font-semibold text-text-secondary self-center lg:self-start"
          >
            <span className="w-2 h-2 rounded-full gradient-bg" />
            Now available on Android
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-text"
          >
            Music,
            <br />
            personalized for
            <br />
            <span className="gradient-text">every mood.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Discover new favorites, revisit the songs you love, and enjoy
            uninterrupted listening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
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
        <div className="relative flex justify-center items-center min-h-[560px]">
          <motion.img
            src={heroImage}
            alt="Hero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-0 max-w-full max-h-[500px] object-contain"
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
              className="absolute z-10 hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-border shadow-md text-xs font-semibold text-text"
              style={{ left: chip.x, top: chip.y }}
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
