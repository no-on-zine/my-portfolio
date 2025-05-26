import { useEffect, useState, useRef } from 'react';

export function useInView<T extends HTMLElement = HTMLElement>(
  providedRef?: React.RefObject<T | null>
) {
  const [isInView, setIsInView] = useState(false);
  const internalRef = useRef<T | null>(null);
  const ref = providedRef ?? internalRef;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref]);

  return { ref, isInView };
}
