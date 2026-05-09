import { motion } from "framer-motion";
import { Section } from "./Section";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, RadialBarChart, RadialBar,
} from "recharts";
import { Activity, Users, DollarSign, Zap } from "lucide-react";

const revenue = Array.from({length:12}).map((_,i)=>({m:["J","F","M","A","M","J","J","A","S","O","N","D"][i], v: 120+Math.round(Math.sin(i/2)*40)+i*18}));
const traffic = Array.from({length:14}).map((_,i)=>({d:i+1, v: 200+Math.round(Math.sin(i/1.5)*60)+i*8}));
const segments = [
  { name:"Enterprise", value:42, c:"oklch(0.7 0.22 265)" },
  { name:"SMB", value:28, c:"oklch(0.82 0.16 195)" },
  { name:"Startup", value:18, c:"oklch(0.65 0.27 295)" },
  { name:"Other", value:12, c:"oklch(0.78 0.18 220)" },
];
const channels = [
  { c:"Organic", v:78 }, { c:"Paid", v:62 }, { c:"Email", v:54 },
  { c:"Social", v:48 }, { c:"Referral", v:36 }, { c:"Direct", v:71 },
];
const radial = [{ name:"Score", value:87, fill:"oklch(0.7 0.22 265)" }];

const tooltipStyle = {
  background:"oklch(0.18 0.025 264)",
  border:"1px solid oklch(0.3 0.04 264)",
  borderRadius:10, fontSize:11, color:"white"
};

function Heatmap() {
  const cells = Array.from({length: 7*14});
  return (
    <div className="grid grid-cols-14 gap-1" style={{gridTemplateColumns:"repeat(14,1fr)"}}>
      {cells.map((_, i) => {
        const intensity = (Math.sin(i/3) + Math.cos(i/5) + 2) / 4;
        return (
          <motion.div
            key={i}
            initial={{ opacity:0, scale:0.5 }}
            whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }}
            transition={{ delay: i*0.005 }}
            className="aspect-square rounded-sm"
            style={{ background: `oklch(0.7 0.22 265 / ${0.15 + intensity*0.7})` }}
          />
        );
      })}
    </div>
  );
}

function LiveValue({ base, variance = 5, prefix = "" }: { base:number; variance?:number; prefix?:string }) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV(b => Math.max(0, b + (Math.random()-0.5)*variance));
    }, 1500);
    return () => clearInterval(id);
  }, [variance]);
  return <span>{prefix}{v.toFixed(0).toLocaleString()}</span>;
}

export function AnalyticsShowcase() {
  return (
    <Section
      id="analytics"
      eyebrow="Live Analytics"
      title={<>A glimpse of the <span className="text-gradient-brand">dashboards I build</span>.</>}
      subtitle="Real-time KPIs, predictive trends and heatmaps — everything you'd expect in a premium analytics suite."
    >
      <div className="grid lg:grid-cols-12 gap-4">
        {/* KPIs */}
        {[
          { i:Activity, l:"Active Users", v:12480, p:"+12.4%", color:"cyan" },
          { i:DollarSign, l:"Revenue", v:284600, p:"+38.2%", color:"electric", prefix:"$" },
          { i:Users, l:"Conversions", v:1840, p:"+9.6%", color:"purple" },
          { i:Zap, l:"Engagement", v:94, p:"+4.1%", color:"cyan", suffix:"%" },
        ].map((k,i)=>(
          <motion.div
            key={k.l}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay: i*0.05 }}
            className="lg:col-span-3 glass-strong rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-purple/30 text-cyan">
                <k.i className="h-4 w-4"/>
              </div>
              <span className="text-[10px] text-cyan flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse"/>live
              </span>
            </div>
            <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
            <div className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gradient-brand">
              {k.prefix}<Counter to={k.v}/>{k.suffix}
            </div>
            <div className="mt-1 text-xs text-cyan">{k.p} vs last period</div>
          </motion.div>
        ))}

        {/* Revenue area */}
        <div className="lg:col-span-8 glass-strong rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Revenue Trend</div>
              <div className="font-display text-lg font-semibold">12-month performance</div>
            </div>
            <div className="text-xs text-cyan">YTD <LiveValue base={284} prefix="$" />k</div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenue}>
              <defs>
                <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.22 265)" stopOpacity={0.6}/>
                  <stop offset="100%" stopColor="oklch(0.7 0.22 265)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid stroke="oklch(0.3 0.04 264 / 0.4)" vertical={false}/>
              <XAxis dataKey="m" stroke="oklch(0.7 0.03 260)" fontSize={11} axisLine={false} tickLine={false}/>
              <YAxis stroke="oklch(0.7 0.03 260)" fontSize={11} axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={tooltipStyle}/>
              <Area type="monotone" dataKey="v" stroke="oklch(0.82 0.16 195)" strokeWidth={2.5} fill="url(#rev)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie segments */}
        <div className="lg:col-span-4 glass-strong rounded-2xl p-5">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Customer Mix</div>
          <div className="font-display text-lg font-semibold">By segment</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={segments} dataKey="value" innerRadius={48} outerRadius={75} paddingAngle={4}>
                {segments.map(s=> <Cell key={s.name} fill={s.c}/>)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle}/>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {segments.map(s => (
              <div key={s.name} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{background:s.c}}/>
                <span className="text-muted-foreground">{s.name}</span>
                <span className="ml-auto font-semibold">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channels bar */}
        <div className="lg:col-span-5 glass-strong rounded-2xl p-5">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Channel Performance</div>
          <div className="font-display text-lg font-semibold">Conversion index</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={channels}>
              <CartesianGrid stroke="oklch(0.3 0.04 264 / 0.3)" vertical={false}/>
              <XAxis dataKey="c" stroke="oklch(0.7 0.03 260)" fontSize={11} axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={tooltipStyle}/>
              <Bar dataKey="v" radius={[8,8,0,0]} fill="url(#bg)"/>
              <defs>
                <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.16 195)"/>
                  <stop offset="100%" stopColor="oklch(0.65 0.27 295)"/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic line */}
        <div className="lg:col-span-4 glass-strong rounded-2xl p-5">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Traffic</div>
          <div className="font-display text-lg font-semibold">Last 14 days</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={traffic}>
              <CartesianGrid stroke="oklch(0.3 0.04 264 / 0.3)" vertical={false}/>
              <XAxis dataKey="d" stroke="oklch(0.7 0.03 260)" fontSize={11} axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={tooltipStyle}/>
              <Line type="monotone" dataKey="v" stroke="oklch(0.7 0.22 265)" strokeWidth={2.5} dot={{r:3, fill:"oklch(0.82 0.16 195)"}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Radial score */}
        <div className="lg:col-span-3 glass-strong rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Health Score</div>
          <div className="font-display text-lg font-semibold">Overall</div>
          <div className="relative flex-1 grid place-items-center">
            <ResponsiveContainer width="100%" height={180}>
              <RadialBarChart innerRadius="70%" outerRadius="100%" data={radial} startAngle={90} endAngle={-270}>
                <RadialBar dataKey="value" cornerRadius={20} background={{fill: "oklch(0.22 0.03 264)"}}/>
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-gradient-brand">87</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="lg:col-span-12 glass-strong rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Activity Heatmap</div>
              <div className="font-display text-lg font-semibold">Engagement intensity by hour</div>
            </div>
            <div className="text-xs text-cyan flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse"/>updating
            </div>
          </div>
          <Heatmap/>
        </div>
      </div>
    </Section>
  );
}
