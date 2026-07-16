import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);
}
