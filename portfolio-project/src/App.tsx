import { useState } from 'react';

// Import Types
import { type Page } from './data/cvData';

// Import Components
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

// Import Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="min-h-screen">
      <Nav activePage={page} setPage={setPage} />
      <main className="max-w-5xl mx-auto p-4 md:p-8">

        {/* Page Content */}
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'projects' && <ProjectsPage />}
        {page === 'about' && <AboutPage />}

      </main>
      <Footer />
    </div>
  );
}