import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            {title}
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;