import React, { useState, useCallback } from 'react';

import { ShowIncrement } from './ShowIncrement';

import './memo.css';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);
  //const increment = () => setCounter(counter + 1);
  const increment = useCallback((num = 1) => {
    setCounter(currentCounter => currentCounter + num);
  }, [setCounter]);

  // otro caso podria ser el useEffect
  // si su dependencia es una funcion
  //useEffect(() => {
  //  // ???
  //}, [increment]);

  return(
    <>
      <h1>CallbackHook</h1>
      <hr />

      <p>Counter: {counter}</p>
      <ShowIncrement increment={increment}/>
    </>
  );
}

