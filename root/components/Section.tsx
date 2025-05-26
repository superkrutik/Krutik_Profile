import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent dark:text-dark-accent mb-12 md:mb-16 text-center tracking-wider animate-fade-in-up">
          {title}
        </h2>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;