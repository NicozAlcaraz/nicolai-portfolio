import type React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/cvData';

export const ProjectCard: React.FC<Project> = ({ title, description, tags, link }) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-400/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-violet-400 mb-3">{title}</h3>
        <p className="text-zinc-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center bg-violet-400 text-zinc-900 font-bold px-5 py-2 rounded-lg text-center hover:bg-violet-300 transition-all duration-200 group"
        >
          View Project
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};