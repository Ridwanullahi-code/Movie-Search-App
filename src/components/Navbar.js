import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  const [hide, handleHide] = useState(false);
  const [arrow, handleArrow] = useState(false);

  const arrowHandler = () => {
    handleArrow(!arrow);
    handleHide(!hide);
  };
  const hideHandler = () => {
    handleHide(!hide);
    handleArrow(!arrow);
  };

  return (
    <header>
      <button type="button" className={`hamburger ${hide && 'hide'}`} onClick={() => { handleShow(!show); }}>
        <i className="fa-sharp fa-solid fa-bars" />
      </button>
      <button type="button" className={`arrow cr ${hide && 'show_hide'}`} onClick={arrowHandler}>
        <i className="fa-solid fa-arrow-left" />
      </button>
      <nav className="navbar flex">
        <ul className={`nav_items ${show && 'show'}`}>
          <li className="nav_item">
            <NavLink className="nav_link" to="/">
              <i className="fa-solid fa-house" />
              Home
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/movies" className="nav_link">
              <i className="fa-solid fa-video" />
              Movies
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/tv_shows" className="nav_link">
              <i className="fa-solid fa-tv" />
              Tv Shows
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink className="nav_link">
              <i className="fa-solid fa-thumbs-up" />
              Liked Videos
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink className="nav_link">
              <i className="fa-solid fa-clock" />
              {' '}
              Watch Later
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={`v-flex search_option ${hide && 'show_hide'}`}>
        <div className={`search v-flex ${!arrow && 'width'}`}>
          <input type="text" className="search_bar" placeholder="Search" />
          <button type="button" className="search_btn cr">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className="audio_search cr">
          <i className="fa-solid fa-microphone mic" />
        </div>
      </div>
      <button type="button" className={`glass_lens cr ${hide && 'hide'}`} onClick={hideHandler}>
        <i className="fa-solid fa-magnifying-glass" />
      </button>
      <div className={`user v-flex ${!arrow && 'show_hide'}`}>
        <NavLink className="nav_link">Sign</NavLink>
        <NavLink className="nav_link">Login</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
