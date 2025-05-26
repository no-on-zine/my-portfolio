'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

type Service = {
  src: string;
  title: string;
};

type Props = {
  service: Service;
  delay: number;
};

export default function ServiceItem({ service, delay }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-y-2 items-center text-center transition-all duration-700 ease-out transform lg:flex-1 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Image src={service.src} alt="" width={55} height={55} />
      <h3 className="text-lg font-bold max-w-[25ch]">{service.title}</h3>
    </div>
  );
}
