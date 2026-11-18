'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ResumeSection.module.css';

const RESUME_VIEW_URL =
  'https://drive.google.com/file/d/12KIB6yl-Fn1CEXth0Aw4NjLAJXpYGan3/view?usp=drive_link';
const RESUME_DOWNLOAD_URL =
  'https://drive.google.com/uc?export=download&id=12KIB6yl-Fn1CEXth0Aw4NjLAJXpYGan3';

export default function ResumeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let scrollTriggerInstance;

    // Dynamically register GSAP ScrollTrigger for client-side entrance animations
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const infoCol = sectionRef.current?.querySelector('[data-resume-info]');
        const visualCol = sectionRef.current?.querySelector('[data-resume-visual]');

        if (infoCol) {
          gsap.fromTo(
            infoCol,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: infoCol,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (visualCol) {
          gsap.fromTo(
            visualCol,
            { opacity: 0, y: 60, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: visualCol,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: 0.15,
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
      id="resume"
      aria-label="Resume and Experience Overview"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* ── Left Content Column ── */}
          <div className={styles.infoCol} data-resume-info>
            <span className={styles.sectionLabel}>Overview &amp; Experience</span>
            <h2 className={styles.title}>
              My <span className={styles.accent}>Resume</span>
            </h2>
            <p className={styles.description}>
              Explore my experience, technical skills, projects, certifications,
              and achievements — synthesized into a comprehensive overview of my
              engineering journey.
            </p>

            {/* ── Quick Highlights Grid ── */}
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  AI &amp; Computer Vision Engineering
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  Full-Stack &amp; Scalable Cloud Architectures
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  Competitive Problem Solving &amp; Hackathons
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  B.Tech in Computer Science
                </div>
              </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className={styles.ctaGroup}>
              <a
                href={RESUME_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
                aria-label="View my resume in a new tab"
                id="btn-view-resume"
              >
                <span>View Resume</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <a
                href={RESUME_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
                aria-label="Download my resume as PDF"
                id="btn-download-resume"
              >
                <span>Download Resume</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            {/* ── Status note ── */}
            <div className={styles.note}>
              <span className={styles.noteDot} aria-hidden="true" />
              <span>Verified PDF document hosted on Google Drive</span>
            </div>
          </div>

          {/* ── Right Visual Area (Stylized Interactive Document Mockup) ── */}
          <div className={styles.visualCol} data-resume-visual>
            <div className={styles.ambientGlow} aria-hidden="true" />

            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.docCard}
              aria-label="Preview Parv Kajla's Resume (opens in new tab)"
            >
              <div className={styles.docHeader}>
                <div className={styles.docIdentity}>
                  <div className={styles.docAvatar}>PK</div>
                  <div className={styles.docNameBlock}>
                    <span className={styles.docName}>Parv Kajla</span>
                    <span className={styles.docRole}>AI &amp; ML Engineer</span>
                  </div>
                </div>

                <div className={styles.pdfBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>PDF</span>
                </div>
              </div>

              <div className={styles.docBody}>
                <div className={styles.docSection}>
                  <div className={styles.docSectionTitle}>Core Competencies</div>
                  <div className={styles.docPills}>
                    <span className={styles.docPill}>Computer Vision</span>
                    <span className={styles.docPill}>Machine Learning</span>
                    <span className={styles.docPill}>Python</span>
                    <span className={styles.docPill}>Java</span>
                    <span className={styles.docPill}>Next.js</span>
                    <span className={styles.docPill}>Cloud (AWS)</span>
                  </div>
                </div>

                <div className={styles.docSection}>
                  <div className={styles.docSectionTitle}>Selected Projects</div>
                  <div className={styles.docProjectList}>
                    <div className={styles.docProjectItem}>
                      <span className={styles.docProjectName}>Canopy Sentinel</span>
                      <span className={styles.docProjectTag}>Satellite AI • GIS</span>
                    </div>
                    <div className={styles.docProjectItem}>
                      <span className={styles.docProjectName}>EcoX Watch</span>
                      <span className={styles.docProjectTag}>Vision • Analytics</span>
                    </div>
                    <div className={styles.docProjectItem}>
                      <span className={styles.docProjectName}>OrbitalGuard-AI</span>
                      <span className={styles.docProjectTag}>Space Situational Awareness</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.docFooter}>
                <div className={styles.docStatus}>
                  <span className={styles.pulseDot} aria-hidden="true" />
                  <span>Available for Opportunities</span>
                </div>

                <div className={styles.docHoverCta}>
                  <span>Click to view</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

