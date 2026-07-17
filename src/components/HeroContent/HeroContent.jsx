'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './HeroContent.module.css';

export default function HeroContent() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.6,
      });

      tl.fromTo(
        `.${styles.tagline}`,
        { opacity: 0, y: 30, letterSpacing: '0.35em' },
        { opacity: 1, y: 0, letterSpacing: '0.2em', duration: 1.2 }
      )
        .fromTo(
          `.${styles.firstName}`,
          { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.4 },
          '-=0.7'
        )
        .fromTo(
          `.${styles.lastName}`,
          { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.4 },
          '-=1.0'
        )
        .fromTo(
          `.${styles.subtitle}`,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.6'
        )
        .fromTo(
          `.${styles.divider}`,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.0, ease: 'power2.inOut' },
          '-=0.5'
        )
        .fromTo(
          `.${styles.ctaGroup}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className={styles.content}>
      <div className={styles.textBlock}>
        <p className={styles.tagline}>AI &amp; ML Engineer &bull; Builder &bull; Creator</p>

        <h1 className={styles.nameBlock}>
          <span className={styles.firstName}>PARV</span>
          <span className={styles.lastName}>KAJLA</span>
        </h1>

        <div className={styles.divider} />

        <p className={styles.subtitle}>
          Building AI-powered applications that create real-world impact
        </p>

        <div className={styles.ctaGroup}>
          <button
            className={styles.ctaPrimary}
            onClick={() => scrollToSection('projects')}
            id="hero-cta-projects"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            className={styles.ctaSecondary}
            onClick={() => scrollToSection('contact')}
            id="hero-cta-contact"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
