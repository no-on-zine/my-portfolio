import { fetchWorks } from '@/lib/fetchWorks';
import WorksGallery from '@/components/WorksGallery';

export default async function WorksPage() {
  const works = await fetchWorks();

  return (
    <section className="works container mx-auto py-15">
      <WorksGallery works={works} />
    </section>
  );
}
