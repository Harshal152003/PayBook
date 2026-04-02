"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function ContactSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10 bg-slate-50 border-t border-slate-100"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side: Information */}
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Get In Touch
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight">
            Let&apos;s Build Better{" "}
            <span className="gradient-text">Workplaces</span>
          </h2>
          <p className="mt-5 font-dm text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-md">
            Whether you are looking for a quick demo, a pricing question, or just
            want to talk about your HR challenges — our team is here for you.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                <Mail size={20} className="text-brand-blue" />
              </div>
              <div className="pt-1">
                <p className="font-dm text-xs font-bold text-slate-400 mb-0.5">Email Us</p>
                <a href="mailto:hello@paybook.in" className="font-syne font-bold text-brand-navy hover:text-brand-blue transition-colors text-lg">hello@paybook.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                <Phone size={20} className="text-brand-blue" />
              </div>
              <div className="pt-1">
                <p className="font-dm text-xs font-bold text-slate-400 mb-0.5">Call Us</p>
                <a href="tel:+919000012345" className="font-syne font-bold text-brand-navy hover:text-brand-blue transition-colors text-lg">+91 90000 12345</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-blue transition-colors">
                <MapPin size={20} className="text-brand-blue" />
              </div>
              <div className="pt-1">
                <p className="font-dm text-xs font-bold text-slate-400 mb-0.5">Office</p>
                <p className="font-syne font-bold text-brand-navy text-lg leading-tight">UnitySoftTech Inc.<br/><span className="font-dm text-sm text-slate-500 font-medium">Pune, Maharashtra, India</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className={`fade-in-section delay-200 ${isVisible ? "is-visible" : ""} relative`}>
          <div className="glass-card bg-white p-8 sm:p-10 shadow-xl border-slate-100 rounded-3xl relative z-10">
            <h3 className="font-syne font-extrabold text-2xl text-brand-navy mb-6">Send us a message</h3>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-dm text-xs font-bold text-slate-600">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-dm text-xs font-bold text-slate-600">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-dm text-xs font-bold text-slate-600">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-dm text-xs font-bold text-slate-600">How can we help you? *</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                  placeholder="Tell us about your team size and requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 mt-2 font-syne font-bold px-6 py-4 rounded-xl bg-brand-blue text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all active:scale-[0.98]"
              >
                Send Message
                <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
          {/* Form backdrop glow */}
          <div className="absolute inset-0 bg-brand-blue/5 blur-2xl -z-10 rounded-3xl translate-y-6" />
        </div>
      </div>
    </section>
  );
}
