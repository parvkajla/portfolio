'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ProjectsSection.module.css';

const PROJECTS = [
  {
    title: 'Canopy Sentinel',
    description:
      'An AI-powered environmental monitoring platform that uses satellite imagery and geospatial intelligence to detect deforestation, visualize forest changes, and generate actionable insights for conservation efforts.',
    link: 'https://github.com/parvkajla/Canopy-Sentinel.git',
    tags: ['AI/ML', 'Satellite Imagery', 'GIS', 'Conservation'],
  },
  {
    title: 'EcoX Watch',
    description:
      'A real-time AI-based waste detection and evidence management system that automatically identifies illegal waste dumping using computer vision and provides a dashboard for monitoring, reporting, and analytics.',
    link: 'https://github.com/parvkajla/EcoX-Watch.git',
    tags: ['Computer Vision', 'Real-time', 'Dashboard', 'Analytics'],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let scrollTriggerInstance;

    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = sectionRef.current.querySelectorAll('[data-project]');

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

        /* Section header */
        const header = sectionRef.current.querySelector('[data-header]');
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
    <section ref={sectionRef} className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header} data-header>
          <span className={styles.sectionLabel}>Work</span>
          <h2 className={styles.title}>
            Featured <span className={styles.accent}>Projects</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              data-project
              id={`project-card-${i}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.projectNumber}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <svg
                    className={styles.arrowIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardGlow} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
