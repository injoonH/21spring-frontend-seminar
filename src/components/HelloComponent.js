import React from 'react'

const HelloComponent = (props) => {
  const onClickHandler = () => {
    alert('Click!');
  }

  return <button onClick={onClickHandler}>Hello</button>
}

export default HelloComponent;
