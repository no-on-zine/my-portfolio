'use client';

import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const elements = {
    title: useInView<HTMLHeadingElement>(),
    text: useInView<HTMLParagraphElement>(),
    form: useInView<HTMLAnchorElement>(),
  };

  const socialIcons = [
    {
      key: 'x',
      href: 'https://x.com/nakagawakeita',
      alt: 'X',
      svg: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.794 7.428L14.857 1.5H13.657L9.262 6.647L5.75 1.5H1.7L7.01 9.284L1.7 15.5H2.9L7.542 10.064L11.251 15.5H15.301L9.794 7.428ZM8.151 9.352L7.613 8.577L3.332 2.41H5.175L8.629 7.387L9.167 8.162L13.658 14.632H11.815L8.151 9.352Z"
            fill="currentColor"
          />
        </svg>
      ),
      ...useInView(),
    },
    {
      key: 'ig',
      href: 'https://www.instagram.com/nakagawakeita/',
      alt: 'Instagram',
      svg: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3 2.5H16.7C19.9 2.5 22.5 5.1 22.5 8.3V16.7C22.5 18.2383 21.8889 19.7135 20.8012 20.8012C19.7135 21.8889 18.2383 22.5 16.7 22.5H8.3C5.1 22.5 2.5 19.9 2.5 16.7V8.3C2.5 6.76174 3.11107 5.28649 4.19878 4.19878C5.28649 3.11107 6.76174 2.5 8.3 2.5ZM8.1 4.5C7.14522 4.5 6.22955 4.87928 5.55442 5.55442C4.87928 6.22955 4.5 7.14522 4.5 8.1V16.9C4.5 18.89 6.11 20.5 8.1 20.5H16.9C17.8548 20.5 18.7705 20.1207 19.4456 19.4456C20.1207 18.7705 20.5 17.8548 20.5 16.9V8.1C20.5 6.11 18.89 4.5 16.9 4.5H8.1ZM17.75 6C18.0815 6 18.3995 6.1317 18.6339 6.36612C18.8683 6.60054 19 6.91848 19 7.25C19 7.58152 18.8683 7.89946 18.6339 8.13388C18.3995 8.3683 18.0815 8.5 17.75 8.5C17.4185 8.5 17.1005 8.3683 16.8661 8.13388C16.6317 7.89946 16.5 7.58152 16.5 7.25C16.5 6.91848 16.6317 6.60054 16.8661 6.36612C17.1005 6.1317 17.4185 6 17.75 6ZM12.5 7.5C13.8261 7.5 15.0979 8.02678 16.0355 8.96447C16.9732 9.90215 17.5 11.1739 17.5 12.5C17.5 13.8261 16.9732 15.0979 16.0355 16.0355C15.0979 16.9732 13.8261 17.5 12.5 17.5C11.1739 17.5 9.90215 16.9732 8.96447 16.0355C8.02678 15.0979 7.5 13.8261 7.5 12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5ZM12.5 9.5C11.7044 9.5 10.9413 9.81607 10.3787 10.3787C9.81607 10.9413 9.5 11.7044 9.5 12.5C9.5 13.2956 9.81607 14.0587 10.3787 14.6213C10.9413 15.1839 11.7044 15.5 12.5 15.5C13.2956 15.5 14.0587 15.1839 14.6213 14.6213C15.1839 14.0587 15.5 13.2956 15.5 12.5C15.5 11.7044 15.1839 10.9413 14.6213 10.3787C14.0587 9.81607 13.2956 9.5 12.5 9.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      ...useInView(),
    },
    {
      key: 'fb',
      href: 'https://www.facebook.com/nakagawakeita',
      alt: 'Facebook',
      svg: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.635 6.5H15.5V3.5H13.635C12.5369 3.50132 11.4841 3.93814 10.7076 4.71463C9.93114 5.49111 9.49432 6.54388 9.493 7.642V9.5H7.5V12.5H9.5V22.438H12.5V12.5H14.521L15.113 9.5H12.5V7.091C12.5023 6.93481 12.5655 6.78569 12.676 6.67532C12.7866 6.56496 12.9358 6.50207 13.092 6.5H13.635Z"
            fill="currentColor"
          />
        </svg>
      ),
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
          Let&apos;s connect and make something meaningful.
        </p>

        <a
          ref={
            elements.form
              .ref as React.MutableRefObject<HTMLAnchorElement | null>
          }
          className={`cursor-pointer px-5 py-2 border rounded-xl w-44 h-12 shadow hover:shadow-lg hover:opacity-50 transition-all duration-700 ease-out transform flex justify-center items-center ${
            elements.form.isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          href="https://forms.gle/sm9y1dhYUroZcpeV6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ transitionDelay: '0.2s' }}
        >
          Let&apos;s Work Together
        </a>

        <div className="flex items-center gap-10">
          {socialIcons.map((icon, index) => (
            <a
              key={icon.key}
              ref={icon.ref as React.RefObject<HTMLAnchorElement | null>}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-700 ease-out transform ${
                icon.isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              aria-label={icon.alt}
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
