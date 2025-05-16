import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import AchievementsSection from './AchievementsSection';
import PositionsSection from './PositionsSection';

const Home = () => {
  useEffect(() => {
    // Set background image
    document.body.style.backgroundImage = "url('/images/img_bg_patterns.png')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="min-h-[180vh] bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="certifications">
          <CertificationsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="positions">
          <PositionsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
