import React, { useCallback } from 'react';

import { Hijo } from './Hijo';
import { useState } from 'react';

import './styles.css';

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(num => {
    setValor(currentVal => currentVal + num)
  }, [setValor]);

  return (
    <>
      <h1>Padre</h1>
      <hr />

      <p> Total: { valor } </p>
      {
        numeros.map( n => (
          <Hijo 
            key={ n }
            numero={ n }
            incrementar={ incrementar }
          />
        ))
      }
      {/* <Hijo /> */}
    </>
  )
}

