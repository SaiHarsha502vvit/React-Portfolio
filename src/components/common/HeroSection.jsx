import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="relative ml-4">
                <img
                  src="/images/img_arrow.svg"
                  alt="Arrow"
                  className="absolute left-56 -top-2 w-16 h-20"
                />
                <div className="bg-[#ffc100] px-4 py-1 shadow-md">
                  <span className="font-handlee text-3xl">Ala Sai Harsha</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <h1 className="text-5xl font-semibold leading-tight mb-4">
                I Create Top Notch
                <br />
                Web Applications
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl text-wrap font-bold mb-6 leading-relaxed">
              I craft with design, enchant with code,
              <br />
              and summon your website
              <br />
              to live and glow
              <br />
              across the magical web.
            </p>
            <div>
              <Button variant="primary" className="px-6 py-4 text-2xl font-semibold">
                Hire me
              </Button>
              <a href="/Ala_Sai_Harsha.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="ml-4 px-6 py-4 text-2xl font-semibold">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
