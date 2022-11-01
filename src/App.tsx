import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';
import background from './media/images/background.jpg';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import gods, { God } from './gods';
import uniqid from 'uniqid';

function App() {
  const [score, setScore] = useState(0);
  /* TODO: get value from localStorage */
  const [best, setBest] = useState(0);
  const [level, setLevel] = useState(0);
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [drawnCards, setDrawnCards] = useState(getCards(gods, 4 + 2 * level));
  const [currentlyClickedCard, setCurrentlyClickedCard] = useState('');
  //Use dummy card array to infer type
  const [deck, setDeck] = useState([
    <Card img='' name='' clicked={() => ''} key='asd' />
  ]);
  //Variable to initially load cards
  const [loaded, setLoaded] = useState(false);
  //Global game state
  const [gameOver, setGameOver] = useState(false);

  //Take n elements from the gods array and put them in another array
  function getCards(sourceArr: God[], amount: number) {
    let newArr: God[] = [];
    for (let i = 0; i < amount; i++) {
      do {
        let randomValue = Math.floor(Math.random() * sourceArr.length);
        if (!newArr.includes(sourceArr[randomValue])) {
          newArr.push(sourceArr[randomValue]);
          break;
        }
      } while (true);
    }
    return newArr;
  }

  //Draws cards initially
  if (!loaded) {
    setLoaded(true);
    setDeck(mapDeck(drawnCards));
  }

  //Function that is passed to card elements
  //I structured it like this to comply with the async nature of setState
  function cardClicked(name: string): void {
    setClickedCards((prevCards) => [...prevCards, name]);
    setCurrentlyClickedCard(name);
  }

  //Renders the current card elements
  function mapDeck(array: God[]): JSX.Element[] {
    let newArr = array.map((card) => (
      <Card
        img={card.image}
        name={card.name}
        clicked={cardClicked}
        key={uniqid()}
      />
    ));
    return newArr;
  }

  //Shuffles the current cards
  function shuffleDeck(array: God[]): God[] {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr;
  }

  //Checks how many times a string is present in an array
  function checkIfArrayContainsString(arr: string[], string: string): boolean {
    let occurrences = 0;
    for (let val of arr) {
      if (val === string) occurrences++;
    }
    return occurrences > 1;
  }

  //Replaces the old carcClicked function because clickedCards's value wasn't being read properly
  //Ignore the dependency array warning
  useEffect(() => {
    if (!checkIfArrayContainsString(clickedCards, currentlyClickedCard)) {
      setDeck(mapDeck(shuffleDeck(drawnCards)));
    } else setGameOver(true);
  }, [clickedCards, currentlyClickedCard, drawnCards]);

  //Update current score based on the amount of cards clicked
  useEffect(() => {
    if (!gameOver) {
      setScore(clickedCards.length);
      if (score === deck.length) {
        setLevel((prevLevel) => prevLevel + 1);
      }
    }
  }, [clickedCards, gameOver, deck.length, score]);

  //Update best score if score is higher
  useEffect(() => {
    if (score > best) setBest(score);
  }, [score, best]);

  //Executes on game over
  useEffect(() => {
    setScore(0);
    //Kinda fixes best being increased after game over
    setBest((prevBest) => prevBest - 1);
  }, [gameOver]);

  //Get new cards on level change
  useEffect(() => {
    setDrawnCards(getCards(gods, 4 + 2 * level));
  }, [level]);

  return (
    <div className='App'>
      <img src={background} alt='Background' id='background-image' />
      <div id='header'>
        <img src={logo} alt='Smite logo' />
      </div>
      <div id='counter-container'>
        <Counter text='CURRENT SCORE' value={score} />
        {/* TODO: get value from localStorage */}
        <Counter text='BEST SCORE' value={best} />
      </div>
      <div id='card-container'>{deck}</div>
    </div>
  );
}

export default App;
