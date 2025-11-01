// components/Header.tsx
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import logo from "./images/SVS.png"

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About" },
  { href: "#results",  label: "Results" },
  { href: "#contact",  label: "Contact" },
]

// stagger for list
const listVariants: Variants = {
  open:  { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
  closed:{ transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}
const itemVariants: Variants = {
  open:   { y: 0,  opacity: 1, transition: { type: "spring", stiffness: 900, damping: 40 } },
  closed: { y: 10, opacity: 0, transition: { type: "spring", stiffness: 900, damping: 40 } },
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  // drop a bit when at page top
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "fixed inset-x-0 z-[60] transition-[top] duration-300 ease-out",
        scrolled ? "top-5" : "top-18",
      ].join(" ")}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center">
          {/* ONE PILL: logo left, hamburger right — click anywhere to open */}
          <motion.button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            initial={false}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.18 }}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
            className="inline-flex h-16 items-center justify-between gap-3 rounded-full
                       border border-white/10 bg-white/8 px-3 pr-2 text-white backdrop-blur-md
                       hover:bg-white/12 transition-colors w-[min(300px,92vw)]"
          >
            {/* left: brand */}
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full grid place-items-center overflow-hidden">
                <img src={logo} alt="Skyvolt Solar" className="h-10 w-10 object-contain" />
              </span>
              {/* If you didn't extend Tailwind with font-bernier, use font-["Bernier"] */}
              <span className="font-bernier uppercase leading-none text-[18px] md:text-[26px] tracking-[.06em] text-[#ff6a00]">
                Skyvolt Solar
              </span>
            </div>

            {/* right: hamburger inside the pill */}
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

      {/* Glass menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="scrim"
              className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* panel */}
            <motion.aside
              key="panel"
              className="fixed left-6 top-6 z-[80] w-[min(92vw,420px)] overflow-hidden
                         rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur-2xl"
              style={{ transformOrigin: "48px 48px" }}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{    opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* panel header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2 text-white">
                  <img src={logo} alt="Skyvolt Solar" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                  <span className="font-bernier md:text-[22px] text-[#ff6a00] pl-1">Skyvolt Solar</span>
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

              {/* links */}
              <motion.ul variants={listVariants} initial="open" animate="open" className="px-4 pb-4">
                {NAV.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-2xl px-4 py-4 text-2xl text-white hover:bg-white/10 transition-colors"
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
  )
}



// // components/Header.tsx
// import * as React from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import type { Variants } from "framer-motion"
// import logo from "./images/SVS.png" // keep your path


// const NAV = [
//   { href: "#services", label: "Services" },
//   { href: "#about",    label: "About" },
//   { href: "#results",  label: "Results" },
//   { href: "#contact",  label: "Contact" },
// ]

// // Staggered items (white text)
// const listVariants: Variants = {
//   open:  { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
//   closed:{ transition: { staggerChildren: 0.04, staggerDirection: -1 } },
// }

// const itemVariants: Variants = {
//   open:   { y: 0,  opacity: 1, transition: { type: "spring", stiffness: 900, damping: 40 } },
//   closed: { y: 10, opacity: 0, transition: { type: "spring", stiffness: 900, damping: 40 } },
// }

// export function Header() {
//   const [isOpen, setIsOpen] = React.useState(false)

//   // ▼ NEW: drop-down at top, stick to top on scroll
//   const [scrolled, setScrolled] = React.useState(false)
//   React.useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   return (
//     <header
//       className={[
//         "fixed inset-x-0 z-[60] transition-[top] duration-300 ease-out",
//         scrolled ? "top-5" : "top-15", // ▼ NEW: lower when at top
//       ].join(" ")}
//     >
//       <div className="container mx-auto px-4">
//         <nav className="flex items-center gap-3">
//           {/* Menu button — fades out while open */}
//           <motion.button
//             aria-label="Open menu"
//             onClick={() => setIsOpen(true)}
//             initial={false}
//             animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.95 : 1 }}
//             transition={{ duration: 0.18 }}
//             style={{ pointerEvents: isOpen ? "none" : "auto" }}
//             className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/8 backdrop-blur-md hover:bg-white/12 text-white"
//           >
//             {/* hamburger */}
//             <svg width="24" height="24" viewBox="0 0 24 24">
//               <path d="M3 6 H21"  stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
//               <path d="M3 12 H21" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
//               <path d="M3 18 H21" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </motion.button>

//           {/* Brand pill (logo bigger, same height as menu button) */}
//           <a
//             href="/"
//             className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 pl-2 pr-4 py-1.5 text-white backdrop-blur-md hover:bg-white/12 transition-colors"
//           >
//             {/* 48×48 like the menu button */}
//             <span className="h-14 w-14 px-2 rounded-full grid place-items-center overflow-hidden">
//               <img src={logo} alt="Skyvolt Solar" className="h-10 w-10 object-contain" />
//             </span>
//             <span className="font-bernier uppercase leading-none text-[18px] md:text-[26px] text-[#ff6a00] pr-2">Skyvolt Solar</span>
//           </a>
//         </nav>
//       </div>

//       {/* Glass menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Dim backdrop */}
//             <motion.div
//               key="scrim"
//               className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//             />

//             {/* Panel (glass box) */}
//             <motion.aside
//               key="panel"
//               className="fixed left-6 top-6 z-[80] w-[min(92vw,420px)] overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur-2xl"
//               style={{ transformOrigin: "48px 48px" }}
//               initial={{ opacity: 0, y: -8, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0,  scale: 1 }}
//               exit={{    opacity: 0, y: -8, scale: 0.98 }}
//               transition={{ duration: 0.22, ease: "easeOut" }}
//             >
//               {/* Header row: bigger logo + title + close button */}
//               <div className="flex items-center justify-between px-4 py-3">
//                 <div className="flex items-center gap-2 text-white">
//                   <img src={logo} alt="Skyvolt Solar" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
//                   <span className="font-bernier md:text-[26px] text-[#ff6a00] pl-2">Skyvolt Solar</span>
//                 </div>

//                 <button
//                   aria-label="Close menu"
//                   onClick={() => setIsOpen(false)}
//                   className="grid size-9 place-items-center rounded-full hover:bg-white/10 text-white transition-colors"
//                 >
//                   <svg width="22" height="22" viewBox="0 0 24 24">
//                     <path d="M4 4 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                     <path d="M20 4 L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Links */}
//               <motion.ul
//                 variants={listVariants}
//                 initial="open"
//                 animate="open"
//                 className="px-4 pb-4"
//               >
//                 {NAV.map((item) => (
//                   <motion.li key={item.href} variants={itemVariants}>
//                     <a
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="block rounded-2xl px-4 py-4 text-2xl text-white hover:bg-white/10 transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }



// // components/Header.tsx
// import * as React from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import type { Variants } from "framer-motion"
// import logo from "./images/SVS.png"

// const NAV = [
//   { href: "#services", label: "Services" },
//   { href: "#about",    label: "About" },
//   { href: "#results",  label: "Results" },
//   { href: "#contact",  label: "Contact" },
// ]

// // Staggered items (white text)
// const listVariants: Variants = {
//   open:  { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
//   closed:{ transition: { staggerChildren: 0.04, staggerDirection: -1 } },
// }

// const itemVariants: Variants = {
//   open:   { y: 0,  opacity: 1, transition: { type: "spring", stiffness: 900, damping: 40 } },
//   closed: { y: 10, opacity: 0, transition: { type: "spring", stiffness: 900, damping: 40 } },
// }

// export function Header() {
//   const [isOpen, setIsOpen] = React.useState(false)

//   return (
//     <header className="fixed inset-x-0 top-6 z-[60]">
//       <div className="container mx-auto px-4">
//         <nav className="flex items-center gap-3">
//           {/* Menu button — fades out while open */}
//           <motion.button
//             aria-label="Open menu"
//             onClick={() => setIsOpen(true)}
//             initial={false}
//             animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.95 : 1 }}
//             transition={{ duration: 0.18 }}
//             style={{ pointerEvents: isOpen ? "none" : "auto" }}
//             className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/8 backdrop-blur-md hover:bg-white/12 text-white"
//           >
//             {/* hamburger */}
//             <svg width="24" height="24" viewBox="0 0 24 24">
//               <path d="M3 6 H21"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//               <path d="M3 12 H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//               <path d="M3 18 H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </motion.button>

//           {/* Brand pill (no orange background, just your logo + text) */}
//           <a
//             href="/"
//             className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-white backdrop-blur-md hover:bg-white/12 transition-colors"
//           >
//             <img src={logo} alt="Skyvolt Solar" className="h-6 w-6 object-contain" />
//             <span className="font-medium">Skyvolt Solar</span>
//           </a>
//         </nav>
//       </div>

//       {/* Glass menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Dim backdrop */}
//             <motion.div
//               key="scrim"
//               className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//             />

//             {/* Panel (glass box) */}
//             <motion.aside
//               key="panel"
//               className="fixed left-6 top-6 z-[80] w-[min(92vw,420px)] overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur-2xl"
//               style={{ transformOrigin: "48px 48px" }} // animates from the corner near the button/brand
//               initial={{ opacity: 0, y: -8, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0,  scale: 1 }}
//               exit={{    opacity: 0, y: -8, scale: 0.98 }}
//               transition={{ duration: 0.22, ease: "easeOut" }}
//             >
//               {/* Header row: logo + title + close button */}
//               <div className="flex items-center justify-between px-4 py-3">
//                 <div className="flex items-center gap-2 text-white">
//                   <img src={logo} alt="Skyvolt Solar" className="h-6 w-6 object-contain" />
//                   <span className="font-medium">Skyvolt Solar</span>
//                 </div>

//                 <button
//                   aria-label="Close menu"
//                   onClick={() => setIsOpen(false)}
//                   className="grid size-9 place-items-center rounded-full hover:bg-white/10 text-white transition-colors"
//                 >
//                   <svg width="22" height="22" viewBox="0 0 24 24">
//                     <path d="M4 4 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                     <path d="M20 4 L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Links */}
//               <motion.ul
//                 variants={listVariants}
//                 initial="open"
//                 animate="open"
//                 className="px-4 pb-4"
//               >
//                 {NAV.map((item) => (
//                   <motion.li key={item.href} variants={itemVariants}>
//                     <a
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className="block rounded-2xl px-4 py-4 text-2xl text-white hover:bg-white/10 transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }









// // // components/Header.tsx
// // import * as React from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import type { Variants } from "framer-motion";
// // import logo from "./images/logo.png";

// // const NAV = [
// //   { href: "#services", label: "Services" },
// //   { href: "#about",    label: "About" },
// //   { href: "#results",  label: "Results" },
// //   { href: "#contact",  label: "Contact" },
// // ];

// // /* ===== Animations (no circle) ===== */

// // const buttonVariants: Variants = {
// //   closed: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
// //   open:   { opacity: 0, scale: 0.95, transition: { duration: 0.12 } },
// // };

// // const panelVariants: Variants = {
// //   closed: { opacity: 0, y: -12, scale: 0.98, pointerEvents: "none", transition: { duration: 0.18 } },
// //   open:   { opacity: 1, y: 0,    scale: 1,    pointerEvents: "auto", transition: { duration: 0.22 } },
// // };

// // const listVariants: Variants = {
// //   open:   { transition: { delayChildren: 0.12, staggerChildren: 0.06 } },
// //   closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
// // };

// // const itemVariants: Variants = {
// //   open:   { y: 0,  opacity: 1, transition: { type: "spring", stiffness: 900, velocity: -100 } },
// //   closed: { y: 12, opacity: 0, transition: { type: "spring", stiffness: 900 } },
// // };

// // export function Header() {
// //   const [isOpen, setIsOpen] = React.useState(false);
// //   const [scrolled, setScrolled] = React.useState(false);

// //   const panelRef = React.useRef<HTMLDivElement | null>(null);
// //   const buttonRef = React.useRef<HTMLButtonElement | null>(null);

// //   React.useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 8);
// //     onScroll();
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   // Close on ESC
// //   React.useEffect(() => {
// //     if (!isOpen) return;
// //     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
// //     window.addEventListener("keydown", onKey);
// //     return () => window.removeEventListener("keydown", onKey);
// //   }, [isOpen]);

// //   // Click outside to close
// //   React.useEffect(() => {
// //     if (!isOpen) return;
// //     const onDown = (e: MouseEvent) => {
// //       const t = e.target as Node;
// //       if (panelRef.current?.contains(t)) return;
// //       if (buttonRef.current?.contains(t)) return;
// //       setIsOpen(false);
// //     };
// //     document.addEventListener("mousedown", onDown);
// //     return () => document.removeEventListener("mousedown", onDown);
// //   }, [isOpen]);

// //   // Prevent background scroll while open
// //   React.useEffect(() => {
// //     if (isOpen) {
// //       const prev = document.body.style.overflow;
// //       document.body.style.overflow = "hidden";
// //       return () => { document.body.style.overflow = prev; };
// //     }
// //   }, [isOpen]);

// //   return (
// //     <header
// //       className={`fixed inset-x-0 z-50 transition-[top] duration-300 ease-out ${
// //         scrolled ? "top-0" : "top-10"
// //       }`}
// //     >
// //       <div className="container mx-auto px-4 py-3">
// //         <div className="relative flex items-center gap-3">
// //           {/* Single menu trigger — fades out when open */}
// //           <motion.button
// //             ref={buttonRef}
// //             aria-expanded={isOpen}
// //             aria-label={isOpen ? "Close menu" : "Open menu"}
// //             onClick={() => setIsOpen(true)}
// //             variants={buttonVariants}
// //             animate={isOpen ? "open" : "closed"}
// //             className="grid size-12 place-items-center rounded-full border border-border bg-background/80 hover:bg-accent transition-colors"
// //           >
// //             {/* Hamburger icon */}
// //             <svg width="22" height="22" viewBox="0 0 22 22" className="text-foreground/90">
// //               <rect x="3" y="5"  width="16" height="2" rx="1" />
// //               <rect x="3" y="10" width="16" height="2" rx="1" />
// //               <rect x="3" y="15" width="16" height="2" rx="1" />
// //             </svg>
// //           </motion.button>

// //           {/* Brand pill (left of screen, unchanged) */}
// //           <a
// //             href="/"
// //             className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-3 py-2 hover:border-brand-300/60 transition-all"
// //           >
// //             <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 grid place-items-center overflow-hidden shadow-sm">
// //               <img src={logo} alt="Skyvolt Solar logo" className="w-5 h-5 object-contain" />
// //             </span>
// //             <span className="font-medium">Skyvolt Solar</span>
// //           </a>

// //           {/* Glass panel — no circle reveal; fades/slides in/out */}
// //           <AnimatePresence>
// //             {isOpen && (
// //               <motion.aside
// //                 ref={panelRef}
// //                 key="glass-panel"
// //                 initial="closed"
// //                 animate="open"
// //                 exit="closed"
// //                 variants={panelVariants}
// //                 className="
// //                   fixed left-6 top-6 z-[60]
// //                   w-[min(92vw,380px)] md:w-[420px]
// //                   rounded-3xl bg-white/10 backdrop-blur-xl
// //                   ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]
// //                   p-4
// //                 "
// //               >
// //                 {/* Panel header: brand + close (✕ sits next to the logo) */}
// //                 <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/5 px-3 py-2">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 grid place-items-center overflow-hidden">
// //                       <img src={logo} alt="Skyvolt Solar" className="w-6 h-6 object-contain" />
// //                     </div>
// //                     <span className="font-semibold">Skyvolt Solar</span>
// //                   </div>

// //                   <button
// //                     aria-label="Close menu"
// //                     onClick={() => setIsOpen(false)}
// //                     className="grid size-9 place-items-center rounded-full hover:bg-white/10 transition-colors"
// //                   >
// //                     <svg width="18" height="18" viewBox="0 0 24 24">
// //                       <path d="M4 4 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //                       <path d="M20 4 L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //                     </svg>
// //                   </button>
// //                 </div>

// //                 {/* Nav list with stagger */}
// //                 <motion.ul
// //                   variants={listVariants}
// //                   initial={false}
// //                   animate="open"
// //                   className="mt-3 space-y-2"
// //                 >
// //                   {NAV.map((item) => (
// //                     <motion.li key={item.href} variants={itemVariants}>
// //                       <a
// //                         href={item.href}
// //                         onClick={() => setIsOpen(false)}
// //                         className="block rounded-2xl px-4 py-3 text-2xl hover:bg-white/10 transition-colors"
// //                       >
// //                         {item.label}
// //                       </a>
// //                     </motion.li>
// //                   ))}
// //                 </motion.ul>
// //               </motion.aside>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
