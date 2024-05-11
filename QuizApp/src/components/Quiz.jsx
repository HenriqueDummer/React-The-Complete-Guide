import React, { useCallback, useEffect, useState, useRef } from "react";

import QUESTIONS from "../QuestionsData";

import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuizId = userAnswers.length;
  const isQuizComplete = userAnswers.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevAnswer => [...prevAnswer, selectedAnswer])
  })    

  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return (
      <Summary 
        userAnswers={userAnswers} 
      />
    );
  }
  
  return (
    <>
      <div id="quiz">
        <Question
          key={currentQuizId}
          currentQuizId={currentQuizId}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipQuestion}
        />
      </div>
    </>
  );
};

export default Quiz;
