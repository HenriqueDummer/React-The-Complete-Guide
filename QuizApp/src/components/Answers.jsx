import React from 'react'
import { useRef } from 'react'

const Answers = ({answerState, answers, selectedAnswer, onSelect}) => {
  const shuffledAnswers = useRef()

  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
    {shuffledAnswers.current.map((answer) => {
      let cssClasses = ''
      const isSelected = selectedAnswer === answer

      if(answerState === 'answered' && isSelected){
        cssClasses = 'selected'
      }

      if((answerState === 'correct' || answerState === 'wrong') && isSelected){
        cssClasses = answerState
      }
      
      return (
      <li className="answer" key={answer.id}>
        <button 
          disabled={answerState !== ''} 
          className={cssClasses} 
          onClick={() => onSelect(answer)}>
          {answer}
        </button>
      </li>)
    })}
  </ul>
  )
}

export default Answers