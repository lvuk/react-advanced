import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');

  const handleClick = () => {
    if (title === 'random title') setTitle('hello world');
    else setTitle('random title');
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' onClick={handleClick} className='btn'>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
