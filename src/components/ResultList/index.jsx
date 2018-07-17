import React from "react";
import ResultListItem from "../ResultListItem";
import "./style.css";

const ResultList = props => {
  const noResults = <li className="ResultList--no-results">No results</li>;
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
      <a
        className="ResultList--paginator"
        onClick={() => {
          props.onPaginate(-1);
        }}
      >
        Back
      </a>
      <ul className="ResultList--list">
        {resultItems.length ? resultItems : noResults}
      </ul>
      <a
        className="ResultList--paginator"
        onClick={() => {
          props.onPaginate(1);
        }}
      >
        Fwd
      </a>
    </div>
  );
};

export default ResultList;
