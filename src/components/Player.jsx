import React from "react";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (props.gifs.length === 0 && props.isLoaded) {
    return <div>No gifs available for that...</div>;
  }
  if (!mainGif) {
    return <div>Loading...</div>;
  }

  const imgLoading = () => {
    console.log("in image loading: ", this);
    // hide spinner here
  };

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
        onLoad={imgLoading}
      />
    </div>
  );
};

export default Player;
