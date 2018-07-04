import React from "react";

const Spinner = props => {
  if (!props.isLoaded) {
    return <p className="Spinner">spin spin spinner...</p>;
  } else {
    return <p className="Spinner">data loaded...</p>;
  }
}
export default Spinner;