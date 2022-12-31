import React, { useState } from 'react';
import google from '../google.png';
import Header from '../components/Header';

function Register() {
  const [page, nextPage] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    nextPage(page + 1);
  };

  return (
    <section className="user_container">
      <Header value="Sign In" />
      <div className="Login v-flex">
        <form className="form_container" method="POST">
          <h1>Sign Up</h1>
          <fieldset className="form_inputs">
            {page === 0 && <input className="input" type="text" placeholder="First Name" required />}
            {page === 0 && <input className="input" type="text" placeholder="Last Name" required />}
            {page === 1 && <input className="input" type="email" placeholder="Email" required />}
            {page === 1 && <input className="input" type="text" placeholder="Username" required />}
            {page === 2 && <input className="input" type="password" placeholder="Create password" required />}
            {page === 2 && <input className="input" type="password" placeholder="Confirm password" required />}
          </fieldset>
          {page === 2 && (
          <div className="checkbox gap">
            <input type="checkbox" />
            <span>I accept all terms and conditions</span>
          </div>
          )}
          <input
            className="sign_btn"
            type="submit"
            value={`${page === 2 ? 'Register Now' : 'Continue'}`}
            onClick={handleNext}
          />
          <div className="alternative">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <button type="button" className="login_with_google flex">
            <img src={google} alt="register with google" className="google_logo" />
            <span>Register with Google</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
