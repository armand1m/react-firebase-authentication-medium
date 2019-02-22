import React from 'react';
import './index.css';
import logo from '../../icon/logo.svg';
import google_logo from '../../icon/google.png';
import facebook_logo from '../../icon/facebook.svg';

const LoginPanel = ({signInFacebook, signInGoogle}) => (
    <div>
        <img src={logo} className="App-logo" alt="logo" />          
        <p>Choose below your sign in method.</p>
        <button className="login-button"
                onClick={signInFacebook}>
                    <img className="App-icon"
                         src={facebook_logo}
                         alt='facebook'
                    />
        </button>
        <button className="login-button"
                onClick={signInGoogle}>
                    <img className="App-icon"
                        src={google_logo} 
                        alt='facebook' 
                    />
        </button>                                                
    </div>
);

export default LoginPanel;
