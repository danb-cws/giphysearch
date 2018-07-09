import React from "react";
import "./style.css";

const Index = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (props.gifs.length === 0 && props.dataIsLoaded) {
    return <div>No gifs available for that term...</div>;
  }
  if (!mainGif) {
    return <div>Loading json...</div>;
  }

  return (
    <div>
      <img
        className={`PlayerImg ${
          mainGif.images.original.width / mainGif.images.original.height < 1
            ? "portrait"
            : "landscape"
        }`}
        src={mainGif.images.original.url}
        alt={mainGif.title}
        onLoad={props.onImageLoaded}
      />
    </div>
  );
};

export default Index;
