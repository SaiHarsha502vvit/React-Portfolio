// SkillsSection.jsx
import React from 'react';
import Tag from '../../components/ui/Tag';

const skills = [
  { category: 'Programming Languages', items: ['Java', 'JavaScript', 'Python'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React Js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['NodeJs', 'ExpressJs'] },
  { category: 'Databases', items: ['MongoDB', 'MySql'] },
  { category: 'Web Services', items: ['REST', 'GraphQL'] },
  { category: 'Other Tools', items: ['Postman', 'GIT', 'Figma', 'VSCode'] },
  {
    category: 'CS Fundamentals',
    items: ['Software Engineering', 'Algorithms', 'Data Structures', 'Development Principles'],
  },
];

const SkillsSection = () => (
  <section className="py-16 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="mb-12 relative">
        <Tag variant="lavender" className="mb-4">
          Technical Skills
        </Tag>
        <img
          src="/images/img_arrow_84x88.svg"
          alt="Arrow"
          className="absolute left-32 top-12 w-20 h-20"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="font-handlee text-xl mb-2 text-[#0c0c0c]">{skill.category}</h3>
            <ul className="list-disc ml-5 text-lg text-[#706e6e]">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
