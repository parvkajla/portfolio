'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 2.5 }
      );
    });

    /* Fade out on scroll */
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 300);
      ref.current.style.opacity = opacity;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <button
      ref={ref}
      className={styles.indicator}
      onClick={handleClick}
      aria-label="Scroll to content"
      id="scroll-indicator"
    >
      <span className={styles.label}>Scroll</span>
      <span className={styles.line} />
    </button>
  );
}
