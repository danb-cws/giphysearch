import React from "react";

const ResultListItem = ({ gif, index, onItemSelect }) => {
  return (
    <li onClick={() => {onItemSelect(index)}}>
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
