import type React from 'react';
import {
    Briefcase,
    GraduationCap,
    Award,
    CheckCircle
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { Section } from '../components/Section';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">

      <Section title="Work Experience" icon={<Briefcase />}>
        {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-6 relative">
              <span className="absolute -left-12 top-1 h-3 w-3 bg-violet-400 rounded-full"></span>
              <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
              <p className="text-lg text-zinc-300">{exp.company}</p>
              <p className="text-sm text-zinc-400 mb-2">{exp.period}</p>
              <ul className="list-disc pl-5 text-zinc-300">
                {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
        ))}
      </Section>

      <Section title="Skills" icon={<CheckCircle />}>
        {cvData.skills.map((skillCat, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-zinc-100 mb-3">{skillCat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillCat.list.map((skill) => (
                    <span key={skill} className="bg-zinc-800 text-violet-300 px-4 py-2 rounded-full text-md font-medium border border-violet-400/30">
                        {skill}
                    </span>
                ))}
              </div>
            </div>
        ))}
      </Section>

      <Section title="Education" icon={<GraduationCap />}>
        {cvData.education.map((edu, index) => (
            <div key={index} className="mb-6 relative">
              <span className="absolute -left-12 top-1 h-3 w-3 bg-violet-400 rounded-full"></span>
              <h3 className="text-xl font-bold text-zinc-100">{edu.degree}</h3>
              <p className="text-lg text-zinc-300">{edu.institution}</p>
              <p className="text-sm text-zinc-400">{edu.period}</p>
            </div>
        ))}
      </Section>

      <Section title="Certifications & Achievements" icon={<Award />}>
         {cvData.achievements.map((item, index) => (
            <div key={index} className="mb-6 relative">
              <span className="absolute -left-12 top-1 h-3 w-3 bg-violet-400 rounded-full"></span>
              <h3 className="text-xl font-bold text-zinc-100">{item.name}</h3>
              <p className="text-lg text-zinc-300">{item.event}</p>
              <p className="text-sm text-zinc-400">{item.year}</p>
            </div>
         ))}
         {cvData.certifications.map((cert, index) => (
            <div key={index} className="mb-6 relative">
              <span className="absolute -left-12 top-1 h-3 w-3 bg-violet-400 rounded-full"></span>
              <h3 className="text-xl font-bold text-zinc-100">{cert.name}</h3>
              <p className="text-lg text-zinc-300">{cert.issuer}</p>
              <p className="text-sm text-zinc-400">{cert.year}</p>
            </div>
         ))}
      </Section>
    </div>
  );
};