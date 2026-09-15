import React, { useEffect, useState } from 'react';
import { EditorialProject } from '../data/v3Data';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Activity, Server, Database, Cpu, Globe } from 'lucide-react';

interface ProjectDetailModalProps {
  project: EditorialProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [animStage, setAnimStage] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Trigger staged entrance
      setAnimStage(0);
      const t1 = setTimeout(() => setAnimStage(1), 100);
      const t2 = setTimeout(() => setAnimStage(2), 250);
      const t3 = setTimeout(() => setAnimStage(3), 400);
      const t4 = setTimeout(() => setAnimStage(4), 550);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto transition-opacity duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Modal Container: slides upward */}
      <div
        className="relative w-full max-w-4xl bg-[#171313] border border-[#F1E4D4]/20 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto transform transition-all duration-400 ease-out"
        style={{
          transform: animStage >= 1 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
          opacity: animStage >= 1 ? 1 : 0,
        }}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#F1E4D4]/14 bg-[#100D0D] flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs font-bold text-[#8C3038] tracking-widest">
              {project.number}
            </span>
            <span className="h-[1px] w-6 bg-[#F1E4D4]/20" />
            <span className="font-mono-tech text-xs text-[#D7C4B2] uppercase tracking-wider">
              PROJECT SPECIFICATION
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#8E7D70] hover:text-[#F1E4D4] hover:bg-[#211A1A] border border-[#F1E4D4]/10 transition-colors focus:outline-none"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Project Details Body */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-10 font-sans-clean text-[#D7C4B2]">
          {/* 1. Project Title & Subtitle */}
          <div
            className="border-b border-[#F1E4D4]/12 pb-6 space-y-2 transition-all duration-500 ease-out"
            style={{
              opacity: animStage >= 1 ? 1 : 0,
              transform: animStage >= 1 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#8C3038] font-semibold">
              {project.category}
            </span>
            <h2
              id="project-modal-title"
              className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#F1E4D4] tracking-wide"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#D7C4B2] font-mono-tech">
              {project.subtitle}
            </p>
          </div>

          {/* Project Bespoke Visual Feature */}
          {project.image && (
            <div
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-[#F1E4D4]/14 bg-[#100D0D] transition-all duration-500 ease-out"
              style={{
                opacity: animStage >= 1 ? 1 : 0,
                transform: animStage >= 1 ? 'translateY(0)' : 'translateY(15px)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141010]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* 2. Overview Description & Key Features */}
          <div
            className="space-y-4 transition-all duration-500 delay-100 ease-out"
            style={{
              opacity: animStage >= 2 ? 1 : 0,
              transform: animStage >= 2 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] font-mono-tech text-[#8E7D70]">
              OVERVIEW
            </h3>
            <p className="text-sm sm:text-base text-[#F1E4D4] font-normal leading-relaxed">
              {project.overview}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="pt-3">
                <p className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#8E7D70] mb-3">
                  CORE CAPABILITIES:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-mono-tech text-[#D7C4B2] bg-[#100D0D] p-2.5 border border-[#F1E4D4]/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3038] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Technology Stack */}
          <div
            className="space-y-3 transition-all duration-500 delay-150 ease-out"
            style={{
              opacity: animStage >= 2 ? 1 : 0,
              transform: animStage >= 2 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] font-mono-tech text-[#8E7D70]">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono-tech tracking-wider uppercase bg-[#100D0D] border border-[#F1E4D4]/14 text-[#F1E4D4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Animated System Architecture Diagram */}
          <div
            className="space-y-4 pt-2 transition-all duration-500 delay-200 ease-out"
            style={{
              opacity: animStage >= 3 ? 1 : 0,
              transform: animStage >= 3 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.25em] font-mono-tech text-[#8E7D70]">
                SYSTEM ARCHITECTURE
              </h3>
              <span className="text-[10px] font-mono-tech text-[#8C3038]">
                ACTIVE WORKFLOW FLOW
              </span>
            </div>

            <div className="bg-[#100D0D] border border-[#F1E4D4]/14 p-6 sm:p-8 relative overflow-hidden">
              {/* Sequential Node Flow */}
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 relative z-10">
                {project.architectureNodes.map((node, i) => (
                  <React.Fragment key={node.id}>
                    <div
                      className="flex-1 min-w-[120px] p-3 sm:p-4 bg-[#171313] border border-[#8C3038]/40 hover:border-[#8C3038] transition-all duration-300 text-center animate-node-pulse"
                      style={{
                        animationDelay: `${i * 400}ms`,
                      }}
                    >
                      <span className="block text-[9px] font-mono-tech text-[#8C3038] font-bold tracking-widest mb-1">
                        STEP 0{i + 1}
                      </span>
                      <p className="font-serif-editorial text-sm sm:text-base text-[#F1E4D4] font-medium tracking-wide">
                        {node.label}
                      </p>
                      {node.sublabel && (
                        <p className="text-[10px] font-mono-tech text-[#8E7D70] mt-1">
                          {node.sublabel}
                        </p>
                      )}
                    </div>

                    {/* Arrow between nodes */}
                    {i < project.architectureNodes.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center text-[#8C3038]">
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Architecture narrative */}
              <p className="text-xs text-[#8E7D70] font-sans-clean mt-6 pt-4 border-t border-[#F1E4D4]/10 leading-relaxed">
                {project.architectureDescription}
              </p>
            </div>
          </div>

          {/* 5. Performance & Deployment Metrics (Strictly Honest Data) */}
          <div
            className="space-y-4 pt-2 transition-all duration-500 delay-250 ease-out"
            style={{
              opacity: animStage >= 3 ? 1 : 0,
              transform: animStage >= 3 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] font-mono-tech text-[#8E7D70]">
              PERFORMANCE &amp; DEPLOYMENT
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Algorithm Speed */}
              <div className="p-4 bg-[#100D0D] border border-[#F1E4D4]/14 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono-tech text-[#8E7D70]">
                  <Activity className="w-3 h-3 text-[#8C3038]" />
                  <span>ALGORITHM SPEED</span>
                </div>
                <p className="font-mono-tech text-xs text-[#F1E4D4] font-medium pt-1">
                  {project.performance.algorithmSpeed}
                </p>
              </div>

              {/* Semantic Speed */}
              <div className="p-4 bg-[#100D0D] border border-[#F1E4D4]/14 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono-tech text-[#8E7D70]">
                  <Cpu className="w-3 h-3 text-[#8C3038]" />
                  <span>SEMANTIC SPEED</span>
                </div>
                <p className="font-mono-tech text-xs text-[#F1E4D4] font-medium pt-1">
                  {project.performance.semanticSpeed}
                </p>
              </div>

              {/* Accuracy / Benchmark (Only shown if defined, never fabricated) */}
              <div className="p-4 bg-[#100D0D] border border-[#F1E4D4]/14 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono-tech text-[#8E7D70]">
                  <Database className="w-3 h-3 text-[#8C3038]" />
                  <span>ACCURACY TEST</span>
                </div>
                <p className="font-mono-tech text-xs text-[#F1E4D4] font-medium pt-1">
                  {project.performance.accuracy || 'Benchmark not provided'}
                </p>
              </div>

              {/* Deployment Platform & Status */}
              <div className="p-4 bg-[#100D0D] border border-[#F1E4D4]/14 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono-tech text-[#8E7D70]">
                  <Server className="w-3 h-3 text-[#8C3038]" />
                  <span>DEPLOYMENT</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono-tech text-xs text-[#F1E4D4] font-medium">
                    {project.performance.deploymentPlatform}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono-tech font-bold uppercase tracking-wider bg-[#211A1A] border border-[#8C3038] text-[#8C3038]">
                    {project.performance.deploymentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Action Buttons: Appear Last */}
          <div
            className="pt-6 border-t border-[#F1E4D4]/14 flex flex-wrap items-center gap-4 transition-all duration-500 delay-300 ease-out"
            style={{
              opacity: animStage >= 4 ? 1 : 0,
              transform: animStage >= 4 ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-3.5 bg-[#8C3038] hover:bg-[#A83A43] border border-[#F1E4D4]/20 hover:border-[#F1E4D4]/40 text-[#F1E4D4] font-sans-clean font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#8C3038]/25 cursor-interactive overflow-hidden"
                data-cursor="open"
                id={`modal-live-demo-${project.number}`}
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F1E4D4] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[#8C3038]/15 border border-[#F1E4D4]/20 hover:border-[#8C3038] text-[#F1E4D4] font-sans-clean font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:translate-x-[2px] hover:-translate-y-[2px] cursor-interactive overflow-hidden"
                data-cursor="open"
                id={`modal-visit-site-${project.number}`}
              >
                <span>VISIT SITE</span>
                <Globe className="w-3.5 h-3.5 text-[#8C3038] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8C3038] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            )}

            <a
              href={project.githubUrl || 'https://github.com/Sabitha-19'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-3 bg-[#100D0D] hover:bg-[#211A1A] border border-[#F1E4D4]/14 hover:border-[#F1E4D4]/30 text-[#D7C4B2] hover:text-[#F1E4D4] font-sans-clean text-xs tracking-wider uppercase transition-all duration-200 hover:translate-x-[2px] hover:-translate-y-[2px] cursor-interactive overflow-hidden"
              data-cursor="open"
              id={`modal-source-code-${project.number}`}
            >
              <Github className="w-3.5 h-3.5 text-[#8E7D70] group-hover:text-[#F1E4D4] transition-colors" />
              <span>SOURCE CODE</span>
              <ExternalLink className="w-3 h-3 text-[#8E7D70] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8E7D70] group-hover:w-full transition-all duration-300 ease-out" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="ml-auto text-xs font-mono-tech uppercase tracking-wider text-[#8E7D70] hover:text-[#F1E4D4] transition-colors p-2"
            >
              CLOSE SPECIFICATION [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
