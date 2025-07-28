// SkillsSection.jsx
import React, { useRef, useState } from 'react';
import Tag from '../../components/ui/Tag';

const skills = [
  { category: 'Programming Languages', items: ['Java', 'JavaScript', 'Python'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React Js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Spring-Boot','NodeJs', 'ExpressJs'] },
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

const pastelCursorColors = [
  'rgba(186, 201, 255, 0.8)', // lavender
  'rgba(186, 255, 221, 0.8)', // mint
  'rgba(255, 223, 186, 0.8)', // peach
  'rgba(255, 255, 186, 0.8)', // yellow
  'rgba(186, 225, 255, 0.8)', // blue
];

const SkillsSection = () => {
  const gridRef = useRef();
  const cursorRef = useRef();
  const rippleRef = useRef();
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorColorIdx, setCursorColorIdx] = useState(0);

  // Cursor movement and raindrop effect
  const handleMouseMove = (e) => {
    if (!gridRef.current || !cursorRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursorRef.current.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
  };
  const handleMouseEnter = () => setCursorVisible(true);
  const handleMouseLeave = () => setCursorVisible(false);
  const handleClick = (e) => {
    if (rippleRef.current && gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 32;
      const y = e.clientY - rect.top - 32;
      rippleRef.current.style.left = `${x}px`;
      rippleRef.current.style.top = `${y}px`;
      rippleRef.current.classList.remove('active');
      void rippleRef.current.offsetWidth;
      rippleRef.current.classList.add('active');
      setCursorColorIdx((idx) => (idx + 1) % pastelCursorColors.length);
    }
  };

  return (
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
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          style={{ minHeight: 300, cursor: 'none' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {/* Section-local custom cursor */}
          {cursorVisible && (
            <>
              <div
                ref={cursorRef}
                className="skills-section-cursor"
                style={{
                  '--skills-cursor-color': pastelCursorColors[cursorColorIdx],
                }}
              />
              <div
                ref={rippleRef}
                className="skills-cursor-ripple"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: pastelCursorColors[(cursorColorIdx + 1) % pastelCursorColors.length],
                  pointerEvents: 'none',
                  zIndex: 29,
                  opacity: 0,
                  mixBlendMode: 'lighten',
                }}
              />
            </>
          )}
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
};

export default SkillsSection;
