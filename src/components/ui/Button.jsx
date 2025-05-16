import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  morph = false,
  ...props
}) => {
  const baseClasses =
    'font-medium transition-colors duration-200 focus:outline-none button-animated';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-[#ffc100] text-black hover:bg-[#ffb6e6]',
    yellow: 'bg-[#ffe68c] text-black hover:bg-[#ffd54f]',
    blue: 'bg-[#9ddcff] text-black hover:bg-[#7acbff]',
    green: 'bg-[#7cf072] text-white hover:bg-[#60e555]',
    lavender: 'bg-lavender text-black hover:bg-mint',
    mint: 'bg-mint text-black hover:bg-peach',
    peach: 'bg-peach text-black hover:bg-lavender',
  };

  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${morph ? 'morph-shape' : ''} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'yellow',
    'blue',
    'green',
    'lavender',
    'mint',
    'peach',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  morph: PropTypes.bool,
};

export default Button;
