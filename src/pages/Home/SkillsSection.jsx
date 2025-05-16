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

const pastelGradients = [
  'from-lavender via-mint to-peach',
  'from-mint via-peach to-yellow',
  'from-peach via-blue to-lavender',
  'from-yellow via-mint to-blue',
  'from-blue via-lavender to-mint',
  'from-mint via-yellow to-peach',
  'from-lavender via-peach to-blue',
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
          className="absolute left-32 top-12 w-20 h-20 animate-bounce-slow"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`group bg-gradient-to-br ${pastelGradients[idx % pastelGradients.length]} border-2 border-black rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden animate-fade-in`}
            style={{ minHeight: 200 }}
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/30 rounded-full blur-2xl z-0" />
            <div className="relative z-10">
              <h3 className="font-handlee text-2xl mb-4 text-[#0c0c0c] flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-mint group-hover:bg-peach transition-all"></span>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.items.map((item, i) => (
                  <Tag
                    key={i}
                    variant={['lavender', 'mint', 'peach', 'yellow', 'blue', 'green'][i % 6]}
                    className="text-base px-4 py-1 rounded-xl shadow-sm border border-white/40 hover:scale-110 hover:bg-white/80 transition-transform duration-200"
                  >
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
