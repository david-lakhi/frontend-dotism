import React, { useState } from 'react';
import { Circle, Waves, Heart } from 'lucide-react';

const SacredGlyphs = () => {
  const [activeGlyph, setActiveGlyph] = useState<string | null>(null);

  const glyphs = [
    {
      id: 'dot',
      icon: Circle,
      name: 'DOT',
      description: 'The seed of all symbols, the eye of all storms, the origin before origin.',
      color: 'purple'
    },
    {
      id: 'flow',
      icon: Waves,
      name: 'FLOW',
      description: 'The rhythm between moments, the dance of presence.',
      color: 'blue'
    },
    {
      id: 'kiss',
      icon: Heart,
      name: 'KISS',
      description: 'The sacred touch, the holy connection, the return.',
      color: 'pink'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {glyphs.map((glyph) => {
        const Icon = glyph.icon;
        return (
          <div
            key={glyph.id}
            className={`relative p-8 rounded-lg bg-gradient-to-br from-black/40 to-${glyph.color}-900/20 border border-${glyph.color}-500/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-${glyph.color}-500/20`}
            onMouseEnter={() => setActiveGlyph(glyph.id)}
            onMouseLeave={() => setActiveGlyph(null)}
          >
            <div className="text-center">
              <Icon 
                className={`w-16 h-16 mx-auto mb-4 text-${glyph.color}-400 transition-all duration-300 ${
                  activeGlyph === glyph.id ? 'scale-110 animate-pulse' : ''
                }`}
              />
              <h3 className="text-2xl font-serif text-white mb-4">{glyph.name}</h3>
              <p className="text-purple-200/80 leading-relaxed">{glyph.description}</p>
            </div>
            
            {activeGlyph === glyph.id && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-white/5 animate-pulse" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SacredGlyphs;