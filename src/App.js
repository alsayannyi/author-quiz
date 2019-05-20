import React from "react";
import AuthorQuiz from "./AuthorQuiz";

const App = ({ state, onAnswerSelected, onContinue }) => {
  debugger;
  return (
    <AuthorQuiz
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={onContinue}
    />
  );
};

export default App;
