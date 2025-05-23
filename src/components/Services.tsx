'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    src: '/images/home/services/icon_ui.svg',
    title: 'Web Design & UI/UX',
  },
  {
    src: '/images/home/services/icon_code.svg',
    title: 'Frontend Development',
  },
  {
    src: '/images/home/services/icon_cms.svg',
    title: 'CMS Integration (WordPress / Shopify / Headless CMS)',
  },
  {
    src: '/images/home/services/icon_photography.svg',
    title: 'Art Direction & Photography',
  },
  {
    src: '/images/home/services/icon_direction.svg',
    title: 'Project Planning & Direction (EN/JP)',
  },
];

export default function ServicesPage() {
  const { ref: titleRef, isInView: isTitleInView } = useInView();

  return (
    <section className="services mx-auto py-15 px-10">
      <h2
        ref={titleRef}
        className={`flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6 transition-all duration-700 ease-out transform ${
          isTitleInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        Services
      </h2>

      <div className="flex flex-col gap-10">
        {services.map((service, index) => {
          const { ref, isInView } = useInView();

          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col gap-y-2 items-center text-center transition-all duration-700 ease-out transform ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image src={service.src} alt="" width={55} height={55} />
              <h3 className="text-lg font-bold max-w-[25ch]">
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
