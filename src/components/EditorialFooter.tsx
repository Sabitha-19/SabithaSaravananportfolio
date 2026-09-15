import React from 'react';
import { PERSONAL_INFO } from '../data/v3Data';
import { ArrowUp, Download } from 'lucide-react';
import { handleDownloadResume } from '../utils/downloadResume';

export const EditorialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100D0D] border-t border-[#F1E4D4]/14 py-16 px-6 md:px-12 text-[#8E7D70]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand & Required Exact Signature */}
        <div className="space-y-1.5">
          <p className="font-serif-editorial text-2xl text-[#F1E4D4] font-medium tracking-wide">
            SABITHA S.
          </p>
          <p className="text-xs font-mono-tech text-[#D7C4B2] uppercase tracking-wider">
            DESIGNED &amp; CODED BY SABITHA SARAVANAN
          </p>
          <p className="text-[11px] font-mono-tech text-[#8C3038] font-semibold tracking-widest">
            B.TECH ISE · 2027
          </p>
        </div>

        {/* Center: Clean Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono-tech uppercase tracking-wider text-[#D7C4B2]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin-link"
            data-cursor="open"
            className="hover:text-white transition-colors cursor-interactive"
            title="Open LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            download="Sabitha-Saravanan-Resume.pdf"
            onClick={handleDownloadResume}
            className="hover:text-[#8C3038] text-[#F1E4D4] flex items-center gap-1.5 transition-colors cursor-interactive"
          >
            <Download className="w-3.5 h-3.5 text-[#8C3038]" />
            <span>Resume</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group p-3 bg-[#171313] border border-[#F1E4D4]/14 hover:border-[#8C3038] text-[#D7C4B2] hover:text-[#F1E4D4] transition-all duration-300 focus:outline-none cursor-interactive"
          aria-label="Scroll smoothly back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#8C3038] group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
