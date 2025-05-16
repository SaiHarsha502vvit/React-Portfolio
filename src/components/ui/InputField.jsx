import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  name,
  required = false,
  className = '',
  labelClassName = '',
  inputClassName = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className={`block mb-2 font-handlee text-2xl ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffc100] ${inputClassName}`}
        {...props}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default InputField;
