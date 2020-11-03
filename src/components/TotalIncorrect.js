import React from "react";

function TotalIncorrect(props) {
  return <h2 className="incorrect-ans">Incorrect: {props.incorrect}</h2>;
}

export default TotalIncorrect;
