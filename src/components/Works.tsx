// app/works/page.tsx
import { fetchWorks } from '@/lib/fetchWorks';
import WorksGallery from '@/components/WorksGallery';

export default async function WorksPage() {
  const works = await fetchWorks();

  return (
    <section className="works container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Works</h2>
      <WorksGallery works={works} />
    </section>
  );
}
