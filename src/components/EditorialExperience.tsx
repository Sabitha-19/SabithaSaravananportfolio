import React, { useEffect, useRef, useState } from 'react';
import { EDITORIAL_EXPERIENCES } from '../data/v3Data';
import { Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export const EditorialExperience: React.FC = () => {
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
      id="experience"
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
            03
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            EXPERIENCE
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] font-medium uppercase tracking-tight transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            INDUSTRY <span className="italic text-[#8C3038]">INTERNSHIPS.</span>
          </h2>
          <p
            className={`max-w-md text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed transition-all duration-800 delay-150 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Hands-on technical internships completed onsite in real engineering environments, delivering web applications, REST APIs, and backend services.
          </p>
        </div>

        {/* Editorial Vertical Timeline with Progressive Line Draw */}
        <div className="relative ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-16">
          {/* Vertical progressive drawn line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-[1px] bg-[#8C3038] transition-all duration-1000 ease-out origin-top"
            style={{
              height: inView ? '100%' : '0%',
              opacity: inView ? 0.7 : 0,
            }}
          />

          {EDITORIAL_EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.number}
              className={`relative group transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: inView ? `${250 + idx * 180}ms` : '0ms',
              }}
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-none bg-[#100D0D] border-2 border-[#8C3038] group-hover:bg-[#8C3038] transition-all duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Number, Dates, ONSITE badge, Location */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono-tech font-bold text-[#8C3038]">
                      {exp.number}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-[#D7C4B2]">
                      <Calendar className="w-3.5 h-3.5 text-[#8C3038]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* MANDATORY ONSITE BADGE with Scale 0.85 → 1 and Underline Animation */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`relative inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase font-mono-tech font-bold bg-[#171313] border border-[#8C3038] text-[#F1E4D4] tracking-wider transition-all duration-500 delay-300 ${
                        inView ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-0'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C3038]" />
                      ONSITE
                      <span className="absolute bottom-0 left-1 right-1 h-[1px] bg-[#8C3038]/70" />
                    </span>

                    {exp.duration && (
                      <span className="inline-block px-2.5 py-1 text-[11px] font-mono-tech uppercase tracking-wider bg-[#171313] border border-[#F1E4D4]/14 text-[#8E7D70]">
                        {exp.duration}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#8E7D70] font-mono-tech">
                    <MapPin className="w-3 h-3 text-[#8C3038]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right Column: Role, Company, Description, Focus Skills, Certificate */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F1E4D4] group-hover:text-white transition-colors tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-sans-clean text-[#D7C4B2] font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-sm text-[#8E7D70] font-sans-clean leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Focus list */}
                  <div className="pt-2">
                    <p className="text-[11px] font-mono-tech uppercase tracking-widest text-[#8E7D70] mb-2">
                      TECHNICAL DOMAINS:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono-tech tracking-wider uppercase px-3 py-1 bg-[#171313] text-[#D7C4B2] border border-[#F1E4D4]/14 group-hover:border-[#8C3038]/40 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate received indicator */}
                  {exp.certificateLabel && (
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-[#D7C4B2]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8C3038]" />
                      <span>{exp.certificateLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
