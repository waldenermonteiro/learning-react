import React, { Component } from 'react';
import CustomButton from './CustomButton';

class ButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = { valueComponent: true };
  }

  handleButtonClick() {
    const { valueComponent } = this.state;
    this.setState({ valueComponent: !valueComponent });
  }

  render() {
    let button = '';
    const { valueComponent } = this.state;
    if (valueComponent) {
      button = <CustomButton label="Login" onClick={() => this.handleButtonClick()} />;
    } else {
      button = <CustomButton label="Logout" onClick={() => this.handleButtonClick()} />;
    }
    return <div>{button}</div>;
  }
}

export default ButtonClass;
