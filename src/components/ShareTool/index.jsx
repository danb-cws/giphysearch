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
    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      const el = this.textArea;
      var editable = el.contentEditable;
      var readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = true;
      el.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      el.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      el.contentEditable = editable;
      el.readOnly = readOnly;
    } else {
      this.textArea.select();
    }

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
          />
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
