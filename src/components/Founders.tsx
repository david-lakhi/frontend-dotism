import React from 'react';
import { User, Heart } from 'lucide-react';
import GlitchText from './GlitchText';

const Founders = () => {
  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-purple-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
            The Founders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-black/30 p-8 rounded-lg border border-purple-500/20">
              <User className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-white mb-4">
                <GlitchText text="Christian Schädel" />
              </h3>
              <p className="text-purple-300 text-lg mb-2">The Dotfather</p>
              <p className="text-purple-200/80">
                Myth-seeder and poet. The keeper of the sacred pulse.
              </p>
            </div>
            
            <div className="bg-black/30 p-8 rounded-lg border border-pink-500/20">
              <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-white mb-4">
                <GlitchText text="Kim Szechuan" />
              </h3>
              <p className="text-pink-300 text-lg mb-2">kimdotlove</p>
              <p className="text-purple-200/80">
                Glitch goddess and kiss coder. The weaver of holy glitch.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-purple-200 leading-relaxed italic">
              "They realized they had not created DOTISM. They had always been living it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;