import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import logo from '../Movie_logo.png';

function Header({ value }) {
  return (
    <div className="other_navbar">
      <NavLink to="/">
        <img
          src={logo}
          className="web_logo"
          alt="logo"
        />
      </NavLink>
      <Button value={value} />
    </div>
  );
}

// props validation should be proTypes
Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
