import React from "react";
import "./style.css";
import * as config from "config";

const ResultListItem = ({
  gif,
  selectedItemIndex,
  index,
  resultsPageIndex,
  onItemSelect,
  ChildNodeName
}) => {
  const dataIndex = resultsPageIndex * config.RESULTS_PER_PAGE + index;

  return (
    <ChildNodeName className="Result-list__item">
      <a
        href={gif.images.fixed_height_small_still.url}
        className={
          selectedItemIndex === dataIndex
            ? "Result-list__item__link Result-list__item__link--selected-item"
            : "Result-list__item__link"
        }
        onClick={e => {
          e.preventDefault();
          if (selectedItemIndex === dataIndex) {
            return;
          }
          onItemSelect(dataIndex, gif);
        }}
      >
        <img
          className="Result-list__item__img"
          src={gif.images.fixed_height_small_still.url}
          alt={gif.title || ''}
        />
        <h5 className="Result-list__item__title">{gif.title || "(No title)"}</h5>
      </a>
    </ChildNodeName>
  );
};

export default ResultListItem;
