'use client';

import { useInView } from '@/hooks/useInView';

export default function Footer() {
  const { ref: titleRef, isInView: isTitleInView } = useInView();
  const currentYear = new Date().getFullYear();
  const startingYear = 1983;
  return (
    <footer className="flex items-center justify-center p-4 text-xs h-40 text-indigo-900/10">
      <div
        ref={titleRef}
        className={`transition-all duration-700 ease-out transform ${
          isTitleInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        © {startingYear}
        {currentYear > startingYear ? `–${currentYear}` : ''} Keita Nakagawa.
        All rights reserved.
      </div>
    </footer>
  );
}
