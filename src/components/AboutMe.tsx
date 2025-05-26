'use client';

import { useInView } from '@/hooks/useInView';
import Image from 'next/image';

export default function AboutMe() {
  const { ref: titleRef, isInView: isTitleInView } =
    useInView<HTMLHeadingElement>();
  const { ref: imageRef, isInView: isImageInView } =
    useInView<HTMLHeadingElement>(); // 追加
  const { ref: textRef, isInView: isTextInView } =
    useInView<HTMLHeadingElement>(); // 追加

  return (
    <section className="about_me mx-auto py-15 px-10">
      <h2
        ref={titleRef}
        className={`flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6 transition-all duration-700 ease-out transform ${
          isTitleInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        About Me
      </h2>

      <div className="flex flex-col items-center gap-10">
        <Image
          ref={imageRef as React.RefObject<HTMLImageElement>} // 型エラー回避のため明示的に型指定
          src="/images/home/about_me/about_me.jpg"
          alt=""
          width={295}
          height={295}
          className={`rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform ${
            isImageInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        />

        <p
          ref={textRef}
          className={`text-justify whitespace-pre-line transition-all duration-700 ease-out transform max-w-xl ${
            isTextInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          Hi, Im <span className="font-bold">Keita Nakagawa</span>, a
          multidisciplinary creative specializing in web design, front-end
          development, direction, and photography.
          <br />
          <br />
          With over 12 years of experience, I help brands create elegant,
          performant, and meaningful digital experiences that seamlessly blend
          aesthetics and technology.
          <br />
          <br />
          From concept to launch, I provide end-to-end support — from UI/UX
          design and development to visual storytelling and project direction.
          <br />
          <br />
          While Japanese is my native language, I have conversational
          proficiency in English and can comfortably communicate through both
          spoken and written correspondence. Im open to collaborating with
          clients worldwide.
          <br />
          <br />
          Currently based in Fukuoka(Japan) and Casablanca(Morocco).
        </p>
      </div>
    </section>
  );
}
