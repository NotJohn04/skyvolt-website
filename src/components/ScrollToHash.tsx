import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // when route changes, wait a tick so the DOM is there
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }, [pathname, hash]);

  return null;
}
