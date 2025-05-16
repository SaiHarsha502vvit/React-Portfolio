import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ children, variant = 'lavender', className = '', ...props }) => {
  const variants = {
    lavender: 'bg-lavender text-black',
    mint: 'bg-mint text-black',
    peach: 'bg-peach text-black',
    yellow: 'bg-yellow text-black',
    blue: 'bg-blue text-black',
    green: 'bg-green text-black',
  };

  const tagClasses = `inline-block px-3 py-1 rounded-2xl font-handlee text-lg shadow-sm ${variants[variant]} ${className}`;

  return (
    <span className={tagClasses} {...props}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['lavender', 'mint', 'peach', 'yellow', 'blue', 'green']),
  className: PropTypes.string,
};

export default Tag;
