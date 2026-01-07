
import React from 'react';
import { useIntersection } from '../../hooks/useIntersection';

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [ref, active] = useIntersection();
  return (
    <div 
      ref={ref} 
      className={`reveal ${active ? 'active' : ''} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
