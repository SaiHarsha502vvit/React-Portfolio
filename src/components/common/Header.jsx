import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '#hero' },
  { name: 'About', to: '#about' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#portfolio' },
  { name: 'Certifications', to: '#certifications' },
  { name: 'Achievements', to: '#achievements' },
  { name: 'Contact', to: '#contact' },
];

const scrollToSection = (e, to) => {
  if (to.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for sticky header
        behavior: 'smooth',
      });
    }
  }
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center gap-10">
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => {
            scrollToSection(e, '#');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/images/img_vector.svg" alt="Logo" className="w-12 h-12" />
          <span className="ml-2 text-3xl font-handlee text-[#0c0c0c] text-nowrap">
            Ala Sai Harsha
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-1 bg-mint/60 rounded-full px-4 py-2 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              onClick={(e) => scrollToSection(e, link.to)}
              className="text-lg font-medium text-[#0c0c0c] px-3 py-1 rounded-full transition-all duration-200 hover:bg-lavender hover:text-[#5ab5e8] focus:outline-none focus:ring-2 focus:ring-mint"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            className="p-2 rounded-full bg-mint hover:bg-lavender transition"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#0c0c0c"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex flex-col md:hidden">
          <div className="bg-mint rounded-b-3xl shadow-lg mx-2 mt-2 p-6 animate-fade-in flex flex-col gap-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-handlee text-[#0c0c0c]">Menu</span>
              <button
                className="p-2 rounded-full bg-lavender hover:bg-mint transition"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0c0c0c"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => {
                  scrollToSection(e, link.to);
                  setMobileOpen(false);
                }}
                className="text-lg font-medium text-[#0c0c0c] px-3 py-2 rounded-full transition-all duration-200 hover:bg-lavender hover:text-[#5ab5e8] focus:outline-none focus:ring-2 focus:ring-mint"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
