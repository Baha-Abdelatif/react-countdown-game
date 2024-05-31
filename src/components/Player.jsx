import "./Player.css";
import { useState, useRef } from "react";

export default function Player() {
  const playerNameInput = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  };

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameInput} type='text' />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
