import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

import './memo.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return(
    <>
      <h1>MemoHook</h1>
      <hr />
      <h2>Counter <small>{counter}</small></h2>

      <p>{ memoHeavyProcess }</p>
      <button
        className="btn btn-info"
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className="btn btn-warning ml-5"
        onClick={() => setShow(!show)}
      >
        Show/Hiden { JSON.stringify(show) }
      </button>
    </>
  );
}

