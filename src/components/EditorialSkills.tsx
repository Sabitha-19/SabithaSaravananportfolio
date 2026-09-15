import React, { useState, useEffect, useRef } from 'react';
import { EDITORIAL_SKILLS } from '../data/v3Data';

export const EditorialSkills: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
      id="skills"
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
            02
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            SKILLS
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] font-medium uppercase tracking-tight transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            TECHNICAL <span className="italic text-[#8C3038]">INDEX.</span>
          </h2>
          <p
            className={`max-w-md text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed transition-all duration-800 delay-150 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Categorized directory of programming languages, web systems, database architectures, and engineering tools without artificial progress percentages.
          </p>
        </div>

        {/* Clean Editorial Skill Index with Sequential Staggered Entrance */}
        <div className="divide-y divide-[#F1E4D4]/10 border-y border-[#F1E4D4]/14">
          {EDITORIAL_SKILLS.map((group, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={group.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`py-8 md:py-10 transition-all duration-300 relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isHovered ? 'bg-[#171313]/70 pl-5 pr-3' : 'pl-1'}`}
                style={{
                  transitionDelay: inView ? `${200 + idx * 120}ms` : '0ms',
                }}
              >
                {/* Number & Category Name (01 moves 8px right on hover) */}
                <div
                  className={`lg:col-span-5 flex items-baseline gap-4 transition-transform duration-300 ease-out ${
                    isHovered ? 'translate-x-2 sm:translate-x-[8px]' : 'translate-x-0'
                  }`}
                >
                  <span
                    className={`font-mono-tech text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-300 ${
                      isHovered ? 'text-[#8C3038]' : 'text-[#8E7D70]'
                    }`}
                  >
                    {group.number}
                  </span>
                  <div>
                    <h3
                      className={`font-serif-editorial text-2xl sm:text-3xl tracking-wide font-medium transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-[#F1E4D4]'
                      }`}
                    >
                      {group.category}
                    </h3>
                    <p className="mt-1 text-xs text-[#8E7D70] font-sans-clean font-light max-w-sm">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skill List with subtle chips */}
                <div className="lg:col-span-7 flex flex-wrap gap-2.5 sm:gap-3 transition-transform duration-300">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 text-xs sm:text-sm font-mono-tech tracking-wider text-[#D7C4B2] bg-[#171313] border transition-all duration-200 cursor-default ${
                        isHovered
                          ? 'border-[#8C3038]/60 text-white bg-[#211A1A] translate-x-0.5'
                          : 'border-[#F1E4D4]/14'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Subtle Expanding Burgundy Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8C3038] transition-all duration-300 ease-out ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Subnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7D70] font-mono-tech">
          <p>Proficiencies validated through practical projects and 3 onsite internships in Puducherry.</p>
          <a
            href="#projects"
            className="mt-3 sm:mt-0 text-[#D7C4B2] hover:text-white underline underline-offset-4 decoration-[#8C3038] transition-colors"
          >
            Explore Projects Using These Technologies &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
