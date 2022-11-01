import '../styles/Card.css';

function Card(props: { img: string; name: string; clicked: Function }) {
  const { img, name, clicked } = props;

  return (
    <div onClick={() => clicked(name)} className='card'>
      <img src={img} alt={name + ' character art'} className='card-img' />
      <div className='card-text'>{name}</div>
    </div>
  );
}

export default Card;
