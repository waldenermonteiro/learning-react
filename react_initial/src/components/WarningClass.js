import React, { Component } from 'react';
import WarningBanner from './WarningBanner';

export default class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    const { showWarning } = this.state;
    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button type="button" onClick={() => this.handleToggleClick()}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
