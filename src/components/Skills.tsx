'use client';

import { useInView } from '@/hooks/useInView';

const skills = [
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
  {
    title: 'Development',
    description: 'HTML, SCSS, JavaScript, React, Next.js, Node.js',
  },
  {
    title: 'CMS & Platforms',
    description: 'WordPress, Shopify, MicroCMS, Vercel, Studio, Webflow',
  },
  {
    title: 'Tools',
    description: 'GitHub, Cursol, Notion, Slack, Trello, Discord, Asana',
  },
  {
    title: 'Photography',
    description: 'Sony a7ii, Lightroom Classic',
  },
];

export default function SkillsPage() {
  const { ref: titleRef, isInView: isTitleInView } = useInView();

  return (
    <section className="skills mx-auto py-15 px-10">
      <h2
        ref={titleRef}
        className={`flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6 transition-all duration-700 ease-out transform ${
          isTitleInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        Skills
      </h2>

      <div className="flex flex-col gap-10 text-center max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const { ref, isInView } = useInView();

          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col gap-y-2 transition-all duration-700 ease-out transform ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold">{skill.title}:</h3>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
