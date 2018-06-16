import React from "react";
import ResultListItem from "./result_list_item";

//let index = 4;
const ResultList = props => {
  const resultItems = props.gifs.map((gif, index) => {
    return <ResultListItem key={gif.id} gif={gif} index={index} onItemSelect={props.onItemSelect}/>;
  });
  return <ul>{resultItems}</ul>;
};

export default ResultList;
