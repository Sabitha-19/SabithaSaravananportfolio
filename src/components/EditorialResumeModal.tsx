import React, { useEffect } from 'react';
import { PERSONAL_INFO, EDITORIAL_EXPERIENCES, EDITORIAL_PROJECTS, EDITORIAL_SKILLS, EDITORIAL_EDUCATION, EDITORIAL_CERTIFICATIONS } from '../data/v3Data';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award } from 'lucide-react';
import { handleDownloadResume } from '../utils/downloadResume';

interface EditorialResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorialResumeModal: React.FC<EditorialResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="editorial-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#171313] border border-[#F1E4D4]/20 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden my-auto">
        {/* Top Sticky Bar */}
        <div className="px-6 py-4 border-b border-[#F1E4D4]/15 bg-[#100D0D] flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C3038]" />
            <h2 id="resume-title" className="font-serif-editorial text-lg text-[#F1E4D4] font-medium tracking-wide">
              DIGITAL CURRICULUM VITAE · {PERSONAL_INFO.shortName}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 text-[#D7C4B2] hover:text-white hover:bg-[#211A1A] border border-[#F1E4D4]/10 transition-colors"
              title="Print Curriculum Vitae"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Sabitha-Saravanan-Resume.pdf"
              onClick={handleDownloadResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans-clean font-semibold uppercase tracking-wider bg-[#8C3038] hover:bg-[#A83A43] text-[#F1E4D4] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#8E7D70] hover:text-white hover:bg-[#211A1A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-10 font-sans-clean text-[#D7C4B2] text-xs sm:text-sm">
          {/* Header section */}
          <div className="border-b border-[#F1E4D4]/15 pb-8 space-y-3">
            <h1 className="font-serif-editorial text-3xl sm:text-4xl text-[#F1E4D4] tracking-wide">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base text-[#8C3038] font-medium tracking-wider uppercase">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#8E7D70]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#8C3038]" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8C3038]" /> {PERSONAL_INFO.location}
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-linkedin-link"
                className="hover:text-[#F1E4D4] underline underline-offset-2 flex items-center gap-1 cursor-interactive"
                title="Open LinkedIn Profile"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F1E4D4] underline underline-offset-2 flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wider uppercase border-b border-[#F1E4D4]/10 pb-2">
              ACADEMIC BACKGROUND
            </h3>
            <div className="space-y-4">
              {EDITORIAL_EDUCATION.map((edu) => (
                <div key={edu.number} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h4 className="font-serif-editorial text-base text-[#F1E4D4] font-medium">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#8E7D70]">{edu.institution}</p>
                    <p className="text-xs text-[#D7C4B2] mt-1">{edu.description}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs text-[#8C3038] font-semibold">{edu.scoreLabel}: {edu.scoreValue}</span>
                    <p className="text-[11px] text-[#8E7D70]">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wider uppercase border-b border-[#F1E4D4]/10 pb-2">
              PROFESSIONAL APPRENTICESHIPS
            </h3>
            <div className="space-y-5">
              {EDITORIAL_EXPERIENCES.map((exp) => (
                <div key={exp.number} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif-editorial text-base text-[#F1E4D4] font-medium">
                      {exp.role} — <span className="text-[#8C3038]">{exp.company}</span>
                    </h4>
                    <span className="text-xs text-[#8E7D70]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#8E7D70]">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-[#211A1A] border border-[#F1E4D4]/10 text-[#D7C4B2]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Software Projects */}
          <section className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wider uppercase border-b border-[#F1E4D4]/10 pb-2">
              TECHNICAL PROJECTS
            </h3>
            <div className="space-y-4">
              {EDITORIAL_PROJECTS.map((proj) => (
                <div key={proj.number} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif-editorial text-sm sm:text-base text-[#F1E4D4] font-medium">
                      {proj.number}. {proj.title}
                    </h4>
                    <span className="text-[11px] text-[#8C3038]">{proj.stack.join(" · ")}</span>
                  </div>
                  <p className="text-xs text-[#8E7D70]">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Compendium */}
          <section className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wider uppercase border-b border-[#F1E4D4]/10 pb-2">
              SKILLS & TOOLSETS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDITORIAL_SKILLS.map((grp) => (
                <div key={grp.number} className="p-3 bg-[#100D0D] border border-[#F1E4D4]/10">
                  <h5 className="font-serif-editorial text-xs text-[#F1E4D4] uppercase tracking-wider mb-1.5">
                    {grp.category}
                  </h5>
                  <p className="text-xs text-[#8E7D70]">{grp.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#F1E4D4] tracking-wider uppercase border-b border-[#F1E4D4]/10 pb-2">
              CREDENTIALS & WORKSHOPS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDITORIAL_CERTIFICATIONS.map((cert) => (
                <div key={cert.number} className="flex items-start gap-2 text-xs">
                  <Award className="w-3.5 h-3.5 text-[#8C3038] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F1E4D4] font-medium">{cert.title}</span>
                    <p className="text-[11px] text-[#8E7D70]">{cert.issuer} ({cert.grade})</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
