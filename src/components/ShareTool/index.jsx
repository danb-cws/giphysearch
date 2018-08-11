import React, { Component } from "react";
import "./style.css";

class ShareTool extends Component {
  state = {
    isShowing: false
  };

  toggleTool = () => {
    console.log("togglr");
    this.setState({ isShowing: true });
  };

  render() {
    return !this.state.isShowing ? (
      <button className="ShareTool" onClick={this.toggleTool}>
        sharetool
      </button>
    ) : (
      <div className="ShareTool">the tool panel</div>
    );
  }
}
export default ShareTool;
