import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const exp = [
  { r: "Freelance Analytics Consultant", c: "Independent · Remote", p: "2024 — Present", d: "Helping startups & SMBs build modern analytics stacks, dashboards and predictive models." },
  { r: "Data Visualization Specialist", c: "Insight Studio", p: "2023 — 2024", d: "Designed executive dashboards in Power BI & Tableau used by C-suite across 4 industries." },
  { r: "Business Intelligence Analyst", c: "NorthBridge Analytics", p: "2021 — 2023", d: "Owned BI roadmap, built warehouse models in BigQuery and KPI frameworks for revenue ops." },
  { r: "Data Analyst", c: "Beacon Group", p: "2020 — 2021", d: "Cleaned, modeled and visualized operational data across sales, finance and marketing." },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record of <span className="text-gradient-brand">measurable wins</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-primary to-purple" />
        <div className="space-y-10">
          {exp.map((e, i) => (
            <motion.div
              key={e.r}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex sm:items-center gap-6 ${i % 2 ? "sm:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full glass-strong glow-cyan">
                <Briefcase className="h-4 w-4 text-cyan" />
              </div>
              <div className="ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] glass rounded-2xl p-5 ring-glow transition">
                <div className="text-xs text-cyan uppercase tracking-widest">{e.p}</div>
                <h3 className="mt-1 font-display font-semibold text-lg">{e.r}</h3>
                <div className="text-sm text-muted-foreground">{e.c}</div>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
