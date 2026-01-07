
import React from 'react';
import { WhatsAppMessage } from '../types';

interface WhatsAppMockupProps {
  messages: WhatsAppMessage[];
}

const WhatsAppMockup: React.FC<WhatsAppMockupProps> = ({ messages }) => {
  const [visibleMessages, setVisibleMessages] = React.useState<WhatsAppMessage[]>([]);

  React.useEffect(() => {
  setVisibleMessages([]);
  let index = 0;
  let timeoutId: number;

  const showNext = () => {
    if (index >= messages.length) return;

    const currentMessage = messages[index];
    setVisibleMessages(prev => [...prev, currentMessage]);

    index++;

    if (index < messages.length) {
      const nextMessage = messages[index];

      const delay =
        nextMessage.sender === 'patient'
          ? 700
          : nextMessage.buttons
          ? 1100
          : 900;

      timeoutId = window.setTimeout(showNext, delay);
    }
  };

  if (messages.length > 0) {
    timeoutId = window.setTimeout(showNext, 500);
  }

  return () => {
    window.clearTimeout(timeoutId);
  };
}, [messages]);

  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[3.8rem] h-[640px] w-[315px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Structural phone details */}
      <div className="h-[35px] w-[3px] bg-gray-900 absolute -left-[15px] top-[80px] rounded-l-lg"></div>
      <div className="h-[50px] w-[3px] bg-gray-900 absolute -left-[15px] top-[135px] rounded-l-lg"></div>
      <div className="h-[50px] w-[3px] bg-gray-900 absolute -left-[15px] top-[195px] rounded-l-lg"></div>
      <div className="h-[70px] w-[3px] bg-gray-900 absolute -right-[15px] top-[150px] rounded-r-lg"></div>
      
      <div className="rounded-[3rem] overflow-hidden w-full h-full bg-[#EFE9E2] flex flex-col relative">
        {/* Dynamic Header - Clinic Aesthetic */}
        <div className="bg-[#FFFFFF] p-5 pt-12 flex items-center space-x-4 border-b border-slate-100 z-10 shadow-sm">
          <div className="w-11 h-11 rounded-full bg-slate-100 overflow-hidden ring-2 ring-slate-50 flex-shrink-0 relative">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" 
              alt="Clinic Specialist" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-slate-900 leading-tight truncate">Clinic Concierge</p>
            <p className="text-[10px] text-emerald-500 font-bold flex items-center tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              Active Monitoring
            </p>
          </div>
          <div className="flex space-x-2 opacity-30">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Chat Flow Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-5 no-scrollbar pb-10">
          {visibleMessages.map((msg, idx) => {
            if (msg.sender === 'tag') {
              return (
                <div key={idx} className="flex justify-center py-4">
                  <span className="bg-slate-900 text-white text-[9px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.3em] shadow-xl shadow-slate-200 animate-reveal">
                    {msg.text}
                  </span>
                </div>
              );
            }
            return (
              <div key={idx} className="space-y-3 animate-reveal opacity-0" style={{animationDelay: `${idx * 0.15}s`}}>
                <div className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[88%] p-4 rounded-[1.25rem] text-[14px] shadow-sm relative transform transition-transform hover:scale-[1.02] duration-300 ${
                      msg.sender === 'patient' 
                        ? 'bg-[#005C4B] text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed font-light">{msg.text}</p>
                    <div className={`text-[9px] mt-2 flex items-center justify-end space-x-1.5 ${msg.sender === 'patient' ? 'text-emerald-100' : 'text-slate-400'} uppercase font-medium tracking-tight`}>
                      <span>{msg.time}</span>
                      {msg.sender === 'patient' && (
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 12l4 4L20 6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Interactive System Buttons */}
                {msg.buttons && (
                  <div className="flex flex-col space-y-2.5 pt-2 pr-6">
                    {msg.buttons.map((btn, bIdx) => (
                      <div 
                        key={bIdx}
                        className="bg-white border border-slate-100 text-[#00a884] text-[13px] font-bold py-3.5 px-5 rounded-2xl text-center shadow-md hover:bg-slate-50 transition-all cursor-pointer transform active:scale-95 hover:shadow-lg border-b-[3px] border-slate-200 active:border-b-0 active:translate-y-[3px]"
                      >
                        {btn}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Simulation Footer */}
        <div className="bg-white p-5 flex items-center space-x-4 border-t border-slate-50 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
          <div className="flex-1 bg-slate-50 rounded-full px-6 py-3 text-[12px] text-slate-400 font-light italic border border-slate-100">
            Awaiting patient intent...
          </div>
          <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-100 hover:bg-emerald-600 transition-colors cursor-pointer active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
