import React from "react";
import "./style.css";

const ErrorScreen = props => {
  if (!props.isOnline) {
    return <section className="ErrorScreen">No data connection</section>;
  } else if (props.gifs.length === 0 && props.jsonIsLoaded) {
    return (
      <section className="ErrorScreen">
        {!props.searchTerm
          ? "Please enter a term in the search field"
          : `No gifs available for "${props.searchTerm}"`}
      </section>
    );
  } else {
    return null;
  }
};

export default ErrorScreen;
