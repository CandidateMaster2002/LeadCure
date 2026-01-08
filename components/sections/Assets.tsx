import React from 'react';

interface Bonus {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  impact: string;
}

const BONUSES: Bonus[] = [
  {
    id: 'b1',
    title: 'Weekly WhatsApp Performance Report',
    description: "Know how your clinic is performing - without opening dashboards",
    bullets: [
      "Weekly report sent directly on doctor's WhatsApp",
      'See inquiries, bookings, and missed opportunities',
      'Track response speed and follow-up results',
    ],
    impact: 'Stay in control of conversions in under 60 seconds each week',
  },
  {
    id: 'b2',
    title: 'Staff Training + Launch Kit',
    description: 'Train your team and go live without confusion',
    bullets: [
      'Simple staff training videos',
      'Ready-to-use patient reply scripts',
      'Treatment explanation templates',
    ],
    impact: 'Your clinic is ready to convert patients from Day 1',
  },
  {
    id: 'b3',
    title: 'Monthly 30-Minute Optimisation Call',
    description: 'One focused call every month to improve results',
    bullets: [
      'Review booking and drop-off data',
      'Improve reply flows and follow-ups',
      'Adjust system based on real patient behavior',
    ],
    impact: 'Conversions improve month after month - without extra effort',
  },
  {
    id: 'b4',
    title: 'Always-Available Support (Free Forever)',
    description: 'Reach out whenever you need help',
    bullets: [
      'Support available on all days',
      'No expiry or time limits',
      'Direct human assistance',
    ],
    impact: 'You’re supported for life - even as your clinic grows',
  },
];

export const Assets: React.FC = () => {
  const items = [...BONUSES, ...BONUSES];

  return (
    <section className="bg-slate-50 py-16 rounded-[4rem] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            🎁 Included Bonuses
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Everything you need to run LEADCURE™ smoothly - without extra cost
          </p>
        </div>

        {/* Scroll Container */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 w-max animate-marquee">
            {items.map((bonus, index) => (
              <div key={`${bonus.id}-${index}`} className="shrink-0">
                <div className="bg-white border border-slate-200 rounded-[2rem] w-[300px] sm:w-[360px] md:w-[420px] p-6 shadow-sm">

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl">
                      {bonus.id === 'b1'
                        ? '📊'
                        : bonus.id === 'b2'
                        ? '🚀'
                        : bonus.id === 'b3'
                        ? '🧠'
                        : '🤝'}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {bonus.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-700 mb-4">
                    {bonus.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {bonus.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-xs font-medium text-slate-800"
                      >
                        <span className="w-4 h-4 mt-0.5 rounded-full bg-emerald-100 flex items-center justify-center">
                          ✓
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-bold text-slate-900 border-l-4 border-slate-900 pl-3 bg-slate-50 py-1">
                    {bonus.impact}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }

          .animate-marquee:hover,
          .animate-marquee:active {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </section>
  );
};
