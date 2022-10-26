import React, { useState } from 'react';
import '../styles/Card.css';

function Card(props: { img: string; name: string; lose: Function }) {
  const [clicked, setClicked] = useState(false);
  const { img, name, lose } = props;

  function handleClick() {
    if (!clicked) setClicked(true);
    else lose();
  }

  return (
    <div onClick={handleClick} className='card'>
      <img src={img} alt={name + ' character art'} className='card-img' />
      <div className='card-text'>{name}</div>
    </div>
  );
}

export default Card;
