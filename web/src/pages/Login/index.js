import React, { useState } from 'react'
import security from '../../assets/img/login/security.svg'
import styled from 'styled-components'
import axios from 'axios'
import { setToken } from '../../store/actions/UserAction'
import { connect } from 'react-redux'
import {ErrorMessage} from '../../components/ErrorMessage'

function Login(props) {
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
        <Wrapper>
            <div className="img_div">
                <div className="security_img">
                    <img src={security} />
                </div>
                <div className="form-login">
                    <div className="inputs-login">
                        <div className="field">
                            <label className="label">E-mail</label>
                            <div className="control">
                                <input
                                    className="input is-small"
                                    type="text"
                                    onChange={(evt) => setEmail(evt.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    className="input is-small"
                                    type="password"
                                    onChange={(evt) => setPassword(evt.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <a href='#'>{props.user.token || ''}</a>
                            <button 
                                className="button is-success is-small"
                                onClick={()=> login()}
                                >
                                    Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: white;


    .img_div{
        height: 45%;
        width: 35%;
        background-color: #f6f8fa;
        border: 2px solid #eaecef;
        border-radius: 5px;
        opacity: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;

        &>div{
            width: 50%;
            height: 100%;
        }
    }

    .security_img{
        display:flex;
    }

    .field{
        display: flex;
    flex-wrap: wrap;
    }

    .control{
        width: 100%;
    }
    
    .form-login{
        display: flex;
        align-items: center;
    }
    
`


const mapStateToProps = (state) => ({
    user: state.UserReducer
  })
  
  
  
const mapDispatchToProps = (dispatch) => ({
    setToken: (token) => dispatch(setToken(token))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)