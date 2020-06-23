import React from 'react';

import { useCounter } from '../../hooks/useCounter';

import './counter-app.css';

export const CounterWithCustomHook = () => {
  const factor = 7;
  const { counter, increment, decrement, reset } = useCounter(100);

  return(
    <>
      <h2>Counter { counter }</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => increment(factor)}
      >
        +{factor}
      </button>
      <button
        className="btn btn-info"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="btn btn-warning"
        onClick={() => decrement(factor)}
      >
        -{factor}
      </button>

    </>
  );
}

