import React from "react";
import "./style.css";

const ErrorScreen = props => {
  const mainGif = props.selectedGifData;

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

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
  }

  if (isEmpty(mainGif)) {
    return <div className="ErrorScreen">Loading json...</div>;
  }
};
export default ErrorScreen;
