import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/images/img_vector.svg" alt="Logo" className="w-12 h-12" />
              <span className="ml-2 text-3xl font-handlee text-[#0c0c0c]">Ala Sai Harsha</span>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex items-center justify-center bg-[#0077b5] hover:bg-[#005983] text-white rounded-full p-2 transition-colors duration-200"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/sai-harsha-ala-370773239/',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                aria-label="My LinkedIn profile"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-[#24292f] hover:bg-[#1b1f23] text-white rounded-full p-2 transition-colors duration-200"
                onClick={() =>
                  window.open(
                    'https://github.com/SaiHarsha502vvit',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                aria-label="My Github profile"
              >
                <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-[#706e6e]">
              &copy; {new Date().getFullYear()} Ala Sai Harsha. All rights reserved.
            </p>
            <p className="text-lg text-[#706e6e]">
              Designed and developed with ❤️ by Ala Sai Harsha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
