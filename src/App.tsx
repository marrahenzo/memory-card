import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';

function App() {
  return (
    <div className='App'>
      <div id='header'>
        <img src={logo} alt='Smite logo' />
      </div>
      <div id='counter-container'>
        <Counter text='Current score' value={0} />
        {/* TODO: get value from localStorage */}
        <Counter text='Best score' value={0} />
      </div>
      <div id='card-container'>example card</div>
    </div>
  );
}

export default App;
