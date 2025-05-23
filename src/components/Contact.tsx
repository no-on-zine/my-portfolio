'use client';

import { useInView } from '@/hooks/useInView';
import Image from 'next/image';

export default function Contact() {
  const elements = {
    title: useInView(),
    text: useInView(),
    form: useInView(),
  };

  const socialIcons = [
    {
      key: 'x',
      href: 'https://x.com/nakagawakeita',
      src: '/images/home/contact/icon_x.svg',
      alt: 'X',
      ...useInView(),
    },
    {
      key: 'ig',
      href: 'https://www.instagram.com/nakagawakeita/',
      src: '/images/home/contact/icon_instagram.svg',
      alt: 'Instagram',
      ...useInView(),
    },
    {
      key: 'fb',
      href: 'https://www.facebook.com/nakagawakeita',
      src: '/images/home/contact/icon_facebook.svg',
      alt: 'Facebook',
      ...useInView(),
    },
  ];

  return (
    <section className="contact mx-auto py-15 px-10">
      <h2
        ref={elements.title.ref}
        className={`flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6 transition-all duration-700 ease-out transform ${
          elements.title.isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '0s' }}
      >
        Contact
      </h2>

      <div className="flex flex-col items-center gap-10">
        <p
          ref={elements.text.ref}
          className={`text-justify whitespace-pre-line transition-all duration-700 ease-out transform ${
            elements.text.isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          Open for freelance & collaborative projects worldwide.
          <br />
          <br />
          Let's connect and make something meaningful.
        </p>

        <a
          ref={
            elements.form
              .ref as React.MutableRefObject<HTMLAnchorElement | null>
          }
          className={`cursor-pointer px-5 py-2 bg-white border rounded-xl w-44 h-12 shadow hover:shadow-lg hover:opacity-50 transition-all duration-700 ease-out transform flex justify-center items-center ${
            elements.form.isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          href="https://forms.gle/sm9y1dhYUroZcpeV6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ transitionDelay: '0.2s' }}
        >
          Let's Work Together
        </a>

        <div className="flex items-center gap-10">
          {socialIcons.map((icon, index) => (
            <a
              key={icon.key}
              ref={icon.ref as React.RefObject<HTMLAnchorElement | null>}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={30}
                height={30}
                className={`transition-all duration-700 ease-out transform ${
                  icon.isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
