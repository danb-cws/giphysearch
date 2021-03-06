import React from "react";
import "./style.css";

const ErrorScreen = props => {
  if (props.gifs.length === 0 && props.jsonIsLoaded) {
    return (
      <section className="Error-screen">
        {!props.searchTerm
          ? "Please enter a term in the search field"
          : `No gifs available for "${props.searchTerm}"`}
      </section>
    );
  } else if (!props.isOnline) {
    return <section className="Error-screen">No data connection</section>;
  } else {
    return null;
  }
};

export default ErrorScreen;
