import { useState } from 'react';
import '../styles/Card.css';

function Card(props: { img: string; name: string; clicked: Function }) {
  const { img, name, clicked } = props;
  const [wasClicked, setWasClicked] = useState(false);

  //Sends false when clicked for the first time and true for the second
  function handleClick() {
    clicked(wasClicked);
    setWasClicked(true);
  }

  return (
    <div onClick={handleClick} className='card'>
      <img src={img} alt={name + ' character art'} className='card-img' />
      <div className='card-text'>{name}</div>
    </div>
  );
}

export default Card;
