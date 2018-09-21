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
      <React.Fragment>
        <Header currentId={this.state.currentId} />
        <Browser
          onSetImageId={id => {
            this.setState({
              currentId: id
            });
          }}
        />
        <Player currentId={this.state.currentId} />
      </React.Fragment>
    );
  }
}

export default App;
