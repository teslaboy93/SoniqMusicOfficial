import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.img
        src={logo}
        alt="Soniq"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-9 h-9 rounded-[10px] shadow-sm object-contain"
      />
      <span className="font-bold text-xl tracking-tight text-text">Soniq</span>
    </div>
  );
}
