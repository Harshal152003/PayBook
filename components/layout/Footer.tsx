import { Globe, Link2, Share2 } from "lucide-react";
import Image from "next/image";

function PayBookLogoSmall() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
        <Image 
          src="/clientLogo.jpg" 
          alt="PayBook" 
          width={32} 
          height={32} 
          className="w-full h-full object-cover"
        />
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
  Contact: ["unitysoftech@gmail.com", "+91 93222 98156", "Pune, Maharashtra, India", "Sales Inquiry", "Partnership"],
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
