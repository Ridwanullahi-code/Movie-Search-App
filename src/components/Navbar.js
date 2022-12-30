import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TodoList from './TodoList';
import getData from '../functions/fetchData';
import Filter from '../functions/filter';

import '../css/navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  const [hide, handleHide] = useState(false);
  const [arrow, handleArrow] = useState(false);
  const [change, setChange] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('data.json', setData);
  }, []);

  const result = change && data.length > 0 ? Filter(data, change) : data;

  const arrowHandler = () => {
    handleArrow(!arrow);
    handleHide(!hide);
  };
  const hideHandler = () => {
    handleHide(!hide);
    handleArrow(!arrow);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setChange(e.target.value);
  };

  const handleClear = () => {
    const search = document.querySelector('.search_bar');
    if (search) {
      search.value = '';
    }
    setChange(!change);
  };

  const message = document.querySelector('.modal_popup');
  if (change === '') {
    if (message) {
      message.style.display = 'none';
    }
  }

  return (
    <header>
      <button
        type="button"
        className={`hamburger ${hide && 'hide'}`}
        onClick={() => {
          handleShow(!show);
        }}
      >
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
      <div>
        <div className={`v-flex search_option ${hide && 'show_hide'}`}>
          <div className={`search v-flex ${!arrow && 'width'}`}>
            <input
              type="text"
              className="search_bar"
              placeholder="Search"
              onChange={handleChange}
            />
            {change && (
            <button type="button" className="clear_btn cr" onClick={handleClear}>
              <i className="fa-solid fa-xmark" />
            </button>
            )}
            <button type="button" className="search_btn cr">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <div className="audio_search cr">
            <i className="fa-solid fa-microphone mic" />
          </div>
        </div>
        {change && <TodoList data={result} />}
      </div>

      <button
        type="button"
        className={`glass_lens cr ${hide && 'hide'}`}
        onClick={hideHandler}
      >
        <i className="fa-solid fa-magnifying-glass" />
      </button>
      <div className={`user v-flex ${!arrow && 'show_hide'}`}>
        <NavLink to="/sign_up" className="nav_link">Sign</NavLink>
        <NavLink to="/login_in" className="nav_link">Login</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
