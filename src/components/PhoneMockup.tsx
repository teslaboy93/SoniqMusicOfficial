import { motion } from "framer-motion";
import { Search, Play, SkipForward, Heart, Hop as Home, Compass, Library } from "lucide-react";

type Screen = "home" | "discover" | "quickpicks" | "nowplaying" | "library";

const albumGradients = [
  "linear-gradient(135deg,#FF2F72,#FF7B66)",
  "linear-gradient(135deg,#FF5A6A,#FF9966)",
  "linear-gradient(135deg,#FF7B66,#FFB088)",
  "linear-gradient(135deg,#FF2F72,#FF5A6A)",
  "linear-gradient(135deg,#FF6B9D,#FFA07A)",
  "linear-gradient(135deg,#E8556E,#FF7B66)",
];

function AlbumArt({ i, className = "" }: { i: number; className?: string }) {
  return (
    <div
      className={`rounded-lg shrink-0 ${className}`}
      style={{ background: albumGradients[i % albumGradients.length] }}
    />
  );
}

function HomeScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 bg-surface-2 rounded-xl px-3 py-2.5">
        <Search size={14} className="text-text-secondary" />
        <div className="h-2.5 bg-text-secondary/30 rounded-full w-24" />
      </div>
      <div className="flex gap-2 overflow-hidden">
        {["Daily Mix", "Trending", "Quick Picks"].map((t, i) => (
          <div
            key={t}
            className={`text-[9px] font-semibold px-2.5 py-1.5 rounded-full whitespace-nowrap ${
              i === 0 ? "text-white gradient-bg" : "bg-surface-2 text-text-secondary"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <AlbumArt i={i} className="w-full aspect-square rounded-xl" />
            <div className="h-1.5 bg-text/15 rounded-full w-3/4" />
            <div className="h-1.5 bg-text/10 rounded-full w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscoverScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[11px] font-bold text-text">Discover</div>
      <div className="flex flex-wrap gap-2">
        {["Pop", "Chill", "Workout", "Focus", "Party"].map((t, i) => (
          <div
            key={t}
            className={`text-[9px] font-semibold px-2.5 py-1.5 rounded-full ${
              i === 0 ? "text-white gradient-bg" : "bg-surface-2 text-text-secondary"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2.5">
            <AlbumArt i={i} className="w-9 h-9" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-1.5 bg-text/20 rounded-full w-3/4" />
              <div className="h-1.5 bg-text/10 rounded-full w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickPicksScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[11px] font-bold text-text">Quick Picks</div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-2/60">
          <AlbumArt i={i} className="w-10 h-10" />
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 bg-text/20 rounded-full w-2/3" />
            <div className="h-1.5 bg-text/10 rounded-full w-1/3" />
          </div>
          <Play size={12} className="text-text-secondary" />
        </div>
      ))}
    </div>
  );
}

function NowPlayingScreen() {
  return (
    <div className="flex flex-col gap-3 items-center pt-1">
      <AlbumArt i={0} className="w-32 h-32 rounded-2xl" />
      <div className="w-full flex flex-col items-center gap-1.5">
        <div className="h-2 bg-text/20 rounded-full w-2/3" />
        <div className="h-1.5 bg-text/10 rounded-full w-1/3" />
      </div>
      <div className="w-full flex flex-col gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${i < 2 ? "gradient-bg" : "bg-text/10"}`}
            style={{ width: `${85 - i * 15}%` }}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-5 pt-1">
        <Heart size={16} className="text-accent-from" fill="#FF2F72" />
        <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center">
          <Play size={14} className="text-white" fill="white" />
        </div>
        <SkipForward size={16} className="text-text-secondary" />
      </div>
    </div>
  );
}

function LibraryScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[11px] font-bold text-text">Your Library</div>
      <div className="flex gap-2">
        {["Playlists", "Artists", "Albums"].map((t, i) => (
          <div
            key={t}
            className={`text-[9px] font-semibold px-2.5 py-1.5 rounded-full ${
              i === 0 ? "text-white gradient-bg" : "bg-surface-2 text-text-secondary"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2.5">
          <AlbumArt i={i} className="w-9 h-9" />
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 bg-text/20 rounded-full w-2/3" />
            <div className="h-1.5 bg-text/10 rounded-full w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

const screens: Record<Screen, React.ReactNode> = {
  home: <HomeScreen />,
  discover: <DiscoverScreen />,
  quickpicks: <QuickPicksScreen />,
  nowplaying: <NowPlayingScreen />,
  library: <LibraryScreen />,
};

export function PhoneMockup({
  screen = "home",
  className = "",
  float = true,
}: {
  screen?: Screen;
  className?: string;
  float?: boolean;
}) {
  return (
    <motion.div
      animate={float ? { y: [0, -6, 0] } : undefined}
      transition={float ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
      className={`relative ${className}`}
    >
      <div className="relative w-[260px] h-[540px] bg-black rounded-[40px] p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
          <div className="pt-9 px-4 pb-16 h-full flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[11px] font-bold text-text">Soniq</div>
              <div className="flex gap-1.5">
                <Home size={12} className="text-accent-from" />
                <Compass size={12} className="text-text-secondary" />
                <Library size={12} className="text-text-secondary" />
              </div>
            </div>
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 overflow-hidden"
            >
              {screens[screen]}
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
              <div className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-lg border border-border">
                <AlbumArt i={0} className="w-8 h-8 rounded-lg" />
                <div className="flex-1 flex flex-col gap-1">
                  <div className="h-1.5 bg-text/20 rounded-full w-3/4" />
                  <div className="h-1 bg-text/10 rounded-full w-1/2" />
                </div>
                <Play size={12} className="text-text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
