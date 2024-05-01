import { useRef, useState } from "react";

import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000 

  const timer = useRef()
  const dialog = useRef()

  if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.open()
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000)
  }

  const handleStart = () => {
    timer.current  = setInterval(() => {
        setTimeRemaining(prev => prev - 10)
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open()
    clearInterval(timer.current)

  }

  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Sart"} Challenge
            </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
            {timerIsActive ? "Timer running" : "Timer inactive"}
        </p>
        </section>
    </>
    
  );
};

export default TimerChallenge;
