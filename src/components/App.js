import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { msg: "" };
  }

  Clicked() {
    this.setState({
      msg: (
        <p id="para">
          "Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy"
        </p>
      )
    });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        {this.state.msg}
        <button id="click" onClick={() => this.Clicked()}>
          click here
        </button>
      </div>
    );
  }
}

export default App;
