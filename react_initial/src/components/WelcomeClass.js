import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

class WelcomeClass extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <h1>
        Hello,
        {formatName(user)}
      </h1>
    );
  }
}
WelcomeClass.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
export default WelcomeClass;
