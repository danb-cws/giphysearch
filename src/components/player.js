import React from "react";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];

  if (!mainGif) {
    return <div>Loading...</div>;
  }

  if (props.gifs.length === 0 && props.isLoaded) {
    return <div>No gifs for that...</div>;
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
      />
    </div>
  );
};

export default Player;
