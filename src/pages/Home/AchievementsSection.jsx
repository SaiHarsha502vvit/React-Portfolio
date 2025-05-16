// AchievementsSection.jsx
import React from 'react';
import Tag from '../../components/ui/Tag';

const achievements = [
  {
    title: 'Top 10% of Teams SRM-AP 24hrs Hackathon',
    date: 'March 2024',
  },
  {
    title: 'Story Writer, Actor for CSE Department (Theater’s Day)',
    date: 'March 2024',
  },
];

const AchievementsSection = () => (
  <section className="py-16 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="mb-12 relative">
        <Tag variant="mint" className="mb-4">
          Achievements
        </Tag>
        <img
          src="/images/img_arrow_84x88.svg"
          alt="Arrow"
          className="absolute left-32 top-3 w-20 h-20"
        />
      </div>
      <ul className="space-y-6">
        {achievements.map((ach, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg shadow p-6 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="text-xl text-[#0c0c0c]">{ach.title}</span>
            <span className="text-lg text-[#706e6e]">{ach.date}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AchievementsSection;
