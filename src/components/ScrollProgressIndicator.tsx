import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', number: '01' },
  { id: 'about', number: '02' },
  { id: 'skills', number: '03' },
  { id: 'experience', number: '04' },
  { id: 'projects', number: '05' },
  { id: 'education', number: '06' },
  { id: 'certifications', number: '07' },
  { id: 'contact', number: '08' },
];

export const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('01');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].number);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Current Active Section Number */}
      <span className="font-mono-tech text-[10px] tracking-widest text-[#F1E4D4] font-semibold transition-all duration-300">
        {activeSection}
      </span>

      {/* Vertical Track Line */}
      <div className="w-[1px] h-28 bg-[#F1E4D4]/15 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-[#8C3038] transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Total Sections Indicator */}
      <span className="font-mono-tech text-[9px] tracking-widest text-[#8E7D70]">
        08
      </span>
    </div>
  );
};
