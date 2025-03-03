
import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  duration?: number;
}

export const useScrollTo = () => {
  const scrollTo = useCallback((id: string, options: ScrollOptions = {}) => {
    const { offset = 0, duration = 800 } = options;
    
    const element = document.getElementById(id);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    const startTime = performance.now();
    const startPosition = window.pageYOffset;
    
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = ease(progress);
      
      window.scrollTo({
        top: startPosition + (offsetPosition - startPosition) * easeProgress,
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, []);
  
  return scrollTo;
};

export default useScrollTo;
