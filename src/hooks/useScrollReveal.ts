import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollReveal = ({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: ScrollRevealOptions = {}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const animationRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (inView && animationRef.current) {
      setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.style.opacity = '1';
          animationRef.current.style.transform = 'translateY(0)';
        }
      }, delay);
    }
  }, [inView, delay]);

  return { ref, inView, animationRef };
};