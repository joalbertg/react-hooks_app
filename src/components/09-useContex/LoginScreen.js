import React, { useContext } from 'react';

import { UserContext } from './UserContext';

import './styles.css';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleUser = () => {
    setUser({
      id: new Date().getTime(),
      name: 'joalbert',
      email: 'joalbertgonzalez@gmail.com'
    });
  }

  return(
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="btn btn-info"
        onClick={handleUser}
      >
        Login
      </button>
    </>
  );
}
