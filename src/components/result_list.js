import React from "react";
import ResultListItem from "./result_list_item";

const ResultList = props => {
  const resultItems = props.gifs.map((gif, index) => {
    return <ResultListItem key={gif.id} gif={gif} index={index} onItemSelect={props.onItemSelect}/>;
  });
  return <ul className="ResultList">{resultItems}</ul>;
};

export default ResultList;
