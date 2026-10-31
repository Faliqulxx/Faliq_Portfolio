"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyViewportProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: string | number;
  className?: string;
}

export default function LazyViewport({
  children,
  fallback,
  rootMargin = "350px",
  minHeight = "400px",
  className = "w-full",
}: LazyViewportProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView) return;
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isInView, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={!isInView ? { minHeight } : undefined}
    >
      {isInView ? children : fallback ?? <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  );
}

