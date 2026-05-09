import { motion } from "framer-motion";
import { Section } from "./Section";
import { LayoutDashboard, Sparkles, FileBarChart, PieChart, TrendingUp, Gauge, Database, FileSpreadsheet } from "lucide-react";

const services = [
  { i: LayoutDashboard, t: "Dashboard Development", d: "End-to-end Power BI / Tableau / Looker dashboards." },
  { i: Sparkles, t: "Data Cleaning & Transformation", d: "Reliable, audit-ready data pipelines and models." },
  { i: FileBarChart, t: "BI Reporting", d: "Executive reporting packs that drive weekly decisions." },
  { i: PieChart, t: "Data Visualization", d: "Story-driven, brand-aligned analytics visualizations." },
  { i: TrendingUp, t: "Predictive Analytics", d: "Forecasting, churn, segmentation, recommendation models." },
  { i: Gauge, t: "KPI Reporting", d: "Aligning teams around the metrics that actually matter." },
  { i: Database, t: "SQL Database Analysis", d: "Modeling, optimization and complex query design." },
  { i: FileSpreadsheet, t: "Excel Automation", d: "Power Query, macros and template systems." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>How I can <span className="text-gradient-brand">help your team</span>.</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 ring-glow transition group relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-purple/30 text-cyan">
                <s.i className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
