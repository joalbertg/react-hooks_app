import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import './memo.css';

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);

  return(
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>Counter <Small value={counter}/></h2>
 
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

