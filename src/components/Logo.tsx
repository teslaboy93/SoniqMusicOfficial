import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-9 h-9 rounded-[10px] gradient-bg flex items-center justify-center shadow-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 18V5l12-2v13"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" stroke="white" strokeWidth="2.5" />
          <circle cx="18" cy="16" r="3" stroke="white" strokeWidth="2.5" />
        </svg>
      </motion.div>
      <span className="font-bold text-xl tracking-tight text-text">Soniq</span>
    </div>
  );
}
