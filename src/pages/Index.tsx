import React from 'react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import LoveLetter from '@/components/LoveLetter';
import heroImage from '@/assets/romantic-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/8 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Subtle Professional Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-r from-primary/8 to-romantic/8 rounded-full blur-3xl"></div>
        <div className="absolute top-64 right-20 w-48 h-48 bg-gradient-to-r from-cyan/8 to-accent/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-r from-gold/6 to-sunset/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-48 right-16 w-56 h-56 bg-gradient-to-r from-purple/8 to-primary/8 rounded-full blur-2xl"></div>
      </div>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-primary/5 to-romantic/15" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary via-romantic to-accent bg-clip-text text-transparent mb-8 leading-tight">
            My Dearest Love
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-playfair text-lg md:text-xl lg:text-2xl text-foreground/75 leading-relaxed">
              A heartfelt collection of words carefully crafted from my soul to yours, 
              painted with the most beautiful colors of our love story
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="romantic" 
              size="lg" 
              className="font-playfair text-lg px-10 py-4 shadow-elegant transition-all hover:shadow-serene hover:-translate-y-1"
              onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read My Letters
            </Button>
            <Button 
              variant="ocean" 
              size="lg" 
              className="font-playfair text-lg px-10 py-4 shadow-elegant transition-all hover:shadow-serene hover:-translate-y-1"
              onClick={() => document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Promise
            </Button>
          </div>
        </div>
      </section>

      {/* Love Letters Section */}
      <section id="letters" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl bg-gradient-to-r from-primary via-romantic to-accent bg-clip-text text-transparent mb-4">
            Letters From My Heart
          </h2>
          <p className="font-playfair text-muted-foreground max-w-2xl mx-auto text-lg">
            Each word written with love, every sentence crafted with care
          </p>
        </div>
        
        <div className="space-y-20">
          <LoveLetter 
            title="To the Light of My Life" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border border-primary/10"
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Every morning when I wake up, the first thought that crosses my mind is you. 
                Your smile, your laugh, the way you scrunch your nose when you're concentrating - 
                these little details have become the most precious parts of my world.
              </p>
              <p>
                I never believed in fairy tales until I met you. You've shown me that magic 
                exists in the simplest moments - in shared glances across a crowded room, 
                in the way you hold my hand, in the comfort of your presence beside me.
              </p>
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-romantic/5 to-primary/5 rounded-lg border border-romantic/20">
                <p className="text-primary font-semibold text-xl font-dancing">
                  You are my today and all of my tomorrows
                </p>
              </div>
            </div>
          </LoveLetter>

          <LoveLetter 
            title="The Reasons My Heart Beats for You" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border border-accent/10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-romantic/8 to-primary/8 p-8 rounded-xl border border-romantic/15 hover:shadow-serene transition-all duration-300">
                <h3 className="font-dancing text-2xl text-romantic mb-4 flex items-center gap-2">
                  Your Beautiful Heart <span className="text-lg">💖</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  The way you care for others, your endless compassion, and how you make 
                  everyone around you feel special and truly loved.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan/8 to-accent/8 p-8 rounded-xl border border-cyan/15 hover:shadow-serene transition-all duration-300">
                <h3 className="font-dancing text-2xl text-cyan mb-4 flex items-center gap-2">
                  Your Brilliant Mind <span className="text-lg">🌟</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Your curiosity about the world, the way you challenge me to think differently, 
                  and how you turn ordinary conversations into extraordinary moments.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gold/8 to-sunset/8 p-8 rounded-xl border border-gold/15 hover:shadow-serene transition-all duration-300">
                <h3 className="font-dancing text-2xl text-sunset mb-4 flex items-center gap-2">
                  Your Infectious Joy <span className="text-lg">🌈</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Your laughter fills every room, your optimism brightens the darkest days, 
                  and your spirit lifts everyone around you.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple/8 to-primary/8 p-8 rounded-xl border border-purple/15 hover:shadow-serene transition-all duration-300">
                <h3 className="font-dancing text-2xl text-purple mb-4 flex items-center gap-2">
                  Your Loving Soul <span className="text-lg">💜</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  The way you love with your whole heart, how you make me feel like 
                  the luckiest person alive, and how you're my home wherever we are.
                </p>
              </div>
            </div>
          </LoveLetter>

          <LoveLetter 
            id="promises"
            title="Our Forever Promise" 
            className="shadow-professional border border-gold/15 bg-gradient-to-br from-gold/3 via-romantic/3 to-primary/5"
          >
            <div className="text-center space-y-8">
              <blockquote className="text-xl md:text-2xl font-dancing text-primary italic border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
                "In all the world, there is no heart for me like yours. 
                In all the world, there is no love for you like mine."
              </blockquote>
              
              <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
                <p>
                  I promise to love you through every season of life, to be your biggest 
                  supporter and your softest place to land. I promise to dance with you 
                  in the kitchen, to bring you coffee in bed, and to never stop trying 
                  to make you smile.
                </p>
                <p>
                  Together, we'll write our own love story - one filled with adventure, 
                  laughter, dreams fulfilled, and endless love. Thank you for choosing 
                  to walk through life with me.
                </p>
              </div>
              
              <div className="pt-8">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="font-dancing text-xl px-12 py-4 shadow-elegant hover:shadow-serene transition-all hover:-translate-y-1"
                >
                  Forever & Always
                </Button>
              </div>
            </div>
          </LoveLetter>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/8 via-accent/8 to-romantic/8 py-16 text-center relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-card/60"></div>
        <div className="relative max-w-3xl mx-auto px-6">
          <blockquote className="font-dancing text-2xl md:text-3xl bg-gradient-to-r from-primary via-romantic to-accent bg-clip-text text-transparent mb-6 leading-relaxed">
            "Love is not just looking at each other, it's looking in the same direction."
          </blockquote>
          <p className="font-playfair text-muted-foreground text-lg mb-8">
            Created with endless love, thoughtful design, and heartfelt intention
          </p>
          <div className="flex justify-center items-center gap-4 text-2xl">
            <span className="text-romantic">💖</span>
            <span className="text-primary">✨</span>
            <span className="text-accent">🌸</span>
            <span className="text-gold">💫</span>
            <span className="text-cyan">💕</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;