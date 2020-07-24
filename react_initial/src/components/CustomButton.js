import React from 'react';
import PropTypes from 'prop-types';

export default function CustomButton({ onClick, label }) {
  CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  };
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
