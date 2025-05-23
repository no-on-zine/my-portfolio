import MainVisual from '@/components/MainVisual';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <MainVisual />
      <Works />
      <Services />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}
