import type React from 'react';
import { cvData } from '../data/cvData';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured <span className="text-violet-400">Work</span>
        <div className="w-24 h-1 bg-violet-400 mx-auto mt-2 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cvData.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};