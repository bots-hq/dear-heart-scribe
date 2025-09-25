import React from 'react';
import { cn } from '@/lib/utils';

interface LoveLetterProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ children, className, title }) => {
  return (
    <div className={cn(
      "love-letter rounded-lg p-8 md:p-12 mx-4 md:mx-0 animate-fadeInUp",
      className
    )}>
      {title && (
        <h2 className="font-dancing text-3xl md:text-4xl text-romantic mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="font-playfair text-lg md:text-xl leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  );
};

export default LoveLetter;