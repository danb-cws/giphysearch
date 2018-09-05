import "normalize.css";
import "./variables.css";
import "./base.css";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/";
import Player from "./components/Player/";
import Browser from "./components/Browser/";

class App extends Component {
  state = {
    currentId: undefined
  };

  render() {
    return (
      <div className="App">
        <Header currentId={this.state.currentId} />
        <Browser
          onSetImageId={id => {
            this.setState({
              currentId: id
            });
          }}
        />
        <Player currentId={this.state.currentId} />
      </div>
    );
  }
}

export default App;
