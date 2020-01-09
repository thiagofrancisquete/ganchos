import React, { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentF() {
  const countCountext = useContext(CountContext);
  return (
    <div>
      Componente F
      <button onClick={() => countCountext.countDispatch('increment')}>
        increment
      </button>
      <button onClick={() => countCountext.countDispatch('decrement')}>
        decrement
      </button>
      <button onClick={() => countCountext.countDispatch('reset')}>
        reset
      </button>
    </div>
  );
}

export default ComponentF;
