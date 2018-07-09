import React from "react";
import "./ResultListItem.css";

const ResultListItem = ({ gif, selectedItem, index, onItemSelect }) => {
  return (
    <li className="ResultList--item">
      <a
        className={selectedItem === index ? "ResultList--link__selected-item" : "ResultList--link"}
        onClick={() => {
          onItemSelect(index);
        }}
      >
        <img
          className='ResultList--item--img'
          src={gif.images.fixed_height_small_still.url}
          width={gif.images.fixed_height_small_still.width}
          height={gif.images.fixed_height_small_still.height}
          alt={gif.title}
        />
        <h5 className="ResultList--item--title">{gif.title}</h5>
      </a>
    </li>
  );
};

export default ResultListItem;
