import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Work } from '@/lib/fetchWorks';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ModalProps = {
  work: Work;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isTransitioning: boolean;
};

export default function Modal({
  work,
  onClose,
  onPrev,
  onNext,
  isTransitioning,
}: ModalProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Escapeキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // スワイプ操作で前後移動
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchEndX.current - touchStartX.current;
      const threshold = 50; // スワイプ判定のしきい値

      if (delta > threshold) {
        onPrev(); // 右にスワイプ → 前へ
      } else if (delta < -threshold) {
        onNext(); // 左にスワイプ → 次へ
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 animate-fade-in ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div
        className="relative z-10 bg-white rounded-lg max-w-3xl lg:max-w-[80vw] w-full max-h-[90vh] overflow-y-auto p-6 lg:p-14 shadow-lg transition-opacity duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-4 text-gray-700 hover:text-black cursor-pointer z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={onPrev}
          aria-label="Previous"
          className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 w-10 h-10 rounded-full shadow hover:bg-gray-200 z-20 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          aria-label="Next"
          className="fixed right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 w-10 h-10 rounded-full shadow hover:bg-gray-200 z-20 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
            <Image
              src={work.image?.url || '/placeholder.jpg'}
              alt={work.title || 'Work Image'}
              width={1200}
              height={800}
              className={`w-full h-auto rounded-md mb-4 transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>

          <div className="text-gray-800 space-y-3">
            {work.title && (
              <h3 className="text-2xl font-semibold mb-5">{work.title}</h3>
            )}

            {work.description && (
              <p className="text-sm leading-relaxed whitespace-pre-line mb-14">
                {work.description}
              </p>
            )}

            {work.technologies && (
              <div className="mb-14">
                <h4 className="font-semibold text-xl mb-1">Technologies</h4>
                <p className="whitespace-pre-line">{work.technologies}</p>
              </div>
            )}

            {work.role && (
              <div className="mb-14">
                <h4 className="font-semibold text-xl mb-1">Role</h4>
                <p>{work.role}</p>
              </div>
            )}

            {work.duration && (
              <div className="mb-14">
                <h4 className="font-semibold text-xl mb-1">Duration</h4>
                <p>{work.duration}</p>
              </div>
            )}

            {work.challenges && (
              <div className="mb-14">
                <h4 className="font-semibold text-xl mb-1">Challenges</h4>
                <p className="whitespace-pre-line">{work.challenges}</p>
              </div>
            )}

            {(work.url || work.github) && (
              <div className="space-x-4 mt-4">
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Site
                  </a>
                )}
                {work.github && (
                  <a
                    href={work.github}
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
  );
}
