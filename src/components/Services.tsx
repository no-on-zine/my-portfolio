import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

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

export default async function ServicesPage() {
  return (
    <section className="works container mx-auto py-8">
      <FadeIn>
        <h2 className="flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6">
          Services
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 items-center text-center"
          >
            <Image src={service.src} alt="" width={55} height={55} />
            <h3 className="text-lg font-bold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
