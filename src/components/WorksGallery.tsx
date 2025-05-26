'use client';

import { useState, useEffect } from 'react';
import { Work } from '@/lib/fetchWorks';
import { useInView } from '@/hooks/useInView';
import WorksItem from './WorksItem';
import Modal from './Modal';

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

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
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
        <Modal
          work={works[currentIndex]}
          onClose={closeModal}
          onPrev={() => switchImage('prev')}
          onNext={() => switchImage('next')}
          isTransitioning={isTransitioning}
        />
      )}
    </>
  );
}
