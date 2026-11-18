'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GitHubCard from './GitHubCard';
import LeetCodeCard from './LeetCodeCard';
import styles from './CodingSection.module.css';

export default function CodingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let scrollTriggerInstance;

    // Dynamically register GSAP ScrollTrigger for client-side entrance animations
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll('[data-profile-card]');

        if (cards) {
          cards.forEach((card, i) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 60, rotateX: 4 },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  end: 'top 50%',
                  toggleActions: 'play none none reverse',
                },
                delay: i * 0.15,
              }
            );
          });
        }

        const header = sectionRef.current?.querySelector('[data-header]');
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }, sectionRef);

      scrollTriggerInstance = ctx;
    });

    return () => {
      if (scrollTriggerInstance) scrollTriggerInstance.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="coding"
      aria-label="Coding and Developer Profiles"
    >
      <div className={styles.container}>
        <div className={styles.header} data-header>
          <span className={styles.sectionLabel}>Profiles &amp; Activity</span>
          <h2 className={styles.title}>
            Coding &amp; <span className={styles.accent}>Profiles</span>
          </h2>
          <p className={styles.subtitle}>
            Explore my coding journey, open-source work, and problem-solving activity.
          </p>
        </div>

        <div className={styles.grid}>
          <GitHubCard />
          <LeetCodeCard />
        </div>
      </div>
    </section>
  );
}

