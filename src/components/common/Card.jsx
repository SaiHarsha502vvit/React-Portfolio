import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../ui/Tag';

const Card = ({
  image,
  title,
  tagText,
  tagVariant = 'lavender',
  description,
  githubLink,
  liveDemoLink,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`border-3 border-black rounded-2xl bg-white overflow-hidden shadow-xl transition-transform duration-300 group pastel-glow-pulse card-3d-hover stagger-child ${className}`}
      style={{ minHeight: 400, minWidth: 0 }}
      {...props}
    >
      <div className="relative p-5">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col items-start gap-2 relative">
        {/* Overlay for text visibility */}
        <div
          className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-xl -z-1"
          style={{ pointerEvents: 'none' }}
        />
        <div className="relative z-10 w-full">
          <h3 className="font-handlee text-2xl leading-7 mb-2 text-[#181818] font-bold group-hover:text-[#5ab5e8] transition-colors duration-300">
            {title.split('\n').map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h3>
          {description && (
            <p className="text-base text-[#333] mb-2 animate-fade-in font-medium drop-shadow-sm">
              {description}
            </p>
          )}
          <div className="flex gap-3 mt-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-mint text-black px-4 py-2 rounded-lg font-medium shadow hover:bg-lavender hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lavender button-animated">
                  GitHub
                </button>
              </a>
            )}
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-peach text-black px-4 py-2 rounded-lg font-medium shadow hover:bg-mint hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mint button-animated">
                  Live Demo
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  tagText: PropTypes.string.isRequired,
  tagVariant: PropTypes.oneOf(['lavender', 'mint', 'peach', 'yellow', 'blue', 'green']),
  description: PropTypes.string,
  githubLink: PropTypes.string,
  liveDemoLink: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
