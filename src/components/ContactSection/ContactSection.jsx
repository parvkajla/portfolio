'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let scrollTriggerInstance;

    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const elements = sectionRef.current.querySelectorAll('[data-animate]');

        elements.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: i * 0.1,
            }
          );
        });
      }, sectionRef);

      scrollTriggerInstance = ctx;
    });

    return () => {
      if (scrollTriggerInstance) scrollTriggerInstance.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header} data-animate>
          <span className={styles.sectionLabel}>Connect</span>
          <h2 className={styles.title}>
            Let&apos;s <span className={styles.accent}>Talk</span>
          </h2>
        </div>

        <div className={styles.card} data-animate>
          <p className={styles.cardText}>
            Have an idea, a project, or just want to chat about AI and tech?
            I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:pforparv@gmail.com"
            className={styles.emailLink}
            id="contact-email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            pforparv@gmail.com
          </a>
        </div>

        <div className={styles.footer} data-animate>
          <p className={styles.footerText}>
            Designed &amp; built by Parv Kajla &bull; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
