import React from 'react';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-40 h-40 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute top-20 right-5 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-5 left-1/2 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center text-white relative overflow-hidden shadow-2xl border-2 border-emerald-500/20">
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-5 left-5 w-20 h-20 border-2 border-emerald-400 rounded-full"></div>
            <div className="absolute bottom-5 right-5 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
          </div>

          {/* Glowing effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 animate-shimmer"></div>

          <div className="relative z-10 space-y-4 sm:space-y-5">

            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/20 border border-emerald-400 rounded-full animate-pulse-slow">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping absolute"></span>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <p className="text-[9px] sm:text-[10px] font-bold text-emerald-300 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                Limited Time Offer
              </p>
            </div>

            {/* Main headline with gradient */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent animate-gradient bg-300%">
                Try For 30 Days
              </h2>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 animate-bounce-slow">
                100% FREE
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-xl mx-auto leading-relaxed px-2">
              See real results before you commit.<br className="hsidden sm:block" />
              <span className="text-emerald-400 font-semibold">No credit card. No contracts. No risk.</span>
            </p>

            {/* Features grid */}
          

            {/* CTA Button - Dancing */}
            <div className="pt-3 sm:pt-4">
              <button className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 bg-300% text-slate-900 text-sm sm:text-base md:text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 animate-gradient animate-bounce-gentle border-2 border-white/20">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-wave inline-block">👋</span>
                  <span>Start Your Free 30 Days Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Animated ring */}
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20"></span>
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 text-[10px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Instant ROI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>

            {/* Urgency text */}
            <p className="text-[10px] sm:text-xs text-emerald-300/80 italic animate-pulse-slow max-w-md mx-auto pt-1">
              Join 100+ clinics already using LeadCure to grow their practice
            </p>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-gradient { animation: gradient 3s ease infinite; }
        .bg-300\% { background-size: 300%; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};