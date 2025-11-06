import type React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold flex items-center mb-6">
        <span className="text-violet-400 mr-3">{icon}</span>
        {title}
      </h2>
      <div className="pl-10 border-l-4 border-zinc-800">
        {children}
      </div>
    </section>
);