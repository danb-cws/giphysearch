import React from "react";
import "./style.css";

const ErrorScreen = props => {
  if (props.gifs.length === 0 && props.jsonIsLoaded) {
    return (
      <div className="ErrorScreen">
        <div>
          {!props.searchTerm
            ? "Please enter a term in the search field"
            : `No gifs available for "${props.searchTerm}"`}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorScreen;