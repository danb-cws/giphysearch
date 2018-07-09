import React from "react";
import ResultListItem from "../result-list-item/ResultListItem";
import "./ResultList.css";

const ResultList = props => {
  const resultItems = props.gifs.map((gif, index) => {
    return <ResultListItem key={gif.id} gif={gif} selectedItem={props.selectedItem} index={index} onItemSelect={props.onItemSelect}/>;
  });
  return <ul className="ResultList">{resultItems}</ul>;
};

export default ResultList;
