'use client';

import { useInView } from '@/hooks/useInView';
import ServiceItem from './ServiceItem';

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

export default function Services() {
  const { ref: titleRef, isInView: isTitleInView } =
    useInView<HTMLHeadingElement>();

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

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 items-baseline justify-center lg:max-w-[1440px] mx-auto">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} delay={index * 100} />
        ))}
      </div>
    </section>
  );
}
