import React from 'react';
import PropTypes from 'prop-types';

function FormattedDate(props) {
  const { date } = props;
  return (
    <h2>
      It is
      {date.toLocaleTimeString()}
      .
    </h2>
  );
}
FormattedDate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  date: PropTypes.object.isRequired,
};

export default FormattedDate;
