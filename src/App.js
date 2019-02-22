import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import UserPanel from './components/UserPanel';
import LoginPanel from './components/LoginPanel';
import firebaseConfig from './firebaseConfig';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithFacebook,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {user
            ? <UserPanel
              user={user}
              signOut={signOut}
            />
            :
            <LoginPanel
              signInFacebook={signInWithFacebook}
              signInGoogle={signInWithGoogle}
            />
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
