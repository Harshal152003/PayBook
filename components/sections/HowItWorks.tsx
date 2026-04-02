"use client";
import { Building2, UserPlus, CalendarCheck, CreditCard } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Setup Company & Branches",
    description:
      "Configure your organization structure — HQ, branches, departments, and designations.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Onboard Employees",
    description:
      "Add employees, assign roles and permissions. Send welcome emails automatically.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Track Attendance Daily",
    description:
      "Employees punch in/out via web or mobile. Geolocation verification supported.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Run Payroll Automatically",
    description:
      "One-click payroll with automated deductions and instant payslip generation.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="why"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-20`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            How It Works
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
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
            return (
              <div
                key={step.number}
                className={`fade-in-section delay-${(index + 1) * 100} ${isVisible ? "is-visible" : ""} relative flex flex-col items-center text-center`}
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-3xl icon-glow flex items-center justify-center mb-6 bg-white border border-slate-200 hover:border-brand-blue/40 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-blue/10">
                  <Icon size={28} className="text-brand-blue" />
                  {/* Large faded number */}
                  <span
                    className="absolute -top-4 -right-2 font-syne font-extrabold text-5xl text-slate-200 select-none pointer-events-none"
                    style={{ lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-base sm:text-lg text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="font-dm text-sm text-slate-500 font-medium leading-relaxed max-w-[220px]">
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
