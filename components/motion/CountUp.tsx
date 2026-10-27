"use client";

import React, { useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  active?: boolean;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  active = true,
  duration = 0.6,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const totalSteps = Math.max(10, Math.round((duration * 1000) / 30));
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const current = Math.round(progress * target);
      setCount(current);

      if (step >= totalSteps) {
        clearInterval(interval);
        setCount(target);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [active, target, duration]);

  return (
    <span className={className}>
      {String(count).padStart(2, "0")}
    </span>
  );
}

