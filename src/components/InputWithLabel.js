import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({ label, value, onChange, type }) => (
  <div className="flex-column">
    <label htmlFor={label} className="blog-form__label">
      {label}:
    </label>
    {type === 'textarea' ? (
      <textarea
        className="blog-form__description"
        name={label}
        id={label}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        className="blog-form__title"
        name={label}
        id={label}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default InputWithLabel;
