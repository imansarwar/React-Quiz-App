import React from "react";

import AnswerList from "./AnswerList";
import Question from "./Question";
import UserGreeting from "./UserGreeting";

function QuizArea(props) {
  if (props.isFinished) {
    return <UserGreeting points={props.points} />;
  }

  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
}
export default QuizArea;
