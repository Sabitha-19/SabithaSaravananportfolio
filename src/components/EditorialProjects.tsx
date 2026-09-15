import React, { useState, useEffect, useRef } from 'react';
import { EDITORIAL_PROJECTS, EditorialProject } from '../data/v3Data';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const EditorialProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<EditorialProject | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<{ [key: string]: boolean }>({});
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageError = (projectNumber: string) => {
    setImageErrorMap((prev) => ({ ...prev, [projectNumber]: true }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-[#F1E4D4]/14 bg-[#100D0D] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C3038] font-mono-tech font-semibold">
            04
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            SELECTED PROJECTS
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] font-medium uppercase tracking-tight transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            ENGINEERED <span className="italic text-[#8C3038]">WORKS.</span>
          </h2>
          <p
            className={`max-w-md text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed transition-all duration-800 delay-150 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            All five standalone software solutions built with equal architectural discipline across Python microservices, relational schemas, and front-end utilities.
          </p>
        </div>

        {/* 100% Equal Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDITORIAL_PROJECTS.map((project, idx) => {
            const hasImageError = imageErrorMap[project.number];

            return (
              <article
                key={project.number}
                data-cursor="project"
                onClick={() => setSelectedProject(project)}
                className={`group relative flex flex-col justify-between bg-[#171313] border border-[#F1E4D4]/14 hover:border-[#8C3038]/70 hover:-translate-y-[5px] transition-all duration-400 p-6 sm:p-7 overflow-hidden cursor-interactive ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: inView ? `${150 + idx * 100}ms` : '0ms',
                }}
              >
                {/* Top Card Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1E4D4]/10">
                    <span className="font-mono-tech text-xs font-semibold tracking-widest text-[#8E7D70] group-hover:text-[#8C3038] group-hover:translate-x-1.5 transition-all duration-300">
                      {project.number}
                    </span>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-0.5 bg-[#211A1A] text-[#D7C4B2] border border-[#F1E4D4]/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Image Container with clip-path/subtle zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden mb-5 bg-[#100D0D] border border-[#F1E4D4]/10">
                    {!hasImageError && project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={() => handleImageError(project.number)}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#171313] via-[#1A1414] to-[#100D0D]">
                        <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8E7D70]">
                          <span>SPECIFICATION {project.number}</span>
                          <span className="text-[#8C3038]">ENGINEERED</span>
                        </div>
                        <div>
                          <p className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wide">
                            {project.title}
                          </p>
                          <p className="text-[10px] font-mono-tech text-[#D7C4B2] mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="h-[1px] w-full bg-[#F1E4D4]/10 group-hover:bg-[#8C3038]/60 transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#F1E4D4] group-hover:text-white transition-colors tracking-wide leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8C3038] font-mono-tech font-medium uppercase tracking-wider mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Stack & Action Links */}
                <div className="mt-6 pt-5 border-t border-[#F1E4D4]/10">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 bg-[#211A1A] text-[#D7C4B2] border border-[#F1E4D4]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#F1E4D4] group-hover:text-[#8C3038] transition-colors"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-mono-tech uppercase tracking-wider text-[#D7C4B2] hover:text-white transition-colors"
                        data-cursor="open"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3 h-3 text-[#8C3038]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Thin burgundy line draws left to right on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#8C3038] transition-all duration-400 ease-out" />
              </article>
            );
          })}
        </div>

        {/* Dedicated Project Specification Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
