import { motion } from "framer-motion";
import { Section } from "./Section";
import { useState } from "react";
import { Mail, Linkedin, Github, MessageCircle, Calendar, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build something <span className="text-gradient-brand">data-driven</span>.</>}
      subtitle="Open to full-time, contract, and consulting opportunities. Average reply time: under 24 hours."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
        <motion.form
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
          className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan/20 via-transparent to-purple/20 opacity-50 -z-10 blur-xl"/>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Your name","Email address"].map((p, i) => (
              <div key={p} className="relative">
                <input
                  required
                  type={i===1 ? "email" : "text"}
                  placeholder={p}
                  className="w-full bg-transparent rounded-xl border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:shadow-[0_0_0_3px_oklch(0.82_0.16_195/0.15)] transition placeholder:text-muted-foreground"
                />
              </div>
            ))}
          </div>
          <input
            placeholder="Subject"
            className="w-full bg-transparent rounded-xl border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:shadow-[0_0_0_3px_oklch(0.82_0.16_195/0.15)] transition placeholder:text-muted-foreground"
          />
          <textarea
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full bg-transparent rounded-xl border border-border/60 px-4 py-3 text-sm focus:outline-none focus:border-cyan focus:shadow-[0_0_0_3px_oklch(0.82_0.16_195/0.15)] transition placeholder:text-muted-foreground resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric via-primary to-purple px-6 py-3 text-sm font-semibold text-white glow-primary hover:scale-[1.03] transition-transform"
          >
            {sent ? "Message Sent ✓" : <>Send Message <Send className="h-4 w-4"/></>}
          </button>
        </motion.form>

        <div className="space-y-3">
          {[
            { i:Mail, t:"Email", v:"blessed.salihu@example.com", h:"mailto:blessed.salihu@example.com", c:"cyan" },
            { i:Linkedin, t:"LinkedIn", v:"/in/blessed-peters-salihu", h:"#", c:"electric" },
            { i:Github, t:"GitHub", v:"@blessedsalihu", h:"#", c:"purple" },
            { i:MessageCircle, t:"WhatsApp", v:"Chat on WhatsApp", h:"#", c:"cyan" },
            { i:Calendar, t:"Book a call", v:"Schedule on Cal.com", h:"#", c:"electric" },
          ].map((c, i) => (
            <motion.a
              key={c.t}
              href={c.h}
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*0.06 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 glass rounded-2xl p-4 ring-glow transition group"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-purple/30 text-cyan">
                <c.i className="h-5 w-5"/>
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="font-medium text-sm">{c.v}</div>
              </div>
              <span className="text-cyan opacity-0 group-hover:opacity-100 transition">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
