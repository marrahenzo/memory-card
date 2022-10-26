import '../styles/Counter.css';

function Counter(props: { text: string; value: number }) {
  const { text, value } = props;

  return (
    <div className='counter'>
      {text}: {value}
    </div>
  );
}

export default Counter;
