'use client';

import { useState, useEffect } from 'react';
import styles from './CodingSection.module.css';

const DEFAULT_GITHUB = {
  repos: 17,
  followers: 2,
};

const GITHUB_TAGS = [
  'Python',
  'Java',
  'Kotlin',
  'TypeScript',
  'Next.js',
  'AI / ML',
];

export default function GitHubCard() {
  const [stats, setStats] = useState(DEFAULT_GITHUB);

  useEffect(() => {
    let isMounted = true;

    // Gracefully fetch live stats from the public GitHub REST API
    async function fetchGitHubData() {
      try {
        const res = await fetch('https://api.github.com/users/parvkajla');
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setStats({
              repos: typeof data.public_repos === 'number' ? data.public_repos : DEFAULT_GITHUB.repos,
              followers: typeof data.followers === 'number' ? data.followers : DEFAULT_GITHUB.followers,
            });
          }
        }
      } catch {
        // Fallback gracefully to stable verified profile metrics
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <article
      className={`${styles.card} ${styles.githubCard}`}
      data-profile-card
      id="profile-card-github"
    >
      <div>
        {/* ── Top Bar ── */}
        <div className={styles.cardTop}>
          <div className={`${styles.iconWrap} ${styles.githubIconWrap}`} aria-hidden="true">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="GitHub Logo"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>

          <div className={styles.statusBadge}>
            <span className={styles.statusPulse} aria-hidden="true" />
            <span>Open Source</span>
          </div>
        </div>

        {/* ── Identity & Description ── */}
        <div className={styles.identityBlock}>
          <div className={styles.platformHeader}>
            <h3 className={styles.platformName}>GitHub</h3>
            <span className={styles.userHandle}>@parvkajla</span>
          </div>
          <p className={styles.description}>
            AI &amp; ML developer building real-world applications and open-source projects.
          </p>
        </div>

        {/* ── Key Metrics ── */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>{stats.repos}</span>
            <span className={styles.metricLabel}>Repositories</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>{stats.followers}</span>
            <span className={styles.metricLabel}>Followers</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>4+</span>
            <span className={styles.metricLabel}>Languages</span>
          </div>
        </div>

        {/* ── Tech Highlights / Tags ── */}
        <div className={styles.tagsSection}>
          <span className={styles.tagsLabel}>Featured Stack &amp; Technologies</span>
          <div className={styles.tagsList}>
            {GITHUB_TAGS.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Action / Button ── */}
      <div className={styles.actionArea}>
        <a
          href="https://github.com/parvkajla"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.profileBtn} ${styles.githubBtn}`}
          aria-label="View Parv Kajla's GitHub Profile (opens in new tab)"
        >
          <span>View GitHub Profile</span>
          <svg
            className={styles.btnArrow}
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
      </div>

      {/* ── Ambient Radial Glow ── */}
      <div className={`${styles.cardGlow} ${styles.githubGlow}`} aria-hidden="true" />
    </article>
  );
}

