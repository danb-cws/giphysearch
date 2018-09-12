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
    if (e.target.classList.contains("ShareTool--modal")) {
      this.hideTool();
    }
  };

  hideTool = () => {
    this.setState({ isShowing: false, copySuccess: "" });
  };

  copyToClipboard = e => {
    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      const el = this.textArea;
      const editable = el.contentEditable;
      const readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = true;
      el.readOnly = true;

      // create a selectable range
      const range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      const selection = window.getSelection();
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
    setTimeout(this.hideTool, 2000);
  };

  render() {
    return !this.state.isShowing ? (
      <button className="ShareTool--open-button" onClick={this.showTool} />
    ) : (
      <div className="ShareTool--modal" onClick={this.closeTool}>
        <section className="ShareTool--panel">
          <h3 className="ShareTool--title">Giphy embed URL:</h3>
          <textarea
            className="ShareTool--textarea"
            ref={textarea => (this.textArea = textarea)}
            defaultValue={this.props.shareUrl}
          />
          {document.queryCommandSupported("copy") && (
            <React.Fragment>
              <button
                className="ShareTool--copy-button"
                onClick={this.copyToClipboard}
              >
                Copy to clipboard
              </button>
              <div className="ShareTool--copy-success">
                {this.state.copySuccess}
              </div>
            </React.Fragment>
          )}
        </section>
      </div>
    );
  }
}
export default ShareTool;
