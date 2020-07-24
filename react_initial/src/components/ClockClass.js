import React, { Component } from 'react';
import FormatDate from './FormatDate';

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormatDate date={date} />
      </div>
    );
  }
}
export default ClockClass;
