// CertificationsSection.jsx
import React from 'react';
import Tag from '../../components/ui/Tag';

const certifications = [
  {
    name: 'Programming with JavaScript by Meta',
    link: 'https://coursera.org/share/b6afcb232efaff52f5a2cb2ee9b26092',
  },
  {
    name: 'Machine Learning, ML by KTH, The Royal Institute Of Technology, Sweden',
    link: 'https://drive.google.com/file/d/1V4K5HGOBBr0LhGG6dTZgxpR5eDtBU64W/view?usp=sharing',
  },
];

const CertificationsSection = () => (
  <section className="py-16 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="mb-12 relative">
        <Tag variant="peach" className="mb-4">
          Certifications
        </Tag>
        <img
          src="/images/img_arrow_84x88.svg"
          alt="Arrow"
          className="absolute left-32 top-3 w-20 h-20"
        />
      </div>
      <ul className="space-y-6">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg shadow p-6 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <span className="text-xl text-[#0c0c0c] mb-2 md:mb-0">{cert.name}</span>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mint text-black px-6 py-2 rounded-full font-medium shadow hover:bg-lavender hover:text-[#5ab5e8] focus:outline-none focus:ring-2 focus:ring-mint transition-all duration-200 text-lg animate-fade-in"
              style={{ minWidth: 120, textAlign: 'center' }}
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CertificationsSection;
