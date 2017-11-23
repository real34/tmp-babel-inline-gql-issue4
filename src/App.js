import React, { Component } from "react";
import "./App.css";
import Gallery from "./Gallery";

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
        <Gallery limit={4} />
      </div>
    );
  }
}

export default App;
