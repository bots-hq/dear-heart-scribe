import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

const things = [
  { text: "Your Heart", position: "top-[15%] left-[10%]", delay: 0.1, animation: "fade-zoom" },
  { text: "Your Lips", position: "top-[8%] right-[15%]", delay: 0.2, animation: "slide-left" },
  { text: "Your Charm", position: "top-[25%] left-[25%]", delay: 0.3, animation: "fade-zoom" },
  { text: "Your Hug", position: "top-[18%] right-[28%]", delay: 0.4, animation: "sparkle" },
  { text: "Your Voice", position: "top-[35%] left-[5%]", delay: 0.5, animation: "fade-zoom" },
  { text: "Your Beauty", position: "top-[32%] right-[8%]", delay: 0.6, animation: "slide-right" },
  { text: "Your Nails", position: "top-[42%] left-[18%]", delay: 0.7, animation: "sparkle" },
  { text: "Your Care For Me", position: "top-[12%] left-[45%]", delay: 0.8, animation: "fade-zoom" },
  { text: "Your Quarreling With Me", position: "top-[48%] right-[12%]", delay: 0.9, animation: "slide-left" },
  { text: "Your Dressing", position: "top-[55%] left-[8%]", delay: 1.0, animation: "fade-zoom" },
  { text: "Your Mischief", position: "top-[22%] right-[42%]", delay: 1.1, animation: "sparkle" },
  { text: "Your Love", position: "top-[62%] right-[18%]", delay: 1.2, animation: "slide-right" },
  { text: "Your Heartbeat", position: "top-[68%] left-[15%]", delay: 1.3, animation: "fade-zoom" },
  { text: "Your Eyebrows", position: "top-[38%] left-[42%]", delay: 1.4, animation: "sparkle" },
  { text: "Your Sleeping Style", position: "top-[75%] right-[25%]", delay: 1.5, animation: "slide-left" },
  { text: "Your Eyes", position: "top-[28%] right-[48%]", delay: 1.6, animation: "fade-zoom" },
  { text: "Your Hair", position: "top-[82%] left-[22%]", delay: 1.7, animation: "sparkle" },
  { text: "Your Smile", position: "top-[45%] right-[38%]", delay: 1.8, animation: "slide-right" },
  { text: "Your Nature", position: "top-[88%] right-[12%]", delay: 1.9, animation: "fade-zoom" },
  { text: "Your Smell", position: "top-[52%] left-[32%]", delay: 2.0, animation: "sparkle" },
  { text: "Your Time", position: "bottom-[18%] left-[8%]", delay: 2.1, animation: "slide-left" },
  { text: "Your Style", position: "top-[62%] left-[48%]", delay: 2.2, animation: "fade-zoom" },
  { text: "Your NonStop Talking", position: "bottom-[25%] right-[15%]", delay: 2.3, animation: "sparkle" },
  { text: "Your Teeth", position: "bottom-[12%] left-[25%]", delay: 2.4, animation: "slide-right" },
  { text: "Your Touch", position: "top-[72%] right-[42%]", delay: 2.5, animation: "fade-zoom" },
  { text: "Your Kiss", position: "bottom-[32%] left-[15%]", delay: 2.6, animation: "sparkle" },
  { text: "Your Breathing", position: "bottom-[8%] right-[28%]", delay: 2.7, animation: "slide-left" },
  { text: "Your Style Of Looking At Me", position: "top-[58%] right-[5%]", delay: 2.8, animation: "fade-zoom" },
  { text: "Your Soul", position: "bottom-[38%] left-[38%]", delay: 2.9, animation: "sparkle" },
  { text: "Your Chin", position: "top-[8%] left-[32%]", delay: 3.0, animation: "slide-right" },
  { text: "Your Name", position: "bottom-[45%] right-[22%]", delay: 3.1, animation: "fade-zoom" },
  { text: "Your Tears", position: "top-[48%] left-[52%]", delay: 3.2, animation: "sparkle" },
  { text: "Your Laugh", position: "bottom-[52%] left-[5%]", delay: 3.3, animation: "slide-left" },
  { text: "Your Jokes", position: "top-[15%] right-[52%]", delay: 3.4, animation: "fade-zoom" },
  { text: "Your Hand", position: "bottom-[58%] right-[8%]", delay: 3.5, animation: "sparkle" },
  { text: "Your Joy", position: "top-[25%] left-[58%]", delay: 3.6, animation: "slide-right" },
  { text: "Your Love For Me", position: "bottom-[65%] left-[28%]", delay: 3.7, animation: "fade-zoom" },
  { text: "Your Sulking With Me", position: "top-[35%] right-[58%]", delay: 3.8, animation: "sparkle" },
  { text: "Your Nose", position: "bottom-[72%] right-[32%]", delay: 3.9, animation: "slide-left" },
  { text: "Your Cheeks", position: "top-[42%] left-[65%]", delay: 4.0, animation: "fade-zoom" },
  { text: "Your Glow", position: "bottom-[78%] left-[42%]", delay: 4.1, animation: "sparkle" },
  { text: "Your Expressions", position: "top-[52%] right-[65%]", delay: 4.2, animation: "slide-right" },
];

const RomanticThingsILike = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    // Show final message after all animations
    setTimeout(() => {
      setShowFinal(true);
    }, 4500);
  };

  const getAnimationClass = (animation: string, delay: number) => {
    const baseDelay = `animation-delay: ${delay}s`;
    
    switch (animation) {
      case "fade-zoom":
        return `animate-fade-zoom`;
      case "slide-left":
        return `animate-slide-left`;
      case "slide-right":
        return `animate-slide-right`;
      case "sparkle":
        return `animate-sparkle`;
      default:
        return `animate-fade-in`;
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-romantic/10 py-24 overflow-hidden">
      {/* Soft glowing background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-romantic/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple/20 to-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating sparkles */}
      {isRevealed && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-primary/30 animate-float-sparkle"
              size={16}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Center button */}
      {!isRevealed && (
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <Button
            onClick={handleReveal}
            size="lg"
            className="font-playfair text-xl px-12 py-8 bg-gradient-to-r from-primary via-romantic to-purple text-white shadow-elegant hover:shadow-professional hover:scale-105 transition-all duration-300 animate-pulse"
          >
            <Heart className="mr-3 animate-heartbeat" size={24} />
            Know Things I Like About You ❤️
          </Button>
        </div>
      )}

      {/* Scattered text items */}
      {isRevealed && (
        <div className="relative z-10 w-full h-screen">
          {things.map((thing, index) => (
            <div
              key={index}
              className={`absolute ${thing.position} ${getAnimationClass(thing.animation, thing.delay)} opacity-0`}
              style={{
                animationDelay: `${thing.delay}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-romantic/20 to-purple/20 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/30 shadow-elegant">
                  <p className="font-playfair text-sm md:text-base text-foreground/90 whitespace-nowrap">
                    {thing.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Final message */}
      {showFinal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="animate-glow-pulse">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary via-romantic to-purple rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-primary via-romantic to-purple p-12 rounded-3xl shadow-professional">
                <p className="font-dancing text-5xl md:text-7xl text-white text-center">
                  And You ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RomanticThingsILike;