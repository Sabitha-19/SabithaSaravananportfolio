import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/v3Data';

interface EditorialHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CREDENTIALS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#100D0D]/90 backdrop-blur-md border-[#F1E4D4]/14 py-3.5'
          : 'bg-transparent border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand / Identity */}
        <a
          href="#hero"
          onClick={handleLogoClick}
          id="header-brand"
          className="group flex items-baseline gap-3 focus:outline-none cursor-interactive"
        >
          <span className="font-serif-editorial text-xl md:text-2xl font-bold tracking-wider text-[#F1E4D4] group-hover:text-white transition-colors">
            {PERSONAL_INFO.shortName}
          </span>
          <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8E7D70] font-mono-tech font-medium">
            B.TECH ISE · 2027
          </span>
        </a>

        {/* Center: Desktop Editorial Nav Links with Underline Expanding from Center */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono-tech tracking-wider uppercase text-[#D7C4B2]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="relative py-1 group/nav hover:text-white transition-colors cursor-interactive"
            >
              <span>{link.label}</span>
              {/* Expanding underline from center */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/nav:w-full h-[1.5px] bg-[#8C3038] transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* Right: Hamburger Menu for full overlay */}
        <button
          type="button"
          id="menu-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative flex items-center justify-center w-10 h-10 border border-[#F1E4D4]/14 hover:border-[#8C3038] bg-[#171313]/80 hover:bg-[#211A1A] transition-all duration-300 text-[#F1E4D4] focus:outline-none cursor-interactive"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-4 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
            <span
              className={`w-4 h-[1.5px] bg-[#F1E4D4] transition-all duration-300 transform origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[5px] bg-[#D7C4B2]" : "group-hover:bg-[#8C3038]"
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-[#F1E4D4] transition-all duration-200 ${
                isMenuOpen ? "opacity-0" : "group-hover:bg-[#8C3038]"
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-[#F1E4D4] transition-all duration-300 transform origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[5px] bg-[#D7C4B2]" : "group-hover:bg-[#8C3038]"
              }`}
            />
          </div>
        </button>
      </div>
    </header>
  );
};
