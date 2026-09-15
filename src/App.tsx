import { useState, useEffect } from 'react';
import { EditorialPreloader } from './components/EditorialPreloader';
import { EditorialHeader } from './components/EditorialHeader';
import { EditorialMenuOverlay } from './components/EditorialMenuOverlay';
import { EditorialHero } from './components/EditorialHero';
import { EditorialAbout } from './components/EditorialAbout';
import { EditorialSkills } from './components/EditorialSkills';
import { EditorialExperience } from './components/EditorialExperience';
import { EditorialProjects } from './components/EditorialProjects';
import { EditorialEducation } from './components/EditorialEducation';
import { EditorialCertifications } from './components/EditorialCertifications';
import { EditorialContact } from './components/EditorialContact';
import { EditorialFooter } from './components/EditorialFooter';
import { EditorialResumeModal } from './components/EditorialResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#100D0D] text-[#F1E4D4] font-sans-clean selection:bg-[#8C3038] selection:text-[#F1E4D4] relative">
      {/* Desktop Editorial Custom Cursor */}
      <CustomCursor />

      {/* Vertical Minimal Scroll Progress & Active Section Counter */}
      <ScrollProgressIndicator />

      {/* 1. Subtle Editorial Preloader */}
      <EditorialPreloader />

      {/* Top Thin Burgundy Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <div
          className="h-full bg-[#8C3038] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Top Minimal Header with Hamburger Only */}
      <EditorialHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* 3. Full-Screen Editorial Navigation Overlay */}
      <EditorialMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Structural Flow */}
      <main className="w-full">
        {/* 01. Hero / Introduction with Profile Card Parallax */}
        <EditorialHero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 01. About Section */}
        <EditorialAbout onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 02. Skills & Compendium */}
        <EditorialSkills />

        {/* 03. Work Experience Timeline (All Onsite Internships) */}
        <EditorialExperience />

        {/* 04. Selected Projects (All 5 Equal) */}
        <EditorialProjects />

        {/* 05. Education History */}
        <EditorialEducation />

        {/* 06. Licenses & Certifications */}
        <EditorialCertifications />

        {/* 07. Contact & Validated Correspondence Form */}
        <EditorialContact />
      </main>

      {/* Clean Editorial Footer */}
      <EditorialFooter />

      {/* Digital Curriculum Vitae Modal */}
      <EditorialResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
