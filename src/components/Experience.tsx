import { motion } from "framer-motion";
import homeImg from "../assets/Home.png";
import albumImg from "../assets/album.png";
import lyricsImg from "../assets/lyrics.png";
import discoverImg from "../assets/discover.png";
import searchImg from "../assets/search.png";
import libraryImg from "../assets/library.png";

type Step = {
  image: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: homeImg,
    title: "Your music starts where you left off.",
    description:
      "Continue listening instantly with personalized recommendations right on your home screen.",
  },
  {
    image: albumImg,
    title: "Your albums, beautifully organized.",
    description:
      "Browse your collection with stunning artwork and easy navigation.",
  },
  {
    image: lyricsImg,
    title: "Sing along with synchronized lyrics.",
    description:
      "Beautiful, real-time lyrics that move with the music for an immersive listening experience.",
  },
  {
    image: discoverImg,
    title: "Explore something new every day.",
    description:
      "Dive into genres, moods, trending songs, and charts — all curated to help you find your next favorite.",
  },
  {
    image: searchImg,
    title: "Find anything in seconds.",
    description:
      "Search for songs, artists, albums, and playlists with a fast, intuitive search experience.",
  },
  {
    image: libraryImg,
    title: "Everything you love in one place.",
    description:
      "Favorites, albums, playlists, and artists — all neatly organized in your personal library.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto pt-[72px] pb-12"
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

        <div className="relative">
          <div
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 flex-shrink-0 snap-center w-[280px] md:w-[320px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative w-full aspect-[9/16] max-h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] bg-white"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center px-2">
                  <h3 className="text-base md:text-lg font-semibold text-text">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 max-w-[260px]">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
