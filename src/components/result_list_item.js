import React from "react";

const ResultListItem = ({ gif }) => {
  return (
    <li>
      <h5>{gif.title}</h5>
      <img
        src={gif.images.fixed_height_small.url}
        width={gif.images.fixed_height_small.width}
        height={gif.images.fixed_height_small.height}
        alt={gif.title}
      />
    </li>
  );
};

export default ResultListItem;
