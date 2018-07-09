import React from "react";
import "./style.css";

const Spinner = props => {
  if (props.imageIsLoaded) {
    return <p className="Spinner">loaded image, spinner off..</p>;
  } else {
    return <p className="Spinner">spin spin spinner on...</p>;
  }
};
export default Spinner;
