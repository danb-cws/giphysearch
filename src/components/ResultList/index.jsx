import React from "react";
import ResultListItem from "../ResultListItem";
import Paginator from "../Paginator";
import "./style.css";

const ResultList = props => {
  const resultItems = props.gifs.map((gif, index) => {
    return (
      <ResultListItem
        key={gif.id}
        gif={gif}
        selectedItemIndex={props.selectedItemIndex}
        index={index}
        resultsPageIndex={props.resultsPageIndex}
        onItemSelect={props.onItemSelect}
        ChildNodeName="li"
      />
    );
  });
  return (
    <section className="Result-list">
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={-1}
      >
        Prev
      </Paginator>
      <ul className="Result-list__list">
        {resultItems.length ? (
          resultItems
        ) : (
          <li className="Result-list--no-results">No results</li>
        )}
      </ul>
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={1}
      >
        Next
      </Paginator>
    </section>
  );
};

export default ResultList;
