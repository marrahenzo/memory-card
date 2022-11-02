import '../styles/WinScreen.css';

function WinScreen(props: { visibility: string; restart: Function }) {
  return (
    <div id='win-screen' className={props.visibility}>
      <p>You Win!</p>
      <button type='button' onClick={() => props.restart()}>
        Play Again
      </button>
    </div>
  );
}

export default WinScreen;
