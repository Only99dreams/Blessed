import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#analytics", label: "Analytics" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-3 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[95%] max-w-5xl" : "w-[95%] max-w-6xl"
      }`}
    >
      <div className="glass-strong rounded-full px-5 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-purple text-background">B</span>
          <span className="hidden sm:inline text-sm tracking-wide">Blessed<span className="text-cyan">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-cyan to-purple transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-electric to-purple px-4 py-1.5 text-xs font-semibold text-white glow-primary hover:scale-[1.03] transition-transform"
        >
          Hire Me
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden grid h-8 w-8 place-items-center rounded-md glass"
          aria-label="Menu"
        >
          <span className="text-foreground">≡</span>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-2"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1.5 text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
