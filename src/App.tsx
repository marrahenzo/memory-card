import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';
import background from './media/images/background.jpg';

function App() {
  return (
    <div className='App'>
      <img src={background} alt='Background' id='background-image' />
      <div id='header'>
        <img src={logo} alt='Smite logo' />
      </div>
      <div id='counter-container'>
        <Counter text='CURRENT SCORE' value={0} />
        {/* TODO: get value from localStorage */}
        <Counter text='BEST SCORE' value={0} />
      </div>
      <div id='card-container'>example card</div>
    </div>
  );
}

export default App;
