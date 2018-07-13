import React from "react";
import ResultListItem from "../ResultListItem";
import "./style.css";

const ResultList = props => {
  const resultItems = props.gifs.map((gif, index) => {
    return (
      <ResultListItem
        key={gif.id}
        gif={gif}
        selectedItem={props.selectedItem}
        index={index}
        onItemSelect={props.onItemSelect}
        ChildNodeName="li"
      />
    );
  });
  return (
    <div className="ResultList">
      <ul className="ResultList--list">{resultItems}</ul>
      <a
        onClick={() => {
          props.onPaginate();
        }}
      >
        next
      </a>
    </div>
  );
};

export default ResultList;
