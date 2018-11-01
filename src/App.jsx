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
    currentChoiceData: undefined
  };

  render() {
    return (
      <React.Fragment>
        <Header currentChoiceData={this.state.currentChoiceData} />
        <Browser
          onSetImageData={gif => {
            this.setState({
              currentChoiceData: gif
            });
          }}
        />
        <Player currentChoiceData={this.state.currentChoiceData} />
      </React.Fragment>
    );
  }
}

export default App;
