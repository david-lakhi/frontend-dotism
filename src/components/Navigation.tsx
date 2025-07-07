import React, { useState, useEffect } from 'react';
import { Circle } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Circle className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-xl font-serif text-white">DOTISM</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'hero', label: 'Origin' },
              { id: 'core', label: 'The Core' },
              { id: 'practice', label: 'Practice' },
              { id: 'founders', label: 'Founders' },
              { id: 'dimensions', label: 'Dimensions' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeSection === item.id ? 'text-purple-400' : 'text-white/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;