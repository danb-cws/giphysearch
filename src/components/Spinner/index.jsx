import React from "react";
import "./style.css";

const Spinner = props => {
  return props.showSpinner ? <div className="Spinner" /> : null;
};
export default Spinner;
