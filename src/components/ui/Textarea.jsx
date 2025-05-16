import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  label,
  value,
  onChange,
  placeholder = '',
  name,
  rows = 4,
  required = false,
  className = '',
  labelClassName = '',
  textareaClassName = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className={`block mb-2 font-handlee text-2xl ${labelClassName}`}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffc100] button-animated morph-shape ${textareaClassName}`}
        {...props}
      />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  required: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  textareaClassName: PropTypes.string,
};

export default Textarea;
