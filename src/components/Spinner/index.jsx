import React from "react";
import "./style.css";

const Spinner = props => {
  if (!props.imageIsLoaded) {
    return <div className="Spinner"></div>;
  } else {
    return null;
  }
};
export default Spinner;
