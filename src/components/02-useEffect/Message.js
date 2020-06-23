import React, { useState, useEffect } from 'react';

//Consumo de memoria al no desmontar el evento
//por cada vez que se monta el hook
//export const Message = () => {
//  useEffect(() => {
//    console.log('Component did mount');
//    window.addEventListener('mousemove', ({x, y}) => {
//      console.log({x, y});
//    });

//    return () => {
//      console.log('Component dismount');
//    }
//  }, []);

//  return(
//    <>
//      <h3>{"You're great!!!"}</h3>
//    </>
//  );
//}

export const Message = () => {
  const [{x, y}, setState] = useState({x: 0, y: 0});
  const mouseMove = ({x, y}) => setState({x, y});
  useEffect(() => {
    console.log('Component did mount');
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('Component dismount');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return(
    <>
      <h3>{"You're great!!!"}</h3>
      <p>x:{x} y:{y}</p>
    </>
  );
}

