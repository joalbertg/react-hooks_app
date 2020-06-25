import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './styles.css';

export const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link
        className="navbar-brand"
        to="/"
      >
          useContex
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/*
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          */}

          { /* para poder usar la clase active,
               el Link y el NavLink son exactamente iguales,
               solo que con el NavLink se puede establecer una 
               clase cuando el link corresponde
          */ }
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

