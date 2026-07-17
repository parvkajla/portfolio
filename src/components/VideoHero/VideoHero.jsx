'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import styles from './VideoHero.module.css';

export default function VideoHero() {
  const containerRef = useRef(null);
  const fgVideoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const soundHintRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);        // default unmuted
  const [showSoundHint, setShowSoundHint] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);  // autoplay fallback

  /* ── attempt autoplay with audio ── */
  useEffect(() => {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;
    if (!fg) return;

    // Background video is always muted
    if (bg) {
      bg.muted = true;
      bg.play().catch(() => {});
    }

    // Try playing foreground with audio
    fg.muted = false;
    const playPromise = fg.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay with sound succeeded
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser blocked autoplay with sound — show overlay
          fg.pause();
          setShowOverlay(true);
          setIsMuted(true);
          setIsPlaying(false);
        });
    }
  }, []);

  /* ── overlay click: start experience ── */
  const handleEnterExperience = useCallback(() => {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;

    if (fg) {
      fg.muted = false;
      fg.play();
    }
    if (bg) {
      bg.play();
    }

    setIsMuted(false);
    setIsPlaying(true);
    setShowOverlay(false);
  }, []);

  /* ── entrance animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  /* ── auto-hide sound hint ── */
  useEffect(() => {
    if (!showSoundHint) return;
    const timer = setTimeout(() => {
      if (soundHintRef.current) {
        gsap.to(soundHintRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => setShowSoundHint(false),
        });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [showSoundHint]);

  /* ── play / pause ── */
  const togglePlay = useCallback(() => {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;
    if (!fg) return;

    if (fg.paused) {
      fg.play();
      bg?.play();
      setIsPlaying(true);
    } else {
      fg.pause();
      bg?.pause();
      setIsPlaying(false);
    }
  }, []);

  /* ── mute / unmute ── */
  const toggleMute = useCallback(() => {
    const fg = fgVideoRef.current;
    if (!fg) return;
    fg.muted = !fg.muted;
    setIsMuted(fg.muted);
    setShowSoundHint(false);
  }, []);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      {/* ── autoplay fallback overlay ── */}
      {showOverlay && (
        <div className={styles.autoplayOverlay} id="autoplay-overlay">
          <button
            className={styles.enterBtn}
            onClick={handleEnterExperience}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Click to Enter Experience
          </button>
        </div>
      )}

      {/* ── ambient blurred background video ── */}
      <div className={styles.ambientLayer}>
        <video
          ref={bgVideoRef}
          className={styles.ambientVideo}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          suppressHydrationWarning
        />
      </div>

      {/* ── foreground video ── */}
      <div className={styles.videoWrapper}>
        <video
          ref={fgVideoRef}
          className={styles.foregroundVideo}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          suppressHydrationWarning
        />
      </div>

      {/* ── cinematic gradient overlays ── */}
      <div className={styles.gradientTop} />
      <div className={styles.gradientBottom} />
      <div className={styles.gradientRadial} />
      <div className={styles.gradientVignette} />
      <div className={styles.videoFadeLeft} />

      {/* ── controls ── */}
      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          id="video-play-pause"
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <button
          className={styles.controlBtn}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          id="video-mute-unmute"
        >
          {isMuted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      {/* ── sound hint badge ── */}
      {showSoundHint && (
        <button
          ref={soundHintRef}
          className={styles.soundHint}
          onClick={toggleMute}
          id="sound-hint-badge"
        >
          <span className={styles.soundHintDot} />
          Tap for sound
        </button>
      )}
    </div>
  );
}
