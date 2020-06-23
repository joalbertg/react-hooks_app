import React, { useState } from 'react';

import './counter-app.css';

export const CounterApp = () => {
  const [{counter1, counter2}, setCount] = useState({counter1: 10, counter2: 20});
  const handlerAdd = () => setCount(counters => ({...counters, counter1: counter1 + 1}));

  return(
    <>
      <h2>Counter1 { counter1 }</h2>
      <h2>Counter2 { counter2 }</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handlerAdd}
      >
        +1
      </button>
    </>
  );
}

