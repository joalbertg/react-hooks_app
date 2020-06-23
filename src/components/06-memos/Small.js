import React, { memo } from 'react';

export const Small = memo(({value}) => {
  console.log('I called back!!! :-(');
  return(
    <small>{value}</small>
  );
})

