"use client";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HR Manager",
    company: "FinTech Growth Co.",
    initials: "PS",
    quote:
      "PayBook completely transformed how we manage payroll. What used to take our team 3 days now runs automatically in minutes. The payslip generation alone is worth it.",
    stars: 5,
    color: "from-brand-blue to-teal-400",
  },
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    company: "Logistics Solutions Pvt. Ltd.",
    initials: "RM",
    quote:
      "We scaled from 30 to 200 employees and PayBook handled every bit of it seamlessly. Multi-branch payroll, attendance, and recruitment — all from one dashboard.",
    stars: 5,
    color: "from-indigo-500 to-brand-blue",
  },
  {
    name: "Sneha Patil",
    role: "HR Director",
    company: "EduTech Startup",
    initials: "SP",
    quote:
      "The attendance geolocation feature is a game changer for our remote team. Leave management is now zero-effort. I'd recommend PayBook to any growing company.",
    stars: 5,
    color: "from-teal-400 to-brand-cyan",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-16`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Testimonials
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Loved by HR teams{" "}
            <span className="gradient-text">across India</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-7 shadow-lg flex flex-col gap-5 fade-in-section delay-${(i + 1) * 100} ${isVisible ? "is-visible" : ""}`}
            >
              <Quote size={28} className="text-brand-blue/30" />

              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="font-dm text-sm text-slate-600 font-medium leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0 shadow-md`}
                >
                  <span className="font-syne font-bold text-xs text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-syne font-bold text-sm text-brand-navy">
                    {t.name}
                  </p>
                  <p className="font-dm text-xs font-medium text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
