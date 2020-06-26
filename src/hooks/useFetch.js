import {useState, useEffect, useRef } from 'react';

export const useFetch = url => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState(currentState => ({ ...currentState, loading: true }));
      fetch(url)
        .then(resp => resp.json())
        .then(data => {

          //setTimeout(() => {

          // para setear el estado de manera segura
          if(isMounted.current) {
            setState(currentState => ({
              ...currentState,
              loading: false,
              data
            }));
          } else {
            console.log('setState not was called!!!');
          }

        //}, 2000);

        })
        .catch(() => {
          setState({
            data: null,
            loading: false,
            error: 'Request not found.'
          });
        });
  },[url]);

  return state;
}

