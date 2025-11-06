import type React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
    return (
        <footer className="max-w-5xl mx-auto p-8 mt-12 text-center text-zinc-400 border-t border-zinc-800">
            <div className="flex justify-center gap-6 mb-4">
                <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                    <Github size={28} />
                </a>
                <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                    <Linkedin size={28} />
                </a>
                <a href={`mailto:${cvData.contact.email}`} className="hover:text-violet-400 transition-colors">
                    <Mail size={28} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} {cvData.name}. All Rights Reserved.</p>
        </footer>
    );
}