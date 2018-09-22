import React from "react";
import * as config from "config";
import "./style.css";

const Paginator = props => {
  let isDisabled;
  isDisabled =
    (props.dir === -1 && props.resultsPageIndex === 0) ||
    (props.dir === 1 &&
      props.resultsPageIndex + 1 >=
        props.totalResults / config.RESULTS_PER_PAGE);
  return (
    <button
      className="Paginator"
      disabled={isDisabled}
      onClick={() => {
        props.onPaginate(props.dir);
      }}
    >
      <span
        className={
          "Paginator__label" + (props.dir === 1 ? " Paginator__label--fwd" : "")
        }
      >
        {props.children}
      </span>
    </button>
  );
};
export default Paginator;
