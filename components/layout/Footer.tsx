"use client";
import { Globe, Link2, Share2 } from "lucide-react";

function PayBookLogoSmall() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-7 h-7">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="18" cy="10" r="5" fill="#1A8FE3" />
          <path
            d="M13 19 L13 35 M13 19 C13 19 22 17 23 24 C24 28 18 30 13 28"
            stroke="#1A8FE3"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <span className="font-syne font-bold text-lg text-brand-navy">
        Pay<span className="text-brand-blue">Book</span>
      </span>
    </div>
  );
}

const footerLinks = {
  Product: ["Features", "Modules", "Pricing", "Changelog", "Roadmap"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Partners"],
  Resources: ["Documentation", "API Reference", "Status Page", "Community", "Support"],
  Contact: ["hello@paybook.in", "+91 90000 12345", "Pune, Maharashtra", "Sales Inquiry", "Partnership"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <PayBookLogoSmall />
            <p className="mt-3 font-dm text-sm text-slate-500 leading-relaxed font-medium">
              HR & Payroll. Simplified.
            </p>
            <p className="mt-4 font-dm text-xs text-slate-400 leading-relaxed">
              The all-in-one platform for growing businesses to manage their entire workforce — from hiring to payroll.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors duration-200" aria-label="LinkedIn">
                <Link2 size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors duration-200" aria-label="Share">
                <Share2 size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors duration-200" aria-label="Website">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-syne font-bold text-sm text-brand-navy mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-dm text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} PayBook by{" "}
            <span className="text-brand-blue">UnitySoftTech</span>. All rights reserved.
          </p>
          <p className="font-dm text-xs font-medium text-slate-400">
            Designed & Developed by{" "}
            <span className="text-brand-blue font-bold">UnitySoftTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
