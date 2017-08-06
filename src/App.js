import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Character from './Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedCharacter: null
    };
    this.setDisplayedCharacter = this.setDisplayedCharacter.bind(this);
  }

  setDisplayedCharacter(id) {
    this.setState(() => ({
      displayedCharacter: id
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Hero displayCharacter={this.setDisplayedCharacter} />

        {this.state.displayedCharacter &&
          <Character id={this.state.displayedCharacter} />}
      </div>
    );
  }
}

export default App;
