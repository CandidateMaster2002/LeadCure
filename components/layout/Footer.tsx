import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-4 text-center bg-slate-50 border-t border-slate-200">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
        <span className="font-bold tracking-tight text-slate-900">LEADCURE™</span>
        <span className="hidden sm:inline">•</span>
        <span className="uppercase tracking-wider text-[10px] font-semibold text-slate-700">
          Clinical Conversion Engine
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="tracking-wide text-[10px]">
          © 2026 BoltBlazers
        </span>
      </div>
    </footer>
  );
};