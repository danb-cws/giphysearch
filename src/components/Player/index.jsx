import React from "react";
import "./style.css";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (props.gifs.length === 0 && props.dataIsLoaded) {
    return (
      <div className="Player">
        <div className="Player--errortext">
          <div>No gifs available for that term...</div>
        </div>
      </div>
    );
  }
  if (!mainGif) {
    return <div className="Player">Loading json...</div>;
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
