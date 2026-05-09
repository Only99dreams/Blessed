import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan via-electric to-purple grid place-items-center text-2xl font-display font-bold text-background glow-primary"
            >
              B
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-6 h-0.5 mx-auto bg-gradient-to-r from-cyan via-electric to-purple"
            />
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading insights</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
