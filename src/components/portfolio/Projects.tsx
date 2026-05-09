import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { ArrowUpRight, X, Target, Lightbulb, TrendingUp } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, PieChart, Pie, Cell } from "recharts";

const data1 = [
  { m: "Jan", v: 120 }, { m: "Feb", v: 180 }, { m: "Mar", v: 150 },
  { m: "Apr", v: 220 }, { m: "May", v: 280 }, { m: "Jun", v: 260 },
  { m: "Jul", v: 340 }, { m: "Aug", v: 380 },
];
const data2 = [
  { m: "W1", v: 60 }, { m: "W2", v: 45 }, { m: "W3", v: 70 },
  { m: "W4", v: 50 }, { m: "W5", v: 80 }, { m: "W6", v: 65 },
];
const data3 = [
  { name: "Retain", value: 68, c: "oklch(0.82 0.16 195)" },
  { name: "Risk", value: 22, c: "oklch(0.65 0.27 295)" },
  { name: "Lost", value: 10, c: "oklch(0.65 0.25 25)" },
];

const projects = [
  {
    title: "Sales Analytics Dashboard",
    cat: "Power BI · SQL",
    summary: "Real-time multi-region sales performance with cohort & funnel analysis.",
    tools: ["Power BI", "SQL", "DAX"],
    metric: "+38% revenue clarity",
    chart: "area",
    problem: "Sales team had no unified view across 12 regions and 3 product lines.",
    solution: "Built a Power BI model with star-schema warehouse, RLS security and DAX KPIs for revenue, pipeline and conversion.",
    results: ["Cut weekly reporting time from 8h → 25m", "Surfaced underperforming regions worth $1.2M", "Adopted by 60+ stakeholders"],
  },
  {
    title: "Customer Churn Prediction",
    cat: "Python · ML",
    summary: "Gradient-boosted churn model with explainability dashboard.",
    tools: ["Python", "scikit-learn", "SHAP"],
    metric: "AUC 0.92",
    chart: "line",
    problem: "Telecom subscriber churn rising 4% MoM with no early warning.",
    solution: "Engineered 40+ features, trained XGBoost, exposed SHAP-based dashboard for retention team.",
    results: ["Detected 73% of churners 30 days early", "Saved est. $480k in retention revenue", "Reduced churn 1.8%"],
  },
  {
    title: "Financial Performance Analysis",
    cat: "Excel · Tableau",
    summary: "Automated FP&A reporting pack with variance & forecast scenarios.",
    tools: ["Excel", "Tableau", "Power Query"],
    metric: "12 reports → 1",
    chart: "bar",
    problem: "Finance team manually rebuilt 12 reports each month from disconnected workbooks.",
    solution: "Designed an automated Power Query pipeline feeding a single Tableau executive pack with drill-downs.",
    results: ["100% reduction in manual rework", "Same-day month-end close", "CFO-approved decision tool"],
  },
  {
    title: "Social Media Insights Dashboard",
    cat: "Tableau · API",
    summary: "Cross-platform engagement, sentiment and audience growth tracking.",
    tools: ["Tableau", "Python", "Twitter API"],
    metric: "+62% engagement",
    chart: "area",
    problem: "Marketing lacked unified visibility across 5 social platforms.",
    solution: "Built a Python ingestion service feeding a Tableau dashboard with sentiment scoring & content ROI.",
    results: ["Identified top-performing content themes", "Improved engagement 62%", "Cut campaign waste by 28%"],
  },
  {
    title: "E-commerce Data Intelligence",
    cat: "SQL · Looker",
    summary: "Customer segmentation, RFM analysis and product affinity engine.",
    tools: ["SQL", "Looker", "BigQuery"],
    metric: "+24% AOV",
    chart: "pie",
    problem: "Retailer couldn't differentiate high-value customers from one-time buyers.",
    solution: "Built RFM segmentation in BigQuery + Looker dashboards with personalized recommendations feed.",
    results: ["Lifted average order value 24%", "Doubled email CTR", "Identified 18% VIP cohort"],
  },
  {
    title: "Healthcare Data Visualization",
    cat: "Python · Power BI",
    summary: "Patient flow, capacity and readmission analytics for a hospital network.",
    tools: ["Python", "Power BI", "Azure"],
    metric: "-19% wait time",
    chart: "line",
    problem: "Hospital network couldn't predict capacity bottlenecks across departments.",
    solution: "Modeled patient flow, built a real-time Power BI ops dashboard with predictive admission alerts.",
    results: ["Reduced ER wait time 19%", "Improved bed utilization 14%", "Standardized KPIs across 6 sites"],
  },
  {
    title: "Marketing Campaign Analytics",
    cat: "GA4 · BigQuery",
    summary: "Multi-touch attribution & ROAS reporting across paid channels.",
    tools: ["GA4", "BigQuery", "Looker"],
    metric: "ROAS 4.6×",
    chart: "bar",
    problem: "Marketing team couldn't attribute conversions across paid + organic channels.",
    solution: "Built a multi-touch attribution model in BigQuery with ROAS dashboards per campaign.",
    results: ["Reallocated $90k of wasted spend", "Improved blended ROAS to 4.6×", "Killed 7 underperforming campaigns"],
  },
  {
    title: "Supply Chain Optimization",
    cat: "Python · Power BI",
    summary: "Demand forecasting & inventory health for a global supplier.",
    tools: ["Python", "Power BI", "Prophet"],
    metric: "-31% stockouts",
    chart: "area",
    problem: "Supplier faced frequent stockouts and overstock across 240 SKUs.",
    solution: "Forecasted demand with Prophet, surfaced inventory health & reorder points in Power BI.",
    results: ["Reduced stockouts 31%", "Cut overstock by 22%", "Saved $640k working capital"],
  },
];

function MiniChart({ kind }: { kind: string }) {
  if (kind === "line") return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data1}>
        <Line type="monotone" dataKey="v" stroke="oklch(0.82 0.16 195)" strokeWidth={2.5} dot={false} />
        <Tooltip contentStyle={{ background: "oklch(0.18 0.025 264)", border: "1px solid oklch(0.3 0.04 264)", borderRadius: 8, fontSize: 11 }} />
      </LineChart>
    </ResponsiveContainer>
  );
  if (kind === "bar") return (
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={data2}>
        <Bar dataKey="v" fill="url(#g1)" radius={[6,6,0,0]} />
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.22 265)" />
            <stop offset="100%" stopColor="oklch(0.65 0.27 295)" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
  if (kind === "pie") return (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie data={data3} dataKey="value" innerRadius={28} outerRadius={50} paddingAngle={3}>
          {data3.map((d) => <Cell key={d.name} fill={d.c} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart data={data1}>
        <defs>
          <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.16 195)" stopOpacity={0.6}/>
            <stop offset="100%" stopColor="oklch(0.7 0.22 265)" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke="oklch(0.82 0.16 195)" fill="url(#ar)" strokeWidth={2}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects that <span className="text-gradient-brand">moved the needle</span>.</>}
      subtitle="Click any project to view the full case study with problem, solution and measurable results."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="text-left glass rounded-2xl p-5 ring-glow transition group relative overflow-hidden"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/0 via-purple/0 to-electric/0 group-hover:from-cyan/20 group-hover:via-purple/20 group-hover:to-electric/20 transition-opacity opacity-0 group-hover:opacity-100 -z-0" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-cyan">{p.cat}</div>
                  <h3 className="mt-1 font-display font-semibold text-lg leading-tight">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-cyan group-hover:rotate-12 transition" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
              <div className="mt-4 -mx-1"><MiniChart kind={p.chart} /></div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.slice(0,2).map(t=>(
                    <span key={t} className="text-[10px] glass px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-gradient-brand">{p.metric}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={()=>setOpen(null)}/>
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              className="relative glass-strong rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 scrollbar-hidden"
            >
              <button onClick={()=>setOpen(null)} className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full glass">
                <X className="h-4 w-4"/>
              </button>
              <div className="text-[10px] uppercase tracking-widest text-cyan">{projects[open].cat}</div>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gradient">{projects[open].title}</h3>
              <p className="mt-2 text-muted-foreground">{projects[open].summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {projects[open].tools.map(t=>(
                  <span key={t} className="text-xs glass px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-5 -mx-2"><MiniChart kind={projects[open].chart}/></div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-cyan text-xs uppercase tracking-wider"><Target className="h-3.5 w-3.5"/> Problem</div>
                  <p className="mt-2 text-sm text-muted-foreground">{projects[open].problem}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-purple text-xs uppercase tracking-wider"><Lightbulb className="h-3.5 w-3.5"/> Solution</div>
                  <p className="mt-2 text-sm text-muted-foreground">{projects[open].solution}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-electric text-xs uppercase tracking-wider"><TrendingUp className="h-3.5 w-3.5"/> Results</div>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc pl-4">
                    {projects[open].results.map(r=><li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
