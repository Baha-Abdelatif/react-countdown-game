import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const gameTimer = useRef();
  const dialogModal = useRef();
  const isTimerActive = 0 < timeRemaining && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(gameTimer.current);
    dialogModal.current.openModal();
  }
  const handleTimerStart = () => {
    gameTimer.current = setInterval(() => {
      setTimeRemaining((pre) => pre - 10);
    }, 10);
  };

  const handleTimerStop = () => {
    dialogModal.current.openModal();
    clearInterval(gameTimer.current);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialogModal}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        handleReset={handleReset}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleTimerStop : handleTimerStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
