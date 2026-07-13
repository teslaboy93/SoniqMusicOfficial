import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";

type Screen = "home" | "discover" | "quickpicks" | "nowplaying" | "library";

type Step = {
  screen: Screen;
  step: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    screen: "home",
    step: "01",
    title: "Your music starts where you left off.",
    description:
      "Continue listening instantly with personalized recommendations right on your home screen.",
  },
  {
    screen: "discover",
    step: "02",
    title: "Explore something new every day.",
    description:
      "Dive into genres, moods, trending songs, and charts — all curated to help you find your next favorite.",
  },
  {
    screen: "quickpicks",
    step: "03",
    title: "Recommendations that evolve with you.",
    description:
      "Smart suggestions based on your listening habits, getting better the more you listen.",
  },
  {
    screen: "nowplaying",
    step: "04",
    title: "Immerse yourself in every song.",
    description:
      "A beautiful player with synchronized lyrics that brings you closer to the music you love.",
  },
  {
    screen: "library",
    step: "05",
    title: "Everything you love in one place.",
    description:
      "Favorites, albums, playlists, and artists — all neatly organized in your personal library.",
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stepIndex = useTransform(scrollYProgress, (v) => {
    const clamped = Math.max(0, Math.min(v, 1));
    return Math.min(Math.floor(clamped * steps.length), steps.length - 1);
  });

  return (
    <section id="experience" ref={containerRef} className="relative px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto pt-[120px] pb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            An experience that
            <br />
            flows with you.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Scroll through the journey of using Soniq, from home to library.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: sticky phone */}
          <div className="hidden lg:block self-start">
            <div className="sticky top-24 flex justify-center py-10">
              <PhoneStepDisplay stepIndex={stepIndex} />
            </div>
          </div>

          {/* Right: scrollable steps */}
          <div className="flex flex-col">
            {steps.map((s) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="min-h-[70vh] flex flex-col justify-center py-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold gradient-text">{s.step}</span>
                  <div className="h-px flex-1 max-w-[60px] bg-border" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-text leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                  {s.description}
                </p>
                {/* Mobile phone preview */}
                <div className="lg:hidden mt-8 flex justify-center">
                  <PhoneMockup screen={s.screen} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneStepDisplay({ stepIndex }: { stepIndex: MotionValue<number> }) {
  return (
    <div className="relative w-[260px] h-[540px]">
      {steps.map((s, i) => {
        const opacity = useTransform(stepIndex, (v) => (v === i ? 1 : 0));
        const scale = useTransform(stepIndex, (v) => (v === i ? 1 : 0.92));
        const y = useTransform(stepIndex, (v) => (v === i ? 0 : 20));
        return (
          <motion.div
            key={s.screen}
            style={{ opacity, scale, y }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center"
          >
            <PhoneMockup screen={s.screen} float={false} />
          </motion.div>
        );
      })}
    </div>
  );
}
