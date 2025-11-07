// components/Header.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import logo from "./images/SVS.png";


const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About" },
  { href: "#results",  label: "Results" },
  { href: "#contact",  label: "Contact" },
];

// link list animation
const listVariants: Variants = {
  open:  { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
  closed:{ transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const itemVariants: Variants = {
  open:   { y: 0,  opacity: 1, transition: { type: "spring", stiffness: 900, damping: 40 } },
  closed: { y: 10, opacity: 0, transition: { type: "spring", stiffness: 900, damping: 40 } },
};

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        // mobile: stick to very top; md+: animate drop
        "fixed inset-x-0 top-0 z-[60] md:transition-[top] md:duration-300 md:ease-out",
        scrolled ? "md:top-5" : "md:top-10",
      ].join(" ")}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center">
          {/* One pill: full width on mobile, compact on md+ */}
          <motion.button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            initial={false}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.18 }}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
            className="
              inline-flex h-14 md:h-16 items-center justify-between rounded-full
              border border-white/10 bg-white/8 text-white backdrop-blur-md
              hover:bg-white/12 transition-colors
              w-full max-w-[calc(100vw-2rem)] mx-auto
              px-3 pr-4 
              md:w-[min(300px,92vw)] md:mx-0 md:px-3 md:pr-3
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 md:h-12 md:w-12 rounded-full grid place-items-center overflow-hidden">
                <img src={logo} alt="Skyvolt Solar" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
              </span>
              <span className="font-bernier uppercase leading-none text-[18px] md:text-[26px] tracking-[.06em] text-[#ff6a00]">
                Skyvolt Solar
              </span>
            </div>

            <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/8">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6 H21"  stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12 H21" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18 H21" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </motion.button>
        </nav>
      </div>

      {/* Glass menu (full-width feel on mobile, card on md+) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="scrim"
              className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              key="panel"
              className="
                fixed inset-x-4 top-4 z-[80] mx-auto
                w-auto rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur-2xl
                md:left-6 md:top-6 md:inset-x-auto md:mx-0
                md:w-[min(92vw,420px)]
              "
              style={{ transformOrigin: "48px 48px" }}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2 text-white">
                  <img src={logo} alt="Skyvolt Solar" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                  <span className="font-bernier text-[18px] md:text-[22px] text-[#ff6a00] pl-1">Skyvolt Solar</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="grid size-9 place-items-center rounded-full hover:bg-white/10 text-white transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 4 L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <motion.ul variants={listVariants} initial="open" animate="open" className="px-5 pb-5">
                {NAV.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-2xl px-3 py-4 text-2xl text-white hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
