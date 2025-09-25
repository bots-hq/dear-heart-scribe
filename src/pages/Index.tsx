import React from 'react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import LoveLetter from '@/components/LoveLetter';
import heroImage from '@/assets/romantic-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple/10 to-cyan/20 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-romantic/20 to-purple/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-r from-cyan/20 to-accent/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-gold/20 to-sunset/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-purple/20 to-romantic/20 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-romantic/10 to-purple/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-dancing text-6xl md:text-8xl bg-gradient-to-r from-romantic via-purple to-cyan bg-clip-text text-transparent mb-6 animate-heartbeat drop-shadow-lg">
            My Dearest Love
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed drop-shadow-md">
            A collection of words from my heart to yours, painted with all the colors of love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="romantic" 
              size="lg" 
              className="font-playfair text-lg px-8 py-4"
              onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read My Letters 💕
            </Button>
            <Button 
              variant="magical" 
              size="lg" 
              className="font-playfair text-lg px-8 py-4"
              onClick={() => document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Magic ✨
            </Button>
          </div>
        </div>
      </section>

      {/* Love Letters Section */}
      <section id="letters" className="py-20 px-4 md:px-8 max-w-4xl mx-auto space-y-16">
        
        <LoveLetter 
          title="To the Light of My Life" 
          className="border-2 border-gradient-to-r from-romantic/30 to-purple/30 shadow-2xl"
        >
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
          <p className="text-romantic font-semibold text-center text-xl">
            You are my today and all of my tomorrows. ✨
          </p>
        </LoveLetter>

        <LoveLetter 
          title="Reasons I Love You" 
          className="bg-gradient-to-br from-card via-purple/5 to-cyan/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-romantic/10 to-purple/10 p-6 rounded-lg border border-romantic/20">
              <h3 className="font-dancing text-3xl text-romantic mb-4">Your Beautiful Heart 💖</h3>
              <p className="mb-4">
                The way you care for others, your endless compassion, and how you make 
                everyone around you feel special and loved.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan/10 to-accent/10 p-6 rounded-lg border border-cyan/20">
              <h3 className="font-dancing text-3xl text-cyan mb-4">Your Brilliant Mind 🌟</h3>
              <p className="mb-4">
                Your curiosity about the world, the way you challenge me to think differently, 
                and how you turn ordinary conversations into extraordinary moments.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold/10 to-sunset/10 p-6 rounded-lg border border-gold/20">
              <h3 className="font-dancing text-3xl text-sunset mb-4">Your Infectious Joy 🌈</h3>
              <p className="mb-4">
                Your laughter fills every room, your optimism brightens the darkest days, 
                and your spirit lifts everyone around you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple/10 to-romantic/10 p-6 rounded-lg border border-purple/20">
              <h3 className="font-dancing text-3xl text-purple mb-4">Your Loving Soul 💜</h3>
              <p className="mb-4">
                The way you love with your whole heart, how you make me feel like 
                the luckiest person alive, and how you're my home wherever we are.
              </p>
            </div>
          </div>
        </LoveLetter>

        <LoveLetter 
          id="promises"
          title="Our Forever Promise" 
          className="bg-gradient-to-br from-gold/5 via-romantic/5 to-purple/10 shadow-2xl border-2 border-gradient-to-r from-gold/30 to-romantic/30"
        >
          <p className="mb-6 text-center italic text-xl font-dancing text-purple">
            "In all the world, there is no heart for me like yours. 
            In all the world, there is no love for you like mine."
          </p>
          <p className="mb-6">
            I promise to love you through every season of life, to be your biggest 
            supporter and your softest place to land. I promise to dance with you 
            in the kitchen, to bring you coffee in bed, and to never stop trying 
            to make you smile.
          </p>
          <p className="mb-8">
            Together, we'll write our own love story - one filled with adventure, 
            laughter, dreams fulfilled, and endless love. Thank you for choosing 
            to walk through life with me.
          </p>
          <div className="text-center space-y-4">
            <Button variant="gold" size="lg" className="font-dancing text-xl px-8 py-4 mb-4">
              Forever Yours 💫
            </Button>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="ocean" size="sm" className="font-playfair">
                💙 Ocean Deep Love
              </Button>
              <Button variant="magical" size="sm" className="font-playfair">
                ✨ Pure Magic
              </Button>
              <Button variant="romantic" size="sm" className="font-playfair">
                💕 Endless Romance
              </Button>
            </div>
          </div>
        </LoveLetter>

      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-romantic/20 via-purple/20 to-cyan/20 py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-romantic/10"></div>
        <div className="relative max-w-2xl mx-auto px-4">
          <p className="font-dancing text-3xl bg-gradient-to-r from-romantic via-purple to-cyan bg-clip-text text-transparent mb-4">
            "Love is not just looking at each other, it's looking in the same direction."
          </p>
          <p className="font-playfair text-foreground/70 text-lg">
            Made with endless love, vibrant colors, and infinite creativity 💖✨🌈
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <span className="text-2xl animate-bounce">💖</span>
            <span className="text-2xl animate-pulse">✨</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌈</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>💫</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>💕</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;