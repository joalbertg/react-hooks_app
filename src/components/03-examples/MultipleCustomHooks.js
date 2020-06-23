import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './hooks.css';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  if(counter <= 0) reset();

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  // !data -> !undefined -> true
  // !true -> false
  const { author, quote } = !!data && data[0];

  return(
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      { loading ?
          <div className="alert alert-info text-center">
            Loading...
          </div>
        :
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
      }
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

