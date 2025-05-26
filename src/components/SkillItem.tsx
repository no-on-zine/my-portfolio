// /src/components/SkillItem.tsx
'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

type SkillItemProps = {
  title: string;
  description: string;
  delay?: number;
};

export default function SkillItem({
  title,
  description,
  delay = 0,
}: SkillItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { isInView } = useInView(itemRef);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col gap-y-2 transition-all duration-700 ease-out transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold">{title}:</h3>
      <p>{description}</p>
    </div>
  );
}
