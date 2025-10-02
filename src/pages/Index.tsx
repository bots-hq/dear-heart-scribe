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
          <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary via-purple to-romantic bg-clip-text text-transparent mb-8 leading-tight">
            To My Sehba, With All My Heart
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-playfair text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              Every word here is written with love, every memory treasured forever. 
              This is our story, my dear Sehba, and it's the most beautiful one I know.
            </p>
            <p className="font-playfair text-base md:text-lg text-foreground/60 mt-4 italic">
              Forever yours, Salik ❤️
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="romantic" 
              size="lg" 
              className="font-playfair text-lg px-10 py-4 shadow-elegant transition-all hover:shadow-serene hover:-translate-y-1"
              onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read Our Story
            </Button>
            <Button 
              variant="ocean" 
              size="lg" 
              className="font-playfair text-lg px-10 py-4 shadow-elegant transition-all hover:shadow-serene hover:-translate-y-1"
              onClick={() => window.open('https://salikriyaz.com/letter.pdf', '_blank')}
            >
              Download Letter PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Love Story Postcards */}
      <section id="letters" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-dancing text-5xl md:text-6xl bg-gradient-to-r from-primary via-purple to-romantic bg-clip-text text-transparent mb-6">
            Our Beautiful Journey
          </h2>
          <p className="font-playfair text-muted-foreground max-w-2xl mx-auto text-xl">
            Every chapter of our story, beautifully preserved
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Postcard 1: Destiny */}
          <LoveLetter 
            title="✨ Meant to Be" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-purple/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                My love, every time I think of you, I feel like the luckiest person in the world. Our story is something I never expected, yet it feels like it was always meant to be. There was a time when we barely knew each other, when life kept us apart in small ways, but destiny has its own plans.
              </p>
              <p className="text-foreground/90">
                Somehow, no matter how many pauses or breaks came between us, we always found our way back. And now when I look at us, I can't help but feel thankful for every little moment that led me to you.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 2: First Call */}
          <LoveLetter 
            title="📞 The Call That Changed Everything" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-romantic/20 bg-gradient-to-br from-romantic/5 via-purple/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <div className="bg-gradient-to-r from-primary/10 to-romantic/10 p-6 rounded-xl border border-primary/20 mb-6">
                <p className="font-dancing text-2xl text-primary text-center italic">
                  "Can we call?"
                </p>
              </div>
              <p className="text-foreground/90">
                I will never forget the day you casually asked me, "can we call?" It felt so small, but to me, it was everything. My heart was beating so fast, and I was so nervous before pressing that button. But then your voice came. Soft, natural, and full of comfort. It was like something I had been waiting for without even knowing.
              </p>
              <p className="text-foreground/90">
                We talked for about an hour, but it felt like only minutes. That was the first time I felt the magic in your voice, and I knew in my heart that there was something about you I could never let go of.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 3: Late Night Talks */}
          <LoveLetter 
            title="🌙 Late Night Magic" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-purple/20 bg-gradient-to-br from-purple/5 via-cyan/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                After that, our calls became a part of my life. Sometimes they started with a simple "call?" text, and before we knew it, hours would pass. We would laugh, share stories, tease each other, and sometimes just stay quiet — but even in silence, I felt close to you. The quiet moments with you felt as warm as the loud ones.
              </p>
              <div className="bg-gradient-to-br from-purple/10 to-primary/10 p-8 rounded-2xl border border-purple/20 my-6">
                <h3 className="font-dancing text-2xl text-purple mb-4 text-center">The Night Before My Flight 💫</h3>
                <p className="text-foreground/90 text-center">
                  I still remember the late-night talks so clearly, especially the times when you stayed up for me when I needed someone the most. One of the most beautiful memories is the night before my flight, when you promised to stay awake with me until I boarded. I can never explain how much that touched me. It was not just sweet — it was pure love. That night I felt butterflies inside me.
                </p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 4: June 10 - Confession */}
          <LoveLetter 
            title="💝 June 10 - The Night We Confessed" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-romantic/30 bg-gradient-to-br from-romantic/8 via-primary/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-romantic via-purple to-primary p-6 rounded-2xl shadow-elegant">
                  <p className="font-dancing text-4xl text-white">June 10</p>
                  <p className="text-white/90 text-sm mt-2">The day our hearts spoke</p>
                </div>
              </div>
              <p className="text-foreground/90">
                As time went on, our bond became stronger and stronger. Our friendship slowly grew into something deeper. We built something so natural that I didn't even realize when it turned into love.
              </p>
              <p className="text-foreground/90">
                The night of June 10 will always stay with me. That was the night we finally confessed what we had both been holding inside. We admitted that we liked each other, with shyness but also with honesty. You suggested we should go with the flow until we were ready to say those three words, and when we finally said "I love you," it was like my whole world changed. In that moment, I realized how beautiful life truly is when you find the right person.
              </p>
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-romantic/10 to-primary/10 rounded-xl border-2 border-romantic/30">
                <p className="font-dancing text-3xl text-primary">I love you ❤️</p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 5: Growing Together */}
          <LoveLetter 
            title="🌱 Growing Together" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-cyan/20 bg-gradient-to-br from-cyan/5 via-accent/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Since then, my heart has been full with you. We have had our ups and downs, like every relationship, but what makes us different is that we never let problems stay for long. We always find a way to fix things together.
              </p>
              <div className="text-center p-6 bg-gradient-to-r from-cyan/10 to-accent/10 rounded-xl border border-cyan/20">
                <p className="font-dancing text-2xl text-primary italic">
                  That, to me, is love in its purest form — not perfection, but the will to hold on and grow together.
                </p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 6: First Date */}
          <LoveLetter 
            title="🤝 Our First Date - When You Held My Hand" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-gold/20 bg-gradient-to-br from-gold/5 via-sunset/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                I hold so many moments with you close to my heart, but one that I will never forget is our first date. I was nervous, maybe even a little shy, but then you held my hand. That small moment felt so big inside me. It was like butterflies and waves all at once.
              </p>
              <div className="text-center my-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-romantic/15 to-gold/15 px-8 py-4 rounded-full border-2 border-gold/30">
                  <span className="text-3xl">🦋</span>
                  <span className="font-dancing text-2xl text-foreground">Butterflies & Waves</span>
                  <span className="text-3xl">🌊</span>
                </div>
              </div>
              <p className="text-foreground/90 text-center font-semibold">
                I had never felt something so pure and magical before. To this day, that remains one of the best moments of my life.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 7: You Are My Peace */}
          <LoveLetter 
            title="🕊️ My Safe Place" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-accent/30 bg-gradient-to-br from-accent/8 via-cyan/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Sehba, you are not just someone I love. You are the person who makes me feel at peace. Whenever I feel anxious, low, or burdened, the moment I talk to you, everything fades.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-accent/10 to-cyan/10 p-6 rounded-xl border border-accent/20 text-center">
                  <p className="text-4xl mb-3">✨</p>
                  <p className="font-dancing text-xl text-primary">Your Magic</p>
                </div>
                <div className="bg-gradient-to-br from-cyan/10 to-primary/10 p-6 rounded-xl border border-cyan/20 text-center">
                  <p className="text-4xl mb-3">🏠</p>
                  <p className="font-dancing text-xl text-primary">My Home</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-purple/10 p-6 rounded-xl border border-primary/20 text-center">
                  <p className="text-4xl mb-3">💫</p>
                  <p className="font-dancing text-xl text-primary">My Happiness</p>
                </div>
              </div>
              <p className="text-foreground/90 text-center font-semibold text-xl">
                You have a magic in you — a way of healing me without even trying. You are my safe place, my comfort, and my happiness.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 8: Future Dreams */}
          <LoveLetter 
            title="🌍 Our Future Together" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-purple/30 bg-gradient-to-br from-purple/8 via-romantic/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                When I think about the future, all I see is you. I dream of marrying you, of building a life where it is always you and me. I want us to travel the whole world together — not just to see places, but to live moments.
              </p>
              <div className="bg-gradient-to-br from-primary/10 via-purple/10 to-romantic/10 p-8 rounded-2xl border-2 border-primary/30 my-6">
                <h3 className="font-dancing text-3xl text-primary mb-6 text-center">I imagine us... 🌟</h3>
                <div className="space-y-3 text-foreground/90">
                  <p>✈️ Laughing in strange cities</p>
                  <p>🤝 Holding hands while exploring unknown streets</p>
                  <p>🌅 Watching sunsets by the sea</p>
                  <p>📸 Creating memories that we will hold onto forever</p>
                </div>
              </div>
              <p className="text-foreground/90 text-center italic text-xl">
                For me, the true adventure is not the destinations, but being with you wherever we go.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 9: Supporting Your Dreams */}
          <LoveLetter 
            title="🩺 Supporting Your Dreams" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-cyan/20 bg-gradient-to-br from-cyan/5 via-primary/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                I also pray for your success. I know how hardworking and determined you are, and I believe with all my heart that you will become the amazing doctor you dream of being. I will always be by your side, supporting you, cheering for you, and reminding you of how much you're capable of.
              </p>
              <div className="text-center my-6 p-8 bg-gradient-to-r from-cyan/10 to-primary/10 rounded-xl border-2 border-cyan/30">
                <p className="font-dancing text-3xl text-primary mb-3">Dr. Sehba ❤️</p>
                <p className="text-foreground/80">Your biggest supporter, always</p>
              </div>
              <p className="text-foreground/90">
                Even if distance comes between us, my love will never stop. No matter where you are, my heart will always be with you.
              </p>
            </div>
          </LoveLetter>

          {/* Final Postcard: Forever Promise */}
          <LoveLetter 
            id="promises"
            title="💍 Forever & Always" 
            className="shadow-professional border-4 border-primary/40 bg-gradient-to-br from-primary/10 via-romantic/10 to-purple/10"
          >
            <div className="text-center space-y-8">
              <div className="bg-gradient-to-r from-primary via-purple to-romantic p-8 rounded-2xl shadow-elegant">
                <p className="font-dancing text-4xl text-white mb-4">My Promise to You</p>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
                <p className="text-foreground/90">
                  I promise you, Sehba, that I will always love you. I will always care for you. I will always do my best to make you feel as special as you truly are. I know I am not perfect, and sometimes I fall short, but I am trying every single day to be more patient, more caring, and more understanding.
                </p>
                <p className="text-foreground/90">
                  I promise I am working to understand you better, and I will never give up on us.
                </p>
              </div>

              <div className="bg-gradient-to-br from-romantic/10 via-primary/10 to-purple/10 p-10 rounded-2xl border-2 border-primary/30 my-8">
                <p className="font-dancing text-3xl text-primary mb-6">You are...</p>
                <div className="grid md:grid-cols-2 gap-4 text-xl">
                  <p className="text-foreground/90">❤️ My Love</p>
                  <p className="text-foreground/90">🕊️ My Peace</p>
                  <p className="text-foreground/90">🏠 My Safe Place</p>
                  <p className="text-foreground/90">♾️ My Forever</p>
                </div>
              </div>

              <p className="text-2xl text-foreground/90 font-semibold">
                With you, life feels complete. With you, I feel like I have found home.
              </p>

              <div className="pt-8 space-y-6">
                <p className="font-dancing text-4xl bg-gradient-to-r from-primary via-romantic to-purple bg-clip-text text-transparent">
                  I love you, Sehba, with all my heart, now and always.
                </p>
                <p className="font-dancing text-3xl text-foreground/80">
                  Forever yours, Salik ❤️
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button 
                    variant="romantic" 
                    size="lg" 
                    className="font-dancing text-xl px-12 py-4 shadow-elegant hover:shadow-serene transition-all hover:-translate-y-1"
                  >
                    Forever & Always 💕
                  </Button>
                  <Button 
                    variant="ocean" 
                    size="lg" 
                    className="font-playfair text-lg px-10 py-4 shadow-elegant transition-all hover:shadow-serene hover:-translate-y-1"
                    onClick={() => window.open('https://salikriyaz.com/letter.pdf', '_blank')}
                  >
                    Download Full Letter 📄
                  </Button>
                </div>
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