import React from "react";

const Player = props => {
  const mainGif = props.gifs[props.selectedItem];
  if (!mainGif) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        className={`PlayerImg ${(mainGif.images.original.width / mainGif.images.original.height) < 1 ? 'portrait' : 'landscape'}`}
        src={mainGif.images.original.url}
        // width={mainGif.images.original.width}
        // height={mainGif.images.original.height}
        alt={mainGif.title}
      />
    </div>
  );
};

export default Player;
