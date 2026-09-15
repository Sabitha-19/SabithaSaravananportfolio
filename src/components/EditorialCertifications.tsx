import React, { useEffect, useRef, useState } from 'react';
import { EDITORIAL_CERTIFICATIONS } from '../data/v3Data';
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const EditorialCertifications: React.FC = () => {
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
      id="certifications"
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
            06
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            CERTIFICATIONS
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <h2
            className={`font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] font-medium uppercase tracking-tight transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            CREDENTIAL <span className="italic text-[#8C3038]">INDEX.</span>
          </h2>
          <p
            className={`max-w-md text-xs sm:text-sm text-[#8E7D70] font-sans-clean leading-relaxed transition-all duration-800 delay-150 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Validated certifications across national NPTEL examination, Python data science, and modern web development workshops.
          </p>
        </div>

        {/* Editorial Vertical Certifications List with translateY(-4px) and Credential Link */}
        <div className="divide-y divide-[#F1E4D4]/10 border-y border-[#F1E4D4]/14">
          {EDITORIAL_CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.number}
              className={`py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center group hover:bg-[#171313]/80 hover:-translate-y-1 border-l-2 border-transparent hover:border-l-[#8C3038] transition-all duration-300 px-4 sm:px-6 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: inView ? `${180 + idx * 100}ms` : '0ms',
              }}
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#8E7D70] group-hover:text-[#8C3038] transition-colors">
                  {cert.number}
                </span>
              </div>

              {/* Title & Description with Clickable Title */}
              <div className="lg:col-span-5 space-y-1">
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#F1E4D4] group-hover:text-white transition-colors tracking-wide">
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D7C4B2] transition-colors inline-flex items-center gap-1.5 cursor-interactive"
                      title={`Open certificate: ${cert.title}`}
                    >
                      <span>{cert.title}</span>
                    </a>
                  ) : (
                    <span>{cert.title}</span>
                  )}
                </h3>
                <p className="text-xs text-[#8E7D70] font-sans-clean leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Issuer */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-sans-clean text-[#D7C4B2]">
                  <Award className="w-3.5 h-3.5 text-[#8C3038] shrink-0" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Verification Badge & VIEW CERTIFICATE Button */}
              <div className="lg:col-span-3 flex flex-wrap items-center lg:justify-end gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech tracking-wider uppercase px-2.5 py-1 bg-[#171313] text-[#D7C4B2] border border-[#F1E4D4]/14 group-hover:border-[#8C3038]/60 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-[#8C3038]" />
                  {cert.grade}
                </span>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`cert-view-btn-${cert.number}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech font-semibold uppercase tracking-wider bg-[#8C3038]/15 hover:bg-[#8C3038] text-[#F1E4D4] border border-[#8C3038]/40 hover:border-[#8C3038] transition-all duration-200 cursor-interactive group/btn"
                    title={`View Certificate: ${cert.title}`}
                    aria-label={`View Certificate for ${cert.title}`}
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8C3038] group-hover/btn:text-[#F1E4D4] transition-colors" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
