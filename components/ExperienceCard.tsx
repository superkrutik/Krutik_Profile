

import React, { useState } from 'react';
import type { ExperienceEntry, Project } from '../types';
import { ChevronDownIcon } from './icons'; 

const ProjectItem: React.FC<{ project: Project; isExpanded: boolean; onToggle: () => void; }> = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="border-l-4 border-accent/70 dark:border-dark-accent/60 pl-4 py-3 bg-card-alt/60 dark:bg-dark-card-alt/40 rounded-r-lg mb-4 transition-all duration-300 ease-in-out hover:bg-card-alt/90 dark:hover:bg-dark-card-alt/70 group">
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full flex justify-between items-center text-left py-1 focus:outline-none"
      >
        <h4 className="text-lg md:text-xl font-mono font-semibold text-text-primary dark:text-dark-text-primary group-hover:text-accent dark:group-hover:text-dark-accent transition-colors duration-200 tracking-tight">
          {project.title}
        </h4>
        <ChevronDownIcon
          className={`w-6 h-6 text-text-secondary dark:text-dark-text-secondary group-hover:text-accent dark:group-hover:text-dark-accent transition-all duration-300 transform ${
            isExpanded ? 'rotate-180 text-accent dark:text-dark-accent' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1200px] opacity-100 pt-2 pb-1' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>
        {project.details && (
          <ul className="list-disc list-inside text-text-secondary dark:text-dark-text-secondary text-sm space-y-1 mb-3 pl-1">
            {project.details.map((detail, dIdx) => <li key={dIdx}>{detail}</li>)}
          </ul>
        )}
        <div className="mt-3">
          <strong className="text-text-primary dark:text-dark-text-primary text-sm font-mono tracking-wider">Key Skills:</strong>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {project.keySkills.map(skill => (
              <span key={skill} className="font-mono bg-accent/10 dark:bg-dark-accent/15 text-text-primary dark:text-dark-text-primary text-xs font-medium px-2.5 py-1 rounded-md border border-accent/30 dark:border-dark-accent/40 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const ExperienceCard: React.FC<{ entry: ExperienceEntry }> = ({ entry }) => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(0); 

  const handleToggleProject = (index: number) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <div className="bg-card dark:bg-dark-card p-6 md:p-8 rounded-xl shadow-futuristic-light dark:shadow-futuristic-dark border border-border-color dark:border-dark-border-color/70 mb-8 md:mb-10 transition-all duration-300 hover:shadow-futuristic-hover-light dark:hover:shadow-futuristic-hover-dark hover:scale-[1.015] dark:hover:border-dark-accent/50">
      <h3 className="text-2xl font-heading font-semibold text-accent dark:text-dark-accent mb-1 tracking-wide">{entry.role}</h3>
      <p className="text-lg text-text-primary dark:text-dark-text-primary mb-1">{entry.company}</p>
      <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-1">{entry.dates} | {entry.location}</p>
      {entry.description && <p className="text-text-secondary dark:text-dark-text-secondary mt-3 mb-5 text-sm leading-relaxed">{entry.description}</p>}
      <div className="mt-6 space-y-4">
        {entry.projects.map((project, idx) => (
          <ProjectItem
            key={idx}
            project={project}
            isExpanded={expandedProjectIndex === idx}
            onToggle={() => handleToggleProject(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;