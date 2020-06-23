import React, { useRef } from 'react';

import './focus.css';

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    //document.querySelector('input').select();
    //console.log(inputRef)
    inputRef.current.select();
  }

  return(
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Your name"
      />
      <button
        className="btn btn-info mt-2"
        onClick={handleClick}
      >
        Focus
      </button>
    </>
  );
}

