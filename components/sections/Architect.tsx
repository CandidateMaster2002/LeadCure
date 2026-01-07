
import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Architect: React.FC = () => {
  return (
    <section id="architect" className="bg-slate-900 py-24 text-white rounded-t-[5rem]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <Reveal className="relative group mx-auto lg:mx-0 w-full max-w-[380px]">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Jayant" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 p-6 rounded-3xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-all">
              <p className="text-slate-900 text-3xl font-bold leading-none">ROI+</p>
              <p className="text-[10px] text-slate-900 font-bold uppercase tracking-widest mt-1">Guaranteed</p>
            </div>
          </Reveal>
          <div className="space-y-10">
            <Reveal delay={100}><h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none">Jayant <span className="text-emerald-400 font-serif italic">- Clinical Growth Architect.</span></h2></Reveal>
            <div className="grid grid-cols-2 gap-6">
               <Reveal delay={200} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                 <p className="text-4xl font-bold text-emerald-400 mb-2">$332K+</p>
                 <p className="text-xs text-white font-bold uppercase tracking-widest opacity-80">Revenue Optimized H1 '24</p>
               </Reveal>
               <Reveal delay={300} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                 <p className="text-4xl font-bold text-white mb-2">H-V-C</p>
                 <p className="text-xs text-white font-bold uppercase tracking-widest opacity-80">Conversion Specialist</p>
               </Reveal>
            </div>
            <Reveal delay={400} className="relative">
              <p className="italic text-slate-200 text-2xl font-light leading-relaxed font-serif pl-8 border-l-4 border-emerald-400">"Elite clinics drown in traffic but starve for conversion. We provide the surgical infrastructure to lock patient intent at scale."</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
