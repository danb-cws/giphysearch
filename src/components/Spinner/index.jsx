import React from "react";
import "./style.css";

const Spinner = props => {
  if (props.imageIsLoaded) {
    return <div className="Spinner">spinner OFF..</div>;
  } else {
    return <div className="Spinner">spinner ON...</div>;
  }
};
export default Spinner;
