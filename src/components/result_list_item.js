import React from "react";

const ResultListItem = ({ gif, selectedItem, index, onItemSelect }) => {
  return (
    <li
      className={
        selectedItem === index ? 'selected-item' : ''
      }
      onClick={() => {
        onItemSelect(index);
      }}
    >
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
