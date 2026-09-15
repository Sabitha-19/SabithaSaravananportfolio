import React, { useEffect, useState } from 'react';

interface EditorialPreloaderProps {
  onComplete?: () => void;
}

export const EditorialPreloader: React.FC<EditorialPreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  const [isRendered, setIsRendered] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has already seen the intro this session
    const hasVisited = sessionStorage.getItem('sabitha_intro_seen');
    if (hasVisited) {
      setIsRendered(false);
      if (onComplete) onComplete();
      return;
    }

    // Sequence timings (all in ms)
    // 0.2s: SABITHA S. fades in (stage 1)
    const t1 = setTimeout(() => setStage(1), 200);
    // 0.4s: B.TECH ISE · 2027 appears (stage 2)
    const t2 = setTimeout(() => setStage(2), 400);
    // 0.6s: Line expands (stage 3)
    const t3 = setTimeout(() => setStage(3), 600);
    // 0.8s: Content begins revealing (stage 4)
    const t4 = setTimeout(() => {
      setStage(4);
      if (onComplete) onComplete();
    }, 850);
    // 1.2s - 1.3s: Intro completes and unmounts
    const t5 = setTimeout(() => {
      setIsRendered(false);
      sessionStorage.setItem('sabitha_intro_seen', 'true');
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#100D0D] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ease-out ${
        stage >= 4 ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="text-center flex flex-col items-center px-6">
        {/* Name: 0.2s reveal */}
        <h1
          className={`font-serif-editorial text-2xl sm:text-3xl md:text-4xl tracking-[0.18em] text-[#F1E4D4] font-medium transition-all duration-400 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          SABITHA S.
        </h1>

        {/* Subtitle: 0.4s reveal */}
        <p
          className={`text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D7C4B2] font-mono-tech mt-2.5 transition-all duration-400 ease-out ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          B.TECH ISE · 2027
        </p>

        {/* Expanding Center Line: 0.6s */}
        <div className="h-[1px] bg-[#8C3038] mt-5 overflow-hidden transition-all duration-500 ease-out"
          style={{
            width: stage >= 3 ? '180px' : '0px',
            opacity: stage >= 3 ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};
