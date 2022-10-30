import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';
import background from './media/images/background.jpg';
import React, { useState } from 'react';
import Card from './components/Card';
import gods from './gods';

function App() {
  const [score, setScore] = useState(0);
  /* TODO: get value from localStorage */
  const [best, setBest] = useState(0);

  function increaseScore() {
    setScore((prevScore) => {
      return prevScore + 1;
    });
  }

  function loseGame() {
    console.log('lost!');
  }

  return (
    <div className='App'>
      <img src={background} alt='Background' id='background-image' />
      <div id='header'>
        <img src={logo} alt='Smite logo' />
      </div>
      <div id='counter-container'>
        <Counter text='CURRENT SCORE' value={score} />
        {/* TODO: get value from localStorage */}
        <Counter text='BEST SCORE' value={0} />
      </div>
      <div id='card-container'>
        <Card
          img={gods.Apollo}
          name='Apollo'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Mercury}
          name='Mercury'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Bellona}
          name='Bellona'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Hebo}
          name='He Bo'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Apollo}
          name='Apollo'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Apollo}
          name='Apollo'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Apollo}
          name='Apollo'
          lose={loseGame}
          point={increaseScore}
        />
        <Card
          img={gods.Apollo}
          name='Apollo'
          lose={loseGame}
          point={increaseScore}
        />
      </div>
    </div>
  );
}

export default App;
