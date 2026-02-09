"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
}

export default function Counter({
  end,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  duration = 2,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="stat-counter mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="font-display text-sm uppercase tracking-[0.15em] text-cream/80">
        {label}
      </p>
      {sublabel && (
        <p className="font-body text-xs text-white/30 mt-1">{sublabel}</p>
      )}
    </motion.div>
  );
}
