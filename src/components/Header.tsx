import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "./images/logo.png";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About" },
  { href: "#results",  label: "Results" },
  { href: "#contact",  label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 z-50 transition-[top] duration-300 ease-out
      ${scrolled ? "top-0" : "top-10"}`}>
      <div
        className={[
          "--color-ink-900",

        ].join(" ")}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* LEFT: burger + brand pill */}
          <div className="flex items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  className="size-10 rounded-full border border-border bg-background/70 hover:bg-accent transition-colors grid place-items-center"
                >
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[320px] p-0 bg-background/85 backdrop-blur-md border-r border-border"
              >
                <div className="p-4 border-b border-border flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 grid place-items-center overflow-hidden">
                    <img src={logo} alt="Skyvolt Solar logo" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="font-semibold">Skyvolt Solar</span>
                </div>

                <nav className="px-3 py-3">
                  <ul className="space-y-1.5">
                    {NAV.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-4 py-3 text-xl hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-2 gap-2 px-1">
                    <Button asChild className="bg-gradient-to-r from-brand-500 to-brand-600">
                      <a href="#contact">Get Started</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#results">See Results</a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <a
              href="/"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-3 py-2 backdrop-blur-md hover:border-brand-300/60 transition-all"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 grid place-items-center overflow-hidden shadow-sm">
                <img src={logo} alt="Skyvolt Solar logo" className="w-5 h-5 object-contain" />
              </span>
              <span className="font-medium">Skyvolt Solar</span>
            </a>
          </div>

          
        </div>
      </div>
    </header>
  );
}
