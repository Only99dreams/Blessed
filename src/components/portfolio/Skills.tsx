import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { n: "Python", l: 92 }, { n: "SQL", l: 95 }, { n: "Power BI", l: 94 },
  { n: "Tableau", l: 88 }, { n: "Excel", l: 96 }, { n: "Google Sheets", l: 92 },
  { n: "Machine Learning", l: 80 }, { n: "Data Cleaning", l: 95 },
  { n: "Data Visualization", l: 93 }, { n: "Statistics", l: 86 },
  { n: "Business Intelligence", l: 90 }, { n: "Dashboard Design", l: 94 },
  { n: "ETL", l: 85 }, { n: "Data Warehousing", l: 82 },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Stack"
      title={<>Tools that turn data <span className="text-gradient-brand">into impact</span>.</>}
      subtitle="A modern analytics stack covering ingestion, modeling, visualization and storytelling."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-2xl p-5 ring-glow group transition"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{s.n}</span>
              <span className="text-xs text-cyan">{s.l}%</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.l}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-cyan via-electric to-purple shimmer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
