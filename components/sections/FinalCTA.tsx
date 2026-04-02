"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function FinalCTA() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""} relative rounded-3xl bg-brand-navy overflow-hidden shadow-2xl`}
        >
          {/* Internal gradients for dark block */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center flex flex-col items-center gap-6 py-20 px-6 sm:px-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles size={28} className="text-white" />
            </div>

            <div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Ready to Transform Your{" "}
                <span className="text-brand-cyan">HR Operations?</span>
              </h2>
              <p className="mt-4 font-dm text-base text-white/70 max-w-lg mx-auto">
                Join hundreds of businesses already using PayBook. Set up in minutes,
                not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 font-syne font-bold px-8 py-4 rounded-full bg-brand-cyan text-brand-navy hover:bg-white transition-colors duration-300 text-sm shadow-xl shadow-brand-cyan/20"
              >
                Request a Free Demo
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>

            <p className="font-dm text-xs text-white/50">
              No credit card required. Setup in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
