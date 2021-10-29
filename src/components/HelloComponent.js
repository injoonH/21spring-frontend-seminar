import React from 'react'

const HelloComponent = () => {
  const onClickHandler = () => {
    alert('Click!');
  }
  return <button onClick={onClickHandler}>Hello</button>;
}

export default HelloComponent;
