import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, handleReset },
  ref
) {
  const modalPrivateRef = useRef();
  const hasUserWin = remainingTime > 0 && remainingTime < targetTime * 1000;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => ({
    openModal() {
      modalPrivateRef.current.showModal();
    },
  }));
  return createPortal(
    <dialog
      ref={modalPrivateRef}
      className='result-modal'
      onClose={handleReset}
    >
      <h2>You {hasUserWin ? "Win 🔥" : "Lose 💣"}!</h2>
      {hasUserWin && (
        <h3>
          Your score : <strong>{score}%</strong>
        </h3>
      )}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      {hasUserWin ? (
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds</strong> left.
        </p>
      ) : (
        <p>You didn't stop the timer at time...</p>
      )}
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal")
  );
});
export default ResultModal;
