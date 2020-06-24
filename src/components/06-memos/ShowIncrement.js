import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {
  console.log('I called back!!! :"-(');
  return(
    <button
      className="btn btn-warning"
      onClick={() => increment(5)}
    >
      +1
    </button>
  );
});

