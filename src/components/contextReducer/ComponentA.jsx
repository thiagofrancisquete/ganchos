import React, { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Compoenent A
      <button onClick={() => countContext.countDispatch('increment')}>
        increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>reset</button>
    </div>
  );
}

export default ComponentA;
