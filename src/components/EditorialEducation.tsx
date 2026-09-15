import React, { useEffect, useRef, useState } from 'react';
import { EDITORIAL_EDUCATION } from '../data/v3Data';
import { GraduationCap } from 'lucide-react';

export const EditorialEducation: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
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
            05
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            ACADEMIC FOUNDATION
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] font-medium uppercase tracking-tight transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            EDUCATION &amp; <span className="italic text-[#8C3038]">DEGREES.</span>
          </h2>
          <p
            className={`max-w-md text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed transition-all duration-800 delay-150 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Formal technical qualification affiliated to Puducherry Technological University (PTU) alongside higher secondary scientific foundations.
          </p>
        </div>

        {/* Editorial Chronological Layout with Sequential Stagger */}
        <div className="divide-y divide-[#F1E4D4]/10 border-y border-[#F1E4D4]/14">
          {EDITORIAL_EDUCATION.map((edu, idx) => (
            <div
              key={edu.number}
              className={`py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-[#171313]/60 transition-all duration-500 px-3 sm:px-6 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: inView ? `${200 + idx * 150}ms` : '0ms',
              }}
            >
              {/* Left: Number & Period */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="text-xs font-mono-tech text-[#8E7D70] group-hover:text-[#8C3038] group-hover:translate-x-1 transition-all duration-300 font-semibold">
                  {edu.number}
                </span>
                <div>
                  <span className="text-sm font-mono-tech tracking-wider text-[#D7C4B2] font-medium">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono-tech text-[#8E7D70]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8C3038]" />
                    <span>{edu.number === "01" ? "B.TECH ISE" : "FOUNDATION"}</span>
                  </div>
                </div>
              </div>

              {/* Center: Degree & Institution */}
              <div className="lg:col-span-6 space-y-2">
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F1E4D4] group-hover:text-white transition-colors tracking-wide">
                  {edu.degree}
                </h3>
                <p className="text-sm font-sans-clean text-[#D7C4B2] font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#8E7D70] font-sans-clean leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>

              {/* Right: Standing Score */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <div className="text-left lg:text-right p-3 bg-[#171313] border border-[#F1E4D4]/14 min-w-[140px] group-hover:border-[#8C3038]/60 transition-colors">
                  <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">
                    {edu.scoreLabel}
                  </p>
                  <p className="font-serif-editorial text-xl sm:text-2xl text-[#F1E4D4] mt-0.5 font-bold tracking-wider">
                    {edu.scoreValue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
