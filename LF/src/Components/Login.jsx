import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className="Login-Form">
    <div className={`container-log ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container-log">
      <div className="form-container-log sign-up-container-log">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container-log">
            <a href="#" className="social-log"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-log"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social-log"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='log'>Sign Up</button>
        </form>
      </div>
      <div className="form-container-log sign-in-container-log">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container-log">
            <a href="#" className="social-log"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-log"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social-log"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button className='log'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container-log">
        <div className="overlay-log">
          <div className="overlay-panel-log overlay-left-log">
            <h1>Welcome Back!</h1>
            <p className='login'>To keep connected with us please login with your personal info</p>
            <button className="ghost-log" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel-log overlay-right-log">
            <h1>Hello, Friend!</h1>
            <p className='login'>Enter your personal details and start journey with us</p>
            <button className="ghost-log" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
