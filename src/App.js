import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './icon/logo.svg';
import facebook_logo from './icon/facebook.svg';
import google_logo from './icon/google.png';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
 
  state = {
    user: {}
  };
  
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithFacebook,
    } = this.props;
    
    const loginFacebook = () => signInWithFacebook();

    const loginGoogle = () => signInWithGoogle();
    
    return (
      <div className="App">
        <header className="App-header">
          {
            user 
            ? 
            <div className="user-panel">                  
                  <img className="user-photo" src={user.photoURL} alt='url_foto' />
                  <p>Hello, {user.displayName}</p>
                  <p className="minitext">Logado via {(user.providerData[0].providerId)}</p>          
                  <button onClick={signOut}>Sign out</button>   
                </div>
              :                 
              <div>
              <img src={logo} className="App-logo" alt="logo" />          
                <p>Choose below your sign in method.</p>
                <button className="login-button" onClick={loginFacebook}><img className="App-icon" src={facebook_logo} alt='facebook' /></button>
                <button className="login-button" onClick={loginGoogle}><img className="App-icon" src={google_logo} alt='facebook' /></button>                            
              </div>             
              }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
