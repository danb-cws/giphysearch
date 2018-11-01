import React, { Component } from "react";
import "./style.css";
import Spinner from "../Spinner/";
import ShareTool from "../ShareTool/";

class Player extends Component {
  state = { imageIsLoaded: true };

  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  imgLoaded = () => {
    this.setState({
      imageIsLoaded: true
    });
  };

  componentDidUpdate(prevProps) {
    if (
      !this.isEmpty(this.props.currentChoiceData) && // ie. not 'no term' or 'no results'
      this.props.currentChoiceData !== prevProps.currentChoiceData // prevent the render if data unchanged
    ) {
      this.setState({
        imageIsLoaded: false
      });
    }
  }

  render() {
    const { imageIsLoaded } = this.state;
    const gifData = this.props.currentChoiceData;
    if (this.isEmpty(gifData)) {
      return null;
    } else
      return (
        <section className="Player">
          <Spinner showSpinner={!imageIsLoaded} />
          <React.Fragment>
            <ShareTool shareUrl={gifData.embed_url} />
            <img
              className="Player--img"
              src={gifData.images.downsized.url}
              alt={gifData.title}
              onLoad={this.imgLoaded}
            />
          </React.Fragment>
        </section>
      );
  }
}

export default Player;
