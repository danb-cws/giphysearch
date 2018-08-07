import React, { Component } from "react";
import "./style.css";
import Spinner from "../Spinner/";
import * as config from "../../config";

class Player extends Component {
  state = { localCurrId: undefined, mainGif: {}, imageIsLoaded: true };

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
      this.props.currentId !== 0 &&
      this.props.currentId !== this.state.localCurrId
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
