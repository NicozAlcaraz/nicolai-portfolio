import type React from 'react';
import { cvData, type Page } from '../data/cvData';

interface HomePageProps {
  setPage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hey, I'm <span className="text-violet-400">{cvData.name}</span>.
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-zinc-300 mb-8">
        {cvData.title}
      </h2>
      <p className="max-w-2xl text-lg text-zinc-400 mb-10">
        {cvData.profile}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setPage('projects')}
          className="bg-violet-400 text-zinc-950 font-bold px-8 py-3 rounded-lg text-lg hover:bg-violet-300 transition-all duration-200 transform hover:scale-105"
        >
          View My Work
        </button>
        <button
          onClick={() => setPage('about')}
          className="bg-zinc-800 text-zinc-100 font-bold px-8 py-3 rounded-lg text-lg hover:bg-zinc-700 transition-all duration-200"
        >
          About Me
        </button>
      </div>
    </div>
  );
};