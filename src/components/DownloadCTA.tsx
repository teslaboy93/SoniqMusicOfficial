import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export function DownloadCTA() {
  return (
    <section id="download" className="py-[120px] px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[32px] overflow-hidden border border-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
        >
          {/* Soft pink gradient background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(255,47,114,0.08), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,123,102,0.08), transparent 60%)",
            }}
          />

          <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-4 items-center p-8 md:p-12 lg:p-16">
            {/* Left: phone */}
            <div className="hidden lg:flex justify-center">
              <PhoneMockup screen="nowplaying" />
            </div>

            {/* Middle: content */}
            <div className="text-center lg:text-left flex flex-col gap-5 items-center lg:items-start">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
                Ready to discover
                <br />
                your next favorite song?
              </h2>
              <p className="text-lg text-text-secondary max-w-md">
                Download Soniq and start listening today.
              </p>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <a href="#" className="btn-primary text-base px-8 py-4">
                  <Download size={20} />
                  Download for Android
                </a>
              </div>
            </div>

            {/* Right: QR placeholder */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 bg-white rounded-2xl border-2 border-border p-3 shadow-sm">
                <QRPlaceholder />
              </div>
              <p className="text-sm font-medium text-text-secondary text-center">
                Scan to download
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QRPlaceholder() {
  return (
    <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-px">
      {Array.from({ length: 64 }).map((_, i) => {
        const filled =
          // Corner squares (finder patterns)
          (i < 24 && (i % 8 < 3 || i % 8 > 4)) ||
          (i >= 40 && i < 48 && i % 8 < 3) ||
          (i >= 40 && i < 48 && i % 8 > 4) ||
          // Random-ish pattern
          ((i * 7 + 3) % 11 < 5 && !(i < 24 && i % 8 < 6 && i % 8 > 2) && !(i >= 40 && i < 48));
        return (
          <div
            key={i}
            className={filled ? "bg-text rounded-[1px]" : "bg-transparent"}
          />
        );
      })}
    </div>
  );
}
