"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

function BrowserMockup({
  src,
  alt,
  url,
  rotate,
}: {
  src: string;
  alt: string;
  url: string;
  rotate: string;
}) {
  return (
    <div
      className="browser-mockup w-full max-w-[520px] transition-transform duration-500 hover:rotate-0 hover:scale-105"
      style={{ transform: rotate }}
    >
      <div className="browser-bar">
        <span className="browser-dot bg-red-500/70" />
        <span className="browser-dot bg-yellow-500/70" />
        <span className="browser-dot bg-green-500/70" />
        <div className="ml-3 flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 font-dm truncate shadow-sm">
          {url}
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={960}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default function ShowcaseSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-brand-cyan/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-16`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Product UI
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Powerful Dashboard.{" "}
            <span className="gradient-text">Zero Complexity.</span>
          </h2>
          <p className="mt-4 font-dm text-slate-500 font-medium text-base max-w-xl mx-auto">
            Get a real-time view of your entire HR operations — attendance,
            payroll, and workforce analytics — from a single screen.
          </p>
        </div>

        <div
          className={`fade-in-section delay-200 ${isVisible ? "is-visible" : ""} relative flex flex-col md:flex-row items-center justify-center gap-0 md:-space-x-16`}
        >
          <BrowserMockup
            src="/dashboard.png"
            alt="PayBook Dashboard"
            url="app.paybook.in/dashboard"
            rotate="rotate(-3deg) translateY(20px)"
          />
          <BrowserMockup
            src="/attendance.png"
            alt="PayBook Attendance Admin"
            url="app.paybook.in/attendance"
            rotate="rotate(3deg)"
          />
        </div>
      </div>
    </section>
  );
}
