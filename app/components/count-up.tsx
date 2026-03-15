'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function CountUp({ end = 0, suffix = '', prefix = '', duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const safeEnd = end ?? 0;
      const safeDuration = duration ?? 2000;
      const steps = 60;
      const increment = safeEnd / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= safeEnd) {
          setCount(safeEnd);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, safeDuration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="count-up">
      {prefix ?? ''}{count}{suffix ?? ''}
    </span>
  );
}
