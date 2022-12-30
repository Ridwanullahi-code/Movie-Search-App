import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Button({ value }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${value === 'Sign Up' ? '/login_in' : '/sign_up'}`);
  };

  return (
    <div>
      <button
        type="button"
        className="user_btn cr"
        onClick={handleClick}
      >
        {value}
      </button>
    </div>
  );
}

// props validation should be proTypes
Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
