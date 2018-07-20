import React from "react";
import "./style.css";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (props.gifs.length === 0 && props.dataIsLoaded) {
    return (
      <div className="Player">
        <div className="Player--errortext">
          <div>{!props.searchTerm ? 'Enter a term in the search field' : `No gifs available for "${props.searchTerm}"`}</div>
        </div>
      </div>
    );
  }
  if (!mainGif) {
    return <div className="Player Player--loadingtext">Loading json...</div>;
  }

  return (
    <div className="Player">
      <img
        className="Player--img"
        src={mainGif.images.original.url}
        alt={mainGif.title}
        onLoad={props.onImageLoaded}
      />
    </div>
  );
};

export default Player;
