import React, { Component } from 'react';

export default class ClickClass extends Component {
  constructor(props) {
    super(props);
    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.state = { isToggleOn: true };
    // this.handleClickWithoutArrowFunction.bind(this)
  }

  // Primeira forma de como não utilizar o bind no constructor
  handleClick = (e) => {
    console.log(e);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  // Segunda forma, Essa sintaxe garante que o `this` seja vinculado ao handleClick.
  handleClickWithoutArrowFunction(e) {
    console.log(e);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button type="button" onClick={e => this.handleClickWithoutArrowFunction(e)}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
