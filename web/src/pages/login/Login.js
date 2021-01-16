import React, { useState } from 'react'
import security from '../../assets/img/login/security.svg'
import axios from 'axios'
import { setToken } from '../../store/actions/UserAction'
import { connect } from 'react-redux'
import {ErrorMessage} from '../../components/ErrorMessage'
import './Login.scss';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = async () => {
        try {
            const {data: {token}} = await axios.post('http://127.0.0.1:8000/api/v1/login',{email,password})

            props.setToken(token)
        } catch (error) {
            const { response } = error
            ErrorMessage(response)
        }
    }


    return (
        <>
            <span className="login-bg" />
            <div className="login">
                <div className="login-picture">
                    <img src={security} alt="security" />
                </div>
                <div className="login-inputs">
                    <h2 className="login-title">LOGIN</h2>
                    <div className="login-input-group">
                        <label>Username:</label>
                        <input class="input" type="text" placeholder="Input your username"></input>
                    </div>
                    <div className="login-input-group">
                        <label>password:</label>
                        <input class="input" type="text" placeholder="Input your password"></input>
                    </div>
                    <h4 className="login-forgot">Forgot password? Click <a href="!#">here</a></h4>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    user: state.UserReducer,
})
const mapDispatchToProps = (dispatch) => ({
    setToken: (token) => dispatch(setToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
