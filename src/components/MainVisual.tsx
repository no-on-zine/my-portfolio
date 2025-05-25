import { AnimatedText } from '@/components/AnimatedTextProps';

export default function MainVisual() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="main-visual relative z-10 flex flex-col h-full justify-center px-5 gap-y-5">
        <h1 className="flex flex-col text-4xl font-bold whitespace-nowrap gap-y-2 tracking-tight">
          <AnimatedText text="Creative Web Designer" />
          <AnimatedText text="Front-End Engineer" delay={0.06} />
          <AnimatedText text="Web Director" delay={0.07} />
          <AnimatedText text="Photographer" delay={0.08} />
        </h1>
        <AnimatedText
          text="Blending aesthetics with code to craft meaningful digital experiences."
          className="mt-4 text-lg max-w-xl"
          delay={0.03}
        />
      </div>
    </div>
  );
}
