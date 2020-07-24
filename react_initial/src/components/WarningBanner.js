import React from 'react';
import PropTypes from 'prop-types';

export default function WarningBanner({ warn }) {
  WarningBanner.propTypes = {
    warn: PropTypes.bool.isRequired,
  };
  if (!warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}
