import React from "react";
import "./style.css";

const ResultListItem = ({ gif, selectedItem, index, onItemSelect, ChildNodeName }) => {
  return (
    <ChildNodeName className="ResultList--item">
      <a
        className={selectedItem === index ? "ResultList--item--link ResultList--item--link__selected-item" : "ResultList--item--link"}
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
        <h5 className="ResultList--item--title">{gif.title || '(No title)'}</h5>
      </a>
    </ChildNodeName>
  );
};

export default ResultListItem;
