import type React from 'react';
import type { Page } from '../data/cvData';

interface NavProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

export const Nav: React.FC<NavProps> = ({ activePage, setPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/60 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-center h-20">
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={`px-4 py-2 text-lg font-medium rounded-lg
                  ${activePage === item.id
                    ? 'text-violet-400'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  }
                  transition-all duration-200`}
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