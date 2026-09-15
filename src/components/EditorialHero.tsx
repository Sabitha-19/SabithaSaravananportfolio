import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/v3Data';
import { ArrowUpRight, Download, ArrowDown, ExternalLink } from 'lucide-react';
import { handleDownloadResume } from '../utils/downloadResume';

interface EditorialHeroProps {
  onOpenResumeModal: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenResumeModal }) => {
  // Desktop mouse parallax & subtle tilt for profile card (capped at 2-3 degrees)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Magnetic buttons offsets
  const [magneticBtn1, setMagneticBtn1] = useState({ x: 0, y: 0 });
  const [magneticBtn2, setMagneticBtn2] = useState({ x: 0, y: 0 });
  const [magneticBtn3, setMagneticBtn3] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    // Staged entrance
    const timer = setTimeout(() => setHasEntered(true), 120);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      clearTimeout(timer);
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseOffset({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleCardMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Subtle magnetic movement for buttons (max 3-5px)
  const handleMagneticMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 4;
    const y = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 3;
    setOffset({ x, y });
  };

  const handleMagneticLeave = (
    setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center border-b border-[#F1E4D4]/14 bg-editorial-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Metadata Strip */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono-tech text-[#8E7D70] transition-all duration-700 ease-out ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#8C3038] font-semibold">01 / INTRODUCTION</span>
            <span className="w-6 h-[1px] bg-[#F1E4D4]/14" />
            <span className="text-[#D7C4B2] tracking-wider uppercase">
              BASED IN PUDUCHERRY, INDIA
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[#8E7D70] uppercase tracking-wider">
              DEGREE: <strong className="text-[#F1E4D4] font-medium">B.TECH ISE · 2027</strong>
            </span>
          </div>
        </div>

        {/* Main Editorial Grid: 60-65% Left (Typography) vs 35% Right (Profile Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Primary Introduction Narrative */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center order-1">
            {/* 05. OPEN TO OPPORTUNITIES Availability Indicator */}
            <div
              className={`mb-6 transition-all duration-700 ease-out ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <div className="relative group/status inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171313] border border-[#8C3038]/50 hover:border-[#8C3038] transition-colors cursor-default select-none">
                {/* Status Dot with subtle, non-neon 2.5s pulse */}
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-status-pulse absolute inline-flex h-full w-full rounded-full bg-[#8C3038] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8C3038]" />
                </span>

                <span className="text-[11px] font-mono-tech tracking-[0.18em] uppercase text-[#F1E4D4] font-semibold">
                  OPEN TO OPPORTUNITIES
                </span>

                <span className="hidden sm:inline h-3 w-[1px] bg-[#F1E4D4]/14" />

                <span className="hidden sm:inline text-[10px] font-mono-tech tracking-wider uppercase text-[#8E7D70]">
                  WEB DEVELOPMENT · SOFTWARE · INTERNSHIPS
                </span>

                {/* Refined Contextual Tooltip */}
                <div className="absolute bottom-full left-0 mb-2.5 hidden group-hover/status:flex flex-col w-64 p-3 bg-[#171313] border border-[#8C3038] shadow-2xl text-[11px] font-sans-clean text-[#D7C4B2] leading-relaxed z-30 pointer-events-none animate-in fade-in duration-200">
                  <span className="font-mono-tech text-[10px] text-[#8C3038] uppercase tracking-wider font-semibold mb-1">
                    AVAILABILITY STATUS
                  </span>
                  <span>Currently open to relevant opportunities, internships and entry-level roles.</span>
                </div>
              </div>
            </div>

            {/* Greeting: Stagger 1 & 2 */}
            <div className="overflow-hidden mb-1">
              <p
                className={`font-serif-editorial text-2xl sm:text-3xl text-[#D7C4B2] tracking-wide font-normal transition-all duration-700 ease-out ${
                  hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                HELLO,
              </p>
            </div>

            <div className="overflow-hidden mb-3">
              <p
                className={`font-serif-editorial text-2xl sm:text-3xl text-white font-medium tracking-wide transition-all duration-700 delay-100 ease-out ${
                  hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                I&apos;M SABITHA.
              </p>
            </div>

            {/* Main Editorial Statement */}
            <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.94] tracking-tight uppercase">
              <span className="overflow-hidden block">
                <span
                  className={`block text-[#F1E4D4] font-bold transition-all duration-800 delay-200 ease-out ${
                    hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  I BUILD
                </span>
              </span>

              <span className="overflow-hidden block my-1">
                <span
                  className={`block text-stroke-cream font-extrabold tracking-wider transition-all duration-800 delay-300 ease-out ${
                    hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  DIGITAL
                </span>
              </span>

              <span className="overflow-hidden block">
                <span
                  className={`block text-[#8C3038] italic font-normal transition-all duration-800 delay-400 ease-out ${
                    hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  SOLUTIONS.
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <div className="mt-7 max-w-xl overflow-hidden">
              <p
                className={`text-base sm:text-lg font-sans-clean text-[#D7C4B2] font-normal leading-relaxed transition-all duration-800 delay-500 ease-out ${
                  hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                B.Tech Information Science &amp; Engineering student focused on building practical web applications, software solutions and real-world technology projects.
              </p>
            </div>

            {/* Hero CTA Hierarchy: Primary (VIEW PROJECTS), Secondary (DOWNLOAD RESUME), View & Contact */}
            <div
              className={`mt-9 flex flex-wrap items-center gap-3.5 transition-all duration-800 delay-600 ease-out ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* PRIMARY: VIEW PROJECTS */}
              <a
                href="#projects"
                id="hero-view-projects-btn"
                onMouseMove={(e) => handleMagneticMove(e, setMagneticBtn1)}
                onMouseLeave={() => handleMagneticLeave(setMagneticBtn1)}
                style={{
                  transform: `translate3d(${magneticBtn1.x}px, ${magneticBtn1.y}px, 0)`,
                }}
                className="btn-editorial-primary inline-flex items-center gap-2 cursor-interactive"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* SECONDARY: DOWNLOAD RESUME (Reliable actual PDF download) */}
              <a
                href="/assets/resume/Sabitha-Saravanan-Resume.pdf"
                download="Sabitha-Saravanan-Resume.pdf"
                onClick={handleDownloadResume}
                id="hero-download-resume-btn"
                onMouseMove={(e) => handleMagneticMove(e, setMagneticBtn2)}
                onMouseLeave={() => handleMagneticLeave(setMagneticBtn2)}
                style={{
                  transform: `translate3d(${magneticBtn2.x}px, ${magneticBtn2.y}px, 0)`,
                }}
                className="btn-editorial-outline inline-flex items-center gap-2 cursor-interactive"
                title="Download Sabitha Saravanan Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#8C3038]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* VIEW RESUME (Opens actual PDF in new browser tab for recruiter reading) */}
              <a
                href="/assets/resume/Sabitha-Saravanan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-view-resume-btn"
                onMouseMove={(e) => handleMagneticMove(e, setMagneticBtn3)}
                onMouseLeave={() => handleMagneticLeave(setMagneticBtn3)}
                style={{
                  transform: `translate3d(${magneticBtn3.x}px, ${magneticBtn3.y}px, 0)`,
                }}
                className="btn-editorial-ghost inline-flex items-center gap-1.5 cursor-interactive"
                data-cursor="open"
                title="View Resume PDF in new tab"
              >
                <span>VIEW RESUME</span>
                <ExternalLink className="w-3 h-3 text-[#8C3038]" />
              </a>

              {/* TEXT LINK: CONTACT ME */}
              <a
                href="#contact"
                id="hero-contact-text-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#D7C4B2] hover:text-white transition-colors group cursor-interactive py-2"
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8C3038] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Micro Details Strip */}
            <div
              className={`mt-10 pt-7 border-t border-[#F1E4D4]/14 grid grid-cols-2 sm:grid-cols-3 gap-6 transition-all duration-800 delay-700 ease-out ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">DEGREE</p>
                <p className="font-serif-editorial text-base sm:text-lg text-[#F1E4D4] mt-0.5">B.Tech ISE</p>
                <p className="text-xs text-[#8E7D70] font-mono-tech">CGPA 7.94 / 10</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">EXPERIENCE</p>
                <p className="font-serif-editorial text-base sm:text-lg text-[#F1E4D4] mt-0.5">3 Onsite Internships</p>
                <p className="text-xs text-[#8E7D70] font-mono-tech">Puducherry, India</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">PRIMARY STACK</p>
                <p className="font-serif-editorial text-base sm:text-lg text-[#F1E4D4] mt-0.5">Python · Flask · Web</p>
                <p className="text-xs text-[#8E7D70] font-mono-tech">SQL &amp; REST APIs</p>
              </div>
            </div>
          </div>

          {/* Right Column: Medium-Sized Vertical Editorial Profile Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end order-2">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              data-cursor="profile"
              className={`relative w-full max-w-[250px] sm:max-w-[270px] lg:max-w-[340px] xl:max-w-[360px] select-none group cursor-interactive transition-all duration-800 delay-300 ease-out ${
                hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                perspective: '1000px',
              }}
            >
              {/* Subtle Burgundy Offset Outer Border: translates 2-4px on hover, max 2-3 deg tilt */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 border border-[#8C3038]/50 transition-transform duration-300 ease-out pointer-events-none -z-10 group-hover:translate-x-1 group-hover:translate-y-1"
                style={{
                  transform: isDesktop
                    ? `translate3d(${-mouseOffset.x * 3}px, ${-mouseOffset.y * 3}px, 0) rotate3d(${mouseOffset.y}, ${-mouseOffset.x}, 0, 2deg)`
                    : 'none',
                }}
              />

              {/* Minimal Corner Architectural Registration Marks */}
              <span className="absolute -top-3 -left-3 w-2 h-2 border-t border-l border-[#F1E4D4]/50 z-20 pointer-events-none" />
              <span className="absolute -top-3 -right-3 w-2 h-2 border-t border-r border-[#F1E4D4]/50 z-20 pointer-events-none" />
              <span className="absolute -bottom-3 -left-3 w-2 h-2 border-b border-l border-[#F1E4D4]/50 z-20 pointer-events-none" />
              <span className="absolute -bottom-3 -right-3 w-2 h-2 border-b border-r border-[#F1E4D4]/50 z-20 pointer-events-none" />

              {/* Main Card Container: dark frame + warm cream thin border */}
              <div
                className="relative bg-[#171313] border border-[#F1E4D4]/20 shadow-2xl p-3 sm:p-3.5 transition-all duration-300 ease-out group-hover:border-[#8C3038]/70"
                style={{
                  transform: isDesktop
                    ? `translate3d(${mouseOffset.x * 3}px, ${mouseOffset.y * 3}px, 0) rotate3d(${-mouseOffset.y}, ${mouseOffset.x}, 0, 2.5deg)`
                    : 'none',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Top Card Header with small index number */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F1E4D4]/10 text-[10px] font-mono-tech text-[#8E7D70]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#8C3038] font-bold">01</span>
                    <span className="text-[#F1E4D4]/40">/</span>
                    <span className="text-[#D7C4B2] tracking-wider uppercase font-medium">PROFILE</span>
                  </div>
                  <span className="text-[#8E7D70] tracking-widest text-[9px]">PTU ARCHIVE</span>
                </div>

                {/* Medium Vertical Portrait Frame - Original Natural Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#100D0D] border border-[#F1E4D4]/10">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="Sabitha Saravanan — B.Tech Information Science & Engineering Student"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('assets/images/profile.jpg')) {
                        target.src = 'assets/images/profile.jpg';
                      }
                    }}
                  />

                  {/* Restrained Burgundy Tint on Hover */}
                  <div className="absolute inset-0 bg-[#8C3038]/0 group-hover:bg-[#8C3038]/10 transition-colors duration-300 pointer-events-none" />

                  {/* Subtle Vignette at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100D0D]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Small Vertical Label */}
                  <div className="absolute right-1.5 bottom-2 pointer-events-none z-10">
                    <span className="text-[8px] font-mono-tech tracking-[0.25em] uppercase text-[#F1E4D4]/70 rotate-90 origin-bottom-right inline-block">
                      ISE · 2027
                    </span>
                  </div>
                </div>

                {/* Bottom Card Editorial Metadata: Exact requested info */}
                <div className="pt-3 pb-0.5 space-y-1 transition-opacity duration-300">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-serif-editorial text-sm sm:text-base text-[#F1E4D4] font-medium tracking-wide">
                      SABITHA SARAVANAN
                    </p>
                    <span className="text-[10px] font-mono-tech text-[#8C3038] font-semibold uppercase">
                      2027
                    </span>
                  </div>

                  <p className="text-[11px] font-mono-tech text-[#D7C4B2]">
                    B.TECH ISE · PTU
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8E7D70] pt-1 border-t border-[#F1E4D4]/10">
                    <span>PUDUCHERRY, INDIA</span>
                    <span className="text-[#F1E4D4] uppercase tracking-wider font-medium">WEB DEVELOPMENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 pt-6 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono-tech tracking-[0.25em] text-[#8E7D70] hover:text-[#F1E4D4] transition-colors focus:outline-none cursor-interactive"
            aria-label="Scroll to explore"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#8C3038] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
