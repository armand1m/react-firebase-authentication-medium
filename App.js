import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'

// Removing these imports with the pull request

// import firebase from 'firebase/app'; 
// import 'firebase/auth'; 

// With the above imports, I received the following error
// Attempted import error: 'initializeApp' is not exported from 'firebase/app' (imported as 'firebase').

// By then adding these imports, I successfully restored compatability
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
