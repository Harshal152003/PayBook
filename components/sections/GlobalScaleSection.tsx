"use client";
import Image from "next/image";
import { Globe, ShieldCheck, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function GlobalScaleSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration Column */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main SVG Illustration */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/logbg4.svg"
                  alt="Global Reach and Connectivity"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
            </div>
          </div>

          {/* Text Content Column */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
            <div>
              <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-[#1A8FE3] mb-4">
                Unlimited Potential
              </span>
              <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
                Scale Your Success <br />
                <span className="gradient-text">Across Regions</span>
              </h2>
              <p className="mt-6 font-dm text-slate-500 text-lg leading-relaxed">
                PayBook is built for the ambitious. Whether you&apos;re managing a single office or a global workforce, our infrastructure grows with you, ensuring compliance and speed at every step.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: Globe,
                  title: "Multi-Location Ready",
                  description: "Centralize your operations across cities and countries with ease."
                },
                {
                  icon: ShieldCheck,
                  title: "Regulatory Compliance",
                  description: "Local laws, global standards—we handle the heavy lifting of compliance."
                },
                {
                  icon: Zap,
                  title: "Instant Scaling",
                  description: "Onboard hundreds of employees in minutes with automated workflows."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#1A8FE3] group-hover:text-white transition-all duration-300">
                    <item.icon size={22} className="transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="font-dm text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
