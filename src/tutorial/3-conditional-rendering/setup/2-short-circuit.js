import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'default text'}</h1>
      <button className='btn' onClick={() => setError(!error)}>
        toggle error
      </button>
      {error && <h1>error...</h1>}
    </>
  );
};

export default ShortCircuit;
