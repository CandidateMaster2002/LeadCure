import React from 'react';
import { Reveal } from '../ui/Reveal';
import { WhatsAppCTAButton } from '../ui/WaCTAButton';
export const Hero: React.FC = () => {
 

  return (
    <section id="home" className="relative pt-20 pb-6 px-6 max-w-[1400px] mx-auto flex flex-col items-center bg-clinic-grid rounded-b-[3rem] border-b border-slate-100 overflow-hidden">
      <Reveal className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-slate-900 text-white text-[9px] font-bold tracking-[0.3em] uppercase">
        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
        FIRST-RESPONSE ADVANTAGE
      </Reveal>
      <div className="relative text-center max-w-4xl mb-12">
        <Reveal delay={100}><h1 className="text-gradient text-4xl md:text-7xl font-bold mb-6 tracking-tighter leading-[0.8]">They Replied First. <br />
They Booked the Patient.</h1></Reveal>
        <Reveal delay={200}><p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">Every 5-minute delay costs upto 8% of patients. <span className="text-slate-900 font-bold border-b-2 border-emerald-400">LEADCURE™</span> responds instantly-24/7.</p></Reveal>
      </div>

      {/* Diagnostics */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-5 mb-8 px-2">
        {/* Manual */}
        <Reveal delay={300}>
          <div className="glass-panel rounded-[2rem] p-6 border border-slate-200 shadow-sm">
            <p className="text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
              Manual Clinics
            </p>

            <div className="space-y-3 mb-5">
              {['1–2 hour avg response time', 'Followups depends on staff memory', 'Feels outdated and low-tech'].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full shrink-0" />
                  <p className="text-sm text-slate-700 font-semibold">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl font-serif italic text-slate-900">
              ~42% Patients  <span className="text-red-600 font-bold">Lost</span>
            </p>
          </div>
        </Reveal>

        {/* Optimized */}
        <Reveal delay={400}>
          <div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden shadow-xl">
            <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              LEADCURE™ Clinics
            </p>

            <div className="space-y-3 mb-5">
              {['Replies in <5 seconds', 'Systematic follow-ups', 'Premium, modern patient experience'].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full shrink-0" />
                  <p className="text-sm font-semibold">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl font-serif italic">
              ~94% Patients <span className="text-emerald-400 font-bold">Booked</span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* CTA - WhatsApp Only */}
      <Reveal
        delay={500}
        className="w-full max-w-md"
      >
        <WhatsAppCTAButton />
      </Reveal>
    </section>
  );
};