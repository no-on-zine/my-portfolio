import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import MainVisual from '@/components/MainVisual';
import Works from '@/components/Works';
export default function Home() {
  return (
    <div className="container">
      <MainVisual />
      <Works />
    </div>
  );
}
