import React from "react";
import "./style.css";

const Player = props => {
  const mainGif = props.selectedGifData;

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  if (props.gifs.length === 0 && props.jsonIsLoaded) {
    return (
      <div className="Player">
        <div className="Player--errortext">
          <div>
            {!props.searchTerm
              ? "Please enter a term in the search field"
              : `No gifs available for "${props.searchTerm}"`}
          </div>
        </div>
      </div>
    );
  }

  if (isEmpty(mainGif)) {
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
