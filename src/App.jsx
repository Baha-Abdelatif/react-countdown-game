import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='Easy' targetTime={15} />
        <TimerChallenge title='Normal' targetTime={10} />
        <TimerChallenge title='Hard' targetTime={5} />
        <TimerChallenge title='Expert' targetTime={1} />
      </div>
    </>
  );
}

export default App;
