'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Work } from '@/lib/fetchWorks';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import WorksItem from './WorksItem';

export default function WorksGallery({ works }: { works: Work[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { ref: titleRef, isInView: isTitleInView } =
    useInView<HTMLHeadingElement>();

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setModalOpen(false);
      setCurrentIndex(null);
      setIsTransitioning(false);
    }, 300);
  };

  const switchImage = (direction: 'prev' | 'next') => {
    if (currentIndex === null) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const nextIndex =
        direction === 'prev'
          ? (currentIndex - 1 + works.length) % works.length
          : (currentIndex + 1) % works.length;
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      <h2
        ref={titleRef}
        className={`flex justify-center text-[clamp(50px,10vw,70px)] font-bold mb-6 transition-all duration-700 ease-out transform ${
          isTitleInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        Works
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {works.map((work, index) => (
          <WorksItem
            key={work.id}
            work={work}
            index={index}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {modalOpen && currentIndex !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 animate-fade-in ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>

          <div
            className="relative z-10 bg-white rounded-lg max-w-3xl lg:max-w-[80vw] w-full max-h-[90vh] overflow-y-auto p-6 lg:p-14 shadow-lg transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-2 right-4 text-gray-700 hover:text-black cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => switchImage('prev')}
              aria-label="Previous"
              className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 w-10 h-10 rounded-full shadow hover:bg-gray-200 z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => switchImage('next')}
              aria-label="Next"
              className="fixed right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 w-10 h-10 rounded-full shadow hover:bg-gray-200 z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* モーダル内容 */}
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
                <Image
                  src={works[currentIndex].image?.url || '/placeholder.jpg'}
                  alt={works[currentIndex].title || 'Work Image'}
                  width={1200}
                  height={800}
                  className={`w-full h-auto rounded-md mb-4 transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>

              <div className="text-gray-800 space-y-3">
                {works[currentIndex].title && (
                  <h3 className="text-2xl font-semibold">
                    {works[currentIndex].title}
                  </h3>
                )}

                {works[currentIndex].description && (
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {works[currentIndex].description}
                  </p>
                )}

                {works[currentIndex].technologies && (
                  <div>
                    <h4 className="font-semibold text-xl">Technologies</h4>
                    <p className="whitespace-pre-line">
                      {works[currentIndex].technologies}
                    </p>
                  </div>
                )}

                {works[currentIndex].role && (
                  <div>
                    <h4 className="font-semibold text-xl">Role</h4>
                    <p>{works[currentIndex].role}</p>
                  </div>
                )}

                {works[currentIndex].duration && (
                  <div>
                    <h4 className="font-semibold text-xl">Duration</h4>
                    <p>{works[currentIndex].duration}</p>
                  </div>
                )}

                {works[currentIndex].challenges && (
                  <div>
                    <h4 className="font-semibold text-xl">Challenges</h4>
                    <p className="whitespace-pre-line">
                      {works[currentIndex].challenges}
                    </p>
                  </div>
                )}

                {(works[currentIndex].url || works[currentIndex].github) && (
                  <div className="space-x-4 mt-4">
                    {works[currentIndex].url && (
                      <a
                        href={works[currentIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Site
                      </a>
                    )}
                    {works[currentIndex].github && (
                      <a
                        href={works[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
