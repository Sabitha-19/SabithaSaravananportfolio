import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/v3Data';
import { Download, ExternalLink, ArrowUpRight } from 'lucide-react';
import { handleDownloadResume } from '../utils/downloadResume';

interface EditorialAboutProps {
  onOpenResumeModal: () => void;
}

const STATS = [
  {
    num: "B.TECH ISE",
    label: "DEGREE PROGRAM",
    sublabel: "2023 — 2027",
  },
  {
    num: "7.94",
    unit: "/ 10",
    label: "ACADEMIC CGPA",
    sublabel: "Puducherry Tech University",
  },
  {
    num: "2027",
    label: "GRADUATION YEAR",
    sublabel: "Expected Completion",
  },
  {
    num: "PUDUCHERRY",
    label: "LOCATION",
    sublabel: "India",
  },
];

export const EditorialAbout: React.FC<EditorialAboutProps> = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-[#F1E4D4]/14 bg-[#100D0D] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C3038] font-mono-tech font-semibold">
            01
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            ABOUT ME
          </span>
        </div>

        {/* Large Editorial Heading */}
        <div className="max-w-4xl overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F1E4D4] leading-[0.98] font-normal uppercase transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            FROM <br />
            <span className="font-bold text-stroke-cream">LEARNING</span> <br />
            <span className="italic text-[#8C3038]">TO BUILDING.</span>
          </h2>
        </div>

        {/* Narrative & Statistics Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Summary & Resume Actions */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-800 delay-200 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-sans-clean text-lg sm:text-xl text-[#F1E4D4] leading-relaxed font-normal">
              &ldquo;Motivated B.Tech Information Science &amp; Engineering student with a CGPA of 7.94 and hands-on experience in full-stack web development, C/C++ programming, APIs, databases and practical software projects. Passionate about building useful software solutions and continuously improving technical skills.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#8E7D70] font-sans-clean leading-relaxed pt-2">
              <p>
                My engineering studies at Women&apos;s Engineering College (affiliated to Puducherry Technological University) are reinforced through practical industry application. Having completed three onsite internships and engineered five standalone software projects, I emphasize functional precision, clean code architecture, and disciplined execution.
              </p>
            </div>

            {/* Resume Actions */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              {/* VIEW RESUME: open PDF in new tab */}
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                id="about-view-resume-link"
                className="btn-editorial-primary inline-flex items-center gap-2.5 cursor-interactive"
                data-cursor="open"
              >
                <span>VIEW RESUME</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* DOWNLOAD RESUME: download the PDF */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="Sabitha-Saravanan-Resume.pdf"
                onClick={handleDownloadResume}
                id="about-download-resume-btn"
                className="btn-editorial-outline inline-flex items-center gap-2.5 cursor-interactive"
              >
                <Download className="w-3.5 h-3.5 text-[#8C3038]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#projects"
                id="about-explore-works-btn"
                className="btn-editorial-ghost inline-flex items-center gap-1.5 cursor-interactive"
              >
                <span>SELECTED WORKS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Independent Statistics Cards that slide upward */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-5 sm:p-6 bg-[#171313] border border-[#F1E4D4]/14 hover:border-[#8C3038]/70 transition-all duration-700 ease-out flex flex-col justify-between ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${300 + idx * 120}ms`,
                }}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech block">
                    {stat.label}
                  </span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <p className="font-serif-editorial text-2xl sm:text-3xl text-[#F1E4D4] font-medium tracking-wide">
                      {stat.num}
                    </p>
                    {stat.unit && (
                      <span className="text-xs text-[#8C3038] font-mono-tech font-semibold">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[11px] font-mono-tech text-[#8E7D70] mt-4 pt-3 border-t border-[#F1E4D4]/10">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
