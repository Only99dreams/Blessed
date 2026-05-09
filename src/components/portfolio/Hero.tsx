import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles, TrendingUp, BarChart3, Database } from "lucide-react";
import blessed from "@/assets/blessed.jpg";
import { Counter } from "./Counter";

const titles = ["Data Analyst", "Business Intelligence Specialist", "Data Storyteller"];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx((idx + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-5 sm:px-8">
      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0 opacity-60" style={{backgroundImage: `url(${blessed})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      {/* Mobile overlay for readability */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Available for new projects · 2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Blessed</span>
            <br />
            <span className="text-gradient-brand">Peters Salihu</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center gap-2 text-lg sm:text-xl text-muted-foreground font-medium h-8"
          >
            <Sparkles className="h-5 w-5 text-cyan" />
            <span>{text}</span>
            <span className="inline-block h-6 w-[2px] bg-cyan animate-pulse" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I transform raw data into clear, beautiful, decision-ready intelligence —
            building dashboards, predictive models, and stories that move businesses forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric via-primary to-purple px-6 py-3 text-sm font-semibold text-white glow-primary hover:scale-[1.03] transition-transform">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold ring-glow transition">
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold ring-glow transition">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { v: 120, s: "+", l: "Projects" },
              { v: 850, s: "+", l: "Datasets" },
              { v: 2400, s: "+", l: "Insights" },
              { v: 14, s: "", l: "Tools" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-brand">
                  <Counter to={s.v} />{s.s}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait + floating cards - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:block relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-electric/30 via-purple/30 to-cyan/30 blur-3xl animate-pulse-glow" />
          <div className="relative rounded-[2rem] glass-strong p-2 overflow-hidden">
            <div className="rounded-[1.6rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-secondary to-card">
              <img src={blessed} alt="Blessed Peters Salihu, Data Analyst" className="h-full w-full object-cover" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-10 top-12 glass-strong rounded-2xl p-3 w-44 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-cyan/20 text-cyan"><TrendingUp className="h-4 w-4" /></div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase">Revenue</div>
                <div className="text-sm font-semibold">+38.2%</div>
              </div>
            </div>
            <div className="mt-2 flex items-end gap-0.5 h-8">
              {[30,55,40,70,60,85,75,95].map((h,i)=>(
                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan/40 to-cyan" style={{height:`${h}%`}}/>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 sm:-right-8 bottom-20 glass-strong rounded-2xl p-3 w-48 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-purple" />
                <span className="text-xs font-semibold">KPI Score</span>
              </div>
              <span className="text-[10px] text-cyan">live</span>
            </div>
            <div className="mt-2 text-2xl font-display font-bold text-gradient-brand">94.7</div>
            <div className="h-1.5 mt-1 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-gradient-to-r from-cyan to-purple"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-2 -top-4 glass-strong rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
          >
            <Database className="h-4 w-4 text-electric" />
            <span className="text-xs font-medium">2.4M rows analyzed</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
