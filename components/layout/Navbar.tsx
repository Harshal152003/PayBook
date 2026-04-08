"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Rocket, Phone, Mail, Globe, Share2, Link2, ArrowRight } from "lucide-react";

function PayBookLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-blue-500/20 overflow-hidden">
          <Image 
            src="/clientLogo.jpg" 
            alt="PayBook Logo" 
            width={48} 
            height={48} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1A8FE3] blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
      </div>
      <div className="flex flex-col">
        <span className="font-syne font-extrabold text-2xl tracking-tight text-slate-900 leading-none">
          Pay<span className="text-[#1A8FE3]">Book</span>
        </span>
        <span className="font-dm text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">
          Enterprise SaaS
        </span>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Utility Bar - TRUST LAYER */}
      <div className={`w-full bg-slate-900 text-white/80 transition-all duration-500 overflow-hidden ${
        scrolled ? "h-0" : "h-11"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between font-dm text-[11px] font-bold tracking-wider">
          <div className="flex items-center gap-6">
            <a href="tel:+919322298156" className="flex items-center gap-2 hover:text-[#1A8FE3] transition-colors">
              <Phone size={14} className="text-[#1A8FE3]" />
              <span>+91 93222 98156</span>
            </a>
            <a href="mailto:unitysoftech@gmail.com" className="flex items-center gap-2 hover:text-[#1A8FE3] transition-colors border-l border-white/10 pl-6">
              <Mail size={14} className="text-[#1A8FE3]" />
              <span>unitysoftech@gmail.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              <a href="#" className="hover:text-[#1A8FE3] transition-all hover:scale-110"><Link2 size={14} /></a>
              <a href="#" className="hover:text-[#1A8FE3] transition-all hover:scale-110"><Share2 size={14} /></a>
              <a href="#" className="hover:text-[#1A8FE3] transition-all hover:scale-110"><Globe size={14} /></a>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="uppercase tracking-widest text-[10px]">Cloud Status: Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-500 ease-in-out ${
        scrolled ? "py-4 px-4" : "py-6 px-6"
      }`}>
        <nav 
          className={`mx-auto transition-all duration-500 ease-in-out flex items-center justify-between ${
            scrolled
              ? "max-w-6xl bg-white/90 backdrop-blur-2xl px-6 py-3 rounded-full border border-slate-200/50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
              : "max-w-7xl bg-transparent"
          }`}
        >
          <Link href="/" className="shrink-0">
            <PayBookLogo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-5 py-2 group overflow-visible flex items-center gap-1.5"
                >
                  <span className="relative z-10 font-syne font-black text-[16px] uppercase tracking-[0.16em] text-slate-800 group-hover:text-[#1A8FE3] transition-all duration-300">
                    {link.label}
                  </span>
                  {link.label === "Pricing" && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                      <div className="absolute -top-3 left-3 bg-brand-cyan text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter scale-0 group-hover:scale-100 transition-transform origin-bottom-left">OFFER</div>
                    </span>
                  )}
                  {/* Underline indicator */}
                  <div className="absolute bottom-0 left-5 right-5 h-[3px] bg-gradient-to-r from-[#1A8FE3] to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Group */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.paybook24.com/login"
              className={`group relative flex items-center gap-3 rounded-2xl bg-[#1A8FE3] text-white font-syne font-black text-xs uppercase tracking-[0.15em] overflow-hidden shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95 ${
                scrolled ? "px-6 py-3" : "px-10 py-5"
              }`}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#1A8FE3] via-blue-400 to-[#1A8FE3] -z-10" />
              
              <span className="relative z-10">Login / Sign Up</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#contact"
              className={`relative group flex items-center gap-2 rounded-2xl border-2 border-slate-900 text-slate-900 font-syne font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:bg-slate-900 hover:text-white active:scale-[0.98] ${
                scrolled ? "px-5 py-2.5" : "px-8 py-4"
              }`}
            >
              <Rocket size={18} className="relative z-10" />
              <span className="relative z-10">Book Demo</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all ${
              scrolled ? "bg-slate-50" : "bg-white/50 backdrop-blur-md"
            } border border-slate-100 flex items-center justify-center active:scale-90`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} className="text-[#1A8FE3]" /> : <Menu size={24} className="text-slate-900" />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white/95 backdrop-blur-2xl border border-slate-200/50 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-3 mb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="bg-slate-50 px-5 py-4 rounded-2xl font-syne font-extrabold text-[#1A8FE3] hover:bg-blue-50 transition-all text-sm uppercase tracking-widest flex items-center justify-center border border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="h-px bg-slate-100 my-2" />
          
          <Link
            href="https://www.paybook24.com/login"
            className="w-full py-5 rounded-2xl bg-blue-50 font-syne font-black text-[#1A8FE3] text-center hover:bg-blue-100 transition-all uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-sm border border-blue-200/50"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-2 h-2 rounded-full bg-[#1A8FE3] animate-pulse" />
            Sign in to Dashboard
          </Link>
          
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full py-6 rounded-2xl bg-slate-900 text-white font-syne font-black text-center shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3"
          >
            <Rocket size={18} className="animate-bounce" />
            Get Started Free
          </a>
        </div>
      )}
    </header>
  );
}
