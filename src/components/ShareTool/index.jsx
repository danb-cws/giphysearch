import React, { Component } from "react";
import "./style.css";

class ShareTool extends Component {
  state = {
    isShowing: false,
    copySuccess: ""
  };

  showTool = () => {
    this.setState({ isShowing: true });
  };

  hideTool = () => {
    this.setState({ isShowing: false });
  };

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return !this.state.isShowing ? (
      <button className="ShareTool--open-button" onClick={this.showTool} />
    ) : (
      <section className="ShareTool--panel">
        <p>Embed url:</p>
        <textarea
          className="ShareTool--textarea"
          ref={textarea => (this.textArea = textarea)}
        >
          {this.props.shareUrl}
        </textarea>
        {document.queryCommandSupported("copy") && (
          <button className="ShareTool--button" onClick={this.copyToClipboard}>
            Copy url to clipboard
          </button>
        )}
        <p>{this.state.copySuccess}</p>
        <button className="ShareTool--button" onClick={this.hideTool}>
          Close
        </button>
      </section>
    );
  }
}
export default ShareTool;
