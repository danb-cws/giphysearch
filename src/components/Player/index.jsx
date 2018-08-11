import React, { Component } from "react";
import "./style.css";
import Spinner from "../Spinner/";
import ShareTool from "../ShareTool/";
import * as config from "config";

class Player extends Component {
  state = { localCurrId: undefined, mainGif: {}, imageIsLoaded: undefined };

  fetchPlayerImage = () => {
    fetch(
      `${config.GIPHY_ENDPOINT}${this.props.currentId}?&api_key=${
        config.GIPHY_API_KEY
      }`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(json => {
        this.setState({
          localCurrId: this.props.currentId,
          mainGif: json.data,
          imageIsLoaded: false
        });
      })
      .catch(() => console.error);
  };

  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  hideSpinner = () => {
    this.setState({
      imageIsLoaded: true
    });
  };

  componentDidUpdate = () => {
    if (
      this.props.currentId !== 0 && // ie. not 'no term' or 'no results'
      this.props.currentId !== this.state.localCurrId // prevent the fetch on every render if id unchanged
    ) {
      this.fetchPlayerImage(this.props.currentId);
    }
  };

  render() {
    const { mainGif, imageIsLoaded } = this.state;
    if (this.isEmpty(mainGif)) {
      return <div className="Player">Loading json...</div>;
    }
    return (
      <div className="Player">
        <Spinner showSpinner={!imageIsLoaded} />
        <ShareTool />
        <img
          className="Player--img"
          src={mainGif.images.downsized.url}
          alt={mainGif.title}
          onLoad={this.hideSpinner}
        />
      </div>
    );
  }
}

export default Player;
