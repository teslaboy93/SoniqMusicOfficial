import { motion } from "framer-motion";
import { Download, ShieldCheck, Database, EyeOff, Heart, Shield, CheckCircle2 } from "lucide-react";

const privacyHighlights = [
  {
    icon: ShieldCheck,
    title: "On-device privacy",
    description: "Your listening data stays local whenever possible.",
  },
  {
    icon: Database,
    title: "No personal data selling",
    description: "We do not sell your personal information to third parties.",
  },
  {
    icon: EyeOff,
    title: "Tracking minimized",
    description: "No invasive trackers following what you listen to.",
  },
];

export function DownloadCTA() {
  return (
    <section id="download" className="py-[72px] px-5 md:px-8 font-sans">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto pb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            Privacy You Can Trust.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Designed to protect your data while keeping your listening experience personal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[32px] overflow-hidden border border-border bg-white shadow-[0_8px_34px_rgba(20,16,60,0.08)]"
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 20% 16%, rgba(255,255,255,0.95) 0%, rgba(246,240,255,0.82) 38%, rgba(232,221,255,0.86) 100%), radial-gradient(circle at 78% 36%, rgba(154,130,219,0.22), transparent 54%)",
            }}
          />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center p-8 md:p-12 lg:p-14">
            <div className="text-center lg:text-left flex flex-col gap-5 items-center lg:items-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/78 border border-white/70 text-xs font-semibold text-text-secondary shadow-[0_10px_24px_rgba(103,80,164,0.08)] backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full gradient-bg" />
                Your data stays with you
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
                Privacy first,
                <br />
                <span className="gradient-text">always.</span>
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                Soniq is built with privacy at its core so your music journey stays personal and under your control.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 w-full max-w-[540px]">
                {privacyHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/80 bg-white/88 p-4 flex items-start gap-3 shadow-[0_4px_18px_rgba(80,60,150,0.06)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(160deg,rgba(161,136,224,0.22),rgba(103,80,164,0.08))] border border-white/60 flex items-center justify-center text-[#6b52b1] flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                      <p className="text-xs text-text-secondary mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 items-center lg:items-start pt-1">
                <a href="#" className="btn-primary text-base px-8 py-4">
                  <Download size={20} />
                  Download Securely
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-[#cfbeff] bg-[radial-gradient(circle,rgba(156,126,236,0.22),rgba(156,126,236,0.02)_58%,transparent)]" />
              </div>
              <div className="relative w-[260px] h-[260px] rounded-[32px] border border-white/70 bg-[linear-gradient(170deg,rgba(177,153,240,0.45),rgba(113,89,187,0.28))] backdrop-blur-xl shadow-[0_24px_50px_rgba(90,65,170,0.22)] flex items-center justify-center">
                <div className="absolute inset-0 rounded-[32px] border border-white/40" />
                <Shield className="text-white/95 drop-shadow-[0_6px_16px_rgba(255,255,255,0.2)]" size={84} strokeWidth={1.8} />
              </div>

              <div className="absolute -left-2 -bottom-2 rounded-2xl border border-border/80 bg-white/92 p-4 w-[220px] shadow-[0_12px_28px_rgba(52,35,110,0.12)]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[linear-gradient(160deg,rgba(161,136,224,0.22),rgba(103,80,164,0.08))] border border-white/60 flex items-center justify-center text-[#6b52b1]">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text">For music lovers, not data collectors</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Your listening journey stays personal and private.</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-6 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-[0_8px_22px_rgba(52,35,110,0.12)] flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#6b52b1]" />
                <span className="text-xs font-semibold text-text">Protected by design</span>
              </div>

              <div className="absolute right-6 bottom-8 rounded-full border border-white/80 bg-white/72 p-2 backdrop-blur-xl">
                <ShieldCheck size={14} className="text-[#6b52b1]" />
              </div>
              <p className="sr-only">
                Decorative illustration without device screenshot
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
