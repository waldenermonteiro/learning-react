import React, { Component } from 'react';
import NumberList from './NumberList';

class ListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }, { text: 'text4' }],
    };
  }

  render() {
    const { numbers } = this.state;
    return (
      <div>
        <NumberList numbers={numbers} />
      </div>
    );
  }
}
export default ListClass;
