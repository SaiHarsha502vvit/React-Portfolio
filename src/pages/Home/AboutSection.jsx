import React from 'react';

const AboutSection = () => (
  <div className="container mx-auto px-4 py-16 animate-float">
    <div className="mb-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 flex justify-center">
        <div
          className="relative h-72 w-72 md:h-80 md:w-80 flex items-center justify-center rounded-full overflow-visible shadow-xl bg-[#44e2f8] p-4 transition-all duration-500 hover:bg-slate-500 hover:shadow-2xl hover:scale-110 animate-float group"
          style={{
            boxShadow:
              '0 0 0 8px rgba(68,226,248,0.18), 0 8px 32px 0 rgba(68,226,248,0.32), 0 2px 8px 0 var(--accent-lavender)',
          }}
        >
          {/* Faded pastel ring effect */}
          <div
            className="border-collapse absolute inset-0 rounded-full pointer-events-none z-10"
            style={{
              boxShadow: '0 0 0 8px rgba(68,226,248,0.18), 0 0 32px 0 rgba(186,201,255,0.12)',
            }}
          />
          {/* Pastel ball effect */}
          <div className="absolute inset-0 rounded-full bg-peach opacity-30 blur-2xl scale-110 z-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-40" />
          <img
            src="/images/My-Pic.png"
            alt="Profile picture"
            className="relative  z-20 w-60 h-60 md:w-72 md:h-72 object-fill bg-[#44e2f8] rounded-full shadow-lg transition-all duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="flex-1 about-details-container slide-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="details-container bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center text-center border border-mint animate-float">
            <img
              src="/images/img_group_1.svg"
              alt="Experience icon"
              className="w-10 h-10 mb-2 animate-float"
            />
            <h3 className="font-handlee text-xl mb-1 text-[#0c0c0c] animate-float">Experience</h3>
            <p className="text-base text-secondary animate-float">
              Internships & Projects
              <br />
              Full Stack, AI/ML, Cloud
            </p>
          </div>
          <div className="details-container bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center text-center border border-mint animate-float">
            <img
              src="/images/img_group_2.svg"
              alt="Education icon"
              className="w-10 h-10 mb-2 animate-float"
            />
            <h3 className="font-handlee text-xl mb-1 text-[#0c0c0c] animate-float">Education</h3>
            <p className="text-base text-secondary animate-float">
              B.Tech, Computer Science
              <br />
              Vasireddy Venkatadri Institute of Technology
            </p>
          </div>
        </div>
        <div className="text-container bg-white/70 rounded-2xl shadow p-6 border border-peach animate-fade-in animate-float">
          <p className="text-lg text-[#181818] font-medium animate-float">
            I am a Graduate Software Engineer with hands-on experience in full stack development,
            AI/ML, and cloud technologies. Skilled in Python, Node.js, React, FastAPI, and
            PostgreSQL. I am a quick learner, creative problem solver, and passionate about building
            impactful solutions. I have completed my B.Tech in Computer Science from Vasireddy
            Venkatadri Institute of Technology and have worked on several internships and projects
            in the field.
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <img
        src="/images/img_arrow_84x88.svg"
        alt="Arrow icon"
        className="w-10 h-10 animate-bounce-slow cursor-pointer animate-float"
        onClick={() =>
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      />
    </div>
  </div>
);

export default AboutSection;
