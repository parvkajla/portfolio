'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    /* Dynamically import ScrollTrigger to keep it client-only */
    let scrollTriggerInstance;

    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const elements = sectionRef.current.querySelectorAll('[data-animate]');

        elements.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 50%',
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

  const skills = [
    'Artificial Intelligence & Machine Learning',
    'Computer Vision',
    'Full-Stack Development',
    'Cloud Computing (AWS Learner)',
  ];

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.header} data-animate>
          <span className={styles.sectionLabel}>About</span>
          <h2 className={styles.title}>
            The Builder&apos;s <span className={styles.accent}>Mindset</span>
          </h2>
        </div>

        <div className={styles.body}>
          <div className={styles.textCol} data-animate>
            <p className={styles.paragraph}>
              Every meaningful project begins with a problem worth solving. I&apos;m
              passionate about building AI-powered applications that create
              real-world impact. From developing intelligent computer vision
              systems to training ML models, I enjoy transforming ideas into
              practical solutions.
            </p>
            <p className={styles.paragraph}>
              Through hackathons, personal projects, and continuous learning,
              I&apos;m constantly improving my skills in Artificial Intelligence,
              Machine Learning, Computer Vision, and Cloud Technologies. I
              believe great software is not just about writing code—it&apos;s about
              solving problems that matter.
            </p>
          </div>

          <div className={styles.skillsCol} data-animate>
            <div className={styles.skillsList}>
              {skills.map((skill, i) => (
                <div className={styles.skillBadge} key={i}>
                  <span className={styles.skillDot} />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.quoteBlock} data-animate>
          <blockquote className={styles.quote}>
            &ldquo;Building technology that solves real problems, one project at a
            time.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
