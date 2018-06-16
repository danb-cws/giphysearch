import React from "react";

const ResultListItem = ({ gif }) => {
  return (
    <li>
      <h5>{gif.title}</h5>
      <img
        src={gif.images.fixed_height_small_still.url}
        width={gif.images.fixed_height_small_still.width}
        height={gif.images.fixed_height_small_still.height}
        alt={gif.title}
      />
    </li>
  );
};

export default ResultListItem;
