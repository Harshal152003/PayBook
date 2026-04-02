"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: 500, suffix: "+", label: "Companies" },
  { value: 10000, suffix: "+", label: "Employees Managed" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 7, suffix: "", label: "Powerful Modules" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useInView();

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  const display = value === 99.9 ? (isVisible ? "99.9" : "0") : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <p className="font-syne font-extrabold text-4xl sm:text-5xl text-brand-navy">
        <span className="gradient-text">{display}{suffix}</span>
      </p>
    </div>
  );
}

export default function StatsStrip() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} relative py-16 px-4 sm:px-6 z-10`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 sm:p-12 shadow-xl border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="font-dm text-sm font-bold text-slate-400 text-center">{stat.label}</p>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute" style={{ right: `${(3 - i) * 25}%`, top: "50%", width: "1px", height: "40px", background: "rgba(15, 23, 42, 0.05)", transform: "translateY(-50%)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
