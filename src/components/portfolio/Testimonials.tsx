import { motion } from "framer-motion";
import { Section } from "./Section";
import { Star } from "lucide-react";

const items = [
  { n: "Adaeze Okonkwo", r: "Head of Growth, FinPay", q: "Blessed delivered an executive dashboard that finally aligned our entire revenue team. Beautiful, fast, and decision-ready." },
  { n: "James Whitfield", r: "CFO, Northwind Retail", q: "His attention to data quality is unmatched. Our month-end close went from chaotic to calm in a single quarter." },
  { n: "Sara Lindqvist", r: "VP Marketing, Lumen", q: "The attribution model Blessed built helped us reallocate $90k in wasted spend. ROI in week one." },
  { n: "Daniel Mensah", r: "Founder, ShopRing", q: "Premium quality. He thinks like a strategist, ships like an engineer, and presents like a designer." },
  { n: "Priya Raman", r: "Director Ops, Helix Health", q: "Real-time visibility across 6 hospitals. Wait times dropped, KPIs aligned. Outstanding partner." },
  { n: "Marco Bianchi", r: "CEO, NovaTrade", q: "Best analytics hire we've made. Period." },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Kind Words"
      title={<>What clients <span className="text-gradient-brand">are saying</span>.</>}
    >
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {[...items, ...items].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-strong rounded-2xl p-6 w-[320px] sm:w-[380px] flex-shrink-0"
            >
              <div className="flex gap-1 text-cyan">
                {Array.from({length:5}).map((_,k)=><Star key={k} className="h-3.5 w-3.5 fill-current"/>)}
              </div>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-purple text-white font-semibold text-sm">
                  {t.n.split(" ").map(s=>s[0]).slice(0,2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-[11px] text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </Section>
  );
}
