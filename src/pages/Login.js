import React from 'react';
import Header from '../components/Header';
import '../css/user.css';

function Login() {
  return (
    <section className="user_container">
      <Header value="Sign Up" />
      <div className="Login v-flex">
        <form className="form_container">
          <h1 className="title_">
            Sign In
          </h1>
          <fieldset className="form_inputs">
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />
            <input className="sign_btn cr" type="submit" value="Sign In" />
            <input className="signup_btn cr" type="button" value="Sign Up" />
          </fieldset>
          <div className="other_field color">
            <div className="remember_box flex" style={{ gap: '5px' }}>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div className="password-box">
              <button type="button" className="help_btn cr color">
                Forgot password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
