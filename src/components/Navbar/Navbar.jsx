'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── scroll detection for blur background ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── smooth scroll to section ── */
  const scrollTo = useCallback((targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        id="main-navbar"
      >
        <div className={styles.inner}>
          {/* ── Logo ── */}
          <button
            className={styles.logo}
            onClick={() => scrollTo('home')}
            aria-label="Go to home"
          >
            PK<span className={styles.logoDot}>.</span>
          </button>

          {/* ── Desktop nav links ── */}
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <button
                  className={styles.navLink}
                  onClick={() => scrollTo(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── CTA + Hamburger ── */}
          <div className={styles.navRight}>
            <button
              className={styles.ctaBtn}
              onClick={() => scrollTo('contact')}
              id="nav-lets-talk"
            >
              Let&apos;s Talk
            </button>

            {/* ── Hamburger (mobile) ── */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              id="hamburger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay menu ── */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <button
                className={styles.mobileLink}
                onClick={() => scrollTo(item.target)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className={styles.mobileCta}
              onClick={() => scrollTo('contact')}
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
