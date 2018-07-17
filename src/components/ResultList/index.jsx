import React from "react";
import ResultListItem from "../ResultListItem";
import Paginator from "../Paginator";
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
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={-1}
      >
        Back
      </Paginator>
      <ul className="ResultList--list">
        {resultItems.length ? resultItems : noResults}
      </ul>
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={1}
      >
        Fwd
      </Paginator>
    </div>
  );
};

export default ResultList;
