// components/AnimatedText.tsx
import React from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0.05,
}) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${i * delay}s`,
            animationFillMode: 'forwards',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
