"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const faqCategories = ["General", "Payroll", "Security & Compliance"];

const faqs = [
  {
    category: "General",
    question: "How long does it take to implement PayBook?",
    answer: "Most organizations are up and running within 48 to 72 hours. Our dedicated onboarding team handles the data migration and initial company setup for you.",
  },
  {
    category: "General",
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day fully-featured trial. No credit card is required. You can test all modules including payroll processing and employee self-service.",
  },
  {
    category: "Payroll",
    question: "Can it handle complex tax calculations for India?",
    answer: "Absolutely. PayBook is built specifically for Indian statutory compliance, including PF, ESI, PT, and Income Tax (TDS) calculations under both old and new tax regimes.",
  },
  {
    category: "Payroll",
    question: "Is it possible to generate bulk payslips in one click?",
    answer: "Yes. Once you review and lock the payroll month, you can generate and automatically email payslips to your entire workforce in under a minute.",
  },
  {
    category: "Security & Compliance",
    question: "Is our employee data secure?",
    answer: "We use bank-grade 256-bit encryption for data at rest and in transit. Our servers are hosted on enterprise-grade cloud infrastructure (AWS) with 99.9% uptime and regular security audits.",
  },
  {
    category: "Security & Compliance",
    question: "Can I control who sees what data?",
    answer: "Yes, PayBook features highly granular Role-Based Access Control (RBAC). You can define exactly which managers can see specific departments, salary details, or attendance logs.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useInView();
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" ref={ref} className="relative py-24 px-4 sm:px-6 z-10 bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl transition-transform duration-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""} text-center mb-16`}>
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
            Got Questions?
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Everything You{" "}
            <span className="gradient-text">Need to Know</span>
          </h2>
          <p className="mt-5 font-dm text-slate-500 font-medium text-base sm:text-lg max-w-xl mx-auto">
            Find answers to common questions about PayBook’s features, security, and implementation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`fade-in-section delay-200 ${isVisible ? "is-visible" : ""} flex flex-wrap justify-center gap-3 mb-12`}>
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Reset open accordion when switching categories
              }}
              className={`px-6 py-2.5 rounded-full font-syne font-bold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 translate-y-[-2px]"
                  : "bg-slate-50 text-slate-400 border border-slate-100 hover:bg-white hover:border-brand-blue/30 hover:text-brand-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className={`fade-in-section delay-400 ${isVisible ? "is-visible" : ""} grid grid-cols-1 gap-4`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {filteredFaqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`border transition-all duration-300 rounded-3xl overflow-hidden ${
                    openIndex === index 
                    ? "border-brand-blue/30 bg-blue-50/30 shadow-sm" 
                    : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
                  >
                    <span className={`font-syne font-bold text-base sm:text-lg lg:text-xl transition-colors ${
                      openIndex === index ? "text-brand-blue" : "text-brand-navy"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === index ? "bg-brand-blue text-white rotate-0" : "bg-slate-50 text-slate-400 rotate-180"
                    }`}>
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8">
                      <p className="font-dm text-slate-500 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card */}
        <motion.div 
          className={`fade-in-section delay-600 ${isVisible ? "is-visible" : ""} mt-16 p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-blue/30 transition-colors" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 shadow-2xl">
                <HelpCircle size={28} className="text-brand-cyan" />
              </div>
              <div>
                <h4 className="font-syne font-extrabold text-xl sm:text-2xl">Still have questions?</h4>
                <p className="font-dm text-slate-400 mt-1 max-w-sm">We&apos;re here to help you finding the perfect fit for your workplace needs.</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="group/btn flex items-center gap-2 bg-white text-slate-900 font-syne font-bold px-8 py-4 rounded-2xl hover:bg-brand-cyan hover:text-white transition-all shadow-xl active:scale-95"
            >
              <MessageCircle size={20} />
              Talk to Our Experts
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
