import React from 'react';
import { Reveal } from '../ui/Reveal';

const PATH_STEPS = [
  { label: "Inquiry", icon: "👤", sub: "Insta/WA/Ads" },
  { label: "Engage", icon: "💬", sub: "Response<5s" },
  { label: "Book", icon: "📅", sub: "24/7 Auto-Schedule" },
  { label: "Remind", icon: "🔔", sub: "<5% No-Shows" },
  { label: "Deliver", icon: "🏥", sub: "Get Revenue" }
];

export const PrecisionPath: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <Reveal className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900">How LEADLOCK™ Works</h2>
        </Reveal>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-2">
          {PATH_STEPS.map((step, i, arr) => (
            <React.Fragment key={i}>
              <Reveal delay={i * 100} className="flex-1 w-full max-w-[110px] md:max-w-[200px] relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center text-xl md:text-3xl mb-2 md:mb-4 shadow-sm relative group-hover:border-emerald-400 group-hover:shadow-emerald-100 transition-all duration-300">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 text-white text-[9px] md:text-[10px] font-bold flex items-center justify-center shadow-lg">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-0.5 md:mb-1 uppercase tracking-tight">{step.label}</h4>
                  <p className="text-[9px] md:text-[11px] text-slate-600 font-semibold leading-tight max-w-[90px] md:max-w-[120px]">{step.sub}</p>
                </div>
              </Reveal>
              {i < arr.length - 1 && (
                <div className="hidden md:flex items-center text-emerald-500 flex-shrink-0 animate-pulse-slow py-4 md:py-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
              {i < arr.length - 1 && (
                <div className="md:hidden flex items-center text-emerald-400 flex-shrink-0 py-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Mobile horizontal connector line (optional visual guide) */}
        <div className="md:hidden mt-6 px-4">
          <div className="relative h-0.5 bg-gradient-to-r from-emerald-100 to-emerald-300 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};