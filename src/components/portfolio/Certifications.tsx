import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { t: "Google Data Analytics Professional", o: "Coursera · Google", y: "2023" },
  { t: "Microsoft Power BI Data Analyst (PL-300)", o: "Microsoft", y: "2023" },
  { t: "IBM Data Science Professional", o: "Coursera · IBM", y: "2022" },
  { t: "Tableau Desktop Specialist", o: "Tableau", y: "2022" },
  { t: "SQL for Data Science", o: "UC Davis", y: "2021" },
  { t: "Advanced Excel & Power Query", o: "DataCamp", y: "2021" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Always <span className="text-gradient-brand">leveling up</span>.</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay: i*0.05 }}
            whileHover={{ y:-4, scale:1.02 }}
            className="glass rounded-2xl p-5 ring-glow transition group"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan/30 to-purple/30 text-cyan">
                <Award className="h-5 w-5"/>
              </div>
              <div className="flex-1">
                <div className="font-semibold leading-snug">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.o} · {c.y}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
