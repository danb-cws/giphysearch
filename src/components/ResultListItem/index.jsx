import React from "react";
import "./style.css";
import * as config from "../../config";

const ResultListItem = ({
  gif,
  selectedItem,
  index,
  resultsPageIndex,
  onItemSelect,
  ChildNodeName
}) => {
  const dataIndex = resultsPageIndex * config.RESULTS_PER_PAGE + index;

  return (
    <ChildNodeName className="ResultList--item">
      <a
        className={
          selectedItem === dataIndex
            ? "ResultList--item--link ResultList--item--link__selected-item"
            : "ResultList--item--link"
        }
        onClick={() => {
          if (selectedItem === dataIndex) {
            return;
          }
          onItemSelect(dataIndex, gif.id);
        }}
      >
        <img
          className="ResultList--item--img"
          width={gif.images.fixed_height_small_still.width}
          height={gif.images.fixed_height_small_still.height}
          src={gif.images.fixed_height_small_still.url}
          alt={gif.title}
        />
        <h5 className="ResultList--item--title">{gif.title || "(No title)"}</h5>
      </a>
    </ChildNodeName>
  );
};

export default ResultListItem;
