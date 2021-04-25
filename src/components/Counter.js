import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  // const tmp = useState(0);
  // const count = tmp[0];
  // const setCount = tmp[1];

  console.log('render');

  const decrement = () => {
    setCount(count - 1);
  }

  const increment =() => {
    setCount(count + 1);
  }

  return (
    <div className='counter'>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;
