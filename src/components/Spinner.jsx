import React from "react";

const Spinner = props => {
  if (props.isLoaded) {
    return <p className="Spinner">data loaded, spinner off..</p>;
  } else {
    return <p className="Spinner">spin spin spinner on...</p>;
  }
}
export default Spinner;