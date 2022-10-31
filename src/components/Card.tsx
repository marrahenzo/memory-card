import '../styles/Card.css';

function Card(props: {
  img: string;
  name: string;
  clicked: Function;
  id: string;
}) {
  const { img, name, clicked, id } = props;

  return (
    <div onClick={() => clicked(id)} className='card'>
      <img src={img} alt={name + ' character art'} className='card-img' />
      <div className='card-text'>{name}</div>
    </div>
  );
}

export default Card;
