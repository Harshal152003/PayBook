"use client";
import Image from "next/image";
import { Play, Zap, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import PremiumConnectivity from "../illustrations/PremiumConnectivity";

export default function HeroSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-start pt-40 lg:pt-44 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start z-10">
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
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight text-brand-navy">
            Smart HR for <br />
            <span className="gradient-text">Modern India</span>
          </h1>

          {/* Sub-text */}
          <p className="font-dm text-base sm:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
            Automate Attendance, Payroll & Compliance in minutes. 
            Scale your business with the platform trusted by <span className="text-brand-blue font-bold">500+ Enterprises.</span>
          </p>

          {/* New Competitive Feature: Mobile Lead Capture */}
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-[24px] border border-slate-200 shadow-xl shadow-blue-500/5 max-w-lg">
            <div className="flex-1 flex items-center px-4 gap-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-bold text-slate-400 text-sm border-r border-slate-200 pr-3">+91</span>
              <input 
                type="tel" 
                placeholder="Enter Mobile Number" 
                className="bg-transparent border-none outline-none py-4 text-slate-900 font-syne font-bold text-sm w-full placeholder:text-slate-300"
              />
            </div>
            <button className="px-8 py-4 bg-brand-blue text-white font-syne font-black text-sm rounded-2xl hover:bg-brand-navy transition-all shadow-lg shadow-blue-500/20 active:scale-95 shrink-0 uppercase tracking-wider">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <button className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                <Play size={16} className="fill-brand-blue text-brand-blue" />
              </div>
              <span className="font-syne font-bold text-sm text-slate-600 group-hover:text-brand-blue transition-colors">Watch Demo</span>
            </button>
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-dm text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Available on</span>
                <div className="flex gap-3 mt-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                   {/* Fallback store badges using standard icons if store-specific ones are missing */}
                   <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-white rounded-lg">
                      <Rocket size={12} />
                      <span className="text-[9px] font-black uppercase tracking-tighter">iOS</span>
                   </div>
                   <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-white rounded-lg">
                      <Zap size={12} />
                      <span className="text-[9px] font-black uppercase tracking-tighter">Android</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-100 mt-4 opacity-70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-dm text-xs font-bold text-slate-500">Attendance Tracker</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-dm text-xs font-bold text-slate-500">Statutory Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="font-dm text-xs font-bold text-slate-500">One-Click Payroll</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Floating dashboard mockup */}
        <div
          className={`fade-in-section delay-300 ${isVisible ? "is-visible" : ""} relative flex items-center justify-center mt-12 lg:mt-32 pb-10`}
        >
          {/* Browser mockup wrapper — 3D tilt */}
          <div
            className="relative w-full max-w-2xl mt-12 lg:mt-0"
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

          {/* Premium Background Illustration (Global connectivity) */}
          <div className="absolute -z-10 top-1/3 left-[40%] sm:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] sm:w-[130%] h-[160%] sm:h-[130%] opacity-[0.25] pointer-events-none">
            <PremiumConnectivity />
          </div>
        </div>
      </div>
    </section>
  );
}
