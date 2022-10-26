import React from 'react';

function Counter(props: { text: string; value: number }) {
  const { text, value } = props;

  return (
    <div>
      {text}: {value}
    </div>
  );
}

export default Counter;
