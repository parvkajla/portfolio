import Navbar from '@/components/Navbar/Navbar';
import VideoHero from '@/components/VideoHero/VideoHero';
import CinematicLayer from '@/components/CinematicLayer/CinematicLayer';
import HeroContent from '@/components/HeroContent/HeroContent';
import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator';
import AboutSection from '@/components/AboutSection/AboutSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import CodingSection from '@/components/CodingSection/CodingSection';
import ResumeSection from '@/components/ResumeSection/ResumeSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Sticky Hero Block ── */}
      <div className={styles.heroBlock} id="home">
        <VideoHero />
        <CinematicLayer />
        <HeroContent />
        <ScrollIndicator />
      </div>

      {/* ── Content Sections ── */}
      <AboutSection />
      <ProjectsSection />
      <CodingSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
