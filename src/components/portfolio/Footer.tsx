import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid sm:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan to-purple text-background font-bold">B</span>
          <div>
            <div className="font-display font-semibold">Blessed Peters Salihu</div>
            <div className="text-xs text-muted-foreground">Data Analyst & BI Specialist</div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#analytics" className="hover:text-foreground transition">Analytics</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <div className="flex sm:justify-end gap-2">
          {[Linkedin, Github, Mail].map((I, i) => (
            <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass ring-glow transition">
              <I className="h-4 w-4"/>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Blessed Peters Salihu · Crafted with data, design, and care.
      </div>
    </footer>
  );
}
