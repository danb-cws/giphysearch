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

  closeTool = e => {
    if (e.target.classList.contains("modal")) {
      this.hideTool();
    }
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
      <div className="modal" onClick={this.closeTool}>
        <section className="ShareTool--panel">
          <h3>Embed url:</h3>
          <textarea
            className="ShareTool--textarea"
            ref={textarea => (this.textArea = textarea)}
            defaultValue={this.props.shareUrl}
          >
          </textarea>
          {document.queryCommandSupported("copy") && (
            <button
              className="ShareTool--button"
              onClick={this.copyToClipboard}
            >
              Copy url to clipboard
            </button>
          )}
          <p>{this.state.copySuccess}</p>
          <button className="ShareTool--button" onClick={this.hideTool}>
            Close
          </button>
        </section>
      </div>
    );
  }
}
export default ShareTool;
