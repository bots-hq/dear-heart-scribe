import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "https://www.dropbox.com/scl/fi/hafmt2cc44rf9iz7s884k/Ed-Sheeran-Perfect.mp3?rlkey=za1ykruc6hmsj6v3f8ed1x4ny&st=uhs3t5o9&dl=1";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set volume to 30%
      
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      audio.addEventListener('ended', handleEnded);
      
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-romantic via-primary to-purple rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        {/* Music player button */}
        <Button
          onClick={togglePlay}
          size="lg"
          className="relative bg-gradient-to-r from-romantic via-primary to-purple hover:from-romantic/90 hover:via-primary/90 hover:to-purple/90 text-white shadow-elegant hover:shadow-serene transition-all hover:scale-110 rounded-full w-16 h-16 md:w-20 md:h-20 p-0 flex items-center justify-center"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <div className="relative">
            {isPlaying ? (
              <Pause className="w-6 h-6 md:w-8 md:h-8 fill-white" />
            ) : (
              <Play className="w-6 h-6 md:w-8 md:h-8 fill-white ml-1" />
            )}
          </div>
          
          {/* Pulsing animation when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
          )}
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gradient-to-r from-primary via-romantic to-purple text-white px-4 py-2 rounded-lg shadow-elegant whitespace-nowrap text-sm">
            <Music className="w-4 h-4 inline mr-2" />
            {isPlaying ? "Playing for you ♪" : "Play our song"}
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;
