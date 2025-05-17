import React, { useEffect, useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import AchievementsSection from './AchievementsSection';
import PositionsSection from './PositionsSection';
import AboutSection from './AboutSection';

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Set background image
    document.body.style.backgroundImage = "url('/images/img_bg_patterns.png')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    // Scroll reveal
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-left')) {
              entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.18 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      document.body.style.backgroundImage = '';
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-[180vh] bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <section id="hero" ref={(el) => (sectionRefs.current[0] = el)} className="reveal">
          <HeroSection />
        </section>
        <section id="about" ref={(el) => (sectionRefs.current[1] = el)} className="reveal">
          <AboutSection />
        </section>
        <section id="skills" ref={(el) => (sectionRefs.current[2] = el)} className="reveal">
          <SkillsSection />
        </section>
        <section id="portfolio" ref={(el) => (sectionRefs.current[3] = el)} className="reveal">
          <PortfolioSection />
        </section>
        <section id="certifications" ref={(el) => (sectionRefs.current[4] = el)} className="reveal">
          <CertificationsSection />
        </section>
        <section id="achievements" ref={(el) => (sectionRefs.current[5] = el)} className="reveal">
          <AchievementsSection />
        </section>
        <section id="positions" ref={(el) => (sectionRefs.current[6] = el)} className="reveal">
          <PositionsSection />
        </section>
        <section id="contact" ref={(el) => (sectionRefs.current[7] = el)} className="reveal">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
