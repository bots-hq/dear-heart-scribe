import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EntranceScreenProps {
  onEnter: () => void;
}

const EntranceScreen = ({ onEnter }: EntranceScreenProps) => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-primary/5 to-romantic/10 flex items-center justify-center animate-fade-in">
      <div className="text-center space-y-8 p-8 max-w-md mx-auto">
        {/* Animated hearts */}
        <div className="relative">
          <Heart className="w-24 h-24 mx-auto text-romantic fill-romantic animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-romantic/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-romantic via-primary to-purple bg-clip-text text-transparent">
            A Love Letter
          </h1>
          <p className="text-lg text-muted-foreground">
            Just for you ❤️
          </p>
        </div>

        {/* Enter button */}
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-gradient-to-r from-romantic via-primary to-purple hover:from-romantic/90 hover:via-primary/90 hover:to-purple/90 text-white shadow-elegant hover:shadow-serene transition-all hover:scale-105 text-lg px-8 py-6 rounded-full group"
        >
          <span className="flex items-center gap-2">
            Open Your Heart
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </span>
        </Button>

        {/* Floating hearts decoration */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-romantic/30 animate-float">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 text-purple/30 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-full h-full fill-current" />
        </div>
      </div>
    </div>
  );
};

export default EntranceScreen;
