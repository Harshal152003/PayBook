"use client";
import { useState, useEffect } from "react";
import { 
  BarChart3, 
  Settings2, 
  Network, 
  UserCircle2, 
  ArrowRight,
  CheckCircle2,
  Users,
  Wallet
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const modules = [
  {
    id: "analytics",
    icon: BarChart3,
    title: "Executive Analytics",
    subtitle: "The Control Center",
    description: "Real-time insights into payroll spend, headcount trends, and employee attrition with automated reporting for management.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "payroll",
    icon: Settings2,
    title: "Payroll Pipeline",
    subtitle: "One-Click Processing",
    description: "A visual continuous processing engine that handles attendance, tax deductions, and disbursements in a single workflow.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "org",
    icon: Network,
    title: "Dynamic Org Chart",
    subtitle: "Interactive Hierarchy",
    description: "Visualize your entire company structure with a clickable, zoomable tree that updates automatically as you hire and promote.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "ess",
    icon: UserCircle2,
    title: "Self-Service Portal",
    subtitle: "Empower Your Team",
    description: "A consumer-grade portal for employees to track leaves, download payslips, and manage taxes with gamified progress.",
    color: "from-blue-600 to-cyan-500"
  }
];

export default function ModulesSection() {
  const { ref, isVisible } = useInView();
  const [activeTab, setActiveTab] = useState("analytics");

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = modules.findIndex((m) => m.id === prev);
        const nextIndex = (currentIndex + 1) % modules.length;
        return modules[nextIndex].id;
      });
    }, 4000); // 4 seconds per module for high-fidelity content reading
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="modules" ref={ref} className="py-24 px-4 sm:px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block font-dm text-xs font-bold uppercase tracking-widest text-[#1A8FE3] mb-3">
            Killer Modules
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
            The Power Behind <span className="gradient-text">PayBook</span>
          </h2>
          <p className="font-dm text-slate-500 max-w-2xl mx-auto text-lg">
            Experience the modules that make PayBook the world&apos;s most intuitive HR & Payroll platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tab Selection */}
          <div className="lg:col-span-5 space-y-4">
            {modules.map((module) => {
              const isActive = activeTab === module.id;
              const Icon = module.icon;

              return (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(module.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                    isActive 
                      ? "bg-white border-[#1A8FE3]/20 shadow-xl shadow-blue-500/5 ring-1 ring-[#1A8FE3]/10 opacity-100 scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-white/50 opacity-40 grayscale-[0.5]"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#1A8FE3] text-white shadow-lg shadow-blue-500/20" : "bg-white text-slate-400 border border-slate-200"
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className={`font-syne font-black text-2xl mb-1 transition-colors ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                        {module.title}
                      </h4>
                      <p className={`font-dm text-[13px] font-bold uppercase tracking-[0.15em] ${isActive ? "text-[#1A8FE3]" : "text-slate-400"}`}>
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Module Content & Mini UI */}
          <div className="lg:col-span-7 h-[500px]">
            <div className="glass-card h-full p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="font-syne font-black text-[2.75rem] text-slate-900 mb-4 leading-tight">
                  {modules.find(m => m.id === activeTab)?.title}
                </h3>
                <p className="font-dm text-slate-500 leading-relaxed text-lg max-w-lg">
                  {modules.find(m => m.id === activeTab)?.description}
                </p>
              </div>

              {/* Dynamic Mockup Area */}
              <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 border-dashed p-6 relative overflow-hidden">
                {activeTab === "analytics" && <AnalyticsMockup />}
                {activeTab === "payroll" && <PayrollMockup />}
                {activeTab === "org" && <OrgChartMockup />}
                {activeTab === "ess" && <ESSMockup />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalyticsMockup() {
  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Headcount", value: "1,280", trend: "+12%" },
          { label: "Expenses", value: "$420K", trend: "-2%" },
          { label: "Turnover", value: "3.2%", trend: "-0.5%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-lg font-bold text-slate-800">{stat.value}</p>
            <p className={`text-[10px] font-bold ${stat.trend.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}>{stat.trend}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-100 flex-1 shadow-sm">
        <div className="flex justify-between items-end h-32 gap-3">
          {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-[#1A8FE3]/10 rounded-t-lg transition-all duration-1000 origin-bottom"
                style={{ height: `${h}%` }}
              >
                <div className="h-full w-full bg-[#1A8FE3] rounded-t-lg opacity-40" />
              </div>
              <span className="text-[10px] font-bold text-slate-300">M0{i+1}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700">Department Split</span>
            <span className="text-slate-400">View All</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
            <div className="h-full w-[45%] bg-[#1A8FE3]" />
            <div className="h-full w-[25%] bg-indigo-400" />
            <div className="h-full w-[30%] bg-cyan-400" />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#1A8FE3]" /><span className="text-[10px] text-slate-500">Eng</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-400" /><span className="text-[10px] text-slate-500">Sales</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-400" /><span className="text-[10px] text-slate-500">Ops</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayrollMockup() {
  const steps = ["Attendance", "Deductions", "Review", "Disburse"];
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2" />
        <div className="relative flex justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 border-2 transition-all duration-700 ${
                i <= 1 ? "bg-white border-[#1A8FE3] text-[#1A8FE3]" : "bg-white border-slate-200 text-slate-400"
              }`}>
                {i === 0 ? <CheckCircle2 size={18} /> : <span className="text-xs font-bold">{i+1}</span>}
              </div>
              <span className={`text-[10px] font-bold ${i <= 1 ? "text-[#1A8FE3]" : "text-slate-400"}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#1A8FE3]">
              <Settings2 size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Calculating Taxes</p>
              <p className="text-[10px] text-slate-400">Processing TDS & PF for 12,042 employees</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#1A8FE3]">64% Done</span>
          </div>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[64%] bg-[#1A8FE3] rounded-full" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="py-2.5 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition">Cancel Run</button>
          <button className="py-2.5 rounded-lg bg-[#1A8FE3] text-[10px] font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition">View Details</button>
        </div>
      </div>
    </div>
  );
}

function OrgChartMockup() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* Root Node */}
      <div className="w-32 p-3 bg-white border border-[#1A8FE3]/30 rounded-xl flex flex-col items-center shadow-lg relative z-20">
        <div className="w-8 h-8 rounded-full bg-slate-100 mb-2 flex items-center justify-center text-[#1A8FE3]">
          <UserCircle2 size={20} />
        </div>
        <p className="text-[8px] font-bold text-slate-900">Sarah Jenkins</p>
        <p className="text-[6px] text-[#1A8FE3] font-bold">CEO & Founder</p>
      </div>
      
      {/* Connections line */}
      <div className="h-8 w-px bg-[#1A8FE3]/20 relative z-10" />
      <div className="w-48 h-px bg-[#1A8FE3]/20 relative z-10" />
      
      {/* Sub Nodes */}
      <div className="flex gap-8 mt-[-1px]">
        {[
          { name: "David Wu", role: "CTO" },
          { name: "Alex Grant", role: "CHRO" }
        ].map((node, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-8 w-px bg-[#1A8FE3]/20" />
            <div className="w-32 p-3 bg-white border border-slate-100 rounded-xl flex flex-col items-center shadow-md hover:border-[#1A8FE3]/20 transition cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-slate-50 mb-2 flex items-center justify-center text-slate-400">
                <UserCircle2 size={20} />
              </div>
              <p className="text-[8px] font-bold text-slate-900">{node.name}</p>
              <p className="text-[6px] text-slate-400 font-bold">{node.role}</p>
            </div>
            {/* Further branches (small) */}
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
         <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
            <Users size={12} className="text-[#1A8FE3]" />
            <span className="text-[8px] font-bold text-slate-700">Explore Team</span>
         </div>
      </div>
    </div>
  );
}

function ESSMockup() {
  return (
    <div className="h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-white border-4 border-white shadow-xl overflow-hidden">
          <div className="w-full h-full bg-[#1A8FE3]/10 flex items-center justify-center text-[#1A8FE3]">
            <UserCircle2 size={32} />
          </div>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 text-sm">Welcome back, Mark!</h5>
          <p className="text-[10px] text-slate-400">Senior Product Designer • Design Ops</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Leave Balance</p>
          <div className="relative w-20 h-20 mx-auto mb-2">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-50" />
              <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray={213} strokeDashoffset={213 * (1 - 0.7)} className="text-[#1A8FE3]" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-slate-800">14</span>
              <span className="text-[6px] font-bold text-slate-400">DAYS LEFT</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wallet size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold text-slate-700">Latest Payslip</span>
            </div>
            <button className="text-[8px] font-bold text-[#1A8FE3] bg-blue-50 px-2 py-1 rounded">PDF</button>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-2">
             <div className="flex justify-between text-[10px]">
                <span className="font-bold text-slate-700">Tax Proofs</span>
                <span className="text-emerald-500 font-bold">80%</span>
             </div>
             <div className="h-1 w-full bg-slate-50 rounded-full">
                <div className="h-full w-[80%] bg-emerald-500 rounded-full" />
             </div>
          </div>
          <button className="w-full py-3 rounded-xl bg-slate-900 text-white text-[10px] font-bold shadow-lg shadow-black/10 flex items-center justify-center gap-2">
            Apply Leave <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
