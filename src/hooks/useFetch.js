import {useState, useEffect } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    setState(currentState => ({ ...currentState, loading: true }));
    fetch(url)
      .then(resp => resp.json())
      .then(data => setState(currentState => ({
        ...currentState,
        loading: false,
        data
      })));
  },[url]);

  return state;
}

