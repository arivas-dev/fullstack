import { login } from 'store/actions/userActions';
import { messages } from 'constants/messages';
import security from 'assets/img/login/security.svg'
import { Link, Redirect } from 'react-router-dom';
import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMessenger } from 'hooks/useMessenger';
import './Login.scss';

const Login = () => {
    const btnRef = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const loginNode = useSelector(s => s.user.login);
    const { isLoading, data } = loginNode;
    const dispatch = useDispatch();
    useMessenger(loginNode, messages.auth.login);

    const handleSubmit = () => {
        dispatch(login({ email, password }));
    };

    const handleKey = evt => {
        if (evt.keyCode === 13 && btnRef.current) {
            btnRef.current.click();
        }
    }

    if (data) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <span className="login-bg" />
            <div className="login">
                <div className="login-inputs">
                    <h2 className="login-title">LOGIN</h2>
                    <img src={security} alt="security" />
                    <div className="login-input-group">
                        <label>email:</label>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Input your email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="login-input-group">
                        <label>password:</label>
                        <input 
                            className="input" 
                            type="password"
                            placeholder="Input your password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={handleKey}
                        />
                    </div>
                    <div className="login-buttons">
                        <button 
                            ref={btnRef}
                            disabled={!(email && password) || isLoading} 
                            className={`button is-dark ${isLoading ? 'is-loading' : ''}`}
                            onClick={handleSubmit}
                        >
                            LOGIN
                        </button>
                        <Link className="button is-info" to="/register">
                            REGISTER
                        </Link>
                    </div>
                    <h4 className="login-forgot">Forgot password? Click <a href="!#">here</a></h4>
                </div>
            </div>
        </>
    )
};

export default Login;
