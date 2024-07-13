import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formType, setFormType] = useState('sign-in');

  const handleSwitch = () => {
    setFormType(formType === 'sign-in' ? 'sign-up' : 'sign-in');
  };

  const isSignUp = formType === 'sign-up';

  return (
    <div className="Form-login">
      <div className={`container-login ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
          <form className='login-form' action="#">
            <h1>{isSignUp ? 'Create Account' : 'Sign in'}</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>{isSignUp ? 'or use your email for registration' : 'or use your account'}</span>
            {isSignUp && <input type="text" className="input-field" placeholder="Name" />}
            <input type="email" className="input-field" placeholder="Email" />
            <input type="password" className="input-field" placeholder="Password" />
            {!isSignUp && <a href="#" className="forgot-password">Forgot your password?</a>}
            <button className='signbutton' type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel ${isSignUp ? 'overlay-right' : 'overlay-left'}`}>
              <h1>{isSignUp ? 'Hello, Friend!' : 'Welcome Back!'}</h1>
              <p>{isSignUp ? 'Enter your personal details and start journey with us' : 'To keep connected with us please login with your personal info'}</p>
              <button className="ghost" onClick={handleSwitch}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
