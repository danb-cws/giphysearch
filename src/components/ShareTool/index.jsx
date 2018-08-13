import React, { Component } from "react";
import "./style.css";

class ShareTool extends Component {
  state = {
    isShowing: false
  };

  showTool = () => {
    this.setState({ isShowing: true });
  };

  hideTool = () => {
    this.setState({ isShowing: false });
  };

  render() {
    return !this.state.isShowing ? (
      <button className="ShareTool" onClick={this.showTool}>
        sharetool
      </button>
    ) : (
      <div className="ShareTool">
        the tool panel..
        <p>Embed url: {this.props.shareUrl}</p>
        <button onClick={this.hideTool}>hide</button>
      </div>
    );
  }
}
export default ShareTool;
