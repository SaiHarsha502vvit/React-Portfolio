// PositionsSection.jsx
import React from 'react';
import Tag from '../../components/ui/Tag';

const positions = [
  {
    title: 'Movie Appreciation club coordinator',
    period: 'June 2023 - March 2024',
    details: [
      'Conducted and Managed 5+ Events in College',
      'Conducted and Managed 4 Events in a span of 2 days',
    ],
  },
];

const PositionsSection = () => (
  <section className="py-16 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="mb-12 relative">
        <Tag variant="lavender" className="mb-4">
          Positions of Responsibility
        </Tag>
        <img
          src="/images/img_arrow_84x88.svg"
          alt="Arrow"
          className="absolute left-56 top-7 w-15 h-15"
        />
      </div>
      <div className="space-y-8">
        {positions.map((pos, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="font-handlee text-xl mb-2 text-[#0c0c0c]">{pos.title}</h3>
            <p className="text-lg text-[#706e6e] mb-2">{pos.period}</p>
            <ul className="list-disc ml-5 text-lg text-[#706e6e]">
              {pos.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PositionsSection;
