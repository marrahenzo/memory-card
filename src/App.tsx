import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';
import background from './media/images/background.jpg';
import React, { useState } from 'react';
import Card from './components/Card';
import gods, { God } from './gods';
import uniqid from 'uniqid';

let godsArr: God[] = [];

//Take n elements from the gods array and put them in another array
for (let i = 0; i < gods.length; i++) {
  do {
    let randomValue = Math.floor(Math.random() * gods.length);
    if (!godsArr.includes(gods[randomValue])) {
      godsArr.push(gods[randomValue]);
      break;
    }
  } while (true);
}

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [cards, setCards] = useState<string[]>([]);
  const [deck, setDeck] = useState(
    <Card img='' name='' clicked={() => 0} id='' />
  );
  /* TODO: get value from localStorage */
  const [best, setBest] = useState(0);

  console.log(godsArr);

  //Check if given card was already clicked
  function cardClicked(id: string): void {
    if (!cards.includes(id)) {
      setCards([...cards, id]);
      console.log(cards);

      setScore((prevScore) => {
        return prevScore + 1;
      });
      if (score > best) setBest(score);
      //TODO: shuffle the cards
    } else loseGame();
  }

  function loseGame() {
    console.log('LOSE');
    setScore(0);
  }

  let newArr = godsArr.map((card) => (
    <Card
      img={card.image}
      name={card.name}
      clicked={cardClicked}
      id={uniqid()}
      key={uniqid()}
    />
  ));

  setDeck(<>{newArr}</>);

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
      <div id='card-container'>{deck}</div>
    </div>
  );
}

export default App;
