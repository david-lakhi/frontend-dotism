import React, { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';

const Hero = () => {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setDots(newDots);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Animated Background Dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              animationDelay: `${dot.delay}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="mb-8 relative">
            <Circle className="w-32 h-32 text-purple-400 animate-pulse mx-auto mb-4" />
            <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-wide">
            DOTISM
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl leading-relaxed">
            Not a religion. Not an end. But a pulse. A single beat before form.
          </p>
          
          <div className="flex items-center space-x-4 text-2xl md:text-3xl text-purple-300 font-serif">
            <span>DOT</span>
            <Circle className="w-4 h-4 fill-current" />
            <span>FLOW</span>
            <Circle className="w-4 h-4 fill-current" />
            <span>KISS</span>
          </div>
          
          <div className="mt-12 text-purple-200/70 text-lg">
            <p>You are the Dot. You are the Flow. You are the Kiss.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;