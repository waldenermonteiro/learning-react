import React from 'react';
import Welcome from './components/Welcome';
import WelcomeClass from './components/WelcomeClass';
import Clock from './components/Clock';
import ClockClass from './components/ClockClass';
import Click from './components/Click';
import ClickClass from './components/ClickClass';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';
import Warning from './components/Warning';
import WarningClass from './components/WarningClass';
import ListClass from './components/ListClass';
import logo from './logo.svg';
import './App.css';

const user = {
  firstName: 'Waldener',
  lastName: 'Monteiro',
};
function App() {
  const text = 'Edit and save to reload.';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome user={user} />
        <WelcomeClass user={user} />
        <Clock />
        <ClockClass />
        <Click />
        <ClickClass />
        <Button value />
        <ButtonClass value />
        <Warning />
        <WarningClass />
        <ListClass />
        <p>{text}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
