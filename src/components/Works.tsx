import { fetchWorks } from '@/lib/fetchWorks';
import WorksGallery from '@/components/WorksGallery';
import FadeIn from '@/components/FadeIn';

export default async function WorksPage() {
  const works = await fetchWorks();

  return (
    <section className="works container mx-auto py-8">
      <FadeIn>
        <h2 className="flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6">
          Works
        </h2>
      </FadeIn>
      <WorksGallery works={works} />
    </section>
  );
}
