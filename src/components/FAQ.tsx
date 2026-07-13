import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Soniq free?",
    a: "Yes! Soniq is free to download and use. You can enjoy personalized recommendations, playlists, and more without any cost.",
  },
  {
    q: "Can I create playlists?",
    a: "Absolutely. You can build custom playlists, organize your library, and manage your favorite songs with just a few taps.",
  },
  {
    q: "Can I search artists?",
    a: "Yes, you can search for your favorite artists, albums, songs, and playlists with a powerful and fast search experience.",
  },
  {
    q: "Can I see lyrics?",
    a: "Yes! Soniq features synchronized lyrics that scroll in real time with the music, so you can sing along to every song.",
  },
  {
    q: "Can I download songs offline?",
    a: "Offline listening is on our roadmap. You'll soon be able to download your favorite tracks and listen without an internet connection.",
  },
  {
    q: "Is iOS coming?",
    a: "Yes, Soniq is coming soon to iOS. We're working hard to bring the same premium experience to iPhone and iPad users.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[120px] px-5 md:px-8">
      <div className="max-w-[840px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know about Soniq.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              >
                <span className="text-base md:text-lg font-semibold text-text">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-8 h-8 rounded-full gradient-bg-soft flex items-center justify-center"
                >
                  <Plus size={18} className="text-accent-from" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
