import React from 'react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import LoveLetter from '@/components/LoveLetter';
import heroImage from '@/assets/romantic-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary/30 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-dancing text-6xl md:text-8xl text-romantic mb-6 animate-heartbeat">
            My Dearest Love
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            A collection of words from my heart to yours, written with all the love in the world
          </p>
          <Button 
            variant="romantic" 
            size="lg" 
            className="font-playfair text-lg px-8 py-4"
            onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read My Letters 💕
          </Button>
        </div>
      </section>

      {/* Love Letters Section */}
      <section id="letters" className="py-20 px-4 md:px-8 max-w-4xl mx-auto space-y-16">
        
        <LoveLetter title="To the Light of My Life">
          <p className="mb-6">
            Every morning when I wake up, the first thought that crosses my mind is you. 
            Your smile, your laugh, the way you scrunch your nose when you're concentrating - 
            these little details have become the most precious parts of my world.
          </p>
          <p className="mb-6">
            I never believed in fairy tales until I met you. You've shown me that magic 
            exists in the simplest moments - in shared glances across a crowded room, 
            in the way you hold my hand, in the comfort of your presence beside me.
          </p>
          <p className="text-romantic font-semibold">
            You are my today and all of my tomorrows. ✨
          </p>
        </LoveLetter>

        <LoveLetter title="Reasons I Love You">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-dancing text-2xl text-gold mb-4">Your Beautiful Heart</h3>
              <p className="mb-4">
                The way you care for others, your endless compassion, and how you make 
                everyone around you feel special and loved.
              </p>
            </div>
            <div>
              <h3 className="font-dancing text-2xl text-gold mb-4">Your Brilliant Mind</h3>
              <p className="mb-4">
                Your curiosity about the world, the way you challenge me to think differently, 
                and how you turn ordinary conversations into extraordinary moments.
              </p>
            </div>
            <div>
              <h3 className="font-dancing text-2xl text-gold mb-4">Your Infectious Joy</h3>
              <p className="mb-4">
                Your laughter fills every room, your optimism brightens the darkest days, 
                and your spirit lifts everyone around you.
              </p>
            </div>
            <div>
              <h3 className="font-dancing text-2xl text-gold mb-4">Your Loving Soul</h3>
              <p className="mb-4">
                The way you love with your whole heart, how you make me feel like 
                the luckiest person alive, and how you're my home wherever we are.
              </p>
            </div>
          </div>
        </LoveLetter>

        <LoveLetter title="Our Forever Promise">
          <p className="mb-6 text-center italic">
            "In all the world, there is no heart for me like yours. 
            In all the world, there is no love for you like mine."
          </p>
          <p className="mb-6">
            I promise to love you through every season of life, to be your biggest 
            supporter and your softest place to land. I promise to dance with you 
            in the kitchen, to bring you coffee in bed, and to never stop trying 
            to make you smile.
          </p>
          <p className="mb-6">
            Together, we'll write our own love story - one filled with adventure, 
            laughter, dreams fulfilled, and endless love. Thank you for choosing 
            to walk through life with me.
          </p>
          <div className="text-center">
            <Button variant="gold" size="lg" className="font-dancing text-xl px-8 py-4">
              Forever Yours 💫
            </Button>
          </div>
        </LoveLetter>

      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-romantic/10 to-gold/10 py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-dancing text-2xl text-romantic mb-4">
            "Love is not just looking at each other, it's looking in the same direction."
          </p>
          <p className="font-playfair text-foreground/70">
            Made with endless love 💖 | Always and forever yours
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;