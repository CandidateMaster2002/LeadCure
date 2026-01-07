import React, { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { FAQ_DATA} from '../../constants';

export const FAQ: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) =>
    setActiveId(activeId === id ? null : id);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-[780px] mx-auto px-6">

        <Reveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif italic font-bold text-slate-900 tracking-tight">
          FAQs
          </h2>
        </Reveal>

        <div className="divide-y divide-slate-200 border-t border-slate-200">
          {(showAll ? FAQ_DATA : FAQ_DATA.slice(0, 11)).map((faq, idx) => (
            <Reveal key={faq.id} delay={idx * 40}>
              <div>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-sm md:text-base font-semibold transition-colors ${
                      activeId === faq.id
                        ? 'text-emerald-700'
                        : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeId === faq.id
                        ? 'rotate-180 text-emerald-600'
                        : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

            <div
  className={`transition-all duration-300 ease-in-out ${
    activeId === faq.id 
      ? 'max-h-[600px] opacity-100 mb-6' 
      : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  {/* The 'whitespace-pre-line' class below is what fixes the new lines */}
  <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base bg-slate-50 p-5 rounded-2xl border-l-4 border-emerald-500">
    {faq.answer}
  </div>
</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* {!showAll && (
          <Reveal className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-slate-900 text-xs font-bold uppercase tracking-widest hover:text-emerald-600 transition"
            >
              View more questions →
            </button>
          </Reveal>
        )} */}
      </div>
    </section>
  );
};
