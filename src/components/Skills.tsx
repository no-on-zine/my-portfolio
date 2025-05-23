import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

const skills = [
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
  {
    title: 'Design',
    description:
      'Figma, Adobe Illustrator, Photoshop, XD, Lightroom Classic, Premiere Pro, After Effects',
  },
];

export default async function SkillsPage() {
  return (
    <section className="works container mx-auto py-8">
      <FadeIn>
        <h2 className="flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6">
          Skills
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 items-center text-center"
          >
            <h3 className="text-lg font-bold">{skill.title}:</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
