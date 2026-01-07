
import { useState, useEffect, useRef } from 'react';

export const useIntersection = (threshold = 0.1) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setActive(true); 
          observer.unobserve(entry.target); 
        } 
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, active] as const;
};
