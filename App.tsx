
import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { Hero } from './components/sections/Hero';
import { PrecisionPath } from './components/sections/PrecisionPath';
import { Protocols } from './components/sections/Protocols';
import GrowthGap from './components/sections/GrowthGap';
// import { GrowthGap } from './components/sections/GrowthGap';
import { Architect } from './components/sections/Architect';
import { Outcomes } from './components/sections/Outcomes';
import { Assets } from './components/sections/Assets';
import { FAQ } from './components/sections/FAQ';
import { Offer } from './components/sections/Offer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden leading-snug">
      <Header />
      
      <main>
      <Hero />
<PrecisionPath />   
<Protocols />      
<Outcomes />       
<Assets />        
<FAQ />           
<Offer />      

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
