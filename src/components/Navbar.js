import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="web-logo" to="/">React Todo List</Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
