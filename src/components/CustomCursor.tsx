import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const profileEl = target.closest('[data-cursor="profile"]');
      const linkEl = target.closest('a[target="_blank"], [data-cursor="open"]');
      const interactiveEl = target.closest('button, a, input, textarea, select, .cursor-interactive, [role="button"]');

      if (projectEl) {
        setIsExpanded(true);
        setCursorText('VIEW');
      } else if (profileEl) {
        setIsExpanded(true);
        setCursorText('EXPLORE');
      } else if (linkEl) {
        setIsExpanded(true);
        setCursorText('OPEN ↗');
      } else if (interactiveEl) {
        setIsExpanded(true);
        setCursorText('');
      } else {
        setIsExpanded(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp follower loop
    const animateFollower = () => {
      currentPosRef.current.x += (mouseRef.current.x - currentPosRef.current.x) * 0.22;
      currentPosRef.current.y += (mouseRef.current.y - currentPosRef.current.y) * 0.22;
      setFollowerPos({ x: currentPosRef.current.x, y: currentPosRef.current.y });
      requestRef.current = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden ${isExpanded ? 'custom-cursor-expanded' : ''}`}>
      {/* Small center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Trailing follower circle */}
      <div
        className="custom-cursor-follower"
        style={{
          transform: `translate3d(${followerPos.x}px, ${followerPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="custom-cursor-text">{cursorText}</span>
        )}
      </div>
    </div>
  );
};
