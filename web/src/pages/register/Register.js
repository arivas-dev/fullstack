import { Link } from 'react-router-dom';
import React from 'react'
import './Register.scss';
import SignUp from 'assets/img/login/signup.svg';

const Register = () => {
  return (
    <>
      <span className="register-bg" />
      <div className="register">
        <h1 className="register-title">Register</h1>
        <img className="register-picture" src={SignUp} alt="Signup" />

        <div className="register-group">
          <label>Birthdate</label>
          <input className="input" type="date" placeholder="Input your birthdate" />
        </div>

        <div className="register-group">
          <div className="register-group-item">
            <label>Name</label>
            <input className="input" type="text" placeholder="Input your name" />
          </div>
          <div className="register-group-item">
            <label>Phone number</label>
            <input className="input" type="text" placeholder="Input your phone number" />
          </div>
        </div>
        
        <div className="register-group">
          <div className="register-group-item">
            <label>Username</label>
            <input className="input" type="text" placeholder="Input your username" />
          </div>
          <div className="register-group-item">
            <label>Email</label>
            <input className="input" type="email" placeholder="Input your email" />
          </div>
        </div>

        <div className="register-group">
          <div className="register-group-item">
            <label>Password</label>
            <input className="input" type="password" placeholder="Input your password" />
          </div>
          <div className="register-group-item">
            <label>Confirm password</label>
            <input className="input" type="password" placeholder="Confirm your password" />
          </div>
        </div>

        <div className="register-buttons">
          <button  
              className="button is-dark"
          >
              SIGN UP
          </button>
          <Link className="button is-info" to="/login">
              LOGIN
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register;
