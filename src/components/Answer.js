import React from "react";

function Answer(props) {
  return (
    <div>
      <button
        type="button"
        onClick={() => props.handleClick(props.choice)}
        className="btn btn-answer"
      >
        {props.answer}
      </button>
    </div>
  );
}

export default Answer;
