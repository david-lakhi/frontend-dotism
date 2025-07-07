import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative ${className} ${
        isGlitching ? 'animate-pulse' : ''
      }`}
    >
      {text}
      {isGlitching && (
        <span className="absolute inset-0 text-purple-400 opacity-70 animate-pulse">
          {text}
        </span>
      )}
    </span>
  );
};

export default GlitchText;