"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function PayBookLogo({ darkText = true }: { darkText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="18" cy="10" r="5" fill="#1A8FE3" />
          <path
            d="M10 35 C10 25 13 20 18 19 C23 18 27 21 27 26 C27 31 23 33 18 33 L18 35 Z"
            fill="#1A8FE3"
            opacity="0.9"
          />
          <path
            d="M13 19 L13 35 M13 19 C13 19 22 17 23 24 C24 28 18 30 13 28"
            stroke="#1A8FE3"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 rounded-full bg-brand-glow/20 blur-md -z-10" />
      </div>
      <span className={`font-syne font-bold text-xl tracking-tight ${darkText ? "text-brand-navy" : "text-white"}`}>
        Pay<span className="text-brand-blue">Book</span>
      </span>
    </div>
  );
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Why PayBook", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/">
          <PayBookLogo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-dm text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.paybook24.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-syne font-bold text-sm text-brand-navy hover:text-brand-blue transition-colors px-4 py-2"
          >
            Login
          </a>
          <a
            href="#contact"
            className="btn-shimmer font-syne font-semibold text-sm px-5 py-2.5 rounded-full bg-brand-blue text-white shadow-md shadow-brand-blue/20"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand-navy hover:text-brand-blue transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-dm font-medium text-slate-600 hover:text-brand-blue transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.paybook24.com/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-dm font-bold text-brand-navy hover:text-brand-blue transition-colors text-base"
          >
            Login to Dashboard
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-shimmer font-syne font-semibold text-sm px-5 py-3 rounded-full bg-brand-blue text-white text-center shadow-md shadow-brand-blue/20"
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  );
}
