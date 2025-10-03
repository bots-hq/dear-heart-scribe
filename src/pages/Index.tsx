import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import LoveLetter from '@/components/LoveLetter';
import MusicPlayer from '@/components/MusicPlayer';
import EntranceScreen from '@/components/EntranceScreen';
import RomanticThingsILike from '@/components/RomanticThingsILike';
import heroImage from '@/assets/romantic-hero.jpg';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const musicPlayerRef = useRef<{ play: () => void }>(null);

  const handleEnter = () => {
    setHasEntered(true);
    // Small delay to ensure MusicPlayer is mounted
    setTimeout(() => {
      musicPlayerRef.current?.play();
    }, 100);
  };

  if (!hasEntered) {
    return <EntranceScreen onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/8 relative overflow-hidden">
      <FloatingHearts />
      <MusicPlayer ref={musicPlayerRef} />
      
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
            My Dearest Sehba
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-playfair text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              I don't even know where to start, because whenever it comes to you, words always feel too small compared to what I actually feel in my heart. But still, I want to try, because you deserve every bit of love that I can put into words.
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
              onClick={() => window.open('https://drive.google.com/file/d/1dSGS9OOOJqUSXTGVXgXhleV6cROobuEG/view?usp=sharing', '_blank')}
            >
              Download Short Letter 📄
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
          {/* Postcard 1: Our Beginning */}
          <LoveLetter 
            title="✨ How It All Started" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-purple/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                It feels almost unbelievable when I look back at how our story began. We were in the same school, yet we were strangers. We had no idea that life was slowly writing something for us. From those little chats, the breaks in between, the times when we drifted and then found our way back… all of it makes sense now.
              </p>
              <p className="text-foreground/90">
                Every pause, every gap, every small conversation was taking us to this moment, to where we are today.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 2: First Call */}
          <LoveLetter 
            title="📞 'Can we call?' on Telegram" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-romantic/20 bg-gradient-to-br from-romantic/5 via-purple/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <div className="bg-gradient-to-r from-primary/10 to-romantic/10 p-6 rounded-xl border border-primary/20 mb-6">
                <p className="font-dancing text-2xl text-primary text-center italic">
                  "Can we call?"
                </p>
              </div>
              <p className="text-foreground/90">
                I still remember the first time you asked me, "can we call?" on Telegram. It was the first call we made, and tbh, I was a bit nervous that time. But when I heard your voice, everything felt right.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 3: Uzbekistan Airport */}
          <LoveLetter 
            title="✈️ Uzbekistan - The Airport Night" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-purple/20 bg-gradient-to-br from-purple/5 via-cyan/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                And then there were those late-night calls. The ones that made me smile even after a long tiring day. I will never forget Uzbekistan.
              </p>
              <div className="bg-gradient-to-br from-purple/10 to-primary/10 p-8 rounded-2xl border border-purple/20 my-6">
                <h3 className="font-dancing text-2xl text-purple mb-4 text-center">The Night You Stayed Awake 💫</h3>
                <p className="text-foreground/90 text-center">
                  I still remember being at the airport for my early flight, and you stayed awake with me till I boarded. That touched me so deeply, more than I can ever explain. That night, I felt butterflies inside me, but I didn't tell you. I just held onto that feeling quietly, knowing you were special.
                </p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 4: Growing Friendship */}
          <LoveLetter 
            title="💬 'Call?' Messages" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-cyan/20 bg-gradient-to-br from-cyan/5 via-accent/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Slowly, our friendship grew into something more. Those simple "call?" messages became part of my days. Sometimes we talked for hours, sometimes till morning, and every single time I felt closer to you.
              </p>
              <div className="text-center p-6 bg-gradient-to-r from-cyan/10 to-accent/10 rounded-xl border border-cyan/20">
                <p className="font-dancing text-2xl text-primary italic">
                  Every call brought us closer, turning friendship into something beautiful
                </p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 5: July 10 - Confession */}
          <LoveLetter 
            title="💝 July 10 - The Night We Confessed"
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-romantic/30 bg-gradient-to-br from-romantic/8 via-primary/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-romantic via-purple to-primary p-6 rounded-2xl shadow-elegant">
                  <p className="font-dancing text-4xl text-white">July 10</p>
                  <p className="text-white/90 text-sm mt-2">The night that changed everything</p>
                </div>
              </div>
              <p className="text-foreground/90">
                Then came the night of July 10. The night that changed everything. That was the night we confessed what we felt for each other. You said we should just go with the flow until we were ready for those three magical words.
              </p>
              <p className="text-foreground/90">
                And when we finally said "I love you," it was like the world stopped for a second. I knew from that moment that my life had found something it could never lose.
              </p>
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-romantic/10 to-primary/10 rounded-xl border-2 border-romantic/30">
                <p className="font-dancing text-3xl text-primary">I love you ❤️</p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 6: Overcoming Challenges */}
          <LoveLetter 
            title="💪 Stronger Together" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-primary/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Since then, every day with you has felt sweeter. Of course, not everything goes perfectly all the time. Sometimes things get tough. But what I love most about us is that we never let problems win.
              </p>
              <div className="text-center p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
                <p className="font-dancing text-2xl text-primary italic">
                  We always come back to each other, we always fix things, and we never let distance or differences break what we have.
                </p>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 7: First Date */}
          <LoveLetter 
            title="🤝 Our First Date - When You Held My Hand" 
            className="shadow-elegant hover:shadow-professional transition-all duration-500 border-2 border-gold/20 bg-gradient-to-br from-gold/5 via-sunset/5 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                One of my favorite memories is our first date. I was nervous, trying to act normal, but inside my heart was racing. Then you held my hand. That one moment gave me butterflies like I had never felt before.
              </p>
              <div className="text-center my-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-romantic/15 to-gold/15 px-8 py-4 rounded-full border-2 border-gold/30">
                  <span className="text-3xl">🦋</span>
                  <span className="font-dancing text-2xl text-foreground">Butterflies & Electricity</span>
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              <p className="text-foreground/90 text-center font-semibold">
                It felt like electricity running through me, waves I cannot put into words. That memory is one of the best of my life, and I know I will never forget it.
              </p>
            </div>
          </LoveLetter>

          {/* Postcard 8: You Are My Peace */}
          <LoveLetter 
            title="🕊️ My Safe Place" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-cyan/30 bg-gradient-to-br from-cyan/8 via-accent/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Sehba, you are not just the person I love. You are the person who makes me feel safe. Whenever I feel anxious, upset, or lost, just talking to you takes it all away.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-cyan/10 to-accent/10 p-6 rounded-xl border border-cyan/20 text-center">
                  <p className="text-4xl mb-3">✨</p>
                  <p className="font-dancing text-xl text-primary">Your Magic</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-xl border border-accent/20 text-center">
                  <p className="text-4xl mb-3">🏠</p>
                  <p className="font-dancing text-xl text-primary">My Comfort</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-purple/10 p-6 rounded-xl border border-primary/20 text-center">
                  <p className="text-4xl mb-3">💫</p>
                  <p className="font-dancing text-xl text-primary">My Happiness</p>
                </div>
              </div>
              <p className="text-foreground/90 text-center font-semibold text-xl">
                You don't even have to try — you just have this magic in you that makes everything better. You are my comfort, my happiness, my peace.
              </p>
            </div>
          </LoveLetter>

          {/* Special Poem: For My Zuvv */}
          <LoveLetter 
            title="🌸 For My Zuvv 🌸" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-romantic/30 bg-gradient-to-br from-romantic/10 via-primary/10 to-purple/10"
          >
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-primary/10 via-romantic/10 to-purple/10 p-10 rounded-2xl border-2 border-romantic/30">
                <div className="font-playfair text-xl md:text-2xl leading-relaxed text-foreground/90 space-y-4">
                  <p>Zuvv, my heart beats loud and true,</p>
                  <p>Every dream I see comes back to you.</p>
                  <p>Your smile's my sunrise, your voice my song,</p>
                  <p>With you by my side, I feel I belong.</p>
                  <div className="my-6 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-romantic via-primary to-purple rounded-full"></div>
                  </div>
                  <p>Through distance and time, my love won't fade,</p>
                  <p>In my heart, forever, your home is made.</p>
                  <p>One life, one love, one endless view,</p>
                  <p>My Sehba, my Zuvv, it's always you. ❤️</p>
                </div>
              </div>
            </div>
          </LoveLetter>

          {/* Postcard 9: Future Dreams */}
          <LoveLetter 
            title="🌍 Our Future Together" 
            className="shadow-professional hover:shadow-serene transition-all duration-500 border-2 border-purple/30 bg-gradient-to-br from-purple/8 via-romantic/8 to-background"
          >
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-foreground/90">
                When I think of the future, I see only you by my side. I dream of marrying you, of building a life with you, of traveling the world together and creating memories that last forever. You know I love to travel, but the truth is, the place doesn't matter. What matters is being with you in those places.
              </p>
              <div className="bg-gradient-to-br from-primary/10 via-purple/10 to-romantic/10 p-8 rounded-2xl border-2 border-primary/30 my-6">
                <h3 className="font-dancing text-3xl text-primary mb-6 text-center">I imagine us... 🌟</h3>
                <div className="space-y-3 text-foreground/90">
                  <p>😄 Laughing together in new cities</p>
                  <p>🤝 Holding hands as we walk in new places</p>
                  <p>🌅 Watching sunsets together</p>
                  <p>💫 Sharing moments that will always stay with us</p>
                </div>
              </div>
            </div>
          </LoveLetter>


          {/* Final Postcard: Forever Promise */}
          <LoveLetter 
            id="promises"
            title="💍 My Promise to You" 
            className="shadow-professional border-4 border-primary/40 bg-gradient-to-br from-primary/10 via-romantic/10 to-purple/10"
          >
            <div className="text-center space-y-8">
              <div className="bg-gradient-to-r from-primary via-purple to-romantic p-8 rounded-2xl shadow-elegant">
                <p className="font-dancing text-4xl text-white mb-4">Forever & Always</p>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
                <p className="text-foreground/90">
                  I promise you this, Sehba: I will always love you, always care for you, and always stand by you. I know I'm not perfect. I know I sometimes fail at understanding things the way I should. But I am learning every day. I am trying every day. And I will never stop trying to be better for you.
                </p>
                <p className="text-foreground/90">
                  I promise I will understand you, I will keep growing, and I will never give up on us.
                </p>
                
                <div className="bg-gradient-to-br from-cyan/10 via-accent/10 to-primary/10 p-8 rounded-2xl border-2 border-cyan/30 my-8">
                  <h3 className="font-dancing text-3xl text-primary mb-6 text-center">Dr. Sehba 👩‍⚕️</h3>
                  <p className="text-foreground/90 text-center">
                    I also pray for your success. I know how hardworking and determined you are, and I believe with all my heart that you will become the amazing doctor you dream of being. I will always be by your side, supporting you, cheering for you, and reminding you of how much you're capable of.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-romantic/10 via-primary/10 to-purple/10 p-10 rounded-2xl border-2 border-primary/30 my-8">
                <p className="font-dancing text-3xl text-primary mb-6">You are...</p>
                <div className="grid md:grid-cols-2 gap-4 text-xl">
                  <p className="text-foreground/90">❤️ My Love</p>
                  <p className="text-foreground/90">🕊️ My Peace</p>
                  <p className="text-foreground/90">🏠 My Safe Place</p>
                  <p className="text-foreground/90">♾️ My Everything</p>
                </div>
              </div>

              <p className="text-2xl text-foreground/90 font-semibold">
                My future only makes sense with you in it. And I want you to know that I will love you not just today, not just tomorrow, but for all the days to come.
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
                    onClick={() => window.open('https://drive.google.com/file/d/1dSGS9OOOJqUSXTGVXgXhleV6cROobuEG/view?usp=sharing', '_blank')}
                  >
                    Download Short Letter 📄
                  </Button>
                </div>
              </div>
            </div>
          </LoveLetter>
        </div>

      </section>

      {/* Romantic Things Section */}
      <RomanticThingsILike />

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