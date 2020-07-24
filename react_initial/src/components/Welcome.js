import React from 'react';
import PropTypes from 'prop-types';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function Welcome({ user }) {
  return (
    <h1>
      Hello,
      {formatName(user)}
    </h1>
  );
}
Welcome.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
export default Welcome;
