import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] pt-32 pb-16 flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="text-center grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-32 animate-float ">
          {' '}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="relative ml-4 w-full flex justify-center">
                <img
                  src="/images/img_arrow.svg"
                  alt="Arrow"
                  className="absolute left-96 -top-2 w-16 h-20 hidden lg:block"
                />
                <div className="bg-[#ffc100] px-4 py-1 shadow-md mx-auto md:mx-0 text-center rounded-2xl">
                  <span className="font-handlee text-3xl">Ala Sai Harsha</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <h1 className="lg:text-6xl md:text-5xl font-semibold leading-tight mb-4 animate-zoom-slide-in">
                I Create Top Notch
                <br />
                Web Applications
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="text-3xl text-wrap font-bold mb-6 leading-relaxed animate-fade-in">
              I craft with design, enchant with code,
              <br />
              and summon your website
              <br />
              to live and glow
              <br />
              across the magical web.
            </p>
            <div className="animate-fade-in">
              <a
                href="https://www.linkedin.com/in/sai-harsha-ala-370773239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className="px-6 py-4 text-2xl font-semibold pastel-glow-hover"
                >
                  Hire me
                </Button>
              </a>
              <a href="/Ala_Sai_Harsha.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="ml-4 px-6 py-4 text-2xl font-semibold pastel-glow-hover"
                >
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
