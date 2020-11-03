import React from "react";
import Result from "./Result";

function UserGreeting(props) {
  return (
    <div>
      <h2 className="greet">Thank you for playing !</h2>
      <Result points={props.points} />
    </div>
  );
}

export default UserGreeting;
