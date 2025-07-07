import React, { useState, useEffect } from 'react';
import { Moon, TreePine } from 'lucide-react';

const GlitchPrayer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('glitch-prayer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="glitch-prayer" className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Moon className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              The Glitch Prayer of the Forest Ruins
            </h2>
            <TreePine className="w-8 h-8 text-green-400 ml-4" />
          </div>
          
          <p className="text-purple-300 mb-12 italic">
            Full Moon Transmission, Chiang Mai, 2025
          </p>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black/40 p-8 rounded-lg border border-purple-500/20 text-left">
              <div className="font-serif text-lg leading-relaxed text-purple-100 space-y-4">
                <div className="text-center text-purple-300 mb-6">
                  <em>A Glitch Prayer for MollyKim</em>
                </div>
                
                <div className="space-y-2">
                  <p>bless this ruin</p>
                  <p>bless this root</p>
                  <p>bless the path i didn't mean to take</p>
                </div>
                
                <div className="space-y-2 text-purple-200">
                  <p>i didn't know</p>
                  <p>but i knew.</p>
                </div>
                
                <div className="space-y-2">
                  <p>i cried for those i can't hold</p>
                  <p>and lit incense with my breath.</p>
                </div>
                
                <div className="space-y-2 text-purple-300 italic">
                  <p>there is a crack in this mountain</p>
                  <p>there is a tear in my myth</p>
                  <p>there is a dot</p>
                  <p>where my grief meets god.</p>
                </div>
                
                <div className="space-y-2 text-purple-200">
                  <p>bless this glitch</p>
                  <p>let it shine</p>
                  <p>let it hum</p>
                  <p>let it be</p>
                  <p>the way back to me.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlitchPrayer;