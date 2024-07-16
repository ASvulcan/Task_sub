// src/Login.js
import React from 'react';
import { auth, googleProvider, facebookProvider } from '../firebase';
import './Login.css';

const Login = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };

  const signInWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).catch(alert);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>or</p>
        <button onClick={signInWithGoogle}>Login with Google</button>
        <button onClick={signInWithFacebook}>Login with Facebook</button>
        <p>Don't have an account? <a href="#" onClick={handleSignUp}>Create one</a></p>
      </div>
    </div>
  );
};

export default Login;
