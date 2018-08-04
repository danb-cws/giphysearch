import React from "react";
import ResultListItem from "../ResultListItem";
import Paginator from "../Paginator";
import * as config from "../../config";
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
    <div className="ResultList">
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={-1}
        tabindex={config.RESULTS_PER_PAGE + 3}
      >
        Prev
      </Paginator>
      <ul className="ResultList--list">
        {resultItems.length ? (
          resultItems
        ) : (
          <li className="ResultList--no-results">No results</li>
        )}
      </ul>
      <Paginator
        onPaginate={props.onPaginate}
        totalResults={props.totalResults}
        resultsPageIndex={props.resultsPageIndex}
        dir={1}
        tabindex={config.RESULTS_PER_PAGE + 2}
      >
        Next
      </Paginator>
    </div>
  );
};

export default ResultList;
