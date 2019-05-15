import React from "react";
import AuthorQuiz from "./AuthorQuiz";

const App = ({ state, onAnswerSelected }) => {
  return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />;
};

export default App;
