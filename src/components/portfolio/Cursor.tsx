import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (!enabled) return null;
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-[400px] w-[400px] rounded-full"
      style={{
        background: "radial-gradient(circle, oklch(0.7 0.22 265 / 0.18), transparent 60%)",
        translateX: pos.x - 200,
        translateY: pos.y - 200,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setP(pct);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, oklch(0.82 0.16 195), oklch(0.7 0.22 265), oklch(0.65 0.27 295))",
          boxShadow: "0 0 12px oklch(0.7 0.22 265 / 0.8)",
        }}
      />
    </div>
  );
}
