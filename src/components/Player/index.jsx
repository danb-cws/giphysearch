import React, { Component } from "react";
import "./style.css";
import Spinner from "../Spinner/";
import ShareTool from "../ShareTool/";
import * as config from "config";
import debounce from "debounce";

class Player extends Component {
  state = { mainGif: {}, imageIsLoaded: undefined };

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
          //throw new Error(response.statusText);
          console.warn('died! ',response.statusText);
        }
      })
      .then(json => {
        this.setState({
          mainGif: json.data
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

  componentDidUpdate(prevProps) {
    if (
      this.props.currentId !== 0 && // ie. not 'no term' or 'no results'
      this.props.currentId !== prevProps.currentId // prevent the fetch on every render if id unchanged
    ) {
      this.debouncedFetch(this.props.currentId);
    }
  }

  debouncedFetch = debounce(id => {
    this.setState(
      {
        mainGif: {},
        imageIsLoaded: false
      },
      this.fetchPlayerImage(id)
    );
  }, 400);

  render() {
    const { mainGif, imageIsLoaded } = this.state;
    if (this.props.currentId === (0 || undefined)) {
      return null;
    } else
      return (
        <section className="Player">
          <Spinner showSpinner={!imageIsLoaded} />
          {this.isEmpty(mainGif) ? (
            "Loading json..."
          ) : (
            <React.Fragment>
              <ShareTool shareUrl={mainGif.embed_url} />
              <img
                className="Player--img"
                src={mainGif.images.downsized.url}
                alt={mainGif.title}
                onLoad={this.hideSpinner}
              />
            </React.Fragment>
          )}
        </section>
      );
  }
}

export default Player;
