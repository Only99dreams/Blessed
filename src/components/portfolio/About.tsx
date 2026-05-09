import { motion } from "framer-motion";
import { Section } from "./Section";
import { Database, BarChart3, Brain, LineChart, Sparkles } from "lucide-react";

const timeline = [
  { y: "2020", t: "Started Data Journey", d: "Excel, SQL fundamentals & first dashboards." },
  { y: "2021", t: "BI Specialist", d: "Built executive Power BI dashboards across 3 industries." },
  { y: "2023", t: "Predictive Analytics", d: "Shipped churn & forecasting models in Python." },
  { y: "2025", t: "Independent Consultant", d: "Partnering with global teams on data strategy." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Turning <span className="text-gradient-brand">complex data</span> into clear decisions.</>}
      subtitle="I'm a data analyst & business intelligence specialist with a passion for visualization, predictive insights and dashboard development. I work fluently across SQL, Excel, Python, Power BI and Tableau."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { i: Database, t: "Data Engineering", d: "ETL pipelines, warehousing, clean data foundations." },
            { i: BarChart3, t: "Visualization", d: "Power BI, Tableau and custom analytics dashboards." },
            { i: Brain, t: "Predictive Insights", d: "ML models for churn, forecasting and segmentation." },
            { i: LineChart, t: "Business Intelligence", d: "KPI frameworks that align teams around outcomes." },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 ring-glow transition group"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-purple/30 text-cyan">
                <c.i className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-primary to-purple" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.y}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full glass-strong grid place-items-center glow-cyan">
                  <Sparkles className="h-3.5 w-3.5 text-cyan" />
                </div>
                <div className="text-xs uppercase tracking-widest text-cyan">{t.y}</div>
                <div className="mt-1 font-display font-semibold text-lg">{t.t}</div>
                <div className="text-sm text-muted-foreground">{t.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
