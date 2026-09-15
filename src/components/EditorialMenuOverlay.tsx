import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/v3Data';
import { ArrowUpRight, Download, Mail, ExternalLink, X } from 'lucide-react';
import { handleDownloadResume } from '../utils/downloadResume';

interface EditorialMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

const MENU_ITEMS = [
  { num: "01", label: "HOME", href: "#hero" },
  { num: "02", label: "ABOUT", href: "#about" },
  { num: "03", label: "SKILLS", href: "#skills" },
  { num: "04", label: "EXPERIENCE", href: "#experience" },
  { num: "05", label: "PROJECTS", href: "#projects" },
  { num: "06", label: "EDUCATION", href: "#education" },
  { num: "07", label: "CERTIFICATIONS", href: "#certifications" },
  { num: "08", label: "CONTACT", href: "#contact" },
];

export const EditorialMenuOverlay: React.FC<EditorialMenuOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
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

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="editorial-menu-overlay"
      className="fixed inset-0 z-50 bg-[#100D0D] bg-editorial-pattern flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300 px-6 md:px-16 py-8 md:py-12"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Top Header inside overlay */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-8 border-b border-[#F1E4D4]/14">
        <div className="flex items-baseline gap-3">
          <span className="font-serif-editorial text-xl md:text-2xl font-bold tracking-wider text-[#F1E4D4]">
            {PERSONAL_INFO.shortName}
          </span>
          <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8E7D70] font-mono-tech">
            NAVIGATION DIRECTORY
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-2 px-3.5 py-2 border border-[#F1E4D4]/14 hover:border-[#8C3038] bg-[#171313] hover:bg-[#211A1A] text-[#F1E4D4] transition-all duration-200 focus:outline-none"
          aria-label="Close menu"
        >
          <span className="text-xs uppercase tracking-widest font-mono-tech text-[#D7C4B2] group-hover:text-white">
            CLOSE
          </span>
          <X className="w-4 h-4 text-[#8C3038] group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Grid: Navigation & Quick Channels */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-8">
        {/* Left: Numbered Navigation list */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <nav className="flex flex-col divide-y divide-[#F1E4D4]/10 border-y border-[#F1E4D4]/10">
            {MENU_ITEMS.map((item, index) => (
              <button
                key={item.num}
                type="button"
                onClick={() => handleLinkClick(item.href)}
                style={{ animationDelay: `${index * 40}ms` }}
                className="group relative w-full py-4 sm:py-5 flex items-center justify-between text-left transition-all duration-300 hover:pl-4 focus:outline-none focus-visible:pl-4"
              >
                <div className="flex items-baseline gap-5 sm:gap-8">
                  {/* Number reveals first with monospace */}
                  <span className="text-xs sm:text-sm font-mono-tech font-semibold text-[#8E7D70] group-hover:text-[#8C3038] transition-colors">
                    {item.num}
                  </span>
                  {/* Label in editorial serif */}
                  <span className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F1E4D4] group-hover:text-white transition-colors tracking-wide">
                    {item.label}
                  </span>
                </div>

                {/* Arrow and hover line */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-mono-tech tracking-widest text-[#8E7D70] opacity-0 group-hover:opacity-100 group-hover:text-[#8C3038] transition-all transform group-hover:translate-x-1">
                    GO TO SECTION
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8E7D70] group-hover:text-[#8C3038] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Expanding burgundy line on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8C3038] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Actions & Social Links */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#F1E4D4]/14 pt-8 lg:pt-0 lg:pl-12">
          {/* Documents: VIEW RESUME & DOWNLOAD RESUME */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#F1E4D4]/14">
              <span className="w-1.5 h-1.5 bg-[#8C3038] rounded-full" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-semibold">
                DOCUMENTS
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {/* VIEW RESUME ↗ */}
              <a
                href="/assets/resume/Sabitha-Saravanan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="overlay-view-resume-btn"
                className="w-full flex items-center justify-between px-4 py-3.5 bg-[#171313] hover:bg-[#211A1A] border border-[#F1E4D4]/14 hover:border-[#8C3038] text-[#F1E4D4] transition-all duration-300 group cursor-interactive"
                data-cursor="open"
                title="View Resume PDF in new tab"
              >
                <span className="flex items-center gap-2.5 text-xs tracking-wider uppercase font-semibold font-sans-clean">
                  <ExternalLink className="w-4 h-4 text-[#8C3038] group-hover:scale-110 transition-transform" />
                  VIEW RESUME
                </span>
                <span className="text-[10px] font-mono-tech text-[#8E7D70] uppercase group-hover:text-[#F1E4D4]">↗ NEW TAB</span>
              </a>

              {/* DOWNLOAD RESUME ↓ */}
              <a
                href="/assets/resume/Sabitha-Saravanan-Resume.pdf"
                download="Sabitha-Saravanan-Resume.pdf"
                onClick={handleDownloadResume}
                id="overlay-download-resume-btn"
                className="w-full flex items-center justify-between px-4 py-3.5 bg-[#171313] hover:bg-[#211A1A] border border-[#F1E4D4]/14 hover:border-[#8C3038] text-[#F1E4D4] transition-all duration-300 group cursor-interactive"
                title="Download Sabitha Saravanan Resume PDF"
              >
                <span className="flex items-center gap-2.5 text-xs tracking-wider uppercase font-semibold font-sans-clean">
                  <Download className="w-4 h-4 text-[#8C3038] group-hover:scale-110 transition-transform" />
                  DOWNLOAD RESUME
                </span>
                <span className="text-[10px] font-mono-tech text-[#8E7D70] uppercase group-hover:text-[#F1E4D4]">↓ PDF</span>
              </a>
            </div>
          </div>

          {/* Channels: GITHUB, LINKEDIN, EMAIL */}
          <div className="space-y-4 my-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8E7D70] font-mono-tech">
              DIRECT CHANNELS
            </p>
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 text-sm text-[#D7C4B2] hover:text-white border-b border-[#F1E4D4]/10 group transition-colors"
              >
                <span className="font-mono-tech uppercase tracking-wider text-xs">GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E7D70] group-hover:text-[#8C3038] transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="overlay-linkedin-link"
                className="flex items-center justify-between py-2 text-sm text-[#D7C4B2] hover:text-white border-b border-[#F1E4D4]/10 group transition-colors cursor-interactive"
                title="Open LinkedIn Profile"
              >
                <span className="font-mono-tech uppercase tracking-wider text-xs">LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E7D70] group-hover:text-[#8C3038] transition-colors" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between py-2 text-sm text-[#D7C4B2] hover:text-white border-b border-[#F1E4D4]/10 group transition-colors"
              >
                <span className="font-mono-tech uppercase tracking-wider text-xs">EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-[#8E7D70] group-hover:text-[#8C3038] transition-colors" />
              </a>
            </div>
          </div>

          {/* Academic & Location Footer note */}
          <div className="pt-6 border-t border-[#F1E4D4]/10 text-xs font-mono-tech text-[#8E7D70] space-y-1">
            <p>B.TECH ISE · 2027</p>
            <p>WOMEN&apos;S ENGINEERING COLLEGE (PTU)</p>
            <p className="text-[#8C3038]">PUDUCHERRY, INDIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};
