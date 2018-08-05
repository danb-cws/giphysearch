import React from "react";
import "./style.css";

const Spinner = ({showSpinner}) => {
  return showSpinner ? <div className="Spinner" /> : null;
};
export default Spinner;
