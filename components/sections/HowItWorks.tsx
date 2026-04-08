"use client";
import { useState, useEffect } from "react";
import { Building2, UserPlus, CalendarCheck, CreditCard } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Setup Company",
    description: "Configure HQ, branches, departments, and roles in minutes.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Onboard Team",
    description: "Add employees and automatically dispatch portal invites.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Track Time",
    description: "Employees punch in/out via mobile with geographic tracking.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Run Payroll",
    description: "One-click precise payroll with instant payslip generation.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="why"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-20`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-[#1A8FE3] mb-3">
            How It Works
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-800">
            From Setup to Salary in{" "}
            <span className="gradient-text">4 Steps</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #1A8FE3 0px, #1A8FE3 8px, transparent 8px, transparent 16px)",
                opacity: 0.3,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeIndex === index;
            const isInactive = activeIndex !== null && activeIndex !== index;
            
            return (
              <div
                key={step.number}
                className={`fade-in-section delay-${(index + 1) * 100} ${isVisible ? "is-visible" : ""} relative flex flex-col items-center text-center transition-all duration-500 ${isInactive ? 'opacity-40 grayscale-[0.5]' : 'opacity-100 grayscale-0'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Step circle */}
                <div className={`relative z-10 flex items-center justify-center mb-6 rounded-3xl transition-all duration-500 cursor-pointer border ${isActive ? 'w-24 h-24 bg-[#1A8FE3] border-[#1A8FE3] -translate-y-3 shadow-[0_15px_40px_rgba(26,143,227,0.45)]' : 'w-20 h-20 bg-white border-slate-200 shadow-sm'}`}>
                  <Icon size={isActive ? 36 : 28} className={`transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  
                  {/* Large faded number */}
                  <span
                    className={`absolute -top-4 -right-2 font-syne font-extrabold text-5xl select-none pointer-events-none transition-colors duration-500 ${isActive ? 'text-white/20' : 'text-slate-100'}`}
                    style={{ lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className={`font-syne font-bold text-base sm:text-lg mb-2 transition-colors duration-500 ${isActive ? 'text-[#1A8FE3]' : 'text-slate-800'}`}>
                  {step.title}
                </h3>
                <p className={`font-dm text-sm font-medium leading-relaxed max-w-[220px] transition-colors duration-500 ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
