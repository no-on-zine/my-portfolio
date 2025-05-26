'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { Work } from '@/lib/fetchWorks';

type WorksItemProps = {
  work: Work;
  index: number;
  onClick: () => void;
};

export default function WorksItem({ work, index, onClick }: WorksItemProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative group cursor-pointer transition-all duration-700 ease-out transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }} // ms単位で指定
      onClick={onClick}
    >
      {work.image?.url && (
        <Image
          src={work.image.url}
          alt={work.title || ''}
          width={500}
          height={500}
          className="object-cover w-full h-auto transition-transform duration-300 transform group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
      )}
    </div>
  );
}
