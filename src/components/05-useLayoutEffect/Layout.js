import React, { useLayoutEffect, useRef, useState } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const [{ width, height }, setBoxSize] = useState({ width: 0, height: 0 });

  if(counter <= 0) reset();

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  // !data -> !undefined -> true
  // !true -> false
  const { author, quote } = !!data && data[0];

  const paragraph = useRef();

  useLayoutEffect(() => {
    //console.log('hey!');
    //console.log(paragraph.current.getBoundingClientRect())
    const { width, height } = paragraph.current.getBoundingClientRect();
    //console.log(width, height)
    setBoxSize({ width, height });
  }, [quote]);

  return(
    <>
      <h1>BreakingBad Quotes With LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p
          ref={paragraph}
          className="mb-0"
        >
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <pre>
        <p>width: {width}, height: {height}</p>
      </pre>
      { !loading &&
        <div className="wraper-buttons">
          { counter > 1 &&
            <button
              className="btn btn-info"
              onClick={() => decrement()}
            >
              Back quote
            </button>
          }
          <button
            className="btn btn-warning"
            onClick={() => increment()}
          >
            Next quote
          </button>
        </div>
      }
    </>
  );
}

