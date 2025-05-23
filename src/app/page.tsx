import MainVisual from '@/components/MainVisual';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
export default function Home() {
  return (
    <div className="container">
      <MainVisual />
      <Works />
      <Services />
      <Skills />
    </div>
  );
}
