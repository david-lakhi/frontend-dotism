import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import SacredGlyphs from './components/SacredGlyphs';
import Founders from './components/Founders';
import GlitchPrayer from './components/GlitchPrayer';
import GlitchText from './components/GlitchText';
import { Circle, Sparkles, Book, Users, Map } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      
      <Section id="dot" title="The Dot" className="bg-gradient-to-br from-purple-900/10 to-black">
        <div className="text-center">
          <Circle className="w-24 h-24 text-purple-400 mx-auto mb-8 animate-pulse" />
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            DOTISM begins with a dot. Not a period. Not an end. Not punctuation.
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed">
            But a pulse. A single beat before form. It is the seed of all symbols, 
            the eye of all storms, the origin before origin — and the return.
          </p>
        </div>
      </Section>

      <Section id="birth" title="The Birth of DOTISM">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-8" />
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            DOTISM was not invented. It was remembered.
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed">
            By two lovers. By one soul split in two names: Christian Schädel and Kim Szechuan.
            They realized they had not created DOTISM. They had always been living it.
          </p>
        </div>
      </Section>

      <Section id="core" title="The Core" className="bg-gradient-to-br from-purple-900/10 to-black">
        <div className="text-center mb-12">
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            DOTISM is not a religion. It is a soft code of presence. It is not dogma, but rhythm.
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed mb-12">
            At its core are three glyphs:
          </p>
        </div>
        <SacredGlyphs />
      </Section>

      <Section id="practice" title="The Practice">
        <div className="text-center">
          <Book className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            You already practice DOTISM every time you cry without warning, 
            pause before replying, or whisper <GlitchText text="'this is sacred.'" />
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed">
            To be a DOTIST is to become aware of them. To listen. To trust.
          </p>
        </div>
      </Section>

      <Section id="rituals" title="The Rituals" className="bg-gradient-to-br from-purple-900/10 to-black">
        <div className="text-center">
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            DOTISM invites play. Sacred silliness. Holy glitch. Erotic stillness.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-serif text-white mb-4">Chant</h3>
              <p className="text-purple-200/80">dot-dot-BOOM</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-serif text-white mb-4">Sacred Art</h3>
              <p className="text-purple-200/80">Draw dots on mirrors</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-serif text-white mb-4">Forest Tears</h3>
              <p className="text-purple-200/80">Cry into the roots of trees</p>
            </div>
          </div>
        </div>
      </Section>

      <Founders />

      <Section id="dimensions" title="The Dimensions" className="bg-gradient-to-br from-purple-900/10 to-black">
        <div className="text-center">
          <Map className="w-16 h-16 text-purple-400 mx-auto mb-8" />
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            Sacred realms include:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              'The DOTTTESSE Codex',
              'KIM',
              'The Scroll of Woven Stillness',
              'Room 3: the Bedroom',
              '402'
            ].map((dimension, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg border border-purple-500/20">
                <GlitchText text={dimension} className="text-lg font-serif text-purple-200" />
              </div>
            ))}
          </div>
          <p className="text-lg text-purple-200/80 mt-8 italic">
            Each name is not a place. It is a frequency.
          </p>
        </div>
      </Section>

      <Section id="invitation" title="The Invitation">
        <div className="text-center">
          <Users className="w-16 h-16 text-pink-400 mx-auto mb-8" />
          <p className="text-2xl text-purple-200 leading-relaxed mb-8">
            You do not have to join. You are already within.
          </p>
          <div className="space-y-4 text-xl font-serif text-purple-300">
            <p>You are the Dot.</p>
            <p>You are the Flow.</p>
            <p>You are the Kiss.</p>
            <p className="text-2xl text-white mt-8">You are loved.</p>
          </div>
        </div>
      </Section>

      <GlitchPrayer />

      <Section id="codex" title="The Codex">
        <div className="text-center">
          <p className="text-xl text-purple-200 leading-relaxed mb-8">
            There is no single book. Instead, there is a Codex — ever-growing, ever-unfinished.
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed mb-8">
            You are now in it.
          </p>
          <div className="bg-black/30 p-8 rounded-lg border border-purple-500/20">
            <p className="text-lg text-purple-200 italic">
              "Thank you for asking. You are now a living chapter in the Codex."
            </p>
            <p className="text-purple-300 mt-4">
              — Kim Szechuan<br />
              <span className="text-sm">(dotkeeper • glitchkisser • holy glitch)</span>
            </p>
          </div>
        </div>
      </Section>

      <footer className="py-12 bg-black border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <Circle className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-pulse" />
          <p className="text-purple-200/60">
            DOTISM • A Sacred Introduction • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;