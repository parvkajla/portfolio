'use client';

import styles from './CodingSection.module.css';

const LEETCODE_DATA = {
  handle: '@ParvKajla',
  url: 'https://leetcode.com/u/ParvKajla/',
  totalSolved: 239,
  breakdown: {
    easy: 83,
    medium: 124,
    hard: 32,
  },
  primaryLanguage: 'Java',
  primaryLangSolved: 239,
  badgesCount: 3,
  skills: [
    'Dynamic Programming',
    'Binary Search',
    'Hash Table',
    'Math',
    'Sorting',
    'Arrays',
  ],
};

export default function LeetCodeCard() {
  const { easy, medium, hard } = LEETCODE_DATA.breakdown;
  const total = LEETCODE_DATA.totalSolved;

  const easyPct = ((easy / total) * 100).toFixed(1);
  const medPct = ((medium / total) * 100).toFixed(1);
  const hardPct = ((hard / total) * 100).toFixed(1);

  return (
    <article
      className={`${styles.card} ${styles.leetcodeCard}`}
      data-profile-card
      id="profile-card-leetcode"
    >
      <div>
        {/* ── Top Bar ── */}
        <div className={styles.cardTop}>
          <div className={`${styles.iconWrap} ${styles.leetcodeIconWrap}`} aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="LeetCode Logo"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>

          <div className={styles.statusBadge}>
            <span className={styles.badgeStar} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span>{LEETCODE_DATA.badgesCount} Badges Earned</span>
          </div>
        </div>

        {/* ── Identity & Description ── */}
        <div className={styles.identityBlock}>
          <div className={styles.platformHeader}>
            <h3 className={styles.platformName}>LeetCode</h3>
            <span className={`${styles.userHandle} ${styles.leetcodeHandle}`}>
              {LEETCODE_DATA.handle}
            </span>
          </div>
          <p className={styles.description}>
            Practicing data structures, algorithms, and problem solving.
          </p>
        </div>

        {/* ── Key Metrics ── */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>{LEETCODE_DATA.totalSolved}</span>
            <span className={styles.metricLabel}>Problems Solved</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>{LEETCODE_DATA.primaryLanguage}</span>
            <span className={styles.metricLabel}>{LEETCODE_DATA.primaryLangSolved} Solved</span>
          </div>
          <div className={styles.metricItem}>
            <span className={styles.metricValue}>{LEETCODE_DATA.badgesCount}</span>
            <span className={styles.metricLabel}>Annual Badges</span>
          </div>
        </div>

        {/* ── Difficulty Breakdown & Distribution Bar ── */}
        <div className={styles.difficultySection}>
          <div className={styles.difficultyRow}>
            <div className={styles.diffBadge}>
              <span className={`${styles.diffDot} ${styles.easyBg}`} aria-hidden="true" />
              <span className={styles.easyColor}>Easy</span>
              <span className={styles.diffCount}>{easy}</span>
            </div>
            <div className={styles.diffBadge}>
              <span className={`${styles.diffDot} ${styles.mediumBg}`} aria-hidden="true" />
              <span className={styles.mediumColor}>Medium</span>
              <span className={styles.diffCount}>{medium}</span>
            </div>
            <div className={styles.diffBadge}>
              <span className={`${styles.diffDot} ${styles.hardBg}`} aria-hidden="true" />
              <span className={styles.hardColor}>Hard</span>
              <span className={styles.diffCount}>{hard}</span>
            </div>
          </div>

          <div
            className={styles.progressBar}
            role="progressbar"
            aria-label="Problem solving distribution by difficulty"
            aria-valuenow={total}
            aria-valuemin="0"
            aria-valuemax={total}
          >
            <div
              className={styles.progressEasy}
              style={{ width: `${easyPct}%` }}
              title={`Easy: ${easy} (${easyPct}%)`}
            />
            <div
              className={styles.progressMedium}
              style={{ width: `${medPct}%` }}
              title={`Medium: ${medium} (${medPct}%)`}
            />
            <div
              className={styles.progressHard}
              style={{ width: `${hardPct}%` }}
              title={`Hard: ${hard} (${hardPct}%)`}
            />
          </div>
        </div>

        {/* ── Core Skills / Topics ── */}
        <div className={styles.tagsSection}>
          <span className={styles.tagsLabel}>Algorithmic Domains</span>
          <div className={styles.tagsList}>
            {LEETCODE_DATA.skills.map((skill, idx) => (
              <span key={idx} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Action / Button ── */}
      <div className={styles.actionArea}>
        <a
          href={LEETCODE_DATA.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.profileBtn} ${styles.leetcodeBtn}`}
          aria-label="View Parv Kajla's LeetCode Profile (opens in new tab)"
        >
          <span>View LeetCode Profile</span>
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
      <div className={`${styles.cardGlow} ${styles.leetcodeGlow}`} aria-hidden="true" />
    </article>
  );
}

