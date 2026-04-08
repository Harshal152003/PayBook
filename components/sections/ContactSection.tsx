"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function ContactSection() {
  const { ref, isVisible } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here
    formData.append("access_key", "f55da8d7-5987-452b-bb47-f869c4a7e812"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 z-10 bg-slate-50 border-t border-slate-100 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[80%] opacity-[0.04] pointer-events-none -z-10 rotate-12">
        <Image 
          src="/logbg1.svg" 
          alt="Contact Decoration" 
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left side: Information */}
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} space-y-12`}>
          <div>
            <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-[#1A8FE3] mb-4">
              Get In Touch
            </span>
            <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              Let&apos;s Build Better{" "}
              <br />
              <span className="gradient-text">Workplaces</span>
            </h2>
            <p className="mt-6 font-dm text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-md">
              Whether you are looking for a quick demo, a pricing question, or just
              want to talk about your HR challenges — our team is here for you.
            </p>
          </div>

          <div className="bg-white/40 border border-white/60 rounded-[2rem] p-8 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              {/* Front-View Illustration */}
              <div className="relative w-32 h-32 shrink-0 rounded-2xl overflow-hidden bg-white shadow-lg group">
                 <Image 
                   src="/logbg1.svg" 
                   alt="Team Collaboration" 
                   fill
                   className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A8FE3]/5 to-transparent pointer-events-none" />
              </div>

              {/* Contact Details stack */}
              <div className="flex-1 grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#1A8FE3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A8FE3] group-hover:text-white transition-all duration-300">
                    <Mail size={18} className="text-[#1A8FE3] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-dm text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
                    <a href="mailto:unitysoftech@gmail.com" className="font-syne font-bold text-slate-900 hover:text-[#1A8FE3] transition-colors text-base">unitysoftech@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#1A8FE3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A8FE3] group-hover:text-white transition-all duration-300">
                    <Phone size={18} className="text-[#1A8FE3] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-dm text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                    <a href="tel:+919322298156" className="font-syne font-bold text-slate-900 hover:text-[#1A8FE3] transition-colors text-base">+91 93222 98156</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className={`fade-in-section delay-200 ${isVisible ? "is-visible" : ""} relative mt-1.5`}>
          <div className="glass-card bg-white p-8 sm:p-10 shadow-xl border-slate-100 rounded-3xl relative z-10 transition-all duration-500">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="font-syne font-extrabold text-2xl text-slate-900 mb-2">Message Sent!</h3>
                <p className="font-dm text-slate-500 max-w-[240px]">We have received your message and will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[#1A8FE3] font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-syne font-extrabold text-2xl text-slate-900 mb-6">Send us a message</h3>
                
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  {/* Web3Forms Configuration */}
                  <input type="hidden" name="subject" value="New Inquiry from PayBook Landing Page" />
                  <input type="hidden" name="from_name" value="PayBook Website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-dm text-xs font-bold text-slate-600">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1A8FE3] transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-dm text-xs font-bold text-slate-600">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1A8FE3] transition-all"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="font-dm text-xs font-bold text-slate-600">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1A8FE3] transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-dm text-xs font-bold text-slate-600">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1A8FE3] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-dm text-xs font-bold text-slate-600">How can we help you? *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1A8FE3] transition-all resize-none"
                      placeholder="Tell us about your team size and requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group flex items-center justify-center gap-2 mt-2 font-syne font-bold px-6 py-4 rounded-xl bg-[#1A8FE3] text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />}
                  </button>
                </form>
              </>
            )}
          </div>
          {/* Form backdrop glow */}
          <div className="absolute inset-0 bg-blue-500/5 blur-2xl -z-10 rounded-3xl translate-y-6" />
        </div>
      </div>
    </section>
  );
}
