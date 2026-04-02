"use client";
import Image from "next/image";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function HeroSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center z-10">
        {/* LEFT: Text content */}
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""} flex flex-col gap-6`}
        >
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 backdrop-blur-sm shadow-sm">
            <Zap size={14} className="text-brand-cyan" />
            <span className="font-dm text-xs font-bold text-brand-cyan tracking-wide">
              🚀 HRMS + Payroll + CRM — All-in-One
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight tracking-tight text-brand-navy">
            Manage Your Entire{" "}
            <span className="gradient-text">Workforce</span>
            {" "}from{" "}
            <span className="gradient-text">One Platform</span>
          </h1>

          {/* Sub-text */}
          <p className="font-dm text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
            PayBook is the modern HR & Payroll solution trusted by growing businesses.
            From onboarding to payroll, all automated — so you can focus on what matters.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="btn-shimmer font-syne font-bold px-7 py-4 rounded-full bg-brand-blue text-white text-sm text-center shadow-lg shadow-brand-blue/20"
            >
              Get Started Free
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 font-syne font-bold px-7 py-4 rounded-full border border-slate-300 bg-white text-slate-600 hover:text-brand-blue hover:border-brand-blue hover:shadow-md text-sm transition-all duration-300"
            >
              <Play size={14} className="fill-current text-brand-blue" />
              View Demo
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-slate-200 mt-2">
            <p className="font-dm text-xs font-medium text-slate-400">Trusted by</p>
            <span className="font-dm text-xs font-bold text-slate-500">✦ 500+ Companies</span>
            <span className="font-dm text-xs font-bold text-slate-500">✦ Attendance Tracking</span>
            <span className="font-dm text-xs font-bold text-slate-500">✦ Payroll Automation</span>
            <span className="font-dm text-xs font-bold text-slate-500">✦ Recruitment</span>
          </div>
        </div>

        {/* RIGHT: Floating dashboard mockup */}
        <div
          className={`fade-in-section delay-300 ${isVisible ? "is-visible" : ""} relative flex items-center justify-center`}
        >
          {/* Browser mockup wrapper — 3D tilt */}
          <div
            className="relative w-full max-w-2xl"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              className="browser-mockup animate-float"
              style={{
                transform: "rotateY(-8deg) rotateX(4deg)",
              }}
            >
              {/* Browser bar */}
              <div className="browser-bar">
                <span className="browser-dot bg-red-500/70" />
                <span className="browser-dot bg-yellow-500/70" />
                <span className="browser-dot bg-green-500/70" />
                <div className="ml-3 flex-1 bg-white border border-slate-100 rounded-md px-3 py-1 text-xs text-slate-400 font-dm shadow-sm">
                  app.paybook.in/dashboard
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative bg-white">
                <Image
                  src="/dashboard.png"
                  alt="PayBook Dashboard"
                  width={960}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute top-16 -right-4 flex items-center gap-2 bg-white border border-slate-100 px-3 py-2 rounded-full shadow-lg">
              <span className="live-dot w-2 h-2 rounded-full bg-green-500 block" />
              <span className="font-syne text-xs font-bold text-slate-700">Live</span>
            </div>

            {/* Stat floating card */}
            <div className="absolute -bottom-6 -left-4 glass-card px-4 py-3 max-w-[180px] shadow-xl">
              <p className="font-dm text-xs font-medium text-slate-400">Today&apos;s Payroll</p>
              <p className="font-syne font-extrabold text-lg text-brand-navy mt-0.5">₹ 12.4 L</p>
              <p className="font-dm text-[11px] font-bold text-green-500 mt-1">↑ Processed automatically</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
