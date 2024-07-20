import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData,
        { withCredentials: true }
      );
      console.log("Signup response:", response);
      alert(response.data.message);
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("Signin form submitted", {
      email: formData.email,
      password: formData.password,
    });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email: formData.email, password: formData.password },
        { withCredentials: true }
      );
      console.log("Signin response:", response);
      alert(response.data.message);
    } catch (error) {
      console.error("Signin error:", error);
      alert(error.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="Login-Form">
      <div
        className={`container-log ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container-log"
      >
        <div className="form-container-log sign-up-container-log">
          <form className="logform" onSubmit={handleSignUp}>
            <div className="head1">Create Account</div>
            <div className="social-container-log">
              <a href="#" className="social-log links">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-log links">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social-log links">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="span">or use your email for registration</span>
            <input
              className="loginput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="loginput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="loginput"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="log">Sign Up</button>
          </form>
        </div>
        <div className="form-container-log sign-in-container-log">
          <form className="logform" onSubmit={handleSignIn}>
            <div className="head1">Sign in</div>
            <div className="social-container-log">
              <a href="#" className="social-log links">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-log links">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social-log links">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="span">or use your account</span>
            <input
              className="loginput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="loginput"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <a href="#" className="links">
              Forgot your password?
            </a>
            <button className="log">Sign In</button>
          </form>
        </div>
        <div className="overlay-container-log">
          <div className="overlay-log">
            <div className="overlay-panel-log overlay-left-log">
              <h1 className="headnew">Welcome Back!</h1>
              <p className="login">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost-log"
                id="signIn"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel-log overlay-right-log">
              <h1 className="headnew">Hello, Friend!</h1>
              <p className="login">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost-log"
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;