import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react'
import './Register.scss';
import SignUp from 'assets/img/login/signup.svg';
import { registerExternalUser } from 'store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { message } from '../../../node_modules/antd/lib/index';

const Register = () => {
  const [state, setState] = useState({})
  const dispatch = useDispatch();

  const loginNode = useSelector(s => s.user.login);
  const { isLoading, data } = loginNode;


  const handleChange = evt => {
    const { name, value } = evt.target;
    setState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (state.password !== state.password_confirmation) {
      return message.error('Password must be the same');
    }
    onSave(state);
  };

  const onSave = async (user) => {
    await dispatch(registerExternalUser(user, 1));
  }

  console.log("🚀 ~ file: Register.js ~ line 38 ~ Register ~ data", data)
  if (data) {
    return <Redirect to="/dashboard" />
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="register-bg" />
        <div className="register">
          <h1 className="register-title">Register</h1>
          <img className="register-picture" src={SignUp} alt="Signup" />

          <div className="register-group">
            <label>Birthdate</label>
            <input
              className="input"
              type="date"
              placeholder="Input your birthdate"
              onChange={handleChange}
              name="date_of_birth"
              value={state.date_of_birth}
              required />
          </div>

          <div className="register-group">
            <div className="register-group-item">
              <label>Name</label>
              <input
                className="input"
                type="text"
                placeholder="Input your name"
                onChange={handleChange}
                maxLength="30"
                name="name"
                value={state.name}
                required />
            </div>
            <div className="register-group-item">
              <label>Phone number</label>
              <input
                className="input"
                type="text"
                placeholder="Input your phone number"
                pattern="[2|6|7]{1}[0-9]{7}"
                onChange={handleChange}
                maxLength="8"
                minLength="8"
                name="telephone"
                value={state.telephone}
                required />
            </div>
          </div>

          <div className="register-group">
            <div className="register-group-item">
              <label>Username</label>
              <input
                className="input"
                type="text"
                placeholder="Input your username"
                onChange={handleChange}
                maxLength="10"
                name="username"
                value={state.username}
                required />
            </div>
            <div className="register-group-item">
              <label>Email</label>
              <input
                className="input"
                type="email"
                placeholder="Input your email"
                onChange={handleChange}
                name="email"
                value={state.email}
                required />
            </div>
          </div>

          <div className="register-group">
            <div className="register-group-item">
              <label>Password</label>
              <input
                className="input"
                type="password"
                placeholder="Input your password"
                onChange={handleChange}
                maxLength="10"
                name="password"
                value={state.password}
                required />
            </div>
            <div className="register-group-item">
              <label>Confirm password</label>
              <input
                className="input"
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange}
                maxLength="10"
                name="password_confirmation"
                value={state.password_confirmation}
                required />
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
      </form>

    </>
  )
}

export default Register;
