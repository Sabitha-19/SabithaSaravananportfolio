import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/v3Data';
import { Mail, MapPin, Copy, Check, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export const EditorialContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject';
    if (!formData.message.trim()) errors.message = 'Please provide message details';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    }, 700);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-[#F1E4D4]/14 bg-[#100D0D] relative"
    >
      {/* Visual copy feedback toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 ${
          copiedEmail
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95'
        }`}
        aria-live="polite"
      >
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#171313] border border-[#8C3038] shadow-2xl text-xs font-mono-tech text-[#F1E4D4] uppercase tracking-wider">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>EMAIL COPIED TO CLIPBOARD</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C3038] font-mono-tech font-semibold">
            07
          </span>
          <span className="h-[1px] w-8 bg-[#F1E4D4]/14" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D7C4B2] font-mono-tech font-medium">
            CONTACT
          </span>
        </div>

        {/* Main Grid: Headline & Direct Contact vs Editorial Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct channels and statement */}
          <div
            className={`lg:col-span-5 space-y-8 transition-all duration-800 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#F1E4D4] leading-[0.98] uppercase tracking-tight">
              LET&apos;S <br />
              <span className="font-bold text-stroke-cream">BUILD</span> <br />
              <span className="italic text-[#8C3038]">SOMETHING.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#8E7D70] font-sans-clean max-w-md leading-relaxed">
              Open to opportunities, internships, collaborations and interesting technology projects.
            </p>

            {/* Direct Contact Cards List */}
            <div className="space-y-3.5 pt-2">
              {/* EMAIL */}
              <div
                onClick={() => handleCopy(PERSONAL_INFO.email)}
                className="p-4 bg-[#171313] border border-[#F1E4D4]/14 flex items-center justify-between group hover:border-[#8C3038] transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-[#211A1A] border border-[#F1E4D4]/10 flex items-center justify-center text-[#8C3038]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">
                      EMAIL (CLICK TO COPY)
                    </p>
                    <p className="text-xs sm:text-sm text-[#F1E4D4] font-mono-tech font-medium group-hover:text-[#8C3038] transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 text-[#8E7D70] hover:text-[#F1E4D4] transition-colors focus:outline-none"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LOCATION */}
              <div className="p-4 bg-[#171313] border border-[#F1E4D4]/14 flex items-center gap-3.5 group hover:border-[#8C3038] transition-colors">
                <div className="w-9 h-9 bg-[#211A1A] border border-[#F1E4D4]/10 flex items-center justify-center text-[#8C3038]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8E7D70] font-mono-tech">
                    LOCATION
                  </p>
                  <p className="text-xs sm:text-sm text-[#F1E4D4] font-mono-tech uppercase">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* DIRECT ACTION BUTTONS: EMAIL ME, LINKEDIN, GITHUB */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  data-cursor="open"
                  className="py-3 px-3 bg-[#8C3038] hover:bg-[#A33842] text-[#F1E4D4] flex items-center justify-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  <span>EMAIL ME</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  data-cursor="open"
                  className="py-3 px-3 bg-[#171313] border border-[#F1E4D4]/20 hover:border-[#8C3038] hover:text-[#F1E4D4] text-[#D7C4B2] flex items-center justify-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider transition-colors text-center cursor-interactive"
                  title="Open LinkedIn Profile (Sabitha Saravanan)"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-[#8E7D70]" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="py-3 px-3 bg-[#171313] border border-[#F1E4D4]/20 hover:border-[#8C3038] hover:text-[#F1E4D4] text-[#D7C4B2] flex items-center justify-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider transition-colors text-center"
                >
                  <span>GITHUB</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-[#8E7D70]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div
            className={`lg:col-span-7 bg-[#171313] border border-[#F1E4D4]/14 p-8 sm:p-10 relative transition-all duration-800 delay-200 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#F1E4D4]/10">
              <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#8E7D70]">
                CORRESPONDENCE FORM
              </span>
              <span className="text-[11px] font-mono-tech text-[#8C3038]">
                DIRECT INBOX DISPATCH
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#211A1A] border border-[#8C3038] flex items-center justify-center text-[#8C3038]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F1E4D4] tracking-wide">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-xs sm:text-sm text-[#8E7D70] font-sans-clean max-w-md leading-relaxed">
                  Thank you for your correspondence. Your inquiry has been logged, and I will reply directly to your email address promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 btn-editorial-outline text-xs"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* NAME */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-mono-tech text-[#D7C4B2]"
                    >
                      NAME <span className="text-[#8C3038]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-[#100D0D] border border-[#F1E4D4]/14 text-sm text-[#F1E4D4] placeholder-[#8E7D70]/40 focus:outline-none focus:border-[#8C3038] transition-colors font-sans-clean"
                    />
                    {formErrors.name && (
                      <p className="text-[11px] font-mono-tech text-rose-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider font-mono-tech text-[#D7C4B2]"
                    >
                      EMAIL <span className="text-[#8C3038]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-3 bg-[#100D0D] border border-[#F1E4D4]/14 text-sm text-[#F1E4D4] placeholder-[#8E7D70]/40 focus:outline-none focus:border-[#8C3038] transition-colors font-sans-clean"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] font-mono-tech text-rose-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* SUBJECT */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs uppercase tracking-wider font-mono-tech text-[#D7C4B2]"
                  >
                    SUBJECT <span className="text-[#8C3038]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full px-4 py-3 bg-[#100D0D] border border-[#F1E4D4]/14 text-sm text-[#F1E4D4] placeholder-[#8E7D70]/40 focus:outline-none focus:border-[#8C3038] transition-colors font-sans-clean"
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] font-mono-tech text-rose-400">{formErrors.subject}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider font-mono-tech text-[#D7C4B2]"
                  >
                    MESSAGE <span className="text-[#8C3038]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details of the opportunity, project context, or inquiry..."
                    className="w-full px-4 py-3 bg-[#100D0D] border border-[#F1E4D4]/14 text-sm text-[#F1E4D4] placeholder-[#8E7D70]/40 focus:outline-none focus:border-[#8C3038] transition-colors resize-none font-sans-clean"
                  />
                  {formErrors.message && (
                    <p className="text-[11px] font-mono-tech text-rose-400">{formErrors.message}</p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full btn-editorial-primary py-4 flex items-center justify-center gap-2 cursor-interactive"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
