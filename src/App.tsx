import Counter from './components/Counter';
import './styles/App.css';
import logo from './media/images/smitelogo.png';
import background from './media/images/background.jpg';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import gods, { God } from './gods';
import uniqid from 'uniqid';

function App() {
  const [score, setScore] = useState(0);
  /* TODO: get value from localStorage */
  const [best, setBest] = useState(0);
  const [level, setLevel] = useState(0);
  const [clickedCards, setClickedCards] = useState(0);
  const [drawnCards, setDrawnCards] = useState(getCards(gods, 4 + 2 * level));
  //Use dummy card array to infer type
  const [deck, setDeck] = useState([
    <Card img='' name='' clicked={() => ''} key='asd' />
  ]);
  //Variable to initially load cards
  const [loaded, setLoaded] = useState(false);

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
    loadCards();
  }

  function loadCards() {
    setDrawnCards(getCards(gods, 4 + 2 * level));
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

  //Checks how many times a string is present in an array
  //TODO: SEE IF USEFUL
  function checkIfArrayContainsString(arr: string[], string: string): boolean {
    let occurrences = 0;
    for (let val of arr) {
      if (val === string) occurrences++;
    }
    return occurrences > 1;
  }

  //Shuffles the current cards
  function shuffleDeck(array: JSX.Element[]): JSX.Element[] {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr;
  }

  //Handle a card being clicked
  function cardClicked(wasClickedBefore: boolean): void {
    if (wasClickedBefore) {
      loseGame();
    } else {
      upScore(1);
      upClickedCards(1);
      setDeck((prevDeck) => shuffleDeck(prevDeck));
    }
  }

  //Check if all cards were clicked
  useEffect(() => {
    if (clickedCards === drawnCards.length) {
      upLevel(1);
    }
  }, [clickedCards, drawnCards.length]);

  //Create all card components once the card objects are drawn
  useEffect(() => {
    setDeck(mapDeck(drawnCards));
  }, [drawnCards]);

  //Get card objects from array when level goes up
  useEffect(() => {
    setClickedCards(0);
    loadCards();
  }, [level]);

  //Update best score if current score is higher
  useEffect(() => {
    if (score > best) setBest(score);
  }, [score]);

  //Increase state variables
  function upClickedCards(amount: number): void {
    setClickedCards((prevAmount) => prevAmount + amount);
  }

  function upScore(amount: number): void {
    setScore((prevScore) => prevScore + amount);
  }

  function upLevel(amount: number): void {
    setLevel((prevLevel) => prevLevel + amount);
  }

  //Reset all necessary state variables on game over
  function loseGame() {
    setLevel(0);
    setScore(0);
    setClickedCards(0);
    setLoaded(false);
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
        <Counter text='BEST SCORE' value={best} />
      </div>
      <div id='card-container'>{deck}</div>
    </div>
  );
}

export default App;
