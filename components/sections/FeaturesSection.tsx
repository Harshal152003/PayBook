"use client";
import { Users, Clock, DollarSign, Briefcase, BarChart3, Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Full lifecycle from onboarding to exit. Branch, department, and role-based profiles with document management.",
    delay: "delay-100",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description:
      "Real-time punch tracking with geolocation support. Auto leave balance management and shift scheduling.",
    delay: "delay-200",
  },
  {
    icon: DollarSign,
    title: "Payroll & Salary",
    description:
      "Auto salary calculation, tax-ready slips, and one-click PDF payslips. Bank-transfer integration built in.",
    delay: "delay-300",
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    description:
      "Post jobs, manage candidates, and schedule interviews in one pipeline. Track every applicant's journey.",
    delay: "delay-100",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "HR, payroll, and sales reports in PDF & Excel. Live dashboard analytics with visual charts.",
    delay: "delay-200",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Multi-company, multi-branch support with granular permissions per role. Audit trail on every action.",
    delay: "delay-300",
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-16`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Core Modules
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Everything HR needs,{" "}
            <span className="gradient-text">nothing it doesn&apos;t</span>
          </h2>
          <p className="mt-4 font-dm text-slate-500 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Six powerful modules, one unified platform. Designed for growing teams
            that don&apos;t have time for complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-card p-7 group cursor-default fade-in-section ${feature.delay} ${isVisible ? "is-visible" : ""}`}
              >
                <div className="icon-glow w-12 h-12 mb-5">
                  <Icon size={22} className="text-brand-blue" />
                </div>

                <h3 className="font-syne font-bold text-lg text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="font-dm text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
