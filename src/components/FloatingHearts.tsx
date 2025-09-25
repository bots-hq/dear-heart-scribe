import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 4 + Math.random() * 4,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, (newHeart.animationDuration + newHeart.animationDelay) * 1000);
    };

    // Create a heart every 2-4 seconds
    const interval = setInterval(createHeart, 2000 + Math.random() * 2000);
    
    // Create initial hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createHeart, i * 500);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart absolute"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            animationDuration: `${heart.animationDuration}s`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;