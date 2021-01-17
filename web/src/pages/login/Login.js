import React, { useState } from 'react'
import security from '../../assets/img/login/security.svg'
import './Login.scss';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    return (
        <>
            <span className="login-bg" />
            <div className="login">
                <div className="login-inputs">
                    <h2 className="login-title">LOGIN</h2>
                    <img src={security} alt="security" />
                    <div className="login-input-group">
                        <label>Username:</label>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Input your username" 
                            value={username}
                            onChange={e => setUsername(e.target.value)} 
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
                        />
                    </div>
                    <button disabled={!(username && password)} className="button is-dark">LOGIN</button>
                    <h4 className="login-forgot">Forgot password? Click <a href="!#">here</a></h4>
                </div>
            </div>
        </>
    )
};

export default Login;
