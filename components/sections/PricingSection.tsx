"use client";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small teams",
    emoji: "🚀",
    features: [
      "Up to 50 Employees",
      "Attendance & Leave",
      "Payroll & Payslips",
      "Basic Reports",
      "Email Support",
    ],
    cta: "Contact for Pricing",
    highlight: false,
  },
  {
    name: "Enterprise",
    tagline: "For growing businesses",
    emoji: "🏢",
    features: [
      "Unlimited Employees",
      "Multi-branch & Multi-company",
      "Recruitment Module",
      "Advanced Analytics",
      "Role-Based Access & Audit Log",
      "Priority Support + SLA",
      "Custom integrations",
    ],
    cta: "Request Custom Quote",
    highlight: true,
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-14`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Pricing
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Simple,{" "}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 font-dm text-slate-500 font-medium text-base max-w-xl mx-auto">
            No hidden fees. No surprises. Contact us to get a plan tailored to your team size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`fade-in-section delay-${(i + 1) * 200} ${isVisible ? "is-visible" : ""} ${
                plan.highlight
                  ? "relative p-[2px] rounded-[26px] bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-blue shadow-lg shadow-brand-blue/10"
                  : ""
              }`}
            >
              <div
                className={`glass-card p-8 h-full flex flex-col gap-6 shadow-md ${
                  plan.highlight ? "rounded-3xl border-none" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-syne font-bold tracking-wide shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <span className="text-3xl">{plan.emoji}</span>
                  <h3 className="font-syne font-extrabold text-2xl text-brand-navy mt-2">
                    {plan.name}
                  </h3>
                  <p className="font-dm text-sm text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={15} className="text-brand-cyan mt-0.5 shrink-0" />
                      <span className="font-dm text-sm font-medium text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn-shimmer w-full font-syne font-bold text-sm py-3.5 rounded-full text-center transition-all duration-300 ${
                    plan.highlight
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
