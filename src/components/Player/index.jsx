import React from "react";
import "./style.css";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (props.gifs.length === 0 && props.dataIsLoaded) {
    // nope... props.onImageLoaded();
    return <div className="Player">No gifs available for that term...</div>;
  }
  if (!mainGif) {
    return <div className="Player">Loading json...</div>;
  }

  return (
    <div className="Player">
      <img
        className={`Player--img ${
          mainGif.images.original.width / mainGif.images.original.height < 1
            ? "Player--img__portrait"
            : "Player--img__landscape"
        }`}
        src={mainGif.images.original.url}
        alt={mainGif.title}
        onLoad={props.onImageLoaded}
      />
    </div>
  );
};

export default Player;
